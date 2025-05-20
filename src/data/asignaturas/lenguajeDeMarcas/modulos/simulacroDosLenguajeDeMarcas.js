/**
* Datos del módulo de Simulacro de Examen de Lenguaje de Marcas.
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
* // Importar el módulo de Simulacro de Examen
* import moduloSimulacroMayo2 from '@data/modulos/simulacroMayo2';
*
* function PreguntasAleatorias() {
*   // Seleccionar 10 preguntas aleatorias del módulo
*   const preguntasAleatorias = moduloSimulacroMayo2.preguntas
*     .sort(() => 0.5 - Math.random())
*     .slice(0, 10);
*
*   return (
*     <div>
*       <h2>{moduloSimulacroMayo2.nombre}</h2>
*       {preguntasAleatorias.map(pregunta => (
*         <QuestionCard key={pregunta.id} pregunta={pregunta} />
*       ))}
*     </div>
*   );
* }
*/
export const moduloSimulacroDosLenguajeDeMarcas = {
    id: 411,
    nombre: "Simulacro de examen de Lenguaje de Marcas 2 (10/05/2025)",
    asignaturaId: 4,
    esExamen: true,
    descripcion: "Segundo simulacro de examen con preguntas tipo test sobre contenidos clave del módulo Lenguaje de Marcas. Incluye ejercicios sobre HTML, XML, CSS y herramientas relacionadas, pensado como repaso previo al examen.",
    preguntas: [
      {
        "id": 41101,
        "moduloId": 411,
        "pregunta": "¿Cómo se accede al texto dentro de una etiqueta XML, como <persona>Juan</persona>?",
        "opciones": [".text()", ".textContent", ".nodeText", ".innerValue"],
        "respuestaCorrecta": 1,
        "explicacion": "El método .textContent se utiliza para acceder al contenido de texto dentro de un elemento XML o HTML."
      },
      {
        "id": 41102,
        "moduloId": 411,
        "pregunta": "¿Cómo puedes evitar que un contenedor Flexbox se desborde cuando sus elementos exceden el tamaño disponible?",
        "opciones": ["Usar align-items: flex-start;", "Usar overflow: hidden;", "Usar flex-wrap: wrap;", "Usar white-space: nowrap;"],
        "respuestaCorrecta": 2,
        "explicacion": "La propiedad flex-wrap: wrap; permite que los elementos se ajusten a nuevas líneas cuando no caben en el contenedor."
      },
      {
        "id": 41103,
        "moduloId": 411,
        "pregunta": "¿Cómo se asignan nombres a distintas zonas dentro de una cuadrícula en CSS Grid?",
        "opciones": ["grid-template-areas", "grid-template-columns", "grid-gap", "grid-row-gap"],
        "respuestaCorrecta": 0,
        "explicacion": "La propiedad grid-template-areas se utiliza para asignar nombres a diferentes zonas dentro de una cuadrícula CSS."
      },
      {
        "id": 41104,
        "moduloId": 411,
        "pregunta": "¿Cómo se comportan los elementos en un grid sin columnas definidas?",
        "opciones": ["Se apilan en una columna", "Da error", "Se alinean en fila", "Se vuelven invisibles"],
        "respuestaCorrecta": 0,
        "explicacion": "Cuando no se definen columnas en CSS Grid, los elementos se apilan en una columna."
      },
      {
        "id": 41105,
        "moduloId": 411,
        "pregunta": "¿Cómo se indica en Flexbox que los elementos deben organizarse de arriba a abajo, en vez de de izquierda a derecha?",
        "opciones": ["flex-direction: column;", "justify-items: center;", "display: inline-flex;", "align-self: stretch;"],
        "respuestaCorrecta": 0,
        "explicacion": "La propiedad flex-direction: column; cambia la dirección del layout de flexbox de horizontal a vertical."
      },
      {
        "id": 41106,
        "moduloId": 411,
        "pregunta": "¿Cuál de estas propiedades de Flexbox permite cambiar el orden visual de los elementos sin modificar el HTML?",
        "opciones": ["align-self", "gap", "order", "flex-basis"],
        "respuestaCorrecta": 2,
        "explicacion": "La propiedad order permite cambiar el orden visual de los elementos dentro de un contenedor flex sin modificar el HTML."
      },
      {
        "id": 41107,
        "moduloId": 411,
        "pregunta": "¿Cuál de las siguientes clases de Bootstrap crea una fila que puede contener columnas?",
        "opciones": [".grid-template", ".row", ".d-flex", ".col-12"],
        "respuestaCorrecta": 1,
        "explicacion": "La clase .row en Bootstrap se utiliza para crear una fila que puede contener columnas."
      },
      {
        "id": 41108,
        "moduloId": 411,
        "pregunta": "¿Cuál de las siguientes es una forma correcta de insertar una imagen en HTML?",
        "opciones": ["<pic src=\"foto.jpg\">", "<image src=\"foto.jpg\">", "<img src=\"foto.jpg\">", "<img href=\"foto.jpg\">"],
        "respuestaCorrecta": 2,
        "explicacion": "La etiqueta correcta para insertar una imagen en HTML es <img> con el atributo src."
      },
      {
        "id": 41109,
        "moduloId": 411,
        "pregunta": "¿Cuál es la función de la propiedad align-content en CSS Grid?",
        "opciones": [
          "Controlar cómo se alinean las filas dentro de un contenedor.",
          "Controlar el espaciado entre las columnas.",
          "Definir el comportamiento de los elementos dentro de una celda de la cuadrícula.",
          "Controlar la alineación de las áreas de la cuadrícula en el contenedor."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La propiedad align-content controla cómo se distribuyen y alinean todas las filas de la cuadrícula como conjunto dentro del contenedor grid cuando hay espacio vertical sobrante. Valores como start, center, end, space-between, etc., definen esta distribución vertical global de toda la estructura de filas."
      },
      {
        "id": 41110,
        "moduloId": 411,
        "pregunta": "¿Cuál es la función del elemento aside en HTML5?",
        "opciones": ["Es un sinónimo de <section>", "Sirve para definir secciones principales de la página", "Reemplaza al <div> cuando hay imágenes", "Representa contenido tangencial o complementario al contenido principal"],
        "respuestaCorrecta": 3,
        "explicacion": "El elemento <aside> se utiliza para contenido tangencial o complementario al contenido principal."
      },
      {
        "id": 41111,
        "moduloId": 411,
        "pregunta": "¿Cuál es la propiedad de CSS Grid que define el número de filas en una cuadrícula?",
        "opciones": ["grid-template-columns", "grid-template-rows", "grid-template-areas", "grid-auto-rows"],
        "respuestaCorrecta": 1,
        "explicacion": "La propiedad grid-template-rows se utiliza para definir el número y tamaño de las filas en una cuadrícula CSS."
      },
      {
        "id": 41112,
        "moduloId": 411,
        "pregunta": "¿Qué afirmación sobre el atributo id en HTML es correcta?",
        "opciones": ["Debe ser único dentro de la página", "Puede aplicarse a varios elementos", "Solo se puede usar en formularios", "Se escribe con punto (.)"],
        "respuestaCorrecta": 0,
        "explicacion": "El atributo id debe ser único dentro de la página HTML."
      },
      {
        "id": 41113,
        "moduloId": 411,
        "pregunta": "¿Qué clase de Bootstrap aplica bordes redondeados a una imagen sin hacerla circular?",
        "opciones": [".img-soft", ".rounded", ".rounded-circle", ".img-rounded"],
        "respuestaCorrecta": 1,
        "explicacion": "La clase .rounded de Bootstrap aplica bordes redondeados a elementos sin hacerlos completamente circulares."
      },
      {
        "id": 41114,
        "moduloId": 411,
        "pregunta": "¿Qué combinación de elementos HTML5 es correcta según su uso semántico?",
        "opciones": ["aside para comentarios y article para el contenido principal", "aside para artículos y nav para publicidades", "article para una noticia completa y aside para contenido complementario", "aside para encabezados y article para menús"],
        "respuestaCorrecta": 2,
        "explicacion": "Es correcto usar <article> para una noticia completa y <aside> para contenido complementario según la semántica HTML5."
      },
      {
        "id": 41115,
        "moduloId": 411,
        "pregunta": "¿Qué combinación de propiedades permite nombrar áreas en una cuadrícula CSS y luego asignarlas a elementos?",
        "opciones": ["grid-template-areas y grid-area", "justify-content y align-items", "grid-template-columns y grid-template-rows", "grid-columns y grid-rows"],
        "respuestaCorrecta": 0,
        "explicacion": "grid-template-areas se usa para nombrar áreas y grid-area para asignarlas a elementos."
      },
      {
        "id": 41116,
        "moduloId": 411,
        "pregunta": "¿Qué contiene e.target.result dentro del evento onload del FileReader?",
        "opciones": ["El nombre del archivo", "El contenido del archivo leído", "El tipo MIME del archivo", "El tamaño del archivo"],
        "respuestaCorrecta": 1,
        "explicacion": "En el evento onload del FileReader, e.target.result contiene el contenido del archivo leído."
      },
      {
        "id": 41117,
        "moduloId": 411,
        "pregunta": "¿Qué contiene e.target.result cuando se utiliza readAsText() con FileReader?",
        "opciones": ["Un objeto JSON", "Una cadena de texto con el contenido del archivo", "Un array de bytes", "Una cadena codificada en base64"],
        "respuestaCorrecta": 1,
        "explicacion": "Cuando se usa readAsText(), e.target.result contiene una cadena de texto con el contenido del archivo."
      },
      {
        "id": 41118,
        "moduloId": 411,
        "pregunta": "¿Qué devuelve element.value si el campo está vacío pero el elemento existe?",
        "opciones": ["false", "\"\"", "null", "undefined"],
        "respuestaCorrecta": 1,
        "explicacion": "Si el campo está vacío, element.value devuelve una cadena vacía (\"\")."
      },
      {
        "id": 41119,
        "moduloId": 411,
        "pregunta": "¿Qué hace el método readAsText() de FileReader en JavaScript?",
        "opciones": ["Leer archivos binarios", "Leer un archivo como texto plano", "Convertir texto en XML", "Escribir contenido en un archivo"],
        "respuestaCorrecta": 1,
        "explicacion": "El método readAsText() lee el contenido de un archivo como texto plano."
      },
      {
        "id": 41120,
        "moduloId": 411,
        "pregunta": "¿Qué hace la expresión repeat(3, 1fr) dentro de grid-template-columns?",
        "opciones": ["Repite el contenido tres veces", "Establece márgenes entre columnas", "Aplica tres filas automáticas", "Crea tres columnas que comparten el espacio disponible de forma equitativa"],
        "respuestaCorrecta": 3,
        "explicacion": "repeat(3, 1fr) crea tres columnas que comparten el espacio disponible de forma equitativa."
      },
      {
        "id": 41121,
        "moduloId": 411,
        "pregunta": "¿Qué método convierte texto XML en un documento navegable?",
        "opciones": ["createElementFromXML()", "DOMParser.parseFromString()", "FileParser.readAsDOM()", "XMLLoader.parse()"],
        "respuestaCorrecta": 1,
        "explicacion": "DOMParser.parseFromString() convierte texto XML en un documento DOM navegable."
      },
      {
        "id": 41122,
        "moduloId": 411,
        "pregunta": "¿Qué método se usa para obtener todos los nodos de un documento XML?",
        "opciones": ["getElementsByTagName(\"persona\")", "selectNodes(\"persona\")", "queryXML(\"persona\")", "getElementById(\"persona\")"],
        "respuestaCorrecta": 0,
        "explicacion": "getElementsByTagName() se usa para obtener todos los elementos que coinciden con una etiqueta específica."
      },
      {
        "id": 41123,
        "moduloId": 411,
        "pregunta": "¿Qué método se utiliza en JavaScript para seleccionar todos los elementos con una determinada clase?",
        "opciones": ["selectByClassName()", "getElementsByClassName()", "queryByClass()", "getElementById()"],
        "respuestaCorrecta": 1,
        "explicacion": "getElementsByClassName() selecciona todos los elementos que tienen una clase específica."
      },
      {
        "id": 41124,
        "moduloId": 411,
        "pregunta": "¿Qué objeto de JavaScript se utiliza para leer el contenido de un archivo cargado por el usuario?",
        "opciones": ["LocalStorage", "JSONParser", "DocumentReader", "FileReader"],
        "respuestaCorrecta": 3,
        "explicacion": "FileReader es el objeto JavaScript que se utiliza para leer archivos cargados por el usuario."
      },
      {
        "id": 41125,
        "moduloId": 411,
        "pregunta": "¿Qué palabra clave en JavaScript se utiliza para devolver un valor y salir de la función?",
        "opciones": ["break", "return", "exit", "continue"],
        "respuestaCorrecta": 1,
        "explicacion": "La palabra clave 'return' se utiliza para devolver un valor y salir de una función."
      },
      {
        "id": 41126,
        "moduloId": 411,
        "pregunta": "¿Qué propiedad de CSS Grid permite establecer el espacio entre filas?",
        "opciones": ["grid-gap", "gap", "column-gap", "row-gap"],
        "respuestaCorrecta": 3,
        "explicacion": "La propiedad row-gap permite establecer el espacio entre filas en CSS Grid."
      },
      {
        "id": 41127,
        "moduloId": 411,
        "pregunta": "¿Qué propiedad de Flexbox permite cambiar el orden visual de los elementos sin modificar el HTML?",
        "opciones": ["order", "flex-basis", "align-self", "gap"],
        "respuestaCorrecta": 0,
        "explicacion": "La propiedad 'order' permite cambiar el orden visual de los elementos sin modificar el HTML."
      },
      {
        "id": 41128,
        "moduloId": 411,
        "pregunta": "¿Qué propiedad debe tener un contenedor para que align-items afecte a sus elementos hijos?",
        "opciones": ["width: 100%;", "grid-template-rows:", "float: left;", "display: flex;"],
        "respuestaCorrecta": 3,
        "explicacion": "El contenedor debe tener display: flex; para que align-items afecte a sus elementos hijos."
      },
      {
        "id": 41129,
        "moduloId": 411,
        "pregunta": "¿Qué propiedad en CSS permite que un contenedor Flexbox haga que sus elementos hijos se ajusten al tamaño disponible?",
        "opciones": ["justify-items", "flex-grow", "flex-basis", "align-self"],
        "respuestaCorrecta": 1,
        "explicacion": "La propiedad flex-grow permite que los elementos se expandan para ocupar el espacio disponible."
      },
      {
        "id": 41130,
        "moduloId": 411,
        "pregunta": "¿Qué propiedad se usa en CSS para hacer que el ancho de un elemento no se vea afectado por el padding o el borde?",
        "opciones": ["box-sizing: border-box", "border-collapse", "display: block", "box-model"],
        "respuestaCorrecta": 0,
        "explicacion": "box-sizing: border-box incluye el padding y border dentro del ancho especificado."
      },
      {
        "id": 41131,
        "moduloId": 411,
        "pregunta": "¿Qué palabra clave evita que se siga ejecutando el resto del código en una función?",
        "opciones": ["continue", "return", "halt", "pause"],
        "respuestaCorrecta": 1,
        "explicacion": "La palabra clave 'return' hace que se deje de ejecutar el resto del código en una función y devuelve el control al punto de llamada."
      },
      {
        "id": 41132,
        "moduloId": 411,
        "pregunta": "¿Qué propiedad y valor de Flexbox permite colocar los elementos hijos en una columna?",
        "opciones": ["flex-wrap: wrap;", "flex-direction: column;", "align-items: center;", "justify-content: flex-start;"],
        "respuestaCorrecta": 1,
        "explicacion": "flex-direction: column; cambia la dirección del layout de flexbox a vertical."
      },
      {
        "id": 41133,
        "moduloId": 411,
        "pregunta": "¿Qué tipo de elemento HTML se necesita para que el usuario seleccione un archivo que luego se lea con FileReader?",
        "opciones": ["<input type=\"file\">", "<text>", "<button>", "<textarea>"],
        "respuestaCorrecta": 0,
        "explicacion": "Se necesita un elemento <input type=\"file\"> para permitir al usuario seleccionar archivos que luego puedan ser leídos con FileReader."
      },
      {
        "id": 41134,
        "moduloId": 411,
        "pregunta": "¿Qué tipo de input es necesario para leer archivos con FileReader?",
        "opciones": ["type=\"file\"", "type=\"hidden\"", "type=\"submit\"", "type=\"text\""],
        "respuestaCorrecta": 0,
        "explicacion": "Es necesario un input de type=\"file\" para leer archivos con FileReader."
      },
      {
        "id": 41135,
        "moduloId": 411,
        "pregunta": "¿Qué unidad en CSS es relativa al tamaño de fuente del elemento padre?",
        "opciones": ["rem", "px", "%", "em"],
        "respuestaCorrecta": 3,
        "explicacion": "La unidad 'em' es relativa al tamaño de fuente del elemento padre."
      },
      {
        "id": 41136,
        "moduloId": 411,
        "pregunta": "¿Qué unidad en CSS Grid permite distribuir automáticamente el espacio restante entre columnas?",
        "opciones": ["fr", "vw", "px", "%"],
        "respuestaCorrecta": 0,
        "explicacion": "La unidad 'fr' (fracción) distribuye automáticamente el espacio disponible entre columnas."
      },
      {
        "id": 41137,
        "moduloId": 411,
        "pregunta": "¿Qué valor de la propiedad flex-wrap permite que los elementos se acomoden en varias líneas si es necesario?",
        "opciones": ["reverse", "inherit", "wrap", "nowrap"],
        "respuestaCorrecta": 2,
        "explicacion": "El valor 'wrap' permite que los elementos se acomoden en varias líneas cuando sea necesario."
      },
      {
        "id": 41138,
        "moduloId": 411,
        "pregunta": "¿Qué valor devuelve document.querySelector('input[name=\"x\"]:checked') si no hay selección?",
        "opciones": ["\"undefined\"", "false", "null", "\"\""],
        "respuestaCorrecta": 2,
        "explicacion": "querySelector devuelve null si no encuentra ningún elemento que coincida con el selector."
      },
      {
        "id": 41139,
        "moduloId": 411,
        "pregunta": "En Flexbox, ¿cómo se distribuyen los elementos cuando se usa justify-content: space-between?",
        "opciones": ["Los elementos se distribuyen con espacio alrededor y dentro de ellos.", "Los elementos se alinean al centro con espacio entre ellos.", "Los elementos se colocan de manera que el espacio sea igual en todos los lados.", "Los elementos se distribuyen uniformemente con espacio entre ellos, pero no al principio ni al final."],
        "respuestaCorrecta": 3,
        "explicacion": "space-between distribuye los elementos uniformemente con espacio entre ellos, pero no al principio ni al final."
      },
      {
        "id": 41140,
        "moduloId": 411,
        "pregunta": "Si quieres que las columnas se generen automáticamente con un ancho fijo en un contenedor Grid, ¿qué propiedad utilizarías?",
        "opciones": ["grid-gap", "grid-template-rows", "grid-auto-columns", "justify-content"],
        "respuestaCorrecta": 2,
        "explicacion": "La propiedad grid-auto-columns define el tamaño de las columnas generadas automáticamente."
      }
    ]
  };
export default moduloSimulacroDosLenguajeDeMarcas;