/**
 * Datos del módulo de Estructuras de Datos en Java perteneciente a la asignatura de Programación.
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
 * // Importar el módulo de Estructuras de Datos
 * import moduloEstructurasDatos from '@data/modulos/estructurasDatos';
 *
 * function PreguntasAleatorias() {
 *   // Seleccionar 5 preguntas aleatorias del módulo
 *   const preguntasAleatorias = moduloEstructurasDatos.preguntas
 *     .sort(() => 0.5 - Math.random())
 *     .slice(0, 5);
 *
 *   return (
 *     <div>
 *       <h2>{moduloEstructurasDatos.nombre}</h2>
 *       {preguntasAleatorias.map(pregunta => (
 *         <QuestionCard key={pregunta.id} pregunta={pregunta} />
 *       ))}
 *     </div>
 *   );
 * }
 */
export const moduloEstructurasDatos = {
    id: 302,
    nombre: "Estructuras de Datos en Java",
    asignaturaId: 3,
    descripcion: "Colecciones, arrays, listas, pilas, colas y otras estructuras de datos en Java, incluyendo sus operaciones y usos principales.",
    preguntas: [
      {
        id: 3101,
        moduloId: 302,
        pregunta: "¿Cuál de estas clases implementa una estructura LIFO?",
        opciones: ["Array", "ArrayList", "Stack", "Queue"],
        respuestaCorrecta: 2,
        explicacion: "La clase Stack implementa una estructura LIFO (Last In, First Out), donde el último elemento añadido es el primero en salir, como una pila de platos."
      },
      {
        id: 3102,
        moduloId: 302,
        pregunta: "¿Cuál de las siguientes afirmaciones sobre los arrays en Java es verdadera?",
        opciones: ["Un array puede contener distintos tipos de datos", "El tamaño del array es fijo una vez creado", "No se puede acceder a un array con un índice numérico", "Los arrays pueden cambiar de tamaño dinámicamente"],
        respuestaCorrecta: 1,
        explicacion: "Una vez que se crea un array en Java, su tamaño es fijo y no puede cambiar. Para redimensionar un array, se debe crear uno nuevo y copiar los elementos."
      },
      {
        id: 3103,
        moduloId: 302,
        pregunta: "¿Cuál es el método adecuado para añadir un elemento a una ArrayList?",
        opciones: ["insert()", "add()", "append()", "put()"],
        respuestaCorrecta: 1,
        explicacion: "El método add() es el adecuado para añadir un elemento a un ArrayList en Java. Este método agrega el elemento al final de la lista por defecto, o en una posición específica si se proporciona un índice."
      },
      {
        id: 3104,
        moduloId: 302,
        pregunta: "¿Cuál es la forma correcta de declarar y crear un array de enteros con 10 elementos?",
        opciones: ["array = int[10];", "int array(10);", "int[] array = new int[10];", "int array = new int[10];"],
        respuestaCorrecta: 2,
        explicacion: "La forma correcta de declarar y crear un array de enteros con 10 elementos en Java es 'int[] array = new int[10];'. Esto crea un array de 10 enteros inicializados con el valor por defecto 0."
      },
      {
        id: 3105,
        moduloId: 302,
        pregunta: "¿Cuál es la interfaz que implementan todas las colas en Java?",
        opciones: ["Deque", "Queue", "Stack", "LinkedList"],
        respuestaCorrecta: 1,
        explicacion: "La interfaz Queue define las operaciones básicas para todas las colas en Java, como offer(), poll(), peek(), etc. Diferentes implementaciones como LinkedList, PriorityQueue y ArrayDeque implementan esta interfaz."
      },
      {
        id: 3106,
        moduloId: 302,
        pregunta: "¿Qué imprime el siguiente código?",
        recurso: {
          tipo: "codigo",
          contenido: `interface A {
  void saludar();
}
class B implements A {
  public void saludar() {
    System.out.println("Hola");
  }
}`,
          lenguaje: "java"
        },
        opciones: ["No imprime nada", "Error de compilación", "Imprime: null", "Imprime: Hola"],
        respuestaCorrecta: 3,
        explicacion: "El código define correctamente una interfaz A con un método saludar() y una clase B que implementa esta interfaz. Si instanciamos B y llamamos a saludar(), imprime 'Hola'."
      },
      {
        id: 3107,
        moduloId: 302,
        pregunta: "¿Qué imprime el siguiente código?",
        recurso: {
          tipo: "codigo",
          contenido: `Stack<Integer> stack = new Stack<>();
stack.push(10);
stack.push(20);
System.out.println(stack.peek());`,
          lenguaje: "java"
        },
        opciones: ["20", "Error en compilación", "30", "10"],
        respuestaCorrecta: 0,
        explicacion: "El método peek() muestra el elemento en la cima de la pila (el último agregado) sin eliminarlo. En este caso, primero se agrega 10 y luego 20, por lo que peek() muestra 20."
      },
      {
        id: 3108,
        moduloId: 302,
        pregunta: "¿Qué imprime el siguiente código?",
        recurso: {
          tipo: "codigo",
          contenido: `public class Main {
  public static void main(String[] args) {
    B b = new B();
    b.mostrar();
  }
}`,
          lenguaje: "java"
        },
        opciones: ["Clase B", "No imprime nada", "Error de compilación", "Clase A"],
        respuestaCorrecta: 3,
        explicacion: "Asumiendo que B hereda de A y ambas clases tienen un método mostrar(), pero B no sobrescribe este método, al llamar a b.mostrar() se ejecutará el método definido en la clase A, imprimiendo 'Clase A'."
      },
      {
        id: 3109,
        moduloId: 302,
        pregunta: "¿Cuál es la sintaxis correcta para que una clase implemente una interfaz?",
        opciones: ["class MiClase extends MiInterfaz", "class MiClase : MiInterfaz", "class MiClase inherits MiInterfaz", "class MiClase implements MiInterfaz"],
        respuestaCorrecta: 3,
        explicacion: "En Java, se utiliza la palabra clave 'implements' para indicar que una clase implementa una interfaz. Una clase puede implementar múltiples interfaces separándolas por comas."
      },
      {
        id: 3110,
        moduloId: 302,
        pregunta: "¿Cuál es una característica de una clase abstracta?",
        opciones: ["Se puede instanciar directamente", "Solo puede tener atributos estáticos", "Puede tener métodos abstractos y concretos", "No puede tener métodos implementados"],
        respuestaCorrecta: 2,
        explicacion: "Una característica importante de las clases abstractas en Java es que pueden contener tanto métodos abstractos (sin implementación) como métodos concretos (con implementación completa)."
      },
      {
        id: 3111,
        moduloId: 302,
        pregunta: "¿Cuál es una diferencia principal entre ArrayList y LinkedList?",
        opciones: ["LinkedList no permite duplicados", "ArrayList no mantiene el orden", "ArrayList tiene acceso más rápido por índice", "LinkedList no permite nulos"],
        respuestaCorrecta: 2,
        explicacion: "ArrayList proporciona acceso más rápido a elementos por índice (acceso aleatorio) porque almacena elementos en un array subyacente, mientras que LinkedList requiere recorrer la lista desde el principio o final."
      },
      {
        id: 3112,
        moduloId: 302,
        pregunta: "¿Cuál es una ventaja principal de LinkedList frente a ArrayList?",
        opciones: ["Mejor acceso por índice", "Ocupa menos memoria en todos los casos", "No permite duplicados", "Mejor rendimiento en inserciones y eliminaciones en el medio"],
        respuestaCorrecta: 3,
        explicacion: "LinkedList ofrece mejor rendimiento para inserciones y eliminaciones en el medio de la lista, ya que solo necesita actualizar los enlaces entre nodos, mientras que ArrayList debe mover todos los elementos posteriores."
      },
      {
        id: 3113,
        moduloId: 302,
        pregunta: "¿Qué afirmación sobre la herencia en Java es correcta?",
        opciones: ["Una subclase hereda los métodos públicos y protegidos de la superclase", "De una clase no puede heredar más de una subclase", "La palabra clave extends se usa para implementar interfaces", "Una clase puede heredar de múltiples clases directamente"],
        respuestaCorrecta: 0,
        explicacion: "En Java, una subclase hereda todos los miembros (campos, métodos y clases anidadas) de su superclase que son públicos o protegidos. Los miembros privados no son heredados."
      },
      {
        id: 3114,
        moduloId: 302,
        pregunta: "¿Qué diferencia hay entre `abstract class` e `interface` en Java?",
        opciones: ["Las clases abstractas no pueden tener métodos implementados", "Las clases abstractas pueden tener estado (atributos)", "Las interfaces permiten constructores", "No hay ninguna diferencia"],
        respuestaCorrecta: 1,
        explicacion: "Una diferencia clave es que las clases abstractas pueden tener estado (campos/atributos con valores) y métodos concretos con implementación, mientras que las interfaces (antes de Java 8) solo podían tener constantes y métodos abstractos."
      },
      {
        id: 3115,
        moduloId: 302,
        pregunta: "¿Qué resultado da el siguiente código?",
        recurso: {
          tipo: "codigo",
          contenido: `Queue<Integer> cola = new LinkedList<>();
Stack<Integer> pila = new Stack<>();
cola.add(1);
cola.add(2);
pila.push(cola.poll());
pila.push(cola.poll());
System.out.println(pila.pop());`,
          lenguaje: "java"
        },
        opciones: ["1", "null", "2", "3"],
        respuestaCorrecta: 2,
        explicacion: "Se añaden 1 y 2 a la cola. Luego se extraen en orden (1 primero, luego 2) y se añaden a la pila. Al hacer pop() de la pila, se obtiene el último elemento añadido, que es 2."
      },
      {
        id: 3116,
        moduloId: 302,
        pregunta: "¿Qué imprime el siguiente código?",
        recurso: {
          tipo: "codigo",
          contenido: `Queue<String> cola = new LinkedList<>();
cola.add("uno");
cola.add("dos");
cola.poll();
System.out.println(cola.peek());`,
          lenguaje: "java"
        },
        opciones: ["null", "uno", "Error en tiempo de compilación", "dos"],
        respuestaCorrecta: 3,
        explicacion: "Se añaden 'uno' y 'dos' a la cola. El método poll() extrae y elimina el primer elemento ('uno'). El método peek() muestra el elemento en el frente de la cola sin eliminarlo, que ahora es 'dos'."
      },
      {
        id: 3117,
        moduloId: 302,
        pregunta: "¿Qué imprime el siguiente código?",
        recurso: {
          tipo: "codigo",
          contenido: `Stack<String> historial = new Stack<>();
historial.push("Escribir línea 1");
historial.push("Escribir línea 2");
historial.pop(); // deshacer
System.out.println(historial.peek());`,
          lenguaje: "java"
        },
        opciones: ["Escribir línea 1", "Escribir línea 2", "error", "null"],
        respuestaCorrecta: 0,
        explicacion: "Se agregan dos elementos a la pila. Al hacer pop(), se elimina el último elemento añadido ('Escribir línea 2'). Luego peek() muestra el elemento en la cima sin eliminarlo, que es 'Escribir línea 1'."
      },
      {
        id: 3118,
        moduloId: 302,
        pregunta: "¿Qué imprime el siguiente código?",
        recurso: {
          tipo: "codigo",
          contenido: `LinkedList<Integer> numeros = new LinkedList<>();
numeros.addFirst(10);
numeros.addLast(20);
System.out.println(numeros.size());`,
          lenguaje: "java"
        },
        opciones: ["1", "Error de compilación", "10", "2"],
        respuestaCorrecta: 3,
        explicacion: "Se añade el elemento 10 al principio de la lista y el elemento 20 al final. El método size() devuelve el número de elementos en la lista, que es 2."
      },
      {
        id: 3119,
        moduloId: 302,
        pregunta: "¿Qué imprime el siguiente código?",
        recurso: {
          tipo: "codigo",
          contenido: `Stack<Integer> pila = new Stack<>();
Queue<Integer> cola = new LinkedList<>();
pila.push(10);
cola.add(20);
System.out.println(pila.pop() + cola.peek());`,
          lenguaje: "java"
        },
        opciones: ["10", "30", "1020", "20"],
        respuestaCorrecta: 1,
        explicacion: "Se agrega 10 a la pila y 20 a la cola. El método pop() extrae y elimina el elemento de la pila (10), y peek() muestra el elemento de la cola sin eliminarlo (20). La suma es 10 + 20 = 30."
      },
      {
        id: 3120,
        moduloId: 302,
        pregunta: "¿Qué imprime el siguiente código?",
        recurso: {
          tipo: "codigo",
          contenido: `ArrayList<String> lista = new ArrayList<>();
Stack<String> pila = new Stack<>();
lista.add("X");
pila.push("Y");
System.out.println(lista.get(0) + pila.peek());`,
          lenguaje: "java"
        },
        opciones: ["YX", "X Y", "XY", "null"],
        respuestaCorrecta: 2,
        explicacion: "Se agrega 'X' a la lista y 'Y' a la pila. El método get(0) obtiene el primer elemento de la lista ('X') y peek() muestra el elemento en la cima de la pila ('Y'). La concatenación es 'XY'."
      },
      {
        id: 3121,
        moduloId: 302,
        pregunta: "¿Qué imprime el siguiente código?",
        recurso: {
          tipo: "codigo",
          contenido: `Stack<Integer> pila = new Stack<>();
pila.push(5);
pila.push(10);
pila.pop();
System.out.println(pila.peek());`,
          lenguaje: "java"
        },
        opciones: ["5", "Error de compilación", "null", "10"],
        respuestaCorrecta: 0,
        explicacion: "Se agregan 5 y 10 a la pila. El método pop() extrae y elimina el último elemento añadido (10). Luego peek() muestra el elemento en la cima sin eliminarlo, que ahora es 5."
      },
      {
        id: 3122,
        moduloId: 302,
        pregunta: "¿Qué método de LinkedList añade un elemento al principio de la lista?",
        opciones: ["addFirst()", "add()", "insertFirst()", "push()"],
        respuestaCorrecta: 0,
        explicacion: "El método addFirst() de LinkedList añade un elemento al principio de la lista. También se puede usar el método push(), que hace lo mismo (es equivalente a addFirst())."
      },
      {
        id: 3123,
        moduloId: 302,
        pregunta: "¿Qué método elimina el último elemento en una Stack?",
        opciones: ["pop()", "getLast()", "peek()", "removeLast()"],
        respuestaCorrecta: 0,
        explicacion: "El método pop() elimina y retorna el elemento en la cima de la pila, que en una estructura LIFO (Stack) es el último elemento añadido."
      },
      {
        id: 3124,
        moduloId: 302,
        pregunta: "¿Qué método debe implementar una clase que extiende de una clase abstracta?",
        recurso: {
          tipo: "codigo",
          contenido: `abstract class Figura {
  abstract double area();
}
class Cuadrado extends Figura {
  // Falta el método area()
}`,
          lenguaje: "java"
        },
        opciones: ["toString()", "equals()", "area(), de lo contrario hay error", "Ninguno, es opcional"],
        respuestaCorrecta: 2,
        explicacion: "Una clase que extiende de una clase abstracta debe implementar todos los métodos abstractos de la superclase, o declararse también como abstracta. En este caso, debe implementar el método area()."
      },
      {
        id: 3125,
        moduloId: 302,
        pregunta: "¿Qué método se utiliza para ver el primer elemento de una Queue sin eliminarlo?",
        opciones: ["poll()", "peek()", "front()", "pop()"],
        respuestaCorrecta: 1,
        explicacion: "El método peek() se utiliza para ver el elemento en el frente de una cola sin eliminarlo. Si la cola está vacía, devuelve null."
      },
      {
        id: 3126,
        moduloId: 302,
        pregunta: "¿Qué imprime el siguiente código?",
        recurso: {
          tipo: "codigo",
          contenido: `LinkedList<String> lista = new LinkedList<>();
Stack<String> pila = new Stack<>();
lista.add("Java");
pila.push("Collections");
lista.add(pila.pop());
System.out.println(lista);`,
          lenguaje: "java"
        },
        opciones: ["[Java, Collections]", "[Collections]", "Error en tiempo de ejecución", "[Java]"],
        respuestaCorrecta: 0,
        explicacion: "Se agrega 'Java' a la lista, luego 'Collections' a la pila. Después se extrae 'Collections' de la pila con pop() y se añade a la lista. Al imprimir la lista, se obtiene [Java, Collections]."
      },
      {
        id: 3127,
        moduloId: 302,
        pregunta: "¿Qué imprime el siguiente código?",
        recurso: {
          tipo: "codigo",
          contenido: `ArrayList<String> lista = new ArrayList<>();
lista.add("A");
lista.add("B");
lista.add("C");
System.out.println(lista.get(1));`,
          lenguaje: "java"
        },
        opciones: ["C", "B", "null", "A"],
        respuestaCorrecta: 1,
        explicacion: "Se agregan elementos 'A', 'B' y 'C' a la lista. El método get(1) obtiene el elemento en el índice 1 (el segundo elemento), que es 'B'."
      },
      {
        id: 3128,
        moduloId: 302,
        pregunta: "¿Qué imprime el siguiente código?",
        recurso: {
          tipo: "codigo",
          contenido: `ArrayList<Integer> numeros = new ArrayList<>();
numeros.add(1);
numeros.add(2);
numeros.add(3);
numeros.remove(1);
System.out.println(numeros);`,
          lenguaje: "java"
        },
        opciones: ["[1, 3]", "[2, 3]", "[1, 2]", "[3]"],
        respuestaCorrecta: 0,
        explicacion: "Se agregan 1, 2 y 3 a la lista. El método remove(1) elimina el elemento en el índice 1, que es 2. La lista resultante es [1, 3]."
      },
      {
        id: 3129,
        moduloId: 302,
        pregunta: "¿Qué imprime el siguiente código?",
        recurso: {
          tipo: "codigo",
          contenido: `ArrayList<String> lista = new ArrayList<>();
LinkedList<String> linked = new LinkedList<>();
lista.add("uno");
linked.add("dos");
System.out.println(lista.get(0) + "-" + linked.get(0));`,
          lenguaje: "java"
        },
        opciones: ["uno-dos", "null-null", "dos-uno", "Error de compilación"],
        respuestaCorrecta: 0,
        explicacion: "Se agrega 'uno' a ArrayList y 'dos' a LinkedList. Al concatenar el primer elemento de cada lista (get(0)) separados por un guion, se obtiene 'uno-dos'."
      },
      {
        id: 3130,
        moduloId: 302,
        pregunta: "¿Qué sucede si accedes a un índice que no existe en un ArrayList?",
        opciones: ["Se ignora el acceso", "Se devuelve null", "Se lanza una excepción IndexOutOfBoundsException", "Se elimina el último elemento"],
        respuestaCorrecta: 2,
        explicacion: "Si intentas acceder a un índice fuera de los límites de un ArrayList (negativo o mayor o igual al tamaño), Java lanzará una excepción IndexOutOfBoundsException."
      }
    ]
  };

  export default moduloEstructurasDatos;