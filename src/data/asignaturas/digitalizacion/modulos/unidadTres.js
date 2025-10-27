const moduloUnidadTresSistemasConectados = {
  id: 1401,
  asignaturaId: 14,
  nombre: "Unidad 3: Sistemas conectados - Cloud, Edge, Fog y Mist computing",
  titulo: "Sistemas conectados: Cloud, Edge, Fog y Mist",
  descripcion: "Modelos de servicio (IaaS/PaaS/SaaS), nubes pública/privada/híbrida y arquitecturas Edge/Fog/Mist con 5G",
  esExamen: false,
  preguntas: [
    {
      id: 14011,
      pregunta: "Si contratas un servicio como Gmail o Salesforce, estás utilizando un modelo:",
      opciones: ["IaaS", "PaaS", "SaaS", "On-premise"],
      respuestaCorrecta: 2,
      explicacion: "SaaS ofrece la aplicación completa como servicio, sin administrar la infraestructura."
    },
    {
      id: 14012,
      pregunta: "¿Qué gran proveedor de cloud utiliza Netflix para alojar toda su infraestructura de streaming?",
      opciones: ["Google Cloud", "Microsoft Azure", "IBM Cloud", "Amazon Web Services (AWS)"],
      respuestaCorrecta: 3,
      explicacion: "Netflix opera su plataforma global sobre AWS."
    },
    {
      id: 14013,
      pregunta: "Un desarrollador que contrata un entorno en la nube con sistema operativo y base de datos para desplegar su aplicación sin gestionar los servidores físicos, está usando:",
      opciones: ["IaaS", "PaaS", "SaaS", "Su propio ordenador"],
      respuestaCorrecta: 1,
      explicacion: "PaaS provee el runtime/OS/DB gestionados para desplegar sin administrar servidores."
    },
    {
      id: 14014,
      pregunta: "La principal ventaja del Cloud Computing para una startup es:",
      opciones: [
        "La posibilidad de tener servidores físicos en su oficina",
        "La capacidad de empezar con una inversión inicial muy baja y escalar según la demanda",
        "Que es un sistema completamente inseguro",
        "Que obliga a contratar a muchos técnicos de mantenimiento"
      ],
      respuestaCorrecta: 1,
      explicacion: "Pago por uso y elasticidad reducen CAPEX y permiten crecer bajo demanda."
    },
    {
      id: 14015,
      pregunta: "Una nube cuyos recursos son utilizados exclusivamente por una única organización se denomina:",
      opciones: ["Nube pública", "Nube comunitaria", "Nube híbrida", "Nube privada"],
      respuestaCorrecta: 3,
      explicacion: "La nube privada está dedicada a una sola organización (on-premise o alojada)."
    },
    {
      id: 14016,
      pregunta: "¿Cuál es la principal razón para usar Edge Computing en lugar de enviar todos los datos a la nube?",
      opciones: [
        "Es más caro",
        "Para reducir la latencia y permitir respuestas en tiempo real",
        "Para utilizar servidores más lentos",
        "Porque la nube no tiene capacidad de almacenamiento"
      ],
      respuestaCorrecta: 1,
      explicacion: "Procesar cerca de la fuente reduce latencia y ancho de banda, habilitando decisiones instantáneas."
    },
    {
      id: 14017,
      pregunta: "En la arquitectura de computación distribuida, ¿qué capa está más cerca del dispositivo final?",
      opciones: ["Cloud", "Fog", "Edge", "Internet"],
      respuestaCorrecta: 2,
      explicacion: "Edge es el borde de la red, en o muy próximo al dispositivo."
    },
    {
      id: 14018,
      pregunta: "Un coche autónomo que procesa los datos de sus cámaras a bordo para decidir si frena, es un claro ejemplo de:",
      opciones: ["Cloud Computing", "Edge Computing", "Almacenamiento en red", "Redes sociales"],
      respuestaCorrecta: 1,
      explicacion: "Requiere procesamiento local de muy baja latencia para seguridad."
    },
    {
      id: 14019,
      pregunta: "¿Cuál de las siguientes afirmaciones es correcta?",
      opciones: [
        "El Edge Computing y el Cloud Computing son tecnologías complementarias que trabajan juntas",
        "El Edge Computing y el Cloud Computing son tecnologías competidoras y excluyentes",
        "El Edge Computing ha hecho que el Cloud Computing sea obsoleto",
        "El Cloud Computing es siempre más rápido que el Edge Computing"
      ],
      respuestaCorrecta: 0,
      explicacion: "Se complementan: el edge procesa en tiempo real y la nube centraliza analítica/almacenamiento."
    },
    {
      id: 14020,
      pregunta: "¿Qué tecnología de comunicación es un habilitador clave para el Edge y Fog Computing?",
      opciones: ["Bluetooth", "WiFi en casa", "3G", "5G"],
      respuestaCorrecta: 3,
      explicacion: "5G aporta baja latencia, alta capacidad y densidad de dispositivos."
    }
  ]
};

export default moduloUnidadTresSistemasConectados;