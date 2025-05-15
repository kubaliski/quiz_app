import { useState, useEffect } from 'react';
import { Card } from '@components/common';
import { useTheme, useDeviceType } from '@hooks';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import ImageResource from './ImageResource';
import FavoriteButton from './FavoriteButton';
import { addFavorite, removeFavorite } from '@services/favoritesService';
// Importamos del archivo de utilidades que crearemos después
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

  // Estado para manejar el feedback de la copia
  const [copiado, setCopiado] = useState(false);

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

  // Resetear el estado de copiado después de 2 segundos
  useEffect(() => {
    let timer;
    if (copiado) {
      timer = setTimeout(() => {
        setCopiado(false);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [copiado]);

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

  // Función para copiar código al portapapeles
  const handleCopyCode = async () => {
    if (!pregunta.recurso || pregunta.recurso.tipo !== 'codigo') return;

    try {
      await navigator.clipboard.writeText(pregunta.recurso.contenido);
      setCopiado(true);
      showToast('Código copiado al portapapeles', 'success');
    } catch (error) {
      console.error('Error al copiar código:', error);
      showToast('Error al copiar el código', 'error');
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
        return (
          <div className="my-4 relative">
            <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700 shadow-md">
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

            {/* Botón para copiar código */}
            <button
              onClick={handleCopyCode}
              className={`absolute top-2 right-2 p-2 rounded-md transition-all duration-200 ${
                copiado
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
              title="Copiar código"
              aria-label="Copiar código al portapapeles"
            >
              {copiado ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                  <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                </svg>
              )}
            </button>
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