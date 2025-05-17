/**
 * Componente de layout principal mejorado que estructura la página con cabecera, contenido principal y pie de página.
 * Añade un espacio adicional en la parte superior solo en dispositivos móviles para compensar el header fijo.
 *
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {React.ReactNode} props.children - Contenido que se renderizará en la sección principal
 * @returns {JSX.Element} Componente Layout renderizado
 *
 * @example
 * <Layout>
 *   <h1>Contenido de la página</h1>
 *   <p>Esta es la página principal</p>
 * </Layout>
 */
import { Header, Footer } from '../index';
import { useDeviceType } from '@hooks';

export default function Layout({ children }) {
  const { isMobile } = useDeviceType();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Añadimos padding-top solo en dispositivos móviles para compensar el header fijo */}
      <main className={`
        flex-grow bg-gray-100 dark:bg-gray-900 transition-colors duration-300
        ${isMobile ? 'pt-16' : ''}
      `}>
        {children}
      </main>

      <Footer />
    </div>
  );
}