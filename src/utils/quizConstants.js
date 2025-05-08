/**
 * Constantes para las acciones del contexto del quiz
 */

// Tipos de acciones
export const ACTION_TYPES = {
    SET_ASIGNATURA: 'SET_ASIGNATURA',
    SET_MODULO: 'SET_MODULO',
    SET_PREGUNTAS: 'SET_PREGUNTAS',
    SET_PREGUNTA_ACTUAL: 'SET_PREGUNTA_ACTUAL',
    SET_RESPUESTA: 'SET_RESPUESTA',
    SET_CARGANDO: 'SET_CARGANDO',
    SET_ERROR: 'SET_ERROR',
    SET_MODO_TODOS: 'SET_MODO_TODOS',
    SET_MODO_EXAMEN: 'SET_MODO_EXAMEN',
    SET_QUIZ_COMPLETED: 'SET_QUIZ_COMPLETED',
    SET_DIALOG: 'SET_DIALOG',
    CLOSE_DIALOG: 'CLOSE_DIALOG',
    SET_SAVED_PROGRESS: 'SET_SAVED_PROGRESS',
    RESTORE_PROGRESS: 'RESTORE_PROGRESS',
  };

  // Estado inicial para el reducer
  export const initialState = {
    asignatura: null,
    modulo: null,
    preguntas: [],
    preguntaActual: 0,
    respuestas: {},
    cargando: false,
    error: null,
    modoTodos: false,
    modoExamen: false,
    quizCompleted: false,
    // Estado de diálogos
    dialogOpen: false,
    dialogType: '', // 'exit', 'restore-progress'
    savedProgress: null,
  };