/**
 * Componente para mostrar el progreso actual del quiz
 * Incluye barra de progreso, contador de preguntas y etiqueta de modo examen
 *
 * @returns {JSX.Element} Componente QuizProgress
 */
import React from 'react';
import { ProgressBar } from '@components/common';
import { useQuizContext } from '@hooks';

export default function QuizProgress() {
  const {
    preguntaActual,
    totalPreguntas,
    progreso,
    modoExamen
  } = useQuizContext();

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm font-medium bg-indigo-100 text-indigo-800 py-1 px-3 rounded-full">
          Pregunta {preguntaActual + 1} de {totalPreguntas}
        </div>

        {modoExamen && (
          <div className="text-sm font-medium bg-red-100 text-red-800 py-1 px-3 rounded-full">
            Modo examen
          </div>
        )}
      </div>

      <ProgressBar
        progreso={progreso}
        className={`mb-6 ${modoExamen ? 'bg-red-600' : 'bg-indigo-600'}`}
      />
    </>
  );
}