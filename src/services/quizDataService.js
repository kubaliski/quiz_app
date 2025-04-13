/**
 * Servicios para la gestión de datos relacionados con quizzes, asignaturas y módulos.
 * Simula operaciones asíncronas con tiempos de espera para emular peticiones a servidor.
 * En su momento se pensó en usar una API REST, pero eh.. datos locales son más que validos
 * @module quizDataService
 */

import { asignaturas } from "../data/asignaturas";
import { shuffleArray } from "@utils/quizUtils";

/**
 * Obtiene la lista completa de asignaturas disponibles.
 * Simula una carga de datos asíncrona con un pequeño retraso.
 *
 * @async
 * @function fetchAsignaturas
 * @returns {Promise<Array<Object>>} Promesa que resuelve con el array de asignaturas
 *
 * @example
 * // Obtener todas las asignaturas
 * import { fetchAsignaturas } from '@services/quizDataService';
 *
 * async function cargarAsignaturas() {
 *   try {
 *     const listaAsignaturas = await fetchAsignaturas();
 *     console.log(`Cargadas ${listaAsignaturas.length} asignaturas`);
 *     return listaAsignaturas;
 *   } catch (error) {
 *     console.error('Error al cargar asignaturas:', error);
 *   }
 * }
 */
export const fetchAsignaturas = () => {
  return new Promise((resolve) => {
    // Simulamos un retraso de red de 200ms
    setTimeout(() => {
      resolve(asignaturas);
    }, 200);
  });
};

/**
 * Obtiene una asignatura completa con todos sus módulos.
 * Para la asignatura de Sistemas Informáticos (id=1) carga los datos reales,
 * mientras que para el resto devuelve un placeholder con estructura básica.
 *
 * @async
 * @function fetchAsignaturaCompleta
 * @param {string|number} asignaturaId - Identificador de la asignatura a obtener
 * @returns {Promise<Object>} Promesa que resuelve con el objeto de asignatura completo
 * @throws {Error} Si la asignatura solicitada no existe
 *
 * @example
 * // Obtener la asignatura de Sistemas Informáticos con sus módulos
 * import { fetchAsignaturaCompleta } from '@services/quizDataService';
 *
 * async function cargarSistemasInformaticos() {
 *   try {
 *     const asignatura = await fetchAsignaturaCompleta(1);
 *     console.log(`Asignatura: ${asignatura.nombre}`);
 *     console.log(`Módulos disponibles: ${asignatura.modulos.length}`);
 *     return asignatura;
 *   } catch (error) {
 *     console.error('Error al cargar la asignatura:', error);
 *   }
 * }
 */
export const fetchAsignaturaCompleta = async (asignaturaId) => {
  // Simulamos una carga asíncrona
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const id = parseInt(asignaturaId, 10);
        if (id === 1) {
          // Sistemas Informáticos
          import("../data/asignaturas/sistemasInformaticos")
            .then((module) => resolve(module.default))
            .catch((error) => reject(error));
        } else if (id === 2) {
          // Bases de Datos
          import("../data/asignaturas/basesDeDatos")
            .then((module) => resolve(module.default))
            .catch((error) => reject(error));
        } else if (id === 3) {
          // Programación
          import("../data/asignaturas/programacion")
            .then((module) => resolve(module.default))
            .catch((error) => reject(error));
        } else if (id === 4) {
          //Entornos De Desarrollo
          import("../data/asignaturas/entornosDeDesarrollo")
            .then((module) => resolve(module.default))
            .catch((error) => reject(error));
        } else {
          // Otras asignaturas (por ahora solo tenemos placeholder)
          const asignatura = asignaturas.find((a) => a.id === id);
          if (!asignatura) {
            reject(new Error("Asignatura no encontrada"));
          } else {
            // Creamos un objeto básico con la estructura esperada
            resolve({
              ...asignatura,
              modulos: [],
            });
          }
        }
      } catch (error) {
        reject(error);
      }
    }, 300);
  });
};

/**
 * Obtiene un módulo específico de una asignatura.
 *
 * @async
 * @function fetchModulo
 * @param {string|number} asignaturaId - Identificador de la asignatura
 * @param {string|number} moduloId - Identificador del módulo a obtener
 * @returns {Promise<Object>} Promesa que resuelve con el objeto del módulo
 * @throws {Error} Si la asignatura o el módulo no existen
 *
 * @example
 * // Obtener el módulo de Linux (101) de Sistemas Informáticos (1)
 * import { fetchModulo } from '@services/quizDataService';
 *
 * async function cargarModuloLinux() {
 *   try {
 *     const modulo = await fetchModulo(1, 101);
 *     console.log(`Módulo: ${modulo.nombre}`);
 *     console.log(`Preguntas disponibles: ${modulo.preguntas.length}`);
 *     return modulo;
 *   } catch (error) {
 *     console.error('Error al cargar el módulo:', error);
 *   }
 * }
 */
export const fetchModulo = async (asignaturaId, moduloId) => {
  try {
    const asignatura = await fetchAsignaturaCompleta(asignaturaId);
    const modulo = asignatura.modulos.find(
      (m) => m.id === parseInt(moduloId, 10)
    );

    if (!modulo) {
      throw new Error("Módulo no encontrado");
    }

    return modulo;
  } catch (error) {
    console.error("Error cargando módulo:", error);
    throw error;
  }
};

/**
 * Obtiene todas las preguntas de una asignatura, reuniendo las preguntas de todos sus módulos.
 *
 * @async
 * @function fetchAllPreguntasByAsignatura
 * @param {string|number} asignaturaId - Identificador de la asignatura
 * @returns {Promise<Array<Object>>} Promesa que resuelve con el array de todas las preguntas
 * @throws {Error} Si la asignatura no existe o hay error al cargar sus módulos
 *
 * @example
 * // Obtener todas las preguntas de Sistemas Informáticos (1)
 * import { fetchAllPreguntasByAsignatura } from '@services/quizDataService';
 *
 * async function cargarTodasLasPreguntas() {
 *   try {
 *     const preguntas = await fetchAllPreguntasByAsignatura(1);
 *     console.log(`Total de preguntas: ${preguntas.length}`);
 *     return preguntas;
 *   } catch (error) {
 *     console.error('Error al cargar las preguntas:', error);
 *   }
 * }
 */
export const fetchAllPreguntasByAsignatura = async (asignaturaId) => {
  try {
    const asignatura = await fetchAsignaturaCompleta(asignaturaId);
    return asignatura.modulos.flatMap((m) => m.preguntas);
  } catch (error) {
    console.error("Error cargando preguntas:", error);
    throw error;
  }
};

/**
 * Guarda los resultados de un quiz en el almacenamiento local.
 * Añade la fecha actual a los resultados antes de almacenarlos.
 *
 * @async
 * @function guardarResultadosQuiz
 * @param {Object} resultados - Objeto con los resultados del quiz a guardar
 * @param {number} resultados.asignaturaId - ID de la asignatura
 * @param {number} [resultados.moduloId] - ID del módulo (si aplica)
 * @param {number} resultados.correctas - Cantidad de respuestas correctas
 * @param {number} resultados.total - Total de preguntas respondidas
 * @param {number} resultados.porcentaje - Porcentaje de acierto (0-100)
 * @returns {Promise<Object>} Promesa que resuelve con un objeto de confirmación
 *
 * @example
 * // Guardar los resultados de un quiz
 * import { guardarResultadosQuiz } from '@services/quizDataService';
 *
 * async function finalizarQuiz() {
 *   const resultados = {
 *     asignaturaId: 1,
 *     moduloId: 101,
 *     correctas: 8,
 *     total: 10,
 *     porcentaje: 80
 *   };
 *
 *   try {
 *     const respuesta = await guardarResultadosQuiz(resultados);
 *     console.log(respuesta.message);
 *   } catch (error) {
 *     console.error('Error al guardar resultados:', error);
 *   }
 * }
 */
export const guardarResultadosQuiz = (resultados) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const historicoResultados = JSON.parse(
        localStorage.getItem("quiz_historico") || "[]"
      );
      historicoResultados.push({
        ...resultados,
        fecha: new Date().toISOString(),
      });
      localStorage.setItem(
        "quiz_historico",
        JSON.stringify(historicoResultados)
      );

      resolve({ success: true, message: "Resultados guardados correctamente" });
    }, 300);
  });
};

/**
 * Obtiene el historial completo de resultados de quizzes realizados.
 * Lee los datos desde el almacenamiento local del navegador.
 *
 * @async
 * @function obtenerHistorialResultados
 * @returns {Promise<Array<Object>>} Promesa que resuelve con el array de resultados históricos
 *
 * @example
 * // Obtener el historial de resultados
 * import { obtenerHistorialResultados } from '@services/quizDataService';
 *
 * async function mostrarHistorial() {
 *   try {
 *     const historial = await obtenerHistorialResultados();
 *     console.log(`Quizzes completados: ${historial.length}`);
 *
 *     // Calcular promedio general
 *     if (historial.length > 0) {
 *       const promedioGeneral = historial.reduce((sum, item) => sum + item.porcentaje, 0) / historial.length;
 *       console.log(`Promedio general: ${promedioGeneral.toFixed(2)}%`);
 *     }
 *
 *     return historial;
 *   } catch (error) {
 *     console.error('Error al obtener historial:', error);
 *   }
 * }
 */
export const obtenerHistorialResultados = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const historicoResultados = JSON.parse(
        localStorage.getItem("quiz_historico") || "[]"
      );
      resolve(historicoResultados);
    }, 300);
  });
};

/**
 * Obtiene un número limitado de preguntas aleatorias de una asignatura
 *
 * @async
 * @function fetchRandomPreguntasByAsignatura
 * @param {string|number} asignaturaId - Identificador de la asignatura
 * @param {number} [limit=100] - Número máximo de preguntas a retornar
 * @returns {Promise<Array<Object>>} Promesa que resuelve con un array de preguntas aleatorias
 * @throws {Error} Si la asignatura no existe o hay error al cargar sus módulos
 */
export const fetchRandomPreguntasByAsignatura = async (
  asignaturaId,
  limit = 100
) => {
  try {
    // Obtenemos todas las preguntas de la asignatura
    const todasPreguntas = await fetchAllPreguntasByAsignatura(asignaturaId);

    // Mezclamos las preguntas usando la función shuffleArray
    const preguntasMezcladas = shuffleArray([...todasPreguntas]);

    // Limitamos la cantidad de preguntas (tomamos como máximo 'limit' preguntas)
    // Si hay menos preguntas que el límite, se devolverán todas
    return preguntasMezcladas.slice(0, limit);
  } catch (error) {
    console.error("Error cargando preguntas aleatorias:", error);
    throw error;
  }
};
