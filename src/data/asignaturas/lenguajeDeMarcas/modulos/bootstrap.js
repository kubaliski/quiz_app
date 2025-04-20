/**
 * Datos del módulo de Bootstrap perteneciente a la asignatura de Lenguaje de Marcas y Gestión de Sistemas de la Información.
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
 * // Importar el módulo de Bootstrap
 * import moduloBootstrap from '@data/modulos/bootstrap';
 *
 * function PreguntasAleatorias() {
 *   // Seleccionar 5 preguntas aleatorias del módulo
 *   const preguntasAleatorias = moduloBootstrap.preguntas
 *     .sort(() => 0.5 - Math.random())
 *     .slice(0, 5);
 *
 *   return (
 *     <div>
 *       <h2>{moduloBootstrap.nombre}</h2>
 *       {preguntasAleatorias.map(pregunta => (
 *         <QuestionCard key={pregunta.id} pregunta={pregunta} />
 *       ))}
 *     </div>
 *   );
 * }
 */
export const moduloBootstrap = {
    id: 403,
    nombre: "Bootstrap",
    asignaturaId: 4,
    descripcion:
      "Framework CSS para desarrollar interfaces responsive y móvil-primero, incluyendo componentes, sistemas de grid, utilidades de espaciado y diseño flexbox.",
    preguntas: [
      {
        id: 4301,
        moduloId: 403,
        pregunta: "¿Qué clase de Bootstrap se usa para crear un contenedor con ancho máximo y centrado?",
        opciones: [
          ".row-container",
          ".container",
          ".container-fluid",
          ".container-responsive",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "La clase .container en Bootstrap crea un contenedor con ancho máximo que se centra automáticamente en la página. Este contenedor tiene diferentes anchos máximos predefinidos para diferentes tamaños de pantalla y un padding horizontal para separar el contenido de los bordes. A diferencia de .container-fluid que ocupa el 100% del ancho disponible, .container se adapta según breakpoints predefinidos, manteniendo márgenes en los laterales en pantallas grandes. Esta clase es fundamental en el sistema de grid de Bootstrap y normalmente se usa como contenedor principal para el contenido de la página.",
      },
      {
        id: 4302,
        moduloId: 403,
        pregunta: "¿Qué clase de Bootstrap se usa para hacer que un botón tenga un borde sin fondo?",
        opciones: [
          ".btn-outline-primary",
          ".btn-primary-outline",
          ".btn-transparent",
          ".btn-borderless",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "La clase .btn-outline-primary en Bootstrap crea un botón con borde pero sin fondo de color, usando el color primario del tema. Cuando se pasa el ratón por encima o se hace clic, el botón cambia al estilo completo con fondo de color. Bootstrap ofrece variantes outline para todos los colores contextuales (por ejemplo, .btn-outline-success, .btn-outline-danger, etc.). Estos botones outline proporcionan una alternativa visual más sutil que los botones con relleno completo, siendo útiles para acciones secundarias o cuando se quiere reducir el énfasis visual de un botón.",
      },
      {
        id: 4303,
        moduloId: 403,
        pregunta: "¿Cuál es la clase de Bootstrap que define un margen automático en los lados horizontales de un elemento?",
        opciones: [
          ".m-auto",
          ".mx-auto",
          ".p-auto",
          ".my-auto",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "La clase .mx-auto en Bootstrap aplica un margen automático en los lados horizontales (izquierdo y derecho) de un elemento. Esta clase es especialmente útil para centrar horizontalmente elementos de ancho fijo dentro de un contenedor. El prefijo 'mx' representa 'margin-x', donde 'x' se refiere al eje horizontal, y 'auto' indica que el navegador calculará automáticamente los márgenes. A diferencia de .m-auto que aplica márgenes automáticos en todos los lados o .my-auto que los aplica verticalmente, .mx-auto se enfoca específicamente en los márgenes horizontales, lo que es ideal para el centrado horizontal.",
      },
      {
        id: 4304,
        moduloId: 403,
        pregunta: "¿Qué clase de Bootstrap se usa para centrar verticalmente el contenido dentro de un div usando flexbox?",
        opciones: [
          ".justify-content-center",
          ".align-items-center",
          ".text-center",
          ".d-flex",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "La clase .align-items-center de Bootstrap se utiliza para centrar verticalmente el contenido dentro de un elemento contenedor que tiene display: flex aplicado. Esta clase aplica la propiedad CSS align-items: center, que alinea los elementos hijos a lo largo del eje transversal (vertical en un flex container con dirección row). Es importante notar que esta clase debe usarse en combinación con .d-flex en el contenedor para que funcione correctamente. A diferencia de .justify-content-center que centra horizontalmente, o .text-center que solo centra el texto, .align-items-center es específica para el centrado vertical de elementos en un contenedor flexbox.",
      },
      {
        id: 4305,
        moduloId: 403,
        pregunta: "¿Cuál es la clase de Bootstrap que se usa para hacer una imagen responsive?",
        opciones: [
          ".img-responsive",
          ".img-fluid",
          ".img-center",
          ".img-auto",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "La clase .img-fluid en Bootstrap se utiliza para hacer que una imagen sea responsive. Esta clase aplica max-width: 100% y height: auto a la imagen, lo que garantiza que la imagen nunca será más ancha que su contenedor y que mantendrá su relación de aspecto original al redimensionarse. Esto es especialmente útil para asegurar que las imágenes se vean bien en dispositivos de diferentes tamaños sin desbordamiento horizontal. En versiones anteriores de Bootstrap (v3 y anteriores), se usaba .img-responsive para este propósito, pero a partir de Bootstrap 4, fue reemplazada por .img-fluid.",
      },
      {
        id: 4306,
        moduloId: 403,
        pregunta: "¿Qué clase de Bootstrap hace que un texto sea más grande y destacado, usado por ejemplo en subtítulos?",
        opciones: [
          ".lead",
          ".highlight",
          ".h1",
          ".text-lg",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "La clase .lead en Bootstrap hace que un texto sea más grande, ligeramente más pesado en términos de grosor y con un espaciado entre líneas algo mayor que el texto normal. Esta clase está diseñada específicamente para hacer que los párrafos destacados, como subtítulos o introducciones, sean más llamativos y legibles. A menudo se usa después de un encabezado principal para proporcionar contexto adicional o un resumen. A diferencia de las clases de encabezado (.h1, .h2, etc.) que cambian drásticamente el tamaño y peso del texto, .lead proporciona un aumento sutil que mantiene la legibilidad para bloques de texto más largos.",
      },
      {
        id: 4307,
        moduloId: 403,
        pregunta: "¿Qué clase de Bootstrap se usa para hacer una barra de navegación adaptable y con estilos predeterminados?",
        opciones: [
          ".menu-bar",
          ".nav",
          ".navbar",
          ".navigation-bar",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "La clase .navbar en Bootstrap crea una barra de navegación completa con estilos predeterminados y comportamiento adaptable. Esta clase proporciona un contenedor flexbox responsive con soporte para branding, navegación y otros contenidos. Las barras de navegación de Bootstrap incluyen soporte para logos, enlaces, desplegables, formularios de búsqueda y más, además de un sistema de colapso para pantallas pequeñas. A diferencia de .nav que solo estiliza una lista de enlaces de navegación, .navbar es un componente más completo que maneja toda la estructura de la barra de navegación, incluyendo su comportamiento responsive.",
      },
      {
        id: 4308,
        moduloId: 403,
        pregunta: "¿Qué clase de Bootstrap oculta un elemento en pantallas pequeñas (xs)?",
        opciones: [
          ".hide-xs",
          ".d-none",
          ".d-xs-hidden",
          ".d-sm-none",
        ],
        respuestaCorrecta: 3,
        explicacion:
          "La clase .d-sm-none en Bootstrap oculta un elemento en pantallas pequeñas (sm) y tamaños inferiores, lo que incluye el tamaño xs (extra small). Esta clase aplica display: none cuando el viewport es menor que el breakpoint sm (576px por defecto). Es importante destacar que a partir de Bootstrap 4, no hay un breakpoint xs explícito; en su lugar, xs es considerado como el tamaño base (menor que sm). Por lo tanto, para ocultar elementos específicamente en pantallas extra pequeñas, se utiliza .d-sm-none, que significa \"oculto desde sm hacia abajo\". Para ocultar elementos en todos los tamaños de pantalla, se usaría simplemente .d-none.",
      },
      {
        id: 4309,
        moduloId: 403,
        pregunta: "¿Qué clase de Bootstrap se usa para agregar sombreado a una tarjeta (card)?",
        opciones: [
          ".shadow-lg",
          ".card-shadow",
          ".shadow",
          ".shadow-sm",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "La clase .shadow en Bootstrap se utiliza para agregar un efecto de sombra estándar a un elemento, incluyendo las tarjetas (cards). Esta clase aplica una sombra difuminada que da profundidad y elevación al elemento, creando una separación visual del fondo. Bootstrap ofrece varias intensidades de sombras: .shadow-sm para una sombra pequeña y sutil, .shadow para una sombra estándar, y .shadow-lg para una sombra más pronunciada. Estas clases de utilidad pueden aplicarse a cualquier elemento, no solo a las tarjetas, pero son especialmente útiles en componentes como cards, modales o dropdowns para mejorar su jerarquía visual.",
      },
      {
        id: 4310,
        moduloId: 403,
        pregunta: "¿Cuál de estas clases de Bootstrap se usa para dividir una fila en 3 columnas iguales?",
        opciones: [
          ".col-4",
          ".col-md-6",
          ".col-sm-12",
          ".col-md-3",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "La clase .col-4 en Bootstrap se utiliza para crear columnas que ocupan 4 de las 12 unidades disponibles en el sistema de grid. Dado que el sistema de grid de Bootstrap divide el ancho total en 12 unidades, usar .col-4 para cada columna resultará en 3 columnas de igual ancho (4+4+4=12). Esta clase funciona en todos los tamaños de pantalla, desde móviles hasta desktops. Si se quisieran columnas que cambien su disposición según el tamaño de pantalla, se usarían clases con prefijos de breakpoint como .col-md-4 (columnas que se apilan en pantallas pequeñas pero se disponen en 3 columnas en pantallas medianas y superiores).",
      },
      {
        id: 4311,
        moduloId: 403,
        pregunta: "¿Qué clase de Bootstrap se usa para hacer que un elemento tenga un fondo azul predeterminado?",
        opciones: [
          ".bg-info",
          ".bg-blue",
          ".bg-primary-blue",
          ".bg-light",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "La clase .bg-info en Bootstrap aplica un color de fondo azul claro, que es parte de los colores contextuales predeterminados del framework. Este color azul específico está diseñado para representar información o mensajes informativos dentro del sistema de colores de Bootstrap. Además de .bg-info, Bootstrap ofrece otras clases de fondo como .bg-primary (azul más oscuro), .bg-secondary, .bg-success (verde), .bg-danger (rojo), .bg-warning (amarillo) y .bg-light (gris claro), entre otras. Estas clases de utilidad permiten aplicar rápidamente colores consistentes con el sistema de diseño de Bootstrap.",
      },
      {
        id: 4312,
        moduloId: 403,
        pregunta: "¿Cuál de estas clases de Bootstrap se usa para crear un botón de color rojo?",
        opciones: [
          ".btn-error",
          ".btn-red",
          ".btn-danger",
          ".btn-warning",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "La clase .btn-danger en Bootstrap crea un botón con color rojo, que convencionalmente indica una acción peligrosa, destructiva o que requiere precaución especial, como eliminar o cancelar. Este color forma parte del sistema de colores contextuales de Bootstrap, donde cada color tiene un significado semántico: primary (acción principal), secondary (acción secundaria), success (éxito/confirmación), danger (peligro/eliminación), warning (advertencia), info (información), etc. A diferencia de .btn-warning que es amarillo (para advertencias) o .btn-error que no existe en Bootstrap estándar, .btn-danger es específicamente rojo y comúnmente usado para acciones destructivas o irreversibles.",
      },
      {
        id: 4313,
        moduloId: 403,
        pregunta: "¿Cómo se hace un div flexible en Bootstrap?",
        opciones: [
          "display: flex;",
          ".d-flexible",
          ".flexible-div",
          ".d-flex",
        ],
        respuestaCorrecta: 3,
        explicacion:
          "La clase .d-flex en Bootstrap se utiliza para hacer que un elemento se comporte como un contenedor flexible, aplicando display: flex a ese elemento. Esta clase permite aprovechar todas las capacidades del modelo de diseño Flexbox de CSS, como alineación, ordenamiento y distribución flexible de elementos. Una vez aplicada esta clase, se pueden usar otras utilidades flexbox de Bootstrap como .flex-row, .flex-column, .justify-content-center, .align-items-center, etc. para controlar cómo los elementos hijos se comportan dentro del contenedor. La clase .d-flex es parte del sistema de utilidades de display de Bootstrap, donde el prefijo 'd-' significa 'display'.",
      },
      {
        id: 4314,
        moduloId: 403,
        pregunta: "¿Cuál es la clase de Bootstrap que se usa para crear una fila en un sistema de grid?",
        opciones: [
          ".container-row",
          ".row",
          ".grid-row",
          ".col-row",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "La clase .row en Bootstrap se utiliza para crear una fila horizontal en el sistema de grid. Esta clase establece un contenedor flexbox con propiedades específicas diseñadas para contener columnas (.col-*) y gestionar correctamente el espaciado y alineación dentro del sistema de rejilla. Las filas (.row) deben colocarse dentro de un contenedor (.container o .container-fluid) y contener elementos con clases de columna. La clase .row aplica márgenes negativos para contrarrestar el padding de las columnas, asegurando que el contenido se alinee correctamente con los bordes del contenedor. Es un componente fundamental del sistema de grid de Bootstrap y esencial para crear layouts responsive.",
      },
      {
        id: 4315,
        moduloId: 403,
        pregunta: "¿Qué pasa si dentro de una fila (.row) agregamos más de 12 columnas en total (por ejemplo, .col-md-6 + .col-md-8)?",
        opciones: [
          "Las columnas extra se colocan en la siguiente fila",
          "Se rompen los estilos y se desborda el contenido",
          "Bootstrap ignora las columnas adicionales",
          "Bootstrap ajusta automáticamente las columnas para que quepan",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "Cuando se agregan columnas que suman más de 12 unidades dentro de una fila .row en Bootstrap (por ejemplo, col-md-6 + col-md-8 = 14), las columnas adicionales que exceden las 12 unidades se colocan automáticamente en una nueva línea. Esto ocurre gracias al comportamiento flexbox de las filas en Bootstrap. Cada fila tiene un ancho de 12 unidades, y cuando las columnas suman más de 12, el sistema de flexbox envuelve (wrap) las columnas adicionales a la siguiente línea. Este comportamiento es intencional y permite crear diseños complejos sin tener que agregar filas adicionales manualmente. Es particularmente útil en diseños responsive donde el número de columnas por fila puede cambiar según el tamaño de la pantalla.",
      },
    ],
  };

  export default moduloBootstrap;