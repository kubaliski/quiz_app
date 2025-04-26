/**
 * Datos del módulo de Git y GitHub para la asignatura de Entornos de Desarrollo.
 * Este módulo incluye preguntas sobre conceptos básicos de Git y GitHub,
 * incluyendo autenticación SSH, ramas, conflictos y Pull Requests.
 *
 * @type {Object}
 * @property {number} id - ID del módulo.
 * @property {string} nombre - Nombre del módulo.
 * @property {boolean} esExamen - Indica si el módulo es un examen (true) o no (false).
 * @property {number} asignaturaId - ID de la asignatura a la que pertenece el módulo.
 * @property {string} descripcion - Descripción del módulo.
 * @property {Array<Object>} preguntas - Array de preguntas del módulo.
 * @property {number} preguntas[].id - Identificador único de la pregunta
 * @property {number} preguntas[].moduloId - ID del módulo al que pertenece la pregunta
 * @property {string} preguntas[].pregunta - Texto de la pregunta
 * @property {Array<string>} preguntas[].opciones - Lista de opciones de respuesta
 * @property {number} preguntas[].respuestaCorrecta - Índice (0-based) de la opción correcta
 * @property {string} preguntas[].explicacion - Explicación de la respuesta correcta
 *
 *
 */
const moduloGit = {
    id: 504,
    nombre: "Git y GitHub",
    asignaturaId: 5,
    esExamen: false,
    descripcion: "Este módulo cubre conceptos básicos del uso de Git y GitHub incluyendo autenticación SSH, ramas, conflictos y Pull Requests.",
    preguntas: [
      {
        id: 5401,
        moduloId: 504,
        pregunta: "¿Qué permite hacer una clave SSH asociada a una cuenta de GitHub?",
        opciones: [
          "Ver estadísticas privadas de otros usuarios",
          "Borrar repositorios",
          "Cambiar permisos de otros usuarios",
          "Autenticarse sin contraseña en operaciones Git"
        ],
        respuestaCorrecta: 3,
        explicacion: "Una clave SSH permite autenticarse con GitHub sin necesidad de ingresar la contraseña cada vez."
      },
      {
        id: 5402,
        moduloId: 504,
        pregunta: "¿Dónde se debe agregar una clave SSH personal para trabajar con GitHub?",
        opciones: [
          "En cada repositorio manualmente",
          "En el archivo README",
          "En los Settings de la cuenta de GitHub → SSH and GPG Keys",
          "En la terminal de Git Bash"
        ],
        respuestaCorrecta: 2,
        explicacion: "Las claves SSH se deben registrar en los ajustes de tu cuenta de GitHub, en la sección SSH and GPG Keys."
      },
      {
        id: 5403,
        moduloId: 504,
        pregunta: "¿Qué opción es necesaria para subir cambios de una nueva rama a GitHub desde Git GUI?",
        opciones: [
          "Hacer Fetch desde GitHub",
          "Hacer Push y marcar \"Set upstream\"",
          "Usar un archivo .gitconfig",
          "Ejecutar el comando merge"
        ],
        respuestaCorrecta: 1,
        explicacion: "Para subir una nueva rama se debe hacer push y configurar la rama remota (Set upstream)."
      },
      {
        id: 5404,
        moduloId: 504,
        pregunta: "¿Cuál es el propósito de un Pull Request?",
        opciones: [
          "Hacer backup del repositorio",
          "Crear una nueva clave SSH",
          "Proponer la fusión de una rama con otra",
          "Eliminar una rama remota"
        ],
        respuestaCorrecta: 2,
        explicacion: "Un Pull Request permite solicitar la integración de una rama en otra dentro del flujo de trabajo colaborativo."
      },
      {
        id: 5405,
        moduloId: 504,
        pregunta: "¿Qué puede causar un conflicto en un Pull Request?",
        opciones: [
          "Cambios en las mismas líneas en dos ramas distintas",
          "Archivos muy grandes",
          "Cambios en carpetas vacías",
          "Uso de Git GUI en lugar de terminal"
        ],
        respuestaCorrecta: 0,
        explicacion: "Cuando dos ramas modifican las mismas líneas de un archivo, se genera un conflicto que debe resolverse manualmente."
      },
      {
        id: 5406,
        moduloId: 504,
        pregunta: "¿Quién puede aceptar un Pull Request en GitHub?",
        opciones: [
          "Cualquier usuario registrado",
          "Solo el dueño de la cuenta GitHub",
          "Usuarios con permisos de escritura o superiores",
          "Solo usuarios con claves SSH"
        ],
        respuestaCorrecta: 2,
        explicacion: "Solo los colaboradores con permisos de escritura o superiores pueden aceptar un Pull Request."
      },
      {
        id: 5407,
        moduloId: 504,
        pregunta: "¿Qué debe hacer un colaborador antes de hacer Push a una rama compartida?",
        opciones: [
          "Cambiar de repositorio",
          "Crear un nuevo repositorio",
          "Hacer reset --hard",
          "Hacer Pull para actualizar su copia local"
        ],
        respuestaCorrecta: 3,
        explicacion: "Es importante hacer Pull para tener la versión más reciente antes de subir cambios."
      },
      {
        id: 5408,
        moduloId: 504,
        pregunta: "¿Qué acción permite crear una nueva rama en Git GUI?",
        opciones: [
          "File → New Project",
          "Branch → Create",
          "Edit → Rename",
          "Remote → Clone"
        ],
        respuestaCorrecta: 1,
        explicacion: "La opción correcta para crear una nueva rama es Branch → Create."
      },
      {
        id: 5409,
        moduloId: 504,
        pregunta: "¿Dónde se encuentra la opción para clonar un repositorio en Git GUI?",
        opciones: [
          "File → Export",
          "Edit → Clone",
          "Merge → Clone",
          "En la pantalla inicial: “Clone Existing Repository”"
        ],
        respuestaCorrecta: 3,
        explicacion: "La opción de clonar está disponible en la pantalla inicial de Git GUI como “Clone Existing Repository”."
      },
      {
        id: 5410,
        moduloId: 504,
        pregunta: "¿Cuál es la URL recomendada para usar si ya tienes una clave SSH configurada?",
        opciones: [
          "La que empieza por http://",
          "La de la documentación de GitHub",
          "La que empieza por git@github.com:",
          "La del archivo .gitignore"
        ],
        respuestaCorrecta: 2,
        explicacion: "Cuando se configura SSH, se debe usar la URL que comienza con git@github.com: para evitar ingresar usuario/contraseña."
      },
      {
        id: 5411,
        moduloId: 504,
        pregunta: "¿Qué ocurre cuando haces Merge en Git GUI?",
        opciones: [
          "Se revierte el último commit",
          "Se borra el repositorio original",
          "Se genera un conflicto automáticamente",
          "Se combinan los cambios de una rama en otra"
        ],
        respuestaCorrecta: 3,
        explicacion: "Merge combina los cambios de una rama en otra rama seleccionada."
      },
      {
        id: 5412,
        moduloId: 504,
        pregunta: "¿Cuál de estas afirmaciones sobre ramas es correcta?",
        opciones: [
          "Todas las ramas deben llamarse main",
          "Las ramas permiten trabajar de forma paralela sin afectar la principal",
          "Una rama solo puede tener un commit",
          "No se pueden subir ramas desde Git GUI"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las ramas permiten trabajar en paralelo sin afectar la rama principal como main o master."
      }
    ]
  };

  export default moduloGit;
