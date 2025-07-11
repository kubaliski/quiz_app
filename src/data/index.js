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

// Asignaturas de primer año (las actuales)
const asignaturasPrimerAno = [
  sistemasInformaticos,
  basesDeDatos,
  programacion,
  lenguajesMarcas,
  entornosDeDesarrollo,
  itinerarioEmpleabilidad,
  moduloProfesionalOptativo,
];

// Asignaturas de segundo año (placeholder para futuras implementaciones)
const asignaturasSegundoAno = [
  // Aquí irán las futuras asignaturas de segundo año
];

// Exporta la lista simple de asignaturas (solo metadatos)
export { asignaturas };

// Exporta las asignaturas completas con sus módulos (retrocompatibilidad)
export const asignaturasCompletas = asignaturasPrimerAno;

// Nueva estructura organizada por años
export const asignaturasPorAno = {
  1: {
    nombre: "Primer Año",
    asignaturas: asignaturasPrimerAno,
    disponible: true
  },
  2: {
    nombre: "Segundo Año",
    asignaturas: asignaturasSegundoAno,
    disponible: false // Marcamos como no disponible hasta que se implementen
  }
};

// Función auxiliar para obtener una asignatura por su ID (busca en todos los años)
export const obtenerAsignaturaPorId = (id) => {
  // Buscar en todas las asignaturas de todos los años
  for (const ano of Object.values(asignaturasPorAno)) {
    const asignatura = ano.asignaturas.find((asignatura) => asignatura.id === id);
    if (asignatura) return asignatura;
  }
  return null;
};

// Función auxiliar para obtener un módulo por su ID (busca en todos los años)
export const obtenerModuloPorId = (moduloId) => {
  for (const ano of Object.values(asignaturasPorAno)) {
    for (const asignatura of ano.asignaturas) {
      const modulo = asignatura.modulos.find((m) => m.id === moduloId);
      if (modulo) return modulo;
    }
  }
  return null;
};

// Función para obtener todos los módulos de una asignatura
export const obtenerModulosPorAsignatura = (asignaturaId) => {
  const asignatura = obtenerAsignaturaPorId(asignaturaId);
  return asignatura ? asignatura.modulos : [];
};

// Función para obtener asignaturas de un año específico
export const obtenerAsignaturasPorAno = (ano) => {
  return asignaturasPorAno[ano] || null;
};

// Función para obtener todos los años disponibles
export const obtenerAnosDisponibles = () => {
  return Object.keys(asignaturasPorAno).map(ano => ({
    numero: parseInt(ano),
    ...asignaturasPorAno[ano]
  }));
};

// Crea un objeto estructurado para acceso fácil
export const quizData = {
  asignaturas: asignaturasCompletas, // Retrocompatibilidad
  asignaturasPorAno,
  obtenerAsignaturaPorId,
  obtenerModuloPorId,
  obtenerModulosPorAsignatura,
  obtenerAsignaturasPorAno,
  obtenerAnosDisponibles,
};

export default quizData;