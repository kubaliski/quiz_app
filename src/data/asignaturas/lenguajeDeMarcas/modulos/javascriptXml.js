/**
 * Datos del módulo de JavaScript y XML perteneciente a la asignatura de Lenguaje de Marcas y Gestión de Sistemas de la Información.
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
 * // Importar el módulo de JavaScript y XML
 * import moduloJavaScriptXML from '@data/modulos/javascriptXML';
 *
 * function PreguntasAleatorias() {
 *   // Seleccionar 5 preguntas aleatorias del módulo
 *   const preguntasAleatorias = moduloJavaScriptXML.preguntas
 *     .sort(() => 0.5 - Math.random())
 *     .slice(0, 5);
 *
 *   return (
 *     <div>
 *       <h2>{moduloJavaScriptXML.nombre}</h2>
 *       {preguntasAleatorias.map(pregunta => (
 *         <QuestionCard key={pregunta.id} pregunta={pregunta} />
 *       ))}
 *     </div>
 *   );
 * }
 */
export const moduloJavaScriptXML = {
    id: 401,
    nombre: "JavaScript y XML",
    asignaturaId: 4,
    descripcion:
      "Conceptos fundamentales sobre la manipulación de archivos XML con JavaScript, lectura de archivos, procesamiento y navegación por estructuras XML.",
    preguntas: [
      {
        id: 4101,
        moduloId: 401,
        pregunta: "¿Qué objeto permite leer archivos locales en JavaScript?",
        opciones: [
          "DOMParser",
          "XMLReader",
          "FileReader",
          "LocalFile",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "FileReader es la API de JavaScript que permite leer el contenido de archivos que el usuario ha seleccionado a través de un input de tipo file o mediante arrastrar y soltar (drag and drop). Proporciona métodos asincrónicos para leer archivos como texto, datos binarios, o URL de datos, lo que permite trabajar con archivos locales directamente en el navegador sin necesidad de subirlos a un servidor.",
      },
      {
        id: 4102,
        moduloId: 401,
        pregunta: "¿Cuál es el propósito del método readAsText()?",
        opciones: [
          "Leer un archivo como texto plano",
          "Escribir contenido en un archivo",
          "Convertir texto en XML",
          "Leer archivos binarios",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "El método readAsText() de la API FileReader se utiliza para leer el contenido de un archivo como texto plano. Este método interpreta el contenido del archivo utilizando la codificación especificada (UTF-8 por defecto) y es especialmente útil para leer archivos de texto como XML, HTML, CSV o archivos de texto simples. El resultado se obtiene a través del evento onload del FileReader y está disponible en la propiedad result.",
      },
      {
        id: 4103,
        moduloId: 401,
        pregunta: "¿Qué evento se dispara cuando FileReader termina de leer un archivo?",
        opciones: [
          "onchange",
          "onload",
          "onfinish",
          "onread",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "El evento onload se dispara cuando FileReader termina de leer un archivo exitosamente. Este evento es fundamental en el trabajo con FileReader ya que la lectura de archivos es una operación asincrónica. Dentro del manejador de este evento, podemos acceder al contenido del archivo leído a través de la propiedad result del objeto FileReader. Es importante utilizar este evento para asegurarnos de que el archivo ha sido completamente cargado antes de intentar manipular su contenido.",
      },
      {
        id: 4104,
        moduloId: 401,
        pregunta: "¿Qué método permite convertir texto XML en un documento navegable?",
        opciones: [
          "XMLReader.parseFile()",
          "DOMParser.parseFromString()",
          "textToXML()",
          "FileParser.parseXML()",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "El método parseFromString() del objeto DOMParser permite convertir texto XML en un documento DOM navegable. Este método toma dos parámetros: el texto XML como una cadena y el tipo MIME que especifica el formato del texto (generalmente 'text/xml' para XML). El resultado es un objeto Document que representa el documento XML, permitiendo navegarlo y manipularlo utilizando las APIs estándar del DOM como getElementsByTagName(), querySelector(), etc.",
      },
      {
        id: 4105,
        moduloId: 401,
        pregunta: "¿Qué tipo MIME se debe indicar al analizar texto como XML?",
        opciones: [
          "application/json",
          "text/html",
          "application/xml",
          "text/xml-raw",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "Al analizar texto como XML utilizando DOMParser.parseFromString(), se debe indicar el tipo MIME 'application/xml' o 'text/xml'. Estos tipos MIME le indican al parser que debe interpretar el texto como un documento XML. El uso del tipo MIME correcto es crucial porque determina cómo se procesará e interpretará el texto. Por ejemplo, si se usara 'text/html', el parser intentaría interpretar el texto como HTML, lo que podría producir resultados inesperados con documentos XML.",
      },
      {
        id: 4106,
        moduloId: 401,
        pregunta: "¿Qué función tiene e.target.result dentro de reader.onload?",
        opciones: [
          "Contiene el contenido del archivo leído",
          "Retorna el tipo de archivo",
          "Guarda el archivo en localStorage",
          "Devuelve un nodo XML",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "Dentro del manejador del evento onload de un FileReader, e.target.result contiene el contenido del archivo que ha sido leído. Cuando se utiliza el método readAsText(), esta propiedad contendrá el texto completo del archivo. Si se utilizan otros métodos como readAsDataURL() o readAsArrayBuffer(), contendrá los datos en el formato correspondiente. Esta propiedad es esencial para acceder al contenido del archivo después de que ha sido cargado y procesado por el FileReader.",
      },
      {
        id: 4107,
        moduloId: 401,
        pregunta: "¿Qué método se usa para acceder a todos los nodos <persona> de un XML?",
        opciones: [
          "getElementsByTagName(\"persona\")",
          "querySelectorAll(\"persona\")",
          "getById(\"persona\")",
          "findNodes(\"persona\")",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "El método getElementsByTagName(\"persona\") se utiliza para acceder a todos los nodos con la etiqueta <persona> en un documento XML. Este método devuelve una HTMLCollection (similar a un array) con todos los elementos que coinciden con el nombre de etiqueta especificado. Es una forma estándar y ampliamente compatible de seleccionar elementos en un documento XML o HTML basándose en el nombre de la etiqueta. Aunque querySelectorAll() también podría usarse, getElementsByTagName() es más específico para este propósito.",
      },
      {
        id: 4108,
        moduloId: 401,
        pregunta: "¿Cómo se obtiene el texto dentro de una etiqueta XML?",
        opciones: [
          ".text",
          ".textContent",
          ".innerValue",
          ".nodeText",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "La propiedad .textContent se utiliza para obtener el texto contenido dentro de una etiqueta XML o HTML. Esta propiedad devuelve todo el contenido de texto del nodo y sus descendientes, sin incluir las etiquetas HTML o XML. Es la forma estándar de acceder al contenido textual de los elementos del DOM en JavaScript moderno. A diferencia de .innerHTML, .textContent no interpreta HTML y es más eficiente cuando solo se necesita el texto sin formato.",
      },
      {
        id: 4109,
        moduloId: 401,
        pregunta: "¿Qué ocurre si no se selecciona ningún archivo y se accede a files[0]?",
        opciones: [
          "Devuelve un string vacío",
          "Devuelve null",
          "Lanza un error automático",
          "Retorna undefined",
        ],
        respuestaCorrecta: 3,
        explicacion:
          "Si no se selecciona ningún archivo y se intenta acceder a files[0] (por ejemplo, en input.files[0]), la operación retornará undefined. Esto ocurre porque la propiedad files es una lista de los archivos seleccionados, y si no hay ninguno seleccionado, no existirá el elemento en el índice 0. Por esta razón, es una buena práctica verificar siempre si files[0] existe antes de intentar utilizarlo, para evitar errores en tiempo de ejecución.",
      },
      {
        id: 4110,
        moduloId: 401,
        pregunta: "¿Para qué sirve input type=\"file\" en HTML?",
        opciones: [
          "Para mostrar texto en pantalla",
          "Para enviar datos a un servidor",
          "Para permitir que el usuario seleccione archivos",
          "Para ejecutar funciones JavaScript",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "El elemento input type=\"file\" en HTML se utiliza para crear un control que permite al usuario seleccionar uno o más archivos de su dispositivo de almacenamiento. Este elemento proporciona una interfaz para navegar y seleccionar archivos del sistema de archivos local. Una vez seleccionados, estos archivos pueden ser procesados utilizando JavaScript (mediante la API FileReader) o enviados a un servidor como parte de un formulario. Es la forma estándar de permitir la carga de archivos en aplicaciones web.",
      },
      {
        id: 4111,
        moduloId: 401,
        pregunta: "¿Qué extensión tienen normalmente los archivos XML?",
        opciones: [
          ".xml",
          ".js",
          ".doc",
          ".json",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "Los archivos XML normalmente tienen la extensión .xml. Esta extensión indica que el archivo contiene datos en formato XML (eXtensible Markup Language), un formato de texto diseñado para almacenar y transportar datos de forma legible tanto para humanos como para máquinas. La extensión .xml ayuda a los sistemas operativos y aplicaciones a identificar el formato del archivo y aplicar el procesamiento adecuado, como asociarlo con editores XML o analizadores específicos.",
      },
      {
        id: 4112,
        moduloId: 401,
        pregunta: "¿Qué estructura devuelve DOMParser.parseFromString()?",
        opciones: [
          "Array de nodos",
          "Texto plano",
          "Documento DOM (navegable con JS)",
          "Objeto JSON",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "El método DOMParser.parseFromString() devuelve un Documento DOM (Document Object Model) que es una representación en memoria del documento XML o HTML parseado. Esta estructura es navegable con JavaScript, lo que significa que se puede recorrer y manipular utilizando las APIs estándar del DOM como getElementByTagName(), querySelector(), appendChild(), etc. El documento DOM representa la estructura jerárquica completa del XML, con todos sus elementos, atributos y relaciones padre-hijo intactas.",
      },
      {
        id: 4113,
        moduloId: 401,
        pregunta: "¿Qué instrucción permite añadir un objeto al final de un array?",
        opciones: [
          "insert()",
          "append()",
          "push()",
          "add()",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "La instrucción push() permite añadir uno o más elementos al final de un array en JavaScript y devuelve la nueva longitud del array. Es un método nativo de los arrays en JavaScript y es ampliamente utilizado para agregar elementos a una colección. Por ejemplo, si tenemos un array llamado 'personas' y queremos añadir un nuevo objeto persona, podríamos hacer: personas.push({nombre: 'Juan', edad: 30}). Este método modifica el array original, a diferencia de otros métodos como concat() que crean un nuevo array.",
      },
      {
        id: 4114,
        moduloId: 401,
        pregunta: "¿Qué instrucción JavaScript permite guardar datos en el almacenamiento local del navegador?",
        opciones: [
          "session.save()",
          "saveToBrowser()",
          "window.store()",
          "localStorage.setItem()",
        ],
        respuestaCorrecta: 3,
        explicacion:
          "La instrucción localStorage.setItem() permite guardar datos en el almacenamiento local del navegador. Este método toma dos parámetros: una clave (key) que se utiliza para identificar los datos, y el valor que se desea almacenar. Los datos guardados con localStorage persisten incluso después de cerrar el navegador o reiniciar el sistema, a diferencia de sessionStorage que solo mantiene los datos durante la sesión actual. LocalStorage es útil para almacenar preferencias de usuario, datos de la aplicación o cualquier información que se necesite persistir entre sesiones.",
      },
      {
        id: 4115,
        moduloId: 401,
        pregunta: "¿Qué ventaja ofrece exportar datos a XML desde JavaScript?",
        opciones: [
          "Permite portabilidad e interoperabilidad de datos",
          "Requiere servidor para leerlo",
          "Solo funciona en entornos móviles",
          "Menor compatibilidad con navegadores",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "Exportar datos a XML desde JavaScript ofrece la ventaja de permitir portabilidad e interoperabilidad de datos. XML es un formato estándar, independiente de la plataforma y ampliamente adoptado, lo que significa que los datos pueden ser fácilmente compartidos y procesados por diferentes sistemas y lenguajes de programación. Los documentos XML son autodescriptivos (las etiquetas describen el contenido) y tienen una estructura jerárquica clara que preserva las relaciones entre los datos, lo que facilita su interpretación y procesamiento por sistemas heterogéneos.",
      },
    ],
  };

  export default moduloJavaScriptXML;