/**
 * Datos del módulo práctico de Fundamentos de Bases de Datos (Diagrama ER) perteneciente a la asignatura MPO.
 * Incluye información del módulo y sus preguntas asociadas para el quiz.
 *
 * @type {Object}
 * @property {number} id - Identificador único del módulo
 * @property {string} nombre - Nombre del módulo
 * @property {boolean} esExamen - Indica si el módulo es un examen (true) o no (false)
 * @property {number} asignaturaId - ID de la asignatura a la que pertenece
 * @property {Array<Object>} preguntas - Lista de preguntas para el quiz de este módulo
 */
export const moduloBiblioteca = {
    id: 703,
    nombre: "Práctica: Análisis de Diagrama ER (Biblioteca)",
    esExamen: false,
    asignaturaId: 7,
    descripcion:
      `# Enunciado del ejercicio: Biblioteca Municipal

  El ayuntamiento de un municipio ha encargado a Carlos realizar una base de datos para informatizar la gestión de los libros de la biblioteca municipal. Carlos ha creado un diagrama entidad-relación basado en la siguiente información:

  1. De los libros necesitan saber su título (que será único), la fecha en la que se publicó, su isbn y quién o quiénes lo escribieron.
  2. De los autores necesitamos saber su nombre, sus apellidos, fecha de nacimiento, fecha de fallecimiento, nacionalidad y biografía. Indican que un autor puede tener más de una nacionalidad, y debe tenerlo en cuenta.
  3. Las personas que deseen alquilar un libro deben ser socios. Para ello se les asigna un código de socio individual, y han de comunicar su nombre, apellidos, dni, al menos dos teléfonos y la dirección, compuesta por tipo de la vía, nombre de la vía, número, piso y letra o número.
  4. De cada libro, la biblioteca adquiere al menos 10 ejemplares, por lo que un socio no alquila un libro, sino un ejemplar de dicho libro. Cada ejemplar tendrá una ubicación única y concreta en la biblioteca.
  5. Al alquilar un ejemplar necesitan registrar en qué fecha se ha prestado, y en qué fecha se ha devuelto.

  Carlos ha creado un diagrama entidad-relación basado en esta información. Analiza el diagrama mostrado en las preguntas para encontrar posibles errores o mejoras.`,
    preguntas: [
      {
        id: 7201,
        moduloId: 703,
        pregunta: "Selecciona la afirmación correcta sobre la relación entre libros y ejemplares:",
        recurso: {
          tipo: "imagen",
          contenido: "/images/mpo/modeloER.png",
          altText: "Diagrama entidad-relación para la biblioteca municipal"
        },
        opciones: [
          "Falta establecer la cardinalidad de la relación entre libros y ejemplares, que debería ser N:M",
          "Falta establecer la cardinalidad de la relación entre libros y ejemplares, que debería ser 1:1",
          "Falta establecer la cardinalidad de la relación entre libros y ejemplares, que debería ser 1:N"
        ],
        respuestaCorrecta: 2,
        explicacion:
          "La relación entre libros y ejemplares debería ser 1:N (uno a muchos), ya que cada libro puede tener múltiples ejemplares (al menos 10 según el enunciado), pero cada ejemplar pertenece a un único libro. Este es un caso típico de relación 1:N donde libros es la entidad principal y ejemplares depende de ella."
      },
      {
        id: 7202,
        moduloId: 703,
        pregunta: "Selecciona la afirmación correcta sobre los atributos de la entidad autores:",
        recurso: {
          tipo: "imagen",
          contenido: "/images/mpo/modeloER.png",
          altText: "Diagrama entidad-relación para la biblioteca municipal"
        },
        opciones: [
          "Todos los atributos de la entidad autores son correctos.",
          "La nacionalidad debería ser una entidad, ya que un autor puede tener varias nacionalidades. Además, debería ser una entidad fuerte.",
          "La nacionalidad debería ser una entidad, ya que un autor puede tener varias nacionalidades. Además, debería ser una entidad débil."
        ],
        respuestaCorrecta: 1,
        explicacion:
          "El enunciado indica que un autor puede tener más de una nacionalidad. Por tanto, la nacionalidad no debería ser un atributo simple sino una entidad relacionada con autores mediante una relación N:M. Debería ser una entidad fuerte porque las nacionalidades existen independientemente de los autores (tienen existencia propia)."
      },
      {
        id: 7203,
        moduloId: 703,
        pregunta: "Selecciona la afirmación correcta sobre la relación entre socios y teléfonos:",
        recurso: {
          tipo: "imagen",
          contenido: "/images/mpo/modeloER.png",
          altText: "Diagrama entidad-relación para la biblioteca municipal"
        },
        opciones: [
          "Falta establecer la cardinalidad de la relación entre socios y teléfonos, que debería ser N:M",
          "Falta establecer la cardinalidad de la relación entre socios y teléfonos, que debería ser 1:N",
          "Falta establecer la cardinalidad de la relación entre socios y teléfonos, que debería ser 1:1"
        ],
        respuestaCorrecta: 1,
        explicacion:
          "La relación entre socios y teléfonos debe ser 1:N (uno a muchos), ya que cada socio puede tener varios teléfonos (el enunciado especifica 'al menos dos'), pero cada teléfono pertenece a un único socio. No tendría sentido una relación N:M porque un teléfono no es compartido por varios socios en este contexto."
      },
      {
        id: 7204,
        moduloId: 703,
        pregunta: "Selecciona la afirmación correcta sobre la entidad teléfonos:",
        recurso: {
          tipo: "imagen",
          contenido: "/images/mpo/modeloER.png",
          altText: "Diagrama entidad-relación para la biblioteca municipal"
        },
        opciones: [
          "Carlos ha olvidado indicar que teléfonos es una entidad débil.",
          "Carlos ha hecho bien al indicar que teléfonos es una entidad fuerte."
        ],
        respuestaCorrecta: 0,
        explicacion:
          "Los teléfonos deberían ser una entidad débil porque su existencia depende de los socios. Un teléfono en este contexto no tiene sentido por sí mismo, sino como propiedad de un socio. Las entidades débiles no tienen identificador propio completo y dependen de su relación con la entidad fuerte (socios) para ser identificadas unívocamente."
      },
      {
        id: 7205,
        moduloId: 703,
        pregunta: "Selecciona la afirmación correcta sobre el atributo dirección:",
        recurso: {
          tipo: "imagen",
          contenido: "/images/mpo/modeloER.png",
          altText: "Diagrama entidad-relación para la biblioteca municipal"
        },
        opciones: [
          "El atributo dirección (atributo compuesto) no está bien representado. Debe ser una elipse con una línea continua, ya que la línea discontinua es para representar atributos derivados.",
          "El atributo dirección (atributo compuesto) está bien representado con una elipse con línea discontinua."
        ],
        respuestaCorrecta: 0,
        explicacion:
          "En un diagrama ER, los atributos compuestos (como dirección, que está compuesto por tipo de vía, nombre de vía, número, etc.) deben representarse con una elipse de línea continua. Las líneas discontinuas se utilizan para representar atributos derivados, que son aquellos cuyos valores pueden calcularse a partir de otros atributos."
      },
      {
        id: 7206,
        moduloId: 703,
        pregunta: "Si el enunciado pidiese incluir el dni de los autores:",
        recurso: {
          tipo: "imagen",
          contenido: "/images/mpo/modeloER.png",
          altText: "Diagrama entidad-relación para la biblioteca municipal"
        },
        opciones: [
          "El dni no podría ser el AIP de autores, ya que si el autor de un libro fuese anónimo, no dispondríamos de dicha información.",
          "El dni podría ser el AIP de autores, ya que el dni de una persona sirve para identificar de forma única a cada persona, a cada autor."
        ],
        respuestaCorrecta: 0,
        explicacion:
          "El DNI no podría ser el AIP (Atributo Identificador Principal) de autores porque existen casos especiales como autores anónimos o autores extranjeros que no tendrían DNI español. Un buen diseño de base de datos debe contemplar todos los casos posibles, por lo que es preferible usar un código autogenerado (como cod_autor) que garantice que todas las entidades tengan un identificador único."
      },
      {
        id: 7207,
        moduloId: 703,
        pregunta: "Selecciona la afirmación correcta sobre las fechas de alquiler y devolución:",
        recurso: {
          tipo: "imagen",
          contenido: "/images/mpo/modeloER.png",
          altText: "Diagrama entidad-relación para la biblioteca municipal"
        },
        opciones: [
          "La fecha de alquiler (fec_alq) y la fecha de devolución (fec_dev) deben ser atributos de la relación alquilan.",
          "La fecha de alquiler (fec_alq) y la fecha de devolución (fec_dev) son atributos de la entidad ejemplares."
        ],
        respuestaCorrecta: 0,
        explicacion:
          "Las fechas de alquiler y devolución deben ser atributos de la relación 'alquilan' y no de la entidad 'ejemplares'. Esto es porque estas fechas son propiedades de la acción de alquilar (son datos que se generan cuando ocurre la relación entre un socio y un ejemplar) y no características inherentes al ejemplar. Un mismo ejemplar tendrá diferentes fechas cada vez que sea alquilado."
      },
      {
        id: 7208,
        moduloId: 703,
        pregunta: "Selecciona la afirmación correcta sobre el AIP de la entidad autores:",
        recurso: {
          tipo: "imagen",
          contenido: "/images/mpo/modeloER.png",
          altText: "Diagrama entidad-relación para la biblioteca municipal"
        },
        opciones: [
          "Las entidades deben tener un AIP (atributo identificador principal, identificador único), y la entidad autores no tiene. Habría que indicar que cod_autor es el AIP de autores, su identificador único.",
          "No es necesario que las entidades tengan un AIP (atributo identificador principal, identificador único). Ya lo indicaremos más adelante."
        ],
        respuestaCorrecta: 0,
        explicacion:
          "En un diagrama entidad-relación completo, todas las entidades deben tener claramente identificado su AIP (Atributo Identificador Principal). Esto es fundamental para el modelo relacional posterior. En este caso, cod_autor debería estar subrayado en el diagrama para indicar que es el identificador único de la entidad autores."
      },
      {
        id: 7209,
        moduloId: 703,
        pregunta: "Selecciona la afirmación correcta sobre el AIP de la entidad libros:",
        recurso: {
          tipo: "imagen",
          contenido: "/images/mpo/modeloER.png",
          altText: "Diagrama entidad-relación para la biblioteca municipal"
        },
        opciones: [
          "Título no puede ser el AIP de la entidad libros.",
          "Título puede ser el AIP de la entidad libros, pero no es funcional. Es mejor establecer cod_libro como AIP."
        ],
        respuestaCorrecta: 1,
        explicacion:
          "Aunque el enunciado menciona que el título será único, utilizar el título como AIP no es funcional por varias razones: los títulos pueden ser muy largos, pueden contener caracteres especiales, y podrían cambiar en caso de reediciones o correcciones. Es mejor práctica usar un identificador sintético como cod_libro, que será más eficiente para las operaciones de la base de datos y para las relaciones con otras entidades."
      },
      {
        id: 7210,
        moduloId: 703,
        pregunta: "El código de autor (cod_autor) no puede ser un atributo de libros.",
        recurso: {
          tipo: "imagen",
          contenido: "/images/mpo/modeloER.png",
          altText: "Diagrama entidad-relación para la biblioteca municipal"
        },
        opciones: [
          "Falso.",
          "Verdadero."
        ],
        respuestaCorrecta: 1,
        explicacion:
          "La afirmación es verdadera. El código de autor (cod_autor) no debe ser un atributo de la entidad libros porque existe una relación N:M entre libros y autores (un libro puede tener varios autores y un autor puede escribir varios libros). En el modelo relacional, esta relación N:M requerirá una tabla intermedia, y los códigos de autor no deben duplicarse en la tabla de libros."
      },
      {
        id: 7211,
        moduloId: 703,
        pregunta: "Selecciona la afirmación correcta sobre la relación entre socios y ejemplares:",
        recurso: {
          tipo: "imagen",
          contenido: "/images/mpo/modeloER.png",
          altText: "Diagrama entidad-relación para la biblioteca municipal"
        },
        opciones: [
          "Falta establecer la cardinalidad de la relación entre socios y ejemplares, que debería ser 1:1",
          "Falta establecer la cardinalidad de la relación entre socios y ejemplares, que debería ser 1:N",
          "Falta establecer la cardinalidad de la relación entre socios y ejemplares, que debería ser N:M"
        ],
        respuestaCorrecta: 2,
        explicacion:
          "La relación entre socios y ejemplares debe ser N:M (muchos a muchos), ya que un socio puede alquilar varios ejemplares (distintos o a lo largo del tiempo) y un mismo ejemplar puede ser alquilado por diferentes socios (en diferentes momentos). Esta relación N:M es la que contiene los atributos de fecha de alquiler y fecha de devolución."
      },
      {
        id: 7212,
        moduloId: 703,
        pregunta: "Selecciona la afirmación correcta sobre el atributo cod_libro en la entidad autores:",
        recurso: {
          tipo: "imagen",
          contenido: "/images/mpo/modeloER.png",
          altText: "Diagrama entidad-relación para la biblioteca municipal"
        },
        opciones: [
          "El atributo cod_libro no debe estar representado como atributo de la entidad autores.",
          "A Carlos se le ha olvidado incluir cod_libro como atributo de la entidad autores."
        ],
        respuestaCorrecta: 0,
        explicacion:
          "El atributo cod_libro no debe estar representado como atributo de la entidad autores. Esto sería incorrecto porque existe una relación N:M entre autores y libros (un autor puede escribir varios libros y un libro puede tener varios autores). Los identificadores de libros no deben ser atributos de autores; la relación entre estas entidades debe modelarse mediante una relación explícita."
      },
      {
        id: 7213,
        moduloId: 703,
        pregunta: "Selecciona la afirmación correcta sobre la relación entre autores y libros:",
        recurso: {
          tipo: "imagen",
          contenido: "/images/mpo/modeloER.png",
          altText: "Diagrama entidad-relación para la biblioteca municipal"
        },
        opciones: [
          "Falta establecer la cardinalidad de la relación entre autores y libros, que debería ser 1:1",
          "Falta establecer la cardinalidad de la relación entre autores y libros, que debería ser 1:N",
          "Falta establecer la cardinalidad de la relación entre autores y libros, que debería ser N:M"
        ],
        respuestaCorrecta: 2,
        explicacion:
          "La relación entre autores y libros debe ser N:M (muchos a muchos), ya que un autor puede escribir varios libros y un libro puede ser escrito por varios autores (coautoría). El enunciado menciona 'quién o quiénes lo escribieron', lo que indica la posibilidad de múltiples autores para un mismo libro."
      },
      {
        id: 7214,
        moduloId: 703,
        pregunta: "Selecciona la afirmación correcta sobre la entidad ejemplares:",
        recurso: {
          tipo: "imagen",
          contenido: "/images/mpo/modeloER.png",
          altText: "Diagrama entidad-relación para la biblioteca municipal"
        },
        opciones: [
          "Carlos ha hecho bien al indicar que ejemplares es una entidad fuerte.",
          "Carlos ha olvidado indicar que ejemplares es una entidad débil."
        ],
        respuestaCorrecta: 1,
        explicacion:
          "Ejemplares debería modelarse como una entidad débil porque su existencia depende completamente de la entidad libros. Un ejemplar siempre pertenece a un libro específico y no tiene sentido sin esa relación. Además, la identificación completa de un ejemplar probablemente requiera tanto el código del libro como un número de ejemplar, lo que es característico de las entidades débiles."
      },
      {
        id: 7215,
        moduloId: 703,
        pregunta: "Selecciona la afirmación correcta sobre el ISBN como posible AIP de libros:",
        recurso: {
          tipo: "imagen",
          contenido: "/images/mpo/modeloER.png",
          altText: "Diagrama entidad-relación para la biblioteca municipal"
        },
        opciones: [
          "El isbn, en caso de ser único, podría ser el AIP de la entidad libros pero no es funcional. Es mejor utilizar un identificador único del tipo cod_libro.",
          "El isbn no podría ser el AIP de la entidad libros aunque fuese único"
        ],
        respuestaCorrecta: 0,
        explicacion:
          "El ISBN podría técnicamente servir como AIP de la entidad libros ya que es un código estandarizado y único para cada libro publicado. Sin embargo, no es la mejor opción porque: 1) no todos los libros tienen ISBN (libros antiguos o auto-publicados), 2) el formato del ISBN ha cambiado con el tiempo (de 10 a 13 dígitos), y 3) diferentes ediciones del mismo libro tienen distintos ISBN. Por estas razones, es más funcional usar un código interno como cod_libro."
      },
      {
        id: 7216,
        moduloId: 703,
        pregunta: "La entidad teléfonos no debería existir, pues podríamos guardar los teléfonos de los socios en un atributo de la entidad socios.",
        recurso: {
          tipo: "imagen",
          contenido: "/images/mpo/modeloER.png",
          altText: "Diagrama entidad-relación para la biblioteca municipal"
        },
        opciones: [
          "Verdadero, porque así evitamos tener otra entidad.",
          "Falso, ya que necesitamos guardar varios teléfonos de un socio, y cada atributo debe tener un valor único."
        ],
        respuestaCorrecta: 1,
        explicacion:
          "La afirmación es falsa. No podemos guardar múltiples teléfonos en un solo atributo de la entidad socios porque violaría la primera forma normal, que requiere que cada atributo contenga valores atómicos (un solo valor). Como cada socio puede tener varios teléfonos, es correcto modelarlos como una entidad separada relacionada con socios, ya sea como una entidad débil o mediante una tabla asociativa en el modelo relacional."
      }
    ],
  };

  export default moduloBiblioteca;