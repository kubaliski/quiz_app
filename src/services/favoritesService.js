/**
 * Servicios para la gestión de preguntas favoritas.
 * Permite guardar, recuperar y gestionar preguntas marcadas como favoritas por el usuario.
 * @module favoritesService
 */

import { shuffleArray } from "@utils/quizUtils";

/**
 * Obtiene todas las preguntas favoritas de una asignatura específica
 * @async
 * @function getFavoritesByAsignatura
 * @param {string|number} asignaturaId - Identificador de la asignatura
 * @returns {Promise<Array<Object>>} Promesa que resuelve con el array de preguntas favoritas
 */
export const getFavoritesByAsignatura = (asignaturaId) => {
  return new Promise((resolve) => {
    try {
      const key = `quiz_favorites_${asignaturaId}`;
      const favorites = JSON.parse(localStorage.getItem(key) || '{"preguntas": []}');
      resolve(favorites);
    } catch (error) {
      console.error('Error al obtener favoritos:', error);
      resolve({ preguntas: [] });
    }
  });
};

/**
 * Obtiene todas las asignaturas que tienen preguntas favoritas
 * @async
 * @function getAllFavoriteAsignaturas
 * @returns {Promise<Array<Object>>} Promesa que resuelve con información de asignaturas con favoritos
 */
export const getAllFavoriteAsignaturas = () => {
  return new Promise((resolve) => {
    try {
      const favoriteAsignaturas = [];

      // Buscar todas las claves de favoritos en localStorage
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        if (key && key.startsWith('quiz_favorites_')) {
          const asignaturaId = key.split('_')[2];
          const favoritesData = JSON.parse(localStorage.getItem(key) || '{"preguntas": []}');

          if (favoritesData.preguntas && favoritesData.preguntas.length > 0) {
            favoriteAsignaturas.push({
              id: asignaturaId,
              nombre: favoritesData.nombre || `Asignatura ${asignaturaId}`,
              totalPreguntas: favoritesData.preguntas.length,
              ultimaActualizacion: favoritesData.ultimaActualizacion || Date.now()
            });
          }
        }
      }

      // Ordenar por última actualización (más recientes primero)
      favoriteAsignaturas.sort((a, b) => b.ultimaActualizacion - a.ultimaActualizacion);

      resolve(favoriteAsignaturas);
    } catch (error) {
      console.error('Error al obtener asignaturas con favoritos:', error);
      resolve([]);
    }
  });
};

/**
 * Añade una pregunta a favoritos para una asignatura específica
 * @async
 * @function addFavorite
 * @param {string|number} asignaturaId - Identificador de la asignatura
 * @param {Object} asignatura - Objeto con la información de la asignatura
 * @param {Object} pregunta - Objeto con la información de la pregunta a añadir
 * @returns {Promise<Object>} Promesa que resuelve con el estado de la operación
 */
export const addFavorite = (asignaturaId, asignatura, pregunta) => {
  return new Promise((resolve) => {
    try {
      const key = `quiz_favorites_${asignaturaId}`;

      // Obtener favoritos actuales
      const currentFavorites = JSON.parse(localStorage.getItem(key) || '{"preguntas": []}');

      // Verificar si la pregunta ya existe
      const exists = currentFavorites.preguntas.some(p => p.id === pregunta.id);

      if (!exists) {
        // Actualizar datos de la asignatura
        currentFavorites.nombre = asignatura?.nombre || currentFavorites.nombre || `Asignatura ${asignaturaId}`;
        currentFavorites.ultimaActualizacion = Date.now();

        // Añadir la pregunta
        currentFavorites.preguntas.push(pregunta);

        // Guardar en localStorage
        localStorage.setItem(key, JSON.stringify(currentFavorites));

        resolve({ success: true, message: 'Pregunta añadida a favoritos' });
      } else {
        resolve({ success: false, message: 'La pregunta ya existe en favoritos' });
      }
    } catch (error) {
      console.error('Error al añadir favorito:', error);
      resolve({ success: false, message: 'Error al añadir favorito' });
    }
  });
};

/**
 * Elimina una pregunta de favoritos para una asignatura específica
 * @async
 * @function removeFavorite
 * @param {string|number} asignaturaId - Identificador de la asignatura
 * @param {string|number} preguntaId - Identificador de la pregunta a eliminar
 * @returns {Promise<Object>} Promesa que resuelve con el estado de la operación
 */
export const removeFavorite = (asignaturaId, preguntaId) => {
  return new Promise((resolve) => {
    try {
      const key = `quiz_favorites_${asignaturaId}`;

      // Obtener favoritos actuales
      const currentFavorites = JSON.parse(localStorage.getItem(key) || '{"preguntas": []}');

      // Filtrar la pregunta a eliminar
      currentFavorites.preguntas = currentFavorites.preguntas.filter(p => p.id !== preguntaId);
      currentFavorites.ultimaActualizacion = Date.now();

      // Guardar en localStorage
      localStorage.setItem(key, JSON.stringify(currentFavorites));

      resolve({ success: true, message: 'Pregunta eliminada de favoritos' });
    } catch (error) {
      console.error('Error al eliminar favorito:', error);
      resolve({ success: false, message: 'Error al eliminar favorito' });
    }
  });
};

/**
 * Comprueba si una pregunta está marcada como favorita
 * @async
 * @function isFavorite
 * @param {string|number} asignaturaId - Identificador de la asignatura
 * @param {string|number} preguntaId - Identificador de la pregunta
 * @returns {Promise<boolean>} Promesa que resuelve con true si es favorita, false en caso contrario
 */
export const isFavorite = (asignaturaId, preguntaId) => {
  return new Promise((resolve) => {
    try {
      const key = `quiz_favorites_${asignaturaId}`;

      // Obtener favoritos actuales
      const currentFavorites = JSON.parse(localStorage.getItem(key) || '{"preguntas": []}');

      // Comprobar si la pregunta existe
      const exists = currentFavorites.preguntas.some(p => p.id === preguntaId);

      resolve(exists);
    } catch (error) {
      console.error('Error al comprobar favorito:', error);
      resolve(false);
    }
  });
};

/**
 * Elimina todos los favoritos de una asignatura
 * @async
 * @function clearFavorites
 * @param {string|number} asignaturaId - Identificador de la asignatura
 * @returns {Promise<Object>} Promesa que resuelve con el estado de la operación
 */
export const clearFavorites = (asignaturaId) => {
  return new Promise((resolve) => {
    try {
      const key = `quiz_favorites_${asignaturaId}`;
      localStorage.removeItem(key);
      resolve({ success: true, message: 'Favoritos eliminados correctamente' });
    } catch (error) {
      console.error('Error al eliminar favoritos:', error);
      resolve({ success: false, message: 'Error al eliminar favoritos' });
    }
  });
};

/**
 * Inicia un quiz con preguntas favoritas de una asignatura
 * @async
 * @function startFavoritesQuiz
 * @param {string|number} asignaturaId - Identificador de la asignatura
 * @param {number} [limit=30] - Número máximo de preguntas a incluir
 * @returns {Promise<Object>} Promesa que resuelve con las preguntas preparadas para el quiz
 */
export const startFavoritesQuiz = async (asignaturaId, limit = 30) => {
  try {
    // Obtener favoritos
    const favorites = await getFavoritesByAsignatura(asignaturaId);

    if (!favorites.preguntas || favorites.preguntas.length === 0) {
      throw new Error('No hay preguntas favoritas para esta asignatura');
    }

    // Verificar si debemos seleccionar preguntas aleatorias
    const useRandom = sessionStorage.getItem('favorites_quiz_random') === 'true';
    const customLimit = sessionStorage.getItem('favorites_quiz_limit');
    const questionLimit = customLimit ? parseInt(customLimit, 10) : limit;

    let selectedQuestions;

    if (useRandom || favorites.preguntas.length > questionLimit) {
      // Mezclar preguntas favoritas y limitar
      const shuffledQuestions = shuffleArray([...favorites.preguntas]);
      selectedQuestions = shuffledQuestions.slice(0, questionLimit);

      // Limpiar flags de sessionStorage
      sessionStorage.removeItem('favorites_quiz_random');
      sessionStorage.removeItem('favorites_quiz_limit');
    } else {
      // Usar todas las preguntas disponibles
      selectedQuestions = [...favorites.preguntas];
    }

    return {
      success: true,
      preguntas: selectedQuestions,
      asignatura: {
        id: asignaturaId,
        nombre: favorites.nombre || `Asignatura ${asignaturaId}`
      }
    };
  } catch (error) {
    console.error('Error al iniciar quiz de favoritos:', error);
    return {
      success: false,
      message: error.message || 'Error al iniciar quiz de favoritos',
      preguntas: []
    };
  }
};