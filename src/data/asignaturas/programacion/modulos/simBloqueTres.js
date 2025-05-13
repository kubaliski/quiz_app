/**
 * Datos del módulo de Estructuras Estáticas e Introducción a los Arrays en Java perteneciente a la asignatura de Programación.
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
export const moduloSimBloqueTres = {
    id: 308,
    nombre: "Estructuras Estáticas: Introducción a los Arrays (Simulacro Bloque 3)",
    asignaturaId: 3,
    esExamen: true,
    descripcion: "Examen sobre estructuras estáticas en Java, enfocado principalmente en arrays unidimensionales y multidimensionales.",
    preguntas: [
      {
        id: 3801,
        moduloId: 308,
        pregunta: "¿Qué muestra por pantalla?",
        recurso: {
          tipo: "codigo",
          contenido: `int[] datos = {4, 7, 2, 9};
System.out.println(datos[2]);`,
          lenguaje: "java"
        },
        opciones: ["4", "2", "7", "9"],
        respuestaCorrecta: 1,
        explicacion: "En Java, los índices de los arrays comienzan en 0. En el array {4, 7, 2, 9}, el elemento en la posición 2 (tercer elemento) es 2. Por tanto, System.out.println(datos[2]) mostrará 2."
      },
      {
        id: 3802,
        moduloId: 308,
        pregunta: "¿Qué valor se imprime?",
        recurso: {
          tipo: "codigo",
          contenido: `int[] valores = {1, 2, 3};
for (int i = 0; i < valores.length; i++) {
    valores[i] = valores[i] * 2;
}
System.out.println(valores[1]);`,
          lenguaje: "java"
        },
        opciones: ["2", "4", "3", "6"],
        respuestaCorrecta: 1,
        explicacion: "El bucle recorre el array y multiplica cada elemento por 2. El array original {1, 2, 3} se convierte en {2, 4, 6}. Luego se imprime el elemento en el índice 1, que es 4 (después de la multiplicación)."
      },
      {
        id: 3803,
        moduloId: 308,
        pregunta: "¿Qué muestra por pantalla?",
        recurso: {
          tipo: "codigo",
          contenido: `int[][] matriz = {
  {1, 2, 3},
  {4, 5, 6}
};
System.out.println(matriz[1][0]);`,
          lenguaje: "java"
        },
        opciones: ["1", "6", "Error en tiempo de ejecución", "4"],
        respuestaCorrecta: 3,
        explicacion: "La expresión matriz[1][0] accede a la segunda fila (índice 1) y al primer elemento de esa fila (índice 0). En la matriz dada, el elemento en la posición [1][0] es 4, que corresponde al primer elemento de la segunda fila."
      },
      {
        id: 3804,
        moduloId: 308,
        pregunta: "¿Qué es un array en Java?",
        opciones: ["Una variable que cambia de tamaño", "Una estructura que almacena datos en posiciones aleatorias", "Una colección ordenada de elementos del mismo tipo", "Una función que agrupa variables"],
        respuestaCorrecta: 2,
        explicacion: "Un array en Java es una estructura de datos que almacena una colección fija de elementos del mismo tipo en una secuencia ordenada. Los elementos se almacenan en posiciones contiguas de memoria y se accede a ellos mediante índices."
      },
      {
        id: 3805,
        moduloId: 308,
        pregunta: "¿Qué tipo de datos se pueden almacenar en un array?",
        opciones: ["Solo enteros", "Datos de diferentes tipos", "Solo cadenas", "Elementos del mismo tipo"],
        respuestaCorrecta: 3,
        explicacion: "En Java, un array está diseñado para almacenar elementos del mismo tipo de datos. Todos los elementos deben ser del mismo tipo declarado al crear el array, ya sea un tipo primitivo (int, double, etc.) o un tipo de objeto."
      },
      {
        id: 3806,
        moduloId: 308,
        pregunta: "¿Cuál es la forma correcta de declarar un array de enteros?",
        opciones: ["int array[];", "array int[];", "int[] = array;", "new int array[];"],
        respuestaCorrecta: 0,
        explicacion: "En Java, hay dos formas correctas de declarar un array: 'int array[];' o 'int[] array;'. Ambas son equivalentes y válidas, aunque la segunda forma (int[] array) es generalmente preferida por ser más clara al leer el tipo de dato."
      },
      {
        id: 3807,
        moduloId: 308,
        pregunta: "¿Qué operador se usa para instanciar un array en Java?",
        opciones: ["Array", "Class", "New", "create"],
        respuestaCorrecta: 2,
        explicacion: "El operador 'new' se utiliza para instanciar o crear un nuevo objeto en Java, incluidos los arrays. Por ejemplo: 'int[] array = new int[10];' crea un nuevo array de enteros con 10 elementos."
      },
      {
        id: 3808,
        moduloId: 308,
        pregunta: "¿Qué valor tiene el índice inicial de un array en Java?",
        opciones: ["Depende del tipo", "1", "-1", "0"],
        respuestaCorrecta: 3,
        explicacion: "En Java, al igual que en la mayoría de los lenguajes de programación, los índices de los arrays comienzan en 0. Esto significa que el primer elemento de un array se encuentra en la posición 0, el segundo en la posición 1, y así sucesivamente."
      },
      {
        id: 3809,
        moduloId: 308,
        pregunta: "¿Qué propiedad permite conocer el tamaño de un array?",
        opciones: ["size()", "getSize()", "Length()", "length"],
        respuestaCorrecta: 3,
        explicacion: "En Java, la propiedad 'length' (sin paréntesis) se utiliza para obtener el tamaño o número de elementos de un array. Es importante destacar que length es una propiedad, no un método, por lo que no lleva paréntesis."
      },
      {
        id: 3810,
        moduloId: 308,
        pregunta: "¿Qué estructura es adecuada para recorrer un array?",
        opciones: ["Switch", "try-catch", "For", "class"],
        respuestaCorrecta: 2,
        explicacion: "La estructura más adecuada para recorrer un array es un bucle, como el bucle 'for'. Este permite iterar sobre cada elemento del array utilizando un índice que se incrementa en cada iteración. También se puede usar un bucle 'for-each' o un bucle 'while'."
      },
      {
        id: 3811,
        moduloId: 308,
        pregunta: "¿Qué sucede si accedemos a un índice fuera de los límites del array?",
        opciones: ["Se devuelve null", "Se lanza una excepción", "Se devuelve -1", "Se ignora"],
        respuestaCorrecta: 1,
        explicacion: "En Java, si intentamos acceder a un índice que está fuera de los límites del array (negativo o mayor/igual que la longitud del array), se lanzará una excepción del tipo ArrayIndexOutOfBoundsException en tiempo de ejecución."
      },
      {
        id: 3812,
        moduloId: 308,
        pregunta: "¿Cuál es una forma válida de inicializar un array con valores?",
        opciones: ["int[] datos = {1, 2, 3};", "int datos = [1, 2, 3];", "datos = new int(3);", "datos = array(1, 2, 3);"],
        respuestaCorrecta: 0,
        explicacion: "La forma 'int[] datos = {1, 2, 3};' es una forma válida de declarar e inicializar un array con valores específicos en Java. Esta sintaxis se conoce como inicialización de array con lista de valores o inicialización de array literal."
      },
      {
        id: 3813,
        moduloId: 308,
        pregunta: "¿Qué tipo de estructura representa un array bidimensional?",
        opciones: ["Vector", "Matriz", "objeto JSON", "En java no existen arrays de más de una dimensión"],
        respuestaCorrecta: 1,
        explicacion: "Un array bidimensional en Java representa una matriz, es decir, una estructura de datos con filas y columnas. Técnicamente, es un array de arrays, donde cada elemento del array principal es a su vez otro array."
      },
      {
        id: 3814,
        moduloId: 308,
        pregunta: "¿Cuál es la forma correcta de declarar un array bidimensional?",
        opciones: ["matriz int[];", "array int[2][2];", "int[] matriz[];", "int[][] matriz;"],
        respuestaCorrecta: 3,
        explicacion: "La forma correcta de declarar un array bidimensional en Java es 'int[][] matriz;'. Esta declaración indica que 'matriz' es una variable que puede referenciar a un array bidimensional de enteros."
      },
      {
        id: 3815,
        moduloId: 308,
        pregunta: "¿Cómo se accede al elemento en la fila 2, columna 3 de un array 2D?",
        opciones: ["array[3][2]", "array(2,3)", "array[1][2]", "array{2}{3}"],
        respuestaCorrecta: 2,
        explicacion: "En Java, para acceder al elemento en la fila 2, columna 3 de un array bidimensional, debemos usar 'array[1][2]'. Esto es porque los índices comienzan en 0, por lo que la fila 2 es el índice 1 y la columna 3 es el índice 2."
      },
      {
        id: 3816,
        moduloId: 308,
        pregunta: "¿Qué hace el método clone() con un array?",
        opciones: ["Lo borra", "Lo intercambia", "Crea una copia nueva del array", "Los dos arrays se convierten en uno mismo"],
        respuestaCorrecta: 2,
        explicacion: "El método clone() en Java crea y devuelve una copia nueva del array. Esta es una copia superficial, lo que significa que los elementos del array son los mismos objetos, pero la estructura del array es una nueva instancia."
      },
      {
        id: 3817,
        moduloId: 308,
        pregunta: "¿Cuál es el número de elementos en un array 3x3x3?",
        opciones: ["9", "18", "27", "30"],
        respuestaCorrecta: 2,
        explicacion: "Un array tridimensional 3x3x3 tiene un total de 3 * 3 * 3 = 27 elementos. Esto se debe a que tiene 3 planos, cada uno con 3 filas, y cada fila con 3 columnas, lo que resulta en 27 elementos en total."
      },
      {
        id: 3818,
        moduloId: 308,
        pregunta: "¿Qué método se usa para obtener la posición (índice) de un valor en un array?",
        opciones: ["indexOf()", "getIndex()", "buscar()", "No existe, debe implementarse manualmente"],
        respuestaCorrecta: 3,
        explicacion: "En Java, los arrays primitivos no tienen un método incorporado para encontrar el índice de un valor específico. Para encontrar un valor en un array, se debe implementar manualmente un algoritmo de búsqueda, como un bucle que recorra el array y compare cada elemento."
      },
      {
        id: 3819,
        moduloId: 308,
        pregunta: "¿Cuál es la forma correcta de recorrer un array llamado notas?",
        opciones: ["for (int i = 1; i < notas.length; i++)", "for (int i = 0; i < notas.length; i++)", "for (int i = 0; i <= notas.length; i++)", "foreach (int i in notas)"],
        respuestaCorrecta: 1,
        explicacion: "La forma correcta de recorrer un array en Java es 'for (int i = 0; i < notas.length; i++)'. Esto inicia en el índice 0, continúa mientras i sea menor que la longitud del array (evitando así índices fuera de rango), e incrementa i en cada iteración."
      },
      {
        id: 3820,
        moduloId: 308,
        pregunta: "¿Qué ocurre si igualamos dos arrays así?: int[] b = a;",
        opciones: ["Se copian los valores", "Apuntan al mismo espacio de memoria", "Se clonan automáticamente", "No compila"],
        respuestaCorrecta: 1,
        explicacion: "Al asignar un array a otro con 'int[] b = a;', ambas variables apuntan al mismo espacio de memoria. No se crea una copia del array; ambas variables referencian el mismo array. Por lo tanto, cualquier cambio realizado a través de una variable afectará al array accedido por la otra variable."
      }
    ]
  };

  export default moduloSimBloqueTres;