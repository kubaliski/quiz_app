/**
 * Datos del módulo de JavaScript Puro perteneciente a la asignatura de Lenguaje de Marcas y Gestión de Sistemas de la Información.
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
 * // Importar el módulo de JavaScript Puro
 * import moduloJavaScriptPuro from '@data/modulos/javascriptPuro';
 *
 * function PreguntasAleatorias() {
 *   // Seleccionar 5 preguntas aleatorias del módulo
 *   const preguntasAleatorias = moduloJavaScriptPuro.preguntas
 *     .sort(() => 0.5 - Math.random())
 *     .slice(0, 5);
 *
 *   return (
 *     <div>
 *       <h2>{moduloJavaScriptPuro.nombre}</h2>
 *       {preguntasAleatorias.map(pregunta => (
 *         <QuestionCard key={pregunta.id} pregunta={pregunta} />
 *       ))}
 *     </div>
 *   );
 * }
 */
export const moduloJavaScript = {
    id: 402,
    nombre: "JavaScript",
    asignaturaId: 4,
    descripcion:
      "Fundamentos y técnicas de JavaScript para manipulación del DOM, manejo de eventos, estructuras de control y manipulación de datos.",
    preguntas: [
      {
        id: 4201,
        moduloId: 402,
        pregunta: "¿Qué función se usa para seleccionar un elemento por su ID?",
        opciones: [
          "getElementByName()",
          "getElementById()",
          "queryById()",
          "selectById()",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "La función document.getElementById() es un método nativo del DOM en JavaScript que permite seleccionar un elemento HTML basado en su atributo id. Es una de las formas más eficientes de seleccionar un elemento específico, ya que los IDs deben ser únicos en un documento HTML. El método devuelve una referencia al elemento que coincide con el ID especificado, o null si no encuentra ningún elemento con ese ID.",
      },
      {
        id: 4202,
        moduloId: 402,
        pregunta: "¿Qué método selecciona el primer elemento que coincide con un selector CSS?",
        opciones: [
          "selectElement()",
          "getElement()",
          "querySelector()",
          "queryElementById()",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "El método querySelector() selecciona el primer elemento que coincide con el selector CSS especificado. Este método es muy versátil ya que permite utilizar cualquier selector CSS válido (como clases, IDs, atributos, pseudo-clases, etc.) para encontrar elementos en el documento. A diferencia de getElementById() que solo busca por ID, querySelector() ofrece mayor flexibilidad en la selección de elementos, aunque solo devuelve el primer elemento coincidente. Si se necesitan todos los elementos que coinciden, se debe usar querySelectorAll().",
      },
      {
        id: 4203,
        moduloId: 402,
        pregunta: "¿Qué propiedad se utiliza para obtener el valor de un input?",
        opciones: [
          "innerHTML",
          "text",
          "value",
          "content",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "La propiedad value se utiliza para obtener o establecer el valor actual de elementos de formulario como inputs, textareas y selects. Esta propiedad refleja el texto o la selección que el usuario ha ingresado o seleccionado en el elemento. A diferencia de innerHTML o textContent que funcionan con el contenido de elementos regulares, value es específico para elementos de formulario y representa el dato que será enviado al servidor cuando el formulario se envíe.",
      },
      {
        id: 4204,
        moduloId: 402,
        pregunta: "¿Qué hace la propiedad .checked en un radio button?",
        opciones: [
          "Indica si ese botón está seleccionado",
          "Cambia el valor del botón",
          "Marca todos los botones",
          "Lo hace obligatorio",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "La propiedad .checked en un radio button o checkbox es un booleano (true/false) que indica si ese elemento está seleccionado o marcado. Cuando un radio button está seleccionado, su propiedad checked tendrá valor true. Esta propiedad puede usarse tanto para leer el estado actual del elemento (si está marcado o no) como para establecer programáticamente su estado. En el caso de los radio buttons, debido a su naturaleza, solo uno de los botones del mismo grupo (mismo atributo name) puede tener checked=true a la vez.",
      },
      {
        id: 4205,
        moduloId: 402,
        pregunta: "¿Cuál de estas estructuras permite repetir código mientras se cumpla una condición?",
        opciones: [
          "while",
          "if",
          "return",
          "switch",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "La estructura while permite repetir un bloque de código mientras una condición especificada sea verdadera. El bucle while evalúa la condición antes de cada iteración, y si la condición es verdadera, ejecuta el bloque de código. Si la condición es falsa desde el principio, el código dentro del bucle no se ejecutará ni una sola vez. Es importante asegurarse de que la condición eventualmente se vuelva falsa para evitar bucles infinitos. A diferencia de if que ejecuta el código una vez si la condición es verdadera, while lo ejecuta repetidamente mientras la condición siga siendo verdadera.",
      },
      {
        id: 4206,
        moduloId: 402,
        pregunta: "¿Cuál es la forma correcta de agregar un evento a un botón con querySelector?",
        opciones: [
          "btn.add(\"click\", function)",
          "addEvent(\"btn\", click, function)",
          "btn.on(\"click\", function)",
          "btn.addEventListener(\"click\", function)",
        ],
        respuestaCorrecta: 3,
        explicacion:
          "La forma correcta de agregar un evento a un elemento seleccionado con querySelector es utilizando el método addEventListener(). Este método toma como primer parámetro el tipo de evento (como \"click\", \"mouseover\", \"keydown\", etc.) y como segundo parámetro la función que se ejecutará cuando ocurra el evento. addEventListener() es el método estándar moderno para manejar eventos en JavaScript y permite agregar múltiples manejadores para el mismo evento sin sobrescribir los existentes. Esta aproximación es parte del modelo de eventos del DOM nivel 2 y es compatible con todos los navegadores modernos.",
      },
      {
        id: 4207,
        moduloId: 402,
        pregunta: "¿Qué tipo de dato devuelve parseFloat(\"10.5\")?",
        opciones: [
          "Boolean",
          "Number",
          "Undefined",
          "String",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "La función parseFloat() analiza un argumento string y devuelve un número de punto flotante (Number). Esta función convierte la cadena de texto que representa un número (en este caso \"10.5\") en su valor numérico correspondiente (10.5). A diferencia de parseInt() que devuelve solo la parte entera, parseFloat() mantiene la parte decimal. Si la cadena no comienza con un número válido, parseFloat() devolverá NaN (Not a Number). En este caso específico, parseFloat(\"10.5\") devuelve el número 10.5 de tipo Number.",
      },
      {
        id: 4208,
        moduloId: 402,
        pregunta: "¿Qué operador compara valor y tipo en JavaScript?",
        opciones: [
          "!=",
          "===",
          "==",
          "=",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "El operador === (triple igual) en JavaScript realiza una comparación estricta, verificando tanto el valor como el tipo de datos de los operandos. A diferencia del operador == (doble igual) que realiza conversiones de tipo automáticas antes de comparar, === no realiza ninguna conversión y solo devuelve true si ambos operandos tienen el mismo valor y son del mismo tipo. Por ejemplo, 5 === \"5\" devuelve false porque aunque los valores son iguales, los tipos son diferentes (número vs string). Este operador es fundamental para escribir código más predecible y evitar errores debido a coerciones de tipo inesperadas.",
      },
      {
        id: 4209,
        moduloId: 402,
        pregunta: "¿Qué operador lógico significa \"y\"?",
        opciones: [
          "&&",
          "!",
          "==",
          "||",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "El operador lógico && (doble ampersand) representa la operación lógica \"y\" (AND) en JavaScript. Este operador devuelve true solo si ambos operandos son verdaderos; de lo contrario, devuelve false. Es utilizado para combinar múltiples condiciones donde todas deben cumplirse para que la expresión completa sea verdadera. En JavaScript, este operador también presenta la característica de \"cortocircuito\", lo que significa que si el primer operando es falso, el segundo operando ni siquiera se evalúa, ya que el resultado final será falso independientemente del valor del segundo operando.",
      },
      {
        id: 4210,
        moduloId: 402,
        pregunta: "¿Qué estructura se usa para seleccionar entre múltiples casos?",
        opciones: [
          "try",
          "switch",
          "if-else",
          "for",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "La estructura switch se utiliza para seleccionar uno de muchos bloques de código a ejecutar, basándose en la evaluación de una expresión. Esta estructura es especialmente útil cuando se necesita comparar una variable con múltiples valores posibles y ejecutar diferentes bloques de código dependiendo de qué valor coincide. A diferencia de múltiples if-else, switch puede ser más legible y eficiente cuando se trabaja con muchas condiciones diferentes para una misma variable. La estructura incluye la cláusula break para evitar que la ejecución continúe en los siguientes casos, y opcionalmente una cláusula default que se ejecuta si ningún caso coincide.",
      },
      {
        id: 4211,
        moduloId: 402,
        pregunta: "¿Qué hace .innerText?",
        opciones: [
          "Inserta HTML",
          "Muestra o cambia el texto visible de un elemento",
          "Muestra el valor de un input",
          "Cambia el valor de un radio button",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "La propiedad .innerText muestra o cambia el texto visible contenido dentro de un elemento, excluyendo todas las etiquetas HTML y respetando los estilos aplicados. A diferencia de innerHTML que incluye etiquetas HTML, o textContent que incluye todo el texto (incluso el oculto por CSS), innerText solo representa el texto que sería visible para el usuario. Esta propiedad es útil cuando queremos trabajar solo con el contenido textual visible de un elemento sin procesar o modificar el marcado HTML. Al establecer innerText, cualquier contenido HTML se tratará como texto plano y no se interpretará como código HTML.",
      },
      {
        id: 4212,
        moduloId: 402,
        pregunta: "¿Qué ocurre si usas let dentro de un bloque {}?",
        opciones: [
          "Se puede usar fuera del bloque",
          "No se puede declarar",
          "Solo existe dentro del bloque",
          "Da error",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "Cuando se declara una variable con let dentro de un bloque delimitado por llaves {}, esa variable solo existe dentro de ese bloque (alcance o scope de bloque). Esto significa que la variable no es accesible fuera del bloque donde fue declarada. Esta característica de let ayuda a evitar problemas comunes que ocurrían con var, que tiene alcance de función en lugar de alcance de bloque. El alcance de bloque de let es especialmente útil en bucles, condicionales y otros bloques de código, ya que permite limitar la visibilidad de variables a solo donde son necesarias, evitando conflictos de nombres y mejorando la encapsulación del código.",
      },
      {
        id: 4213,
        moduloId: 402,
        pregunta: "¿Cuál de las siguientes opciones selecciona el radio button marcado?",
        opciones: [
          "'input[type=radio]'",
          "'input[name=\"genero\"]:checked'",
          "'input:radio'",
          "'radio:checked'",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "El selector CSS 'input[name=\"genero\"]:checked' selecciona el radio button que está marcado (checked) dentro del grupo con name=\"genero\". La pseudo-clase :checked selecciona elementos que están en estado marcado o seleccionado, como radio buttons o checkboxes. Este selector es muy útil cuando necesitamos obtener el valor del radio button seleccionado en un grupo, ya que en un grupo de radio buttons solo uno puede estar seleccionado a la vez. Por ejemplo, document.querySelector('input[name=\"genero\"]:checked') nos devolverá el elemento radio button que está seleccionado actualmente dentro del grupo \"genero\".",
      },
      {
        id: 4214,
        moduloId: 402,
        pregunta: "¿Qué propiedad cambia el estilo de un elemento desde JavaScript?",
        opciones: [
          "attr",
          "design",
          "html",
          "style",
        ],
        respuestaCorrecta: 3,
        explicacion:
          "La propiedad style se utiliza para acceder y modificar los estilos CSS de un elemento directamente desde JavaScript. Esta propiedad devuelve un objeto CSSStyleDeclaration que contiene todos los estilos en línea aplicados al elemento. Para modificar un estilo específico, se accede a la propiedad correspondiente en notación camelCase (por ejemplo, element.style.backgroundColor en lugar de background-color). Es importante notar que style solo accede a los estilos definidos en línea (atributo style) del elemento y no a los estilos aplicados a través de hojas de estilo externas o etiquetas <style>.",
      },
      {
        id: 4215,
        moduloId: 402,
        pregunta: "¿Qué instrucción elimina un elemento de un array?",
        opciones: [
          "array.remove()",
          "array.cut()",
          "array.splice(pos, 1)",
          "array.delete(pos)",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "El método array.splice(pos, 1) elimina un elemento de un array en la posición especificada. Este método modifica el array original y devuelve un nuevo array con los elementos eliminados. El primer parámetro (pos) indica la posición de inicio (índice basado en cero), y el segundo parámetro (1) indica cuántos elementos eliminar. Splice es muy versátil ya que también permite añadir nuevos elementos en la misma operación si se proporcionan parámetros adicionales. A diferencia de otros métodos como pop() o shift() que solo pueden eliminar elementos del final o del principio del array, splice() permite eliminar elementos de cualquier posición.",
      },
      {
        id: 4216,
        moduloId: 402,
        pregunta: "¿Qué etiqueta HTML usamos para crear una tabla?",
        opciones: [
          "<list>",
          "<table>",
          "<section>",
          "<div class=\"tabla\">",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "La etiqueta <table> se utiliza para crear una tabla en HTML. Esta etiqueta define el contenedor principal de una tabla y se utiliza junto con otras etiquetas complementarias como <tr> (fila de tabla), <th> (celda de encabezado) y <td> (celda de datos) para estructurar el contenido tabular. Las tablas HTML son ideales para presentar datos tabulares, como información que naturalmente se organizaría en filas y columnas. Aunque en el pasado se usaban para diseño de páginas, actualmente se recomienda usar tablas solo para datos tabulares y utilizar CSS para el diseño de la página.",
      },
      {
        id: 4217,
        moduloId: 402,
        pregunta: "¿Cuál de estas opciones es un método válido para limpiar el contenido de una tabla con JS?",
        opciones: [
          "clear(table)",
          "table.value = \"\"",
          "table.innerHTML = \"\"",
          "reset(table)",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "El método table.innerHTML = \"\" es una forma válida y eficiente de limpiar todo el contenido de una tabla en JavaScript. Al establecer innerHTML a una cadena vacía, se elimina todo el contenido HTML interno del elemento, incluyendo todas las filas, celdas y cualquier otro elemento que esté dentro de la tabla. Esta técnica funciona para cualquier elemento del DOM, no solo para tablas. Es importante tener en cuenta que esta acción es irreversible y elimina completamente el contenido, por lo que si se necesita recuperar algo del contenido original, se debería guardar una referencia antes de limpiarlo.",
      },
      {
        id: 4218,
        moduloId: 402,
        pregunta: "¿Qué hace document.querySelector(\"#nombre\")?",
        opciones: [
          "Selecciona un input tipo nombre",
          "Selecciona todos los elementos con clase .nombre",
          "No es una instrucción válida",
          "Selecciona el primer elemento con id=\"nombre\"",
        ],
        respuestaCorrecta: 3,
        explicacion:
          "La instrucción document.querySelector(\"#nombre\") selecciona el primer elemento del documento que tiene el atributo id=\"nombre\". El prefijo # en el selector indica que estamos buscando por ID, siguiendo la sintaxis de los selectores CSS. Este método es similar a document.getElementById(\"nombre\"), pero usa la sintaxis de selectores CSS, lo que lo hace más consistente con otras operaciones de selección en JavaScript moderno. Dado que los IDs deben ser únicos en un documento HTML, este selector debería encontrar un solo elemento (o ninguno si no existe tal ID).",
      },
      {
        id: 4219,
        moduloId: 402,
        pregunta: "¿Qué se necesita para que align-items funcione?",
        opciones: [
          "Tener margin: auto;",
          "Tener position: absolute;",
          "Tener display: block;",
          "Tener display: flex;",
        ],
        respuestaCorrecta: 3,
        explicacion:
          "La propiedad CSS align-items solo funciona en contenedores que tienen display: flex o display: grid. Esta propiedad controla la alineación de los elementos hijos a lo largo del eje transversal (cross axis) en un contenedor flexbox, o a lo largo del eje de bloque (block axis) en un contenedor grid. En un contenedor flexbox con dirección de fila (row), align-items alinea los elementos verticalmente, mientras que en un contenedor con dirección de columna (column), los alinea horizontalmente. Es una de las propiedades clave del modelo de diseño flexbox que facilita la creación de layouts responsivos y centrados.",
      },
      {
        id: 4220,
        moduloId: 402,
        pregunta: "¿Cuál es el método correcto para recorrer un array?",
        opciones: [
          "array.loop()",
          "loop(array)",
          "for (let i = 0; i < array.length; i++)",
          "foreach (var in array)",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "El método correcto para recorrer un array en JavaScript es mediante un bucle for tradicional: for (let i = 0; i < array.length; i++). Este método inicializa un contador i en 0, continúa mientras i sea menor que la longitud del array, e incrementa i en cada iteración. Dentro del bucle, se puede acceder a cada elemento del array utilizando la sintaxis array[i]. Aunque existen otras formas modernas de recorrer arrays como forEach(), map(), o for...of, el bucle for tradicional sigue siendo ampliamente utilizado por su flexibilidad, capacidad de control sobre el índice y compatibilidad con navegadores antiguos.",
      },
      {
        id: 4221,
        moduloId: 402,
        pregunta: "¿Qué valor devuelve la siguiente expresión JavaScript si no hay selección?",
        recurso: {
          tipo: "codigo",
          contenido: `document.querySelector('input[name="x"]:checked')`,
          lenguaje: "javascript"
        },
        opciones: [
          "\"\"",
          "\"undefined\"",
          "null",
          "false"
        ],
        respuestaCorrecta: 2,
        explicacion: "Cuando no hay ningún elemento que coincida con el selector especificado, document.querySelector() devuelve null. En este caso, si no hay ningún input con name=\"x\" que esté seleccionado (checked), la función devolverá null. Este comportamiento es importante de considerar al trabajar con selectores en JavaScript, ya que intentar acceder a propiedades o métodos de un valor null resultará en un error (TypeError: Cannot read property of null). Por lo tanto, es una buena práctica verificar si el resultado de querySelector es null antes de intentar operar con él, por ejemplo: const checkedInput = document.querySelector('input[name=\"x\"]:checked'); if (checkedInput) { /* hacer algo con checkedInput */ }."
      },
      {
        id: 4222,
        moduloId: 402,
        pregunta: "¿Qué propiedad accede al contenido textual incluso si está oculto?",
        opciones: [
          "innerText",
          "textContent",
          "innerHTML",
          "value",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "La propiedad textContent accede a todo el contenido textual de un elemento, incluyendo el texto que está oculto por CSS. A diferencia de innerText que solo devuelve el texto visible, textContent devuelve todo el texto contenido en un elemento y sus descendientes, independientemente de si está visible o no. Además, textContent no interpreta HTML, por lo que las entidades HTML se muestran literalmente y no se renderizan. Esta propiedad es útil cuando necesitamos acceder al texto puro sin preocuparnos por el estilo o la visibilidad, y generalmente tiene mejor rendimiento que innerText ya que no requiere que el navegador calcule los estilos aplicados.",
      },
      {
        id: 4223,
        moduloId: 402,
        pregunta: "¿Cuál es una ventaja de usar querySelector() sobre getElementById()?",
        opciones: [
          "Permite usar cualquier selector CSS",
          "Solo sirve para formularios",
          "Es más rápido",
          "Permite seleccionar elementos por valor",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "La principal ventaja de usar querySelector() sobre getElementById() es que permite utilizar cualquier selector CSS válido para encontrar elementos en el documento. Mientras que getElementById() solo puede buscar elementos por su atributo id, querySelector() puede utilizar selectores de clase (.clase), selectores de atributo ([attr=valor]), pseudo-clases (:hover, :first-child), combinadores (>, +, ~) y prácticamente cualquier selector CSS. Esto proporciona una mayor flexibilidad y potencia al seleccionar elementos, permitiendo consultas más específicas y complejas. Aunque getElementById() puede ser ligeramente más rápido para buscar por id, la versatilidad de querySelector() lo hace preferible en muchos casos.",
      },
      {
        id: 4224,
        moduloId: 402,
        pregunta: "¿Qué hace el método .push() en un array?",
        opciones: [
          "Ordena los elementos del array alfabéticamente",
          "Agrega un nuevo elemento al final del array",
          "Inserta un valor al principio del array",
          "Elimina el último elemento del array",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array. Este método modifica el array original (no crea una copia). Se pueden agregar múltiples elementos en una sola llamada, por ejemplo: array.push(elemento1, elemento2, elemento3). Es uno de los métodos más comúnmente utilizados para trabajar con arrays en JavaScript, especialmente cuando se necesita agregar elementos secuencialmente. A diferencia de unshift() que agrega elementos al principio del array, push() los agrega al final, lo que generalmente es más eficiente en términos de rendimiento porque no requiere reindexar los elementos existentes.",
      },
      {
        id: 4225,
        moduloId: 402,
        pregunta: "¿Qué instrucción permite salir anticipadamente de una función en JavaScript?",
        opciones: [
          "exit",
          "break",
          "stop",
          "return",
        ],
        respuestaCorrecta: 3,
        explicacion:
          "La instrucción return permite salir anticipadamente de una función en JavaScript. Cuando se ejecuta un return, la función termina inmediatamente y devuelve el valor especificado al punto desde donde fue llamada. Si no se especifica un valor (solo 'return;'), la función devuelve undefined. Esta instrucción es fundamental para controlar el flujo de ejecución dentro de las funciones y para devolver resultados. A diferencia de break que solo sale del bucle o switch más cercano, return sale completamente de la función, independientemente de cuántos niveles de anidamiento haya.",
      },
    ],
  };

  export default moduloJavaScript;