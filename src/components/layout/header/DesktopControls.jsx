/**
 * Componente para mostrar controles adicionales en la versión de escritorio del header.
 * Incluye el toggle de tema y puede extenderse para incluir otros controles.
 * Se oculta en dispositivos móviles mediante clases de utilidad.
 *
 * @component
 * @returns {JSX.Element} Componente DesktopControls renderizado
 *
 * @example
 * <DesktopControls />
 */
import { memo } from 'react';
import { ThemeToggle } from '..';

const DesktopControls = memo(function DesktopControls() {
  return (
    <div className="hidden md:flex items-center">
      {/* Toggle de tema */}
      <ThemeToggle />

      {/* Espacio para elementos adicionales */}
      <div className="ml-4 flex items-center md:ml-6">
        {/* Aquí puedes añadir botones, notificaciones, etc. */}
      </div>
    </div>
  );
});

export default DesktopControls;