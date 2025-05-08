/**
 * Constantes para el sistema de quiz.
 * Define tipos de acciones y estado inicial.
 */

// Tipos de acciones para el reducer del quiz
export const ACTION_TYPES = {
  SET_ASIGNATURA: 'set_asignatura',
  SET_MODULO: 'set_modulo',
  SET_PREGUNTAS: 'set_preguntas',
  SET_PREGUNTA_ACTUAL: 'set_pregunta_actual',
  SET_RESPUESTA: 'set_respuesta',
  SET_CARGANDO: 'set_cargando',
  SET_ERROR: 'set_error',
  SET_MODO_TODOS: 'set_modo_todos',
  SET_MODO_EXAMEN: 'set_modo_examen',
  SET_QUIZ_COMPLETED: 'set_quiz_completed',
  SET_DIALOG: 'set_dialog',
  CLOSE_DIALOG: 'close_dialog',
  SET_SAVED_PROGRESS: 'set_saved_progress',
  RESTORE_PROGRESS: 'restore_progress',
  // Nuevas acciones para navegador de preguntas
  TOGGLE_QUESTION_NAVIGATOR: 'toggle_question_navigator',
  SET_QUESTION_NAVIGATOR_FILTER: 'set_question_navigator_filter'
};

// Estado inicial del quiz
export const initialState = {
  preguntas: [],
  asignatura: null,
  modulo: null,
  preguntaActual: 0,
  respuestas: {},
  cargando: true,
  error: null,
  modoTodos: false,
  modoExamen: false,
  quizCompleted: false,
  dialogOpen: false,
  dialogType: '',
  savedProgress: null,
  // Nuevos estados para navegador de preguntas
  questionNavigatorOpen: false,
  showOnlyUnanswered: false
};