/**
 * Datos del módulo de Simulacro de Examen de Lenguaje de Marcas 4.
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
 */
export const moduloExamenLenguajeMarcas = {
  id: 413,
  nombre: "Examen de Lenguaje de Marcas",
  esExamen: true,
  asignaturaId: 4,
  descripcion:
    "Examen completo de HTML5, CSS3, Flexbox, Grid, Bootstrap, JavaScript, FileReader y localStorage.",
  preguntas: [
    {
      id: 41301,
      moduloId: 413,
      pregunta:
        "¿Qué etiqueta HTML se encarga de mostrar el contenido principal visible de una página?",
      opciones: ["body", "head", "title", "meta"],
      respuestaCorrecta: 0,
      explicacion:
        "La etiqueta <body> contiene todo el contenido visible de una página web, incluyendo texto, imágenes, enlaces, formularios y otros elementos que el usuario puede ver e interactuar. A diferencia de <head> que contiene metadatos no visibles, <body> es donde se coloca todo el contenido que se muestra en el navegador.",
    },
    {
      id: 41302,
      moduloId: 413,
      pregunta:
        "¿Qué atributo de la etiqueta 'img' define la fuente de la imagen que se va a mostrar?",
      opciones: ["src", "link", "href", "file"],
      respuestaCorrecta: 0,
      explicacion:
        "El atributo 'src' (source) especifica la URL o ruta del archivo de imagen que se va a mostrar. Es un atributo obligatorio de la etiqueta <img>. Los otros atributos mencionados tienen diferentes funciones: 'href' se usa en enlaces y referencias, 'link' no es un atributo válido para <img>, y 'file' tampoco es un atributo estándar de HTML.",
    },
    {
      id: 41303,
      moduloId: 413,
      pregunta:
        "¿Cuál es la principal diferencia entre box-sizing: content-box y box-sizing: border-box en CSS?",
      opciones: [
        "border-box no permite usar padding",
        "content-box incluye borde y padding en el tamaño total",
        "No hay ninguna diferencia entre ambas propiedades",
        "border-box incluye padding y borde dentro del ancho y alto especificado",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "Con box-sizing: border-box, el ancho y alto especificados incluyen el contenido, padding y borde, manteniendo las dimensiones totales constantes. Con content-box (valor por defecto), el ancho y alto solo se aplican al contenido, y el padding y borde se añaden externamente, aumentando el tamaño total del elemento.",
    },
    {
      id: 41304,
      moduloId: 413,
      pregunta:
        "¿Qué propiedad se utiliza para alinear los elementos horizontalmente (a lo largo del eje principal) en Flexbox?",
      opciones: ["align-items", "justify-content", "flex-direction", "order"],
      respuestaCorrecta: 1,
      explicacion:
        "La propiedad justify-content controla la alineación de los elementos flexibles a lo largo del eje principal (horizontal por defecto). Permite distribuir el espacio entre elementos con valores como flex-start, center, space-between, etc. En cambio, align-items controla la alineación en el eje transversal (vertical por defecto).",
    },
    {
      id: 41305,
      moduloId: 413,
      pregunta:
        "¿Qué propiedad y valor de Flexbox permite colocar los elementos hijos en una columna?",
      opciones: [
        "flex-direction: column;",
        "align-items: center;",
        "flex-wrap: wrap;",
        "justify-content: flex-start;",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "La propiedad flex-direction: column; cambia la dirección del eje principal de horizontal a vertical, haciendo que los elementos se apilen en una columna (de arriba hacia abajo) en lugar de en una fila. Esto también intercambia los roles de justify-content y align-items.",
    },
    {
      id: 41306,
      moduloId: 413,
      pregunta:
        "¿Qué valor de Flexbox hace que los elementos no se queden todos en una misma línea si no hay espacio suficiente?",
      opciones: [
        "flex-shrink: 0;",
        "justify-content: space-around;",
        "flex-wrap: wrap;",
        "flex-grow: 1;",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "La propiedad flex-wrap: wrap; permite que los elementos flexibles se muevan a una nueva línea cuando no hay suficiente espacio en la línea actual. Por defecto, flex-wrap tiene el valor 'nowrap', que fuerza a todos los elementos a permanecer en una sola línea, comprimiéndolos si es necesario.",
    },
    {
      id: 41307,
      moduloId: 413,
      pregunta:
        "¿Cuál de las siguientes propiedades se usa en CSS Grid para establecer cuántas columnas tendrá un contenedor?",
      opciones: [
        "grid-template-columns",
        "grid-auto-rows",
        "justify-items",
        "align-content",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "La propiedad grid-template-columns define explícitamente el número y tamaño de las columnas en una cuadrícula CSS. Por ejemplo, 'grid-template-columns: 1fr 1fr 1fr;' crea tres columnas de igual tamaño. Las otras propiedades tienen funciones diferentes: grid-auto-rows define el tamaño de filas implícitas, justify-items alinea elementos dentro de sus celdas, y align-content alinea la cuadrícula completa.",
    },
    {
      id: 41308,
      moduloId: 413,
      pregunta:
        "¿Cuál es la principal diferencia entre usar fr y % en CSS Grid?",
      opciones: [
        "% reparte el espacio en partes iguales",
        "fr reparte el espacio restante de forma proporcional",
        "% es más flexible que fr",
        "No hay diferencia",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "La unidad 'fr' (fracción) distribuye el espacio disponible restante después de asignar espacio a elementos con tamaños fijos, mientras que '%' se basa en el tamaño total del contenedor. Por ejemplo, si hay una columna de 100px y dos de 1fr cada una, las columnas fr se repartirán el espacio que quede después de los 100px.",
    },
    {
      id: 41309,
      moduloId: 413,
      pregunta:
        "¿Qué sintaxis es válida para declarar zonas con nombre en una cuadrícula de CSS Grid?",
      opciones: [
        "grid-template-columns: 1fr 1fr;",
        'grid-template-areas: "nav nav" "content aside";',
        "grid-template: repeat(2, 1fr);",
        'grid-position: "nav" "content";',
      ],
      respuestaCorrecta: 1,
      explicacion:
        "La propiedad grid-template-areas permite definir áreas nombradas usando cadenas de texto. Cada cadena entre comillas representa una fila, y cada palabra dentro de la cadena representa una celda. En el ejemplo, se crea una cuadrícula con 'nav' ocupando dos columnas en la primera fila, y 'content' y 'aside' ocupando una columna cada uno en la segunda fila.",
    },
    {
      id: 41310,
      moduloId: 413,
      pregunta: "¿Cuál es la función del elemento <aside> en HTML?",
      opciones: [
        "Es un sinónimo de <article>",
        "Reemplaza al <section> cuando hay imágenes",
        "Sirve para definir secciones principales de la página",
        "Representa contenido tangencial o complementario al contenido principal",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "El elemento <aside> de HTML5 representa contenido que está relacionado indirectamente con el contenido principal, como barras laterales, publicidad, biografías de autor, o información complementaria. Es un elemento semántico que ayuda a estructurar mejor el documento y mejora la accesibilidad y SEO.",
    },
    {
      id: 41311,
      moduloId: 413,
      pregunta:
        "¿Cuál es el propósito de usar repeat(3, 1fr) en una definición de columnas en CSS Grid?",
      opciones: [
        "Define tres márgenes horizontales",
        "Se usa para repetir colores de fondo",
        "Agrupa columnas por nombre",
        "Distribuye el contenido en 3 columnas iguales dentro del espacio disponible",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "La función repeat(3, 1fr) es un atajo para escribir '1fr 1fr 1fr', creando tres columnas que se reparten equitativamente todo el espacio disponible. La unidad 'fr' hace que cada columna reciba la misma fracción del espacio disponible, resultando en tres columnas de igual ancho.",
    },
    {
      id: 41312,
      moduloId: 413,
      pregunta:
        "¿Qué ocurre si utilizamos display: grid; sin definir filas ni columnas?",
      opciones: [
        "Se crea una cuadrícula automáticamente",
        "Se aplica block",
        "Los elementos se superponen",
        "No cambia nada",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Cuando se usa display: grid sin especificar grid-template-columns o grid-template-rows, CSS Grid crea automáticamente una cuadrícula implícita con una sola columna que ocupa todo el ancho disponible, y tantas filas como elementos hijos tenga el contenedor. Cada elemento ocupará una fila completa.",
    },
    {
      id: 41313,
      moduloId: 413,
      pregunta:
        "¿Cuál de las siguientes afirmaciones es cierta sobre atributos id y class en HTML?",
      opciones: [
        "class solo puede aplicarse a etiquetas <div>",
        "id y class funcionan exactamente igual",
        "Una clase puede ser utilizada para múltiples elementos",
        "Un id puede repetirse varias veces en una misma página",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Una clase puede aplicarse a múltiples elementos HTML en la misma página, permitiendo aplicar los mismos estilos CSS a varios elementos. En cambio, un id debe ser único en toda la página. Las clases se pueden aplicar a cualquier elemento HTML, no solo a <div>, y funcionan de manera diferente a los ids tanto en CSS como en JavaScript.",
    },
    {
      id: 41314,
      moduloId: 413,
      pregunta:
        "¿Qué unidad en CSS es relativa al tamaño de fuente del elemento raíz (<html>) y no al padre?",
      opciones: ["em", "rem", "pt", "vh"],
      respuestaCorrecta: 1,
      explicacion:
        "La unidad 'rem' (root em) es relativa al tamaño de fuente del elemento raíz (<html>), proporcionando un punto de referencia consistente en toda la página. En cambio, 'em' es relativa al tamaño de fuente del elemento padre, 'pt' es una unidad absoluta, y 'vh' es relativa a la altura del viewport.",
    },
    {
      id: 41315,
      moduloId: 413,
      pregunta:
        "¿Qué propiedad te permite etiquetar secciones de una cuadrícula con nombres personalizados?",
      opciones: [
        "grid-template-rows",
        "grid-template-areas",
        "grid-auto-flow",
        "justify-items",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "La propiedad grid-template-areas permite definir áreas nombradas en una cuadrícula CSS, creando una representación visual de la estructura mediante cadenas de texto. Esto facilita la asignación de elementos a áreas específicas usando la propiedad grid-area en los elementos hijos.",
    },
    {
      id: 41316,
      moduloId: 413,
      pregunta:
        "¿Cuál de estas formas de aplicar estilos en una página HTML no es válida?",
      opciones: [
        '<link rel="stylesheet" href="style.css">',
        "<style> h1 {font-size: 2em;}</style>",
        '<p style="font-weight:bold;">Texto</p>',
        "<css>body {background: red;}</css>",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "La etiqueta <css> no existe en HTML. Las formas válidas de aplicar estilos son: enlaces externos con <link>, estilos internos con <style>, y estilos en línea con el atributo 'style'. La opción D es inventada y no es reconocida por los navegadores.",
    },
    {
      id: 41317,
      moduloId: 413,
      pregunta:
        "¿Cuál es la diferencia clave entre gap y margin en diseño con CSS?",
      opciones: [
        "margin solo funciona con texto",
        "margin afecta el espacio externo, gap el interno entre elementos",
        "gap aplica sombra",
        "No existe diferencia entre ambas",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "La propiedad 'margin' crea espacio alrededor del exterior de un elemento, afectando su posición respecto a otros elementos. La propiedad 'gap' solo funciona en contenedores flexbox y grid, creando espacio entre elementos hijos sin afectar el espacio exterior del contenedor.",
    },
    {
      id: 41318,
      moduloId: 413,
      pregunta:
        "¿Qué clase de Bootstrap alinea verticalmente los elementos dentro de un div con d-flex?",
      opciones: [
        ".align-items-center",
        ".text-center",
        ".justify-content-center",
        ".container",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "La clase .align-items-center de Bootstrap alinea verticalmente los elementos flexibles en el centro del contenedor. Se usa junto con .d-flex para crear un contenedor flexbox. .justify-content-center centra horizontalmente, .text-center solo centra texto, y .container es para el diseño de página.",
    },
    {
      id: 41319,
      moduloId: 413,
      pregunta:
        "¿Qué clase de Bootstrap aplica bordes redondeados a una imagen sin hacerla circular?",
      opciones: [".rounded-circle", ".img-rounded", ".rounded", ".img-soft"],
      respuestaCorrecta: 2,
      explicacion:
        "La clase .rounded de Bootstrap aplica border-radius para crear esquinas redondeadas sin hacer el elemento completamente circular. .rounded-circle crea un círculo perfecto, .img-rounded no existe en Bootstrap actual, y .img-soft no es una clase estándar de Bootstrap.",
    },
    {
      id: 41320,
      moduloId: 413,
      pregunta:
        "¿Qué clase de Bootstrap se debe usar para dividir una fila en 3 columnas iguales en pantallas pequeñas o mayores?",
      opciones: [".col-4", ".col-6", ".col-3", ".col-12"],
      respuestaCorrecta: 0,
      explicacion:
        "La clase .col-4 divide una fila de 12 columnas en 3 partes iguales (12 ÷ 3 = 4). Para tener 3 columnas iguales, cada una debe ocupar 4 unidades de las 12 disponibles en el sistema de grilla de Bootstrap.",
    },
    {
      id: 41321,
      moduloId: 413,
      pregunta:
        "¿Qué combinación de clases Bootstrap permite tener columnas iguales en pantallas medianas en adelante?",
      opciones: [".col-sm-6", ".col-md-4", ".col-lg-3", ".col-12"],
      respuestaCorrecta: 1,
      explicacion:
        "La clase .col-md-4 crea columnas que ocupan 4 de las 12 unidades disponibles en pantallas medianas (md) y superiores, permitiendo 3 columnas iguales por fila. El prefijo 'md' se aplica a pantallas medianas en adelante (≥768px).",
    },
    {
      id: 41322,
      moduloId: 413,
      pregunta:
        "¿Qué clase se usa en Bootstrap para aplicar un estilo de botón amarillo?",
      opciones: [".btn-orange", ".btn-alert", ".btn-danger", ".btn-warning"],
      respuestaCorrecta: 3,
      explicacion:
        "La clase .btn-warning de Bootstrap aplica un estilo de botón amarillo/naranja, tradicionalmente usado para acciones que requieren precaución. Se debe combinar con .btn para obtener el estilo completo del botón.",
    },
    {
      id: 41323,
      moduloId: 413,
      pregunta:
        "¿Qué clase se usa en Bootstrap para crear un botón de color rojo?",
      opciones: [".btn-error", ".btn-danger", ".btn-red", ".btn-warning"],
      respuestaCorrecta: 1,
      explicacion:
        "La clase .btn-danger de Bootstrap crea un botón de color rojo, usado típicamente para acciones destructivas o peligrosas como eliminar elementos. Debe combinarse con la clase base .btn.",
    },
    {
      id: 41324,
      moduloId: 413,
      pregunta:
        "¿Cuál de las siguientes clases de Bootstrap crea una fila que puede contener columnas?",
      opciones: [".d-flex", ".row", ".col-12", ".grid-template"],
      respuestaCorrecta: 1,
      explicacion:
        "La clase .row de Bootstrap crea un contenedor de fila en el sistema de grilla, que puede contener columnas (.col-*). Aplica márgenes negativos para alinear con las columnas hijas y utiliza flexbox internamente.",
    },
    {
      id: 41325,
      moduloId: 413,
      pregunta:
        "¿Qué método se utiliza en JavaScript para seleccionar todos los elementos con una determinada clase?",
      opciones: [
        "getElementById()",
        "getElementsByClassName()",
        "queryByClass()",
        "selectByClassName()",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "El método getElementsByClassName() devuelve una colección HTML de todos los elementos que tienen la clase especificada. A diferencia de getElementById() que devuelve un solo elemento, este método puede devolver múltiples elementos con la misma clase.",
    },
    {
      id: 41326,
      moduloId: 413,
      pregunta:
        "¿Qué propiedad permite recuperar o asignar el contenido de un campo <input> en un formulario?",
      opciones: ["text", "value", "innerText", "label"],
      respuestaCorrecta: 1,
      explicacion:
        "La propiedad 'value' permite tanto obtener como establecer el contenido de elementos de formulario como <input>, <textarea> y <select>. Es la propiedad estándar para acceder al valor actual que el usuario ha ingresado o seleccionado.",
    },
    {
      id: 41327,
      moduloId: 413,
      pregunta:
        "¿Cuál es la forma correcta de añadir un evento de clic a un botón seleccionado con querySelector?",
      opciones: [
        'btn.add("click", function)',
        "onClick(btn, function)",
        'btn.setEvent("click", function)',
        'btn.addEventListener("click", function)',
      ],
      respuestaCorrecta: 3,
      explicacion:
        "El método addEventListener() es la forma estándar y recomendada para añadir eventos en JavaScript moderno. Permite añadir múltiples eventos del mismo tipo a un elemento y proporciona mejor control sobre el comportamiento del evento.",
    },
    {
      id: 41328,
      moduloId: 413,
      pregunta: "¿Qué hace la propiedad .innerText en JavaScript?",
      opciones: [
        "Modifica el atributo value de un input",
        "Muestra o modifica el texto visible de un elemento",
        "Inserta etiquetas HTML",
        "Cambia el valor de un botón",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "La propiedad innerText obtiene o establece el texto visible de un elemento, excluyendo las etiquetas HTML pero respetando el estilo CSS. Si el texto está oculto por CSS, innerText no lo incluirá, a diferencia de textContent que incluye todo el texto independientemente del estilo.",
    },
    {
      id: 41329,
      moduloId: 413,
      pregunta:
        "¿Qué selector se usa para obtener el radio button seleccionado con nombre 'genero'?",
      opciones: [
        'input[name="genero"]:checked',
        'input[type="radio"]',
        "input:radio:checked",
        "radio.selected",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "El selector 'input[name=\"genero\"]:checked' combina un selector de atributo con una pseudo-clase para obtener específicamente el radio button del grupo 'genero' que está seleccionado. Esto es útil para obtener el valor seleccionado de un grupo de radio buttons.",
    },
    {
      id: 41330,
      moduloId: 413,
      pregunta: '¿Qué hace document.querySelector("#usuario") en JavaScript?',
      opciones: [
        'Selecciona el primer elemento con id="usuario"',
        "Selecciona todos los elementos con esa clase",
        'Busca un input con type="usuario"',
        "Da un error si no hay coincidencia",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "El método querySelector() con el selector '#usuario' busca y devuelve el primer (y debería ser único) elemento que tiene el atributo id=\"usuario\". El símbolo # indica que se está buscando por ID. Si no encuentra el elemento, devuelve null.",
    },
    {
      id: 41331,
      moduloId: 413,
      pregunta:
        "¿Qué propiedad es necesaria para que align-items tenga efecto en un contenedor?",
      opciones: [
        "display: flex;",
        "position: absolute;",
        "text-align: center;",
        "margin: auto;",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "La propiedad align-items solo funciona en contenedores flexbox (display: flex) o grid (display: grid). En flexbox, controla la alineación de los elementos a lo largo del eje transversal (perpendicular al eje principal definido por flex-direction).",
    },
    {
      id: 41332,
      moduloId: 413,
      pregunta:
        "¿Qué valor devuelve document.querySelector('input[name=\"x\"]:checked') si no hay selección?",
      opciones: ["false", "null", '"undefined"', '""'],
      respuestaCorrecta: 1,
      explicacion:
        "Cuando querySelector() no encuentra ningún elemento que coincida con el selector especificado, devuelve null. Esto es importante para validar antes de intentar acceder a propiedades del elemento, ya que intentar acceder a propiedades de null causará un error.",
    },
    {
      id: 41333,
      moduloId: 413,
      pregunta:
        "¿Qué instrucción permite salir de un bucle for o while antes de que termine normalmente?",
      opciones: ["stop", "return", "break", "skip"],
      respuestaCorrecta: 2,
      explicacion:
        "La instrucción 'break' termina inmediatamente la ejecución del bucle más cercano (for, while, do-while) y transfiere el control a la instrucción que sigue al bucle. 'return' sale de la función completa, 'continue' salta a la siguiente iteración, y 'stop' y 'skip' no son palabras clave válidas en JavaScript.",
    },
    {
      id: 41334,
      moduloId: 413,
      pregunta: "¿Qué objeto permite leer archivos locales en JavaScript?",
      opciones: ["FileReader", "XMLReader", "LocalFile", "DOMParser"],
      respuestaCorrecta: 0,
      explicacion:
        'FileReader es la API de JavaScript que permite leer archivos seleccionados por el usuario a través de elementos <input type="file"> o drag-and-drop. Proporciona métodos como readAsText(), readAsDataURL(), y readAsArrayBuffer() para leer diferentes tipos de contenido.',
    },
    {
      id: 41335,
      moduloId: 413,
      pregunta:
        "¿Qué evento se activa cuando FileReader termina de leer un archivo con éxito?",
      opciones: ["onstart", "onload", "oncomplete", "onread"],
      respuestaCorrecta: 1,
      explicacion:
        "El evento 'onload' (o 'load' con addEventListener) se dispara cuando FileReader completa exitosamente la lectura de un archivo. En este punto, el resultado está disponible en la propiedad 'result' del objeto FileReader.",
    },
    {
      id: 41336,
      moduloId: 413,
      pregunta:
        "¿Qué método de JavaScript se utiliza para analizar una cadena XML y convertirla en un documento DOM?",
      opciones: [
        "DOMParser.parseFromString()",
        "FileReader.readAsText()",
        "XMLDocument.createFromXML()",
        "XMLParser.convert()",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "DOMParser.parseFromString() es el método estándar para convertir una cadena de texto XML en un documento DOM navegable. Se usa creando una instancia de DOMParser y llamando a parseFromString() con el texto XML y el tipo MIME 'text/xml'.",
    },
    {
      id: 41337,
      moduloId: 413,
      pregunta:
        "¿Qué contiene e.target.result dentro del evento onload del FileReader?",
      opciones: [
        "El contenido del archivo leído",
        "El nombre del archivo",
        "El tipo MIME del archivo",
        "El tamaño del archivo",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Dentro del evento onload de FileReader, e.target.result contiene el contenido del archivo que se ha leído. El formato depende del método usado: texto plano con readAsText(), URL de datos con readAsDataURL(), o ArrayBuffer con readAsArrayBuffer().",
    },
    {
      id: 41338,
      moduloId: 413,
      pregunta:
        "¿Qué instrucción en JavaScript devuelve todos los nodos con la etiqueta <persona> desde un XML parseado?",
      opciones: [
        'getNode("persona")',
        'xmlDoc.getElementsByTagName("persona")',
        'getElementByClass("persona")',
        'getXMLNodes("persona")',
      ],
      respuestaCorrecta: 1,
      explicacion:
        "El método getElementsByTagName() aplicado a un documento XML parseado devuelve una colección de todos los elementos con el nombre de etiqueta especificado. Es el método estándar del DOM para obtener elementos por su nombre de etiqueta en documentos XML o HTML.",
    },
    {
      id: 41339,
      moduloId: 413,
      pregunta:
        "¿Qué propiedad permite acceder al texto dentro de un nodo XML en JavaScript?",
      opciones: [".textContent", ".nodeText", ".innerText", "getText()"],
      respuestaCorrecta: 0,
      explicacion:
        "La propiedad textContent devuelve todo el contenido textual de un nodo y sus descendientes, sin incluir las etiquetas HTML/XML. Es la forma estándar de acceder al texto contenido en elementos XML o HTML en el DOM.",
    },
    {
      id: 41340,
      moduloId: 413,
      pregunta:
        "¿Qué elemento HTML permite al usuario seleccionar un archivo desde su dispositivo?",
      opciones: [
        '<input type="file">',
        '<input type="text">',
        "<textarea>",
        "<select>",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "El elemento <input type=\"file\"> crea un control que permite a los usuarios seleccionar uno o más archivos desde su sistema de archivos local. Es el método estándar en HTML para la carga de archivos, y puede configurarse con atributos como 'accept' para filtrar tipos de archivo y 'multiple' para selección múltiple.",
    },
    {
      id: 41341,
      moduloId: 413,
      pregunta:
        "¿Cuál de las siguientes es una forma válida de guardar una clave y su valor en localStorage?",
      opciones: [
        'localStorage.setItem("clave", "valor")',
        'save("clave", "valor")',
        "window.local.save",
        "storage.write()",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "El método localStorage.setItem() es la forma correcta de almacenar un par clave-valor en el almacenamiento local del navegador. Los datos persisten hasta que se eliminen explícitamente o se limpie el almacenamiento del navegador. La sintaxis es localStorage.setItem('clave', 'valor').",
    },
    {
      id: 41342,
      moduloId: 413,
      pregunta:
        "¿Qué instrucción JavaScript permite guardar datos en el almacenamiento local del navegador?",
      opciones: [
        "session.save()",
        "localStorage.setItem()",
        "saveToBrowser()",
        "window.store()",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "El método localStorage.setItem() permite almacenar datos de forma persistente en el navegador del usuario. Los datos se mantienen disponibles entre sesiones hasta que se eliminen manualmente o el usuario limpie el almacenamiento del navegador.",
    },
    {
      id: 41343,
      moduloId: 413,
      pregunta:
        "¿Qué clase de Bootstrap hace que una imagen se escale proporcionalmente dentro de su contenedor?",
      opciones: [".img-fluid", ".img-responsive", ".img-auto", ".img-center"],
      respuestaCorrecta: 0,
      explicacion:
        "La clase .img-fluid de Bootstrap aplica max-width: 100% y height: auto a una imagen, haciendo que se escale proporcionalmente para ajustarse al ancho de su contenedor padre sin distorsionarse. Es la clase actual en Bootstrap 4 y 5, reemplazando a .img-responsive de versiones anteriores.",
    },
  ],
};

export default moduloExamenLenguajeMarcas;
