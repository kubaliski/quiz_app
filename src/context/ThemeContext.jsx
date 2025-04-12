/**
 * Contexto de React para manejar el tema de la aplicación (claro/oscuro).
 * Proporciona acceso al estado del tema y la función para cambiarlo a través de toda la aplicación.
 *
 * @typedef {Object} ThemeContextType
 * @property {boolean} darkMode - Estado que indica si el modo oscuro está activo
 * @property {Function} toggleDarkMode - Función para alternar entre modo claro y oscuro
 *
 * @type {React.Context<ThemeContextType>}
 *
 * @example
 * // Uso del contexto en un componente
 * import { useContext } from 'react';
 * import { ThemeContext } from './ThemeContext';
 *
 * function MyComponent() {
 *   const { darkMode, toggleDarkMode } = useContext(ThemeContext);
 *
 *   return (
 *     <div>
 *       <p>El modo actual es: {darkMode ? 'oscuro' : 'claro'}</p>
 *       <button onClick={toggleDarkMode}>Cambiar tema</button>
 *     </div>
 *   );
 * }
 */
import { createContext } from 'react';
export const ThemeContext = createContext();