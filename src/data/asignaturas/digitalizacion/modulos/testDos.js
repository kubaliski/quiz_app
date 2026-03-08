const moduloTestDosDigitalizacion = {
  id: 1406,
  asignaturaId: 14,
  nombre: "Test 2: Temario Completo Digitalización Aplicada",
  titulo: "Digitalización, Industria 4.0/5.0, THD, Cloud, IA y Datos",
  descripcion:
    "Evaluación completa sobre el concepto de digitalización, tecnologías habilitadoras (IoT, RA, Cobots), Cloud Computing, Inteligencia Artificial, Big Data y fases de un proyecto de transformación digital.",
  esExamen: true,
  preguntas: [
    {
      id: 14080,
      pregunta: "La verdadera digitalización empresarial implica:",
      opciones: [
        "Sustituir papel por documentos PDF",
        "Crear perfiles en redes sociales",
        "Reorganizar el modelo de negocio utilizando la tecnología como palanca estratégica",
        "Comprar software moderno sin cambiar procesos",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Digitalización no es solo cambiar el formato físico a digital (informatización), sino reestructurar el modelo de negocio y los procesos operativos aprovechando la tecnología para ser más competitivos.",
    },
    {
      id: 14081,
      pregunta: "La Industria 4.0 se caracteriza principalmente por:",
      opciones: [
        "Uso exclusivo de robots industriales",
        "Interconexión, datos en tiempo real e inteligencia distribuida",
        "Eliminación total del factor humano",
        "Sustitución de todas las fábricas tradicionales",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "La Industria 4.0 se basa en los sistemas ciberfísicos, el Internet de las Cosas (IoT) y la interconexión de datos en tiempo real para crear fábricas inteligentes y conectadas.",
    },
    {
      id: 14082,
      pregunta: "En la Industria 5.0, el enfoque cambia hacia:",
      opciones: [
        "Automatización absoluta",
        "Reducción de costes únicamente",
        "Colaboración humano-máquina y sostenibilidad",
        "Producción masiva sin intervención humana",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Mientras la 4.0 se centra en la conectividad y eficiencia pura, la Industria 5.0 pone el foco en la sostenibilidad, la resiliencia y la colaboración directa entre humanos y máquinas (como el uso de cobots).",
    },
    {
      id: 14083,
      pregunta: "La convergencia IT/OT permite:",
      opciones: [
        "Separar completamente redes corporativas y sistemas industriales",
        "Conectar sistemas de información con procesos físicos de producción",
        "Eliminar sensores industriales",
        "Sustituir los PLC por ordenadores personales",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "La convergencia de IT (Information Technology) y OT (Operational Technology) integra los sistemas corporativos y de gestión con los sistemas de control industrial físicos en la planta.",
    },
    {
      id: 14084,
      pregunta:
        "La principal diferencia entre informatización y digitalización es que:",
      opciones: [
        "Son lo mismo",
        "Informatización cambia tecnología; digitalización cambia modelo de negocio",
        "Digitalización es solo marketing",
        "Informatización elimina personas",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "La informatización es simplemente la transición de procesos analógicos a formato digital (ej. escanear un papel). La digitalización transforma el modelo operativo y de negocio en su conjunto.",
    },
    {
      id: 14085,
      pregunta: "El valor real del IoT no está en el dispositivo sino en:",
      opciones: [
        "El precio del sensor",
        "La estética del hardware",
        "El dato contextualizado y analizado",
        "La marca del fabricante",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "El verdadero valor del Internet de las Cosas reside en la recolección, estructuración y análisis de los datos generados por los sensores para tomar decisiones de negocio fundamentadas.",
    },
    {
      id: 14086,
      pregunta: "Los cobots se diferencian de los robots tradicionales porque:",
      opciones: [
        "No requieren programación",
        "Trabajan aislados en jaulas",
        "Colaboran de forma segura con personas",
        "No pueden manipular objetos",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Los cobots (robots colaborativos) están diseñados con sensores avanzados y limitaciones mecánicas de fuerza para compartir el espacio de trabajo con humanos sin requerir jaulas de seguridad.",
    },
    {
      id: 14087,
      pregunta: "La Realidad Aumentada (RA) se utiliza en empresa para:",
      opciones: [
        "Sustituir formación técnica",
        "Superponer información digital sobre el entorno real",
        "Crear únicamente videojuegos",
        "Eliminar procesos productivos",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "La Realidad Aumentada (RA) añade capas visuales de información digital sobre el mundo físico en tiempo real, facilitando tareas como el mantenimiento industrial, el picking o el guiado técnico.",
    },
    {
      id: 14088,
      pregunta: "La ciberseguridad es considerada transversal porque:",
      opciones: [
        "Solo protege servidores cloud",
        "Solo afecta a grandes empresas",
        "Debe aplicarse a todas las tecnologías y procesos digitales",
        "Es opcional en proyectos IoT",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Es transversal porque cualquier tecnología conectada (IoT, Cloud, IA, Robótica) amplía la superficie de ataque, por lo que la ciberseguridad debe implementarse en todas las capas de la organización.",
    },
    {
      id: 14089,
      pregunta: "Un sistema de mantenimiento predictivo basado en IoT permite:",
      opciones: [
        "Reparar máquinas solo cuando se rompen",
        "Anticipar fallos antes de que ocurran",
        "Eliminar técnicos",
        "Reducir sensores",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Al monitorear variables en tiempo real mediante IoT (vibración, temperatura), el mantenimiento predictivo permite prever cuándo fallará una pieza e intervenir justo antes de que se produzca la avería.",
    },
    {
      id: 14090,
      pregunta: "En el modelo IaaS, el cliente es responsable de:",
      opciones: [
        "Nada, todo lo gestiona el proveedor",
        "Sistema operativo y aplicaciones",
        "Solo el hardware físico",
        "Seguridad del centro de datos",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "En Infrastructure as a Service (IaaS), el proveedor gestiona el hardware, almacenamiento y red física, pero es el cliente quien administra y mantiene el sistema operativo, middleware y las aplicaciones.",
    },
    {
      id: 14091,
      pregunta: "PaaS permite principalmente:",
      opciones: [
        "Gestionar servidores físicos",
        "Desarrollar aplicaciones sin administrar infraestructura",
        "Comprar licencias perpetuas",
        "Instalar software offline",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Platform as a Service (PaaS) ofrece un entorno preconfigurado con sistemas operativos, bases de datos y herramientas de desarrollo, permitiendo a los programadores centrarse exclusivamente en crear el software.",
    },
    {
      id: 14092,
      pregunta: "SaaS se caracteriza por:",
      opciones: [
        "Requerir instalación local obligatoria",
        "Acceso vía navegador sin gestión técnica del usuario",
        "Control total del sistema operativo",
        "Infraestructura propia",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Software as a Service (SaaS) entrega aplicaciones completas a través de internet (normalmente vía navegador) donde el proveedor gestiona absolutamente todo el stack tecnológico y la infraestructura.",
    },
    {
      id: 14093,
      pregunta: "La nube híbrida combina:",
      opciones: [
        "Dos nubes públicas",
        "Infraestructura física y papel",
        "Nube pública y privada",
        "SaaS e IoT",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Una nube híbrida es una infraestructura tecnológica que combina nubes públicas (AWS, Azure) y nubes privadas (on-premise), permitiendo compartir de forma segura datos y aplicaciones entre ellas.",
    },
    {
      id: 14094,
      pregunta:
        "Una empresa que quiere mantener datos sensibles internamente pero usar cloud para picos de demanda debería optar por:",
      opciones: [
        "Nube pública exclusiva",
        "Nube privada exclusiva",
        "Nube híbrida",
        "Mist computing",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "El modelo híbrido permite aprovechar la seguridad de la nube privada para el core del negocio, mientras se usa la pública para escalar recursos (cloud bursting) cuando hay picos imprevistos de demanda.",
    },
    {
      id: 14095,
      pregunta: "La IA actual es principalmente:",
      opciones: [
        "General (AGI)",
        "Consciente",
        "Estrecha (ANI) especializada en tareas concretas",
        "Autónoma en cualquier contexto",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "La Inteligencia Artificial actual es 'Estrecha' o 'Débil' (ANI), lo que significa que está diseñada, entrenada y limitada a resolver problemas muy específicos, no poseyendo consciencia ni capacidad cognitiva general.",
    },
    {
      id: 14096,
      pregunta: "El Machine Learning permite:",
      opciones: [
        "Programar reglas manuales",
        "Aprender patrones a partir de datos",
        "Crear hardware",
        "Sustituir estadística",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Machine Learning (Aprendizaje Automático) es una rama de la IA donde los algoritmos identifican patrones matemáticos dentro de grandes volúmenes de datos, en lugar de depender de reglas estáticas pre-programadas por humanos.",
    },
    {
      id: 14097,
      pregunta: "El Deep Learning se caracteriza por:",
      opciones: [
        "Uso de redes neuronales profundas",
        "No necesitar datos",
        "Funcionar sin entrenamiento",
        "Ser independiente del ML",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Deep Learning (Aprendizaje Profundo) es una evolución del ML que utiliza redes neuronales artificiales con múltiples capas ocultas (profundas) para procesar datos muy complejos como imagen o voz.",
    },
    {
      id: 14098,
      pregunta: "El NLP permite:",
      opciones: [
        "Controlar robots industriales",
        "Interpretar imágenes médicas",
        "Comprender y generar lenguaje humano",
        "Diseñar chips",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Natural Language Processing (NLP o Procesamiento de Lenguaje Natural) es la tecnología que permite a máquinas comprender, interpretar, procesar y generar lenguaje humano natural.",
    },
    {
      id: 14099,
      pregunta: "Big Data se define por las 3V:",
      opciones: [
        "Velocidad, Valor, Virtualización",
        "Volumen, Velocidad y Variedad",
        "Visualización, Ventas, Validación",
        "Versatilidad, Virtualidad, Volumen",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "El concepto tradicional de Big Data se define por Volumen (gran cantidad de datos generados), Velocidad (procesamiento rápido o en tiempo real) y Variedad (datos estructurados y no estructurados).",
    },
    {
      id: 14100,
      pregunta: "Un dato se convierte en información cuando:",
      opciones: [
        "Se almacena",
        "Se elimina",
        "Se le añade contexto y estructura",
        "Se duplica",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Un dato por sí solo (ej. '42') no tiene significado útil. Se convierte en información cuando se procesa, organiza y se le da un contexto que lo hace comprensible (ej. '42°C de temperatura en la máquina').",
    },
    {
      id: 14101,
      pregunta: "El ciclo de vida del dato incluye:",
      opciones: [
        "Solo captura y almacenamiento",
        "Captura, almacenamiento, procesamiento, análisis, uso y archivo",
        "Solo análisis",
        "Solo destrucción",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Para extraer valor real, el dato debe recorrer de forma segura y gobernada todas sus fases de vida: desde su origen y almacenamiento, hasta su explotación analítica y eventual archivo o eliminación.",
    },
    {
      id: 14102,
      pregunta: "Un Data Warehouse se caracteriza por:",
      opciones: [
        "Schema-on-read",
        "Datos sin estructura",
        "Schema-on-write y estructura predefinida",
        "Almacenar solo imágenes",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Un Data Warehouse almacena datos históricos procesados y estructurados con un esquema definido en el momento de la escritura (schema-on-write), siendo ideal para el Business Intelligence tradicional.",
    },
    {
      id: 14103,
      pregunta: "Un Data Lake es ideal para:",
      opciones: [
        "Solo reporting clásico",
        "Exploración y machine learning",
        "Reemplazar ERP",
        "Eliminar datos históricos",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Un Data Lake almacena enormes cantidades de datos crudos sin esquema predefinido (schema-on-read), lo que lo convierte en el entorno ideal para la minería de datos profunda y la exploración mediante Machine Learning.",
    },
    {
      id: 14104,
      pregunta:
        "La diferencia clave entre dato, información y conocimiento es:",
      opciones: [
        "No existe diferencia",
        "Contexto e interpretación",
        "Tamaño del archivo",
        "Formato digital",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "El dato es el valor bruto; la información se obtiene al contextualizar el dato; y el conocimiento es la capacidad humana e inferencial de interpretar esa información para aplicarla de forma útil.",
    },
    {
      id: 14105,
      pregunta: "El primer paso en un proyecto de transformación digital es:",
      opciones: [
        "Comprar tecnología",
        "Contratar programadores",
        "Definir estrategia digital",
        "Implantar IA",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Antes de incurrir en inversiones tecnológicas, es vital alinear cualquier iniciativa digital con los objetivos estratégicos de la empresa, definiendo primero 'qué' se quiere lograr y 'para qué'.",
    },
    {
      id: 14106,
      pregunta: "El diagnóstico digital analiza:",
      opciones: [
        "Solo tecnología",
        "Procesos, personas, tecnología y clientes",
        "Solo marketing",
        "Solo contabilidad",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Un diagnóstico digital debe ser holístico, evaluando el nivel de madurez tecnológica de la empresa junto con sus procesos operativos, la capacitación del equipo humano y la experiencia entregada al cliente.",
    },
    {
      id: 14107,
      pregunta: "La selección de THD debe basarse en:",
      opciones: [
        "Tendencias de moda",
        "Precio más bajo",
        "Alineamiento estratégico y ROI",
        "Popularidad en redes",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Las Tecnologías Habilitadoras Digitales (IoT, Cloud, IA) deben adoptarse no por moda, sino en función de su capacidad real para cumplir objetivos estratégicos y ofrecer un Retorno de Inversión (ROI) positivo.",
    },
    {
      id: 14108,
      pregunta: "El análisis DAFO aplicado a digitalización permite:",
      opciones: [
        "Comprar software",
        "Evaluar fortalezas, debilidades, oportunidades y amenazas",
        "Diseñar robots",
        "Configurar servidores",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "El análisis DAFO ayuda a identificar las Debilidades y Fortalezas internas de la empresa respecto a la tecnología, y evaluar las Amenazas y Oportunidades del ecosistema digital exterior.",
    },
    {
      id: 14109,
      pregunta: "La escalabilidad es importante porque:",
      opciones: [
        "Reduce empleados",
        "Permite crecer sin rediseñar todo el sistema",
        "Elimina mantenimiento",
        "Reduce clientes",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "La escalabilidad garantiza que la arquitectura del sistema puede adaptarse y manejar incrementos en la carga de trabajo de forma fluida, asegurando el crecimiento futuro sin cuellos de botella.",
    },
  ],
};

export default moduloTestDosDigitalizacion;
