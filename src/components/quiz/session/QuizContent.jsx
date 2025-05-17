/**
 * Componente para mostrar el contenido principal del quiz
 * Incluye la pregunta actual, opciones de respuesta y navegación
 */
import { QuestionCard, QuizNavigation, QuestionNavigator } from '../index';
import { LoadingSpinner } from '@components/common';
import { useQuizContext } from '@hooks';

/**
 * @param {Object} props - Propiedades del componente
 * @param {function} props.handlePrevious - Función para ir a pregunta anterior
 * @param {function} props.handleNext - Función para ir a siguiente pregunta
 * @param {function} props.handleSelectAnswer - Función para seleccionar respuesta
 * @param {boolean} [props.showFavoriteButton=false] - Si se debe mostrar el botón de favorito
 * @param {string|number} [props.asignaturaId] - ID de la asignatura (para favoritos)
 * @returns {JSX.Element} Componente QuizContent
 */
export default function QuizContent({
  handlePrevious,
  handleNext,
  handleSelectAnswer,
  showFavoriteButton = false,
  asignaturaId
}) {
  const {
    cargando,
    preguntaActiva,
    respuestas,
    preguntaActual,
    totalPreguntas,
    tieneRespuestaActual,
    asignatura
  } = useQuizContext();

  if (cargando) {
    return (
      <div className="py-12">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <>
      {preguntaActiva && (
        <>
          {/* Tarjeta de pregunta actual */}
          <QuestionCard
            pregunta={preguntaActiva}
            respuestaSeleccionada={respuestas[preguntaActiva.id]}
            onSelectAnswer={handleSelectAnswer}
            showFavoriteButton={showFavoriteButton}
            asignaturaId={asignaturaId}
            asignatura={asignatura}
          />

          {/* Navegación siguiente/anterior */}
          <QuizNavigation
            preguntaActual={preguntaActual}
            totalPreguntas={totalPreguntas}
            respuestaSeleccionada={tieneRespuestaActual}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />

          {/* Navegador de preguntas */}
          <div className="mt-6 md:mt-3">
            <QuestionNavigator />
          </div>

          {/* Nota sobre navegación por teclado - oculta en móviles */}
          <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400 hidden md:block">
            <span className="inline-block mx-1 font-medium">←</span> Anterior
            <span className="mx-2">|</span>
            Siguiente
            <span className="inline-block mx-1 font-medium">→</span>
            <span className="mx-2">|</span>
            <span className="font-medium">Alt+N</span> Ir a sin responder
          </div>
        </>
      )}
    </>
  );
}