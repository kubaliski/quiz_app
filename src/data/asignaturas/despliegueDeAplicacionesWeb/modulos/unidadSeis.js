/**
 * Unidad 6: Automatización, Contenedores y CI/CD
 */
const moduloUnidadSeisAutomatizacionContenedoresCICD = {
  id: 804,
  asignaturaId: 8,
  nombre: "Unidad 6: Automatización, Contenedores y CI/CD",
  titulo: "Automatización, Contenedores y CI/CD",
  descripcion:
    "Docker y Kubernetes, ejecución y definición de imágenes, orquestación básica y pipelines de CI/CD con buenas prácticas.",
  esExamen: false,
  preguntas: [
    {
      id: 8046,
      pregunta: "¿Qué herramienta empaqueta aplicaciones y dependencias?",
      opciones: ["Nginx", "Jenkins", "Apache", "Docker"],
      respuestaCorrecta: 3,
      explicacion:
        "Docker empaqueta aplicaciones junto con sus dependencias en contenedores portables."
    },
    {
      id: 8047,
      pregunta: "¿Qué comando crea un contenedor?",
      opciones: ["build compose", "docker startfile", "docker run", "docker copy"],
      respuestaCorrecta: 2,
      explicacion:
        "'docker run' crea (y normalmente inicia) un contenedor a partir de una imagen."
    },
    {
      id: 8048,
      pregunta: "¿Qué archivo define la configuración de imagen?",
      opciones: ["server.conf", "manifest.json", "Dockerfile", "docker.env"],
      respuestaCorrecta: 2,
      explicacion:
        "El Dockerfile describe cómo construir la imagen: base, copias, comandos y configuración."
    },
    {
      id: 8049,
      pregunta: "¿Qué componente de K8s ejecuta los contenedores?",
      opciones: ["Pod", "Node", "LoadBalancer", "Route"],
      respuestaCorrecta: 0,
      explicacion:
        "Un Pod es la unidad mínima de Kubernetes que agrupa y ejecuta uno o más contenedores."
    },
    {
      id: 8050,
      pregunta: "¿Qué ventaja ofrece Docker Compose?",
      opciones: [
        "Ejecutar varios servicios simultáneamente",
        "Compilar código",
        "Aumentar memoria del contenedor",
        "Cambiar el kernel del host"
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Compose define y levanta múltiples servicios (contenedores) coordinados con un único archivo y comando."
    },
    {
      id: 8051,
      pregunta: "¿Qué significa CI?",
      opciones: [
        "Code Inspection",
        "Continuous Integration",
        "Cloud Implementation",
        "Configuration Installer"
      ],
      respuestaCorrecta: 1,
      explicacion:
        "CI (Integración Continua) integra cambios frecuentemente con builds y tests automatizados."
    },
    {
      id: 8052,
      pregunta: "¿Qué herramienta pertenece a GitHub?",
      opciones: ["GitHub Actions", "Jenkins", "CircleCI", "GitLab Runner"],
      respuestaCorrecta: 0,
      explicacion:
        "GitHub Actions es la plataforma nativa de GitHub para CI/CD basada en flujos de trabajo."
    },
    {
      id: 8053,
      pregunta: "¿Qué archivo define un pipeline en GitHub Actions?",
      opciones: [".env", ".conf", ".bashrc", ".yml"],
      respuestaCorrecta: 3,
      explicacion:
        "Los workflows se describen en archivos YAML bajo .github/workflows/ en el repositorio."
    },
    {
      id: 8054,
      pregunta: "¿Qué ventaja ofrece CI/CD?",
      opciones: [
        "Duplica servidores",
        "Automatiza integración y despliegue",
        "Mejora velocidad del CPU",
        "Cifra logs"
      ],
      respuestaCorrecta: 1,
      explicacion:
        "CI/CD automatiza desde la integración hasta el despliegue, reduciendo tiempos y errores manuales."
    },
    {
      id: 8055,
      pregunta: "¿Qué buena práctica se aplica en CI/CD?",
      opciones: [
        "Usar variables secretas",
        "Subir contraseñas al repositorio",
        "Desactivar logs",
        "Evitar pruebas automáticas"
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Las credenciales deben almacenarse como secretos y no versionarse; además se debe mantener trazabilidad y pruebas."
    }
  ]
};

export default moduloUnidadSeisAutomatizacionContenedoresCICD;
