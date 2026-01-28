const moduloTestUnoDigitalizacion = {
  id: 1405,
  asignaturaId: 14,
  nombre: "Test 1: IoT, Robótica, Cloud Computing y tecnologías habilitadoras",
  titulo: "Tecnologías habilitadoras de la transformación digital",
  descripcion: "IoT, cobots, RA/RV, ciberseguridad, blockchain, gemelos digitales, impresión 3D, 5G y Cloud Computing (IaaS, PaaS, SaaS).",
  esExamen: true,
  preguntas: [
    {
      id: 14060,
      pregunta: "¿Cuál es la característica fundamental del IoT (Internet de las Cosas)?",
      opciones: [
        "Captura de datos mediante sensores conectados que envían información a través de internet",
        "El dato en contexto: captura, almacenamiento, análisis y actuación sobre la información",
        "Solo la transmisión de datos sin procesamiento posterior",
        "La visualización de datos en tiempo real en dashboards"
      ],
      respuestaCorrecta: 1,
      explicacion: "IoT no es simplemente capturar datos, sino el ciclo completo: sensores recogen información, se almacena, analiza y se actúa sobre ella. El valor real emerge cuando IoT se interconecta con logística, calidad y seguridad operativa."
    },
    {
      id: 14061,
      pregunta: "¿Cuál es la ventaja principal de los cobots (robots colaborativos) frente a robots industriales tradicionales?",
      opciones: [
        "Tienen mayor capacidad de carga y velocidad de ejecución",
        "Trabajan junto a humanos de forma segura, son flexibles y aumentan productividad y ergonomía",
        "Requieren menos mantenimiento que los robots convencionales",
        "Pueden programarse sin intervención de ingenieros especializados"
      ],
      respuestaCorrecta: 1,
      explicacion: "Los cobots colaboran directamente con operarios, mejorando su ergonomía y reduciendo tareas repetitivas. No sustituyen al humano; lo potencian. Son compactos, programables y aumentan OEE."
    },
    {
      id: 14062,
      pregunta: "¿Cuál es la diferencia principal entre Realidad Aumentada (RA) y Realidad Virtual (RV)?",
      opciones: [
        "RA es más cara que RV",
        "RA superpone capas digitales sobre el mundo real; RV crea un entorno 100% digital inmersivo",
        "RV solo sirve para entretenimiento",
        "Ambas tienen exactamente las mismas aplicaciones empresariales"
      ],
      respuestaCorrecta: 1,
      explicacion: "RA superpone instrucciones y datos sobre el entorno real (útil para picking, inspección). RV crea espacios totalmente inmersivos, ideales para simular escenarios de riesgo sin exponer a peligros reales."
    },
    {
      id: 14063,
      pregunta: "¿Por qué la Ciberseguridad se describe como un \"pilar transversal\" en la transformación digital?",
      opciones: [
        "Solo necesita aplicarse en departamentos de TI",
        "Porque todo lo que genera IoT, RA/RV, Robótica crea superficies de ataque que requieren protección",
        "No es fundamental si la empresa es pequeña",
        "Es solo responsabilidad del proveedor de servicios cloud"
      ],
      respuestaCorrecta: 1,
      explicacion: "IoT expone sensores; RA/RV añade dispositivos móviles; cobots requieren redes; cloud abre acceso remoto. Sin ciberseguridad, toda la transformación es frágil. Es responsabilidad compartida entre proveedor y cliente."
    },
    {
      id: 14064,
      pregunta: "¿Cuál es el principal resultado del caso de estudio DHL con Vision Picking?",
      opciones: [
        "Reducción de errores de picking gracias solo a mejor formación",
        "Manos libres, menos errores, más velocidad, trazabilidad mediante integración de RA, cobots e IoT",
        "La eliminación total de operarios en almacenes",
        "Aumento de costes operativos por inversión en tecnología"
      ],
      respuestaCorrecta: 1,
      explicacion: "DHL combinó RA (gafas con pedidos), cobots logísticos e IoT (sensores de stock). Resultado: operarios con manos libres, reducción drástica de errores, aumento de velocidad y trazabilidad completa."
    },
    {
      id: 14065,
      pregunta: "¿Cuál es la utilidad principal del Blockchain más allá de criptomonedas?",
      opciones: [
        "Aumentar la velocidad de transacciones bancarias",
        "Registro distribuido, seguro, transparente e inmutable para trazabilidad, contratos inteligentes e identidad",
        "Solo garantizar transacciones rápidas",
        "Eliminar la necesidad de servidores"
      ],
      respuestaCorrecta: 1,
      explicacion: "Blockchain crea una cadena inalterable para trazabilidad (alimentaria, suministros), contratos inteligentes y certificación segura de documentos. Aporta confianza y transparencia sin intermediarios."
    },
    {
      id: 14066,
      pregunta: "¿Qué es un Gemelo Digital y cuál es su valor principal?",
      opciones: [
        "Una copia física de una máquina industrial",
        "Réplica virtual actualizada en tiempo real que simula, anticipa fallos y optimiza sin intervenir en el sistema real",
        "Un modelo estático que no se actualiza",
        "Solo una herramienta de visualización de datos"
      ],
      respuestaCorrecta: 1,
      explicacion: "Un gemelo digital es una réplica virtual que recibe datos en tiempo real de sensores IoT. Permite simular escenarios, anticipar fallos y optimizar rendimiento sin intervenir físicamente el sistema real."
    },
    {
      id: 14067,
      pregunta: "¿Cuál es la ventaja clave de la Impresión 3D (Fabricación Aditiva)?",
      opciones: [
        "Produce objetos más rápido que máquinas CNC convencionales",
        "Añade solo material necesario, reduce residuos/costes, permite prototipado rápido y fabricación personalizada",
        "Solo funciona con plástico",
        "Requiere materiales más caros que la fabricación tradicional"
      ],
      respuestaCorrecta: 1,
      explicacion: "A diferencia de fabricación tradicional (que elimina material), impresión 3D añade solo lo necesario. Beneficios: prototipado en horas, producción personalizada, fabricación bajo demanda y menos residuos."
    },
    {
      id: 14068,
      pregunta: "¿Cuáles son las tres características clave del 5G?",
      opciones: [
        "Menor coste que 4G, mejor recepción en interiores, mayor duración de batería",
        "Velocidad ultraalta (hasta 10 Gbps), latencia ultrabaja (milisegundos), conectividad masiva (millones de dispositivos/km²)",
        "Mayor seguridad que 4G, cifrado automático, alcance global sin fronteras",
        "Disponible en todos los países, sin necesidad de infraestructura adicional"
      ],
      respuestaCorrecta: 1,
      explicacion: "5G habilita IoT, gemelos digitales, vehículos autónomos y cirugía remota. Velocidad ultraalta para análisis masivos, latencia ultrabaja para precisión milimétrica, conectividad masiva para millones de sensores IoT."
    },
    {
      id: 14069,
      pregunta: "¿Qué demuestra el caso de estudio McLaren F1 sobre la integración de tecnologías?",
      opciones: [
        "Que la F1 usa solo impresión 3D para fabricar coches",
        "Que combinar gemelos digitales, impresión 3D, blockchain y 5G optimiza rendimiento técnico y toma de decisiones",
        "Que blockchain es innecesario en empresas no financieras",
        "Que 5G solo sirve para comunicaciones comerciales"
      ],
      respuestaCorrecta: 1,
      explicacion: "McLaren integra: gemelos digitales (300+ sensores), impresión 3D (prototipado rápido), blockchain (trazabilidad de datos) y 5G (comunicación ultrarrápida). Demuestra que la sinergia tecnológica reinventa la toma de decisiones."
    },
    {
      id: 14070,
      pregunta: "¿Cuál es la diferencia principal entre IaaS, PaaS y SaaS?",
      opciones: [
        "IaaS es más seguro que PaaS; PaaS es más flexible que SaaS",
        "IaaS: infraestructura; PaaS: plataforma para desarrollar; SaaS: software listo para usar via navegador",
        "Los tres son idénticos; solo cambia el nombre",
        "SaaS es siempre más caro que IaaS"
      ],
      respuestaCorrecta: 1,
      explicacion: "IaaS alquila servidores virtuales (cliente gestiona SO y apps). PaaS añade entorno de desarrollo (cliente se enfoca en código). SaaS es aplicación completa lista via navegador (zero configuración)."
    },
    {
      id: 14071,
      pregunta: "¿Cuál es la diferencia entre Nube Pública, Privada e Híbrida?",
      opciones: [
        "Pública es gratis; Privada requiere compra de servidores; Híbrida es experimental",
        "Pública: recursos compartidos/económica; Privada: exclusiva/control; Híbrida: combina ambas según necesidad",
        "Todas tienen idéntica seguridad",
        "La nube privada no permite acceso a internet"
      ],
      respuestaCorrecta: 1,
      explicacion: "Nube Pública: múltiples clientes comparten infraestructura, más económica. Nube Privada: recursos exclusivos, máximo control. Nube Híbrida: combina ambas según sensibilidad de datos y necesidades."
    },
    {
      id: 14072,
      pregunta: "¿Cuáles son las ventajas clave del Cloud Computing?",
      opciones: [
        "Mayor seguridad que servidores locales, cero coste operativo, velocidad infinita",
        "Escalabilidad rápida, flexibilidad, pago por uso, alta disponibilidad, sin inversión inicial elevada",
        "Solo aplica a grandes multinacionales",
        "Es necesario tener servidores físicos como backup"
      ],
      respuestaCorrecta: 1,
      explicacion: "Cloud revoluciona porque ofrece: escalabilidad automática, flexibilidad según demanda, pago por uso, alta disponibilidad (múltiples centros de datos) y sin CAPEX inicial."
    },
    {
      id: 14073,
      pregunta: "¿Cuál es el principal error en la configuración de seguridad en la nube?",
      opciones: [
        "Usar contraseñas demasiado largas",
        "Dejar recursos (bases de datos, almacenamiento) públicos sin protección o contraseñas débiles",
        "Confiar demasiado en el proveedor cloud",
        "Actualizar software con demasiada frecuencia"
      ],
      respuestaCorrecta: 1,
      explicacion: "Brechas de seguridad suelen deberse a configuración errónea: contraseñas débiles, permisos públicos en buckets S3, falta de MFA. El cliente es responsable de identidad, accesos y configuración correcta."
    },
    {
      id: 14074,
      pregunta: "¿Cuál es la aplicación incorrecta del Cloud Computing según los mitos?",
      opciones: [
        "Procesar datos en tiempo real",
        "Creer que solo sirve para almacenar archivos como Google Drive o Dropbox",
        "Entrenar modelos de IA",
        "Almacenar videos corporativos"
      ],
      respuestaCorrecta: 1,
      explicacion: "Mito falso: 'la nube solo almacena archivos'. Realidad: es ecosistema integral. Netflix entrena modelos predictivos, Snowflake procesa millones de registros. Cloud es columna vertebral de economía digital."
    },
    {
      id: 14075,
      pregunta: "¿Es la nube realmente insegura?",
      opciones: [
        "Sí, porque los datos están fuera de la empresa",
        "Falso; AWS, Azure, Google invierten miles de millones en ciberseguridad con protección superior a infraestructura local",
        "Solo es segura si es nube privada",
        "La seguridad depende solo del proveedor"
      ],
      respuestaCorrecta: 1,
      explicacion: "Grandes proveedores ofrecen vigilancia física 24h, cifrado AES-256, equipos globales de expertos y certificaciones. Brechas reales se deben a error humano del cliente. Nube bien gestionada es más segura que local."
    },
    {
      id: 14076,
      pregunta: "¿Cuál es el modelo de responsabilidad compartida en Cloud?",
      opciones: [
        "El proveedor es 100% responsable de la seguridad",
        "Proveedor: infraestructura/hardware/red; Cliente: usuarios/accesos/configuración/políticas",
        "El cliente es 100% responsable de toda la seguridad",
        "No existe concepto de responsabilidad compartida"
      ],
      respuestaCorrecta: 1,
      explicacion: "Proveedor asegura: centros de datos, servidores físicos, red, cifrado de infraestructura. Cliente es responsable de: gestión de usuarios (IAM), configuración correcta, políticas de acceso, MFA."
    },
    {
      id: 14077,
      pregunta: "¿Qué herramientas ayudan a optimizar costes en la nube?",
      opciones: [
        "Solo monitorizar la factura mensual",
        "AWS Cost Explorer, Azure Cost Management: monitorizar gasto, programar alertas, eliminar recursos inactivos",
        "Desactivar todos los servicios para ahorrar",
        "Los costes en nube son siempre más altos que infraestructura propia"
      ],
      respuestaCorrecta: 1,
      explicacion: "AWS Cost Explorer y Azure Cost Management permiten: visualizar gasto por servicio, establecer alertas presupuestarias, identificar recursos ociosos. Netflix/Uber ahorran 30%+ optimizando."
    },
    {
      id: 14078,
      pregunta: "¿Cuál fue el impacto de la migración de Netflix a AWS?",
      opciones: [
        "Aumento de costes operativos del 50%",
        "Reducción tiempo inactividad casi a cero, escalabilidad ante picos, ahorro 30%+ vs. infraestructura propia",
        "Netflix siguió usando servidores locales",
        "La migración fue un fracaso inicial"
      ],
      respuestaCorrecta: 1,
      explicacion: "Netflix pasó de infraestructura propia (caída masiva 2008) a AWS 100%. Logro: arquitectura autoscalable, MTTD casi cero, escalabilidad inmediata, lanzamiento simultáneo global, 30% ahorro costes."
    },
    {
      id: 14079,
      pregunta: "¿Cuál fue la estrategia de Banco Santander con la nube?",
      opciones: [
        "Abandonar completamente infraestructura local",
        "Adoptar nube híbrida: privada para datos sensibles, pública (AWS/Google/IBM) para procesos menos críticos",
        "Solo usar nube pública sin restricciones",
        "Mantener 100% infraestructura local"
      ],
      respuestaCorrecta: 1,
      explicacion: "Santander adoptó nube híbrida: privada para datos sensibles (cumplimiento RGPD), pública para marketing y demanda pico. Resultado: 6 meses lanzar productos, 30% ahorro, 100% RGPD."
    }
  ]
};

export default moduloTestUnoDigitalizacion;