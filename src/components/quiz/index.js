/**
 * Exportaciones de todos los componentes relacionados con el quiz
 * @module components/quiz
 */

// Selección de contenido
export { default as ModuleSelector } from './selectors/ModuleSelector';
export { default as SubjectSelector } from './selectors/SubjectSelector';

// Componentes de navegación
export { default as QuizNavigation } from './navigation/QuizNavigation';
export { default as QuestionNavigator } from './navigation/QuestionNavigator';

// Visualización de preguntas
export { default as QuestionCard } from './questions/QuestionCard';
export { default as QuestionReview } from './questions/QuestionReview';

// Indicadores de progreso
export { default as QuizProgress } from './progress/QuizProgress';
export { default as ResultSummary } from './progress/ResultSummary';

// Gestión de favoritos
export { default as FavoriteButton } from './favorites/FavoriteButton';
export { default as FavoriteQuizzes } from './favorites/FavoriteQuizzes';
export { default as FavoritesQuizLoader } from './favorites/FavoritesQuizLoader';

// Quizzes pendientes
export { default as PendingQuizzes } from './pending/PendingQuizzes';

// Sesión principal del quiz
export { default as QuizContent } from './session/QuizContent';
export { default as QuizDialogs } from './session/QuizDialogs';
export { default as QuizHeader } from './session/QuizHeader';

// Recursos y exportación
export { default as ImageResource } from './media/ImageResource';
export { default as PDFGenerator } from './export/PDFGenerator';