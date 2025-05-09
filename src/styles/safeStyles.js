/**
 * safeStyles.js (Versión corregida)
 *
 * Sistema centralizado de estilos seguros para la aplicación Quiz.
 * Corregido el problema de texto blanco en modo claro.
 */

// PALETAS DE COLORES SEGUROS
// ==========================

/**
 * Colores web seguros primarios - se muestran consistentemente
 * entre diferentes dispositivos y pantallas
 */
export const SAFE_COLORS = {
    // Rojos
    red: {
      50: '#FEF2F2',   // Rojo muy claro - fondo suave
      100: '#FEE2E2',  // Rojo claro - fondo de error
      200: '#FECACA',  // Rojo claro - bordes
      400: '#F87171',  // Rojo medio - texto en modo oscuro
      500: '#EF4444',  // Rojo estándar - barras de progreso
      600: '#DC2626',  // Rojo oscuro - texto en modo claro
      800: '#991B1B',  // Rojo muy oscuro - bordes en modo oscuro
      900: '#7F1D1D',  // Rojo más oscuro - fondos en modo oscuro
    },

    // Verdes
    green: {
      50: '#ECFDF5',   // Verde muy claro - fondo suave
      100: '#DCFCE7',  // Verde claro - fondo de éxito
      200: '#BBF7D0',  // Verde claro - bordes
      400: '#4ADE80',  // Verde medio - texto en modo oscuro
      500: '#22C55E',  // Verde estándar - barras de progreso
      600: '#16A34A',  // Verde oscuro - texto en modo claro
      800: '#166534',  // Verde muy oscuro - bordes en modo oscuro
      900: '#14532D',  // Verde más oscuro - fondos en modo oscuro
    },

    // Amarillos
    yellow: {
      50: '#FEFCE8',   // Amarillo muy claro - fondo suave
      100: '#FEF9C3',  // Amarillo claro - fondo de advertencia
      200: '#FEF08A',  // Amarillo claro - bordes
      400: '#FACC15',  // Amarillo medio - texto en modo oscuro
      500: '#EAB308',  // Amarillo estándar - barras de progreso
      600: '#CA8A04',  // Amarillo oscuro - texto en modo claro
      800: '#854D0E',  // Amarillo muy oscuro - bordes en modo oscuro
      900: '#713F12',  // Amarillo más oscuro - fondos en modo oscuro
    },

    // Grises neutros - Extremadamente consistentes entre dispositivos
    neutral: {
      white: '#FFFFFF', // Blanco puro
      black: '#000000', // Negro puro
      gray50: '#F9FAFB', // Gris casi blanco
      gray100: '#F3F4F6', // Gris muy claro
      gray200: '#E5E7EB', // Gris claro - bordes
      gray300: '#D1D5DB', // Gris claro - texto secundario en modo oscuro
      gray400: '#9CA3AF', // Gris medio
      gray500: '#6B7280', // Gris estándar
      gray600: '#4B5563', // Gris oscuro - texto secundario en modo claro
      gray700: '#374151', // Gris oscuro - bordes en modo oscuro
      gray800: '#1F2937', // Gris muy oscuro - fondos en modo oscuro
      gray900: '#111827', // Gris casi negro - texto principal en modo claro
    }
  };

  /**
   * Colores seguros para componentes específicos según estado y tema
   */
  export const COMPONENT_COLORS = {
    // Para respuestas y estados correctos/éxito
    correct: {
      light: {
        bg: SAFE_COLORS.green[100],
        bgOpacity: SAFE_COLORS.green[50],
        border: SAFE_COLORS.green[200],
        text: SAFE_COLORS.green[600]
      },
      dark: {
        bg: `rgba(20, 83, 45, 0.2)`, // verde 900 con transparencia
        bgOpacity: `rgba(20, 83, 45, 0.1)`,
        border: SAFE_COLORS.green[800],
        text: SAFE_COLORS.green[400]
      }
    },

    // Para respuestas y estados incorrectos/error
    incorrect: {
      light: {
        bg: SAFE_COLORS.red[100],
        bgOpacity: SAFE_COLORS.red[50],
        border: SAFE_COLORS.red[200],
        text: SAFE_COLORS.red[600]
      },
      dark: {
        bg: `rgba(127, 29, 29, 0.2)`, // rojo 900 con transparencia
        bgOpacity: `rgba(127, 29, 29, 0.1)`,
        border: SAFE_COLORS.red[800],
        text: SAFE_COLORS.red[400]
      }
    },

    // Para estados de advertencia
    warning: {
      light: {
        bg: SAFE_COLORS.yellow[100],
        bgOpacity: SAFE_COLORS.yellow[50],
        border: SAFE_COLORS.yellow[200],
        text: SAFE_COLORS.yellow[600]
      },
      dark: {
        bg: `rgba(113, 63, 18, 0.2)`, // amarillo 900 con transparencia
        bgOpacity: `rgba(113, 63, 18, 0.1)`,
        border: SAFE_COLORS.yellow[800],
        text: SAFE_COLORS.yellow[400]
      }
    },

    // Para estados neutros/informativos
    neutral: {
      light: {
        bg: SAFE_COLORS.neutral.white,
        bgAlt: SAFE_COLORS.neutral.gray100,
        border: SAFE_COLORS.neutral.gray200,
        text: SAFE_COLORS.neutral.gray900,
        textSecondary: SAFE_COLORS.neutral.gray600
      },
      dark: {
        bg: SAFE_COLORS.neutral.gray800,
        bgAlt: SAFE_COLORS.neutral.gray900,
        border: SAFE_COLORS.neutral.gray700,
        text: SAFE_COLORS.neutral.white,
        textSecondary: SAFE_COLORS.neutral.gray300
      }
    }
  };

  // UTILIDADES DE COMPONENTES
  // =========================

  /**
   * Obtiene el color para un componente específico
   * @param {string} component - Tipo de componente ('correct', 'incorrect', 'warning', 'neutral')
   * @param {string} property - Propiedad de color ('bg', 'border', 'text', etc.)
   * @param {boolean} isDarkMode - Si está en modo oscuro
   * @returns {string} Valor CSS del color
   */
  export function getComponentColor(component, property, isDarkMode) {
    if (COMPONENT_COLORS[component]) {
      const theme = isDarkMode ? 'dark' : 'light';
      return COMPONENT_COLORS[component][theme][property];
    }
    return null;
  }

  /**
   * Obtiene el texto adecuado para un valor de porcentaje
   * @param {number} percentage - Porcentaje (0-100)
   * @returns {string} Mensaje descriptivo
   */
  export function getPercentageMessage(percentage) {
    if (percentage >= 90) return '¡Excelente!';
    if (percentage >= 80) return '¡Muy bien!';
    if (percentage >= 70) return 'Buen trabajo';
    if (percentage >= 60) return 'Aprobado';
    if (percentage >= 50) return 'Justo aprobado';
    if (percentage >= 30) return 'Necesitas mejorar';
    return 'Requiere más estudio';
  }

  /**
   * Categoriza un valor de puntuación (0-10) en un nivel
   * @param {number} score - Puntuación sobre 10
   * @returns {string} Categoría ('excellent', 'good', 'decent', 'pass', 'borderPass', 'fail')
   */
  export function getScoreCategory(score) {
    if (score >= 9) return 'excellent';
    if (score >= 8) return 'good';
    if (score >= 7) return 'decent';
    if (score >= 6) return 'pass';
    if (score >= 5) return 'borderPass';
    return 'fail';
  }

  /**
   * Obtiene el mensaje correspondiente a una categoría de puntuación
   * @param {string} category - Categoría de puntuación
   * @returns {string} Mensaje descriptivo
   */
  export function getScoreMessage(category) {
    switch (category) {
      case 'excellent': return '¡Excelente!';
      case 'good': return '¡Muy bien!';
      case 'decent': return 'Buen trabajo';
      case 'pass': return 'Aprobado';
      case 'borderPass': return 'Justo aprobado';
      case 'fail': return 'Necesitas mejorar';
      default: return 'Resultado';
    }
  }

  // ESTILOS PARA QUESTIONREVIEW
  // ===========================

  /**
   * Obtiene estilos para el componente QuestionReview
   * @param {boolean} isCorrect - Si la respuesta es correcta
   * @param {boolean} isDarkMode - Si está en modo oscuro
   * @param {boolean} isLongText - Si contiene texto largo
   * @returns {Object} Objeto con estilos específicos
   */
  export function getQuestionReviewStyles(isCorrect, isDarkMode, isLongText = false) {
    const componentType = isCorrect ? 'correct' : 'incorrect';
    const theme = isDarkMode ? 'dark' : 'light';
    const colors = COMPONENT_COLORS[componentType][theme];
    const neutralColors = COMPONENT_COLORS.neutral[theme];

    // Estilo para habilitar roturas de palabras en textos largos
    const textStyle = isLongText ? {
      wordBreak: 'break-word',
      hyphens: 'auto',
      overflowWrap: 'break-word'
    } : {};

    return {
      container: {
        backgroundColor: colors.bg,
        borderColor: colors.border,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: '0.5rem',
        padding: '1rem',
        marginBottom: '1rem'
      },
      questionText: {
        ...textStyle,
        color: neutralColors.text,
        fontWeight: 500
      },
      userAnswer: {
        ...textStyle,
        color: colors.text,
        fontWeight: 500
      },
      correctAnswer: {
        ...textStyle,
        color: COMPONENT_COLORS.correct[theme].text,
        fontWeight: 500
      },
      explanationContainer: {
        backgroundColor: neutralColors.bg,
        borderColor: neutralColors.border,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: '0.375rem',
        padding: '0.75rem'
      },
      explanationText: {
        ...textStyle,
        color: neutralColors.textSecondary
      },
      explanationEmphasis: {
        color: neutralColors.text,
        fontWeight: 600
      }
    };
  }

  // ESTILOS PARA RESULTSUMMARY
  // =========================

  /**
   * Obtiene estilos para el componente ResultSummary
   * @param {Object} puntuacion - Objeto con datos de puntuación
   * @param {boolean} isDarkMode - Si está en modo oscuro
   * @returns {Object} Objeto con estilos específicos
   */
  export function getResultSummaryStyles(puntuacion, isDarkMode) {
    const percentage = puntuacion.porcentaje;
    const score = puntuacion.notaSobre10;
    const scoreCategory = getScoreCategory(score);

    // Determinamos los colores base según el porcentaje
    let baseComponent = 'neutral';
    if (percentage >= 70) {
      baseComponent = 'correct';
    } else if (percentage >= 50) {
      baseComponent = 'warning';
    } else {
      baseComponent = 'incorrect';
    }

    // Determinamos colores específicos según la categoría de puntuación
    const theme = isDarkMode ? 'dark' : 'light';
    const neutralColors = COMPONENT_COLORS.neutral[theme];
    const baseColors = COMPONENT_COLORS[baseComponent][theme];

    // Colores para el círculo de puntuación
    const scoreCircleColors = {
      excellent: isDarkMode ? SAFE_COLORS.green[500] : SAFE_COLORS.green[600],
      good: isDarkMode ? SAFE_COLORS.green[400] : SAFE_COLORS.green[500],
      decent: isDarkMode ? SAFE_COLORS.green[300] : SAFE_COLORS.green[400],
      pass: isDarkMode ? SAFE_COLORS.yellow[400] : SAFE_COLORS.yellow[500],
      borderPass: isDarkMode ? SAFE_COLORS.yellow[300] : SAFE_COLORS.yellow[400],
      fail: isDarkMode ? SAFE_COLORS.red[400] : SAFE_COLORS.red[500]
    };

    // Colores para la sección de detalles
    const detailsSectionColors = {
      excellent: isDarkMode ? 'rgba(20, 83, 45, 0.3)' : SAFE_COLORS.green[100],
      good: isDarkMode ? 'rgba(20, 83, 45, 0.2)' : SAFE_COLORS.green[50],
      decent: isDarkMode ? 'rgba(20, 83, 45, 0.15)' : SAFE_COLORS.green[50],
      pass: isDarkMode ? 'rgba(113, 63, 18, 0.2)' : SAFE_COLORS.yellow[50],
      borderPass: isDarkMode ? 'rgba(113, 63, 18, 0.15)' : SAFE_COLORS.yellow[50],
      fail: isDarkMode ? 'rgba(127, 29, 29, 0.2)' : SAFE_COLORS.red[50]
    };

    // CORREGIDO: Asegurar colores de texto visibles en modo claro
    const detailTextColor = isDarkMode ? SAFE_COLORS.neutral.gray300 : SAFE_COLORS.neutral.gray700;
    const detailLabelColor = isDarkMode ? SAFE_COLORS.neutral.white : SAFE_COLORS.neutral.gray900;

    return {
      container: {
        textAlign: 'center',
        marginBottom: '1.5rem'
      },
      header: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '0.5rem',
        color: neutralColors.text
      },
      percentageLabel: {
        color: neutralColors.textSecondary,
        marginBottom: '0.5rem'
      },
      percentageValue: {
        fontSize: '2.25rem',
        fontWeight: 'bold',
        color: baseColors.text
      },
      progressBarContainer: {
        width: '100%',
        height: '1rem',
        backgroundColor: isDarkMode ? SAFE_COLORS.neutral.gray700 : SAFE_COLORS.neutral.gray200,
        borderRadius: '0.5rem',
        marginTop: '1rem',
        overflow: 'hidden'
      },
      progressBar: {
        height: '100%',
        width: `${percentage}%`,
        backgroundColor: isDarkMode ?
          (percentage >= 70 ? 'rgba(20, 83, 45, 0.8)' :
           percentage >= 50 ? 'rgba(113, 63, 18, 0.8)' :
           'rgba(127, 29, 29, 0.8)') :
          (percentage >= 70 ? SAFE_COLORS.green[500] :
           percentage >= 50 ? SAFE_COLORS.yellow[500] :
           SAFE_COLORS.red[500]),
        borderRadius: '0.5rem',
        transition: 'width 0.5s ease-out'
      },
      scoreCircle: {
        width: '5rem',
        height: '5rem',
        borderRadius: '50%',
        backgroundColor: scoreCircleColors[scoreCategory],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto'
      },
      scoreValue: {
        fontSize: '1.875rem',
        fontWeight: 'bold',
        color: SAFE_COLORS.neutral.white
      },
      scoreMessage: {
        marginTop: '0.5rem',
        fontWeight: '500',
        color: baseColors.text
      },
      detailsSection: {
        marginTop: '1.5rem',
        padding: '1rem',
        borderRadius: '0.5rem',
        backgroundColor: detailsSectionColors[scoreCategory],
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
      },
      // CORREGIDO: Colores específicos para texto visible en modo claro y oscuro
      detailLabel: {
        fontWeight: '500',
        color: detailLabelColor
      },
      detailText: {
        color: detailTextColor,
        marginBottom: '0.5rem'
      },
      note: {
        fontSize: '0.875rem',
        fontStyle: 'italic',
        color: detailTextColor
      },
      message: {
        marginTop: '1.5rem',
        color: neutralColors.textSecondary
      }
    };
  }

  // UTILIDADES ESPECÍFICAS PARA ESTILOS DE TAILWIND
  // ==============================================

  /**
   * Obtiene clases CSS de Tailwind según el porcentaje de acierto
   * @param {number} percentage - Porcentaje (0-100)
   * @returns {Object} Objeto con clases de texto y fondo
   */
  export function getColorClassesByPercentage(percentage) {
    // Para texto
    let textClass = '';
    if (percentage >= 70) textClass = 'text-green-600 dark:text-green-400';
    else if (percentage >= 50) textClass = 'text-yellow-600 dark:text-yellow-400';
    else textClass = 'text-red-600 dark:text-red-400';

    // Para barras de progreso
    let barClass = '';
    if (percentage >= 70) barClass = 'bg-green-500 dark:bg-green-500/80';
    else if (percentage >= 50) barClass = 'bg-yellow-500 dark:bg-yellow-500/80';
    else barClass = 'bg-red-500 dark:bg-red-500/80';

    return { textClass, barClass };
  }

  /**
   * Obtiene clases CSS de Tailwind para el círculo de puntuación
   * @param {number} score - Puntuación (0-10)
   * @returns {string} Clase CSS para el círculo
   */
  export function getScoreCircleClass(score) {
    if (score >= 9) return 'bg-green-600 dark:bg-green-500';
    if (score >= 8) return 'bg-green-500 dark:bg-green-400';
    if (score >= 7) return 'bg-green-400 dark:bg-green-300';
    if (score >= 6) return 'bg-yellow-500 dark:bg-yellow-400';
    if (score >= 5) return 'bg-yellow-400 dark:bg-yellow-300';
    return 'bg-red-500 dark:bg-red-400';
  }

  /**
   * Obtiene clases CSS de Tailwind para los fondos de secciones
   * @param {number} score - Puntuación (0-10)
   * @returns {string} Clase CSS para el fondo
   */
  export function getBackgroundClass(score) {
    if (score >= 9) return 'bg-green-100 dark:bg-green-900 dark:bg-opacity-30';
    if (score >= 7) return 'bg-green-50 dark:bg-green-800 dark:bg-opacity-20';
    if (score >= 5) return 'bg-yellow-50 dark:bg-yellow-800 dark:bg-opacity-20';
    return 'bg-red-50 dark:bg-red-900 dark:bg-opacity-20';
  }

  /**
   * Ajusta la luminosidad de un color hexadecimal (para pantallas problemáticas)
   * @param {string} hex - Color hexadecimal (con o sin #)
   * @param {number} factor - Factor de ajuste (>1 para aclarar, <1 para oscurecer)
   * @returns {string} Color hexadecimal ajustado
   */
  export const adjustBrightness = (hex, factor) => {
    if (!hex) return hex;
    hex = hex.replace('#', '');

    // Convertir a RGB
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    // Ajustar brillo
    r = Math.min(255, Math.round(r * factor));
    g = Math.min(255, Math.round(g * factor));
    b = Math.min(255, Math.round(b * factor));

    // Convertir de nuevo a hex
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  };