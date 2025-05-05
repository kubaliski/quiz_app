/**
 * Servicios para gestionar el Service Worker y la caché de la aplicación.
 * Proporciona funciones para detectar actualizaciones, aplicarlas y limpiar la caché.
 *
 * @module swService
 */

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

          // Recargar la página para usar la nueva versión
          window.location.reload();
          return true;
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
   * Registra un evento para manejar actualizaciones del Service Worker
   * @function registerSWUpdateHandler
   * @param {Function} onUpdateFound - Callback a ejecutar cuando se encuentra una actualización
   * @returns {Function} Función para cancelar el registro
   */
  export const registerSWUpdateHandler = (onUpdateFound) => {
    if (!('serviceWorker' in navigator)) {
      return () => {}; // No-op si no hay soporte para SW
    }

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

    // Programar comprobaciones periódicas
    const interval = setInterval(() => {
      navigator.serviceWorker.getRegistration().then(registration => {
        if (registration) {
          registration.update();
        }
      });
    }, 60 * 60 * 1000); // Comprobar cada hora

    // Devolver función para limpiar
    return () => {
      clearInterval(interval);
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