/**
 * Componente mejorado que muestra el resumen de una pregunta respondida con
 * feedback visual sobre si la respuesta fue correcta o incorrecta, junto con la explicación.
 * Utiliza colores web seguros para garantizar consistencia entre dispositivos.
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
 */
import { useState, useEffect } from 'react';
import { useTheme } from '@hooks';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import ImageResource from './ImageResource';
import { getQuestionReviewStyles } from '@styles/safeStyles';

export default function QuestionReview({ pregunta, index, respuestaUsuario }) {
  const { darkMode } = useTheme();
  const isCorrect = respuestaUsuario === pregunta.respuestaCorrecta;

  // Estado para controlar el tamaño de texto adaptativo
  const [textoLargo, setTextoLargo] = useState(false);
  const [textoMuyLargo, setTextoMuyLargo] = useState(false);
  const [styles, setStyles] = useState({});

  // Inicializar y actualizar los estilos cuando cambie el tema
  useEffect(() => {
    setStyles(getQuestionReviewStyles(isCorrect, darkMode, textoLargo));
  }, [isCorrect, darkMode, textoLargo]);

  // Verificar longitud de las opciones y explicación al cargar el componente
  useEffect(() => {
    if (!pregunta) return;

    // Obtener respuesta del usuario y respuesta correcta
    const respuestaUsuarioTexto = respuestaUsuario !== undefined ? pregunta.opciones[respuestaUsuario] : '';
    const respuestaCorrectaTexto = pregunta.opciones[pregunta.respuestaCorrecta];

    // Verificar longitudes
    const maxLength = Math.max(
      respuestaUsuarioTexto.length,
      respuestaCorrectaTexto.length
    );

    const nuevoTextoLargo = maxLength > 80 || pregunta.explicacion.length > 150;
    const nuevoTextoMuyLargo = maxLength > 140 || pregunta.explicacion.length > 250;

    setTextoLargo(nuevoTextoLargo);
    setTextoMuyLargo(nuevoTextoMuyLargo);

    // Actualizar estilos si cambió el tamaño del texto
    if (nuevoTextoLargo !== textoLargo) {
      setStyles(getQuestionReviewStyles(isCorrect, darkMode, nuevoTextoLargo));
    }
  }, [pregunta, respuestaUsuario, isCorrect, darkMode, textoLargo]);

  // Función para obtener clase de tamaño de texto basado en longitud
  const getTextSizeClass = (tipoTexto) => {
    // Para pantallas medianas y grandes, mantener tamaño normal
    // Para pantallas pequeñas, reducir según longitud

    if (tipoTexto === 'respuesta') {
      if (textoMuyLargo) return "text-sm sm:text-xs";
      if (textoLargo) return "text-sm";
      return "text-base sm:text-sm";
    }

    if (tipoTexto === 'explicacion') {
      if (textoMuyLargo) return "text-xs";
      if (textoLargo) return "text-sm";
      return "text-sm";
    }

    return "text-sm"; // Por defecto
  };

  // Función para renderizar el recurso (imagen o código)
  const renderRecurso = () => {
    if (!pregunta.recurso) return null;

    switch (pregunta.recurso.tipo) {
      case 'imagen':
        return (
          <div className="my-3 flex justify-center">
            <ImageResource
              src={pregunta.recurso.contenido}
              alt={pregunta.recurso.altText}
              className="max-w-[250px] md:max-w-[350px]" // Tamaño más pequeño en la revisión
            />
          </div>
        );
      case 'codigo':
        return (
          <div className="my-3 overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            <SyntaxHighlighter
              language={pregunta.recurso.lenguaje || 'text'}
              style={darkMode ? dark : docco}
              customStyle={{
                borderRadius: '0.5rem',
                margin: 0,
                padding: '0.75rem',
                fontSize: '0.9rem'
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

  return (
    <div style={styles.container}>
      <h4 style={styles.questionText} className={`font-medium mb-2 ${textoLargo ? 'text-base sm:text-sm' : ''}`}>
        {index + 1}. {pregunta.pregunta}
      </h4>

      {/* Renderizar recurso si existe */}
      {renderRecurso()}

      <div className="ml-4 mb-3">
        <p className={`font-medium ${getTextSizeClass('respuesta')}`}>
          Tu respuesta:
          <span style={styles.userAnswer} className="ml-2">
            {respuestaUsuario !== undefined ? pregunta.opciones[respuestaUsuario] : 'Sin respuesta'}
          </span>
        </p>

        {!isCorrect && (
          <p className={`font-medium ${getTextSizeClass('respuesta')}`}>
            Respuesta correcta:
            <span style={styles.correctAnswer} className="ml-2">
              {pregunta.opciones[pregunta.respuestaCorrecta]}
            </span>
          </p>
        )}
      </div>

      <div style={styles.explanationContainer}>
        <p style={styles.explanationText} className={getTextSizeClass('explicacion')}>
          <strong style={styles.explanationEmphasis}>Explicación:</strong> {pregunta.explicacion}
        </p>
      </div>
    </div>
  );
}