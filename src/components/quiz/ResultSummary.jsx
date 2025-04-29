/**
 * Componente que muestra un resumen de los resultados del quiz con visualización
 * de la puntuación, barra de progreso, nota sobre 10 y mensaje personalizado según el rendimiento.
 *
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {Object} props.puntuacion - Objeto con la información de la puntuación
 * @param {number} props.puntuacion.correctas - Número de respuestas correctas (después de penalización)
 * @param {number} props.puntuacion.incorrectas - Número de respuestas incorrectas
 * @param {number} props.puntuacion.penalizacion - Penalización aplicada
 * @param {number} props.puntuacion.aciertosOriginales - Aciertos antes de aplicar penalización
 * @param {number} props.puntuacion.total - Número total de preguntas
 * @param {number} props.puntuacion.porcentaje - Porcentaje de acierto (0-100)
 * @param {number} props.puntuacion.notaSobre10 - Nota sobre 10 con redondeo específico
 * @returns {JSX.Element} Componente ResultSummary renderizado
 */
import { Card } from '@components/common';
import { getColorClasePorcentaje, getBackgroundColorClass } from '@utils/quizUtils';

export default function ResultSummary({ puntuacion }) {
  const colorClase = getColorClasePorcentaje(puntuacion.porcentaje);
  const backgroundColorClass = getBackgroundColorClass(puntuacion.porcentaje);

  // Funciones para determinar el estilo y mensaje según la nota
  const getResultClass = () => {
    const nota = puntuacion.notaSobre10;

    if (nota >= 9) return { color: 'bg-green-600 dark:bg-green-500', message: '¡Excelente!' };
    if (nota >= 8) return { color: 'bg-green-500 dark:bg-green-400', message: '¡Muy bien!' };
    if (nota >= 7) return { color: 'bg-green-400 dark:bg-green-300', message: 'Buen trabajo' };
    if (nota >= 6) return { color: 'bg-yellow-500 dark:bg-yellow-400', message: 'Aprobado' };
    if (nota >= 5) return { color: 'bg-yellow-400 dark:bg-yellow-300', message: 'Justo aprobado' };
    return { color: 'bg-red-500 dark:bg-red-400', message: 'Necesitas mejorar' };
  };

  const getBackgroundClass = () => {
    const nota = puntuacion.notaSobre10;

    if (nota >= 9) return 'bg-green-100 dark:bg-green-900 dark:bg-opacity-30';
    if (nota >= 7) return 'bg-green-50 dark:bg-green-800 dark:bg-opacity-20';
    if (nota >= 5) return 'bg-yellow-50 dark:bg-yellow-800 dark:bg-opacity-20';
    return 'bg-red-50 dark:bg-red-900 dark:bg-opacity-20';
  };

  const { color, message } = getResultClass();
  const backgroundClass = getBackgroundClass();

  return (
    <Card className="mb-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2 dark:text-white">
          Tu puntuación: {puntuacion.correctas}/{puntuacion.total} ({puntuacion.porcentaje}%)
        </h2>

        {/* Visualización del porcentaje y nota sobre 10 */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Porcentaje */}
          <div>
            <p className="text-gray-600 dark:text-gray-400 mb-2">Porcentaje de acierto</p>
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

          {/* Nota sobre 10 */}
          <div>
            <p className="text-gray-600 dark:text-gray-400 mb-2">Nota sobre 10</p>
            <div className="flex items-center justify-center">
              <div className={`w-20 h-20 rounded-full ${color} flex items-center justify-center`}>
                <span className="text-3xl font-bold text-white">{puntuacion.notaSobre10}</span>
              </div>
            </div>
            <p className="mt-2 font-medium">{message}</p>
          </div>
        </div>

        {/* Detalle de respuestas y penalización */}
        <div className={`mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-left ${backgroundClass} p-4 rounded-lg`}>
          <div>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-medium">Aciertos iniciales:</span> {puntuacion.aciertosOriginales}/{puntuacion.total}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-medium">Errores:</span> {puntuacion.incorrectas}/{puntuacion.total}
            </p>
          </div>
          <div>
            <p className="text-amber-600 dark:text-amber-400">
              <span className="font-medium">Penalización:</span> -{puntuacion.penalizacion} puntos
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-sm italic">
              (1 punto menos por cada 3 errores)
            </p>
          </div>
        </div>

        {/* Mensaje de rendimiento basado en la nota */}
        <div className="mt-6 text-gray-600 dark:text-gray-400">
          {puntuacion.notaSobre10 >= 7 ? (
            <p>¡Excelente trabajo! Dominas bien este tema.</p>
          ) : puntuacion.notaSobre10 >= 5 ? (
            <p>Buen trabajo, pero hay espacio para mejorar.</p>
          ) : (
            <p>Es recomendable repasar este tema con más profundidad.</p>
          )}
        </div>
      </div>
    </Card>
  );
}