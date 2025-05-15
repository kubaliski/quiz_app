/**
 * Datos del módulo de Colecciones en Java perteneciente a la asignatura de Programación.
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
export const moduloSimBloqueSeis = {
    id: 311,
    nombre: "Colecciones (Bloque 6)",
    asignaturaId: 3,
    esExamen: true,
    descripcion: "Examen sobre colecciones en Java: ArrayList, LinkedList, Stack, Queue y sus operaciones.",
    preguntas: [
      {
        id: 31101,
        moduloId: 311,
        pregunta: "¿Cuál es la principal ventaja de un ArrayList frente a un array tradicional?",
        opciones: ["Es más rápido", "Su tamaño es dinámico", "Permite tipos primitivos", "No necesita importar librerías"],
        respuestaCorrecta: 1,
        explicacion: "La principal ventaja de un ArrayList frente a un array tradicional es que su tamaño es dinámico, lo que significa que puede crecer o reducirse automáticamente según sea necesario. Esto evita la necesidad de predefinir un tamaño fijo como en los arrays tradicionales, proporcionando mayor flexibilidad en la gestión de colecciones de datos."
      },
      {
        id: 31102,
        moduloId: 311,
        pregunta: "¿Qué imprime este código?",
        recurso: {
          tipo: "codigo",
          contenido: `ArrayList<String> lista = new ArrayList<>();
lista.add("A");
lista.add("B");
lista.remove(0);
System.out.println(lista.get(0));`,
          lenguaje: "java"
        },
        opciones: ["A", "Error", "Null", "B"],
        respuestaCorrecta: 3,
        explicacion: "El código imprime 'B'. Primero se crea un ArrayList y se añaden los elementos 'A' y 'B'. Luego se elimina el elemento en la posición 0, que es 'A'. Después de eliminar 'A', el elemento 'B' pasa a ocupar la posición 0. Por lo tanto, al obtener el elemento en la posición 0 con get(0), se obtiene 'B'."
      },
      {
        id: 31103,
        moduloId: 311,
        pregunta: "¿Qué diferencia principal hay entre ArrayList y LinkedList?",
        opciones: ["LinkedList no permite duplicados, en cambio el arraylist si, ya que va por posición", "LinkedList es más eficiente para insertar/eliminar elementos", "ArrayList no se puede ordenar, en cambio un arraylist es muy fácil de ordenar", "ArrayList ocupa más memoria ya que guarda posiciones"],
        respuestaCorrecta: 1,
        explicacion: "La diferencia principal entre ArrayList y LinkedList es que LinkedList es más eficiente para operaciones de inserción y eliminación de elementos, especialmente en posiciones intermedias de la lista. Esto se debe a que LinkedList implementa una lista doblemente enlazada, donde solo es necesario modificar los punteros a los nodos adyacentes. En cambio, ArrayList, al estar basado en un array, necesita desplazar todos los elementos cuando se inserta o elimina un elemento en una posición intermedia."
      },
      {
        id: 31104,
        moduloId: 311,
        pregunta: "¿Qué tipo de estructura es una pila (Stack)?",
        opciones: ["FIFO", "RIFO", "Aleatoria", "LIFO"],
        respuestaCorrecta: 3,
        explicacion: "Una pila (Stack) es una estructura de datos de tipo LIFO (Last In, First Out), lo que significa que el último elemento que se añade a la pila es el primero en salir. Esto es similar a una pila de platos, donde solo se puede acceder al plato que está en la parte superior de la pila."
      },
      {
        id: 31105,
        moduloId: 311,
        pregunta: "¿Qué ocurre si pop() se llama sobre una cola vacía?",
        opciones: ["Devuelve null", "Lanza una excepción", "Reinicia la cola", "Elimina el frente"],
        respuestaCorrecta: 1,
        explicacion: "Si el método pop() se llama sobre una cola vacía (o una pila vacía), se lanza una excepción, específicamente una EmptyStackException en el caso de Stack o una NoSuchElementException en algunas implementaciones de Queue. Esto ocurre porque no hay elementos para eliminar, lo que provoca un estado de error en la operación."
      },
      {
        id: 31106,
        moduloId: 311,
        pregunta: "¿Qué diferencia hay entre pop() y peek en una Stack?",
        opciones: ["pop() elimina y devuelve el elemento en la cima. Peek() devuelve el elemento de la cima sin eliminarlo.", "Peek() elimina y devuelve el elemento en la cima. Pop() devuelve el elemento de la cima sin eliminarlo.", "pop() devuelve true si la pila está vacia, peek devuelve un número menor que cero", "pop() elimina y devuelve el elemento en la cima. Peek() apila un elemento en la cima"],
        respuestaCorrecta: 0,
        explicacion: "La diferencia entre pop() y peek() en una Stack es que pop() elimina y devuelve el elemento en la cima de la pila, mientras que peek() solo devuelve el elemento en la cima sin eliminarlo. Es decir, peek() permite consultar cuál es el elemento superior sin modificar la estructura de la pila."
      },
      {
        id: 31107,
        moduloId: 311,
        pregunta: "¿Qué imprime este código?",
        recurso: {
          tipo: "codigo",
          contenido: `Stack<String> pila = new Stack<>();
pila.push("uno");
pila.push("dos");
System.out.println(pila.pop());`,
          lenguaje: "java"
        },
        opciones: ["Uno", "Dos", "Error", "null"],
        respuestaCorrecta: 1,
        explicacion: "El código imprime 'dos'. Se crea una pila y se añaden los elementos 'uno' y 'dos' en ese orden. Como una pila sigue el principio LIFO (Last In, First Out), al llamar a pop() se elimina y devuelve el último elemento añadido, que es 'dos'."
      },
      {
        id: 31108,
        moduloId: 311,
        pregunta: "¿Qué imprime este código?",
        recurso: {
          tipo: "codigo",
          contenido: `Stack<Integer> pila = new Stack<>();
pila.push(10);
pila.push(20);
pila.pop();
System.out.println(pila.peek());`,
          lenguaje: "java"
        },
        opciones: ["20", "0", "Null", "10"],
        respuestaCorrecta: 3,
        explicacion: "El código imprime '10'. Se crea una pila y se añaden los elementos 10 y 20. Luego se llama a pop(), que elimina el último elemento añadido (20). Finalmente, peek() devuelve el elemento que ahora está en la cima de la pila, que es 10, sin eliminarlo."
      },
      {
        id: 31109,
        moduloId: 311,
        pregunta: "¿Qué tipo de estructura representa una cola (Queue) en Java?",
        opciones: ["LIFO", "FIFO", "Circular doble", "Bidireccional"],
        respuestaCorrecta: 1,
        explicacion: "Una cola (Queue) en Java representa una estructura de datos FIFO (First In, First Out), lo que significa que el primer elemento que se añade a la cola es el primero en salir. Esto es similar a una cola de personas esperando en una caja, donde el primero en llegar es el primero en ser atendido."
      },
      {
        id: 31110,
        moduloId: 311,
        pregunta: "¿Qué clase se usa comúnmente para implementar una cola en Java?",
        opciones: ["LinkedList", "ArrayList", "TreeSet", "Stack"],
        respuestaCorrecta: 0,
        explicacion: "La clase LinkedList se usa comúnmente para implementar una cola en Java. LinkedList implementa la interfaz Queue y proporciona una implementación eficiente de las operaciones de cola, como ofrecer (add o offer) y sondear (poll). Debido a su estructura de lista enlazada, es eficiente para añadir elementos al final y eliminar del principio, operaciones típicas de una cola."
      },
      {
        id: 31111,
        moduloId: 311,
        pregunta: "¿Qué ocurre si se llama remove() sobre una cola vacía?",
        opciones: ["Devuelve null", "Lanza una excepción", "Se bloquea el programa", "Elimina el último valor"],
        respuestaCorrecta: 1,
        explicacion: "Si se llama al método remove() sobre una cola vacía, se lanza una excepción NoSuchElementException. A diferencia del método poll(), que devuelve null si la cola está vacía, remove() es un método más estricto que requiere que la cola contenga al menos un elemento."
      },
      {
        id: 31112,
        moduloId: 311,
        pregunta: "¿Qué hace este código?",
        recurso: {
          tipo: "codigo",
          contenido: `Queue<String> cola = new LinkedList<>();
cola.add("A");
cola.add("B");
System.out.println(cola.remove());`,
          lenguaje: "java"
        },
        opciones: ["Null", "B", "Error de compilación", "A"],
        respuestaCorrecta: 3,
        explicacion: "El código imprime 'A'. Se crea una cola usando LinkedList y se añaden los elementos 'A' y 'B' en ese orden. Como una cola sigue el principio FIFO (First In, First Out), al llamar a remove() se elimina y devuelve el primer elemento añadido, que es 'A'."
      },
      {
        id: 31113,
        moduloId: 311,
        pregunta: "¿Qué hace el método insertar() en una implementación de cola?",
        opciones: ["Elimina el último elemento", "Inserta al principio", "Añade un nuevo elemento al final", "Reemplaza el primero"],
        respuestaCorrecta: 2,
        explicacion: "En una implementación típica de una cola, el método insertar() (o add() u offer() en la interfaz Queue de Java) añade un nuevo elemento al final de la cola. Esto es coherente con el comportamiento FIFO (First In, First Out) de una cola, donde los nuevos elementos se añaden al final y se eliminan del principio."
      }
    ]
  };

export default moduloSimBloqueSeis;