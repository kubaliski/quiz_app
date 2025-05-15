/**
 * Componente que muestra una pregunta del quiz con sus opciones de respuesta.
 * Permite al usuario seleccionar una respuesta y muestra visualmente la selección.
 * Incluye adaptación automática del tamaño de texto para opciones largas en móviles y
 * la posibilidad de marcar la pregunta como favorita.
 *
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {Object} props.pregunta - Objeto con la información de la pregunta
 * @param {string|number} props.pregunta.id - Identificador único de la pregunta
 * @param {string} props.pregunta.pregunta - Texto de la pregunta
 * @param {Array<string>} props.pregunta.opciones - Lista de opciones de respuesta
 * @param {number|undefined} props.respuestaSeleccionada - Índice de la opción seleccionada por el usuario (undefined si no hay selección)
 * @param {Function} props.onSelectAnswer - Función a ejecutar cuando el usuario selecciona una respuesta, recibe (id, índice)
 * @param {string|number} [props.asignaturaId] - ID de la asignatura actual (para favoritos)
 * @param {boolean} [props.showFavoriteButton=false] - Si se debe mostrar el botón de favorito
 * @param {Object} [props.asignatura] - Objeto con la información de la asignatura (para añadir a favoritos)
 * @returns {JSX.Element|null} Componente QuestionCard renderizado o null si no hay pregunta
 */
import { useState, useEffect } from 'react';
import { Card, CodeBlock } from '@components/common';
import { useTheme, useDeviceType } from '@hooks';
import ImageResource from './ImageResource';
import FavoriteButton from './FavoriteButton';
import { addFavorite, removeFavorite } from '@services/favoritesService';
import { showToast } from '@utils/toastUtils';

export default function QuestionCard({
  pregunta,
  respuestaSeleccionada,
  onSelectAnswer,
  asignaturaId,
  showFavoriteButton = false,
  asignatura
}) {
  const { darkMode } = useTheme();
  const { isMobile, isTablet } = useDeviceType();
  const isSmallScreen = isMobile || isTablet;

  // Estado para controlar el tamaño de texto adaptativo
  const [opcionesLargas, setOpcionesLargas] = useState(false);
  const [opcionesMuyLargas, setOpcionesMuyLargas] = useState(false);

  // Verificar longitud de las opciones al cargar el componente
  useEffect(() => {
    if (!pregunta || !pregunta.opciones) return;

    // Calcular longitud promedio y máxima de las opciones
    const longitudPromedio = pregunta.opciones.reduce((sum, opt) => sum + opt.length, 0) / pregunta.opciones.length;
    const longitudMaxima = Math.max(...pregunta.opciones.map(opt => opt.length));

    // Determinar si las opciones son largas o muy largas
    setOpcionesLargas(longitudMaxima > 80 || longitudPromedio > 60);
    setOpcionesMuyLargas(longitudMaxima > 140 || longitudPromedio > 100);
  }, [pregunta]);

  if (!pregunta) return null;

  const handleClickOption = (id, index) => {
    if (respuestaSeleccionada === index) {
      onSelectAnswer(id, undefined); // Deseleccionar opción
    } else {
      onSelectAnswer(id, index); // Seleccionar opción
    }
  };

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
        // Usamos el componente CodeBlock en lugar de implementar la lógica aquí
        return (
          <div className="my-4">
            <CodeBlock
              code={pregunta.recurso.contenido}
              language={pregunta.recurso.lenguaje || 'text'}
              darkMode={darkMode}
              isSmallScreen={isSmallScreen}
              textoLargo={opcionesLargas}
              className="shadow-md"
              customStyle={{
                padding: '1rem'
              }}
            />
          </div>
        );
      default:
        return null;
    }
  };

  // Determinar tamaño del texto basado en longitud y tipo de dispositivo
  const getOptionTextClass = () => {
    // Si no estamos en un dispositivo pequeño, siempre usar tamaño base
    if (!isSmallScreen) return "text-base";

    // Solo aplicar reductor de texto en pantallas pequeñas (móvil o tablet)
    if (opcionesMuyLargas) {
      return "text-xs";
    } else if (opcionesLargas) {
      return "text-sm";
    } else {
      return "text-base";
    }
  };

  // Estilos inline para garantizar la visibilidad del texto
  const optionTextStyle = {
    color: darkMode ? 'rgb(255, 255, 255)' : 'rgb(17, 24, 39)',
    fontWeight: 500,
    // Solo aplicar estilos especiales para texto largo en pantallas pequeñas
    wordBreak: isSmallScreen && opcionesLargas ? 'break-word' : 'normal',
    hyphens: isSmallScreen && opcionesLargas ? 'auto' : 'none'
  };

  return (
    <Card className="mb-6">
      <div className="flex justify-between items-start mb-3">
        <h2 className="text-xl font-semibold dark:text-white">{pregunta.pregunta}</h2>

        {/* Botón de favorito */}
        {showFavoriteButton && asignaturaId && (
          <FavoriteButton
            asignaturaId={asignaturaId}
            preguntaId={pregunta.id}
            onToggle={handleToggleFavorite}
            className="ml-2 flex-shrink-0"
          />
        )}
      </div>

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
              onClick={() => handleClickOption(pregunta.id, index)}
            >
              <div className="flex items-start">
                <div className={`flex-shrink-0 h-5 w-5 rounded-full border ${
                  isSelected
                    ? 'bg-indigo-600 border-indigo-600'
                    : 'border-gray-400 dark:border-gray-500'
                } mt-0.5 mr-3 flex items-center justify-center`}>
                  {isSelected && (
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  )}
                </div>
                <span
                  className={`quiz-option-text ${getOptionTextClass()} text-gray-900 dark:text-white`}
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