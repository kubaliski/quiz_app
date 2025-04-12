/**
 * Componente que muestra una pregunta del quiz con sus opciones de respuesta.
 * Permite al usuario seleccionar una respuesta y muestra visualmente la selección.
 *
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {Object} props.pregunta - Objeto con la información de la pregunta
 * @param {string|number} props.pregunta.id - Identificador único de la pregunta
 * @param {string} props.pregunta.pregunta - Texto de la pregunta
 * @param {Array<string>} props.pregunta.opciones - Lista de opciones de respuesta
 * @param {number|undefined} props.respuestaSeleccionada - Índice de la opción seleccionada por el usuario (undefined si no hay selección)
 * @param {Function} props.onSelectAnswer - Función a ejecutar cuando el usuario selecciona una respuesta, recibe (id, índice)
 * @returns {JSX.Element|null} Componente QuestionCard renderizado o null si no hay pregunta
 *
 * @example
 * const pregunta = {
 *   id: 1,
 *   pregunta: '¿Cuál es la capital de Francia?',
 *   opciones: ['Madrid', 'París', 'Berlín', 'Roma'],
 *   respuestaCorrecta: 1,
 *   explicacion: 'París es la capital de Francia desde el año...'
 * };
 *
 * <QuestionCard
 *   pregunta={pregunta}
 *   respuestaSeleccionada={2}
 *   onSelectAnswer={(id, index) => console.log(`Pregunta ${id}, opción ${index} seleccionada`)}
 * />
 */
// src/components/quiz/QuestionCard.jsx
import { Card } from '@components/common';
import { useTheme } from '@hooks/useTheme';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import ImageResource from './ImageResource';

export default function QuestionCard({ pregunta, respuestaSeleccionada, onSelectAnswer }) {
  const { darkMode } = useTheme();

  if (!pregunta) return null;

  // Función para renderizar el recurso (imagen o código)
  const renderRecurso = () => {
    if (!pregunta.recurso) return null;

    switch (pregunta.recurso.tipo) {
      case 'imagen':
        return (
          <div className="my-4 flex justify-center">
            <img
              src={pregunta.recurso.contenido}
              alt={pregunta.recurso.altText || "Imagen de la pregunta"}
              className="max-w-full rounded-lg border border-gray-200 dark:border-gray-700 shadow-md"
            />
          </div>
        );
      case 'codigo':
        return (
          <div className="my-4 overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700 shadow-md">
            <SyntaxHighlighter
              language={pregunta.recurso.lenguaje || 'text'}
              style={darkMode ? dark : docco}
              customStyle={{
                borderRadius: '0.5rem',
                margin: 0,
                padding: '1rem'
              }}
            >
              {pregunta.recurso.contenido}
            </SyntaxHighlighter>
          </div>
        );
      default:
        return null;
    }
  };

  // Estilos inline para garantizar la visibilidad del texto
  const optionTextStyle = {
    color: darkMode ? 'rgb(255, 255, 255)' : 'rgb(17, 24, 39)',
    fontWeight: 500
  };

  return (
    <Card className="mb-6">
      <h2 className="text-xl font-semibold mb-4 dark:text-white">{pregunta.pregunta}</h2>

      {/* Renderizar recurso si existe */}
      {renderRecurso()}

      <div className="space-y-3">
        {pregunta.opciones.map((opcion, index) => {
          const isSelected = respuestaSeleccionada === index;

          return (
            <button
              key={index}
              className={`w-full text-left p-4 rounded-lg border transition duration-200 ${
                isSelected
                  ? 'bg-indigo-100 dark:bg-indigo-900 dark:bg-opacity-40 border-indigo-300 dark:border-indigo-700 ring-2 ring-indigo-500 dark:ring-indigo-400'
                  : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
              onClick={() => onSelectAnswer(pregunta.id, index)}
            >
              <div className="flex items-center">
                <div className={`h-5 w-5 rounded-full border ${
                  isSelected
                    ? 'bg-indigo-600 border-indigo-600'
                    : 'border-gray-400 dark:border-gray-500'
                } mr-3 flex items-center justify-center`}>
                  {isSelected && (
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  )}
                </div>
                <span
                  className="quiz-option-text text-gray-900 dark:text-white"
                  style={optionTextStyle}
                >
                  {opcion}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </Card>
  );
}