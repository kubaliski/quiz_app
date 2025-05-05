/**
 * Componente para gestionar las actualizaciones del Service Worker.
 * Detecta cuando hay una nueva versión disponible y permite actualizarla
 * automáticamente o mostrar una notificación al usuario.
 *
 * @component
 * @returns {JSX.Element|null} Componente para gestionar actualizaciones
 */
import { useState, useEffect } from 'react';
import { registerSWUpdateHandler, applyUpdates } from '@services/swService';

export default function ServiceWorkerUpdater() {
  const [updateAvailable, setUpdateAvailable] = useState(false);

  useEffect(() => {
    // Solo ejecutar lógica si el Service Worker está disponible
    if ('serviceWorker' in navigator) {
      // Registrar el manejador de actualizaciones
      const unregisterHandler = registerSWUpdateHandler(() => {
        setUpdateAvailable(true);
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

      navigator.serviceWorker.addEventListener('message', handleSWMessage);

      // Limpiar manejadores al desmontar el componente
      return () => {
        unregisterHandler();
        navigator.serviceWorker.removeEventListener('message', handleSWMessage);
      };
    }
  }, []);

  // Función para aplicar la actualización
  const handleUpdate = () => {
    // Usar el servicio para aplicar actualizaciones
    applyUpdates();
  };

  // Si hay una actualización disponible, mostrar un banner
  if (updateAvailable) {
    return (
      <div className="fixed top-0 left-0 right-0 bg-indigo-600 text-white p-3 flex justify-between items-center shadow-lg z-50">
        <span>¡Hay una nueva versión disponible!</span>
        <button
          onClick={handleUpdate}
          className="bg-white text-indigo-600 px-4 py-1 rounded font-medium text-sm hover:bg-gray-100"
        >
          Actualizar ahora
        </button>
      </div>
    );
  }

  // Si no hay actualización, no renderizar nada
  return null;
}