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

  // Valor de cada respuesta según las nuevas reglas
  const valorRespuestaCorrecta = 0.25;
  const valorRespuestaIncorrecta = -0.0833; // Un tercio del valor de una correcta, en negativo

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

  // Calculamos el porcentaje (sobre el máximo posible que sería total * valorRespuestaCorrecta)
  const maximoPosible = total * valorRespuestaCorrecta;
  const porcentajeSinRedondear = maximoPosible > 0 ? (puntosTotales / maximoPosible) * 100 : 0;
  const porcentajeRedondeado = Math.round(porcentajeSinRedondear);

  // Calculamos la nota sobre 10
  const notaSobre10SinRedondear = maximoPosible > 0 ? (puntosTotales / maximoPosible) * 10 : 0;

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