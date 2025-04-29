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
  let correctas = 0;
  let incorrectas = 0;
  let total = preguntas.length;

  preguntas.forEach(pregunta => {
    // Si la respuesta es undefined, se considera incorrecta
    if (respuestas[pregunta.id] === pregunta.respuestaCorrecta) {
      correctas++;
    } else {
      incorrectas++;
    }
  });

  // Calculamos la penalización: cada 3 incorrectas restamos 1 correcta
  const penalizacion = Math.floor(incorrectas / 3);

  // Aplicamos la penalización, pero nunca menos de 0
  const puntuacionFinal = Math.max(0, correctas - penalizacion);

  // Calculamos el porcentaje sin redondear
  const porcentajeSinRedondear = total > 0 ? (puntuacionFinal / total) * 100 : 0;

  // Calculamos la nota sobre 10 (proporción directa)
  const notaSobre10SinRedondear = total > 0 ? (puntuacionFinal / total) * 10 : 0;

  // Redondeamos la nota según la regla específica
  const notaSobre10 = Math.round(notaSobre10SinRedondear * 10) / 10; // Primero redondeamos a 1 decimal
  const notaRedondeada = notaSobre10SinRedondear % 1 >= 0.5 ? Math.ceil(notaSobre10SinRedondear) : Math.floor(notaSobre10SinRedondear);

  return {
    correctas: puntuacionFinal,
    incorrectas,
    penalizacion,
    total,
    aciertosOriginales: correctas,
    porcentaje: Math.round(porcentajeSinRedondear), // Mantenemos el porcentaje como antes
    notaSobre10: notaRedondeada // Nueva propiedad con la nota sobre 10 redondeada
  };
};