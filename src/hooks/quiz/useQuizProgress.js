/**
 * Versión modificada de useQuizProgress que NO muestra diálogos
 * para evitar conflictos con useQuizDialogs.
 */
import { useCallback, useEffect, useRef } from 'react';
import { useQuizContext } from './index';

export function useQuizProgress({
  asignaturaId,
  modId,
  asigId,
  continueFromPending,
  updateChecked,
  isFavoritesQuiz = false
}) {
  const {
    preguntas,
    preguntaActual,
    respuestas,
    asignatura,
    modulo,
    modoExamen,
    tipoQuiz,
    cargando,
    setRespuesta,
    setPreguntaActual,
    setPreguntas,
    setTipoQuiz,
    setError,
    setAsignatura,
    setModulo,
    setCargando
  } = useQuizContext();

  // Referencia para controlar si ya se intentó restaurar el progreso
  const progressRestoreAttempted = useRef(false);

  // Función para obtener el nombre del módulo
  const getNombreModulo = useCallback(() => {
    if (isFavoritesQuiz || tipoQuiz === 'favoritos') {
      return "Preguntas favoritas";
    }

    if (modoExamen || tipoQuiz === 'examen' || modId === 'examen') {
      return "Preguntas de examen";
    }

    if (tipoQuiz === 'todos' || modId === 'todos') {
      return "Todos los módulos";
    }

    if (modulo) return modulo.nombre;

    return "Módulo";
  }, [modoExamen, tipoQuiz, modId, modulo, isFavoritesQuiz]);

  // Función para guardar el progreso actual
  const saveQuizProgress = useCallback(() => {
    // No guardar progreso si no hay preguntas cargadas
    if (!preguntas || preguntas.length === 0) {
      return;
    }

    // Crear clave única basada en asignatura y módulo
    const quizKey = `quiz_progress_${asignaturaId}_${modId}`;

    // Guardar explícitamente el tipoQuiz actual
    const currentTipoQuiz = isFavoritesQuiz ? 'favoritos' : tipoQuiz;

    // Guardar el estado actual completo
    const progressData = {
      respuestas,
      preguntaActual,
      preguntas,
      timestamp: new Date().getTime(),
      asignatura: {
        id: asigId,
        nombre: asignatura?.nombre
      },
      modulo: modulo ? {
        id: modulo.id,
        nombre: modulo.nombre,
        esExamen: modulo.esExamen
      } : {
        id: modId,
        nombre: getNombreModulo(),
        esExamen: modoExamen
      },
      tipoQuiz: currentTipoQuiz
    };

    localStorage.setItem(quizKey, JSON.stringify(progressData));
    // Establecer flag para indicar quiz en progreso
    localStorage.setItem('quiz_in_progress', 'true');
  }, [
    preguntas,
    preguntaActual,
    respuestas,
    asigId,
    modId,
    asignatura,
    modulo,
    tipoQuiz,
    modoExamen,
    asignaturaId,
    getNombreModulo,
    isFavoritesQuiz
  ]);

  // Función para restaurar progreso
  const restoreQuizProgress = useCallback((savedProgress) => {
    if (!savedProgress) {
      return false;
    }

    try {
      setCargando(true);

      // Paso 1: Restaurar el tipo de quiz primero
      if (savedProgress.tipoQuiz) {
        setTipoQuiz(savedProgress.tipoQuiz);
      }

      // Paso 2: Restaurar asignatura y módulo si están disponibles
      if (savedProgress.asignatura) {
        setAsignatura(savedProgress.asignatura);
      }

      if (savedProgress.modulo) {
        setModulo(savedProgress.modulo);
      }

      // Paso 3: Restaurar preguntas si existen
      if (savedProgress.preguntas && savedProgress.preguntas.length > 0) {
        setPreguntas(savedProgress.preguntas);
      } else {
        setError("No se pudieron restaurar las preguntas. El progreso guardado está incompleto.");
        setCargando(false);
        return false;
      }

      // Paso 4: Restaurar pregunta actual
      setPreguntaActual(savedProgress.preguntaActual || 0);

      // Paso 5: Restaurar respuestas
      if (savedProgress.respuestas) {
        Object.entries(savedProgress.respuestas).forEach(([preguntaId, respuesta]) => {
          setRespuesta(preguntaId, respuesta);
        });
      }

      setCargando(false);
      return true;
    } catch (error) {
      console.error("Error al restaurar progreso del quiz:", error);
      setError(`Error al restaurar progreso: ${error.message}`);
      setCargando(false);
      return false;
    }
  }, [setRespuesta, setPreguntaActual, setPreguntas, setTipoQuiz, setAsignatura, setModulo, setCargando, setError]);

  // Verificar actualización reciente de PWA
  const checkForPWAUpdate = useCallback(() => {
    const wasUpdated = localStorage.getItem('pwa_just_updated') === 'true';

    if (wasUpdated) {

      const updateTimestamp = parseInt(localStorage.getItem('pwa_update_timestamp') || '0', 10);
      const now = Date.now();
      const minutesSinceUpdate = (now - updateTimestamp) / (1000 * 60);

      if (minutesSinceUpdate <= 10) {
        const quizKey = `quiz_progress_${asignaturaId}_${modId}`;
        const savedProgressJSON = localStorage.getItem(quizKey);

        if (savedProgressJSON) {
          try {
            const savedProgress = JSON.parse(savedProgressJSON);
            restoreQuizProgress(savedProgress);

            setTimeout(() => {
              alert('La aplicación se ha actualizado correctamente y tu progreso ha sido restaurado.');
            }, 1000);
          } catch (error) {
            console.error('Error al recuperar progreso guardado después de actualización:', error);
          }
        }
      }

      localStorage.removeItem('pwa_just_updated');
      localStorage.removeItem('pwa_update_timestamp');
    }
  }, [asignaturaId, modId, restoreQuizProgress]);

  // Efecto para verificar actualización reciente
  useEffect(() => {
    if (!updateChecked) {
      checkForPWAUpdate();
    }
  }, [updateChecked, checkForPWAUpdate]);

  // Efecto para restaurar progreso desde pendientes
  useEffect(() => {
    // Evitar múltiples intentos de restauración
    if (progressRestoreAttempted.current) {
      return;
    }

    // Si estamos continuando desde un quiz pendiente y ya se verificó la actualización
    if (continueFromPending && updateChecked) {
      progressRestoreAttempted.current = true;

      const quizKey = `quiz_progress_${asignaturaId}_${modId}`;
      const savedProgressJSON = localStorage.getItem(quizKey);

      if (savedProgressJSON) {
        try {
          const savedProgress = JSON.parse(savedProgressJSON);


          // Usar setCargando antes de restaurar para indicar que estamos procesando
          setCargando(true);

          // Establecer un pequeño retraso para asegurar que el componente esté listo
          setTimeout(() => {
            // Restaurar el progreso guardado directamente sin mostrar diálogo
            const restored = restoreQuizProgress(savedProgress);
            if (!restored) {
              console.error("Falló la restauración automática desde pendientes");
              setError("No se pudo restaurar el progreso guardado. Por favor, intenta iniciar un nuevo quiz.");
            }
          }, 100);
        } catch (error) {
          console.error("Error al restaurar progreso desde pendientes:", error);
          setCargando(false);
          setError("Error al restaurar el progreso guardado: " + error.message);
        }
      } else {
        console.error("No se encontró progreso guardado para", quizKey);
        setCargando(false);
      }
    }
  }, [continueFromPending, updateChecked, asignaturaId, modId, restoreQuizProgress, setCargando, setError]);

  return {
    saveQuizProgress,
    getNombreModulo,
    restoreQuizProgress
  };
}