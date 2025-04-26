/**
 * Datos del módulo de Mantenimiento y Refactorización de Código perteneciente a la asignatura de Entornos de Desarrollo.
 * Incluye información del módulo y sus preguntas asociadas para el quiz.
 *
 * @type {Object}
 * @property {number} id - Identificador único del módulo
 * @property {string} nombre - Nombre del módulo
 * @property {boolean} esExamen - Indica si el módulo es un examen (true) o no (false)
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
 * // Importar el módulo de Mantenimiento y Refactorización de Código
 * import moduloMantenimientoCodigo from '@data/modulos/mantenimientoCodigo';
 *
 * function PreguntasAleatorias() {
 *   // Seleccionar 5 preguntas aleatorias del módulo
 *   const preguntasAleatorias = moduloMantenimientoCodigo.preguntas
 *     .sort(() => 0.5 - Math.random())
 *     .slice(0, 5);
 *
 *   return (
 *     <div>
 *       <h2>{moduloMantenimientoCodigo.nombre}</h2>
 *       {preguntasAleatorias.map(pregunta => (
 *         <QuestionCard key={pregunta.id} pregunta={pregunta} />
 *       ))}
 *     </div>
 *   );
 * }
 */
export const moduloMantenimientoCodigo = {
    id: 503,
    nombre: "Mantenimiento y Refactorización de Código",
    esExamen: false,
    asignaturaId: 5,
    descripcion:
      "Conceptos fundamentales sobre mantenimiento de software, refactorización, detección de 'code smells' y mejora de la calidad del código.",
    preguntas: [
      {
        id: 5301,
        moduloId: 503,
        pregunta: "¿Qué es la refactorización?",
        opciones: [
          "Proceso de corregir errores en el código.",
          "Mejorar la estructura interna del código sin cambiar su comportamiento externo.",
          "Reescritura completa del código de una aplicación.",
          "Cambiar el diseño del código agregando nuevas funcionalidades.",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "La refactorización es el proceso de mejorar la estructura interna del código sin alterar su comportamiento externo. Su objetivo principal es hacer que el código sea más legible, mantenible y extensible, sin cambiar lo que hace desde el punto de vista del usuario. Se enfoca en mejorar aspectos como la simplicidad, claridad, modularidad y organización del código, lo que facilita su mantenimiento a largo plazo.",
      },
      {
        id: 5302,
        moduloId: 503,
        pregunta: "¿Cuál de los siguientes NO es un tipo de mantenimiento de software?",
        opciones: [
          "Mantenimiento perfectivo",
          "Mantenimiento iterativo",
          "Mantenimiento adaptativo",
          "Mantenimiento correctivo",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "El mantenimiento iterativo no es un tipo estándar de mantenimiento de software. Los tipos reconocidos incluyen: el mantenimiento correctivo (arreglar errores), el mantenimiento perfectivo (mejoras en funcionalidad), el mantenimiento adaptativo (adaptar a cambios en el entorno) y el mantenimiento preventivo (mejorar la mantenibilidad). El término 'iterativo' hace referencia más bien a metodologías de desarrollo y no a un tipo específico de mantenimiento de software.",
      },
      {
        id: 5303,
        moduloId: 503,
        pregunta: "¿Por qué se debe evitar el uso de var en JavaScript en favor de let y const?",
        opciones: [
          "Porque var hace que el código sea más rápido.",
          "Porque var no es compatible con las últimas versiones de los navegadores.",
          "Porque var ocupa más memoria que let y const.",
          "Porque var tiene un alcance menos predecible y puede generar errores.",
        ],
        respuestaCorrecta: 3,
        explicacion:
          "Se debe evitar el uso de var en JavaScript porque tiene un alcance (scope) menos predecible, lo que puede generar errores difíciles de detectar. A diferencia de let y const que tienen alcance de bloque, var tiene alcance de función o global, lo que puede llevar a problemas como hoisting no intencional y variables que persisten fuera de su contexto lógico. Esto hace que el código sea más propenso a errores, especialmente en aplicaciones complejas.",
      },
      {
        id: 5304,
        moduloId: 503,
        pregunta: "¿Cuál es un beneficio clave de la refactorización?",
        opciones: [
          "Mejora la calidad del código y facilita el mantenimiento.",
          "Hace que el código sea menos reutilizable.",
          "Permite escribir código más largo y detallado.",
          "Reduce la cantidad de pruebas necesarias en una aplicación.",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "Un beneficio clave de la refactorización es que mejora la calidad del código y facilita su mantenimiento. Al reestructurar el código sin cambiar su comportamiento externo, se consigue un código más limpio, más fácil de entender, más modular y mejor organizado. Esto reduce la deuda técnica, facilita la detección y corrección de errores, y hace que el código sea más fácil de extender y modificar en el futuro, reduciendo los costos a largo plazo.",
      },
      {
        id: 5305,
        moduloId: 503,
        pregunta: "¿Qué es un \"bad smell\" en el código?",
        opciones: [
          "Un síntoma de un posible problema en el diseño del código.",
          "Un código que no compila correctamente.",
          "Un error crítico en tiempo de ejecución.",
          "Un tipo de variable mal definida.",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "Un \"bad smell\" (o \"code smell\" en inglés) en el código es un síntoma o indicio de un posible problema más profundo en el diseño o estructura del código. No son necesariamente errores (el código puede funcionar correctamente), sino características que sugieren debilidades en el diseño que podrían dificultar la comprensión y el mantenimiento del código, o incluso conducir a errores en el futuro. Ejemplos incluyen código duplicado, métodos largos, clases grandes, o demasiados parámetros en un método.",
      },
      {
        id: 5306,
        moduloId: 503,
        pregunta: "¿Cuál de los siguientes es un ejemplo de código duplicado?",
        opciones: [
          "Código optimizado con estructuras de datos eficientes.",
          "Código con muchas clases y métodos cortos.",
          "Código bien documentado.",
          "Mismo fragmento de código repetido en diferentes partes del programa.",
        ],
        respuestaCorrecta: 3,
        explicacion:
          "El código duplicado se refiere a tener el mismo fragmento de código repetido en diferentes partes del programa. Este es uno de los \"code smells\" más comunes y problemáticos, ya que viola el principio DRY (Don't Repeat Yourself). Cuando el mismo código aparece en múltiples lugares, cualquier cambio o corrección debe realizarse en todos esos lugares, lo que aumenta el riesgo de inconsistencias y errores. La solución típica es extraer el código duplicado en funciones o métodos reutilizables.",
      },
      {
        id: 5307,
        moduloId: 503,
        pregunta: "¿Qué problema presenta un método con demasiados parámetros?",
        opciones: [
          "Hace que el código sea más rápido.",
          "Reduce la necesidad de comentarios.",
          "Dificulta la comprensión y el mantenimiento del código.",
          "Mejora la reutilización del código.",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "Un método con demasiados parámetros dificulta la comprensión y el mantenimiento del código. Tener muchos parámetros indica que el método probablemente está haciendo demasiadas cosas o que los datos no están bien organizados. Esto hace que el método sea difícil de entender, usar correctamente y mantener. Además, aumenta la probabilidad de errores al pasar los parámetros en el orden incorrecto o con valores incorrectos. Las soluciones incluyen agrupar parámetros relacionados en objetos o dividir el método en métodos más pequeños con menos parámetros.",
      },
      {
        id: 5308,
        moduloId: 503,
        pregunta: "¿Cuál es el problema del \"Shotgun Surgery\"?",
        opciones: [
          "Un cambio en una clase provoca errores en el código.",
          "Existen demasiados bucles en el código.",
          "Un cambio en una clase requiere modificar muchas otras clases.",
          "Se usa una función en una clase incorrecta.",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "El problema del \"Shotgun Surgery\" ocurre cuando un cambio en una parte del código requiere modificar muchas otras clases o componentes dispersos por toda la aplicación. Esto es indicativo de una pobre cohesión y alto acoplamiento, donde la responsabilidad está fragmentada a través del código. Este patrón hace que los cambios sean difíciles, propensos a errores y costosos de implementar, ya que los desarrolladores deben identificar y modificar correctamente todas las partes afectadas.",
      },
      {
        id: 5309,
        moduloId: 503,
        pregunta: "¿Qué problema representa la \"Complejidad Ciclomática\" en el código?",
        opciones: [
          "Demasiados condicionales y bucles en un método.",
          "Clases con pocos atributos y métodos.",
          "Métodos que tienen muchos parámetros.",
          "Código duplicado en varios archivos.",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "La Complejidad Ciclomática representa el problema de tener demasiados condicionales y bucles en un método. Es una medida cuantitativa que indica el número de caminos independientes a través del código, determinado por la cantidad de decisiones (if, switch, for, while, etc.) que contiene. Un alto valor de complejidad ciclomática indica código difícil de entender, probar y mantener, además de ser más propenso a contener errores. La solución típica es refactorizar dividiendo el método en partes más pequeñas y simples.",
      },
      {
        id: 5310,
        moduloId: 503,
        pregunta: "¿Cuál es el problema con un método largo (\"Long Method\")?",
        opciones: [
          "Es demasiado corto y no hace nada útil.",
          "No tiene suficientes parámetros.",
          "No utiliza suficiente memoria del sistema.",
          "Realiza demasiadas tareas y es difícil de entender.",
        ],
        respuestaCorrecta: 3,
        explicacion:
          "El problema con un método largo (\"Long Method\") es que realiza demasiadas tareas y es difícil de entender. Los métodos largos tienden a contener mucha lógica, múltiples niveles de abstracción y diferentes responsabilidades mezcladas, lo que los hace difíciles de leer, comprender, mantener y probar. Generalmente, esto viola el principio de responsabilidad única. La solución es refactorizar el método dividiéndolo en métodos más pequeños, cada uno con una única responsabilidad bien definida.",
      },
      {
        id: 5311,
        moduloId: 503,
        pregunta: "¿Qué indica la \"Envidia de funcionalidad\" (\"Feature Envy\")?",
        opciones: [
          "Un método no usa suficientes variables globales.",
          "Un método usa más atributos de otra clase en lugar de su propia clase.",
          "Una clase tiene pocos métodos.",
          "Un método está mal documentado.",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "La \"Envidia de funcionalidad\" (\"Feature Envy\") indica que un método está más interesado en los datos o funcionalidades de otra clase que en los de su propia clase. Esto se manifiesta cuando un método utiliza más atributos o métodos de clases externas que de su propia clase, lo que sugiere que el método probablemente debería estar en la otra clase. Este code smell refleja problemas en la ubicación de responsabilidades y viola el principio de encapsulamiento. La solución típica es mover el método a la clase cuyos datos está utilizando primordialmente.",
      },
      {
        id: 5312,
        moduloId: 503,
        pregunta: "¿Cuál es la mejor forma de solucionar el problema de código duplicado?",
        opciones: [
          "Copiar el código en todas las clases donde sea necesario.",
          "Eliminar la funcionalidad repetida sin reemplazo.",
          "Extraer el código duplicado en una función reutilizable.",
          "Reescribir la funcionalidad en cada clase afectada.",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "La mejor forma de solucionar el problema de código duplicado es extraer el código duplicado en una función, método o clase reutilizable. Esto sigue el principio DRY (Don't Repeat Yourself) y centraliza la lógica en un solo lugar. Las ventajas de esta solución incluyen: reducir la cantidad total de código, facilitar el mantenimiento (los cambios se hacen en un solo lugar), mejorar la consistencia (se evitan implementaciones ligeramente diferentes) y reducir la posibilidad de errores cuando se actualiza el código.",
      },
      {
        id: 5313,
        moduloId: 503,
        pregunta: "¿Qué es una \"Clase Larga\" (\"Large Class\")?",
        opciones: [
          "Una clase con demasiados métodos o atributos, lo que indica demasiadas responsabilidades.",
          "Una clase sin dependencias externas.",
          "Una clase que solo tiene variables globales.",
          "Una clase que no tiene suficientes métodos.",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "Una \"Clase Larga\" (\"Large Class\") es una clase que tiene demasiados métodos o atributos, lo que generalmente indica que está asumiendo demasiadas responsabilidades. Este code smell viola el principio de responsabilidad única (SRP) y hace que la clase sea difícil de entender, mantener y probar. Las clases grandes suelen ser menos cohesivas y más propensas a cambios frecuentes. La solución típica es refactorizar dividiendo la clase en clases más pequeñas y especializadas, cada una con una única responsabilidad bien definida.",
      },
      {
        id: 5314,
        moduloId: 503,
        pregunta: "¿Cuál de los siguientes es un beneficio de dividir un método largo en varios más pequeños?",
        opciones: [
          "Aumenta la complejidad del código.",
          "Reduce la cantidad de líneas de código en el programa.",
          "Hace que el código se ejecute más lentamente.",
          "Mejora la legibilidad y facilita el mantenimiento.",
        ],
        respuestaCorrecta: 3,
        explicacion:
          "Un beneficio clave de dividir un método largo en varios más pequeños es que mejora la legibilidad y facilita el mantenimiento del código. Los métodos pequeños, con nombres descriptivos, hacen que el código sea más fácil de entender, ya que cada método representa una única operación o concepto. Esto permite a los desarrolladores razonar sobre piezas más pequeñas de código, facilita la reutilización, simplifica las pruebas y hace que los errores sean más fáciles de identificar y corregir. También mejora la modularidad y flexibilidad del código.",
      },
      {
        id: 5315,
        moduloId: 503,
        pregunta: "¿Qué problema se produce cuando una clase depende demasiado de la implementación de otra clase?",
        opciones: [
          "Código duplicado.",
          "Intimidad inapropiada (\"Inappropriate Intimacy\").",
          "Complejidad artificial.",
          "Shotgun Surgery.",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "Cuando una clase depende demasiado de la implementación interna de otra clase, se produce el problema conocido como \"Intimidad inapropiada\" (\"Inappropriate Intimacy\"). Este code smell refleja un acoplamiento excesivo entre clases, donde una clase conoce demasiado sobre los detalles internos de otra, violando el principio de encapsulamiento. Esto hace que el código sea frágil ante cambios, ya que modificar una clase puede fácilmente romper la otra. Las soluciones incluyen mover métodos o campos entre las clases, crear clases intermedias o aplicar patrones de diseño para reducir el acoplamiento.",
      },
      {
        id: 5316,
        moduloId: 503,
        pregunta: "¿Cómo se puede evitar la \"Complejidad Artificial\" en un programa?",
        opciones: [
          "Usando una cantidad excesiva de clases y métodos.",
          "Reescribiendo todo el código en un solo método grande.",
          "Usando patrones de diseño complejos en cualquier situación.",
          "Evitando el uso innecesario de patrones y manteniendo un diseño simple.",
        ],
        respuestaCorrecta: 3,
        explicacion:
          "Para evitar la \"Complejidad Artificial\" en un programa, se debe evitar el uso innecesario de patrones de diseño y mantener un diseño simple pero efectivo. La complejidad artificial surge cuando el código es más complicado de lo necesario para resolver el problema actual, a menudo por aplicar patrones de diseño o abstracciones innecesarias. Seguir el principio KISS (Keep It Simple, Stupid) y YAGNI (You Aren't Gonna Need It) ayuda a evitar la sobreingeniería y crear soluciones que son tan simples como sea posible, pero no más simples.",
      },
      {
        id: 5317,
        moduloId: 503,
        pregunta: "¿Cuál es una estrategia efectiva para refactorizar código?",
        opciones: [
          "Realizar pequeñas refactorizaciones frecuentes en lugar de una refactorización grande y compleja.",
          "No documentar los cambios realizados para evitar confusión.",
          "Hacer cambios masivos en todo el código de una vez.",
          "Evitar el uso de herramientas de refactorización automática.",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "Una estrategia efectiva para refactorizar código es realizar pequeñas refactorizaciones frecuentes en lugar de una refactorización grande y compleja. Este enfoque incremental, conocido como \"refactorización oportunista\", permite mejorar gradualmente la calidad del código mientras se reduce el riesgo de introducir errores. Los cambios pequeños son más fáciles de entender, probar y revertir si es necesario. Además, facilita la integración continua, ya que cada pequeña refactorización puede ser integrada en el código base sin grandes conflictos.",
      },
      {
        id: 5318,
        moduloId: 503,
        pregunta: "¿Cómo se puede solucionar el problema de demasiados parámetros en un método?",
        opciones: [
          "Agrupar los parámetros en un objeto.",
          "Eliminar algunos parámetros sin analizar su uso.",
          "Duplicar el método con diferentes combinaciones de parámetros.",
          "Mantener el método con muchos parámetros, pero agregar más comentarios.",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "Una solución efectiva para el problema de demasiados parámetros en un método es agrupar los parámetros relacionados en un objeto. Este enfoque, conocido como \"introducir objeto parámetro\" (Introduce Parameter Object), reduce la cantidad de parámetros pasados directamente, mejora la legibilidad del código y hace que sea más fácil pasar conjuntos coherentes de datos. Además, el objeto parámetro puede incluir validación y comportamiento relacionado con esos datos, mejorando la encapsulación. Otras soluciones incluyen preservar el objeto completo, extraer métodos o usar métodos de construcción.",
      },
      {
        id: 5319,
        moduloId: 503,
        pregunta: "¿Qué técnica se usa para detectar \"malos olores\" en el código?",
        opciones: [
          "Usar solo pruebas unitarias sin inspeccionar el código.",
          "Revisar el código visualmente sin herramientas.",
          "Esperar a que el código falle en producción antes de hacer cambios.",
          "Realizar revisiones de código y usar herramientas de análisis estático.",
        ],
        respuestaCorrecta: 3,
        explicacion:
          "Para detectar \"malos olores\" en el código de manera efectiva, se utilizan revisiones de código (code reviews) y herramientas de análisis estático. Las revisiones de código permiten que otros desarrolladores identifiquen problemas que el autor original podría haber pasado por alto, mientras que las herramientas de análisis estático pueden detectar automáticamente patrones problemáticos comunes, inconsistencias y potenciales errores sin necesidad de ejecutar el código. Estas técnicas complementarias ayudan a identificar problemas temprano en el ciclo de desarrollo, antes de que afecten a los usuarios finales.",
      },
      {
        id: 5320,
        moduloId: 503,
        pregunta: "¿Cuál es la mejor manera de reducir la deuda técnica en un proyecto?",
        opciones: [
          "Usar solo código heredado sin actualizarlo.",
          "Evitar la refactorización y seguir agregando nuevas funcionalidades.",
          "Aplicar refactorización continua y escribir código limpio desde el inicio.",
          "No hacer revisiones de código para evitar retrasos.",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "La mejor manera de reducir la deuda técnica en un proyecto es aplicar refactorización continua y escribir código limpio desde el inicio. La refactorización continua ayuda a mejorar incrementalmente la calidad del código existente, mientras que escribir código limpio desde el principio previene la acumulación de nueva deuda técnica. Este enfoque proactivo incluye prácticas como revisiones de código, pruebas automatizadas, integración continua y adherencia a estándares de codificación. Invertir tiempo regularmente en mejorar la calidad del código reduce los costos a largo plazo y facilita agregar nuevas funcionalidades en el futuro.",
      },
    ],
  };

  export default moduloMantenimientoCodigo;