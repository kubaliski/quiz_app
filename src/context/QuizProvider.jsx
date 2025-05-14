/**
 * Proveedor del contexto de Quiz.
 * Proporciona acceso al estado y funciones compartidas a todos los componentes del quiz.
 * Incluye soporte para quizzes de favoritos.
 */
import { useReducer, useMemo } from 'react';
import { ACTION_TYPES, initialState } from '@utils/quizConstants';
import { QuizContext } from './QuizContext';

// Reducer para manejar las actualizaciones de estado
function quizReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.SET_ASIGNATURA:
      return { ...state, asignatura: action.payload };
    case ACTION_TYPES.SET_MODULO:
      return { ...state, modulo: action.payload };
    case ACTION_TYPES.SET_PREGUNTAS:
      return { ...state, preguntas: action.payload };
    case ACTION_TYPES.SET_PREGUNTA_ACTUAL:
      return { ...state, preguntaActual: action.payload };
    case ACTION_TYPES.SET_RESPUESTA:
      return {
        ...state,
        respuestas: {
          ...state.respuestas,
          [action.payload.preguntaId]: action.payload.respuesta
        }
      };
    case ACTION_TYPES.SET_CARGANDO:
      return { ...state, cargando: action.payload };
    case ACTION_TYPES.SET_ERROR:
      return { ...state, error: action.payload };
    case ACTION_TYPES.SET_MODO_TODOS:
      return { ...state, modoTodos: action.payload };
    case ACTION_TYPES.SET_MODO_EXAMEN:
      return { ...state, modoExamen: action.payload };
    case ACTION_TYPES.SET_TIPO_QUIZ:
      return { ...state, tipoQuiz: action.payload };
    case ACTION_TYPES.SET_QUIZ_COMPLETED:
      return { ...state, quizCompleted: action.payload };
    case ACTION_TYPES.SET_DIALOG:
      return {
        ...state,
        dialogOpen: true,
        dialogType: action.payload
      };
    case ACTION_TYPES.CLOSE_DIALOG:
      return {
        ...state,
        dialogOpen: false,
        dialogType: '',
        savedProgress: null
      };
    case ACTION_TYPES.SET_SAVED_PROGRESS:
      return { ...state, savedProgress: action.payload };
    case ACTION_TYPES.RESTORE_PROGRESS: {
      const { respuestas, preguntaActual, preguntas, tipoQuiz } = action.payload;
      return {
        ...state,
        respuestas: respuestas || {},
        preguntaActual: preguntaActual || 0,
        preguntas: preguntas || state.preguntas,
        tipoQuiz: tipoQuiz || state.tipoQuiz,
        dialogOpen: false,
        dialogType: '',
        savedProgress: null
      };
    }
    // Nuevos casos para el navegador de preguntas
    case ACTION_TYPES.TOGGLE_QUESTION_NAVIGATOR:
      return {
        ...state,
        questionNavigatorOpen: action.payload !== undefined
          ? action.payload
          : !state.questionNavigatorOpen
      };
    case ACTION_TYPES.SET_QUESTION_NAVIGATOR_FILTER:
      return { ...state, showOnlyUnanswered: action.payload };
    default:
      return state;
  }
}

/**
 * Componente proveedor del contexto de Quiz
 */
export function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(quizReducer, {
    ...initialState,
    // Añadimos tipoQuiz al estado inicial para gestionar favoritos
    tipoQuiz: null
  });

  // Crear un objeto de acciones memoizado para evitar renderizados innecesarios
  const actions = useMemo(() => ({
    setAsignatura: (asignatura) =>
      dispatch({ type: ACTION_TYPES.SET_ASIGNATURA, payload: asignatura }),
    setModulo: (modulo) =>
      dispatch({ type: ACTION_TYPES.SET_MODULO, payload: modulo }),
    setPreguntas: (preguntas) =>
      dispatch({ type: ACTION_TYPES.SET_PREGUNTAS, payload: preguntas }),
    setPreguntaActual: (indice) =>
      dispatch({ type: ACTION_TYPES.SET_PREGUNTA_ACTUAL, payload: indice }),
    setRespuesta: (preguntaId, respuesta) =>
      dispatch({
        type: ACTION_TYPES.SET_RESPUESTA,
        payload: { preguntaId, respuesta }
      }),
    setCargando: (cargando) =>
      dispatch({ type: ACTION_TYPES.SET_CARGANDO, payload: cargando }),
    setError: (error) =>
      dispatch({ type: ACTION_TYPES.SET_ERROR, payload: error }),
    setModoTodos: (modoTodos) =>
      dispatch({ type: ACTION_TYPES.SET_MODO_TODOS, payload: modoTodos }),
    setModoExamen: (modoExamen) =>
      dispatch({ type: ACTION_TYPES.SET_MODO_EXAMEN, payload: modoExamen }),
    setTipoQuiz: (tipoQuiz) =>
      dispatch({ type: ACTION_TYPES.SET_TIPO_QUIZ, payload: tipoQuiz }),
    setQuizCompleted: (completed) =>
      dispatch({ type: ACTION_TYPES.SET_QUIZ_COMPLETED, payload: completed }),
    openDialog: (dialogType) =>
      dispatch({ type: ACTION_TYPES.SET_DIALOG, payload: dialogType }),
    closeDialog: () =>
      dispatch({ type: ACTION_TYPES.CLOSE_DIALOG }),
    setSavedProgress: (progress) =>
      dispatch({ type: ACTION_TYPES.SET_SAVED_PROGRESS, payload: progress }),
    restoreProgress: (progress) =>
      dispatch({ type: ACTION_TYPES.RESTORE_PROGRESS, payload: progress }),
    // Nuevas acciones para el navegador de preguntas
    toggleQuestionNavigator: (isOpen) =>
      dispatch({ type: ACTION_TYPES.TOGGLE_QUESTION_NAVIGATOR, payload: isOpen }),
    setShowOnlyUnanswered: (showOnly) =>
      dispatch({ type: ACTION_TYPES.SET_QUESTION_NAVIGATOR_FILTER, payload: showOnly }),
  }), []);

  // Propiedades calculadas
  const computedValues = useMemo(() => {
    const totalPreguntas = state.preguntas.length;
    const progreso = totalPreguntas ? ((state.preguntaActual + 1) / totalPreguntas) * 100 : 0;
    const preguntaActiva = state.preguntas[state.preguntaActual] || null;
    const tieneRespuestaActual = preguntaActiva ?
      state.respuestas[preguntaActiva.id] !== undefined : false;

    // ID de la asignatura para operaciones con favoritos y otras funcionalidades
    const asigId = state.asignatura?.id || null;

    // Nuevas propiedades calculadas para estadísticas
    const estadisticasPreguntas = {
      total: totalPreguntas,
      respondidas: Object.keys(state.respuestas).length,
      get pendientes() { return this.total - this.respondidas; },
      porcentajeCompletado: totalPreguntas ?
        Math.round((Object.keys(state.respuestas).length / totalPreguntas) * 100) : 0,
      preguntasPendientes: state.preguntas
        .map((pregunta, index) => ({ pregunta, index }))
        .filter(item => state.respuestas[item.pregunta.id] === undefined)
        .map(item => item.index)
    };

    // Verificamos si es un quiz de favoritos
    const esFavoritosQuiz = state.tipoQuiz === 'favoritos';

    return {
      totalPreguntas,
      progreso,
      preguntaActiva,
      tieneRespuestaActual,
      estadisticasPreguntas,
      asigId,
      esFavoritosQuiz
    };
  }, [state.preguntas, state.preguntaActual, state.respuestas, state.asignatura, state.tipoQuiz]);

  // Combinar estado, acciones y propiedades calculadas
  const value = useMemo(() => ({
    ...state,
    ...computedValues,
    ...actions
  }), [state, computedValues, actions]);

  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  );
}