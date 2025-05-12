/**
 * Hook personalizado para detectar si un media query coincide con el estado actual de la ventana.
 * Útil para implementar diseños responsivos en componentes funcionales.
 *
 * @param {string} query - La media query a comprobar (por ejemplo: '(max-width: 768px)')
 * @returns {boolean} - Devuelve true si la media query coincide, false en caso contrario
 *
 * @example
 * // Verificar si es un dispositivo móvil
 * const isMobile = useMediaQuery('(max-width: 768px)');
 *
 * // Verificar si es un dispositivo con preferencia de tema oscuro
 * const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
 */
import { useState, useEffect } from 'react';

export function useMediaQuery(query) {
  // Inicializamos el estado con la coincidencia actual
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Creamos el media query
    const media = window.matchMedia(query);

    // Establecemos el estado inicial
    setMatches(media.matches);

    // Definimos el manejador de eventos
    const listener = (event) => {
      setMatches(event.matches);
    };

    // Añadimos el listener con la API moderna si está disponible
    if (media.addEventListener) {
      media.addEventListener('change', listener);
      // Limpieza
      return () => media.removeEventListener('change', listener);
    } else {
      // Fallback para navegadores antiguos
      media.addListener(listener);
      // Limpieza
      return () => media.removeListener(listener);
    }
  }, [query]); // Re-ejecutar si la query cambia

  return matches;
}