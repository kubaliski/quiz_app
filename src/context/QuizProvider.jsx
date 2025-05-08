/**
 * Proveedor del contexto de Quiz.
 * Proporciona acceso al estado y funciones compartidas a todos los componentes del quiz.
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
      const { respuestas, preguntaActual, preguntas } = action.payload;
      return {
        ...state,
        respuestas: respuestas || {},
        preguntaActual: preguntaActual || 0,
        preguntas: preguntas || state.preguntas,
        dialogOpen: false,
        dialogType: '',
        savedProgress: null
      };
    }
    default:
      return state;
  }
}

/**
 * Componente proveedor del contexto de Quiz
 */
export function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(quizReducer, initialState);

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
  }), []);

  // Propiedades calculadas
  const computedValues = useMemo(() => {
    const totalPreguntas = state.preguntas.length;
    const progreso = totalPreguntas ? ((state.preguntaActual + 1) / totalPreguntas) * 100 : 0;
    const preguntaActiva = state.preguntas[state.preguntaActual] || null;
    const tieneRespuestaActual = preguntaActiva ?
      state.respuestas[preguntaActiva.id] !== undefined : false;

    return {
      totalPreguntas,
      progreso,
      preguntaActiva,
      tieneRespuestaActual
    };
  }, [state.preguntas, state.preguntaActual, state.respuestas]);

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