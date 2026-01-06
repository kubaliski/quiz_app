/**
 * Componente mejorado que muestra el resumen de una pregunta respondida con
 * feedback visual sobre si la respuesta fue correcta o incorrecta, junto con la explicación.
 * Permite marcar la pregunta como favorita.
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
 * @param {string|number} [props.asignaturaId] - ID de la asignatura actual (para favoritos)
 * @param {boolean} [props.showFavoriteButton=false] - Si se debe mostrar el botón de favorito
 * @param {Object} [props.asignatura] - Objeto con la información de la asignatura (para añadir a favoritos)
 * @returns {JSX.Element} Componente QuestionReview renderizado
 */
import { useState, useEffect } from 'react';
import { useTheme, useDeviceType } from '@hooks';
import ImageResource from '../media/ImageResource';
import FavoriteButton from '../../common/buttons/FavoriteButton';
import { addFavorite, removeFavorite } from '@services/favoritesService';
import { showToast } from '@utils/toastUtils';
import { getQuestionReviewStyles } from '@styles/safeStyles';
// Importamos el componente CodeBlock
import { CodeBlock } from '@components/common';

export default function QuestionReview({
  pregunta,
  index,
  respuestaUsuario,
  asignaturaId,
  showFavoriteButton = false,
  asignatura
}) {
  const { darkMode } = useTheme();
  const { isMobile, isTablet } = useDeviceType();
  const isSmallScreen = isMobile || isTablet;

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

  // Manejar cambio en favorito
  const handleToggleFavorite = async (isFav) => {
    if (!asignaturaId || !pregunta) return;

    try {
      if (isFav) {
        // Añadir a favoritos
        const result = await addFavorite(asignaturaId, asignatura, pregunta);
        if (result.success) {
          showToast('Pregunta añadida a favoritos', 'success');
        } else {
          showToast(result.message, 'error');
        }
      } else {
        // Quitar de favoritos
        const result = await removeFavorite(asignaturaId, pregunta.id);
        if (result.success) {
          showToast('Pregunta eliminada de favoritos', 'success');
        } else {
          showToast(result.message, 'error');
        }
      }
    } catch (error) {
      console.error('Error al cambiar estado de favorito:', error);
      showToast('Error al cambiar estado de favorito', 'error');
    }
  };

  // Función para obtener clase de tamaño de texto basado en longitud y tipo de dispositivo
  const getTextSizeClass = (tipoTexto) => {
    // Si no estamos en un dispositivo pequeño, mantener tamaño normal
    if (!isSmallScreen) {
      if (tipoTexto === 'respuesta') {
        return "text-base";
      }
      if (tipoTexto === 'explicacion' || tipoTexto === 'pregunta') {
        return "text-sm";
      }
    }

    // Para dispositivos pequeños (móvil o tablet), ajustar según longitud
    if (tipoTexto === 'respuesta') {
      if (textoMuyLargo) return "text-xs";
      if (textoLargo) return "text-sm";
      return "text-base";
    }

    if (tipoTexto === 'explicacion') {
      if (textoMuyLargo) return "text-xs";
      if (textoLargo) return "text-sm";
      return "text-sm";
    }

    if (tipoTexto === 'pregunta') {
      if (textoLargo) return "text-sm";
      return "text-base";
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
        // Usamos el componente CodeBlock pero manteniendo el estilo visual
        return (
          <div className="my-3">
            <CodeBlock
              code={pregunta.recurso.contenido}
              language={pregunta.recurso.lenguaje || 'text'}
              darkMode={darkMode}
              isSmallScreen={isSmallScreen}
              textoLargo={textoLargo}
              className="shadow-sm"
              customStyle={{
                padding: '0.75rem',
                fontSize: isSmallScreen && textoLargo ? '0.8rem' : '0.9rem'
              }}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={styles.container}>
      <div className="flex justify-between items-start mb-2">
        <h4
          style={styles.questionText}
          className={`font-medium ${getTextSizeClass('pregunta')}`}
        >
          {index + 1}. {pregunta.pregunta}
        </h4>

        {/* Botón de favorito */}
        {showFavoriteButton && asignaturaId && (
          <FavoriteButton
            asignaturaId={asignaturaId}
            preguntaId={pregunta.id}
            onToggle={handleToggleFavorite}
            size="sm"
            className="ml-2 shrink-0"
          />
        )}
      </div>

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
        <p
          style={styles.explanationText}
          className={getTextSizeClass('explicacion')}
        >
          <strong style={styles.explanationEmphasis}>Explicación:</strong> {pregunta.explicacion}
        </p>

        {/* Si hay código en la explicación */}
        {pregunta.explicacionCodigo && (
          <div className="mt-3">
            <CodeBlock
              code={pregunta.explicacionCodigo.contenido}
              language={pregunta.explicacionCodigo.lenguaje || 'text'}
              darkMode={darkMode}
              isSmallScreen={isSmallScreen}
              textoLargo={textoLargo}
              className="shadow-sm"
              customStyle={{
                padding: '0.75rem',
                fontSize: isSmallScreen && textoLargo ? '0.8rem' : '0.9rem'
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}