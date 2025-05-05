/**
 * Componente para gestionar las actualizaciones del Service Worker.
 * Detecta cuando hay una nueva versión disponible y permite actualizarla
 * automáticamente o mostrar una notificación al usuario.
 *
 * @component
 * @returns {JSX.Element|null} Componente para gestionar actualizaciones
 */
import { useState, useEffect } from 'react';
import {
  registerSWUpdateHandler,
  applyUpdates
} from '@services/swService';

// Detectar si estamos en entorno de desarrollo
const isDevelopment = import.meta.env ? import.meta.env.DEV === true : false;

export default function ServiceWorkerUpdater() {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [updateInfo, setUpdateInfo] = useState(null);
  const [isApplying, setIsApplying] = useState(false);

  useEffect(() => {
    // Solo ejecutar si estamos en producción y el Service Worker está disponible
    if (isDevelopment || !('serviceWorker' in navigator)) {
      return;
    }

    // Registrar el manejador de actualizaciones
    const unregisterHandler = registerSWUpdateHandler(async () => {
      setUpdateAvailable(true);

      // Intentar obtener información de la versión
      try {
        const response = await fetch('/version.json', {
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0'
          }
        });

        if (response.ok) {
          const text = await response.text();

          if (text && text.trim() !== '' && text.trim().startsWith('{')) {
            try {
              const data = JSON.parse(text);
              setUpdateInfo(data);
            } catch (error) {
              console.warn('Error al parsear información de versión:', error);
            }
          }
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

      if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.removeEventListener('message', handleSWMessage);
      }

      navigator.serviceWorker.removeEventListener('controllerchange', handleControllerChange);
    };
  }, []);

  // Función para aplicar la actualización
  const handleUpdate = async () => {
    setIsApplying(true);

    try {
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

  // En desarrollo, no mostrar nada
  if (isDevelopment) {
    return null;
  }

  // Si hay una actualización disponible, mostrar un banner
  if (updateAvailable) {
    return (
      <div className="fixed top-0 left-0 right-0 bg-indigo-600 text-white p-3 flex justify-between items-center shadow-lg z-50">
        <div className="flex-1">
          <span className="font-medium">¡Hay una nueva versión disponible!</span>
          {updateInfo && updateInfo.notes && (
            <p className="text-sm opacity-90 mt-1">{updateInfo.notes}</p>
          )}
        </div>
        <button
          onClick={handleUpdate}
          disabled={isApplying}
          className={`
            bg-white text-indigo-600 px-4 py-1 rounded font-medium text-sm ml-4
            ${isApplying ? 'opacity-75 cursor-not-allowed' : 'hover:bg-gray-100'}
          `}
        >
          {isApplying ? 'Actualizando...' : 'Actualizar ahora'}
        </button>
      </div>
    );
  }

  // Si no hay actualización, no renderizar nada
  return null;
}