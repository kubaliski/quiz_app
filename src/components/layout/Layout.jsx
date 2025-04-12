/**
 * Componente de layout principal que estructura la página con cabecera, contenido principal y pie de página.
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
import { Header, Footer } from './';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        {children}
      </main>

      <Footer />
    </div>
  );
}