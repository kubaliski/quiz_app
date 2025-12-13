const moduloUnidadSeisDistribucionPublicacion = {
  id: 1304,
  asignaturaId: 13,
  nombre: "Unidad 6: Distribución y publicación de aplicaciones/webs",
  titulo: "Distribución y publicación de aplicaciones/webs",
  descripcion:
    "Empaquetado, formatos de distribución, contenedores, comandos Docker y configuración de publicación en proyectos Node.js.",
  esExamen: false,
  preguntas: [
    {
      id: 13041,
      pregunta: "¿Qué objetivo tiene el empaquetado de software?",
      opciones: [
        "Añadir publicidad",
        "Reducir tamaño del código",
        "Facilitar instalación y despliegue",
        "Cambiar la licencia"
      ],
      respuestaCorrecta: 2,
      explicacion:
        "El empaquetado organiza y prepara el software para instalar y desplegar fácilmente."
    },
    {
      id: 13042,
      pregunta: "¿Qué formato se usa en aplicaciones móviles Android?",
      opciones: [".exe", ".apk", ".dmg", ".war"],
      respuestaCorrecta: 1,
      explicacion:
        "Android utiliza paquetes APK para instalar aplicaciones en dispositivos."
    },
    {
      id: 13043,
      pregunta: "¿Qué herramienta permite empaquetar aplicaciones en contenedores?",
      opciones: ["Docker", "VS Code", "Photoshop", "Git"],
      respuestaCorrecta: 0,
      explicacion:
        "Docker crea y gestiona contenedores que empaquetan aplicaciones y sus dependencias."
    },
    {
      id: 13044,
      pregunta: "¿Qué comando crea una imagen de Docker?",
      opciones: ["docker build", "docker init", "docker install", "docker exec"],
      respuestaCorrecta: 0,
      explicacion:
        "El comando 'docker build' construye una imagen a partir de un Dockerfile."
    },
    {
      id: 13045,
      pregunta:
        "¿Qué archivo contiene la configuración del empaquetado en Node.js?",
      opciones: ["settings.xml", "app.js", "index.html", "package.json"],
      respuestaCorrecta: 3,
      explicacion:
        "'package.json' define scripts, dependencias y metadatos usados en el empaquetado."
    },
    {
      id: 13046,
      pregunta: "¿Qué garantiza la firma digital?",
      opciones: [
        "Mayor tamaño de archivo",
        "Mejor rendimiento",
        "Autenticidad e integridad del software",
        "Mayor compatibilidad"
      ],
      respuestaCorrecta: 2,
      explicacion:
        "La firma digital verifica el origen y que el software no fue modificado."
    },
    {
      id: 13047,
      pregunta: "¿Qué licencia obliga a compartir el código modificado?",
      opciones: ["GPL", "MIT", "Apache", "Propietaria"],
      respuestaCorrecta: 0,
      explicacion:
        "GPL exige que las obras derivadas se distribuyan bajo los mismos términos (copyleft)."
    },
    {
      id: 13048,
      pregunta:
        "¿Qué herramienta se usa para generar certificados en Java?",
      opciones: ["git", "npm", "curl", "keytool"],
      respuestaCorrecta: 3,
      explicacion:
        "'keytool' gestiona claves y certificados en el ecosistema Java."
    },
    {
      id: 13049,
      pregunta: "¿Qué archivo define la licencia de un proyecto?",
      opciones: ["LICENSE.txt", "index.html", "settings.ini", "config.json"],
      respuestaCorrecta: 0,
      explicacion:
        "El archivo de licencia (p. ej., LICENSE.txt) especifica los términos legales de uso."
    },
    {
      id: 13050,
      pregunta:
        "¿Qué ventaja tiene la publicación con firma digital?",
      opciones: [
        "Elimina errores de código",
        "Aumenta el peso del programa",
        "Evita advertencias de seguridad",
        "Modifica la interfaz"
      ],
      respuestaCorrecta: 2,
      explicacion:
        "La firma reduce advertencias y bloqueos al validar el editor/origen del software."
    }
  ]
};

export default moduloUnidadSeisDistribucionPublicacion;
