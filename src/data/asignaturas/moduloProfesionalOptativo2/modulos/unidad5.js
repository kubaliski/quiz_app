const moduloUnidadCincoServiciosDeComputo = {
  id: 1004,
  asignaturaId: 10,
  nombre: "Unidad 5: Servicios de cómputo",
  titulo: "Servicios de cómputo",
  descripcion: "EC2, escalado, Auto Scaling, instancias, monitorización, contenedores, Docker, ECS, EKS, Lambda y serverless.",
  esExamen: false,
  preguntas: [
    {
      id: 10046,
      pregunta: "¿Qué servicio permite crear servidores virtuales en AWS?",
      opciones: ["EC2", "S3", "Lambda", "DynamoDB"],
      respuestaCorrecta: 0,
      explicacion: "EC2 (Elastic Compute Cloud) permite lanzar y gestionar servidores virtuales en AWS."
    },
    {
      id: 10047,
      pregunta: "¿Qué tipo de escalado consiste en aumentar el tamaño de una instancia?",
      opciones: [
        "Escalado horizontal",
        "Escalado automático",
        "Escalado manual",
        "Escalado vertical"
      ],
      respuestaCorrecta: 3,
      explicacion: "El escalado vertical aumenta los recursos (CPU, RAM) de una instancia existente."
    },
    {
      id: 10048,
      pregunta: "¿Qué ventaja tiene usar Auto Scaling en EC2?",
      opciones: [
        "Aumenta el coste fijo",
        "Ajusta los recursos según la demanda",
        "Desactiva el balanceador de carga",
        "Duplica los servidores manualmente"
      ],
      respuestaCorrecta: 1,
      explicacion: "Auto Scaling ajusta automáticamente la cantidad de instancias EC2 según la demanda."
    },
    {
      id: 10049,
      pregunta: "¿Qué tipo de instancia usarías para pruebas o bajo tráfico?",
      opciones: ["m5.xlarge", "p4d.24xlarge", "t2.large", "t2.micro"],
      respuestaCorrecta: 3,
      explicacion: "t2.micro es una instancia pequeña y económica, ideal para pruebas o bajo tráfico."
    },
    {
      id: 10050,
      pregunta: "¿Qué herramienta te ayuda a monitorear el rendimiento de EC2?",
      opciones: ["S3 Explorer", "Route 53", "CloudWatch", "Lambda Console"],
      respuestaCorrecta: 2,
      explicacion: "CloudWatch monitoriza métricas y logs de instancias EC2 y otros recursos AWS."
    },
    {
      id: 10051,
      pregunta: "¿Qué herramienta crea y ejecuta contenedores?",
      opciones: ["CloudFront", "Docker", "EC2", "Lambda"],
      respuestaCorrecta: 1,
      explicacion: "Docker permite crear, ejecutar y gestionar contenedores de aplicaciones."
    },
    {
      id: 10052,
      pregunta: "¿Qué servicio de AWS orquesta contenedores Docker?",
      opciones: ["ECS", "Route 53", "CloudWatch", "S3"],
      respuestaCorrecta: 0,
      explicacion: "ECS (Elastic Container Service) orquesta y gestiona contenedores Docker en AWS."
    },
    {
      id: 10053,
      pregunta: "¿Qué ventaja principal tienen los contenedores?",
      opciones: [
        "Son más lentos que las VMs",
        "Mayor consumo de recursos",
        "Portabilidad y consistencia",
        "Requieren hardware físico"
      ],
      respuestaCorrecta: 2,
      explicacion: "Los contenedores son portables y consistentes, facilitando despliegues en distintos entornos."
    },
    {
      id: 10054,
      pregunta: "¿Qué servicio usa Kubernetes en AWS?",
      opciones: ["Lambda", "CloudTrail", "ECS", "EKS"],
      respuestaCorrecta: 3,
      explicacion: "EKS (Elastic Kubernetes Service) es el servicio gestionado de Kubernetes en AWS."
    },
    {
      id: 10055,
      pregunta: "¿Qué almacena Docker Hub?",
      opciones: [
        "Logs de AWS",
        "Imágenes de contenedores",
        "Bases de datos",
        "Instancias EC2"
      ],
      respuestaCorrecta: 1,
      explicacion: "Docker Hub almacena y distribuye imágenes de contenedores Docker."
    },
    {
      id: 10056,
      pregunta: "¿Qué hace AWS Lambda?",
      opciones: [
        "Ejecuta código sin servidores",
        "Almacena objetos",
        "Gestiona bases de datos",
        "Proporciona instancias virtuales"
      ],
      respuestaCorrecta: 0,
      explicacion: "Lambda ejecuta funciones de código bajo demanda sin necesidad de gestionar servidores."
    },
    {
      id: 10057,
      pregunta: "¿Cuándo se cobra en Lambda?",
      opciones: [
        "Por mes",
        "Por servidor activo",
        "Por ejecución y tiempo de cómputo",
        "Por almacenamiento"
      ],
      respuestaCorrecta: 2,
      explicacion: "Lambda cobra solo por el número de ejecuciones y el tiempo de cómputo utilizado."
    },
    {
      id: 10058,
      pregunta: "¿Qué servicio se usa para exponer funciones Lambda como APIs?",
      opciones: ["DynamoDB", "API Gateway", "S3", "CloudTrail"],
      respuestaCorrecta: 1,
      explicacion: "API Gateway permite exponer funciones Lambda como endpoints HTTP/REST."
    },
    {
      id: 10059,
      pregunta: "¿Qué ventaja principal ofrece serverless?",
      opciones: [
        "Control total del hardware",
        "Costes fijos altos",
        "Lento tiempo de despliegue",
        "Escalado automático y sin mantenimiento"
      ],
      respuestaCorrecta: 3,
      explicacion: "Serverless permite escalar automáticamente y elimina la gestión de servidores."
    },
    {
      id: 10060,
      pregunta: "¿Qué herramienta permite depurar funciones Lambda?",
      opciones: ["ECS", "Route 53", "Aurora", "CloudWatch Logs"],
      respuestaCorrecta: 3,
      explicacion: "CloudWatch Logs almacena y permite consultar los logs de ejecución de Lambda."
    }
  ]
};

export default moduloUnidadCincoServiciosDeComputo;