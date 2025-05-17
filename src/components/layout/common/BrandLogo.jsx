/**
 * Componente que muestra el logotipo y nombre de la aplicación,
 * actuando como enlace a la página principal.
 *
 * @component
 * @returns {JSX.Element} Componente BrandLogo renderizado
 *
 * @example
 * <BrandLogo />
 */
import { memo } from 'react';
import { Link } from 'react-router-dom';

const BrandLogo = memo(function BrandLogo() {
  return (
    <div className="flex-shrink-0">
      <Link to="/" className="flex items-center">
        <span className="font-bold text-xl text-white">Quiz App</span>
      </Link>
    </div>
  );
});

export default BrandLogo;