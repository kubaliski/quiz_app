/**
 * Barra de progreso personalizable que muestra visualmente el avance de un proceso.
 *
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {number} props.progreso - Valor del progreso (0-100)
 * @param {string} [props.height='h-2'] - Altura de la barra de progreso usando clases de Tailwind
 * @param {string} [props.color='bg-indigo-600 dark:bg-indigo-500'] - Color de la barra de progreso usando clases de Tailwind
 * @returns {JSX.Element} Componente ProgressBar renderizado
 *
 * @example
 * // Uso básico
 * <ProgressBar progreso={75} />
 *
 * @example
 * // Barra personalizada
 * <ProgressBar
 *   progreso={downloadProgress}
 *   height="h-4"
 *   color="bg-green-500 dark:bg-green-400"
 * />
 */
export default function ProgressBar({
  progreso,
  height = 'h-2',
  color = 'bg-indigo-600 dark:bg-indigo-500'
}) {
  return (
    <div className={`w-full bg-gray-200 dark:bg-gray-700 rounded-full ${height}`}>
      <div
        className={`${color} ${height} rounded-full transition-all duration-500 ease-out`}
        style={{ width: `${progreso}%` }}
      ></div>
    </div>
  );
}