/**
 * Componente de pie de página que muestra información de copyright, enlaces de navegación
 * y la versión actual de la aplicación.
 *
 * @component
 * @returns {JSX.Element} Componente Footer renderizado
 *
 * @example
 * <Footer />
 */
import { memo } from 'react';
import VersionInfo from './VersionInfo';
import FooterNav from './FooterNav';

const Footer = memo(function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm">
              &copy; {currentYear} Quiz App
              <VersionInfo />
            </p>
          </div>

          <FooterNav />
        </div>
      </div>
    </footer>
  );
});

export default Footer;