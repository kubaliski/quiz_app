/**
 * Servicios para gestionar el Service Worker y la caché de la aplicación.
 * Proporciona funciones para detectar actualizaciones, aplicarlas y limpiar la caché.
 *
 * @module swService
 */

// Detectar si estamos en desarrollo
const isDevelopment = import.meta.env ? import.meta.env.DEV === true : false;

/**
 * Comprueba si hay actualizaciones disponibles para el Service Worker
 * @async
 * @function checkForUpdates
 * @returns {Promise<boolean>} Promesa que indica si hay actualizaciones
 */
export const checkForUpdates = async () => {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.getRegistration();
        if (registration) {
          // Hay una actualización si existe un worker en waiting
          return !!registration.waiting;
        }
      } catch (error) {
        console.error('Error al comprobar actualizaciones del SW:', error);
      }
    }
    return false;
  };

  /**
   * Aplica las actualizaciones del Service Worker disponibles
   * @async
   * @function applyUpdates
   * @returns {Promise<boolean>} Promesa que indica si se aplicaron actualizaciones
   */
  export const applyUpdates = async () => {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.getRegistration();
        if (registration && registration.waiting) {
          // Comunicar al worker en waiting que debe activarse
          registration.waiting.postMessage({ type: 'SKIP_WAITING' });

          // Esperar a que el nuevo service worker tome el control
          return new Promise((resolve) => {
            // Cuando el controlador cambie (nuevo SW activo), resolver
            navigator.serviceWorker.addEventListener('controllerchange', () => {
              console.log('Nuevo Service Worker activo');
              resolve(true);
            }, { once: true });
          });
        }
      } catch (error) {
        console.error('Error al aplicar actualizaciones del SW:', error);
      }
    }
    return false;
  };

  /**
   * Limpia la caché del Service Worker relacionada con los módulos de la aplicación
   * @async
   * @function clearModulesCache
   * @returns {Promise<boolean>} Promesa que resuelve con true si se limpió la caché correctamente
   */
  export const clearModulesCache = async () => {
    if ('caches' in window) {
      try {
        const cacheKeys = await caches.keys();

        // Filtrar las cachés relacionadas con los módulos de la aplicación
        const moduleCaches = cacheKeys.filter(key =>
          key.includes('quiz-dynamic-modules') ||
          key.includes('quiz-static-resources')
        );

        // Eliminar cada caché encontrada
        await Promise.all(moduleCaches.map(key => caches.delete(key)));

        console.log('Caché de módulos limpiada exitosamente');
        return true;
      } catch (error) {
        console.error('Error al limpiar la caché:', error);
      }
    }
    return false;
  };

  /**
   * Variable global para almacenar el callback de actualización
   * @private
   */
  let _updateCallback = null;

  /**
   * Registra un evento para manejar actualizaciones del Service Worker
   * @function registerSWUpdateHandler
   * @param {Function} onUpdateFound - Callback a ejecutar cuando se encuentra una actualización
   * @returns {Function} Función para cancelar el registro
   */
  export const registerSWUpdateHandler = (onUpdateFound) => {
    if (!('serviceWorker' in navigator)) {
      return () => {}; // No-op si no hay soporte para SW
    }

    // Guardar el callback para usarlo en otras funciones
    _updateCallback = onUpdateFound;

    // Manejador de eventos para detectar actualizaciones
    const handleUpdate = (registration) => {
      // Comprobar si ya hay un worker esperando
      if (registration.waiting) {
        onUpdateFound();
        return;
      }

      // Escuchar eventos de nueva instalación
      const handleUpdateFound = () => {
        const newWorker = registration.installing;

        // Manejador de cambios de estado
        const handleStateChange = () => {
          // Si el nuevo worker está instalado pero esperando activación
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            console.log('Nueva versión disponible!');
            onUpdateFound();
          }
        };

        // Escuchar cambios de estado
        newWorker.addEventListener('statechange', handleStateChange);
      };

      registration.addEventListener('updatefound', handleUpdateFound);
    };

    // Registrar manejadores para workers existentes y futuros
    navigator.serviceWorker.ready.then(handleUpdate);

    // Programar comprobaciones periódicas del service worker
    const swInterval = setInterval(() => {
      navigator.serviceWorker.getRegistration().then(registration => {
        if (registration) {
          registration.update();
        }
      });
    }, 60 * 60 * 1000); // Comprobar cada hora

    // Programar comprobaciones periódicas de version.json solo en producción
    let versionInterval;
    if (!isDevelopment) {
      versionInterval = setInterval(() => {
        checkAppVersionUpdate();
      }, 15 * 60 * 1000); // Comprobar cada 15 minutos
    }

    // Comprobar la versión inmediatamente al iniciar solo en producción
    if (!isDevelopment) {
      checkAppVersionUpdate();
    }

    // Devolver función para limpiar
    return () => {
      _updateCallback = null;
      clearInterval(swInterval);
      if (versionInterval) clearInterval(versionInterval);
    };
  };

  /**
   * Registra un manejador para detectar problemas de carga de módulos
   * @function registerModuleErrorHandler
   * @param {Function} onModuleError - Callback a ejecutar cuando hay un error de carga
   * @returns {Function} Función para cancelar el registro
   */
  export const registerModuleErrorHandler = (onModuleError) => {
    // Manejador para errores de carga de módulos
    const handleModuleError = event => {
      if (event.error && event.error.message &&
          (event.error.message.includes('Failed to fetch dynamically imported module') ||
           event.error.message.includes('ChunkLoadError'))) {

        // Notificar del error
        onModuleError(event.error);

        // Intentar actualizar el SW
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.getRegistration().then(registration => {
            if (registration) {
              registration.update();
            }
          });
        }
      }
    };

    // Registrar manejador de errores global
    window.addEventListener('error', handleModuleError);

    // Devolver función para limpiar
    return () => {
      window.removeEventListener('error', handleModuleError);
    };
  };

  /**
   * Determina si un error está relacionado con problemas de carga de módulos
   * @function isModuleLoadError
   * @param {Error} error - El error a analizar
   * @returns {boolean} True si el error está relacionado con carga de módulos
   */
  export const isModuleLoadError = (error) => {
    if (!error) return false;

    return error.message?.includes('Failed to fetch') ||
      error.message?.includes('Error cargando módulo') ||
      error.message?.includes('No se pudo cargar la asignatura') ||
      error.message?.includes('ChunkLoadError') ||
      error.message?.includes('NetworkError') ||
      !!error.swUpdateAvailable;
  };

  /**
   * Verifica si hay una nueva versión de la app comparando con version.json
   * Limpia caché, fuerza el update y recarga si es necesario.
   * @function checkAppVersionUpdate
   * @returns {Promise<void>}
   */
  export const checkAppVersionUpdate = async () => {
    // No ejecutar en desarrollo para evitar errores
    if (isDevelopment) {
      console.log('Verificación de versión omitida en entorno de desarrollo');
      return;
    }

    try {
      const abortController = new AbortController();
      const timeoutId = setTimeout(() => abortController.abort(), 5000); // 5 segundos de timeout

      const res = await fetch('/version.json', {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        },
        signal: abortController.signal
      });

      clearTimeout(timeoutId);

      if (!res.ok) {
        console.warn('No se pudo obtener version.json (status:', res.status, ')');
        return;
      }

      // Primero obtener el texto para verificar que es un JSON válido
      const text = await res.text();

      // Verificar que tenemos un JSON válido antes de parsearlo
      if (!text || text.trim() === '' || !text.trim().startsWith('{')) {
        console.warn('version.json no contiene un JSON válido:',
          text.length > 50 ? text.substring(0, 50) + '...' : text);
        return;
      }

      // Ahora intentar parsearlo
      const data = JSON.parse(text);

      if (!data.version) {
        console.warn('version.json no contiene una propiedad "version"');
        return;
      }

      const version = data.version;
      const localVersion = localStorage.getItem('app_version');

      // Si no hay versión local guardada, guardamos la actual
      if (!localVersion) {
        localStorage.setItem('app_version', version);
        return;
      }

      // Si la versión cambió, actualizamos la app
      if (localVersion !== version) {
        console.log(`Nueva versión detectada (${localVersion} → ${version})`);

        // Guardar nueva versión localmente
        localStorage.setItem('app_version', version);

        // Notificar al componente que hay una actualización disponible
        if (_updateCallback) {
          _updateCallback();
        }

        // Si estamos en una ruta de módulo, podríamos necesitar recarga inmediata
        const currentPath = window.location.pathname;
        if (currentPath.includes('/quiz/') || currentPath.includes('/asignaturas/')) {
          // Limpiar caché antigua
          await clearModulesCache();

          // Forzar actualización del SW si hay uno esperando
          const updated = await applyUpdates();

          // Si se aplicó la actualización, recargar
          if (updated) {
            window.location.reload(true);
          }
        }
      }
    } catch (error) {
      // Si el error es por timeout o abort, mostrar un mensaje más amigable
      if (error.name === 'AbortError') {
        console.warn('Timeout al intentar obtener version.json');
      } else if (error instanceof SyntaxError) {
        console.warn('Error de sintaxis al parsear version.json');
      } else {
        console.error('Error al comprobar versión de la app:', error);
      }
    }
  };