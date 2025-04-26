/**
 * Datos del módulo de HTML Tablas perteneciente a la asignatura de Lenguaje de Marcas y Gestión de Sistemas de la Información.
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
 * // Importar el módulo de HTML Tablas
 * import moduloHTMLTablas from '@data/modulos/htmlTablas';
 *
 * function PreguntasAleatorias() {
 *   // Seleccionar 5 preguntas aleatorias del módulo
 *   const preguntasAleatorias = moduloHTMLTablas.preguntas
 *     .sort(() => 0.5 - Math.random())
 *     .slice(0, 5);
 *
 *   return (
 *     <div>
 *       <h2>{moduloHTMLTablas.nombre}</h2>
 *       {preguntasAleatorias.map(pregunta => (
 *         <QuestionCard key={pregunta.id} pregunta={pregunta} />
 *       ))}
 *     </div>
 *   );
 * }
 */
export const moduloHTMLTablas = {
    id: 406,
    nombre: "modulo 3 - HTML Tablas",
    esExamen: false,
    asignaturaId: 4,
    descripcion:
      "Creación y estructura de tablas en HTML, incluyendo filas, columnas, encabezados, combinación de celdas y otros aspectos avanzados para presentar datos tabulares.",
    preguntas: [
      {
        id: 4601,
        moduloId: 406,
        pregunta: "¿Cómo se combinan dos celdas horizontalmente en una tabla HTML?",
        opciones: [
          "Usando el atributo combine.",
          "Usando el atributo merge.",
          "Usando el atributo rowspan.",
          "Usando el atributo colspan.",
        ],
        respuestaCorrecta: 3,
        explicacion:
          "Para combinar dos o más celdas horizontalmente (a lo largo de una fila) en una tabla HTML, se utiliza el atributo colspan en la etiqueta <td> o <th>. Este atributo especifica cuántas columnas debe abarcar la celda. Por ejemplo, <td colspan=\"2\"> hará que la celda ocupe el espacio de dos columnas. Esto es útil para crear encabezados que abarcan múltiples columnas o para diseños de tabla más complejos. El valor del atributo debe ser un número entero positivo que indique la cantidad de columnas a combinar. A diferencia de colspan, el atributo rowspan se utiliza para combinar celdas verticalmente a través de múltiples filas.",
      },
      {
        id: 4602,
        moduloId: 406,
        pregunta: "¿Cómo se crea una tabla anidada en HTML?",
        opciones: [
          "Insertando una tabla <table> dentro de una celda <td>.",
          "Colocando una tabla <table> dentro de otra tabla <table>.",
          "Colocando una fila <tr> dentro de otra fila <tr>.",
          "Insertando una celda <td> dentro de una tabla <table>.",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "Para crear una tabla anidada en HTML, se inserta una tabla completa (<table>) dentro de una celda (<td>) de otra tabla. Esta técnica permite crear estructuras de datos más complejas o diseños más elaborados. La tabla anidada es independiente de la tabla principal y puede tener su propia estructura, estilo y formato. Por ejemplo: <table><tr><td><table><!-- tabla anidada aquí --></table></td></tr></table>. Es importante destacar que aunque técnicamente es posible anidar tablas, en el desarrollo web moderno se prefiere usar CSS Grid o Flexbox para layouts complejos, reservando las tablas para datos verdaderamente tabulares.",
      },
      {
        id: 4603,
        moduloId: 406,
        pregunta: "¿Cómo se define un dato dentro de una celda en HTML?",
        opciones: [
          "<tr>",
          "<table>",
          "<td>",
          "<th>",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "En HTML, se utiliza la etiqueta <td> (table data) para definir un dato dentro de una celda de tabla. Cada celda de datos se coloca dentro de una fila <tr> y contiene el contenido actual que se muestra en la tabla. Por ejemplo: <tr><td>Dato1</td><td>Dato2</td></tr>. A diferencia de <tr> que define una fila entera, <table> que define toda la tabla, o <th> que define una celda de encabezado con formato especial, <td> es específicamente para celdas de datos regulares. Las celdas <td> pueden contener texto, imágenes, enlaces, listas, e incluso otras tablas, lo que las hace muy versátiles para presentar diferentes tipos de información.",
      },
      {
        id: 4604,
        moduloId: 406,
        pregunta: "¿Cuál es el propósito de la etiqueta <caption> en una tabla HTML?",
        opciones: [
          "Agregar un encabezado de columna.",
          "Especificar una celda combinada.",
          "Añadir una descripción o título a la tabla.",
          "Definir el pie de la tabla.",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "La etiqueta <caption> en una tabla HTML tiene el propósito de añadir una descripción o título a la tabla. Esta etiqueta debe colocarse inmediatamente después de la etiqueta de apertura <table> y antes de cualquier otra etiqueta de tabla. Por ejemplo: <table><caption>Ventas Anuales por Departamento</caption>...</table>. El <caption> proporciona contexto sobre el contenido de la tabla y mejora la accesibilidad para usuarios de lectores de pantalla. Por defecto, los navegadores muestran el caption centrado sobre la tabla, aunque esta posición puede modificarse con CSS. A diferencia de los encabezados de columna (<th>) o el pie de tabla (<tfoot>), <caption> describe la tabla en su conjunto.",
      },
      {
        id: 4605,
        moduloId: 406,
        pregunta: "¿Cuál es la función de la etiqueta <th> dentro de una tabla HTML?",
        opciones: [
          "Definir un encabezado de celda de la tabla.",
          "Agregar un borde a la tabla.",
          "Definir el cuerpo de la tabla.",
          "Crear un enlace dentro de la tabla.",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "La función de la etiqueta <th> (table header) es definir un encabezado de celda dentro de una tabla HTML. A diferencia de las celdas normales <td>, las celdas <th> están diseñadas específicamente para contener información de encabezado que describe el contenido de una columna o fila. Por defecto, los navegadores aplican formato especial a las celdas <th>, mostrando su contenido en negrita y centrado. Además de las diferencias visuales, <th> tiene importancia semántica: indica a los lectores de pantalla y a los motores de búsqueda que el contenido es un encabezado, mejorando la accesibilidad y la estructura de la tabla. Se pueden usar atributos como scope=\"col\" o scope=\"row\" para especificar si el encabezado corresponde a una columna o fila.",
      },
      {
        id: 4606,
        moduloId: 406,
        pregunta: "¿Qué atributo de una celda permite combinar varias filas en una tabla HTML?",
        opciones: [
          "rowmerge",
          "rowspan",
          "colspan",
          "merge-rows",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "El atributo rowspan permite combinar varias filas en una celda de tabla HTML. Este atributo se aplica a elementos <td> o <th> e indica cuántas filas consecutivas debe abarcar esa celda verticalmente. Por ejemplo, <td rowspan=\"3\">Contenido</td> hará que la celda ocupe el espacio de tres filas. Cuando se usa rowspan, se deben omitir las celdas correspondientes en las filas siguientes para mantener la estructura correcta de la tabla. Este atributo es útil para crear diseños de tabla más complejos donde ciertos datos necesitan ocupar múltiples filas, como en organigramas o cuando se desea agrupar visualmente información relacionada. A diferencia de colspan que combina celdas horizontalmente, rowspan las combina verticalmente.",
      },
      {
        id: 4607,
        moduloId: 406,
        pregunta: "¿Qué atributo se utiliza para añadir bordes a una tabla en HTML?",
        opciones: [
          "style=\"border\"",
          "table-border",
          "border-style",
          "border",
        ],
        respuestaCorrecta: 3,
        explicacion:
          "El atributo border se utiliza tradicionalmente para añadir bordes a una tabla en HTML. Por ejemplo, <table border=\"1\"> muestra una tabla con bordes simples alrededor de todas las celdas y la tabla misma. El valor del atributo especifica el ancho del borde en píxeles. Sin embargo, es importante destacar que el atributo border está considerado obsoleto en HTML5, y la recomendación actual es usar CSS para estilizar tablas. La forma moderna de añadir bordes sería: <table style=\"border-collapse: collapse;\"> junto con reglas CSS como table, th, td { border: 1px solid black; }. Esto proporciona mayor control sobre el aspecto de los bordes, permitiendo personalizar colores, estilos y grosores de manera más flexible.",
      },
      {
        id: 4608,
        moduloId: 406,
        pregunta: "¿Qué etiqueta HTML se utiliza para definir una fila en una tabla?",
        opciones: [
          "<table>",
          "<tr>",
          "<thead>",
          "<td>",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "La etiqueta <tr> (table row) se utiliza para definir una fila en una tabla HTML. Cada fila actúa como un contenedor para las celdas, ya sean celdas de datos (<td>) o celdas de encabezado (<th>). Una tabla está estructurada con filas horizontales (definidas por <tr>) que contienen celdas individuales. La sintaxis básica es: <table><tr><td>Celda 1</td><td>Celda 2</td></tr></table>. A diferencia de <table> que define toda la tabla, <thead> que agrupa las filas de encabezado, o <td> que define una celda individual, <tr> específicamente crea la estructura horizontal de filas que constituye el esqueleto de la tabla. Todas las celdas deben estar contenidas dentro de elementos <tr> para mantener una estructura de tabla válida.",
      },
      {
        id: 4609,
        moduloId: 406,
        pregunta: "¿Qué etiqueta se utiliza para agrupar los encabezados de las columnas de una tabla?",
        opciones: [
          "<tfoot>",
          "<thead>",
          "<tr>",
          "<th>",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "La etiqueta <thead> se utiliza para agrupar los encabezados de las columnas de una tabla HTML. Esta etiqueta define una sección de encabezado dentro de la tabla y generalmente contiene una o más filas (<tr>) con celdas de encabezado (<th>). La estructura sería: <table><thead><tr><th>Encabezado 1</th><th>Encabezado 2</th></tr></thead>...</table>. El elemento <thead> proporciona significado semántico y estructural, indicando claramente qué parte de la tabla contiene información de encabezado. Esto es útil para la accesibilidad y permite aplicar estilos específicos a esta sección. <thead> suele usarse junto con <tbody> (cuerpo de la tabla) y <tfoot> (pie de tabla) para organizar lógicamente las diferentes partes de tablas complejas.",
      },
      {
        id: 4610,
        moduloId: 406,
        pregunta: "¿Qué etiqueta se utiliza para crear una tabla en HTML?",
        opciones: [
          "<table>",
          "<td>",
          "<th>",
          "<tr>",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "La etiqueta <table> se utiliza para crear una tabla en HTML. Esta etiqueta define el contenedor principal que alberga todos los elementos relacionados con la tabla, como filas, celdas, encabezados y pies de tabla. Una estructura básica sería: <table><tr><td>Contenido</td></tr></table>. El elemento <table> actúa como el elemento raíz para la estructura de datos tabular, y dentro de él se pueden usar elementos como <caption> (título de la tabla), <thead> (sección de encabezado), <tbody> (cuerpo principal), <tfoot> (pie de tabla), <tr> (filas), <th> (celdas de encabezado) y <td> (celdas de datos). En HTML5, se recomienda usar tablas solo para presentar datos tabulares, no para diseño de página, para lo cual se prefiere usar CSS Grid o Flexbox.",
      },
    ],
  };

  export default moduloHTMLTablas;