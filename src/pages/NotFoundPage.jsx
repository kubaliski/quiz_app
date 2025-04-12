/**
 * Página de error 404 que se muestra cuando el usuario navega a una ruta inexistente.
 * Proporciona un enlace para volver a la página principal.
 *
 * @component
 * @returns {JSX.Element} Componente NotFoundPage renderizado
 *
 * @example
 * // En un componente Router
 * <Route path="*" element={<NotFoundPage />} />
 */
import { Link } from 'react-router-dom';
import { Layout } from '@components/layout';
import { Button } from '@components/common';

export default function NotFoundPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
        <div className="py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-9xl font-extrabold text-indigo-600 tracking-tight">
              404
            </div>

            <h1 className="mt-4 text-4xl font-bold text-gray-900 tracking-tight">
              Página no encontrada
            </h1>

            <p className="mt-4 text-lg text-gray-600">
              Lo sentimos, no pudimos encontrar la página que estás buscando.
            </p>

            <div className="mt-10">
              <Button
                as={Link}
                to="/"
                variant="primary"
              >
                Volver al inicio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}