const moduloUnidadUnoCloudComputing = {
  id: 1000,
  asignaturaId: 10,
  nombre: "Unidad 1: Conceptos básicos de la Nube",
  titulo: "Cloud Computing - Conceptos básicos",
  descripcion: "Pago por uso, ventajas, modelos de servicio (IaaS/PaaS/SaaS) y casos",
  esExamen: false,
  preguntas: [
    {
      id: 10001,
      pregunta: "¿Qué significa “pago por uso” en la nube?",
      opciones: [
        "Que se paga solo lo que se consume",
        "Que se paga una cuota fija mensual",
        "Que se paga únicamente por almacenamiento",
        "Que el servicio es gratuito hasta cierto límite"
      ],
      respuestaCorrecta: 0,
      explicacion: "El coste se ajusta al consumo real de recursos (compute, storage, red)."
    },
    {
      id: 10002,
      pregunta: "¿Cuál es una ventaja clave de la nube frente a sistemas propios?",
      opciones: [
        "Mayor control físico",
        "Escalabilidad rápida",
        "Menos dependencia de internet",
        "Necesidad de menos seguridad"
      ],
      respuestaCorrecta: 1,
      explicacion: "Permite aumentar o reducir capacidad bajo demanda en minutos."
    },
    {
      id: 10003,
      pregunta: "¿Qué ejemplo explica mejor la diferencia entre nube y on-premise?",
      opciones: [
        "Pendrive frente a disco duro externo",
        "Netflix/Spotify frente a DVDs/CDs",
        "Instagram frente a Facebook",
        "PC de sobremesa frente a portátil"
      ],
      respuestaCorrecta: 1,
      explicacion: "De comprar soportes físicos a consumir como servicio vía Internet."
    },
    {
      id: 10004,
      pregunta: "¿Por qué Instagram migró a la nube en sus primeros años?",
      opciones: [
        "Para evitar pagar licencias",
        "Para no depender de conexiones a internet",
        "Para reducir el uso de memoria en móviles",
        "Para poder escalar a millones de usuarios"
      ],
      respuestaCorrecta: 3,
      explicacion: "Necesitaban escalar rápidamente ante picos de crecimiento global."
    },
    {
      id: 10005,
      pregunta: "¿Cuál es un ejemplo de IaaS?",
      opciones: ["Netflix", "Gmail", "AWS EC2", "Shopify"],
      respuestaCorrecta: 2,
      explicacion: "IaaS ofrece infraestructura virtual (VMs, red, almacenamiento). EC2 = cómputo elástico."
    },
    {
      id: 10006,
      pregunta: "¿Qué caracteriza a PaaS?",
      opciones: [
        "Ofrece solo almacenamiento",
        "Brinda entornos de desarrollo listos",
        "Es un software cerrado al usuario final",
        "Requiere comprar hardware propio"
      ],
      respuestaCorrecta: 1,
      explicacion: "PaaS abstrae la infraestructura y facilita desplegar apps con runtimes gestionados."
    },
    {
      id: 10007,
      pregunta: "¿Cuál de los siguientes es SaaS?",
      opciones: ["Heroku", "Office 365", "AWS EC2", "Vercel"],
      respuestaCorrecta: 1,
      explicacion: "SaaS entrega la aplicación completa como servicio (correo, ofimática, CRM…)."
    },
    {
      id: 10008,
      pregunta: "¿Qué ventaja tiene SaaS frente a IaaS?",
      opciones: [
        "Permite programar a bajo nivel",
        "Ofrece infraestructura sin configuración",
        "No requiere instalación ni mantenimiento",
        "Es más barato siempre"
      ],
      respuestaCorrecta: 2,
      explicacion: "El proveedor gestiona actualizaciones, seguridad y operación de la app."
    }
  ]
};

export default moduloUnidadUnoCloudComputing;