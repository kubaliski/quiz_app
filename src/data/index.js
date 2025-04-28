// src/data/index.js

// Importación de la lista básica de asignaturas
import { asignaturas } from "./asignaturas";

// Importación de la asignatura Sistemas Informáticos (completa con módulos)
import sistemasInformaticos from "./asignaturas/sistemasInformaticos";
import programacion from "./asignaturas/programacion";
import basesDeDatos from "./asignaturas/basesDeDatos";
import entornosDeDesarrollo from "./asignaturas/entornosDeDesarrollo";
import lenguajesMarcas from "./asignaturas/lenguajeDeMarcas";
import itinerarioEmpleabilidad from "./asignaturas/itinerarioParaLaEmpleabilidad";
import moduloProfesionalOptativo from "./asignaturas/moduloProfesionalOptativo";




// Exporta la lista simple de asignaturas (solo metadatos)
export { asignaturas };

// Exporta las asignaturas completas con sus módulos
export const asignaturasCompletas = [
  sistemasInformaticos,
  basesDeDatos,
  programacion,
  lenguajesMarcas,
  entornosDeDesarrollo,
  itinerarioEmpleabilidad,
  moduloProfesionalOptativo,
];

// Función auxiliar para obtener una asignatura por su ID
export const obtenerAsignaturaPorId = (id) => {
  return asignaturasCompletas.find((asignatura) => asignatura.id === id);
};

// Función auxiliar para obtener un módulo por su ID
export const obtenerModuloPorId = (moduloId) => {
  for (const asignatura of asignaturasCompletas) {
    const modulo = asignatura.modulos.find((m) => m.id === moduloId);
    if (modulo) return modulo;
  }
  return null;
};

// Función para obtener todos los módulos de una asignatura
export const obtenerModulosPorAsignatura = (asignaturaId) => {
  const asignatura = obtenerAsignaturaPorId(asignaturaId);
  return asignatura ? asignatura.modulos : [];
};

// Crea un objeto estructurado para acceso fácil
export const quizData = {
  asignaturas: asignaturasCompletas,
  obtenerAsignaturaPorId,
  obtenerModuloPorId,
  obtenerModulosPorAsignatura,
};

export default quizData;
