/**
 * Datos del módulo de Herencia, Polimorfismo, Interfaces y Clases Abstractas en Java perteneciente a la asignatura de Programación.
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
export const moduloSimBloqueOcho = {
    id: 313,
    nombre: "Control de Excepciones (Bloque 8)",
    asignaturaId: 3,
    esExamen: true,
    descripcion: "Examen centrado en el manejo de errores y excepciones en Java. Se evaluarán conceptos como try-catch, jerarquía de excepciones y buenas prácticas en el control de flujo mediante excepciones.",
    preguntas: [
      {
        id: 31301,
        moduloId: 313,
        pregunta: "¿Para qué sirve un bloque try-catch en Java?",
        opciones: [
    "Para ordenar excepciones",
    "Para evitar que el programa termine abruptamente ante un error",
    "Para ejecutar código en paralelo",
    "Para mejorar el rendimiento al no tener que utilizar tantos bucles"
  ],
        respuestaCorrecta: 1,
        explicacion: "El bloque try-catch en Java se utiliza para manejar excepciones. El código que puede generar una excepción se coloca dentro del bloque try, y si ocurre una excepción, el bloque catch permite capturarla y manejarla adecuadamente, evitando que el programa termine abruptamente.",
      },
      {
        id: 31302,
        moduloId: 313,
        pregunta: "¿Qué ocurre si no se captura una excepción no controlada (unchecked)?",
        opciones: [
    "El programa se detiene con un error en tiempo de ejecución",
    "El compilador da error",
    "Se ignora automáticamente",
    "Se convierte en una excepción controlada"
  ],
        respuestaCorrecta: 0,
        explicacion: "Si no se captura una excepción no controlada (unchecked), como NullPointerException o ArithmeticException, el programa se detiene abruptamente con un error en tiempo de ejecución. A diferencia de las excepciones controladas (checked), no es obligatorio capturarlas o declararlas en la firma del método, pero si ocurren, y no se manejan, causan la terminación del programa.",
      },
      {
        id: 31303,
        moduloId: 313,
        pregunta: "¿Cuál de estas estructuras es válida para el manejo de excepciones?",
        opciones: [
    "try {} then {}",
    "catch {} try {}",
    "if (error) {} else {}",
    "try {} catch (Exception e) {}"
  ],
        respuestaCorrecta: 3,
        explicacion: "La estructura válida para el manejo de excepciones en Java es 'try {} catch (Exception e) {}'. El bloque try contiene el código que podría generar una excepción, y el bloque catch captura y maneja esa excepción. Las otras opciones no son sintaxis válidas en Java para el tratamiento de errores.",
      },
      {
        id: 31304,
        moduloId: 313,
        pregunta: "¿Qué hace el bloque finally?",
        opciones: [
    "Se ejecuta solo si ocurre una excepción",
    "Se ejecuta siempre, ocurra o no la excepción",
    "Es obligatorio en todo try-catch",
    "Solo funciona con IOException"
  ],
        respuestaCorrecta: 1,
        explicacion: "El bloque 'finally' en Java se ejecuta siempre, tanto si ocurre una excepción como si no. Su principal objetivo es asegurar la ejecución de código de limpieza, como cerrar archivos o liberar recursos, independientemente de si hubo un error o no durante la ejecución del bloque try.",
      },
      {
        id: 31305,
        moduloId: 313,
        pregunta: "¿Qué imprime este código?",
        recurso: {
          tipo: "codigo",
          lenguaje: "java",
          contenido: `try {
    int a = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Error: " + e.getMessage());
}`},
        opciones: [
    "Error: null",
    "Error: / by zero",
    "0",
    "Error de compilación"
        ],
        respuestaCorrecta: 1,
        explicacion: "El código intenta dividir 10 entre 0, lo que lanza la excepción 'ArithmeticException'. Esta es capturada por el bloque `catch`, y se imprime el mensaje de error asociado: 'Error: / by zero'. El método `getMessage()` devuelve el mensaje estándar del sistema para esta excepción.",
      },
      {
        id: 31306,
        moduloId: 313,
        pregunta: "¿Qué clase es la base de todas las excepciones en Java?",
        opciones: [
    "Throwable",
    "Error",
    "RuntimeException",
    "Exception"
  ],
        respuestaCorrecta: 0,
        explicacion: "En Java, la clase base de todas las excepciones y errores es 'Throwable'. De ella heredan dos ramas principales: 'Error' (para errores graves del sistema) y 'Exception' (para situaciones que un programa puede manejar). Por lo tanto, 'Throwable' es la raíz de toda la jerarquía de manejo de errores. EN EL PDF PONE QUE LA RESPUESTA ES EXCEPTION, PERO EN JAVA LA CLASE BASE DE TODAS LAS EXCEPCIONES ES THROWABLE.",
      },
      {
        id: 31307,
        moduloId: 313,
        pregunta: "¿Qué tipo de excepciones se deben capturar obligatoriamente?",
        opciones: [
    "Unchecked",
    "Checked",
    "RuntimeException",
    "NullPointerException"
  ],
        respuestaCorrecta: 1,
        explicacion: "Las excepciones de tipo 'checked' deben ser capturadas obligatoriamente porque el compilador de Java lo exige. Estas excepciones ocurren fuera del control del programa (por ejemplo, errores de E/S como IOException) y deben manejarse mediante un bloque try-catch o declararse con throws. Si no se manejan, el código no compilará. En cambio, las 'unchecked' (como NullPointerException o RuntimeException) no es obligatorio capturarlas.",
      },
      {
        id: 31308,
        moduloId: 313,
        pregunta: "¿Cuál de estas es una excepción no controlada (unchecked)?",
        opciones: [
    "IOException",
    "SQLException",
    "FileNotFoundException",
    "ArithmeticException"
  ],
        respuestaCorrecta: 3,
        explicacion: "ArithmeticException es una excepción no controlada (unchecked) en Java. Esto significa que no es obligatorio capturarla con un bloque try-catch ni declararla con throws. Las excepciones unchecked extienden de RuntimeException. En cambio, IOException, SQLException y FileNotFoundException son checked exceptions, que sí deben ser manejadas o declaradas.",
      },
      {
        id: 31309,
        moduloId: 313,
        pregunta: "¿Cuál de estas excepciones debe manejarse con try-catch o declararse con throws?",
        opciones: [
    "NullPointerException",
    "ArithmeticException",
    "FileNotFoundException",
    "ArrayIndexOutOfBoundsException"
  ],
        respuestaCorrecta: 2,
        explicacion: "FileNotFoundException es una excepción controlada (checked) en Java. Las excepciones checked deben ser obligatoriamente capturadas con try-catch o declaradas en la firma del método usando throws. Las otras opciones, como NullPointerException o ArithmeticException, son excepciones no controladas (unchecked) y no requieren manejo obligatorio.",
      },
      {
        id: 31310,
        moduloId: 313,
        pregunta: "¿Qué indica un stack trace al producirse una excepción?",
        opciones: [
    "La pila de llamadas hasta el punto de error",
    "El tiempo de ejecución",
    "El contenido de los arrays",
    "Las excepciones que no fueron lanzadas"
  ],
        respuestaCorrecta: 0,
        explicacion: "Un stack trace en Java muestra la secuencia de llamadas a métodos (la pila de ejecución) que condujeron hasta el punto donde se lanzó la excepción. Esto ayuda a los desarrolladores a localizar la línea exacta donde ocurrió el error y a entender el contexto en el que sucedió.",
      },
      {
        id: 31311,
        moduloId: 313,
        pregunta: "¿Qué es una excepción personalizada?",
        opciones: [
    "Una excepción del sistema renombrada",
    "Una clase que hereda de Exception o RuntimeException creada por el programador",
    "Una excepción automática",
    "Un error de sintaxis, que se soluciona al hacer throws desde la clase FileException"
  ],
        respuestaCorrecta: 1,
        explicacion: "Una excepción personalizada en Java es una clase definida por el programador que extiende de 'Exception' (para checked exceptions) o 'RuntimeException' (para unchecked exceptions). Se usa cuando se desea lanzar errores específicos que no están cubiertos por las excepciones estándar de Java, permitiendo un control más claro y contextual del flujo de errores.",
      },
      {
        id: 31312,
        moduloId: 313,
        pregunta: "¿Cómo se lanza una excepción personalizada?",
        opciones: [
    "throw new MyException;",
    'throw new MiExcepcion("mensaje");',
    "throws MiExcepcion();",
    "launch MiExcepcion();"
  ],
        respuestaCorrecta: 1,
        explicacion: "La manera correcta de lanzar una excepción personalizada en Java es utilizando la palabra clave throw junto con la creación de una instancia de la excepción personalizada. La opción 2 es correcta porque lanza una excepción llamada MiExcepcion con un mensaje de error."
      },
      {
        id: 31313,
        moduloId: 313,
        pregunta: "¿Cuál es el error en el siguiente código?",
        recurso: {
          tipo: "codigo",
          lenguaje: "java",
          contenido: `try {
    int a = 10 / 0;
} catch {
      System.out.println("Error");
}`},
        opciones: [
    "El bloque try está mal indentado",
    'System.out.println no puede usarse en catch',
    "No se puede dividir en un bloque try",
    "Falta el tipo de excepción entre paréntesis en catch"
  ],
        respuestaCorrecta: 3,
        explicacion: "En Java, un bloque catch debe indicar entre paréntesis el tipo de excepción que desea capturar. En el ejemplo proporcionado, falta el tipo de excepción, como por ejemplo: catch (ArithmeticException e). Por eso el código no compilará. La sintaxis correcta sería:\n\ntry {\n    int a = 10 / 0;\n} catch (ArithmeticException e) {\n    System.out.println(\"Error\");\n}"
      },
      {
        id: 31314,
        moduloId: 313,
        pregunta: "¿Cuál es el problema en este código?",
        recurso: {
          tipo: "codigo",
          lenguaje: "java",
          contenido: `public static void main(String[] args) {
      FileReader fr = new FileReader("datos.txt");
}`},
        opciones: [
    "Falta manejar la excepción con try-catch o declarar throws IOException",
    "FileReader solo acepta ficheros .xml",
    "El método main no puede tener código con archivos",
    "FileReader requiere usar System.in"
  ],
      respuestaCorrecta: 0,
      explicacion: "La clase FileReader puede lanzar una excepción comprobada (FileNotFoundException), que a su vez es una subclase de IOException. En Java, las excepciones comprobadas deben manejarse explícitamente con un bloque try-catch o declararse en la firma del método con throws. En este caso, el método main intenta crear un FileReader sin manejar la excepción, lo que provoca un error de compilación.",
      },
      {
        id: 31315,
        moduloId: 313,
        pregunta: "¿Qué error contiene este código?",
        recurso: {
          tipo: "codigo",
          lenguaje: "java",
          contenido: `try {
    int[] array = new int[3];
    array[5] = 10;
} catch (IndexOutOfBoundsException e) {
  System.out.println("Fuera de rango");
}`},
        opciones: [
          "El tipo de excepción debe ser ArrayIndexOutOfBoundsException para capturar correctamente",
          "Falta el bloque finally",
          "El array debe declararse fuera del try",
          "El try no puede tener arrays"
        ],
        respuestaCorrecta: 0,
        explicacion: "El error es que el catch está usando IndexOutOfBoundsException, que es una excepción muy general. Como el error real es por pasarse del límite de un array, lo correcto es usar ArrayIndexOutOfBoundsException, que es más específica y clara. Aunque el código funciona, es mejor capturar la excepción exacta para que sea más fácil entender qué está fallando.",
      },
      {
        id: 31316,
        moduloId: 313,
        pregunta: "¿Qué ocurre si se ejecuta este código?",
        recurso: {
          tipo: "codigo",
          lenguaje: "java",
          contenido: `try {
    System.out.println("Inicio");
} finally {
    System.out.println("Final");
}`},
        opciones: [
          "Lanza una excepción",
          "Solo imprime 'Final'",
          "Imprime ambos mensajes: 'Inicio' y luego 'Final'",
          "No compila sin catch"
        ],
        respuestaCorrecta: 2,
        explicacion: "El bloque 'finally' siempre se ejecuta, tanto si ocurre una excepción como si no. En este caso no hay excepción, por lo que se imprime primero 'Inicio' desde el bloque try y luego 'Final' desde el bloque finally. No es obligatorio incluir un bloque catch si se usa finally.",
      },
      {
        id: 31317,
        moduloId: 313,
        pregunta: "¿Cuál es el error en esta declaración de excepción personalizada?",
        recurso: {
          tipo: "codigo",
          lenguaje: "java",
          contenido: `public class MiExcepcion extends Exception {
  public void MiExcepcion(String mensaje) {
      super(mensaje);
  }
}`},
        opciones: [
          "Exception no se puede extender",
          "falta implementar un método",
          "super(mensaje) debe ir en un método main",
          "El constructor tiene void: debería ser un constructor real, sin tipo de retorno"
        ],
        respuestaCorrecta: 3,
        explicacion: "En Java, los constructores no deben tener tipo de retorno. En el código mostrado, el supuesto constructor tiene 'void', lo cual lo convierte en un método normal en lugar de un constructor. Para que sea un constructor válido de la clase 'MiExcepcion', debe declararse simplemente como 'public MiExcepcion(String mensaje)' sin 'void'.",
      }
    ]
  };

export default moduloSimBloqueOcho;