/**
 * Hook personalizado para gestionar los diálogos del quiz
 */
import { useCallback } from 'react';
import { useQuizContext } from './index';

/**
 * Hook para manejar los diálogos del quiz
 * @param {Object} config - Configuración para los diálogos
 * @param {string} config.asignaturaId - ID de la asignatura (string)
 * @param {string|number} config.modId - ID del módulo o 'todos'/'examen'
 * @param {function} config.handleConfirmExit - Función para confirmar salida
 * @param {function} config.handleCancelExit - Función para cancelar salida
 */
export function useQuizDialogs({
  asignaturaId,
  modId,
  handleConfirmExit,
  handleCancelExit
}) {
  const {
    dialogOpen,
    dialogType,
    savedProgress,
    restoreProgress,
    closeDialog
  } = useQuizContext();

  // Restaurar progreso guardado
  const handleRestoreProgress = useCallback(() => {
    if (!savedProgress) return;

    // Usamos la acción del contexto para restaurar el progreso
    restoreProgress(savedProgress);
  }, [savedProgress, restoreProgress]);

  // Descartar progreso guardado
  const handleDiscardProgress = useCallback(() => {
    // Eliminar el progreso guardado
    const quizKey = `quiz_progress_${asignaturaId}_${modId}`;
    localStorage.removeItem(quizKey);

    // Cerrar el diálogo
    closeDialog();
  }, [asignaturaId, modId, closeDialog]);

  return {
    dialogOpen,
    dialogType,
    savedProgress,
    handleRestoreProgress,
    handleDiscardProgress,
    handleConfirmExit,
    handleCancelExit
  };
}