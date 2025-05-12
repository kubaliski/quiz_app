/**
* Datos del módulo de Simulacro 2 perteneciente a la asignatura de Entornos de Desarrollo.
* Incluye información del módulo y sus preguntas asociadas para el quiz.
*
* @type {Object}
* @property {number} id - Identificador único del módulo
* @property {string} nombre - Nombre del módulo
* @property {boolean} esExamen - Indica si el módulo es un examen (true) o no (false)
* @property {number} asignaturaId - ID de la asignatura a la que pertenece
* @property {string} descripcion - Breve descripción del contenido del módulo
* @property {Array<Object>} preguntas - Lista de preguntas para el quiz de este módulo
* @property {number} preguntas[].id - Identificador único de la pregunta
* @property {number} preguntas[].moduloId - ID del módulo al que pertenece la pregunta
* @property {string} preguntas[].pregunta - Texto de la pregunta
* @property {Array<string>} preguntas[].opciones - Lista de opciones de respuesta
* @property {number} preguntas[].respuestaCorrecta - Índice (0-based) de la opción correcta
* @property {string} preguntas[].explicacion - Explicación de la respuesta correcta
*/
export const moduloSimulacroDosEntornos = {
id: 507,
nombre: "Simulacro 2 de Examen (12/05/2025)",
esExamen: true,
asignaturaId: 5,
descripcion: "Simulacro de examen que abarca UML, entornos de desarrollo, control de versiones, pruebas y mantenimiento de software.",
preguntas: [
    {
        id: 5701,
        moduloId: 507,
        pregunta: "¿Cómo se representa un caso de uso en UML?",
        opciones: [
            "Como una flecha",
            "Como un círculo",
            "Como una elipse",
            "Como un rectángulo"
        ],
        respuestaCorrecta: 2,
        explicacion: "En UML (Unified Modeling Language), un caso de uso se representa gráficamente mediante una elipse o forma ovalada con el nombre del caso de uso escrito dentro o debajo de ella. Las elipses representan funcionalidades que el sistema ofrece a sus usuarios, mientras que los actores (representados como figuras de palo) interactúan con estos casos de uso."
    },
    {
        id: 5702,
        moduloId: 507,
        pregunta: "¿Cuál de los siguientes es un síntoma de \"Feature Envy\"?",
        opciones: [
            "El método está declarado como estático",
            "El método contiene varias excepciones",
            "El método usa datos de otra clase más que de la suya",
            "El método está mal indentado"
        ],
        respuestaCorrecta: 2,
        explicacion: "\"Feature Envy\" (envidia de características) es un mal olor de código que ocurre cuando un método parece más interesado en una clase diferente a la suya propia. Se manifiesta cuando un método accede a los datos de otra clase más que a los de su propia clase. Este síntoma indica que quizás el método debería estar en la otra clase, ya que viola el principio de encapsulamiento y aumenta el acoplamiento entre clases. La solución típica es mover el método a la clase cuyos datos utiliza principalmente."
    },
    {
        id: 5703,
        moduloId: 507,
        pregunta: "¿Cuál de los siguientes representa un atributo de una clase con demasiadas responsabilidades?",
        opciones: [
            "Nombre corto",
            "Comentarios extensos",
            "Atributos privados",
            "Muchos métodos o atributos"
        ],
        respuestaCorrecta: 3,
        explicacion: "Una clase con demasiadas responsabilidades, también conocida como \"God Class\" o \"Blob\", típicamente tiene muchos métodos o atributos. Este es un claro síntoma de que la clase está haciendo demasiadas cosas y viola el principio de responsabilidad única (SRP), uno de los principios SOLID. Las clases con muchos métodos o atributos son difíciles de mantener, entender y probar. La solución habitual es dividir la clase en componentes más pequeños y cohesivos, cada uno con una única responsabilidad bien definida."
    },
    {
        id: 5704,
        moduloId: 507,
        pregunta: "¿Cuál es la finalidad de la documentación de pruebas en el ciclo de vida del software?",
        opciones: [
            "Prevenir problemas en la interfaz gráfica",
            "Ninguna de las anteriores",
            "Verificar que el software cumpla con los requisitos",
            "Mejorar el rendimiento del código"
        ],
        respuestaCorrecta: 2,
        explicacion: "La finalidad principal de la documentación de pruebas en el ciclo de vida del software es verificar que el software cumpla con los requisitos establecidos. Esta documentación describe los casos de prueba, procedimientos, datos de entrada, resultados esperados y criterios de aceptación que permiten evaluar si el software se comporta como se espera. Además, proporciona evidencia de que se han realizado las pruebas necesarias, facilita la repetibilidad de las pruebas, y ayuda a mantener la trazabilidad entre requisitos y su validación, aspectos esenciales para garantizar la calidad del software."
    },
    {
        id: 5705,
        moduloId: 507,
        pregunta: "¿Cuál es la principal ventaja de usar un lenguaje de alto nivel frente a uno de bajo nivel?",
        opciones: [
            "Mejor rendimiento sin compilación",
            "Mayor legibilidad y facilidad de mantenimiento",
            "Menor seguridad",
            "Mayor control sobre el hardware"
        ],
        respuestaCorrecta: 1,
        explicacion: "La principal ventaja de usar un lenguaje de alto nivel frente a uno de bajo nivel es la mayor legibilidad y facilidad de mantenimiento. Los lenguajes de alto nivel utilizan abstracciones más cercanas al pensamiento humano y alejadas de los detalles del hardware, lo que permite escribir código más claro, conciso y comprensible. Esto facilita el desarrollo, la depuración, la colaboración entre equipos y el mantenimiento a largo plazo del software, aumentando la productividad de los desarrolladores y reduciendo la probabilidad de errores, aunque generalmente a costa de cierto control sobre el hardware y potencialmente alguna pérdida de rendimiento."
    },
    {
        id: 5706,
        moduloId: 507,
        pregunta: "¿Cuál es la principal ventaja del modelo en cascada?",
        opciones: [
            "Buena para proyectos con requisitos bien definidos desde el inicio",
            "Permite iterar sobre los entregables",
            "Requiere poco feedback del cliente",
            "Flexibilidad para adaptarse a cambios"
        ],
        respuestaCorrecta: 0,
        explicacion: "La principal ventaja del modelo en cascada es que funciona bien para proyectos con requisitos bien definidos y estables desde el inicio. Este modelo secuencial y lineal proporciona una estructura clara y fácil de entender, con fases bien delimitadas y documentadas, donde cada fase debe completarse antes de pasar a la siguiente. Esto facilita la gestión, planificación y asignación de recursos, y resulta eficiente cuando los requisitos son precisos y no se esperan cambios significativos durante el desarrollo. Es particularmente adecuado para proyectos con restricciones regulatorias o de cumplimiento que requieren documentación exhaustiva."
    },
    {
        id: 5707,
        moduloId: 507,
        pregunta: "¿Cuál es una ventaja clave de usar un lenguaje de alto nivel frente a uno de bajo nivel?",
        opciones: [
            "Mejor compresión de los datos",
            "Más consumo de recursos",
            "Facilidad de escritura y mantenimiento del código",
            "Menor control sobre el hardware"
        ],
        respuestaCorrecta: 2,
        explicacion: "Una ventaja clave de usar un lenguaje de alto nivel frente a uno de bajo nivel es la facilidad de escritura y mantenimiento del código. Los lenguajes de alto nivel ofrecen abstracciones que ocultan la complejidad del hardware, utilizan sintaxis más cercana al lenguaje humano, y proporcionan estructuras de datos y control predefinidas. Esto permite a los desarrolladores expresar algoritmos de forma más natural, escribir menos líneas de código para lograr la misma funcionalidad, y crear programas más legibles y mantenibles. Aunque puede haber cierta pérdida de eficiencia y control del hardware, la ganancia en productividad y reducción de errores compensa ampliamente estas limitaciones."
    },
    {
        id: 5708,
        moduloId: 507,
        pregunta: "¿En qué fase del ciclo de vida del software se implementa el diseño del sistema mediante código?",
        opciones: [
            "Análisis de Requisitos",
            "Pruebas",
            "Implementación",
            "Mantenimiento"
        ],
        respuestaCorrecta: 2,
        explicacion: "En la fase de Implementación del ciclo de vida del software es donde se traduce el diseño del sistema en código ejecutable. Durante esta fase, los programadores escriben el código fuente basándose en las especificaciones de diseño elaboradas previamente, implementando las estructuras de datos, algoritmos, interfaces y componentes definidos en la fase de diseño. También incluye la compilación, depuración y optimización del código, así como la integración de los diferentes módulos o componentes del sistema para formar un producto de software completo y funcional que cumpla con los requisitos especificados."
    },
    {
        id: 5709,
        moduloId: 507,
        pregunta: "¿En qué fase del ciclo de vida del software se realizan ajustes a los requisitos, arquitectura y diseño?",
        opciones: [
            "Implementación",
            "Pruebas",
            "Mantenimiento",
            "Análisis"
        ],
        respuestaCorrecta: 2,
        explicacion: "En la fase de Mantenimiento del ciclo de vida del software se realizan ajustes a los requisitos, arquitectura y diseño del sistema. Esta fase ocurre después de que el software ha sido desplegado y está en uso. Durante el mantenimiento, se llevan a cabo diversas actividades como corrección de errores no detectados previamente (mantenimiento correctivo), adaptación a cambios en el entorno operativo o en los requisitos del negocio (mantenimiento adaptativo), y mejoras en la funcionalidad, rendimiento o calidad del software (mantenimiento perfectivo). Estos cambios pueden implicar modificaciones en cualquier nivel del sistema, desde pequeños ajustes en el código hasta revisiones significativas de la arquitectura."
    },
    {
        id: 5710,
        moduloId: 507,
        pregunta: "¿En qué tipo de proyectos es más adecuado el modelo iterativo?",
        opciones: [
            "Proyectos con un diseño final predefinido",
            "Proyectos con requisitos estables",
            "Proyectos con alta regulación o certificación",
            "Proyectos con requisitos cambiantes y evolutivos"
        ],
        respuestaCorrecta: 3,
        explicacion: "El modelo iterativo es más adecuado para proyectos con requisitos cambiantes y evolutivos. Este enfoque divide el desarrollo en ciclos o iteraciones más pequeñas, donde cada iteración incluye análisis, diseño, implementación y pruebas, produciendo una versión funcional pero incompleta del producto. Esto permite adaptar el software a medida que se clarifican o evolucionan los requisitos, incorporar retroalimentación temprana de los usuarios, detectar y corregir problemas antes de que se propaguen, y entregar valor de negocio de forma incremental. Es especialmente valioso en entornos donde los requisitos son difíciles de definir completamente al inicio o donde se espera que cambien durante el desarrollo."
    },
    {
        id: 5711,
        moduloId: 507,
        pregunta: "¿Por qué es importante documentar el software?",
        opciones: [
            "Acelera el desarrollo de software",
            "Facilita el mantenimiento y la colaboración",
            "Ninguna de las anteriores",
            "Garantiza la seguridad del código"
        ],
        respuestaCorrecta: 1,
        explicacion: "Documentar el software es importante principalmente porque facilita el mantenimiento y la colaboración entre desarrolladores. Una buena documentación proporciona información sobre la estructura, comportamiento, interfaces y decisiones de diseño del sistema, ayudando a nuevos miembros del equipo a comprender el código más rápidamente, facilitando la transferencia de conocimiento cuando hay rotación de personal, y simplificando las tareas de modificación o expansión del software. Además, la documentación sirve como referencia para usuarios y administradores, ayuda a preservar el conocimiento organizacional, y proporciona un contexto valioso para entender por qué el software fue diseñado de cierta manera, especialmente cuando se trabaja con código escrito por otros o hace tiempo."
    },
    {
        id: 5712,
        moduloId: 507,
        pregunta: "¿Por qué las máquinas virtuales son útiles en entornos de desarrollo?",
        opciones: [
            "Facilitan la replicación de entornos para distintos proyectos",
            "No consumen memoria",
            "No requieren pruebas",
            "El software se ejecuta más rápido"
        ],
        respuestaCorrecta: 0,
        explicacion: "Las máquinas virtuales son útiles en entornos de desarrollo porque facilitan la replicación de entornos consistentes para diferentes proyectos. Esto permite crear configuraciones estandarizadas que todos los desarrolladores pueden usar, eliminando el problema de \"funciona en mi máquina\". Las máquinas virtuales proporcionan aislamiento entre proyectos con diferentes requisitos o dependencias, permiten probar el software en diversos entornos sin necesidad de múltiples equipos físicos, facilitan la creación rápida de entornos para nuevos desarrolladores, y ofrecen un espacio seguro para experimentar sin arriesgar el sistema principal. Esta consistencia y aislamiento mejora la productividad y reduce problemas de compatibilidad."
    },
    {
        id: 5713,
        moduloId: 507,
        pregunta: "¿Por qué se recomienda dividir las responsabilidades de una clase en componentes más pequeños?",
        opciones: [
            "Evita escribir comentarios detallados",
            "Facilita la reutilización del código",
            "Automatiza todo el proceso de pruebas",
            "Reduce la cantidad de casos necesarios en pruebas"
        ],
        respuestaCorrecta: 1,
        explicacion: "Se recomienda dividir las responsabilidades de una clase en componentes más pequeños principalmente porque facilita la reutilización del código. Cuando una clase tiene una única responsabilidad bien definida (siguiendo el Principio de Responsabilidad Única), es más probable que pueda ser reutilizada en diferentes contextos. Además, las clases con responsabilidades específicas son más fáciles de entender, mantener y probar, tienen menos dependencias, son menos propensas a errores, y permiten un desarrollo más modular y paralelo. Este enfoque promueve la alta cohesión y el bajo acoplamiento, dos características deseables en el diseño orientado a objetos."
    },
    {
        id: 5714,
        moduloId: 507,
        pregunta: "¿Qué característica define el modelo ágil?",
        opciones: [
            "Fases secuenciales y bien definidas",
            "Equipos multifuncionales y trabajo colaborativo",
            "Enfoque en documentación exhaustiva",
            "Requisitos fijos desde el inicio"
        ],
        respuestaCorrecta: 1,
        explicacion: "Una característica fundamental que define el modelo ágil es el uso de equipos multifuncionales y trabajo colaborativo. En las metodologías ágiles, los equipos están compuestos por personas con diferentes habilidades (desarrolladores, testers, analistas, etc.) que trabajan juntos a lo largo de todo el proyecto, colaborando estrechamente con el cliente y entre sí. Este enfoque favorece la comunicación directa, la retroalimentación continua, la adaptabilidad a cambios, y la entrega incremental de valor. A diferencia de enfoques más tradicionales que pueden segmentar el trabajo por roles o fases, el modelo ágil enfatiza la colaboración interdisciplinaria y la responsabilidad compartida sobre la calidad y el éxito del producto."
    },
    {
        id: 5715,
        moduloId: 507,
        pregunta: "¿Qué caracteriza a la metodología ágil Scrum respecto a la priorización de requisitos?",
        opciones: [
            "El equipo de desarrollo define las prioridades",
            "Es responsabilidad del Product Owner",
            "Es responsabilidad del Scrum Master",
            "No existe backlog en Scrum"
        ],
        respuestaCorrecta: 1,
        explicacion: "En la metodología ágil Scrum, la priorización de requisitos es responsabilidad exclusiva del Product Owner. Este rol tiene la autoridad y responsabilidad de gestionar el Product Backlog, que es una lista ordenada de todas las características, mejoras y correcciones que constituyen el trabajo a realizar en el producto. El Product Owner prioriza los ítems del backlog basándose en el valor de negocio, riesgo, dependencias y otros factores, asegurando que el equipo trabaje siempre en lo más valioso para los stakeholders. Aunque el equipo de desarrollo y el Scrum Master pueden proporcionar información técnica y facilitar el proceso, la decisión final sobre las prioridades recae en el Product Owner como representante de los intereses del cliente y del negocio."
    },
    {
        id: 5716,
        moduloId: 507,
        pregunta: "¿Qué caracteriza a una prueba funcional o de caja negra?",
        opciones: [
            "Depende de los valores esperados de las variables",
            "Se prueba el sistema sin conocer su estructura interna",
            "Se enfoca en la estructura interna del sistema",
            "Analiza el rendimiento del sistema"
        ],
        respuestaCorrecta: 1,
        explicacion: "Lo que caracteriza a una prueba funcional o de caja negra es que se prueba el sistema sin conocer su estructura interna. Este enfoque evalúa el comportamiento del software desde la perspectiva del usuario final, verificando que el sistema produzca los resultados esperados para determinadas entradas sin considerar cómo se implementan las funcionalidades internamente. Las pruebas de caja negra se centran en los requisitos funcionales, interfaces y resultados visibles del sistema, tratándolo como una \"caja negra\" cuyo contenido es desconocido. Estas pruebas son útiles para detectar errores de interfaz, comportamiento incorrecto o inconsistente, y discrepancias respecto a los requisitos especificados o las expectativas del usuario."
    },
    {
        id: 5717,
        moduloId: 507,
        pregunta: "¿Qué comando de Git permite subir los cambios locales al repositorio remoto?",
        opciones: [
            "git deploy",
            "git push",
            "git upload",
            "git export"
        ],
        respuestaCorrecta: 1,
        explicacion: "El comando 'git push' se utiliza para enviar los cambios confirmados (commits) desde el repositorio local al repositorio remoto. Este comando actualiza las ramas remotas con los commits locales, permitiendo compartir el trabajo con otros colaboradores del proyecto. Para funcionar correctamente, primero se deben haber añadido los cambios al área de preparación con 'git add' y confirmado con 'git commit'. Si existen conflictos entre los cambios locales y remotos, Git solicitará resolver estos conflictos antes de completar la operación."
    },
    {
        id: 5718,
        moduloId: 507,
        pregunta: "¿Qué comando en Git Bash verifica si la conexión SSH con GitHub es correcta?",
        opciones: [
            "git --check ssh",
            "git test ssh",
            "ssh -T git@github.com",
            "ssh git@github.com"
        ],
        respuestaCorrecta: 2,
        explicacion: "El comando 'ssh -T git@github.com' se utiliza en Git Bash para verificar si la conexión SSH con GitHub está configurada correctamente. Al ejecutar este comando, se intenta establecer una conexión SSH con los servidores de GitHub, y si la autenticación es exitosa, GitHub responderá con un mensaje de bienvenida que incluye tu nombre de usuario. Esta prueba confirma que las claves SSH están correctamente configuradas y que puedes autenticarte en GitHub sin usar contraseña. Es un paso importante al configurar Git para trabajar con repositorios remotos en GitHub mediante SSH, especialmente después de generar y añadir una nueva clave SSH a tu cuenta de GitHub."
    },
    {
        id: 5719,
        moduloId: 507,
        pregunta: "¿Qué comando en Git permite configurar el nombre de usuario global?",
        opciones: [
            "git init user.name",
            "git config user.name",
            "git config --global user.name",
            "git name set"
        ],
        respuestaCorrecta: 2,
        explicacion: "El comando 'git config --global user.name' se utiliza para configurar el nombre de usuario global en Git. Al añadir un nombre después del comando (por ejemplo, 'git config --global user.name \"John Doe\"'), se establece ese nombre como la identidad del autor para todos los repositorios Git en el sistema del usuario actual. La configuración global se almacena en el archivo ~/.gitconfig y se aplica a todas las operaciones Git a menos que se sobrescriba con configuraciones específicas del repositorio. Configurar el nombre de usuario es un paso esencial después de instalar Git, ya que esta información se incluye en cada commit realizado."
    },
    {
        id: 5720,
        moduloId: 507,
        pregunta: "¿Qué comando permite configurar el nombre de usuario global en Git?",
        opciones: [
            "git init user.name",
            "git config --global user.name",
            "git config user.name",
            "git name set"
        ],
        respuestaCorrecta: 1,
        explicacion: "El comando 'git config --global user.name' seguido del nombre deseado entre comillas se utiliza para configurar el nombre de usuario global en Git. Esta configuración establece la identidad que se asociará con todos los commits realizados en cualquier repositorio del sistema, a menos que se sobrescriba con una configuración local. La opción '--global' indica que la configuración debe aplicarse a nivel de usuario en todos los repositorios, en lugar de limitarse a un repositorio específico. Este es uno de los primeros comandos que se deben ejecutar después de instalar Git, junto con 'git config --global user.email' para establecer el correo electrónico asociado a los commits."
    },
    {
        id: 5721,
        moduloId: 507,
        pregunta: "¿Qué desventaja presenta el modelo en cascada en proyectos con requisitos cambiantes?",
        opciones: [
            "No necesita pruebas",
            "No requiere documentación",
            "Tiene poca capacidad de adaptación",
            "Es demasiado flexible"
        ],
        respuestaCorrecta: 2,
        explicacion: "La principal desventaja del modelo en cascada en proyectos con requisitos cambiantes es su poca capacidad de adaptación. Este modelo secuencial y lineal asume que los requisitos son estables y pueden definirse completamente desde el inicio, con fases que se completan una tras otra sin retroceder. Cuando los requisitos cambian durante el desarrollo (algo común en muchos proyectos), el modelo en cascada dificulta incorporar estos cambios, especialmente si se descubren en fases avanzadas. Esto puede llevar a sistemas que no satisfacen las necesidades actuales del usuario, retrasos significativos, sobrecostes, o incluso al fracaso del proyecto si los cambios son sustanciales y no pueden acomodarse dentro de la estructura rígida del modelo."
    },
    {
        id: 5722,
        moduloId: 507,
        pregunta: "¿Qué diferencia a la agregación de la composición?",
        opciones: [
            "En la agregación no hay relación de pertenencia",
            "En la composición, la vida del contenido depende del contenedor",
            "En la composición los objetos existen de forma independiente",
            "No existe diferencia real"
        ],
        respuestaCorrecta: 1,
        explicacion: "La principal diferencia entre agregación y composición es que en la composición, la vida del contenido depende completamente del contenedor. Ambos son tipos de asociación todo-parte en UML, pero con diferentes grados de acoplamiento. En la composición, los objetos contenidos son parte integral del contenedor y se destruyen cuando éste se destruye, indicando una relación fuerte y de propiedad exclusiva (representada con un diamante negro). En cambio, en la agregación (representada con un diamante blanco), los objetos pueden existir independientemente del contenedor y potencialmente pertenecer a múltiples contenedores, indicando una relación más débil donde el contenedor no tiene control total sobre el ciclo de vida del contenido."
    },
    {
        id: 5723,
        moduloId: 507,
        pregunta: "¿Qué documento se elabora durante el análisis de requisitos?",
        opciones: [
            "Plan de pruebas",
            "Especificación funcional",
            "Manual de usuario",
            "Informe de validación"
        ],
        respuestaCorrecta: 1,
        explicacion: "Durante la fase de análisis de requisitos se elabora la especificación funcional. Este documento detalla de manera precisa y completa lo que el sistema debe hacer (requisitos funcionales) y cómo debe hacerlo (requisitos no funcionales). La especificación funcional traduce las necesidades del usuario en requisitos técnicos que guiarán el diseño y desarrollo del software, sirviendo como contrato entre los stakeholders y el equipo de desarrollo. Incluye descripciones detalladas de las funcionalidades requeridas, restricciones, interfaces, comportamientos esperados, criterios de aceptación y relaciones entre componentes, proporcionando una base clara para las fases posteriores y un punto de referencia para verificar que el sistema final cumple con las expectativas."
    },
    {
        id: 5724,
        moduloId: 507,
        pregunta: "¿Qué elemento garantiza la trazabilidad entre requisitos y casos de prueba?",
        opciones: [
            "El backlog",
            "El cronograma de entregas",
            "La documentación estructurada del proyecto",
            "El entorno de desarrollo"
        ],
        respuestaCorrecta: 2,
        explicacion: "La documentación estructurada del proyecto es el elemento que garantiza la trazabilidad entre requisitos y casos de prueba. Esta documentación incluye matrices de trazabilidad, referencias cruzadas, identificadores únicos y vínculos explícitos que relacionan cada requisito con los casos de prueba correspondientes y viceversa. Una documentación bien estructurada permite verificar que todos los requisitos están cubiertos por pruebas, entender el impacto de cambios en los requisitos sobre las pruebas necesarias, y proporcionar evidencia de que el software ha sido verificado adecuadamente. Además, facilita la gestión de cambios, el análisis de impacto y el mantenimiento del sistema a lo largo de su ciclo de vida."
    },
    {
        id: 5725,
        moduloId: 507,
        pregunta: "¿Qué fase del ciclo de vida del software está encargada de poner el sistema en producción?",
        opciones: [
            "Mantenimiento",
            "Pruebas",
            "Implementación",
            "Diseño"
        ],
        respuestaCorrecta: 2,
        explicacion: "La fase de implementación en el ciclo de vida del software es la encargada de poner el sistema en producción. Esta fase incluye no solo la codificación del software, sino también su despliegue en el entorno operativo final donde será utilizado por los usuarios reales. Durante la implementación, se realizan actividades como la instalación del software en servidores de producción, la migración de datos si es necesaria, la configuración del entorno, la integración con otros sistemas existentes, las pruebas finales en el entorno de producción, y la transición del control operativo al equipo de soporte y mantenimiento. También puede incluir capacitación a usuarios y la puesta en marcha gradual o completa del sistema."
    },
    {
        id: 5726,
        moduloId: 507,
        pregunta: "¿Qué fase del ciclo de vida del software se encarga de identificar y documentar los requisitos?",
        opciones: [
            "Análisis",
            "Diseño",
            "Implementación",
            "Análisis de requisitos"
        ],
        respuestaCorrecta: 3,
        explicacion: "La fase de análisis de requisitos en el ciclo de vida del software se encarga específicamente de identificar y documentar los requisitos del sistema. Durante esta fase, los analistas trabajan con los stakeholders para capturar, clarificar y priorizar las necesidades y expectativas que el software debe satisfacer. Se utilizan diversas técnicas como entrevistas, encuestas, observación, talleres y análisis de documentos existentes para recopilar información. Los requisitos se documentan en especificaciones formales que describen el qué (requisitos funcionales) y el cómo (requisitos no funcionales) del sistema, estableciendo una base clara para el diseño y desarrollo posterior, y un punto de referencia para la validación final."
    },
    {
        id: 5727,
        moduloId: 507,
        pregunta: "¿Qué fase del ciclo de vida del software se enfoca en asegurar que las funcionalidades clave del sistema funcionen correctamente?",
        opciones: [
            "Implementación",
            "Pruebas funcionales",
            "Diseño",
            "Mantenimiento"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las pruebas funcionales son la fase del ciclo de vida del software que se enfoca específicamente en asegurar que las funcionalidades clave del sistema funcionen correctamente. Estas pruebas verifican que el software cumpla con los requisitos funcionales especificados, evaluando el comportamiento del sistema desde la perspectiva del usuario final. Se concentran en verificar las entradas, salidas y resultados esperados de cada función, sin preocuparse por cómo está implementada internamente. Las pruebas funcionales validan que el sistema haga lo que debe hacer, comprobando cada funcionalidad contra sus especificaciones y asegurando que el software satisface las necesidades para las que fue creado."
    },
    {
        id: 5728,
        moduloId: 507,
        pregunta: "¿Qué función tiene el hipervisor en un entorno de virtualización?",
        opciones: [
            "Administrar y aislar máquinas virtuales sobre el hardware físico",
            "Traducir código de alto nivel",
            "Compilar el kernel",
            "Gestionar el diseño del sistema"
        ],
        respuestaCorrecta: 0,
        explicacion: "El hipervisor tiene la función de administrar y aislar máquinas virtuales sobre el hardware físico en un entorno de virtualización. Actúa como una capa de abstracción entre el hardware físico y los sistemas operativos virtualizados, permitiendo que múltiples máquinas virtuales compartan los recursos físicos de manera eficiente y segura. El hipervisor controla la asignación de recursos como CPU, memoria y dispositivos de E/S a cada máquina virtual, garantiza el aislamiento entre ellas para evitar interferencias, y gestiona su ciclo de vida (creación, ejecución, suspensión, reinicio). Existen dos tipos principales: hipervisores tipo 1 (bare-metal) que se ejecutan directamente sobre el hardware, e hipervisores tipo 2 que funcionan sobre un sistema operativo anfitrión."
    },
    {
        id: 5729,
        moduloId: 507,
        pregunta: "¿Qué herramienta gráfica permite trabajar con ramas y commits en Git sin usar terminal?",
        opciones: [
            "Git GUI",
            "Git Manual",
            "GitHub CLI",
            "Git Script"
        ],
        respuestaCorrecta: 0,
        explicacion: "Git GUI es una herramienta gráfica oficial incluida con Git que permite trabajar con ramas y commits sin necesidad de usar la línea de comandos. Proporciona una interfaz visual para realizar operaciones comunes como crear commits, trabajar con ramas, ver el historial de cambios y gestionar repositorios. Aunque Git GUI tiene una interfaz relativamente básica, es suficiente para la mayoría de las tareas diarias de Git. Existen otras alternativas más sofisticadas como GitKraken, SourceTree o GitHub Desktop que ofrecen interfaces más modernas y funciones avanzadas, pero Git GUI tiene la ventaja de estar incluido en la instalación estándar de Git, haciéndolo inmediatamente disponible."
    },
    {
        id: 5730,
        moduloId: 507,
        pregunta: "¿Qué IDE es más utilizado para desarrollar aplicaciones empresariales en Java?",
        opciones: [
            "Eclipse",
            "Visual Studio",
            "Android Studio",
            "PyCharm"
        ],
        respuestaCorrecta: 0,
        explicacion: "Eclipse es uno de los IDEs más utilizados para desarrollar aplicaciones empresariales en Java. Con su naturaleza de código abierto, amplia comunidad y ecosistema de plugins extensible, Eclipse proporciona un entorno completo para el desarrollo Java empresarial. Incluye herramientas específicas como Java EE Tools que facilitan el desarrollo de aplicaciones web, servicios REST, EJBs y aplicaciones distribuidas. Su integración con servidores de aplicaciones como Tomcat, JBoss o WebSphere, soporte para frameworks empresariales como Spring, Hibernate y JSF, y herramientas de gestión de dependencias como Maven, hacen de Eclipse una opción robusta para el desarrollo Java en entornos corporativos."
    },
    {
        id: 5731,
        moduloId: 507,
        pregunta: "¿Qué indica la presencia de muchos condicionales y bucles anidados en un método?",
        opciones: [
            "Modularidad",
            "Alta cohesión",
            "Complejidad ciclomática elevada",
            "Bajo acoplamiento"
        ],
        respuestaCorrecta: 2,
        explicacion: "La presencia de muchos condicionales y bucles anidados en un método indica una complejidad ciclomática elevada. La complejidad ciclomática es una métrica que mide el número de caminos independientes a través del código, calculada contando el número de decisiones (condicionales, bucles) más uno. Un valor alto sugiere código difícil de entender, probar y mantener, con mayor propensión a errores. Métodos con alta complejidad ciclomática a menudo violan el principio de responsabilidad única haciendo demasiadas cosas. La refactorización recomendada incluye dividir el método en partes más pequeñas y cohesivas, extraer bloques en métodos separados, simplificar lógica condicional, o utilizar patrones de diseño como Strategy o State para manejar comportamientos variables."
    },
    {
        id: 5732,
        moduloId: 507,
        pregunta: "¿Qué permite determinar la complejidad ciclomática de una función?",
        opciones: [
            "El número de clases",
            "El número de comentarios por línea",
            "La cantidad de decisiones y bifurcaciones que contiene el flujo del código",
            "El número de variables locales"
        ],
        respuestaCorrecta: 2,
        explicacion: "La complejidad ciclomática de una función se determina mediante la cantidad de decisiones y bifurcaciones que contiene el flujo del código. Desarrollada por Thomas McCabe en 1976, esta métrica cuantifica el número de caminos independientes a través de un programa, calculándose como el número de condiciones o decisiones (if, switch, for, while, do-while, etc.) más uno. Un valor alto indica código más complejo, difícil de entender, probar y mantener. La complejidad ciclomática ayuda a identificar funciones que podrían beneficiarse de refactorización, y es útil para estimar el esfuerzo de pruebas, ya que indica el número mínimo de casos de prueba necesarios para cubrir todos los caminos posibles de ejecución."
    },
    {
        id: 5733,
        moduloId: 507,
        pregunta: "¿Qué problema representa la \"Intimidad inapropiada\" en el código?",
        opciones: [
            "Exceso de clases abstractas",
            "Uso excesivo de variables globales",
            "Un método accede demasiado a datos de otra clase",
            "Uso incorrecto de bucles"
        ],
        respuestaCorrecta: 2,
        explicacion: "La \"Intimidad inapropiada\" (Inappropriate Intimacy) es un mal olor de código que ocurre cuando un método accede demasiado a los datos de otra clase, violando el encapsulamiento. Este problema se presenta cuando dos clases están excesivamente acopladas, conociendo y dependiendo demasiado de los detalles internos de la otra. Esto genera código frágil y difícil de mantener, ya que cambios en una clase pueden afectar inadvertidamente a la otra. La solución típica incluye técnicas de refactorización como \"Move Method\" o \"Move Field\" para redistribuir responsabilidades, o aplicar el patrón \"Mediator\" para reducir las comunicaciones directas entre las clases, preservando así los principios de encapsulamiento y bajo acoplamiento."
    },
    {
        id: 5734,
        moduloId: 507,
        pregunta: "¿Qué representa una entrada fuera del rango permitido en una clase de equivalencia?",
        opciones: [
            "Una partición inválida",
            "Un dato opcional",
            "Un valor duplicado",
            "Una entrada crítica"
        ],
        respuestaCorrecta: 0,
        explicacion: "Una entrada fuera del rango permitido en una clase de equivalencia representa una partición inválida. En el contexto de pruebas de software, las clases de equivalencia dividen los datos de entrada en grupos o particiones donde se espera que los valores dentro de cada grupo se comporten de manera similar. Las particiones inválidas contienen valores que están fuera de los rangos aceptables y que el sistema debería rechazar o manejar como casos de error. Probar con valores de estas particiones inválidas es crucial para verificar que el software responde correctamente ante entradas incorrectas, valida adecuadamente los datos, y maneja las excepciones de forma apropiada, contribuyendo así a la robustez general del sistema."
    },
    {
        id: 5735,
        moduloId: 507,
        pregunta: "¿Qué técnica permite agrupar entradas de prueba válidas en subconjuntos que representen clases?",
        opciones: [
            "Análisis de regresión",
            "Técnicas de refactorización",
            "Clases de equivalencia",
            "Pruebas unitarias"
        ],
        respuestaCorrecta: 2,
        explicacion: "La técnica de clases de equivalencia permite agrupar entradas de prueba válidas en subconjuntos o clases representativas. Este enfoque se basa en la premisa de que dentro de cada clase, todos los valores se comportarán de manera similar, por lo que probar un solo valor representativo de cada clase es suficiente para validar el comportamiento con todos los valores de esa clase. Esta técnica optimiza el proceso de pruebas al reducir significativamente el número de casos de prueba necesarios sin comprometer la cobertura efectiva. El proceso implica identificar rangos o categorías de entradas válidas e inválidas, dividirlas en clases, y seleccionar casos de prueba que cubran cada clase al menos una vez, permitiendo una estrategia de pruebas sistemática y eficiente."
    },
    {
        id: 5736,
        moduloId: 507,
        pregunta: "¿Qué técnica permite detectar automáticamente \"malos olores\" en el código?",
        opciones: [
            "Pruebas funcionales",
            "Uso de herramientas de análisis estático",
            "Compilar frecuentemente",
            "Documentación extensa"
        ],
        respuestaCorrecta: 1,
        explicacion: "El uso de herramientas de análisis estático es la técnica que permite detectar automáticamente \"malos olores\" en el código. Estas herramientas examinan el código fuente sin ejecutarlo, identificando patrones problemáticos, violaciones de estándares de codificación, complejidad excesiva, duplicación de código, y otros indicadores de posibles problemas de diseño o implementación. Herramientas como SonarQube, ESLint, PMD, FindBugs o Checkstyle pueden analizar grandes bases de código rápidamente, proporcionando informes detallados de áreas problemáticas que podrían beneficiarse de refactorización. Al integrarse en el proceso de desarrollo continuo, estas herramientas ayudan a mantener y mejorar la calidad del código sistemáticamente, facilitando la detección temprana de problemas antes de que se conviertan en deuda técnica significativa."
    },
    {
        id: 5737,
        moduloId: 507,
        pregunta: "¿Qué técnica se usa para agrupar entradas de prueba válidas en clases representativas?",
        opciones: [
            "Análisis de regresión",
            "Pruebas unitarias",
            "Refactorización de código",
            "Clases de equivalencia"
        ],
        respuestaCorrecta: 3,
        explicacion: "La técnica de clases de equivalencia se usa para agrupar entradas de prueba válidas en clases representativas. Esta estrategia divide el dominio de entrada en grupos o clases donde los elementos de cada clase se comportan de manera similar y deberían producir los mismos resultados. La idea fundamental es que probar un valor representativo de cada clase es suficiente para verificar el comportamiento con todos los valores de esa clase, reduciendo así significativamente el número de casos de prueba necesarios. Esta técnica identifica tanto clases válidas (valores que el sistema debe aceptar) como inválidas (valores que el sistema debe rechazar), permitiendo diseñar conjuntos de pruebas sistemáticos, eficientes y con buena cobertura."
    },
    {
        id: 5738,
        moduloId: 507,
        pregunta: "¿Qué tipo de máquina virtual ejecuta un sistema operativo completo de manera aislada?",
        opciones: [
            "Máquina virtual de hardware",
            "Microkernel",
            "Contenedor",
            "Máquina virtual de proceso"
        ],
        respuestaCorrecta: 0,
        explicacion: "Una máquina virtual de hardware (también conocida como máquina virtual de sistema o hipervisor de tipo 1/2) es la que ejecuta un sistema operativo completo de manera aislada. Este tipo de virtualización emula el hardware físico completo (CPU, memoria, dispositivos de entrada/salida, etc.), permitiendo que sistemas operativos invitados se ejecuten sin modificaciones, creyendo que tienen acceso exclusivo al hardware. Cada máquina virtual funciona como un sistema independiente con su propio sistema operativo, bibliotecas y aplicaciones, completamente aislado de otras máquinas virtuales. Ejemplos incluyen VMware, VirtualBox, Hyper-V o KVM. A diferencia de los contenedores que comparten el sistema operativo del host, las máquinas virtuales de hardware proporcionan mayor aislamiento pero con mayor sobrecarga de recursos."
    },
    {
        id: 5739,
        moduloId: 507,
        pregunta: "¿Qué tipo de relación indica que una clase utiliza temporalmente otra sin poseerla en UML?",
        opciones: [
            "Composición",
            "Dependencia",
            "Asociación",
            "Agregación"
        ],
        respuestaCorrecta: 1,
        explicacion: "En UML, una relación de dependencia indica que una clase utiliza temporalmente otra sin poseerla. Este tipo de relación se representa con una flecha discontinua desde la clase dependiente hacia la clase de la que depende. La dependencia es la forma más débil de relación entre clases, indicando que una clase utiliza o depende de otra pero solo de manera transitoria, como cuando se usa como parámetro en un método, como tipo de retorno, o se crea localmente dentro de una operación. A diferencia de la asociación, agregación o composición, no implica que la clase dependiente mantenga una referencia permanente a la otra clase. Las dependencias son importantes para entender cómo cambios en una clase pueden afectar a otras que la utilizan."
    },
    {
        id: 5740,
        moduloId: 507,
        pregunta: "En el ciclo de vida del software, ¿qué fase se encarga de realizar pruebas para asegurar que los módulos interactúan correctamente?",
        opciones: [
            "Implementación",
            "Diseño",
            "Pruebas de integración",
            "Análisis"
        ],
        respuestaCorrecta: 2,
        explicacion: "En el ciclo de vida del software, la fase de pruebas de integración se encarga específicamente de asegurar que los módulos interactúan correctamente entre sí. Mientras que las pruebas unitarias verifican el funcionamiento individual de cada componente de forma aislada, las pruebas de integración evalúan las interfaces y la comunicación entre estos componentes una vez unidos. Estas pruebas detectan problemas que no son evidentes a nivel unitario, como incompatibilidades de interfaces, errores en la transferencia de datos, y fallos en la cooperación entre módulos. Pueden realizarse siguiendo diferentes estrategias como integración incremental (top-down, bottom-up) o big-bang, y son fundamentales para garantizar que el sistema funciona correctamente como un todo antes de proceder a pruebas de sistema más completas."
    }
]
};

export default moduloSimulacroDosEntornos;