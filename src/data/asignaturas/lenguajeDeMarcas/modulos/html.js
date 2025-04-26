/**
 * Datos del módulo de HTML Básico perteneciente a la asignatura de Lenguaje de Marcas y Gestión de Sistemas de la Información.
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
 * // Importar el módulo de HTML Básico
 * import moduloHTMLBasico from '@data/modulos/htmlBasico';
 *
 * function PreguntasAleatorias() {
 *   // Seleccionar 5 preguntas aleatorias del módulo
 *   const preguntasAleatorias = moduloHTMLBasico.preguntas
 *     .sort(() => 0.5 - Math.random())
 *     .slice(0, 5);
 *
 *   return (
 *     <div>
 *       <h2>{moduloHTMLBasico.nombre}</h2>
 *       {preguntasAleatorias.map(pregunta => (
 *         <QuestionCard key={pregunta.id} pregunta={pregunta} />
 *       ))}
 *     </div>
 *   );
 * }
 */
export const moduloHTMLBasico = {
    id: 405,
    nombre: "modulo 2 - HTML Básico",
    esExamen: false,
    asignaturaId: 4,
    descripcion:
      "Fundamentos del lenguaje HTML, incluyendo estructura de documentos, etiquetas principales, atributos y semántica básica para crear páginas web.",
    preguntas: [
      {
        id: 4501,
        moduloId: 405,
        pregunta: "¿Cómo se define un atributo correctamente en una etiqueta HTML?",
        opciones: [
          "<p atributo=\"valor\">",
          "<p:atributo>",
          "<p atributo>",
          "<p{atributo=valor}>",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "La forma correcta de definir un atributo en una etiqueta HTML es <p atributo=\"valor\">. Los atributos se colocan dentro de la etiqueta de apertura y consisten en un nombre de atributo seguido por un signo igual (=) y un valor entre comillas dobles o simples. Esta sintaxis permite proporcionar información adicional sobre los elementos HTML y modificar su comportamiento o apariencia. Ejemplos comunes incluyen: src en imágenes, href en enlaces, class e id para CSS y JavaScript, y alt para texto alternativo en imágenes. La sintaxis adecuada es fundamental para que los navegadores interpreten correctamente los elementos HTML.",
      },
      {
        id: 4502,
        moduloId: 405,
        pregunta: "¿Cómo se inserta una imagen en una página web usando HTML?",
        opciones: [
          "<src img=\"imagen.jpg\">",
          "<img src=\"imagen.jpg\" alt=\"Descripción\">",
          "<img href=\"imagen.jpg\">",
          "<image src=\"imagen.jpg\">",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "La forma correcta de insertar una imagen en una página web usando HTML es <img src=\"imagen.jpg\" alt=\"Descripción\">. La etiqueta <img> es un elemento vacío (sin etiqueta de cierre) que requiere el atributo src (source) para especificar la ruta de la imagen. El atributo alt (alternativo) es también importante ya que proporciona una descripción textual de la imagen para accesibilidad (lectores de pantalla), en caso de que la imagen no pueda cargarse, y para SEO. Otros atributos opcionales incluyen width y height para dimensiones, y title para mostrar un tooltip al pasar el mouse sobre la imagen.",
      },
      {
        id: 4503,
        moduloId: 405,
        pregunta: "¿Cuál de las siguientes es una etiqueta válida del header en HTML?",
        opciones: [
          "<div>",
          "<body>",
          "<title>",
          "<footer>",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "La etiqueta <title> es una etiqueta válida que se utiliza dentro del <head> en un documento HTML. Su función es definir el título del documento, que aparece en la pestaña del navegador, los resultados de búsqueda y los marcadores. A diferencia de <div> que es un contenedor genérico para el flujo de contenido, <body> que contiene todo el contenido visible de la página, o <footer> que típicamente contiene información de pie de página, <title> es específicamente un elemento que debe colocarse dentro del <head> y proporciona metadatos sobre el documento en lugar de contenido visible directamente en la página.",
      },
      {
        id: 4504,
        moduloId: 405,
        pregunta: "¿Cuál de las siguientes etiquetas es un ejemplo de etiqueta de bloque?",
        opciones: [
          "<section>",
          "<img>",
          "<span>",
          "<a>",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "La etiqueta <section> es un ejemplo de etiqueta de bloque en HTML. Los elementos de bloque comienzan en una nueva línea y ocupan todo el ancho disponible por defecto, creando un \"bloque\" en el flujo del documento. Otros ejemplos de elementos de bloque incluyen <div>, <p>, <h1>-<h6>, <ul>, <ol>, <li>, <header>, <footer>, etc. En contraste, <img>, <span> y <a> son ejemplos de elementos en línea que no crean saltos de línea y solo ocupan el espacio necesario para su contenido. <section> específicamente representa una sección temática genérica de contenido, generalmente con un encabezado, y es parte de las etiquetas semánticas introducidas en HTML5.",
      },
      {
        id: 4505,
        moduloId: 405,
        pregunta: "¿Cuál de las siguientes etiquetas pertenece al grupo de \"etiquetas de texto\"?",
        opciones: [
          "<ul>",
          "<h1>",
          "<img>",
          "<section>",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "La etiqueta <h1> pertenece al grupo de \"etiquetas de texto\" en HTML, específicamente es un encabezado de nivel 1 (el más importante). Las etiquetas de texto son aquellas que se utilizan para definir y estructurar el contenido textual de una página, incluyendo encabezados (<h1>-<h6>), párrafos (<p>), énfasis (<em>), negrita (<strong>), etc. A diferencia de <ul> que es una lista desordenada, <img> que inserta una imagen, o <section> que define una sección temática de la página, <h1> se utiliza específicamente para representar el encabezado principal de un documento o sección, dando estructura y significado semántico al texto.",
      },
      {
        id: 4506,
        moduloId: 405,
        pregunta: "¿Qué atributo se usa para especificar el destino de un enlace?",
        opciones: [
          "href",
          "src",
          "alt",
          "link",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "El atributo href (Hypertext Reference) se usa para especificar el destino de un enlace en HTML. Este atributo se utiliza principalmente con la etiqueta <a> (anchor) para indicar la URL a la que el enlace debe dirigir cuando se hace clic en él. Por ejemplo: <a href=\"https://www.ejemplo.com\">Visitar Ejemplo</a>. A diferencia de src que se usa para especificar la ruta de recursos como imágenes, alt que proporciona texto alternativo para imágenes, o link que no es un atributo sino una etiqueta, href es específico para definir la dirección de destino en elementos de hipervínculo.",
      },
      {
        id: 4507,
        moduloId: 405,
        pregunta: "¿Qué es un atributo en HTML?",
        opciones: [
          "Un enlace entre dos páginas web",
          "Una propiedad añadida a una etiqueta para definir su comportamiento o estilo",
          "Un tipo de archivo compatible con navegadores",
          "Una etiqueta que contiene código CSS",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "Un atributo en HTML es una propiedad añadida a una etiqueta para definir su comportamiento, apariencia o proporcionar información adicional sobre el elemento. Los atributos siempre se colocan en la etiqueta de apertura y consisten en un nombre seguido de un signo igual (=) y un valor entre comillas. Por ejemplo, en <img src=\"imagen.jpg\" alt=\"Mi imagen\" width=\"300\">, src, alt y width son atributos que especifican la ruta de la imagen, el texto alternativo y el ancho, respectivamente. Los atributos son fundamentales en HTML ya que permiten personalizar y configurar los elementos para diferentes propósitos y contextos.",
      },
      {
        id: 4508,
        moduloId: 405,
        pregunta: "¿Qué etiqueta HTML se usa para definir un párrafo de texto?",
        opciones: [
          "<p>",
          "<span>",
          "<text>",
          "<para>",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "La etiqueta <p> se usa para definir un párrafo de texto en HTML. Es un elemento de bloque que crea automáticamente un espacio antes y después del párrafo, separándolo visualmente de otros elementos. La etiqueta <p> es una de las más fundamentales y comúnmente usadas en HTML para estructurar contenido textual. A diferencia de <span> que es un contenedor en línea sin formato inherente, <text> que no es una etiqueta HTML estándar, o <para> que no existe en HTML, <p> proporciona semántica específica indicando que el contenido es un párrafo, lo cual es importante tanto para accesibilidad como para SEO.",
      },
      {
        id: 4509,
        moduloId: 405,
        pregunta: "¿Qué etiqueta se utiliza en el header para enlazar una hoja de estilos CSS externa?",
        opciones: [
          "<style>",
          "<link>",
          "<script>",
          "<meta>",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "La etiqueta <link> se utiliza en el <head> para enlazar una hoja de estilos CSS externa a un documento HTML. La sintaxis típica es: <link rel=\"stylesheet\" href=\"styles.css\">. El atributo rel especifica la relación entre el documento actual y el recurso enlazado (en este caso, una hoja de estilos), mientras que href indica la ubicación del archivo CSS. A diferencia de <style> que se usa para definir estilos CSS directamente dentro del documento, <script> que se utiliza para incluir o definir JavaScript, o <meta> que proporciona metadatos sobre el documento, <link> está específicamente diseñado para establecer relaciones con recursos externos como hojas de estilo, iconos de favoritos, fuentes web, etc.",
      },
      {
        id: 4510,
        moduloId: 405,
        pregunta: "¿Qué etiqueta se utiliza para indicar que un documento es un archivo HTML5?",
        opciones: [
          "<html5>",
          "<document html>",
          "<!DOCTYPE html>",
          "<doctype html5>",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "La etiqueta <!DOCTYPE html> se utiliza para indicar que un documento es un archivo HTML5. Esta declaración debe aparecer en la primera línea del documento HTML, antes de la etiqueta <html>, y le dice al navegador qué versión de HTML está utilizando la página. A diferencia de versiones anteriores de HTML que requerían declaraciones DOCTYPE más complejas, HTML5 simplificó esto a una declaración corta y sencilla. No es una etiqueta HTML en sí, sino una declaración especial que asegura que el navegador interprete el documento según las especificaciones de HTML5, evitando que entre en modo quirks (un modo de renderizado más antiguo e inconsistente).",
      },
    ],
  };

  export default moduloHTMLBasico;