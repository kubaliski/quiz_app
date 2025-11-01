const moduloUnidadCincoValorDelDato = {
  id: 1403,
  asignaturaId: 14,
  nombre: "Unidad 5: El valor del dato – Gestión, análisis y ciberseguridad",
  titulo: "El valor del dato – Gestión, análisis y ciberseguridad",
  descripcion: "Dato vs información, ciclo de vida del dato, Data Lake vs Data Warehouse y fundamentos de ciberseguridad (phishing, 2FA, backups, RGPD)",
  esExamen: false,
  preguntas: [
    {
      id: 14036,
      pregunta: "La cifra '25' en una base de datos es un ejemplo de:",
      opciones: ["Información", "Conocimiento", "Dato", "Algoritmo"],
      respuestaCorrecta: 2,
      explicacion: "Es un valor en bruto sin contexto; por sí solo es un dato."
    },
    {
      id: 14037,
      pregunta: "La fase del ciclo de vida del dato donde se utilizan algoritmos para encontrar patrones se llama:",
      opciones: ["Captura", "Almacenamiento", "Procesamiento y Análisis", "Destrucción"],
      respuestaCorrecta: 2,
      explicacion: "El procesamiento y análisis aplica técnicas para descubrir patrones y extraer valor."
    },
    {
      id: 14038,
      pregunta: "La disciplina que combina estadística, informática y conocimiento de negocio para extraer valor de los datos se conoce como:",
      opciones: ["Ciencia de Datos", "Marketing Digital", "Recursos Humanos", "Ciberseguridad"],
      respuestaCorrecta: 0,
      explicacion: "Integra métodos cuantitativos y de ingeniería con contexto de negocio."
    },
    {
      id: 14039,
      pregunta: "En el caso del Ayuntamiento de Barcelona, ¿cuál fue el 'dato' principal que capturaban?",
      opciones: [
        "El color de los contenedores",
        "El nivel de llenado de los contenedores a través de sensores",
        "La marca de los camiones de basura",
        "La opinión de los ciudadanos sobre la limpieza"
      ],
      respuestaCorrecta: 1,
      explicacion: "Sensores midieron el llenado para optimizar rutas de recogida."
    },
    {
      id: 14040,
      pregunta: "¿Cuál de las siguientes afirmaciones es correcta?",
      opciones: [
        "La información es un conjunto de datos en bruto sin procesar",
        "Un dato es un conjunto de información con contexto",
        "La información se obtiene al procesar y dar contexto a los datos",
        "Dato e información son exactamente lo mismo"
      ],
      respuestaCorrecta: 2,
      explicacion: "Al procesar y contextualizar datos se genera información con significado."
    },
    {
      id: 14041,
      pregunta: "Un repositorio que almacena grandes cantidades de datos en su formato nativo y en bruto, tanto estructurados como no estructurados, se llama:",
      opciones: ["Data Warehouse", "Base de Datos Relacional", "Data Lake", "Hoja de cálculo"],
      respuestaCorrecta: 2,
      explicacion: "Un Data Lake conserva los datos en crudo para usos flexibles."
    },
    {
      id: 14042,
      pregunta: "¿Para qué tipo de tarea se utiliza principalmente un Data Warehouse?",
      opciones: [
        "Para entrenar modelos de Machine Learning complejos",
        "Para generar informes de negocio y análisis de Business Intelligence",
        "Para almacenar vídeos y archivos de audio",
        "Para la navegación web"
      ],
      respuestaCorrecta: 1,
      explicacion: "Consolida y modela datos para reporting y BI."
    },
    {
      id: 14043,
      pregunta: "La principal diferencia entre un Data Lake y un Data Warehouse es:",
      opciones: [
        "El Data Lake solo almacena números y el Data Warehouse solo almacena texto",
        "El Data Warehouse almacena datos procesados con un esquema fijo, mientras que el Data Lake almacena datos en bruto con un esquema flexible",
        "El Data Lake es siempre más pequeño que el Data Warehouse",
        "El Data Warehouse está obsoleto y ya no se utiliza"
      ],
      respuestaCorrecta: 1,
      explicacion: "DW: schema-on-write estructurado; DL: datos crudos y flexibles."
    },
    {
      id: 14044,
      pregunta: "¿Qué arquitectura de almacenamiento sería más adecuada para un científico de datos que necesita explorar datos crudos de sensores para descubrir nuevos patrones?",
      opciones: ["Un Data Warehouse", "Un sistema de archivos local", "Una base de datos de facturación", "Un Data Lake"],
      respuestaCorrecta: 3,
      explicacion: "El Data Lake facilita exploración sobre datos no estructurados/crudos."
    },
    {
      id: 14045,
      pregunta: "La expresión \"Schema-on-read\" se asocia con:",
      opciones: [
        "Los Data Lakes, porque los datos en bruto se estructuran solo en el momento del análisis",
        "Los Data Warehouses, porque los datos se estructuran al leerlos",
        "Todas las bases de datos por igual",
        "Las hojas de cálculo de Excel"
      ],
      respuestaCorrecta: 0,
      explicacion: "En DL el esquema se aplica cuando se consulta, no al ingerir."
    },
    {
      id: 14046,
      pregunta: "Un email que se hace pasar por tu banco para que introduzcas tu contraseña en una web falsa es un ejemplo de:",
      opciones: ["Phishing", "Ransomware", "Firewall", "Data Lake"],
      respuestaCorrecta: 0,
      explicacion: "Es ingeniería social para robar credenciales mediante suplantación."
    },
    {
      id: 14047,
      pregunta: "El reglamento europeo que regula la protección de los datos personales se llama:",
      opciones: ["LOPD", "RGPD", "ISO 27001", "HTTP"],
      respuestaCorrecta: 1,
      explicacion: "RGPD (GDPR) establece obligaciones y derechos sobre datos personales."
    },
    {
      id: 14048,
      pregunta: "¿Cuál de las siguientes es una medida de protección fundamental contra el ransomware?",
      opciones: [
        "No usar antivirus",
        "Hacer clic en todos los enlaces de los emails",
        "Tener copias de seguridad (backups) actualizadas y aisladas",
        "No actualizar nunca el sistema operativo"
      ],
      respuestaCorrecta: 2,
      explicacion: "Backups offline/aisladas permiten recuperar datos tras un cifrado malicioso."
    },
    {
      id: 14049,
      pregunta: "La técnica de seguridad que requiere un segundo código (además de la contraseña) para acceder a una cuenta se llama:",
      opciones: ["Autenticación de dos factores (2FA)", "Cifrado", "Firewall", "Phishing"],
      respuestaCorrecta: 0,
      explicacion: "La 2FA añade un segundo factor (TOTP, SMS, llave) para reforzar acceso."
    },
    {
      id: 14050,
      pregunta: "El ataque global de 'WannaCry' fue un ejemplo de:",
      opciones: [
        "Un virus informático inofensivo",
        "Un ataque de phishing",
        "Una campaña de marketing viral",
        "Un ransomware que cifraba los archivos y pedía un rescate"
      ],
      respuestaCorrecta: 3,
      explicacion: "WannaCry cifraba archivos y exigía pago para restaurarlos."
    }
  ]
};

export default moduloUnidadCincoValorDelDato;