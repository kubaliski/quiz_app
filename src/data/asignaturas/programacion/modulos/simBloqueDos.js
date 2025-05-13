/**
 * Datos del módulo de Estructuras de Control en Java perteneciente a la asignatura de Programación.
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
export const moduloSimBloqueDos = {
    id: 307,
    nombre: "Estructuras de Control en Java (Simulacro Bloque 2)",
    asignaturaId: 3,
    esExamen: true,
    descripcion: "Prueba de evaluación sobre estructuras de control en Java, Scanner, bucles, condicionales y operaciones básicas.",
    preguntas: [
      {
        id: 3701,
        moduloId: 307,
        pregunta: "¿Qué clase se utiliza para leer datos por teclado en Java?",
        opciones: ["InputReader", "Scanner", "Reader", "FileReader"],
        respuestaCorrecta: 1,
        explicacion: "La clase Scanner del paquete java.util es la que se utiliza comúnmente para leer datos por teclado en Java. Permite leer diferentes tipos de datos (enteros, cadenas, etc.) directamente desde la entrada estándar (System.in)."
      },
      {
        id: 3702,
        moduloId: 307,
        pregunta: "¿Qué método del objeto Scanner se usa para leer un número entero?",
        opciones: ["nextLine()", "next()", "nextInt()", "readInt()"],
        respuestaCorrecta: 2,
        explicacion: "El método nextInt() de la clase Scanner se utiliza específicamente para leer un número entero desde la entrada. Este método espera que el próximo token en la entrada sea un número entero válido y lanza una excepción si no es así."
      },
      {
        id: 3703,
        moduloId: 307,
        pregunta: "¿Qué estructura permite ejecutar un bloque solo si una condición es verdadera?",
        opciones: ["Switch", "If", "Do..While", "for"],
        respuestaCorrecta: 1,
        explicacion: "La estructura 'if' en Java permite ejecutar un bloque de código únicamente cuando la condición especificada es verdadera. Es la estructura básica para la toma de decisiones y puede complementarse con 'else' para especificar un bloque alternativo cuando la condición es falsa."
      },
      {
        id: 3704,
        moduloId: 307,
        pregunta: "¿Qué palabra se usa para detener un bloque dentro de un switch?",
        opciones: ["Stop", "Exit", "Halt", "break"],
        respuestaCorrecta: 3,
        explicacion: "La palabra clave 'break' se utiliza para detener la ejecución dentro de un bloque case en una estructura switch. Sin el break, la ejecución continuaría hacia los siguientes cases sin importar si coinciden o no (fenómeno conocido como 'fall-through')."
      },
      {
        id: 3705,
        moduloId: 307,
        pregunta: "¿Cuál es la diferencia entre while y do-while?",
        opciones: ["do-while puede no ejecutarse nunca", "while se ejecuta al menos una vez", "do-while garantiza una ejecución mínima", "while se usa solo para enteros"],
        respuestaCorrecta: 2,
        explicacion: "La diferencia principal es que un bucle do-while garantiza al menos una ejecución del bloque de código, ya que primero ejecuta el bloque y luego evalúa la condición. En cambio, un bucle while evalúa la condición antes de ejecutar el bloque, por lo que podría no ejecutarse nunca si la condición es falsa desde el principio."
      },
      {
        id: 3706,
        moduloId: 307,
        pregunta: "¿Cuál es la forma correcta de un bucle for?",
        opciones: ["for (int i = 0; i < 10; i++)", "for int i = 0 to 10", "for i = 1 while i <= 10", "loop (i = 0; i < 10; i++)"],
        respuestaCorrecta: 0,
        explicacion: "La sintaxis correcta del bucle for en Java es 'for (inicialización; condición; incremento/decremento)'. Por lo tanto, 'for (int i = 0; i < 10; i++)' es la forma correcta, donde primero se inicializa la variable, luego se establece la condición de continuación y finalmente se define cómo se actualiza la variable en cada iteración."
      },
      {
        id: 3707,
        moduloId: 307,
        pregunta: "¿Qué hace el método nextDouble() de la clase Scanner?",
        opciones: ["Lee un número entero", "Lee un booleano", "Lee un número decimal", "Lee una cadena"],
        respuestaCorrecta: 2,
        explicacion: "El método nextDouble() de la clase Scanner se utiliza para leer un valor de tipo double (número decimal de punto flotante) desde la entrada. Es útil cuando necesitamos capturar valores que pueden contener parte decimal."
      },
      {
        id: 3708,
        moduloId: 307,
        pregunta: "¿Cuál es la estructura básica más simple de un programa?",
        opciones: ["Repetición", "Secuencia", "Selección", "Condición"],
        respuestaCorrecta: 1,
        explicacion: "La estructura de secuencia es la más básica y simple en programación. Consiste en ejecutar instrucciones una tras otra, en el orden en que aparecen en el código. No implica decisiones ni repeticiones, simplemente sigue un flujo lineal de ejecución."
      },
      {
        id: 3709,
        moduloId: 307,
        pregunta: "¿Qué ocurre si en un switch no se coloca 'break'?",
        opciones: ["Solo se ejecuta el default", "Solo se ejecuta el case indicado", "Se ejecutan todos los case siguientes", "Se produce un error"],
        respuestaCorrecta: 2,
        explicacion: "Si no se coloca la instrucción 'break' al final de un bloque case en un switch, ocurre lo que se conoce como 'fall-through'. Esto significa que la ejecución continuará con los bloques case siguientes, independientemente de si sus valores coinciden o no, hasta encontrar un break o hasta el final del switch."
      },
      {
        id: 3710,
        moduloId: 307,
        pregunta: "¿Qué método del Scanner se usa para leer una línea completa?",
        opciones: ["readLine()", "nextInt()", "nextLine()", "read()"],
        respuestaCorrecta: 2,
        explicacion: "El método nextLine() de la clase Scanner se utiliza para leer una línea completa de texto desde la entrada, incluyendo espacios y hasta encontrar un salto de línea. Es diferente de next() que solo lee hasta el próximo espacio en blanco."
      },
      {
        id: 3711,
        moduloId: 307,
        pregunta: "¿Qué ocurre si una condición en un bucle while nunca es falsa?",
        opciones: ["El programa se detiene automáticamente", "Se lanza una excepción", "El bucle se ejecuta infinitamente", "No se ejecuta ninguna iteración"],
        respuestaCorrecta: 2,
        explicacion: "Si la condición en un bucle while nunca se evalúa como falsa, se produce un bucle infinito. Esto significa que el programa quedará atrapado ejecutando el mismo bloque de código indefinidamente, a menos que se interrumpa manualmente o mediante alguna instrucción específica dentro del bucle (como break)."
      },
      {
        id: 3712,
        moduloId: 307,
        pregunta: "¿Cuál es el propósito del bloque default en un switch?",
        opciones: ["Se ejecuta siempre", "Se ignora si hay break", "Termina el switch", "Se ejecuta si no hay ningún case coincidente"],
        respuestaCorrecta: 3,
        explicacion: "El bloque default en una estructura switch actúa como un caso 'por defecto' que se ejecuta cuando el valor evaluado no coincide con ninguno de los cases definidos. Proporciona un comportamiento alternativo para manejar valores inesperados o no considerados específicamente."
      }
    ]
  };

  export default moduloSimBloqueDos;