/**
 * Contexto de React para manejar el estado y la lógica del quiz.
 * Proporciona acceso al estado actual del quiz y funciones para manipularlo a través de toda la aplicación.
 *
 * @typedef {Object} QuizContextType
 * @property {Array} questions - Lista de preguntas del quiz
 * @property {number} currentQuestion - Índice de la pregunta actual
 * @property {Array} answers - Respuestas seleccionadas por el usuario
 * @property {number} score - Puntuación actual del usuario
 * @property {boolean} quizCompleted - Estado que indica si el quiz ha sido completado
 * @property {Function} startQuiz - Función para iniciar el quiz
 * @property {Function} submitAnswer - Función para enviar una respuesta
 * @property {Function} nextQuestion - Función para avanzar a la siguiente pregunta
 * @property {Function} resetQuiz - Función para reiniciar el quiz
 *
 * @type {React.Context<QuizContextType>}
 *
 * @example
 * // Uso del contexto en un componente
 * import { useContext } from 'react';
 * import { QuizContext } from './QuizContext';
 *
 * function QuestionComponent() {
 *   const {
 *     questions,
 *     currentQuestion,
 *     submitAnswer
 *   } = useContext(QuizContext);
 *
 *   const question = questions[currentQuestion];
 *
 *   return (
 *     <div>
 *       <h2>{question.text}</h2>
 *       <ul>
 *         {question.options.map((option, index) => (
 *           <li key={index}>
 *             <button onClick={() => submitAnswer(index)}>
 *               {option}
 *             </button>
 *           </li>
 *         ))}
 *       </ul>
 *     </div>
 *   );
 * }
 */
import { createContext } from 'react';

// Crear el contexto
export const QuizContext = createContext();