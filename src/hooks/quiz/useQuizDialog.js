/**
 * Una solución simple para el problema del destello: presentar el diálogo inmediatamente.
 * Sin condiciones complejas que puedan bloquear la UI.
 */
import { useCallback, useEffect } from 'react';
import { useQuizContext } from './useQuizContext';

// Variable global para rastrear si ya se ha mostrado un diálogo en esta sesión
let dialogShownGlobal = false;

export function useQuizDialogs({ asignaturaId, modId, handleConfirmExit, handleCancelExit, continueFromPending = false }) {
  const {
    dialogOpen,
    dialogType,
    savedProgress,
    closeDialog,
    setPreguntaActual,
    setPreguntas,
    setAsignatura,
    setModulo,
    restoreProgress,
    setTipoQuiz,
    setRespuesta,
    setCargando,
    setError,
    openDialog,
    setSavedProgress
  } = useQuizContext();

  // Comprobar si hay progreso guardado y mostrar diálogo
  // Esta función es llamada SOLO desde QuizPage, una única vez
  const checkForSavedProgress = useCallback(() => {
    // Si ya se ha mostrado un diálogo o venimos de pendientes, no hacemos nada
    if (dialogShownGlobal || continueFromPending || dialogOpen) {
      return null; // Devolver null indica que no hay progreso guardado
    }

    // Inmediatamente marcamos que se ha mostrado un diálogo
    dialogShownGlobal = true;

    try {
      // Construir clave del progreso
      const quizKey = `quiz_progress_${asignaturaId}_${modId}`;
      const savedProgressJSON = localStorage.getItem(quizKey);

      if (!savedProgressJSON) {
        return null; // No hay progreso guardado
      }

      // Parsear el progreso guardado
      const progressData = JSON.parse(savedProgressJSON);

      // Verificar que sea reciente (menos de 24 horas)
      const now = new Date().getTime();
      const timestamp = progressData.timestamp || 0;
      const hoursElapsed = (now - timestamp) / (1000 * 60 * 60);

      if (hoursElapsed < 24 && progressData.preguntas && progressData.preguntas.length > 0) {


        // Establecer los datos en el contexto
        setSavedProgress(progressData);

        // Mostrar el diálogo inmediatamente
        openDialog('restore-progress');

        // Devolver los datos para usar en QuizPage
        return progressData;
      }

      return null; // No hay progreso válido
    } catch (error) {
      console.error("Error al verificar progreso guardado:", error);
      return null; // Error al verificar
    }
  }, [asignaturaId, modId, continueFromPending, dialogOpen, setSavedProgress, openDialog]);

  // Restaurar progreso
  const handleRestoreProgress = useCallback(async () => {
    if (!savedProgress) {
      closeDialog();
      return;
    }

    try {
      setCargando(true);

      // Restaurar tipo de quiz
      if (savedProgress.tipoQuiz) {
        setTipoQuiz(savedProgress.tipoQuiz);
      }

      // Restaurar asignatura y módulo
      if (savedProgress.asignatura) {
        setAsignatura(savedProgress.asignatura);
      }

      if (savedProgress.modulo) {
        setModulo(savedProgress.modulo);
      }

      // Restaurar preguntas
      if (savedProgress.preguntas && savedProgress.preguntas.length > 0) {
        setPreguntas(savedProgress.preguntas);
      }

      // Restaurar pregunta actual
      setPreguntaActual(savedProgress.preguntaActual || 0);

      // Restaurar respuestas
      if (savedProgress.respuestas) {
        Object.entries(savedProgress.respuestas).forEach(([preguntaId, respuesta]) => {
          setRespuesta(preguntaId, respuesta);
        });
      }

      // Usar el reducer para restaurar estado
      restoreProgress(savedProgress);

      setCargando(false);
    } catch (error) {
      console.error('Error al restaurar progreso:', error);
      setError('Error al restaurar progreso. Por favor, inténtalo de nuevo.');
      setCargando(false);
    }

    closeDialog();
  }, [savedProgress, closeDialog, setCargando, setTipoQuiz, setAsignatura, setModulo, setPreguntas, setPreguntaActual, setRespuesta, restoreProgress, setError]);

  // Descartar progreso guardado
  const handleDiscardProgress = useCallback(() => {
    try {
      localStorage.removeItem(`quiz_progress_${asignaturaId}_${modId}`);
    } catch (error) {
      console.error('Error al eliminar progreso guardado:', error);
    }

    closeDialog();
  }, [asignaturaId, modId, closeDialog]);

  // Reiniciar la variable global cuando el componente se desmonta
  useEffect(() => {
    return () => {
      // Al desmontar, podemos reiniciar la variable global
      dialogShownGlobal = false;
    };
  }, []);

  return {
    dialogOpen,
    dialogType,
    savedProgress,
    handleRestoreProgress,
    handleDiscardProgress,
    handleConfirmExit,
    handleCancelExit,
    checkForSavedProgress
  };
}