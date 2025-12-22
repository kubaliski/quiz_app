/**
 * Archivo principal de exportación de hooks
 * Reexporta todos los hooks desde sus respectivas subcarpetas
 */

// Hooks fundamentales
export {
  useDeviceType,
  useMediaQuery,
  useScrollDirection,
  useTheme
} from './core';

// Hooks relacionados con quizzes
export {
  useQuizContext,
  useQuizDialogs,
  useQuizLoader,
  useQuizNavigation,
  useQuizProgress,
  useAnswerShortcuts
} from './quiz';