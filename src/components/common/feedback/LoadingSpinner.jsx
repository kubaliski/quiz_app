/**
 * Componente de indicador de carga que muestra un spinner giratorio.
 *
 * @component
 * @returns {JSX.Element} Componente LoadingSpinner renderizado
 *
 * @example
 * // Uso básico
 * <LoadingSpinner />
 *
 * @example
 * // Uso condicional durante la carga de datos
 * {isLoading ? <LoadingSpinner /> : <DataComponent data={data} />}
 */
export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-500 dark:border-indigo-400"></div>
    </div>
  );
}