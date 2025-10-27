const moduloUnidadDosInterfacesDeclarativasMaquetacionEstilos = {
  id: 1300,
  asignaturaId: 13,
  nombre: "Unidad 2: Interfaces declarativas, maquetación y estilos",
  titulo: "Interfaces declarativas, maquetación y estilos",
  descripcion: "FXML/JavaFX, separación de responsabilidades, HTML, CSS (selectores, padding, media queries) y CSS Grid",
  esExamen: false,
  preguntas: [
    {
      id: 13001,
      pregunta: "¿Qué define un archivo FXML?",
      opciones: [
        "La estructura visual de la interfaz JavaFX",
        "La lógica del programa",
        "Los estilos CSS",
        "La base de datos"
      ],
      respuestaCorrecta: 0,
      explicacion: "FXML describe la jerarquía de nodos de la UI; la lógica va en el controlador y los estilos en CSS."
    },
    {
      id: 13002,
      pregunta: "¿Qué lenguaje usa la web para estructurar contenido?",
      opciones: ["CSS", "HTML", "Java", "PHP"],
      respuestaCorrecta: 1,
      explicacion: "HTML define la estructura y semántica del contenido en la web."
    },
    {
      id: 13003,
      pregunta: "¿Qué ventaja tiene una interfaz declarativa?",
      opciones: [
        "Ejecutar código más rápido",
        "Reemplazar CSS",
        "Separar diseño de la lógica",
        "Generar datos dinámicos"
      ],
      respuestaCorrecta: 2,
      explicacion: "Separa responsabilidades y facilita mantenimiento y pruebas."
    },
    {
      id: 13004,
      pregunta: "¿Qué herramienta edita visualmente archivos FXML?",
      opciones: ["Photoshop", "Jenkins", "Postman", "Scene Builder"],
      respuestaCorrecta: 3,
      explicacion: "Scene Builder permite crear y modificar vistas FXML de forma visual."
    },
    {
      id: 13005,
      pregunta: "¿Qué etiqueta HTML agrupa contenido?",
      opciones: ["div", "input", "span", "meta"],
      respuestaCorrecta: 0,
      explicacion: "div es un contenedor genérico en bloque; span es en línea."
    },
    {
      id: 13006,
      pregunta: "¿Qué selector CSS aplica a todos los párrafos?",
      opciones: ["#p { }", ".p { }", "*p { }", "p { }"],
      respuestaCorrecta: 3,
      explicacion: "El selector de tipo p selecciona todos los elementos <p>."
    },
    {
      id: 13007,
      pregunta: "¿Qué propiedad controla el espaciado interno?",
      opciones: ["margin", "border", "padding", "align"],
      respuestaCorrecta: 2,
      explicacion: "padding controla el espacio interno; margin el externo."
    },
    {
      id: 13008,
      pregunta: "¿Qué regla CSS adapta el diseño al tamaño de pantalla?",
      opciones: ["@responsive", "@media", "@layout", "@query"],
      respuestaCorrecta: 1,
      explicacion: "Las media queries (@media) aplican estilos según condiciones del dispositivo."
    },
    {
      id: 13009,
      pregunta: "¿Qué herramienta permite inspeccionar los estilos activos?",
      opciones: ["DevTools", "Postman", "Jenkins", "Nmap"],
      respuestaCorrecta: 0,
      explicacion: "Las DevTools del navegador muestran el DOM, estilos calculados y cascada."
    },
    {
      id: 13010,
      pregunta: "¿Qué sistema de maquetación moderno ofrece filas y columnas flexibles?",
      opciones: ["Bootstrap Grid", "Table Layout", "HTML Frames", "CSS Grid"],
      respuestaCorrecta: 3,
      explicacion: "CSS Grid permite maquetación bidimensional flexible nativa en CSS."
    }
  ]
};

export default moduloUnidadDosInterfacesDeclarativasMaquetacionEstilos;