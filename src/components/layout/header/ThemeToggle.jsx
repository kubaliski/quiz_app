/**
 * Componente de conmutación entre tema claro y oscuro.
 * Utiliza el hook useTheme para gestionar el estado del tema.
 *
 * @component
 * @returns {JSX.Element} Componente ThemeToggle renderizado
 *
 * @example
 * <ThemeToggle />
 *
 * @example
 * // Uso dentro de un componente de navegación
 * <nav>
 *   <ul>
 *     <li><Link to="/">Inicio</Link></li>
 *     <li className="ml-auto"><ThemeToggle /></li>
 *   </ul>
 * </nav>
 */
import { useTheme } from '@hooks';

export default function ThemeToggle() {
  const { darkMode, toggleDarkMode } = useTheme();



  const handleToggleClick = () => {
    toggleDarkMode();
    // Verificar un poco después para permitir que el estado se actualice
    setTimeout(() => {
    }, 50);
  };

  return (
    <button
      onClick={handleToggleClick}
      className="p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white relative hover:cursor-pointer"
      aria-label={darkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    >

      {darkMode ? (
        // Icono sol (modo claro)
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        // Icono luna (modo oscuro)
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
}