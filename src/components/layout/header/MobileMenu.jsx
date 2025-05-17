/**
 * Componente de menú móvil optimizado que se muestra en dispositivos de pantalla pequeña.
 * Incluye un botón para mostrar/ocultar el menú y el conmutador de tema.
 * Se cierra automáticamente cuando la barra de navegación desaparece al desplazar hacia abajo.
 *
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {Array<{to: string, label: string}>} props.navItems - Elementos de navegación para el menú
 * @param {boolean} props.isHeaderVisible - Indica si el header está visible actualmente
 * @returns {JSX.Element} Componente MobileMenu renderizado
 *
 * @example
 * const menuItems = [
 *   { to: '/', label: 'Inicio' },
 *   { to: '/about', label: 'Acerca de' }
 * ];
 *
 * <MobileMenu navItems={menuItems} isHeaderVisible={true} />
 */
import { useState, useEffect, useRef, memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '../index';


// Componente interno para cada ítem del menú
const MenuItem = memo(function MenuItem({ to, label, onClick }) {
  return (
    <Link
      to={to}
      className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors duration-200"
      onClick={onClick}
    >
      {label}
    </Link>
  );
});



// Componente principal memoizado
const MobileMenu = memo(function MobileMenu({ navItems, isHeaderVisible }) {
  const [isOpen, setIsOpen] = useState(false);
  const wasHeaderVisible = useRef(isHeaderVisible);

  // Cerrar el menú cuando el header deja de ser visible
  useEffect(() => {
    // Solo cerramos si cambia de visible a no visible
    if (wasHeaderVisible.current && !isHeaderVisible && isOpen) {
      setIsOpen(false);
    }
    wasHeaderVisible.current = isHeaderVisible;
  }, [isHeaderVisible, isOpen]);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  // Crear manejador para cerrar menú
  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  // Memoizar clases del menú para evitar recálculos
  const menuClasses = useMemo(() => {
    const baseClasses = "absolute left-0 right-0 top-16 bg-indigo-600 dark:bg-indigo-800 shadow-md z-50";
    const transitionClasses = "transition-all transform duration-200 ease-in-out";
    const visibilityClasses = isOpen
      ? "opacity-100 translate-y-0 pointer-events-auto"
      : "opacity-0 -translate-y-2 pointer-events-none h-0 overflow-hidden";

    return `${baseClasses} ${transitionClasses} ${visibilityClasses}`;
  }, [isOpen]);

  // Memoizar el ícono del menú
  const menuIcon = useMemo(() => {
    return isOpen
      ? "M6 18L18 6M6 6l12 12"
      : "M4 6h16M4 12h16M4 18h16";
  }, [isOpen]);

  return (
    <div className="md:hidden">
      {/* Botón para abrir/cerrar el menú */}
      <button
        onClick={toggleMenu}
        className="text-white p-2 rounded-md hover:bg-indigo-800 dark:hover:bg-indigo-700 focus:outline-none transition-colors duration-200"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Cerrar menú principal" : "Abrir menú principal"}
        aria-controls="mobile-menu"
      >
        {/* Icono de menú - optimizado para evitar recálculos */}
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={menuIcon}
          />
        </svg>
      </button>

      {/* Menú móvil - siempre presente pero con visibility controlada por CSS */}
      <div
        id="mobile-menu"
        className={menuClasses}
        aria-hidden={!isOpen}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item, index) => (
            <MenuItem
              key={index}
              to={item.to}
              label={item.label}
              onClick={handleCloseMenu}
            />
          ))}

          {/* Toggle de tema en menú móvil */}
          <div className="px-3 py-2 flex items-center">
            <span className="text-white mr-2">Tema</span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
});



export default MobileMenu;