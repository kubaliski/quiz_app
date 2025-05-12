/**
 * Componente de menú móvil que se muestra en dispositivos de pantalla pequeña.
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
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './';

export default function MobileMenu({ navItems, isHeaderVisible }) {
  const [isOpen, setIsOpen] = useState(false);

  // Cerrar el menú cuando el header deja de ser visible
  useEffect(() => {
    if (!isHeaderVisible && isOpen) {
      setIsOpen(false);
    }
  }, [isHeaderVisible, isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      {/* Botón para abrir/cerrar el menú */}
      <button
        onClick={toggleMenu}
        className="text-white p-2 rounded-md hover:bg-indigo-800 dark:hover:bg-indigo-700 focus:outline-none"
        aria-expanded={isOpen}
        aria-label="Abrir menú principal"
      >
        {/* Icono de menú */}
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Menú móvil */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-16 bg-indigo-600 dark:bg-indigo-800 shadow-md z-50 transition-opacity duration-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-700 dark:hover:bg-indigo-600"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Toggle de tema en menú móvil */}
            <div className="px-3 py-2 flex items-center">
              <span className="text-white mr-2">Tema</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}