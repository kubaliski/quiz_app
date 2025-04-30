/**
 * Datos del módulo de UML (Unified Modeling Language) para la asignatura de Entornos de Desarrollo.
 * Este módulo incluye preguntas sobre diagramas de casos de uso, diagramas de clases y otros elementos
 * de modelado UML utilizados en el diseño y desarrollo de software.
 *
 * @type {Object}
 * @property {number} id - ID del módulo.
 * @property {string} nombre - Nombre del módulo.
 * @property {boolean} esExamen - Indica si el módulo es un examen (true) o no (false).
 * @property {number} asignaturaId - ID de la asignatura a la que pertenece el módulo.
 * @property {string} descripcion - Descripción del módulo.
 * @property {Array<Object>} preguntas - Array de preguntas del módulo.
 * @property {number} preguntas[].id - Identificador único de la pregunta
 * @property {number} preguntas[].moduloId - ID del módulo al que pertenece la pregunta
 * @property {string} preguntas[].pregunta - Texto de la pregunta
 * @property {Array<string>} preguntas[].opciones - Lista de opciones de respuesta
 * @property {number} preguntas[].respuestaCorrecta - Índice (0-based) de la opción correcta
 * @property {string} preguntas[].explicacion - Explicación de la respuesta correcta
 */
const moduloUML = {
    id: 505,
    nombre: "UML: Modelado y Diseño",
    asignaturaId: 5,
    esExamen: false,
    descripcion: "Este módulo cubre los conceptos fundamentales del Lenguaje Unificado de Modelado (UML), incluyendo diagramas de casos de uso, diagramas de clases, relaciones entre clases y otros elementos de modelado utilizados en el desarrollo de software.",
    preguntas: [
      {
        id: 5501,
        moduloId: 505,
        pregunta: "¿Qué representa un diagrama de casos de uso?",
        opciones: [
          "Las funcionalidades que ofrece el sistema a los usuarios",
          "El comportamiento interno de las clases",
          "El flujo de datos del sistema",
          "El diseño físico de la base de datos"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los diagramas de casos de uso representan las funcionalidades que ofrece el sistema a sus usuarios. Muestran la interacción entre los actores (usuarios u otros sistemas) y el sistema, definiendo qué hace el sistema desde la perspectiva del usuario, no cómo lo hace internamente."
      },
      {
        id: 5502,
        moduloId: 505,
        pregunta: "En un diagrama de casos de uso, ¿qué representa un actor?",
        opciones: [
          "Una clase principal",
          "Una función interna del sistema",
          "Un mensaje enviado entre módulos",
          "Un usuario o sistema externo que interactúa con el sistema"
        ],
        respuestaCorrecta: 3,
        explicacion: "Un actor en un diagrama de casos de uso representa un rol que un usuario, otro sistema o entidad externa puede desempeñar al interactuar con nuestro sistema. Los actores pueden ser personas, sistemas externos, sensores, o cualquier entidad que interactúe con el sistema pero que no forme parte de él."
      },
      {
        id: 5503,
        moduloId: 505,
        pregunta: "¿Qué significa la relación «include» en un diagrama de casos de uso?",
        opciones: [
          "Un error de diseño",
          "Un caso de uso que siempre se ejecuta dentro de otro",
          "Un caso de uso opcional",
          "Una herencia entre casos de uso"
        ],
        respuestaCorrecta: 1,
        explicacion: "La relación «include» indica que un caso de uso base siempre incluye el comportamiento de otro caso de uso. Es decir, el caso de uso incluido siempre se ejecuta como parte del flujo del caso de uso base. Se utiliza para factorizar comportamiento común que se comparte entre varios casos de uso."
      },
      {
        id: 5504,
        moduloId: 505,
        pregunta: "¿Qué tipo de relación se usa para modelar un comportamiento opcional en un caso de uso?",
        opciones: [
          "extend",
          "generalization",
          "include",
          "association"
        ],
        respuestaCorrecta: 0,
        explicacion: "La relación «extend» se utiliza cuando un caso de uso añade comportamiento opcional a otro caso de uso base. A diferencia de «include», el comportamiento extendido puede o no ejecutarse, dependiendo de ciertas condiciones que se cumplen durante la ejecución del caso de uso base."
      },
      {
        id: 5505,
        moduloId: 505,
        pregunta: "¿Qué sección contiene los atributos en una clase UML?",
        opciones: [
          "La primera sección",
          "La segunda sección",
          "La última sección solo si es abstracta",
          "La tercera sección"
        ],
        respuestaCorrecta: 1,
        explicacion: "En un diagrama de clases UML, una clase se representa con un rectángulo dividido típicamente en tres secciones: la primera contiene el nombre de la clase, la segunda contiene los atributos o propiedades, y la tercera contiene los métodos u operaciones."
      },
      {
        id: 5506,
        moduloId: 505,
        pregunta: "¿Qué símbolo indica visibilidad pública en UML?",
        opciones: [
          "*",
          "#",
          "+",
          "-"
        ],
        respuestaCorrecta: 2,
        explicacion: "En UML, el símbolo '+' antes de un atributo o método indica visibilidad pública, lo que significa que ese elemento puede ser accedido desde cualquier parte del programa. Otros símbolos de visibilidad incluyen '-' para privado, '#' para protegido y '~' para paquete."
      },
      {
        id: 5507,
        moduloId: 505,
        pregunta: "¿Cómo se representa una herencia en un diagrama de clases?",
        opciones: [
          "Línea discontinua con flecha vacía",
          "Línea continua con flecha rellena",
          "Línea continua con rombo",
          "Línea continua con flecha triangular vacía"
        ],
        respuestaCorrecta: 3,
        explicacion: "La herencia o generalización en UML se representa con una línea continua que tiene una flecha triangular vacía apuntando hacia la superclase o clase padre. Esta notación muestra que la subclase hereda estructura y comportamiento de la superclase."
      },
      {
        id: 5508,
        moduloId: 505,
        pregunta: "¿Qué representa la composición en un diagrama de clases?",
        opciones: [
          "Asociación opcional",
          "Relación jerárquica",
          "Relación de pertenencia total (vida ligada)",
          "Dependencia débil"
        ],
        respuestaCorrecta: 2,
        explicacion: "La composición representa una relación todo-parte donde la vida del objeto parte está completamente ligada a la del objeto todo. Si se destruye el objeto contenedor, también se destruyen sus partes. Se representa con un rombo negro en el extremo del contenedor."
      },
      {
        id: 5509,
        moduloId: 505,
        pregunta: "¿Cómo se representa la agregación en UML?",
        opciones: [
          "Flecha negra",
          "Rombo blanco en la clase contenedora",
          "Línea discontinua",
          "Rombo negro en la clase contenedora"
        ],
        respuestaCorrecta: 1,
        explicacion: "La agregación es una forma especial de asociación que representa una relación todo-parte más débil que la composición. Se representa con un rombo blanco o vacío en el extremo de la clase contenedora. A diferencia de la composición, los objetos parte pueden existir independientemente del todo."
      },
      {
        id: 5510,
        moduloId: 505,
        pregunta: "¿Qué elemento puede agrupar varias clases en UML?",
        opciones: [
          "Paquete",
          "Módulo",
          "Actor",
          "Interfaz"
        ],
        respuestaCorrecta: 0,
        explicacion: "Un paquete en UML es un mecanismo de agrupación que permite organizar elementos relacionados (como clases, interfaces, otros paquetes, etc.) en unidades de nivel superior. Se representa gráficamente como una carpeta y ayuda a estructurar sistemas complejos de manera jerárquica."
      },
      {
        id: 5511,
        moduloId: 505,
        pregunta: "¿Qué muestra el flujo principal en un caso de uso?",
        opciones: [
          "Las validaciones internas",
          "Solamente los errores del sistema",
          "Todas las excepciones posibles",
          "La secuencia normal de pasos esperados"
        ],
        respuestaCorrecta: 3,
        explicacion: "El flujo principal o escenario principal de un caso de uso describe la secuencia normal de pasos que se ejecutan cuando todo funciona correctamente, sin errores ni condiciones excepcionales. Representa el camino 'feliz' o el comportamiento esperado durante la interacción entre el actor y el sistema."
      },
      {
        id: 5512,
        moduloId: 505,
        pregunta: "¿Qué herramienta se usa para detallar el flujo interno de un caso de uso?",
        opciones: [
          "Diagrama entidad-relación",
          "Diagrama de componentes",
          "Diagrama de actividades",
          "Diagrama de clases"
        ],
        respuestaCorrecta: 2,
        explicacion: "El diagrama de actividades es la herramienta más adecuada para detallar el flujo interno de un caso de uso. Este diagrama muestra la secuencia de actividades, decisiones, bifurcaciones y uniones que ocurren dentro del caso de uso, permitiendo visualizar claramente el flujo de control y los posibles caminos alternativos."
      },
      {
        id: 5513,
        moduloId: 505,
        pregunta: "¿Qué se modela con asociaciones en un diagrama de clases?",
        opciones: [
          "El flujo de eventos",
          "La relación estructural entre dos clases",
          "La secuencia de llamadas",
          "La herencia de métodos"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las asociaciones en un diagrama de clases modelan las relaciones estructurales entre dos clases. Representan cómo los objetos de una clase se relacionan o conectan con objetos de otra clase. Estas conexiones suelen representarse con líneas que unen las clases, y pueden incluir información como multiplicidad, roles y direccionalidad."
      },
      {
        id: 5514,
        moduloId: 505,
        pregunta: "¿Qué significa una línea discontinua en un diagrama de clases?",
        opciones: [
          "Una asociación fuerte",
          "Una composición",
          "Una dependencia",
          "Una herencia"
        ],
        respuestaCorrecta: 2,
        explicacion: "Una línea discontinua en un diagrama de clases representa una dependencia, que es una relación de uso donde un cambio en la clase objetivo puede afectar a la clase dependiente. A diferencia de las asociaciones, las dependencias no implican que un objeto mantenga una referencia permanente al otro, sino solo un uso temporal o 'conocimiento' de la otra clase."
      },
      {
        id: 5515,
        moduloId: 505,
        pregunta: "¿Cuál de las siguientes afirmaciones sobre los casos de uso es correcta?",
        opciones: [
          "Permiten definir los requisitos funcionales desde el punto de vista del usuario",
          "Son útiles para programadores pero no para clientes",
          "Solo representan la base de datos del sistema",
          "Muestran el diseño interno del sistema"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los casos de uso son una técnica para capturar los requisitos funcionales de un sistema desde la perspectiva del usuario. Su principal ventaja es que describen qué debe hacer el sistema (no cómo), utilizando un lenguaje comprensible tanto para usuarios como para desarrolladores, lo que facilita la comunicación entre stakeholders técnicos y no técnicos."
      }
    ]
  };

export default moduloUML;