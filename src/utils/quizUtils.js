// Mezclar un array usando el algoritmo Fisher-Yates
export const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// Función para mezclar las opciones de una pregunta
export const shuffleQuestionOptions = (pregunta) => {
  // Creamos un nuevo objeto para no modificar el original
  const newPregunta = { ...pregunta };
  // Creamos un array de objetos que contiene cada opción y su índice original
  const optionsWithIndex = pregunta.opciones.map((opcion, index) => ({
    opcion,
    originalIndex: index
  }));
  // Mezclamos este array
  const shuffledOptionsWithIndex = shuffleArray(optionsWithIndex);
  // Extraemos las opciones mezcladas
  newPregunta.opciones = shuffledOptionsWithIndex.map(item => item.opcion);
  // Creamos un mapa de índices para actualizar la respuesta correcta
  const indexMap = {};
  shuffledOptionsWithIndex.forEach((item, newIndex) => {
    indexMap[item.originalIndex] = newIndex;
  });
  // Actualizamos el índice de la respuesta correcta
  newPregunta.respuestaCorrecta = indexMap[pregunta.respuestaCorrecta];
  // Guardamos el mapeo de índices para poder restaurar el orden original si es necesario
  newPregunta._indexMap = indexMap;
  return newPregunta;
};

// Función para mezclar todas las preguntas de un conjunto (incluidas sus opciones)
export const shuffleQuizQuestions = (preguntas) => {
  // Primero mezclamos las preguntas
  const shuffledQuestions = shuffleArray(preguntas);
  // Luego mezclamos las opciones de cada pregunta
  return shuffledQuestions.map(pregunta => shuffleQuestionOptions(pregunta));
};

// Formatear porcentaje
export const formatPorcentaje = (valor) => {
  return `${Math.round(valor)}%`;
};

// Retorna una clase CSS según el porcentaje
export const getColorClasePorcentaje = (porcentaje) => {
  if (porcentaje >= 70) return 'text-green-600 dark:text-green-400';
  if (porcentaje >= 50) return 'text-yellow-600 dark:text-yellow-400';
  return 'text-red-600 dark:text-red-400';
};

// Obtener la clase de color de fondo según el porcentaje
export const getBackgroundColorClass = (porcentaje) => {
  if (porcentaje >= 70) return 'bg-green-500 dark:bg-green-600';
  if (porcentaje >= 50) return 'bg-yellow-500 dark:bg-yellow-600';
  return 'bg-red-500 dark:bg-red-600';
};

// Generar ID único (para nuevos elementos si es necesario)
export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Formatear fecha
export const formatFecha = (fecha) => {
  return new Date(fecha).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

// Verificar si una respuesta es correcta
export const esRespuestaCorrecta = (pregunta, respuestaUsuario) => {
  return respuestaUsuario === pregunta.respuestaCorrecta;
};

// Calcular puntuación de un quiz con penalización por respuestas incorrectas
export const calcularPuntuacion = (preguntas, respuestas) => {
  // Verificar que tengamos datos válidos
  if (!preguntas || !Array.isArray(preguntas) || preguntas.length === 0) {
    return {
      correctas: 0,
      incorrectas: 0,
      sinResponder: 0,
      total: 0,
      puntosTotales: 0,
      puntosPorCorrectas: 0,
      puntosPorIncorrectas: 0,
      porcentaje: 0,
      notaSobre10: 0
    };
  }

  let correctas = 0;
  let incorrectas = 0;
  let sinResponder = 0;
  let total = preguntas.length;

  // Valor dinámico de cada respuesta para que el máximo siempre sea 10 puntos
  // - Cada correcta suma 10 / total
  // - Cada incorrecta resta un tercio de una correcta (penalización 1/3)
  // Mantiene compatibilidad con exámenes de 30 preguntas: correcta = 0.3333..., incorrecta = -0.1111...
  const valorRespuestaCorrecta = 10 / total;
  const valorRespuestaIncorrecta = -(valorRespuestaCorrecta / 3);

  // Asegurar que respuestas sea un objeto válido
  const respuestasObj = respuestas || {};

  preguntas.forEach(pregunta => {
    // Verificamos si la pregunta tiene un ID válido
    const preguntaId = pregunta?.id;
    if (preguntaId === undefined) return;

    // Verificamos si la pregunta fue respondida
    if (respuestasObj[preguntaId] !== undefined) {
      // Si la respuesta es correcta
      if (respuestasObj[preguntaId] === pregunta.respuestaCorrecta) {
        correctas++;
      } else {
        incorrectas++;
      }
    } else {
      // Pregunta sin responder
      sinResponder++;
    }
  });

  // Calculamos los puntos obtenidos según la nueva fórmula
  const puntosPorCorrectas = correctas * valorRespuestaCorrecta;
  const puntosPorIncorrectas = incorrectas * valorRespuestaIncorrecta;
  const puntosTotales = Math.max(0, puntosPorCorrectas + puntosPorIncorrectas);

  // Calculamos el porcentaje (sobre el máximo posible que es 10 con la fórmula dinámica)
  const maximoPosible = total * valorRespuestaCorrecta; // será 10
  const porcentajeSinRedondear = maximoPosible > 0 ? (puntosTotales / maximoPosible) * 100 : 0;
  const porcentajeRedondeado = Math.round(porcentajeSinRedondear);

  // Calculamos la nota sobre 10
  const notaSobre10SinRedondear = maximoPosible > 0 ? (puntosTotales / maximoPosible) * 10 : 0; // equivale a puntosTotales

  // Redondeamos la nota al entero más cercano, con el .5 redondeando hacia arriba
  const notaRedondeada = isNaN(notaSobre10SinRedondear) ? 0 :
                         notaSobre10SinRedondear % 1 >= 0.5 ?
                         Math.ceil(notaSobre10SinRedondear) :
                         Math.floor(notaSobre10SinRedondear);

  return {
    correctas,
    incorrectas,
    sinResponder,
    total,
    puntosTotales,
    puntosPorCorrectas,
    puntosPorIncorrectas,
    porcentaje: porcentajeRedondeado,
    notaSobre10: notaRedondeada
  };
};

/**
 * Formatea una marca de tiempo (timestamp) en una representación localizada y amigable
 * @param {number|string|Date} timestamp - Marca de tiempo a formatear
 * @param {Object} [options] - Opciones de formato
 * @param {boolean} [options.includeTime=true] - Si se debe incluir la hora
 * @param {string} [options.locale='es-ES'] - Código de localización
 * @returns {string} Fecha formateada
 */
export const formatTimestamp = (timestamp, options = {}) => {
  if (!timestamp) return '';

  const {
    includeTime = true,
    locale = 'es-ES'
  } = options;

  try {
    const date = new Date(timestamp);

    // Verificar que la fecha es válida
    if (isNaN(date.getTime())) {
      return '';
    }

    // Opciones de formato
    const formatOptions = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    };

    // Añadir opciones de hora si se solicita
    if (includeTime) {
      formatOptions.hour = '2-digit';
      formatOptions.minute = '2-digit';
    }

    return date.toLocaleString(locale, formatOptions);
  } catch (error) {
    console.error('Error al formatear timestamp:', error);
    return '';
  }
};