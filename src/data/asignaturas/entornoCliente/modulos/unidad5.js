const moduloUnidadCincoServiciosWebIntegracionApis = {
  id: 1204,
  asignaturaId: 12,
  nombre: "Unidad 5: Servicios web, integración y APIs",
  titulo: "Servicios web, integración y APIs",
  descripcion: "Consumo de APIs, métodos HTTP, herramientas de prueba, servicios en JS, centralización y buenas prácticas.",
  esExamen: false,
  preguntas: [
    {
      id: 12041,
      pregunta: "¿Qué formato usan las APIs para enviar datos?",
      opciones: ["JSON", "XML", "HTML", "CSV"],
      respuestaCorrecta: 0,
      explicacion: "JSON es el formato más común para el intercambio de datos en APIs modernas."
    },
    {
      id: 12042,
      pregunta: "¿Qué método HTTP obtiene datos de un servidor?",
      opciones: ["GET", "POST", "PUT", "DELETE"],
      respuestaCorrecta: 0,
      explicacion: "El método GET se utiliza para solicitar datos de un servidor."
    },
    {
      id: 12043,
      pregunta: "¿Qué palabra clave espera la resolución de una promesa?",
      opciones: ["await", "next", "return", "pause"],
      respuestaCorrecta: 0,
      explicacion: "await se usa en funciones async para esperar la resolución de una promesa."
    },
    {
      id: 12044,
      pregunta: "¿Qué herramienta permite probar APIs manualmente?",
      opciones: ["Postman", "Figma", "GitHub", "Prettier"],
      respuestaCorrecta: 0,
      explicacion: "Postman es una herramienta popular para probar y documentar APIs."
    },
    {
      id: 12045,
      pregunta: "¿Qué ventaja ofrece axios frente a fetch?",
      opciones: [
        "Es parte del navegador",
        "Manejo automático de JSON y errores.",
        "Requiere menos red",
        "No necesita headers"
      ],
      respuestaCorrecta: 1,
      explicacion: "Axios facilita el manejo de respuestas JSON y errores respecto a fetch."
    },
    {
      id: 12046,
      pregunta: "¿Qué es un servicio en JS?",
      opciones: [
        "Una librería de CSS",
        "Una función de React",
        "Un módulo que gestiona las llamadas a la API",
        "Un evento del DOM"
      ],
      respuestaCorrecta: 2,
      explicacion: "Un servicio en JS suele ser un módulo que centraliza las llamadas a la API."
    },
    {
      id: 12047,
      pregunta: "¿Qué herramienta permite simular una API local?",
      opciones: ["json-server", "Docker", "Node.js", "Redux"],
      respuestaCorrecta: 0,
      explicacion: "json-server permite crear rápidamente una API REST falsa para pruebas locales."
    },
    {
      id: 12048,
      pregunta: "¿Qué ventaja tiene centralizar las llamadas API?",
      opciones: [
        "Reduce el uso de axios",
        "Acelera la conexión a internet",
        "Elimina la necesidad de backend",
        "Facilita mantenimiento y reutilización"
      ],
      respuestaCorrecta: 3,
      explicacion: "Centralizar las llamadas facilita el mantenimiento y la reutilización del código."
    },
    {
      id: 12049,
      pregunta: "¿Qué hook de React se usa para llamadas a API?",
      opciones: ["useRef", "useEffect", "useContext", "useMemo"],
      respuestaCorrecta: 1,
      explicacion: "useEffect permite ejecutar código (como llamadas a API) tras el renderizado."
    },
    {
      id: 12050,
      pregunta: "¿Qué archivo suele contener la URL base de una API?",
      opciones: [".env", "index.html", "package.json", "config.js"],
      respuestaCorrecta: 0,
      explicacion: "El archivo .env suele almacenar variables como la URL base de la API."
    }
  ]
};

export default moduloUnidadCincoServiciosWebIntegracionApis;