const moduloUnidadTresSeguridadAWS = {
  id: 1002,
  asignaturaId: 10,
  nombre: "Unidad 3: Seguridad en AWS",
  titulo: "Seguridad en AWS",
  descripcion: "Modelo de responsabilidad compartida, IAM, MFA, secretos y auditoría",
  esExamen: false,
  preguntas: [
    {
      id: 10021,
      pregunta: "¿Qué protege AWS en el modelo de responsabilidad compartida?",
      opciones: [
        "Contraseñas de los usuarios",
        "Aplicaciones desplegadas",
        "Infraestructura física y red",
        "Políticas de acceso"
      ],
      respuestaCorrecta: 2,
      explicacion: "AWS asegura centros de datos, hardware y red; el cliente configura seguridad en la nube (datos, identidades, permisos)."
    },
    {
      id: 10022,
      pregunta: "¿De quién depende el cifrado de datos en reposo?",
      opciones: ["Solo de AWS", "Del cliente", "De ambos", "No es necesario"],
      respuestaCorrecta: 1,
      explicacion: "El cliente habilita el cifrado y gestiona claves (p. ej., con KMS) en los servicios que utiliza."
    },
    {
      id: 10023,
      pregunta: "¿Qué herramienta ayuda a revisar buenas prácticas de seguridad en AWS?",
      opciones: ["S3", "Route 53", "CloudFront", "Trusted Advisor"],
      respuestaCorrecta: 3,
      explicacion: "Trusted Advisor ofrece checks de seguridad, coste, rendimiento y tolerancia a fallos."
    },
    {
      id: 10024,
      pregunta: "Si un usuario deja un bucket S3 público, ¿de quién es la responsabilidad?",
      opciones: ["De AWS", "Del cliente", "Del proveedor de Internet", "De nadie"],
      respuestaCorrecta: 1,
      explicacion: "La configuración de acceso a S3 es responsabilidad del cliente (seguridad en la nube)."
    },
    {
      id: 10025,
      pregunta: "¿Qué garantiza AWS siempre?",
      opciones: [
        "Cifrado de todos los datos",
        "Configuración de permisos IAM",
        "Creación de contraseñas seguras",
        "Seguridad física de centros de datos"
      ],
      respuestaCorrecta: 3,
      explicacion: "La seguridad física y de infraestructura es parte de las responsabilidades de AWS."
    },
    {
      id: 10026,
      pregunta: "¿Qué es un grupo en IAM?",
      opciones: [
        "Un conjunto de usuarios con permisos comunes",
        "Una contraseña compartida",
        "Una aplicación externa",
        "Un acceso temporal"
      ],
      respuestaCorrecta: 0,
      explicacion: "Los grupos agregan usuarios para asignar políticas de forma consistente."
    },
    {
      id: 10027,
      pregunta: "¿Qué formato tienen las políticas en IAM?",
      opciones: ["XML", "YAML", "JSON", "CSV"],
      respuestaCorrecta: 2,
      explicacion: "Las políticas IAM son documentos JSON con acciones, recursos y condiciones."
    },
    {
      id: 10028,
      pregunta: "¿Para qué se usan los roles en IAM?",
      opciones: [
        "Para eliminar usuarios",
        "Para crear cuentas nuevas",
        "Para cifrar datos",
        "Para accesos temporales a servicios"
      ],
      respuestaCorrecta: 3,
      explicacion: "Los roles otorgan credenciales temporales vía STS a usuarios/servicios sin claves permanentes."
    },
    {
      id: 10029,
      pregunta: "¿Cuál es la mejor práctica en IAM?",
      opciones: ["Privilegio mínimo", "Dar permisos administrativos a todos", "Desactivar roles", "No usar grupos"],
      respuestaCorrecta: 0,
      explicacion: "Conceder solo los permisos estrictamente necesarios reduce la superficie de riesgo."
    },
    {
      id: 10030,
      pregunta: "¿Qué gestiona IAM principalmente?",
      opciones: ["Facturación", "Almacenamiento", "Regiones y zonas", "Identidades y accesos"],
      respuestaCorrecta: 3,
      explicacion: "IAM gestiona usuarios, grupos, roles y políticas de autorización."
    },
    {
      id: 10031,
      pregunta: "¿Qué significa MFA?",
      opciones: [
        "Multiple File Access",
        "Multi-Factor Authentication",
        "Managed Function Account",
        "Multi-Format Agreement"
      ],
      respuestaCorrecta: 1,
      explicacion: "Autenticación de múltiples factores: algo que sabes + algo que tienes/eres."
    },
    {
      id: 10032,
      pregunta: "¿Qué herramienta de AWS guarda secretos de forma segura?",
      opciones: ["S3", "CloudFront", "Secrets Manager", "Route 53"],
      respuestaCorrecta: 2,
      explicacion: "Secrets Manager almacena y rota credenciales y secretos de forma segura."
    },
    {
      id: 10033,
      pregunta: "¿Por qué se recomienda usar credenciales temporales?",
      opciones: ["Son más rápidas", "Son más baratas", "Reducen el riesgo si se filtran", "No necesitan permisos"],
      respuestaCorrecta: 2,
      explicacion: "Expiran automáticamente y limitan el impacto ante una posible filtración."
    },
    {
      id: 10034,
      pregunta: "¿Qué usuario debe tener MFA siempre activado?",
      opciones: ["La cuenta", "Los desarrolladores", "Los testers", "Nadie"],
      respuestaCorrecta: 0,
      explicacion: "El usuario root de la cuenta debe tener MFA obligatorio por su alto nivel de privilegios."
    },
    {
      id: 10035,
      pregunta: "¿Qué servicio registra quién accedió a qué en AWS?",
      opciones: ["EC2", "Route 53", "CloudTrail", "IAM Groups"],
      respuestaCorrecta: 2,
      explicacion: "CloudTrail audita llamadas a la API y actividad de la cuenta para trazabilidad."
    }
  ]
};

export default moduloUnidadTresSeguridadAWS;