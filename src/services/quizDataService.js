/**
 * Servicios para la gestión de datos relacionados con quizzes, asignaturas y módulos.
 * Implementa importaciones estáticas para mayor compatibilidad con Vite y entornos de producción.
 * Incluye soporte para organización por años académicos.
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
import despliegueDeAplicacionesWeb from '../data/asignaturas/despliegueDeAplicacionesWeb';
import infoItinearioParaLaEmpleabilidad2 from '../data/asignaturas/itinearioParaLaEmpleabilidad2';
import moduloProfesionalOptativo2 from '../data/asignaturas/moduloProfesionalOptativo2';
import entornoServidor from '../data/asignaturas/entornoServidor';

// Mapa de módulos para acceso rápido por ID (mantenemos la estructura original)
const modulosMap = {
  1: sistemasInformaticos,
  2: basesDeDatos,
  3: programacion,
  4: lenguajeDeMarcas,
  5: entornosDeDesarrollo,
  6: itinerarioParaLaEmpleabilidad,
  7: moduloProfesionalOptativo,
};

// Asignaturas completas de primer año (basadas en modulosMap)
const asignaturasCompletasPrimerAno = Object.values(modulosMap);

// Asignaturas de segundo año (placeholder para futuras implementaciones)
const asignaturasCompletasSegundoAno = [
  // Aquí irán las futuras asignaturas de segundo año
  despliegueDeAplicacionesWeb,
  infoItinearioParaLaEmpleabilidad2,
  moduloProfesionalOptativo2,
  entornoServidor

];

// Nueva estructura organizada por años
const asignaturasPorAno = {
  1: {
    nombre: "Primer Año",
    asignaturas: asignaturasCompletasPrimerAno,
    disponible: true
  },
  2: {
    nombre: "Segundo Año",
    asignaturas: asignaturasCompletasSegundoAno,
    disponible: true 
  }
};

/**
 * Obtiene la lista completa de asignaturas disponibles.
 * @async
 * @function fetchAsignaturas
 * @returns {Promise<Array<Object>>} Promesa que resuelve con el array de asignaturas
 */
export const fetchAsignaturas = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(asignaturas);
    }, 200);
  });
};

/**
 * Obtiene asignaturas organizadas por año académico.
 * @async
 * @function fetchAsignaturasPorAno
 * @returns {Promise<Object>} Promesa que resuelve con asignaturas organizadas por año
 */
export const fetchAsignaturasPorAno = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(asignaturasPorAno);
    }, 200);
  });
};

/**
 * Obtiene asignaturas de un año específico.
 * @async
 * @function fetchAsignaturasPorAnoEspecifico
 * @param {number} ano - Año académico
 * @returns {Promise<Object|null>} Promesa que resuelve con los datos del año o null
 */
export const fetchAsignaturasPorAnoEspecifico = (ano) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(asignaturasPorAno[ano] || null);
    }, 200);
  });
};

/**
 * Obtiene años académicos disponibles.
 * @async
 * @function fetchAnosDisponibles
 * @returns {Promise<Array>} Promesa que resuelve con la lista de años disponibles
 */
export const fetchAnosDisponibles = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const anos = Object.keys(asignaturasPorAno).map(ano => ({
        numero: parseInt(ano),
        ...asignaturasPorAno[ano]
      }));
      resolve(anos);
    }, 200);
  });
};

/**
 * Función auxiliar para buscar una asignatura por ID en todos los años.
 * @param {string|number} asignaturaId - ID de la asignatura a buscar
 * @returns {Object|null} Asignatura encontrada o null
 */
const buscarAsignaturaPorId = (asignaturaId) => {
  const id = parseInt(asignaturaId, 10);

  // Buscar en todas las asignaturas de todos los años
  for (const ano of Object.values(asignaturasPorAno)) {
    const asignatura = ano.asignaturas.find((asignatura) => asignatura.id === id);
    if (asignatura) return asignatura;
  }

  // Fallback: buscar en modulosMap (retrocompatibilidad)
  return modulosMap[id] || null;
};

/**
 * Obtiene una asignatura completa con todos sus módulos.
 * Utiliza importaciones estáticas para mayor compatibilidad.
 * Ahora busca en la nueva estructura por años.
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
        // Validar que asignaturaId es un valor válido
        if (asignaturaId === null || asignaturaId === undefined || isNaN(parseInt(asignaturaId, 10))) {
          console.error("ID de asignatura inválido:", asignaturaId);
          reject(new Error(`ID de asignatura inválido: ${asignaturaId}`));
          return;
        }

        // Buscar la asignatura usando la nueva función
        const asignatura = buscarAsignaturaPorId(asignaturaId);

        if (asignatura) {
          resolve(asignatura);
        } else {
          // Fallback: buscar en la lista básica de asignaturas
          const id = parseInt(asignaturaId, 10);
          const asignaturaBasica = asignaturas.find((a) => a.id === id);

          if (!asignaturaBasica) {
            console.error("Asignatura no encontrada con ID:", id);
            reject(new Error(`Asignatura no encontrada con ID: ${id}`));
          } else {
            resolve({
              ...asignaturaBasica,
              modulos: [],
            });
          }
        }
      } catch (error) {
        console.error("Error cargando asignatura:", error, "ID:", asignaturaId);
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