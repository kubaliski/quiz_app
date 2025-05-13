/**
 * Datos del módulo de Programación en Java.
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
export const moduloSimulacroVirtualLab = {
  id: 314,
  nombre: "Simulacro Virtual Lab (13/05/2025)",
  asignaturaId: 3,
  esExamen: true,
  descripcion: "Conceptos fundamentales de Java: excepciones, estructuras de datos, clases, archivos, interfaces y POO.",
  preguntas: [
    {
      id: 31401,
      moduloId: 314,
      pregunta: "¿Cuál de estas excepciones es no comprobada (unchecked)?",
      opciones: [
        "ArithmeticException",
        "FileNotFoundException",
        "IOException",
        "SQLException"
      ],
      respuestaCorrecta: 0,
      explicacion: "ArithmeticException es una excepción no comprobada (unchecked) que deriva de RuntimeException. Las excepciones no comprobadas no necesitan ser declaradas en la firma del método o capturadas explícitamente. FileNotFoundException, IOException y SQLException son excepciones comprobadas (checked) que requieren manejo explícito o declaración."
    },
    {
      id: 31402,
      moduloId: 314,
      pregunta: "¿Cuál de las siguientes afirmaciones sobre el uso de FileWriter sin append=true es correcta?",
      opciones: [
        "Lanza una excepción",
        "Cierra automáticamente el archivo",
        "Sobrescribe el contenido del archivo",
        "Añade contenido al final del archivo existente"
      ],
      respuestaCorrecta: 2,
      explicacion: "Cuando se usa FileWriter sin especificar el parámetro append=true, por defecto sobrescribe el contenido existente del archivo. Si se quiere añadir contenido al final del archivo existente, se debe usar FileWriter con el parámetro append establecido como true."
    },
    {
      id: 31403,
      moduloId: 314,
      pregunta: "¿Cuál de las siguientes opciones declara una constante de clase correctamente en Java?",
      opciones: [
        "static const int MAX = 50;",
        "const int MAX = 50;",
        "final static int MAX = \"50\";",
        "public static final int MAX = 50;"
      ],
      respuestaCorrecta: 3,
      explicacion: "La forma correcta de declarar una constante de clase en Java es usando los modificadores 'public static final'. El orden de los modificadores no importa, pero 'final' indica que es una constante que no puede cambiar su valor después de la inicialización. Además, 'static' significa que pertenece a la clase y no a las instancias, y 'public' que es accesible desde cualquier lugar."
    },
    {
      id: 31404,
      moduloId: 314,
      pregunta: "¿Cuál de las siguientes opciones no es una forma válida de comentario en Java?",
      opciones: [
        "/* Comentario de varias líneas /",
        "/* Comentario de documentación */",
        "<!-- Comentario -->",
        "// Comentario de una línea"
      ],
      respuestaCorrecta: 2,
      explicacion: "<!-- Comentario --> es una sintaxis de comentario de HTML/XML, no de Java. En Java, los comentarios válidos son: // para comentarios de una línea, /* ... */ para comentarios de múltiples líneas, y /** ... */ para comentarios de documentación (Javadoc). La primera opción tiene un error por no cerrar correctamente el comentario."
    },
    {
      id: 31405,
      moduloId: 314,
      pregunta: "¿Cuál de los siguientes tipos de datos puede almacenar un ArrayList en Java?",
      opciones: [
        "Solo cadenas de texto",
        "Cualquier tipo de objeto",
        "Solo enteros",
        "Tipos primitivos"
      ],
      respuestaCorrecta: 1,
      explicacion: "Un ArrayList en Java puede almacenar cualquier tipo de objeto mediante el uso de genéricos. No puede almacenar directamente tipos primitivos como int, boolean, etc., sino sus equivalentes en clases wrapper (Integer, Boolean, etc.). Las opciones que limitan ArrayList a solo cadenas de texto o solo enteros son incorrectas, y los tipos primitivos requieren ser envueltos en sus clases correspondientes."
    },
    {
      id: 31406,
      moduloId: 314,
      pregunta: "¿Cuál es el orden de ejecución correcto en una estructura try-catch-finally si no hay excepción?",
      opciones: [
        "try → catch → finally",
        "finally → try → catch",
        "try → finally",
        "catch → finally → try"
      ],
      respuestaCorrecta: 2,
      explicacion: "Cuando no se produce ninguna excepción en un bloque try-catch-finally, el flujo de ejecución es: primero se ejecuta el bloque try completamente, y luego se ejecuta el bloque finally. El bloque catch se omite completamente ya que no se ha producido ninguna excepción que capturar."
    },
    {
      id: 31407,
      moduloId: 314,
      pregunta: "¿Cuál es el propósito de los métodos getter en Java?",
      opciones: [
        "Ejecutar tareas en segundo plano",
        "Asignar valores a atributos",
        "Inicializar el constructor",
        "Obtener valores de atributos privados"
      ],
      respuestaCorrecta: 3,
      explicacion: "Los métodos getter en Java tienen el propósito de acceder a los valores de atributos privados desde fuera de la clase. Son parte del principio de encapsulamiento en la programación orientada a objetos, permitiendo controlar el acceso a los datos y ocultar los detalles de implementación. Los métodos que asignan valores son los setter, no los getter."
    },
    {
      id: 31408,
      moduloId: 314,
      pregunta: "¿Cuál es el propósito del método peek() en una Queue?",
      opciones: [
        "Eliminar el primer elemento",
        "Obtener el primer elemento sin eliminarlo",
        "Ordenar la cola",
        "Insertar un elemento"
      ],
      respuestaCorrecta: 1,
      explicacion: "El método peek() en una Queue (cola) permite obtener una referencia al primer elemento de la cola sin eliminarlo. Esto es útil cuando se quiere examinar el elemento que está próximo a ser procesado sin alterarlo. Para eliminar el primer elemento se usaría el método poll() o remove()."
    },
    {
      id: 31409,
      moduloId: 314,
      pregunta: "¿Cuál es la diferencia entre una clase abstracta y una interfaz en Java?",
      opciones: [
        "Las interfaces pueden tener constructores",
        "Las clases abstractas no pueden tener atributos",
        "Las clases abstractas pueden tener métodos implementados",
        "Las interfaces pueden extender clases"
      ],
      respuestaCorrecta: 2,
      explicacion: "La diferencia clave es que las clases abstractas pueden tener métodos implementados (concretos) junto con métodos abstractos, mientras que tradicionalmente las interfaces solo podían tener métodos abstractos (aunque desde Java 8 pueden tener métodos default y static). Las interfaces no pueden tener constructores, mientras que las clases abstractas sí pueden tenerlos. Además, una clase puede implementar múltiples interfaces, pero solo puede extender una clase abstracta."
    },
    {
      id: 31410,
      moduloId: 314,
      pregunta: "¿Cuál es la forma correcta de declarar una constante accesible desde cualquier clase sin necesidad de instanciar en Java?",
      opciones: [
        "final int LIMITE = 100;",
        "static final int LIMITE = 100;",
        "public static final int LIMITE = 100;",
        "public int LIMITE = 100;"
      ],
      respuestaCorrecta: 2,
      explicacion: "Para declarar una constante que sea accesible desde cualquier clase sin necesidad de instanciar un objeto, se debe usar 'public static final'. El modificador 'public' hace que sea accesible desde cualquier parte, 'static' permite acceder sin crear una instancia, y 'final' la convierte en constante que no puede modificarse."
    },
    {
      id: 31411,
      moduloId: 314,
      pregunta: "¿Cuál es la principal diferencia entre un bucle while y do-while?",
      opciones: [
        "while no necesita condición",
        "do-while se ejecuta siempre al menos una vez",
        "Ambos se comportan igual",
        "do-while requiere que la condición sea falsa"
      ],
      respuestaCorrecta: 1,
      explicacion: "La principal diferencia entre un bucle while y do-while es que do-while siempre ejecuta su bloque de código al menos una vez antes de evaluar la condición, mientras que while evalúa la condición antes de ejecutar el bloque de código. Esto significa que un bucle do-while siempre se ejecutará al menos una vez, incluso si la condición es falsa desde el principio."
    },
    {
      id: 31412,
      moduloId: 314,
      pregunta: "¿Cuál es una buena práctica al usar conexiones JDBC en Java?",
      opciones: [
        "Dejar las conexiones abiertas por rendimiento",
        "Conectar solo con Statement, nunca PreparedStatement",
        "Evitar el uso de try-catch",
        "Cerrar las conexiones usando try-with-resources"
      ],
      respuestaCorrecta: 3,
      explicacion: "Una buena práctica al usar conexiones JDBC es cerrar las conexiones después de usarlas para liberar recursos, preferiblemente usando try-with-resources (introducido en Java 7). Esto garantiza que las conexiones se cierren automáticamente, incluso si ocurren excepciones. Dejar conexiones abiertas causa fugas de recursos, PreparedStatement es preferible por seguridad y rendimiento, y el manejo de excepciones es esencial en operaciones de base de datos."
    },
    {
      id: 31413,
      moduloId: 314,
      pregunta: "¿Cuál es una ventaja de usar PreparedStatement sobre Statement en JDBC?",
      opciones: [
        "Permite llamadas HTTP",
        "Previene inyecciones SQL",
        "Es más lento",
        "No requiere conexión"
      ],
      respuestaCorrecta: 1,
      explicacion: "Una ventaja principal de usar PreparedStatement sobre Statement es que previene las inyecciones SQL al precompilar la consulta SQL y utilizar marcadores de posición (?) para los parámetros. Esto hace que las consultas sean más seguras ya que los datos de entrada se tratan como datos y no como parte del código SQL. Además, PreparedStatement suele tener mejor rendimiento cuando la misma consulta se ejecuta múltiples veces."
    },
    {
      id: 31414,
      moduloId: 314,
      pregunta: "¿Qué efecto tiene este código en Java?",
      recurso: {
        tipo: "codigo",
        contenido: `int[] original = {10, 20, 30};
int[] copia = original;
copia[1] = 99;
System.out.println(original[1]);`,
        lenguaje: "java"
      },
      opciones: [
        "Da error de compilación",
        "Imprime 99",
        "Imprime 20",
        "Imprime null"
      ],
      respuestaCorrecta: 1,
      explicacion: "Este código demuestra que en Java los arrays son tipos de referencia. Cuando se asigna 'original' a 'copia', ambas variables apuntan al mismo objeto array en memoria (no se crea una copia independiente). Por lo tanto, cuando se modifica 'copia[1]' a 99, también se modifica 'original[1]' porque ambos referencian el mismo array. Por eso, al imprimir original[1], se obtiene 99."
    },
    {
      id: 31415,
      moduloId: 314,
      pregunta: "¿Qué error contiene el siguiente método getter?",
      recurso: {
        tipo: "codigo",
        contenido: `public void getEdad() {
      return edad;
}`,
        lenguaje: "java"
      },
      opciones: [
        "No puede acceder a atributos",
        "Falta un constructor en la clase",
        "El tipo de retorno debería ser int, no void",
        "El método debería llamarse setEdad"
      ],
      respuestaCorrecta: 2,
      explicacion: "El error en este método getter es que el tipo de retorno declarado es void (que significa que no devuelve nada), pero el método intenta retornar un valor (edad). Un método getter correctamente definido debería especificar el tipo de retorno correspondiente al atributo que está obteniendo, probablemente int en este caso: public int getEdad() { return edad; }"
    },
    {
      id: 31416,
      moduloId: 314,
      pregunta: "¿Qué estructura de datos sigue el principio LIFO?",
      opciones: [
        "ArrayList",
        "Pila",
        "Conjunto",
        "Cola"
      ],
      respuestaCorrecta: 1,
      explicacion: "La estructura de datos que sigue el principio LIFO (Last In, First Out - Último en entrar, primero en salir) es la Pila (Stack). En una pila, el último elemento insertado es el primero en ser extraído, similar a una pila de platos donde se retira primero el que está en la parte superior. Las colas siguen el principio FIFO (First In, First Out), mientras que ArrayList y Conjunto (Set) no siguen ninguno de estos principios específicamente."
    },
    {
      id: 31417,
      moduloId: 314,
      pregunta: "¿Qué imprime este código con una cola?",
      recurso: {
        tipo: "codigo",
        contenido: `Queue<Integer> cola = new LinkedList<>();
cola.add(10);
cola.add(20);
cola.remove();
System.out.println(cola.peek());`,
        lenguaje: "java"
      },
      opciones: [
        "20",
        "10",
        "null",
        "30"
      ],
      respuestaCorrecta: 0,
      explicacion: "Este código crea una cola, añade los elementos 10 y 20 (en ese orden), luego elimina el primer elemento (10) con remove(), y finalmente imprime el elemento en la cabeza de la cola sin eliminarlo usando peek(). Después de eliminar 10, el único elemento que queda en la cola es 20, que es el que se obtiene con peek(). Por lo tanto, se imprime 20."
    },
    {
      id: 31418,
      moduloId: 314,
      pregunta: "¿Qué instrucción permite lanzar manualmente una excepción en Java?",
      opciones: [
        "catch",
        "throw",
        "try",
        "raise"
      ],
      respuestaCorrecta: 1,
      explicacion: "La instrucción 'throw' permite lanzar manualmente una excepción en Java. Se usa seguida de una instancia de una clase que extiende Throwable, por ejemplo: throw new IllegalArgumentException(\"Valor inválido\"). Las palabras clave 'try' y 'catch' se usan para el manejo de excepciones, no para lanzarlas. 'raise' no es una palabra clave en Java (aunque sí lo es en otros lenguajes como Python)."
    },
    {
      id: 31419,
      moduloId: 314,
      pregunta: "Qué ocurre si se declara una clase como abstracta en Java?",
      opciones: [
        "No puede tener atributos",
        "No puede ser instanciada directamente",
        "Puede ser instanciada si tiene constructor",
        "No puede tener métodos implementados"
      ],
      respuestaCorrecta: 1,
      explicacion: "Cuando una clase se declara como abstracta en Java, no puede ser instanciada directamente mediante el operador new. Las clases abstractas están diseñadas para ser extendidas por subclases que implementen sus métodos abstractos. Una clase abstracta puede tener atributos y métodos implementados (concretos), además de métodos abstractos. Tener un constructor no permite instanciar una clase abstracta directamente."
    },
    {
      id: 31420,
      moduloId: 314,
      pregunta: "¿Qué ocurre si se omite el return en un método que debe devolver int?",
      opciones: [
        "Lanza una excepción",
        "No compila",
        "Devuelve automáticamente 0",
        "Devuelve null"
      ],
      respuestaCorrecta: 1,
      explicacion: "Si se omite la sentencia return en un método que debe devolver un valor (como int), el código no compilará. El compilador de Java verifica que todos los caminos de ejecución de un método que devuelve un valor tengan una sentencia return apropiada. Java no permite que un método declarado para devolver un tipo específico no devuelva nada o devuelva un valor implícito."
    },
    {
      id: 31421,
      moduloId: 314,
      pregunta: "¿Qué ocurre si un método en Java está declarado como static?",
      opciones: [
        "Pertenece a la clase y no al objeto",
        "No puede retornar ningún valor",
        "Puede acceder directamente a variables de instancia",
        "Solo puede ser llamado desde objetos instanciados"
      ],
      respuestaCorrecta: 0,
      explicacion: "Un método declarado como static pertenece a la clase y no a las instancias (objetos) de esa clase. Esto significa que puede ser llamado directamente usando el nombre de la clase, sin necesidad de crear una instancia. Los métodos estáticos no pueden acceder directamente a variables de instancia (no estáticas) ni usar this o super. Pueden retornar valores de cualquier tipo."
    },
    {
      id: 31422,
      moduloId: 314,
      pregunta: "¿Qué palabra clave en Java se utiliza para definir un método que no retorna ningún valor?",
      opciones: [
        "static",
        "void",
        "null",
        "return"
      ],
      respuestaCorrecta: 1,
      explicacion: "La palabra clave 'void' se utiliza en Java para definir un método que no retorna ningún valor. Cuando un método se declara con tipo de retorno void, puede ejecutar acciones pero no devuelve ningún resultado que pueda ser asignado a una variable o usado en una expresión. El método simplemente realiza una tarea y termina."
    },
    {
      id: 31423,
      moduloId: 314,
      pregunta: "¿Qué palabra clave permite implementar una interfaz en Java?",
      opciones: [
        "interface",
        "inherits",
        "extends",
        "implements"
      ],
      respuestaCorrecta: 3,
      explicacion: "La palabra clave 'implements' se utiliza en Java para indicar que una clase implementa una o más interfaces. Esto significa que la clase debe proporcionar implementaciones para todos los métodos abstractos declarados en las interfaces. Por ejemplo: public class MiClase implements MiInterfaz { ... }. La palabra 'extends' se usa para la herencia de clases, 'interface' para declarar interfaces, e 'inherits' no existe en Java."
    },
    {
      id: 31424,
      moduloId: 314,
      pregunta: "¿Qué palabra clave se utiliza en Java para heredar de una clase abstracta?",
      opciones: [
        "extends",
        "implements",
        "inherits",
        "override"
      ],
      respuestaCorrecta: 0,
      explicacion: "La palabra clave 'extends' se utiliza en Java para heredar de una clase, ya sea abstracta o concreta. Por ejemplo: public class MiClase extends ClaseAbstracta { ... }. La palabra 'implements' se usa específicamente para implementar interfaces, no para extender clases. 'Inherits' no es una palabra clave en Java, y 'override' es una anotación (@Override) que se usa para indicar que un método está sobrescribiendo un método de la superclase."
    },
    {
      id: 31425,
      moduloId: 314,
      pregunta: "¿Qué resultado produce el siguiente código?",
      recurso: {
        tipo: "codigo",
        contenido: `String s = "Hola";
System.out.println(s.charAt(1));`,
        lenguaje: "java"
      },
      opciones: [
        "H",
        "a",
        "l",
        "o"
      ],
      respuestaCorrecta: 3,
      explicacion: "El método charAt(int index) devuelve el carácter en la posición especificada en una cadena (String). En Java, los índices comienzan en 0, por lo que charAt(1) devuelve el segundo carácter de la cadena. Para la cadena \"Hola\", los caracteres están indexados así: H (0), o (1), l (2), a (3). Por lo tanto, s.charAt(1) devuelve 'o'."
    },
    {
      id: 31426,
      moduloId: 314,
      pregunta: "¿Qué resultado tiene este bloque de código?",
      recurso: {
        tipo: "codigo",
        contenido: `try {
       int[] v = new int[2];v[2] = 5;
} catch (ArrayIndexOutOfBoundsException e) {
       System.out.println("Error de índice");
}`,
        lenguaje: "java"
      },
      opciones: [
        "Imprime \"Error de índice\"",
        "Da error de compilación",
        "No imprime nada",
        "Imprime 5"
      ],
      respuestaCorrecta: 0,
      explicacion: "El código intenta acceder a v[2], que está fuera del rango válido para un array de tamaño 2 (los índices válidos son 0 y 1). Esto provoca una ArrayIndexOutOfBoundsException en tiempo de ejecución. Como esta excepción está siendo capturada por el bloque catch correspondiente, se ejecuta el código dentro del catch y se imprime \"Error de índice\"."
    },
    {
      id: 31427,
      moduloId: 314,
      pregunta: "¿Qué salida genera el siguiente código?",
      recurso: {
        tipo: "codigo",
        contenido: `for (int i = 3; i > 0; i--) {
      System.out.print(i + " ");
}`,
        lenguaje: "java"
      },
      opciones: [
        "0 1 2",
        "3 2 1 0",
        "3 2 1",
        "1 2 3"
      ],
      respuestaCorrecta: 2,
      explicacion: "Este bucle for comienza con i=3 y se ejecuta mientras i sea mayor que 0, decrementando i en cada iteración (i--). El bucle imprime el valor de i seguido de un espacio en cada iteración. Por lo tanto, el resultado será 3, luego 2, luego 1, impreso como \"3 2 1\". Cuando i llega a 0, la condición i > 0 se vuelve falsa y el bucle termina."
    },
    {
      id: 31428,
      moduloId: 314,
      pregunta: "¿Qué salida genera este código recursivo?",
      recurso: {
        tipo: "codigo",
        contenido: `void cuenta(int n) {
      if (n > 0) {
          cuenta(n - 1);
          System.out.print(n + " ");
      }
}
cuenta(3);`,
        lenguaje: "java"
      },
      opciones: [
        "0 1 2 3",
        "1 2 3",
        "3 2 1",
        "2 1 3"
      ],
      respuestaCorrecta: 1,
      explicacion: "Este código define una función recursiva que primero se llama a sí misma con un valor decrementado (n-1) y luego imprime n. Para cuenta(3), primero se llama cuenta(2), que llama a cuenta(1), que llama a cuenta(0). Como cuenta(0) no cumple la condición n > 0, retorna sin imprimir nada. Luego, cuenta(1) imprime 1, cuenta(2) imprime 2, y finalmente cuenta(3) imprime 3. Por lo tanto, el resultado es \"1 2 3\"."
    },
    {
      id: 31429,
      moduloId: 314,
      pregunta: "¿Qué salida produce este código?",
      recurso: {
        tipo: "codigo",
        contenido: `List<String> lista = new ArrayList<>();
lista.add("Java");
lista.clear();
System.out.println(lista.size());`,
        lenguaje: "java"
      },
      opciones: [
        "null",
        "1",
        "0",
        "Error"
      ],
      respuestaCorrecta: 2,
      explicacion: "Este código crea un ArrayList, añade el elemento \"Java\" y luego llama al método clear() que elimina todos los elementos de la lista. Después de clear(), la lista está vacía pero sigue existiendo como un objeto válido. El método size() devuelve el número de elementos en la lista, que es 0 después de limpiarla. Por lo tanto, lista.size() devuelve 0."
    },
    {
      id: 31430,
      moduloId: 314,
      pregunta: "¿Qué se imprime al ejecutar este código?",
      recurso: {
        tipo: "codigo",
        contenido: `List<String> lista = new ArrayList<>();
lista.add("uno");
lista.add("dos");
lista.set(1, "tres");
System.out.println(lista.get(1));`,
        lenguaje: "java"
      },
      opciones: [
        "Error de compilación",
        "uno",
        "dos",
        "tres"
      ],
      respuestaCorrecta: 3,
      explicacion: "Este código crea un ArrayList y añade los elementos \"uno\" (índice 0) y \"dos\" (índice 1). Luego usa el método set(int index, E element) para reemplazar el elemento en el índice 1 (\"dos\") con \"tres\". Finalmente, imprime el elemento en el índice 1 usando get(1), que ahora es \"tres\". El método set() reemplaza el elemento existente en la posición especificada."
    },
    {
      id: 31431,
      moduloId: 314,
      pregunta: "¿Qué se imprime con este código?",
      recurso: {
        tipo: "codigo",
        contenido: `String texto = null;
try {
     System.out.println(texto.length());
} catch (NullPointerException e) {
     System.out.println("Referencia nula");
}`,
        lenguaje: "java"
      },
      opciones: [
        "null",
        "0",
        "Da error en tiempo de compilación",
        "Referencia nula"
      ],
      respuestaCorrecta: 3,
      explicacion: "Este código intenta llamar al método length() en una variable de texto que es null. Esto lanza una NullPointerException en tiempo de ejecución (no en tiempo de compilación). Como esta excepción está siendo capturada por el bloque catch correspondiente, se ejecuta el código dentro del catch y se imprime \"Referencia nula\"."
    },
    {
      id: 31432,
      moduloId: 314,
      pregunta: "¿Qué se necesita para leer texto desde un archivo en Java con BufferedReader?",
      opciones: [
        "FileOutputStream",
        "InputStream",
        "Scanner",
        "FileReader"
      ],
      respuestaCorrecta: 3,
      explicacion: "Para leer texto desde un archivo en Java usando BufferedReader, se necesita un FileReader como fuente de datos. FileReader es un flujo de caracteres (character stream) diseñado específicamente para leer archivos de texto. BufferedReader envuelve este FileReader para proporcionar lectura en búfer para mayor eficiencia. Un ejemplo típico es: BufferedReader br = new BufferedReader(new FileReader(\"archivo.txt\"));"
    },
    {
      id: 31433,
      moduloId: 314,
      pregunta: "¿Qué se requiere para que un botón en Swing detecte clics?",
      opciones: [
        "Implementar KeyEvent",
        "Crear una subclase de JPanel",
        "Llamar a repaint()",
        "Añadir un ActionListener"
      ],
      respuestaCorrecta: 3,
      explicacion: "Para que un botón en Swing detecte clics, se requiere añadir un ActionListener al botón. ActionListener es una interfaz que tiene un método actionPerformed() que se ejecuta cuando se hace clic en el botón. Un ejemplo básico sería: myButton.addActionListener(e -> { /* código a ejecutar cuando se hace clic */ });"
    },
    {
      id: 31434,
      moduloId: 314,
      pregunta: "¿Qué sucede si se intenta acceder a la posición 10 de un array de tamaño 5 en Java?",
      opciones: [
        "Se retorna null",
        "Lanza una excepción en tiempo de ejecución",
        "Se ignora la instrucción",
        "El programa imprime 0"
      ],
      respuestaCorrecta: 1,
      explicacion: "En Java, intentar acceder a un índice fuera del rango válido de un array provoca una ArrayIndexOutOfBoundsException en tiempo de ejecución. Para un array de tamaño 5, los índices válidos son de 0 a 4, por lo que intentar acceder al índice 10 está fuera de rango. Java realiza verificación de límites en los arrays para evitar accesos no válidos a memoria."
    },
    {
      id: 31435,
      moduloId: 314,
      pregunta: "¿Qué sucede si un switch en Java no tiene sentencias break entre los case?",
      opciones: [
        "Da error de compilación",
        "Ejecuta todos los casos desde el coincidente hasta encontrar un break",
        "Solo se ejecuta el case coincidente",
        "Ejecuta solo el default"
      ],
      respuestaCorrecta: 1,
      explicacion: "Cuando un switch en Java no tiene sentencias break entre los case, ocurre lo que se conoce como 'fall-through' (caída). Después de encontrar un case coincidente, se ejecutan todas las sentencias de ese case y los siguientes case hasta encontrar un break o hasta el final del switch. Esto puede ser intencional en algunos casos, pero generalmente se considera una buena práctica incluir break para evitar ejecuciones no deseadas."
    },
    {
      id: 31436,
      moduloId: 314,
      pregunta: "¿Qué sucede si una clase no implementa todos los métodos de una interfaz?",
      opciones: [
        "Se generan automáticamente",
        "Da error de compilación",
        "Se ejecutan como métodos vacíos",
        "Se ejecutan con valores nulos"
      ],
      respuestaCorrecta: 1,
      explicacion: "Si una clase no abstracta implementa una interfaz pero no implementa todos los métodos abstractos declarados en esa interfaz, se producirá un error de compilación. El contrato de una interfaz requiere que todos sus métodos sean implementados por la clase que declara implementarla. Si la clase no quiere implementar todos los métodos, debe declararse como abstracta."
    },
    {
      id: 31437,
      moduloId: 314,
      pregunta: "¿Qué sucede si una excepción ocurre y no se captura?",
      opciones: [
        "Se imprime null",
        "El programa se detiene con un error",
        "La excepción se ignora",
        "El programa continúa normalmente"
      ],
      respuestaCorrecta: 1,
      explicacion: "Si una excepción ocurre durante la ejecución de un programa Java y no es capturada por ningún bloque try-catch, la JVM detiene la ejecución del programa actual y muestra un mensaje de error (stack trace) que detalla el tipo de excepción y dónde ocurrió. Esto es parte del mecanismo de manejo de excepciones de Java que impide que el programa continúe ejecutándose en un estado potencialmente corrupto."
    },
    {
      id: 31438,
      moduloId: 314,
      pregunta: "¿Qué valor se imprime con el siguiente código?",
      recurso: {
        tipo: "codigo",
        contenido: `int x = 4;
x *= 3;
System.out.println(x);`,
        lenguaje: "java"
      },
      opciones: [
        "12",
        "7",
        "1",
        "3"
      ],
      respuestaCorrecta: 0,
      explicacion: "El operador *= es un operador de asignación compuesto que multiplica el valor de la variable por el operando de la derecha y asigna el resultado a la variable. En este caso, x *= 3 es equivalente a x = x * 3. Como x inicialmente es 4, después de la operación x *= 3, x se convierte en 4 * 3 = 12. Por lo tanto, System.out.println(x) imprime 12."
    },
    {
      id: 31439,
      moduloId: 314,
      pregunta: "¿Qué valor tiene el atributo length en un array declarado como int[] datos = {1, 2, 3, 4};?",
      opciones: [
        "3",
        "5",
        "4",
        "datos.length no es válido"
      ],
      respuestaCorrecta: 2,
      explicacion: "El atributo length de un array en Java devuelve el número de elementos que contiene el array. Para el array declarado como int[] datos = {1, 2, 3, 4};, hay 4 elementos (1, 2, 3 y 4), por lo que datos.length es 4. Es importante destacar que length es un atributo (no un método) para arrays, a diferencia de String donde length() es un método."
    },
    {
      id: 31440,
      moduloId: 314,
      pregunta: "¿Qué ventaja principal tiene usar ArrayList sobre arrays tradicionales en Java?",
      opciones: [
        "Son más rápidos",
        "Permiten redimensionar dinámicamente",
        "Usan menos memoria",
        "No necesitan tipo de dato"
      ],
      respuestaCorrecta: 1,
      explicacion: "La ventaja principal de ArrayList sobre los arrays tradicionales es que permiten redimensionar dinámicamente, es decir, pueden crecer o reducirse en tamaño según sea necesario durante la ejecución del programa. Los arrays en Java tienen un tamaño fijo una vez creados. Aunque ArrayList usa más memoria y puede ser más lento en algunas operaciones que los arrays tradicionales, su flexibilidad de tamaño los hace muy útiles para cuando no se conoce de antemano cuántos elementos se necesitarán almacenar."
    }
  ]
};

export default moduloSimulacroVirtualLab;