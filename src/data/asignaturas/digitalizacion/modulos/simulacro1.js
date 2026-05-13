/**
 * Simulacro 1: Digitalización Aplicada a los Sectores Productivos
 * Basado en el quiz real. Cubre SaaS/IaaS/PaaS, IT/OT, IoT, ML/IA,
 * Industria 4.0/5.0, nube híbrida, gemelos digitales, NLP y Deep Learning.
 */
const moduloSimulacroUnoDigitalizacion = {
  id: 1406,
  asignaturaId: 14,
  nombre: "Simulacro 1: Digitalización Aplicada a los Sectores Productivos",
  titulo: "Digitalización Aplicada a los Sectores Productivos",
  descripcion:
    "Simulacro completo sobre modelos cloud (IaaS/PaaS/SaaS), convergencia IT/OT, IoT, Machine Learning, IA (ANI/AGI/DL/NLP), Industria 4.0/5.0, nube híbrida, gemelos digitales y transformación digital.",
  esExamen: true,
  preguntas: [
    {
      id: 14080,
      pregunta:
        "¿Qué define con mayor precisión al modelo SaaS (Software as a Service)?",
      opciones: [
        "Software descargado e instalado en el ordenador local del usuario con licencia perpetua",
        "Servicios que requieren conocimientos avanzados de programación para poder usarlos",
        "Plataformas que solo permiten almacenar documentos en la nube sin procesarlos",
        "Aplicaciones de software accesibles vía navegador web, gestionadas íntegramente por el proveedor, sin necesidad de instalación local ni mantenimiento del cliente",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "SaaS representa software como servicio entregado completamente en la nube. El usuario accede mediante navegador sin instalar software localmente, y el proveedor gestiona actualizaciones, parches y escalabilidad. El cliente únicamente gestiona sus datos y configuraciones.",
    },
    {
      id: 14081,
      pregunta:
        "¿Cuál de los siguientes componentes es característico del entorno de tecnología operacional (OT)?",
      opciones: [
        "Controlador lógico programable (PLC)",
        "Planificación de recursos empresariales (ERP)",
        "Servidor de computación en nube",
        "Gestión de relaciones con clientes (CRM)",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Un PLC es un dispositivo de control industrial que automatiza procesos físicos en tiempo real. Pertenece a OT porque controla maquinaria y operaciones. CRM y ERP son sistemas IT de gestión empresarial. IT maneja datos e información, OT controla sistemas físicos.",
    },
    {
      id: 14082,
      pregunta:
        "¿Qué tipo de amenaza emerge cuando se despliegan dispositivos IoT sin medidas de protección adecuadas?",
      opciones: [
        "Insuficiencia de fuentes de datos",
        "Exposición a vulnerabilidades y brechas de seguridad",
        "Limitaciones en la escalabilidad del sistema",
        "Problemas de rendimiento de procesamiento",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Los dispositivos IoT sin protección son puntos de entrada para ciberataques, permitiendo acceso no autorizado, robo de datos e inyección de malware. La ciberseguridad en IoT requiere autenticación, encriptación y actualizaciones periódicas.",
    },
    {
      id: 14083,
      pregunta: "¿Cuál es el principio fundamental del Machine Learning?",
      opciones: [
        "Programar explícitamente cada regla y decisión que el sistema debe seguir",
        "Copiar exactamente el comportamiento de expertos humanos sin cambios",
        "Permitir que los sistemas aprendan patrones a partir de datos sin ser programados explícitamente para cada decisión",
        "Procesar datos únicamente en tiempo real sin almacenarlos",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Machine Learning se basa en que el sistema aprende de los datos proporcionados, identificando patrones automáticamente. En lugar de programar cada regla manualmente, se alimenta al sistema con ejemplos y este mejora a través de algoritmos iterativos, adaptándose a nuevas situaciones sin reprogramación constante.",
    },
    {
      id: 14084,
      pregunta:
        "¿Cuál es la diferencia fundamental entre IA general (AGI) e IA estrecha (ANI)?",
      opciones: [
        "La IA estrecha es más poderosa pero la AGI es más económica",
        "Ambas son exactamente iguales pero con diferentes nombres según la región",
        "La ANI realiza tareas específicas; la AGI tendría capacidad de aprender y razonar en cualquier dominio como un humano",
        "La AGI solo funciona con datos estructurados, mientras que ANI trabaja solo con imágenes",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "La IA Estrecha (ANI) es la inteligencia artificial actual, especializada en tareas concretas. La IA General (AGI) es un concepto teórico futuro con inteligencia flexible y transferible entre dominios, similar a la cognición humana. Actualmente solo existen sistemas ANI.",
    },
    {
      id: 14085,
      pregunta:
        "En el contexto del modelo de servicio IaaS, ¿cuál es la responsabilidad principal que recae en el cliente?",
      opciones: [
        "Administración completa del sistema operativo, middleware, aplicaciones y datos del usuario",
        "Realizar el mantenimiento de centros de datos y equipamiento",
        "Gestionar únicamente la capa de aplicaciones finales de negocio",
        "Diseñar y construir la infraestructura física de servidores y redes",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "En IaaS el proveedor gestiona el hardware físico, virtualización y conectividad. El cliente recibe acceso a máquinas virtuales y debe hacerse cargo de todo lo que ejecuta sobre ellas: sistemas operativos, librerías, aplicaciones propias, configuraciones de seguridad y gestión de datos.",
    },
    {
      id: 14086,
      pregunta:
        "¿Cuál es la principal innovación conceptual que introduce la Industria 5.0 respecto a la 4.0?",
      opciones: [
        "Equilibrio entre automatización, valor humano y responsabilidad ambiental",
        "Mayor velocidad de producción",
        "Reducción de inversión en infraestructura",
        "Eliminación completa de intervención humana",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Mientras que la Industria 4.0 se enfocaba en la automatización e integración digital, la Industria 5.0 añade la revalorización del factor humano (creatividad, adaptabilidad) y la sostenibilidad ambiental. No sustituye personas, sino que crea ecosistemas donde humanos y máquinas colaboran con objetivos sostenibles.",
    },
    {
      id: 14087,
      pregunta:
        "En el modelo de servicio IaaS (Infrastructure as a Service), ¿qué responsabilidades recaen principalmente en el usuario?",
      opciones: [
        "Solo la visualización de datos sin posibilidad de modificarlos",
        "Únicamente el acceso a la aplicación final, sin gestionar nada más",
        "El mantenimiento físico de los servidores en el centro de datos del proveedor",
        "La gestión de sistemas operativos, middleware, runtime y aplicaciones, mientras el proveedor gestiona infraestructura física",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "En IaaS, el proveedor ofrece infraestructura (máquinas virtuales, almacenamiento, red). El usuario es responsable de instalar y mantener sistemas operativos, aplicaciones y datos. Esto proporciona mayor control que PaaS y SaaS, pero requiere más gestión técnica.",
    },
    {
      id: 14088,
      pregunta:
        "¿Qué define con mayor precisión el modelo SaaS (Software as a Service)?",
      opciones: [
        "Un servidor físico dedicado exclusivamente a un cliente",
        "La venta de licencias perpetuas de software sin conexión a internet",
        "Acceso a aplicaciones completas alojadas en la nube, totalmente gestionadas por el proveedor, disponibles vía navegador web",
        "Una aplicación de software instalada localmente que requiere actualización manual mensual",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "SaaS proporciona acceso a aplicaciones completas a través de internet, sin necesidad de instalación local. El proveedor gestiona todo: infraestructura, middleware, actualizaciones y seguridad. El usuario solo accede mediante un navegador, facilitando colaboración y reduciendo complejidad técnica.",
    },
    {
      id: 14089,
      pregunta:
        "¿Qué se entiende por convergencia entre IT (Tecnología de la Información) y OT (Tecnología Operacional) en entornos industriales?",
      opciones: [
        "La eliminación de los departamentos de operaciones en favor de equipos puramente tecnológicos",
        "El mantenimiento de sistemas completamente separados sin ningún tipo de comunicación",
        "La fusión de redes de datos empresariales (IT) con sistemas de control industrial (OT) para compartir información en tiempo real, mejorando la eficiencia y la toma de decisiones",
        "La sustitución completa de sistemas OT por infraestructuras IT convencionales",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "La convergencia IT-OT es fundamental en Industria 4.0. Históricamente operaban de forma aislada. La convergencia integra ambos mundos permitiendo que los datos de planta fluyan hacia sistemas de análisis empresarial y que las decisiones empresariales afecten directamente la operación.",
    },
    {
      id: 14090,
      pregunta:
        "¿En cuál de las etapas del ciclo de vida del dato ocurren las tareas de validación, transformación y estandarización?",
      opciones: [
        "Fase de captura inicial",
        "Fase de archivo y eliminación",
        "Fase de distribución a usuarios",
        "Fase de procesamiento y tratamiento",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "El procesamiento es la etapa donde los datos brutos se transforman en información útil. En esta fase se realizan limpieza, integración, validación y estandarización. Sin este procesamiento, los datos permanecerían desorganizados e inútiles.",
    },
    {
      id: 14091,
      pregunta:
        "¿Cuál es el fundamento esencial del Machine Learning como paradigma?",
      opciones: [
        "Ejecutar operaciones sin utilizar información de entrada",
        "Realizar tareas predeterminadas sin capacidad de mejora continua",
        "Permitir que algoritmos descubran patrones y reglas automáticamente mediante análisis de datos históricos",
        "Programar explícitamente todas las reglas lógicas de comportamiento del sistema",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Machine Learning invierte el paradigma tradicional de programación. En lugar de codificar manualmente cada regla, se proporcionan algoritmos y datos históricos para que descubran automáticamente los patrones. El sistema mejora su desempeño con más datos, sin necesidad de reprogramación manual.",
    },
    {
      id: 14092,
      pregunta:
        "¿Cuál es el cambio fundamental que caracteriza la transformación digital en una organización?",
      opciones: [
        "Incorporar herramientas informáticas sin alterar la estructura operativa",
        "Rediseñar procesos y estrategia empresarial mediante tecnología",
        "Adquirir software de última generación",
        "Establecer un sitio web corporativo",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "La digitalización va más allá de la automatización superficial. Implica una transformación integral donde la tecnología se integra en la estrategia empresarial, redefiniendo cómo se crean procesos, modelos de negocio y propuestas de valor.",
    },
    {
      id: 14093,
      pregunta:
        "¿Qué ventaja principal ofrece una arquitectura de nube híbrida en comparación con modelos de nube pública o privada exclusivamente?",
      opciones: [
        "Elimina completamente la necesidad de que el cliente tenga personal IT",
        "Proporciona velocidad de procesamiento infinita sin limitaciones técnicas",
        "Combina flexibilidad de la nube pública con control y seguridad de la infraestructura privada, permitiendo distribuir cargas de trabajo según requisitos específicos",
        "Garantiza que los datos nunca saldrán del territorio nacional bajo ninguna circunstancia",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "La nube híbrida integra recursos de nube privada (mayor control, seguridad, cumplimiento normativo) con nube pública (escalabilidad, flexibilidad, costes bajos). Permite asignar datos sensibles a privada y aplicaciones estacionales a pública, optimizando costes y seguridad.",
    },
    {
      id: 14094,
      pregunta:
        "¿Qué ventaja fundamental ofrece el Cloud Computing frente a los sistemas tradicionales de infraestructura local?",
      opciones: [
        "Garantizar que todos los procesos se ejecuten sin errores",
        "Aumentar automáticamente la seguridad física de los datos",
        "Eliminar completamente la necesidad de conexión a internet",
        "Proporcionar escalabilidad, flexibilidad de recursos y reducción de costos operacionales mediante acceso bajo demanda a infraestructura compartida",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "El Cloud Computing permite acceder a recursos computacionales de forma flexible y escalable, pagando solo por lo que se utiliza. Reduce gastos de capital en infraestructura propia, mejora la disponibilidad y facilita el acceso remoto.",
    },
    {
      id: 14095,
      pregunta:
        "¿Qué aportación conceptual introduce la Industria 5.0 respecto al modelo 4.0?",
      opciones: [
        "La eliminación progresiva de tecnologías de inteligencia artificial",
        "La centralización absoluta de los procesos en sistemas robóticos",
        "Mayor velocidad en la automatización sin intervención humana",
        "El reconocimiento del ser humano como componente esencial y estratégico del sistema productivo",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "Mientras que Industria 4.0 enfatiza la automatización y los datos, Industria 5.0 integra la perspectiva humanística, reconociendo que la creatividad, el juicio y la adaptabilidad humanas son irreemplazables y complementarias a la tecnología.",
    },
    {
      id: 14096,
      pregunta:
        "¿Cuál es la distinción fundamental entre los entornos IT y OT en una infraestructura empresarial digitalizada?",
      opciones: [
        "IT gestiona datos e información; OT controla y automatiza procesos físicos",
        "IT no necesita datos para funcionar correctamente",
        "OT utiliza exclusivamente software mientras que IT usa hardware",
        "No existe diferencia conceptual entre ambos entornos",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "IT (Tecnología de la Información) administra sistemas digitales, bases de datos y redes. OT (Tecnología Operacional) controla maquinaria, sensores y automatización industrial. La Industria 4.0 integra ambos mundos.",
    },
    {
      id: 14097,
      pregunta:
        "¿Qué implicación de seguridad surge del despliegue masivo de dispositivos conectados en el Internet de las Cosas?",
      opciones: [
        "Expansión exponencial del perímetro de ataque que los atacantes pueden explotar",
        "Disminución automática de los vectores de ataque disponibles",
        "Centralización de todos los riesgos en un único punto de control",
        "Eliminación total de vulnerabilidades heredadas en sistemas antiguos",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "El IoT multiplica los puntos potenciales de compromiso. Cada dispositivo conectado representa una potencial entrada para atacantes. Los dispositivos IoT suelen tener recursos limitados para implementar seguridad robusta, creando una superficie de ataque amplia y heterogénea.",
    },
    {
      id: 14098,
      pregunta:
        "¿Qué diferencia principal existe entre el modelo IaaS y el modelo PaaS en Cloud Computing?",
      opciones: [
        "IaaS proporciona máquinas virtuales desnudas; PaaS proporciona un entorno completo de desarrollo y despliegue con herramientas y bases de datos preconfiguradas",
        "PaaS no requiere conexión a internet, mientras IaaS sí",
        "No hay diferencia, son términos sinónimos",
        "IaaS es más caro que PaaS siempre",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "En IaaS, el cliente controla la máquina virtual desde el SO en adelante. En PaaS, el cliente solo se preocupa por el código de su aplicación; el proveedor gestiona SO, middleware y herramientas de desarrollo. PaaS acelera el desarrollo al proporcionar un entorno listo.",
    },
    {
      id: 14099,
      pregunta:
        "¿Qué concepto describe una representación digital sincronizada de un activo o proceso físico que se alimenta continuamente de datos en tiempo real?",
      opciones: [
        "Una fotografía digital de la configuración actual del equipo",
        "Un modelo de simulación desconectado que se utiliza solo en fases de diseño",
        "Una copia de seguridad estática almacenada en servidores centralizados",
        "Un gemelo digital que replica virtualmente el comportamiento dinámico del sistema real",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "El gemelo digital es una representación virtual exacta de un sistema físico que se actualiza continuamente con datos del mundo real mediante sensores e IoT. Permite simulación, predicción y optimización sin interferir con la operación actual.",
    },
    {
      id: 14100,
      pregunta:
        "¿Qué función cumple el Procesamiento del Lenguaje Natural (NLP) en aplicaciones modernas?",
      opciones: [
        "Permitir que máquinas comprendan, analicen y generen lenguaje humano de forma significativa",
        "Almacenar grandes volúmenes de diccionarios en memoria local",
        "Eliminar la posibilidad de que las máquinas cometan errores lingüísticos",
        "Traducir únicamente idiomas sin procesar el significado del texto",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "NLP permite a los sistemas informáticos procesar, interpretar y generar lenguaje natural humano. Aplicaciones incluyen análisis de sentimientos, chatbots, traducción automática y búsqueda semántica. Combina lingüística computacional con aprendizaje automático para captar contexto y significado.",
    },
    {
      id: 14101,
      pregunta:
        "¿Cuál es la diferencia fundamental entre Inteligencia Artificial Estrecha (ANI) y la Inteligencia Artificial General (AGI)?",
      opciones: [
        "ANI es especializada en tareas específicas y no puede generalizar; AGI sería capaz de entender, aprender y aplicar conocimiento a cualquier tarea similar a los humanos",
        "ANI es más cara de desarrollar que AGI",
        "AGI ya existe en uso comercial masivo",
        "No existe diferencia teórica, solo nomenclatura alternativa",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Toda la IA actual es ANI. Modelos como ChatGPT son excelentes en su tarea específica pero no pueden aplicar ese conocimiento fuera de su dominio. AGI es teórica: una IA con inteligencia general capaz de aprender y transferir conocimiento entre dominios. AGI no existe aún.",
    },
    {
      id: 14102,
      pregunta:
        "¿Qué característica técnica diferencia el Deep Learning del Machine Learning convencional?",
      opciones: [
        "Utiliza arquitecturas de redes neuronales con múltiples capas (profundas) para representar patrones complejos",
        "No es capaz de identificar patrones complejos en datos no estructurados",
        "El Deep Learning no requiere datos de entrenamiento",
        "No necesita procesos de entrenamiento iterativo",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Deep Learning es una especialización de Machine Learning basada en redes neuronales con múltiples capas ocultas. Esta arquitectura profunda permite aprender representaciones jerárquicas, siendo especialmente efectiva para datos no estructurados como imágenes, audio o texto.",
    },
    {
      id: 14103,
      pregunta:
        "¿Cómo se define la Realidad Aumentada en el contexto de aplicaciones empresariales?",
      opciones: [
        "Enmascaramiento de datos reales con información sintética",
        "Recreación de entornos completamente virtuales independientes",
        "Integración de elementos digitales interactivos en la percepción visual del mundo real",
        "Simulación de escenarios de riesgo en laboratorio",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "La Realidad Aumentada superpone capas de información digital sobre la realidad observada en tiempo real. A diferencia de la Realidad Virtual, mantiene el entorno real como base e integra elementos virtuales interactivos que enriquecen la experiencia del usuario.",
    },
    {
      id: 14104,
      pregunta:
        "¿Qué diferenciación fundamental existe entre los modelos PaaS e IaaS en términos de abstracción y gestión?",
      opciones: [
        "IaaS incluye software de aplicación listo para consumir sin configuración",
        "No hay distinción operativa entre ambos modelos",
        "PaaS elimina completamente la necesidad de trabajar con servidores de cualquier tipo",
        "PaaS ofrece un entorno de desarrollo y ejecución completamente gestionado, permitiendo al usuario enfocarse en la lógica aplicativa",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "PaaS proporciona una capa de abstracción superior a IaaS: el proveedor gestiona infraestructura, SO, middleware y herramientas de desarrollo. El cliente solo desarrolla y despliega su código de negocio. Con IaaS debe configurar SO y componentes middleware.",
    },
    {
      id: 14105,
      pregunta:
        "¿Qué define con mayor precisión el modelo de servicio SaaS (Software como Servicio)?",
      opciones: [
        "Requiere que el cliente instale software en cada estación de trabajo",
        "Es exclusivamente para uso personal y no empresarial",
        "Ofrece aplicaciones completas alojadas en la nube, accesibles mediante navegador, sin necesidad de instalación ni mantenimiento local",
        "Proporciona solo código fuente para que el cliente compile y ejecute",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "SaaS es el modelo cloud más abstracto y accesible. Las aplicaciones se ejecutan en servidores del proveedor y se acceden vía web. El cliente no gestiona nada técnico: aplicación, datos, actualizaciones, seguridad y disponibilidad son responsabilidad del proveedor.",
    },
    {
      id: 14106,
      pregunta:
        "En el modelo IaaS (Infrastructure as a Service), ¿cuál es la responsabilidad principal que recae sobre el usuario o cliente?",
      opciones: [
        "La responsabilidad legal de todos los servicios cloud sin excepción",
        "La gestión, actualización y mantenimiento de sistemas operativos, aplicaciones, datos y seguridad a nivel de aplicación",
        "La actualización y parches de seguridad de la infraestructura subyacente del proveedor",
        "La administración de toda la infraestructura física, servidores y redes de datos del proveedor",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "IaaS proporciona infraestructura virtualizada bajo demanda. El cliente gestiona todo en la capa de aplicación: SO, middleware, runtimes, datos y seguridad. El proveedor mantiene la infraestructura física, virtualización, servidores y conectividad.",
    },
    {
      id: 14107,
      pregunta:
        "En el modelo IaaS (Infrastructure as a Service), ¿qué responsabilidad recae principalmente en el usuario?",
      opciones: [
        "No asumir ninguna responsabilidad técnica de mantenimiento",
        "Controlar completamente el centro de datos del proveedor en la nube",
        "Administrar aplicaciones, datos y entornos de ejecución sobre la infraestructura proporcionada",
        "Gestionar únicamente el hardware físico de los servidores",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "En IaaS, el proveedor gestiona la infraestructura física (servidores, almacenamiento, red), mientras que el cliente es responsable de los sistemas operativos, aplicaciones, datos y configuración de seguridad. Es el modelo de mayor flexibilidad pero también de mayor responsabilidad técnica.",
    },
    {
      id: 14108,
      pregunta:
        "¿Qué se entiende por convergencia entre IT y OT en entornos industriales?",
      opciones: [
        "El uso exclusivo de redes inalámbricas en la planta de producción",
        "La implementación de sistemas operativos idénticos en todos los dispositivos",
        "La fusión entre sistemas de Tecnología de la Información (IT) y Tecnología Operativa (OT) para integrar datos y control de procesos industriales",
        "La separación física de todos los servidores de datos del resto de infraestructuras",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "La convergencia IT-OT representa la unión entre sistemas de información empresarial (IT) y sistemas de control industrial (OT), permitiendo que máquinas, sensores y sistemas de control compartan datos en tiempo real para facilitar la toma de decisiones y la optimización de procesos.",
    },
    {
      id: 14109,
      pregunta:
        "¿Qué subcampo de la IA permite a sistemas computacionales comprender y generar lenguaje humano?",
      opciones: [
        "Internet of Things (IoT)",
        "Computer Vision (Visión Artificial)",
        "Robótica Autónoma",
        "Natural Language Processing (NLP)",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "NLP (Procesamiento del Lenguaje Natural) es la rama de la IA que se especializa en la interacción entre máquinas y lenguaje humano. Permite comprender textos, generar respuestas, traducir idiomas y mantener conversaciones. Los modelos de lenguaje modernos (LLM) han revolucionado este campo.",
    },
  ],
};

export default moduloSimulacroUnoDigitalizacion;
