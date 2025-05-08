/**
 * Componente para gestionar las actualizaciones del Service Worker.
 * Detecta cuando hay una nueva versión disponible y permite actualizarla
 * automáticamente o mostrar una notificación al usuario.
 *
 * Incluye manejo inteligente de actualizaciones durante quizzes en progreso.
 *
 * @component
 * @returns {JSX.Element|null} Componente para gestionar actualizaciones
 */
import { useState, useEffect } from 'react';
import { Dialog } from '@components/common';
import {
  registerSWUpdateHandler,
  applyUpdates
} from '@services/swService';
import { formatTimestamp } from '@utils/quizUtils';

// Detectar si estamos en entorno de desarrollo
const isDevelopment = import.meta.env ? import.meta.env.DEV === true : false;

export default function ServiceWorkerUpdater() {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [updateInfo, setUpdateInfo] = useState(null);
  const [isApplying, setIsApplying] = useState(false);
  const [debugInfo, setDebugInfo] = useState(null);
  const [isQuizInProgress, setIsQuizInProgress] = useState(false);
  const [updateDelayed, setUpdateDelayed] = useState(false);

  // Estado para el diálogo de confirmación
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    // Solo ejecutar si estamos en producción y el Service Worker está disponible
    if (isDevelopment || !('serviceWorker' in navigator)) {
      if (isDevelopment) console.log('ServiceWorkerUpdater: En modo desarrollo, no se registra');
      return;
    }

    console.log('ServiceWorkerUpdater: Inicializando en modo producción');

    // Verificar periódicamente si hay un quiz en progreso
    const checkQuizInterval = setInterval(() => {
      const inProgress = localStorage.getItem('quiz_in_progress') === 'true';
      setIsQuizInProgress(inProgress);
    }, 5000); // Comprobar cada 5 segundos

    // Registrar el manejador de actualizaciones
    const unregisterHandler = registerSWUpdateHandler(async () => {
      console.log('ServiceWorkerUpdater: Actualización detectada');
      setUpdateAvailable(true);

      // Intentar obtener información de la versión
      try {
        // Añadir timestamp para evitar caching
        const timestamp = new Date().getTime();
        const response = await fetch(`/version.json?_t=${timestamp}`, {
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0'
          }
        });

        if (response.ok) {
          const text = await response.text();
          console.log('ServiceWorkerUpdater: Contenido de version.json:', text);

          if (text && text.trim() !== '' && text.trim().startsWith('{')) {
            try {
              const data = JSON.parse(text);
              setUpdateInfo(data);

              // Para debug
              setDebugInfo({
                currentAppVersion: localStorage.getItem('app_version') || 'No disponible',
                newVersion: data.version,
                buildDate: data.buildDate,
                isDevelopmentVersion: data.version.includes('-dev')
              });

              console.log('ServiceWorkerUpdater: Nueva versión detectada', data);
            } catch (error) {
              console.warn('Error al parsear información de versión:', error);
            }
          }
        } else {
          console.warn(`Error al obtener version.json: ${response.status}`);
        }
      } catch (error) {
        console.error('Error al obtener información de versión:', error);
      }
    });

    // Configurar evento para cuando el SW notifica de actualización de contenido
    const handleSWMessage = (event) => {
      if (event.data && event.data.type === 'CONTENT_UPDATED') {
        console.log('Contenido actualizado detectado:', event.data.url);

        // Si es un archivo de módulo de asignatura, recargar la página
        if (event.data.url.includes('/modulos/') && event.data.url.endsWith('.js')) {
          console.log('Detectada actualización de módulo. Recargando...');
          window.location.reload();
        }
      }
    };

    // Solo configurar listener si el Service Worker está activo
    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.addEventListener('message', handleSWMessage);
    }

    // Configurar evento para cuando el controlador cambia (nuevo SW activo)
    const handleControllerChange = () => {
      console.log('Service Worker Controller ha cambiado - recargando la página');
      window.location.reload();
    };

    navigator.serviceWorker.addEventListener('controllerchange', handleControllerChange);

    // Limpiar manejadores al desmontar el componente
    return () => {
      unregisterHandler();
      clearInterval(checkQuizInterval);

      if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.removeEventListener('message', handleSWMessage);
      }

      navigator.serviceWorker.removeEventListener('controllerchange', handleControllerChange);
    };
  }, []);

  // Función para mostrar el diálogo de confirmación
  const confirmUpdate = () => {
    // Si hay un quiz en progreso y no se ha pospuesto, mostrar diálogo
    if (isQuizInProgress && !updateDelayed) {
      setDialogOpen(true);
    } else {
      // Si no hay quiz en progreso, aplicar directamente
      proceedWithUpdate();
    }
  };

  // Función para proceder con la actualización después de confirmar
  const proceedWithUpdate = async () => {
    setIsApplying(true);
    setDialogOpen(false);

    try {
      // Si hay quiz en progreso, guardar información sobre la actualización en localStorage
      // para que persista a través de una recarga completa
      if (isQuizInProgress) {
        // Usar localStorage en lugar de sessionStorage para mayor persistencia
        localStorage.setItem('pwa_just_updated', 'true');

        // Guardar timestamp para verificar que es una actualización reciente
        localStorage.setItem('pwa_update_timestamp', Date.now().toString());

        console.log('Quiz en progreso: marcando actualización para restauración posterior');
      }

      // Usar el servicio para aplicar actualizaciones
      await applyUpdates();

      // Nota: No hacemos un reload aquí, porque el evento 'controllerchange'
      // se disparará cuando el nuevo Service Worker tome el control y
      // ese evento ya tiene un listener que recargará la página

      // Establece un timeout de seguridad por si acaso no se dispara el evento
      setTimeout(() => {
        console.log('Timeout de seguridad - recargando la página');
        window.location.reload();
      }, 3000);

    } catch (error) {
      console.error('Error al aplicar actualización:', error);
      // En caso de error, recargar de todas formas
      window.location.reload();
    }
  };

  // Función para cancelar la actualización
  const cancelUpdate = () => {
    setDialogOpen(false);
    setUpdateDelayed(true);
  };

  // Función para posponer actualización
  const handleDelayUpdate = () => {
    setUpdateDelayed(true);
  };

  // En desarrollo, no mostrar nada
  if (isDevelopment) {
    return null;
  }

  // Si hay una actualización disponible, mostrar un banner
  if (updateAvailable) {
    return (
      <>
        <div className="fixed bottom-0 left-0 right-0 bg-indigo-600 text-white p-3 flex justify-between items-center shadow-lg z-50">
          <div className="flex-1">
            <span className="font-medium">¡Hay una nueva versión disponible!</span>
            {updateInfo && updateInfo.notes && (
              <p className="text-sm opacity-90 mt-1">{updateInfo.notes}</p>
            )}

            {isQuizInProgress && !updateDelayed && (
              <p className="text-sm text-yellow-200 mt-1">
                Tienes un quiz en progreso. La actualización puede interrumpir tu actividad.
              </p>
            )}

            {updateDelayed && (
              <p className="text-sm text-green-200 mt-1">
                La actualización se ha pospuesto. Se aplicará cuando finalices el quiz.
              </p>
            )}

            {/* Mostrar información de debug solo en entornos staging o similares */}
            {debugInfo && new URLSearchParams(window.location.search).has('debug') && (
              <div className="text-xs opacity-75 mt-1">
                Versión actual: {debugInfo.currentAppVersion} |
                Nueva versión: {debugInfo.newVersion} |
                Fecha: {formatTimestamp(debugInfo.buildDate)}
                {debugInfo.isDevelopmentVersion &&
                  <span className="text-yellow-300 ml-1">(Versión de desarrollo)</span>
                }
              </div>
            )}
          </div>

          {updateDelayed ? (
            <button
              onClick={confirmUpdate}
              className="bg-white text-indigo-600 px-4 py-1 rounded font-medium text-sm ml-4"
            >
              Actualizar ahora de todos modos
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={confirmUpdate}
                disabled={isApplying}
                className={`
                  bg-white text-indigo-600 px-4 py-1 rounded font-medium text-sm
                  ${isApplying ? 'opacity-75 cursor-not-allowed' : 'hover:bg-gray-100'}
                `}
              >
                {isApplying ? 'Actualizando...' : 'Actualizar ahora'}
              </button>

              {isQuizInProgress && (
                <button
                  onClick={handleDelayUpdate}
                  className="bg-transparent border border-white text-white px-4 py-1 rounded font-medium text-sm"
                >
                  Posponer
                </button>
              )}
            </div>
          )}
        </div>

        {/* Diálogo de confirmación */}
        <Dialog
          open={dialogOpen}
          title="Confirmar actualización"
          message={
            <>
              <div>Hay un quiz en progreso. Actualizar ahora podría interrumpir tu actividad y podrías perder tu progreso si no ha sido guardado completamente.</div>
              <div className="mt-2"><strong>¿Seguro que deseas actualizar ahora?</strong></div>
            </>
          }
          confirmLabel="Sí, actualizar ahora"
          cancelLabel="Posponer actualización"
          onConfirm={proceedWithUpdate}
          onCancel={cancelUpdate}
          variant="warning"
        />
      </>
    );
  }

  // Si no hay actualización o se pospuso, no renderizar nada
  return null;
}