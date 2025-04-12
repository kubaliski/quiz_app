/**
 * Componente que muestra el resumen de una pregunta respondida con feedback visual
 * sobre si la respuesta fue correcta o incorrecta, junto con la explicación.
 *
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {Object} props.pregunta - Objeto con la información de la pregunta
 * @param {string} props.pregunta.pregunta - Texto de la pregunta
 * @param {Array<string>} props.pregunta.opciones - Lista de opciones de respuesta
 * @param {number} props.pregunta.respuestaCorrecta - Índice de la respuesta correcta
 * @param {string} props.pregunta.explicacion - Explicación de la respuesta correcta
 * @param {number} props.index - Índice de la pregunta en la lista de preguntas (para numeración)
 * @param {number|undefined} props.respuestaUsuario - Índice de la respuesta seleccionada por el usuario
 * @returns {JSX.Element} Componente QuestionReview renderizado
 *
 * @example
 * const pregunta = {
 *   pregunta: '¿Cuál es la capital de España?',
 *   opciones: ['Barcelona', 'Madrid', 'Valencia', 'Sevilla'],
 *   respuestaCorrecta: 1,
 *   explicacion: 'Madrid es la capital de España y su ciudad más poblada.'
 * };
 *
 * <QuestionReview
 *   pregunta={pregunta}
 *   index={0}
 *   respuestaUsuario={1}
 * />
 */
export default function QuestionReview({ pregunta, index, respuestaUsuario }) {
  const isCorrect = respuestaUsuario === pregunta.respuestaCorrecta;

  return (
    <div
      className={`p-4 rounded-lg ${
        isCorrect
          ? 'bg-green-50 dark:bg-green-900 dark:bg-opacity-20 border border-green-200 dark:border-green-800'
          : 'bg-red-50 dark:bg-red-900 dark:bg-opacity-20 border border-red-200 dark:border-red-800'
      }`}
    >
      <h4 className="font-medium mb-2 dark:text-white">
        {index + 1}. {pregunta.pregunta}
      </h4>

      <div className="ml-4 mb-3">
        <p className="font-medium dark:text-gray-300">Tu respuesta:
          <span className={isCorrect ? 'text-green-600 dark:text-green-400 ml-2' : 'text-red-600 dark:text-red-400 ml-2'}>
            {respuestaUsuario !== undefined ? pregunta.opciones[respuestaUsuario] : 'Sin respuesta'}
          </span>
        </p>

        {!isCorrect && (
          <p className="font-medium dark:text-gray-300">
            Respuesta correcta:
            <span className="text-green-600 dark:text-green-400 ml-2">
              {pregunta.opciones[pregunta.respuestaCorrecta]}
            </span>
          </p>
        )}
      </div>

      <div className="bg-white dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <strong>Explicación:</strong> {pregunta.explicacion}
        </p>
      </div>
    </div>
  );
}