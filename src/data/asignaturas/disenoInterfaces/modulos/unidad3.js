const moduloUnidadTresUsabilidadUXUI = {
  id: 1301,
  asignaturaId: 13,
  nombre: "Unidad 3: Usabilidad y experiencia de usuario (UX/UI)",
  titulo: "Usabilidad y experiencia de usuario (UX/UI)",
  descripcion: "Usabilidad (ISO 9241), heurísticas de Nielsen, flujos UX y accesibilidad (WCAG/POUR)",
  esExamen: false,
  preguntas: [
    {
      id: 13011,
      pregunta: "¿Qué mide la usabilidad según ISO 9241?",
      opciones: [
        "Eficacia, eficiencia y satisfacción",
        "Color y contraste",
        "Tamaño de pantalla",
        "Seguridad"
      ],
      respuestaCorrecta: 0,
      explicacion: "ISO 9241-11 define usabilidad por eficacia, eficiencia y satisfacción en un contexto de uso."
    },
    {
      id: 13012,
      pregunta: "¿Qué principio NO pertenece a las heurísticas de Nielsen?",
      opciones: [
        "Correspondencia con el mundo real",
        "Libertad del usuario",
        "Seguridad en red",
        "Feedback del sistema"
      ],
      respuestaCorrecta: 2,
      explicacion: "Las heurísticas de Nielsen incluyen feedback del sistema, correspondencia y control del usuario; 'seguridad en red' no es una de ellas."
    },
    {
      id: 13013,
      pregunta: "¿Qué herramienta permite evaluar flujos UX?",
      opciones: ["Figma", "NetBeans", "Excel", "Git"],
      respuestaCorrecta: 0,
      explicacion: "Figma facilita prototipado, flujos y pruebas con usuarios."
    },
    {
      id: 13014,
      pregunta: "¿Qué mejora la visibilidad del estado del sistema?",
      opciones: [
        "Mostrar feedback tras una acción",
        "Cambiar la tipografía",
        "Ocultar menús",
        "Añadir más botones"
      ],
      respuestaCorrecta: 0,
      explicacion: "El feedback inmediato al usuario mejora la visibilidad del estado."
    },
    {
      id: 13015,
      pregunta: "¿Cuándo debe evaluarse la usabilidad?",
      opciones: [
        "Solo antes del lanzamiento",
        "Desde el inicio del diseño",
        "En mantenimiento",
        "Nunca"
      ],
      respuestaCorrecta: 1,
      explicacion: "Evaluarla tempranamente reduce retrabajo y mejora el diseño iterativo."
    },
    {
      id: 13016,
      pregunta: "¿Qué significan las siglas WCAG?",
      opciones: [
        "Web Content Accessibility Guidelines",
        "World Consortium Accessibility Group",
        "Web Compliance Accessibility Guide",
        "Web Control Access Guide"
      ],
      respuestaCorrecta: 0,
      explicacion: "WCAG es el estándar de pautas de accesibilidad para contenido web del W3C."
    },
    {
      id: 13017,
      pregunta: "¿Qué principio NO pertenece al modelo POUR?",
      opciones: ["Privado", "Perceptible", "Operable", "Comprensible"],
      respuestaCorrecta: 0,
      explicacion: "POUR: Perceptible, Operable, Understandable (Comprensible) y Robust."
    },
    {
      id: 13018,
      pregunta: "¿Qué nivel WCAG se considera estándar en Europa?",
      opciones: ["A", "AA", "AAA", "B"],
      respuestaCorrecta: 1,
      explicacion: "El nivel de conformidad exigido suele ser WCAG 2.1 AA."
    },
    {
      id: 13019,
      pregunta: "¿Qué etiqueta HTML mejora la accesibilidad de un formulario?",
      opciones: ["srcset", "aria-label", "rel", "async"],
      respuestaCorrecta: 1,
      explicacion: "aria-label aporta nombres accesibles cuando no hay label visible."
    },
    {
      id: 13020,
      pregunta: "¿Qué herramienta evalúa accesibilidad automáticamente?",
      opciones: ["WAVE", "Postman", "GitHub Actions", "Webpack"],
      respuestaCorrecta: 0,
      explicacion: "WAVE analiza páginas y señala problemas de accesibilidad."
    }
  ]
};

export default moduloUnidadTresUsabilidadUXUI;