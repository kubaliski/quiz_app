/**
 * Hook personalizado para gestionar el progreso del quiz
 * Maneja el guardado y restauración del progreso en localStorage
 */
import { useCallback, useEffect } from 'react';
import { useQuizContext } from './index';


/**
 * Hook que gestiona el progreso del quiz
 * @param {Object} config - Configuración para el progreso
 * @param {string} config.asignaturaId - ID de la asignatura (string)
 * @param {string|number} config.modId - ID del módulo o 'todos'/'examen'
 * @param {number} config.asigId - ID numérico de la asignatura
 * @param {boolean} config.continueFromPending - Si venimos de "continuar test"
 * @param {boolean} config.updateChecked - Si ya se verificó actualización
 */
export function useQuizProgress({
  asignaturaId,
  modId,
  asigId,
  continueFromPending,
  updateChecked
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
    openDialog,
    setSavedProgress,
    setRespuesta,
    setPreguntaActual,
    setPreguntas
  } = useQuizContext();

  // Función para obtener el nombre del módulo
  const getNombreModulo = useCallback(() => {
    if (modoExamen || tipoQuiz === 'examen' || modId === 'examen')
      return "Preguntas de examen";
    if (tipoQuiz === 'todos' || modId === 'todos')
      return "Todos los módulos";
    if (modulo) return modulo.nombre;
    return "Módulo";
  }, [modoExamen, tipoQuiz, modId, modulo]);

  // Función para guardar el progreso actual
  const saveQuizProgress = useCallback(() => {
    // Crear clave única basada en asignatura y módulo
    const quizKey = `quiz_progress_${asignaturaId}_${modId}`;

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
      tipoQuiz
    };

    localStorage.setItem(quizKey, JSON.stringify(progressData));
    // Establecer flag para indicar quiz en progreso
    localStorage.setItem('quiz_in_progress', 'true');
  }, [
    respuestas,
    preguntaActual,
    preguntas,
    asigId,
    modId,
    asignatura,
    modulo,
    tipoQuiz,
    modoExamen,
    asignaturaId,
    getNombreModulo
  ]);

  // Verificar actualización reciente de PWA
  const checkForPWAUpdate = useCallback(() => {
    // Verificar si hay un indicador de actualización reciente en localStorage
    const wasUpdated = localStorage.getItem('pwa_just_updated') === 'true';

    if (wasUpdated) {
      console.log('Detectada actualización durante quiz, restaurando estado...');

      // Verificar que la actualización fue reciente (en los últimos 10 minutos)
      const updateTimestamp = parseInt(localStorage.getItem('pwa_update_timestamp') || '0', 10);
      const now = Date.now();
      const minutesSinceUpdate = (now - updateTimestamp) / (1000 * 60);

      if (minutesSinceUpdate <= 10) {
        // Buscar si hay un progreso guardado para este quiz
        const quizKey = `quiz_progress_${asignaturaId}_${modId}`;
        const savedProgressJSON = localStorage.getItem(quizKey);

        if (savedProgressJSON) {
          try {
            const savedProgress = JSON.parse(savedProgressJSON);

            // Restaurar automáticamente sin preguntar al usuario
            setRespuesta(savedProgress.respuestas);
            setPreguntaActual(savedProgress.preguntaActual || 0);

            // Si hay preguntas guardadas y son diferentes a las actuales
            if (savedProgress.preguntas && savedProgress.preguntas.length > 0) {
              setPreguntas(savedProgress.preguntas);
            }

            // Mostrar mensaje de éxito con setTimeout para darle tiempo al componente de actualizarse
            setTimeout(() => {
              alert('La aplicación se ha actualizado correctamente y tu progreso ha sido restaurado.');
            }, 1000);
          } catch (error) {
            console.error('Error al recuperar progreso guardado después de actualización:', error);
          }
        }
      }

      // Limpiar los indicadores de actualización
      localStorage.removeItem('pwa_just_updated');
      localStorage.removeItem('pwa_update_timestamp');
    }
  }, [asignaturaId, modId, setRespuesta, setPreguntaActual, setPreguntas]);

  // Efecto para verificar actualización reciente
  useEffect(() => {
    if (!updateChecked) {
      checkForPWAUpdate();
    }
  }, [updateChecked, checkForPWAUpdate]);

  // Efecto para verificar progreso guardado
  useEffect(() => {
    // No verificar progreso guardado si venimos de una actualización reciente
    // o si estamos viniendo de "continuar test" en PendingQuizzes
    if (localStorage.getItem('pwa_just_updated') === 'true' || continueFromPending) {
      return;
    }

    const checkSavedProgress = () => {
      const quizKey = `quiz_progress_${asignaturaId}_${modId}`;
      const savedProgressJSON = localStorage.getItem(quizKey);

      if (!savedProgressJSON) return;

      try {
        const savedProgress = JSON.parse(savedProgressJSON);

        // Verificar si el progreso guardado es reciente (menos de 24 horas)
        const now = new Date().getTime();
        const progressTime = savedProgress.timestamp || 0;
        const hoursElapsed = (now - progressTime) / (1000 * 60 * 60);

        if (hoursElapsed < 24) {
          // Mostrar diálogo para restaurar progreso
          openDialog('restore-progress');
          setSavedProgress(savedProgress);
        } else {
          // Progreso demasiado antiguo, eliminarlo
          localStorage.removeItem(quizKey);
        }
      } catch (error) {
        console.error('Error al recuperar progreso guardado:', error);
        localStorage.removeItem(quizKey);
      }
    };

    // Solo verificar si ya se cargaron las preguntas y no se ha verificado actualización
    if (!cargando && preguntas.length > 0 && updateChecked) {
      checkSavedProgress();
    }
  }, [
    asignaturaId,
    modId,
    cargando,
    preguntas.length,
    updateChecked,
    continueFromPending,
    openDialog,
    setSavedProgress
  ]);

  return {
    saveQuizProgress,
    getNombreModulo
  };
}