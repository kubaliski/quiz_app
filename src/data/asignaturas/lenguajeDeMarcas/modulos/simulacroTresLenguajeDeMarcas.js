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
export const moduloSimulacroTresLenguajeMarcas= {
    id: 412,
    nombre: "Simulacro de examen de Lenguaje de Marcas 2 (10/05/2025) REMIX 1-2",
    esExamen: true,
    asignaturaId: 4,
    descripcion: "Implementación de HTML5, CSS3, XML, Grid, Flexbox, JavaScript y FileReader.",
    preguntas: [
      {
        id: 41201,
        moduloId: 412,
        pregunta: "¿Cómo se accede al texto dentro de una etiqueta XML, como <nombre>Juan</nombre>?",
        opciones: [
          ".nodeText",
          ".text()",
          ".innerValue",
          ".textContent"
        ],
        respuestaCorrecta: 3,
        explicacion: "La propiedad .textContent permite acceder al contenido textual de un nodo en un documento XML o HTML. Esta propiedad devuelve todo el texto contenido en el nodo y sus descendientes, sin incluir las etiquetas HTML/XML. Por ejemplo, si tenemos '<nombre>Juan</nombre>', utilizando elemento.textContent obtendríamos 'Juan'. Es una manera estándar y directa de obtener o modificar el contenido textual de un elemento en DOM."
      },
      {
        id: 41202,
        moduloId: 412,
        pregunta: "¿Qué sintaxis es válida para declarar zonas con nombre en una cuadrícula de CSS Grid?",
        opciones: [
          "grid-template-areas: \"nav nav\"\"content aside\";",
          "grid-position: \"nav\"\"content\";",
          "grid-template: repeat(2, 1fr);",
          "grid-template-columns: 1fr 1fr;"
        ],
        respuestaCorrecta: 0,
        explicacion: "La propiedad grid-template-areas permite definir áreas nombradas en un diseño de CSS Grid. La sintaxis correcta requiere que cada fila se defina entre comillas y diferentes filas se separen también por comillas. En el ejemplo 'grid-template-areas: \"nav nav\"\"content aside\"', se define una cuadrícula con dos filas: la primera fila contiene un área 'nav' que ocupa dos columnas, y la segunda fila tiene un área 'content' y otra 'aside'. Cada cadena representa una fila y cada palabra dentro de la cadena representa una celda en esa fila."
      },
      {
        id: 41203,
        moduloId: 412,
        pregunta: "¿Cómo se indica en Flexbox que los elementos deben organizarse de arriba a abajo, en vez de de izquierda a derecha?",
        opciones: [
          "align-self: stretch;",
          "display: inline-flex;",
          "flex-direction: column;",
          "justify-items: center;"
        ],
        respuestaCorrecta: 2,
        explicacion: "En Flexbox, la propiedad flex-direction determina la dirección del eje principal, es decir, cómo se distribuyen los elementos dentro del contenedor flexible. Por defecto, flex-direction tiene el valor 'row', lo que hace que los elementos se organicen horizontalmente (de izquierda a derecha). Al establecer flex-direction: column;, cambiamos la dirección para que los elementos se organicen verticalmente (de arriba a abajo). Esto es especialmente útil para crear diseños responsivos o estructuras de tipo columna."
      },
      {
        id: 41204,
        moduloId: 412,
        pregunta: "¿Cuál de estas propiedades de Flexbox permite cambiar el orden visual de los elementos sin modificar el HTML?",
        opciones: [
          "gap",
          "order",
          "align-self",
          "flex-basis"
        ],
        respuestaCorrecta: 1,
        explicacion: "La propiedad order en Flexbox permite cambiar el orden de aparición de los elementos flexibles sin modificar el HTML subyacente. Por defecto, todos los elementos tienen un valor de order igual a 0, y se muestran en el orden en que aparecen en el HTML. Al asignar valores numéricos a la propiedad order, se puede alterar este orden: los elementos con valores más bajos aparecerán primero, mientras que los valores más altos aparecerán después. Esto facilita la reorganización del contenido según diferentes contextos o tamaños de pantalla."
      },
      {
        id: 41205,
        moduloId: 412,
        pregunta: "¿Cuál de estos objetos permite convertir el contenido de un archivo en texto en el navegador?",
        opciones: [
          "JSONParser",
          "LocalStorage;",
          "DocumentReader",
          "FileReader"
        ],
        respuestaCorrecta: 3,
        explicacion: "FileReader es un objeto de la API de archivo de JavaScript que permite leer el contenido de archivos desde el sistema de archivos del usuario. Se utiliza comúnmente con elementos de entrada de tipo 'file' para procesar archivos seleccionados por el usuario antes de subirlos a un servidor o manipularlos localmente. El método readAsText() de FileReader convierte el contenido del archivo en una cadena de texto, lo que es útil para procesar archivos de texto, CSV, XML, etc. Una vez completada la lectura, el resultado está disponible en la propiedad result del objeto FileReader."
      },
      {
        id: 41206,
        moduloId: 412,
        pregunta: "¿Cuál de las siguientes clases de Bootstrap crea una fila que puede contener columnas?",
        opciones: [
          ".d-flex",
          ".col-12",
          ".row",
          ".grid-template"
        ],
        respuestaCorrecta: 2,
        explicacion: "En el sistema de rejilla (grid) de Bootstrap, la clase .row define un contenedor de fila que puede albergar columnas. Esta clase aplica un display: flex junto con otras propiedades para crear un contenedor flexible con margen negativo que compensa los paddings de las columnas. Las columnas (con clases como .col, .col-md-6, etc.) deben colocarse directamente dentro de elementos con la clase .row para mantener la estructura adecuada y aprovechar correctamente el sistema de rejilla de Bootstrap."
      },
      {
        id: 41207,
        moduloId: 412,
        pregunta: "¿Cuál de las siguientes es una forma correcta de insertar una imagen en HTML?",
        opciones: [
          "<img href=\"foto.jpg\">",
          "<img src=\"foto.jpg\">",
          "<image src=\"foto.jpg\">",
          "<pic src=\"foto.jpg\">"
        ],
        respuestaCorrecta: 1,
        explicacion: "La forma correcta de insertar una imagen en HTML es utilizando la etiqueta <img> con el atributo src para especificar la ruta de la imagen. La sintaxis correcta es <img src=\"foto.jpg\">. El atributo src (source) especifica la URL o la ruta de la imagen que se va a mostrar. Es importante recordar que <img> es una etiqueta de autocierre en HTML5, por lo que no necesita una etiqueta de cierre explícita, aunque también es válido escribirla como <img src=\"foto.jpg\" />."
      },
      {
        id: 41208,
        moduloId: 412,
        pregunta: "¿Cuál es la diferencia principal entre box-sizing: content-box y box-sizing: border-box en CSS?",
        opciones: [
          "No hay ninguna diferencia entre ambas propiedades",
          "content-box incluye borde y padding en el tamaño total",
          "border-box incluye padding y borde dentro del ancho y alto especificado",
          "border-box no permite usar padding"
        ],
        respuestaCorrecta: 2,
        explicacion: "La diferencia principal entre box-sizing: content-box y box-sizing: border-box está en cómo se calcula el tamaño total de un elemento. Con content-box (valor predeterminado), el ancho y alto especificados solo se aplican al contenido del elemento, y se añaden el padding y el borde. Esto significa que el tamaño total será la suma de ancho/alto + padding + borde. Con border-box, el ancho y alto especificados incluyen el contenido, el padding y el borde, lo que facilita el diseño ya que el tamaño total del elemento es exactamente el que se ha especificado. Esto es especialmente útil en diseños responsivos y cuando se trabaja con porcentajes."
      },
      {
        id: 41209,
        moduloId: 412,
        pregunta: "¿Cuál es la función de la propiedad align-content en CSS Grid?",
        opciones: [
          "Controlar la alineación de las áreas de la cuadrícula en el contenedor.",
          "Controlar el espaciado entre las columnas.",
          "Controlar cómo se alinean las filas dentro de un contenedor.",
          "Definir el comportamiento de los elementos dentro de una celda de la cuadrícula."
        ],
        respuestaCorrecta: 2,
        explicacion: "La propiedad align-content en CSS Grid controla cómo se alinean las filas dentro del contenedor de la cuadrícula cuando hay espacio adicional en el eje vertical (cross-axis). Esta propiedad solo tiene efecto cuando hay múltiples filas y existe espacio libre en el contenedor. Algunos valores comunes incluyen 'start' (alinea filas al inicio del contenedor), 'end' (al final), 'center' (centra las filas), 'space-between' (distribuye el espacio uniformemente entre las filas) y 'stretch' (estira las filas para ocupar todo el espacio disponible). Es similar a la propiedad del mismo nombre en Flexbox, pero aplicada al contexto de Grid."
      },
      {
        id: 41210,
        moduloId: 412,
        pregunta: "¿Cuál es la función del elemento <aside> en HTML5?",
        opciones: [
          "Sirve para definir secciones principales de la página",
          "Es un sinónimo de main",
          "Reemplaza al main cuando hay imágenes",
          "Representa contenido tangencial o complementario al contenido principal"
        ],
        respuestaCorrecta: 3,
        explicacion: "En HTML5, el elemento <aside> se utiliza para representar contenido que está tangencialmente relacionado con el contenido principal de la página, pero que podría considerarse separado de ese contenido. Típicamente se utiliza para barras laterales, publicidad, grupos de elementos de navegación, o cualquier otro contenido que se considere separado del contenido principal pero que aún está relacionado con él de alguna manera. El <aside> es parte de los elementos semánticos de HTML5 que ayudan a estructurar mejor el contenido y mejorar la accesibilidad y SEO de las páginas web."
      },
      {
        id: 41211,
        moduloId: 412,
        pregunta: "¿Cuál es la propiedad de CSS Grid que define el número de filas en una cuadrícula?",
        opciones: [
          "grid-auto-rows",
          "grid-template-columns",
          "grid-template-rows",
          "grid-template-areas"
        ],
        respuestaCorrecta: 2,
        explicacion: "La propiedad grid-template-rows en CSS Grid se utiliza para definir el número y tamaño de las filas en una cuadrícula. Permite especificar explícitamente cuántas filas tendrá la cuadrícula y cómo se distribuirá el espacio entre ellas. Por ejemplo, grid-template-rows: 100px 200px; crea una cuadrícula con dos filas: la primera de 100px y la segunda de 200px de altura. También se pueden usar otras unidades como porcentajes, fr (fracciones), auto, o funciones como minmax() y repeat() para definiciones más flexibles."
      },
      {
        id: 41212,
        moduloId: 412,
        pregunta: "¿Qué afirmación sobre el atributo id en HTML es correcta?",
        opciones: [
          "Puede aplicarse a varios elementos",
          "Se escribe con punto (.)",
          "Debe ser único dentro de la página",
          "Solo se puede usar en formularios"
        ],
        respuestaCorrecta: 2,
        explicacion: "La afirmación correcta sobre el atributo id en HTML es que debe ser único dentro de la página. Cada id debe ser único en todo el documento HTML, lo que significa que no puede haber dos elementos con el mismo valor de id. Esto es importante porque los identificadores se utilizan para identificar elementos específicos con JavaScript, para vincular etiquetas de formulario con sus controles, y para navegación con anclas. En CSS, los selectores de id se escriben con el símbolo # (por ejemplo, #miId), no con punto, que se usa para clases."
      },
      {
        id: 41213,
        moduloId: 412,
        pregunta: "¿Qué atributo de la etiqueta <img> se utiliza para mostrar un texto alternativo si la imagen no se carga?",
        opciones: [
          "alt",
          "description",
          "text",
          "title"
        ],
        respuestaCorrecta: 0,
        explicacion: "El atributo 'alt' (alternativo) en la etiqueta <img> se utiliza para proporcionar un texto descriptivo que se mostrará si la imagen no puede cargarse. Este atributo es fundamental para la accesibilidad web, ya que permite a los lectores de pantalla describir la imagen a usuarios con discapacidad visual. También es útil para el SEO, ya que los motores de búsqueda utilizan este texto para entender el contenido de la imagen. La sintaxis correcta es <img src=\"ruta-imagen.jpg\" alt=\"Descripción de la imagen\">."
      },
      {
        id: 41214,
        moduloId: 412,
        pregunta: "¿Qué clase de Bootstrap aplica bordes redondeados a una imagen sin hacerla circular?",
        opciones: [
          ".img-soft",
          ".rounded",
          ".rounded-circle",
          ".img-rounded"
        ],
        respuestaCorrecta: 1,
        explicacion: "En Bootstrap, la clase .rounded se utiliza para aplicar bordes redondeados a una imagen (o cualquier otro elemento) sin convertirla en un círculo perfecto. Esta clase añade un border-radius moderado a todos los lados del elemento, creando esquinas suavizadas. Si se desea una imagen completamente circular, se usaría .rounded-circle en su lugar. Bootstrap 5 también ofrece variantes como .rounded-top, .rounded-end, .rounded-bottom, .rounded-start para redondear solo lados específicos, y .rounded-pill para bordes más pronunciados en forma de píldora."
      },
      {
        id: 41215,
        moduloId: 412,
        pregunta: "¿Qué combinación de propiedades permite nombrar áreas en una cuadrícula CSS y luego asignarlas a elementos?",
        opciones: [
          "grid-template-areas y grid-area",
          "justify-content y align-items",
          "grid-template-columns y grid-template-rows",
          "grid-columns y grid-rows"
        ],
        respuestaCorrecta: 0,
        explicacion: "La combinación de propiedades que permite nombrar áreas en CSS Grid y asignarlas a elementos específicos es grid-template-areas y grid-area. Primero, grid-template-areas se utiliza en el contenedor para definir una plantilla visual de la cuadrícula usando nombres para las áreas. Por ejemplo: grid-template-areas: 'header header' 'nav main' 'footer footer';. Luego, grid-area se utiliza en los elementos hijos para asignarlos a las áreas nombradas, como grid-area: header;. Esta técnica facilita la creación de diseños complejos y responsivos sin necesidad de cambiar la estructura HTML."
      },
      {
        id: 41216,
        moduloId: 412,
        pregunta: "¿Qué contiene e.target.result dentro del evento onload del FileReader?",
        opciones: [
          "El nombre del archivo",
          "El contenido del archivo leído",
          "El tipo MIME del archivo",
          "El tamaño del archivo"
        ],
        respuestaCorrecta: 1,
        explicacion: "Cuando se utiliza un objeto FileReader y se escucha su evento 'load' (o se asigna una función a su propiedad onload), e.target.result contiene el contenido del archivo leído. El formato exacto de este contenido depende del método de lectura utilizado: si se usó readAsText(), será una cadena de texto; si se usó readAsDataURL(), será una URL de datos; si se usó readAsArrayBuffer(), será un ArrayBuffer. Esta propiedad solo está disponible después de que la lectura se haya completado exitosamente, lo que se indica mediante el disparo del evento 'load'."
      },
      {
        id: 41217,
        moduloId: 412,
        pregunta: "¿Qué contiene e.target.result cuando se utiliza readAsText() con FileReader?",
        opciones: [
          "Una cadena de texto con el contenido del archivo",
          "Un objeto JSON",
          "Un array de bytes",
          "Una cadena codificada en base64"
        ],
        respuestaCorrecta: 0,
        explicacion: "Cuando se utiliza el método readAsText() de FileReader, e.target.result contiene una cadena de texto que representa el contenido del archivo leído. Este método interpreta los datos del archivo como texto plano utilizando la codificación especificada (UTF-8 por defecto si no se proporciona ninguna). Es útil para leer archivos de texto como .txt, .csv, .html, o cualquier otro formato basado en texto. Si el archivo contiene datos binarios, readAsText() puede producir resultados inesperados, en cuyo caso sería más apropiado usar readAsArrayBuffer() o readAsDataURL()."
      },
      {
        id: 41218,
        moduloId: 412,
        pregunta: "¿Qué devuelve element.value si el campo está vacío pero el elemento existe?",
        opciones: [
          "undefined",
          "null",
          "\"\"",
          "false"
        ],
        respuestaCorrecta: 2,
        explicacion: "Cuando se accede a la propiedad value de un elemento de formulario HTML (como un <input>, <textarea> o <select>) que existe pero está vacío, se devuelve una cadena vacía (\"\"). Esto es importante tener en cuenta al validar formularios, ya que element.value nunca será undefined o null si el elemento existe; siempre será una cadena, aunque esté vacía. Para verificar si un campo está vacío, se puede comprobar si element.value es igual a una cadena vacía (element.value === \"\") o si su longitud es cero (element.value.length === 0)."
      },
      {
        id: 41219,
        moduloId: 412,
        pregunta: "¿Qué hace el grid si no se indican filas o columnas?",
        opciones: [
          "Actúa como flex",
          "Ocupa toda la pantalla",
          "Distribuye por defecto",
          "Junta todos los elementos"
        ],
        respuestaCorrecta: 2,
        explicacion: "Si se establece display: grid en un contenedor pero no se especifican filas o columnas explícitamente (sin grid-template-rows o grid-template-columns), CSS Grid crea automáticamente una cuadrícula que distribuye los elementos por defecto. Específicamente, crea una sola columna que abarca todo el ancho disponible y tantas filas como sean necesarias para acomodar todos los elementos hijos. Cada elemento hijo ocupará una fila completa. Este comportamiento se conoce como 'grid implícito' y puede ser modificado con propiedades como grid-auto-rows y grid-auto-columns."
      },
      {
        id: 41220,
        moduloId: 412,
        pregunta: "¿Qué hace el método readAsText() de FileReader en JavaScript?",
        opciones: [
          "Leer un archivo como texto plano",
          "Escribir contenido en un archivo",
          "Convertir texto en XML",
          "Leer archivos binarios"
        ],
        respuestaCorrecta: 0,
        explicacion: "El método readAsText() de FileReader en JavaScript se utiliza para leer el contenido de un archivo como texto plano. Este método toma un objeto Blob o File (generalmente obtenido de un input type=\"file\" o una operación de arrastrar y soltar) y lo interpreta como texto utilizando la codificación de caracteres especificada (UTF-8 por defecto). Una vez que la operación de lectura se completa, el resultado (el contenido del archivo como una cadena de texto) se puede acceder a través de la propiedad result del objeto FileReader. Es útil para procesar archivos de texto, CSV, XML, o cualquier otro formato basado en texto."
      },
      {
        id: 41221,
        moduloId: 412,
        pregunta: "¿Qué hace la expresión repeat(3, 1fr) dentro de grid-template-columns?",
        opciones: [
          "Establece márgenes entre columnas",
          "Crea tres columnas que comparten el espacio disponible de forma equitativa",
          "Aplica tres filas automáticas",
          "Repite el contenido tres veces"
        ],
        respuestaCorrecta: 1,
        explicacion: "La expresión repeat(3, 1fr) dentro de grid-template-columns crea tres columnas de igual tamaño que comparten el espacio disponible de forma equitativa. La función repeat() es un atajo para repetir valores en las propiedades grid-template-columns y grid-template-rows. En este caso, el primer parámetro (3) indica cuántas veces se repite el valor, y el segundo parámetro (1fr) es el valor a repetir. La unidad 'fr' (fracción) distribuye el espacio disponible proporcionalmente, por lo que cada columna recibirá 1/3 del espacio total disponible."
      },
      {
        id: 41222,
        moduloId: 412,
        pregunta: "¿Qué método convierte texto XML en un documento navegable?",
        opciones: [
          "createElementFromXML()",
          "DOMParser.parseFromString()",
          "FileParser.readAsDOM()",
          "XMLLoader.parse()"
        ],
        respuestaCorrecta: 1,
        explicacion: "El método DOMParser.parseFromString() convierte texto XML en un documento DOM navegable. Para usarlo, primero se crea una instancia del objeto DOMParser, y luego se llama a su método parseFromString() pasando el texto XML y el tipo MIME 'text/xml'. Por ejemplo: const parser = new DOMParser(); const xmlDoc = parser.parseFromString(xmlString, 'text/xml');. El resultado es un documento XML completo que se puede recorrer y manipular utilizando métodos y propiedades del DOM, como getElementsByTagName(), querySelector(), o nodeValue."
      },
      {
        id: 41223,
        moduloId: 412,
        pregunta: "¿Qué método se usa para obtener todos los nodos de un documento XML?",
        opciones: [
          "queryXML(\"persona\")",
          "getElementsByTagName(\"persona\")",
          "selectNodes(\"persona\")",
          "getElementById(\"persona\")"
        ],
        respuestaCorrecta: 1,
        explicacion: "El método getElementsByTagName() se utiliza para obtener todos los nodos con un nombre de etiqueta específico en un documento XML o HTML. Este método devuelve una colección HTML (similar a un array) de todos los elementos que coinciden con el nombre de etiqueta proporcionado. Por ejemplo, xmlDoc.getElementsByTagName(\"persona\") retornará todos los elementos <persona> en el documento XML. A diferencia de getElementById(), que devuelve un único elemento basado en su atributo id, getElementsByTagName() puede devolver múltiples elementos con el mismo nombre de etiqueta."
      },
      {
        id: 41224,
        moduloId: 412,
        pregunta: "¿Qué objeto de JavaScript se utiliza para leer el contenido de un archivo cargado por el usuario?",
        opciones: [
          "JSONParser",
          "LocalStorage",
          "DocumentReader",
          "FileReader"
        ],
        respuestaCorrecta: 3,
        explicacion: "El objeto FileReader de JavaScript se utiliza para leer el contenido de archivos cargados por el usuario a través de elementos <input type=\"file\"> o mediante operaciones de arrastrar y soltar. Este objeto proporciona métodos asincrónicos para leer diferentes tipos de contenido: readAsText() para texto plano, readAsDataURL() para obtener una URL de datos base64, readAsArrayBuffer() para datos binarios, y readAsBinaryString() para cadenas binarias. Después de iniciar la lectura, se deben usar eventos como onload o addEventListener('load', ...) para obtener el resultado cuando la operación se complete."
      },
      {
        id: 41225,
        moduloId: 412,
        pregunta: "¿Qué palabra clave en JavaScript se utiliza para devolver un valor y salir de la función?",
        opciones: [
          "exit",
          "break",
          "continue",
          "return"
        ],
        respuestaCorrecta: 3,
        explicacion: "La palabra clave return en JavaScript se utiliza para devolver un valor y salir inmediatamente de la función en la que se encuentra. Cuando se ejecuta una declaración return, la función finaliza su ejecución y devuelve el valor especificado a quien la llamó. Si no se especifica ningún valor (solo return;), la función devuelve undefined. A diferencia de break, que solo sale del bucle o switch más cercano, o continue, que salta a la siguiente iteración de un bucle, return termina completamente la ejecución de la función, sin importar en qué nivel de anidamiento se encuentre."
      },
      {
        id: 41226,
        moduloId: 412,
        pregunta: "En un contenedor con display: flex, ¿qué propiedad se utiliza para alinear los elementos horizontalmente (a lo largo del eje principal)?",
        opciones: [
          "order",
          "align-items",
          "justify-content",
          "flex-direction"
        ],
        respuestaCorrecta: 2,
        explicacion: "En un contenedor con display: flex, la propiedad justify-content se utiliza para alinear los elementos a lo largo del eje principal, que por defecto es horizontal (de izquierda a derecha). Esta propiedad distribuye el espacio entre y alrededor de los elementos flexibles. Algunos valores comunes incluyen: 'flex-start' (alinea elementos al inicio), 'flex-end' (al final), 'center' (centra los elementos), 'space-between' (distribuye elementos con espacio entre ellos), y 'space-around' (distribuye elementos con espacio alrededor de ellos). Si flex-direction es column, entonces justify-content alinearía los elementos verticalmente."
      },
      {
        id: 41227,
        moduloId: 412,
        pregunta: "¿Qué propiedad de CSS Grid permite establecer el espacio entre filas?",
        opciones: [
          "gap",
          "column-gap",
          "grid-gap",
          "row-gap"
        ],
        respuestaCorrecta: 3,
        explicacion: "La propiedad row-gap en CSS Grid permite establecer específicamente el espacio entre filas en una cuadrícula. Por ejemplo, row-gap: 20px; creará un espacio vertical de 20 pixels entre cada fila de la cuadrícula. También existe la propiedad column-gap para el espacio entre columnas, y la propiedad gap (antes conocida como grid-gap) que es un atajo para establecer tanto row-gap como column-gap en una sola declaración. La sintaxis es gap: [row-gap] [column-gap], y si solo se proporciona un valor, se aplica tanto a filas como a columnas."
      },
      {
        id: 41228,
        moduloId: 412,
        pregunta: "¿Qué propiedad de Flexbox permite cambiar el orden visual de los elementos sin modificar el HTML?",
        opciones: [
          "order",
          "flex-basis",
          "align-self",
          "gap"
        ],
        respuestaCorrecta: 0,
        explicacion: "La propiedad order de Flexbox permite cambiar el orden visual de los elementos flexibles sin necesidad de modificar la estructura HTML. Por defecto, todos los elementos tienen un order de 0, y se muestran en el orden en que aparecen en el código. Al asignar valores numéricos (positivos o negativos) a la propiedad order, se puede alterar este orden: los elementos con valores menores aparecen primero, y los de valores mayores aparecen después. Esta propiedad es especialmente útil para reorganizar elementos en diferentes tamaños de pantalla a través de media queries, mejorando así la adaptabilidad del diseño."
      },
      {
        id: 41229,
        moduloId: 412,
        pregunta: "¿Qué propiedad debe tener un contenedor para que align-items afecte a sus elementos hijos?",
        opciones: [
          "float: left;",
          "display: flex;",
          "grid-template-rows:",
          "width: 100%;"
        ],
        respuestaCorrecta: 1,
        explicacion: "Para que la propiedad align-items afecte a los elementos hijos, el contenedor debe tener display: flex; o display: grid;. En el contexto flexbox, align-items controla la alineación de los elementos a lo largo del eje transversal (perpendicular al eje principal definido por flex-direction). Con display: flex; por defecto, esto alinea verticalmente los elementos en un diseño de fila. Valores comunes para align-items incluyen flex-start, flex-end, center, baseline y stretch. Sin flex o grid, esta propiedad no tendrá ningún efecto visible en los elementos hijos."
      },
      {
        id: 41230,
        moduloId: 412,
        pregunta: "¿Qué propiedad en CSS permite que un contenedor Flexbox haga que sus elementos hijos se ajusten al tamaño disponible?",
        opciones: [
          "justify-items",
          "flex-basis",
          "flex-grow",
          "align-self"
        ],
        respuestaCorrecta: 2,
        explicacion: "La propiedad flex-grow en CSS determina la capacidad de un elemento flexible para crecer y ocupar el espacio disponible dentro de un contenedor flexbox. Un valor de flex-grow: 0; (predeterminado) significa que el elemento no crecerá más allá de su tamaño base. Cualquier valor positivo permite que el elemento crezca proporcionalmente al espacio disponible. Por ejemplo, si tres elementos tienen flex-grow de 1, 2 y 1 respectivamente, el segundo elemento recibirá el doble de espacio adicional que los otros dos. Esta propiedad es fundamental para crear diseños flexibles que se adapten a diferentes tamaños de pantalla."
      },
       {
        id: 41231,
        moduloId: 412,
        pregunta: "¿Qué propiedad se usa en CSS para hacer que el ancho de un elemento no se vea afectado por el padding o el borde?",
        opciones: [
          "display: block",
          "border-collapse",
          "box-model",
          "box-sizing: border-box"
        ],
        respuestaCorrecta: 3,
        explicacion: "La propiedad box-sizing: border-box en CSS hace que el ancho y alto de un elemento incluyan el contenido, el padding y el borde, en lugar de añadirlos. Por defecto, CSS usa el modelo de caja content-box, donde width y height solo definen el tamaño del contenido, y padding y border se añaden por fuera. Esto puede causar problemas de maquetación. Con border-box, si se establece width: 300px, ese será el ancho total del elemento incluyendo padding y border, lo que facilita el cálculo de dimensiones y hace que el diseño sea más predecible, especialmente en diseños responsivos."
      },
      {
        id: 41232,
        moduloId: 412,
        pregunta: "¿Qué propiedad y valor de Flexbox permite colocar los elementos hijos en una columna?",
        opciones: [
          "flex-wrap: wrap;",
          "flex-direction: column;",
          "justify-content: flex-start;",
          "align-items: center;"
        ],
        respuestaCorrecta: 1,
        explicacion: "La propiedad flex-direction con el valor column en Flexbox cambia la dirección del eje principal de horizontal a vertical, haciendo que los elementos flexibles se coloquen en una columna (de arriba hacia abajo) en lugar de en una fila (de izquierda a derecha). Esto también invierte los roles de las propiedades de alineación: justify-content alineará elementos verticalmente, mientras que align-items lo hará horizontalmente. También existen otros valores como row (predeterminado), row-reverse (fila de derecha a izquierda) y column-reverse (columna de abajo hacia arriba)."
      },
      {
        id: 41233,
        moduloId: 412,
        pregunta: "¿Qué unidad en CSS es relativa al tamaño de fuente del elemento padre?",
        opciones: [
          "px",
          "%",
          "rem",
          "em"
        ],
        respuestaCorrecta: 3,
        explicacion: "La unidad em en CSS es relativa al tamaño de fuente del elemento padre. Por ejemplo, si el elemento padre tiene un font-size de 16px, entonces 1em en un elemento hijo equivaldría a 16px, 2em serían 32px, etc. Esta unidad es útil para crear diseños escalables y mantener proporciones consistentes. A diferencia de em, rem es relativa al tamaño de fuente del elemento raíz (normalmente html), px es una unidad fija, y % puede ser relativo a diferentes propiedades según el contexto (ancho del padre para width, altura del padre para height, etc.)."
      },
      {
        id: 41234,
        moduloId: 412,
        pregunta: "¿Qué unidad en CSS Grid permite distribuir automáticamente el espacio restante entre columnas?",
        opciones: [
          "px",
          "fr",
          "vw",
          "%"
        ],
        respuestaCorrecta: 1,
        explicacion: "La unidad fr (fracción) en CSS Grid permite distribuir automáticamente el espacio restante entre columnas o filas. Actúa como una parte proporcional del espacio disponible después de asignar espacio a elementos con tamaños fijos. Por ejemplo, grid-template-columns: 100px 1fr 2fr; crea tres columnas: la primera de 100px fijos, y las otras dos compartiendo el espacio restante en proporción 1:2 (la tercera columna será el doble de ancha que la segunda). Esta unidad es exclusiva de CSS Grid y facilita enormemente la creación de diseños flexibles y responsivos."
      },
      {
        id: 41235,
        moduloId: 412,
        pregunta: "¿Qué valor de la propiedad flex-wrap permite que los elementos se acomoden en varias líneas si es necesario?",
        opciones: [
          "reverse",
          "inherit",
          "wrap",
          "nowrap"
        ],
        respuestaCorrecta: 2,
        explicacion: "El valor wrap de la propiedad flex-wrap permite que los elementos flexibles se coloquen en múltiples líneas si no caben en una sola línea dentro del contenedor. Por defecto, flex-wrap tiene el valor nowrap, lo que hace que todos los elementos se compriman para caber en una sola línea, pudiendo causar desbordamiento o elementos muy estrechos. Al establecer flex-wrap: wrap;, los elementos mantendrán su tamaño natural y se moverán a una nueva línea cuando sea necesario, similar al comportamiento de texto en un párrafo. También existe wrap-reverse, que coloca las líneas adicionales por encima de la primera."
      },
      {
        id: 41236,
        moduloId: 412,
        pregunta: "En Flexbox, ¿cómo se distribuyen los elementos cuando se usa justify-content: space-between?",
        opciones: [
          "Los elementos se distribuyen con espacio alrededor y dentro de ellos.",
          "Los elementos se alinean al centro con espacio entre ellos.",
          "Los elementos se colocan de manera que el espacio sea igual en todos los lados.",
          "Los elementos se distribuyen uniformemente con espacio entre ellos, pero no al principio ni al final."
        ],
        respuestaCorrecta: 3,
        explicacion: "Cuando se usa justify-content: space-between; en Flexbox, los elementos se distribuyen uniformemente a lo largo del eje principal (horizontal por defecto), de modo que el primer elemento se alinea al inicio, el último al final, y el espacio restante se distribuye equitativamente entre los elementos. Esto crea espacios iguales entre elementos, pero no deja espacio antes del primer elemento ni después del último. Es útil para crear distribuciones que ocupen todo el ancho del contenedor con elementos distribuidos de manera uniforme de extremo a extremo."
      },
      {
        id: 41237,
        moduloId: 412,
        pregunta: "Si quieres que las columnas se generen automáticamente con un ancho fijo en un contenedor Grid, ¿qué propiedad utilizarías?",
        opciones: [
          "grid-template-rows",
          "grid-gap",
          "justify-content",
          "grid-auto-columns"
        ],
        respuestaCorrecta: 3,
        explicacion: "La propiedad grid-auto-columns se utiliza para especificar el tamaño de las columnas generadas automáticamente en un contenedor Grid. Cuando se colocan elementos fuera de la cuadrícula explícitamente definida (con grid-template-columns), CSS Grid crea columnas implícitas con el tamaño especificado por grid-auto-columns. Por ejemplo, grid-auto-columns: 100px; hará que todas las columnas generadas automáticamente tengan un ancho de 100px. Esta propiedad es útil cuando el número exacto de columnas no se conoce de antemano o cuando se trabaja con posicionamiento grid explícito."
      },
      {
        id: 41238,
        moduloId: 412,
        pregunta: "¿Qué método de JavaScript se usa para obtener un elemento HTML por su atributo id?",
        opciones: [
          "document.querySelector()",
          "document.getElementsByClassName()",
          "document.getElementById()",
          "document.querySelectorAll()"
        ],
        respuestaCorrecta: 2,
        explicacion: "El método document.getElementById() en JavaScript se utiliza para obtener un elemento HTML por su atributo id. Este método devuelve una referencia al primer elemento del documento con el ID especificado. Por ejemplo, document.getElementById('miID') devolverá el elemento que tiene el atributo id=\"miID\". Es importante recordar que los IDs deben ser únicos en un documento HTML, por lo que este método siempre devuelve un solo elemento o null si no existe un elemento con ese ID. Es uno de los métodos más eficientes para acceder a elementos específicos en el DOM."
      },
      {
        id: 41239,
        moduloId: 412,
        pregunta: "¿Cuál es la forma correcta de insertar un comentario en JavaScript?",
        opciones: [
          "// Esto es un comentario",
          "/* Esto es un comentario */",
          "<!-- Esto es un comentario -->",
          "Las opciones A y B son correctas"
        ],
        respuestaCorrecta: 3,
        explicacion: "En JavaScript, hay dos formas correctas de insertar comentarios: los comentarios de línea única que comienzan con // y los comentarios multilínea que están encerrados entre /* y */. Los comentarios de línea única (// Esto es un comentario) solo afectan al texto desde las barras diagonales hasta el final de la línea. Los comentarios multilínea (/* Esto es un comentario */) pueden abarcar varias líneas de código. Los comentarios HTML (<!-- -->) no son válidos en JavaScript. Los comentarios son ignorados por el intérprete de JavaScript y se utilizan para documentar el código o temporalmente deshabilitar líneas de código."
      },
      {
        id: 41240,
        moduloId: 412,
        pregunta: "¿Qué propiedad de CSS define el estilo de los bordes de una tabla HTML?",
        opciones: [
          "border-style",
          "table-border",
          "border-collapse",
          "table-style"
        ],
        respuestaCorrecta: 2,
        explicacion: "La propiedad border-collapse en CSS define cómo se muestran los bordes de las celdas de una tabla HTML. Tiene dos valores principales: separate (valor predeterminado) donde cada celda tiene sus propios bordes separados, creando un efecto de doble borde entre celdas adyacentes; y collapse donde los bordes de celdas adyacentes se combinan en un solo borde, eliminando el espacio entre ellos. Esta propiedad es esencial para controlar la apariencia de las tablas, ya que border-collapse: collapse; generalmente produce tablas más limpias y profesionales, al eliminar los espacios entre celdas y unificar los bordes."
      }
    ]
};

export default moduloSimulacroTresLenguajeMarcas;