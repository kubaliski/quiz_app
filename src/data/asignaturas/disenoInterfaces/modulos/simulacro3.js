const moduloSimulacro3DisenoInterfacesWeb = {
  id: 1308,
  asignaturaId: 13,
  nombre: "Simulacro 3: Diseño de Interfaces Web",
  titulo: "Diseño de Interfaces Web",
  descripcion:
    "CSS (color, fuentes, bordes, fondos, posicionamiento, box model, overflow, transiciones, opacidad), Flexbox, Grid, SCSS, UX y Figma.",
  esExamen: true,
  preguntas: [
    {
      id: 13121,
      pregunta:
        "¿Cuál de las siguientes opciones describe correctamente qué es el modelo de caja (box model) en CSS?",
      opciones: [
        "Un sistema de rejilla para maquetar columnas y filas",
        "El conjunto formado por contenido, padding, border y margin que rodea cada elemento",
        "Una técnica para centrar elementos con Flexbox",
        "Un método para crear animaciones con fotogramas clave",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "El box model describe cómo se calcula el espacio total de un elemento: contenido en el centro, rodeado por padding (espacio interior), border (borde) y margin (espacio exterior). Entenderlo es fundamental para controlar tamaños y espaciados.",
    },
    {
      id: 13122,
      pregunta:
        "¿Qué propiedad CSS permite controlar si el padding y el border se incluyen o no dentro del ancho y alto definidos en un elemento?",
      opciones: ["box-sizing", "box-model", "width-mode", "border-box"],
      respuestaCorrecta: 0,
      explicacion:
        "box-sizing determina cómo se calcula el tamaño total. Con el valor content-box (por defecto), padding y border se suman al ancho/alto. Con border-box, se incluyen dentro, facilitando cálculos de layout.",
    },
    {
      id: 13123,
      pregunta:
        "¿Qué propiedad CSS permite aplicar una transformación visual como rotación, escala o traslación a un elemento?",
      opciones: ["animation", "transition", "transform", "filter"],
      respuestaCorrecta: 2,
      explicacion:
        "transform aplica transformaciones geométricas al elemento: rotate(), scale(), translate(), skew(). No altera el flujo del documento ni afecta a otros elementos. Se usa frecuentemente junto con transition para animaciones suaves.",
    },
    {
      id: 13124,
      pregunta:
        "En CSS Grid, ¿qué función permite repetir un patrón de columnas o filas un número determinado de veces?",
      opciones: ["loop()", "repeat()", "auto-fill()", "grid-repeat()"],
      respuestaCorrecta: 1,
      explicacion:
        "La función repeat() simplifica la definición de columnas o filas repetidas: repeat(3, 1fr) equivale a 1fr 1fr 1fr. También acepta auto-fill y auto-fit como primer argumento para layouts responsivos sin media queries.",
    },
    {
      id: 13125,
      pregunta:
        "¿Qué valor de la propiedad display convierte un elemento en un contenedor CSS Grid?",
      opciones: ["grid", "flex", "inline-grid", "block-grid"],
      respuestaCorrecta: 0,
      explicacion:
        "display: grid activa el sistema de rejilla CSS Grid en el contenedor, permitiendo definir columnas y filas con grid-template-columns y grid-template-rows. inline-grid también activa Grid pero el contenedor se comporta como inline.",
    },
    {
      id: 13126,
      pregunta:
        "¿Cuál es la diferencia entre overflow: hidden y overflow: auto?",
      opciones: [
        "hidden muestra barras de scroll; auto oculta el contenido",
        "hidden oculta el contenido que sobresale; auto añade barras de scroll solo cuando son necesarias",
        "hidden y auto son sinónimos en CSS moderno",
        "hidden aplica solo al eje Y; auto aplica solo al eje X",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "overflow: hidden recorta el contenido que supera el contenedor sin mostrar barras de desplazamiento. overflow: auto muestra barras de scroll únicamente cuando el contenido las necesita, siendo más ergonómico para el usuario.",
    },
    {
      id: 13127,
      pregunta:
        "¿Qué propiedad CSS define el estilo de línea de un borde (sólido, discontinuo, punteado, etc.)?",
      opciones: ["border-width", "border-color", "border-type", "border-style"],
      respuestaCorrecta: 3,
      explicacion:
        "border-style especifica el estilo visual del borde: solid, dashed, dotted, double, groove, ridge, entre otros. Sin definir border-style, el borde no se muestra aunque se hayan definido width y color.",
    },
    {
      id: 13128,
      pregunta:
        "En Flexbox, ¿qué propiedad controla la dirección en la que se colocan los elementos hijos (en fila o en columna)?",
      opciones: ["flex-wrap", "align-items", "flex-direction", "justify-content"],
      respuestaCorrecta: 2,
      explicacion:
        "flex-direction define el eje principal del contenedor flex: row (izquierda a derecha, por defecto), row-reverse, column (arriba a abajo) y column-reverse. Determina cómo se alinean justify-content y align-items.",
    },
    {
      id: 13129,
      pregunta:
        "¿Qué propiedad de Flexbox permite que un elemento hijo crezca para ocupar el espacio sobrante del contenedor?",
      opciones: ["flex-shrink", "flex-basis", "flex-grow", "order"],
      respuestaCorrecta: 2,
      explicacion:
        "flex-grow define el factor de crecimiento de un elemento flex. Un valor de 1 permite que el elemento ocupe el espacio disponible proporcionalmnete. Si varios hijos tienen flex-grow: 1, el espacio se reparte a partes iguales.",
    },
    {
      id: 13130,
      pregunta:
        "¿Qué propiedad CSS se usa para aplicar una imagen de fondo y cómo se especifica la ruta?",
      opciones: [
        "background-src: 'imagen.png'",
        "background-image: url('imagen.png')",
        "bg-image: 'imagen.png'",
        "image-background: url('imagen.png')",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "background-image acepta la función url() con la ruta de la imagen. Se puede combinar con background-size, background-position y background-repeat para controlar cómo se muestra. También acepta gradientes con linear-gradient().",
    },
    {
      id: 13131,
      pregunta:
        "¿Qué valor de la propiedad position mantiene un elemento en el flujo normal del documento pero permite desplazarlo con top, left, right y bottom?",
      opciones: ["static", "fixed", "absolute", "relative"],
      respuestaCorrecta: 3,
      explicacion:
        "position: relative mantiene el elemento en su posición original dentro del flujo, pero permite desplazarlo visualmente con top/left/right/bottom sin afectar a los elementos vecinos. Es el contexto de posicionamiento para hijos con absolute.",
    },
    {
      id: 13132,
      pregunta:
        "En SCSS, ¿qué directiva se usa para definir un bloque de estilos reutilizable que puede recibir argumentos?",
      opciones: ["@function", "@include", "@extend", "@mixin"],
      respuestaCorrecta: 3,
      explicacion:
        "@mixin define un bloque de estilos reutilizable, similar a una función. Puede recibir parámetros con valores por defecto. Se invoca con @include. Es ideal para patrones CSS repetitivos como botones, media queries o sombras.",
    },
    {
      id: 13133,
      pregunta:
        "¿Qué propiedad CSS controla el tamaño de la fuente de un texto?",
      opciones: ["text-size", "font-size", "letter-size", "size"],
      respuestaCorrecta: 1,
      explicacion:
        "font-size define el tamaño de la fuente. Acepta unidades absolutas (px, pt), relativas (em, rem) y palabras clave (small, medium, large). Usar rem facilita la accesibilidad al respetar el tamaño base configurado por el usuario.",
    },
    {
      id: 13134,
      pregunta:
        "En CSS Grid, ¿qué propiedad se aplica a un elemento hijo para indicar cuántas columnas debe ocupar?",
      opciones: ["grid-column-span", "column-span", "grid-column", "span-columns"],
      respuestaCorrecta: 2,
      explicacion:
        "grid-column permite indicar en qué columna empieza y termina un elemento: grid-column: 1 / 3 ocupa desde la línea 1 hasta la 3. También se puede usar la notación abreviada grid-column: span 2 para ocupar 2 columnas.",
    },
    {
      id: 13135,
      pregunta:
        "¿Qué propiedad CSS permite añadir una sombra al texto de un elemento?",
      opciones: ["box-shadow", "font-shadow", "text-shadow", "shadow"],
      respuestaCorrecta: 2,
      explicacion:
        "text-shadow añade una sombra proyectada al texto. Acepta los valores: desplazamiento horizontal, desplazamiento vertical, radio de desenfoque y color. Se pueden encadenar múltiples sombras separadas por comas.",
    },
    {
      id: 13136,
      pregunta:
        "¿Qué propiedad CSS3 permite crear animaciones definiendo fotogramas clave con @keyframes?",
      opciones: ["transition", "transform", "animation", "motion"],
      respuestaCorrecta: 2,
      explicacion:
        "animation vincula un elemento con una secuencia de @keyframes. Se configura con sub-propiedades como animation-name, animation-duration, animation-timing-function e animation-iteration-count para controlar el comportamiento completo.",
    },
    {
      id: 13137,
      pregunta:
        "En Flexbox, ¿qué valor de la propiedad align-items estira los elementos hijos para que ocupen toda la altura del contenedor?",
      opciones: ["center", "flex-start", "baseline", "stretch"],
      respuestaCorrecta: 3,
      explicacion:
        "align-items: stretch (valor por defecto) estira los hijos para que ocupen todo el eje transversal del contenedor. Es el responsable de que columnas en un menú flex tengan la misma altura sin especificar height.",
    },
    {
      id: 13138,
      pregunta:
        "¿Cuál de las siguientes afirmaciones sobre SCSS es correcta?",
      opciones: [
        "SCSS es un lenguaje de programación que sustituye a CSS",
        "SCSS es un preprocesador que extiende CSS con variables, anidamiento y mixins, y se compila a CSS estándar",
        "SCSS solo puede usarse con frameworks como Bootstrap",
        "SCSS no es compatible con los navegadores modernos sin plugins adicionales",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "SCSS es un preprocesador CSS que añade funcionalidades como variables ($), anidamiento, mixins y funciones. El archivo .scss se compila a CSS estándar que cualquier navegador entiende. No sustituye CSS; lo extiende.",
    },
    {
      id: 13139,
      pregunta:
        "¿Qué propiedad CSS permite cambiar el cursor del ratón al pasar por encima de un elemento?",
      opciones: ["mouse-style", "pointer", "cursor", "hover-cursor"],
      respuestaCorrecta: 2,
      explicacion:
        "La propiedad cursor cambia la apariencia del puntero del ratón. Valores comunes: pointer (mano para enlaces), default, crosshair, grab, not-allowed, wait. Es importante para comunicar interactividad al usuario.",
    },
    {
      id: 13140,
      pregunta:
        "¿Qué significa el principio de 'jerarquía visual' en diseño UX?",
      opciones: [
        "Que los elementos más importantes deben estar ocultos al principio",
        "Que los elementos del menú deben estar ordenados alfabéticamente",
        "Organizar los elementos visualmente para guiar la atención del usuario hacia lo más relevante primero",
        "Que el código HTML debe respetar el orden de importancia de los elementos",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "La jerarquía visual organiza los elementos (mediante tamaño, color, contraste, posición) para guiar la mirada del usuario hacia los contenidos más importantes primero. Es clave para que el usuario entienda rápidamente la interfaz.",
    },
    {
      id: 13141,
      pregunta:
        "¿Qué propiedad CSS controla el espacio entre líneas de un texto?",
      opciones: ["letter-spacing", "word-spacing", "line-height", "text-spacing"],
      respuestaCorrecta: 2,
      explicacion:
        "line-height define el espaciado entre líneas de texto. Un valor de 1.5 o 1.6 (sin unidad, relativo al font-size) mejora considerablemente la legibilidad. Las WCAG recomiendan al menos 1.5 para el cuerpo del texto.",
    },
    {
      id: 13142,
      pregunta:
        "En CSS Grid, ¿qué valor especial permite crear columnas que se ajustan automáticamente al espacio disponible sin dejar huecos vacíos?",
      opciones: ["auto-fill", "auto-fit", "auto-columns", "auto-grid"],
      respuestaCorrecta: 1,
      explicacion:
        "auto-fit, dentro de repeat(), colapsa las columnas vacías para que las columnas existentes ocupen todo el espacio disponible. auto-fill reserva el espacio aunque no haya elementos. auto-fit es preferido para layouts responsivos.",
    },
    {
      id: 13143,
      pregunta:
        "¿Qué propiedad CSS permite alinear el texto dentro de un elemento (izquierda, derecha, centrado, justificado)?",
      opciones: ["font-align", "text-align", "align-text", "content-align"],
      respuestaCorrecta: 1,
      explicacion:
        "text-align controla la alineación horizontal del contenido textual: left, right, center y justify. Afecta solo a contenido inline dentro de un bloque, no a la posición del elemento en sí.",
    },
    {
      id: 13144,
      pregunta:
        "En SCSS, ¿qué directiva permite importar parciales (archivos _partial.scss) para organizar el código en módulos?",
      opciones: ["@use", "@import", "@include", "@require"],
      respuestaCorrecta: 1,
      explicacion:
        "@import incluye el contenido de otro archivo SCSS en el archivo actual. Los parciales se nombran con guion bajo (_variables.scss) para que el compilador no los procese como archivos independientes. En SCSS moderno se prefiere @use.",
    },
    {
      id: 13145,
      pregunta:
        "¿Cuál de las siguientes es la principal diferencia entre position: absolute y position: sticky?",
      opciones: [
        "absolute permanece en el flujo normal; sticky se saca del flujo",
        "absolute se posiciona respecto al ancestro posicionado; sticky alterna entre relative y fixed según el scroll",
        "sticky es más moderno y sustituye completamente a absolute",
        "absolute es para móviles y sticky para escritorio",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "position: absolute saca el elemento del flujo y lo posiciona respecto al ancestro con position distinto de static. position: sticky se comporta como relative hasta que el scroll supera un umbral (top, left, etc.) y entonces actúa como fixed.",
    },
    {
      id: 13146,
      pregunta:
        "¿Qué herramienta de Figma permite conectar pantallas para simular la navegación de una aplicación?",
      opciones: ["Frames", "Components", "Prototype", "Auto Layout"],
      respuestaCorrecta: 2,
      explicacion:
        "La pestaña Prototype de Figma permite crear conexiones entre frames para simular flujos de navegación. Se pueden definir triggers (click, hover) y transiciones para presentar el diseño como una aplicación interactiva antes de codificar.",
    },
    {
      id: 13147,
      pregunta:
        "¿Qué significa el concepto de 'diseño responsive' en el contexto del Diseño de Interfaces Web?",
      opciones: [
        "Que la interfaz responde rápidamente a las solicitudes del servidor",
        "Que el diseño de la interfaz se adapta al tamaño y características del dispositivo del usuario",
        "Que la web solo funciona en dispositivos móviles",
        "Que el backend procesa las respuestas de forma asíncrona",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "El diseño responsive adapta el layout y los contenidos al tamaño de pantalla del dispositivo mediante media queries, unidades relativas y técnicas como Flexbox y Grid. Garantiza una buena experiencia en móvil, tablet y escritorio.",
    },
    {
      id: 13148,
      pregunta:
        "¿Qué propiedad CSS define el grosor del borde de un elemento?",
      opciones: ["border-size", "border-weight", "border-thickness", "border-width"],
      respuestaCorrecta: 3,
      explicacion:
        "border-width especifica el grosor del borde en píxeles u otras unidades. Puede aplicarse a los cuatro lados a la vez o individualmente con border-top-width, border-right-width, etc. Requiere border-style para que sea visible.",
    },
    {
      id: 13149,
      pregunta:
        "En diseño UX, ¿qué es un 'wireframe'?",
      opciones: [
        "Un archivo de configuración de la base de datos",
        "Un esquema estructural de baja fidelidad que muestra la disposición de los elementos de una interfaz sin diseño visual",
        "Un prototipo de alta fidelidad completamente funcional",
        "Un documento de especificación técnica del backend",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Un wireframe es una representación esquemática y simplificada de una interfaz, sin colores ni estilos definitivos. Sirve para definir la estructura, jerarquía y flujo antes de invertir tiempo en el diseño visual o en el desarrollo.",
    },
    {
      id: 13150,
      pregunta:
        "¿Qué propiedad CSS permite controlar si los elementos de un contenedor flex se distribuyen en una o varias líneas?",
      opciones: ["flex-direction", "flex-grow", "align-content", "flex-wrap"],
      respuestaCorrecta: 3,
      explicacion:
        "flex-wrap define si los elementos flex pueden pasar a nuevas líneas cuando no caben en una sola. El valor wrap permite el salto de línea, nowrap (por defecto) fuerza todo en una línea, y wrap-reverse invierte el orden de las líneas.",
    },
  ],
};

export default moduloSimulacro3DisenoInterfacesWeb;