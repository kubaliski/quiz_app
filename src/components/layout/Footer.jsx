/**
 * Componente de pie de página que muestra información de copyright, enlaces de navegación
 * y la versión actual de la aplicación.
 *
 * @component
 * @returns {JSX.Element} Componente Footer renderizado
 *
 * @example
 * <Footer />
 */
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Detectar si estamos en entorno de desarrollo
const isDevelopment = import.meta.env ? import.meta.env.DEV === true : false;

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [versionInfo, setVersionInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Función para obtener la información de versión
    const fetchVersionInfo = async () => {
      try {
        setIsLoading(true);

        // En desarrollo, usamos una versión fija
        if (isDevelopment) {
          setVersionInfo({
            version: '1.1.0-dev'
          });
          setIsLoading(false);
          return;
        }

        // En producción, intentamos obtener version.json
        const abortController = new AbortController();
        const timeoutId = setTimeout(() => abortController.abort(), 3000); // 3 segundos de timeout

        const response = await fetch('/version.json', {
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0'
          },
          signal: abortController.signal
        });

        clearTimeout(timeoutId);

        if (response.ok) {
          // Primero obtenemos el texto para verificar
          const text = await response.text();

          // Verificar que tenemos un JSON válido
          if (text && text.trim() !== '' && text.trim().startsWith('{')) {
            try {
              const data = JSON.parse(text);
              setVersionInfo(data);
            } catch (parseError) {
              console.warn('Error al parsear version.json:', parseError);
              setVersionInfo({ version: '1.1.0' }); // Versión por defecto
            }
          } else {
            console.warn('Respuesta no es un JSON válido');
            setVersionInfo({ version: '1.1.0' }); // Versión por defecto
          }
        } else {
          console.warn('No se pudo obtener la información de versión');
          setVersionInfo({ version: '1.1.0' }); // Versión por defecto
        }
      } catch (error) {
        console.error('Error al obtener información de versión:', error);
        setVersionInfo({ version: '1.1.0' }); // Versión por defecto en caso de error
      } finally {
        setIsLoading(false);
      }
    };

    fetchVersionInfo();
  }, []);

  // Extraer solo la parte principal de la versión (sin el hash de git)
  const getCleanVersion = (fullVersion) => {
    if (!fullVersion) return "1.1.0"; // Versión por defecto
    // Si la versión incluye un guión (por ejemplo "1.1.0-a3b4c5"), tomar solo la primera parte
    return fullVersion.split('-')[0];
  };

  return (
    <footer className="bg-gray-800 text-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm">
              &copy; {currentYear} Quiz App
              {!isLoading && versionInfo && (
                <span className="ml-2 text-xs text-gray-400">
                  v{getCleanVersion(versionInfo.version)}
                  {isDevelopment && <span className="ml-1 text-amber-500">dev</span>}
                </span>
              )}
            </p>
          </div>
          <div className="flex justify-center md:justify-end space-x-6">
            <Link to="/" className="text-white hover:text-white hover:opacity-80 transition-opacity duration-200">
              Inicio
            </Link>
            <Link to="/about" className="text-white hover:text-white hover:opacity-80 transition-opacity duration-200">
              Colabora
            </Link>
            {/* Icono de GitHub en lugar del enlace a Contacto */}
            <a
              href="https://github.com/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white hover:opacity-80 transition-opacity duration-200"
              aria-label="Perfil de GitHub"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}