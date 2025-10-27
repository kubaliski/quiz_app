const moduloUnidadDosJavascriptBasico = {
  id: 1200,
  asignaturaId: 12,
  nombre: "Unidad 2: JavaScript Básico",
  titulo: "JavaScript Básico",
  descripcion: "Variables, comparadores, estructuras de control, arrays, funciones flecha, DOM y eventos",
  esExamen: false,
  preguntas: [
    {
      id: 12001,
      pregunta: "¿Cuál es la forma recomendada de declarar variables en JS?",
      opciones: ["let y const.", "var siempre.", "Solo const", "Solo var"],
      respuestaCorrecta: 0,
      explicacion: "let/const evitan problemas de hoisting y scope de var; const para valores que no se reasignan."
    },
    {
      id: 12002,
      pregunta: "¿Qué devuelve la expresión 5 === \"5\" en JS?",
      opciones: ["true", "false", "undefined", "error"],
      respuestaCorrecta: 1,
      explicacion: "=== compara valor y tipo; número 5 !== string \"5\"."
    },
    {
      id: 12003,
      pregunta: "¿Cuál de estas NO es una estructura de control en JS?",
      opciones: ["if/else", "for", "switch", "define"],
      respuestaCorrecta: 3,
      explicacion: "define no existe como estructura de control nativa en JS."
    },
    {
      id: 12004,
      pregunta: "¿Qué tipo de dato es [1,2,3] en JS?",
      opciones: ["Número", "Array", "Booleano", "String"],
      respuestaCorrecta: 1,
      explicacion: "Es un Array (objeto especializado para listas). typeof devuelve 'object', pero su tipo es Array."
    },
    {
      id: 12005,
      pregunta: "¿Qué operador lógico se usa para comprobar que se cumplen dos condiciones a la vez?",
      opciones: ["||", "!", "&&", "=="],
      respuestaCorrecta: 2,
      explicacion: "&& requiere que ambas condiciones sean verdaderas."
    },
    {
      id: 12006,
      pregunta: "¿Qué estructura permite almacenar una lista de valores en JS?",
      opciones: ["Objeto", "Array", "String", "Booleano"],
      respuestaCorrecta: 1,
      explicacion: "Array es la estructura de lista indexada."
    },
    {
      id: 12007,
      pregunta: "¿Cuál de los siguientes métodos de array crea un nuevo arreglo filtrado?",
      opciones: ["map", "reduce", "filter", "push"],
      respuestaCorrecta: 2,
      explicacion: "filter retorna un nuevo array con elementos que cumplen la condición."
    },
    {
      id: 12008,
      pregunta: "¿Qué tipo de función en JS se escribe con la sintaxis ()=>{}?",
      opciones: ["Declarada", "Anónima", "Flecha", "Asíncrona"],
      respuestaCorrecta: 2,
      explicacion: "Es la sintaxis de función flecha (arrow function)."
    },
    {
      id: 12009,
      pregunta: "¿Qué similitud existe entre las funciones en JS y los hooks en React?",
      opciones: [
        "Ambos encapsulan lógica reutilizable",
        "Ambos solo funcionan en backend",
        "Ambos son estructuras de control",
        "Ambos sirven para dar estilo"
      ],
      respuestaCorrecta: 0,
      explicacion: "Encapsulan lógica para reutilizar y componer comportamiento."
    },
    {
      id: 12010,
      pregunta: "¿Qué afirmación es correcta sobre arrays en JS?",
      opciones: [
        "Solo pueden almacenar números",
        "Pueden almacenar cualquier tipo de dato",
        "No se pueden recorrer",
        "Son inmutables siempre"
      ],
      respuestaCorrecta: 1,
      explicacion: "Pueden mezclar tipos (números, strings, objetos, etc.)."
    },
    {
      id: 12011,
      pregunta: "¿Qué método se usa para asociar un evento a un elemento en JS?",
      opciones: ["setEvent", "onclick directo", "addEventListener", "querySelector"],
      respuestaCorrecta: 2,
      explicacion: "addEventListener permite registrar manejadores para eventos del DOM."
    },
    {
      id: 12012,
      pregunta: "¿Cuál es un ejemplo de función flecha?",
      opciones: ["function(){}", "()=>{}", "func[]", "def()"],
      respuestaCorrecta: 1,
      explicacion: "()=>{} es la notación de arrow function."
    },
    {
      id: 12013,
      pregunta: "¿Qué método devuelve el primer elemento que coincide con un selector CSS?",
      opciones: ["querySelector", "getElementById", "querySelectorAll", "innerHTML"],
      respuestaCorrecta: 0,
      explicacion: "querySelector retorna el primer match del selector."
    },
    {
      id: 12014,
      pregunta: "¿Qué diferencia hay entre JS nativo y React al manipular la interfaz?",
      opciones: [
        "JS nativo usa DOM directo, React usa JSX y estado",
        "Ambos manipulan el DOM igual",
        "React no soporta eventos",
        "JS nativo no soporta funciones"
      ],
      respuestaCorrecta: 0,
      explicacion: "React abstrae el DOM con JSX y reconcilia vistas según estado."
    },
    {
      id: 12015,
      pregunta: "¿Qué ocurre con this en las funciones flecha?",
      opciones: [
        "Crea su propio this",
        "No cambia el this del contexto",
        "Se reinicia en cada llamada",
        "Solo funciona en clases"
      ],
      respuestaCorrecta: 1,
      explicacion: "Las arrow functions no tienen this propio; heredan el this léxico del contexto."
    }
  ]
};

export default moduloUnidadDosJavascriptBasico;