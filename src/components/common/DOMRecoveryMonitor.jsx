/**
 * Componente que monitorea el estado del DOM y scroll para detectar
 * y recuperarse de posibles bloqueos o problemas de performance.
 * Especialmente enfocado en resolver el error "DOMException: The operation was aborted."
 *
 * @component
 */
import { useEffect } from 'react';
import { reportError, recoverDOM } from '@services/errorService';

const DOMRecoveryMonitor = () => {
  useEffect(() => {
    let lastHeartbeat = Date.now();
    let lastScrollY = window.scrollY;
    let checkInterval;
    let lastInteractionTime = Date.now();
    let isRecovering = false;

    // Registrar cualquier interacción del usuario
    const handleInteraction = () => {
      lastInteractionTime = Date.now();
      lastHeartbeat = Date.now();
    };

    // Específicamente monitorear el scroll
    const handleScroll = () => {
      lastInteractionTime = Date.now();
      lastHeartbeat = Date.now();
      lastScrollY = window.scrollY;
    };

    // Verificar periódicamente si hay bloqueos en el DOM
    const checkDOMHealth = () => {
      const now = Date.now();

      // Si pasó tiempo sin heartbeat pero el usuario está interactuando,
      // podría indicar que la UI está bloqueada
      if (!isRecovering &&
          now - lastHeartbeat > 5000 &&
          now - lastInteractionTime < 2000) {

        console.warn('[DOMRecoveryMonitor] Posible bloqueo detectado - intentando recuperar');

        const syntheticError = new Error('Detección de bloqueo DOM/scroll');
        reportError(syntheticError, 'dom-monitor');

        isRecovering = true;

        // Intentar recuperar
        recoverDOM().then(success => {
          console.log('[DOMRecoveryMonitor] Recuperación completada, éxito:', success);
          isRecovering = false;
          lastHeartbeat = Date.now();
        }).catch(error => {
          console.error('[DOMRecoveryMonitor] Error en recuperación:', error);
          isRecovering = false;
        });
      }
    };

    // Detectar errores específicos de DOM y scroll
    const handleDOMError = (event) => {
      const error = event.error || new Error(event.message || 'Error DOM desconocido');
      const errorText = error.message || '';

      // Detectar errores específicos relacionados con DOM/scroll
      if (errorText.includes('DOMException') ||
          errorText.includes('aborted') ||
          errorText.includes('scroll') ||
          errorText.includes('detached') ||
          error.name === 'AbortError') {

        console.warn('[DOMRecoveryMonitor] Error DOM detectado:', errorText);

        // Prevenir propagación si podemos manejar este error
        event.preventDefault();

        // Reportar y recuperar
        reportError(error, 'dom-error');

        if (!isRecovering) {
          isRecovering = true;
          recoverDOM().then(() => {
            isRecovering = false;
            lastHeartbeat = Date.now();
          }).catch(() => {
            isRecovering = false;
          });
        }
      }
    };

    // Monitorear la carga de recursos como imágenes, scripts, etc.
    const handleResourceError = (event) => {
      // Solo detectar errores de recursos cruciales
      if (event.target &&
          (event.target.tagName === 'SCRIPT' ||
           event.target.tagName === 'LINK' && event.target.rel === 'stylesheet')) {

        console.warn('[DOMRecoveryMonitor] Error en carga de recurso:', event.target.src || event.target.href);

        // Crear un error para reportar
        const resourceError = new Error(`Error al cargar ${event.target.tagName.toLowerCase()}: ${event.target.src || event.target.href}`);
        reportError(resourceError, 'resource');
      }
    };

    // Registrar event listeners
    window.addEventListener('error', handleDOMError, true); // true para capturar en fase de captura
    window.addEventListener('click', handleInteraction, { passive: true });
    window.addEventListener('touchstart', handleInteraction, { passive: true });
    window.addEventListener('keydown', handleInteraction, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('error', handleResourceError, true);

    // Verificar periódicamente salud del DOM
    checkInterval = setInterval(checkDOMHealth, 2000);

    // Limpieza al desmontar
    return () => {
      window.removeEventListener('error', handleDOMError, true);
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('error', handleResourceError, true);
      clearInterval(checkInterval);
    };
  }, []);

  // Este componente no renderiza nada
  return null;
};

export default DOMRecoveryMonitor;