const moduloUnidadDosInfraestructuraGlobal = {
  id: 1001,
  asignaturaId: 10,
  nombre: "Unidad 2: Infraestructura Global en la nube",
  titulo: "Infraestructura Global en la nube",
  descripcion: "Regiones, zonas de disponibilidad, edge locations, disponibilidad y servicios por categorías",
  esExamen: false,
  preguntas: [
    {
      id: 10011,
      pregunta: "¿Qué es una región en la nube?",
      opciones: [
        "Un servidor físico en una ciudad",
        "Una red privada virtual",
        "Un área geográfica con varias zonas de disponibilidad",
        "Un sistema de backup automático"
      ],
      respuestaCorrecta: 2,
      explicacion: "Una región agrupa varias Zonas de Disponibilidad (AZ) físicamente separadas dentro de un área geográfica."
    },
    {
      id: 10012,
      pregunta: "¿Qué función cumplen las zonas de disponibilidad?",
      opciones: [
        "Almacenar copias de seguridad locales",
        "Ofrecer redundancia dentro de una región",
        "Servir contenido cacheado en ciudades",
        "Reducir el precio del servicio"
      ],
      respuestaCorrecta: 1,
      explicacion: "Las AZ proporcionan tolerancia a fallos dentro de la misma región al estar aisladas entre sí."
    },
    {
      id: 10013,
      pregunta: "¿Qué es un edge location?",
      opciones: [
        "Un tipo de máquina virtual",
        "Una región secundaria de respaldo",
        "Un punto de entrega cercano al usuario final",
        "Una base de datos distribuida"
      ],
      respuestaCorrecta: 2,
      explicacion: "Es un PoP de red para entregar contenido cerca del usuario (CDN), reduciendo la latencia."
    },
    {
      id: 10014,
      pregunta: "¿Qué significa 99,9999 % de disponibilidad?",
      opciones: [
        "Que el sistema no puede fallar nunca",
        "Que puede fallar solo en caso de desastre natural",
        "Que solo permite 31 segundos de caída al año",
        "Que el servicio funciona el 90 % del tiempo"
      ],
      respuestaCorrecta: 2,
      explicacion: "Seis nueves equivalen a ≈31,5 segundos de indisponibilidad anual."
    },
    {
      id: 10015,
      pregunta: "¿Por qué Spotify usa varias AZs en Europa?",
      opciones: [
        "Para reducir costes",
        "Para mejorar la interfaz de usuario",
        "Para asegurar continuidad del servicio",
        "Para evitar pagar licencias"
      ],
      respuestaCorrecta: 2,
      explicacion: "Multi-AZ mejora la alta disponibilidad y la resiliencia ante fallos de un datacenter."
    },
    {
      id: 10016,
      pregunta: "¿Qué categoría incluye máquinas virtuales y serverless?",
      opciones: ["Red", "Cómputo", "Almacenamiento", "Seguridad"],
      respuestaCorrecta: 1,
      explicacion: "Cómputo abarca VMs (p. ej., EC2) y funciones serverless (p. ej., Lambda)."
    },
    {
      id: 10017,
      pregunta: "¿Cuál es un ejemplo de servicio de almacenamiento en la nube?",
      opciones: ["Amazon S3", "AWS IAM", "AWS Lambda", "Amazon Route 53"],
      respuestaCorrecta: 0,
      explicacion: "Amazon S3 es almacenamiento de objetos altamente duradero y escalable."
    },
    {
      id: 10018,
      pregunta: "¿Qué categoría se encarga de gestionar la conectividad y distribución de datos?",
      opciones: ["Bases de datos", "IA", "Red", "Cómputo"],
      respuestaCorrecta: 2,
      explicacion: "La categoría de Red incluye DNS, balanceo, CDN y conectividad (p. ej., Route 53, CloudFront)."
    },
    {
      id: 10019,
      pregunta: "¿Cuál de los siguientes pertenece a servicios de seguridad en la nube?",
      opciones: ["AWS IAM", "Amazon S3", "EC2", "Google BigQuery"],
      respuestaCorrecta: 0,
      explicacion: "IAM gestiona identidades, permisos y políticas de acceso."
    },
    {
      id: 10020,
      pregunta: "¿Qué usa TikTok para personalizar su feed de vídeos?",
      opciones: [
        "Un sistema de almacenamiento en la nube",
        "Un algoritmo de inteligencia artificial",
        "Un servidor de bases de datos relacionales",
        "Un sistema de backups automáticos"
      ],
      respuestaCorrecta: 1,
      explicacion: "Modelos de IA/ML analizan comportamiento para recomendar contenido."
    }
  ]
};

export default moduloUnidadDosInfraestructuraGlobal;