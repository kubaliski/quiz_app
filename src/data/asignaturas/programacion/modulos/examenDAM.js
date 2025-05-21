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
export const moduloExamenDam = {
  id: 318,
  nombre: "Examen Programación",
  asignaturaId: 3,
  esExamen: true,
  descripcion: "Conceptos fundamentales de Java: sintaxis, estructuras de control, POO, recursividad, excepciones y colecciones.",
  preguntas: [
    {
      id: 31801,
      moduloId: 318,
      pregunta: "¿Cuál de las siguientes opciones representa un comentario válido de varias líneas en Java?",
      opciones: [
        "//Este es un comentario de varias líneas//",
        "/*Este es un comentario de varias líneas*/",
        "# Este es un comentario de varias líneas #",
        "<!-- Este es un comentario de varias líneas -->"
      ],
      respuestaCorrecta: 1,
      explicacion: "En Java, los comentarios de varias líneas se escriben entre /* y */. Los comentarios de una sola línea utilizan //, los símbolos # se usan como comentarios en lenguajes como Python, y los <!-- --> son comentarios en HTML/XML."
    },
    {
      id: 31802,
      moduloId: 318,
      pregunta: "¿Cuál es la forma correcta de declarar una constante en Java que pueda ser utilizada sin necesidad de instanciar la clase?",
      opciones: [
        "public int MAX_VALUE = 100;",
        "public final int MAX_VALUE = 100;",
        "public static final int MAX_VALUE = 100;",
        "public const int MAX_VALUE = 100;"
      ],
      respuestaCorrecta: 2,
      explicacion: "Para declarar una constante en Java que pueda ser utilizada sin instanciar la clase, debe usarse 'public static final'. El modificador 'static' permite acceder a la variable directamente a través de la clase, mientras que 'final' hace que su valor no pueda cambiar. Java no tiene la palabra clave 'const' como otros lenguajes."
    },
    {
      id: 31803,
      moduloId: 318,
      pregunta: "¿Qué literal representa un carácter?",
      opciones: [
        "\"a\"",
        "'a'",
        "a",
        "char"
      ],
      respuestaCorrecta: 1,
      explicacion: "En Java, los literales de carácter se representan con comillas simples ('). Las comillas dobles (\") se usan para cadenas de texto (String), 'a' sin comillas sería un identificador, y 'char' es el tipo de dato, no un literal."
    },
    {
      id: 31804,
      moduloId: 318,
      pregunta: "¿Cuál es el efecto de ejecutar este código?",
      recurso: {
        tipo: "codigo",
        contenido: `int x = 5;
x += 3;`,
        lenguaje: "java"
      },
      opciones: [
        "x pasa a valer 3",
        "x pasa a valer 2",
        "x pasa a valer 8",
        "x pasa a valer 53"
      ],
      respuestaCorrecta: 2,
      explicacion: "La expresión x += 3 es equivalente a x = x + 3. Si x inicialmente vale 5, después de esta operación x valdrá 8. Este operador realiza una suma y asignación en una sola operación."
    },
    {
      id: 31805,
      moduloId: 318,
      pregunta: "¿Cuál de los siguientes modificadores indica que una variable no se puede cambiar?",
      opciones: [
        "static",
        "final",
        "private",
        "transient"
      ],
      respuestaCorrecta: 1,
      explicacion: "El modificador 'final' en Java indica que una variable no puede cambiar su valor después de la inicialización. Una vez asignado un valor, no puede ser modificado. El modificador 'static' indica que la variable pertenece a la clase y no a instancias específicas, 'private' controla la visibilidad, y 'transient' se usa para indicar que una variable no debe ser serializada."
    },
    {
      id: 31806,
      moduloId: 318,
      pregunta: "¿Qué hace este bucle for?",
      recurso: {
        tipo: "codigo",
        contenido: `for (int i = 10; i >= 6, i--)
\tSystem.out.print(i + " ");
}`,
        lenguaje: "java"
      },
      opciones: [
        "Imprime los pares del 10 al 6",
        "Imprime del 10 al 6 en orden descendente",
        "Imprime del 6 al 10",
        "Da error de compilación"
      ],
      respuestaCorrecta: 0,
      explicacion: "El bucle for comienza con i=10 y decrece hasta 6 (incluido). En cada iteración, imprime el valor de i seguido de un espacio. La salida será: \"10 9 8 7 6\". La condición del bucle es correcta, pero la sintaxis del for tiene una coma en lugar de un punto y coma, lo que generaría un error de compilación. Sin embargo, asumiendo que se corrige a 'i--', el resultado sería el esperado."
    },
    {
      id: 31807,
      moduloId: 318,
      pregunta: "¿Qué imprime el siguiente switch si posicion = 3?",
      recurso: {
        tipo: "codigo",
        contenido: `switch (posicion) {
\tcase 1: System.out.print("ORO"); break;
\tcase 2: System.out.print("PLATA"); break;
\tcase 3: System.out.print("BRONCE");
\tdefault: System.out.print("SIN PREMIO");
}`,
        lenguaje: "java"
      },
      opciones: [
        "PLATA",
        "BRONCE",
        "BRONCESIN PREMIO",
        "SIN PREMIO"
      ],
      respuestaCorrecta: 2,
      explicacion: "Como posicion = 3, la ejecución comienza en el case 3. Al no haber un break después de imprimir \"BRONCE\", la ejecución continúa con el siguiente caso (default), imprimiendo también \"SIN PREMIO\". Este comportamiento se conoce como 'fall-through' en las estructuras switch. El resultado final será \"BRONCESIN PREMIO\"."
    },
    {
      id: 31808,
      moduloId: 318,
      pregunta: "¿Qué mostrará por pantalla el siguiente código?",
      recurso: {
        tipo: "codigo",
        contenido: `int i = 1;
while (i <= 3) {
\tSystem.out.print(i + " ");
\ti++;
}`,
        lenguaje: "java"
      },
      opciones: [
        "0 1 2",
        "1 2 3",
        "1 2 3 4",
        "2 3 4"
      ],
      respuestaCorrecta: 1,
      explicacion: "El bucle while comienza con i=1 y se ejecuta mientras i<=3. En cada iteración, imprime el valor de i seguido de un espacio y luego incrementa i. Las iteraciones serán: i=1 (imprime \"1 \"), i=2 (imprime \"2 \"), i=3 (imprime \"3 \"). Cuando i llega a 4, la condición i<=3 ya no se cumple y el bucle termina. El resultado final es \"1 2 3\"."
    },
    {
      id: 31809,
      moduloId: 318,
      pregunta: "¿Cuál de estas declaraciones crea un array unidimensional de enteros en Java?",
      opciones: [
        "array int[] = new int[5];",
        "int array() = new int[5];",
        "int[] array = new int[5];",
        "new int array[5];"
      ],
      respuestaCorrecta: 2,
      explicacion: "La sintaxis correcta para declarar e inicializar un array unidimensional en Java es 'int[] array = new int[5];' o 'int array[] = new int[5];'. Ambas son válidas, pero la primera es más común y recomendada. Las otras opciones contienen errores de sintaxis que el compilador no aceptaría."
    },
    {
      id: 31810,
      moduloId: 318,
      pregunta: "¿Qué ocurrirá si accedemos a a[5] en un array de tamaño 4?",
      opciones: [
        "Se imprimirá 0",
        "Excepción en tiempo de ejecución",
        "Se imprime el último valor",
        "Compila pero no imprime nada"
      ],
      respuestaCorrecta: 1,
      explicacion: "Si intentamos acceder al índice 5 (a[5]) en un array de tamaño 4 (cuyos índices van de 0 a 3), se producirá una excepción ArrayIndexOutOfBoundsException en tiempo de ejecución. Java no permite acceder a posiciones fuera de los límites del array y lanza esta excepción para indicar el error."
    },
    {
      id: 31811,
      moduloId: 318,
      pregunta: "¿Qué ocurre si igualamos dos arrays así?",
      recurso: {
        tipo: "codigo",
        contenido: `int[] b = a;`,
        lenguaje: "java"
      },
      opciones: [
        "Se copian los valores",
        "Apuntan al mismo espacio en memoria",
        "Se clona automáticamente",
        "No compila"
      ],
      respuestaCorrecta: 1,
      explicacion: "Al igualar dos arrays con int[] b = a, no se copia el contenido del array sino que ambas variables (a y b) apuntan al mismo espacio en memoria. Esto significa que cualquier modificación que se haga a través de b también afectará al array accedido a través de a, ya que ambos hacen referencia al mismo objeto array en memoria."
    },
    {
      id: 31812,
      moduloId: 318,
      pregunta: "¿Cómo se llama a un método desde el main que se ha definido como public static int suma(int a, int b)?",
      opciones: [
        "main.suma(3, 4);",
        "suma(3, 4);",
        "this.suma(3, 4);",
        "new suma(3, 4);"
      ],
      respuestaCorrecta: 1,
      explicacion: "Como el método suma está declarado como static, pertenece a la clase y no a una instancia específica. Por lo tanto, se puede llamar directamente usando su nombre: suma(3, 4). No es necesario ningún prefijo como 'main.' o 'this.' ya que está en la misma clase, y definitivamente no se usa 'new' que es para crear objetos."
    },
    {
      id: 31813,
      moduloId: 318,
      pregunta: "¿Qué ocurre si modificas un array dentro de un método?",
      opciones: [
        "Se crea una copia dentro del método y es la que se modifica",
        "No se crea una copia en el método. Directamente se modifica el original",
        "No se puede. Es una variable especial que no se puede pasar en un método",
        "Depende del tipo de dato"
      ],
      respuestaCorrecta: 1,
      explicacion: "En Java, los arrays son objetos que se pasan por referencia. Cuando pasas un array a un método, no se crea una copia del array, sino que se pasa una referencia al array original. Por lo tanto, si modificas el contenido del array dentro del método, estás modificando directamente el array original, y estos cambios serán visibles fuera del método después de que este termine su ejecución."
    },
    {
      id: 31814,
      moduloId: 318,
      pregunta: "¿Qué hace el siguiente método recursivo?",
      recurso: {
        tipo: "codigo",
        contenido: `void imprimir(int x) {
\tif (x > 0) {
\t\timprimir(x - 1);
\t\tSystem.out.println(x);
\t}
}`,
        lenguaje: "java"
      },
      opciones: [
        "Imprime del 5 al 1",
        "Imprime del 1 al valor de x",
        "No imprime nada",
        "Da error de compilación"
      ],
      respuestaCorrecta: 1,
      explicacion: "Este método recursivo imprime números desde 1 hasta x en orden ascendente. La recursión funciona así: para un valor x, primero llama a imprimir(x-1), que imprimirá todos los números de 1 a x-1, y luego imprime x. Como la llamada recursiva ocurre antes de la impresión, los números se imprimen en orden ascendente. Por ejemplo, para imprimir(3), se imprimirá 1, 2, 3."
    },
    {
      id: 31815,
      moduloId: 318,
      pregunta: "¿Qué imprimirá este código?",
      recurso: {
        tipo: "codigo",
        contenido: `public static void main(String[] args) {
\tint x = 3;
\tprueba(x);
\tSystem.out.println(x);
}

public static void prueba(int x) {
\tx = x + 1;
}`,
        lenguaje: "java"
      },
      opciones: [
        "4",
        "3",
        "Error",
        "x"
      ],
      respuestaCorrecta: 1,
      explicacion: "Este código ilustra el paso por valor de tipos primitivos en Java. Cuando pasas un tipo primitivo como int a un método, se pasa una copia del valor, no una referencia a la variable original. Por lo tanto, cualquier cambio en el parámetro x dentro del método prueba(x) no afecta a la variable x en el método main. Después de llamar a prueba(x), el valor de x en main sigue siendo 3."
    },
    {
      id: 31816,
      moduloId: 318,
      pregunta: "¿Qué diferencia hay entre acceder directamente a los atributos y usar getters/setters?",
      opciones: [
        "No hay diferencia",
        "Los getters/setters permiten encapsular y controlar el acceso",
        "Los getters son obligatorios",
        "Los atributos privados se acceden igual"
      ],
      respuestaCorrecta: 1,
      explicacion: "La principal diferencia es que los getters/setters permiten encapsular el acceso a los atributos y añadir lógica de control. Permiten validar datos antes de asignarlos, realizar cálculos automáticos, lanzar eventos cuando cambia un valor, o cambiar la implementación interna sin afectar el código que usa la clase. Además, permiten controlar si una propiedad es de solo lectura (solo getter) o solo escritura (solo setter)."
    },
    {
      id: 31817,
      moduloId: 318,
      pregunta: "¿Cuál es el error en este constructor?",
      recurso: {
        tipo: "codigo",
        contenido: `public void Persona(String nombre, String apellido, String telefono) {
\tthis.nombre = nombre;
\tthis.apellido = apellido;
\tthis.telefono = telefono;
}`,
        lenguaje: "java"
      },
      opciones: [
        "No es un constructor válido porque tiene void",
        "Faltan los atributos",
        "No se puede usar this",
        "Es correcto"
      ],
      respuestaCorrecta: 0,
      explicacion: "El error en este constructor es que tiene un tipo de retorno (void). Los constructores en Java no deben tener tipo de retorno, ni siquiera void. Un constructor válido tendría la forma: public Persona(String nombre, String apellido, String telefono) { ... }. El nombre del constructor debe coincidir exactamente con el nombre de la clase y no debe especificar ningún tipo de retorno."
    },
    {
      id: 31818,
      moduloId: 318,
      pregunta: "¿Cuál de los siguientes métodos es un getter correctamente implementado?",
      opciones: [
        "String getNombre(String nombre) { return nombre; }",
        "public String getNombre() { return nombre; }",
        "public void getNombre() { return nombre; }",
        "String getNombre() { nombre; }"
      ],
      respuestaCorrecta: 1,
      explicacion: "Un getter correctamente implementado devuelve el valor del atributo correspondiente sin recibir parámetros. La opción B es correcta: public String getNombre() { return nombre; }. La opción A recibe un parámetro innecesario, la opción C tiene void como tipo de retorno lo que no permite devolver un valor, y la opción D tiene una sintaxis incorrecta (falta la palabra clave return)."
    },
    {
      id: 31819,
      moduloId: 318,
      pregunta: "¿Qué palabra clave permite a una clase heredar de una interfaz?",
      opciones: [
        "extends",
        "implements",
        "interface",
        "inherits"
      ],
      respuestaCorrecta: 1,
      explicacion: "La palabra clave 'implements' se utiliza cuando una clase implementa una interfaz. Por ejemplo: public class MiClase implements MiInterfaz { ... }. La palabra 'extends' se usa para la herencia entre clases, 'interface' es para definir una interfaz, e 'inherits' no es una palabra clave en Java."
    },
    {
      id: 31820,
      moduloId: 318,
      pregunta: "¿Cuál es el resultado de este código?",
      recurso: {
        tipo: "codigo",
        contenido: `class Animal {
\tpublic void sonido() {
\t\tSystem.out.println("Algún sonido");
\t}
}

class Perro extends Animal {
\tpublic void sonido() {
\t\tSystem.out.println("Guau");
\t}
}

public class Principal {
\tpublic static void main(String[] args) {
\t\tAnimal a = new Perro();
\t\ta.sonido();
\t}
}`,
        lenguaje: "java"
      },
      opciones: [
        "Algún sonido",
        "Guau",
        "Error de compilación",
        "No imprime nada"
      ],
      respuestaCorrecta: 1,
      explicacion: "Este código ilustra el polimorfismo en Java. Aunque la variable 'a' es de tipo Animal, está referenciando a un objeto de tipo Perro. Cuando se llama al método sonido(), Java utiliza el principio de enlace dinámico (dynamic binding) para determinar que debe ejecutar el método sonido() de la clase Perro, no el de Animal. Esto es fundamental en el polimorfismo. Por lo tanto, el resultado será \"Guau\"."
    },
    {
      id: 31821,
      moduloId: 318,
      pregunta: "¿Qué ocurre si una clase implementa una interfaz pero no define todos sus métodos?",
      opciones: [
        "Se ejecutan métodos vacíos",
        "No pasa nada",
        "Da error de compilación",
        "Los métodos se generan automáticamente"
      ],
      respuestaCorrecta: 2,
      explicacion: "Si una clase implementa una interfaz pero no define (implementa) todos los métodos declarados en esa interfaz, el compilador producirá un error. Es obligatorio que la clase proporcione implementaciones para todos los métodos de la interfaz o debe declararse como abstracta. Las interfaces actúan como un contrato, y las clases que las implementan deben cumplir con ese contrato completamente."
    },
    {
      id: 31822,
      moduloId: 318,
      pregunta: "¿Qué imprimirá este código?",
      recurso: {
        tipo: "codigo",
        contenido: `interface Saludo {
\tvoid decirHola();
}

class Español implements Saludo {
\tpublic void decirHola() {
\t\tSystem.out.println("¡Hola!");
\t}
}

public class Test {
\tpublic static void main(String[] args) {
\t\tSaludo s = new Español();
\t\ts.decirHola();
\t}
}`,
        lenguaje: "java"
      },
      opciones: [
        "Error",
        "Hola",
        "¡Hola!",
        "null"
      ],
      respuestaCorrecta: 2,
      explicacion: "Este código demuestra el uso de interfaces y polimorfismo. Se declara una variable 's' de tipo Saludo (la interfaz) y se le asigna una instancia de la clase Español que implementa esa interfaz. Cuando se llama al método decirHola() a través de la referencia 's', se ejecuta la implementación proporcionada por la clase Español, que imprime \"¡Hola!\". No hay errores de compilación ni de ejecución, ya que la clase Español implementa correctamente la interfaz Saludo."
    },
    {
      id: 31823,
      moduloId: 318,
      pregunta: "¿Qué imprimirá este código?",
      recurso: {
        tipo: "codigo",
        contenido: `abstract class Vehiculo {
\tabstract void arrancar();
}

class Moto extends Vehiculo {}
public class Principal {
\tpublic static void main(String[] args) {
\t\tVehiculo v = new Moto();
\t\tv.arrancar();
\t}
}`,
        lenguaje: "java"
      },
      opciones: [
        "Arranca la moto",
        "null",
        "Muestra un mensaje de excepción",
        "Error de compilación"
      ],
      respuestaCorrecta: 3,
      explicacion: "Este código producirá un error de compilación. La clase Moto extiende la clase abstracta Vehiculo, pero no implementa el método abstracto arrancar(). Cuando una clase hereda de una clase abstracta, debe implementar todos los métodos abstractos de la clase padre o declararse también como abstracta. Como Moto no hace ninguna de estas dos cosas, el compilador generará un error."
    },
    {
      id: 31824,
      moduloId: 318,
      pregunta: "¿Qué ocurre si intentamos crear un objeto directamente de una clase abstracta?",
      opciones: [
        "Se crea con métodos vacíos",
        "Da error de compilación",
        "Se crea si tiene constructor",
        "Solo da error si tiene métodos abstractos"
      ],
      respuestaCorrecta: 1,
      explicacion: "No es posible crear instancias directamente de una clase abstracta en Java. Si intentamos hacerlo (por ejemplo, new ClaseAbstracta()), el compilador generará un error. Las clases abstractas están diseñadas para ser extendidas por otras clases que proporcionen implementaciones para los métodos abstractos. Aunque una clase abstracta puede tener constructor (que será llamado cuando se cree una instancia de una subclase), no se puede instanciar directamente, independientemente de si contiene métodos abstractos o no."
    },
    {
      id: 31825,
      moduloId: 318,
      pregunta: "¿Qué es una clase abstracta?",
      opciones: [
        "Una clase con solo métodos estáticos",
        "Una clase que no tiene constructor",
        "Una clase que no puede ser instanciada directamente",
        "Una interfaz disfrazada"
      ],
      respuestaCorrecta: 2,
      explicacion: "Una clase abstracta en Java es una clase que no puede ser instanciada directamente. Se utiliza como una clase base para otras clases. Una clase abstracta puede contener métodos abstractos (métodos sin implementación) y métodos concretos (con implementación). Puede tener constructores (que son llamados por las subclases), atributos, y cualquier otra característica de una clase normal. Su propósito principal es proporcionar una base común que las subclases pueden extender y especializar."
    },
    {
      id: 31826,
      moduloId: 318,
      pregunta: "¿Qué ocurre si una clase hija no implementa todos los métodos de una interfaz?",
      opciones: [
        "El programa se ejecuta igual",
        "Error de compilación",
        "Se autocomplementan los métodos",
        "Solo da advertencia"
      ],
      respuestaCorrecta: 1,
      explicacion: "Si una clase implementa una interfaz pero no proporciona implementaciones para todos los métodos declarados en esa interfaz, el compilador generará un error. Las interfaces en Java actúan como un contrato que las clases implementadoras deben cumplir completamente. La única excepción es si la clase se declara como abstracta, en cuyo caso puede dejar algunos métodos de la interfaz sin implementar, pero entonces no se podrá instanciar directamente esa clase."
    },
    {
      id: 31827,
      moduloId: 318,
      pregunta: "¿Qué imprimirá este código?",
      recurso: {
        tipo: "codigo",
        contenido: `try {
\tint a = 10, b = 0;
\tint c = a / b;
} catch (ArithmeticException e) {
\tSystem.out.println("Error");
}`,
        lenguaje: "java"
      },
      opciones: [
        "Error",
        "Error de compilación",
        "Error: null",
        "0"
      ],
      respuestaCorrecta: 0,
      explicacion: "Este código intenta dividir por cero (a/b donde b=0), lo que en Java provoca una excepción ArithmeticException. Esta excepción es capturada por el bloque catch, que imprime la palabra \"Error\". El programa no se detiene abruptamente debido al manejo de la excepción, y el resultado de la ejecución será la palabra \"Error\" en la consola."
    },
    {
      id: 31828,
      moduloId: 318,
      pregunta: "¿Cuál de estas excepciones es \"no controlada\" (unchecked)?",
      opciones: [
        "IOException",
        "ArithmeticException",
        "FileNotFoundException",
        "SQLException"
      ],
      respuestaCorrecta: 1,
      explicacion: "En Java, las excepciones se dividen en dos categorías: checked (controladas) y unchecked (no controladas). Las excepciones no controladas son subclases de RuntimeException y no requieren ser declaradas en la cláusula throws ni capturadas en bloques try-catch. ArithmeticException es una subclase de RuntimeException, por lo que es una excepción no controlada. IOException, FileNotFoundException y SQLException son excepciones controladas que deben ser manejadas explícitamente o declaradas."
    },
    {
      id: 31829,
      moduloId: 318,
      pregunta: "¿Por qué se usan excepciones personalizadas?",
      opciones: [
        "Para ocultar errores",
        "Para representar errores específicos y claros en tu aplicación",
        "Para evitar try-catch",
        "Porque las estándar no funcionan"
      ],
      respuestaCorrecta: 1,
      explicacion: "Las excepciones personalizadas se utilizan para representar errores específicos y claros en una aplicación. Permiten definir tipos de error propios del dominio de la aplicación, facilitando la identificación y el manejo de situaciones excepcionales específicas. Esto mejora la legibilidad del código, la documentación de posibles errores, y permite un manejo más granular de diferentes tipos de errores. No se usan para ocultar errores o evitar mecanismos de manejo de excepciones, sino para mejorarlos."
    },
    {
      id: 31830,
      moduloId: 318,
      pregunta: "¿Qué imprimirá este código?",
      recurso: {
        tipo: "codigo",
        contenido: `try {
\tString s = null;
\ts.length();
} catch (NullPointerException e) {
\tSystem.out.println("Referencia nula");
}`,
        lenguaje: "java"
      },
      opciones: [
        "Referencia nula",
        "Error de compilación",
        "null",
        "s"
      ],
      respuestaCorrecta: 0,
      explicacion: "Este código intenta llamar al método length() en una referencia nula (s), lo que provoca una NullPointerException. Esta excepción es capturada por el bloque catch, que imprime \"Referencia nula\". El programa no se detiene abruptamente gracias al manejo de la excepción, y el resultado será \"Referencia nula\" en la consola. Es un ejemplo de cómo manejar apropiadamente situaciones donde pueden ocurrir referencias nulas."
    },
    {
      id: 31831,
      moduloId: 318,
      pregunta: "¿Por qué no saltará nunca esta excepción?",
      recurso: {
        tipo: "codigo",
        contenido: `try {
\tint x = 1;
} catch (Exception e) {
\tSystem.out.println("Error");
}`,
        lenguaje: "java"
      },
      opciones: [
        "No hay código que pueda lanzar excepción dentro de try",
        "Falta finally",
        "El catch no compila",
        "int no se puede usar con try"
      ],
      respuestaCorrecta: 0,
      explicacion: "La excepción nunca se lanzará porque el código dentro del bloque try no puede generar ninguna excepción. La asignación int x = 1; es una operación simple que no lanza excepciones en condiciones normales. Para que se ejecute el bloque catch, debe ocurrir alguna excepción dentro del bloque try, como una división por cero, un acceso a un índice fuera de rango en un array, o una referencia nula. Como no hay operaciones que puedan fallar, el bloque catch nunca se ejecutará."
    },
    {
      id: 31832,
      moduloId: 318,
      pregunta: "¿Cuál es el error de este código?",
      recurso: {
        tipo: "codigo",
        contenido: `try {
\tint[] v = new int[3];
\tv[4] = 2;
}

catch {
\tSystem.out.println("Error");
}`,
        lenguaje: "java"
      },
      opciones: [
        "El array es demasiado pequeño",
        "Falta un bloque finally",
        "Falta especificar el tipo de excepción en el catch",
        "Se necesita throws en main"
      ],
      respuestaCorrecta: 2,
      explicacion: "El error en este código es que falta especificar el tipo de excepción y el parámetro en el bloque catch. La sintaxis correcta sería: catch (ExceptionType parameterName) { ... }. Por ejemplo, catch (ArrayIndexOutOfBoundsException e) { ... }. Sin esta especificación, el compilador no sabrá qué tipo de excepción debe manejar y generará un error de compilación. El array efectivamente es demasiado pequeño (intentar acceder al índice 4 en un array de tamaño 3 causará una excepción), pero eso es un error en tiempo de ejecución, no un error de sintaxis."
    },
    {
      id: 31833,
      moduloId: 318,
      pregunta: "¿Qué mostrará por pantalla al ejecutar este código?",
      recurso: {
        tipo: "codigo",
        contenido: `ArrayList<String> lista = new ArrayList<>();
lista.add("Java");
lista.set(0, "Python");
System.out.println(lista.get(0));`,
        lenguaje: "java"
      },
      opciones: [
        "Java",
        "Python",
        "null",
        "Error"
      ],
      respuestaCorrecta: 1,
      explicacion: "El código muestra la manipulación básica de un ArrayList en Java. Primero se crea un ArrayList vacío, luego se añade el elemento \"Java\" en la posición 0. Después, el método set(0, \"Python\") reemplaza el elemento en la posición 0 (\"Java\") con \"Python\". Finalmente, get(0) recupera el elemento en la posición 0, que ahora es \"Python\", y lo imprime. Por lo tanto, la salida será \"Python\"."
    },
    {
      id: 31834,
      moduloId: 318,
      pregunta: "¿Qué estructura de acceso caracteriza a una pila (stack)?",
      opciones: [
        "FIFO",
        "LIFO",
        "FILO",
        "Aleatorio"
      ],
      respuestaCorrecta: 1,
      explicacion: "Una pila (stack) se caracteriza por la estructura de acceso LIFO (Last In, First Out), lo que significa que el último elemento añadido a la pila será el primero en ser retirado. Esto es similar a una pila de platos donde añades y retiras platos desde la parte superior. FIFO (First In, First Out) describe una cola (queue), donde el primer elemento añadido es el primero en salir. FILO es solo otra forma de decir LIFO. El acceso aleatorio no es característico de una pila."
    },
    {
      id: 31835,
      moduloId: 318,
      pregunta: "¿Qué hace el método insertar() en una implementación de cola?",
      opciones: [
        "Elimina el último elemento",
        "Inserta al principio",
        "Añade un nuevo elemento al final",
        "Reemplaza el primero"
      ],
      respuestaCorrecta: 2,
      explicacion: "En una implementación de cola (queue), el método insertar() (o enqueue, offer, add dependiendo de la implementación) añade un nuevo elemento al final de la cola. Esto sigue el principio FIFO (First In, First Out) característico de las colas, donde los elementos se añaden al final y se retiran del principio. Las otras operaciones descritas no son típicas de una cola: eliminar elementos suele hacerse con métodos como remove() o poll(), y no se suele insertar al principio ni reemplazar elementos en una cola básica."
    },
    {
      id: 31836,
      moduloId: 318,
      pregunta: "¿Qué imprime este código?",
      recurso: {
        tipo: "codigo",
        contenido: `Queue<Integer> cola = new LinkedList <>();
cola.add(1);
cola.add(2);
cola.remove();
System.out.println(cola.peek());`,
        lenguaje: "java"
      },
      opciones: [
        "1",
        "2",
        "null",
        "Error"
      ],
      respuestaCorrecta: 1,
      explicacion: "Este código trabaja con una cola (Queue) implementada como LinkedList. Primero añade los elementos 1 y 2 a la cola con add(). Luego, remove() elimina el primer elemento de la cola, que es 1 (siguiendo el principio FIFO). Después, peek() devuelve el primer elemento de la cola sin eliminarlo, que ahora es 2. Por lo tanto, System.out.println(cola.peek()) imprimirá 2."
    },
    {
      id: 31837,
      moduloId: 318,
      pregunta: "¿Qué ocurre si FileWriter se crea sin el parámetro append=true?",
      opciones: [
        "Añade contenido al final",
        "Sobreescribe el fichero existente",
        "Da error",
        "Borra el archivo"
      ],
      respuestaCorrecta: 1,
      explicacion: "Si un FileWriter se crea sin el parámetro append=true o equivalente (por ejemplo, new FileWriter(file) en lugar de new FileWriter(file, true)), el comportamiento predeterminado es sobreescribir cualquier fichero existente. Esto significa que si el archivo ya existe, su contenido previo será eliminado y reemplazado por el nuevo contenido que se escriba. Si deseas añadir contenido al final de un archivo existente sin borrar su contenido previo, debes usar el constructor con el parámetro append establecido a true."
    },
    {
      id: 31838,
      moduloId: 318,
      pregunta: "¿Qué se necesita para que un botón reaccione a una acción en una interfaz Swing?",
      opciones: [
        "Crear un hilo",
        "Añadir un ActionListener",
        "Llamar a run()",
        "Asociar un KeyEvent"
      ],
      respuestaCorrecta: 1,
      explicacion: "Para que un botón reaccione a una acción (como un clic) en una interfaz Swing, necesitas añadir un ActionListener al botón. Esto se hace mediante el método addActionListener() del botón, al que se le pasa un objeto que implementa la interfaz ActionListener. Este objeto debe proporcionar una implementación del método actionPerformed() que se ejecutará cuando el usuario haga clic en el botón. No es necesario crear un hilo explícitamente, llamar a run(), ni asociar un KeyEvent, que se usa para eventos de teclado, no para clics en botones."
    },
    {
      id: 31839,
      moduloId: 318,
      pregunta: "¿Cuál es la diferencia entre FileWriter y DataOutputStream?",
      opciones: [
        "Ambos escriben texto",
        "FileWriter escribe caracteres, DataOutputStream escribe datos primitivos",
        "DataOutputStream es solo para redes",
        "FileWriter no permite escritura"
      ],
      respuestaCorrecta: 1,
      explicacion: "La principal diferencia es que FileWriter está diseñado para escribir texto (caracteres), mientras que DataOutputStream está diseñado para escribir datos primitivos de Java en formato binario. FileWriter es más adecuado para crear archivos de texto legibles, mientras que DataOutputStream es mejor para guardar datos que serán leídos posteriormente por un programa Java, manteniendo los tipos de datos originales. DataOutputStream no es exclusivo para redes, aunque se usa comúnmente con sockets. FileWriter definitivamente permite escritura, esa es su función principal."
    },
    {
      id: 31840,
      moduloId: 318,
      pregunta: "¿Qué buena práctica se recomienda siempre al trabajar con JDBC?",
      opciones: [
        "Usar archivos .sql externos",
        "No capturar excepciones",
        "Cerrar conexiones y usar try-with-resources",
        "Ejecutar solo consultas SELECT"
      ],
      respuestaCorrecta: 2,
      explicacion: "Una de las prácticas más importantes al trabajar con JDBC es cerrar adecuadamente las conexiones, statements y resultsets para evitar fugas de recursos. La mejor manera de hacerlo es usar la estructura try-with-resources introducida en Java 7, que garantiza que los recursos se cierren automáticamente al finalizar el bloque try. Esto ayuda a evitar problemas de rendimiento y posibles bloqueos en la base de datos. Las otras opciones no son buenas prácticas universales: usar archivos SQL externos puede ser útil en algunos casos pero no siempre, las excepciones deben capturarse adecuadamente, y limitar las consultas solo a SELECT no es práctico para la mayoría de aplicaciones."
    }
  ]
};

export default moduloExamenDam;