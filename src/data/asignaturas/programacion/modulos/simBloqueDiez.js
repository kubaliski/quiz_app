/**
 * Datos del módulo de Acceso a Datos en Java perteneciente a la asignatura de Programación.
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
export const moduloSimBloqueDiez = {
    id: 317,
    nombre: "Acceso a Datos (Bloque 10)",
    asignaturaId: 3,
    esExamen: true,
    descripcion: "Examen centrado en el acceso a bases de datos desde Java. Se evalúan conceptos como JDBC, Maven, buenas prácticas de conexión a bases de datos y configuración de proyectos.",
    preguntas: [
      {
        id: 31701,
        moduloId: 317,
        pregunta: "¿Qué buena práctica se recomienda siempre al trabajar con JDBC?",
        opciones: [
          "Usar archivos .sql externos",
          "No capturar excepciones",
          "Cerrar conexiones y usar try-with-resources",
          "Ejecutar solo consultas SELECT"
        ],
        respuestaCorrecta: 2,
        explicacion: "Una buena práctica fundamental al trabajar con JDBC es cerrar siempre las conexiones y utilizar try-with-resources. Esto garantiza que los recursos (conexiones, statements, resultsets) se liberen adecuadamente incluso si ocurren excepciones, evitando fugas de memoria y problemas de rendimiento. Las conexiones a bases de datos son recursos limitados, y no cerrarlas puede agotar el pool de conexiones rápidamente en aplicaciones en producción."
      },
      {
        id: 31702,
        moduloId: 317,
        pregunta: "¿Qué es JDBC?",
        opciones: [
          "API de Java que permite conectar y ejecutar consultas sobre bases de datos desde Java",
          "Unas librerías de javascript que podemos utilizar en java, y que permiten trabajar con ficheros binarios",
          "El método que si es insertado dentro de un try..catch, me permite realizar consultas sobre unas tablas de la base de datos",
          "Unas librerías propias de Java, que permiten trabajar con ficheros binarios"
        ],
        respuestaCorrecta: 0,
        explicacion: "JDBC (Java Database Connectivity) es una API estándar de Java que proporciona interfaces y clases para conectarse a bases de datos relacionales y ejecutar consultas SQL. Permite a los desarrolladores Java interactuar con casi cualquier sistema de gestión de bases de datos, independientemente del fabricante, mediante controladores específicos. JDBC abstrae las complejidades de la comunicación con bases de datos y ofrece un conjunto uniforme de métodos para establecer conexiones, ejecutar consultas, procesar resultados y gestionar transacciones."
      },
      {
        id: 31703,
        moduloId: 317,
        pregunta: "¿Qué necesitamos para conectar desde Java a cualquier base de datos?",
        opciones: [
          "El driver de la base de datos en concreto",
          "Únicamente podemos desde Maven",
          "Una API de Java",
          "Un teléfono móvil"
        ],
        respuestaCorrecta: 0,
        explicacion: "Para conectar desde Java a una base de datos específica, necesitamos el driver correspondiente a esa base de datos. Los drivers son implementaciones de la API JDBC que contienen el código necesario para traducir las llamadas JDBC genéricas en comandos específicos para cada sistema de gestión de bases de datos (MySQL, PostgreSQL, Oracle, etc.). Sin el driver adecuado, Java no puede comunicarse con el sistema de base de datos deseado. Estos drivers generalmente se incluyen como dependencias en el proyecto, ya sea manualmente o a través de herramientas como Maven."
      },
      {
        id: 31704,
        moduloId: 317,
        pregunta: "¿Qué es Maven?",
        opciones: [
          "Una API para trabajar con bases de datos",
          "La clase DOM con la que acceder a una base de datos MongoDB",
          "Una API para trabajar con ficheros de texto",
          "Herramienta de automatización y gestión de proyectos"
        ],
        respuestaCorrecta: 3,
        explicacion: "Maven es una herramienta de automatización y gestión de proyectos de software principalmente utilizada en proyectos Java. Su principal funcionalidad es la gestión de dependencias, permitiendo declarar bibliotecas externas que el proyecto necesita sin tener que almacenarlas en el repositorio del proyecto. Además, Maven estandariza la estructura del proyecto, maneja el ciclo de vida de construcción (compilación, pruebas, empaquetado, instalación, etc.) y facilita la generación de informes y documentación. Todo se configura a través del archivo POM (Project Object Model) en formato XML."
      },
      {
        id: 31705,
        moduloId: 317,
        pregunta: "¿Qué es pom.xml?",
        opciones: [
          "Archivo de Maven, donde se define toda la configuración del proyecto",
          "API de java que me permite trabajar con bases de datos",
          "API de Java que me permite trabajar con ficheros de texto",
          "API de java que me permite trabajar con ficheros binarios"
        ],
        respuestaCorrecta: 0,
        explicacion: "El archivo pom.xml (Project Object Model) es el archivo de configuración central en proyectos Maven. En él se define toda la información esencial del proyecto, como identificadores (groupId, artifactId, version), dependencias, plugins, configuración de construcción, perfiles, repositorios y propiedades. Este archivo XML permite a Maven gestionar correctamente el ciclo de vida del proyecto, resolver las dependencias y aplicar las configuraciones adecuadas en cada fase del proceso de construcción. Es la pieza fundamental que hace que Maven pueda automatizar las tareas de construcción y gestión del proyecto."
      },
      {
        id: 31706,
        moduloId: 317,
        pregunta: "¿Qué es recomendable cuando trabajamos con JDBC?",
        opciones: [
          "Siempre cerrar conexiones, y/o usar try-with-resources",
          "Utilizar Maven",
          "Volcar primero en el buffer de entrada",
          "Utilizar como apoyo la clase Scanner"
        ],
        respuestaCorrecta: 0,
        explicacion: "Cuando trabajamos con JDBC, es altamente recomendable siempre cerrar las conexiones y/o utilizar try-with-resources. Las conexiones a bases de datos consumen recursos significativos tanto en la aplicación Java como en el servidor de base de datos. No cerrarlas adecuadamente puede provocar fugas de memoria y agotar el pool de conexiones disponibles. La estructura try-with-resources (introducida en Java 7) simplifica este proceso, ya que cierra automáticamente los recursos que implementan la interfaz AutoCloseable (como Connection, Statement y ResultSet) al finalizar el bloque try, incluso si se producen excepciones."
      }
    ]
  };

export default moduloSimBloqueDiez;