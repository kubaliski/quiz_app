/**
 * Hook personalizado para detectar la dirección del desplazamiento y
 * controlar la visibilidad de elementos basados en el scroll.
 *
 * @returns {Object} Objeto con propiedades: scrollDirection ('up', 'down' o 'none') e isVisible (boolean)
 *
 * @example
 * const { scrollDirection, isVisible } = useScrollDirection();
 * // Usar isVisible para mostrar/ocultar un elemento
 * <header className={`${isVisible ? 'visible' : 'hidden'}`}>...</header>
 */
import { useState, useEffect } from 'react';

export  function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState('none');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const threshold = 10; // Mínimo de píxeles para considerar un cambio de dirección
    let lastScrollY = window.scrollY;

    // Función que maneja el evento de desplazamiento
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? 'down' : 'up';

      // Si se ha desplazado más que el umbral
      if (Math.abs(scrollY - lastScrollY) > threshold) {
        // Actualizamos la dirección solo si es diferente a la última
        if (direction !== scrollDirection) {
          setScrollDirection(direction);
        }

        // Decidimos si mostrar el elemento basado en la dirección
        if (direction === 'up') {
          setIsVisible(true);
        } else if (scrollY > 100) { // No ocultar si estamos cerca del top
          setIsVisible(false);
        }

        lastScrollY = scrollY > 0 ? scrollY : 0;
      }
    };

    // Añadimos el event listener
    window.addEventListener('scroll', updateScrollDirection);

    // Limpieza del event listener al desmontar
    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, [scrollDirection]);

  return { scrollDirection, isVisible };
}