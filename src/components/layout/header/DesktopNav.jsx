/**
 * Componente de navegación para escritorio que muestra los enlaces principales.
 * Se oculta en dispositivos móviles mediante clases de utilidad.
 *
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {Array<{to: string, label: string}>} props.navItems - Elementos de navegación a mostrar
 * @returns {JSX.Element} Componente DesktopNav renderizado
 *
 * @example
 * const navItems = [
 *   { to: '/', label: 'Inicio' },
 *   { to: '/about', label: 'Acerca de' }
 * ];
 *
 * <DesktopNav navItems={navItems} />
 */
import { memo } from 'react';
import { Link } from 'react-router-dom';


const DesktopNav = memo(function DesktopNav({ navItems }) {
  return (
    <nav className="hidden md:block">
      <div className="ml-10 flex items-baseline space-x-4">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            className="text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-indigo-800 dark:hover:bg-indigo-700"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
});



export default DesktopNav;