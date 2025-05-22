/**
 * Exporta la información completa de la asignatura de Sistemas Informáticos,
 * incluyendo sus módulos asociados.
 *
 * @type {Object}
 * @property {Object} info - Información básica de la asignatura (id, nombre, descripción)
 * @property {Array<Object>} modulos - Lista de módulos que componen la asignatura
 *
 * @example
 * // Importar la asignatura completa con sus módulos
 * import sistemasInformaticos from '@data/asignaturas/sistemas-informaticos';
 *
 * function DetalleAsignatura() {
 *   return (
 *     <div>
 *       <h1>{sistemasInformaticos.nombre}</h1>
 *       <p>{sistemasInformaticos.descripcion}</p>
 *       <h2>Módulos:</h2>
 *       <ul>
 *         {sistemasInformaticos.modulos.map(modulo => (
 *           <li key={modulo.id}>{modulo.nombre}</li>
 *         ))}
 *       </ul>
 *     </div>
 *   );
 * }
 */
import info from "./info.js";
import moduloLinux from "./modulos/linux.js";
import moduloRedes from "./modulos/redes.js";
import moduloCienPreguntas from "./modulos/cienPreguntas.js";
import moduloSimulacroUnoSistemas from "./modulos/simulacroUnoSistemas.js";
import moduloSimulacroDosSistemas from "./modulos/simulacroDosSistemas.js";
import moduloSimulacroTresSistemas from "./modulos/simulacroTresSistemas.js";
import moduloSimulacroCuatroSistemas from "./modulos/simulacroCuatroSistemas.js";



export const sisteasInformaticos = {
    ...info,
    modulos: [
        moduloLinux,
        moduloRedes,
        moduloCienPreguntas,
        moduloSimulacroUnoSistemas,
        moduloSimulacroDosSistemas,
        moduloSimulacroTresSistemas,
        moduloSimulacroCuatroSistemas,
    ],
};

export default sisteasInformaticos;