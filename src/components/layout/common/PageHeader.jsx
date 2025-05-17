/**
 * Componente de encabezado de página que muestra título, subtítulo opcional,
 * migas de pan y acciones relacionadas con la página.
 *
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {string} props.title - Título principal de la página
 * @param {string} [props.subtitle] - Subtítulo opcional para la página
 * @param {React.ReactNode} [props.actions=null] - Componentes de acción (botones, etc.) a mostrar en la esquina superior derecha
 * @param {Array<{label: string, to?: string}>} [props.breadcrumbs=[]] - Elementos de migas de pan para mostrar la jerarquía de navegación
 * @returns {JSX.Element} Componente PageHeader renderizado
 *
 * @example
 * // Encabezado básico
 * <PageHeader title="Gestión de Usuarios" />
 *
 * @example
 * // Encabezado completo con todas las características
 * const breadcrumbs = [
 *   { label: 'Dashboard', to: '/dashboard' },
 *   { label: 'Usuarios', to: '/dashboard/users' },
 *   { label: 'Editar Usuario' }
 * ];
 *
 * <PageHeader
 *   title="Editar Usuario"
 *   subtitle="Modifique la información del usuario"
 *   breadcrumbs={breadcrumbs}
 *   actions={
 *     <Button variant="danger" onClick={handleDelete}>
 *       Eliminar Usuario
 *     </Button>
 *   }
 * />
 */
import { Link } from 'react-router-dom';

export default function PageHeader({
  title,
  subtitle,
  actions = null,
  breadcrumbs = []
}) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        {breadcrumbs.length > 0 && (
          <nav className="flex mb-2" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-1 text-sm">
              {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return (
                  <li key={index} className="flex items-center">
                    {index > 0 && (
                      <svg
                        className="h-4 w-4 text-gray-400 dark:text-gray-500 mx-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                    {crumb.to ? (
                      <Link
                        to={crumb.to}
                        className={`${isLast ? 'text-gray-700 dark:text-gray-300 font-medium' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'} transition-colors duration-200`}
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className={`${isLast ? 'text-gray-700 dark:text-gray-300 font-medium' : 'text-gray-500 dark:text-gray-400'}`}>
                        {crumb.label}
                      </span>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {subtitle}
              </p>
            )}
          </div>
          {actions && (
            <div className="mt-4 md:mt-0 md:ml-4">
              {actions}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}