/**
 * Datos del módulo de Estructuras de Datos en Java perteneciente a la asignatura de Programación.
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
 * // Importar el módulo de Estructuras de Datos
 * import moduloEstructurasDatos from '@data/modulos/estructurasDatos';
 *
 * function PreguntasAleatorias() {
 *   // Seleccionar 5 preguntas aleatorias del módulo
 *   const preguntasAleatorias = moduloEstructurasDatos.preguntas
 *     .sort(() => 0.5 - Math.random())
 *     .slice(0, 5);
 *
 *   return (
 *     <div>
 *       <h2>{moduloEstructurasDatos.nombre}</h2>
 *       {preguntasAleatorias.map(pregunta => (
 *         <QuestionCard key={pregunta.id} pregunta={pregunta} />
 *       ))}
 *     </div>
 *   );
 * }
 */
export const moduloSimulacroMayo = {
    id: 410,
    nombre: "Simulacro de examen de Lenguaje de Marcas (04/05/2025)",
    asignaturaId: 4,
    esExamen: true,
    descripcion: "Simulacro de examen con preguntas tipo test sobre contenidos clave del módulo Lenguaje de Marcas. Incluye ejercicios sobre HTML, XML, CSS y herramientas relacionadas, pensado como repaso previo al examen.",
    preguntas: [
      {
        "id": 4101,
        "moduloId": 101,
        "pregunta": "¿Qué combinación de clases Bootstrap permite tener 3 columnas iguales en pantallas medianas en adelante?",
        "opciones": [".col-lg-3", ".col-sm-6", ".col-12", ".col-md-4"],
        "respuestaCorrecta": 3,
        "explicacion": "La clase .col-md-4 divide el contenedor en 3 columnas iguales en pantallas medianas y mayores."
      },
      {
        "id": 4102,
        "moduloId": 101,
        "pregunta": "En Bootstrap, ¿qué clase debes usar junto con d-flex para centrar contenido verticalmente?",
        "opciones": [" .justify-content-center", ".text-center", ".align-items-center", ".m-auto"],
        "respuestaCorrecta": 2,
        "explicacion": "La clase .align-items-center es la que centra los elementos verticalmente cuando se usa con .d-flex."
      },
      {
        "id": 4103,
        "moduloId": 101,
        "pregunta": "¿Qué clase de Bootstrap hace que una imagen se adapte al ancho del contenedor manteniendo su proporción?",
        "opciones": [" .img-responsive", ".responsive-img", ".img-full", ".img-fluid"],
        "respuestaCorrecta": 3,
        "explicacion": "La clase .img-fluid asegura que la imagen se ajuste al ancho de su contenedor manteniendo su proporción."
      },
      {
        "id": 4104,
        "moduloId": 101,
        "pregunta": "¿Cuál es la diferencia principal entre box-sizing: content-box y box-sizing: border-box en CSS?",
        "opciones": ["No hay ninguna diferencia entre ambas propiedades", "border-box incluye padding y borde dentro del ancho y alto especificado", "content-box incluye borde y padding en el tamaño total", "border-box no permite usar padding"],
        "respuestaCorrecta": 1,
        "explicacion": "La propiedad box-sizing: border-box incluye el padding y el borde dentro de las dimensiones especificadas del elemento."
      },
      {
        "id": 4105,
        "moduloId": 101,
        "pregunta": "¿Qué significa el valor auto en la propiedad margin de CSS?",
        "opciones": ["Elimina los márgenes", "Ajusta el margen al tamaño del contenido", "Aplica el margen por defecto del navegador", "Centra el elemento horizontalmente"],
        "respuestaCorrecta": 3,
        "explicacion": "El valor auto en margin se usa comúnmente para centrar un elemento horizontalmente en su contenedor."
      },
      {
        "id": 4106,
        "moduloId": 101,
        "pregunta": "¿Cuál de estas propiedades permite aplicar una animación en CSS?",
        "opciones": ["hover", "motion", "animate", "transition"],
        "respuestaCorrecta": 3,
        "explicacion": "La propiedad .transition se usa para aplicar transiciones de animación en CSS, mientras que otras como .animate no existen de forma nativa."
      },
      {
        "id": 4107,
        "moduloId": 101,
        "pregunta": "¿Qué propiedad CSS permite definir el espacio entre filas y columnas en CSS Grid?",
        "opciones": ["margin", "gap", "spacing", "padding"],
        "respuestaCorrecta": 1,
        "explicacion": "La propiedad .gap se utiliza en CSS Grid para definir el espacio entre las filas y columnas."
      },
      {
        "id": 4108,
        "moduloId": 101,
        "pregunta": "¿Cuál es el valor de display para ocultar un elemento completamente en CSS?",
        "opciones": ["opacity: 0", "display: none", "hidden: true", "visibility: hidden"],
        "respuestaCorrecta": 1,
        "explicacion": "La propiedad .display: none oculta el elemento completamente, sin ocupar espacio en el flujo del documento."
      },
      {
        "id": 4109,
        "moduloId": 101,
        "pregunta": "¿Qué propiedad CSS se usa para aplicar sombra a un texto?",
        "opciones": ["text-shadow", "font-shadow", "shadow-text", "box-shadow"],
        "respuestaCorrecta": 0,
        "explicacion": "La propiedad .text-shadow se usa para agregar sombra al texto en CSS."
      },
      {
        "id": 4110,
        "moduloId": 101,
        "pregunta": "Para que align-items afecte a los elementos hijos, ¿qué propiedad debe tener el contenedor?",
        "opciones": ["float: left;", "width: 100%;", "grid-template-rows:", "display: flex;"],
        "respuestaCorrecta": 3,
        "explicacion": "La propiedad .display: flex en el contenedor permite que .align-items afecte a los elementos hijos."
      },
      {
        "id": 4111,
        "moduloId": 101,
        "pregunta": "¿Qué unidad de medida en CSS representa un tamaño fijo, sin depender del contexto?",
        "opciones": ["px", "rem", "em", "%"],
        "respuestaCorrecta": 0,
        "explicacion": "La unidad px es fija y no depende del contexto o del tamaño de la fuente."
      },
      {
        "id": 4112,
        "moduloId": 101,
        "pregunta": "¿Qué afirmación sobre gap y margin es correcta?",
        "opciones": ["Ambas propiedades se usan solo en Grid", "margin es más precisa que gap", "gap reemplaza a margin", "gap separa elementos entre sí, margin separa un elemento del exterior"],
        "respuestaCorrecta": 3,
        "explicacion": "La propiedad gap se usa para separar elementos entre sí en Grid, mientras que margin separa los elementos del exterior."
      },
      {
        "id": 4113,
        "moduloId": 101,
        "pregunta": "¿Qué unidad en CSS es relativa al tamaño de fuente del elemento raíz (<html>) y no al padre?",
        "opciones": ["rem", "pt", "em", "vh"],
        "respuestaCorrecta": 0,
        "explicacion": "La unidad rem es relativa al tamaño de la fuente del elemento raíz (<html>), mientras que em es relativa al tamaño de fuente del elemento padre."
      },
      {
        "id": 4114,
        "moduloId": 101,
        "pregunta": "¿Qué ocurre si usamos display: grid; sin definir filas ni columnas?",
        "opciones": ["Los elementos se superponen", "No cambia nada", "Se crea una cuadrícula automática", "Se aplica block"],
        "respuestaCorrecta": 2,
        "explicacion": "Cuando se usa display: grid sin definir filas ni columnas, CSS crea una cuadrícula automática con los elementos."
      },
      {
        "id": 4115,
        "moduloId": 101,
        "pregunta": "¿Cuál es el propósito de usar repeat(3, 1fr) en una definición de columnas en CSS Grid?",
        "opciones": ["Distribuye el contenido en 3 columnas iguales dentro del espacio disponible", "Se usa para repetir colores de fondo", "Agrupa columnas por nombre", "Define tres márgenes horizontales"],
        "respuestaCorrecta": 0,
        "explicacion": "La función repeat(3, 1fr) distribuye el contenido en 3 columnas iguales dentro del espacio disponible, donde 1fr significa una fracción del espacio disponible."
      },
      {
        "id": 4116,
        "moduloId": 101,
        "pregunta": "¿Qué sintaxis es válida para declarar zonas con nombre en una cuadrícula de CSS Grid?",
        "opciones": ["grid-position: \"nav\" \"content\";", "grid-template: repeat(2, 1fr);", "grid-template-columns: 1fr 1fr;", "grid-template-areas: \"nav nav\" \"content aside\";"],
        "respuestaCorrecta": 3,
        "explicacion": "La propiedad grid-template-areas permite declarar zonas con nombre en CSS Grid, como en el ejemplo \"nav nav\" \"content aside\"."
      },
      {
        "id": 4117,
        "moduloId": 101,
        "pregunta": "En un contenedor con display: flex, ¿qué propiedad se utiliza para alinear los elementos horizontalmente (a lo largo del eje principal)?",
        "opciones": ["align-items", "flex-direction", "order", "justify-content"],
        "respuestaCorrecta": 3,
        "explicacion": "La propiedad justify-content se utiliza para alinear los elementos a lo largo del eje principal en un contenedor flex."
      },
      {
        "id": 4118,
        "moduloId": 101,
        "pregunta": "¿Qué valor de Flexbox hace que los elementos no se queden todos en una misma línea si no hay espacio suficiente?",
        "opciones": ["flex-shrink: 0;", "flex-wrap: wrap;", "justify-content: space-around;", "flex-grow: 1;"],
        "respuestaCorrecta": 1,
        "explicacion": "La propiedad flex-wrap: wrap permite que los elementos se muevan a una nueva línea si no hay suficiente espacio en la línea actual."
      },
      {
        "id": 4119,
        "moduloId": 101,
        "pregunta": "¿Qué valor de justify-content en Flexbox distribuye los elementos dejando espacio entre ellos, pero no en los bordes?",
        "opciones": ["space-around", "center", "space-between", "space-evenly"],
        "respuestaCorrecta": 2,
        "explicacion": "La propiedad justify-content: space-between distribuye los elementos dejando espacio entre ellos, pero sin espacio en los bordes."
      },
      {
        "id": 4120,
        "moduloId": 101,
        "pregunta": "¿Qué afirmación sobre el atributo id en HTML es correcta?",
        "opciones": ["Solo se puede usar en formularios", "Puede aplicarse a varios elementos", "Debe ser único dentro de la página", "Se escribe con punto (.)"],
        "respuestaCorrecta": 2,
        "explicacion": "El atributo id debe ser único dentro de la página. No se debe usar en más de un elemento."
      },
      {
        "id": 4121,
        "moduloId": 102,
        "pregunta": "¿Qué atributo de la etiqueta <img> se utiliza para mostrar un texto alternativo si la imagen no se carga?",
        "opciones": ["text", "alt", "description", "title"],
        "respuestaCorrecta": 1,
        "explicacion": "El atributo alt es utilizado para proporcionar un texto alternativo que se muestra cuando la imagen no se carga."
      },
      {
        "id": 4122,
        "moduloId": 102,
        "pregunta": "¿Qué atributo HTML es necesario para que un campo <input> de tipo checkbox esté seleccionado por defecto?",
        "opciones": ["value", "selected", "default", "checked"],
        "respuestaCorrecta": 3,
        "explicacion": "El atributo checked se usa en los checkboxes para indicar que deben estar seleccionados por defecto."
      },
      {
        "id": 4123,
        "moduloId": 102,
        "pregunta": "¿Qué método permite seleccionar elementos del DOM por su atributo name?",
        "opciones": ["querySelector()", "getElementById()", "getElementsByName()", "getElementsByClassName()"],
        "respuestaCorrecta": 2,
        "explicacion": "El método getElementsByName() permite seleccionar elementos en el DOM por su atributo name."
      },
      {
        "id": 4124,
        "moduloId": 102,
        "pregunta": "¿Qué propiedad contiene el contenido del archivo leído en un FileReader dentro del evento onload?",
        "opciones": ["e.target.value", "e.target.result", "e.result", "e.file.content"],
        "respuestaCorrecta": 1,
        "explicacion": "La propiedad e.target.result contiene el contenido del archivo leído por el FileReader."
      },
      {
        "id": 4125,
        "moduloId": 102,
        "pregunta": "¿Qué evento debe capturarse para ejecutar código tras leer un archivo con FileReader?",
        "opciones": ["oncomplete", "ondone", "onload", "onread"],
        "respuestaCorrecta": 2,
        "explicacion": "El evento onload se dispara cuando un archivo es completamente leído por el FileReader."
      },
      {
        "id": 4126,
        "moduloId": 102,
        "pregunta": "¿Qué método de JavaScript convierte una lista de nodos en un array, usada en el proceso para importar o exportar XML?",
        "opciones": ["convertToArray()", "listToArray()", "toArray()", "Array.from()"],
        "respuestaCorrecta": 3,
        "explicacion": "El método Array.from() convierte una lista de nodos o cualquier objeto iterable en un array."
      },
      {
        "id": 4127,
        "moduloId": 102,
        "pregunta": "¿Qué evento de JavaScript se dispara cuando un formulario es enviado?",
        "opciones": ["onsubmit", "onwrite", "oninput", "onchange"],
        "respuestaCorrecta": 0,
        "explicacion": "El evento onsubmit se dispara cuando un formulario es enviado."
      },
      {
        "id": 4128,
        "moduloId": 102,
        "pregunta": "¿Qué método de localStorage permite eliminar un elemento por su clave?",
        "opciones": ["remove()", "deleteItem()", "localStorage.delete()", "localStorage.removeItem()"],
        "respuestaCorrecta": 3,
        "explicacion": "El método localStorage.removeItem() permite eliminar un elemento del almacenamiento local usando su clave."
      },
      {
        "id": 4129,
        "moduloId": 102,
        "pregunta": "¿Qué hace la propiedad .innerText en JavaScript?",
        "opciones": ["Cambia el valor de un botón", "Modifica el atributo value de un input", "Muestra o modifica el texto visible de un elemento", "Inserta etiquetas HTML"],
        "respuestaCorrecta": 2,
        "explicacion": ".innerText permite leer o modificar el texto visible dentro de un elemento."
      },
      {
        "id": 4130,
        "moduloId": 102,
        "pregunta": "¿Qué valor devuelve element.value si el elemento existe pero el campo está vacío?",
        "opciones": ["null", "false", "undefined", "\"\""],
        "respuestaCorrecta": 3,
        "explicacion": "Si el campo está vacío, element.value devuelve una cadena vacía (\"\"), no null ni undefined."
      },
      {
        "id": 4131,
        "moduloId": 103,
        "pregunta": "¿Qué hace document.querySelector(\"input[type='email']\")?",
        "opciones": ["Selecciona cualquier input", "Selecciona el primer input de tipo email", "Crea un input automáticamente", "Selecciona todos los campos de texto"],
        "respuestaCorrecta": 1,
        "explicacion": "El método querySelector selecciona el primer elemento que coincide con el selector CSS proporcionado. En este caso, selecciona el primer input de tipo email."
      },
      {
        "id": 4132,
        "moduloId": 103,
        "pregunta": "¿Cuál de estas formas es correcta para reaccionar a un clic en un botón en JavaScript moderno?",
        "opciones": ["addClick(btn, function)", "document.querySelector(\"#btn\").addEventListener(\"click\", function() { /*...*/ })", "click(btn, function)", "btn.on(\"click\", function)"],
        "respuestaCorrecta": 1,
        "explicacion": "La forma correcta en JavaScript moderno es usar addEventListener para escuchar eventos, como en 'document.querySelector(\"#btn\").addEventListener(\"click\", function() {...})'."
      },
      {
        "id": 4133,
        "moduloId": 103,
        "pregunta": "¿Qué selecciona document.querySelector(\".activo\")?",
        "opciones": ["El primer elemento con id=\"activo\"", "El primer elemento con clase activo", "Todos los elementos activos", "Una lista de nodos con esa clase"],
        "respuestaCorrecta": 1,
        "explicacion": "El método querySelector selecciona el primer elemento que tiene la clase especificada. En este caso, selecciona el primer elemento con la clase 'activo'."
      },
      {
        "id": 4134,
        "moduloId": 103,
        "pregunta": "¿Cuál de estas propiedades se utiliza para acceder o cambiar el texto que un usuario ve en pantalla (sin etiquetas HTML)?",
        "opciones": [".placeholder", ".value", ".innerText", ".innerHTML"],
        "respuestaCorrecta": 2,
        "explicacion": "La propiedad .innerText se utiliza para acceder o cambiar el texto visible de un elemento, excluyendo cualquier HTML que pueda estar dentro."
      },
      {
        "id": 4135,
        "moduloId": 103,
        "pregunta": "¿Qué método de localStorage sirve para guardar un valor?",
        "opciones": ["localStorage.save()", "set()", "storeItem()", "setItem()"],
        "respuestaCorrecta": 3,
        "explicacion": "El método setItem() de localStorage permite almacenar un valor asociado a una clave."
      },
      {
        "id": 4136,
        "moduloId": 103,
        "pregunta": "¿Qué propiedad de un input de tipo file permite acceder al archivo seleccionado?",
        "opciones": ["input.file", "input.files[0]", "input.selectedFile", "input.value"],
        "respuestaCorrecta": 1,
        "explicacion": "La propiedad files de un input de tipo file contiene una lista de los archivos seleccionados. Se accede al primer archivo con input.files[0]."
      },
      {
        "id": 4137,
        "moduloId": 103,
        "pregunta": "¿Cuál de estos objetos permite convertir el contenido de un archivo en texto en el navegador?",
        "opciones": ["FileReader", "DocumentReader", "JSONParser", "LocalStorage"],
        "respuestaCorrecta": 0,
        "explicacion": "El objeto FileReader permite leer archivos de manera asíncrona y convertirlos en texto o en otros formatos."
      },
      {
        "id": 4138,
        "moduloId": 103,
        "pregunta": "¿Cuál de los siguientes métodos devuelve un documento navegable a partir de texto XML?",
        "opciones": ["DOMParser.parseFromString()", "XMLLoader.parse()", "createElementFromXML()", "FileParser.readAsDOM()"],
        "respuestaCorrecta": 0,
        "explicacion": "El método DOMParser.parseFromString() se usa para analizar un texto XML y convertirlo en un documento DOM navegable."
      },
      {
        "id": 4139,
        "moduloId": 103,
        "pregunta": "¿Cómo se accede al texto que contiene una etiqueta XML, como <nombre>Juan</nombre>?",
        "opciones": [".text()", ".innerValue", ".nodeText", ".textContent"],
        "respuestaCorrecta": 3,
        "explicacion": "La propiedad .textContent se utiliza para obtener el texto contenido en una etiqueta XML o HTML."
      },
      {
        "id": 4140,
        "moduloId": 103,
        "pregunta": "¿Qué método permite acceder a todos los nodos <persona> en un XML parseado?",
        "opciones": ["getElementsByTagName(\"persona\")", "getXMLNodes(\"persona\")", "getElementsByClass(\"persona\")", "getElementByName(\"persona\")"],
        "respuestaCorrecta": 0,
        "explicacion": "El método getElementsByTagName() permite obtener todos los elementos que tienen el nombre de etiqueta especificado, en este caso, <persona>."
      }
    ]
  };
export default moduloSimulacroMayo;