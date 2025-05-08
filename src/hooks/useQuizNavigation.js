/**
 * Hook personalizado para manejar la navegación del quiz
 * Gestiona la navegación entre preguntas, atajos de teclado y finalización del quiz
 */
import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuizContext } from './index';

/**
 * Hook para manejar la navegación del quiz
 * @param {Object} config - Configuración para la navegación
 * @param {function} config.saveQuizProgress - Función para guardar el progreso
 * @param {string} config.asignaturaId - ID de la asignatura (string)
 * @param {string|number} config.modId - ID del módulo o 'todos'/'examen'
 */
export function useQuizNavigation({
  saveQuizProgress,
  asignaturaId,
  modId
}) {
  const navigate = useNavigate();
  const {
    preguntaActual,
    totalPreguntas,
    respuestas,
    preguntas,
    asignatura,
    modulo,
    modoExamen,
    tipoQuiz,
    dialogOpen,
    cargando,
    setPreguntaActual,
    openDialog,
    closeDialog,
    setQuizCompleted,
    asigId
  } = useQuizContext();

  // Manejar avance a siguiente pregunta
  const handleNext = useCallback(() => {
    if (preguntaActual < totalPreguntas - 1) {
      setPreguntaActual(preguntaActual + 1);
      // Guardar progreso actualizado
      setTimeout(saveQuizProgress, 0);
    } else {
      // Guardar resultados en sessionStorage para la página de resultados
      sessionStorage.setItem('quiz_respuestas', JSON.stringify(respuestas));
      sessionStorage.setItem('quiz_preguntas', JSON.stringify(preguntas));
      sessionStorage.setItem('quiz_asignatura', JSON.stringify({
        id: asigId,
        nombre: asignatura?.nombre || 'Asignatura'
      }));

      // Guardar información sobre el tipo de quiz
      sessionStorage.setItem('quiz_tipo', tipoQuiz || 'regular');

      // Marcar como completado
      setQuizCompleted(true);
      // Eliminar del localStorage ya que se completó
      const quizKey = `quiz_progress_${asignaturaId}_${modId}`;
      localStorage.removeItem(quizKey);
      // Quitar flag de quiz en progreso
      localStorage.setItem('quiz_in_progress', 'false');

      if (modulo) {
        sessionStorage.setItem('quiz_modulo', JSON.stringify({
          id: modulo.id,
          nombre: modulo.nombre,
          esExamen: modulo.esExamen
        }));

        // Navegación a módulo específico
        navigate(`/resultados/${asignaturaId}/${modulo.id}`);
      } else if (modoExamen || tipoQuiz === 'examen') {
        sessionStorage.setItem('quiz_modulo', JSON.stringify({
          id: 'examen',
          nombre: 'Preguntas de examen'
        }));

        // Navegación a modo examen
        navigate(`/resultados/${asignaturaId}/examen`);
      } else {
        sessionStorage.setItem('quiz_modulo', JSON.stringify({
          id: 'todos',
          nombre: 'Todos los módulos'
        }));

        // Navegación a modo todos
        navigate(`/resultados/${asignaturaId}/todos`);
      }
    }
  }, [
    preguntaActual,
    totalPreguntas,
    respuestas,
    preguntas,
    asigId,
    asignatura,
    tipoQuiz,
    modulo,
    modoExamen,
    asignaturaId,
    navigate,
    setPreguntaActual,
    saveQuizProgress,
    setQuizCompleted,
    modId
  ]);

  // Manejar retroceso a pregunta anterior
  const handlePrevious = useCallback(() => {
    if (preguntaActual > 0) {
      setPreguntaActual(preguntaActual - 1);
      // Guardar progreso actualizado
      setTimeout(saveQuizProgress, 0);
    }
  }, [preguntaActual, setPreguntaActual, saveQuizProgress]);

  // Manejador para la salida del quiz
  const handleExit = useCallback(() => {
    // Abrir el diálogo para confirmar salida
    openDialog('exit');
  }, [openDialog]);

  // Confirmar salida del quiz
  const handleConfirmExit = useCallback(() => {
    // Cerrar el diálogo
    closeDialog();

    // Si el quiz no se completó, limpiar flag
    localStorage.setItem('quiz_in_progress', 'false');

    // Eliminar progreso guardado
    const quizKey = `quiz_progress_${asignaturaId}_${modId}`;
    localStorage.removeItem(quizKey);

    // Navegar a la página de módulos
    navigate(`/asignaturas/${asignaturaId}`);
  }, [closeDialog, asignaturaId, navigate, modId]);

  // Cancelar la salida
  const handleCancelExit = useCallback(() => {
    closeDialog();
  }, [closeDialog]);

  // Manejador de teclas para navegación con teclado
  const handleKeyDown = useCallback((event) => {
    // Solo manejar eventos de teclado si no hay diálogo abierto y el quiz está cargado
    if (dialogOpen || cargando || preguntas.length === 0) {
      return;
    }

    // Verificar qué tecla se presionó
    if (event.key === 'ArrowRight') {
      // Permitir navegar a la siguiente pregunta aunque no haya respuesta seleccionada
      if (preguntaActual < totalPreguntas - 1) {
        event.preventDefault(); // Prevenir comportamiento por defecto
        setPreguntaActual(preguntaActual + 1);
        // Guardar progreso actualizado
        setTimeout(saveQuizProgress, 0);
      }
    } else if (event.key === 'ArrowLeft') {
      // Tecla izquierda: ir a pregunta anterior si no es la primera
      if (preguntaActual > 0) {
        event.preventDefault(); // Prevenir comportamiento por defecto
        setPreguntaActual(preguntaActual - 1);
        // Guardar progreso actualizado
        setTimeout(saveQuizProgress, 0);
      }
    }
  }, [
    dialogOpen,
    cargando,
    preguntas.length,
    preguntaActual,
    totalPreguntas,
    setPreguntaActual,
    saveQuizProgress
  ]);

  // Efecto para manejar eventos de teclado
  useEffect(() => {
    // Añadir el event listener cuando el componente se monta
    document.addEventListener('keydown', handleKeyDown);

    // Limpiar el event listener cuando el componente se desmonta
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return {
    handleNext,
    handlePrevious,
    handleExit,
    handleConfirmExit,
    handleCancelExit
  };
}