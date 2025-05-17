/**
 * Componente para mostrar mensajes de error de forma destacada.
 *
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {string} props.message - Mensaje de error a mostrar
 * @returns {JSX.Element} Componente ErrorMessage renderizado
 *
 * @example
 * // Mostrar un mensaje de error
 * <ErrorMessage message="Ha ocurrido un error al cargar los datos." />
 *
 * @example
 * // Uso con un estado
 * const [error, setError] = useState(null);
 *
 * // En caso de error
 * {error && <ErrorMessage message={error} />}
 */
export default function ErrorMessage({ message }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-red-50 dark:bg-red-900 dark:bg-opacity-20 border-l-4 border-red-500 p-4 w-full max-w-xl">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-red-700 dark:text-red-300">
              {message}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}