/**
 * Componente de cabecera que muestra el logo, navegación principal y controles de usuario.
 * Se adapta a diferentes tamaños de pantalla y en móvil aparece al desplazar hacia arriba.
 * En desktop permanece en su posición normal (no fixed).
 *
 * @component
 * @returns {JSX.Element} Componente Header renderizado
 *
 * @example
 * <Header />
 */
import { Link } from 'react-router-dom';
import { MobileMenu, ThemeToggle } from './';
import { useScrollDirection, useDeviceType } from '@hooks';

export default function Header() {
  // Definimos los elementos de navegación una sola vez para reutilizarlos
  const navItems = [
    { to: '/', label: 'Inicio' },
    { to: '/about', label: 'Colabora' }
  ];

  // Utilizamos el hook personalizado para controlar la visibilidad en función del scroll
  const { isVisible } = useScrollDirection();

  // Utilizamos el hook para detectar el tipo de dispositivo
  const { isMobile } = useDeviceType();

  return (
    <header
      className={`
        bg-indigo-700 dark:bg-indigo-900 shadow-md z-50
        ${isMobile ? 'fixed top-0 left-0 right-0 transition-transform duration-300 ease-in-out' : 'relative'}
        ${isMobile && !isVisible ? 'transform -translate-y-full' : 'transform-none'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center text-white !important">
              <span className="font-bold text-xl text-white !important">Quiz App</span>
            </Link>
          </div>

          {/* Navegación para desktop */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  className="text-white !important px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-800 dark:hover:bg-indigo-700"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="hidden md:flex items-center">
            {/* Toggle de tema */}
            <ThemeToggle />

            <div className="ml-4 flex items-center md:ml-6">
              {/* Elementos adicionales para desktop */}
            </div>
          </div>

          {/* Componente de menú móvil */}
          <MobileMenu navItems={navItems} />
        </div>
      </div>
    </header>
  );
}