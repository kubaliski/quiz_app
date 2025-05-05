/**
 * Servicios para la gestión de datos relacionados con quizzes, asignaturas y módulos.
 * Implementa manejo de errores mejorado para importaciones dinámicas.
 * @module quizDataService
 */

import { asignaturas } from "../data/asignaturas";
import { shuffleArray } from "@utils/quizUtils";
import { isModuleLoadError } from "./swService";

// Caché en memoria para versiones de módulos
const moduleVersions = {};

/**
 * Ayudante para intentar importar un módulo con reintentos
 * @async
 * @function safeImport
 * @param {string} path - Ruta del módulo a importar
 * @param {number} [retries=2] - Número de reintentos
 * @returns {Promise<Object>} Promesa que resuelve con el módulo importado
 * @throws {Error} Si todos los reintentos fallan
 */
const safeImport = async (path, retries = 2) => {
  try {
    // Añadir timestamp para evitar caché en caso de problemas
    const module = await import(`${path}?v=${Date.now()}`);

    // Registrar versión para futura referencia
    const moduleKey = path.split('/').pop();
    moduleVersions[moduleKey] = Date.now();

    return module;
  } catch (error) {
    if (retries > 0) {
      console.warn(`Reintentando importar ${path}. Reintentos restantes: ${retries}`);

      // Esperar un poco antes de reintentar
      await new Promise(resolve => setTimeout(resolve, 500));

      return safeImport(path, retries - 1);
    }

    // Registrar error y propagarlo
    console.error(`Error importando el módulo ${path}:`, error);

    // Marcar el error como relacionado con SW si aplica
    if (isModuleLoadError(error)) {
      error.swUpdateAvailable = true;
    }

    throw error;
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
    // Simulamos un retraso de red de 200ms
    setTimeout(() => {
      resolve(asignaturas);
    }, 200);
  });
};

/**
 * Obtiene una asignatura completa con todos sus módulos.
 * Implementa manejo de errores mejorado para problemas con el Service Worker.
 *
 * @async
 * @function fetchAsignaturaCompleta
 * @param {string|number} asignaturaId - Identificador de la asignatura a obtener
 * @returns {Promise<Object>} Promesa que resuelve con el objeto de asignatura completo
 * @throws {Error} Si la asignatura solicitada no existe o hay un error de carga
 */
export const fetchAsignaturaCompleta = async (asignaturaId) => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const id = parseInt(asignaturaId, 10);
        let modulePath = "";

        switch(id) {
          case 1:
            modulePath = "../data/asignaturas/sistemasInformaticos";
            break;
          case 2:
            modulePath = "../data/asignaturas/basesDeDatos";
            break;
          case 3:
            modulePath = "../data/asignaturas/programacion";
            break;
          case 4:
            modulePath = "../data/asignaturas/lenguajeDeMarcas";
            break;
          case 5:
            modulePath = "../data/asignaturas/entornosDeDesarrollo";
            break;
          case 6:
            modulePath = "../data/asignaturas/itinerarioParaLaEmpleabilidad";
            break;
          case 7:
            modulePath = "../data/asignaturas/moduloProfesionalOptativo";
            break;
          default:
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
            return;
        }

        try {
          // Usar el ayudante para importación segura
          const module = await safeImport(modulePath);
          resolve(module.default);
        } catch (error) {
          // Intento de recuperación - intentar importar sin caché
          console.warn(`Error al importar ${modulePath}, intentando recuperación...`);

          try {
            // Intento final: usar fetch directamente para obtener el módulo
            const response = await fetch(`${modulePath}.js?nocache=${Date.now()}`);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

            console.log('Recuperación con fetch exitosa, recargando aplicación...');
            // Si tenemos el recurso, forzar recarga para usar la nueva versión
            window.location.reload();
            return;
          } catch (fetchError) {
            console.error('Falló el intento de recuperación con fetch:', fetchError);

            // Crear un error con contexto para el SW
            const enhancedError = new Error(`No se pudo cargar la asignatura ${id}. Prueba a recargar la página.`);
            enhancedError.swUpdateAvailable = true;
            enhancedError.originalError = error;

            reject(enhancedError);
          }
        }
      } catch (error) {
        reject(error);
      }
    }, 300);
  });
};

/**
 * Obtiene un módulo específico de una asignatura con manejo mejorado de errores.
 *
 * @async
 * @function fetchModulo
 * @param {string|number} asignaturaId - Identificador de la asignatura
 * @param {string|number} moduloId - Identificador del módulo a obtener
 * @returns {Promise<Object>} Promesa que resuelve con el objeto del módulo
 * @throws {Error} Si la asignatura o el módulo no existen o hay error de carga
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

    // Propagar el error enriquecido
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