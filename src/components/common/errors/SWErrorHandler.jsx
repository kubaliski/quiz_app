/**
 * Componente para manejar errores específicos del Service Worker
 * Muestra mensajes y soluciones para problemas relacionados con la caché
 *
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {Error} [props.error] - Error capturado a mostrar
 * @param {Function} [props.onRetry] - Función a ejecutar al reintentar
 * @param {Function} [props.onReset] - Función a ejecutar al resetear la aplicación
 * @returns {JSX.Element|null} Componente de manejo de errores
 */
import { useState, useEffect } from 'react';
import { ErrorMessage, Button } from '@components/common';
import { clearModulesCache, applyUpdates, checkForUpdates, isModuleLoadError } from '@services/swService';

export default function SWErrorHandler({ error, onRetry, onReset }) {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [isClearing, setIsClearing] = useState(false);

  useEffect(() => {
    // Comprobar si hay actualizaciones del SW disponibles
    const checkSWStatus = async () => {
      const hasUpdate = await checkForUpdates();
      setUpdateAvailable(hasUpdate);
    };

    checkSWStatus();
  }, []);

  // Determinar si el error está relacionado con una importación fallida
  const isSWRelatedError = error && (
    isModuleLoadError(error) ||
    error.swUpdateAvailable
  );

  if (!error) return null;

  const handleClearCache = async () => {
    setIsClearing(true);
    await clearModulesCache();

    // Si hay actualizaciones pendientes, aplicarlas
    if (updateAvailable) {
      await applyUpdates();
    } else {
      // De lo contrario, recargar la página
      window.location.reload(true);
    }
  };

  return (
    <div className="space-y-6">
      <ErrorMessage message={error.message || "Se ha producido un error al cargar los datos."} />

      {isSWRelatedError && (
        <div className="bg-yellow-50 dark:bg-yellow-900 dark:bg-opacity-20 border-l-4 border-yellow-500 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zm-1 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700 dark:text-yellow-300">
                Este error puede estar relacionado con la caché de la aplicación. Es posible que haya una nueva versión disponible que aún no se ha cargado.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col space-y-2">
        {updateAvailable && (
          <Button
            variant="primary"
            onClick={applyUpdates}
            fullWidth
            className="bg-green-600 hover:bg-green-700"
          >
            Actualizar a la nueva versión
          </Button>
        )}

        <Button
          variant="primary"
          onClick={handleClearCache}
          fullWidth
          disabled={isClearing}
        >
          {isClearing ? "Limpiando caché..." : "Limpiar caché y recargar"}
        </Button>

        {onRetry && (
          <Button
            variant="secondary"
            onClick={onRetry}
            fullWidth
          >
            Reintentar sin limpiar caché
          </Button>
        )}

        {onReset && (
          <Button
            variant="secondary"
            onClick={onReset}
            fullWidth
          >
            Volver a la página principal
          </Button>
        )}
      </div>
    </div>
  );
}