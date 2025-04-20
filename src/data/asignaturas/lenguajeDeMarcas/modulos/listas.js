/**
 * Datos del módulo de HTML Listas perteneciente a la asignatura de Lenguaje de Marcas y Gestión de Sistemas de la Información.
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
 * // Importar el módulo de HTML Listas
 * import moduloHTMLListas from '@data/modulos/htmlListas';
 *
 * function PreguntasAleatorias() {
 *   // Seleccionar 5 preguntas aleatorias del módulo
 *   const preguntasAleatorias = moduloHTMLListas.preguntas
 *     .sort(() => 0.5 - Math.random())
 *     .slice(0, 5);
 *
 *   return (
 *     <div>
 *       <h2>{moduloHTMLListas.nombre}</h2>
 *       {preguntasAleatorias.map(pregunta => (
 *         <QuestionCard key={pregunta.id} pregunta={pregunta} />
 *       ))}
 *     </div>
 *   );
 * }
 */
export const moduloHTMLListas = {
    id: 407,
    nombre: "modulo 4 - HTML Listas",
    asignaturaId: 4,
    descripcion:
      "Creación y personalización de diferentes tipos de listas en HTML, incluyendo ordenadas, desordenadas y de definición, así como sus atributos y propiedades.",
    preguntas: [
      {
        id: 4701,
        moduloId: 407,
        pregunta: "¿Cómo se define una lista ordenada que comience con el número 5?",
        opciones: [
          "<ol begin=\"5\">",
          "<ol start=\"5\">",
          "<ol initial=\"5\">",
          "<ol value=\"5\">",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "La forma correcta de definir una lista ordenada que comience con el número 5 es usando el atributo start: <ol start=\"5\">. Este atributo especifica el valor inicial para la numeración de la lista ordenada. El valor debe ser un número entero, y la lista comenzará a numerarse desde ese valor. Por ejemplo, <ol start=\"5\"><li>Elemento 1</li><li>Elemento 2</li></ol> mostrará una lista numerada como \"5. Elemento 1\" seguido de \"6. Elemento 2\". Este atributo es especialmente útil cuando se quiere continuar la numeración después de texto intercalado o cuando se necesitan subsecciones numeradas dentro de un documento.",
      },
      {
        id: 4702,
        moduloId: 407,
        pregunta: "¿Cuál es el resultado de usar la etiqueta <ul> en HTML?",
        opciones: [
          "Una lista numerada.",
          "Una lista jerárquica.",
          "Una lista con definiciones.",
          "Una lista con viñetas.",
        ],
        respuestaCorrecta: 3,
        explicacion:
          "El resultado de usar la etiqueta <ul> (Unordered List) en HTML es crear una lista con viñetas. A diferencia de las listas ordenadas (<ol>) que muestran elementos numerados o letrados en secuencia, las listas desordenadas presentan cada elemento precedido por un símbolo, típicamente un punto negro circular (bullet). Estas listas se utilizan cuando el orden de los elementos no es relevante. Por defecto, cada navegador puede mostrar un estilo de viñeta diferente, pero esto puede personalizarse con CSS. La sintaxis básica es: <ul><li>Elemento 1</li><li>Elemento 2</li></ul>, donde cada <li> representa un elemento de la lista.",
      },
      {
        id: 4703,
        moduloId: 407,
        pregunta: "¿Qué atributo se puede usar para cambiar el tipo de numeración en una lista ordenada?",
        opciones: [
          "type",
          "order",
          "numbering",
          "style",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "El atributo type se puede usar para cambiar el tipo de numeración en una lista ordenada (<ol>). Este atributo acepta varios valores que modifican el estilo de los marcadores: \"1\" para números arábigos (por defecto: 1, 2, 3...), \"A\" para letras mayúsculas (A, B, C...), \"a\" para letras minúsculas (a, b, c...), \"I\" para números romanos mayúsculos (I, II, III...) y \"i\" para números romanos minúsculos (i, ii, iii...). Por ejemplo: <ol type=\"A\"><li>Primer elemento</li><li>Segundo elemento</li></ol> mostrará \"A. Primer elemento\" seguido de \"B. Segundo elemento\". Aunque el atributo type sigue siendo compatible con los navegadores actuales, en HTML5 se recomienda usar CSS (list-style-type) para estilizar las listas.",
      },
      {
        id: 4704,
        moduloId: 407,
        pregunta: "¿Qué atributo se usa en una lista desordenada para cambiar el estilo de las viñetas?",
        opciones: [
          "style",
          "shape",
          "bullet",
          "type",
        ],
        respuestaCorrecta: 3,
        explicacion:
          "Históricamente, el atributo type se ha usado en una lista desordenada (<ul>) para cambiar el estilo de las viñetas. Este atributo acepta valores como \"disc\" (círculo relleno, el predeterminado), \"circle\" (círculo vacío) y \"square\" (cuadrado). Por ejemplo: <ul type=\"square\"><li>Elemento con viñeta cuadrada</li></ul>. Sin embargo, es importante destacar que este atributo está obsoleto en HTML5, y la práctica recomendada actual es usar CSS para estilizar las viñetas mediante la propiedad list-style-type, que ofrece más opciones y mejor control. La forma moderna sería: ul { list-style-type: square; } en una hoja de estilos CSS.",
      },
      {
        id: 4705,
        moduloId: 407,
        pregunta: "¿Qué etiqueta define la descripción de un término en una lista de definiciones?",
        opciones: [
          "<dt>",
          "<dd>",
          "<dl>",
          "<li>",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "La etiqueta <dd> (Definition Description) define la descripción de un término en una lista de definiciones. En una lista de definiciones, cada término (<dt>) va seguido de una o más descripciones (<dd>) que proporcionan la definición o explicación del término. La estructura típica es: <dl><dt>Término</dt><dd>Descripción del término</dd></dl>. La etiqueta <dd> normalmente se muestra con una sangría con respecto al término que describe. A diferencia de <dt> que marca el término a definir, <dl> que contiene toda la lista de definiciones, o <li> que se usa en listas ordenadas y desordenadas, <dd> está específicamente diseñada para proporcionar la descripción o definición dentro de una lista de definiciones.",
      },
      {
        id: 4706,
        moduloId: 407,
        pregunta: "¿Qué etiqueta define un elemento de una lista (ya sea ordenada o desordenada)?",
        opciones: [
          "<ol>",
          "<ul>",
          "<dt>",
          "<li>",
        ],
        respuestaCorrecta: 3,
        explicacion:
          "La etiqueta <li> (List Item) define un elemento o ítem dentro de una lista, ya sea ordenada (<ol>) o desordenada (<ul>). Cada <li> representa un punto o entrada individual en la lista. Por ejemplo: <ul><li>Primer elemento</li><li>Segundo elemento</li></ul>. El navegador automáticamente añade el marcador apropiado (número, letra o viñeta) según el tipo de lista. A diferencia de <ol> y <ul> que son contenedores que definen el tipo de lista, <dt> que define un término en una lista de definiciones, la etiqueta <li> representa específicamente cada elemento individual dentro de la lista. Los elementos <li> deben ser hijos directos de elementos <ol>, <ul> o <menu> para formar una estructura de lista válida.",
      },
      {
        id: 4707,
        moduloId: 407,
        pregunta: "¿Qué etiqueta define un término en una lista de definiciones?",
        opciones: [
          "<dl>",
          "<dt>",
          "<li>",
          "<dd>",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "La etiqueta <dt> (Definition Term) define un término o nombre en una lista de definiciones. En una lista de definiciones, cada término (<dt>) generalmente va seguido de su descripción o definición (<dd>). Por ejemplo: <dl><dt>HTML</dt><dd>Lenguaje de marcado para crear páginas web</dd></dl>. La etiqueta <dt> se utiliza para el término que será definido, mientras que <dd> contiene la definición o descripción de ese término. A diferencia de <dl> que es el contenedor de toda la lista de definiciones, <li> que se usa en listas ordenadas o desordenadas, o <dd> que contiene la descripción, <dt> está específicamente diseñada para marcar el término o concepto que se va a definir.",
      },
      {
        id: 4708,
        moduloId: 407,
        pregunta: "¿Qué etiqueta se utiliza para crear una lista desordenada en HTML?",
        opciones: [
          "<ul>",
          "<li>",
          "<dl>",
          "<ol>",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "La etiqueta <ul> (Unordered List) se utiliza para crear una lista desordenada en HTML. Este tipo de lista presenta elementos precedidos por viñetas o bullets en lugar de números o letras, indicando que el orden de los elementos no es relevante. La estructura básica es: <ul><li>Elemento 1</li><li>Elemento 2</li></ul>. Por defecto, los navegadores muestran estos elementos con viñetas circulares, aunque el estilo puede modificarse con CSS. A diferencia de <ol> que crea listas numeradas, <dl> que define listas de definiciones, o <li> que representa un elemento individual dentro de una lista, <ul> específicamente crea el contenedor para una lista no secuencial donde los elementos no tienen un orden específico de importancia.",
      },
      {
        id: 4709,
        moduloId: 407,
        pregunta: "¿Qué etiqueta se utiliza para crear una lista ordenada en HTML?",
        opciones: [
          "<dl>",
          "<ul>",
          "<ol>",
          "<li>",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "La etiqueta <ol> (Ordered List) se utiliza para crear una lista ordenada en HTML. Este tipo de lista muestra elementos numerados o letrados secuencialmente, indicando que el orden de los elementos es importante. La estructura básica es: <ol><li>Primer paso</li><li>Segundo paso</li></ol>. Por defecto, los navegadores muestran los elementos con números arábigos (1, 2, 3...), pero se puede cambiar el tipo de numeración con el atributo type o con CSS. Las listas ordenadas son ideales para instrucciones secuenciales, clasificaciones, o cualquier contenido donde el orden sea relevante. A diferencia de <ul> que crea listas con viñetas, <dl> para listas de definiciones, o <li> que define un elemento individual, <ol> específicamente crea el contenedor para una lista donde la secuencia es significativa.",
      },
      {
        id: 4710,
        moduloId: 407,
        pregunta: "¿Qué tipo de lista utiliza las etiquetas <dl>, <dt> y <dd>?",
        opciones: [
          "Lista ordenada.",
          "Lista de definiciones.",
          "Lista numerada.",
          "Lista desordenada.",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "Las etiquetas <dl>, <dt> y <dd> se utilizan para crear una lista de definiciones en HTML. Este tipo de lista está diseñada específicamente para presentar términos y sus definiciones o descripciones correspondientes. En esta estructura, <dl> (Definition List) actúa como el contenedor principal de la lista, <dt> (Definition Term) marca cada término o concepto a definir, y <dd> (Definition Description) contiene la definición o explicación de ese término. Por ejemplo: <dl><dt>HTML</dt><dd>Lenguaje de marcado para crear páginas web</dd><dt>CSS</dt><dd>Lenguaje para estilizar páginas web</dd></dl>. A diferencia de las listas ordenadas (<ol>) o desordenadas (<ul>) que muestran elementos en secuencia o con viñetas, las listas de definiciones están optimizadas para pares de términos y explicaciones, como glosarios, directorios o diccionarios.",
      },
    ],
  };

  export default moduloHTMLListas;