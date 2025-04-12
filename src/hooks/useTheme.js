/**
 * Hook personalizado para acceder al contexto de tema de la aplicación.
 * Proporciona acceso al estado del tema (claro/oscuro) y la función para alternarlo.
 *
 * @returns {Object} Objeto con las propiedades del contexto de tema
 * @returns {boolean} returns.darkMode - Indica si el modo oscuro está activo
 * @returns {Function} returns.toggleDarkMode - Función para alternar entre modo claro y oscuro
 *
 * @throws {Error} Si se utiliza fuera de un ThemeProvider
 *
 * @example
 * import { useTheme } from '@hooks/useTheme';
 *
 * function ThemeToggleButton() {
 *   const { darkMode, toggleDarkMode } = useTheme();
 *
 *   return (
 *     <button onClick={toggleDarkMode}>
 *       Cambiar a modo {darkMode ? 'claro' : 'oscuro'}
 *     </button>
 *   );
 * }
 */
import { useContext } from 'react';
import { ThemeContext } from '@context/ThemeContext';

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme debe ser usado dentro de un ThemeProvider');
  }
  return context;
};