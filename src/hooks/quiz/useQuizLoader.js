/**
 * Hook personalizado para cargar los datos iniciales del quiz
 * Maneja la carga de asignaturas, módulos y preguntas
 * Versión mejorada para solucionar problemas con la restauración
 */
import { useEffect, useRef, useCallback } from 'react';
import { useQuizContext } from './index';
import {
  fetchAsignaturaCompleta,
  fetchModulo,
  fetchRandomPreguntasByAsignatura,
  fetchRandomPreguntasByAsignaturaExamen
} from '@services/quizDataService';
import { shuffleArray, shuffleQuestionOptions } from '@utils/quizUtils';

export function useQuizLoader({
  asigId,
  modId,
  tipoQuiz,
  moduloId,
  continueFromPending,
  asignaturaId,
  enabled = true
}) {
  const mounted = useRef(true);
  // Referencia para verificar si ya se intentó cargar
  const loadAttempted = useRef(false);

  const {
    setCargando,
    setAsignatura,
    setModulo,
    setPreguntas,
    setModoTodos,
    setModoExamen,
    setError,
    setPreguntaActual,
    setRespuesta,
    setTipoQuiz,
    tipoQuiz: contextTipoQuiz,
    preguntas: contextPreguntas
  } = useQuizContext();

  // FIX: Función para verificar si ya hay preguntas cargadas
  const hasLoadedQuestions = useCallback(() => {
    return contextPreguntas && contextPreguntas.length > 0;
  }, [contextPreguntas]);

  // Efecto para cargar el quiz
  useEffect(() => {
    mounted.current = true;

    // FIX: Verificar si ya se intentó cargar o si hay preguntas
    if (loadAttempted.current || hasLoadedQuestions()) {
      return;
    }

    // FIX: Comprobar primero si el loader está habilitado
    if (!enabled) {
      return;
    }

    // No cargar si ya estamos continuando desde un quiz pendiente
    if (continueFromPending) {
      return;
    }

    // Marcar que ya se intentó cargar
    loadAttempted.current = true;

    setCargando(true);

    const cargarQuiz = async () => {
      try {
        // Verificar progreso guardado
        const quizKey = `quiz_progress_${asignaturaId}_${modId}`;
        const savedProgressJSON = localStorage.getItem(quizKey);

        if (savedProgressJSON) {
          try {
            const savedProgress = JSON.parse(savedProgressJSON);

            // FIX: Restaurar el tipo de quiz primero si existe en el progreso guardado
            if (savedProgress.tipoQuiz && !contextTipoQuiz) {
              setTipoQuiz(savedProgress.tipoQuiz);
            }

            // Restaurar estado desde progreso guardado
            if (savedProgress.respuestas) {
              Object.entries(savedProgress.respuestas).forEach(([preguntaId, respuesta]) => {
                setRespuesta(preguntaId, respuesta);
              });
            }

            setPreguntaActual(savedProgress.preguntaActual || 0);

            // Si hay información de la asignatura, la establecemos
            if (savedProgress.asignatura) {
              setAsignatura(savedProgress.asignatura);
            }

            // Si hay información del módulo, la establecemos
            if (savedProgress.modulo) {
              setModulo(savedProgress.modulo);
              if (savedProgress.modulo.esExamen) {
                setModoExamen(true);
              }
            }

            // Establecer modos especiales
            if (savedProgress.tipoQuiz === 'todos' || moduloId === 'todos') {
              setModoTodos(true);
            }
            if (savedProgress.tipoQuiz === 'examen' || moduloId === 'examen') {
              setModoExamen(true);
              setModoTodos(true);
            }

            // Cargar las preguntas guardadas si existen
            if (savedProgress.preguntas && savedProgress.preguntas.length > 0) {
              setPreguntas(savedProgress.preguntas);
              setCargando(false);
              return; // No seguir cargando si ya tenemos datos
            }
          } catch (error) {
            // Si hay error, continuamos con la carga normal
          }
        }

        // Cargar datos de la asignatura
        const asignaturaData = await fetchAsignaturaCompleta(asigId);

        if (!mounted.current) return;

        setAsignatura(asignaturaData);

        // FIX: Determinar el tipo de quiz de manera más robusta
        let quizTipoToSet = null;

        // Cargar preguntas según el modo
        let quizQuestions = [];

        if (moduloId === 'examen' || tipoQuiz === 'examen') {
          // Modo examen: cargar preguntas aleatorias de módulos de examen
          const preguntasExamen = await fetchRandomPreguntasByAsignaturaExamen(asigId, 40);

          if (!mounted.current) return;

          quizQuestions = preguntasExamen;
          setModoTodos(true);
          setModoExamen(true);
          quizTipoToSet = 'examen';
        } else if (moduloId === 'todos' || tipoQuiz === 'todos') {
          // Modo todos: cargar preguntas aleatorias de todos los módulos
          const preguntasAleatorias = await fetchRandomPreguntasByAsignatura(asigId, 40);

          if (!mounted.current) return;

          quizQuestions = preguntasAleatorias;
          setModoTodos(true);
          quizTipoToSet = 'todos';
        } else {
          // Modo específico: cargar preguntas de un módulo
          const moduloData = await fetchModulo(asigId, modId);

          if (!mounted.current) return;

          setModulo(moduloData);
          quizQuestions = shuffleArray([...(moduloData.preguntas || [])]);

          // Verificar si es un módulo de examen
          if (moduloData.esExamen) {
            setModoExamen(true);
          }

          // Establecer el tipo de quiz como regular
          quizTipoToSet = 'regular';
        }

        // FIX: Solo establecer el tipoQuiz si aún no se ha establecido
        if (!contextTipoQuiz && quizTipoToSet) {
          setTipoQuiz(quizTipoToSet);
        }

        // Verificar si hay preguntas
        if (!quizQuestions || quizQuestions.length === 0) {
          setError("No hay preguntas disponibles para este quiz. Por favor, selecciona otro módulo.");
          setCargando(false);
          return;
        }

        // Mezclar las opciones de cada pregunta
        const preguntasConOpcionesMezcladas = quizQuestions.map(
          pregunta => shuffleQuestionOptions(pregunta)
        );
        // Establecer las preguntas en el estado
        setPreguntas(preguntasConOpcionesMezcladas);
        setCargando(false);
      } catch (err) {
        if (mounted.current) {
          setError("No se pudieron cargar las preguntas. Por favor, inténtelo de nuevo.");
          setCargando(false);
        }
      }
    };

    cargarQuiz();

    return () => {
      mounted.current = false;
    };
  }, [
    asigId,
    modId,
    tipoQuiz,
    moduloId,
    continueFromPending,
    asignaturaId,
    enabled,
    setCargando,
    setAsignatura,
    setModulo,
    setPreguntas,
    setModoTodos,
    setModoExamen,
    setError,
    setPreguntaActual,
    setRespuesta,
    setTipoQuiz,
    contextTipoQuiz,
    hasLoadedQuestions
  ]);

  // FIX: Proporcionar una forma de reiniciar la carga si es necesario
  const resetLoader = useCallback(() => {
    loadAttempted.current = false;
  }, []);

  return {
    resetLoader
  };
}