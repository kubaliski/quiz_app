/**
 * Datos del módulo de Fundamentos de Java perteneciente a la asignatura de Programación.
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
 * // Importar el módulo de Fundamentos de Java
 * import moduloFundamentosJava from '@data/modulos/fundamentosJava';
 *
 * function PreguntasAleatorias() {
 *   // Seleccionar 5 preguntas aleatorias del módulo
 *   const preguntasAleatorias = moduloFundamentosJava.preguntas
 *     .sort(() => 0.5 - Math.random())
 *     .slice(0, 5);
 *
 *   return (
 *     <div>
 *       <h2>{moduloFundamentosJava.nombre}</h2>
 *       {preguntasAleatorias.map(pregunta => (
 *         <QuestionCard key={pregunta.id} pregunta={pregunta} />
 *       ))}
 *     </div>
 *   );
 * }
 */
export const moduloFundamentosJava = {
    id: 303,
    nombre: "Fundamentos de Java (Bloque 1)",
    asignaturaId: 3,
    esExamen: false,
    descripcion: "Estructuras de control, arrays, strings, métodos y funciones en Java, incluyendo sus operaciones y usos principales.",
    preguntas: [
      // Sección 1: Estructuras de Control en Java
      {
        id: 3201,
        moduloId: 303,
        pregunta: "¿Qué clase en Java se utiliza para recibir entrada de datos desde la consola?",
        opciones: ["System.out", "BufferedReader", "Scanner", "JOptionPane"],
        respuestaCorrecta: 2,
        explicacion: "La clase Scanner, disponible en el paquete java.util, se utiliza comúnmente para recibir entrada de datos desde la consola en Java. Permite leer diferentes tipos de datos (enteros, cadenas, etc.) directamente desde el teclado."
      },
      {
        id: 3202,
        moduloId: 303,
        pregunta: "¿Cuál de las siguientes estructuras de control se utiliza para tomar decisiones en un programa Java?",
        opciones: ["for", "while", "if-else", "do-while"],
        respuestaCorrecta: 2,
        explicacion: "La estructura if-else se utiliza para tomar decisiones en Java. Permite ejecutar diferentes bloques de código dependiendo de si una condición es verdadera o falsa, implementando así la lógica de decisión en los programas."
      },
      {
        id: 3203,
        moduloId: 303,
        pregunta: "¿Cuál será la salida del siguiente código?",
        recurso: {
          tipo: "codigo",
          contenido: `public class Test {
    public static void main(String[] args) {
        int x = 5;
        if (x > 2) {
            if (x < 10)
                System.out.println("A");
            else
                System.out.println("B");
        }
    }
}`,
          lenguaje: "java"
        },
        opciones: ["A", "B", "A B", "No compila"],
        respuestaCorrecta: 0,
        explicacion: "El código imprime 'A'. Primero evalúa si x > 2, que es verdadero (x=5). Luego dentro de ese bloque, evalúa si x < 10, que también es verdadero, por lo que imprime 'A'."
      },
      {
        id: 3204,
        moduloId: 303,
        pregunta: "¿Cuál es la diferencia entre while y do-while?",
        opciones: ["while evalúa la condición al final del bucle, do-while al inicio", "do-while evalúa la condición al final, mientras que while la evalúa antes de entrar en el bucle", "Ambos funcionan de la misma manera", "Ninguna de las anteriores"],
        respuestaCorrecta: 1,
        explicacion: "La principal diferencia es que while evalúa la condición antes de ejecutar el bloque de código, por lo que si la condición es falsa inicialmente, el código dentro del bucle nunca se ejecutará. En cambio, do-while ejecuta el bloque al menos una vez y luego evalúa la condición para decidir si continúa ejecutándose."
      },
      {
        id: 3205,
        moduloId: 303,
        pregunta: "En la estructura switch, ¿qué sucede si no se incluye la sentencia break en cada case?",
        opciones: ["El programa lanza un error", "Se ejecuta únicamente la primera opción válida", "Se ejecutan todos los case hasta encontrar un break o finalizar el switch", "No se ejecuta ningún case"],
        respuestaCorrecta: 2,
        explicacion: "Si no se incluye la sentencia break en cada case de un switch, ocurre el fenómeno conocido como 'fall-through'. Esto significa que, una vez que se encuentra un case que coincide, se ejecutarán todas las instrucciones de ese case y de los siguientes, hasta encontrar un break o finalizar el switch."
      },
      {
        id: 3206,
        moduloId: 303,
        pregunta: "¿Cuál de las siguientes estructuras de control permite iteraciones?",
        opciones: ["if", "switch", "while", "try-catch"],
        respuestaCorrecta: 2,
        explicacion: "La estructura while es una estructura de control que permite iteraciones (repeticiones). Ejecuta un bloque de código repetidamente mientras una condición especificada sea verdadera, lo que permite crear bucles."
      },
      {
        id: 3207,
        moduloId: 303,
        pregunta: "¿Qué imprimirá este código?",
        recurso: {
          tipo: "codigo",
          contenido: `public class Test {
    public static void main(String[] args) {
        int[] nums = {2, 4, 6, 8, 10};
        System.out.println(nums[2] + nums[4]);
    }
}`,
          lenguaje: "java"
        },
        opciones: ["6", "10", "16", "18"],
        respuestaCorrecta: 2,
        explicacion: "El código imprime la suma de los elementos en los índices 2 y 4 del array. nums[2] es 6 (el tercer elemento, ya que el índice inicia en 0) y nums[4] es 10 (el quinto elemento). La suma 6 + 10 es 16."
      },
      {
        id: 3208,
        moduloId: 303,
        pregunta: "¿Cuál es la diferencia entre break y continue en un bucle?",
        opciones: ["break detiene la ejecución del bucle y continue solo salta una iteración", "continue finaliza el programa y break reinicia el bucle", "Ambos finalizan el bucle inmediatamente", "No hay diferencia"],
        respuestaCorrecta: 0,
        explicacion: "break detiene la ejecución del bucle por completo, saliendo de él y continuando con el código que sigue después del bucle. continue, por otro lado, solo salta la iteración actual y continúa con la siguiente iteración del bucle."
      },

      // Sección 2: Arrays y Strings
      {
        id: 3209,
        moduloId: 303,
        pregunta: "¿Cómo se declara un array en Java?",
        opciones: ["array[] nombre = new array[10];", "int[] nombre = new int[10];", "int nombre[10];", "new int array[10];"],
        respuestaCorrecta: 1,
        explicacion: "La forma correcta de declarar un array en Java es 'int[] nombre = new int[10];'. Esta sintaxis crea un array de enteros con 10 elementos. También es válido 'int nombre[] = new int[10];', aunque la primera forma es generalmente preferida."
      },
      {
        id: 3210,
        moduloId: 303,
        pregunta: "¿Qué valor tiene vector.length si declaramos int[] vector = new int[5];?",
        opciones: ["4", "5", "Depende de los valores almacenados", "No es posible conocerlo"],
        respuestaCorrecta: 1,
        explicacion: "La propiedad length de un array en Java devuelve el tamaño con el que fue creado, independientemente de los valores que contenga. Para un array declarado como 'int[] vector = new int[5];', vector.length devuelve 5."
      },
      {
        id: 3211,
        moduloId: 303,
        pregunta: "¿Qué método de la clase Arrays se usa para ordenar un array en Java?",
        opciones: ["sort()", "order()", "arrange()", "compare()"],
        respuestaCorrecta: 0,
        explicacion: "El método sort() de la clase Arrays se utiliza para ordenar un array en Java. Por ejemplo, para ordenar un array de enteros 'int[] numeros', se usaría 'Arrays.sort(numeros);'. Este método ordena los elementos en orden ascendente."
      },
      {
        id: 3212,
        moduloId: 303,
        pregunta: "¿Qué método de la clase String permite extraer una subcadena?",
        opciones: ["extract()", "substring()", "cut()", "trim()"],
        respuestaCorrecta: 1,
        explicacion: "El método substring() de la clase String permite extraer una subcadena. Puede usarse de dos formas: substring(int beginIndex) extrae desde el índice especificado hasta el final, y substring(int beginIndex, int endIndex) extrae desde beginIndex hasta endIndex-1."
      },
      {
        id: 3213,
        moduloId: 303,
        pregunta: "¿Qué devuelve el método compareTo() de la clase String?",
        opciones: ["true si los Strings son iguales", "Un número positivo, negativo o 0, dependiendo del orden lexicográfico", "Siempre un número positivo", "Siempre un número negativo"],
        respuestaCorrecta: 1,
        explicacion: "El método compareTo() de la clase String compara dos cadenas lexicográficamente y devuelve: un número negativo si la cadena que llama es lexicográficamente menor que la especificada, cero si son iguales, o un número positivo si la cadena que llama es lexicográficamente mayor."
      },
      {
        id: 3214,
        moduloId: 303,
        pregunta: "¿Qué diferencia hay entre equals() y == en la comparación de Strings?",
        opciones: ["== compara referencias y equals() el contenido", "equals() compara referencias y == compara contenido", "Ambos hacen lo mismo", "Ninguna"],
        respuestaCorrecta: 0,
        explicacion: "En Java, == compara si dos referencias de String apuntan al mismo objeto en memoria (comparación de identidad), mientras que equals() compara si el contenido de dos Strings es idéntico (comparación de igualdad). Para comparar el contenido de las cadenas, se debe usar equals()."
      },
      {
        id: 3215,
        moduloId: 303,
        pregunta: "¿Cuál es la estructura correcta para declarar una matriz 3x3 en Java?",
        opciones: ["int[][] matriz = new int(3,3);", "int matriz[][] = new int[3][3];", "matriz = int[3,3];", "new int matriz[3][3];"],
        respuestaCorrecta: 1,
        explicacion: "La forma correcta de declarar una matriz 3x3 en Java es 'int matriz[][] = new int[3][3];' o 'int[][] matriz = new int[3][3];'. Ambas formas son equivalentes y crean una matriz bidimensional con 3 filas y 3 columnas."
      },
      {
        id: 3216,
        moduloId: 303,
        pregunta: "¿Qué método de la clase Arrays se usa para copiar un array en otro?",
        opciones: ["copy()", "arraycopy()", "clone()", "copyArray()"],
        respuestaCorrecta: 1,
        explicacion: "El método System.arraycopy() se utiliza para copiar elementos de un array a otro. El método arraycopy() recibe cinco parámetros: el array fuente, el índice inicial en la fuente, el array destino, el índice inicial en el destino y la cantidad de elementos a copiar."
      },
      {
        id: 3217,
        moduloId: 303,
        pregunta: "¿Qué devuelve el método length de un array?",
        opciones: ["La cantidad de elementos", "El tamaño en bytes", "Siempre devuelve 0", "La cantidad de elementos no inicializados"],
        respuestaCorrecta: 0,
        explicacion: "La propiedad length de un array en Java devuelve la cantidad de elementos que puede contener el array, es decir, el tamaño con el que fue creado. Es importante notar que length es una propiedad, no un método, por lo que se accede como array.length y no array.length()."
      },

      // Sección 3: Métodos y Funciones
      {
        id: 3218,
        moduloId: 303,
        pregunta: "¿Qué palabra clave indica que un método no devuelve ningún valor?",
        opciones: ["null", "empty", "void", "return"],
        respuestaCorrecta: 2,
        explicacion: "La palabra clave 'void' en la declaración de un método indica que este no devuelve ningún valor. Por ejemplo, 'public void mostrarMensaje()' define un método que realiza una acción pero no retorna un resultado."
      },
      {
        id: 3219,
        moduloId: 303,
        pregunta: "¿Cómo se llama al proceso de dividir un problema grande en pequeños subproblemas en programación?",
        opciones: ["Recursividad", "Modularidad", "Iteración", "Compilación"],
        respuestaCorrecta: 1,
        explicacion: "La modularidad es el proceso de dividir un problema grande en subproblemas más pequeños y manejables. Esto facilita el desarrollo, mantenimiento y reutilización del código, ya que cada módulo o función se encarga de resolver una parte específica del problema."
      },
      {
        id: 3220,
        moduloId: 303,
        pregunta: "¿Cuál es la sintaxis correcta para definir un método en Java?",
        opciones: ["int metodo(int x, int y) { return x + y; }", "metodo(int x, int y) { return x + y; }", "int metodo() { return x + y; }", "metodo() int { return x + y; }"],
        respuestaCorrecta: 0,
        explicacion: "La sintaxis correcta para definir un método en Java es: tipoDeRetorno nombreDelMetodo(listaDeParametros) { cuerpoDelMetodo }. En el ejemplo, 'int metodo(int x, int y) { return x + y; }' define un método llamado 'metodo' que recibe dos parámetros enteros y devuelve su suma."
      },
      {
        id: 3221,
        moduloId: 303,
        pregunta: "¿Qué se usa para indicar que un método pertenece a la clase y no a un objeto específico?",
        opciones: ["public", "void", "static", "private"],
        respuestaCorrecta: 2,
        explicacion: "La palabra clave 'static' se usa para indicar que un método pertenece a la clase y no a una instancia específica (objeto). Los métodos estáticos pueden ser llamados directamente usando el nombre de la clase, sin necesidad de crear un objeto. Por ejemplo, Math.sqrt()."
      },
      {
        id: 3222,
        moduloId: 303,
        pregunta: "¿Cuál es la diferencia entre paso por valor y paso por referencia?",
        opciones: ["En paso por valor se modifica el valor original, en paso por referencia no", "En paso por referencia se envía la dirección de memoria del objeto", "Ambos funcionan igual", "Java no admite paso por referencia"],
        respuestaCorrecta: 1,
        explicacion: "En el paso por valor, se pasa una copia del valor real a un método. En el paso por referencia, se pasa la dirección de memoria donde está almacenado el objeto. En Java, los tipos primitivos se pasan por valor, mientras que los objetos se pasan por referencia (aunque técnicamente, se pasa el valor de la referencia)."
      },
      {
        id: 3223,
        moduloId: 303,
        pregunta: "¿Qué permite el uso de parámetros en métodos?",
        opciones: ["Aumentar el rendimiento del código", "Hacer que los métodos sean reutilizables", "Crear variables globales", "Evitar errores en el código"],
        respuestaCorrecta: 1,
        explicacion: "El uso de parámetros en métodos permite que sean más reutilizables y flexibles, ya que pueden comportarse de manera diferente según los valores pasados. Esto facilita la creación de código modular y evita la duplicación de código."
      },
      {
        id: 3224,
        moduloId: 303,
        pregunta: "¿Qué sucede si en un método que devuelve int no hay una sentencia return?",
        opciones: ["No compila", "Devuelve 0 por defecto", "Se ejecuta sin errores", "Devuelve null"],
        respuestaCorrecta: 0,
        explicacion: "Si un método está declarado para devolver un valor (como int) pero no incluye una sentencia return, el compilador generará un error. Todo método que no sea void debe incluir una sentencia return que devuelva un valor del tipo apropiado."
      },
      {
        id: 3225,
        moduloId: 303,
        pregunta: "¿Qué es la recursividad en Java?",
        opciones: ["Un método que llama a otro método", "Un método que se llama a sí mismo", "Una estructura de control", "Un tipo de array"],
        respuestaCorrecta: 1,
        explicacion: "La recursividad es una técnica de programación donde un método se llama a sí mismo para resolver un problema. Esto es útil para situaciones donde un problema se puede dividir en casos más simples del mismo problema, como en algoritmos de búsqueda, ordenación o recorridos de estructuras de datos."
      },
      {
        id: 3226,
        moduloId: 303,
        pregunta: "¿Qué problema puede causar el uso incorrecto de recursividad?",
        opciones: ["Código más lento", "Stack Overflow", "Errores de compilación", "Nada, la recursividad siempre es segura"],
        respuestaCorrecta: 1,
        explicacion: "El uso incorrecto de la recursividad puede causar un desbordamiento de pila (Stack Overflow) si las llamadas recursivas son muy profundas o no tienen una condición de terminación adecuada. Esto ocurre porque cada llamada recursiva consume espacio en la pila de llamadas."
      },
      {
        id: 3227,
        moduloId: 303,
        pregunta: "¿Qué palabra clave se usa para definir un paquete en Java?",
        opciones: ["import", "package", "static", "class"],
        respuestaCorrecta: 1,
        explicacion: "La palabra clave 'package' se usa para definir el paquete al que pertenece una clase en Java. Debe ser la primera declaración en un archivo de código fuente (antes de cualquier import o declaración de clase) y especifica el espacio de nombres para la clase."
      },
      {
        id: 3228,
        moduloId: 303,
        pregunta: "¿Cuál será la salida del siguiente código?",
        recurso: {
          tipo: "codigo",
          contenido: `public class Test {
    public static void main(String[] args) {
        int i = 0;
        while (i < 3) {
            System.out.print(i + " ");
            i++;
        }
    }
}`,
          lenguaje: "java"
        },
        opciones: ["0 1 2", "1 2 3", "0 1 2 3", "No compila"],
        respuestaCorrecta: 0,
        explicacion: "El código imprime '0 1 2'. El bucle while comienza con i=0 y continúa mientras i sea menor que 3. En cada iteración, imprime el valor de i y luego lo incrementa. El bucle se ejecuta para i=0, i=1, i=2 y termina cuando i=3 (ya que 3 no es menor que 3)."
      },
      {
        id: 3229,
        moduloId: 303,
        pregunta: "¿Cuál de las siguientes afirmaciones sobre métodos sobrecargados es correcta?",
        opciones: ["Deben tener el mismo nombre y mismos parámetros", "Pueden tener el mismo nombre con diferentes parámetros", "No pueden tener más de dos versiones", "Son iguales a los métodos estáticos"],
        respuestaCorrecta: 1,
        explicacion: "Los métodos sobrecargados son métodos que tienen el mismo nombre pero diferentes listas de parámetros (diferente número o tipo de parámetros). Esto permite definir múltiples comportamientos para un método según los argumentos pasados, aumentando la flexibilidad y legibilidad del código."
      },
      {
        id: 3230,
        moduloId: 303,
        pregunta: "¿Qué tipo de acceso permite que un método sea usado solo dentro de la misma clase?",
        opciones: ["public", "private", "protected", "static"],
        respuestaCorrecta: 1,
        explicacion: "El modificador de acceso 'private' restringe el uso de un método solo a la clase en la que está definido. Los métodos privados no son accesibles desde otras clases, ni siquiera desde subclases, lo que los hace útiles para implementar detalles internos de la clase."
      }
    ]
  };

  export default moduloFundamentosJava;