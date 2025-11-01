const moduloUnidadCuatroPOOJsonBBDD = {
  id: 1102,
  asignaturaId: 11,
  nombre: "Unidad 4: POO, JSON y Bases de Datos",
  titulo: "POO, JSON y Bases de Datos",
  descripcion: "Clases, herencia y constructores; manejo de JSON y fs en Node.js; MySQL/MongoDB, ORM y buenas prácticas",
  esExamen: false,
  preguntas: [
    {
      id: 11026,
      pregunta: "¿Qué palabra clave define una clase?",
      opciones: ["class", "constructor", "object", "extends"],
      respuestaCorrecta: 0,
      explicacion: "class define una clase en lenguajes como JavaScript."
    },
    {
      id: 11027,
      pregunta: "¿Qué operador se usa para heredar otra clase?",
      opciones: ["clone", "extends", "inherit", "use"],
      respuestaCorrecta: 1,
      explicacion: "extends permite heredar propiedades y métodos de la clase base."
    },
    {
      id: 11028,
      pregunta: "¿Qué método inicializa los objetos?",
      opciones: ["create()", "init()", "constructor()", "this()"],
      respuestaCorrecta: 2,
      explicacion: "constructor() se ejecuta al crear una instancia para inicializarla."
    },
    {
      id: 11029,
      pregunta: "¿Cómo se accede al constructor de la clase padre?",
      opciones: ["parent()", "this()", "call()", "super()"],
      respuestaCorrecta: 3,
      explicacion: "super() invoca el constructor de la clase base."
    },
    {
      id: 11030,
      pregunta: "¿Qué representa un objeto?",
      opciones: ["Una instancia de una clase", "Un módulo de Node.js", "Un método", "Una promesa"],
      respuestaCorrecta: 0,
      explicacion: "Un objeto es la instancia concreta creada a partir de una clase."
    },
    {
      id: 11031,
      pregunta: "¿Qué hace JSON.parse()?",
      opciones: [
        "Convierte texto JSON en objeto JS",
        "Convierte objeto JS en texto",
        "Crea un archivo",
        "Cierra una conexión"
      ],
      respuestaCorrecta: 0,
      explicacion: "JSON.parse() transforma una cadena JSON a objeto JavaScript."
    },
    {
      id: 11032,
      pregunta: "¿Qué módulo maneja archivos en Node.js?",
      opciones: ["fs", "http", "net", "os"],
      respuestaCorrecta: 0,
      explicacion: "fs expone funciones para leer y escribir en el sistema de archivos."
    },
    {
      id: 11033,
      pregunta: "¿Qué función escribe datos en un archivo?",
      opciones: ["fs.readFile()", "fs.rename()", "fs.mkdir()", "fs.writeFile()"],
      respuestaCorrecta: 3,
      explicacion: "fs.writeFile() escribe datos en un archivo de forma asíncrona."
    },
    {
      id: 11034,
      pregunta: "¿Qué formato tiene JSON?",
      opciones: ["Binario", "HTML", "Texto plano con estructura clave-valor", "XML"],
      respuestaCorrecta: 2,
      explicacion: "JSON es texto estructurado en pares clave-valor y arrays."
    },
    {
      id: 11035,
      pregunta: "¿Qué función convierte un objeto JS en texto JSON?",
      opciones: ["toString()", "JSON.parse()", "JSON.stringify()", "stringifyObject()"],
      respuestaCorrecta: 2,
      explicacion: "JSON.stringify() serializa un objeto a una cadena JSON."
    },
    {
      id: 11036,
      pregunta: "¿Qué librería conecta Node.js con MySQL?",
      opciones: ["mysql2", "mongodb", "express", "socket.io"],
      respuestaCorrecta: 0,
      explicacion: "mysql2 es el cliente recomendado para MySQL en Node.js."
    },
    {
      id: 11037,
      pregunta: "¿Qué ORM simplifica el trabajo con MySQL?",
      opciones: ["Mongoose", "Lodash", "Sequelize", "Winston"],
      respuestaCorrecta: 2,
      explicacion: "Sequelize ofrece modelos, migraciones y consultas para SQL."
    },
    {
      id: 11038,
      pregunta: "¿Qué formato usa MongoDB para almacenar datos?",
      opciones: ["Archivos CSV", "Documentos JSON", "Tablas", "XML"],
      respuestaCorrecta: 1,
      explicacion: "MongoDB usa BSON, representación binaria de JSON, para documentos."
    },
    {
      id: 11039,
      pregunta: "¿Qué variable debe protegerse en un archivo .env?",
      opciones: ["Las rutas del servidor", "Las credenciales de conexión", "Los logs", "Los puertos"],
      respuestaCorrecta: 1,
      explicacion: "Usuario, contraseña y URIs son sensibles y deben ocultarse."
    },
    {
      id: 11040,
      pregunta: "¿Qué significa CRUD?",
      opciones: [
        "Create, Restore, Undo, Delete",
        "Connect, Read, Upload, Download",
        "Cache, Read, Update, Deploy",
        "Create, Read, Update, Delete"
      ],
      respuestaCorrecta: 3,
      explicacion: "CRUD define las operaciones básicas sobre datos persistentes."
    }
  ]
};

export default moduloUnidadCuatroPOOJsonBBDD;