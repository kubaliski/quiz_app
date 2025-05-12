/**
 * Hook personalizado que proporciona información sobre el tipo de dispositivo
 * basado en el tamaño de la pantalla.
 *
 * @returns {Object} Un objeto con propiedades booleanas: isMobile, isTablet, isDesktop
 *
 * @example
 * const { isMobile, isTablet, isDesktop } = useDeviceType();
 *
 * // Usar en componentes para renderizado condicional
 * return (
 *   <div>
 *     {isMobile ? <MobileComponent /> : <DesktopComponent />}
 *   </div>
 * );
 */
import { useMediaQuery } from './useMediaQuery';

export function useDeviceType() {
  // Definimos los breakpoints según los estándares de Tailwind CSS
  const isMobileScreen = useMediaQuery('(max-width: 767px)');
  const isTabletScreen = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
  const isDesktopScreen = useMediaQuery('(min-width: 1024px)');

  return {
    isMobile: isMobileScreen,
    isTablet: isTabletScreen,
    isDesktop: isDesktopScreen
  };
}