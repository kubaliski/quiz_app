const moduloSimulacro2DisenoInterfacesWeb = {
  id: 1307,
  asignaturaId: 13,
  nombre: "Simulacro 2: Diseño de Interfaces Web",
  titulo: "Diseño de Interfaces Web",
  descripcion:
    "CSS (color, fuentes, bordes, fondos, posicionamiento, box model, overflow, transiciones, opacidad), Flexbox, Grid, SCSS, UX y Figma.",
  esExamen: true,
  preguntas: [
    {
      id: 13091,
      pregunta:
        "¿Cuál es la propiedad CSS que permite modificar el color de los caracteres en un elemento?",
      opciones: ["color", "char-color", "font-color", "text-color"],
      respuestaCorrecta: 0,
      explicacion:
        "La propiedad color es la estándar en CSS para establecer el color del texto. Las propiedades font-color y text-color no existen en CSS.",
    },
    {
      id: 13092,
      pregunta:
        "¿Cuál es la unidad CSS relativa al tamaño de fuente del elemento raíz del documento?",
      opciones: ["rem", "em", "ex", "ch"],
      respuestaCorrecta: 0,
      explicacion:
        "La unidad rem (root em) es relativa al tamaño de fuente del elemento raíz (html). Em es relativa al elemento padre, lo que la hace más impredecible en jerarquías complejas.",
    },
    {
      id: 13093,
      pregunta:
        "¿Qué propiedad CSS controla el grosor o peso de la fuente de un texto?",
      opciones: ["text-weight", "boldness", "font-style", "font-weight"],
      respuestaCorrecta: 3,
      explicacion:
        "La propiedad font-weight define el grosor de la fuente. Acepta valores como normal (400), bold (700) o números entre 100 y 900.",
    },
    {
      id: 13094,
      pregunta:
        "¿Qué propiedad CSS permite redondear las esquinas de un elemento?",
      opciones: [
        "rounded-corners",
        "corner-radius",
        "border-radius",
        "outline-radius",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "La propiedad border-radius define el radio de curvatura de las esquinas. Puede aplicarse un valor igual para todas o valores distintos por esquina.",
    },
    {
      id: 13095,
      pregunta:
        "¿Qué propiedad CSS de Grid especifica el número y tamaño de las columnas en la cuadrícula?",
      opciones: [
        "grid-column-count",
        "column-template",
        "grid-template-columns",
        "grid-columns",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "grid-template-columns define la estructura de columnas de un grid. Puede usar unidades absolutas (px), relativas (fr) o funciones como repeat().",
    },
    {
      id: 13096,
      pregunta:
        "¿Cuál es la propiedad CSS que define el espacio interior entre el contenido y el borde de un elemento?",
      opciones: ["gap", "spacing", "padding", "margin"],
      respuestaCorrecta: 2,
      explicacion:
        "padding controla el espacio interior dentro de un elemento, entre el contenido y su borde. Se diferencia de margin, que crea espacio exterior.",
    },
    {
      id: 13097,
      pregunta:
        "¿Qué propiedad CSS permite asignar un color sólido al fondo de un elemento?",
      opciones: ["color", "bg-color", "background-color", "fill"],
      respuestaCorrecta: 2,
      explicacion:
        "background-color establece el color de fondo de un elemento. La propiedad color modifica el texto; bg-color y fill no son propiedades CSS estándar para fondos.",
    },
    {
      id: 13098,
      pregunta:
        "¿Qué se entiende por prototipo dentro del contexto de diseño en Figma?",
      opciones: [
        "Un archivo CSS compilado y funcional",
        "Un servidor virtual para pruebas de aplicaciones",
        "Una hoja de especificaciones técnicas del proyecto",
        "Una representación interactiva y navegable del diseño de una interfaz",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "En Figma, un prototipo es una versión interactiva del diseño que simula el flujo y comportamiento de la interfaz final, permitiendo validar la experiencia de usuario antes de implementar el código.",
    },
    {
      id: 13099,
      pregunta:
        "En Flexbox, ¿cuál es la propiedad que alinea los elementos según el eje principal del contenedor?",
      opciones: [
        "align-items",
        "flex-direction",
        "justify-content",
        "align-content",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "justify-content alinea elementos en el eje principal (por defecto, horizontal). Admite valores como flex-start, center, space-between, space-around. align-items actúa sobre el eje transversal.",
    },
    {
      id: 13100,
      pregunta:
        "¿Qué propiedad CSS se utiliza para redondear las esquinas de un elemento creando bordes curvos?",
      opciones: [
        "corner-radius",
        "border-radius",
        "edge-curve",
        "border-style",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "border-radius redondea las esquinas especificando el radio en píxeles o porcentaje. Admite 1 a 4 valores para controlar cada esquina y puede crear círculos perfectos con 50% en elementos cuadrados.",
    },
    {
      id: 13101,
      pregunta:
        "¿Cuál es el valor de la propiedad position que ancla un elemento respecto a la ventana del navegador, manteniéndolo visible incluso al desplazar la página?",
      opciones: ["absolute", "fixed", "relative", "sticky"],
      respuestaCorrecta: 1,
      explicacion:
        "position: fixed posiciona el elemento relativo al viewport, no al flujo del documento. Permanece en la misma posición visual aunque se desplace la página. sticky, en cambio, alterna entre relative y fixed según el scroll.",
    },
    {
      id: 13102,
      pregunta:
        "¿Cuál es la propiedad CSS que permite añadir decoraciones al texto como subrayado, tachado o parpadeo?",
      opciones: [
        "text-style",
        "font-decoration",
        "text-decoration",
        "text-format",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "text-decoration añade líneas decorativas al texto con valores como underline, overline, line-through. Se puede combinar con text-decoration-color y text-decoration-style.",
    },
    {
      id: 13103,
      pregunta:
        "¿Qué propiedad CSS permite realizar cambios graduales de estilos durante un período de tiempo?",
      opciones: ["animation", "duration", "transition", "transform"],
      respuestaCorrecta: 2,
      explicacion:
        "La propiedad transition especifica una transición suave entre estados CSS. Requiere definir la propiedad a animar, la duración y opcionalmente la función de temporización. Se dispara cuando una propiedad CSS cambia.",
    },
    {
      id: 13104,
      pregunta:
        "¿Qué unidad de medida en CSS es relativa al tamaño de fuente del elemento raíz (html) del documento?",
      opciones: ["px", "rem", "em", "ch"],
      respuestaCorrecta: 1,
      explicacion:
        "La unidad rem (root em) se calcula respecto al font-size del elemento raíz, generalmente 16px por defecto. Em es relativa al elemento padre. rem es más predecible para mantener escalabilidad global.",
    },
    {
      id: 13105,
      pregunta:
        "¿Cuál es el valor de la propiedad position que fija un elemento respecto a la ventana gráfica del navegador?",
      opciones: ["relative", "absolute", "fixed", "static"],
      respuestaCorrecta: 2,
      explicacion:
        "El valor fixed posiciona un elemento relativo al viewport, manteniéndolo fijo incluso al desplazarse la página. absolute se posiciona respecto al ancestro posicionado, relative respecto a su posición normal, y static es el valor por defecto.",
    },
    {
      id: 13106,
      pregunta:
        "¿Qué propiedad CSS añade una sombra proyectada alrededor de todo un elemento, incluyendo sus bordes?",
      opciones: [
        "element-shadow",
        "box-shadow",
        "border-shadow",
        "text-shadow",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "box-shadow genera sombras que afectan a la caja completa del elemento (contenido, padding y bordes). Se diferencia de text-shadow, que solo añade sombra al contenido textual.",
    },
    {
      id: 13107,
      pregunta:
        "¿Cuál es el objetivo principal que persigue la disciplina de UX al desarrollar una web o aplicación?",
      opciones: [
        "Minimizar el número de líneas de código escrito",
        "Optimizar la experiencia y satisfacción del usuario final",
        "Maximizar el uso de efectos visuales complejos",
        "Aumentar la complejidad técnica de la arquitectura",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "UX (User Experience) se enfoca en crear soluciones útiles, usables y agradables para el usuario final, considerando navegabilidad, accesibilidad, rendimiento y satisfacción emocional.",
    },
    {
      id: 13108,
      pregunta:
        "¿Qué propiedad CSS se utiliza para controlar cómo se comporta el contenido que excede las dimensiones de su contenedor?",
      opciones: ["clip", "wrap", "overflow", "resize"],
      respuestaCorrecta: 2,
      explicacion:
        "overflow controla el comportamiento del contenido que sobresale: hidden (oculta), visible (muestra), scroll (añade barras), auto (solo si es necesario). Se puede aplicar por eje con overflow-x y overflow-y.",
    },
    {
      id: 13109,
      pregunta:
        "¿Qué propiedad CSS especifica la familia de fuente para el texto de un elemento?",
      opciones: ["font-name", "typeface", "font-family", "font-type"],
      respuestaCorrecta: 2,
      explicacion:
        "font-family define la fuente del texto. Admite listas de fuentes separadas por comas, incluyendo fuentes genéricas como serif, sans-serif o monospace como alternativa de fallback.",
    },
    {
      id: 13110,
      pregunta:
        "¿Cuál es la propiedad CSS que define el color de fondo de un elemento?",
      opciones: ["color", "background", "background-color", "background-image"],
      respuestaCorrecta: 2,
      explicacion:
        "background-color establece el color de fondo. color modifica el texto. background es una propiedad abreviada que incluye color, imagen, posición y repetición. background-image se usa para fondos con imágenes.",
    },
    {
      id: 13111,
      pregunta: "¿Qué propiedad CSS controla la transparencia de un elemento?",
      opciones: ["visibility", "transparency", "opacity", "alpha"],
      respuestaCorrecta: 2,
      explicacion:
        "opacity controla el nivel de transparencia de un elemento, aceptando valores entre 0 (completamente transparente) y 1 (completamente opaco). Afecta al elemento y a todos sus descendientes.",
    },
    {
      id: 13112,
      pregunta:
        "¿Cuál es la propiedad responsable de establecer el espacio externo alrededor de un elemento?",
      opciones: ["padding", "gap", "margin", "spacing"],
      respuestaCorrecta: 2,
      explicacion:
        "margin define el espacio exterior entre un elemento y sus vecinos. padding controla el espacio interior. gap se usa en Flexbox y Grid para espaciar items. spacing no es una propiedad CSS estándar.",
    },
    {
      id: 13113,
      pregunta:
        "¿Qué propiedad CSS distribuye el espacio entre elementos dentro de un contenedor Flexbox o Grid?",
      opciones: ["margin", "spacing", "gap", "padding"],
      respuestaCorrecta: 2,
      explicacion:
        "gap define el espacio vacío entre elementos en contenedores Flexbox o Grid. Se añade automáticamente entre elementos sin afectar al espacio en los bordes del contenedor.",
    },
    {
      id: 13114,
      pregunta: "¿Cuál es la principal utilidad de las variables en SCSS?",
      opciones: [
        "Crear animaciones complejas automáticamente",
        "Generar grids responsivos sin media queries",
        "Almacenar valores que se reutilizan en todo el código",
        "Importar fuentes externas de Google Fonts",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Las variables en SCSS (precedidas por $) permiten definir colores, tamaños o fuentes una única vez y reutilizarlos. Facilita el mantenimiento, evita duplicación y permite cambios globales instantáneos.",
    },
    {
      id: 13115,
      pregunta:
        "¿Cuál es el valor de la propiedad position que fija un elemento respecto a la ventana del navegador?",
      opciones: ["relative", "sticky", "fixed", "absolute"],
      respuestaCorrecta: 2,
      explicacion:
        "El valor fixed posiciona el elemento respecto al viewport, manteniéndolo fijo incluso al desplazar. absolute se posiciona respecto al ancestro posicionado más cercano. sticky alterna entre relative y fixed según el scroll.",
    },
    {
      id: 13116,
      pregunta:
        "¿Cuál es la propiedad CSS que controla la transparencia de un elemento modificando su opacidad?",
      opciones: ["visibility", "display", "opacity", "transparency"],
      respuestaCorrecta: 2,
      explicacion:
        "opacity controla la transparencia entre 0 y 1. A diferencia de visibility: hidden (oculta pero reserva espacio) o display: none (no reserva espacio), opacity mantiene la participación en el flujo pero cambia la transparencia visual.",
    },
    {
      id: 13117,
      pregunta:
        "¿Cuál es la propiedad CSS3 que define el número de columnas en una composición tipo malla o rejilla?",
      opciones: [
        "column-count",
        "grid-columns",
        "grid-template-columns",
        "columns",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "grid-template-columns define las columnas de un contenedor CSS Grid. Acepta valores como unidades fijas (px), relativas (fr, %) o funciones (repeat, minmax), permitiendo layouts responsivos y flexibles.",
    },
    {
      id: 13118,
      pregunta:
        "¿Cuál es la propiedad CSS que añade espacio interior entre el contenido de un elemento y su borde?",
      opciones: ["margin", "gap", "padding", "spacing"],
      respuestaCorrecta: 2,
      explicacion:
        "padding crea espacio interior dentro de un elemento, entre el contenido y el borde. margin crea espacio exterior. gap se usa en Flexbox y Grid para separar elementos entre sí.",
    },
    {
      id: 13119,
      pregunta:
        "¿Cuál es la propiedad CSS que redondea las esquinas de un elemento?",
      opciones: ["outline-radius", "border-curve", "border-radius", "rounded"],
      respuestaCorrecta: 2,
      explicacion:
        "border-radius redondea las esquinas de los bordes. Acepta valores en píxeles, porcentajes o unidades relativas para controlar el radio de curvatura de cada esquina.",
    },
    {
      id: 13120,
      pregunta:
        "¿Cuál es la propiedad CSS que define el número de columnas en una cuadrícula CSS Grid?",
      opciones: [
        "grid-template-rows",
        "column-count",
        "grid-template-columns",
        "grid-columns",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "grid-template-columns especifica el tamaño y número de columnas en un grid. Admite píxeles, fracciones (fr) o funciones repeat(). grid-template-rows controla las filas; column-count es para texto en múltiples columnas.",
    },
  ],
};

export default moduloSimulacro2DisenoInterfacesWeb;
