/**
 * Datos del módulo de Ficheros y Serialización en Java perteneciente a la asignatura de Programación.
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
export const moduloSimBloqueNueve = {
    id: 316,
    nombre: "Ficheros y Serialización (Bloque 9)",
    asignaturaId: 3,
    esExamen: true,
    descripcion: "Examen centrado en el manejo de ficheros, serialización de objetos e interfaces gráficas en Java. Se evaluarán conceptos como la lectura y escritura de ficheros, serialización de objetos y el uso de la biblioteca Swing.",
    preguntas: [
      {
        id: 31601,
        moduloId: 316,
        pregunta: "¿Cuál es el propósito de la interfaz java.io.Serializable?",
        opciones: [
          "Indicar que los objetos de una clase pueden ser serializados",
          "Permitir acceso a archivos",
          "Crear flujos de datos",
          "Añadir métodos a una clase"
        ],
        respuestaCorrecta: 0,
        explicacion: "La interfaz java.io.Serializable en Java es una interfaz marcadora (no contiene métodos) que se utiliza para indicar que los objetos de una clase pueden ser serializados. Cuando una clase implementa esta interfaz, el sistema puede convertir sus instancias en secuencias de bytes, permitiendo que estos objetos sean escritos en archivos, enviados a través de la red o almacenados en bases de datos."
      },
      {
        id: 31602,
        moduloId: 316,
        pregunta: "¿Qué clase permite leer caracteres desde un archivo?",
        opciones: [
          "FileOutputStream",
          "FileReader",
          "Scanner",
          "DataInputStream"
        ],
        respuestaCorrecta: 1,
        explicacion: "FileReader es la clase en Java diseñada específicamente para leer caracteres (texto) desde un archivo. Es un lector de caracteres que usa la codificación predeterminada del sistema, convirtiendo bytes en caracteres. A diferencia de FileOutputStream (que escribe bytes), Scanner (que analiza texto con patrones) o DataInputStream (que lee datos primitivos), FileReader está optimizado para la lectura de texto."
      },
      {
        id: 31603,
        moduloId: 316,
        pregunta: "¿Cuál es el contenedor Swing principal para una ventana?",
        opciones: [
          "JPanel",
          "JFrame",
          "JButton",
          "JTextArea"
        ],
        respuestaCorrecta: 1,
        explicacion: "JFrame es el contenedor principal en Swing para crear ventanas con todas las funcionalidades de una ventana normal (título, bordes, botones de minimizar/maximizar/cerrar, etc.). Funciona como el contenedor raíz para una aplicación gráfica. JPanel es un contenedor secundario, JButton es un componente de interfaz y JTextArea es un componente para mostrar texto."
      },
      {
        id: 31604,
        moduloId: 316,
        pregunta: "En Java, ¿qué es Swing?",
        opciones: [
          "La forma de guardar objetos en ficheros de forma más sencilla, utilizando buffers",
          "Un motor gráfico 3D para videojuegos",
          "Una base de datos integrada en Java",
          "Una biblioteca gráfica para crear interfaces de usuario (GUI)"
        ],
        respuestaCorrecta: 3,
        explicacion: "Swing es una biblioteca gráfica de Java que proporciona componentes para la creación de interfaces gráficas de usuario (GUI). Incluye elementos como botones, tablas, paneles, cuadros de texto y muchos otros componentes visuales. Es parte del Java Foundation Classes (JFC) y fue desarrollada para superar las limitaciones de AWT (Abstract Window Toolkit), ofreciendo un conjunto más rico de componentes con una apariencia consistente en todas las plataformas."
      },
      {
        id: 31605,
        moduloId: 316,
        pregunta: "¿Qué ocurre al ejecutar este código?",
        recurso: {
          tipo: "codigo",
          lenguaje: "java",
          contenido: `FileOutputStream fos = new FileOutputStream("salida.txt");
ObjectOutputStream oos = new ObjectOutputStream(fos);
oos.writeObject(new Persona("Ana"));`
        },
        opciones: [
          "Guarda la persona como texto legible",
          "El archivo se guarda en modo lectura",
          "Lanza error si Persona no tiene constructor",
          "Guarda el objeto serializado en formato binario"
        ],
        respuestaCorrecta: 3,
        explicacion: "El código mostrado utiliza ObjectOutputStream, que está diseñado para serializar objetos Java y escribirlos en un flujo de salida en formato binario. Al llamar a writeObject() con una instancia de Persona, el objeto se convierte en una secuencia de bytes y se guarda en el archivo 'salida.txt'. El resultado no es texto legible sino datos binarios que representan el estado del objeto. Para que funcione correctamente, la clase Persona debe implementar la interfaz Serializable."
      },
      {
        id: 31606,
        moduloId: 316,
        pregunta: "¿Qué error tiene este código?",
        recurso: {
          tipo: "codigo",
          lenguaje: "java",
          contenido: `public class Libro {
  private String titulo;
  private String autor;
}

FileOutputStream fos = new FileOutputStream("libro.dat");
ObjectOutputStream oos = new ObjectOutputStream(fos);
oos.writeObject(new Libro());`
        },
        opciones: [
          "El archivo no se puede crear",
          "La clase Libro no implementa Serializable",
          "No se puede usar FileOutputStream en Java",
          "writeObject no funciona con clases propias"
        ],
        respuestaCorrecta: 1,
        explicacion: "El error en el código es que la clase Libro no implementa la interfaz Serializable. En Java, para poder serializar un objeto (convertirlo a bytes y guardarlo), la clase debe implementar explícitamente esta interfaz. Cuando se intenta serializar un objeto de una clase que no implementa Serializable, se lanza una NotSerializableException en tiempo de ejecución. La corrección sería agregar 'implements Serializable' a la declaración de la clase Libro."
      },
      {
        id: 31607,
        moduloId: 316,
        pregunta: "¿Cuál es el contenedor principal de una aplicación en Swing?",
        opciones: [
          "JPanel",
          "JComponent",
          "JWindow",
          "JFrame"
        ],
        respuestaCorrecta: 3,
        explicacion: "JFrame es el contenedor principal de una aplicación Swing. Representa una ventana de nivel superior con un título, borde y botones de control (minimizar, maximizar, cerrar). Sirve como el contenedor raíz que alberga otros componentes de la interfaz. A diferencia de JPanel (contenedor secundario), JComponent (clase base abstracta) o JWindow (ventana sin decoraciones), JFrame proporciona el marco completo necesario para una aplicación independiente."
      },
      {
        id: 31608,
        moduloId: 316,
        pregunta: "¿Cuál es la diferencia entre FileWriter y DataOutputStream?",
        opciones: [
          "Ambos escriben texto",
          "FileWriter escribe caracteres, DataOutputStream escribe datos primitivos",
          "DataOutputStream es solo para redes",
          "FileWriter no permite escritura"
        ],
        respuestaCorrecta: 1,
        explicacion: "La principal diferencia es que FileWriter está diseñado para escribir caracteres (texto) en archivos, mientras que DataOutputStream está diseñado para escribir datos primitivos de Java (como int, double, boolean) en formato binario. FileWriter trabaja a nivel de caracteres y es útil para crear archivos de texto legibles, mientras que DataOutputStream trabaja a nivel de bytes y permite escribir tipos de datos Java manteniendo su representación binaria exacta."
      },
      {
        id: 31609,
        moduloId: 316,
        pregunta: "¿Qué ocurre si FileWriter se crea con el parámetro append=false?",
        opciones: [
          "Añade contenido al final",
          "Sobrescribe el fichero existente",
          "Da error",
          "Borra el archivo"
        ],
        respuestaCorrecta: 1,
        explicacion: "Cuando se crea un FileWriter con el parámetro append=false, que es también el comportamiento predeterminado si no se especifica, el archivo existente se sobrescribe completamente. Esto significa que cualquier contenido previo del archivo se elimina y se comienza a escribir desde el principio. Es útil cuando se desea crear un nuevo archivo o reemplazar completamente uno existente, en lugar de añadir contenido al final."
      },
      {
        id: 31610,
        moduloId: 316,
        pregunta: "¿Qué ocurre si FileWriter se crea sin el parámetro append=true?",
        opciones: [
          "Añade contenido al final",
          "Sobrescribe el fichero existente",
          "Da error",
          "Borra el archivo"
        ],
        respuestaCorrecta: 1,
        explicacion: "Si se crea un FileWriter sin especificar el parámetro append=true, por defecto se establece como false, lo que significa que sobrescribirá cualquier archivo existente. Esto equivale a crear el FileWriter con append=false explícitamente. El contenido anterior del archivo se elimina y se comienza a escribir desde cero. Para añadir contenido al final de un archivo existente, es necesario crear el FileWriter con append=true."
      },
      {
        id: 31611,
        moduloId: 316,
        pregunta: "¿Qué se necesita para que un botón reaccione a una acción en una interfaz Swing?",
        opciones: [
          "Crear un hilo",
          "Añadir un ActionListener",
          "Llamar a run()",
          "Asociar un KeyEvent"
        ],
        respuestaCorrecta: 1,
        explicacion: "Para que un botón reaccione a una acción (como un clic) en una interfaz Swing, es necesario añadir un ActionListener al botón. ActionListener es una interfaz que define el método actionPerformed(), que se ejecutará cuando se produzca la acción. Normalmente se implementa esta interfaz y se registra en el botón con el método addActionListener(). No es necesario crear hilos manualmente, llamar a run() o asociar eventos de teclado para la funcionalidad básica de un botón."
      },
      {
        id: 31612,
        moduloId: 316,
        pregunta: "¿Cómo se organizan los elementos (componentes) dentro de una ventana en Swing?",
        opciones: [
          "Usando gestores de diseño (Layout Managers)",
          "Utilizando setSize() en cada componente",
          "Añadiendo todos los elementos directamente al JLabel",
          "Llamando a pack() antes de añadir los componentes"
        ],
        respuestaCorrecta: 0,
        explicacion: "En Swing, los componentes se organizan dentro de contenedores utilizando gestores de diseño (Layout Managers). Estos gestores determinan cómo se posicionan y dimensionan los componentes dentro del contenedor. Ejemplos comunes son BorderLayout, FlowLayout, GridLayout, etc. Aunque setSize() puede establecer el tamaño de un componente, no determina su ubicación; pack() ajusta el tamaño de una ventana después de añadir componentes, no antes; y los JLabel son componentes para mostrar texto, no contenedores para otros elementos."
      }
    ]
  };

export default moduloSimBloqueNueve;