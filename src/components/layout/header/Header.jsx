/**
 * Componente de cabecera que muestra el logo, navegación principal y controles de usuario.
 * Se adapta a diferentes tamaños de pantalla y en móvil aparece al desplazar hacia arriba.
 * En desktop permanece en su posición normal (no fixed).
 * Optimizado para reducir re-renders y mejorar rendimiento.
 *
 * @component
 * @returns {JSX.Element} Componente Header renderizado
 *
 * @example
 * <Header />
 */
import { memo, useMemo } from 'react';
import { useScrollDirection, useDeviceType } from '@hooks';
import MobileMenu from './MobileMenu';
import DesktopNav from './DesktopNav';
import DesktopControls from './DesktopControls';
import BrandLogo from '../common/BrandLogo';

// Memoizamos el Header para evitar re-renders innecesarios
const Header = memo(function Header() {
  // Definimos los elementos de navegación una sola vez
  const navItems = useMemo(() => [
    { to: '/', label: 'Inicio' },
    { to: '/about', label: 'Colabora' }
  ], []);

  // Utilizamos el hook personalizado para controlar la visibilidad en función del scroll
  const { isVisible } = useScrollDirection();

  // Utilizamos el hook para detectar el tipo de dispositivo
  const { isMobile } = useDeviceType();

  // Calculamos las clases CSS de manera optimizada
  const headerClasses = useMemo(() => {
    const baseClasses = 'bg-brand-700 dark:bg-brand-600 shadow-md z-50';
    const positionClasses = isMobile
      ? 'fixed top-0 left-0 right-0 transition-transform duration-300 ease-in-out'
      : 'relative';
    const visibilityClasses = isMobile && !isVisible
      ? 'transform -translate-y-full'
      : 'transform-none';

    return `${baseClasses} ${positionClasses} ${visibilityClasses}`;
  }, [isMobile, isVisible]);

  // Determinamos si el header está realmente visible
  const headerIsFullyVisible = !isMobile || (isMobile && isVisible);

  return (
    <header className={headerClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <BrandLogo />

          {/* Navegación para desktop - componente separado */}
          <DesktopNav navItems={navItems} />

          {/* Controles para desktop - componente separado */}
          <DesktopControls />

          {/* Componente de menú móvil */}
          <MobileMenu
            navItems={navItems}
            isHeaderVisible={headerIsFullyVisible}
          />
        </div>
      </div>
    </header>
  );
});

export default Header;