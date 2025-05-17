/**
 * Hook personalizado para detectar la dirección del desplazamiento y
 * controlar la visibilidad de elementos basados en el scroll.
 * Optimizado para rendimiento con requestAnimationFrame y debouncing.
 *
 * @returns {Object} Objeto con propiedades: scrollDirection ('up', 'down' o 'none') e isVisible (boolean)
 *
 * @example
 * const { scrollDirection, isVisible } = useScrollDirection();
 * // Usar isVisible para mostrar/ocultar un elemento
 * <header className={`${isVisible ? 'visible' : 'hidden'}`}>...</header>
 */
import { useState, useEffect, useRef } from 'react';

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState('none');
  const [isVisible, setIsVisible] = useState(true);

  // Referencias para mejorar la gestión del estado
  const lastScrollYRef = useRef(window.scrollY);
  const ticking = useRef(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const threshold = 10; // Mínimo de píxeles para considerar un cambio de dirección

    // Función que maneja el evento de desplazamiento con rAF para optimizar
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollYRef.current ? 'down' : 'up';

      // Si estamos en la parte superior, siempre visible
      if (scrollY < 50) {
        setIsVisible(true);
      }
      // Si se ha desplazado más que el umbral
      else if (Math.abs(scrollY - lastScrollYRef.current) > threshold) {
        // Actualizamos la dirección
        setScrollDirection(direction);

        // Decidimos si mostrar el elemento basado en la dirección
        if (direction === 'up') {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }

      lastScrollYRef.current = scrollY > 0 ? scrollY : 0;
      ticking.current = false;
    };

    // Función para manejar el evento scroll con throttling usando rAF
    const onScroll = () => {
      if (!ticking.current) {
        // Usar requestAnimationFrame para sincronizar con el ciclo de renderizado
        window.requestAnimationFrame(() => {
          updateScrollDirection();
        });
        ticking.current = true;
      }
    };

    // Función para manejar cambios de tamaño de pantalla
    const onResize = () => {
      // Limpiar timeout anterior si existe
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Establecer un nuevo timeout para debounce
      timeoutRef.current = setTimeout(() => {
        // Si cambia el tamaño de pantalla y está en top, asegurar que sea visible
        if (window.scrollY < 50) {
          setIsVisible(true);
        }
      }, 100);
    };

    // Añadimos los event listeners con passive: true para mejor rendimiento
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    // Limpieza
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []); // Quitar la dependencia de scrollDirection para evitar re-renders innecesarios

  return { scrollDirection, isVisible };
}