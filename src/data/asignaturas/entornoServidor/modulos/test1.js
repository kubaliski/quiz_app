const moduloTestUnoKahootNodeExpress = {
  id: 1106,
  asignaturaId: 11,
  nombre: "Test 1 (Kahoot): Node.js y Express",
  titulo: "Node.js y Express",
  descripcion: "Kahoot sobre Node.js, Express, API REST, métodos HTTP, middlewares, MVC, SQLite y Sequelize.",
  esExamen: true,
  preguntas: [
    {
      id: 11111,
      pregunta: "¿Qué es Node.js?",
      opciones: [
        "Un entorno de ejecución de JavaScript",
        "Un framework backend",
        "Un servidor web",
        "Un motor de base de datos"
      ],
      respuestaCorrecta: 0,
      explicacion: "Node.js es un runtime environment que permite ejecutar JavaScript fuera del navegador, utilizando el motor V8 de Chrome."
    },
    {
      id: 11112,
      pregunta: "¿Sobre qué motor se basa Node.js?",
      opciones: [
        "JVM",
        "SpiderMonkey",
        "V8",
        "Java"
      ],
      respuestaCorrecta: 2,
      explicacion: "Node.js utiliza V8, el motor de JavaScript de código abierto desarrollado por Google para Chrome."
    },
    {
      id: 11113,
      pregunta: "¿Qué es Express?",
      opciones: [
        "Un ORM",
        "Un lenguaje de programación",
        "Un servidor HTTP independiente",
        "Un framework minimalista para Node.js"
      ],
      respuestaCorrecta: 3,
      explicacion: "Express es el framework web más popular para Node.js, diseñado con una filosofía minimalista para crear aplicaciones web y APIs."
    },
    {
      id: 11114,
      pregunta: "¿Qué hace app.listen() en Express?",
      opciones: [
        "Conecta a la base de datos",
        "Inicia el servidor",
        "Carga middleware",
        "Define rutas"
      ],
      respuestaCorrecta: 1,
      explicacion: "app.listen() inicia el servidor HTTP y lo pone a escuchar en un puerto específico."
    },
    {
      id: 11115,
      pregunta: "¿Qué es nodemon?",
      opciones: [
        "Un compilador",
        "Un gestor de paquetes",
        "Un framework web",
        "Un monitor de cambios"
      ],
      respuestaCorrecta: 3,
      explicacion: "Nodemon es una herramienta de desarrollo que monitoriza cambios en los archivos y reinicia automáticamente el servidor Node.js."
    },
    {
      id: 11116,
      pregunta: "¿Para qué sirve el directorio routes?",
      opciones: [
        "Guardar vistas",
        "Agrupar rutas",
        "Definir modelos",
        "Configurar el servidor"
      ],
      respuestaCorrecta: 1,
      explicacion: "El directorio routes es una convención en Express para organizar las rutas de la aplicación de manera modular y escalable."
    },
    {
      id: 11117,
      pregunta: "¿Qué hace express.Router()?",
      opciones: [
        "Renderiza HTML",
        "Conecta la base de datos",
        "Crea un mini-router",
        "Arranca el servidor"
      ],
      respuestaCorrecta: 2,
      explicacion: "express.Router() crea una instancia de router que funciona como una mini-aplicación Express para manejar middleware y rutas de forma modular."
    },
    {
      id: 11118,
      pregunta: "¿Qué ventaja aporta nodemon en desarrollo?",
      opciones: [
        "Menos memoria",
        "Reinicio automático",
        "Más seguridad",
        "Mejor rendimiento"
      ],
      respuestaCorrecta: 1,
      explicacion: "La principal ventaja de nodemon es el reinicio automático del servidor cada vez que se detectan cambios en los archivos del proyecto."
    },
    {
      id: 11119,
      pregunta: "¿Qué es una API REST?",
      opciones: [
        "Un tipo de base de datos",
        "Un framework frontend",
        "Un protocolo propietario",
        "Una interfaz basada en HTTP"
      ],
      respuestaCorrecta: 3,
      explicacion: "REST es un estilo arquitectónico para diseñar APIs web que utilizan el protocolo HTTP para la comunicación."
    },
    {
      id: 11120,
      pregunta: "¿Qué formato devuelve normalmente una API REST?",
      opciones: [
        "HTML",
        "XML",
        "JSON",
        "TXT"
      ],
      respuestaCorrecta: 2,
      explicacion: "JSON (JavaScript Object Notation) es el formato estándar que utilizan las APIs REST para intercambiar datos entre cliente y servidor."
    },
    {
      id: 11121,
      pregunta: "¿Qué método HTTP se usa para obtener datos?",
      opciones: [
        "PATCH",
        "PUT",
        "POST",
        "GET"
      ],
      respuestaCorrecta: 3,
      explicacion: "GET es el método HTTP utilizado para solicitar y recuperar datos de un servidor sin modificarlos."
    },
    {
      id: 11122,
      pregunta: "¿Qué método HTTP se usa para crear un recurso?",
      opciones: [
        "GET",
        "PATCH",
        "POST",
        "DELETE"
      ],
      respuestaCorrecta: 2,
      explicacion: "POST es el método HTTP utilizado para crear nuevos recursos en el servidor, enviando datos en el cuerpo de la petición."
    },
    {
      id: 11123,
      pregunta: "¿Qué método HTTP se usa para borrar un recurso?",
      opciones: [
        "PUT",
        "GET",
        "POST",
        "DELETE"
      ],
      respuestaCorrecta: 3,
      explicacion: "DELETE es el método HTTP específicamente diseñado para eliminar recursos del servidor."
    },
    {
      id: 11124,
      pregunta: "¿Qué método HTTP modifica parcialmente un recurso?",
      opciones: [
        "PATCH",
        "POST",
        "GET",
        "PUT"
      ],
      respuestaCorrecta: 0,
      explicacion: "PATCH es el método HTTP utilizado para realizar modificaciones parciales a un recurso existente, a diferencia de PUT que lo reemplaza completamente."
    },
    {
      id: 11125,
      pregunta: "¿Qué representa req.params?",
      opciones: [
        "Parámetros de la URL",
        "Datos del body",
        "Cookies",
        "Cabeceras"
      ],
      respuestaCorrecta: 0,
      explicacion: "req.params es un objeto en Express que contiene los parámetros de ruta definidos en la URL, como /users/:id."
    },
    {
      id: 11126,
      pregunta: "¿Qué representa req.body?",
      opciones: [
        "Variables de entorno",
        "Datos enviados en la petición",
        "Cabeceras HTTP",
        "Parámetros de la URL"
      ],
      respuestaCorrecta: 1,
      explicacion: "req.body contiene los datos enviados en el cuerpo de la petición HTTP, típicamente en peticiones POST, PUT o PATCH."
    },
    {
      id: 11127,
      pregunta: "¿Para qué sirve express.json()?",
      opciones: [
        "Servir archivos",
        "Parsear JSON",
        "Gestionar sesiones",
        "Crear rutas"
      ],
      respuestaCorrecta: 1,
      explicacion: "express.json() es un middleware que parsea el cuerpo de las peticiones entrantes con contenido JSON y lo hace disponible en req.body."
    },
    {
      id: 11128,
      pregunta: "¿Qué es un middleware en Express?",
      opciones: [
        "Un modelo",
        "Una vista",
        "Una función intermedia",
        "Un controlador"
      ],
      respuestaCorrecta: 2,
      explicacion: "Un middleware es una función que tiene acceso a req, res y next, y se ejecuta entre la petición y la respuesta."
    },
    {
      id: 11129,
      pregunta: "¿Cuál es un ejemplo de middleware?",
      opciones: [
        "res.send",
        "app.listen",
        "express.json",
        "console.log"
      ],
      respuestaCorrecta: 2,
      explicacion: "express.json() es un middleware incorporado en Express que procesa el cuerpo de las peticiones JSON entrantes."
    },
    {
      id: 11130,
      pregunta: "¿Qué patrón arquitectónico se usa habitualmente con Express?",
      opciones: [
        "Singleton",
        "MVVM",
        "MVP",
        "MVC"
      ],
      respuestaCorrecta: 3,
      explicacion: "MVC (Model-View-Controller) es el patrón arquitectónico más común utilizado con Express para separar responsabilidades."
    },
    {
      id: 11131,
      pregunta: "En MVC, ¿qué hace el controlador?",
      opciones: [
        "Coordina lógica y respuesta",
        "Muestra vistas",
        "Accede a la base de datos",
        "Define rutas"
      ],
      respuestaCorrecta: 0,
      explicacion: "El controlador coordina el flujo entre el modelo y la vista, recibe peticiones, procesa la lógica y determina la respuesta."
    },
    {
      id: 11132,
      pregunta: "¿Por qué no se debe borrar con una etiqueta <a>?",
      opciones: [
        "Porque es lento",
        "Porque no admite estilos",
        "Porque usa GET",
        "Porque no funciona"
      ],
      respuestaCorrecta: 2,
      explicacion: "Los enlaces <a> usan el método GET, que no debe usarse para operaciones destructivas. Borrar debe usar DELETE o POST."
    },
    {
      id: 11133,
      pregunta: "¿Qué método se usa para enviar datos desde un formulario?",
      opciones: [
        "DELETE",
        "PATCH",
        "POST",
        "GET"
      ],
      respuestaCorrecta: 2,
      explicacion: "POST es el método HTTP estándar utilizado por los formularios HTML para enviar datos al servidor de forma segura."
    },
    {
      id: 11134,
      pregunta: "¿Qué es res.json()?",
      opciones: [
        "Un método de respuesta",
        "Un middleware",
        "Un método de petición",
        "Un parser"
      ],
      respuestaCorrecta: 0,
      explicacion: "res.json() es un método del objeto response que envía una respuesta JSON al cliente, convirtiendo automáticamente objetos JavaScript."
    },
    {
      id: 11135,
      pregunta: "¿Qué devuelve res.status(404)?",
      opciones: [
        "Un error",
        "El objeto response",
        "Una vista",
        "Un número"
      ],
      respuestaCorrecta: 0,
      explicacion: "res.status(404) establece el código de estado HTTP 404 (Not Found), indicando que el recurso no fue encontrado."
    },
    {
      id: 11136,
      pregunta: "¿Qué es SQLite?",
      opciones: [
        "Un framework",
        "Una base de datos embebida",
        "Un ORM",
        "Un servidor de bases de datos"
      ],
      respuestaCorrecta: 1,
      explicacion: "SQLite es una base de datos relacional embebida que se almacena en un único archivo, sin necesidad de un servidor separado."
    },
    {
      id: 11137,
      pregunta: "¿Qué ventaja principal tiene SQLite?",
      opciones: [
        "Alta concurrencia",
        "Escalado horizontal",
        "Muchos usuarios simultáneos",
        "Configuración mínima"
      ],
      respuestaCorrecta: 3,
      explicacion: "La ventaja principal de SQLite es su configuración mínima: no requiere instalación de servidor ni administración compleja."
    },
    {
      id: 11138,
      pregunta: "¿Qué es Sequelize?",
      opciones: [
        "Un framework web",
        "Una base de datos",
        "Un servidor",
        "Un ORM"
      ],
      respuestaCorrecta: 3,
      explicacion: "Sequelize es un ORM (Object-Relational Mapping) para Node.js que facilita la interacción con bases de datos relacionales."
    },
    {
      id: 11139,
      pregunta: "¿Qué ventaja aporta usar un ORM?",
      opciones: [
        "Menos código SQL",
        "Más dependencias",
        "Más velocidad",
        "Más memoria"
      ],
      respuestaCorrecta: 0,
      explicacion: "La principal ventaja de usar un ORM es escribir menos código SQL manual y trabajar con objetos JavaScript nativos."
    },
    {
      id: 11140,
      pregunta: "¿Qué ventaja principal ofrece separar rutas y controladores en Express?",
      opciones: [
        "Reduce el uso de memoria",
        "Mejora la organización del código",
        "Aumenta la velocidad del servidor",
        "Elimina la necesidad de middlewares"
      ],
      respuestaCorrecta: 1,
      explicacion: "Separar rutas y controladores mejora significativamente la organización, mantenibilidad y escalabilidad del código."
    }
  ]
};

export default moduloTestUnoKahootNodeExpress;