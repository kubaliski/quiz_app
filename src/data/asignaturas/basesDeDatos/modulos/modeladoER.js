/**
 * Datos del módulo de Modelado Entidad-Relación perteneciente a la asignatura de Bases de Datos.
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
 * // Importar el módulo de Modelado Entidad-Relación
 * import moduloModeladoER from '@data/modulos/modeladoER';
 *
 * function PreguntasAleatorias() {
 *   // Seleccionar 5 preguntas aleatorias del módulo
 *   const preguntasAleatorias = moduloModeladoER.preguntas
 *     .sort(() => 0.5 - Math.random())
 *     .slice(0, 5);
 *
 *   return (
 *     <div>
 *       <h2>{moduloModeladoER.nombre}</h2>
 *       {preguntasAleatorias.map(pregunta => (
 *         <QuestionCard key={pregunta.id} pregunta={pregunta} />
 *       ))}
 *     </div>
 *   );
 * }
 */
export const moduloModeladoER = {
    id: 202,
    nombre: "Modelado Entidad-Relación",
    esExamen: false,
    asignaturaId: 2,
    descripcion: "Diseño de modelos entidad-relación y transformación al modelo relacional. Entidades, atributos, relaciones, cardinalidad y paso a tablas.",
    preguntas: [
      {
        id: 2101,
        moduloId: 202,
        pregunta: "¿Cómo se denomina el tipo de atributo que puede tener múltiples valores para una misma entidad?",
        recurso: {
          tipo: "imagen",
          contenido: "/images/modeladoER/pregunta01.png",
          altText: "Diagrama con entidad Cliente y atributo Teléfono"
        },
        opciones: [
          "De alto valor",
          "Multivaluado",
          "Multievaluado",
          "Multivalor"
        ],
        respuestaCorrecta: 1,
        explicacion: "Un atributo multivaluado es aquel que puede contener múltiples valores para una misma instancia de una entidad. Por ejemplo, una persona puede tener varios números de teléfono. En los diagramas entidad-relación, estos atributos se representan con un doble óvalo."
      },
      {
        id: 2102,
        moduloId: 202,
        pregunta: "En un diagrama ER, ¿cuántos teléfonos puede tener un cliente si el atributo teléfono es multivaluado?",
        recurso: {
          tipo: "imagen",
          contenido: "/images/modeladoER/pregunta01.png",
          altText: "Diagrama con entidad Cliente y atributo Teléfono"
        },
        opciones: [
          "1",
          "Indefinidos",
          "Ninguna de las anteriores",
          "10"
        ],
        respuestaCorrecta: 1,
        explicacion: "Cuando un atributo se define como multivaluado (representado con doble óvalo en el diagrama ER), significa que puede contener un número indefinido de valores para una misma entidad. Por lo tanto, un cliente puede tener indefinidos números de teléfono."
      },
      {
        id: 2103,
        moduloId: 202,
        pregunta: "¿Cómo se lleva a cabo el paso a tablas del atributo teléfono si es multivaluado?",
        recurso: {
          tipo: "imagen",
          contenido: "/images/modeladoER/pregunta01.png",
          altText: "Diagrama con entidad Cliente y atributo Teléfono"
        },
        opciones: [
          "Se reservan 10 columnas (Teléfono1, Teléfono2, ...) en la tabla Cliente.",
          "Se crea una tabla con los atributos (IDTELÉFONO, TELÉFONO)",
          "Se añade como clave foránea de tabla Cliente",
          "Se crea una tabla con los atributos ((FK)IDCLIENTE, TELÉFONO)"
        ],
        respuestaCorrecta: 3,
        explicacion: "Al pasar a tablas un atributo multivaluado, se debe crear una tabla adicional que contenga la clave primaria de la entidad original como clave foránea, junto con el atributo multivaluado. De esta forma, se puede asociar cada valor del atributo multivaluado con su entidad correspondiente. En este caso, se crea una tabla con los atributos (FK)IDCLIENTE como clave foránea y TELÉFONO."
      },
      {
        id: 2104,
        moduloId: 202,
        pregunta: "¿Según este diagrama un empleado puede ser arquitecto y administrativo a la vez?",
        recurso: {
          tipo: "imagen",
          contenido: "/images/modeladoER/pregunta04.png",
          altText: "Diagrama de generalización de empleados"
        },
        opciones: [
          "Depende.",
          "No, porque solo un Dios y un gato (porque es gato y araña) puede ser dos cosas a la vez.",
          "No, porque es una generalización disjunta.",
          "Sí claro."
        ],
        respuestaCorrecta: 2,
        explicacion: "En el diagrama se muestra una generalización disjunta, representada por la forma del conector (cuña vacía). En una generalización disjunta, una instancia de la entidad padre (Empleado) solo puede pertenecer a una de las entidades hijas (Arquitecto, Administrativo o Ingeniero), por lo que un empleado no puede ser arquitecto y administrativo a la vez."
      },
      {
        id: 2105,
        moduloId: 202,
        pregunta: "Según el diagrama de generalización, ¿qué campos contendrá la tabla 'Ingeniero'?",
        recurso: {
          tipo: "imagen",
          contenido: "/images/modeladoER/pregunta04.png",
          altText: "Diagrama de generalización de empleados"
        },
        opciones: [
          "IdEmpleado, Especialidad, AñosExperiencia, Nombre, Dirección, Fechanacimiento, Salario, Puesto",
          "Especialidad, AñosExperiencia",
          "Ninguno",
          "IdEmpleado, Especialidad, AñosExperiencia"
        ],
        respuestaCorrecta: 3,
        explicacion: "En una generalización, al transformarla a tablas, cada entidad hija (en este caso 'Ingeniero') tendrá su propia tabla que incluirá la clave primaria heredada de la entidad padre (IdEmpleado) y los atributos específicos de esa entidad hija (Especialidad, AñosExperiencia). Los atributos comunes (Nombre, Dirección, etc.) se mantienen en la tabla de la entidad padre (Empleado)."
      },
      {
        id: 2106,
        moduloId: 202,
        pregunta: "¿Por qué hay un atributo rodeado de una línea discontinua en este diagrama?",
        recurso: {
          tipo: "imagen",
          contenido: "/images/modeladoER/pregunta06.png",
          altText: "Diagrama con atributo antigüedad en línea discontinua"
        },
        opciones: [
          "Es un atributo multivaluado",
          "Es un atributo calculado",
          "Ninguna de las anteriores",
          "Queda bonito"
        ],
        respuestaCorrecta: 1,
        explicacion: "Un atributo rodeado por una línea discontinua en un diagrama entidad-relación representa un atributo calculado o derivado. Esto significa que su valor no se almacena directamente en la base de datos, sino que se calcula a partir de otros atributos cuando es necesario. En este caso, 'antigüedad' se podría calcular a partir de la 'fecha de incorporación'."
      },
      {
        id: 2107,
        moduloId: 202,
        pregunta: "¿Cómo pasaría a tablas el atributo antigüedad si es un atributo calculado?",
        recurso: {
          tipo: "imagen",
          contenido: "/images/modeladoER/pregunta06.png",
          altText: "Diagrama con atributo antigüedad en línea discontinua"
        },
        opciones: [
          "No se pasa a tablas porque se calculará cada vez que se consulte",
          "Las tablas no existen, son los padres",
          "No se pueden incluir campos con símbolos como ¨",
          "Se crea una nueva tabla Antigüedad_Camarero((FK)idCamarero, Antigüedad)"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los atributos calculados o derivados no se almacenan en la base de datos, ya que pueden ser calculados en tiempo de ejecución a partir de otros atributos. Por lo tanto, no aparecen como campos en las tablas resultantes. En su lugar, se pueden implementar mediante vistas, funciones o procedimientos almacenados que realicen el cálculo cuando sea necesario."
      },
      {
        id: 2108,
        moduloId: 202,
        pregunta: "¿Qué problema tiene un atributo calculado 'antigüedad' sin un atributo base para calcularlo?",
        recurso: {
          tipo: "imagen",
          contenido: "/images/modeladoER/pregunta08.png",
          altText: "Diagrama con atributo antigüedad calculado sin fecha de incorporación"
        },
        opciones: [
          "No hay un campo que nos permita calcular 'antigüedad'",
          "No",
          "Faltan relaciones",
          "idCamarero no puede ser clave primaria"
        ],
        respuestaCorrecta: 0,
        explicacion: "El problema en el diagrama es que se define 'antigüedad' como un atributo calculado (línea discontinua), pero no hay ningún atributo base a partir del cual se pueda calcular. Para determinar la antigüedad de un camarero, normalmente se necesitaría un atributo como 'fecha de incorporación', que no aparece en el diagrama. Sin este atributo base, no hay forma de calcular la antigüedad."
      },
      {
        id: 2109,
        moduloId: 202,
        pregunta: "¿Cómo se calcula el atributo 'antigüedad' generalmente?",
        recurso: {
          tipo: "imagen",
          contenido: "/images/modeladoER/pregunta06.png",
          altText: "Diagrama con fecha de incorporación y antigüedad"
        },
        opciones: [
          "En base a la fecha de incorporación",
          "Todas las bases de datos del mundo están interconectadas y se busca el dato en ellas",
          "Hay que guardar un 'TimeStamp' cuando se registre el camarero, y se resta la fecha actual cada vez que se consulta.",
          "Se pide al usuario cada vez que se necesita"
        ],
        respuestaCorrecta: 0,
        explicacion: "El atributo calculado 'antigüedad' generalmente se calcula en base a la 'fecha de incorporación'. Se resta la fecha de incorporación de la fecha actual para obtener el tiempo que ha transcurrido, lo que representa la antigüedad del camarero en la empresa. Este cálculo se realiza cada vez que se necesita el valor, en lugar de almacenarlo en la base de datos."
      },
      {
        id: 2110,
        moduloId: 202,
        pregunta: "¿Cómo se pasa a tablas un atributo de una relación M:N?",
        recurso: {
          tipo: "imagen",
          contenido: "/images/modeladoER/pregunta10.png",
          altText: "Diagrama de relación muchos a muchos con atributo"
        },
        opciones: [
          "Se crea una tabla Autores_Cursos((FK)CodigoEmpleado, (FK)CodigoCurso, F.Inicio)",
          "Se incorpora a la tabla Cursos",
          "No se pasa a tablas",
          "Se incorpora a la tabla Empleados"
        ],
        respuestaCorrecta: 0,
        explicacion: "Cuando una relación muchos a muchos (M:N) tiene atributos propios, al convertirla en tablas, se crea una tabla intermedia que incluye las claves primarias de ambas entidades relacionadas (como claves foráneas) y los atributos propios de la relación. En este caso, se crea una tabla llamada Autores_Cursos con las claves foráneas CodigoEmpleado y CodigoCurso, más el atributo F.Inicio que pertenece a la relación."
      },
      {
        id: 2111,
        moduloId: 202,
        pregunta: "En una relación M:N, ¿cuál será la clave primaria de la tabla intermedia?",
        recurso: {
          tipo: "imagen",
          contenido: "/images/modeladoER/pregunta11.png",
          altText: "Diagrama de relación entre camarero y ticket"
        },
        opciones: [
          "(FK)IDCAMARERO",
          "((FK)IDCAMARERO, (FK)IDTICKET)",
          "(FK)IDTICKET",
          "idEmite"
        ],
        respuestaCorrecta: 1,
        explicacion: "Cuando se crea una tabla intermedia para representar una relación muchos a muchos (M:N), la clave primaria de esta tabla generalmente está compuesta por la combinación de las claves foráneas que referencian a las dos entidades relacionadas. En este caso, la clave primaria será la combinación de (FK)IDCAMARERO y (FK)IDTICKET, asegurando que cada combinación de camarero y ticket sea única."
      },
      {
        id: 2112,
        moduloId: 202,
        pregunta: "¿Qué tipo de entidad es 'Línea Ticket' en este diagrama?",
        recurso: {
          tipo: "imagen",
          contenido: "/images/modeladoER/pregunta12.png",
          altText: "Diagrama con entidad débil Línea Ticket"
        },
        opciones: [
          "Entidad débil",
          "Entidad floja",
          "Entidad multivaluada",
          "Entidad normal"
        ],
        respuestaCorrecta: 0,
        explicacion: "En el diagrama, 'Línea Ticket' es una entidad débil, lo que se representa mediante un rectángulo con doble borde. Una entidad débil es aquella que depende de la existencia de otra entidad (llamada entidad fuerte) para su identificación única. En este caso, 'Línea Ticket' depende de 'Cabecera Ticket' para su existencia e identificación completa."
      },
      {
        id: 2113,
        moduloId: 202,
        pregunta: "¿Cuál será la clave de la entidad débil 'Línea Ticket'?",
        recurso: {
          tipo: "imagen",
          contenido: "/images/modeladoER/pregunta12.png",
          altText: "Diagrama con entidad débil Línea Ticket"
        },
        opciones: [
          "NumTicket, NumLinea",
          "NumLinea, idLinea",
          "NumTicket",
          "idLinea"
        ],
        respuestaCorrecta: 0,
        explicacion: "La clave de una entidad débil está compuesta por la clave primaria de la entidad fuerte de la que depende, más su propio discriminador (un atributo que la distingue dentro del contexto de su entidad fuerte). En este caso, la clave de 'Línea Ticket' sería la combinación de 'NumTicket' (clave de 'Cabecera Ticket') y 'NumLinea' (discriminador de la línea dentro del ticket)."
      },
      {
        id: 2114,
        moduloId: 202,
        pregunta: "'Un médico puede atender a varios pacientes, y un paciente puede ser atendido por varios médicos.' ¿Cuál es la cardinalidad de esta relación?",
        opciones: [
          "uno a uno",
          "uno a muchos",
          "muchos a uno",
          "muchos a muchos"
        ],
        respuestaCorrecta: 3,
        explicacion: "La cardinalidad 'muchos a muchos' (M:N) ocurre cuando múltiples instancias de una entidad pueden relacionarse con múltiples instancias de otra entidad. En este caso, un médico puede atender a varios pacientes, y a su vez, un paciente puede ser atendido por varios médicos, lo que claramente define una relación muchos a muchos."
      },
    //Más preguntas a añadir si se desea
    //   {
    //     id: 2115,
    //     moduloId: 202,
    //     pregunta: "¿Qué tipo de relación existe entre Cliente y Cabecera Ticket en este modelo?",
    //     recurso: {
    //       tipo: "imagen",
    //       contenido: "/images/basesDatos/relacion_cliente_ticket.png",
    //       altText: "Diagrama de relación entre cliente y cabecera ticket"
    //     },
    //     opciones: [
    //       "Uno a uno (1:1)",
    //       "Uno a muchos (1:N)",
    //       "Muchos a uno (N:1)",
    //       "Muchos a muchos (M:N)"
    //     ],
    //     respuestaCorrecta: 1,
    //     explicacion: "En el diagrama, la relación entre Cliente y Cabecera Ticket está marcada como (1,1) del lado del Cliente y (0,n) del lado de Cabecera Ticket. Esto indica que un cliente puede estar asociado con cero o muchos tickets (por eso 0,n), mientras que cada ticket está asociado exactamente con un cliente (por eso 1,1). Esto define una relación uno a muchos (1:N) desde Cliente hacia Cabecera Ticket."
    //   },
    //   {
    //     id: 2116,
    //     moduloId: 202,
    //     pregunta: "En un modelo ER, ¿qué significa una relación con cardinalidad (0,1)?",
    //     opciones: [
    //       "La entidad debe participar en al menos una relación.",
    //       "La entidad puede participar en como máximo una relación, o ninguna.",
    //       "La entidad debe participar exactamente en una relación.",
    //       "La entidad puede participar en un número ilimitado de relaciones."
    //     ],
    //     respuestaCorrecta: 1,
    //     explicacion: "La cardinalidad (0,1) significa que una instancia de la entidad puede participar en la relación como máximo una vez, o no participar en absoluto. Es decir, la participación es opcional (por el 0) y, cuando existe, es única (por el 1). Por ejemplo, un empleado puede tener o no un vehículo de empresa asignado, pero nunca más de uno."
    //   },
    //   {
    //     id: 2117,
    //     moduloId: 202,
    //     pregunta: "¿Qué indica una relación identificativa en un modelo ER?",
    //     opciones: [
    //       "Que la relación es opcional para ambas entidades.",
    //       "Que una entidad débil depende de esta relación para su identificación.",
    //       "Que la relación tiene atributos propios.",
    //       "Que ambas entidades tienen la misma clave primaria."
    //     ],
    //     respuestaCorrecta: 1,
    //     explicacion: "Una relación identificativa es aquella que conecta una entidad débil con su entidad fuerte correspondiente. En este tipo de relación, la entidad débil depende de la entidad fuerte para su identificación completa. La clave primaria de la entidad débil incluye la clave primaria de la entidad fuerte. En los diagramas, las relaciones identificativas suelen representarse con una línea más gruesa o con un rombo doble."
    //   },
    //   {
    //     id: 2118,
    //     moduloId: 202,
    //     pregunta: "Al transformar un modelo ER en tablas relacionales, ¿qué ocurre con las entidades fuertes?",
    //     opciones: [
    //       "Se combinan con sus entidades débiles en una sola tabla.",
    //       "Se crean vistas en lugar de tablas físicas.",
    //       "Cada entidad fuerte se transforma en una tabla con su clave primaria.",
    //       "Se eliminan si tienen menos de tres atributos."
    //     ],
    //     respuestaCorrecta: 2,
    //     explicacion: "En el proceso de transformación de un modelo ER a un modelo relacional, cada entidad fuerte se convierte en una tabla independiente. Esta tabla incluirá todos los atributos de la entidad, incluida su clave primaria que identifica de manera única cada fila. Los atributos multivaluados y las relaciones se manejan por separado según reglas específicas."
    //   },
    //   {
    //     id: 2119,
    //     moduloId: 202,
    //     pregunta: "En una generalización, ¿qué enfoque de implementación crea una tabla por cada entidad (padre e hijas)?",
    //     opciones: [
    //       "Table Per Class",
    //       "Single Table",
    //       "Table Per Concrete Class",
    //       "Joined Tables"
    //     ],
    //     respuestaCorrecta: 3,
    //     explicacion: "El enfoque 'Joined Tables' (tablas unidas) crea una tabla para la entidad padre y una tabla para cada entidad hija en una generalización. La tabla de la entidad padre contiene los atributos comunes, mientras que cada tabla hija contiene sus atributos específicos y una clave foránea que referencia a la tabla padre. Esto permite representar de manera eficiente la herencia en el modelo relacional."
    //   },
    //   {
    //     id: 2120,
    //     moduloId: 202,
    //     pregunta: "¿Cómo se representan las relaciones reflexivas (de una entidad consigo misma) en el modelo relacional?",
    //     opciones: [
    //       "No se pueden representar en el modelo relacional.",
    //       "Se crea una tabla intermedia con dos claves foráneas que apuntan a la misma tabla.",
    //       "Se añade una columna adicional que actúa como clave foránea en la misma tabla.",
    //       "Se utilizan vistas recursivas para simular la relación."
    //     ],
    //     respuestaCorrecta: 2,
    //     explicacion: "Las relaciones reflexivas (o recursivas) se representan en el modelo relacional añadiendo una columna que actúa como clave foránea y que referencia a la clave primaria de la misma tabla. Por ejemplo, en una tabla 'Empleado', se podría tener un campo 'IdJefe' que es una clave foránea que apunta al 'IdEmpleado' del jefe en la misma tabla. Para relaciones M:N reflexivas, sí se utilizaría una tabla intermedia."
    //   }
    ]
  };

  export default moduloModeladoER;