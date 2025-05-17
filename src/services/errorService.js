/**
 * Servicios para detección y recuperación de errores en la aplicación.
 * Incluye funciones para manejar errores específicos de DOM, scroll y fetch.
 *
 * @module errorService
 */

import { clearModulesCache, applyUpdates, isModuleLoadError } from './swService';
import { showToast } from '@utils/toastUtils';

// Almacén de callbacks para errores
const errorHandlers = [];
// Almacén para errores recientes
const recentErrors = [];
// Contador de errores en ventana de tiempo
let recoveryAttempts = 0;
const MAX_RECOVERY_ATTEMPTS = 3;
const RECOVERY_WINDOW = 60000; // 1 minuto

/**
 * Registra un manejador para cualquier tipo de error en la aplicación
 * @function registerGlobalErrorHandler
 * @param {Function} callback - Función a llamar cuando ocurre un error
 * @returns {Function} Función para cancelar el registro
 */
export function registerGlobalErrorHandler(callback) {
  errorHandlers.push(callback);

  return () => {
    const index = errorHandlers.indexOf(callback);
    if (index > -1) {
      errorHandlers.splice(index, 1);
    }
  };
}

/**
 * Reporta un error a todos los manejadores registrados
 * @function reportError
 * @param {Error} error - Error a reportar
 * @param {string} source - Fuente del error (dom, fetch, react, etc.)
 * @returns {void}
 */
export function reportError(error, source = 'unknown') {
  console.warn(`[ErrorService] Error reportado (${source}):`, error);

  // Registrar el error en el historial reciente
  const timestamp = Date.now();
  recentErrors.push({ error, timestamp, source });

  // Limpiar errores antiguos (más de 5 minutos)
  const OLD_ERROR_THRESHOLD = 5 * 60 * 1000; // 5 minutos
  while (recentErrors.length > 0 && timestamp - recentErrors[0].timestamp > OLD_ERROR_THRESHOLD) {
    recentErrors.shift();
  }

  // Notificar a todos los manejadores registrados
  errorHandlers.forEach(handler => {
    try {
      handler(error, source);
    } catch (handlerError) {
      console.error('[ErrorService] Error en manejador de errores:', handlerError);
    }
  });
}

/**
 * Determina si un error está relacionado con problemas de DOM o scroll
 * @function isDOMRelatedError
 * @param {Error} error - El error a analizar
 * @returns {boolean} True si el error está relacionado con el DOM
 */
export function isDOMRelatedError(error) {
  if (!error) return false;

  const message = error.message || '';
  return message.includes('DOMException') ||
         message.includes('aborted') ||
         message.includes('detached') ||
         message.includes('document') ||
         message.includes('scroll') ||
         message.includes('navigation') ||
         error.name === 'AbortError';
}

/**
 * Intenta recuperar la aplicación de un error
 * @async
 * @function attemptRecovery
 * @param {Error} [error] - Error específico para manejar
 * @returns {Promise<boolean>} Promesa que indica si la recuperación tuvo éxito
 */
export async function attemptRecovery(error) {
  // Evitar demasiados intentos en corto tiempo
  recoveryAttempts++;

  // Si hay muchos intentos en poco tiempo, limitar
  if (recoveryAttempts > MAX_RECOVERY_ATTEMPTS) {
    console.warn(`[ErrorService] Demasiados intentos de recuperación (${recoveryAttempts}). Esperando...`);

    // Notificar al usuario mediante toast
    showToast("Se están realizando múltiples recuperaciones. Puede que necesites recargar manualmente.", "warning");

    // Resetear contador después de un tiempo
    setTimeout(() => {
      recoveryAttempts = 0;
    }, RECOVERY_WINDOW);
    return false;
  }

  // Detectar tipo de error y usar estrategia adecuada
  if (error && isModuleLoadError(error)) {
    console.log('[ErrorService] Detectado error de módulo. Intentando recuperación específica...');
    try {
      // Para errores de módulos, limpiar caché y actualizar SW
      const cacheCleared = await clearModulesCache();
      const swUpdated = await applyUpdates();

      if (cacheCleared || swUpdated) {
        showToast("Actualización aplicada correctamente", "success");
      }

      return true;
    } catch (recoveryError) {
      console.error('[ErrorService] Error durante recuperación de módulo:', recoveryError);
      return false;
    }
  } else if (error && isDOMRelatedError(error)) {
    console.log('[ErrorService] Detectado error de DOM. Intentando recuperación específica...');
    try {
      // Para errores de DOM, intentar limpiar estado del DOM
      const recovered = await recoverDOM();

      if (recovered) {
        // Notificación sutil de recuperación
        showToast("La aplicación se ha recuperado automáticamente", "info");
      }

      return recovered;
    } catch (recoveryError) {
      console.error('[ErrorService] Error durante recuperación de DOM:', recoveryError);
      return false;
    }
  } else {
    console.log('[ErrorService] Intentando recuperación general...');
    // Recuperación general
    try {
      // Cancelar fetches pendientes
      cancelPendingFetches();
      // Intentar recuperar el DOM
      return await recoverDOM();
    } catch (recoveryError) {
      console.error('[ErrorService] Error durante recuperación general:', recoveryError);
      return false;
    }
  }
}

/**
 * Intenta recuperar problemas específicos del DOM
 * @async
 * @function recoverDOM
 * @returns {Promise<boolean>} Promise que indica si la recuperación tuvo éxito
 */
export async function recoverDOM() {
  return new Promise(resolve => {
    try {
      // Técnica 1: Forzar un reflow
      void document.documentElement.offsetHeight;

      // Técnica 2: Modificar temporalmente el CSS para forzar re-render
      const html = document.documentElement;
      const body = document.body;
      const originalStyles = {
        htmlOverflow: html.style.overflow,
        htmlHeight: html.style.height,
        bodyOverflow: body.style.overflow,
        bodyHeight: body.style.height
      };

      // Aplicar cambios para forzar recálculo de layout
      html.style.overflow = 'hidden';
      html.style.height = '99.99%';
      body.style.overflow = 'hidden';
      body.style.height = '99.99%';

      // Pequeño delay y restaurar
      setTimeout(() => {
        html.style.overflow = originalStyles.htmlOverflow;
        html.style.height = originalStyles.htmlHeight;
        body.style.overflow = originalStyles.bodyOverflow;
        body.style.height = originalStyles.bodyHeight;

        // Pequeña corrección de scroll para asegurar que eventos se disparan
        const currentScroll = window.scrollY;
        if (currentScroll > 0) {
          window.scrollTo(0, currentScroll - 1);
          setTimeout(() => {
            window.scrollTo(0, currentScroll);
            resolve(true);
          }, 10);
        } else {
          window.scrollTo(0, 1);
          setTimeout(() => {
            window.scrollTo(0, 0);
            resolve(true);
          }, 10);
        }
      }, 50);
    } catch (error) {
      console.error('[ErrorService] Error durante recuperación del DOM:', error);
      resolve(false);
    }
  });
}

/**
 * Cancela todas las peticiones fetch pendientes
 * @function cancelPendingFetches
 * @returns {void}
 */
export function cancelPendingFetches() {
  if (window._pendingFetches) {
    console.log('[ErrorService] Cancelando peticiones fetch pendientes:', Object.keys(window._pendingFetches).length);
    Object.values(window._pendingFetches).forEach(controller => {
      try {
        controller.abort();
      } catch {
        // Ignorar errores de abort
      }
    });
    window._pendingFetches = {};
  }
}

/**
 * Instala un manejador global para errores no capturados
 * @function installGlobalErrorHandler
 * @returns {Function} Función para desinstalar manejadores
 */
export function installGlobalErrorHandler() {
  // Almacén global para fetches pendientes
  window._pendingFetches = window._pendingFetches || {};

  // Patch global fetch para trackear peticiones
  const originalFetch = window.fetch;
  window.fetch = function(resource, options = {}) {
    const controller = new AbortController();
    const signal = options.signal || controller.signal;

    // Si ya había un signal original, combinarlo con el nuestro
    if (options.signal) {
      options.signal.addEventListener('abort', () => {
        controller.abort();
      });
    }

    // Generar ID único para la petición
    const fetchId = Date.now() + Math.random().toString(36).substr(2, 9);
    window._pendingFetches[fetchId] = controller;

    // Opciones con nuestro signal
    const newOptions = { ...options, signal };

    return originalFetch(resource, newOptions)
      .then(response => {
        // Limpiar al completar
        delete window._pendingFetches[fetchId];
        return response;
      })
      .catch(error => {
        // Limpiar en caso de error
        delete window._pendingFetches[fetchId];

        // Si es un error específico de abort por nosotros, enriquecer mensaje
        if (error.name === 'AbortError' && controller.signal.aborted) {
          error.recoveryAborted = true;
        }

        throw error;
      });
  };

  // Manejar errores genéricos de ventana
  const handleWindowError = (event) => {
    const error = event.error || new Error(event.message || 'Error desconocido');
    reportError(error, 'window');

    // Solo prevenir default para errores que podemos manejar
    if (isDOMRelatedError(error) || isModuleLoadError(error)) {
      event.preventDefault();
      attemptRecovery(error);
    }
  };

  // Manejar promesas rechazadas no capturadas
  const handleUnhandledRejection = (event) => {
    const error = event.reason instanceof Error
      ? event.reason
      : new Error(`Promesa rechazada: ${event.reason}`);

    reportError(error, 'promise');

    // Solo prevenir default para errores que podemos manejar
    if (isDOMRelatedError(error) || isModuleLoadError(error)) {
      event.preventDefault();
      attemptRecovery(error);
    }
  };

  // Registrar manejadores
  window.addEventListener('error', handleWindowError);
  window.addEventListener('unhandledrejection', handleUnhandledRejection);

  // Retornar función para desinstalar
  return () => {
    window.removeEventListener('error', handleWindowError);
    window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    window.fetch = originalFetch;
  };
}