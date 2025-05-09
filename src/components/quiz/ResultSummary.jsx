/**
 * Componente ResultSummary corregido con problema de texto blanco en modo claro resuelto.
 * Utiliza colores web seguros para garantizar consistencia visual entre dispositivos.
 *
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {Object} props.puntuacion - Objeto con la información de la puntuación
 * @returns {JSX.Element} Componente ResultSummary renderizado
 */
import { useState, useEffect } from 'react';
import { Card } from '@components/common';
import { useTheme } from '@hooks/useTheme';
import {
  getResultSummaryStyles,
  getScoreCategory,
  getScoreMessage,
  getColorClassesByPercentage,
  getScoreCircleClass,
  getBackgroundClass,
  SAFE_COLORS
} from '@styles/safeStyles';

export default function ResultSummary({ puntuacion }) {
  const { darkMode } = useTheme();
  const [styles, setStyles] = useState({});

  // Inicializar y actualizar los estilos cuando cambie el tema o la puntuación
  useEffect(() => {
    setStyles(getResultSummaryStyles(puntuacion, darkMode));
  }, [puntuacion, darkMode]);

  // Obtener categoría y mensaje según la puntuación
  const scoreCategory = getScoreCategory(puntuacion.notaSobre10);
  const scoreMessage = getScoreMessage(scoreCategory);

  // Obtener clases de color basadas en el porcentaje (para Tailwind)
  const { textClass, barClass } = getColorClassesByPercentage(puntuacion.porcentaje);
  const scoreCircleClass = getScoreCircleClass(puntuacion.notaSobre10);
  const backgroundClass = getBackgroundClass(puntuacion.notaSobre10);

  // Formatear puntos para mostrar con 2 decimales
  const formatearPuntos = (puntos) => {
    // Verificar si el valor es un número válido antes de formatearlo
    if (puntos === undefined || puntos === null || isNaN(puntos)) {
      return '0.00';
    }
    return Number(puntos).toFixed(2);
  };

  // Calcular puntos máximos posibles (0.25 por cada pregunta)
  const puntosTotalesMaximos = puntuacion.total * 0.25;

  // Calcular puntos por correctas si no están disponibles
  const puntosPorCorrectas = puntuacion.puntosPorCorrectas !== undefined && !isNaN(puntuacion.puntosPorCorrectas)
    ? puntuacion.puntosPorCorrectas
    : puntuacion.correctas * 0.25;

  // Calcular puntos por incorrectas si no están disponibles
  const puntosPorIncorrectas = puntuacion.puntosPorIncorrectas !== undefined && !isNaN(puntuacion.puntosPorIncorrectas)
    ? puntuacion.puntosPorIncorrectas
    : puntuacion.incorrectas * -0.0833;

  // Calcular puntos totales si no están disponibles
  const puntosTotales = puntuacion.puntosTotales !== undefined && !isNaN(puntuacion.puntosTotales)
    ? puntuacion.puntosTotales
    : Math.max(0, puntosPorCorrectas + puntosPorIncorrectas);

  // Estilos explícitos para texto en modo claro/oscuro
  const detailTextColor = darkMode ? SAFE_COLORS.neutral.gray300 : SAFE_COLORS.neutral.gray700;
  const detailLabelColor = darkMode ? SAFE_COLORS.neutral.white : SAFE_COLORS.neutral.gray900;

  // Enfoque híbrido: usar clases CSS de Tailwind con respaldo de estilos en línea
  return (
    <Card className="mb-6">
      <div className="text-center mb-6" style={styles.container}>
        <h2 className="text-2xl font-bold mb-2 dark:text-white" style={styles.header}>
          Tu puntuación: {formatearPuntos(puntosTotales)}/{formatearPuntos(puntosTotalesMaximos)} puntos ({puntuacion.porcentaje}%)
        </h2>

        {/* Visualización del porcentaje y nota sobre 10 */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Porcentaje */}
          <div>
            <p className="text-gray-600 dark:text-gray-400 mb-2" style={styles.percentageLabel}>
              Porcentaje de acierto
            </p>
            <div className="flex items-center justify-center">
              <div className={`text-4xl font-bold ${textClass}`} style={styles.percentageValue}>
                {puntuacion.porcentaje}%
              </div>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mt-4" style={styles.progressBarContainer}>
              <div
                className={`h-4 rounded-full ${barClass}`}
                style={{ ...styles.progressBar, width: `${puntuacion.porcentaje}%` }}
              ></div>
            </div>
          </div>

          {/* Nota sobre 10 */}
          <div>
            <p className="text-gray-600 dark:text-gray-400 mb-2" style={styles.percentageLabel}>
              Nota sobre 10 (recuerda el redondeo)
            </p>
            <div className="flex items-center justify-center">
              <div
                className={`w-20 h-20 rounded-full ${scoreCircleClass} flex items-center justify-center`}
                style={styles.scoreCircle}
              >
                <span className="text-3xl font-bold text-white" style={styles.scoreValue}>
                  {puntuacion.notaSobre10}
                </span>
              </div>
            </div>
            <p className="mt-2 font-medium" style={styles.scoreMessage}>{scoreMessage}</p>
          </div>
        </div>

        {/* Detalle de respuestas y penalización - CORREGIDO */}
        <div
          className={`mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-left ${backgroundClass} p-4 rounded-lg`}
          style={styles.detailsSection}
        >
          <div>
            <p className="result-detail-text" style={{ color: detailTextColor, marginBottom: '0.5rem' }}>
              <span className="font-medium" style={{ color: detailLabelColor, fontWeight: 500 }}>
                Respuestas correctas:
              </span> {puntuacion.correctas}/{puntuacion.total} (+{formatearPuntos(puntosPorCorrectas)} puntos)
            </p>
            <p className="result-detail-text" style={{ color: detailTextColor, marginBottom: '0.5rem' }}>
              <span className="font-medium" style={{ color: detailLabelColor, fontWeight: 500 }}>
                Respuestas incorrectas:
              </span> {puntuacion.incorrectas}/{puntuacion.total} ({formatearPuntos(puntosPorIncorrectas)} puntos)
            </p>
            {(puntuacion.sinResponder > 0 || puntuacion.total - puntuacion.correctas - puntuacion.incorrectas > 0) && (
              <p className="result-detail-text" style={{ color: detailTextColor, marginBottom: '0.5rem' }}>
                <span className="font-medium" style={{ color: detailLabelColor, fontWeight: 500 }}>
                  Sin responder:
                </span> {puntuacion.sinResponder || (puntuacion.total - puntuacion.correctas - puntuacion.incorrectas)}/{puntuacion.total} (0 puntos)
              </p>
            )}
          </div>
          <div>
            <p className="result-detail-text" style={{ color: detailTextColor, marginBottom: '0.5rem' }}>
              <span className="font-medium" style={{ color: detailLabelColor, fontWeight: 500 }}>
                Puntuación total:
              </span> {formatearPuntos(puntosTotales)}/{formatearPuntos(puntosTotalesMaximos)} puntos
            </p>
            <p className="text-sm italic" style={{
              color: detailTextColor,
              fontSize: '0.875rem',
              fontStyle: 'italic'
            }}>
              (Cada respuesta correcta suma 0.25 puntos y cada incorrecta resta 0.0833 puntos)
            </p>
          </div>
        </div>

        {/* Mensaje de rendimiento basado en la nota */}
        <div className="mt-6 text-gray-600 dark:text-gray-400" style={styles.message}>
          {puntuacion.notaSobre10 >= 7 ? (
            <p>¡Excelente trabajo! Dominas bien este tema.</p>
          ) : puntuacion.notaSobre10 >= 5 ? (
            <p>Buen trabajo, pero hay espacio para mejorar.</p>
          ) : (
            <p>Es recomendable repasar este tema con más profundidad.</p>
          )}
        </div>
      </div>
    </Card>
  );
}