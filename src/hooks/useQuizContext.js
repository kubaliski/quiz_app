/**
 * Hook personalizado para facilitar el acceso al contexto del quiz.
 */
import { useContext } from 'react';
import { QuizContext } from '@context';

/**
 * Hook para acceder al contexto del quiz.
 * Proporciona acceso al estado y las acciones del quiz.
 *
 * @returns {Object} El contexto completo del quiz (estado + acciones)
 * @throws {Error} Si se usa fuera de un QuizProvider
 */
export function useQuizContext() {
  const context = useContext(QuizContext);

  if (!context) {
    throw new Error('useQuizContext debe usarse dentro de un QuizProvider');
  }

  return context;
}