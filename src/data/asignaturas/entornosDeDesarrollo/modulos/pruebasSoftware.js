/**
 * Datos del módulo de Pruebas de Software perteneciente a la asignatura de Ingeniería de Software.
 * Incluye información del módulo y sus preguntas asociadas para el quiz.
 *
 * @type {Object}
 * @property {number} id - Identificador único del módulo
 * @property {string} nombre - Nombre del módulo
 * @property {boolean} esExamen - Indica si el módulo es un examen
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
 * // Importar el módulo de Pruebas de Software
 * import moduloPruebasSoftware from '@data/modulos/pruebasSoftware';
 *
 * function PreguntasAleatorias() {
 *   // Seleccionar 5 preguntas aleatorias del módulo
 *   const preguntasAleatorias = moduloPruebasSoftware.preguntas
 *     .sort(() => 0.5 - Math.random())
 *     .slice(0, 5);
 *
 *   return (
 *     <div>
 *       <h2>{moduloPruebasSoftware.nombre}</h2>
 *       {preguntasAleatorias.map(pregunta => (
 *         <QuestionCard key={pregunta.id} pregunta={pregunta} />
 *       ))}
 *     </div>
 *   );
 * }
 */
export const moduloPruebasSoftware = {
  id: 501,
  nombre: "Pruebas de Software",
  esExamen: false,
  asignaturaId: 5,
  descripcion:
    "Fundamentos, tipos y técnicas de pruebas de software, incluyendo pruebas de caja negra, caja blanca, análisis de complejidad ciclomática y manejo de excepciones.",
  preguntas: [
    // Sección: Fundamentos de Pruebas de Software
    {
      id: 5001,
      moduloId: 501,
      pregunta:
        "¿Qué tipo de comprobaciones se llevan a cabo con el código en ejecución?",
      opciones: [
        "Comprobaciones estáticas",
        "Comprobaciones dinámicas",
        "Validación de requisitos",
        "Revisión de código",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Las comprobaciones dinámicas son aquellas que se realizan durante la ejecución del programa. A diferencia de las comprobaciones estáticas (como la revisión de código), que se realizan sin ejecutar el software, las pruebas dinámicas implican la ejecución del código para verificar su comportamiento real en tiempo de ejecución.",
    },
    {
      id: 5002,
      moduloId: 501,
      pregunta:
        "¿Qué pregunta responde la verificación en las pruebas de software?",
      opciones: [
        "¿Estamos construyendo el software correctamente?",
        "¿Estamos cumpliendo los requisitos del cliente?",
        "¿El software es fácil de usar?",
        "¿Cuántos errores tiene el sistema?",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "En el contexto de las pruebas de software, la verificación responde a la pregunta '¿Estamos construyendo el software correctamente?'. La verificación se centra en comprobar si el software cumple con las especificaciones técnicas y si se están siguiendo los estándares y procedimientos adecuados durante el desarrollo. Por otro lado, la validación responde a la pregunta '¿Estamos construyendo el software correcto?', centrada en si el producto satisface las necesidades reales del usuario.",
    },
    {
      id: 5003,
      moduloId: 501,
      pregunta:
        "¿Qué relación existe entre un error y un fallo en el software?",
      opciones: [
        "Un error cometido por el programador puede generar un defecto en el software que ocasione un fallo",
        "Un error siempre causa un fallo inmediato",
        "Un fallo solo ocurre si hay defectos en el hardware",
        "Un fallo solo puede ser causado por un usuario",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "En ingeniería de software, existe una cadena de causalidad: un error (mistake) es un error humano cometido por el programador, que puede introducir un defecto (fault o bug) en el código, el cual a su vez puede manifestarse como un fallo (failure) durante la ejecución. No todos los defectos causan fallos, ya que algunos pueden permanecer latentes o manifestarse solo bajo condiciones específicas.",
    },
    {
      id: 5004,
      moduloId: 501,
      pregunta:
        "¿Qué pruebas se encargan de comprobar la comunicación entre las partes de un programa?",
      opciones: [
        "Pruebas unitarias",
        "Pruebas de integración",
        "Pruebas de regresión",
        "Pruebas de sistema",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Las pruebas de integración se centran en verificar la comunicación y la interacción correcta entre diferentes componentes o módulos del software. Mientras que las pruebas unitarias comprueban el funcionamiento aislado de cada componente, las pruebas de integración verifican si estos componentes trabajan correctamente juntos, identificando problemas en las interfaces y en la comunicación entre ellos.",
    },
    {
      id: 5005,
      moduloId: 501,
      pregunta: "¿Qué se analiza en las pruebas de caja negra?",
      opciones: [
        "Las pruebas de rendimiento",
        "La lógica de programación y los algoritmos internos",
        "Las entradas y salidas sin conocer la implementación interna",
        "La estructura interna del código",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Las pruebas de caja negra, también conocidas como pruebas funcionales o basadas en especificaciones, se centran en analizar las entradas y salidas del sistema sin tener en cuenta su estructura interna. El sistema se trata como una 'caja negra' donde solo importa el comportamiento externo observable, verificando si el software cumple con las especificaciones funcionales desde la perspectiva del usuario.",
    },

    // Sección: Tipos de Pruebas de Software
    {
      id: 5006,
      moduloId: 501,
      pregunta: "¿Cuál es el propósito de las pruebas de caja blanca?",
      opciones: [
        "Validar los requisitos del cliente",
        "Medir la velocidad del software",
        "Comprobar el diseño de la interfaz",
        "Evaluar la estructura interna del código y cómo está definido.",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "Las pruebas de caja blanca, también conocidas como pruebas estructurales o basadas en el código, tienen como propósito evaluar la estructura interna del código y cómo está implementado. A diferencia de las pruebas de caja negra, estas pruebas requieren conocimiento del código fuente y se centran en aspectos como la cobertura de sentencias, ramas, caminos, condiciones y otros elementos estructurales del programa.",
    },
    {
      id: 5007,
      moduloId: 501,
      pregunta:
        "¿Qué es una clase de equivalencia en el contexto de las pruebas de software?",
      opciones: [
        "Un conjunto de datos de entrada que definen estados válidos y no válidos",
        "Un tipo de prueba que mide el rendimiento del software",
        "Un modelo matemático para predecir fallos",
        "Un documento que describe los errores del sistema",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Una clase de equivalencia es un conjunto de datos de entrada que se espera que sean tratados de manera similar por el sistema, produciendo el mismo comportamiento o resultado. Se dividen en clases válidas (datos que deberían ser aceptados) y no válidas (datos que deberían ser rechazados). Esta técnica permite reducir el número de casos de prueba necesarios, ya que basta con probar un representante de cada clase de equivalencia en lugar de todas las posibles entradas.",
    },
    {
      id: 5008,
      moduloId: 501,
      pregunta:
        "¿Cuál de los siguientes es un ejemplo de una condición de entrada?",
      opciones: [
        '"El código fuente debe ser compilado"',
        '"El usuario debe leer el manual de usuario antes de la prueba"',
        '"El software debe ejecutarse en Linux"',
        '"Valores entre 0 y 10"',
      ],
      respuestaCorrecta: 3,
      explicacion:
        "Una condición de entrada define los valores o rango de valores que puede tomar un parámetro de entrada en un sistema. 'Valores entre 0 y 10' es un ejemplo de condición de entrada, que especifica el rango válido para algún parámetro. Las otras opciones no son condiciones de entrada sino prerrequisitos o restricciones del entorno de prueba.",
    },
    {
      id: 5009,
      moduloId: 501,
      pregunta:
        "¿Cuál de las siguientes afirmaciones sobre las clases de equivalencia es correcta?",
      opciones: [
        "Las clases de equivalencia no afectan el diseño de los casos de prueba",
        "Solo se deben generar casos de prueba para clases válidas",
        "Cada caso de prueba debe incluir al menos una clase de equivalencia válida",
        "No es necesario generar pruebas para clases no válidas",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Es una buena práctica que cada caso de prueba incluya al menos una clase de equivalencia válida, ya que esto asegura que el caso de prueba tenga un propósito definido. Si un caso de prueba solo incluyera clases no válidas, podría ser difícil determinar el comportamiento esperado del sistema. Sin embargo, también es importante probar las clases no válidas para verificar que el sistema maneja correctamente las entradas erróneas.",
    },
    {
      id: 5010,
      moduloId: 501,
      pregunta:
        "¿Cuál es el propósito de la complejidad ciclomática en el desarrollo de software?",
      opciones: [
        "Reducir el consumo de memoria del programa",
        "Medir la eficiencia del código en tiempo de ejecución",
        "Evaluar la estética del código fuente",
        "Determinar la cantidad de pruebas necesarias para cubrir todos los caminos del código",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "La complejidad ciclomática es una métrica que mide la complejidad estructural de un programa. Su propósito principal es determinar el número de caminos independientes en el flujo de control del código, lo que equivale al número mínimo de casos de prueba necesarios para lograr una cobertura completa de caminos. Esto ayuda a los testers a planificar sus pruebas de manera más eficiente, asegurando que se prueben todos los posibles flujos de ejecución.",
    },

    // Sección: Métricas de Pruebas
    {
      id: 5011,
      moduloId: 501,
      pregunta: "¿Cuál es la fórmula para calcular la complejidad ciclomática?",
      opciones: [
        "M = E - N + 2",
        "M = (N + E) / 2",
        "M = N + E - 2",
        "M = N - E + 2",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "La fórmula para calcular la complejidad ciclomática (M) es M = E - N + 2, donde E es el número de aristas (conexiones) en el grafo de flujo y N es el número de nodos (puntos de decisión). Esta fórmula proporciona el número de caminos linealmente independientes a través del programa, que representa el número mínimo de casos de prueba necesarios para una cobertura completa de caminos.",
    },
    {
      id: 5012,
      moduloId: 501,
      pregunta:
        'En la fórmula de la complejidad ciclomática, ¿qué representa "E"?',
      opciones: [
        "Número de ciclos en la ejecución del programa",
        "Número de variables en el código",
        "Número de aristas del grafo",
        "Número de sentencias ejecutadas",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "En la fórmula de la complejidad ciclomática (M = E - N + 2), la letra 'E' representa el número de aristas o conexiones en el grafo de flujo del programa. Cada arista representa una posible transición de un bloque de código a otro durante la ejecución del programa. Junto con el número de nodos (N), esta información ayuda a determinar la complejidad estructural del código.",
    },
    {
      id: 5013,
      moduloId: 501,
      pregunta:
        "Si en una función se tiene 8 aristas y 7 nodos, ¿cuál es su complejidad ciclomática?",
      opciones: ["5", "3", "10", "4"],
      respuestaCorrecta: 1,
      explicacion:
        "Aplicando la fórmula de la complejidad ciclomática M = E - N + 2, donde E es el número de aristas (8) y N es el número de nodos (7), tenemos: M = 8 - 7 + 2 = 3. Esto significa que hay 3 caminos linealmente independientes en esta función, y se necesitarían al menos 3 casos de prueba para lograr una cobertura completa de caminos.",
    },
    {
      id: 5014,
      moduloId: 501,
      pregunta:
        "Según la tabla de interpretación, ¿qué nivel de riesgo tiene una complejidad ciclomática de 30?",
      opciones: [
        "No testeable",
        "Bajo riesgo",
        "Alto riesgo",
        "Riesgo moderado",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Según las tablas de interpretación estándar de la complejidad ciclomática, un valor de 30 se considera de 'alto riesgo'. Generalmente, se considera que: de 1-10 es de bajo riesgo, de 11-20 es de riesgo moderado, de 21-50 es de alto riesgo, y más de 50 es de muy alto riesgo o no testeable. Un valor alto indica código complejo que es propenso a errores y difícil de mantener y probar.",
    },

    // Sección: Manejo de Excepciones
    {
      id: 5015,
      moduloId: 501,
      pregunta: "¿Qué es una excepción en programación?",
      opciones: [
        "Un mecanismo que permite manejar errores durante la ejecución del programa",
        "Un error crítico del sistema que no puede manejarse",
        "Una técnica para optimizar el rendimiento del código",
        "Un mensaje de depuración que muestra advertencias",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Una excepción en programación es un mecanismo que permite manejar situaciones anormales o errores que ocurren durante la ejecución de un programa. En lugar de que el programa termine abruptamente cuando se encuentra un error, las excepciones permiten capturar estos eventos, procesarlos adecuadamente y, si es posible, continuar con la ejecución normal del programa o finalizar de manera controlada.",
    },
    {
      id: 5016,
      moduloId: 501,
      pregunta:
        "¿Qué tipo de error genera la siguiente línea de código en Java? int resultado = 10 / 0;",
      opciones: [
        "NullPointerException",
        "IndexOutOfBoundsException",
        "ArithmeticException",
        "IOException",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "La división por cero en Java genera una ArithmeticException. Esta excepción se lanza cuando se intenta realizar una operación aritmética que es matemáticamente indefinida, como dividir un número entre cero. Es un error de tiempo de ejecución que debe ser capturado y manejado adecuadamente para evitar que el programa termine de forma abrupta.",
    },
    {
      id: 5017,
      moduloId: 501,
      pregunta:
        "¿Cuál es la diferencia principal entre un error y una excepción?",
      opciones: [
        "Un error ocurre en tiempo de ejecución y no puede manejarse, mientras que una excepción sí",
        "Las excepciones son solo advertencias, mientras que los errores detienen el programa",
        "Los errores son más leves que las excepciones",
        "Una excepción ocurre en la compilación y un error en la ejecución",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "En Java y en muchos otros lenguajes de programación, la diferencia principal entre errores y excepciones es que los errores (Error) representan problemas graves que normalmente no deberían ser capturados ni manejados por la aplicación, como problemas de recursos del sistema. Por otro lado, las excepciones (Exception) representan condiciones excepcionales que un programa puede querer manejar, como entradas de usuario incorrectas o problemas de acceso a recursos externos.",
    },
    {
      id: 5018,
      moduloId: 501,
      pregunta:
        "¿Cuál de las siguientes opciones es un error y no una excepción?",
      opciones: [
        "StackOverflowError",
        "NullPointerException",
        "ArithmeticException",
        "IOException",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "StackOverflowError es un error de la JVM que ocurre cuando la pila de llamadas de un programa excede su límite, generalmente debido a una recursión infinita o muy profunda. A diferencia de las excepciones, que pueden ser manejadas mediante bloques try-catch, los errores en Java son subclases de Error y generalmente indican problemas graves que no deberían ser capturados ni recuperados por el programa.",
    },
    {
      id: 5019,
      moduloId: 501,
      pregunta:
        "¿Cuál de las siguientes afirmaciones sobre el bloque try-catch es correcta?",
      opciones: [
        "catch debe aparecer siempre antes de try",
        "try y catch no pueden usarse en Java",
        "Un try solo puede contener una instrucción",
        "try se usa para encapsular código que puede generar una excepción y catch para manejarla",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "La estructura correcta del bloque try-catch coloca primero el bloque try, que encapsula el código que podría generar una excepción, seguido de uno o más bloques catch que definen cómo manejar cada tipo de excepción que podría ocurrir. Esta estructura permite que el programa continúe ejecutándose de manera controlada incluso cuando ocurren situaciones excepcionales, en lugar de terminar abruptamente.",
    },
    {
      id: 5020,
      moduloId: 501,
      pregunta:
        "¿Cuál es la principal ventaja de manejar excepciones en un programa?",
      opciones: [
        "Acelera la ejecución del código",
        "Permite que el programa continúe funcionando a pesar de los errores",
        "Reduce el tamaño del código fuente",
        "Evita la necesidad de pruebas de software",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "La principal ventaja de manejar excepciones es que permite que un programa continúe funcionando a pesar de encontrar situaciones de error. En lugar de terminar abruptamente, el programa puede capturar la excepción, realizar acciones alternativas o de recuperación, registrar el problema y continuar con su ejecución normal. Esto mejora la robustez y la experiencia del usuario, especialmente en aplicaciones críticas donde la disponibilidad es importante.",
    },

    // Sección: Automatización de Pruebas
    {
      id: 5021,
      moduloId: 501,
      pregunta:
        "¿Cuál es el principal beneficio de la automatización de pruebas de software?",
      opciones: [
        "Disminuir el esfuerzo manual y aumentar la eficiencia en las pruebas",
        "Evitar la necesidad de escribir casos de prueba",
        "Sustituir completamente a los testers humanos",
        "Reducir la complejidad del código",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "El principal beneficio de la automatización de pruebas es reducir el esfuerzo manual repetitivo y aumentar la eficiencia. Las pruebas automatizadas pueden ejecutarse repetidamente con precisión y velocidad, sin fatiga ni error humano, lo que permite probar más funcionalidades en menos tiempo. Esto libera a los testers humanos para que se centren en tareas más creativas y complejas, pero no los sustituye completamente, ya que la intuición y el pensamiento crítico humano siguen siendo esenciales.",
    },
    {
      id: 5022,
      moduloId: 501,
      pregunta: "¿Cuál de los siguientes NO es un tipo de prueba automatizada?",
      opciones: [
        "Pruebas de rendimiento",
        "Pruebas de integración",
        "Pruebas de seguridad",
        "Pruebas de interfaz",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Aunque las pruebas de seguridad pueden ser parcialmente automatizadas, tradicionalmente requieren un enfoque más manual y especializado debido a su naturaleza compleja y cambiante. Las pruebas de rendimiento, integración e interfaz tienen herramientas bien establecidas para su automatización. Sin embargo, es importante notar que la automatización de pruebas de seguridad está evolucionando, y cada vez existen más herramientas disponibles para este propósito.",
    },
    {
      id: 5023,
      moduloId: 501,
      pregunta:
        "¿Qué tipo de pruebas miden la velocidad y capacidad de respuesta del sistema bajo diferentes cargas?",
      opciones: [
        "Pruebas unitarias",
        "Pruebas de rendimiento",
        "Pruebas de interfaz",
        "Pruebas de integración",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Las pruebas de rendimiento están diseñadas para evaluar la velocidad, escalabilidad y estabilidad de un sistema bajo diferentes condiciones de carga. Incluyen pruebas de carga (evaluar el comportamiento bajo carga esperada), pruebas de estrés (probar los límites del sistema), pruebas de resistencia (verificar comportamiento durante periodos prolongados) y otras, con el objetivo de identificar cuellos de botella y áreas de mejora en el rendimiento del sistema.",
    },
    {
      id: 5024,
      moduloId: 501,
      pregunta:
        "¿Qué criterio se debe considerar al decidir en qué pruebas invertir más recursos?",
      opciones: [
        "La relación entre riesgo y frecuencia",
        "La cantidad de líneas de código del software",
        "La cantidad de usuarios activos",
        "La facilidad de implementación de la automatización",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Al decidir dónde invertir recursos en pruebas, es fundamental considerar la relación entre el riesgo (impacto potencial de un fallo) y la frecuencia (probabilidad de que ocurra). Las funcionalidades críticas que se usan con frecuencia presentan el mayor riesgo para el negocio y los usuarios, por lo que deberían recibir mayor atención en las pruebas. Este enfoque basado en riesgos permite optimizar los recursos limitados de prueba, centrándose en las áreas donde es más probable que ocurran problemas significativos.",
    },
    {
      id: 5025,
      moduloId: 501,
      pregunta:
        "¿Por qué se deben invertir más recursos en pruebas de inicio de sesión y transferencias en una aplicación bancaria?",
      opciones: [
        "Porque requieren menor tiempo de ejecución",
        "Porque son funciones críticas y un fallo comprometería la seguridad y confianza de los usuarios",
        "Porque son pruebas fáciles de automatizar",
        "Porque tienen menor impacto en caso de error",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "En una aplicación bancaria, funciones como el inicio de sesión y las transferencias son críticas porque manejan información sensible y transacciones financieras. Un fallo en estas áreas podría tener graves consecuencias: comprometer la seguridad de las cuentas, provocar pérdidas económicas, exponer datos sensibles y dañar irreparablemente la confianza de los usuarios en la institución. Por ello, estas funcionalidades merecen una inversión significativa en pruebas exhaustivas, incluso si son más complejas o consumen más recursos.",
    },
  ],
};

export default moduloPruebasSoftware;
