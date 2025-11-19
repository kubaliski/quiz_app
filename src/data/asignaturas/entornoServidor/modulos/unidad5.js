const moduloUnidadCincoMVCyApisRestful = {
  id: 1103,
  asignaturaId: 11,
  nombre: "Unidad 5: MVC y APIs Restful",
  titulo: "MVC y APIs Restful",
  descripcion: "Patrón MVC, estructura de proyectos, rutas, controladores, modelos, vistas, APIs RESTful y documentación.",
  esExamen: false,
  preguntas: [
    {
      id: 11041,
      pregunta: "¿Qué componente del MVC maneja la lógica de negocio?",
      opciones: ["Controlador", "Modelo", "Vista", "Middleware"],
      respuestaCorrecta: 0,
      explicacion: "El controlador gestiona la lógica de negocio y coordina la interacción entre modelo y vista."
    },
    {
      id: 11042,
      pregunta: "¿Qué carpeta suele contener las definiciones de datos?",
      opciones: ["models", "routes", "views", "public"],
      respuestaCorrecta: 0,
      explicacion: "La carpeta 'models' almacena los esquemas y definiciones de datos en proyectos MVC."
    },
    {
      id: 11043,
      pregunta: "¿Qué función tiene la vista en una API REST?",
      opciones: [
        "Enviar respuesta JSON",
        "Guardar datos",
        "Validar usuarios",
        "Conectar con la base de datos"
      ],
      respuestaCorrecta: 0,
      explicacion: "En una API REST, la vista suele encargarse de formatear y enviar la respuesta (por ejemplo, JSON)."
    },
    {
      id: 11044,
      pregunta: "¿Qué ventaja tiene el patrón MVC?",
      opciones: [
        "Elimina la necesidad de controladores",
        "Hace el código más largo y complejo",
        "Separa responsabilidades y mejora el mantenimiento",
        "Evita el uso de rutas"
      ],
      respuestaCorrecta: 2,
      explicacion: "MVC separa responsabilidades, facilitando el mantenimiento y escalabilidad del código."
    },
    {
      id: 11045,
      pregunta: "¿Qué archivo central importa las rutas en Express?",
      opciones: ["config.env", "package.json", "index.html", "app.js"],
      respuestaCorrecta: 3,
      explicacion: "app.js es el archivo principal donde se importan y configuran las rutas en Express."
    },
    {
      id: 11046,
      pregunta: "¿Qué método HTTP se usa para eliminar un recurso?",
      opciones: ["GET", "PUT", "DELETE", "PATCH"],
      respuestaCorrecta: 2,
      explicacion: "DELETE es el método HTTP estándar para eliminar recursos en una API RESTful."
    },
    {
      id: 11047,
      pregunta: "¿Qué formato usan las respuestas de una API RESTful?",
      opciones: ["Texto plano", "XML", "CSV", "JSON"],
      respuestaCorrecta: 3,
      explicacion: "JSON es el formato más común para respuestas en APIs RESTful."
    },
    {
      id: 11048,
      pregunta: "¿Qué herramienta permite documentar APIs REST?",
      opciones: ["ESLint", "Sequelize", "Swagger", "Mongoose"],
      respuestaCorrecta: 2,
      explicacion: "Swagger permite documentar y probar APIs REST de forma interactiva."
    },
    {
      id: 11049,
      pregunta: "¿Qué principio básico cumple REST?",
      opciones: [
        "Stateless (sin mantener estado)",
        "Multisesión",
        "Persistencia local",
        "Comunicación por sockets"
      ],
      respuestaCorrecta: 0,
      explicacion: "REST es stateless: cada petición es independiente y no mantiene estado en el servidor."
    },
    {
      id: 11050,
      pregunta: "¿Qué código HTTP se devuelve al crear un recurso exitosamente?",
      opciones: ["500", "200", "404", "201"],
      respuestaCorrecta: 3,
      explicacion: "El código 201 indica que un recurso fue creado correctamente en una API RESTful."
    }
  ]
};

export default moduloUnidadCincoMVCyApisRestful;