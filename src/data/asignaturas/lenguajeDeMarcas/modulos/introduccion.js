/**
 * Datos del módulo de Introducción al Desarrollo Web perteneciente a la asignatura de Lenguaje de Marcas y Gestión de Sistemas de la Información.
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
 * // Importar el módulo de Introducción al Desarrollo Web
 * import moduloIntroduccion from '@data/modulos/introduccion';
 *
 * function PreguntasAleatorias() {
 *   // Seleccionar 5 preguntas aleatorias del módulo
 *   const preguntasAleatorias = moduloIntroduccion.preguntas
 *     .sort(() => 0.5 - Math.random())
 *     .slice(0, 5);
 *
 *   return (
 *     <div>
 *       <h2>{moduloIntroduccion.nombre}</h2>
 *       {preguntasAleatorias.map(pregunta => (
 *         <QuestionCard key={pregunta.id} pregunta={pregunta} />
 *       ))}
 *     </div>
 *   );
 * }
 */
export const moduloIntroduccion = {
    id: 404,
    nombre: "modulo 1 - Introducción al Desarrollo Web",
    esExamen: false,
    asignaturaId: 4,
    descripcion:
      "Conceptos básicos y herramientas fundamentales para el desarrollo web, incluyendo inspección de elementos, editores de código y tecnologías web esenciales.",
    preguntas: [
      {
        id: 4401,
        moduloId: 404,
        pregunta: "¿Cómo se abre el inspector en la mayoría de los navegadores modernos?",
        opciones: [
          "Presionando F5",
          "Con clic derecho y seleccionando \"Inspeccionar\" o usando F12",
          "Activando un complemento especial",
          "Escribiendo \"inspector\" en la barra de búsqueda",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "El inspector de elementos en la mayoría de los navegadores modernos (Chrome, Firefox, Edge, Safari) se puede abrir haciendo clic derecho sobre cualquier elemento de la página y seleccionando \"Inspeccionar\" o \"Inspeccionar elemento\" del menú contextual. Alternativamente, se puede usar la tecla F12 en Windows o Command+Option+I en Mac. Esta herramienta es fundamental para los desarrolladores web, ya que permite examinar y modificar temporalmente el código HTML, CSS y JavaScript de cualquier página web, facilitando así la depuración y el análisis de sitios web.",
      },
      {
        id: 4402,
        moduloId: 404,
        pregunta: "¿Cómo se accede al inspector de herramientas del navegador?",
        opciones: [
          "Reiniciando el navegador",
          "Instalando un programa externo",
          "Haciendo clic en \"Archivo > Abrir\"",
          "Presionando F12 o clic derecho en la página > \"Inspeccionar\"",
        ],
        respuestaCorrecta: 3,
        explicacion:
          "El inspector de herramientas del navegador (también conocido como DevTools) se puede abrir presionando la tecla F12 en la mayoría de los navegadores basados en Windows, o haciendo clic derecho en cualquier parte de la página web y seleccionando \"Inspeccionar\" o \"Inspeccionar elemento\" del menú contextual. En Mac, se puede usar Command+Option+I. Estas herramientas de desarrollo integradas permiten a los programadores inspeccionar, depurar y modificar temporalmente el HTML, CSS y JavaScript de cualquier página web, además de analizar el rendimiento, las solicitudes de red y otros aspectos técnicos del sitio.",
      },
      {
        id: 4403,
        moduloId: 404,
        pregunta: "¿Cuál es la función del CSS en el desarrollo web?",
        opciones: [
          "Definir los estilos visuales del contenido",
          "Agregar interactividad a la página",
          "Crear bases de datos",
          "Optimizar la velocidad de carga",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "CSS (Cascading Style Sheets o Hojas de Estilo en Cascada) tiene como función principal definir los estilos visuales del contenido de una página web. Esto incluye aspectos como colores, fuentes, espaciado, layouts, animaciones y la adaptación a diferentes tamaños de pantalla (diseño responsive). CSS permite separar la presentación del contenido, lo que facilita el mantenimiento y la consistencia del diseño a través de múltiples páginas. Mientras que HTML se encarga de la estructura y el contenido, y JavaScript de la interactividad, CSS se enfoca específicamente en la apariencia y el diseño visual.",
      },
      {
        id: 4404,
        moduloId: 404,
        pregunta: "¿Cuál es un ejemplo de un editor de código popular?",
        opciones: [
          "Google Chrome",
          "Microsoft Excel",
          "Visual Studio Code",
          "Adobe Photoshop",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "Visual Studio Code (VS Code) es un ejemplo de un editor de código popular, desarrollado por Microsoft. Es un editor de código fuente gratuito y de código abierto, optimizado para el desarrollo web con soporte integrado para depuración, control de versiones Git, resaltado de sintaxis, autocompletado inteligente, fragmentos de código y refactorización. A diferencia de Google Chrome (un navegador web), Microsoft Excel (una hoja de cálculo) o Adobe Photoshop (un software de edición de imágenes), VS Code está específicamente diseñado para escribir, editar y gestionar código fuente para diversos lenguajes de programación.",
      },
      {
        id: 4405,
        moduloId: 404,
        pregunta: "¿Para qué sirve el inspector de elementos de un navegador?",
        opciones: [
          "Examinar y modificar temporalmente el código HTML y CSS de una página",
          "Editar archivos locales en tu ordenador",
          "Descargar contenido de una página web",
          "Proteger la página web contra modificaciones",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "El inspector de elementos de un navegador sirve para examinar y modificar temporalmente el código HTML y CSS de una página web. Esta herramienta permite a los desarrolladores ver la estructura DOM, identificar elementos específicos, analizar los estilos aplicados, depurar problemas de diseño y hacer cambios en tiempo real para ver cómo afectan a la página. Es importante destacar que las modificaciones realizadas son temporales y solo afectan a la visualización local; no alteran el código fuente original del sitio web. El inspector también incluye funcionalidades para simular diferentes dispositivos, analizar el rendimiento, depurar JavaScript y monitorizar solicitudes de red.",
      },
      {
        id: 4406,
        moduloId: 404,
        pregunta: "¿Qué es un editor de código?",
        opciones: [
          "Un sistema operativo usado por programadores",
          "Una extensión del navegador para programar",
          "Un programa para leer correos electrónicos",
          "Un programa especializado para escribir y editar código",
        ],
        respuestaCorrecta: 3,
        explicacion:
          "Un editor de código es un programa especializado diseñado específicamente para escribir y editar código fuente de manera eficiente. A diferencia de los procesadores de texto normales, los editores de código ofrecen características optimizadas para programación, como resaltado de sintaxis para diferentes lenguajes, autocompletado, navegación por el código, integración con sistemas de control de versiones, depuración, y detección de errores. Ejemplos populares incluyen Visual Studio Code, Sublime Text, Atom y WebStorm. Estas herramientas mejoran significativamente la productividad de los desarrolladores al proporcionar un entorno adaptado a las necesidades específicas de la programación.",
      },
      {
        id: 4407,
        moduloId: 404,
        pregunta: "¿Qué es un proyecto en desarrollo web?",
        opciones: [
          "Una carpeta que contiene todos los archivos necesarios para una página web",
          "Un programa instalado en el servidor",
          "Un archivo único con todo el código",
          "Una página ya publicada en internet",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "Un proyecto en desarrollo web es una carpeta o directorio que contiene todos los archivos necesarios para crear una página web o aplicación web. Estos archivos generalmente incluyen documentos HTML para la estructura, hojas de estilo CSS para el diseño, archivos JavaScript para la interactividad, imágenes, videos, fuentes y otros recursos multimedia. También puede incluir archivos de configuración, dependencias, scripts de automatización y documentación. La organización en una estructura de carpetas facilita la gestión y mantenimiento del proyecto, permitiendo a los desarrolladores encontrar y modificar componentes específicos fácilmente, así como colaborar en equipos utilizando sistemas de control de versiones como Git.",
      },
      {
        id: 4408,
        moduloId: 404,
        pregunta: "¿Qué extensión se usa para guardar archivos CSS?",
        opciones: [
          ".exe",
          ".css",
          ".js",
          ".HTML",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "La extensión .css se usa para guardar archivos CSS (Cascading Style Sheets o Hojas de Estilo en Cascada). Esta extensión identifica el archivo como una hoja de estilos que contiene reglas de formato y diseño para páginas web. Los navegadores reconocen esta extensión y aplican los estilos definidos en estos archivos a los elementos HTML correspondientes. A diferencia de .exe (archivos ejecutables de Windows), .js (archivos JavaScript para funcionalidad e interactividad) o .html (documentos HTML para estructura y contenido), los archivos .css están específicamente dedicados a la presentación visual y el diseño de sitios web.",
      },
      {
        id: 4409,
        moduloId: 404,
        pregunta: "¿Qué permite hacer el HTML en una página web?",
        opciones: [
          "Configurar la seguridad del servidor",
          "Hacer la página interactiva",
          "Crear la estructura y el contenido básico",
          "Estilizar el contenido",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "HTML (HyperText Markup Language) permite crear la estructura y el contenido básico de una página web. A través de sus etiquetas y elementos, HTML define la arquitectura fundamental del documento web, organizando el contenido en secciones como encabezados, párrafos, listas, tablas, formularios e imágenes. HTML establece la jerarquía y relaciones entre los diferentes elementos de la página, proporciona semántica al contenido, y crea enlaces entre páginas. Es el esqueleto de cualquier sitio web, mientras que CSS se encarga de los estilos visuales y JavaScript de la interactividad. Sin HTML, no existiría la estructura básica sobre la cual aplicar estilos o funcionalidades.",
      },
      {
        id: 4410,
        moduloId: 404,
        pregunta: "¿Qué significa JavaScript en el desarrollo web?",
        opciones: [
          "Un formato de archivo multimedia",
          "Un programa para gestionar servidores",
          "Una herramienta para diseñar gráficos",
          "Un lenguaje de programación para agregar interactividad",
        ],
        respuestaCorrecta: 3,
        explicacion:
          "JavaScript es un lenguaje de programación utilizado en desarrollo web para agregar interactividad a las páginas web. Permite crear contenido dinámico que responde a las acciones del usuario, como formularios interactivos, animaciones, juegos, actualizaciones en tiempo real, validaciones de datos, manipulación del DOM, y muchas otras funcionalidades dinámicas. A diferencia de HTML (que proporciona estructura) y CSS (que define estilos), JavaScript añade comportamiento a la página. Es un componente fundamental de la web moderna y se ejecuta en el navegador del cliente. Con el tiempo, su uso se ha expandido también al desarrollo del lado del servidor (Node.js), aplicaciones móviles y de escritorio, convirtiendo a JavaScript en uno de los lenguajes más versátiles y ampliamente utilizados.",
      },
    ],
  };

  export default moduloIntroduccion;