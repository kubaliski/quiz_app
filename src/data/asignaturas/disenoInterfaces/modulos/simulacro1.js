const moduloSimulacro1CSS3 = {
  id: 1306,
  asignaturaId: 13,
  nombre: "Simulacro 1: CSS3",
  titulo: "CSS3",
  descripcion: "Selectores, especificidad, pseudoclases, pseudoelementos, BEM, cascada, herencia, variables CSS y unidades.",
  esExamen: true,
  preguntas: [
    {
      id: 13061,
      pregunta: "¿Qué define un selector en CSS?",
      opciones: [
        "Los elementos HTML a los que se aplican estilos",
        "El orden de carga del CSS",
        "La estructura del documento HTML",
        "El tipo de navegador utilizado"
      ],
      respuestaCorrecta: 0,
      explicacion: "Un selector en CSS define qué elementos HTML serán afectados por las reglas de estilo declaradas."
    },
    {
      id: 13062,
      pregunta: "¿Qué característica debe cumplir un id en HTML?",
      opciones: [
        "Puede repetirse si se combina con clases",
        "Debe ser único en toda la página",
        "Solo se usa en etiquetas div",
        "Tiene menos prioridad que una clase"
      ],
      respuestaCorrecta: 1,
      explicacion: "Un id debe ser único en todo el documento HTML, no puede repetirse en ningún otro elemento."
    },
    {
      id: 13063,
      pregunta: "¿Cuál es la sintaxis correcta para seleccionar un elemento con dos clases simultáneas?",
      opciones: [
        ".clase1 clase2",
        ".clase1, .clase2",
        "#clase1.clase2",
        ".clase1.clase2"
      ],
      respuestaCorrecta: 3,
      explicacion: "Para seleccionar un elemento que tenga ambas clases, se escriben juntas sin espacio: .clase1.clase2"
    },
    {
      id: 13064,
      pregunta: "¿Qué selector afecta a absolutamente todos los elementos del documento?",
      opciones: ["html", "body", "#all", "*"],
      respuestaCorrecta: 3,
      explicacion: "El selector universal (*) selecciona todos los elementos del documento sin excepción."
    },
    {
      id: 13065,
      pregunta: "¿Qué hace un selector descendiente?",
      opciones: [
        "Selecciona solo hijos directos",
        "Selecciona hermanos inmediatos",
        "Selecciona todos los elementos dentro de otro",
        "Selecciona el último hijo"
      ],
      respuestaCorrecta: 2,
      explicacion: "El selector descendiente (espacio) selecciona todos los elementos que están dentro de otro, sin importar el nivel de anidación."
    },
    {
      id: 13066,
      pregunta: "¿Cuál es el símbolo del selector hijo directo?",
      opciones: [">", "+", "~", "*"],
      respuestaCorrecta: 0,
      explicacion: "El símbolo > selecciona únicamente los hijos directos de un elemento, no los descendientes más profundos."
    },
    {
      id: 13067,
      pregunta: "¿Qué selector selecciona únicamente el primer hermano inmediato?",
      opciones: ["~", "+", ">", ","],
      respuestaCorrecta: 1,
      explicacion: "El selector + (adyacente) selecciona solo el primer hermano inmediatamente siguiente al elemento."
    },
    {
      id: 13068,
      pregunta: "¿Cuál tiene mayor prioridad en CSS?",
      opciones: [
        "Selector de etiqueta",
        "Selector universal",
        "Selector de clase",
        "Estilo inline"
      ],
      respuestaCorrecta: 3,
      explicacion: "Los estilos inline tienen la mayor especificidad (1000 puntos), superando a selectores de id, clase y etiqueta."
    },
    {
      id: 13069,
      pregunta: "¿Qué pseudoclase se aplica cuando el ratón pasa por encima?",
      opciones: [":hover", ":active", ":focus", ":visited"],
      respuestaCorrecta: 0,
      explicacion: "La pseudoclase :hover se activa cuando el cursor del ratón está sobre el elemento."
    },
    {
      id: 13070,
      pregunta: "¿Cuál es el orden recomendado de pseudoclases en enlaces?",
      opciones: [
        "hover → active → visited → link",
        "visited → link → hover → active",
        "link → visited → hover → active",
        "active → hover → link → visited"
      ],
      respuestaCorrecta: 2,
      explicacion: "El orden LVHA (Link, Visited, Hover, Active) es el recomendado para que las pseudoclases funcionen correctamente."
    },
    {
      id: 13071,
      pregunta: "¿Qué pseudoclase selecciona campos obligatorios?",
      opciones: [":optional", ":enabled", ":checked", ":required"],
      respuestaCorrecta: 3,
      explicacion: "La pseudoclase :required selecciona los campos de formulario que tienen el atributo required."
    },
    {
      id: 13072,
      pregunta: "¿Qué pseudoclase selecciona el tercer hijo de un contenedor?",
      opciones: [
        ":last-child(3)",
        ":nth-child(3)",
        ":first-child(3)",
        ":nth-last-child(3)"
      ],
      respuestaCorrecta: 1,
      explicacion: "La pseudoclase :nth-child(3) selecciona el tercer hijo de su contenedor padre."
    },
    {
      id: 13073,
      pregunta: "¿Qué pseudoclase permite excluir elementos de una selección?",
      opciones: [":except()", ":no()", ":not()", ":none()"],
      respuestaCorrecta: 2,
      explicacion: "La pseudoclase :not() permite excluir elementos que coincidan con el selector especificado."
    },
    {
      id: 13074,
      pregunta: "¿Con qué símbolo se escriben los pseudoelementos?",
      opciones: ["::", ":", "[]", "<>"],
      respuestaCorrecta: 0,
      explicacion: "Los pseudoelementos se escriben con doble dos puntos (::) según la especificación CSS3."
    },
    {
      id: 13075,
      pregunta: "¿Qué pseudoelemento modifica solo la primera letra?",
      opciones: ["::first-line", "::marker", "::before", "::first-letter"],
      respuestaCorrecta: 3,
      explicacion: "El pseudoelemento ::first-letter permite aplicar estilos únicamente a la primera letra de un bloque de texto."
    },
    {
      id: 13076,
      pregunta: "¿Qué selector por atributo selecciona valores que contienen un texto?",
      opciones: [
        "[attr=\"valor\"]",
        "[attr*=\"valor\"]",
        "[attr^=\"valor\"]",
        "[attr$=\"valor\"]"
      ],
      respuestaCorrecta: 1,
      explicacion: "El selector [attr*=\"valor\"] selecciona elementos cuyo atributo contiene el texto en cualquier posición."
    },
    {
      id: 13077,
      pregunta: "¿Qué representa el bloque en la metodología BEM?",
      opciones: [
        "Una variación visual",
        "Un estado del elemento",
        "Un componente independiente",
        "Una clase reutilizable"
      ],
      respuestaCorrecta: 2,
      explicacion: "En BEM, el Bloque representa un componente independiente y autónomo que puede reutilizarse."
    },
    {
      id: 13078,
      pregunta: "¿Qué símbolo identifica un modificador en BEM?",
      opciones: ["__", ":", "++", "--"],
      respuestaCorrecta: 3,
      explicacion: "En BEM, los modificadores se identifican con doble guión (--), por ejemplo: bloque--modificador."
    },
    {
      id: 13079,
      pregunta: "¿Qué factor NO influye en la cascada CSS?",
      opciones: [
        "Especificidad",
        "Orden de aparición",
        "Importancia",
        "Compatibilidad del navegador"
      ],
      respuestaCorrecta: 3,
      explicacion: "La cascada CSS se determina por especificidad, orden de aparición e importancia (!important), no por la compatibilidad del navegador."
    },
    {
      id: 13080,
      pregunta: "¿Qué propiedad sí se hereda por defecto?",
      opciones: ["color", "border", "padding", "margin"],
      respuestaCorrecta: 0,
      explicacion: "La propiedad color se hereda por defecto a los elementos hijos. Border, padding y margin no se heredan."
    },
    {
      id: 13081,
      pregunta: "¿Qué valor fuerza la herencia de una propiedad?",
      opciones: ["inherit", "unset", "initial", "default"],
      respuestaCorrecta: 0,
      explicacion: "El valor inherit fuerza que una propiedad herede el valor de su elemento padre."
    },
    {
      id: 13082,
      pregunta: "¿Qué prefijo corresponde a Firefox?",
      opciones: ["-webkit-", "-ms-", "-o-", "-moz-"],
      respuestaCorrecta: 3,
      explicacion: "El prefijo -moz- se usa para propiedades experimentales en Firefox (Mozilla)."
    },
    {
      id: 13083,
      pregunta: "¿Dónde se recomienda declarar variables CSS globales?",
      opciones: ["body", "html", ":root", "*"],
      respuestaCorrecta: 2,
      explicacion: "Se recomienda declarar variables CSS globales en :root, que representa el elemento raíz del documento."
    },
    {
      id: 13084,
      pregunta: "¿Qué unidad se basa siempre en el tamaño del elemento raíz?",
      opciones: ["em", "%", "vh", "rem"],
      respuestaCorrecta: 3,
      explicacion: "La unidad rem (root em) siempre se calcula respecto al tamaño de fuente del elemento raíz (html)."
    },
    {
      id: 13085,
      pregunta: "¿Qué unidad representa el 1% del ancho del viewport?",
      opciones: ["vh", "%", "vw", "vmin"],
      respuestaCorrecta: 2,
      explicacion: "La unidad vw (viewport width) representa el 1% del ancho de la ventana del navegador."
    },
    {
      id: 13086,
      pregunta: "¿Qué formato permite transparencia sin afectar al contenido?",
      opciones: ["opacity", "transparent", "rgba()", "hex"],
      respuestaCorrecta: 2,
      explicacion: "rgba() permite definir transparencia solo en el color, sin afectar la opacidad del contenido hijo como hace opacity."
    },
    {
      id: 13087,
      pregunta: "¿Qué propiedad fija una imagen para crear efecto parallax?",
      opciones: [
        "background-size",
        "background-position",
        "background-attachment",
        "background-repeat"
      ],
      respuestaCorrecta: 2,
      explicacion: "background-attachment: fixed mantiene la imagen fija mientras el contenido se desplaza, creando el efecto parallax."
    },
    {
      id: 13088,
      pregunta: "¿Qué propiedad mezcla varias capas de fondo?",
      opciones: [
        "mix-blend-mode",
        "filter",
        "opacity",
        "background-blend-mode"
      ],
      respuestaCorrecta: 3,
      explicacion: "background-blend-mode permite mezclar las capas de fondo (imágenes y colores) entre sí."
    },
    {
      id: 13089,
      pregunta: "¿Qué valor de box-sizing incluye padding y borde en el width?",
      opciones: ["content-box", "inherit", "initial", "border-box"],
      respuestaCorrecta: 3,
      explicacion: "border-box incluye el padding y el borde dentro del width y height especificados."
    },
    {
      id: 13090,
      pregunta: "¿Qué propiedad NO empuja el contenido del elemento?",
      opciones: ["border", "margin", "outline", "padding"],
      respuestaCorrecta: 2,
      explicacion: "outline no forma parte del box model, por lo que no afecta al tamaño ni empuja el contenido del elemento."
    }
  ]
};

export default moduloSimulacro1CSS3;