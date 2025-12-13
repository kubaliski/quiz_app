const moduloUnidadSeisXmlSeguridadDespliegue = {
  id: 1206,
  asignaturaId: 12,
  nombre: "Unidad 6: XML, Seguridad y Despliegue",
  titulo: "XML, Seguridad y Despliegue",
  descripcion:
    "Trabajo con XML y JSON, seguridad en aplicaciones cliente (XSS, HTTPS, CORS) y despliegue/CI-CD de aplicaciones React.",
  esExamen: false,
  preguntas: [
    {
      id: 12081,
      pregunta: "¿Qué función convierte texto XML en DOM?",
      opciones: ["XMLReader()", "JSON.parse()", "DOMParser()", "loadXML()"],
      respuestaCorrecta: 2,
      explicacion:
        "DOMParser permite transformar un string XML en un documento DOM navegable en el navegador."
    },
    {
      id: 12082,
      pregunta: "¿Qué método obtiene archivos XML desde un servidor?",
      opciones: ["getXML()", "fetch()", "requestXML()", "xml.fetch()"],
      respuestaCorrecta: 1,
      explicacion:
        "fetch() realiza peticiones HTTP y puede recuperar archivos XML, que luego se procesan (p. ej., con DOMParser)."
    },
    {
      id: 12083,
      pregunta: "¿Cuál es una ventaja del XML sobre JSON?",
      opciones: [
        "Soporte de validación mediante DTD/XSD",
        "Menor peso",
        "requestXML()",
        "xml.fetch()"
      ],
      respuestaCorrecta: 0,
      explicacion:
        "XML permite validar su estructura con DTD/XSD, útil para contratos y esquemas estrictos."
    },
    {
      id: 12084,
      pregunta: "¿Qué formato es más eficiente para APIs modernas?",
      opciones: ["JSON", "XML", "CSV", "SOAP"],
      respuestaCorrecta: 0,
      explicacion:
        "JSON suele ser más ligero y eficiente para APIs modernas en la web."
    },
    {
      id: 12085,
      pregunta: "¿Qué librería convierte XML a JSON?",
      opciones: ["xml2js", "Axios", "ESLint", "Babel"],
      respuestaCorrecta: 0,
      explicacion:
        "xml2js permite parsear XML y convertirlo a objetos JavaScript/JSON de forma sencilla."
    },
    {
      id: 12086,
      pregunta:
        "¿Qué tipo de ataque permite insertar código en una web?",
      opciones: ["DDoS", "XSS", "SQL Injection", "Brute Force"],
      respuestaCorrecta: 1,
      explicacion:
        "El XSS inserta scripts maliciosos en páginas, afectando a los usuarios que las visitan."
    },
    {
      id: 12087,
      pregunta: "¿Qué herramienta limpia código HTML peligroso?",
      opciones: ["Formik", "Axios", "DOMPurify", "Redux"],
      respuestaCorrecta: 2,
      explicacion:
        "DOMPurify sanitiza HTML para eliminar contenido potencialmente peligroso (XSS)."
    },
    {
      id: 12088,
      pregunta: "¿Dónde NO se deben guardar contraseñas?",
      opciones: [
        "Base de datos cifrada",
        "Cookies seguras",
        "Servidor",
        "localStorage"
      ],
      respuestaCorrecta: 3,
      explicacion:
        "localStorage es accesible desde el navegador y vulnerable; nunca debe almacenar contraseñas."
    },
    {
      id: 12089,
      pregunta: "¿Qué protocolo garantiza el cifrado en el navegador?",
      opciones: ["SSH", "FTP", "HTTPS", "HTTP"],
      respuestaCorrecta: 2,
      explicacion:
        "HTTPS cifra la comunicación HTTP usando TLS, protegiendo datos en tránsito."
    },
    {
      id: 12090,
      pregunta: "¿Qué cabecera controla el acceso entre dominios?",
      opciones: ["CORS", "Cache-Control", "X-Frame-Options", "Content-Type"],
      respuestaCorrecta: 0,
      explicacion:
        "Las políticas y cabeceras CORS determinan qué orígenes pueden acceder a recursos del servidor."
    },
    {
      id: 12091,
      pregunta: "¿Qué comando genera el build de una app React?",
      opciones: ["npm deploy", "npm start", "npm install", "npm run build"],
      respuestaCorrecta: 3,
      explicacion:
        "'npm run build' crea una versión optimizada de producción de la app React."
    },
    {
      id: 12092,
      pregunta: "¿Qué servicio despliega React con un clic?",
      opciones: ["MongoDB", "Docker", "Babel", "Vercel"],
      respuestaCorrecta: 3,
      explicacion:
        "Vercel ofrece despliegue sencillo y automatizado para proyectos frontend (React, Next.js, etc.)."
    },
    {
      id: 12093,
      pregunta: "¿Qué archivo contiene variables de entorno?",
      opciones: [".env", "config.json", "package-lock.json", "readme.md"],
      respuestaCorrecta: 0,
      explicacion:
        "El archivo .env almacena variables de entorno que se inyectan en el build o runtime."
    },
    {
      id: 12094,
      pregunta: "¿Qué herramienta automatiza CI/CD en GitHub?",
      opciones: ["Prettier", "GitHub Actions", "Axios", "Netlify"],
      respuestaCorrecta: 1,
      explicacion:
        "GitHub Actions ejecuta flujos de CI/CD basados en eventos del repositorio (push, PR, tags)."
    },
    {
      id: 12095,
      pregunta:
        "¿Qué ventaja ofrece el despliegue automático?",
      opciones: [
        "Elimina la necesidad de pruebas",
        "Aumenta el tamaño del build",
        "Reduce errores manuales y mantiene versiones actualizadas",
        "Duplica el código"
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Automatizar el despliegue disminuye errores humanos y asegura versiones consistentes y actualizadas."
    }
  ]
};

export default moduloUnidadSeisXmlSeguridadDespliegue;
