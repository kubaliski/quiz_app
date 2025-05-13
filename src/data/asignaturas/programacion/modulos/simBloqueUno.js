/**
 * Datos del módulo de Sintaxis Básica de Java perteneciente a la asignatura de Programación.
 * Incluye información del módulo y sus preguntas asociadas para el quiz.
 *
 * @type {Object}
 * @property {number} id - Identificador único del módulo
 * @property {string} nombre - Nombre del módulo
 * @property {boolean} esExamen - Indica si el módulo es un examen
 * @property {number} asignaturaId - ID de la asignatura a la que pertenece
 * @property {string} descripcion - Breve descripción del contenido del módulo
 * @property {Array<Object>} preguntas - Lista de preguntas para el quiz de este módulo
 * @property {number} preguntas[].id - Identificador único de la pregunta
 * @property {number} preguntas[].moduloId - ID del módulo al que pertenece la pregunta
 * @property {string} preguntas[].pregunta - Texto de la pregunta
 * @property {Array<string>} preguntas[].opciones - Lista de opciones de respuesta
 * @property {number} preguntas[].respuestaCorrecta - Índice (0-based) de la opción correcta
 * @property {string} preguntas[].explicacion - Explicación de la respuesta correcta
 *
 * @example
 * // Importar el módulo de Sintaxis Básica de Java
 * import moduloSimBloqueUno from '@data/modulos/simBloqueUno';
 *
 * function PreguntasAleatorias() {
 *   // Seleccionar 5 preguntas aleatorias del módulo
 *   const preguntasAleatorias = moduloSimBloqueUno.preguntas
 *     .sort(() => 0.5 - Math.random())
 *     .slice(0, 5);
 *
 *   return (
 *     <div>
 *       <h2>{moduloSimBloqueUno.nombre}</h2>
 *       {preguntasAleatorias.map(pregunta => (
 *         <QuestionCard key={pregunta.id} pregunta={pregunta} />
 *       ))}
 *     </div>
 *   );
 * }
 */
export const moduloSimBloqueUno = {
    id: 306,
    nombre: "Fundamentos de Programación (Simulacro Bloque 1)",
    asignaturaId: 3,
    esExamen: true,
    descripcion: "Elementos básicos del lenguaje Java: variables, tipos de datos, operadores, expresiones y estructuras básicas.",
    preguntas: [
      {
        id: 3601,
        moduloId: 306,
        pregunta: "¿Qué palabra clave se usa para declarar una constante en Java?",
        opciones: ["CONST", "EXTENDS", "STATIC", "FINAL"],
        respuestaCorrecta: 3,
        explicacion: "En Java, la palabra clave 'FINAL' se utiliza para declarar constantes. Una vez que una variable es declarada como final, su valor no puede ser modificado, convirtiéndola efectivamente en una constante."
      },
      {
        id: 3602,
        moduloId: 306,
        pregunta: "¿Qué tipo de dato usarías para representar un número decimal?",
        opciones: ["Byte", "Float", "Boolean", "Short"],
        respuestaCorrecta: 1,
        explicacion: "Para representar números decimales en Java, se utilizan los tipos de datos Float o Double. El tipo Float es una opción adecuada para representar números con parte decimal cuando no se requiere alta precisión."
      },
      {
        id: 3603,
        moduloId: 306,
        pregunta: "¿Qué valor representa el literal '\\t' en una cadena?",
        opciones: ["Tabulador", "Salto de línea", "Termina instrucción actual", "Abreviatura de try..catch"],
        respuestaCorrecta: 0,
        explicacion: "El literal '\\t' en una cadena de Java representa un carácter de tabulación. Es un carácter de escape que inserta un espacio de tabulación horizontal en el texto cuando se imprime o muestra."
      },
      {
        id: 3604,
        moduloId: 306,
        pregunta: "¿Qué operador devuelve el resto de una división?",
        opciones: ["%", "/", "||", "\\"],
        respuestaCorrecta: 0,
        explicacion: "El operador '%' (módulo) devuelve el resto de una división entre dos números. Por ejemplo, 7 % 3 devuelve 1, que es el resto de dividir 7 entre 3."
      },
      {
        id: 3605,
        moduloId: 306,
        pregunta: "¿Qué ocurre si declaras dos variables con el mismo nombre en el mismo bloque?",
        opciones: ["Se suman automáticamente", "Se concatenan automáticamente", "La segunda variable apunta a la primera variable. Se fusionan", "El compilador genera un error"],
        respuestaCorrecta: 3,
        explicacion: "En Java, no se pueden declarar dos variables con el mismo nombre en el mismo ámbito o bloque de código. Si intentas hacerlo, el compilador generará un error de duplicación de variable."
      },
      {
        id: 3606,
        moduloId: 306,
        pregunta: "¿Qué operador se utiliza para comparar si dos valores son iguales?",
        opciones: ["=", "==", "!=", "<>"],
        respuestaCorrecta: 1,
        explicacion: "El operador '==' se utiliza para comparar si dos valores son iguales en Java. Es importante no confundirlo con el operador '=' que se utiliza para asignación de valores a variables."
      },
      {
        id: 3607,
        moduloId: 306,
        pregunta: "¿Cuál es el resultado de: 7 % 3?",
        opciones: ["2", "1", "4", "0"],
        respuestaCorrecta: 1,
        explicacion: "El operador '%' calcula el resto de la división. En este caso, 7 dividido entre 3 da 2 con un resto de 1. Por lo tanto, 7 % 3 es igual a 1."
      },
      {
        id: 3608,
        moduloId: 306,
        pregunta: "¿Cuál de estas variables es válida en Java?",
        opciones: ["1numero", "_edad", "Public", "Valor total"],
        respuestaCorrecta: 1,
        explicacion: "En Java, los nombres de variables no pueden comenzar con un número, no pueden contener espacios y no pueden ser palabras reservadas. '_edad' es válido porque puede comenzar con un guion bajo, mientras que '1numero' comienza con un número, 'Public' es una palabra reservada (aunque en minúscula) y 'Valor total' contiene un espacio."
      },
      {
        id: 3609,
        moduloId: 306,
        pregunta: "¿Qué palabra clave hace que una variable no pueda modificarse?",
        opciones: ["Static", "Final", "Private", "Super"],
        respuestaCorrecta: 1,
        explicacion: "La palabra clave 'final' en Java hace que una variable no pueda ser modificada después de su inicialización. Una vez que se asigna un valor a una variable final, ese valor no puede cambiar."
      },
      {
        id: 3610,
        moduloId: 306,
        pregunta: "¿Qué significa que Java sea case-sensitive?",
        opciones: ["Que no distingue entre mayúsculas y minúsculas", "Que ignora los espacios", "Que distingue entre mayúsculas y minúsculas", "Que es sensible al tipo de archivo"],
        respuestaCorrecta: 2,
        explicacion: "Java es case-sensitive, lo que significa que distingue entre mayúsculas y minúsculas. Por ejemplo, las variables 'nombre', 'Nombre' y 'NOMBRE' se consideran tres variables diferentes en Java."
      },
      {
        id: 3611,
        moduloId: 306,
        pregunta: "¿Cuál de estas afirmaciones es verdadera sobre el método main en Java?",
        opciones: ["Debe ser la primera instrucción dentro de la clase", "Es private por defecto", "Debe ser static y public", "Devuelve siempre un int"],
        respuestaCorrecta: 2,
        explicacion: "El método main en Java debe ser declarado como 'public static void main(String[] args)'. Debe ser public para ser accesible por la JVM y static para poder ser llamado sin crear una instancia de la clase."
      },
      {
        id: 3612,
        moduloId: 306,
        pregunta: "¿Qué ocurre si usas una variable local sin inicializarla?",
        opciones: ["Se inicializa con 0 automáticamente", "El programa imprime null", "Se lanza un error de compilación", "Se convierte en global"],
        respuestaCorrecta: 2,
        explicacion: "En Java, si intentas usar una variable local sin inicializarla, el compilador generará un error. A diferencia de las variables de instancia o de clase, las variables locales no reciben valores predeterminados y deben ser inicializadas explícitamente antes de su uso."
      },
      {
        id: 3613,
        moduloId: 306,
        pregunta: "¿Qué operador lógico representa una disyunción (OR)?",
        opciones: ["&&&", "&&", "||", "!!"],
        respuestaCorrecta: 2,
        explicacion: "El operador lógico '||' representa una disyunción lógica (OR) en Java. Devuelve true si al menos uno de los operandos es true. Es un operador de cortocircuito, lo que significa que si el primer operando es true, el segundo operando no se evalúa."
      },
      {
        id: 3614,
        moduloId: 306,
        pregunta: "¿Qué resultado da la operación: 4 + 3 * 2?",
        opciones: ["14", "10", "11", "16"],
        respuestaCorrecta: 1,
        explicacion: "En Java, como en matemáticas, se respeta la precedencia de operadores. La multiplicación tiene mayor precedencia que la suma, por lo que primero se realiza 3 * 2 = 6, y luego 4 + 6 = 10."
      },
      {
        id: 3615,
        moduloId: 306,
        pregunta: "¿Qué valor tendrá x tras ejecutar el siguiente código?",
        recurso: {
          tipo: "codigo",
          contenido: `int x = 10;
x -= 4;`,
          lenguaje: "java"
        },
        opciones: ["6", "14", "4", "10"],
        respuestaCorrecta: 0,
        explicacion: "El operador '-=' es un operador de asignación compuesta que resta el valor del lado derecho al valor de la variable y asigna el resultado a la variable. En este caso, x -= 4 es equivalente a x = x - 4, por lo que x tendrá el valor 6 (10 - 4)."
      },
      {
        id: 3616,
        moduloId: 306,
        pregunta: "¿Cuál de las siguientes opciones, es un comentario válido en java?",
        opciones: ["<!-- esto es un comentario -->", "//esto es un comentario", "\\\\esto es un comentario", "*// esto es un comentario /"],
        respuestaCorrecta: 1,
        explicacion: "En Java, los comentarios de una sola línea comienzan con '//'. Por lo tanto, '//esto es un comentario' es la única opción correcta entre las dadas. Los comentarios tipo HTML ('<!-- -->') no son válidos en Java, ni tampoco las otras opciones presentadas."
      }
    ]
  };

  export default moduloSimBloqueUno;