/**
 * Hook personalizado para cargar los datos iniciales del quiz
 * Maneja la carga de asignaturas, módulos y preguntas
 */
import { useEffect, useRef } from 'react';
import { useQuizContext } from './index';
import {
  fetchAsignaturaCompleta,
  fetchModulo,
  fetchRandomPreguntasByAsignatura,
  fetchRandomPreguntasByAsignaturaExamen
} from '@services/quizDataService';
import { shuffleArray, shuffleQuestionOptions } from '@utils/quizUtils';

/**
 * Hook que maneja la carga de datos para el quiz
 * @param {Object} config - Configuración del loader
 * @param {number} config.asigId - ID de la asignatura
 * @param {string|number} config.modId - ID del módulo o 'todos'/'examen'
 * @param {string} config.tipoQuiz - Tipo de quiz (null, 'todos', 'examen')
 * @param {string} config.moduloId - ID del módulo de la URL
 * @param {boolean} config.continueFromPending - Si venimos de 'continuar test'
 * @param {string} config.asignaturaId - ID de la asignatura (string)
 */
export function useQuizLoader({
  asigId,
  modId,
  tipoQuiz,
  moduloId,
  continueFromPending,
  asignaturaId
}) {
  const mounted = useRef(true);
  const {
    setCargando,
    setAsignatura,
    setModulo,
    setPreguntas,
    setModoTodos,
    setModoExamen,
    setError,
    setPreguntaActual,
    setRespuesta
  } = useQuizContext();

  // Efecto para cargar el quiz
  useEffect(() => {
    mounted.current = true;

    const cargarQuiz = async () => {
      try {
        setCargando(true);

        // Si venimos de continuar test, verificamos si ya tenemos progreso para evitar recargar
        if (continueFromPending) {
          const quizKey = `quiz_progress_${asignaturaId}_${modId}`;
          const savedProgressJSON = localStorage.getItem(quizKey);

          if (savedProgressJSON) {
            try {
              const savedProgress = JSON.parse(savedProgressJSON);

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
              console.error('Error al recuperar progreso guardado:', error);
              // Si hay error, continuamos con la carga normal
            }
          }
        }

        // Cargar datos de la asignatura
        const asignaturaData = await fetchAsignaturaCompleta(asigId);

        if (!mounted.current) return;

        setAsignatura(asignaturaData);

        // Cargar preguntas según el modo
        let quizQuestions = [];

        if (tipoQuiz === 'examen' || moduloId === 'examen') {
          // Modo examen: cargar preguntas aleatorias de módulos de examen
          const preguntasExamen = await fetchRandomPreguntasByAsignaturaExamen(asigId, 40);

          if (!mounted.current) return;

          quizQuestions = preguntasExamen;
          setModoTodos(true);
          setModoExamen(true);
        } else if (tipoQuiz === 'todos' || moduloId === 'todos') {
          // Modo todos: cargar preguntas aleatorias de todos los módulos
          const preguntasAleatorias = await fetchRandomPreguntasByAsignatura(asigId, 40);

          if (!mounted.current) return;

          quizQuestions = preguntasAleatorias;
          setModoTodos(true);
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
        }

        // Mezclar las opciones de cada pregunta
        const preguntasConOpcionesMezcladas = quizQuestions.map(
          pregunta => shuffleQuestionOptions(pregunta)
        );

        setPreguntas(preguntasConOpcionesMezcladas);
        setCargando(false);
      } catch (err) {
        console.error("Error al cargar datos del quiz:", err);
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
    setCargando,
    setAsignatura,
    setModulo,
    setPreguntas,
    setModoTodos,
    setModoExamen,
    setError,
    setPreguntaActual,
    setRespuesta
  ]);
}