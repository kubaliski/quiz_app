/**
 * Servicios para la gestión de datos relacionados con quizzes, asignaturas y módulos.
 * Implementa importaciones estáticas para mayor compatibilidad con Vite y entornos de producción.
 * @module quizDataService
 */

import { asignaturas } from "../data/asignaturas";
import { shuffleArray } from "@utils/quizUtils";

// Importaciones estáticas de todos los módulos de asignaturas
import sistemasInformaticos from '../data/asignaturas/sistemasInformaticos';
import basesDeDatos from '../data/asignaturas/basesDeDatos';
import programacion from '../data/asignaturas/programacion';
import lenguajeDeMarcas from '../data/asignaturas/lenguajeDeMarcas';
import entornosDeDesarrollo from '../data/asignaturas/entornosDeDesarrollo';
import itinerarioParaLaEmpleabilidad from '../data/asignaturas/itinerarioParaLaEmpleabilidad';
import moduloProfesionalOptativo from '../data/asignaturas/moduloProfesionalOptativo';

// Mapa de módulos para acceso rápido por ID
const modulosMap = {
  1: sistemasInformaticos,
  2: basesDeDatos,
  3: programacion,
  4: lenguajeDeMarcas,
  5: entornosDeDesarrollo,
  6: itinerarioParaLaEmpleabilidad,
  7: moduloProfesionalOptativo
};

/**
 * Obtiene la lista completa de asignaturas disponibles.
 * @async
 * @function fetchAsignaturas
 * @returns {Promise<Array<Object>>} Promesa que resuelve con el array de asignaturas
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
 * Utiliza importaciones estáticas para mayor compatibilidad.
 *
 * @async
 * @function fetchAsignaturaCompleta
 * @param {string|number} asignaturaId - Identificador de la asignatura a obtener
 * @returns {Promise<Object>} Promesa que resuelve con el objeto de asignatura completo
 * @throws {Error} Si la asignatura solicitada no existe
 */
export const fetchAsignaturaCompleta = async (asignaturaId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const id = parseInt(asignaturaId, 10);

        if (modulosMap[id]) {
          // Usar el módulo pre-importado
          resolve(modulosMap[id]);
        } else {
          // Otras asignaturas (placeholder)
          const asignatura = asignaturas.find((a) => a.id === id);
          if (!asignatura) {
            reject(new Error("Asignatura no encontrada"));
          } else {
            resolve({
              ...asignatura,
              modulos: [],
            });
          }
        }
      } catch (error) {
        console.error("Error cargando asignatura:", error);
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
 * @async
 * @function fetchAllPreguntasByAsignatura
 * @param {string|number} asignaturaId - Identificador de la asignatura
 * @returns {Promise<Array<Object>>} Promesa que resuelve con el array de todas las preguntas
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
 * @async
 * @function guardarResultadosQuiz
 * @param {Object} resultados - Objeto con los resultados del quiz a guardar
 * @returns {Promise<Object>} Promesa que resuelve con un objeto de confirmación
 */
export const guardarResultadosQuiz = (resultados) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      try {
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
      } catch (error) {
        console.error("Error al guardar resultados:", error);
        resolve({ success: false, message: "No se pudieron guardar los resultados" });
      }
    }, 300);
  });
};

/**
 * Obtiene el historial completo de resultados de quizzes realizados.
 * @async
 * @function obtenerHistorialResultados
 * @returns {Promise<Array<Object>>} Promesa que resuelve con el array de resultados históricos
 */
export const obtenerHistorialResultados = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      try {
        const historicoResultados = JSON.parse(
          localStorage.getItem("quiz_historico") || "[]"
        );
        resolve(historicoResultados);
      } catch (error) {
        console.error("Error al obtener historial:", error);
        resolve([]);
      }
    }, 300);
  });
};

/**
 * Obtiene un número limitado de preguntas aleatorias de una asignatura
 * @async
 * @function fetchRandomPreguntasByAsignatura
 * @param {string|number} asignaturaId - Identificador de la asignatura
 * @param {number} [limit=40] - Número máximo de preguntas a retornar
 * @returns {Promise<Array<Object>>} Promesa que resuelve con un array de preguntas aleatorias
 */
export const fetchRandomPreguntasByAsignatura = async (
  asignaturaId,
  limit = 40
) => {
  try {
    // Obtenemos todas las preguntas de la asignatura
    const todasPreguntas = await fetchAllPreguntasByAsignatura(asignaturaId);

    // Mezclamos las preguntas usando la función shuffleArray
    const preguntasMezcladas = shuffleArray([...todasPreguntas]);

    // Limitamos la cantidad de preguntas
    return preguntasMezcladas.slice(0, limit);
  } catch (error) {
    console.error("Error cargando preguntas aleatorias:", error);
    throw error;
  }
};

/**
 * Obtiene un número limitado de preguntas aleatorias de los módulos de examen de una asignatura
 * @async
 * @function fetchRandomPreguntasByAsignaturaExamen
 * @param {string|number} asignaturaId - Identificador de la asignatura
 * @param {number} [limit=40] - Número máximo de preguntas a retornar
 * @returns {Promise<Array<Object>>} Promesa que resuelve con un array de preguntas aleatorias de examen
 * @throws {Error} Si la asignatura no existe o hay error al cargar sus módulos
 */
export const fetchRandomPreguntasByAsignaturaExamen = async (
  asignaturaId,
  limit = 40
) => {
  try {
    const asignatura = await fetchAsignaturaCompleta(asignaturaId);

    // Filtramos solo los módulos de examen
    const modulosExamen = asignatura.modulos.filter(m => m.esExamen);

    // Comprobamos si hay módulos de examen
    if (modulosExamen.length === 0) {
      console.warn('No se encontraron módulos de examen para la asignatura', asignaturaId);
      return [];
    }

    // Obtenemos todas las preguntas de esos módulos
    const todasPreguntas = modulosExamen.flatMap(m => m.preguntas);

    // Mezclamos y limitamos
    const preguntasMezcladas = shuffleArray([...todasPreguntas]);
    return preguntasMezcladas.slice(0, limit);
  } catch (error) {
    console.error("Error cargando preguntas de examen:", error);
    throw error;
  }
};