/**
 * Componente para mostrar el contenido principal del quiz
 * Incluye la pregunta actual, opciones de respuesta y navegación
 */
import React from 'react';
import { QuestionCard, QuizNavigation } from './index';
import { LoadingSpinner } from '@components/common';
import { useQuizContext } from '@hooks';

/**
 * @param {Object} props - Propiedades del componente
 * @param {function} props.handlePrevious - Función para ir a pregunta anterior
 * @param {function} props.handleNext - Función para ir a siguiente pregunta
 * @param {function} props.handleSelectAnswer - Función para seleccionar respuesta
 * @returns {JSX.Element} Componente QuizContent
 */
export default function QuizContent({
  handlePrevious,
  handleNext,
  handleSelectAnswer
}) {
  const {
    cargando,
    preguntaActiva,
    respuestas,
    preguntaActual,
    totalPreguntas,
    tieneRespuestaActual
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
          <QuestionCard
            pregunta={preguntaActiva}
            respuestaSeleccionada={respuestas[preguntaActiva.id]}
            onSelectAnswer={handleSelectAnswer}
          />

          <QuizNavigation
            preguntaActual={preguntaActual}
            totalPreguntas={totalPreguntas}
            respuestaSeleccionada={tieneRespuestaActual}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />

          {/* Añadimos una pequeña nota sobre la navegación por teclado */}
          <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
            <span className="inline-block mx-1 font-medium">←</span> Anterior
            <span className="mx-2">|</span>
            Siguiente
            <span className="inline-block mx-1 font-medium">→</span>
          </div>
        </>
      )}
    </>
  );
}