/**
 * 
 * DEPRECATED: Este archivo ya no se utiliza en la aplicación. 
 * Lista de asignaturas disponibles en la aplicación.
 *
 * @type {Array<Object>}
 * @property {number} id - Identificador único de la asignatura
 * @property {string} nombre - Nombre de la asignatura
 * @property {string} descripcion - Breve descripción del contenido de la asignatura
 * @property {string} [icono] - Nombre del icono asociado a la asignatura (opcional)
 *
 * @example
 * // Importar y usar la lista de asignaturas
 * import { asignaturas } from '@data/asignaturas';
 *
 * function ListaAsignaturas() {
 *   return (
 *     <div>
 *       {asignaturas.map(asignatura => (
 *         <div key={asignatura.id}>
 *           <h2>{asignatura.nombre}</h2>
 *           <p>{asignatura.descripcion}</p>
 *         </div>
 *       ))}
 *     </div>
 *   );
 * }
 */
export const asignaturas = [
    {
      id: 1,
      nombre: "Sistemas Informáticos",
      descripcion: "Estudio de sistemas operativos, redes y hardware",
      icono: "computer" // Opcional: no se si lo voy a usar
    },
    {
      id: 2,
      nombre: "Bases de datos",
      descripcion: "Diseño e implementación de bases de datos relacionales ",
      icono: "database"
    },
    {
      id: 3,
      nombre: "Programación",
      descripcion: "Fundamentos y técnicas avanzadas de programación",
      icono: "code"
    },
    {
      id: 4,
      nombre: "Lenguajes de marcas y sistemas de gestión de información",
      descripcion: "HTML,CSS, XML, JS y tecnologías relacionadas",
      icono: "file-code"
    },
    {
      id: 5,
      nombre: "Entornos de desarrollo",
      descripcion: "Herramientas y metodologías para el desarrollo de software",
      icono: "terminal"
    },
    {
      id: 6,
      nombre: "Itinerario para la empleabilidad",
      descripcion: "Estrategias y herramientas para incorporarse al mercado laboral",
      icono: "briefcase"
    },
    {
      id: 7,
      nombre: "Módulo Profesional Optativo",
      descripcion: "Especialización en áreas específicas de la informática",
      icono: "star"
    }
  ];

  export default asignaturas;