/**
 * Componente que obtiene y muestra la información de versión de la aplicación.
 * Maneja la lógica de fetch y errores relacionados con la versión.
 *
 * @component
 * @returns {JSX.Element} Componente VersionInfo renderizado
 */
import { useState, useEffect, useRef, memo } from 'react';

// Detectar si estamos en entorno de desarrollo
const isDevelopment = import.meta.env ? import.meta.env.DEV === true : false;

const VersionInfo = memo(function VersionInfo() {
  const [versionInfo, setVersionInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // Usamos una referencia para mantener el controlador de aborto entre renders
  const abortControllerRef = useRef(null);
  // Bandera para saber si el componente sigue montado
  const isMountedRef = useRef(true);

  useEffect(() => {
    // Al montar, marcamos que está montado
    isMountedRef.current = true;

    // Función para obtener la información de versión de manera segura
    const fetchVersionInfo = async () => {
      // Limpiar el controlador anterior si existe
      if (abortControllerRef.current) {
        try {
          abortControllerRef.current.abort();
        } catch {
          // Ignorar errores al abortar
        }
      }

      // Crear un nuevo controlador y guardarlo en la referencia
      const controller = new AbortController();
      abortControllerRef.current = controller;

      // Variable para el timeout
      let timeoutId = null;

      try {
        // Solo continuamos si el componente está montado
        if (!isMountedRef.current) return;

        setIsLoading(true);

        // En desarrollo, usamos una versión fija y no hacemos fetch
        if (isDevelopment) {
          if (isMountedRef.current) {
            setVersionInfo({
              version: '2.0.2-dev'
            });
            setIsLoading(false);
          }
          return;
        }

        // Configurar timeout para abortar la petición después de 3 segundos
        timeoutId = setTimeout(() => {
          if (abortControllerRef.current === controller) {
            controller.abort();
            // Si aún estamos montados, establecer una versión por defecto
            if (isMountedRef.current) {
              setVersionInfo({ version: '1.SW' });
              setIsLoading(false);
            }
          }
        }, 3000);

        try {
          const response = await fetch('/version.json', {
            cache: 'no-store',
            headers: {
              'Cache-Control': 'no-cache, no-store, must-revalidate',
              'Pragma': 'no-cache',
              'Expires': '0'
            },
            signal: controller.signal
          });

          // Limpiar el timeout ya que la petición completó
          if (timeoutId) {
            clearTimeout(timeoutId);
            timeoutId = null;
          }

          // Verificar si el componente sigue montado y es el controlador actual
          if (!isMountedRef.current || abortControllerRef.current !== controller) {
            return;
          }

          if (response.ok) {
            // Usar try/catch específico para la lectura del texto
            try {
              const text = await response.text();

              // Volver a verificar montaje después de operación asíncrona
              if (!isMountedRef.current || abortControllerRef.current !== controller) {
                return;
              }

              // Verificar que tenemos un JSON válido
              if (text && text.trim() !== '' && text.trim().startsWith('{')) {
                try {
                  const data = JSON.parse(text);
                  if (isMountedRef.current) {
                    setVersionInfo(data);
                  }
                } catch (parseError) {
                  if (isMountedRef.current) {
                    console.warn('Error al parsear version.json:', parseError);
                    setVersionInfo({ version: '1.SW' });
                  }
                }
              } else {
                if (isMountedRef.current) {
                  console.warn('Respuesta no es un JSON válido');
                  setVersionInfo({ version: '1.SW' });
                }
              }
            } catch (textError) {
              // Manejar específicamente errores al leer el texto
              if (isMountedRef.current) {
                console.warn('Error al leer texto de la respuesta:', textError);
                setVersionInfo({ version: '1.SW' });
              }
            }
          } else {
            if (isMountedRef.current) {
              console.warn('No se pudo obtener la información de versión');
              setVersionInfo({ version: '1.SW' });
            }
          }
        } catch (fetchError) {
          // Limpiar el timeout si hubo error en el fetch
          if (timeoutId) {
            clearTimeout(timeoutId);
            timeoutId = null;
          }

          // Ignorar errores de tipo AbortError ya que son esperados cuando se cancela
          if (fetchError.name !== 'AbortError' && isMountedRef.current) {
            console.error('Error en fetch:', fetchError);
            setVersionInfo({ version: '1.SW' });
          }
        }
      } catch (generalError) {
        // Capturar cualquier otro error inesperado
        if (isMountedRef.current) {
          console.error('Error general:', generalError);
          setVersionInfo({ version: '1.SW' });
        }
      } finally {
        // Limpiar el timeout si aún existe
        if (timeoutId) {
          clearTimeout(timeoutId);
        }

        // Actualizar estado solo si el componente sigue montado
        if (isMountedRef.current) {
          setIsLoading(false);
        }
      }
    };

    // Llamar a la función al montar el componente
    fetchVersionInfo();

    // Función de limpieza para cuando el componente se desmonte
    return () => {
      // Marcar que el componente ya no está montado
      isMountedRef.current = false;

      // Abortar cualquier petición pendiente
      if (abortControllerRef.current) {
        try {
          abortControllerRef.current.abort();
        } catch {
          // Ignorar errores al abortar
        }
        abortControllerRef.current = null;
      }
    };
  }, []); // Solo se ejecuta al montar el componente

  // Extraer solo la parte principal de la versión (sin el hash de git)
  const getCleanVersion = (fullVersion) => {
    if (!fullVersion) return "1.SW";
    return fullVersion.split('-')[0];
  };

  // Si aún está cargando o no hay información de versión, no mostramos nada
  if (isLoading || !versionInfo) {
    return null;
  }

  return (
    <span className="ml-2 text-xs text-gray-400">
      v{getCleanVersion(versionInfo.version)}
      {isDevelopment && <span className="ml-1 text-amber-500">dev</span>}
    </span>
  );
});

export default VersionInfo;