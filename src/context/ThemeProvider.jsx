/**
 * Proveedor del contexto de tema que gestiona el estado del tema (claro/oscuro) de la aplicación.
 * Maneja la persistencia del tema en localStorage y la sincronización con las preferencias del sistema.
 *
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {React.ReactNode} props.children - Componentes hijos que tendrán acceso al contexto
 * @returns {JSX.Element} Proveedor del contexto de tema con sus hijos
 *
 * @example
 * // En el componente raíz de la aplicación
 * import { ThemeProvider } from './ThemeProvider';
 *
 * function App() {
 *   return (
 *     <ThemeProvider>
 *       <Router>
 *         {Resto de componentes }
 *       </Router>
 *     </ThemeProvider>
 *   );
 * }
 *
 * @example
 * // También se puede usar para secciones específicas de la aplicación
 * function Dashboard() {
 *   return (
 *     <ThemeProvider>
 *       <DashboardLayout>
 *         <DashboardContent />
 *       </DashboardLayout>
 *     </ThemeProvider>
 *   );
 * }
 */

import { useState, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';

export const ThemeProvider = ({ children }) => {
  // Verificar preferencia en localStorage o usar preferencia del sistema
  const [darkMode, setDarkMode] = useState(() => {
    // Intentar obtener del localStorage primero
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      return savedMode === 'true';
    }
    // Si no hay preferencia guardada, comprobar preferencia del sistema
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Función para cambiar el tema
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  // Actualizar el documento cuando cambie el modo
  useEffect(() => {
    // Aplicar clase al HTML element
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Guardar en localStorage
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  // Escuchar cambios en la preferencia del sistema
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      // Solo actualizar si no hay preferencia guardada
      if (localStorage.getItem('darkMode') === null) {
        setDarkMode(e.matches);
      }
    };

    // Añadir listener para cambios en la preferencia del sistema
    mediaQuery.addEventListener('change', handleChange);
    // Limpiar
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};