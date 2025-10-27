const moduloUnidadTresFormulariosSesionesErrores = {
  id: 1101,
  asignaturaId: 11,
  nombre: "Unidad 3: Formularios, Sesiones y Control de Errores",
  titulo: "Formularios, Sesiones y Control de Errores",
  descripcion: "Validación de formularios, gestión de sesiones, cookies, manejo de errores y logging en Express",
  esExamen: false,
  preguntas: [
    {
      id: 11011,
      pregunta: "¿Qué middleware se usa para procesar formularios HTML?",
      opciones: ["express.json()", "express.urlencoded()", "cookie-parser", "express-validator"],
      respuestaCorrecta: 1,
      explicacion: "express.urlencoded() procesa datos de formularios enviados con application/x-www-form-urlencoded."
    },
    {
      id: 11012,
      pregunta: "¿Qué código HTTP se usa para indicar error de validación?",
      opciones: ["400", "200", "403", "500"],
      respuestaCorrecta: 0,
      explicacion: "400 Bad Request indica que la solicitud tiene datos inválidos o mal formados."
    },
    {
      id: 11013,
      pregunta: "¿Qué hace express-validator?",
      opciones: ["Encripta contraseñas", "Crea sesiones de usuario", "Valida y sanitiza los datos recibidos", "Configura cookies"],
      respuestaCorrecta: 2,
      explicacion: "express-validator ofrece middlewares para validar y limpiar inputs antes de procesarlos."
    },
    {
      id: 11014,
      pregunta: "¿Qué librería alternativa a express-validator permite validar esquemas?",
      opciones: ["Sequelize", "Lodash", "Joi", "Winston"],
      respuestaCorrecta: 2,
      explicacion: "Joi permite definir esquemas declarativos para validar objetos y payloads."
    },
    {
      id: 11015,
      pregunta: "¿Qué debe hacer el servidor ante un formulario con errores?",
      opciones: [
        "Guardar los datos y corregirlos después",
        "Ignorar el error",
        "Devolver mensajes de error claros y no procesar datos inválidos",
        "Reiniciar el servidor"
      ],
      respuestaCorrecta: 2,
      explicacion: "Validar y devolver errores claros evita procesar datos corruptos y mejora la UX."
    },
    {
      id: 11016,
      pregunta: "¿Qué middleware permite gestionar sesiones?",
      opciones: ["express-session", "cookie-parser", "express-validator", "passport"],
      respuestaCorrecta: 0,
      explicacion: "express-session crea y gestiona sesiones en servidor con store configurable."
    },
    {
      id: 11017,
      pregunta: "¿Dónde se guardan las cookies?",
      opciones: ["En el servidor", "En el navegador del cliente", "En la base de datos", "En Redis"],
      respuestaCorrecta: 1,
      explicacion: "Las cookies se almacenan en el navegador y se envían al servidor según dominio/ruta."
    },
    {
      id: 11018,
      pregunta: "¿Qué parámetro protege una cookie del acceso por JavaScript?",
      opciones: [".text", "httpOnly", "maxAge", "secret"],
      respuestaCorrecta: 1,
      explicacion: "httpOnly evita que document.cookie acceda a la cookie desde JavaScript en el cliente."
    },
    {
      id: 11019,
      pregunta: "¿Qué opción se recomienda para sesiones en producción?",
      opciones: [
        "Guardarlas en memoria",
        "Almacenarlas en Redis o Mongo",
        "Enviar sin cifrar",
        "No usar sesiones"
      ],
      respuestaCorrecta: 1,
      explicacion: "Un store persistente (Redis/Mongo) evita pérdida de sesiones y permite escalado horizontal."
    },
    {
      id: 11020,
      pregunta: "¿Qué código HTTP se usa al cerrar sesión con éxito?",
      opciones: ["401", "200", "404", "500"],
      respuestaCorrecta: 1,
      explicacion: "200 OK indica que la operación (logout) se completó correctamente."
    },
    {
      id: 11021,
      pregunta: "¿Cuántos parámetros tiene un middleware de manejo de errores?",
      opciones: ["3", "4", "2", "5"],
      respuestaCorrecta: 1,
      explicacion: "Los middlewares de error en Express reciben (err, req, res, next) — 4 parámetros."
    },
    {
      id: 11022,
      pregunta: "¿Qué método se usa para enviar un error al middleware global?",
      opciones: ["next(err)", "throw(err)", "return err", "sendError()"],
      respuestaCorrecta: 0,
      explicacion: "Llamar a next(err) delega el manejo al middleware de errores centralizado."
    },
    {
      id: 11023,
      pregunta: "¿Qué código HTTP representa un error interno del servidor?",
      opciones: ["404", "500", "401", "200"],
      respuestaCorrecta: 1,
      explicacion: "500 Internal Server Error indica fallos en el servidor al procesar la solicitud."
    },
    {
      id: 11024,
      pregunta: "¿Qué herramienta permite registrar logs con distintos niveles (info, error, warn)?",
      opciones: ["Nodemon", "Winston", "ESLint", "Express-validator"],
      respuestaCorrecta: 1,
      explicacion: "Winston (y similares) permite niveles, formatos y transportes para logging estructurado."
    },
    {
      id: 11025,
      pregunta: "Qué buena práctica debe seguir un servidor Express en producción?",
      opciones: [
        "Mostrar el stack trace completo en el navegador",
        "Detener el servidor ante cualquier error",
        "Enviar mensajes genéricos al cliente y registrar detalles internamente",
        "Ignorar los errores menores"
      ],
      respuestaCorrecta: 2,
      explicacion: "No exponer detalles de errores al cliente; registrar internamente para debug y auditoría."
    }
  ]
};

export default moduloUnidadTresFormulariosSesionesErrores;