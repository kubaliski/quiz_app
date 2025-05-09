/**
 * Componente de layout con barra lateral para navegación secundaria. (NO ESTÁ EN USO)
 * Se adapta a diferentes tamaños de pantalla con un sidebar fijo en escritorio
 * y un sidebar desplegable en dispositivos móviles.
 *
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {React.ReactNode} props.children - Contenido que se renderizará en la sección principal
 * @param {string} props.title - Título que se mostrará en la cabecera de la barra lateral
 * @param {Array<{to: string, label: string}>} [props.navItems=[]] - Elementos de navegación para la barra lateral
 * @returns {JSX.Element} Componente LayoutWithSidebar renderizado
 *
 * @example
 * const sidebarItems = [
 *   { to: '/dashboard', label: 'Panel principal' },
 *   { to: '/dashboard/profile', label: 'Mi perfil' }
 * ];
 *
 * <LayoutWithSidebar title="Dashboard" navItems={sidebarItems}>
 *   <h1>Contenido del Dashboard</h1>
 *   <p>Bienvenido a su panel de control</p>
 * </LayoutWithSidebar>
 */
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Header, Footer } from './';


export default function LayoutWithSidebar({ children, title, navItems = [] }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-grow flex">
        {/* Sidebar para móviles (con overlay) */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-40 md:hidden"
            onClick={toggleSidebar}
          >
            <div className="absolute inset-0 bg-gray-600 opacity-75 dark:bg-gray-800 dark:opacity-80"></div>
          </div>
        )}

        {/* Sidebar para móviles */}
        <div
          className={`
            fixed inset-y-0 left-0 flex flex-col z-50 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-300 md:hidden
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          `}
        >
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold dark:text-white">{title}</h2>
            <button
              onClick={toggleSidebar}
              className="rounded-md p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="flex-1 px-2 py-4 overflow-y-auto">
            <ul className="space-y-1">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.to}
                    className={`
                      block rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200
                      ${location.pathname === item.to ?
                        'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300' :
                        'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Sidebar para escritorio (siempre visible) */}
        <div className="hidden md:flex md:flex-shrink-0">
          <div className="w-64 flex flex-col border-r border-gray-200 dark:border-gray-700">
            <div className="h-16 flex items-center px-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold dark:text-white">{title}</h2>
            </div>

            <nav className="flex-1 px-2 py-4 overflow-y-auto bg-white dark:bg-gray-800">
              <ul className="space-y-1">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.to}
                      className={`
                        block rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200
                        ${location.pathname === item.to ?
                          'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300' :
                          'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                        }
                      `}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="flex-1 overflow-auto bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
          {/* Botón de hamburguesa para móviles (abre el sidebar) */}
          <div className="md:hidden bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div className="p-6">
            {children}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}