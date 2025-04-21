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
 * @property {number} preguntas[].id - Identificador único de la pregunta
 * @property {number} preguntas[].moduloId - ID del módulo al que pertenece la pregunta
 * @property {string} preguntas[].pregunta - Texto de la pregunta
 * @property {Array<string>} preguntas[].opciones - Lista de opciones de respuesta
 * @property {number} preguntas[].respuestaCorrecta - Índice (0-based) de la opción correcta
 * @property {string} preguntas[].explicacion - Explicación de la respuesta correcta
 *
 * @example
 * // Importar el módulo de POO en Java
 * import moduloPOOJava from '@data/modulos/pooJava';
 *
 * function PreguntasAleatorias() {
 *   // Seleccionar 5 preguntas aleatorias del módulo
 *   const preguntasAleatorias = moduloPOOJava.preguntas
 *     .sort(() => 0.5 - Math.random())
 *     .slice(0, 5);
 *
 *   return (
 *     <div>
 *       <h2>{moduloPOOJava.nombre}</h2>
 *       {preguntasAleatorias.map(pregunta => (
 *         <QuestionCard key={pregunta.id} pregunta={pregunta} />
 *       ))}
 *     </div>
 *   );
 * }
 */
export const moduloDiezAbril = {
    id: 304,
    nombre: "test 10 de abril",
    asignaturaId: 3,
    descripcion: "Conceptos fundamentales de POO en Java: clases, objetos, herencia, polimorfismo, encapsulamiento, interfaces y excepciones.",
    preguntas: [
      // Sección 1: Clases y Objetos
      {
        id: 3301,
        moduloId: 304,
        pregunta: "¿Cuál de estas sentencias crea correctamente un objeto de la clase Alumno?",
        opciones: ["Alumno alumno = new Alumno();", "Alumno = new Alumno();", "Alumno alumno();", "new Alumno Alumno();"],
        respuestaCorrecta: 0,
        explicacion: "La forma correcta de crear un objeto en Java es usando la palabra clave 'new' seguida del constructor de la clase. La sintaxis correcta es 'Tipo nombreVariable = new Constructor();'. Por lo tanto, 'Alumno alumno = new Alumno();' es la forma correcta de instanciar un objeto de la clase Alumno."
      },
      {
        id: 3302,
        moduloId: 304,
        pregunta: "¿Qué sucede si no se define ningún constructor en una clase?",
        opciones: ["Java crea automáticamente un constructor por defecto.", "El programa no compila.", "Hay que llamar manualmente a un método init().", "Se crean todos los posibles constructores."],
        respuestaCorrecta: 0,
        explicacion: "Si no se define ningún constructor en una clase, Java crea automáticamente un constructor por defecto (sin parámetros) que inicializa los atributos con sus valores por defecto (0 para números, false para booleanos, null para objetos). Este constructor implícito desaparece si se define explícitamente cualquier otro constructor."
      },
      {
        id: 3303,
        moduloId: 304,
        pregunta: "¿Cuál es la sintaxis correcta para definir un atributo de clase en Java?",
        opciones: ["attribute String nombre;", "String atributo nombre;", "private String nombre;", "String.attribute nombre;"],
        respuestaCorrecta: 2,
        explicacion: "La sintaxis correcta para definir un atributo en Java es: [modificador_acceso] [tipo] [nombre]. El modificador de acceso puede ser private, protected, public o dejarse vacío (acceso de paquete). Por lo tanto, 'private String nombre;' es la forma correcta de definir un atributo privado de tipo String llamado 'nombre'."
      },
      {
        id: 3304,
        moduloId: 304,
        pregunta: "¿Qué palabra reservada se utiliza para referirse al objeto actual dentro de sus propios métodos?",
        opciones: ["super", "self", "this", "object"],
        respuestaCorrecta: 2,
        explicacion: "La palabra reservada 'this' se utiliza para referirse al objeto actual dentro de sus propios métodos. Se usa para acceder a los atributos y métodos del objeto, para llamar a constructores de la misma clase y para pasar el objeto actual como parámetro o valor de retorno."
      },
      {
        id: 3305,
        moduloId: 304,
        pregunta: "¿Qué imprimirá el siguiente código?",
        recurso: {
          tipo: "codigo",
          contenido: `public class Test {
    public static void main(String[] args) {
        Contador c1 = new Contador();
        Contador c2 = new Contador();
        c1.incrementar();
        c2.incrementar();
        c2.incrementar();
        System.out.println(c1.getValor() + " " + c2.getValor());
    }
}

class Contador {
    private int valor = 0;

    public void incrementar() {
        valor++;
    }

    public int getValor() {
        return valor;
    }
}`,
          lenguaje: "java"
        },
        opciones: ["0 0", "1 1", "1 2", "2 2"],
        respuestaCorrecta: 2,
        explicacion: "Se crean dos objetos de la clase Contador: c1 y c2. Ambos inician con valor=0. Luego, c1 se incrementa una vez (valor=1) y c2 se incrementa dos veces (valor=2). Por lo tanto, cuando se imprime c1.getValor() + \" \" + c2.getValor(), se muestra \"1 2\"."
      },
      {
        id: 3306,
        moduloId: 304,
        pregunta: "¿Qué método se ejecuta al arrancar una aplicación Java?",
        opciones: ["run()", "start()", "init()", "main()"],
        respuestaCorrecta: 3,
        explicacion: "El método main() es el punto de entrada de una aplicación Java. Cuando se ejecuta una aplicación Java, la máquina virtual de Java (JVM) busca el método main() con la firma exacta 'public static void main(String[] args)' para comenzar la ejecución del programa."
      },
      {
        id: 3307,
        moduloId: 304,
        pregunta: "¿Qué ocurre si un atributo es declarado como 'private'?",
        opciones: ["Solo puede ser accedido desde dentro de su propia clase.", "Solo puede ser accedido directamente desde otras clases.", "Solo puede ser accedido desde métodos estáticos.", "Puede ser accedido libremente desde cualquier lugar."],
        respuestaCorrecta: 0,
        explicacion: "Cuando un atributo se declara como 'private', solo puede ser accedido directamente desde dentro de la clase en la que está definido. Este es el principio de encapsulamiento en POO, que oculta los detalles de implementación y protege la integridad de los datos, permitiendo acceder a ellos solo a través de métodos específicos (getters y setters)."
      },

      // Sección 2: Herencia y Polimorfismo
      {
        id: 3308,
        moduloId: 304,
        pregunta: "¿Qué tipo de herencia permite Java directamente entre clases?",
        opciones: ["Única", "Múltiple", "Híbrida", "Circular"],
        respuestaCorrecta: 0,
        explicacion: "Java solo permite herencia única entre clases, lo que significa que una clase solo puede heredar directamente de una única superclase. Sin embargo, Java permite implementar múltiples interfaces, lo que proporciona una forma de lograr funcionalidad similar a la herencia múltiple."
      },
      {
        id: 3309,
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

public class Test {
    public static void main(String[] args) {
        Animal a = new Perro();
        a.sonido();
    }
}`,
          lenguaje: "java"
        },
        opciones: ["Ladrido", "Sonido genérico", "No imprime nada", "Error de compilación"],
        respuestaCorrecta: 0,
        explicacion: "Este código muestra un ejemplo de polimorfismo. Aunque la variable 'a' es de tipo Animal, se inicializa con un objeto Perro. En Java, el método que se ejecuta se determina en tiempo de ejecución según el tipo real del objeto (Perro), no el tipo de la variable (Animal). Por lo tanto, se llama al método sonido() de Perro y se imprime \"Ladrido\"."
      },
      {
        id: 3310,
        moduloId: 304,
        pregunta: "¿Qué ocurre si una subclase quiere llamar al constructor de su superclase?",
        opciones: ["No es posible llamar al constructor de la superclase.", "Llama a super().", "Solo puede hacerlo dentro de métodos estáticos.", "Llama a this()."],
        respuestaCorrecta: 1,
        explicacion: "Para llamar al constructor de la superclase desde una subclase, se utiliza la palabra clave 'super()' o 'super(argumentos)' si el constructor requiere parámetros. Esta llamada debe ser la primera sentencia en el constructor de la subclase. Si no se incluye explícitamente, Java inserta automáticamente 'super()' para llamar al constructor sin parámetros de la superclase."
      },
      {
        id: 3311,
        moduloId: 304,
        pregunta: "¿Cuál es la palabra clave que se utiliza para que una clase herede de otra en Java?",
        opciones: ["implements", "extends", "inherits", "super"],
        respuestaCorrecta: 1,
        explicacion: "En Java, la palabra clave 'extends' se utiliza para indicar que una clase hereda de otra. Por ejemplo, 'class Perro extends Animal' significa que la clase Perro es una subclase de Animal y hereda todos sus métodos y atributos no privados. La palabra 'implements' se usa para implementar interfaces, no para heredar de clases."
      },
      {
        id: 3312,
        moduloId: 304,
        pregunta: "¿Qué método debe sobreescribirse para proporcionar una representación en texto de un objeto?",
        opciones: ["toString()", "getText()", "asString()", "convertToString()"],
        respuestaCorrecta: 0,
        explicacion: "El método toString() de la clase Object debe sobreescribirse para proporcionar una representación en texto de un objeto. Este método se llama automáticamente cuando un objeto se utiliza en un contexto de cadena, como en una concatenación o al pasarlo a System.out.println()."
      },
      {
        id: 3313,
        moduloId: 304,
        pregunta: "¿Qué imprimirá el siguiente código?",
        recurso: {
          tipo: "codigo",
          contenido: `class Padre {
    protected int valor = 10;
}

class Hijo extends Padre {
    private int valor = 20;

    void mostrar() {
        System.out.println(this.valor + " " + super.valor);
    }
}

public class Test {
    public static void main(String[] args) {
        Hijo h = new Hijo();
        h.mostrar();
    }
}`,
          lenguaje: "java"
        },
        opciones: ["10 10", "20 20", "10 20", "20 10"],
        respuestaCorrecta: 3,
        explicacion: "La clase Hijo tiene un atributo 'valor' que oculta (no sobreescribe) el atributo 'valor' de la clase Padre. En el método mostrar(), 'this.valor' se refiere al atributo de la clase Hijo (20), mientras que 'super.valor' se refiere al atributo de la clase Padre (10). Por lo tanto, se imprime \"20 10\"."
      },
      {
        id: 3314,
        moduloId: 304,
        pregunta: "¿Qué es una clase abstracta en Java?",
        opciones: ["Una clase que no puede tener métodos", "Una clase de la que no se pueden crear instancias directamente", "Una clase que solo puede tener métodos estáticos", "Una clase que no puede tener constructores"],
        respuestaCorrecta: 1,
        explicacion: "Una clase abstracta en Java es una clase que no puede ser instanciada directamente, sino que debe ser extendida (heredada) por otras clases. Se declara con la palabra clave 'abstract' y puede contener métodos abstractos (sin implementación) que las subclases deben implementar. Las clases abstractas son útiles para definir una estructura común para un conjunto de subclases relacionadas."
      },

      // Sección 3: Interfaces, Excepciones y Colecciones
      {
        id: 3315,
        moduloId: 304,
        pregunta: "¿Qué es una interfaz en Java?",
        opciones: ["Un tipo de clase que solo puede contener métodos estáticos", "Un contrato que especifica los métodos que una clase debe implementar", "Una forma de lograr herencia múltiple directa en Java", "Un tipo de clase que no puede ser extendida"],
        respuestaCorrecta: 1,
        explicacion: "Una interfaz en Java es un contrato o especificación que define un conjunto de métodos que las clases deben implementar. Se declara con la palabra clave 'interface' y contiene métodos sin implementación (abstractos). Las clases implementan interfaces usando la palabra 'implements' y deben proporcionar implementaciones para todos los métodos de la interfaz a menos que la clase sea abstracta."
      },
      {
        id: 3316,
        moduloId: 304,
        pregunta: "¿Qué muestra este código?",
        recurso: {
          tipo: "codigo",
          contenido: `public class Test {
    public static void main(String[] args) {
        try {
            int x = 10 / 0;
            System.out.println("A");
        } catch (ArithmeticException e) {
            System.out.println("B");
        } finally {
            System.out.println("C");
        }
        System.out.println("D");
    }
}`,
          lenguaje: "java"
        },
        opciones: ["A C D", "B C D", "A B C D", "B C"],
        respuestaCorrecta: 1,
        explicacion: "El código intenta dividir 10 por 0, lo que provoca una ArithmeticException. Por lo tanto, se salta la impresión de \"A\" y se ejecuta el bloque catch, imprimiendo \"B\". El bloque finally siempre se ejecuta, independientemente de si se produce una excepción o no, por lo que se imprime \"C\". Después, el programa continúa normalmente y se imprime \"D\". La secuencia completa es \"B C D\"."
      },
      {
        id: 3317,
        moduloId: 304,
        pregunta: "¿Qué ocurre si un flujo no se cierra adecuadamente en Java?",
        opciones: ["Se elimina el archivo afectado.", "Los datos pueden no guardarse correctamente y hay fuga de recursos.", "El programa se detiene inmediatamente.", "Se lanza una excepción Checked automáticamente."],
        respuestaCorrecta: 1,
        explicacion: "Si un flujo (stream) no se cierra adecuadamente en Java, puede causar fugas de recursos del sistema operativo (como descriptores de archivo) y los datos podrían no guardarse correctamente en disco si los buffers no se vacían. Esto es especialmente importante con flujos de salida. Por eso, es recomendable usar try-with-resources o asegurarse de cerrar los flujos en un bloque finally."
      },
      {
        id: 3318,
        moduloId: 304,
        pregunta: "¿Qué muestra este código?",
        recurso: {
          tipo: "codigo",
          contenido: `import java.util.ArrayList;

public class Test {
    public static void main(String[] args) {
        ArrayList<String> lista = new ArrayList<>();
        lista.add("A");
        lista.add("B");
        System.out.println(lista.get(1));
    }
}`,
          lenguaje: "java"
        },
        opciones: ["B", "Error en tiempo de ejecución", "A", "0"],
        respuestaCorrecta: 0,
        explicacion: "El código crea un ArrayList de Strings, añade \"A\" (índice 0) y luego \"B\" (índice 1). Después, imprime el elemento en el índice 1, que es \"B\". Los ArrayList en Java son colecciones dinámicas de tipo genérico que almacenan elementos en un orden específico y permiten acceder a ellos por índice."
      },
      {
        id: 3319,
        moduloId: 304,
        pregunta: "¿Qué resultado muestra este código?",
        recurso: {
          tipo: "codigo",
          contenido: `import java.util.Stack;

public class Test {
    public static void main(String[] args) {
        Stack<Integer> pila = new Stack<>();
        pila.push(1);
        pila.push(2);
        pila.push(3);
        System.out.println(pila.peek());
    }
}`,
          lenguaje: "java"
        },
        opciones: ["Error", "1", "2", "3"],
        respuestaCorrecta: 3,
        explicacion: "El código crea una pila (Stack) de enteros y agrega los valores 1, 2 y 3 en ese orden. El método peek() devuelve el elemento en la cima de la pila sin eliminarlo. En una pila, el último elemento añadido es el que está en la cima, por lo que peek() devuelve 3."
      },
      {
        id: 3320,
        moduloId: 304,
        pregunta: "¿Qué método de Stack devuelve el elemento del tope SIN eliminarlo?",
        opciones: ["pop()", "push()", "poll()", "peek()"],
        respuestaCorrecta: 3,
        explicacion: "El método peek() de la clase Stack devuelve el elemento en la cima de la pila sin eliminarlo. En contraste, pop() devuelve y elimina el elemento de la cima, push() añade un elemento a la cima, y poll() es un método de Queue, no de Stack."
      },
      {
        id: 3321,
        moduloId: 304,
        pregunta: "¿Qué imprimirá este código?",
        recurso: {
          tipo: "codigo",
          contenido: `import java.util.HashMap;

public class Test {
    public static void main(String[] args) {
        HashMap<String, Integer> mapa = new HashMap<>();
        mapa.put("uno", 1);
        mapa.put("dos", 2);
        mapa.put("uno", 3);
        System.out.println(mapa.get("uno") + mapa.size());
    }
}`,
          lenguaje: "java"
        },
        opciones: ["3", "5", "4", "6"],
        respuestaCorrecta: 1,
        explicacion: "El código crea un HashMap y añade pares clave-valor. La clave \"uno\" se asocia primero con el valor 1 y luego con el valor 3 (sobreescribiendo el valor anterior). La clave \"dos\" se asocia con el valor 2. El tamaño del mapa es 2 (tiene dos claves: \"uno\" y \"dos\"). Por lo tanto, mapa.get(\"uno\") devuelve 3 y mapa.size() devuelve 2, y la suma es 5."
      },

      // Sección 4: Más preguntas de POO
      {
        id: 3322,
        moduloId: 304,
        pregunta: "¿Qué ocurre cuando un parámetro se pasa \"por valor\" en Java?",
        opciones: ["Se copia el valor y no afecta al original.", "Se pasa la referencia al objeto original.", "Se modifica el valor original automáticamente.", "El método puede cambiar el tipo de la variable."],
        respuestaCorrecta: 0,
        explicacion: "En Java, todos los parámetros se pasan \"por valor\". Para tipos primitivos, esto significa que se copia el valor y cualquier modificación dentro del método no afecta a la variable original. Para objetos, se copia la referencia al objeto, no el objeto en sí. Esto significa que se puede modificar el objeto referenciado, pero no se puede hacer que la variable original apunte a un objeto diferente."
      },
      {
        id: 3323,
        moduloId: 304,
        pregunta: "¿Qué imprimirá este código?",
        recurso: {
          tipo: "codigo",
          contenido: `public class Test {
    public static void imprime(int n) {
        n = 2 * n;
        System.out.println(n);
    }

    public static void main(String[] args) {
        int n = 10;
        imprime(n);
        System.out.println(n);
    }
}`,
          lenguaje: "java"
        },
        opciones: ["20 y luego 10", "20 y luego 20", "10 y luego 20", "10 y luego 10"],
        respuestaCorrecta: 0,
        explicacion: "Este código demuestra el paso por valor. La variable n en main() se pasa al método imprime(). Dentro del método, n se modifica (se multiplica por 2) y se imprime, mostrando 20. Sin embargo, esta modificación no afecta a la variable original en main(), ya que Java pasó una copia del valor. Por lo tanto, cuando se imprime n en main(), muestra su valor original, 10."
      },
      {
        id: 3324,
        moduloId: 304,
        pregunta: "¿Qué imprimirá este código con objetos?",
        recurso: {
          tipo: "codigo",
          contenido: `class MiClase {
    int valor;

    MiClase(int v) {
        valor = v;
    }
}

public class Test {
    public static void modificar(MiClase obj) {
        obj.valor = 20;
        obj = new MiClase(30);
    }

    public static void main(String[] args) {
        MiClase mc = new MiClase(10);
        modificar(mc);
        System.out.println(mc.valor);
    }
}`,
          lenguaje: "java"
        },
        opciones: ["10", "20", "30", "null"],
        respuestaCorrecta: 1,
        explicacion: "En Java, los objetos se pasan por valor de la referencia. El método modificar() recibe una copia de la referencia al objeto original. Primero modifica el valor del objeto a 20, afectando al objeto original. Luego, asigna un nuevo objeto a la referencia local obj, pero esto no afecta a la referencia original mc en main(). Por lo tanto, mc.valor sigue siendo 20."
      },
      {
        id: 3325,
        moduloId: 304,
        pregunta: "¿Qué mostrará este código?",
        recurso: {
          tipo: "codigo",
          contenido: `public class Test {
    public static void main(String[] args) {
        int[] valores = new int[4];
        System.out.println(valores[1]);
    }
}`,
          lenguaje: "java"
        },
        opciones: ["0", "1", "Error de compilación", "null"],
        respuestaCorrecta: 0,
        explicacion: "El código crea un array de enteros con 4 elementos. Cuando se crea un array de tipo primitivo en Java, todos los elementos se inicializan automáticamente con valores por defecto. Para int, el valor por defecto es 0. Por lo tanto, valores[1] contiene 0, que es lo que se imprime."
      },
      {
        id: 3326,
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
        id: 3327,
        moduloId: 304,
        pregunta: "¿Qué realiza la sentencia `return` en un método?",
        opciones: ["Finaliza un bucle.", "Salta entre casos de un switch.", "Sale del método y devuelve un valor opcionalmente.", "Continua con la siguiente instrucción."],
        respuestaCorrecta: 2,
        explicacion: "La sentencia return en un método cumple dos funciones: finaliza la ejecución del método y, opcionalmente, devuelve un valor al código que lo llamó. Una vez que se ejecuta return, el control vuelve inmediatamente al punto de llamada, y cualquier código que esté después del return en el mismo bloque de código no se ejecutará."
      },
      {
        id: 3328,
        moduloId: 304,
        pregunta: "¿Qué muestra este fragmento de código?",
        recurso: {
          tipo: "codigo",
          contenido: `public class Test {
    public static int suma(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        System.out.println(suma(2,3));
    }
}`,
          lenguaje: "java"
        },
        opciones: ["3", "2", "5", "Error de compilación"],
        respuestaCorrecta: 2,
        explicacion: "El código define un método estático suma() que toma dos parámetros enteros y devuelve su suma. En el método main(), se llama a suma(2,3), que devuelve 5. Este valor se pasa a System.out.println(), que lo imprime en la consola. Por lo tanto, se muestra 5."
      },
      {
        id: 3329,
        moduloId: 304,
        pregunta: "¿Qué método de Scanner lee un número entero?",
        opciones: ["read()", "nextInt()", "next()", "nextLine()"],
        respuestaCorrecta: 1,
        explicacion: "El método nextInt() de la clase Scanner se utiliza para leer un número entero desde la entrada. Este método intenta interpretar el siguiente token de entrada como un número entero en base 10 y lo devuelve. Si el siguiente token no puede ser interpretado como un entero, se lanza una InputMismatchException."
      },
      {
        id: 3330,
        moduloId: 304,
        pregunta: "¿Qué palabra clave indica que un método en Java no devuelve ningún valor?",
        opciones: ["void", "return", "null", "static"],
        respuestaCorrecta: 0,
        explicacion: "La palabra clave void se utiliza en la declaración de un método para indicar que el método no devuelve ningún valor. Por ejemplo, 'public void mostrarMensaje()' declara un método que realiza alguna acción pero no devuelve ningún resultado. Estos métodos se utilizan principalmente por sus efectos secundarios, como mostrar información o modificar el estado de objetos."
      }
    ]
  };

  export default moduloDiezAbril;