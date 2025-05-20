/**
* Datos del módulo de Simulacro 3 perteneciente a la asignatura de Entornos de Desarrollo.
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
export const moduloSimulacroTresEntornos = {
id: 508,
nombre: "Simulacro 3 de Examen (19/05/2025)",
esExamen: true,
asignaturaId: 5,
descripcion: "Simulacro de examen que abarca UML, entornos de desarrollo, control de versiones, pruebas y mantenimiento de software.",
preguntas: [
    {
        id: 5801,
        moduloId: 508,
        pregunta: "¿Qué permite determinar la complejidad ciclomática de una función?",
        opciones: [
            "La cantidad de funciones llamadas",
            "El número de caminos independientes en el flujo",
            "El número de entradas del usuario",
            "El número de líneas de código"
        ],
        respuestaCorrecta: 1,
        explicacion: "La complejidad ciclomática de una función determina el número de caminos independientes en el flujo de ejecución del código. Desarrollada por Thomas McCabe en 1976, esta métrica mide la complejidad estructural de un programa calculando el número de decisiones lógicas independientes que contiene. En términos prácticos, se calcula como el número de condiciones (if, case, while, for, etc.) más uno. Un valor alto indica código más complejo y potencialmente más difícil de mantener, probar y comprender. Esta métrica es especialmente útil para identificar componentes que podrían beneficiarse de refactorización y para estimar el esfuerzo necesario en las pruebas unitarias."
    },
    {
        id: 5802,
        moduloId: 508,
        pregunta: "¿Cuál es el principal objetivo del mantenimiento perfectivo en el software?",
        opciones: [
            "Mejorar o ampliar funcionalidades",
            "Adaptar el sistema a nuevos entornos",
            "Corregir errores detectados",
            "Reducir el consumo energético del sistema"
        ],
        respuestaCorrecta: 0,
        explicacion: "El principal objetivo del mantenimiento perfectivo en el software es mejorar o ampliar las funcionalidades del sistema. A diferencia del mantenimiento correctivo (que se enfoca en reparar errores) o el adaptativo (que busca ajustar el software a cambios en el entorno), el mantenimiento perfectivo se realiza cuando el sistema funciona correctamente pero se desea optimizarlo o añadir nuevas características para aumentar su rendimiento, usabilidad o utilidad. Este tipo de mantenimiento responde a solicitudes de mejora de los usuarios, cambios en los requisitos del negocio o iniciativas para mantener el software competitivo. Es una inversión proactiva que busca agregar valor al sistema existente en lugar de simplemente mantenerlo operativo."
    },
    {
        id: 5803,
        moduloId: 508,
        pregunta: "En el ciclo de vida del software, ¿qué fase se encarga de realizar pruebas para asegurar que los módulos interactúan correctamente?",
        opciones: [
            "Pruebas de aceptación",
            "Pruebas unitarias",
            "Pruebas de validación",
            "Pruebas de integración"
        ],
        respuestaCorrecta: 3,
        explicacion: "Las pruebas de integración son la fase específica del ciclo de vida del software que se encarga de verificar que los módulos o componentes interactúan correctamente entre sí. Mientras las pruebas unitarias evalúan cada módulo de forma aislada, las pruebas de integración examinan cómo estos módulos trabajan juntos una vez combinados. Estas pruebas detectan problemas en las interfaces, la comunicación y la transferencia de datos entre componentes, así como posibles conflictos o efectos secundarios que no son evidentes cuando se prueba cada módulo por separado. Las pruebas de integración pueden seguir diferentes estrategias (incremental, descendente, ascendente o big-bang) y son cruciales para garantizar que el sistema funcione como un todo coherente antes de pasar a las pruebas de sistema."
    },
    {
        id: 5804,
        moduloId: 508,
        pregunta: "¿Qué característica distingue a una prueba de sistema?",
        opciones: [
            "Prueba el rendimiento del hardware",
            "Evalúa la interacción con la base de datos",
            "Se enfoca en unidades individuales",
            "Valida el sistema como un todo"
        ],
        respuestaCorrecta: 3,
        explicacion: "La característica que distingue a una prueba de sistema es que valida el sistema como un todo integrado. A diferencia de las pruebas unitarias (que verifican componentes individuales) o las pruebas de integración (que verifican la interacción entre componentes específicos), las pruebas de sistema evalúan el comportamiento completo del sistema en un entorno lo más cercano posible al de producción. Estas pruebas verifican que el software cumple con todos los requisitos funcionales y no funcionales especificados, y que todos los componentes trabajan juntos correctamente desde la perspectiva del usuario final. Las pruebas de sistema incluyen pruebas funcionales, de rendimiento, de carga, de seguridad, de usabilidad y de recuperación, proporcionando una visión holística de la calidad del sistema antes de su despliegue."
    },
    {
        id: 5805,
        moduloId: 508,
        pregunta: "¿Qué técnica permite agrupar entradas de prueba válidas en subconjuntos que representen clases?",
        opciones: [
            "Diseño de casos de uso",
            "Partición de clases de equivalencia",
            "Pruebas de regresión",
            "Análisis de valores límite"
        ],
        respuestaCorrecta: 1,
        explicacion: "La partición de clases de equivalencia es la técnica que permite agrupar entradas de prueba válidas en subconjuntos o clases representativas. Esta técnica se basa en el principio de que dentro de cada clase, el comportamiento del sistema debería ser similar para todos los valores, por lo que probar un solo valor de cada clase es suficiente para verificar el funcionamiento con todos los valores de esa clase. El proceso implica dividir el dominio de entrada en clases válidas e inválidas, donde cada clase representa un conjunto de datos que el sistema debería tratar de manera uniforme. Esta estrategia optimiza significativamente el proceso de pruebas, reduciendo el número de casos necesarios sin sacrificar la cobertura efectiva, lo que permite diseñar conjuntos de pruebas más eficientes y manejables."
    },
    {
        id: 5806,
        moduloId: 508,
        pregunta: "¿Cómo se representa un caso de uso en UML?",
        opciones: [
            "Rectángulo",
            "Rombo",
            "Elipse u óvalo",
            "Rayo"
        ],
        respuestaCorrecta: 2,
        explicacion: "En UML (Unified Modeling Language), un caso de uso se representa gráficamente mediante una elipse u óvalo. Esta representación visual encapsula una funcionalidad o servicio completo que el sistema ofrece a sus usuarios. Dentro o debajo de la elipse se escribe el nombre del caso de uso, que describe brevemente la acción o el objetivo. Los casos de uso se conectan con los actores (representados como figuras de palo) que interactúan con ellos mediante líneas simples. La representación mediante elipses facilita la comprensión de los requisitos funcionales del sistema desde la perspectiva del usuario, ayudando a identificar y comunicar qué hace el sistema sin entrar en detalles de cómo lo hace internamente."
    },
    {
        id: 5807,
        moduloId: 508,
        pregunta: "¿Qué tipo de relación UML indica que una clase utiliza otra de forma temporal sin necesidad de poseerla?",
        opciones: [
            "Agregación",
            "Composición",
            "Dependencia",
            "Herencia"
        ],
        respuestaCorrecta: 2,
        explicacion: "La relación de dependencia en UML indica que una clase utiliza otra de forma temporal sin necesidad de poseerla. Se representa gráficamente mediante una flecha discontinua desde la clase dependiente hacia la clase de la que depende. Esta es la relación más débil entre clases, sugiriendo que una clase utiliza servicios de otra en un contexto específico y transitorio, como cuando se usa como parámetro de un método, tipo de retorno, o se crea temporalmente dentro de una operación. A diferencia de asociaciones más fuertes como agregación o composición, la dependencia no implica que la clase dependiente mantenga una referencia persistente a la otra. Reconocer y documentar estas dependencias es crucial para entender cómo los cambios en una clase pueden afectar a otras partes del sistema."
    },
    {
        id: 5808,
        moduloId: 508,
        pregunta: "¿Cuál de los siguientes elementos suele formar parte de un entorno de desarrollo integrado (IDE)?",
        opciones: [
            "Panel de configuración de hardware",
            "Sistema de arranque",
            "Editor de código, compilador y depurador",
            "Consola de administración de red"
        ],
        respuestaCorrecta: 2,
        explicacion: "Un entorno de desarrollo integrado (IDE) típicamente incluye como elementos fundamentales un editor de código, un compilador y un depurador. Estos componentes esenciales permiten escribir código de manera eficiente con funciones como resaltado de sintaxis y autocompletado (editor), traducir el código fuente a código ejecutable (compilador), y encontrar y corregir errores mediante la ejecución controlada del programa (depurador). Además de estos elementos centrales, los IDEs modernos suelen incorporar otras herramientas como control de versiones, refactorización automatizada, analizadores estáticos de código, diseñadores visuales, y gestores de paquetes, todos integrados en una interfaz única y coherente para facilitar el flujo de trabajo del desarrollador y aumentar su productividad."
    },
    {
        id: 5809,
        moduloId: 508,
        pregunta: "¿Cuál de los siguientes lenguajes es típicamente considerado de bajo nivel?",
        opciones: [
            "Python",
            "C",
            "Java",
            "Kotlin"
        ],
        respuestaCorrecta: 1,
        explicacion: "El lenguaje C es típicamente considerado de bajo nivel en comparación con Python, Java o Kotlin. Aunque C es técnicamente un lenguaje de nivel medio (entre el lenguaje ensamblador y los lenguajes de alto nivel), se le considera de bajo nivel en contextos modernos porque permite un acceso y control directo de la memoria a través de punteros, carece de gestión automática de memoria, y proporciona abstracciones mínimas sobre el hardware subyacente. Esta proximidad al hardware permite crear código muy eficiente y optimizado, ideal para programación de sistemas, controladores, o aplicaciones con restricciones de recursos. Sin embargo, comparado con lenguajes como Python o Java, C requiere que el programador gestione manualmente muchos aspectos que los lenguajes de más alto nivel automatizan, como la asignación de memoria o la gestión de tipos de datos complejos."
    },
    {
        id: 5810,
        moduloId: 508,
        pregunta: "¿Cuál de los siguientes representa un atributo de una clase con demasiadas responsabilidades?",
        opciones: [
            "Atributos privados",
            "Nombre corto",
            "Comentarios extensos",
            "Muchos métodos o atributos"
        ],
        respuestaCorrecta: 3,
        explicacion: "La presencia de muchos métodos o atributos es un atributo característico de una clase con demasiadas responsabilidades, conocida comúnmente como \"God Class\" o \"Blob\". Este anti-patrón viola el Principio de Responsabilidad Única (SRP) de SOLID, que establece que una clase debería tener una única razón para cambiar. Cuando una clase acumula numerosos métodos y atributos, generalmente indica que está asumiendo múltiples responsabilidades distintas que deberían distribuirse entre varias clases más especializadas. Estas clases sobrecargadas suelen ser difíciles de entender, mantener y probar, tienen mayor riesgo de introducir errores cuando se modifican, y presentan barreras para la reutilización de código. La solución habitual es aplicar refactorizaciones como \"Extract Class\" para dividir la clase en componentes más cohesivos y enfocados."
    },
    {
        id: 5811,
        moduloId: 508,
        pregunta: "¿Cuál es el comando correcto para configurar el correo electrónico global en Git?",
        opciones: [
            "git config --global user.email \"correo@example.com\"",
            "git mail config --global",
            "git config user.name",
            "git config user.email \"correo@example.com\""
        ],
        respuestaCorrecta: 0,
        explicacion: "El comando correcto para configurar el correo electrónico global en Git es 'git config --global user.email \"correo@example.com\"'. Este comando establece la dirección de correo electrónico que se asociará con todos los commits realizados en cualquier repositorio en el sistema del usuario. El parámetro '--global' indica que la configuración debe aplicarse a nivel de usuario y no solo al repositorio actual. Esta información se almacena en el archivo ~/.gitconfig y es importante configurarla al iniciar el trabajo con Git, ya que cada commit incluye tanto el nombre del autor como su correo electrónico. Si se omite el parámetro '--global', la configuración solo afectaría al repositorio en el directorio de trabajo actual."
    },
    {
        id: 5812,
        moduloId: 508,
        pregunta: "¿Cuál es el principal beneficio de una prueba de integración?",
        opciones: [
            "Validar interfaces gráficas",
            "Verificar que las clases se construyen correctamente",
            "Ejecutar scripts automatizados",
            "Asegurar que los módulos trabajan bien juntos"
        ],
        respuestaCorrecta: 3,
        explicacion: "El principal beneficio de una prueba de integración es asegurar que los módulos o componentes de un sistema trabajan bien juntos cuando se combinan. Estas pruebas detectan problemas que no serían evidentes al probar cada componente de forma aislada, como inconsistencias en las interfaces, errores en la comunicación entre módulos, fallos en la transferencia de datos, o efectos secundarios inesperados de la interacción. Las pruebas de integración validan que las unidades individuales (ya verificadas con pruebas unitarias) funcionan correctamente cuando se integran, revelando posibles incompatibilidades o defectos en las interconexiones. Son particularmente valiosas en sistemas complejos con múltiples componentes desarrollados por diferentes equipos o en diferentes momentos, ayudando a garantizar la coherencia y el funcionamiento correcto del sistema como un conjunto."
    },
    {
        id: 5813,
        moduloId: 508,
        pregunta: "¿Cuál es la utilidad de la relación «extends» en UML?",
        opciones: [
            "Permitir comportamiento opcional o alternativo",
            "Definir atributos de una clase",
            "Obligar la ejecución conjunta de casos de uso",
            "Indicar herencia entre actores"
        ],
        respuestaCorrecta: 0,
        explicacion: "La relación «extends» en UML se utiliza principalmente para permitir comportamiento opcional o alternativo en los casos de uso. Esta relación indica que un caso de uso extiende la funcionalidad de otro, añadiendo pasos o comportamientos adicionales que no son parte del flujo principal. El caso de uso extendido (base) es independiente y completo por sí mismo, mientras que la extensión solo se ejecuta bajo ciertas condiciones o en puntos específicos de extensión definidos en el caso base. Esta relación es útil para modelar variaciones, excepciones o características opcionales sin complicar el caso de uso principal, manteniendo así la claridad y modularidad del diseño. Las extensiones normalmente representan funcionalidades que no son esenciales para el objetivo principal del caso de uso base."
    },
    {
        id: 5814,
        moduloId: 508,
        pregunta: "¿En qué fase del ciclo de vida del software se implementa el diseño del sistema mediante código?",
        opciones: [
            "Implementación",
            "Pruebas",
            "Análisis de Requisitos",
            "Mantenimiento"
        ],
        respuestaCorrecta: 0,
        explicacion: "En la fase de implementación del ciclo de vida del software es donde se traduce el diseño del sistema en código ejecutable. Durante esta fase, los programadores escriben el código fuente siguiendo las especificaciones técnicas y los diagramas elaborados en la fase de diseño. Esto incluye la codificación de estructuras de datos, algoritmos, interfaces de usuario y componentes del sistema. Además de la escritura de código, la implementación también abarca otras actividades como la compilación, la depuración para corregir errores de sintaxis y lógica, la integración de los diferentes módulos en un sistema coherente, y la documentación interna del código. Esta fase transforma las abstracciones del diseño en un producto de software tangible y funcional que puede ser probado y desplegado."
    },
    {
        id: 5815,
        moduloId: 508,
        pregunta: "¿En qué fase del ciclo de vida del software se realizan ajustes a los requisitos, arquitectura y diseño?",
        opciones: [
            "Pruebas",
            "Análisis",
            "Implementación",
            "Mantenimiento"
        ],
        respuestaCorrecta: 3,
        explicacion: "En la fase de mantenimiento del ciclo de vida del software es donde se realizan ajustes a los requisitos, arquitectura y diseño del sistema después de su despliegue inicial. Esta fase comienza después de que el software ha sido entregado al cliente y está en uso operativo. Durante el mantenimiento, se realizan diversos tipos de modificaciones: correctivas (reparar errores detectados), adaptativas (ajustar el software a cambios en el entorno técnico o de negocio), perfectivas (mejorar o añadir funcionalidades) y preventivas (modificar el sistema para prevenir problemas futuros). Estas actividades pueden requerir revisiones a cualquier nivel del sistema, desde pequeños cambios en el código hasta reconsideraciones significativas de los requisitos o la arquitectura, especialmente para software de larga vida útil que debe evolucionar con las necesidades cambiantes de sus usuarios."
    },
    {
        id: 5816,
        moduloId: 508,
        pregunta: "¿En qué tipo de proyectos es más adecuado el modelo iterativo?",
        opciones: [
            "Proyectos con un diseño final predefinido",
            "Proyectos con alta regulación o certificación",
            "Proyectos con requisitos estables",
            "Proyectos con requisitos cambiantes y evolutivos"
        ],
        respuestaCorrecta: 3,
        explicacion: "El modelo iterativo es más adecuado para proyectos con requisitos cambiantes y evolutivos. Este enfoque divide el desarrollo en ciclos cortos (iteraciones), cada uno de los cuales produce una versión funcional pero incompleta del producto que puede ser revisada y evaluada. Esto permite adaptar el proyecto a medida que se clarifican o evolucionan los requisitos, incorporar retroalimentación temprana de los usuarios, y detectar y resolver problemas antes de que avance demasiado el desarrollo. A diferencia del modelo en cascada, que asume requisitos estables y completamente definidos desde el inicio, el modelo iterativo reconoce que los requisitos a menudo evolucionan durante el proyecto y proporciona la flexibilidad necesaria para gestionar estos cambios de manera efectiva, reduciendo el riesgo y aumentando la probabilidad de entregar un producto que realmente satisfaga las necesidades del usuario."
    },
    {
        id: 5817,
        moduloId: 508,
        pregunta: "¿Por qué es importante documentar el software?",
        opciones: [
            "Ninguna de las anteriores",
            "Facilita el mantenimiento y la colaboración",
            "Acelera el desarrollo de software",
            "Garantiza la seguridad del código"
        ],
        respuestaCorrecta: 1,
        explicacion: "Documentar el software es importante principalmente porque facilita el mantenimiento y la colaboración entre los desarrolladores. Una documentación clara y completa proporciona información sobre la estructura, funcionamiento, interfaces y decisiones de diseño del sistema, lo que ayuda a nuevos miembros del equipo a comprender rápidamente el código, facilita la transferencia de conocimiento, y simplifica las tareas de modificación o ampliación del software. La documentación actúa como memoria organizacional, preservando el conocimiento de por qué se tomaron ciertas decisiones y cómo funciona el sistema, especialmente valioso cuando los desarrolladores originales ya no están disponibles. Además, proporciona una referencia para usuarios y administradores del sistema, facilita las auditorías y evaluaciones de calidad, y puede servir como base para la formación. Una buena documentación reduce significativamente los costos y riesgos asociados con el mantenimiento a largo plazo."
    },
    {
        id: 5818,
        moduloId: 508,
        pregunta: "¿Por qué se recomienda dividir las responsabilidades de una clase en componentes más pequeños?",
        opciones: [
            "Evita escribir comentarios detallados",
            "Facilita la reutilización del código",
            "Reduce la cantidad de casos necesarios en pruebas",
            "Automatiza todo el proceso de pruebas"
        ],
        respuestaCorrecta: 1,
        explicacion: "Se recomienda dividir las responsabilidades de una clase en componentes más pequeños principalmente porque facilita la reutilización del código. Cuando una clase tiene una única responsabilidad bien definida (siguiendo el Principio de Responsabilidad Única de SOLID), es más probable que pueda ser reutilizada en diferentes contextos sin arrastrar funcionalidades innecesarias. Además, las clases más pequeñas y enfocadas son más fáciles de entender, mantener y probar, tienen menos dependencias que podrían complicar su uso, y son menos propensas a errores y efectos secundarios inesperados. Esta modularización también permite un desarrollo más paralelo y desacoplado, donde diferentes equipos pueden trabajar simultáneamente en distintos componentes. El resultado es un diseño más flexible, mantenible y escalable que promueve la alta cohesión (fuerte relación entre elementos de un mismo componente) y el bajo acoplamiento (mínima dependencia entre diferentes componentes)."
    },
    {
        id: 5819,
        moduloId: 508,
        pregunta: "¿Qué característica define el modelo ágil?",
        opciones: [
            "Fases secuenciales y bien definidas",
            "Equipos multifuncionales y trabajo colaborativo",
            "Enfoque en documentación exhaustiva",
            "Requisitos fijos desde el inicio"
        ],
        respuestaCorrecta: 1,
        explicacion: "Una característica definitoria del modelo ágil es el uso de equipos multifuncionales y trabajo colaborativo. En las metodologías ágiles, los equipos están compuestos por personas con diferentes habilidades (desarrolladores, testers, diseñadores, etc.) que trabajan juntos a lo largo de todo el proyecto. Este enfoque fomenta la comunicación directa, la colaboración estrecha con el cliente, y la adaptabilidad a los cambios. A diferencia de los modelos tradicionales que pueden compartimentar el trabajo por roles o fases, el modelo ágil enfatiza la interacción constante entre todos los participantes. Los equipos ágiles suelen ser autoorganizados, con miembros que comparten la responsabilidad del éxito del proyecto y participan activamente en la toma de decisiones. Esta colaboración multidisciplinaria favorece la innovación, la transferencia de conocimientos entre especialidades, y la capacidad de responder rápidamente a cambios en los requisitos o en el entorno."
    },
    {
        id: 5820,
        moduloId: 508,
        pregunta: "¿Qué caracteriza a una prueba funcional o de caja negra?",
        opciones: [
            "Se enfoca en la estructura interna del sistema",
            "Depende de los valores esperados de las variables",
            "Analiza el rendimiento del sistema",
            "Se prueba el sistema sin conocer su estructura interna"
        ],
        respuestaCorrecta: 3,
        explicacion: "Lo que caracteriza a una prueba funcional o de caja negra es que se prueba el sistema sin conocer su estructura interna. Este enfoque evalúa el comportamiento del software desde la perspectiva del usuario final, centrándose únicamente en las entradas proporcionadas y las salidas producidas, sin considerar cómo se procesan internamente. Las pruebas de caja negra verifican si el sistema cumple con sus especificaciones funcionales y requisitos, tratándolo como una \"caja negra\" cuyo funcionamiento interno es desconocido o irrelevante para la prueba. Este método es efectivo para detectar errores de interfaz, comportamientos incorrectos, discrepancias respecto a los requisitos, y problemas de usabilidad. Además, las pruebas de caja negra pueden ser realizadas por personas sin conocimientos técnicos profundos del sistema, lo que permite involucrar a usuarios finales o analistas de negocio en el proceso de validación."
    },
    {
        id: 5821,
        moduloId: 508,
        pregunta: "¿Qué comando de Git permite subir los cambios locales al repositorio remoto?",
        opciones: [
            "git upload",
            "git export",
            "git push",
            "git deploy"
        ],
        respuestaCorrecta: 2,
        explicacion: "El comando 'git push' se utiliza para subir o enviar los cambios confirmados (commits) desde el repositorio local al repositorio remoto. Este comando actualiza las ramas remotas con los commits locales, permitiendo que otros colaboradores puedan acceder a las modificaciones realizadas. Para funcionar correctamente, los cambios deben haber sido previamente añadidos al área de preparación con 'git add' y confirmados con 'git commit'. Si existen conflictos entre los cambios locales y remotos, Git solicitará resolver estos conflictos antes de completar la operación. El comando puede especificar el repositorio remoto y la rama destino, como en 'git push origin main', donde 'origin' es el nombre del repositorio remoto y 'main' la rama a la que se envían los cambios."
    },
    {
        id: 5822,
        moduloId: 508,
        pregunta: "¿Qué comando en Git permite configurar el nombre de usuario global?",
        opciones: [
            "git name set",
            "git config user.name",
            "git config --global user.name",
            "git init user.name"
        ],
        respuestaCorrecta: 2,
        explicacion: "El comando 'git config --global user.name' seguido del nombre entre comillas se utiliza para configurar el nombre de usuario global en Git. Este comando establece la identidad que se asociará a todos los commits realizados en cualquier repositorio del sistema. La opción '--global' indica que la configuración debe aplicarse a nivel de usuario, afectando a todos los repositorios, y se almacena en el archivo ~/.gitconfig. Si se omite '--global', la configuración solo afectaría al repositorio actual. Configurar correctamente el nombre de usuario es importante ya que esta información se incluye en cada commit y sirve para identificar quién realizó los cambios. Este comando suele ejecutarse junto con 'git config --global user.email' al configurar Git por primera vez en un nuevo sistema."
    },
    {
        id: 5823,
        moduloId: 508,
        pregunta: "¿Qué diferencia a la agregación de la composición?",
        opciones: [
            "En la composición, la vida del contenido depende del contenedor",
            "En la agregación no hay relación de pertenencia",
            "En la composición los objetos existen de forma independiente",
            "No existe diferencia real"
        ],
        respuestaCorrecta: 0,
        explicacion: "La principal diferencia entre agregación y composición es que en la composición, la vida del contenido depende completamente del contenedor. Ambos son tipos de asociación todo-parte en UML, pero con diferentes niveles de acoplamiento. En la composición (representada con un diamante negro), los objetos contenidos son parte integral del contenedor y se destruyen cuando éste se destruye. Por ejemplo, un cuarto es parte de una casa y no puede existir si la casa es demolida. En cambio, en la agregación (representada con un diamante blanco), los objetos contenidos pueden existir independientemente del contenedor y potencialmente pertenecer a múltiples contenedores. Por ejemplo, un estudiante puede pertenecer a varios departamentos universitarios, y si un departamento se cierra, el estudiante sigue existiendo. Esta distinción es importante para modelar correctamente las relaciones entre objetos y sus implicaciones en la gestión del ciclo de vida."
    },
    {
        id: 5824,
        moduloId: 508,
        pregunta: "¿Qué documento se elabora durante el análisis de requisitos?",
        opciones: [
            "Manual de usuario",
            "Especificación funcional",
            "Plan de pruebas",
            "Informe de validación"
        ],
        respuestaCorrecta: 1,
        explicacion: "Durante la fase de análisis de requisitos se elabora la especificación funcional. Este documento detalla de manera precisa y completa lo que el sistema debe hacer (requisitos funcionales) y cómo debe hacerlo (requisitos no funcionales). La especificación funcional traduce las necesidades de los usuarios y stakeholders en requisitos técnicos que guiarán el diseño y desarrollo del software. Incluye descripciones detalladas de las funcionalidades requeridas, restricciones, interfaces, comportamientos esperados y criterios de aceptación. Este documento actúa como un contrato entre los clientes y el equipo de desarrollo, estableciendo una comprensión común de lo que se va a construir, y sirve como referencia fundamental para las fases posteriores del ciclo de vida del software, incluidas las pruebas que verificarán que el sistema cumple con lo especificado."
    },
    {
        id: 5825,
        moduloId: 508,
        pregunta: "¿Qué fase del ciclo de vida del software se encarga de verificar que se cumplan los requisitos establecidos?",
        opciones: [
            "Diseño",
            "Mantenimiento",
            "Implementación",
            "Pruebas"
        ],
        respuestaCorrecta: 3,
        explicacion: "La fase de pruebas en el ciclo de vida del software es la encargada de verificar que se cumplan los requisitos establecidos. Durante esta fase, se ejecutan diversos tipos de pruebas (unitarias, de integración, de sistema, de aceptación) para comprobar que el software funciona según lo especificado y cumple con las expectativas de calidad. Las pruebas evalúan tanto los requisitos funcionales (lo que el sistema debe hacer) como los no funcionales (cómo debe hacerlo). Se diseñan casos de prueba basados en las especificaciones y se comparan los resultados obtenidos con los esperados. Además de detectar defectos para su corrección, las pruebas proporcionan evidencia objetiva de que el software satisface los requisitos establecidos en las fases anteriores, validando así que el producto desarrollado se ajusta a lo que se solicitó inicialmente."
    },
    {
        id: 5826,
        moduloId: 508,
        pregunta: "¿Qué fase del ciclo de vida del software está encargada de poner el sistema en producción?",
        opciones: [
            "Pruebas",
            "Mantenimiento",
            "Diseño",
            "Implementación"
        ],
        respuestaCorrecta: 3,
        explicacion: "La fase de implementación en el ciclo de vida del software es la encargada de poner el sistema en producción. Esta fase abarca no solo la codificación del software según las especificaciones del diseño, sino también su despliegue en el entorno operativo donde será utilizado por los usuarios finales. Durante la implementación, se realizan actividades como la instalación del software en los servidores o dispositivos objetivo, la migración de datos si es necesaria, la configuración del entorno de producción, la integración con otros sistemas existentes, y la formación de los usuarios. También incluye la transición formal del control operativo al equipo de soporte y mantenimiento, y posiblemente una puesta en marcha gradual o piloto para verificar el funcionamiento correcto en el entorno real. Esta fase marca la transición del software desde el desarrollo hasta su uso efectivo por los destinatarios."
    },
    {
        id: 5827,
        moduloId: 508,
        pregunta: "¿Qué fase del ciclo de vida del software se enfoca en asegurar que las funcionalidades clave del sistema funcionen correctamente?",
        opciones: [
            "Pruebas funcionales",
            "Implementación",
            "Diseño",
            "Mantenimiento"
        ],
        respuestaCorrecta: 0,
        explicacion: "Las pruebas funcionales son la fase del ciclo de vida del software que se enfoca específicamente en asegurar que las funcionalidades clave del sistema funcionen correctamente. Estas pruebas verifican que el software cumpla con los requisitos funcionales especificados, evaluando el comportamiento del sistema desde la perspectiva del usuario final. Se concentran en validar que cada función del sistema opere según lo esperado, comprobando sus entradas, procesos y salidas. A diferencia de las pruebas estructurales o de caja blanca que examinan el código interno, las pruebas funcionales tratan el sistema como una caja negra, enfocándose en qué hace el sistema y no en cómo lo hace. Estas pruebas son fundamentales para garantizar que el software satisface las necesidades para las que fue diseñado y proporciona la funcionalidad requerida por los usuarios."
    },
    {
        id: 5828,
        moduloId: 508,
        pregunta: "¿Qué función clave cumple la documentación en proyectos con múltiples desarrolladores?",
        opciones: [
            "Elimina la necesidad de reuniones",
            "Permite alinear la comprensión entre equipos distribuidos",
            "Reduce la velocidad del desarrollo",
            "Evita que se comenten los cambios"
        ],
        respuestaCorrecta: 1,
        explicacion: "Una función clave que cumple la documentación en proyectos con múltiples desarrolladores es permitir alinear la comprensión entre equipos distribuidos. La documentación proporciona un punto de referencia común y consistente sobre la arquitectura, diseño, interfaces, convenciones de código y decisiones técnicas, creando un entendimiento compartido que facilita la colaboración efectiva. En equipos distribuidos geográfica o temporalmente, donde la comunicación directa puede ser limitada, la documentación se convierte en un canal crucial para transmitir conocimiento y mantener la coherencia del proyecto. Actúa como memoria colectiva del equipo, permitiendo que nuevos integrantes se incorporen más rápidamente, y ayuda a coordinar el trabajo paralelo en diferentes componentes del sistema, asegurando que todos los desarrolladores compartan la misma visión y trabajen hacia un objetivo común de forma consistente."
    },
    {
        id: 5829,
        moduloId: 508,
        pregunta: "¿Qué función tiene el hipervisor en un entorno de virtualización?",
        opciones: [
            "Gestionar el diseño del sistema",
            "Administrar y aislar máquinas virtuales sobre el hardware físico",
            "Compilar el kernel",
            "Traducir código de alto nivel"
        ],
        respuestaCorrecta: 1,
        explicacion: "El hipervisor en un entorno de virtualización tiene la función de administrar y aislar máquinas virtuales sobre el hardware físico. También conocido como Monitor de Máquina Virtual (VMM), el hipervisor actúa como capa intermedia entre el hardware físico y los sistemas operativos virtualizados. Se encarga de asignar y gestionar los recursos físicos (CPU, memoria, almacenamiento, red) entre las diferentes máquinas virtuales, garantizando que cada una opere de manera aislada y segura, sin interferir con las demás. Los hipervisores pueden ser de tipo 1 (bare-metal), que se ejecutan directamente sobre el hardware, o de tipo 2, que funcionan como una aplicación sobre un sistema operativo anfitrión. Esta tecnología permite optimizar la utilización de recursos físicos, simplificar la administración de infraestructuras y proporcionar flexibilidad para crear entornos aislados para desarrollo, pruebas o producción."
    },
    {
        id: 5830,
        moduloId: 508,
        pregunta: "¿Qué comando de Git se utiliza para combinar los cambios de una rama en otra?",
        opciones: [
            "git commit",
            "git merge",
            "git connect",
            "git join"
        ],
        respuestaCorrecta: 1,
        explicacion: "El comando 'git merge' se utiliza para combinar los cambios de una rama en otra en Git. Este comando toma los cambios de una rama fuente (por ejemplo, una rama de característica) e integra esos cambios en la rama destino (como la rama principal o main). Durante el proceso de fusión, Git intenta combinar automáticamente las modificaciones de ambas ramas. Si las modificaciones afectan a diferentes partes del código, la fusión se realiza sin problemas (fast-forward o fusión automática). Sin embargo, si hay cambios conflictivos en las mismas secciones, Git marca estas áreas como conflictos que deben resolverse manualmente. El comando se ejecuta posicionándose en la rama destino y especificando la rama fuente cuyos cambios se quieren incorporar, por ejemplo: 'git checkout main' seguido de 'git merge feature-branch'."
    },
    {
        id: 5831,
        moduloId: 508,
        pregunta: "¿Qué problema refleja el mal olor de código llamado \"Shotgun Surgery\"?",
        opciones: [
            "Clases sin métodos",
            "Uso excesivo de herencia",
            "Cambiar una parte del sistema implica modificar muchas otras",
            "Repetición de estructuras de control"
        ],
        respuestaCorrecta: 2,
        explicacion: "El mal olor de código llamado \"Shotgun Surgery\" (Cirugía de Escopeta) refleja la situación problemática donde cambiar una parte del sistema implica modificar muchas otras partes dispersas. Este síntoma indica un alto acoplamiento y una baja cohesión en el diseño del software, donde una única responsabilidad o concepto está disperso a través de múltiples clases. Cuando surge la necesidad de realizar un cambio en esta funcionalidad fragmentada, el desarrollador debe identificar y modificar todos los lugares afectados, lo que aumenta el riesgo de errores por omisión y dificulta el mantenimiento. A diferencia de Divergent Change (donde una clase cambia por muchas razones), Shotgun Surgery implica que un solo cambio conceptual afecta a muchas clases. La solución típica es aplicar refactorizaciones como 'Move Method', 'Move Field' o 'Inline Class' para consolidar la funcionalidad relacionada y mejorar la cohesión del sistema."
    },
    {
        id: 5832,
        moduloId: 508,
        pregunta: "¿Qué representa la complejidad ciclomática en un bloque de código?",
        opciones: [
            "La cantidad de comentarios por línea",
            "El número de caminos independientes en el flujo del programa",
            "El número de variables globales",
            "La cantidad de clases heredadas"
        ],
        respuestaCorrecta: 1,
        explicacion: "La complejidad ciclomática en un bloque de código representa el número de caminos independientes en el flujo del programa. Desarrollada por Thomas McCabe, esta métrica cuantifica la complejidad estructural contando el número de decisiones o puntos de ramificación (como if, while, for, case) más uno. Por ejemplo, un código lineal sin condiciones tiene una complejidad de 1, mientras que un código con múltiples decisiones anidadas tendrá una complejidad más alta. La importancia de esta métrica radica en que indica la cantidad mínima de casos de prueba necesarios para cubrir todos los caminos de ejecución posibles, y sirve como indicador de la dificultad para entender, probar y mantener el código. Generalmente, se recomienda mantener la complejidad ciclomática por debajo de 10-15 por método; valores superiores sugieren que el código podría beneficiarse de una refactorización para simplificarlo."
    },
    {
        id: 5833,
        moduloId: 508,
        pregunta: "¿Qué representa un componente en un diagrama de componentes UML?",
        opciones: [
            "Un flujo de datos",
            "Un entorno de ejecución",
            "Un actor externo",
            "Una unidad funcional ejecutable del sistema"
        ],
        respuestaCorrecta: 3,
        explicacion: "En un diagrama de componentes UML, un componente representa una unidad funcional ejecutable del sistema con interfaces bien definidas. Los componentes son módulos de software reutilizables y reemplazables que encapsulan su implementación y exponen un conjunto de interfaces. Pueden representar bibliotecas, ejecutables, archivos, bases de datos, u otras partes modulares del sistema que proporcionan funcionalidad a través de interfaces definidas. Los componentes se representan gráficamente como rectángulos con el estereotipo «component» o con el símbolo de componente (un rectángulo con dos pequeños rectángulos sobresaliendo en un lado). Estos diagramas muestran la estructura de alto nivel del sistema, enfocándose en cómo se organizan los bloques funcionales y cómo interactúan entre sí, facilitando la comprensión de la arquitectura general del sistema y las dependencias entre sus partes."
    },
    {
        id: 5834,
        moduloId: 508,
        pregunta: "¿Qué representa una entrada fuera del rango permitido en una clase de equivalencia?",
        opciones: [
            "Una partición inválida",
            "Una entrada crítica",
            "Un dato opcional",
            "Un valor duplicado"
        ],
        respuestaCorrecta: 0,
        explicacion: "Una entrada fuera del rango permitido en una clase de equivalencia representa una partición inválida. En el contexto de pruebas de software, las clases de equivalencia dividen los datos de entrada en conjuntos o particiones donde los valores dentro de cada clase deberían comportarse de manera similar ante el sistema. Las particiones se clasifican como válidas (entradas que el sistema debe aceptar y procesar correctamente) e inválidas (entradas que el sistema debe rechazar o manejar como errores). Una entrada fuera del rango permitido pertenece a esta última categoría. Probar con valores de particiones inválidas es crucial para verificar que el software valida adecuadamente las entradas, rechaza datos incorrectos y maneja las excepciones de forma apropiada. Esto contribuye a la robustez del sistema, garantizando que no solo funciona correctamente con datos esperados, sino que también responde adecuadamente ante situaciones anómalas."
    },
    {
        id: 5835,
        moduloId: 508,
        pregunta: "¿Qué tipo de máquina virtual ejecuta un sistema operativo completo de manera aislada?",
        opciones: [
            "Máquina virtual de hardware",
            "Máquina virtual de proceso",
            "Microkernel",
            "Contenedor"
        ],
        respuestaCorrecta: 0,
        explicacion: "Una máquina virtual de hardware (también conocida como máquina virtual de sistema o hipervisor tipo 1/2) es la que ejecuta un sistema operativo completo de manera aislada. Este tipo de virtualización emula completamente el hardware físico subyacente (CPU, memoria, dispositivos de entrada/salida), permitiendo que sistemas operativos invitados se ejecuten como si estuvieran en su propia máquina dedicada. Cada máquina virtual funciona de forma independiente con su propio sistema operativo, bibliotecas y aplicaciones, completamente aislada de otras máquinas virtuales en el mismo host. A diferencia de los contenedores que comparten el kernel del sistema operativo anfitrión, las máquinas virtuales de hardware incluyen su propio kernel. Ejemplos de software que proporciona este tipo de virtualización incluyen VMware, VirtualBox, Hyper-V y KVM. Este enfoque ofrece un alto nivel de aislamiento y compatibilidad, aunque con mayor sobrecarga de recursos que los contenedores."
    },
    {
        id: 5836,
        moduloId: 508,
        pregunta: "¿Qué ventaja ofrece el uso de clases de equivalencia en pruebas?",
        opciones: [
            "Evita documentar los casos",
            "Reduce la cantidad de casos necesarios sin perder cobertura",
            "Elimina pruebas funcionales",
            "Automatiza todo el proceso de pruebas"
        ],
        respuestaCorrecta: 1,
        explicacion: "La principal ventaja que ofrece el uso de clases de equivalencia en pruebas es que reduce la cantidad de casos de prueba necesarios sin perder cobertura efectiva. Esta técnica se basa en el principio de que dentro de cada clase de equivalencia, el sistema debería comportarse de manera similar para todos los valores, por lo que probar un valor representativo de cada clase es suficiente para verificar el comportamiento con todos los valores de esa clase. Por ejemplo, si un campo acepta valores entre 1 y 100, no es necesario probar los 100 valores, sino que bastaría con probar un valor dentro del rango (ej. 50) y algunos valores fuera del rango (ej. 0 y 101). Esta optimización es especialmente valiosa para sistemas con dominios de entrada amplios, donde probar todas las combinaciones posibles sería impracticable. Las clases de equivalencia permiten diseñar conjuntos de prueba sistemáticos y eficientes que maximizan la probabilidad de encontrar defectos con un esfuerzo razonable."
    },
    {
        id: 5837,
        moduloId: 508,
        pregunta: "¿Qué ventaja tiene un lenguaje de alto nivel frente a uno de bajo nivel?",
        opciones: [
            "Mayor legibilidad y menor complejidad para el programador",
            "Mayor complejidad en la sintaxis",
            "Mayor control de memoria",
            "Acceso directo a registros del procesador"
        ],
        respuestaCorrecta: 0,
        explicacion: "La principal ventaja de un lenguaje de alto nivel frente a uno de bajo nivel es su mayor legibilidad y menor complejidad para el programador. Los lenguajes de alto nivel utilizan abstracciones más cercanas al pensamiento humano y al dominio del problema, con sintaxis más intuitiva y estructuras que ocultan los detalles técnicos del hardware. Esto permite desarrollar software más rápidamente, con menos líneas de código y menor probabilidad de introducir errores. Además, estos lenguajes suelen incluir funcionalidades automáticas como gestión de memoria, estructuras de datos complejas y bibliotecas estándar extensas que simplifican tareas comunes. La independencia de la plataforma es otra ventaja significativa, ya que el mismo código puede ejecutarse en diferentes arquitecturas con mínimas modificaciones. Aunque puede haber cierta pérdida de eficiencia y control fino sobre el hardware, la ganancia en productividad, mantenibilidad y portabilidad compensa ampliamente estas limitaciones en la mayoría de los casos."
    },
    {
        id: 5838,
        moduloId: 508,
        pregunta: "¿Qué estrategia ayuda a identificar defectos antes de la ejecución del código?",
        opciones: [
            "Análisis estático del código",
            "Pruebas exploratorias",
            "Pruebas funcionales",
            "Refactorización"
        ],
        respuestaCorrecta: 0,
        explicacion: "El análisis estático del código es la estrategia que ayuda a identificar defectos antes de la ejecución del código. Esta técnica examina el código fuente sin ejecutarlo, utilizando herramientas automatizadas para detectar posibles problemas como errores de sintaxis, vulnerabilidades de seguridad, malas prácticas de programación, incumplimiento de estándares de codificación, complejidad excesiva, código duplicado y otros \"olores de código\". A diferencia de las pruebas dinámicas que requieren ejecutar el software, el análisis estático puede aplicarse desde las primeras etapas del desarrollo e integrarse en el proceso de construcción continua. Herramientas como SonarQube, ESLint, PMD o FindBugs analizan el código y generan informes detallados de problemas potenciales, permitiendo a los desarrolladores corregirlos tempranamente, cuando es más fácil y económico hacerlo. Esta detección temprana mejora la calidad del código y reduce significativamente el costo de corrección de defectos."
    },
    {
        id: 5839,
        moduloId: 508,
        pregunta: "¿Qué herramienta facilita la automatización de pruebas repetitivas y validación continua?",
        opciones: [
            "Depurador de código",
            "Editor de texto",
            "Framework de pruebas",
            "Gestor de versiones"
        ],
        respuestaCorrecta: 2,
        explicacion: "Un framework de pruebas es la herramienta que facilita la automatización de pruebas repetitivas y validación continua. Estos frameworks proporcionan una estructura organizada y un conjunto de bibliotecas, herramientas y convenciones para crear, ejecutar y reportar resultados de pruebas automatizadas. Permiten definir casos de prueba de manera sistemática, configurar condiciones previas, ejecutar el código bajo prueba, verificar resultados esperados, y generar informes detallados. Frameworks como JUnit, TestNG, Selenium, Cypress, Jest o PyTest permiten integrar las pruebas en procesos de integración continua, ejecutándolas automáticamente tras cada cambio en el código. Esta automatización asegura que las pruebas se ejecuten consistentemente, reduciendo el error humano, ahorrando tiempo en pruebas repetitivas, facilitando la regresión continua, y proporcionando feedback rápido sobre la calidad del software durante todo el ciclo de desarrollo."
    },
    {
        id: 5840,
        moduloId: 508,
        pregunta: "¿Por qué se prefiere un lenguaje de alto nivel en desarrollo ágil?",
        opciones: [
            "Mayor acceso a registros de CPU",
            "Mejor rendimiento sin compilación",
            "Mayor legibilidad y facilidad de mantenimiento",
            "Menor seguridad"
        ],
        respuestaCorrecta: 2,
        explicacion: "Los lenguajes de alto nivel se prefieren en desarrollo ágil principalmente por su mayor legibilidad y facilidad de mantenimiento. Estos lenguajes utilizan abstracciones cercanas al pensamiento humano, con sintaxis clara y concisa que permite expresar conceptos complejos con menos código. Esta característica facilita la comprensión rápida, la refactorización frecuente y las modificaciones iterativas que son fundamentales en metodologías ágiles. Además, los lenguajes de alto nivel suelen incluir gestión automática de memoria, bibliotecas ricas y frameworks que aceleran el desarrollo, permitiendo entregar valor más rápidamente a través de ciclos cortos. La portabilidad entre plataformas y la reducción del tiempo de desarrollo también son ventajas significativas en entornos ágiles donde la adaptabilidad y la entrega continua son prioritarias. Aunque puede haber cierto sacrificio en términos de rendimiento puro, la productividad del equipo y la capacidad de responder rápidamente a cambios en los requisitos compensan ampliamente esta limitación."
    }
]
};

export default moduloSimulacroTresEntornos;