/**
 * Datos del módulo de Programación Orientada a Objetos en Java perteneciente a la asignatura de Programación.
 * Incluye información del módulo y sus preguntas asociadas para el quiz.
 *
 * @type {Object}
 * @property {number} id - Identificador único del módulo
 * @property {string} nombre - Nombre del módulo
 * @property {number} asignaturaId - ID de la asignatura a la que pertenece
 * @property {string} descripcion - Breve descripción del contenido del módulo
 * @property {Array<Object>} preguntas - Lista de preguntas para el quiz de este módulo
 */
export const moduloDiezAbril = {
  id: 304,
  nombre: "test 10 de abril",
  asignaturaId: 3,
  esExamen: true,
  descripcion: "Conceptos fundamentales de POO en Java: clases, objetos, herencia, polimorfismo, encapsulamiento, interfaces y excepciones.",
  preguntas: [
    {
      id: 3401,
      moduloId: 304,
      pregunta: "¿Cuál de estas sentencias crea correctamente un objeto de la clase `Alumno`?",
      opciones: ["Alumno alumno = new Alumno();", "Alumno = new Alumno();", "Alumno alumno();", "new Alumno Alumno();"],
      respuestaCorrecta: 0,
      explicacion: "La forma correcta de crear un objeto en Java es usando la palabra clave 'new' seguida del constructor de la clase. La sintaxis correcta es 'Tipo nombreVariable = new Constructor();'. Por lo tanto, 'Alumno alumno = new Alumno();' es la forma correcta de instanciar un objeto de la clase Alumno."
    },
    {
      id: 3402,
      moduloId: 304,
      pregunta: "¿Qué imprimirá el siguiente fragmento?",
      recurso: {
        tipo: "codigo",
        contenido: `int[][] matriz = {
  {1,2,3},
  {4,5,6}
};
System.out.println(matriz[1][2]);`,
        lenguaje: "java"
      },
      opciones: ["2", "6", "5", "4"],
      respuestaCorrecta: 1,
      explicacion: "El código define una matriz 2x3 con dos filas y tres columnas. La expresión matriz[1][2] accede al elemento en la segunda fila (índice 1) y tercera columna (índice 2). En la matriz dada, este elemento es 6, por lo que se imprime 6."
    },
    {
      id: 3403,
      moduloId: 304,
      pregunta: "¿Qué imprimirá este código?",
      recurso: {
        tipo: "codigo",
        contenido: `public static void imprime(int n) {
  n = 2 * n;
  System.out.println(n);
}
public static void main(String[] args) {
  int n = 10;
  imprime(n);
  System.out.println(n);
}`,
        lenguaje: "java"
      },
      opciones: ["20 y luego 10", "20 y luego 20", "10 y luego 20", "10 y luego 10"],
      respuestaCorrecta: 0,
      explicacion: "Este código demuestra el paso por valor. La variable n en main() se pasa al método imprime(). Dentro del método, n se modifica (se multiplica por 2) y se imprime, mostrando 20. Sin embargo, esta modificación no afecta a la variable original en main(), ya que Java pasó una copia del valor. Por lo tanto, cuando se imprime n en main(), muestra su valor original, 10."
    },
    {
      id: 3404,
      moduloId: 304,
      pregunta: "¿Qué método de Scanner lee un número entero?",
      opciones: ["read()", "nextInt()", "next()", "nextLine()"],
      respuestaCorrecta: 1,
      explicacion: "El método nextInt() de la clase Scanner se utiliza para leer un número entero desde la entrada. Este método intenta interpretar el siguiente token de entrada como un número entero en base 10 y lo devuelve. Si el siguiente token no puede ser interpretado como un entero, se lanza una InputMismatchException."
    },
    {
      id: 3405,
      moduloId: 304,
      pregunta: "¿Qué método de Stack devuelve el elemento del tope SIN eliminarlo?",
      opciones: ["pop()", "push()", "poll()", "peek()"],
      respuestaCorrecta: 3,
      explicacion: "El método peek() de la clase Stack devuelve el elemento en la cima de la pila sin eliminarlo. En contraste, pop() devuelve y elimina el elemento de la cima, push() añade un elemento a la cima, y poll() es un método de Queue, no de Stack."
    },
    {
      id: 3406,
      moduloId: 304,
      pregunta: "¿Qué método se ejecuta al arrancar una aplicación Java?",
      opciones: ["run()", "start()", "init()", "main()"],
      respuestaCorrecta: 3,
      explicacion: "El método main() es el punto de entrada de una aplicación Java. Cuando se ejecuta una aplicación Java, la máquina virtual de Java (JVM) busca el método main() con la firma exacta 'public static void main(String[] args)' para comenzar la ejecución del programa."
    },
    {
      id: 3407,
      moduloId: 304,
      pregunta: "¿Qué mostrará este código?",
      recurso: {
        tipo: "codigo",
        contenido: `int[] valores = new int[4];
System.out.println(valores[1]);`,
        lenguaje: "java"
      },
      opciones: ["0", "1", "Error de compilación", "null"],
      respuestaCorrecta: 0,
      explicacion: "El código crea un array de enteros con 4 elementos. Cuando se crea un array de tipo primitivo en Java, todos los elementos se inicializan automáticamente con valores por defecto. Para int, el valor por defecto es 0. Por lo tanto, valores[1] contiene 0, que es lo que se imprime."
    },
    {
      id: 3408,
      moduloId: 304,
      pregunta: "¿Qué muestra este código?",
      recurso: {
        tipo: "codigo",
        contenido: `ArrayList<String> lista = new ArrayList<>();
lista.add("A");
lista.add("B");
System.out.println(lista.get(1));`,
        lenguaje: "java"
      },
      opciones: ["B", "Error en tiempo de ejecución", "A", "0"],
      respuestaCorrecta: 0,
      explicacion: "El código crea un ArrayList de Strings, añade \"A\" (índice 0) y luego \"B\" (índice 1). Después, imprime el elemento en el índice 1, que es \"B\". Los ArrayList en Java son colecciones dinámicas de tipo genérico que almacenan elementos en un orden específico y permiten acceder a ellos por índice."
    },
    {
      id: 3409,
      moduloId: 304,
      pregunta: "¿Qué muestra este código?",
      recurso: {
        tipo: "codigo",
        contenido: `class Animal {
  void sonido() { System.out.println("Sonido genérico"); }
}

class Perro extends Animal {
  void sonido() { System.out.println("Ladrido"); }
}

Animal a = new Perro();
a.sonido();`,
        lenguaje: "java"
      },
      opciones: ["Ladrido", "Sonido genérico", "No imprime nada", "Error de compilación"],
      respuestaCorrecta: 0,
      explicacion: "Este código muestra un ejemplo de polimorfismo. Aunque la variable 'a' es de tipo Animal, se inicializa con un objeto Perro. En Java, el método que se ejecuta se determina en tiempo de ejecución según el tipo real del objeto (Perro), no el tipo de la variable (Animal). Por lo tanto, se llama al método sonido() de Perro y se imprime \"Ladrido\"."
    },
    {
      id: 3410,
      moduloId: 304,
      pregunta: "¿Qué muestra este fragmento de código?",
      recurso: {
        tipo: "codigo",
        contenido: `public static int suma(int a, int b) {
  return a + b;
}
System.out.println(suma(2,3));`,
        lenguaje: "java"
      },
      opciones: ["3", "2", "5", "Error de compilación"],
      respuestaCorrecta: 2,
      explicacion: "El código define un método estático suma() que toma dos parámetros enteros y devuelve su suma. En el método main(), se llama a suma(2,3), que devuelve 5. Este valor se pasa a System.out.println(), que lo imprime en la consola. Por lo tanto, se muestra 5."
    },
    {
      id: 3411,
      moduloId: 304,
      pregunta: "¿Qué ocurre cuando un parámetro se pasa \"por valor\" en Java?",
      opciones: ["Se copia el valor y no afecta al original.", "Se pasa la referencia al objeto original.", "Se modifica el valor original automáticamente.", "El método puede cambiar el tipo de la variable."],
      respuestaCorrecta: 0,
      explicacion: "En Java, todos los parámetros se pasan \"por valor\". Para tipos primitivos, esto significa que se copia el valor y cualquier modificación dentro del método no afecta a la variable original. Para objetos, se copia la referencia al objeto, no el objeto en sí. Esto significa que se puede modificar el objeto referenciado, pero no se puede hacer que la variable original apunte a un objeto diferente."
    },
    {
      id: 3412,
      moduloId: 304,
      pregunta: "¿Qué ocurre si un atributo es declarado como `private`?",
      opciones: ["Solo puede ser accedido desde dentro de su propia clase.", "Solo puede ser accedido directamente desde otras clases.", "Solo puede ser accedido desde métodos estáticos.", "Puede ser accedido libremente desde cualquier lugar."],
      respuestaCorrecta: 0,
      explicacion: "Cuando un atributo se declara como 'private', solo puede ser accedido directamente desde dentro de la clase en la que está definido. Este es el principio de encapsulamiento en POO, que oculta los detalles de implementación y protege la integridad de los datos, permitiendo acceder a ellos solo a través de métodos específicos (getters y setters)."
    },
    {
      id: 3413,
      moduloId: 304,
      pregunta: "¿Qué ocurre si un flujo no se cierra adecuadamente en Java?",
      opciones: ["Se elimina el archivo afectado.", "Los datos pueden no guardarse correctamente y hay fuga de recursos.", "El programa se detiene inmediatamente.", "Se lanza una excepción Checked automáticamente."],
      respuestaCorrecta: 1,
      explicacion: "Si un flujo (stream) no se cierra adecuadamente en Java, puede causar fugas de recursos del sistema operativo (como descriptores de archivo) y los datos podrían no guardarse correctamente en disco si los buffers no se vacían. Esto es especialmente importante con flujos de salida. Por eso, es recomendable usar try-with-resources o asegurarse de cerrar los flujos en un bloque finally."
    },
    {
      id: 3414,
      moduloId: 304,
      pregunta: "¿Qué ocurre si una subclase quiere llamar al constructor de su superclase?",
      opciones: ["No es posible llamar al constructor de la superclase.", "Llama a super().", "Solo puede hacerlo dentro de métodos estáticos.", "Llama a this()."],
      respuestaCorrecta: 1,
      explicacion: "Para llamar al constructor de la superclase desde una subclase, se utiliza la palabra clave 'super()' o 'super(argumentos)' si el constructor requiere parámetros. Esta llamada debe ser la primera sentencia en el constructor de la subclase. Si no se incluye explícitamente, Java inserta automáticamente 'super()' para llamar al constructor sin parámetros de la superclase."
    },
    {
      id: 3415,
      moduloId: 304,
      pregunta: "¿Qué palabra clave indica que un método en Java no devuelve ningún valor?",
      opciones: ["void", "return", "null", "static"],
      respuestaCorrecta: 0,
      explicacion: "La palabra clave void se utiliza en la declaración de un método para indicar que el método no devuelve ningún valor. Por ejemplo, 'public void mostrarMensaje()' declara un método que realiza alguna acción pero no devuelve ningún resultado. Estos métodos se utilizan principalmente por sus efectos secundarios, como mostrar información o modificar el estado de objetos."
    },
    {
      id: 3416,
      moduloId: 304,
      pregunta: "¿Qué palabra reservada se utiliza para referirse al objeto actual dentro de sus propios métodos?",
      opciones: ["super", "self", "this", "object"],
      respuestaCorrecta: 2,
      explicacion: "La palabra reservada 'this' se utiliza para referirse al objeto actual dentro de sus propios métodos. Se usa para acceder a los atributos y métodos del objeto, para llamar a constructores de la misma clase y para pasar el objeto actual como parámetro o valor de retorno."
    },
    {
      id: 3417,
      moduloId: 304,
      pregunta: "¿Qué realiza la sentencia `return` en un método?",
      opciones: ["Finaliza un bucle.", "Salta entre casos de un switch.", "Sale del método y devuelve un valor opcionalmente.", "Continua con la siguiente instrucción."],
      respuestaCorrecta: 2,
      explicacion: "La sentencia return en un método cumple dos funciones: finaliza la ejecución del método y, opcionalmente, devuelve un valor al código que lo llamó. Una vez que se ejecuta return, el control vuelve inmediatamente al punto de llamada, y cualquier código que esté después del return en el mismo bloque de código no se ejecutará."
    },
    {
      id: 3418,
      moduloId: 304,
      pregunta: "¿Qué resultado muestra este código?",
      recurso: {
        tipo: "codigo",
        contenido: `Stack<Integer> pila = new Stack<>();
pila.push(1);
pila.push(2);
pila.push(3);
System.out.println(pila.peek());`,
        lenguaje: "java"
      },
      opciones: ["Error", "1", "2", "3"],
      respuestaCorrecta: 3,
      explicacion: "El código crea una pila (Stack) de enteros y agrega los valores 1, 2 y 3 en ese orden. El método peek() devuelve el elemento en la cima de la pila sin eliminarlo. En una pila, el último elemento añadido es el que está en la cima, por lo que peek() devuelve 3."
    },
    {
      id: 3419,
      moduloId: 304,
      pregunta: "¿Qué sucede si no se define ningún constructor en una clase?",
      opciones: ["Java crea automáticamente un constructor por defecto.", "El programa no compila.", "Hay que llamar manualmente a un método init().", "Se crean todos los posibles constructores."],
      respuestaCorrecta: 0,
      explicacion: "Si no se define ningún constructor en una clase, Java crea automáticamente un constructor por defecto (sin parámetros) que inicializa los atributos con sus valores por defecto (0 para números, false para booleanos, null para objetos). Este constructor implícito desaparece si se define explícitamente cualquier otro constructor."
    },
    {
      id: 3420,
      moduloId: 304,
      pregunta: "¿Qué tipo de herencia permite Java directamente entre clases?",
      opciones: ["Única", "Múltiple", "Híbrida", "Circular"],
      respuestaCorrecta: 0,
      explicacion: "Java solo permite herencia única entre clases, lo que significa que una clase solo puede heredar directamente de una única superclase. Sin embargo, Java permite implementar múltiples interfaces, lo que proporciona una forma de lograr funcionalidad similar a la herencia múltiple."
    },
    {
      id: 3421,
      moduloId: 304,
      pregunta: "¿Qué valor tendrá datos[2] tras ejecutar este código?",
      recurso: {
        tipo: "codigo",
        contenido: `int[] datos = {8, 10, 2, 3, 5};`,
        lenguaje: "java"
      },
      opciones: ["5", "2", "10", "8"],
      respuestaCorrecta: 1,
      explicacion: "El código crea un array de enteros con los valores 8, 10, 2, 3 y 5. Los arrays en Java son de base cero, lo que significa que el primer elemento tiene índice 0, el segundo tiene índice 1, y así sucesivamente. Por lo tanto, datos[2] se refiere al tercer elemento del array, que es 2."
    },
    {
      id: 3422,
      moduloId: 304,
      pregunta: "¿Cuál de las siguientes opciones es CORRECTA sobre Stack en Java?",
      opciones: ["Se basa en el principio LIFO (Last In First Out).", "No permite elementos duplicados.", "Es una implementación de FIFO.", "Se accede primero al primer elemento insertado."],
      respuestaCorrecta: 0,
      explicacion: "Stack en Java se basa en el principio LIFO (Last In First Out), lo que significa que el último elemento insertado es el primero en ser extraído. Es como una pila de platos: el último plato que colocas encima es el primero que coges. Stack permite elementos duplicados y no sigue el principio FIFO (First In First Out), que es característico de las colas."
    },
    {
      id: 3423,
      moduloId: 304,
      pregunta: "¿Cuál de los siguientes métodos añade un elemento al final de un ArrayList?",
      opciones: ["insert()", "add()", "append()", "put()"],
      respuestaCorrecta: 1,
      explicacion: "El método add() es el que se utiliza para añadir un elemento al final de un ArrayList en Java. También existe una sobrecarga de este método, add(int index, E element), que permite insertar un elemento en una posición específica. Los métodos insert(), append() y put() no son métodos estándar de ArrayList."
    },
    {
      id: 3424,
      moduloId: 304,
      pregunta: "¿Cuál es la diferencia principal entre while y do-while?",
      opciones: ["do-while siempre se ejecuta al menos una vez.", "while es más rápido que do-while.", "do-while no necesita condición.", "while siempre se ejecuta al menos una vez."],
      respuestaCorrecta: 0,
      explicacion: "La principal diferencia entre while y do-while es que do-while siempre ejecuta el bloque de código al menos una vez, incluso si la condición es falsa desde el principio, porque la condición se evalúa después de la primera ejecución. En contraste, while evalúa la condición antes de ejecutar el bloque, por lo que si la condición es falsa inicialmente, el bloque nunca se ejecuta."
    },
    {
      id: 3425,
      moduloId: 304,
      pregunta: "¿Para qué sirve un compilador en programación?",
      opciones: ["Para depurar errores en el código fuente.", "Para ejecutar directamente el código fuente.", "Para interpretar línea a línea un programa.", "Para transformar el código fuente en código máquina."],
      respuestaCorrecta: 3,
      explicacion: "Un compilador es un programa que traduce el código fuente escrito en un lenguaje de programación de alto nivel (como Java) a código máquina o código intermedio (como bytecode en el caso de Java) que puede ser ejecutado por la computadora. Este proceso de traducción se llama compilación y es un paso previo necesario para la ejecución del programa."
    },
    {
      id: 3426,
      moduloId: 304,
      pregunta: "¿Qué afirmación es CORRECTA sobre las clases abstractas en Java?",
      opciones: ["No se pueden instanciar, pero sí extender.", "Todos sus métodos deben ser estáticos.", "Pueden crear instancias directas.", "Solo pueden contener métodos abstractos."],
      respuestaCorrecta: 0,
      explicacion: "Una clase abstracta en Java es una clase que no puede ser instanciada directamente, solo extendida (heredada) por otras clases. Se declara con la palabra clave 'abstract' y puede contener métodos abstractos (sin implementación) que las subclases deben implementar. Sin embargo, también puede contener métodos concretos (con implementación) y no todos sus métodos tienen que ser estáticos."
    },
    {
      id: 3427,
      moduloId: 304,
      pregunta: "¿Qué clase permite leer datos desde la consola de una manera sencilla?",
      opciones: ["BufferedReader", "Scanner", "System.out", "JOptionPane"],
      respuestaCorrecta: 1,
      explicacion: "La clase Scanner proporciona métodos sencillos para leer diferentes tipos de datos desde varias fuentes, incluyendo la consola (System.in). Ofrece métodos como nextInt(), nextDouble(), nextLine(), etc., que facilitan la lectura de entrada del usuario. BufferedReader también puede leer desde la consola pero con menos funcionalidades específicas, System.out es para salida, y JOptionPane es para interfaces gráficas."
    },
    {
      id: 3428,
      moduloId: 304,
      pregunta: "Qué clase se usa para leer caracteres de forma eficiente mediante búfer en Java?",
      opciones: ["InputStreamReader", "PrintStream", "OutputStreamWriter", "BufferedReader"],
      respuestaCorrecta: 3,
      explicacion: "BufferedReader es la clase que se utiliza para leer caracteres de forma eficiente mediante un búfer en Java. La lectura mediante búfer mejora el rendimiento al reducir el número de accesos al sistema de E/S, leyendo bloques de caracteres en lugar de uno a uno. BufferedReader proporciona métodos como readLine() para leer líneas completas de texto."
    },
    {
      id: 3429,
      moduloId: 304,
      pregunta: "¿Qué define mejor un getter en una clase Java?",
      opciones: ["Un atributo especial de la clase.", "Un método que devuelve el valor de un atributo privado.", "Un constructor con parámetros.", "Un método que modifica un atributo privado."],
      respuestaCorrecta: 1,
      explicacion: "Un getter es un método que devuelve el valor de un atributo privado de una clase. Forma parte del patrón de encapsulamiento en Java, donde los atributos se declaran como privados y se accede a ellos a través de métodos públicos. Por convención, un getter tiene el nombre 'get' seguido del nombre del atributo con la primera letra en mayúscula, como en 'getNombre()'."
    },
    {
      id: 3430,
      moduloId: 304,
      pregunta: "¿Qué devuelve el método equals() de la clase Arrays?",
      opciones: ["El tamaño máximo permitido para un array.", "True si dos arrays son iguales en tamaño y contenido.", "Una copia exacta de un array.", "La suma de los elementos de un array."],
      respuestaCorrecta: 1,
      explicacion: "El método equals() de la clase Arrays devuelve true si los dos arrays especificados son iguales entre sí. Dos arrays son iguales si contienen los mismos elementos en el mismo orden. El método compara los valores elemento por elemento, por lo que dos arrays con los mismos elementos pero en diferente orden se consideran diferentes."
    },
    {
      id: 3431,
      moduloId: 304,
      pregunta: "¿Qué es el código fuente?",
      opciones: ["El programa en lenguaje máquina.", "El compilador de Java.", "El programa ejecutable.", "El programa escrito por el programador en un lenguaje de alto nivel."],
      respuestaCorrecta: 3,
      explicacion: "El código fuente es el programa escrito por el programador en un lenguaje de programación de alto nivel, como Java, C++, Python, etc. Es legible por humanos y contiene instrucciones que definen lo que debe hacer el programa. Este código fuente debe ser procesado por un compilador o intérprete para convertirlo en un formato que la computadora pueda ejecutar."
    },
    {
      id: 3432,
      moduloId: 304,
      pregunta: "¿Qué es un array en Java?",
      opciones: ["Una clase especial para almacenar objetos.", "Una estructura dinámica de datos.", "Una colección de datos de tipos diferentes.", "Una colección de elementos del mismo tipo, con acceso mediante índices."],
      respuestaCorrecta: 3,
      explicacion: "Un array en Java es una estructura de datos que almacena un conjunto fijo de elementos del mismo tipo. Los elementos se organizan de manera secuencial y se accede a ellos mediante un índice numérico que comienza en 0. La longitud de un array se determina cuando se crea y no puede cambiar durante la ejecución del programa, lo que lo diferencia de estructuras dinámicas como ArrayList."
    },
    {
      id: 3433,
      moduloId: 304,
      pregunta: "¿Qué es un ArrayList en Java?",
      opciones: ["Una lista dinámica que puede crecer o decrecer en tamaño.", "Un array estático que almacena datos primitivos.", "Una estructura que solo admite tipos numéricos.", "Una colección de tamaño fijo."],
      respuestaCorrecta: 0,
      explicacion: "ArrayList es una implementación de la interfaz List en Java que utiliza un array dinámico para almacenar elementos. A diferencia de los arrays convencionales, un ArrayList puede crecer o decrecer dinámicamente según sea necesario. Está implementado como una clase en el paquete java.util y puede almacenar cualquier tipo de objeto, no solo tipos numéricos."
    },
    {
      id: 3434,
      moduloId: 304,
      pregunta: "¿Qué estructura de control ejecuta un bloque de instrucciones si una condición es verdadera?",
      opciones: ["do-while", "while", "if", "switch"],
      respuestaCorrecta: 2,
      explicacion: "La estructura de control 'if' ejecuta un bloque de instrucciones solo si una condición especificada es verdadera. Es una estructura de control condicional básica en Java y en la mayoría de lenguajes de programación. Las otras opciones son estructuras de control de bucle (do-while, while) o de selección múltiple (switch), que tienen propósitos diferentes."
    },
    {
      id: 3435,
      moduloId: 304,
      pregunta: "¿Qué estructura de datos utiliza una Queue?",
      opciones: ["LIFO (Last In First Out)", "FIFO (First In First Out)", "Random Access", "FILO (First In Last Out)"],
      respuestaCorrecta: 1,
      explicacion: "Una Cola (Queue) en Java utiliza el principio FIFO (First In First Out), lo que significa que el primer elemento que se añade a la cola es el primero en ser eliminado. Es similar a una cola en la vida real, donde la primera persona que llega es la primera en ser atendida. Esto contrasta con una pila (Stack) que utiliza el principio LIFO (Last In First Out)."
    },
    {
      id: 3436,
      moduloId: 304,
      pregunta: "¿Qué hace el método `poll()` en una Queue en Java?",
      opciones: ["Devuelve el último elemento sin eliminarlo.", "Añade un elemento al final de la cola.", "Reordena los elementos de la cola.", "Elimina y devuelve el primer elemento de la cola."],
      respuestaCorrecta: 3,
      explicacion: "El método poll() en una Queue en Java elimina y devuelve el elemento en la cabeza de la cola (el primer elemento). Si la cola está vacía, devuelve null. A diferencia de remove(), poll() no lanza una excepción si la cola está vacía, lo que lo hace más seguro para casos donde la cola podría estar vacía."
    },
    {
      id: 3437,
      moduloId: 304,
      pregunta: "¿Qué hace este código?",
      recurso: {
        tipo: "codigo",
        contenido: `int numero = 1;
while (numero <= 3) {
  System.out.println(numero);
  numero++;
}`,
        lenguaje: "java"
      },
      opciones: ["No imprime nada", "Imprime 0, 1, 2", "Imprime 1, 2, 3", "Imprime 1, 2"],
      respuestaCorrecta: 2,
      explicacion: "Este código utiliza un bucle while para imprimir números. Comienza inicializando 'numero' a 1 y continúa el bucle mientras 'numero' sea menor o igual a 3. En cada iteración, imprime el valor actual de 'numero' y luego lo incrementa en 1. Por lo tanto, imprime 1, luego 2, y finalmente 3, antes de salir del bucle."
    },
    {
      id: 3438,
      moduloId: 304,
      pregunta: "¿Qué hace este método recursivo correctamente escrito?",
      recurso: {
        tipo: "codigo",
        contenido: `void imprimir(int x) {
  if (x > 0) {
      imprimir(x - 1);
      System.out.println(x);
  }
}`,
        lenguaje: "java"
      },
      opciones: ["Imprime del 1 hasta x.", "No imprime nada.", "Imprime solo el número x.", "Imprime del número x hacia 1."],
      respuestaCorrecta: 0,
      explicacion: "Este método recursivo imprime los números del 1 hasta x, en orden ascendente. Funciona llamándose a sí mismo con un valor decrementado (x-1) hasta que x llega a 0, momento en el que la condición 'x > 0' se vuelve falsa y las llamadas recursivas se detienen. La instrucción System.out.println(x) se ejecuta después de la llamada recursiva, lo que significa que los números se imprimen en orden ascendente al 'desenrollarse' la recursión."
    },
    {
      id: 3439,
      moduloId: 304,
      pregunta: "¿Qué imprimirá el siguiente código?",
      recurso: {
        tipo: "codigo",
        contenido: `Persona p = new Persona("Ana", "García", "555123");
System.out.println(p.getNombre());`,
        lenguaje: "java"
      },
      opciones: ["García", "555123", "Ana", "p"],
      respuestaCorrecta: 2,
      explicacion: "Este código crea un objeto de la clase Persona con los valores \"Ana\", \"García\" y \"555123\" como parámetros del constructor. Luego, llama al método getNombre() en este objeto, que presumiblemente devuelve el primer parámetro pasado al constructor, que es \"Ana\". Por lo tanto, imprime \"Ana\"."
    },
    {
      id: 3440,
      moduloId: 304,
      pregunta: "¿Qué imprimirá el siguiente fragmento de código?",
      recurso: {
        tipo: "codigo",
        contenido: `for (int i = 0; i < 3; i++) {
  System.out.println(i);
}`,
        lenguaje: "java"
      },
      opciones: ["1, 2, 3", "0, 1, 2", "0, 1, 2, 3", "1, 2"],
      respuestaCorrecta: 1,
      explicacion: "Este código utiliza un bucle for para imprimir números. El bucle inicializa 'i' a 0, continúa mientras 'i' sea menor que 3, y en cada iteración incrementa 'i' en 1. Por lo tanto, imprime 0, luego 1, y finalmente 2, antes de salir del bucle cuando 'i' llega a 3 (que no se imprime porque la condición 'i < 3' ya no es verdadera)."
    }
  ]
};

export default moduloDiezAbril;