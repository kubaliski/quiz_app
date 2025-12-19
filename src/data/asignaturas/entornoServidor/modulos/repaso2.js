const moduloRepaso2NodeExpress = {
  id: 1105,
  asignaturaId: 11,
  nombre: "Repaso 2: Node.js y Express",
  titulo: "Node.js y Express",
  descripcion: "Fundamentos de Node.js, Express, EJS, middlewares, cookies, sesiones y arquitectura cliente-servidor.",
  esExamen: true,
  preguntas: [
    {
      id: 11081,
      pregunta: "¿Qué es Node.js?",
      opciones: [
        "Un lenguaje de programación",
        "Un entorno de ejecución para JavaScript",
        "Un framework frontend",
        "Un gestor de bases de datos"
      ],
      respuestaCorrecta: 1,
      explicacion: "Node.js es un entorno de ejecución que permite ejecutar JavaScript fuera del navegador, en el servidor."
    },
    {
      id: 11082,
      pregunta: "¿Qué motor utiliza Node.js para ejecutar JavaScript?",
      opciones: ["SpiderMonkey", "JavaScriptCore", "V8", "Chakra"],
      respuestaCorrecta: 2,
      explicacion: "Node.js utiliza V8, el motor de JavaScript de Google Chrome, conocido por su alto rendimiento."
    },
    {
      id: 11083,
      pregunta: "¿Qué comando inicializa un proyecto Node.js?",
      opciones: ["node start", "npm init", "npm install", "node init"],
      respuestaCorrecta: 1,
      explicacion: "npm init crea el archivo package.json que describe el proyecto y sus dependencias."
    },
    {
      id: 11084,
      pregunta: "¿Qué archivo describe un proyecto Node.js?",
      opciones: ["index.js", "server.js", "package.json", "config.json"],
      respuestaCorrecta: 2,
      explicacion: "package.json contiene metadatos del proyecto, dependencias, scripts y configuración del proyecto Node.js."
    },
    {
      id: 11085,
      pregunta: "¿Qué es Express?",
      opciones: [
        "Un motor de plantillas",
        "Un framework para Node.js",
        "Un gestor de sesiones",
        "Un servidor web"
      ],
      respuestaCorrecta: 1,
      explicacion: "Express es un framework minimalista para Node.js que facilita la creación de aplicaciones web y APIs."
    },
    {
      id: 11086,
      pregunta: "¿Qué método de Express se usa para responder a peticiones GET?",
      opciones: ["app.send()", "app.route()", "app.get()", "app.fetch()"],
      respuestaCorrecta: 2,
      explicacion: "app.get(ruta, callback) define un manejador para peticiones HTTP GET a la ruta especificada."
    },
    {
      id: 11087,
      pregunta: "¿Qué objeto representa la petición del cliente?",
      opciones: ["res", "req", "app", "next"],
      respuestaCorrecta: 1,
      explicacion: "El objeto req (request) contiene toda la información de la petición: parámetros, body, headers, cookies, etc."
    },
    {
      id: 11088,
      pregunta: "¿Qué objeto se usa para enviar una respuesta al cliente?",
      opciones: ["req", "send", "response", "res"],
      respuestaCorrecta: 3,
      explicacion: "El objeto res (response) tiene métodos como send(), render(), json() y redirect() para enviar respuestas."
    },
    {
      id: 11089,
      pregunta: "¿Qué método envía una vista EJS al navegador?",
      opciones: ["res.send()", "res.render()", "res.view()", "res.ejs()"],
      respuestaCorrecta: 1,
      explicacion: "res.render('vista', datos) procesa la plantilla EJS con los datos proporcionados y envía el HTML resultante."
    },
    {
      id: 11090,
      pregunta: "¿Qué es EJS?",
      opciones: [
        "Un framework backend",
        "Un motor de plantillas",
        "Un gestor de sesiones",
        "Un paquete de seguridad"
      ],
      respuestaCorrecta: 1,
      explicacion: "EJS (Embedded JavaScript) es un motor de plantillas que permite generar HTML dinámico con JavaScript embebido."
    },
    {
      id: 11091,
      pregunta: "¿Cómo se insertan variables en EJS?",
      opciones: [
        "{{ variable }}",
        "<%= variable %>",
        "<? variable ?>",
        "${variable}"
      ],
      respuestaCorrecta: 1,
      explicacion: "<%= variable %> imprime el valor de la variable escapando caracteres HTML para prevenir XSS."
    },
    {
      id: 11092,
      pregunta: "¿Qué carpeta suele contener las vistas EJS?",
      opciones: ["public", "views", "templates", "pages"],
      respuestaCorrecta: 1,
      explicacion: "Por convención, Express busca las vistas en la carpeta 'views', configurada con app.set('views', './views')."
    },
    {
      id: 11093,
      pregunta: "¿Qué es un middleware en Express?",
      opciones: [
        "Una vista",
        "Una base de datos",
        "Una función que se ejecuta entre petición y respuesta",
        "Un controlador"
      ],
      respuestaCorrecta: 2,
      explicacion: "Un middleware es una función que tiene acceso a req, res y next, y puede procesar la petición antes de enviar la respuesta."
    },
    {
      id: 11094,
      pregunta: "¿Qué middleware permite servir archivos estáticos?",
      opciones: ["express.static()", "express.files()", "app.public()", "static()"],
      respuestaCorrecta: 0,
      explicacion: "express.static('public') sirve archivos estáticos (CSS, JS, imágenes) desde la carpeta especificada."
    },
    {
      id: 11095,
      pregunta: "¿Qué son las cookies?",
      opciones: [
        "Variables del servidor",
        "Archivos temporales",
        "Datos almacenados en el navegador",
        "Sesiones en memoria"
      ],
      respuestaCorrecta: 2,
      explicacion: "Las cookies son pequeños fragmentos de datos que el servidor envía al navegador y que se almacenan en el cliente."
    },
    {
      id: 11096,
      pregunta: "¿Qué middleware se usa para manejar cookies en Express?",
      opciones: ["cookie-parser", "express-cookies", "session-cookie", "body-parser"],
      respuestaCorrecta: 0,
      explicacion: "cookie-parser parsea las cookies de las peticiones y las hace disponibles en req.cookies."
    },
    {
      id: 11097,
      pregunta: "¿Dónde se almacenan normalmente las sesiones?",
      opciones: ["En el navegador", "En el servidor", "En el HTML", "En la URL"],
      respuestaCorrecta: 1,
      explicacion: "Las sesiones se almacenan en el servidor (memoria, base de datos o Redis), mientras que el navegador solo guarda el ID de sesión."
    },
    {
      id: 11098,
      pregunta: "¿Qué middleware se usa para sesiones en Express?",
      opciones: ["express-session", "cookie-session", "session-handler", "express-login"],
      respuestaCorrecta: 0,
      explicacion: "express-session es el middleware estándar para gestionar sesiones en Express, almacenándolas en el servidor."
    },
    {
      id: 11099,
      pregunta: "¿Qué método elimina una sesión?",
      opciones: [
        "req.session.remove()",
        "req.session.destroy()",
        "req.session.clear()",
        "res.session.end()"
      ],
      respuestaCorrecta: 1,
      explicacion: "req.session.destroy() elimina completamente la sesión del almacenamiento del servidor."
    },
    {
      id: 11100,
      pregunta: "¿Qué método envía una respuesta simple de texto?",
      opciones: ["res.write()", "res.text()", "res.send()", "res.output()"],
      respuestaCorrecta: 2,
      explicacion: "res.send() envía una respuesta HTTP y puede enviar texto, HTML, JSON u objetos automáticamente."
    },
    {
      id: 11101,
      pregunta: "¿Qué atributo indica una cookie solo accesible por el servidor?",
      opciones: ["secure", "httpOnly", "expires", "sameSite"],
      respuestaCorrecta: 1,
      explicacion: "httpOnly impide que JavaScript del cliente acceda a la cookie, protegiéndola de ataques XSS."
    },
    {
      id: 11102,
      pregunta: "¿Qué método se usa para redirigir a otra ruta?",
      opciones: ["res.send()", "res.route()", "res.redirect()", "res.forward()"],
      respuestaCorrecta: 2,
      explicacion: "res.redirect('/ruta') envía una respuesta de redirección HTTP (302) al navegador."
    },
    {
      id: 11103,
      pregunta: "¿Qué archivo suele arrancar el servidor?",
      opciones: ["main.js", "index.js", "start.js", "server.json"],
      respuestaCorrecta: 1,
      explicacion: "Por convención, index.js o app.js suelen ser los puntos de entrada que arrancan el servidor Express."
    },
    {
      id: 11104,
      pregunta: "¿Qué método se usa para leer datos enviados por POST?",
      opciones: ["req.body", "req.data", "req.post", "res.body"],
      respuestaCorrecta: 0,
      explicacion: "req.body contiene los datos del cuerpo de la petición POST, accesibles tras usar el middleware correspondiente."
    },
    {
      id: 11105,
      pregunta: "¿Qué middleware procesa formularios?",
      opciones: ["express-form", "body-parser", "cookie-parser", "form-handler"],
      respuestaCorrecta: 1,
      explicacion: "body-parser (o express.urlencoded() en versiones recientes) procesa el cuerpo de peticiones POST de formularios."
    },
    {
      id: 11106,
      pregunta: "¿Qué hace res.render('vista')?",
      opciones: [
        "Envía texto plano",
        "Carga un archivo JS",
        "Renderiza una plantilla",
        "Redirige a otra ruta"
      ],
      respuestaCorrecta: 2,
      explicacion: "res.render() procesa una plantilla (EJS, Pug, etc.) y envía el HTML generado como respuesta."
    },
    {
      id: 11107,
      pregunta: "¿Qué objeto permite pasar datos a EJS?",
      opciones: ["req", "res", "Un objeto como segundo parámetro", "session"],
      respuestaCorrecta: 2,
      explicacion: "res.render('vista', { datos }) recibe un objeto como segundo parámetro que estará disponible en la plantilla."
    },
    {
      id: 11108,
      pregunta: "¿Qué tipo de arquitectura usa Express?",
      opciones: ["Cliente-servidor", "Peer to peer", "Blockchain", "Monolítica pura"],
      respuestaCorrecta: 0,
      explicacion: "Express implementa arquitectura cliente-servidor donde el servidor procesa peticiones y envía respuestas a los clientes."
    },
    {
      id: 11109,
      pregunta: "¿Qué método se usa para definir rutas?",
      opciones: ["app.use()", "app.route()", "app.get()/post()", "app.path()"],
      respuestaCorrecta: 2,
      explicacion: "app.get(), app.post(), app.put(), app.delete() definen manejadores para rutas con métodos HTTP específicos."
    },
    {
      id: 11110,
      pregunta: "¿Para qué se usan las sesiones?",
      opciones: [
        "Guardar datos entre peticiones",
        "Enviar HTML",
        "Cargar vistas",
        "Definir rutas"
      ],
      respuestaCorrecta: 0,
      explicacion: "Las sesiones permiten mantener datos del usuario entre diferentes peticiones HTTP, como autenticación o carrito de compras."
    }
  ]
};

export default moduloRepaso2NodeExpress;