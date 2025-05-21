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
  id: 315,
  nombre: "Simulacro Java (15/05/2025)",
  asignaturaId: 3,
  esExamen: true,
  descripcion: "Conceptos fundamentales de Java: clases, interfaces, recursividad, JDBC, Swing y POO.",
  preguntas: [
    {
      id: 31501,
      moduloId: 315,
      pregunta: "¿Cuál de estas afirmaciones sobre clases abstractas en Java es verdadera?",
      opciones: [
        "Las clases abstractas no pueden tener constructores",
        "Las clases abstractas deben ser final",
        "No pueden tener atributos",
        "Una clase abstracta puede contener métodos concretos y abstractos"
      ],
      respuestaCorrecta: 3,
      explicacion: "Una clase abstracta en Java puede contener tanto métodos abstractos (sin implementación) como métodos concretos (con implementación). Esto es una de las principales diferencias con las interfaces (antes de Java 8). Además, las clases abstractas pueden tener constructores (aunque no pueden ser instanciadas directamente), pueden tener atributos de cualquier tipo y modificador de acceso, y no pueden ser declaradas como 'final' ya que el propósito de una clase abstracta es ser extendida."
    },
    {
      id: 31502,
      moduloId: 315,
      pregunta: "¿Cuál de estos es un problema clásico resuelto con recursividad?",
      opciones: [
        "Suma de dos números",
        "Ordenamiento por burbuja",
        "Entrada de datos",
        "Fibonacci"
      ],
      respuestaCorrecta: 3,
      explicacion: "La secuencia de Fibonacci es un problema clásico que se resuelve naturalmente con recursividad. La definición recursiva de Fibonacci establece que F(n) = F(n-1) + F(n-2) con casos base F(0) = 0 y F(1) = 1. Esta definición se traduce directamente a una función recursiva. Otros problemas clásicos resueltos con recursividad incluyen el cálculo de factorial, recorrido de árboles, búsqueda en profundidad, torres de Hanoi, pero no los mencionados en las otras opciones."
    },
    {
      id: 31503,
      moduloId: 315,
      pregunta: "¿Cuál de estos es un URL de conexión válido a MySQL?",
      opciones: [
        "jdbc:mysql:testdb",
        "jdbc:mysql://localhost/testdb",
        "mysql://jdbc.local/testdb",
        "connect:mysql/testdb"
      ],
      respuestaCorrecta: 1,
      explicacion: "El formato correcto para una URL de conexión JDBC a MySQL es 'jdbc:mysql://[host][:puerto]/[base_de_datos]'. Por lo tanto, 'jdbc:mysql://localhost/testdb' es la opción correcta, donde se especifica el protocolo (jdbc:mysql://), el host (localhost) y la base de datos (testdb). Las otras opciones no siguen la sintaxis correcta para una URL de conexión JDBC a MySQL."
    },
    {
      id: 31504,
      moduloId: 315,
      pregunta: "¿Cuál es el efecto de declarar un método como final en Java?",
      opciones: [
        "No puede ser sobreescrito",
        "Es igual que un método estático, pero no puede ser sobrescrito.",
        "Se convierte en método abstracto",
        "Puede ser sobreescrito por clases hijas"
      ],
      respuestaCorrecta: 0,
      explicacion: "Cuando un método se declara como 'final' en Java, significa que no puede ser sobreescrito (override) por ninguna subclase. Esto se utiliza para evitar que se modifique el comportamiento de un método en las clases derivadas. Los métodos final y estático son conceptos diferentes; un método estático pertenece a la clase, no a instancias específicas. Un método final no puede ser abstracto, ya que abstracto implica que debe ser implementado por subclases, mientras que final prohíbe cualquier implementación adicional."
    },
    {
      id: 31505,
      moduloId: 315,
      pregunta: "¿Cuál es el método para establecer una conexión a una base de datos en Java usando JDBC?",
      opciones: [
        "loadDriver()",
        "Class.forName(\"...\")",
        "connect()",
        "DriverManager.getConnection()"
      ],
      respuestaCorrecta: 3,
      explicacion: "El método correcto para establecer una conexión a una base de datos en Java usando JDBC es DriverManager.getConnection(). Este método toma como parámetro la URL de conexión, y opcionalmente el nombre de usuario y contraseña, y devuelve un objeto Connection. El método Class.forName() se utilizaba tradicionalmente para cargar el controlador JDBC, pero no establece la conexión. Los métodos loadDriver() y connect() no son parte de la API estándar de JDBC."
    },
    {
      id: 31506,
      moduloId: 315,
      pregunta: "¿Cuál es el propósito de una interfaz en Java?",
      opciones: [
        "Permitir la herencia múltiple de comportamiento",
        "Definir una jerarquía de clases base",
        "Implementar métodos con lógica interna",
        "Permitir el acceso directo a atributos públicos"
      ],
      respuestaCorrecta: 0,
      explicacion: "El propósito principal de una interfaz en Java es permitir la herencia múltiple de comportamiento. Como Java no permite la herencia múltiple de clases, las interfaces proporcionan un mecanismo para que una clase pueda 'heredar' comportamientos de múltiples fuentes. Las interfaces definen un contrato (métodos que deben implementarse) sin proporcionar implementaciones (excepto métodos default en Java 8+). No definen jerarquías de clases base, no implementan métodos con lógica interna (tradicionalmente), y no tienen nada que ver con el acceso a atributos."
    },
    {
      id: 31507,
      moduloId: 315,
      pregunta: "¿Cuál es el resultado de ejecutar este código?",
      recurso: {
        tipo: "codigo",
        contenido: `public class Test {

    public static void main(String[] args) {

        System.out.println(fibonacci(4));

    }


    static int fibonacci(int n) {

        if (n <= 1){

            return n;

        }else{

            return fibonacci(n - 1) + fibonacci(n - 2);

        }

    }

}`,
        lenguaje: "java"
      },
      opciones: [
        "4",
        "2",
        "3",
        "5"
      ],
      respuestaCorrecta: 2,
      explicacion: "Este código calcula el término n-ésimo de la secuencia de Fibonacci usando recursividad. La secuencia comienza con 0 y 1, y cada término siguiente es la suma de los dos anteriores: 0, 1, 1, 2, 3, 5, 8, etc. Para n=4, el cálculo sería: fibonacci(4) = fibonacci(3) + fibonacci(2) = (fibonacci(2) + fibonacci(1)) + (fibonacci(1) + fibonacci(0)) = ((fibonacci(1) + fibonacci(0)) + 1) + (1 + 0) = ((1 + 0) + 1) + (1 + 0) = (1 + 1) + 1 = 3. Por lo tanto, el resultado es 3."
    },
    {
      id: 31508,
      moduloId: 315,
      pregunta: "¿Cuál es el resultado del siguiente código?",
      recurso: {
        tipo: "codigo",
        contenido: `public static int mystery(int n) {

    if (n == 1) return 1;

    return n * mystery(n - 1);

}

System.out.println(mystery(4));`,
        lenguaje: "java"
      },
      opciones: [
        "16",
        "4",
        "24",
        "10"
      ],
      respuestaCorrecta: 2,
      explicacion: "La función 'mystery' implementa el cálculo del factorial de un número de forma recursiva. El factorial de n (representado como n!) es el producto de todos los enteros positivos desde 1 hasta n. Para n=4, el cálculo es: mystery(4) = 4 * mystery(3) = 4 * (3 * mystery(2)) = 4 * (3 * (2 * mystery(1))) = 4 * (3 * (2 * 1)) = 4 * (3 * 2) = 4 * 6 = 24. Por lo tanto, el resultado es 24, que es igual a 4! (factorial de 4)."
    },
    {
      id: 31509,
      moduloId: 315,
      pregunta: "¿Cuál es el valor de salida del siguiente código?",
      recurso: {
        tipo: "codigo",
        contenido: `public static int sum(int n) {

    if (n == 0) return 0;

    return n + sum(n - 1);

}

System.out.println(sum(3));`,
        lenguaje: "java"
      },
      opciones: [
        "3",
        "0",
        "6",
        "1"
      ],
      respuestaCorrecta: 2,
      explicacion: "La función 'sum' calcula la suma de todos los números enteros desde 1 hasta n de forma recursiva. Para n=3, el cálculo sería: sum(3) = 3 + sum(2) = 3 + (2 + sum(1)) = 3 + (2 + (1 + sum(0))) = 3 + (2 + (1 + 0)) = 3 + (2 + 1) = 3 + 3 = 6. Por lo tanto, el resultado es 6, que efectivamente es la suma de 1+2+3."
    },
    {
      id: 31510,
      moduloId: 315,
      pregunta: "¿Cuál es la diferencia principal entre una interfaz y una clase abstracta en Java?",
      opciones: [
        "Una interfaz puede tener atributos privados",
        "Una clase abstracta puede tener implementación de métodos, la interfaz no (hasta Java 7)",
        "Una clase abstracta puede heredar de múltiples clases",
        "Una interfaz puede contener constructores"
      ],
      respuestaCorrecta: 1,
      explicacion: "La diferencia principal entre una interfaz y una clase abstracta en Java es que una clase abstracta puede tener implementación de métodos (métodos concretos), mientras que las interfaces, hasta Java 7, solo podían declarar métodos abstractos sin implementación. A partir de Java 8, las interfaces pueden tener métodos default y static con implementación. Las interfaces no pueden tener atributos privados (solo constantes públicas), no pueden contener constructores, y ni las interfaces ni las clases abstractas pueden heredar de múltiples clases (Java no permite herencia múltiple de clases)."
    },
    {
      id: 31511,
      moduloId: 315,
      pregunta: "¿Cuál es la principal ventaja de usar recursividad en algoritmos?",
      opciones: [
        "Facilita la escritura y comprensión de soluciones para problemas que se definen en términos de sí mismos",
        "Evita la necesidad de definir funciones",
        "Reduce el uso de memoria al mínimo",
        "Siempre mejora el rendimiento respecto a soluciones iterativas"
      ],
      respuestaCorrecta: 0,
      explicacion: "La principal ventaja de usar recursividad en algoritmos es que facilita la escritura y comprensión de soluciones para problemas que se definen naturalmente en términos de sí mismos. Problemas como Fibonacci, factorial, recorrido de árboles, o las Torres de Hanoi tienen definiciones recursivas simples que se traducen directamente a código. La recursividad no evita definir funciones (al contrario, requiere definir al menos una función recursiva), no reduce el uso de memoria (generalmente usa más por la pila de llamadas), y rara vez mejora el rendimiento (las soluciones iterativas suelen ser más eficientes)."
    },
    {
      id: 31512,
      moduloId: 315,
      pregunta: "¿Cuál es una buena razón para usar recursividad?",
      opciones: [
        "Para resolver problemas que se pueden dividir en subproblemas similares",
        "Para reducir el tiempo de ejecución en cualquier caso",
        "Para evitar el uso de interfaces",
        "Para evitar herencia múltiple"
      ],
      respuestaCorrecta: 0,
      explicacion: "Una buena razón para usar recursividad es resolver problemas que se pueden dividir en subproblemas similares más pequeños (divide y vencerás). Este enfoque es particularmente útil en algoritmos como QuickSort, MergeSort, recorrido de estructuras de datos jerárquicas (árboles, grafos), y problemas que siguen el principio de subestructura óptima en programación dinámica. La recursividad no se relaciona con evitar interfaces o herencia múltiple, y generalmente no reduce el tiempo de ejecución comparado con soluciones iterativas equivalentes (a menudo es más lenta debido a la sobrecarga de llamadas a funciones)."
    },
    {
      id: 31513,
      moduloId: 315,
      pregunta: "¿Qué clase se usa para crear una ventana en Swing?",
      opciones: [
        "Window",
        "Form",
        "JPanel",
        "JFrame"
      ],
      respuestaCorrecta: 3,
      explicacion: "En Java Swing, la clase JFrame se utiliza para crear una ventana principal con todos los elementos de una ventana estándar (barra de título, botones de minimizar/maximizar/cerrar, etc.). JPanel es un contenedor que se usa dentro de ventanas para organizar componentes, pero no es una ventana en sí. Window es una clase abstracta de AWT que sirve como base para ventanas, pero no se usa directamente. Form no existe en la biblioteca estándar de Java Swing."
    },
    {
      id: 31514,
      moduloId: 315,
      pregunta: "¿Qué clase se utiliza para ejecutar una consulta SQL?",
      opciones: [
        "ResultSet",
        "Database",
        "Statement",
        "Connection"
      ],
      respuestaCorrecta: 2,
      explicacion: "En JDBC, la clase Statement (o sus subclases PreparedStatement y CallableStatement) se utiliza para ejecutar consultas SQL. Primero se obtiene un objeto Connection para conectar con la base de datos, luego se crea un Statement a partir de esa conexión, y finalmente se utiliza el método executeQuery() o executeUpdate() para ejecutar la consulta. ResultSet almacena los resultados de una consulta SELECT, pero no ejecuta la consulta. Connection representa la conexión a la base de datos. Database no es una clase estándar en JDBC."
    },
    {
      id: 31515,
      moduloId: 315,
      pregunta: "¿Qué componente se usa para agregar un botón?",
      opciones: [
        "SwingButton",
        "JToggle",
        "JForm",
        "JButton"
      ],
      respuestaCorrecta: 3,
      explicacion: "En Java Swing, la clase JButton se utiliza para crear y agregar botones a la interfaz gráfica. Los botones permiten a los usuarios iniciar acciones cuando se hace clic en ellos. SwingButton no existe en la biblioteca estándar de Swing. JToggle es una aproximación incorrecta a JToggleButton, que es un tipo específico de botón que puede estar en estado seleccionado o no seleccionado. JForm no existe en la API de Swing."
    },
    {
      id: 31516,
      moduloId: 315,
      pregunta: "¿Qué condición detiene una función recursiva?",
      opciones: [
        "El uso de return",
        "La condición base",
        "La llamada al método principal",
        "El uso de break"
      ],
      respuestaCorrecta: 1,
      explicacion: "La condición base (o caso base) es lo que detiene una función recursiva. Es una condición especial que permite que la función retorne un resultado sin hacer más llamadas recursivas, evitando así la recursión infinita. Por ejemplo, en el cálculo de factorial, la condición base es cuando n=0 o n=1, donde se retorna directamente 1. El uso de return por sí solo no detiene la recursividad si no hay una condición que evite llamadas adicionales. Break no se usa para detener recursión, y la llamada al método principal no tiene relación con detener la recursión."
    },
    {
      id: 31517,
      moduloId: 315,
      pregunta: "¿Qué es el polimorfismo en programación orientada a objetos?",
      opciones: [
        "El uso de una misma interfaz para representar distintos comportamientos",
        "La encapsulación de métodos",
        "El proceso de ocultar los atributos de una clase",
        "La posibilidad de una clase de heredar múltiples clases"
      ],
      respuestaCorrecta: 0,
      explicacion: "El polimorfismo en programación orientada a objetos es la capacidad de utilizar una misma interfaz (definición de método) para representar distintos comportamientos dependiendo del tipo de objeto que realice la implementación. Permite tratar objetos de diferentes clases que comparten una misma interfaz o superclase de manera uniforme. La encapsulación es el principio de ocultar la implementación interna y exponer solo lo necesario. Ocultar atributos es parte de la encapsulación. La herencia múltiple se refiere a la capacidad de heredar de más de una clase, lo cual no está directamente relacionado con el polimorfismo."
    },
    {
      id: 31518,
      moduloId: 315,
      pregunta: "¿Qué estructura de datos se utiliza comúnmente para implementar la recursividad de forma iterativa?",
      opciones: [
        "Árbol binario",
        "Cola (Queue)",
        "Lista enlazada",
        "Pila (Stack)"
      ],
      respuestaCorrecta: 3,
      explicacion: "La pila (Stack) es la estructura de datos que se utiliza comúnmente para implementar algoritmos recursivos de forma iterativa. Esto se debe a que la recursión naturalmente utiliza la pila de llamadas del sistema para mantener el estado de cada llamada recursiva. Al convertir un algoritmo recursivo a iterativo, se simula esta pila de llamadas mediante una pila explícita que almacena los estados pendientes. Las colas se utilizan en recorridos en anchura (BFS), mientras que los árboles binarios y listas enlazadas son estructuras para almacenar datos, no para implementar recursividad."
    },
    {
      id: 31519,
      moduloId: 315,
      pregunta: "¿Qué hace el método executeUpdate() en JDBC?",
      opciones: [
        "Devuelve un objeto ResultSet",
        "Crea la tabla",
        "Ejecuta una consulta de inserción, actualización o eliminación",
        "Cierra la conexión"
      ],
      respuestaCorrecta: 2,
      explicacion: "El método executeUpdate() en JDBC se utiliza para ejecutar sentencias SQL que modifican la base de datos, como INSERT, UPDATE, DELETE, o sentencias DDL como CREATE TABLE, ALTER TABLE, etc. Devuelve un entero que indica el número de filas afectadas por la operación o 0 para sentencias que no afectan filas. A diferencia de executeQuery(), que se usa para consultas SELECT y devuelve un ResultSet, executeUpdate() no devuelve datos. Este método no crea tablas por sí mismo (aunque puede ejecutar una sentencia CREATE TABLE) ni cierra conexiones."
    },
    {
      id: 31520,
      moduloId: 315,
      pregunta: "¿Qué hace el siguiente código?",
      recurso: {
        tipo: "codigo",
        contenido: `JFrame f = new JFrame();
f.setSize(300, 200);
f.setVisible(true);`,
        lenguaje: "java"
      },
      opciones: [
        "Imprime \"300x200\" en consola",
        "Crea y muestra una ventana vacía",
        "Cierra el programa",
        "Muestra un botón"
      ],
      respuestaCorrecta: 1,
      explicacion: "Este código crea una instancia de JFrame (una ventana en Swing), establece su tamaño a 300 píxeles de ancho por 200 píxeles de alto con el método setSize(), y finalmente la hace visible con el método setVisible(true). El resultado es una ventana vacía (sin componentes) que se muestra en pantalla con las dimensiones especificadas. No imprime nada en consola, no cierra el programa, y no muestra ningún botón ya que no se ha añadido ningún componente a la ventana."
    },
     {
      id: 31521,
      moduloId: 315,
      pregunta: "¿Qué imprime el siguiente código?",
      recurso: {
        tipo: "codigo",
        contenido: `public static void print(int n) {

    if (n == 0) return;

    print(n - 1);

    System.out.print(n + " ");

}

print(3);`,
        lenguaje: "java"
      },
      opciones: [
        "0 1 2",
        "1 2 3",
        "3 2 1",
        "3 1 2"
      ],
      respuestaCorrecta: 1,
      explicacion: "Este código implementa una función recursiva que imprime números del 1 al n en orden ascendente. La recursión funciona así: print(3) llama a print(2), que llama a print(1), que llama a print(0). Como n=0 en print(0), retorna sin imprimir nada. Luego, print(1) imprime '1 ', print(2) imprime '2 ', y finalmente print(3) imprime '3 '. La clave está en que la impresión ocurre después de la llamada recursiva, lo que hace que los números se impriman en orden ascendente: '1 2 3'."
    },
    {
      id: 31522,
      moduloId: 315,
      pregunta: "¿Qué imprime el siguiente fragmento de código?",
      recurso: {
        tipo: "codigo",
        contenido: `abstract class Figura {

    abstract void dibujar();

}


class Rectangulo extends Figura {

    void dibujar() {

        System.out.println("Dibujo un rectángulo");

    }

}


public class Test {

    public static void main(String[] args) {

        Figura f = new Rectangulo();

        f.dibujar();

    }

}`,
        lenguaje: "java"
      },
      opciones: [
        "Error de compilación",
        "Dibujo un rectángulo",
        "Dibujo una figura",
        "null"
      ],
      respuestaCorrecta: 1,
      explicacion: "Este código define una clase abstracta 'Figura' con un método abstracto 'dibujar()', y una subclase 'Rectangulo' que implementa ese método. En el método main, se crea una instancia de Rectangulo pero se asigna a una variable de tipo Figura (esto es polimorfismo). Cuando se llama a f.dibujar(), se ejecuta la implementación de la clase Rectangulo, debido al enlace dinámico en Java. Por lo tanto, se imprime 'Dibujo un rectángulo'. No hay error de compilación porque Rectangulo implementa correctamente el método abstracto."
    },
    {
      id: 31523,
      moduloId: 315,
      pregunta: "¿Qué imprime este código?",
      recurso: {
        tipo: "codigo",
        contenido: `class A {

    void mostrar() {

        System.out.println("Clase A");

    }

}


class B extends A {

    void mostrar() {

        System.out.println("Clase B");

    }

}


public class Test {

    public static void main(String[] args) {

        A obj = new B();

        obj.mostrar();

    }

}`,
        lenguaje: "java"
      },
      opciones: [
        "Clase A",
        "null",
        "Clase B",
        "Error en tiempo de ejecución"
      ],
      respuestaCorrecta: 2,
      explicacion: "Este código demuestra el polimorfismo en Java. Se declara una variable 'obj' de tipo A, pero se inicializa con una instancia de la clase B. Cuando se llama al método mostrar(), Java utiliza el principio de enlace dinámico (dynamic binding) para determinar qué versión del método ejecutar. Como el objeto real es de tipo B, se ejecuta el método mostrar() de la clase B, imprimiendo 'Clase B'. Esto ocurre aunque la variable sea de tipo A, porque Java determina el método a llamar basándose en el tipo real del objeto, no en el tipo de la variable que lo referencia."
    },
    {
      id: 31524,
      moduloId: 315,
      pregunta: "¿Qué imprime este código?",
      recurso: {
        tipo: "codigo",
        contenido: `public static int fib(int n) {

    if (n <= 1) return n;

    return fib(n - 1) + fib(n - 2);

}

System.out.println(fib(5))`,
        lenguaje: "java"
      },
      opciones: [
        "5",
        "13",
        "3",
        "8"
      ],
      respuestaCorrecta: 0,
      explicacion: "Esta función calcula el n-ésimo número de la secuencia de Fibonacci usando recursión. La secuencia comienza con 0 y 1, y cada número siguiente es la suma de los dos anteriores. Los primeros números de Fibonacci son: 0, 1, 1, 2, 3, 5, 8, 13, 21, etc. Para fib(5), el resultado es el 5º número de la secuencia (empezando a contar desde 0), que es 5. El cálculo se descompone así: fib(5) = fib(4) + fib(3) = (fib(3) + fib(2)) + (fib(2) + fib(1)) = ((fib(2) + fib(1)) + (fib(1) + fib(0))) + ((fib(1) + fib(0)) + 1) = (((fib(1) + fib(0)) + 1) + (1 + 0)) + ((1 + 0) + 1) = (((1 + 0) + 1) + 1) + (1 + 1) = ((1 + 1) + 1) + 2 = (2 + 1) + 2 = 3 + 2 = 5."
    },
    {
      id: 31525,
      moduloId: 315,
      pregunta: "¿Qué método se usa para cerrar una ventana cuando se hace clic en la \"X\"?",
      opciones: [
        "f.setCloseOnExit()",
        "f.terminate()",
        "f.close()",
        "f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE)"
      ],
      respuestaCorrecta: 3,
      explicacion: "El método setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE) se usa para especificar qué debe hacer la aplicación cuando se cierra la ventana haciendo clic en la \"X\" de la barra de título. La constante EXIT_ON_CLOSE indica que el programa debe terminar completamente cuando se cierra la ventana. Otras opciones incluyen HIDE_ON_CLOSE (oculta la ventana), DISPOSE_ON_CLOSE (libera los recursos pero no termina la aplicación) y DO_NOTHING_ON_CLOSE (ignora el clic). Los métodos setCloseOnExit(), terminate() y close() no existen en la API estándar de JFrame."
    },
    {
      id: 31526,
      moduloId: 315,
      pregunta: "¿Qué método se usa para hacer visible un JFrame?",
      opciones: [
        "show(true)",
        "setVisible(true)",
        "setDisplay(true)",
        "display(true)"
      ],
      respuestaCorrecta: 1,
      explicacion: "El método setVisible(true) se utiliza para hacer visible un JFrame en Java Swing. Este método hereda de la clase Component y controla la visibilidad del componente. Cuando se establece en true, el JFrame aparece en pantalla. Por defecto, los JFrames se crean con visibilidad establecida en false, por lo que es necesario llamar a setVisible(true) explícitamente. Los métodos show(true) (obsoleto), setDisplay(true) y display(true) no existen en la API estándar de JFrame para controlar la visibilidad."
    },
    {
      id: 31527,
      moduloId: 315,
      pregunta: "¿Qué ocurre al pasar un objeto como parámetro a un método en Java?",
      opciones: [
        "Se pasa la referencia por valor",
        "Se pasa el objeto por referencia",
        "Se pasa una copia del objeto completo",
        "Se pasa la dirección de memoria"
      ],
      respuestaCorrecta: 1,
      explicacion: "En Java, cuando se pasa un objeto como parámetro a un método, se pasa por referencia. Esto significa que el método recibe una referencia al objeto original, no una copia completa del mismo. Como resultado, cualquier modificación que se realice sobre el objeto dentro del método afectará al objeto original fuera del método. Esta es una diferencia importante respecto a los tipos primitivos (int, float, etc.), que sí se pasan por valor. Esta explicación es una simplificación didáctica del comportamiento real de Java (que técnicamente pasa una copia del valor de la referencia), pero resulta práctica para entender el comportamiento observable de los objetos en los métodos."
    },
    {
      id: 31528,
      moduloId: 315,
      pregunta: "¿Qué ocurre si se intenta instanciar directamente una interfaz en Java?",
      opciones: [
        "La JVM lo permite si se usa reflexión",
        "Error de compilación",
        "Se crea una instancia con métodos vacíos",
        "Se lanza una excepción"
      ],
      respuestaCorrecta: 1,
      explicacion: "En Java, no se pueden instanciar directamente las interfaces usando el operador new (por ejemplo, new MiInterfaz()). Intentar hacerlo resultará en un error de compilación. Las interfaces son tipos abstractos que definen un contrato pero no proporcionan implementaciones completas. Para usar una interfaz, se debe crear una clase que la implemente o usar una clase anónima/expresión lambda (en el caso de interfaces funcionales). La reflexión no permite instanciar interfaces directamente, y Java no crea automáticamente instancias con métodos vacíos."
    },
    {
      id: 31529,
      moduloId: 315,
      pregunta: "¿Qué ocurrirá si una función recursiva no tiene una condición de parada?",
      opciones: [
        "Lanzará StackOverflowError",
        "No devolverá nada",
        "Se ejecutará solo una vez",
        "Producirá un error de compilación"
      ],
      respuestaCorrecta: 0,
      explicacion: "Si una función recursiva no tiene una condición de parada (caso base), continuará llamándose a sí misma indefinidamente, causando eventualmente un StackOverflowError. Esto ocurre porque cada llamada recursiva añade un nuevo marco de ejecución a la pila de llamadas, y cuando esta pila se llena, la JVM lanza el error. La falta de condición de parada no produce un error de compilación, ya que el compilador no verifica la lógica de terminación de la recursión. Tampoco se ejecutará solo una vez ni simplemente 'no devolverá nada' sin algún tipo de error."
    },
    {
      id: 31530,
      moduloId: 315,
      pregunta: "¿Qué palabra clave se utiliza para evitar la herencia de una clase?",
      opciones: [
        "final",
        "protected",
        "static",
        "private"
      ],
      respuestaCorrecta: 0,
      explicacion: "La palabra clave 'final' se utiliza para evitar que una clase sea heredada en Java. Cuando una clase se declara como final (por ejemplo, public final class MiClase {...}), ninguna otra clase puede extenderla. Esto se usa a menudo por razones de seguridad o diseño, cuando el comportamiento de una clase debe ser inmutable o cuando se quiere prevenir la sobreescritura de métodos. Las clases String, Integer y System en Java son ejemplos de clases finales. Protected y private son modificadores de acceso para miembros, y static se refiere a miembros pertenecientes a la clase en lugar de a instancias."
    },
     {
      id: 31531,
      moduloId: 315,
      pregunta: "¿Qué pasa si una clase implementa una interfaz pero no sobrescribe todos sus métodos?",
      opciones: [
        "El compilador crea métodos vacíos automáticamente",
        "La clase debe declararse como abstracta",
        "Se genera una excepción en tiempo de ejecución",
        "Se compila sin errores"
      ],
      respuestaCorrecta: 1,
      explicacion: "Si una clase implementa una interfaz pero no sobrescribe (implementa) todos los métodos abstractos declarados en esa interfaz, la clase debe declararse como abstracta. Esto es porque la clase es parcialmente abstracta; tiene algunos métodos sin implementación. Una clase abstracta no puede ser instanciada directamente, pero puede ser extendida por subclases que implementen los métodos faltantes. El compilador no crea métodos automáticamente, y definitivamente no se puede compilar sin errores si la clase no es abstracta y faltan implementaciones de métodos."
    },
    {
      id: 31532,
      moduloId: 315,
      pregunta: "¿Qué representa el concepto de abstracción en Java?",
      opciones: [
        "Usar clases genéricas",
        "Proteger los datos de acceso externo",
        "Crear múltiples instancias de una clase",
        "Mostrar solo los detalles esenciales de una clase y ocultar lo complejo"
      ],
      respuestaCorrecta: 3,
      explicacion: "La abstracción en Java (y en programación orientada a objetos en general) es el concepto de mostrar solo los detalles esenciales y ocultar la complejidad innecesaria. Permite a los desarrolladores crear modelos simplificados del mundo real enfocándose en la funcionalidad relevante. Se implementa mediante interfaces y clases abstractas, que definen qué puede hacer un objeto sin especificar cómo lo hace. Proteger datos es encapsulación, no abstracción. Usar clases genéricas está relacionado con el tipado genérico. Crear múltiples instancias es simplemente instanciación."
    },
    {
      id: 31533,
      moduloId: 315,
      pregunta: "¿Qué representa el siguiente fragmento de código?",
      recurso: {
        tipo: "codigo",
        contenido: `public interface Conectable {

    void conectar();

    default void reiniciar() {

        System.out.println("Reiniciando...");

    }

}`,
        lenguaje: "java"
      },
      opciones: [
        "Una interfaz con un método estático",
        "Una clase abstracta",
        "Una interfaz funcional",
        "Una interfaz con método por defecto (Java 8+)"
      ],
      respuestaCorrecta: 3,
      explicacion: "Este código representa una interfaz con un método por defecto (default method), característica introducida en Java 8. Los métodos por defecto permiten añadir implementaciones concretas a las interfaces sin romper la compatibilidad con código existente. En este caso, el método 'reiniciar()' tiene una implementación por defecto que imprime 'Reiniciando...'. No es una clase abstracta porque usa la palabra clave 'interface'. No es sólo una interfaz funcional porque tiene dos métodos (para ser funcional, debería tener exactamente un método abstracto). Y no tiene ningún método estático (que usaría la palabra clave 'static')."
    },
    {
      id: 31534,
      moduloId: 315,
      pregunta: "¿Qué resultado devuelve esta función recursiva para n = 3?",
      recurso: {
        tipo: "codigo",
        contenido: `static int multiplicar(int n) {

    if (n == 1){

        return 2;

    }else{

        return 2 * multiplicar(n - 1);

    }

}`,
        lenguaje: "java"
      },
      opciones: [
        "6",
        "2",
        "4",
        "8"
      ],
      respuestaCorrecta: 3,
      explicacion: "Esta función recursiva calcula potencias de 2, específicamente 2^n. Para n=3, el cálculo es: multiplicar(3) = 2 * multiplicar(2) = 2 * (2 * multiplicar(1)) = 2 * (2 * 2) = 2 * 4 = 8. El caso base es n=1, donde retorna 2 (2^1). Para cada llamada recursiva, multiplica 2 por el resultado de la llamada anterior, efectivamente calculando 2^n. Por lo tanto, multiplicar(3) devuelve 8, que es igual a 2^3."
    },
    {
      id: 31535,
      moduloId: 315,
      pregunta: "¿Qué salida da el siguiente código recursivo?",
      recurso: {
        tipo: "codigo",
        contenido: `public class Test {

    public static void main(String[] args) {

        System.out.println(suma(4));

    }


    static int suma(int n) {

        if (n == 0){

            return 0;

        }else{

            return n + suma(n - 1);

        }

    }

}`,
        lenguaje: "java"
      },
      opciones: [
        "10",
        "6",
        "Error",
        "4"
      ],
      respuestaCorrecta: 0,
      explicacion: "Este código implementa una función recursiva que calcula la suma de los números enteros desde 1 hasta n. Para n=4, el cálculo es: suma(4) = 4 + suma(3) = 4 + (3 + suma(2)) = 4 + (3 + (2 + suma(1))) = 4 + (3 + (2 + (1 + suma(0)))) = 4 + (3 + (2 + (1 + 0))) = 4 + (3 + (2 + 1)) = 4 + (3 + 3) = 4 + 6 = 10. El resultado es 10, que es la suma de 1+2+3+4."
    },
    {
      id: 31536,
      moduloId: 315,
      pregunta: "¿Qué salida imprime el siguiente código?",
      recurso: {
        tipo: "codigo",
        contenido: `class Persona {

    String nombre = "Juan";

}


public class Test {

    public static void main(String[] args) {

        Persona p = new Persona();

        cambiar(p);

        System.out.println(p.nombre);

    }


    static void cambiar(Persona p) {

        p.nombre = "Ana";

    }

}`,
        lenguaje: "java"
      },
      opciones: [
        "Juan",
        "null",
        "Ana",
        "Error de compilación"
      ],
      respuestaCorrecta: 2,
      explicacion: "Este código demuestra cómo funcionan las referencias a objetos en Java. Cuando se pasa un objeto como parámetro a un método, se pasa una copia de la referencia al objeto. Esto significa que el método puede modificar las propiedades del objeto referenciado. En este código, se crea un objeto Persona con nombre 'Juan', luego se pasa al método cambiar() que modifica el atributo nombre a 'Ana'. Como ambas referencias (la original p y la del parámetro del método) apuntan al mismo objeto en memoria, el cambio es visible después de que el método retorna, y se imprime 'Ana'."
    },
    {
      id: 31537,
      moduloId: 315,
      pregunta: "¿Qué salida imprime el siguiente código?",
      recurso: {
        tipo: "codigo",
        contenido: `public class Test {

    public static void main(String[] args) {

        System.out.println(suma(4));

    }


    static int suma(int n) {

        if (n == 0){

            return 0;

        }else{

            return n + suma(n - 1);

        }

    }

}`,
        lenguaje: "java"
      },
      opciones: [
        "8",
        "Error de compilación",
        "5",
        "10"
      ],
      respuestaCorrecta: 3,
      explicacion: "Este código calcula la suma de los números del 1 al n mediante recursión. El método suma() se llama a sí mismo con valores decrecientes hasta llegar al caso base (n=0). Para n=4, el cálculo es: suma(4) = 4 + suma(3) = 4 + (3 + suma(2)) = 4 + (3 + (2 + suma(1))) = 4 + (3 + (2 + (1 + suma(0)))) = 4 + (3 + (2 + (1 + 0))) = 4 + (3 + (2 + 1)) = 4 + (3 + 3) = 4 + 6 = 10. Por lo tanto, imprime 10, que es la suma de 1+2+3+4."
    },
    {
      id: 31538,
      moduloId: 315,
      pregunta: "¿Qué salida produce este código?",
      recurso: {
        tipo: "codigo",
        contenido: `interface Animal {

    void sonido();

}


class Vaca implements Animal {

    public void sonido() {

        System.out.println("Muuu");

    }

}


public class Test {

    public static void main(String[] args) {

        Animal a = new Vaca();

        a.sonido();

    }

}`,
        lenguaje: "java"
      },
      opciones: [
        "Error en tiempo de ejecución",
        "null",
        "Vaca",
        "Muuu"
      ],
      respuestaCorrecta: 3,
      explicacion: "Este código demuestra el polimorfismo en Java mediante interfaces. Se declara una variable 'a' de tipo Animal (interfaz) y se inicializa con una instancia de la clase Vaca, que implementa la interfaz Animal. Cuando se llama al método sonido(), Java ejecuta la implementación de la clase Vaca debido al enlace dinámico. Por lo tanto, se imprime 'Muuu'. No hay error de compilación ni de tiempo de ejecución porque la clase Vaca implementa correctamente el método sonido() definido en la interfaz Animal."
    },
    {
      id: 31539,
      moduloId: 315,
      pregunta: "¿Qué se necesita para convertir un algoritmo recursivo en uno iterativo?",
      opciones: [
        "Uso de bucles y estructuras auxiliares como pilas",
        "Cambiar return por break",
        "Llamar a la función dos veces",
        "Quitar todos los condicionales"
      ],
      respuestaCorrecta: 0,
      explicacion: "Para convertir un algoritmo recursivo en uno iterativo, generalmente se necesita usar bucles (como for o while) y estructuras auxiliares como pilas para simular manualmente el comportamiento de la pila de llamadas que la recursión utiliza automáticamente. La pila permite almacenar los estados pendientes que en la versión recursiva serían manejados por llamadas recursivas. Cambiar return por break no convierte un algoritmo recursivo en iterativo, tampoco llamar a la función dos veces o quitar condicionales. La clave es reemplazar las llamadas recursivas con un mecanismo explícito de control de flujo."
    },
    {
      id: 31540,
      moduloId: 315,
      pregunta: "¿Qué significa JDBC?",
      opciones: [
        "Java Data Binding Connection",
        "Java Data Conversion",
        "Java Database Connectivity",
        "Java Database Controller"
      ],
      respuestaCorrecta: 2,
      explicacion: "JDBC significa Java Database Connectivity. Es una API estándar de Java que proporciona una interfaz uniforme para conectar y acceder a bases de datos relacionales desde aplicaciones Java, independientemente del sistema de gestión de bases de datos subyacente. JDBC permite a los desarrolladores escribir código que se conecta a bases de datos, envía consultas SQL y procesa los resultados utilizando un conjunto estándar de clases e interfaces. Esto facilita el cambio entre diferentes bases de datos sin necesidad de reescribir completamente el código de acceso a datos."
    }
  ]
};

export default moduloSimulacroVirtualLab;