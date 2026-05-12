const moduloSimI = {
  id: 1209,
  asignaturaId: 12,
  nombre: "Repaso 4: Fundamentos JavaScript y React",
  titulo: "Fundamentos JavaScript y React",
  descripcion:
    "Variables, ámbito, hoisting, operadores, closures, async/await, fetch, JSON, localStorage, XSS, React hooks, JSX, arrays y eventos.",
  esExamen: true,
  preguntas: [
    {
      id: 12156,
      pregunta: "¿Qué valor tiene una variable var antes de asignarle valor?",
      opciones: ["undefined", "null", "error", "0"],
      respuestaCorrecta: 0,
      explicacion:
        "Por el hoisting, var eleva la declaración al inicio del scope con valor undefined hasta que se asigna.",
    },
    {
      id: 12157,
      pregunta: "¿Dónde es accesible una variable declarada con let?",
      opciones: ["Global", "Bloque", "Función", "Objeto"],
      respuestaCorrecta: 1,
      explicacion:
        "let tiene ámbito de bloque (block scope): solo es accesible dentro del bloque {} donde se declara.",
    },
    {
      id: 12158,
      pregunta: "¿Qué devuelve typeof undefined?",
      opciones: ["null", "object", "undefined", "boolean"],
      respuestaCorrecta: 2,
      explicacion:
        "typeof undefined devuelve el string 'undefined'. A diferencia de typeof null, que devuelve 'object'.",
    },
    {
      id: 12159,
      pregunta: "¿Qué permite hacer el operador spread (...) en arrays?",
      opciones: [
        "Eliminar elementos",
        "Ordenar valores",
        "Expandir contenido",
        "Convertir en objeto",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "El spread operator desempaqueta/expande los elementos de un array: [...arr1, ...arr2] combina arrays.",
    },
    {
      id: 12160,
      pregunta: "¿Qué bloque captura errores en JS?",
      opciones: ["try/catch", "if/else", "switch", "for"],
      respuestaCorrecta: 0,
      explicacion:
        "try/catch permite ejecutar código y capturar cualquier error que se lance dentro del bloque try.",
    },
    {
      id: 12161,
      pregunta: "¿Qué devuelve una función async siempre?",
      opciones: ["Un valor", "Una Promise", "Un objeto", "Un array"],
      respuestaCorrecta: 1,
      explicacion:
        "Toda función marcada con async devuelve automáticamente una Promise, aunque internamente retorne un valor simple.",
    },
    {
      id: 12162,
      pregunta: "¿Qué hace fetch() en JavaScript?",
      opciones: [
        "Bloquea ejecución",
        "Crea variables",
        "Hace peticiones HTTP",
        "Ejecuta scripts",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "fetch() es la API nativa del navegador para realizar peticiones HTTP de forma asíncrona, devolviendo una Promise.",
    },
    {
      id: 12163,
      pregunta: "¿Qué indica response.ok en una petición fetch?",
      opciones: ["Error", "Respuesta válida", "Tipo JSON", "Código 200"],
      respuestaCorrecta: 1,
      explicacion:
        "response.ok es true cuando el código de estado HTTP está entre 200 y 299, indicando que la respuesta es válida.",
    },
    {
      id: 12164,
      pregunta: "¿Qué hace JSON.parse()?",
      opciones: [
        "Convierte objeto a texto",
        "Convierte texto a objeto",
        "Elimina datos",
        "Duplica datos",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "JSON.parse() toma un string con formato JSON y lo transforma en un valor u objeto JavaScript nativo.",
    },
    {
      id: 12165,
      pregunta: "¿Qué hace JSON.stringify()?",
      opciones: [
        "Convierte objeto en texto",
        "Convierte texto en objeto",
        "Borra propiedades",
        "Clona objeto",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "JSON.stringify() serializa un objeto o valor JavaScript en una cadena de texto con formato JSON.",
    },
    {
      id: 12166,
      pregunta: "¿Qué devuelve una función flecha sin return explícito?",
      opciones: ["undefined", "El valor implícito", "Error", "null"],
      respuestaCorrecta: 0,
      explicacion:
        "Si una función flecha tiene cuerpo de bloque {} y no incluye return, devuelve undefined. Solo hay retorno implícito si el cuerpo es una expresión directa: () => valor.",
    },
    {
      id: 12167,
      pregunta:
        "¿Qué ocurre con variables declaradas con var dentro de una función?",
      opciones: [
        "Son globales",
        "Son de bloque",
        "Son de función",
        "No existen",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "var tiene ámbito de función (function scope): es accesible en cualquier punto de la función, pero no fuera de ella.",
    },
    {
      id: 12168,
      pregunta: "¿Qué resultado devuelve '5' == 5 en JavaScript?",
      opciones: ["true", "false", "error", "undefined"],
      respuestaCorrecta: 0,
      explicacion:
        "== realiza coerción de tipos: convierte '5' a número antes de comparar, por lo que '5' == 5 es true.",
    },
    {
      id: 12169,
      pregunta: "¿Qué resultado devuelve '5' === 5?",
      opciones: ["true", "false", "error", "null"],
      respuestaCorrecta: 1,
      explicacion:
        "=== compara valor y tipo sin coerción. El string '5' y el número 5 son de tipos distintos, por lo que devuelve false.",
    },
    {
      id: 12170,
      pregunta: "¿Qué es un closure en JavaScript?",
      opciones: [
        "Una función sin retorno",
        "Una función que recuerda su entorno",
        "Un objeto global",
        "Un bucle",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Un closure es una función que mantiene acceso a las variables de su scope léxico incluso cuando se ejecuta fuera de ese contexto.",
    },
    {
      id: 12171,
      pregunta: "¿Qué tipo de datos guarda localStorage?",
      opciones: ["Objetos", "Arrays", "Strings", "Funciones"],
      respuestaCorrecta: 2,
      explicacion:
        "localStorage solo almacena strings. Para guardar objetos se usa JSON.stringify() y para recuperarlos JSON.parse().",
    },
    {
      id: 12172,
      pregunta: "¿Qué característica tiene sessionStorage?",
      opciones: [
        "Persistente siempre",
        "Mayor tamaño",
        "Se borra al cerrar pestaña",
        "Solo servidor",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "sessionStorage persiste solo durante la sesión de la pestaña: los datos se eliminan al cerrarla.",
    },
    {
      id: 12173,
      pregunta: "¿Qué método limpia todo localStorage?",
      opciones: ["removeItem()", "delete()", "clear()", "reset()"],
      respuestaCorrecta: 2,
      explicacion:
        "localStorage.clear() elimina todos los pares clave-valor almacenados. removeItem() solo borra una clave específica.",
    },
    {
      id: 12174,
      pregunta: "¿Qué ataque se evita limpiando entradas de usuario?",
      opciones: ["CSRF", "XSS", "MITM", "DDoS"],
      respuestaCorrecta: 1,
      explicacion:
        "El XSS (Cross-Site Scripting) se produce cuando se inyecta código malicioso a través de entradas de usuario. Sanitizar el input previene este ataque.",
    },
    {
      id: 12175,
      pregunta: "¿Qué hace DOMPurify?",
      opciones: [
        "Ejecuta HTML",
        "Limpia código peligroso",
        "Genera CSS",
        "Valida formularios",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "DOMPurify sanitiza HTML eliminando scripts y atributos peligrosos, protegiendo contra ataques XSS.",
    },
    {
      id: 12176,
      pregunta: "¿Qué devuelve useState en React?",
      opciones: [
        "Un valor",
        "Un array [estado, función]",
        "Un objeto",
        "Una promesa",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "useState devuelve un array con dos elementos: el valor actual del estado y la función para actualizarlo.",
    },
    {
      id: 12177,
      pregunta: "¿Qué ocurre al actualizar el estado en React?",
      opciones: [
        "Recarga página",
        "Renderiza componente",
        "Borra DOM",
        "Detiene app",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Cuando el estado cambia, React re-renderiza el componente afectado para reflejar los nuevos valores en la UI.",
    },
    {
      id: 12178,
      pregunta: "¿Qué hace useEffect con dependencia []?",
      opciones: [
        "Nunca ejecuta",
        "Siempre ejecuta",
        "Solo al montar",
        "Solo al destruir",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "useEffect con array de dependencias vacío se ejecuta una única vez tras el primer renderizado, equivalente a componentDidMount.",
    },
    {
      id: 12179,
      pregunta: "¿Qué hace map() en un array?",
      opciones: ["Filtra", "Ordena", "Transforma elementos", "Elimina datos"],
      respuestaCorrecta: 2,
      explicacion:
        "map() itera sobre cada elemento y devuelve un nuevo array con el resultado de aplicar una función a cada uno.",
    },
    {
      id: 12180,
      pregunta: "¿Qué hace filter()?",
      opciones: [
        "Elimina según condición",
        "Duplica",
        "Ordena",
        "Convierte tipo",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "filter() devuelve un nuevo array con solo los elementos que cumplen la condición proporcionada.",
    },
    {
      id: 12181,
      pregunta: "¿Qué es JSX en React?",
      opciones: [
        "HTML puro",
        "CSS avanzado",
        "JS con sintaxis HTML",
        "Lenguaje servidor",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "JSX es una extensión de sintaxis de JavaScript que permite escribir estructuras similares a HTML dentro del código JS.",
    },
    {
      id: 12182,
      pregunta: "¿Por qué se usa className en React?",
      opciones: [
        "Mejor rendimiento",
        "class es reservada",
        "Mejor CSS",
        "Compatibilidad",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "En JavaScript, class es una palabra reservada para definir clases, por eso JSX usa className para asignar clases CSS.",
    },
    {
      id: 12183,
      pregunta: "¿Qué representa una Promise?",
      opciones: ["Código síncrono", "Valor futuro", "Función", "Bucle"],
      respuestaCorrecta: 1,
      explicacion:
        "Una Promise representa un valor que puede estar disponible ahora, en el futuro o nunca, permitiendo manejar operaciones asíncronas.",
    },
    {
      id: 12184,
      pregunta: "¿Qué hace Promise.all()?",
      opciones: ["Ejecuta una", "Cancela", "Espera todas", "Convierte datos"],
      respuestaCorrecta: 2,
      explicacion:
        "Promise.all([p1, p2, p3]) espera a que todas las promesas se resuelvan, o rechaza en cuanto una falle.",
    },
    {
      id: 12185,
      pregunta: "¿Qué significa que JS sea event-driven?",
      opciones: [
        "Usa funciones",
        "Se ejecuta en servidor",
        "Depende de eventos",
        "Usa compilador",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "JavaScript en el navegador es orientado a eventos: la ejecución está dirigida por acciones del usuario (clicks, teclado) o del sistema (red, temporizadores).",
    },
  ],
};

export default moduloSimI;
