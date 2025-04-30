/**
 * Datos del módulo de Programación Orientada a Objetos en Java.
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
export const moduloJavaVirtualLab = {
    id: 305,
    nombre: "Test 40 preguntas virtual lab",
    asignaturaId: 3,
    esExamen: false,
    descripcion: "Conceptos fundamentales de POO en Java: clases, objetos, herencia, polimorfismo, encapsulamiento, interfaces y excepciones.",
    preguntas: [
      {
        id: 3500,
        moduloId: 305,
        pregunta: "¿Cuál de las siguientes afirmaciones describe mejor el polimorfismo en Java?",
        opciones: [
          "La encapsulación de datos y métodos.",
          "La herencia de métodos de una clase padre.",
          "La sobrecarga de operadores.",
          "La capacidad de una variable, una función o un objeto de tomar varias formas."
        ],
        respuestaCorrecta: 3,
        explicacion: "El polimorfismo en Java es la capacidad de una variable, función u objeto de tomar varias formas. Permite que una referencia de un tipo de objeto pueda ser tratada como de otro tipo durante la ejecución, lo que facilita la implementación de interfaces y herencia."
      },
      {
        id: 3501,
        moduloId: 305,
        pregunta: "¿Cuál de las siguientes afirmaciones es verdadera sobre el uso de la palabra clave super en Java?",
        opciones: [
          "Se usa para evitar la sobrecarga de métodos.",
          "Permite acceder a los métodos y variables de clase padre desde una subclase.",
          "Se usa para declarar una variable como estática.",
          "Se usa para definir métodos abstractos."
        ],
        respuestaCorrecta: 1,
        explicacion: "La palabra clave 'super' en Java se utiliza para acceder a los miembros (métodos y variables) de la clase padre desde una subclase. También puede utilizarse para llamar al constructor de la superclase. Es fundamental en la implementación de herencia para acceder y extender el comportamiento de la clase padre."
      },
      {
        id: 3502,
        moduloId: 305,
        pregunta: "¿Cuál es el método para agregar un elemento a un ArrayList en Java?",
        opciones: [
          "addItem()",
          "insert()",
          "add()",
          "addElement()"
        ],
        respuestaCorrecta: 2,
        explicacion: "El método 'add()' es el que se utiliza para agregar elementos a un ArrayList en Java. Este método añade el elemento especificado al final de la lista o en la posición específica si se utiliza la sobrecarga add(int index, E element)."
      },
      {
        id: 3503,
        moduloId: 305,
        pregunta: "¿Cuál es el modificador de acceso más restrictivo en Java?",
        opciones: [
          "protected",
          "private",
          "public",
          "default"
        ],
        respuestaCorrecta: 1,
        explicacion: "El modificador de acceso 'private' es el más restrictivo en Java. Los miembros declarados como private solo son accesibles dentro de la misma clase en que están declarados, no desde subclases ni otras clases del mismo paquete."
      },
      {
        id: 3504,
        moduloId: 305,
        pregunta: "¿Cuál es el modificador de acceso predeterminado si no se especifica ninguno en Java?",
        opciones: [
          "protected",
          "private",
          "default",
          "public"
        ],
        respuestaCorrecta: 2,
        explicacion: "El modificador de acceso predeterminado en Java es conocido como 'default' o 'package-private'. Si no se especifica ningún modificador, los miembros son accesibles solo dentro del mismo paquete, pero no desde fuera del paquete."
      },
      {
        id: 3505,
        moduloId: 305,
        pregunta: "¿Cuál es el propósito de la interfaz?",
        recurso: {
          tipo: "codigo",
          contenido: `interface Dibujable {
      void dibujar();
  }

  class Cuadro implements Dibujable {
      public void dibujar() {
          System.out.println("Dibujando cuadro");
      }
  }`,
          lenguaje: "java"
        },
        opciones: [
          "Crear objetos",
          "Implementar herencia",
          "Guardar datos",
          "Definir un contrato que la clase debe cumplir"
        ],
        respuestaCorrecta: 3,
        explicacion: "El propósito de una interfaz en Java es definir un contrato que las clases que la implementan deben cumplir. En este caso, la interfaz 'Dibujable' define un método 'dibujar()' que la clase 'Cuadro' debe implementar. Las interfaces establecen qué métodos debe tener una clase, pero no cómo deben implementarse."
      },
      {
        id: 3506,
        moduloId: 305,
        pregunta: "¿Cuál es la forma correcta de crear un ArrayList en Java?",
        opciones: [
          "ArrayList<int> list = new ArrayList<>();",
          "ArrayList<int> list = new ArrayList<int>();",
          "ArrayList<Integer> list = new ArrayList<Integer>();",
          "ArrayList<Integer> list = new ArrayList<String>();"
        ],
        respuestaCorrecta: 2,
        explicacion: "La forma correcta de crear un ArrayList en Java es 'ArrayList<Integer> list = new ArrayList<Integer>();' o, usando la sintaxis de diamante desde Java 7, 'ArrayList<Integer> list = new ArrayList<>();'. Los tipos primitivos como 'int' no pueden usarse como parámetros de tipo en genéricos, por lo que debe usarse su equivalente en clase envoltorio (Integer en lugar de int)."
      },
      {
        id: 3507,
        moduloId: 305,
        pregunta: "¿Cuál es la principal diferencia entre una clase abstracta y una interfaz en Java?",
        opciones: [
          "Una clase abstracta puede tener métodos con implementación, mientras que una interfaz solo puede tener métodos abstractos.",
          "Una interfaz puede tener variables de instancia, mientras que una clase abstracta no.",
          "Una interfaz puede tener constructores, mientras que una clase abstracta no.",
          "Una clase abstracta no puede ser heredada, mientras que una interfaz sí."
        ],
        respuestaCorrecta: 0,
        explicacion: "La principal diferencia entre una clase abstracta y una interfaz en Java es que una clase abstracta puede tener métodos con implementación (métodos concretos), mientras que tradicionalmente una interfaz solo podía tener métodos abstractos. Aunque desde Java 8, las interfaces pueden tener métodos default y static con implementación, las clases abstractas siguen ofreciendo más flexibilidad para implementaciones parciales."
      },
      {
        id: 3508,
        moduloId: 305,
        pregunta: "¿Cuál es la salida del programa?",
        recurso: {
          tipo: "codigo",
          contenido: `public class Recursiva {
      public static int factorial(int n) {
          if (n <= 1) return 1;
          return n * factorial(n - 1);
      }

      public static void main(String[] args) {
          System.out.println(factorial(5));
      }
  }`,
          lenguaje: "java"
        },
        opciones: [
          "5",
          "15",
          "120",
          "Error de compilación"
        ],
        respuestaCorrecta: 2,
        explicacion: "El programa calcula el factorial de 5 usando recursión. El factorial de un número n (n!) se calcula multiplicando todos los enteros positivos desde 1 hasta n. Para 5, el cálculo es 5 * 4 * 3 * 2 * 1 = 120. El método factorial() se llama a sí mismo con valores decrecientes hasta llegar al caso base (n <= 1)."
      },
      {
        id: 3509,
        moduloId: 305,
        pregunta: "¿Cuál es la salida del siguiente código recursivo al ser llamado con metodoRecursivo(4)?",
        recurso: {
          tipo: "codigo",
          contenido: `public class Main {
      public static void main(String[] args) {
          System.out.println(metodoRecursivo(4));
      }

      public static int metodoRecursivo(int n) {
          int resultado;
          if (n == 1) {
              resultado = 1;
          } else {
              resultado = n * metodoRecursivo(n - 1);
          }
          return resultado;
      }
  }`,
          lenguaje: "java"
        },
        opciones: [
          "24",
          "1",
          "12",
          "4"
        ],
        respuestaCorrecta: 0,
        explicacion: "Este código calcula el factorial de 4 usando recursión. El método metodoRecursivo(4) devuelve 4 * metodoRecursivo(3), que a su vez devuelve 4 * 3 * metodoRecursivo(2), y así sucesivamente hasta llegar al caso base. El cálculo completo es 4 * 3 * 2 * 1 = 24, que es el factorial de 4."
      },
      {
        id: 3510,
        moduloId: 305,
        pregunta: "¿Cuál es la salida del siguiente código?",
        recurso: {
          tipo: "codigo",
          contenido: `public class Main {
      public static void main(String[] args) {
          int x = 5;
          int y = 10;
          x = x + y;
          y = x - y;
          x = x - y;
          System.out.println("x: " + x + ", y: " + y);
      }
  }`,
          lenguaje: "java"
        },
        opciones: [
          "x: 0, y: 15",
          "x: 10, y: 5",
          "x: 5, y: 10",
          "x: 15, y: 0"
        ],
        respuestaCorrecta: 1,
        explicacion: "Este código implementa un algoritmo para intercambiar valores sin usar una variable temporal. Inicialmente x=5 y y=10. Después de x=x+y, tenemos x=15 y y=10. Luego, y=x-y da y=5. Finalmente, x=x-y da x=10. Por lo tanto, los valores se intercambian: x ahora es 10 e y es 5."
      },
      {
        id: 3511,
        moduloId: 305,
        pregunta: "¿Cuál es la salida del siguiente código?",
        recurso: {
          tipo: "codigo",
          contenido: `String pattern = "a*b";
  String text = "aaaaab";
  boolean match = text.matches(pattern);
  System.out.println(match);`,
          lenguaje: "java"
        },
        opciones: [
          "false",
          "aaaaab",
          "Error de compilación",
          "true"
        ],
        respuestaCorrecta: 0,
        explicacion: "El método matches() en Java compara un String con un patrón de expresión regular. En este caso, 'a*b' en expresiones regulares significa 'cero o más caracteres 'a' seguidos de un 'b''. Sin embargo, en Java, * es un cuantificador que se aplica al carácter anterior. El patrón correcto para hacer coincidir 'aaaaab' debería ser 'a+b' o 'a.*b'. Por lo tanto, la salida es false porque el patrón no coincide correctamente."
      },
      {
        id: 3512,
        moduloId: 305,
        pregunta: "¿Cuál es la salida?",
        recurso: {
          tipo: "codigo",
          contenido: `public class Ciclo {
      public static void main(String[] args) {
          for (int i = 1; i <= 3; i++) {
              System.out.print(i + " ");
          }
      }
  }`,
          lenguaje: "java"
        },
        opciones: [
          "3 2 1",
          "Error",
          "0 1 2",
          "1 2 3"
        ],
        respuestaCorrecta: 3,
        explicacion: "Este código utiliza un bucle for que inicializa i a 1, continúa mientras i sea menor o igual a 3, y en cada iteración incrementa i en 1. En cada iteración, imprime el valor de i seguido de un espacio. Por lo tanto, el resultado es '1 2 3'. Observa que usa System.out.print() en lugar de println(), lo que hace que todo se imprima en la misma línea."
      },
      {
        id: 3513,
        moduloId: 305,
        pregunta: "¿Qué clase en Java se utiliza para leer datos de un archivo de texto?",
        opciones: [
          "FileWriter",
          "FileInputStream",
          "FileReader",
          "BufferedWriter"
        ],
        respuestaCorrecta: 2,
        explicacion: "La clase FileReader en Java se utiliza para leer datos de un archivo de texto. Está diseñada para leer caracteres, a diferencia de FileInputStream que lee bytes. A menudo se combina con BufferedReader para una lectura más eficiente línea por línea. FileWriter y BufferedWriter se utilizan para escribir datos, no para leerlos."
      },
      {
        id: 3514,
        moduloId: 305,
        pregunta: "¿Qué es la recursividad en programación?",
        opciones: [
          "Un bucle que se repite indefinidamente.",
          "Un método que se llama a sí mismo.",
          "Una técnica para sortear excepciones.",
          "Una variable que cambia su valor automáticamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "La recursividad en programación es una técnica donde un método se llama a sí mismo para resolver un problema. Cada llamada recursiva resuelve una parte más pequeña del problema hasta llegar a un caso base que se puede resolver directamente. Es especialmente útil para problemas que pueden descomponerse en subproblemas similares, como recorridos de árboles, ordenamientos y cálculos matemáticos como factoriales."
      },
      {
        id: 3515,
        moduloId: 305,
        pregunta: "¿Qué estructura de datos en Java permite almacenar pares de clave y valor?",
        opciones: [
          "HashMap",
          "a y b son correctas.",
          "Ninguna es correcta",
          "ArrayList"
        ],
        respuestaCorrecta: 0,
        explicacion: "HashMap es una implementación de la interfaz Map en Java que permite almacenar pares de clave-valor. Cada clave debe ser única y se utiliza para acceder a su valor correspondiente. Las operaciones de búsqueda, inserción y eliminación en un HashMap tienen una complejidad temporal promedio de O(1), lo que la hace muy eficiente para almacenar y recuperar datos."
      },
      {
        id: 3516,
        moduloId: 305,
        pregunta: "¿Qué hace este código?",
        recurso: {
          tipo: "codigo",
          contenido: `public class Hilo extends Thread {
      public void run() {
          System.out.println("Hilo ejecutándose");
      }

      public static void main(String[] args) {
          Hilo h = new Hilo();
          h.run();
      }
  }`,
          lenguaje: "java"
        },
        opciones: [
          "Crea una interfaz",
          "Lanza error",
          "Ejecuta un hilo con start()",
          "Ejecuta run() manualmente"
        ],
        respuestaCorrecta: 3,
        explicacion: "Este código define una clase Hilo que extiende Thread y sobrescribe el método run(). En el método main(), se crea una instancia de Hilo y se llama al método run() directamente. Esto ejecuta el método run() de manera normal, como cualquier otro método, sin crear un nuevo hilo de ejecución. Para ejecutar el código en un nuevo hilo, se debería llamar al método start() en lugar de run()."
      },
      {
        id: 3517,
        moduloId: 305,
        pregunta: "¿Qué imprime el código?",
        recurso: {
          tipo: "codigo",
          contenido: `public class Contador {
      private static int cuenta = 0;
      public Contador() {
          cuenta++;
      }

      public static int getCuenta() {
          return cuenta;
      }

      public static void main(String[] args) {
          new Contador();
          new Contador();
          System.out.println(Contador.getCuenta());
      }
  }`,
          lenguaje: "java"
        },
        opciones: [
          "1",
          "0",
          "Error",
          "2"
        ],
        respuestaCorrecta: 3,
        explicacion: "Este código define una clase Contador con una variable estática cuenta inicializada en 0. Cada vez que se crea una instancia de Contador, el constructor incrementa esta variable estática. En el método main(), se crean dos instancias de Contador, incrementando cuenta a 2. Finalmente, se imprime el valor de cuenta usando el método estático getCuenta(), mostrando 2."
      },
      {
        id: 3518,
        moduloId: 305,
        pregunta: "¿Qué imprime el siguiente código?",
        recurso: {
          tipo: "codigo",
          contenido: `public class Main {
      public static void main(String[] args) {
          String s = "hello";
          String t = "world";
          String u = s + t;
          System.out.println(u.length());
      }
  }`,
          lenguaje: "java"
        },
        opciones: [
          "10",
          "12",
          "11",
          "5"
        ],
        respuestaCorrecta: 0,
        explicacion: "El código concatena las cadenas 'hello' (5 caracteres) y 'world' (5 caracteres) para formar 'helloworld' (10 caracteres), y luego imprime la longitud de esta cadena resultante usando el método length(). Sin embargo, dado que no hay espacio entre las palabras en la concatenación, la longitud total es 5 + 5 = 10 caracteres."
      },
      {
        id: 3519,
        moduloId: 305,
        pregunta: "¿Qué imprime este código?",
        recurso: {
          tipo: "codigo",
          contenido: `public class Incremento {
      public static void main(String[] args) {
          int a = 5;
          System.out.println(++a);
      }
  }`,
          lenguaje: "java"
        },
        opciones: [
          "4",
          "5",
          "Error",
          "6"
        ],
        respuestaCorrecta: 3,
        explicacion: "El operador de preincremento (++a) incrementa el valor de la variable a antes de que se utilice en la expresión. En este caso, a se incrementa de 5 a 6 antes de ser impreso, por lo que la salida es 6. Esto es diferente del operador de postincremento (a++), que incrementaría a después de ser utilizado en la expresión."
      },
      {
        id: 3520,
        moduloId: 305,
        pregunta: "¿Qué imprime este código?",
        recurso: {
          tipo: "codigo",
          contenido: `public class Suma {
      public static int suma(int[] numeros) {
          int total = 0;
          for (int i = 0; i < numeros.length; i++) {
              total += numeros[i];
          }
          return total;
      }

      public static void main(String[] args) {
          int[] num = {1, 2, 3};
          System.out.println(suma(num));
      }
  }`,
          lenguaje: "java"
        },
        opciones: [
          "6",
          "123",
          "Error",
          "6.0"
        ],
        respuestaCorrecta: 0,
        explicacion: "El código define un método suma() que calcula la suma de todos los elementos en un array de enteros. En el método main(), se crea un array con los valores 1, 2 y 3, y se llama al método suma() con este array. El método recorre cada elemento del array, acumulando la suma en la variable total. El resultado final es 1 + 2 + 3 = 6, que es lo que se imprime."
      },
      {
        id: 3521,
        moduloId: 305,
        pregunta: "¿Qué imprime este programa?",
        recurso: {
          tipo: "codigo",
          contenido: `import java.util.ArrayList;

  public class Lista {
      public static void main(String[] args) {
          ArrayList<String> lista = new ArrayList<>();
          lista.add("uno");
          lista.add("dos");
          System.out.println(lista.get(0));
      }
  }`,
          lenguaje: "java"
        },
        opciones: [
          "0",
          "uno",
          "Error",
          "dos"
        ],
        respuestaCorrecta: 1,
        explicacion: "Este programa crea un ArrayList de Strings, añade \"uno\" (en el índice 0) y luego \"dos\" (en el índice 1). Después, imprime el elemento en el índice 0 usando el método get(), que es \"uno\". Los ArrayList en Java son colecciones de tipo genérico que almacenan elementos en orden y permiten acceder a ellos por índice."
      },
      {
        id: 3522,
        moduloId: 305,
        pregunta: "¿Qué imprime este programa?",
        recurso: {
          tipo: "codigo",
          contenido: `import java.util.HashMap;

  public class Mapa {
      public static void main(String[] args) {
          HashMap<String, Integer> mapa = new HashMap<>();
          mapa.put("clave", 100);
          System.out.println(mapa.get("clave"));
      }
  }`,
          lenguaje: "java"
        },
        opciones: [
          "null",
          "Error",
          "100",
          "\"clave\""
        ],
        respuestaCorrecta: 2,
        explicacion: "Este programa crea un HashMap que asocia Strings (claves) con Integers (valores). Añade un par clave-valor donde la clave es \"clave\" y el valor es 100. Luego imprime el valor asociado con la clave \"clave\" usando el método get(), que devuelve 100. Los HashMap son estructuras de datos eficientes para almacenar y recuperar pares de clave-valor."
      },
      {
        id: 3523,
        moduloId: 305,
        pregunta: "¿Qué imprime?",
        recurso: {
          tipo: "codigo",
          contenido: `public class StringTest {
      public static void main(String[] args) {
          String s1 = "Java";
          String s2 = "Java";
          System.out.println(s1 == s2);
      }
  }`,
          lenguaje: "java"
        },
        opciones: [
          "null",
          "false",
          "true",
          "Error"
        ],
        respuestaCorrecta: 2,
        explicacion: "En Java, los literales de cadena como \"Java\" se almacenan en el pool de cadenas. Cuando se crean dos variables con el mismo literal de cadena, ambas referencias apuntan al mismo objeto en memoria. Por eso, s1 y s2 hacen referencia al mismo objeto, y la comparación s1 == s2 (que compara referencias, no contenido) devuelve true. Esta es una optimización de Java, pero generalmente se recomienda usar equals() para comparar el contenido de las cadenas."
      },
      {
        id: 3524,
        moduloId: 305,
        pregunta: "¿Qué mensaje imprime?",
        recurso: {
          tipo: "codigo",
          contenido: `public class Excepcion {
      public static void main(String[] args) {
          try {
              int a = 5 / 0;
          } catch (ArithmeticException e) {
              System.out.println("Error aritmético");
          }
      }
  }`,
          lenguaje: "java"
        },
        opciones: [
          "Exception",
          "Error aritmético",
          "5",
          "0"
        ],
        respuestaCorrecta: 1,
        explicacion: "Este código intenta dividir 5 por 0, lo que causa una ArithmeticException en Java. Esta excepción es capturada por el bloque catch, que imprime el mensaje \"Error aritmético\". El manejo de excepciones permite que el programa continúe ejecutándose en lugar de terminar abruptamente cuando ocurre un error."
      },
      {
        id: 3525,
        moduloId: 305,
        pregunta: "¿Qué método de la clase String se usa para convertir todas las letras de una cadena a minúsculas?",
        opciones: [
          "toLowerCase()",
          "tolower()",
          "toLower()",
          "convertToLower()"
        ],
        respuestaCorrecta: 0,
        explicacion: "El método toLowerCase() de la clase String en Java se utiliza para convertir todas las letras de una cadena a minúsculas. Este método devuelve una nueva cadena en la que todas las letras mayúsculas de la cadena original han sido convertidas a minúsculas, manteniendo los caracteres no alfabéticos sin cambios."
      },
      {
        id: 3526,
        moduloId: 305,
        pregunta: "¿Qué método se usa para cerrar un archivo después de escribir en él usando la clase FileWriter?",
        opciones: [
          "finish()",
          "end()",
          "closeFile()",
          "close()"
        ],
        respuestaCorrecta: 3,
        explicacion: "El método close() se utiliza para cerrar un FileWriter (o cualquier recurso de E/S) después de usarlo. Es importante cerrar los recursos de E/S para liberar los recursos del sistema y asegurarse de que todos los datos se escriban correctamente. La mejor práctica es usar un bloque try-with-resources o asegurarse de llamar al método close() en un bloque finally para garantizar que los recursos se liberen incluso si ocurre una excepción."
      },
      {
        id: 3527,
        moduloId: 305,
        pregunta: "¿Qué método se utiliza para obtener la longitud de un array en Java?",
        opciones: [
          "size()",
          "getLength()",
          "length()",
          "length"
        ],
        respuestaCorrecta: 3,
        explicacion: "En Java, la longitud de un array se obtiene mediante el atributo length, no un método. Por ejemplo, para un array int[] numeros, la longitud se obtiene con numeros.length. Es importante distinguir entre el atributo length para arrays y el método length() para strings, o el método size() para colecciones como ArrayList."
      },
      {
        id: 3528,
        moduloId: 305,
        pregunta: "¿Qué método se utiliza para obtener un valor a partir de una clave en un HashMap en Java?",
        opciones: [
          "retrieve()",
          "getValue()",
          "find()",
          "get()"
        ],
        respuestaCorrecta: 3,
        explicacion: "El método get() se utiliza para obtener el valor asociado a una clave específica en un HashMap en Java. Si la clave existe en el mapa, devuelve el valor correspondiente; si la clave no existe, devuelve null. Este método tiene una complejidad temporal constante O(1) en promedio, lo que hace que los HashMap sean muy eficientes para buscar valores por clave."
      },
      {
        id: 3529,
        moduloId: 305,
        pregunta: "¿Qué palabra clave se utiliza para definir una clase que no puede ser extendida?",
        opciones: [
          "abstract",
          "private",
          "final",
          "static"
        ],
        respuestaCorrecta: 2,
        explicacion: "La palabra clave final se utiliza para definir una clase que no puede ser extendida por otras clases. Una clase final no puede tener subclases. Esto se usa a menudo por razones de seguridad o para garantizar que el comportamiento de la clase no pueda ser modificado. Ejemplos de clases finales en Java incluyen String, Integer y otras clases wrapper."
      },
      {
        id: 3530,
        moduloId: 305,
        pregunta: "¿Qué palabra clave se utiliza para implementar una interfaz en una clase en Java?",
        opciones: [
          "implements",
          "implement",
          "extends",
          "extend"
        ],
        respuestaCorrecta: 0,
        explicacion: "La palabra clave implements se utiliza para declarar que una clase implementa una o más interfaces en Java. Cuando una clase implementa una interfaz, debe proporcionar implementaciones para todos los métodos abstractos definidos en esa interfaz. A diferencia de la herencia de clases (extends), una clase puede implementar múltiples interfaces, lo que proporciona un tipo de herencia múltiple en Java."
      },
      {
        id: 3531,
        moduloId: 305,
        pregunta: "¿Qué realiza este código?",
        recurso: {
          tipo: "codigo",
          contenido: `import java.io.*;

  public class Lectura {
      public static void main(String[] args) throws IOException {
          BufferedReader br = new BufferedReader(new FileReader("datos.txt"));
          String linea;
          while ((linea = br.readLine()) != null) {
              System.out.println(linea);
          }
          br.close();
      }
  }`,
          lenguaje: "java"
        },
        opciones: [
          "Lee línea por línea un archivo de texto, e imprime por consola la línea.",
          "Imprime una línea vacía",
          "Borra un archivo",
          "Escribe datos en un archivo"
        ],
        respuestaCorrecta: 0,
        explicacion: "Este código lee un archivo de texto llamado \"datos.txt\" línea por línea utilizando BufferedReader. Para cada línea leída, imprime su contenido por consola. El bucle while continúa hasta que readLine() devuelve null, lo que indica que se ha llegado al final del archivo. Finalmente, cierra el BufferedReader para liberar los recursos. Esta es una forma común de leer archivos de texto en Java."
      },
      {
        id: 3532,
        moduloId: 305,
        pregunta: "¿Qué representa la clase Figura?",
        recurso: {
          tipo: "codigo",
          contenido: `abstract class Figura {
      abstract double area();
  }

  class Circulo extends Figura {
      double radio;
      Circulo(double radio) {
          this.radio = radio;
      }

      double area() {
          return Math.PI * radio * radio;
      }
  }`,
          lenguaje: "java"
        },
        opciones: [
          "Una excepción",
          "Una interfaz",
          "Una clase abstracta que sirve como base",
          "Una clase concreta"
        ],
        respuestaCorrecta: 2,
        explicacion: "La clase Figura es una clase abstracta que sirve como base para otras clases que representan figuras geométricas. Se define con la palabra clave 'abstract' y contiene un método abstracto area() que deben implementar todas sus subclases. La clase Circulo extiende Figura y proporciona una implementación concreta del método area() para calcular el área de un círculo. Las clases abstractas permiten definir comportamiento común y obligar a las subclases a implementar ciertos métodos."
      },
      {
        id: 3533,
        moduloId: 305,
        pregunta: "¿Qué representa PI?",
        recurso: {
          tipo: "codigo",
          contenido: `public class Constantes {
      public static final double PI = 3.14;

      public static void main(String[] args) {
          System.out.println(PI);
      }
  }`,
          lenguaje: "java"
        },
        opciones: [
          "Un método",
          "Una clase",
          "Una constante",
          "Una variable privada"
        ],
        respuestaCorrecta: 2,
        explicacion: "PI en este código representa una constante. En Java, las constantes se declaran usando los modificadores static y final. static significa que la variable pertenece a la clase en lugar de a instancias específicas, y final significa que su valor no puede cambiarse después de la inicialización. Por convención, los nombres de las constantes en Java se escriben en mayúsculas, con guiones bajos separando palabras en nombres compuestos."
      },
      {
        id: 3534,
        moduloId: 305,
        pregunta: "¿Qué resultado imprime?",
        recurso: {
          tipo: "codigo",
          contenido: `public class Comparar {
      public static void main(String[] args) {
          String a = "hola";
          String b = new String("hola");
          System.out.println(a.equals(b));
      }
  }`,
          lenguaje: "java"
        },
        opciones: [
          "Error",
          "false",
          "hola",
          "true"
        ],
        respuestaCorrecta: 3,
        explicacion: "El método equals() de la clase String compara el contenido de dos cadenas, no sus referencias. Aunque a y b son referencias distintas (a es un literal de cadena del pool de cadenas, mientras que b es un objeto String creado explícitamente con new), ambas contienen la misma secuencia de caracteres: \"hola\". Por lo tanto, a.equals(b) devuelve true. Esto es diferente de usar el operador ==, que compararía referencias y devolvería false en este caso."
      },
      {
        id: 3535,
        moduloId: 305,
        pregunta: "¿Qué salida produce este código?",
        recurso: {
          tipo: "codigo",
          contenido: `public class Persona {
      private String nombre;
      public Persona(String nombre) {
          this.nombre = nombre;
      }
      public void saludar() {
          System.out.println("Hola, soy " + nombre);
      }

      public static void main(String[] args) {
          Persona p = new Persona("Ana");
          p.saludar();
      }
  }`,
          lenguaje: "java"
        },
        opciones: [
          "Hola, soy null",
          "Hola, soy Ana",
          "Error de compilación",
          "nombre"
        ],
        respuestaCorrecta: 1,
        explicacion: "Este código define una clase Persona con un atributo privado nombre y un constructor que inicializa este atributo. La instancia de Persona se crea con el argumento \"Ana\", que se asigna al atributo nombre. Cuando se llama al método saludar(), imprime \"Hola, soy \" concatenado con el valor del atributo nombre, que es \"Ana\". Por lo tanto, la salida es \"Hola, soy Ana\"."
      },
      {
        id: 3536,
        moduloId: 305,
        pregunta: "¿Qué se imprime?",
        recurso: {
          tipo: "codigo",
          contenido: `class A {
      public A() {
          System.out.println("Constructor A");
      }
  }

  class B extends A {
      public B() {
          System.out.println("Constructor B");
      }

      public static void main(String[] args) {
          new B();
      }
  }`,
          lenguaje: "java"
        },
        opciones: [
          "Error",
          "Constructor B\\nConstructor A",
          "Solo Constructor B",
          "Constructor A\\nConstructor B"
        ],
        respuestaCorrecta: 3,
        explicacion: "Cuando se crea una instancia de una clase que extiende otra, primero se ejecuta el constructor de la clase padre (superclase) y luego el de la clase hija (subclase). En este caso, cuando se crea una instancia de B con new B(), primero se ejecuta el constructor de A, imprimiendo \"Constructor A\", y luego el constructor de B, imprimiendo \"Constructor B\". Por lo tanto, la salida es \"Constructor A\" seguido de \"Constructor B\"."
      },
      {
        id: 3537,
        moduloId: 305,
        pregunta: "¿Qué se imprime?",
        recurso: {
          tipo: "codigo",
          contenido: `public class Animal {
      public void sonido() {
          System.out.println("Sonido de animal");
      }
  }

  class Gato extends Animal {
      @Override
      public void sonido() {
          System.out.println("Miau");
      }

      public static void main(String[] args) {
          Animal a = new Gato();
          a.sonido();
      }
  }`,
          lenguaje: "java"
        },
        opciones: [
          "Miau",
          "Gato",
          "Error",
          "Sonido de animal"
        ],
        respuestaCorrecta: 0,
        explicacion: "Este código es un ejemplo de polimorfismo. Aunque la variable a es de tipo Animal, se inicializa con un objeto de tipo Gato. En Java, el método que se ejecuta se determina por el tipo real del objeto (Gato), no por el tipo de la variable (Animal). Cuando se llama a a.sonido(), se ejecuta el método sonido() de la clase Gato, que imprime \"Miau\"."
      },
      {
        id: 3538,
        moduloId: 305,
        pregunta: "¿Qué se imprime?",
        recurso: {
          tipo: "codigo",
          contenido: `public class Main {
      public static void main(String[] args) {
          String texto = "Hola Mundo";
          System.out.println(texto.substring(5));
      }
  }`,
          lenguaje: "java"
        },
        opciones: [
          "Hola Mundo",
          "Mundo",
          "Hola",
          "Error"
        ],
        respuestaCorrecta: 1,
        explicacion: "El método substring(int beginIndex) de la clase String devuelve una subcadena que comienza en el índice especificado y se extiende hasta el final de la cadena original. Los índices en Java comienzan en 0, por lo que el carácter en el índice 5 de \"Hola Mundo\" es 'M' (después del espacio). Por lo tanto, texto.substring(5) devuelve \"Mundo\"."
      },
      {
        id: 3539,
        moduloId: 305,
        pregunta: "¿Qué valor se imprime?",
        recurso: {
          tipo: "codigo",
          contenido: `public class Prueba {
      public static void main(String[] args) {
          int[] numeros = {1, 2, 3, 4};
          System.out.println(numeros[2]);
      }
  }`,
          lenguaje: "java"
        },
        opciones: [
          "3",
          "Error",
          "2",
          "1"
        ],
        respuestaCorrecta: 0,
        explicacion: "Este código crea un array de enteros con los valores 1, 2, 3 y 4. En Java, los índices de los arrays comienzan en 0, por lo que numeros[0] es 1, numeros[1] es 2, numeros[2] es 3, y numeros[3] es 4. Por lo tanto, numeros[2] devuelve 3, que es lo que se imprime."
      }
    ]
  };

  export default moduloJavaVirtualLab;