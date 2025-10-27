const moduloUnidadDosFuncionesArrays = {
  id: 1100,
  asignaturaId: 11,
  nombre: "Unidad 2: Funciones, Arrays y Estructuras de datos",
  titulo: "Funciones, Arrays y Estructuras de datos",
  descripcion: "Funciones flecha, this léxico, scope (var/let), métodos de array y modularización en Node.js",
  esExamen: false,
  preguntas: [
    {
      id: 11001,
      pregunta: "¿Qué método devuelve un nuevo array sin modificar el original?",
      opciones: ["push", "map", "splice", "sort"],
      respuestaCorrecta: 1,
      explicacion: "map crea un nuevo array; push, splice y sort mutan el array original."
    },
    {
      id: 11002,
      pregunta: "¿Qué característica tiene una arrow function?",
      opciones: [
        "No puede recibir parámetros",
        "Es más lenta que la función clásica",
        "No puede usarse dentro de callbacks",
        "Heredá el this del contexto superior"
      ],
      respuestaCorrecta: 3,
      explicacion: "Las arrow functions tienen this léxico (del scope exterior)."
    },
    {
      id: 11003,
      pregunta: "¿Qué tipo de variable tiene alcance de bloque?",
      opciones: ["var", "let", "global", "static"],
      respuestaCorrecta: 1,
      explicacion: "let (y const) son block-scoped; var es function-scoped."
    },
    {
      id: 11004,
      pregunta: "¿Qué método de array se usa para acumular valores?",
      opciones: ["forEach", "filter", "reduce", "pop"],
      respuestaCorrecta: 2,
      explicacion: "reduce acumula en un único resultado aplicando una función reductora."
    },
    {
      id: 11005,
      pregunta: "¿Qué función convierte un objeto en una cadena JSON?",
      opciones: ["JSON.parse", "Object.keys", "toString", "JSON.stringify"],
      respuestaCorrecta: 3,
      explicacion: "JSON.stringify serializa un objeto a texto JSON; JSON.parse hace lo inverso."
    },
    {
      id: 11006,
      pregunta: "¿Qué comando importa un módulo con CommonJS?",
      opciones: [
        "const mod = require('./mod')",
        "import mod from './mod'",
        "include('./mod')",
        "load('./mod')"
      ],
      respuestaCorrecta: 0,
      explicacion: "CommonJS usa require y module.exports en Node.js clásico."
    },
    {
      id: 11007,
      pregunta: "¿Cómo se habilitan ES Modules en Node.js?",
      opciones: [
        "Agregando \"type\": \"module\" en package.json",
        "Cambiando la extensión .js a .es6",
        "Instalando Babel obligatoriamente",
        "Usando Node versión < 10"
      ],
      respuestaCorrecta: 0,
      explicacion: "Con \"type\":\"module\" o usando extensión .mjs se activa el loader ESM."
    },
    {
      id: 11008,
      pregunta: "¿Qué ventaja tiene la modularización?",
      opciones: [
        "Aumenta la complejidad del código",
        "Facilita la reutilización y el mantenimiento",
        "Ralentiza el rendimiento",
        "Evita los tests"
      ],
      respuestaCorrecta: 1,
      explicacion: "Mejora cohesión, reduce acoplamiento y facilita pruebas y refactor."
    },
    {
      id: 11009,
      pregunta: "¿Qué hace un “barrel file”?",
      opciones: [
        "Reexporta varios módulos desde un solo archivo",
        "Comprime código fuente",
        "Borra módulos no usados",
        "Crea dependencias circulares"
      ],
      respuestaCorrecta: 0,
      explicacion: "Centraliza exportaciones (index.js) para importar desde un único punto."
    },
    {
      id: 11010,
      pregunta: "¿Qué herramienta reinicia automáticamente el servidor?",
      opciones: ["ESLint", "Nodemon", "Prettier", "Jest"],
      respuestaCorrecta: 1,
      explicacion: "Nodemon observa cambios y reinicia el proceso Node automáticamente."
    }
  ]
};

export default moduloUnidadDosFuncionesArrays;