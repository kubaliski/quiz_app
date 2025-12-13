const moduloUnidadSietePruebasCalidad = {
  id: 1305,
  asignaturaId: 13,
  nombre: "Unidad 7: Pruebas y aseguramiento de la calidad",
  titulo: "Pruebas y aseguramiento de la calidad",
  descripcion:
    "Pruebas unitarias e integración, validación de accesibilidad, pruebas alfa/beta y gestión de incidencias.",
  esExamen: false,
  preguntas: [
    {
      id: 13051,
      pregunta: "¿Qué prueba verifica un componente aislado?",
      opciones: ["Rendimiento", "Integración", "Usabilidad", "Unitaria"],
      respuestaCorrecta: 3,
      explicacion:
        "Las pruebas unitarias validan la funcionalidad de componentes individuales de forma aislada."
    },
    {
      id: 13052,
      pregunta: "¿Qué prueba evalúa la interacción entre módulos?",
      opciones: ["Integración", "Estructural", "Unitarias", "Visual"],
      respuestaCorrecta: 0,
      explicacion:
        "Las pruebas de integración comprueban cómo funcionan juntas las distintas partes del sistema."
    },
    {
      id: 13053,
      pregunta: "¿Qué herramienta valida accesibilidad automáticamente?",
      opciones: ["Docker", "Postman", "WAVE", "Nmap"],
      respuestaCorrecta: 2,
      explicacion:
        "WAVE analiza páginas web para detectar problemas de accesibilidad de forma automática."
    },
    {
      id: 13054,
      pregunta:
        "¿Qué principio de accesibilidad se prueba con etiquetas ARIA?",
      opciones: ["Perceptible", "Privado", "Proactivo", "Pasivo"],
      respuestaCorrecta: 0,
      explicacion:
        "Las etiquetas ARIA ayudan a que el contenido sea perceptible para tecnologías asistivas."
    },
    {
      id: 13055,
      pregunta:
        "¿Qué recurso permite detectar errores de navegación con teclado?",
      opciones: ["Photoshop", "NVDA", "Android Studio", "Figma Viewer"],
      respuestaCorrecta: 1,
      explicacion:
        "NVDA es un lector de pantalla que ayuda a evaluar la navegación por teclado."
    },
    {
      id: 13056,
      pregunta: "¿Qué caracteriza una prueba alfa?",
      opciones: [
        "Se ejecuta tras el lanzamiento",
        "La hacen usuarios externos",
        "Se realiza internamente por el equipo de desarrollo",
        "Solo mide rendimiento"
      ],
      respuestaCorrecta: 2,
      explicacion:
        "La prueba alfa se lleva a cabo internamente antes de liberar el producto a usuarios externos."
    },
    {
      id: 13057,
      pregunta: "¿Qué herramienta se usa para registrar incidencias?",
      opciones: ["Photoshop", "Jira", "Node.js", "npm"],
      respuestaCorrecta: 1,
      explicacion:
        "Jira permite reportar, priorizar y hacer seguimiento de incidencias y tareas."
    },
    {
      id: 13058,
      pregunta:
        "¿Qué campo NO debe faltar en un reporte de error?",
      opciones: [
        "Pasos para reproducirlo",
        "Colores del interfaz",
        "Nombre del desarrollador",
        "Fecha de lanzamiento"
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Indicar pasos para reproducir el error es clave para diagnosticar y corregir."
    },
    {
      id: 13059,
      pregunta: "¿Qué ventaja ofrece la prueba beta?",
      opciones: [
        "Permite validar el producto con usuarios reales",
        "Sustituye las pruebas unitarias",
        "Acelera la compilación",
        "Mejora el SEO"
      ],
      respuestaCorrecta: 0,
      explicacion:
        "La beta expone el producto a usuarios reales para obtener feedback y detectar fallos."
    },
    {
      id: 13060,
      pregunta:
        "¿Qué comando de Git se usa para marcar una versión estable?",
      opciones: ["merge", "push", "tag", "init"],
      respuestaCorrecta: 2,
      explicacion:
        "Con 'git tag' se marcan versiones específicas del historial como puntos de lanzamiento."
    }
  ]
};

export default moduloUnidadSietePruebasCalidad;
