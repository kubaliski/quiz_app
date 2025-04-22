/**
 * Datos del módulo de HTML y CSS Layout perteneciente a la asignatura de Lenguaje de Marcas y Gestión de Sistemas de la Información.
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
 * // Importar el módulo de HTML y CSS Layout
 * import moduloHTMLCSSLayout from '@data/modulos/htmlCSSLayout';
 *
 * function PreguntasAleatorias() {
 *   // Seleccionar 5 preguntas aleatorias del módulo
 *   const preguntasAleatorias = moduloHTMLCSSLayout.preguntas
 *     .sort(() => 0.5 - Math.random())
 *     .slice(0, 5);
 *
 *   return (
 *     <div>
 *       <h2>{moduloHTMLCSSLayout.nombre}</h2>
 *       {preguntasAleatorias.map(pregunta => (
 *         <QuestionCard key={pregunta.id} pregunta={pregunta} />
 *       ))}
 *     </div>
 *   );
 * }
 */
export const moduloHTMLCSSLayout = {
    id: 409,
    nombre: "HTML y CSS Layout",
    asignaturaId: 4,
    descripcion:
      "Estructura HTML semántica, etiquetas principales y sistemas de layout en CSS, incluyendo Flexbox y Grid para la maquetación de páginas web modernas.",
    preguntas: [
      {
        id: 4901,
        moduloId: 409,
        pregunta: "¿Cuál es la etiqueta principal que agrupa todo el contenido de una página web en HTML?",
        opciones: [
          "<body>",
          "<footer>",
          "<head>",
          "<main>",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "La etiqueta <body> es la que agrupa todo el contenido visible de una página web en HTML. Esta etiqueta es un elemento fundamental de la estructura básica de cualquier documento HTML y contiene todo lo que se muestra en el navegador: texto, imágenes, enlaces, tablas, listas, formularios, etc. A diferencia de <head> que contiene metadatos y enlaces a recursos externos (como CSS o JavaScript), <body> es donde se encuentra el contenido real que los usuarios ven e interactúan. Las etiquetas <footer> y <main> son elementos semánticos que se utilizan dentro del <body> para indicar secciones específicas de la página (el pie de página y el contenido principal respectivamente), pero no contienen toda la estructura visible del documento.",
      },
      {
        id: 4902,
        moduloId: 409,
        pregunta: "En el siguiente código, ¿qué falta para que el nav se muestre correctamente?",
        recurso: {
          tipo: "codigo",
          contenido: `<nav>
          <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Servicios</a></li>
          </ul>
      </nav>`,
          lenguaje: "html"
        },
        opciones: [
          "Falta la etiqueta <menu>",
          "Nada, el código es correcto",
          "Falta la etiqueta <header>",
          "Falta display: flex; en CSS"
        ],
        respuestaCorrecta: 1,
        explicacion: "El código HTML proporcionado para el menú de navegación es sintácticamente correcto y completo desde el punto de vista de la estructura HTML. Utiliza la etiqueta semántica <nav> para indicar que es una sección de navegación, contiene una lista no ordenada <ul> con elementos de lista <li>, cada uno con un enlace <a>. Esta es una estructura estándar y válida para crear menús de navegación en HTML. No es necesario incluir la etiqueta <nav> dentro de un <header> (aunque es común hacerlo), ni se requiere una etiqueta <menu> (que tiene un propósito diferente). En cuanto a estilos, aunque display: flex; en CSS sería útil para mejorar la apariencia del menú (por ejemplo, para mostrar los elementos horizontalmente en lugar de verticalmente), no es un requisito para que el HTML sea válido o funcional; es una cuestión de presentación, no de estructura."
      },
      {
        id: 4903,
        moduloId: 409,
        pregunta: "¿Cuál es la diferencia entre <header> y <head> en HTML?",
        opciones: [
          "<head> es obligatorio, <header> no",
          "<header> se usa para SEO, <head> no",
          "<header> es el encabezado visible de la página, <head> contiene metadatos y enlaces a CSS",
          "<header> solo puede usarse dentro de <body>, mientras <head> no",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "La principal diferencia entre <header> y <head> radica en su propósito y ubicación: <head> es un elemento estructural que contiene metadatos (información sobre el documento) y enlaces a recursos externos como CSS, JavaScript y fuentes. No es visible para el usuario y se coloca antes del <body>. Por otro lado, <header> es un elemento semántico visible que representa el encabezado introductorio de una sección o página, generalmente contiene elementos como logotipos, títulos, navegación principal o información introductoria. El <header> se coloca dentro del <body> y puede aparecer múltiples veces en un documento (para diferentes secciones), mientras que <head> solo aparece una vez, al inicio del documento HTML.",
      },
      {
        id: 4904,
        moduloId: 409,
        pregunta: "¿Qué etiqueta se usa para incluir una imagen en HTML?",
        opciones: [
          "<picture>",
          "<img>",
          "<image>",
          "<media>",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "La etiqueta <img> es la que se utiliza para incluir imágenes en HTML. Esta etiqueta es un elemento vacío (no tiene etiqueta de cierre) y requiere al menos el atributo src para especificar la ruta de la imagen. Por ejemplo: <img src=\"ruta/a/imagen.jpg\" alt=\"Descripción de la imagen\">. El atributo alt proporciona un texto alternativo para accesibilidad y SEO. Aunque <picture> también está relacionada con imágenes, se utiliza para implementar imágenes responsive con múltiples fuentes según condiciones específicas, conteniendo elementos <source> y un <img> como fallback. Las etiquetas <image> y <media> no son elementos HTML estándar para incluir imágenes (<image> existe en SVG pero no en HTML regular, y <media> no existe en HTML).",
      },
      {
        id: 4905,
        moduloId: 409,
        pregunta: "¿Cuál de los siguientes atributos se usa en la etiqueta <img> para definir la imagen en caso de que no cargue?",
        opciones: [
          "title",
          "src",
          "href",
          "alt",
        ],
        respuestaCorrecta: 3,
        explicacion:
          "El atributo alt (alternative text) se usa en la etiqueta <img> para definir un texto alternativo que se mostrará en caso de que la imagen no pueda cargarse. Además de servir como respaldo visual cuando la imagen falla, el texto alternativo cumple funciones cruciales para la accesibilidad web: es leído por lectores de pantalla para usuarios con discapacidad visual, proporciona contexto cuando las imágenes están desactivadas o la conexión es lenta, y contribuye al SEO ayudando a los motores de búsqueda a entender el contenido de la imagen. A diferencia de title que muestra un tooltip al pasar el cursor, src que especifica la URL de la imagen, o href que se usa en enlaces y no en imágenes, alt está específicamente diseñado para describir el contenido y función de la imagen cuando esta no es visible.",
      },
      {
        id: 4906,
        moduloId: 409,
        pregunta: "¿Qué hace box-sizing: border-box; en CSS?",
        opciones: [
          "Hace que los elementos se comporten como bloques",
          "Hace que el ancho y alto del elemento sea automático",
          "No tiene ningún efecto en los estilos",
          "Incluye el padding y border dentro del tamaño total del elemento",
        ],
        respuestaCorrecta: 3,
        explicacion:
          "La propiedad box-sizing: border-box; en CSS hace que el padding y el border se incluyan dentro del ancho y alto total declarado para el elemento, en lugar de añadirse por fuera. En el modelo de caja estándar (content-box), cuando se establece un ancho de 300px a un elemento y luego se añade un padding de 20px y un borde de 1px, el ancho total ocupado será 342px (300 + 20*2 + 1*2). Con border-box, el ancho total se mantiene en 300px, y el espacio disponible para el contenido se reduce para acomodar el padding y el borde. Esta propiedad facilita enormemente el diseño y la maquetación, ya que el tamaño declarado será siempre el tamaño final del elemento, independientemente del padding o borde que se aplique posteriormente.",
      },
      {
        id: 4907,
        moduloId: 409,
        pregunta: "En display: flex;, ¿qué propiedad se usa para centrar horizontalmente los elementos?",
        opciones: [
          "align-self",
          "align-items",
          "flex-direction",
          "justify-content",
        ],
        respuestaCorrecta: 3,
        explicacion:
          "En un contenedor con display: flex;, la propiedad justify-content se utiliza para alinear los elementos flexibles horizontalmente (a lo largo del eje principal, que por defecto es horizontal). Para centrar los elementos horizontalmente, se usa justify-content: center;. Esta propiedad controla la distribución del espacio a lo largo del eje principal y ofrece valores como flex-start (alinea al inicio), flex-end (alinea al final), space-between (distribuye uniformemente con espacio entre elementos), space-around (distribuye uniformemente con espacio alrededor de elementos), y space-evenly (distribuye el espacio de manera uniforme). Por otro lado, align-items se usa para alineación vertical (en el eje cruzado), align-self para alineación individual de un elemento, y flex-direction define la dirección del eje principal.",
      },
      {
        id: 4908,
        moduloId: 409,
        pregunta: "¿Qué valor de justify-content coloca los elementos al inicio del contenedor?",
        opciones: [
          "flex-start",
          "space-between",
          "center",
          "flex-end",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "El valor flex-start de la propiedad justify-content coloca los elementos al inicio del contenedor flexbox. En un contenedor con dirección de fila (el valor por defecto de flex-direction), flex-start alinea los elementos al borde izquierdo del contenedor en idiomas de izquierda a derecha como el español o inglés (o al borde derecho en idiomas de derecha a izquierda). Si el contenedor tiene flex-direction: column, flex-start alinea los elementos en la parte superior del contenedor. A diferencia de center que los centra, flex-end que los coloca al final, o space-between que distribuye los elementos con espacio máximo entre ellos, flex-start específicamente agrupa los elementos al inicio del eje principal, sin espacio adicional antes del primer elemento.",
      },
      {
        id: 4909,
        moduloId: 409,
        pregunta: "¿Cuál de las siguientes opciones haría que los elementos dentro de un contenedor Flexbox se coloquen en una columna en lugar de una fila?",
        opciones: [
          "justify-content: center;",
          "flex-direction: column;",
          "align-items: center;",
          "display: grid;",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "La propiedad flex-direction: column; hace que los elementos dentro de un contenedor Flexbox se coloquen en una columna vertical en lugar de una fila horizontal (que es el comportamiento predeterminado). Esta propiedad define la dirección del eje principal en Flexbox, cambiando fundamentalmente cómo se organizan los elementos. Cuando se establece en column, los elementos se apilan verticalmente de arriba hacia abajo. Esto también intercambia los ejes principal y cruzado, por lo que justify-content ahora controla la alineación vertical y align-items la alineación horizontal. A diferencia de justify-content y align-items que solo controlan la alineación pero no la dirección, o display: grid que cambiaría completamente el sistema de layout, flex-direction modifica específicamente la orientación de los elementos flexibles.",
      },
      {
        id: 4910,
        moduloId: 409,
        pregunta: "¿Qué hace flex-wrap: wrap; en un contenedor Flexbox?",
        opciones: [
          "Los hace flexibles dentro del contenedor",
          "No tiene ningún efecto",
          "Permite que los elementos se ajusten a nuevas líneas si no caben en la misma",
          "Hace que los elementos se centren",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "La propiedad flex-wrap: wrap; en un contenedor Flexbox permite que los elementos se ajusten a nuevas líneas (o columnas, dependiendo de flex-direction) si no caben todos en una sola línea. Por defecto, Flexbox intenta colocar todos los elementos en una sola línea (flex-wrap: nowrap), lo que puede causar que los elementos se compriman o desborden el contenedor si no hay suficiente espacio. Al aplicar flex-wrap: wrap, cuando los elementos no pueden encajar todos en el ancho (o alto) disponible, se moverán automáticamente a la siguiente línea, creando un diseño multi-línea que se adapta al espacio disponible. Esta propiedad es especialmente útil para diseños responsivos, ya que permite que los elementos se reorganicen según el tamaño de la pantalla sin necesidad de media queries adicionales.",
      },
      {
        id: 4911,
        moduloId: 409,
        pregunta: "¿Qué propiedad define el número de columnas en CSS Grid?",
        opciones: [
          "grid-template-columns",
          "grid-auto-columns",
          "display: grid;",
          "grid-template-rows",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "La propiedad grid-template-columns define el número y tamaño de las columnas en CSS Grid. Esta propiedad permite crear la estructura de columnas de la cuadrícula especificando el ancho de cada columna. Por ejemplo, grid-template-columns: 100px 200px 100px; crea tres columnas con los anchos especificados. Se pueden usar diferentes unidades como píxeles, porcentajes, fracciones (fr), o funciones como minmax() y repeat(). A diferencia de grid-auto-columns que define el tamaño de columnas creadas implícitamente, display: grid que solo activa el layout de cuadrícula sin definir su estructura, o grid-template-rows que controla las filas en lugar de las columnas, grid-template-columns está específicamente diseñada para configurar explícitamente la estructura horizontal de la cuadrícula.",
      },
      {
        id: 4912,
        moduloId: 409,
        pregunta: "¿Cuál de las siguientes declaraciones CSS crearía una cuadrícula de 3 columnas de igual tamaño?\n\n.grid-container {\n    display: grid;\n    ______;\n}",
        opciones: [
          "grid-template: 3fr;",
          "grid-template-columns: auto;",
          "grid-template-rows: 3;",
          "grid-template-columns: 1fr 1fr 1fr;",
        ],
        respuestaCorrecta: 3,
        explicacion:
          "La declaración grid-template-columns: 1fr 1fr 1fr; crearía una cuadrícula de 3 columnas de igual tamaño. En CSS Grid, la unidad fr (fracción) representa una parte del espacio disponible en el contenedor. Al usar el mismo valor (1fr) para cada columna, se distribuye el espacio equitativamente entre ellas. Esta sintaxis indica explícitamente que queremos 3 columnas, cada una ocupando la misma fracción del espacio disponible. Alternativamente, se podría usar grid-template-columns: repeat(3, 1fr); para lograr el mismo resultado de forma más concisa. Las otras opciones no lograrían el resultado deseado: grid-template: 3fr; no es una sintaxis válida para este propósito, grid-template-columns: auto; crearía solo una columna, y grid-template-rows: 3; definiría filas, no columnas.",
      },
      {
        id: 4913,
        moduloId: 409,
        pregunta: "En el siguiente código, ¿qué elemento ocupará más espacio?",
        recurso: {
          tipo: "codigo",
          contenido: `.grid-container {
          display: grid;
          grid-template-columns: 1fr 2fr 1fr;
      }`,
          lenguaje: "css"
        },
        opciones: [
          "El primer elemento",
          "Todos ocupan el mismo tamaño",
          "El tercer elemento",
          "El segundo elemento"
        ],
        respuestaCorrecta: 3,
        explicacion: "En el código dado, el segundo elemento ocupará más espacio. La declaración grid-template-columns: 1fr 2fr 1fr; define tres columnas donde la segunda columna tiene el doble de ancho que las otras dos. La unidad fr (fracción) en CSS Grid representa una parte proporcional del espacio disponible. En este caso, el espacio total se divide en 4 partes (1+2+1), y se asigna 1/4 del espacio a la primera columna, 2/4 (o 1/2) a la segunda, y 1/4 a la tercera. Por lo tanto, el elemento que se coloque en la segunda columna ocupará más espacio horizontal que los elementos en la primera o tercera columna. Si imaginamos un contenedor de 1000px, la distribución aproximada sería: primera columna 250px, segunda columna 500px, tercera columna 250px."
      },
      {
        id: 4914,
        moduloId: 409,
        pregunta: "En el siguiente código, ¿qué elemento ocupará más espacio?\n\n.grid-container {\n    display: grid;\n    grid-template-columns: 1fr 2fr 1fr;\n}",
        opciones: [
          "El primer elemento",
          "Todos ocupan el mismo tamaño",
          "El tercer elemento",
          "El segundo elemento",
        ],
        respuestaCorrecta: 3,
        explicacion:
          "En el código dado, el segundo elemento ocupará más espacio. La declaración grid-template-columns: 1fr 2fr 1fr; define tres columnas donde la segunda columna tiene el doble de ancho que las otras dos. La unidad fr (fracción) en CSS Grid representa una parte proporcional del espacio disponible. En este caso, el espacio total se divide en 4 partes (1+2+1), y se asigna 1/4 del espacio a la primera columna, 2/4 (o 1/2) a la segunda, y 1/4 a la tercera. Por lo tanto, el elemento que se coloque en la segunda columna ocupará más espacio horizontal que los elementos en la primera o tercera columna. Si imaginamos un contenedor de 1000px, la distribución aproximada sería: primera columna 250px, segunda columna 500px, tercera columna 250px.",
      },
      {
        id: 4915,
        moduloId: 409,
        pregunta: "¿Cómo se asigna un área específica en una Grid usando grid-template-areas?",
        opciones: [
          "grid-area: \"main\";",
          "grid-template-areas: \"header header\" \"main sidebar\";",
          "grid-template: \"header header\" \"main sidebar\";",
          "grid-template: columns 1fr 2fr;",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "Para asignar áreas específicas en una cuadrícula CSS, se utiliza la propiedad grid-template-areas con una sintaxis como grid-template-areas: \"header header\" \"main sidebar\";. Esta declaración crea un plano visual de la cuadrícula, donde cada cadena entre comillas representa una fila, y cada palabra dentro de la cadena representa una celda en esa fila. En el ejemplo, se define una cuadrícula de 2×2 donde la primera fila completa es un área llamada \"header\", y la segunda fila se divide en dos áreas: \"main\" y \"sidebar\". Para que los elementos ocupen estas áreas, se les asigna grid-area: header; (o main, sidebar, etc.). Esta técnica permite crear diseños complejos de forma visual e intuitiva, facilitando la comprensión de la estructura de la página. Los nombres de área deben ser consistentes para que la cuadrícula sea válida.",
      },
      {
        id: 4916,
        moduloId: 409,
        pregunta: "¿Cuál es la diferencia entre <article> y <section> en HTML?",
        opciones: [
          "<section> siempre necesita un título, <article> no",
          "No hay ninguna diferencia entre ambas",
          "<article> se usa para contenido independiente, mientras <section> agrupa contenido relacionado",
          "<article> es solo para blogs, <section> es para cualquier página",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "La principal diferencia entre <article> y <section> en HTML es que <article> se utiliza para contenido que es independiente y autocontenido, que podría distribuirse o reutilizarse por separado del resto de la página (como entradas de blog, comentarios, widgets interactivos o cualquier contenido que tenga sentido por sí mismo). Por otro lado, <section> se utiliza para agrupar contenido temáticamente relacionado dentro de un documento, que generalmente incluye un encabezado. Mientras que un <article> podría existir de forma aislada, un <section> suele ser parte de un todo más grande. Esta distinción es semántica y ayuda a los navegadores, motores de búsqueda y tecnologías de asistencia a entender mejor la estructura y jerarquía del contenido.",
      },
      {
        id: 4917,
        moduloId: 409,
        pregunta: "En CSS Grid, ¿qué significa repeat(3, 1fr) en grid-template-columns?",
        opciones: [
          "Hace que las filas sean responsivas",
          "Divide el contenido en 3 partes iguales sin importar el tamaño",
          "Crea 3 filas con igual tamaño",
          "Crea 3 columnas de igual tamaño",
        ],
        respuestaCorrecta: 3,
        explicacion:
          "En CSS Grid, repeat(3, 1fr) en grid-template-columns crea 3 columnas de igual tamaño. La función repeat() es un atajo que permite repetir valores sin tener que escribirlos múltiples veces. En este caso, repeat(3, 1fr) es equivalente a escribir 1fr 1fr 1fr. La unidad fr (fracción) distribuye el espacio disponible proporcionalmente, por lo que cada columna ocupará 1/3 del espacio total. Esta sintaxis es especialmente útil cuando se necesitan muchas columnas o filas del mismo tamaño, o cuando se combina con otros valores, como en grid-template-columns: 200px repeat(3, 1fr) 200px;. La función repeat() también acepta patrones más complejos, como repeat(3, 1fr 2fr) que crearía 6 columnas alternando entre 1fr y 2fr.",
      },
      {
        id: 4918,
        moduloId: 409,
        pregunta: "¿Cuál es la función de grid-auto-rows en CSS Grid?",
        opciones: [
          "Define el tamaño de las filas creadas automáticamente",
          "Asegura que todas las filas sean del mismo tamaño",
          "Establece el orden de las columnas en la cuadrícula",
          "Hace que los elementos floten dentro de la cuadrícula",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "La función de grid-auto-rows en CSS Grid es definir el tamaño de las filas que se crean automáticamente cuando el contenido excede las filas explícitamente definidas con grid-template-rows. Cuando se colocan elementos en posiciones que están fuera de la cuadrícula explícita, el navegador crea filas implícitas, y grid-auto-rows especifica qué tamaño deben tener estas filas adicionales. Por ejemplo, grid-auto-rows: 100px; hará que todas las filas creadas automáticamente tengan 100px de altura. También se pueden usar valores como auto, minmax(), o fr. Esta propiedad es especialmente útil cuando el número de elementos o la cantidad de contenido es dinámico e impredecible, garantizando que cualquier fila adicional tenga dimensiones consistentes sin necesidad de definirlas explícitamente.",
      },
      {
        id: 4919,
        moduloId: 409,
        pregunta: "¿Qué pasaría si se usa display: grid; sin definir grid-template-columns o grid-template-rows?",
        opciones: [
          "Todos los elementos se apilarán en una sola columna",
          "Se comportará como display: flex;",
          "Los elementos desaparecerán",
          "Se generará una cuadrícula automática con filas y columnas iguales",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "Si se usa display: grid; sin definir grid-template-columns o grid-template-rows, todos los elementos hijos se apilarán en una sola columna. Esto ocurre porque el comportamiento predeterminado de CSS Grid crea una cuadrícula con una sola columna que abarca todo el ancho disponible y tantas filas como sean necesarias para contener los elementos. Cada elemento hijo ocupará su propia fila, similar a cómo se comportarían los elementos de bloque normales, pero con la diferencia de que ahora están dentro de un contexto de cuadrícula y pueden beneficiarse de propiedades específicas de Grid para alineación y posicionamiento. Para crear una disposición con múltiples columnas, es necesario definir explícitamente la estructura de columnas usando grid-template-columns.",
      },
      {
        id: 4920,
        moduloId: 409,
        pregunta: "¿Cómo se haría para que un solo elemento ocupe varias columnas en CSS Grid?",
        opciones: [
          "grid-template-columns: 2fr 1fr;",
          "grid-column: span 2;",
          "grid-area: \"header main main footer\";",
          "grid-column-start: auto;",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "Para hacer que un solo elemento ocupe varias columnas en CSS Grid, se utiliza la propiedad grid-column: span 2; (o cualquier número de columnas que se desee abarcar). Esta declaración indica que el elemento debe extenderse a lo largo de 2 columnas consecutivas en la cuadrícula. La propiedad grid-column es un atajo que combina grid-column-start y grid-column-end, y la palabra clave span seguida de un número indica cuántas columnas debe abarcar el elemento. También se puede lograr el mismo resultado con grid-column: 1 / 3; (que significa \"comienza en la línea 1 y termina en la línea 3\", abarcando 2 columnas). Esta técnica es útil para crear diseños donde ciertos elementos, como encabezados o imágenes destacadas, necesitan más espacio horizontal que otros elementos en la misma cuadrícula.",
      },
    ],
  };

  export default moduloHTMLCSSLayout;