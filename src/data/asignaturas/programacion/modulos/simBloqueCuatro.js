/**
 * Datos del módulo de Métodos y Funciones. Recursividad en Java perteneciente a la asignatura de Programación.
 * Incluye información del módulo y sus preguntas asociadas para el quiz.
 *
 * @type {Object}
 * @property {number} id - Identificador único del módulo
 * @property {string} nombre - Nombre del módulo
 * @property {boolean} esExamen - Indica si el módulo es un examen
 * @property {number} asignaturaId - ID de la asignatura a la que pertenece
 * @property {string} descripcion - Breve descripción del contenido del módulo
 * @property {Array<Object>} preguntas - Lista de preguntas para el quiz de este módulo
 */
export const moduloSimBloqueCuatro = {
    id: 309,
    nombre: "Métodos y Funciones. Recursividad (Simulacro Bloque 4)",
    asignaturaId: 3,
    esExamen: true,
    descripcion: "Examen sobre métodos, funciones y recursividad en Java, enfocado en la comprensión de los conceptos fundamentales de programación modular.",
    preguntas: [
      {
        id: 3901,
        moduloId: 309,
        pregunta: "¿Cuál de las siguientes afirmaciones sobre métodos en Java es correcta?",
        opciones: ["Siempre deben devolver un valor.", "No pueden tener parámetros.", "Los métodos se definen dentro del main.", "Los métodos pueden no devolver nada si se usa void"],
        respuestaCorrecta: 3,
        explicacion: "En Java, los métodos pueden declararse con el tipo de retorno 'void', lo que significa que no devuelven ningún valor. Esto es útil cuando el método realiza una acción pero no necesita comunicar un resultado al código que lo llamó."
      },
      {
        id: 3902,
        moduloId: 309,
        pregunta: "¿Qué hace el siguiente código?",
        recurso: {
          tipo: "codigo",
          contenido: `public static int suma(int a, int b) {
    return a + b;
}`,
          lenguaje: "java"
        },
        opciones: ["Imprime la suma de dos números.", "Muestra una cadena por pantalla.", "Devuelve la suma de dos enteros.", "Declara una variable local."],
        respuestaCorrecta: 2,
        explicacion: "El código define un método llamado 'suma' que acepta dos parámetros enteros (a y b) y devuelve su suma. El método no imprime nada por pantalla, simplemente calcula y retorna el resultado de la operación a + b."
      },
      {
        id: 3903,
        moduloId: 309,
        pregunta: "¿Qué sucede si un método tiene más return después de que uno se ejecuta?",
        opciones: ["Se ejecutan todos los return.", "Se ignoran los que están después.", "Java lanza una excepción.", "No compila."],
        respuestaCorrecta: 1,
        explicacion: "Cuando un método encuentra una instrucción 'return', inmediatamente termina la ejecución del método y devuelve el valor indicado. Cualquier código o instrucción 'return' adicional que esté después del primer 'return' ejecutado será ignorado completamente."
      },
      {
        id: 3904,
        moduloId: 309,
        pregunta: "¿Qué resultado muestra este código?",
        recurso: {
          tipo: "codigo",
          contenido: `public static boolean esPrimo(int x) {
    for (int i = 2; i < x; i++) {
        if (x % i == 0) return false;
    }
    return true;
}`,
          lenguaje: "java"
        },
        opciones: ["Comprueba si un número es par", "Comprueba si un número es primo", "Calcula la suma de divisores.", "Devuelve el resto de x entre 2."],
        respuestaCorrecta: 1,
        explicacion: "Este método 'esPrimo' verifica si un número es primo comprobando si tiene algún divisor entre 2 y x-1. Si encuentra un divisor (es decir, si x % i == 0), devuelve falso, indicando que el número no es primo. Si recorre todos los posibles divisores sin encontrar ninguno, devuelve verdadero, indicando que el número es primo."
      },
      {
        id: 3905,
        moduloId: 309,
        pregunta: "¿Qué implica el paso de parámetros por valor?",
        opciones: ["El método modifica directamente el valor original.", "Se pasa una referencia.", "Se copia el valor y no afecta al original.", "Solo se usa con arrays."],
        respuestaCorrecta: 2,
        explicacion: "El paso de parámetros por valor en Java significa que se crea una copia del valor original y se trabaja con esa copia dentro del método. Cualquier modificación que se haga al parámetro dentro del método no afecta al valor original que se pasó como argumento, ya que son variables independientes."
      },
      {
        id: 3906,
        moduloId: 309,
        pregunta: "¿Qué palabra clave permite evitar que un método devuelva un valor?",
        opciones: ["Break", "Void", "Static", "stoc"],
        respuestaCorrecta: 1,
        explicacion: "La palabra clave 'void' se utiliza en la declaración de un método para indicar que el método no devuelve ningún valor. Los métodos declarados como 'void' se utilizan para realizar acciones o tareas sin necesidad de comunicar un resultado al código que los llamó."
      },
      {
        id: 3907,
        moduloId: 309,
        pregunta: "¿Qué hace este código?",
        recurso: {
          tipo: "codigo",
          contenido: `public static void imprimir(int x) {
    if (x > 0) {
        imprimir(x - 1);
        System.out.println(x);
    }
}
imprimir(3);`,
          lenguaje: "java"
        },
        opciones: ["Imprime 3 2 1", "Imprime 1 2 3", "Imprime 0 1 2", "No imprime nada; ya que no entra nunca en el if."],
        respuestaCorrecta: 1,
        explicacion: "Este código define un método recursivo 'imprimir' que imprime números en orden ascendente. Cuando se llama con imprimir(3), primero se llama recursivamente con imprimir(2), luego con imprimir(1) y finalmente con imprimir(0). Como imprimir(0) no entra en el if, comienza a retornar y se ejecuta System.out.println para cada llamada pendiente, imprimiendo 1, luego 2, y finalmente 3."
      },
      {
        id: 3908,
        moduloId: 309,
        pregunta: "¿Qué sucede si no hay caso base en una función recursiva?",
        opciones: ["Se ejecuta una sola vez.", "Se produce un desbordamiento de pila.", "No compila.", "La recursividad se detiene sola."],
        respuestaCorrecta: 1,
        explicacion: "Si una función recursiva no tiene un caso base (una condición que detenga la recursión), seguirá llamándose a sí misma indefinidamente. Esto eventualmente conduce a un desbordamiento de pila (stack overflow), ya que cada llamada recursiva añade un nuevo marco a la pila de llamadas hasta que se agota la memoria disponible para la pila."
      },
      {
        id: 3909,
        moduloId: 309,
        pregunta: "¿Dónde se puede acceder a una variable local?",
        opciones: ["En cualquier parte del programa.", "Solo dentro del método o bloque donde se declara", "Desde todos los métodos.", "Desde el main."],
        respuestaCorrecta: 1,
        explicacion: "Una variable local en Java solo es accesible dentro del método o bloque donde fue declarada. Su ámbito o alcance (scope) está limitado a ese contexto específico y no puede ser accedida desde fuera del mismo. Esto es parte del concepto de encapsulamiento en programación orientada a objetos."
      },
      {
        id: 3910,
        moduloId: 309,
        pregunta: "¿Qué ocurre si modificas una variable entera dentro de un método?",
        opciones: ["Se modifica solo dentro del método", "Depende del tipo de dato", "No se puede", "Se modifica el original"],
        respuestaCorrecta: 0,
        explicacion: "En Java, los tipos primitivos como int, float, double, etc., se pasan por valor a los métodos. Esto significa que cuando modificas el valor de un parámetro primitivo dentro de un método, estás modificando una copia local y no el valor original de la variable que se pasó como argumento. Por lo tanto, la modificación solo existe dentro del método."
      },
      {
        id: 3911,
        moduloId: 309,
        pregunta: "¿Qué ocurre si modificas un array dentro de un método?",
        opciones: ["Se crea una copia", "Depende del tipo de dato", "No se puede", "Se modifica el original"],
        respuestaCorrecta: 3,
        explicacion: "En Java, los arrays se pasan por referencia, lo que significa que se pasa la dirección de memoria donde está almacenado el array. Cuando modificas un elemento del array dentro de un método, estás modificando el array original, no una copia. Por tanto, los cambios realizados dentro del método afectan al array original fuera del método."
      }
    ]
  };

  export default moduloSimBloqueCuatro;