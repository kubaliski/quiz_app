
/**
 * Componente que muestra un prompt para instalar la aplicación como PWA.
 * Utiliza los componentes comunes de la aplicación y soporta tema oscuro.
*
* @returns {JSX.Element|null} Componente PWAInstallPrompt o null si no debe mostrarse
*/

import { useState, useEffect } from 'react';
import { Button, Card } from '@components/common';
import { useTheme } from '@hooks/useTheme';

const PWAInstallPrompt = () => {
  const [installPrompt, setInstallPrompt] = useState(null);
  const [isAppInstalled, setIsAppInstalled] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const { darkMode } = useTheme();

  useEffect(() => {
    // Comprobar si la aplicación ya está instalada
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsAppInstalled(true);
      return;
    }

    // Comprobar si el usuario ya ha descartado el prompt
    const hasDismissed = localStorage.getItem('pwa-prompt-dismissed');
    if (hasDismissed && Date.now() - parseInt(hasDismissed) < 24 * 60 * 60 * 1000) {
      setDismissed(true);
      return;
    }

    // Capturar el evento beforeinstallprompt
    const handleBeforeInstallPrompt = (e) => {
      // Prevenir que Chrome muestre el prompt automáticamente
      e.preventDefault();
      // Guardar el evento para usarlo más tarde
      setInstallPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', () => setIsAppInstalled(true));

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', () => setIsAppInstalled(true));
    };
  }, []);

  const handleInstallClick = async () => {
    if (!installPrompt) return;

    // Mostrar el prompt de instalación
    installPrompt.prompt();

    // Esperar a que el usuario responda al prompt
    const choiceResult = await installPrompt.userChoice;

    // Resetear el estado
    setInstallPrompt(null);

    // Actualizar el estado si fue instalada
    if (choiceResult.outcome === 'accepted') {
      setIsAppInstalled(true);
    }
  };

  const handleDismiss = () => {
    setDismissed(true);
    // Guardar la preferencia durante 24 horas
    localStorage.setItem('pwa-prompt-dismissed', Date.now().toString());
  };

  // No mostrar nada si la app ya está instalada, no hay prompt disponible, o el usuario lo ha descartado
  if (isAppInstalled || !installPrompt || dismissed) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-0 right-0 mx-auto max-w-sm z-50">
      <Card
        title="Instalar Quiz App"
        footer={
          <div className="flex justify-between items-center w-full">
            <Button
              variant="secondary"
              size="small"
              onClick={handleDismiss}
            >
              No ahora
            </Button>
            <Button
              variant="primary"
              size="small"
              onClick={handleInstallClick}
            >
              Instalar
            </Button>
          </div>
        }
      >
        <div className="flex items-start space-x-3">
          <div className="text-indigo-600 dark:text-indigo-400 mt-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
            </svg>
          </div>
          <p
            className={`text-sm font-medium ${
              darkMode ? 'text-indigo-300' : 'text-indigo-700'
            }`}
            style={{ color: darkMode ? 'rgb(165, 180, 252)' : 'rgb(67, 56, 202)' }}
          >
            Instala Quiz App en tu dispositivo para acceder rápidamente y practicar tus tests sin conexión.
          </p>
        </div>

        {/* Botón de cierre (X) en la esquina superior derecha */}
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          aria-label="Cerrar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </Card>
    </div>
  );
};

export default PWAInstallPrompt;