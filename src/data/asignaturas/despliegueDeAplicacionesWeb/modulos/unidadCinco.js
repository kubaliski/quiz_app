/**
 * Unidad 5: Servidores y aplicaciones de despliegue
 */
const moduloUnidadCincoServidoresDespliegue = {
  id: 803,
  asignaturaId: 8,
  nombre: "Unidad 5: Servidores y aplicaciones de despliegue",
  titulo: "Servidores y aplicaciones de despliegue",
  descripcion: "Conceptos de servidores de aplicaciones, Node.js, despliegue automatizado, entornos y técnicas modernas.",
  esExamen: false,
  preguntas: [
    {
      id: 8036,
      pregunta: "¿Qué servidor ejecuta servlets y JSP?",
      opciones: ["Node.js", "Apache", "Nginx", "Tomcat"],
      respuestaCorrecta: 3,
      explicacion: "Tomcat es un servidor de aplicaciones Java especializado en ejecutar servlets y JSP."
    },
    {
      id: 8037,
      pregunta: "¿Qué lenguaje usa Node.js?",
      opciones: ["PHP", "Java", "JavaScript", "Python"],
      respuestaCorrecta: 2,
      explicacion: "Node.js ejecuta código JavaScript en el servidor."
    },
    {
      id: 8038,
      pregunta: "¿Qué herramienta gestiona procesos Node?",
      opciones: ["Git", "PM2", "Docker", "Jenkins"],
      respuestaCorrecta: 1,
      explicacion: "PM2 es un gestor de procesos para aplicaciones Node.js."
    },
    {
      id: 8039,
      pregunta: "¿Qué rol cumple Express?",
      opciones: [
        "Framework web para Node.js",
        "Servidor HTTP estático",
        "Editor de código",
        "Motor de base de datos"
      ],
      respuestaCorrecta: 0,
      explicacion: "Express es un framework web minimalista para Node.js."
    },
    {
      id: 8040,
      pregunta: "¿Por qué se usa Nginx junto a Node.js?",
      opciones: [
        "Para almacenar logs",
        "Para compilar Java",
        "Para ejecutar PHP",
        "Como proxy inverso y balanceador"
      ],
      respuestaCorrecta: 3,
      explicacion: "Nginx suele usarse como proxy inverso y balanceador de carga frente a Node.js."
    },
    {
      id: 8041,
      pregunta: "¿Qué entorno simula producción para pruebas?",
      opciones: ["Dev", "Staging", "Localhost", "Sandbox"],
      respuestaCorrecta: 1,
      explicacion: "El entorno 'staging' replica producción para pruebas previas al despliegue."
    },
    {
      id: 8042,
      pregunta: "¿Qué es Blue/Green Deployment?",
      opciones: [
        "Copia manual de archivos",
        "Despliegue por FTP",
        "Dos entornos alternos para actualizaciones sin caída",
        "Prueba de rendimiento"
      ],
      respuestaCorrecta: 2,
      explicacion: "Blue/Green Deployment usa dos entornos para actualizar sin afectar a los usuarios."
    },
    {
      id: 8043,
      pregunta: "¿Qué herramienta permite automatizar despliegues?",
      opciones: ["Jenkins", "WordPress", "MySQL", "Apache"],
      respuestaCorrecta: 0,
      explicacion: "Jenkins es una herramienta de integración y despliegue continuo."
    },
    {
      id: 8044,
      pregunta: "¿Qué son variables de entorno?",
      opciones: [
        "Servicios externos",
        "Logs del sistema",
        "Puertos físicos",
        "Configuraciones que cambian entre entornos"
      ],
      respuestaCorrecta: 3,
      explicacion: "Las variables de entorno permiten configurar parámetros según el entorno."
    },
    {
      id: 8045,
      pregunta: "¿Qué técnica lanza el cambio solo a un grupo de usuarios?",
      opciones: [
        "Canary Release",
        "Full Deploy",
        "Manual Update",
        "Delta Patch"
      ],
      respuestaCorrecta: 0,
      explicacion: "Canary Release despliega la nueva versión solo a un subconjunto de usuarios para pruebas controladas."
    }
  ]
};

export default moduloUnidadCincoServidoresDespliegue;