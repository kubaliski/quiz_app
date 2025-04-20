/**
 * Datos del módulo de HTML Formularios perteneciente a la asignatura de Lenguaje de Marcas y Gestión de Sistemas de la Información.
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
 * // Importar el módulo de HTML Formularios
 * import moduloHTMLFormularios from '@data/modulos/htmlFormularios';
 *
 * function PreguntasAleatorias() {
 *   // Seleccionar 5 preguntas aleatorias del módulo
 *   const preguntasAleatorias = moduloHTMLFormularios.preguntas
 *     .sort(() => 0.5 - Math.random())
 *     .slice(0, 5);
 *
 *   return (
 *     <div>
 *       <h2>{moduloHTMLFormularios.nombre}</h2>
 *       {preguntasAleatorias.map(pregunta => (
 *         <QuestionCard key={pregunta.id} pregunta={pregunta} />
 *       ))}
 *     </div>
 *   );
 * }
 */
export const moduloHTMLFormularios = {
    id: 408,
    nombre: "modulo 5 - HTML Formularios",
    asignaturaId: 4,
    descripcion:
      "Creación y configuración de formularios en HTML para la recolección de datos de usuario, incluyendo diferentes tipos de campos de entrada, etiquetas, agrupación de elementos y envío de datos.",
    preguntas: [
      {
        id: 4801,
        moduloId: 408,
        pregunta: "¿Cuál es el propósito principal de la etiqueta <label> en un formulario HTML?",
        opciones: [
          "Estilizar los elementos del formulario.",
          "Agregar un cuadro de texto.",
          "Asociar un texto con un control específico.",
          "Asignar un título al formulario.",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "El propósito principal de la etiqueta <label> en un formulario HTML es asociar un texto descriptivo con un control específico del formulario (como un input, select o textarea). Esto ofrece varios beneficios importantes: mejora la accesibilidad ya que los lectores de pantalla pueden identificar mejor cada campo; proporciona un área de clic más grande, pues al hacer clic en la etiqueta se selecciona o activa el control asociado; y mejora la usabilidad general del formulario al dejar claro qué información se solicita en cada campo. La asociación entre el label y el control puede establecerse de dos formas: incluyendo el control dentro del label (<label>Nombre: <input type=\"text\"></label>) o mediante los atributos for e id (<label for=\"nombre\">Nombre:</label> <input id=\"nombre\" type=\"text\">).",
      },
      {
        id: 4802,
        moduloId: 408,
        pregunta: "¿Cuál es la principal diferencia entre un checkbox y un radiobutton en un formulario HTML?",
        opciones: [
          "Los checkboxes solo funcionan en formularios enviados por método GET.",
          "Los radiobuttons no necesitan un atributo name.",
          "Los radiobuttons son más grandes que los checkboxes.",
          "Los checkboxes permiten seleccionar múltiples opciones, mientras que los radiobuttons permiten seleccionar solo una.",
        ],
        respuestaCorrecta: 3,
        explicacion:
          "La principal diferencia entre checkboxes y radiobuttons en un formulario HTML radica en su comportamiento de selección: los checkboxes (<input type=\"checkbox\">) permiten seleccionar múltiples opciones dentro de un grupo, mientras que los radiobuttons (<input type=\"radio\">) solo permiten seleccionar una única opción dentro de un grupo con el mismo valor de atributo name. Esta diferencia fundamental determina cuándo usar cada uno: checkboxes para preguntas donde múltiples respuestas son válidas (\"Seleccione todos los idiomas que habla\") y radiobuttons para preguntas donde solo una respuesta es posible (\"Seleccione su género\"). Visualmente también son diferentes: los checkboxes típicamente se muestran como cuadrados que se marcan con una palomita (✓), mientras que los radiobuttons aparecen como círculos que se rellenan cuando se seleccionan.",
      },
      {
        id: 4803,
        moduloId: 408,
        pregunta: "¿Por qué es importante usar el atributo name en un grupo de botones de radio (<input type=\"radio\">)?",
        opciones: [
          "Para darle un estilo específico al botón.",
          "Para especificar el valor inicial del botón.",
          "Para agruparlos y permitir que solo uno sea seleccionado a la vez.",
          "Para establecer un identificador único para cada botón.",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "Es importante usar el atributo name en un grupo de botones de radio (<input type=\"radio\">) porque este atributo define el grupo al que pertenecen los botones, permitiendo que solo uno de los botones con el mismo name pueda ser seleccionado a la vez. Cuando varios botones de radio comparten el mismo valor para el atributo name, el navegador entiende que pertenecen al mismo grupo y automáticamente deselecciona los otros botones del grupo cuando uno es seleccionado. Por ejemplo, <input type=\"radio\" name=\"genero\" value=\"masculino\"> y <input type=\"radio\" name=\"genero\" value=\"femenino\"> forman un grupo donde solo puede seleccionarse una opción. Sin este agrupamiento mediante el atributo name, los botones de radio funcionarían independientemente, perdiendo su característica principal de selección única dentro de un grupo.",
      },
      {
        id: 4804,
        moduloId: 408,
        pregunta: "¿Qué atributo de la etiqueta <input> se usa para especificar el tipo de entrada?",
        opciones: [
          "name",
          "method",
          "action",
          "type",
        ],
        respuestaCorrecta: 3,
        explicacion:
          "El atributo type de la etiqueta <input> se utiliza para especificar el tipo de entrada o control que se creará. Este atributo determina cómo se mostrará el campo de entrada y qué tipo de datos puede contener. Algunos valores comunes para el atributo type incluyen: text (texto simple), password (campo de contraseña con caracteres ocultos), checkbox (casilla de verificación), radio (botón de opción), submit (botón de envío), button (botón genérico), email (validación de correo electrónico), number (valores numéricos), date (selector de fecha), file (carga de archivos), entre muchos otros. Cada tipo proporciona funcionalidades específicas y puede incluir validación integrada en el navegador. Por ejemplo, <input type=\"email\"> verificará automáticamente que el texto ingresado tenga formato de dirección de correo electrónico.",
      },
      {
        id: 4805,
        moduloId: 408,
        pregunta: "¿Qué etiqueta agrupa elementos relacionados dentro de un formulario?",
        opciones: [
          "<group>",
          "<fieldset>",
          "<form>",
          "<div>",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "La etiqueta <fieldset> se utiliza para agrupar elementos relacionados dentro de un formulario. Esta etiqueta crea una caja visual alrededor de los elementos agrupados, indicando que están conectados temáticamente. Generalmente se usa junto con la etiqueta <legend>, que proporciona un título o descripción para el grupo. Por ejemplo: <fieldset><legend>Información Personal</legend><!-- campos relacionados aquí --></fieldset>. Este agrupamiento es especialmente útil en formularios extensos, ya que mejora la organización visual y la estructura semántica, facilitando a los usuarios entender qué información se solicita en cada sección. También es importante para la accesibilidad, ya que ayuda a los usuarios de lectores de pantalla a navegar y comprender la estructura del formulario. A diferencia de <div> que es un contenedor genérico, <fieldset> tiene un significado semántico específico para agrupar campos de formulario relacionados.",
      },
      {
        id: 4806,
        moduloId: 408,
        pregunta: "¿Qué etiqueta se utiliza para crear un área de texto multilínea en un formulario?",
        opciones: [
          "<input>",
          "<textbox>",
          "<form>",
          "<textarea>",
        ],
        respuestaCorrecta: 3,
        explicacion:
          "La etiqueta <textarea> se utiliza para crear un área de texto multilínea en un formulario HTML. A diferencia de <input type=\"text\"> que solo permite una línea de texto, <textarea> permite al usuario ingresar texto que puede abarcar múltiples líneas, con barras de desplazamiento si el contenido excede el tamaño visible. Su sintaxis básica es <textarea name=\"comentarios\" rows=\"5\" cols=\"30\">Texto inicial</textarea>, donde rows especifica el número visible de líneas y cols el ancho visible en caracteres. El contenido inicial se coloca entre las etiquetas de apertura y cierre, no como un atributo value. <textarea> es ideal para campos que requieren respuestas largas como comentarios, descripciones, biografías o mensajes. Su tamaño puede controlarse tanto con los atributos nativos como con CSS.",
      },
      {
        id: 4807,
        moduloId: 408,
        pregunta: "¿Qué etiqueta se utiliza para crear un formulario en HTML?",
        opciones: [
          "<input>",
          "<table>",
          "<form>",
          "<fieldset>",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "La etiqueta <form> se utiliza para crear un formulario en HTML. Esta etiqueta actúa como un contenedor para todos los elementos del formulario (inputs, buttons, selects, textareas, etc.) y define una sección del documento donde el usuario puede ingresar información que será enviada al servidor. Los atributos más importantes de <form> son action (que especifica la URL a la que se enviarán los datos) y method (que define el método HTTP a utilizar, generalmente GET o POST). Por ejemplo: <form action=\"/procesar-datos\" method=\"post\"><!-- elementos del formulario --></form>. A diferencia de <input> que crea campos individuales, <table> que estructura datos en filas y columnas, o <fieldset> que agrupa elementos relacionados dentro del formulario, <form> define el formulario completo y establece cómo y dónde se procesarán los datos recopilados.",
      },
      {
        id: 4808,
        moduloId: 408,
        pregunta: "¿Qué etiqueta se utiliza para crear una lista desplegable en un formulario?",
        opciones: [
          "<select>",
          "<option>",
          "<dropdown>",
          "<textarea>",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "La etiqueta <select> se utiliza para crear una lista desplegable (también conocida como menú desplegable o combobox) en un formulario HTML. Este elemento funciona como un contenedor que agrupa múltiples opciones (<option>) entre las cuales el usuario puede elegir. La estructura básica es: <select name=\"pais\"><option value=\"es\">España</option><option value=\"fr\">Francia</option>...</select>. El atributo value de cada opción define el valor que se enviará al servidor cuando el formulario sea enviado. Mediante el atributo multiple, una lista <select> puede permitir seleccionar varias opciones simultáneamente. A diferencia de <option> que representa cada elemento individual dentro de la lista, <dropdown> que no es una etiqueta HTML estándar, o <textarea> que crea un área de texto multilínea, <select> es específicamente el contenedor principal para crear menús desplegables en formularios.",
      },
      {
        id: 4809,
        moduloId: 408,
        pregunta: "¿Qué tipo de botón envía los datos del formulario a un servidor?",
        opciones: [
          "type=\"button\"",
          "type=\"reset\"",
          "type=\"input\"",
          "type=\"submit\"",
        ],
        respuestaCorrecta: 3,
        explicacion:
          "El botón con type=\"submit\" es el que envía los datos del formulario a un servidor cuando se hace clic en él. Este tipo de botón activa automáticamente la acción del formulario definida en el atributo action de la etiqueta <form>, enviando todos los datos recopilados al destino especificado. Se puede crear usando tanto <input type=\"submit\" value=\"Enviar\"> como <button type=\"submit\">Enviar</button>. A diferencia de type=\"button\" que es un botón genérico sin comportamiento predefinido (requiere JavaScript para definir su función), type=\"reset\" que restablece todos los campos del formulario a sus valores iniciales, o type=\"input\" que no es un valor válido para el atributo type, el botón submit tiene el comportamiento específico de procesar y enviar el formulario.",
      },
      {
        id: 4810,
        moduloId: 408,
        pregunta: "¿Qué tipo de botón restablece todos los campos del formulario a sus valores predeterminados?",
        opciones: [
          "type=\"button\"",
          "type=\"clear\"",
          "type=\"submit\"",
          "type=\"reset\"",
        ],
        respuestaCorrecta: 3,
        explicacion:
          "El botón con type=\"reset\" restablece todos los campos del formulario a sus valores predeterminados o iniciales cuando se hace clic en él. Este tipo de botón devolverá cada control del formulario al estado en que estaba cuando la página se cargó inicialmente, descartando cualquier entrada o modificación realizada por el usuario. Se puede crear usando <input type=\"reset\" value=\"Restablecer\"> o <button type=\"reset\">Restablecer</button>. A diferencia de type=\"button\" que es un botón genérico sin acción predefinida, type=\"clear\" que no es un valor estándar para el atributo type, o type=\"submit\" que envía los datos del formulario al servidor, el botón reset solo afecta al estado del formulario en el navegador y no envía ninguna información. Es importante usar este tipo de botón con precaución, ya que puede causar frustración en los usuarios si pierden accidentalmente información que habían ingresado.",
      },
    ],
  };

  export default moduloHTMLFormularios;