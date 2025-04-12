// src/data/index.js

// Importación de la lista básica de asignaturas
import { asignaturas } from './asignaturas';

// Importación de la asignatura Sistemas Informáticos (completa con módulos)
import sistemasInformaticos from './asignaturas/sistemasInformaticos';
import programacion from './asignaturas/programacion';
import basesDeDatos from './asignaturas/basesDeDatos';

// Aquí irían las importaciones de las demás asignaturas cuando estén implementadas
// import basesDeDatos from './asignaturas/basesDeDatos';
// import entornosDesarrollo from './asignaturas/entornosDesarrollo';
// import lenguajesMarcas from './asignaturas/lenguajesMarcas';
// import itinerarioEmpleabilidad from './asignaturas/itinerarioEmpleabilidad';
// import moduloOptativo from './asignaturas/moduloOptativo';

// Para que la aplicación funcione mientras se desarrolla, creamos un placeholder
// para las asignaturas que aún no hemos implementado
const crearAsignaturaPlaceholder = (id, nombre) => ({
  id,
  nombre,
  descripcion: `Contenido de ${nombre} en desarrollo`,
  modulos: []
});

// Asignaturas placeholder para las que aún no se han implementado
const entornosDesarrollo = crearAsignaturaPlaceholder(4, "Entornos de desarrollo");
const lenguajesMarcas = crearAsignaturaPlaceholder(5, "Lenguajes de marcas y sistemas de gestión de información");
const itinerarioEmpleabilidad = crearAsignaturaPlaceholder(6, "Itinerario para la empleabilidad");
const moduloOptativo = crearAsignaturaPlaceholder(7, "Módulo Profesional Optativo");

// Exporta la lista simple de asignaturas (solo metadatos)
export { asignaturas };

// Exporta las asignaturas completas con sus módulos
export const asignaturasCompletas = [
  sistemasInformaticos,
  basesDeDatos,
  programacion,
  entornosDesarrollo,
  lenguajesMarcas,
  itinerarioEmpleabilidad,
  moduloOptativo
];

// Función auxiliar para obtener una asignatura por su ID
export const obtenerAsignaturaPorId = (id) => {
  return asignaturasCompletas.find(asignatura => asignatura.id === id);
};

// Función auxiliar para obtener un módulo por su ID
export const obtenerModuloPorId = (moduloId) => {
  for (const asignatura of asignaturasCompletas) {
    const modulo = asignatura.modulos.find(m => m.id === moduloId);
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
  obtenerModulosPorAsignatura
};

export default quizData;