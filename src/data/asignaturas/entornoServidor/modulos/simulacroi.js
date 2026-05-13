const moduloSimulacro1Backend = {
  id: 1108,
  asignaturaId: 11,
  nombre: "Simulacro 1: Backend con Node.js y Express",
  titulo: "Backend con Node.js y Express",
  descripcion:
    "Node.js, Express, rutas, middlewares, formularios, sesiones, cookies, EJS, MVC, DAO, ORM, Prisma, SQL y códigos HTTP.",
  esExamen: true,
  preguntas: [
    {
      id: 11171,
      pregunta: "¿Qué entorno permite ejecutar código JavaScript en servidor?",
      opciones: ["Node.js", "Angular", "React", "Bootstrap"],
      respuestaCorrecta: 0,
      explicacion:
        "Node.js es el entorno de ejecución que permite correr JavaScript fuera del navegador, directamente en el servidor.",
    },
    {
      id: 11172,
      pregunta: "¿Qué motor interpreta JavaScript en Node.js?",
      opciones: ["JVM", "V8", "SpiderMonkey", "CLR"],
      respuestaCorrecta: 1,
      explicacion:
        "Node.js usa V8, el motor de JavaScript de Google Chrome, conocido por su alto rendimiento.",
    },
    {
      id: 11173,
      pregunta: "¿Qué archivo define dependencias y scripts en Node?",
      opciones: ["server.js", "index.js", "package.json", "config.js"],
      respuestaCorrecta: 2,
      explicacion:
        "package.json describe el proyecto, sus dependencias, versión y scripts de ejecución.",
    },
    {
      id: 11174,
      pregunta:
        "¿Qué framework se utiliza frecuentemente con Node para crear APIs?",
      opciones: ["Laravel", "Django", "Spring", "Express"],
      respuestaCorrecta: 3,
      explicacion:
        "Express es el framework minimalista más popular para Node.js, usado para crear servidores web y APIs REST.",
    },
    {
      id: 11175,
      pregunta: "¿Qué método define rutas POST en Express?",
      opciones: ["app.post()", "app.get()", "app.use()", "app.listen()"],
      respuestaCorrecta: 0,
      explicacion:
        "app.post(ruta, callback) define un manejador para peticiones HTTP POST en la ruta especificada.",
    },
    {
      id: 11176,
      pregunta: "¿Dónde se almacenan parámetros enviados tras ? en la URL?",
      opciones: ["req.body", "req.query", "req.params", "req.headers"],
      respuestaCorrecta: 1,
      explicacion:
        "req.query contiene los parámetros de la query string, todo lo que va tras el ? en la URL (ej: ?nombre=Ana).",
    },
    {
      id: 11177,
      pregunta: "¿Qué objeto Express se usa para responder al cliente?",
      opciones: ["req", "send", "res", "next"],
      respuestaCorrecta: 2,
      explicacion:
        "El objeto res (response) expone métodos como send(), json(), render() y redirect() para enviar la respuesta.",
    },
    {
      id: 11178,
      pregunta: "¿Qué método de respuesta devuelve JSON?",
      opciones: ["res.send()", "res.render()", "res.redirect()", "res.json()"],
      respuestaCorrecta: 3,
      explicacion:
        "res.json() serializa el objeto pasado como JSON y establece automáticamente el Content-Type apropiado.",
    },
    {
      id: 11179,
      pregunta: "¿Qué atributo HTML obliga al usuario a completar un input?",
      opciones: ["required", "needed", "mandatory", "validate"],
      respuestaCorrecta: 0,
      explicacion:
        "El atributo required impide enviar el formulario si el campo está vacío, aunque solo valida en el cliente.",
    },
    {
      id: 11180,
      pregunta:
        "¿Qué método HTTP suele usarse para modificar recursos existentes?",
      opciones: ["GET", "PUT", "TRACE", "OPTIONS"],
      respuestaCorrecta: 1,
      explicacion:
        "PUT reemplaza completamente un recurso existente. PATCH se usa para modificaciones parciales.",
    },
    {
      id: 11181,
      pregunta:
        "¿Dónde se reciben normalmente los datos enviados por formularios POST?",
      opciones: ["req.params", "req.query", "req.body", "req.route"],
      respuestaCorrecta: 2,
      explicacion:
        "Los datos del cuerpo de una petición POST se acceden mediante req.body, tras aplicar el middleware express.urlencoded().",
    },
    {
      id: 11182,
      pregunta: "¿Qué contiene req.params en Express?",
      opciones: ["Cookies", "Headers", "Datos body", "Parámetros ruta"],
      respuestaCorrecta: 3,
      explicacion:
        "req.params contiene los segmentos dinámicos de la URL definidos con : (ej: /usuario/:id → req.params.id).",
    },
    {
      id: 11183,
      pregunta: "¿Qué middleware procesa cuerpos JSON?",
      opciones: [
        "express.json()",
        "express.static()",
        "express.route()",
        "express.view()",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "express.json() parsea el cuerpo de las peticiones con Content-Type application/json y lo expone en req.body.",
    },
    {
      id: 11184,
      pregunta: "¿Qué middleware procesa formularios tradicionales?",
      opciones: [
        "express.static()",
        "express.urlencoded()",
        "express.cookie()",
        "express.router()",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "express.urlencoded() procesa datos enviados con application/x-www-form-urlencoded, el formato estándar de formularios HTML.",
    },
    {
      id: 11185,
      pregunta: "¿Qué define mejor un middleware?",
      opciones: [
        "Una base de datos",
        "Una función intermedia",
        "Una plantilla",
        "Una cookie",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Un middleware es una función con acceso a req, res y next que se ejecuta entre la petición y la respuesta.",
    },
    {
      id: 11186,
      pregunta: "¿Qué hace res.redirect()?",
      opciones: [
        "Renderiza HTML",
        "Envía JSON",
        "Redirige navegador",
        "Finaliza sesión",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "res.redirect() envía una respuesta de redirección HTTP (302) que indica al navegador que haga una nueva petición a otra URL.",
    },
    {
      id: 11187,
      pregunta: "¿Qué patrón evita reenviar formularios al refrescar?",
      opciones: ["AJAX", "Cookies", "MVC", "PRG"],
      respuestaCorrecta: 3,
      explicacion:
        "El patrón PRG (Post-Redirect-Get) evita el reenvío del formulario al refrescar: tras un POST exitoso se redirige a una ruta GET.",
    },
    {
      id: 11188,
      pregunta: "¿Qué representa normalmente una sesión?",
      opciones: [
        "Datos temporales usuario",
        "Archivo físico",
        "Cookie permanente",
        "Variable global",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Una sesión almacena datos temporales asociados a un usuario concreto entre distintas peticiones HTTP.",
    },
    {
      id: 11189,
      pregunta: "¿Dónde se almacenan normalmente las sesiones web?",
      opciones: ["Cliente", "Servidor", "HTML", "URL"],
      respuestaCorrecta: 1,
      explicacion:
        "Las sesiones se almacenan en el servidor (memoria, Redis, BD). El navegador solo guarda el ID de sesión en una cookie.",
    },
    {
      id: 11190,
      pregunta: "¿Qué hace <%= valor %> en EJS?",
      opciones: [
        "Ejecuta JS",
        "Escapa e imprime",
        "Imprime bruto",
        "Cierra plantilla",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "<%= %> imprime el valor escapando caracteres HTML especiales, protegiendo contra ataques XSS.",
    },
    {
      id: 11191,
      pregunta: "¿Qué hace <% %> dentro de una plantilla EJS?",
      opciones: ["Imprime HTML", "Ejecuta JS", "Escapa datos", "Genera JSON"],
      respuestaCorrecta: 1,
      explicacion:
        "<% %> ejecuta código JavaScript (bucles, condicionales) sin generar ninguna salida en el HTML resultante.",
    },
    {
      id: 11192,
      pregunta: "¿Qué hace <%- valor %> en EJS?",
      opciones: [
        "Escapa contenido",
        "Ejecuta JS",
        "Imprime sin escapar",
        "Borra HTML",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "<%- %> imprime el valor tal cual, sin escapar HTML. Útil para HTML dinámico, pero peligroso con datos de usuarios.",
    },
    {
      id: 11193,
      pregunta: "¿Qué arquitectura separa modelo, vista y controlador?",
      opciones: ["REST", "CRUD", "DAO", "MVC"],
      respuestaCorrecta: 3,
      explicacion:
        "MVC (Model-View-Controller) divide la aplicación en tres capas con responsabilidades bien diferenciadas.",
    },
    {
      id: 11194,
      pregunta: "¿Qué función principal tiene un controlador?",
      opciones: [
        "Coordinar lógica",
        "Crear tablas",
        "Diseñar CSS",
        "Gestionar drivers",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "El controlador recibe la petición, coordina la lógica de negocio con el modelo y decide qué respuesta o vista enviar.",
    },
    {
      id: 11195,
      pregunta: "¿Qué responsabilidad tiene un DAO?",
      opciones: [
        "Renderizar vistas",
        "Acceder datos",
        "Crear rutas",
        "Gestionar sesiones",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "El DAO (Data Access Object) centraliza el acceso a la base de datos, aislando las consultas del resto de la lógica.",
    },
    {
      id: 11196,
      pregunta: "¿Qué ventaja principal aporta un ORM?",
      opciones: [
        "Más SQL manual",
        "Menos abstracción",
        "Menos código SQL",
        "Más acoplamiento",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Un ORM permite interactuar con la base de datos usando objetos del lenguaje, reduciendo la cantidad de SQL escrito manualmente.",
    },
    {
      id: 11197,
      pregunta: "¿Qué hace findMany() en Prisma?",
      opciones: [
        "Inserta registros",
        "Busca varios registros",
        "Elimina tablas",
        "Actualiza índices",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "findMany() es el método de Prisma para recuperar múltiples registros de una tabla, con soporte de filtros y ordenación.",
    },
    {
      id: 11198,
      pregunta: "¿Qué JOIN devuelve filas aunque no haya coincidencia derecha?",
      opciones: ["INNER JOIN", "RIGHT JOIN", "LEFT JOIN", "CROSS JOIN"],
      respuestaCorrecta: 2,
      explicacion:
        "LEFT JOIN devuelve todas las filas de la tabla izquierda aunque no haya coincidencia en la tabla derecha (en ese caso, los campos derechos son NULL).",
    },
    {
      id: 11199,
      pregunta: "¿Qué hace res.status(404)?",
      opciones: [
        "Envía error",
        "Define código estado",
        "Renderiza JSON",
        "Finaliza servidor",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "res.status(404) establece el código de estado HTTP de la respuesta. Debe encadenarse con send(), json() o render() para enviarla.",
    },
    {
      id: 11200,
      pregunta: "¿Qué código HTTP representa recurso no encontrado?",
      opciones: ["200", "201", "500", "404"],
      respuestaCorrecta: 3,
      explicacion:
        "El código 404 Not Found indica que el servidor no pudo encontrar el recurso solicitado.",
    },
  ],
};

export default moduloSimulacro1Backend;
