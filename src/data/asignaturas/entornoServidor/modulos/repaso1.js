const moduloRepaso1ExpressEJSFormularios = {
  id: 1104,
  asignaturaId: 11,
  nombre: "Repaso 1: Express, EJS y Formularios",
  titulo: "Express, EJS y Formularios",
  descripcion: "Métodos HTTP, formularios HTML, plantillas EJS, sesiones, cookies, manejo de datos en Express y validación.",
  esExamen: false,
  preguntas: [
    {
      id: 11051,
      pregunta: "¿Qué método HTTP se usa normalmente cuando un formulario envía datos al servidor para procesarlos?",
      opciones: ["GET", "POST", "PUT", "DELETE"],
      respuestaCorrecta: 1,
      explicacion: "POST se usa para enviar datos al servidor que deben ser procesados o almacenados. A diferencia de GET (que envía datos visibles en la URL), POST envía la información en el cuerpo de la petición, siendo más seguro y sin límite de tamaño."
    },
    {
      id: 11052,
      pregunta: "¿Qué hace la expresión variable || '' en JavaScript?",
      opciones: [
        "Muestra variable o una cadena vacía si no tiene valor",
        "Lanza un error si variable es undefined",
        "Evalúa siempre a cadena vacía",
        "Convierte variable a JSON"
      ],
      respuestaCorrecta: 0,
      explicacion: "El operador OR lógico (||) devuelve el primer valor 'truthy' (verdadero). Si variable tiene un valor válido, lo devuelve; si es null, undefined, 0, false o cadena vacía, devuelve el segundo operando (en este caso '')."
    },
    {
      id: 11053,
      pregunta: "¿Qué formato envía por defecto un input HTML de tipo date?",
      opciones: ["dd/mm/yyyy", "Timestamp", "Depende del navegador", "yyyy-mm-dd"],
      respuestaCorrecta: 3,
      explicacion: "Los inputs de tipo date en HTML5 siempre envían las fechas en formato ISO 8601 (yyyy-mm-dd), independientemente de cómo el navegador muestre la fecha al usuario en su interfaz."
    },
    {
      id: 11054,
      pregunta: "¿Qué propiedad de Express contiene los datos enviados por un formulario con método POST?",
      opciones: ["req.url", "req.params", "req.body", "req.headers"],
      respuestaCorrecta: 2,
      explicacion: "Los datos enviados mediante POST van en el cuerpo de la petición y Express los pone disponibles en req.body (requiere el middleware express.urlencoded() o express.json())."
    },
    {
      id: 11055,
      pregunta: "Si un formulario HTML no especifica el atributo 'method', ¿qué método se usa por defecto?",
      opciones: ["POST", "GET", "PUT", "Depende del navegador"],
      respuestaCorrecta: 1,
      explicacion: "El estándar HTML establece que si no se especifica el atributo method en un formulario, el navegador usa GET por defecto, enviando los datos como parámetros en la URL."
    },
    {
      id: 11056,
      pregunta: "¿Qué hace un bloque <% %> en una plantilla EJS?",
      opciones: [
        "Imprime HTML sin escapar",
        "Ejecuta código JavaScript sin mostrarlo",
        "Muestra siempre un mensaje",
        "Transforma valores a JSON"
      ],
      respuestaCorrecta: 1,
      explicacion: "Los bloques <% %> contienen código JavaScript que se ejecuta en el servidor pero no genera ninguna salida. Son útiles para lógica como bucles, condicionales o asignaciones de variables."
    },
    {
      id: 11057,
      pregunta: "¿Qué método permite eliminar completamente una sesión en Express?",
      opciones: [
        "req.session.reset()",
        "req.session.delete()",
        "req.session.destroy()",
        "res.clearSession()"
      ],
      respuestaCorrecta: 2,
      explicacion: "El método req.session.destroy() elimina completamente la sesión del usuario del almacenamiento del servidor, generalmente usado en procesos de logout."
    },
    {
      id: 11058,
      pregunta: "¿Cómo se accede a un parámetro de ruta como '/usuario/123' en Express?",
      opciones: ["req.query.id", "req.params.id", "req.body.id", "req.url.id"],
      respuestaCorrecta: 1,
      explicacion: "Los parámetros dinámicos de la ruta (definidos como /usuario/:id) se acceden mediante req.params. En este caso, req.params.id contendría el valor 123."
    },
    {
      id: 11059,
      pregunta: "¿Qué función tiene el atributo HTML 'required'?",
      opciones: [
        "Validación en el cliente",
        "Validación en el servidor",
        "Convertir el dato a número",
        "Obligar a validar en backend"
      ],
      respuestaCorrecta: 0,
      explicacion: "El atributo required solo realiza validación en el navegador (cliente), impidiendo el envío del formulario si el campo está vacío. Siempre debe complementarse con validación en el servidor, ya que la validación del cliente puede ser evitada."
    },
    {
      id: 11060,
      pregunta: "¿Para qué sirve express.urlencoded({ extended: true })?",
      opciones: [
        "Permite procesar formularios POST codificados en URL",
        "Habilita cookies",
        "Convierte la URL en JSON",
        "Permite gestionar sesiones"
      ],
      respuestaCorrecta: 0,
      explicacion: "Este middleware de Express procesa los datos enviados por formularios HTML con method='POST' y Content-Type: application/x-www-form-urlencoded, haciéndolos disponibles en req.body."
    },
    {
      id: 11061,
      pregunta: "¿Qué suele almacenarse dentro de una sesión de usuario en un servidor Express?",
      opciones: [
        "Preferencias temporales del usuario",
        "Archivos estáticos",
        "Variables globales del servidor",
        "Parámetros GET"
      ],
      respuestaCorrecta: 0,
      explicacion: "Las sesiones almacenan datos específicos de cada usuario que persisten entre diferentes peticiones, como información de autenticación, preferencias, carritos de compra, etc."
    },
    {
      id: 11062,
      pregunta: "¿Qué método HTTP se usa normalmente para realizar cambios en el servidor, como crear o modificar recursos?",
      opciones: ["GET", "POST", "DELETE", "HEAD"],
      respuestaCorrecta: 1,
      explicacion: "POST es el método estándar para operaciones que crean o modifican recursos en el servidor. GET debe usarse solo para recuperar información sin causar cambios."
    },
    {
      id: 11063,
      pregunta: "¿Para qué sirve res.render() en Express?",
      opciones: [
        "Eliminar sesiones",
        "Renderizar una plantilla y enviarla al cliente",
        "Crear un middleware",
        "Enviar JSON"
      ],
      respuestaCorrecta: 1,
      explicacion: "res.render() procesa una plantilla (como EJS, Pug, Handlebars) con los datos proporcionados y envía el HTML resultante al cliente como respuesta."
    },
    {
      id: 11064,
      pregunta: "¿Qué contiene req.query en una petición HTTP?",
      opciones: [
        "Datos enviados por POST",
        "Parámetros enviados mediante ?clave=valor",
        "Datos de sesión",
        "Headers de la petición"
      ],
      respuestaCorrecta: 1,
      explicacion: "req.query contiene los parámetros de la query string (todo lo que viene después del ? en la URL), por ejemplo en /buscar?termino=express, req.query.termino sería 'express'."
    },
    {
      id: 11065,
      pregunta: "¿Qué mecanismo permite recordar la preferencia de tema claro/oscuro de un usuario entre visitas?",
      opciones: [
        "Variables locales del navegador",
        "Valores almacenados en RAM del servidor",
        "Una cookie almacenada en el navegador",
        "Los encabezados HTTP"
      ],
      respuestaCorrecta: 2,
      explicacion: "Las cookies permiten almacenar datos en el navegador del usuario que persisten entre sesiones y se envían automáticamente con cada petición, ideal para preferencias como temas."
    },
    {
      id: 11066,
      pregunta: "¿Por qué varios checkbox pueden compartir el mismo atributo name?",
      opciones: [
        "Es un error del formulario",
        "Para enviar varios valores como array",
        "Solo se enviará el primero",
        "HTML los convertirá en JSON"
      ],
      respuestaCorrecta: 1,
      explicacion: "Cuando múltiples checkboxes comparten el mismo name, los valores seleccionados se envían juntos, permitiendo al backend recibir múltiples valores para una misma clave."
    },
    {
      id: 11067,
      pregunta: "¿Qué hace el método includes() en un array de JavaScript?",
      opciones: [
        "Ordena el array",
        "Comprueba si contiene un valor",
        "Borra elementos",
        "Cuenta elementos"
      ],
      respuestaCorrecta: 1,
      explicacion: "array.includes(valor) devuelve true si el array contiene el valor especificado, false en caso contrario. Es útil para verificar existencia de elementos."
    },
    {
      id: 11068,
      pregunta: "¿Qué es una sesión en un entorno web?",
      opciones: [
        "Un archivo del servidor",
        "Almacenamiento temporal asociado a un usuario",
        "Una cookie cifrada",
        "Una variable global compartida"
      ],
      respuestaCorrecta: 1,
      explicacion: "Una sesión es un mecanismo para mantener datos específicos de un usuario durante su interacción con el sitio web, almacenados en el servidor y vinculados mediante un identificador (generalmente en una cookie)."
    },
    {
      id: 11069,
      pregunta: "¿Qué es una cookie en el contexto del navegador?",
      opciones: [
        "Un dato pequeño almacenado y enviado al servidor en cada petición",
        "Un archivo del servidor",
        "Una sesión temporal",
        "Una variable global"
      ],
      respuestaCorrecta: 0,
      explicacion: "Las cookies son pequeños fragmentos de datos que el servidor envía al navegador, quien los almacena y los devuelve automáticamente en cada petición posterior al mismo dominio."
    },
    {
      id: 11070,
      pregunta: "¿Qué librería se usa frecuentemente para formatear fechas de forma sencilla?",
      opciones: ["Luxon", "dayjs", "Moment.js", "Date-fns"],
      respuestaCorrecta: 1,
      explicacion: "dayjs es una librería moderna, ligera (solo 2KB) y sencilla para trabajar con fechas. Aunque todas las opciones son válidas, dayjs destaca por su simplicidad y tamaño reducido. Moment.js está deprecado."
    },
    {
      id: 11071,
      pregunta: "¿Qué hace <% %> en una plantilla EJS?",
      opciones: [
        "Imprime HTML",
        "Ejecuta JavaScript sin imprimirlo",
        "Escapa HTML",
        "Renderiza variables"
      ],
      respuestaCorrecta: 1,
      explicacion: "Es un bloque de control que ejecuta código JavaScript (bucles, condicionales, variables) sin generar salida en el HTML resultante."
    },
    {
      id: 11072,
      pregunta: "¿Qué hace <%= valor %> en EJS?",
      opciones: [
        "Imprime HTML sin escapar",
        "Ejecuta JavaScript",
        "Imprime el valor escapado",
        "Crea un comentario"
      ],
      respuestaCorrecta: 2,
      explicacion: "<%= %> imprime el valor de una variable escapando caracteres especiales HTML (convirtiendo < en &lt;, etc.), protegiendo contra ataques XSS."
    },
    {
      id: 11073,
      pregunta: "¿Qué envía un checkbox no marcado en un formulario HTML?",
      opciones: ["false", "null", "0", "No envía el campo"],
      respuestaCorrecta: 3,
      explicacion: "Los checkboxes no marcados simplemente no se incluyen en los datos del formulario. Solo los checkboxes marcados envían su valor al servidor."
    },
    {
      id: 11074,
      pregunta: "¿Qué hace <%- %> en una plantilla EJS?",
      opciones: [
        "Imprime valores escapados",
        "Ejecuta JS sin imprimir",
        "Renderiza HTML sin escaparlo",
        "Inserta comentarios"
      ],
      respuestaCorrecta: 2,
      explicacion: "<%- %> imprime el contenido tal cual sin escapar caracteres HTML. Útil para insertar HTML generado dinámicamente, pero peligroso si el contenido viene de usuarios (riesgo XSS)."
    },
    {
      id: 11075,
      pregunta: "¿Para qué sirve res.redirect() en Express?",
      opciones: [
        "Renderizar vistas",
        "Cerrar la sesión",
        "Enviar una redirección al navegador",
        "Procesar JSON"
      ],
      respuestaCorrecta: 2,
      explicacion: "res.redirect() envía una respuesta HTTP de redirección (código 302 por defecto) que indica al navegador que debe hacer una nueva petición a otra URL."
    },
    {
      id: 11076,
      pregunta: "¿Cómo se establece una cookie en Express?",
      opciones: [
        "res.setCookie()",
        "res.cookie()",
        "req.cookie.add()",
        "session.cookie()"
      ],
      respuestaCorrecta: 1,
      explicacion: "El método res.cookie(nombre, valor, opciones) establece una cookie en la respuesta HTTP que será almacenada por el navegador."
    },
    {
      id: 11077,
      pregunta: "Cuando se envían varios checkbox con el mismo name, ¿qué puede recibir el backend?",
      opciones: [
        "Siempre un string",
        "Siempre un array",
        "Un array si hay varios, un string si solo uno",
        "Nunca recibe ningún valor"
      ],
      respuestaCorrecta: 2,
      explicacion: "Express y otros frameworks no siempre convierten automáticamente valores múltiples en arrays. Si solo se marca un checkbox, llega como string; si se marcan varios, como array. Es importante validarlo en el código."
    },
    {
      id: 11078,
      pregunta: "¿Qué se necesita para usar sesiones en Express?",
      opciones: [
        "express-session",
        "express.static()",
        "Un archivo JSON",
        ".env obligatorio"
      ],
      respuestaCorrecta: 0,
      explicacion: "express-session es el middleware oficial de Express que gestiona sesiones, almacenándolas en memoria por defecto (o en bases de datos como Redis con stores adicionales)."
    },
    {
      id: 11079,
      pregunta: "¿Cuál es la diferencia principal entre GET y POST?",
      opciones: [
        "GET envía datos en la URL, POST en el cuerpo",
        "POST se usa solo para imágenes",
        "Son idénticos",
        "GET cifra automáticamente la información"
      ],
      respuestaCorrecta: 0,
      explicacion: "GET anexa los datos a la URL como query string (visible, limitado en tamaño), mientras POST los envía en el cuerpo de la petición (no visible en la URL, sin límite práctico de tamaño)."
    },
    {
      id: 11080,
      pregunta: "¿Qué ocurre cuando un servidor devuelve un formulario con los datos introducidos tras un error?",
      opciones: [
        "Los valores se borran",
        "Se guardan en cookies automático",
        "El servidor envía la vista con los valores previos",
        "El navegador bloquea la vista"
      ],
      respuestaCorrecta: 2,
      explicacion: "Para mejorar la experiencia de usuario, cuando hay errores de validación, el servidor típicamente re-renderiza el formulario pasando los valores que el usuario había introducido, evitando que tenga que reescribirlo todo."
    }
  ]
};

export default moduloRepaso1ExpressEJSFormularios;