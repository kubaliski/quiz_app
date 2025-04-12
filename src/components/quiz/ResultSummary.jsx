/**
 * Componente que muestra un resumen de los resultados del quiz con visualización
 * de la puntuación, barra de progreso y mensaje personalizado según el rendimiento.
 *
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {Object} props.puntuacion - Objeto con la información de la puntuación
 * @param {number} props.puntuacion.correctas - Número de respuestas correctas
 * @param {number} props.puntuacion.total - Número total de preguntas
 * @param {number} props.puntuacion.porcentaje - Porcentaje de acierto (0-100)
 * @returns {JSX.Element} Componente ResultSummary renderizado
 *
 * @example
 * const resultados = {
 *   correctas: 8,
 *   total: 10,
 *   porcentaje: 80
 * };
 *
 * <ResultSummary puntuacion={resultados} />
 */
import { Card } from '@components/common';
import { getColorClasePorcentaje, getBackgroundColorClass } from '@utils/quizUtils';

export default function ResultSummary({ puntuacion }) {
  const colorClase = getColorClasePorcentaje(puntuacion.porcentaje);
  const backgroundColorClass = getBackgroundColorClass(puntuacion.porcentaje);

  return (
    <Card className="mb-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2 dark:text-white">
          Tu puntuación: {puntuacion.correctas}/{puntuacion.total} ({puntuacion.porcentaje}%)
        </h2>

        <div className="mt-4">
          <div className="flex items-center justify-center">
            <div className={`text-4xl font-bold ${colorClase}`}>
              {puntuacion.porcentaje}%
            </div>
          </div>

          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mt-4">
            <div
              className={`h-4 rounded-full ${backgroundColorClass}`}
              style={{ width: `${puntuacion.porcentaje}%` }}
            ></div>
          </div>
        </div>

        <div className="mt-6 text-gray-600 dark:text-gray-400">
          {puntuacion.porcentaje >= 70 ? (
            <p>¡Excelente trabajo! Dominas bien este tema.</p>
          ) : puntuacion.porcentaje >= 50 ? (
            <p>Buen trabajo, pero hay espacio para mejorar.</p>
          ) : (
            <p>Es recomendable repasar este tema con más profundidad.</p>
          )}
        </div>
      </div>
    </Card>
  );
}