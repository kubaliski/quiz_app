/**
 * Componente de navegación para avanzar o retroceder entre las preguntas de un quiz.
 * Muestra botones de navegación con estados deshabilitados según la posición actual
 * y si se ha respondido la pregunta.
 *
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {number} props.preguntaActual - Índice de la pregunta actual
 * @param {number} props.totalPreguntas - Número total de preguntas en el quiz
 * @param {number|undefined} props.respuestaSeleccionada - Índice de la respuesta seleccionada en la pregunta actual
 * @param {Function} props.onPrevious - Función a ejecutar para ir a la pregunta anterior
 * @param {Function} props.onNext - Función a ejecutar para ir a la siguiente pregunta o ver resultados
 * @returns {JSX.Element} Componente QuizNavigation renderizado
 *
 * @example
 * <QuizNavigation
 *   preguntaActual={2}
 *   totalPreguntas={10}
 *   respuestaSeleccionada={1}
 *   onPrevious={() => setCurrentQuestion(prev => prev - 1)}
 *   onNext={() => setCurrentQuestion(prev => prev + 1)}
 * />
 */
import { Button } from '@components/common';

export default function QuizNavigation({
  preguntaActual,
  totalPreguntas,
  respuestaSeleccionada,
  onPrevious,
  onNext
}) {
  const isFirstQuestion = preguntaActual === 0;
  const isLastQuestion = preguntaActual === totalPreguntas - 1;
  const hasAnswer = respuestaSeleccionada !== undefined;

  return (
    <div className="flex justify-between">
      <Button
        variant="secondary"
        onClick={onPrevious}
        disabled={isFirstQuestion}
      >
        Anterior
      </Button>

      <Button
        variant="primary"
        onClick={onNext}
        disabled={!hasAnswer}
      >
        {isLastQuestion ? 'Ver resultados' : 'Siguiente'}
      </Button>
    </div>
  );
}