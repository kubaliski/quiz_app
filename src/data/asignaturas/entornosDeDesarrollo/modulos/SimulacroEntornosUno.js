/**
* Datos del módulo de Simulacro 1 perteneciente a la asignatura de Entornos de Desarrollo.
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
export const moduloSimulacroUnoEntornos = {
id: 506,
nombre: "Simulacro 1 de Examen (04/05/2025)",
esExamen: true,
asignaturaId: 5,
descripcion: "Simulacro de examen que abarca UML, entornos de desarrollo, control de versiones, pruebas y mantenimiento de software.",
preguntas: [
    {
        id: 5601,
        moduloId: 506,
        pregunta: "¿Cómo se representa un caso de uso en UML?",
        opciones: [
        "Como una flecha",
        "Como una elipse",
        "Como un rectángulo",
        "Como un círculo"
        ],
        respuestaCorrecta: 1,
        explicacion: "En UML (Unified Modeling Language), un caso de uso se representa gráficamente mediante una elipse o forma ovalada con el nombre del caso de uso escrito dentro o debajo de ella. Las elipses representan funcionalidades que el sistema ofrece a sus usuarios, mientras que los actores (representados como figuras de palo) interactúan con estos casos de uso."
    },
    {
        id: 5602,
        moduloId: 506,
        pregunta: "¿Cuál de los siguientes elementos suele formar parte de un entorno de desarrollo integrado (IDE)?",
        opciones: [
        "Sistema de arranque",
        "Panel de configuración de hardware",
        "Editor de código, compilador y depurador",
        "Consola de administración de red"
        ],
        respuestaCorrecta: 2,
        explicacion: "Un Entorno de Desarrollo Integrado (IDE) típicamente incluye un editor de código fuente, herramientas de construcción automáticas (compilador/intérprete), un depurador, y a menudo otras herramientas como completado inteligente de código, control de versiones integrado y herramientas de refactorización. Estos componentes están diseñados para maximizar la productividad del programador al proporcionar componentes relacionados con el desarrollo en una única interfaz."
    },
    {
        id: 5603,
        moduloId: 506,
        pregunta: "¿Cuál de los siguientes es un beneficio directo de las pruebas automatizadas?",
        opciones: [
        "Detectan fallos solo en producción",
        "Permiten ejecutar pruebas frecuentes con bajo esfuerzo",
        "Evitan escribir documentación",
        "Requieren menos cobertura"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las pruebas automatizadas permiten ejecutar conjuntos completos de pruebas de manera frecuente y consistente con un esfuerzo mínimo una vez implementadas. Esto facilita la detección temprana de errores, asegura que las nuevas características no rompan funcionalidades existentes, y permite validar cambios rápidamente, lo que resulta en un desarrollo más ágil y de mayor calidad. Otros beneficios incluyen documentación ejecutable del comportamiento esperado y mayor confianza al realizar refactorizaciones."
    },
    {
        id: 5604,
        moduloId: 506,
        pregunta: "¿Cuál de los siguientes lenguajes es típicamente considerado de bajo nivel?",
        opciones: [
        "Python",
        "Java",
        "C",
        "Kotlin"
        ],
        respuestaCorrecta: 2,
        explicacion: "C es considerado un lenguaje de nivel relativamente bajo comparado con Python, Java o Kotlin. Aunque C es un lenguaje de alto nivel en comparación con el lenguaje ensamblador o el código máquina, proporciona acceso directo a la memoria a través de punteros y permite manipular bits, bytes y direcciones, características típicas de los lenguajes de bajo nivel. Su sintaxis es más cercana al hardware subyacente y proporciona menos abstracciones que los otros lenguajes mencionados."
    },
    {
        id: 5605,
        moduloId: 506,
        pregunta: "¿Cuál es el principal beneficio de una prueba de integración?",
        opciones: [
        "Ejecutar scripts automatizados",
        "Validar interfaces gráficas",
        "Verificar que las clases se construyen correctamente",
        "Asegurar que los módulos trabajan bien juntos"
        ],
        respuestaCorrecta: 3,
        explicacion: "El principal beneficio de las pruebas de integración es verificar que diferentes módulos o servicios del sistema funcionan correctamente juntos. Mientras que las pruebas unitarias verifican componentes individuales de forma aislada, las pruebas de integración evalúan la interacción entre estos componentes, detectando problemas que pueden surgir en las interfaces entre módulos, en el flujo de datos entre ellos, o en la comunicación con sistemas externos como bases de datos o servicios web."
    },
    {
        id: 5606,
        moduloId: 506,
        pregunta: "¿Cuál es el principal objetivo del mantenimiento perfectivo en el software?",
        opciones: [
        "Adaptar el software a nuevas plataformas o entornos",
        "Eliminar código duplicado",
        "Corregir errores reportados por los usuarios",
        "Mejorar el rendimiento o la funcionalidad sin que exista un fallo previo"
        ],
        respuestaCorrecta: 3,
        explicacion: "El mantenimiento perfectivo se centra en mejorar el software existente que funciona correctamente, pero podría beneficiarse de optimizaciones o características adicionales. Su objetivo principal es perfeccionar aspectos como el rendimiento, la usabilidad, la seguridad o añadir nuevas funcionalidades para satisfacer requisitos emergentes o mejorar la experiencia del usuario, sin que estas mejoras sean respuestas a fallos o errores detectados previamente."
    },
    {
        id: 5607,
        moduloId: 506,
        pregunta: "¿Cuál es el propósito principal del mantenimiento adaptativo del software?",
        opciones: [
        "Modificar el software por cambios en el entorno o requisitos externos",
        "Corregir errores de compilación",
        "Añadir funcionalidades opcionales",
        "Mejorar la interfaz gráfica"
        ],
        respuestaCorrecta: 0,
        explicacion: "El mantenimiento adaptativo se enfoca en modificar el software para adaptarlo a cambios en su entorno operativo o en los requisitos externos. Esto puede incluir adaptaciones a nuevos sistemas operativos, cambios en hardware, nuevas regulaciones legales, o modificaciones necesarias debido a cambios en otros sistemas con los que interactúa. Este tipo de mantenimiento es necesario para mantener el software utilizable cuando cambian las condiciones externas en las que opera."
    },
    {
        id: 5608,
        moduloId: 506,
        pregunta: "¿Cuál es el rol de un \"actor\" en un diagrama de casos de uso?",
        opciones: [
        "Es una clase del sistema",
        "Es un método invocable",
        "Es un usuario o sistema externo que interactúa",
        "Es un componente lógico"
        ],
        respuestaCorrecta: 2,
        explicacion: "En un diagrama de casos de uso UML, un \"actor\" representa un rol jugado por una entidad externa que interactúa con el sistema. Puede ser un usuario humano, otro sistema, o incluso un dispositivo hardware que se comunica con el sistema. Los actores siempre existen fuera del sistema que se está modelando y se relacionan con los casos de uso a través de asociaciones que indican qué funcionalidades utilizan o con cuáles interactúan."
    },
    {
        id: 5609,
        moduloId: 506,
        pregunta: "¿Cuál es la utilidad de la relación «extends» en UML?",
        opciones: [
        "Permitir comportamiento opcional o alternativo",
        "Obligar la ejecución conjunta de casos de uso",
        "Indicar herencia entre actores",
        "Definir atributos de una clase"
        ],
        respuestaCorrecta: 0,
        explicacion: "La relación «extends» en UML se utiliza para indicar que un caso de uso extiende el comportamiento de otro caso de uso base. Esta relación permite modelar comportamientos opcionales, alternativos o excepcionales que pueden ocurrir dentro de un caso de uso principal, pero que no son necesarios para que el caso base se complete con éxito. El caso de uso que extiende solo se ejecuta bajo condiciones específicas, añadiendo funcionalidad al flujo normal definido en el caso de uso base."
    },
    {
        id: 5610,
        moduloId: 506,
        pregunta: "¿Cuál es una característica de una máquina virtual de proceso?",
        opciones: [
        "Gestiona múltiples sistemas operativos",
        "Ejecuta código específico del lenguaje de programación",
        "Requiere hipervisor de tipo 1",
        "Emula hardware completo"
        ],
        respuestaCorrecta: 1,
        explicacion: "Una máquina virtual de proceso (como la JVM de Java o el CLR de .NET) está diseñada para ejecutar código escrito en un lenguaje de programación específico. A diferencia de las máquinas virtuales de sistema (como VMware o VirtualBox) que emulan un sistema completo, las máquinas virtuales de proceso proporcionan un entorno de ejecución abstracto que traduce el código intermedio (bytecode) a instrucciones nativas de la plataforma subyacente, permitiendo la portabilidad del código entre diferentes sistemas operativos y arquitecturas de hardware."
    },
    {
        id: 5611,
        moduloId: 506,
        pregunta: "¿Cuál es una solución común para métodos con muchos parámetros?",
        opciones: [
        "Escribir comentarios detallados",
        "Duplicar el método con variantes",
        "Agrupar los parámetros en un objeto",
        "Eliminar parámetros sin revisión"
        ],
        respuestaCorrecta: 2,
        explicacion: "Agrupar múltiples parámetros en un objeto es una solución efectiva para métodos con demasiados parámetros (conocido como \"Long Parameter List\" en terminología de refactorización). Este enfoque, llamado \"Introduce Parameter Object\", mejora la legibilidad y mantenibilidad del código al reducir el tamaño de la firma del método. Además, permite encapsular los parámetros relacionados en una entidad coherente, facilita añadir más parámetros en el futuro sin modificar interfaces, y proporciona un lugar natural para la lógica que opera sobre esos parámetros."
    },
    {
        id: 5612,
        moduloId: 506,
        pregunta: "¿Por qué es recomendable mantener documentación técnica actualizada?",
        opciones: [
        "Porque mejora la calidad del diseño gráfico",
        "Porque acelera la compilación del código",
        "Porque evita usar herramientas externas",
        "Porque facilita el mantenimiento incluso si cambian los desarrolladores"
        ],
        respuestaCorrecta: 3,
        explicacion: "Mantener una documentación técnica actualizada es fundamental porque facilita el mantenimiento y evolución del software, especialmente cuando hay rotación de personal. Una buena documentación sirve como transferencia de conocimiento, ayuda a los nuevos desarrolladores a comprender rápidamente el sistema, reduce la curva de aprendizaje, preserva las decisiones de diseño y sus justificaciones, y simplifica la identificación y corrección de errores. Sin documentación apropiada, el conocimiento crítico puede perderse cuando las personas abandonan el proyecto."
    },
    {
        id: 5613,
        moduloId: 506,
        pregunta: "¿Por qué las máquinas virtuales son útiles en entornos de desarrollo?",
        opciones: [
        "No requieren pruebas",
        "El software se ejecuta más rápido",
        "No consumen memoria",
        "Facilitan la replicación de entornos para distintos proyectos"
        ],
        respuestaCorrecta: 3,
        explicacion: "Las máquinas virtuales son especialmente útiles en entornos de desarrollo porque permiten crear y replicar entornos consistentes para diferentes proyectos. Esto asegura que todos los desarrolladores trabajen bajo las mismas condiciones, evitando el problema de \"funciona en mi máquina\". Además, permiten aislar dependencias que podrían entrar en conflicto entre proyectos, facilitan probar el software en diferentes configuraciones, y proporcionan un entorno seguro para experimentar sin afectar al sistema principal."
    },
    {
        id: 5614,
        moduloId: 506,
        pregunta: "¿Por qué se prefiere un lenguaje de alto nivel en desarrollo ágil?",
        opciones: [
        "Menor seguridad",
        "Mayor legibilidad y facilidad de mantenimiento",
        "Mejor rendimiento sin compilación",
        "Mayor acceso a registros de CPU"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los lenguajes de alto nivel son preferidos en el desarrollo ágil porque ofrecen mayor legibilidad y facilidad de mantenimiento. Estos lenguajes utilizan abstracciones cercanas al pensamiento humano y alejadas de los detalles del hardware, permitiendo escribir código más claro, conciso y expresivo. Esto facilita las iteraciones rápidas, la colaboración entre equipos, la refactorización continua y la adaptación a cambios en los requisitos, aspectos fundamentales en metodologías ágiles donde la velocidad de desarrollo y la flexibilidad son prioritarias."
    },
    {
        id: 5615,
        moduloId: 506,
        pregunta: "¿Por qué se recomienda dividir las responsabilidades de una clase en componentes más pequeños?",
        opciones: [
        "Para cumplir con el principio de responsabilidad única",
        "Para evitar el uso de bucles",
        "Para reducir el tamaño del archivo",
        "Para evitar que la clase tenga atributos"
        ],
        respuestaCorrecta: 0,
        explicacion: "Dividir las responsabilidades de una clase en componentes más pequeños sigue el Principio de Responsabilidad Única (SRP), uno de los principios SOLID del diseño orientado a objetos. Este principio establece que una clase debe tener una única razón para cambiar, es decir, debe encapsular una sola funcionalidad o responsabilidad. Las clases con responsabilidad única son más fáciles de entender, probar, mantener y reutilizar, y reducen el impacto de los cambios al minimizar las dependencias entre funcionalidades distintas."
    },
    {
        id: 5616,
        moduloId: 506,
        pregunta: "¿Qué característica define a una prueba unitaria?",
        opciones: [
        "Se realiza después del despliegue",
        "Evalúa toda la aplicación de forma integral",
        "Evalúa funciones o métodos de forma aislada y controlada",
        "Se enfoca en la experiencia del usuario"
        ],
        respuestaCorrecta: 2,
        explicacion: "Una prueba unitaria se caracteriza por evaluar unidades individuales de código (como funciones, métodos o clases) de forma aislada y controlada. Su propósito es verificar que cada unidad funcione correctamente por sí misma, independientemente del resto del sistema. Para lograr este aislamiento, se utilizan técnicas como mocks o stubs que simulan las dependencias externas. Las pruebas unitarias son automatizables, rápidas de ejecutar, deterministas (siempre dan el mismo resultado bajo las mismas condiciones) y sirven como documentación del comportamiento esperado de cada componente."
    },
    {
        id: 5617,
        moduloId: 506,
        pregunta: "¿Qué característica distingue a una prueba de sistema?",
        opciones: [
        "Verifica que todos los componentes del software funcionen correctamente en conjunto",
        "Solo se enfoca en bases de datos",
        "Evalúa cada método individualmente",
        "Comprueba errores ortográficos en la interfaz"
        ],
        respuestaCorrecta: 0,
        explicacion: "Las pruebas de sistema verifican que todos los componentes del software funcionen correctamente como un conjunto integrado. A diferencia de las pruebas unitarias o de integración, las pruebas de sistema evalúan el comportamiento del sistema completo en un entorno que se asemeja al de producción. Estas pruebas validan que el sistema cumple con los requisitos funcionales y no funcionales especificados, incluyendo rendimiento, seguridad, usabilidad y compatibilidad, y aseguran que todas las partes del sistema interactúan correctamente desde la perspectiva del usuario final."
    },
    {
        id: 5618,
        moduloId: 506,
        pregunta: "¿Qué comando de Git permite subir los cambios locales al repositorio remoto?",
        opciones: [
        "git export",
        "git upload",
        "git deploy",
        "git push"
        ],
        respuestaCorrecta: 3,
        explicacion: "El comando 'git push' se utiliza para enviar los cambios confirmados (commits) desde el repositorio local al repositorio remoto. Este comando actualiza las ramas remotas con los commits locales, permitiendo compartir el trabajo con otros colaboradores del proyecto. Para funcionar correctamente, primero se deben haber añadido los cambios al área de preparación con 'git add' y confirmado con 'git commit'. Si existen conflictos entre los cambios locales y remotos, Git solicitará resolver estos conflictos antes de completar la operación."
    },
    {
        id: 5619,
        moduloId: 506,
        pregunta: "¿Qué comando de Git se utiliza para combinar los cambios de una rama en otra?",
        opciones: [
        "git connect",
        "git commit",
        "git join",
        "git merge"
        ],
        respuestaCorrecta: 3,
        explicacion: "El comando 'git merge' se utiliza para combinar los cambios de una rama en otra. Este proceso toma los cambios independientes de dos (o más) ramas y los une en una sola rama. Git intenta automáticamente determinar cómo integrar las líneas de desarrollo divergentes, y cuando identifica que ambas ramas modificaron la misma parte de un archivo de formas diferentes, marca estos como conflictos que deben ser resueltos manualmente antes de completar la fusión."
    },
    {
        id: 5620,
        moduloId: 506,
        pregunta: "¿Qué elemento se considera un nodo en el análisis del grafo de control de flujo?",
        opciones: [
        "Una dependencia entre módulos",
        "Una condición lógica",
        "Un test de regresión",
        "Una instrucción secuencial o bloque sin bifurcaciones"
        ],
        respuestaCorrecta: 3,
        explicacion: "En el análisis del grafo de control de flujo, un nodo representa una instrucción secuencial o un bloque básico, que es una secuencia de instrucciones que se ejecutan consecutivamente sin posibilidad de bifurcación (excepto posiblemente al final del bloque). Estos bloques se caracterizan por tener un único punto de entrada al inicio y un único punto de salida al final. Los nodos se conectan mediante aristas o flechas que representan las posibles transferencias de control entre bloques, formando así un grafo que modela todos los caminos posibles de ejecución en el programa."
    },
    {
        id: 5621,
        moduloId: 506,
        pregunta: "¿Qué fase del ciclo de vida del software se encarga de verificar que se cumplan los requisitos establecidos?",
        opciones: [
        "Implementación",
        "Mantenimiento",
        "Diseño",
        "Pruebas"
        ],
        respuestaCorrecta: 3,
        explicacion: "La fase de pruebas en el ciclo de vida del software se encarga específicamente de verificar que el sistema cumpla con los requisitos establecidos. Durante esta fase, se ejecutan diversos tipos de pruebas (unitarias, de integración, de sistema, de aceptación) para identificar discrepancias entre el comportamiento esperado y el real, detectar errores o fallos, y validar que el software satisface las especificaciones funcionales y no funcionales definidas en la fase de análisis de requisitos. Las pruebas proporcionan evidencia objetiva de la calidad del software antes de su entrega al cliente."
    },
    {
        id: 5622,
        moduloId: 506,
        pregunta: "¿Qué función clave cumple la documentación en proyectos con múltiples desarrolladores?",
        opciones: [
        "Reduce la velocidad del desarrollo",
        "Evita que se comenten los cambios",
        "Permite alinear la comprensión entre equipos distribuidos",
        "Elimina la necesidad de reuniones"
        ],
        respuestaCorrecta: 2,
        explicacion: "En proyectos con múltiples desarrolladores, la documentación cumple la función clave de alinear la comprensión entre equipos distribuidos. Proporciona un punto de referencia común sobre la arquitectura, interfaces, decisiones de diseño y funcionalidades del sistema, asegurando que todos los miembros del equipo trabajen con la misma visión y entendimiento. Esto es especialmente importante cuando los equipos están geográficamente dispersos, trabajan en diferentes zonas horarias o se incorporan nuevos miembros. Una buena documentación reduce malentendidos, duplicación de esfuerzos y decisiones contradictorias."
    },
    {
        id: 5623,
        moduloId: 506,
        pregunta: "¿Qué función tiene el hipervisor en un entorno de virtualización?",
        opciones: [
        "Administrar y aislar máquinas virtuales sobre el hardware físico",
        "Compilar el kernel",
        "Traducir código de alto nivel",
        "Gestionar el diseño del sistema"
        ],
        respuestaCorrecta: 0,
        explicacion: "El hipervisor es el componente fundamental en un entorno de virtualización que se encarga de administrar y aislar múltiples máquinas virtuales sobre el hardware físico. Actúa como una capa de abstracción entre el hardware y las máquinas virtuales, permitiendo que varios sistemas operativos compartan los recursos físicos de forma segura y eficiente. El hipervisor asigna dinámicamente recursos como CPU, memoria y dispositivos de entrada/salida, mantiene el aislamiento entre las máquinas virtuales para evitar interferencias, y gestiona la ejecución y ciclo de vida de cada instancia virtual."
    },
    {
        id: 5624,
        moduloId: 506,
        pregunta: "¿Qué herramienta forma parte habitual de un IDE moderno?",
        opciones: [
        "Depurador integrado",
        "Cable de red",
        "Sistema operativo",
        "Antivirus"
        ],
        respuestaCorrecta: 0,
        explicacion: "Un depurador integrado es una herramienta estándar en los IDEs modernos. Permite a los desarrolladores ejecutar su código línea por línea, establecer puntos de interrupción, examinar el valor de variables en tiempo de ejecución, y rastrear el flujo de ejecución del programa. Esta funcionalidad es esencial para identificar y corregir errores (bugs) eficientemente, entender el comportamiento del código, y asegurar que el programa funciona como se espera, lo que lo convierte en una parte fundamental de cualquier entorno de desarrollo integrado completo."
    },
    {
        id: 5625,
        moduloId: 506,
        pregunta: "¿Qué herramienta gráfica permite trabajar con ramas y commits en Git sin usar terminal?",
        opciones: [
        "Git GUI",
        "Git Manual",
        "GitHub CLI",
        "Git Script"
        ],
        respuestaCorrecta: 0,
        explicacion: "Git GUI es una herramienta gráfica oficial incluida con Git que permite trabajar con ramas y commits sin necesidad de usar la línea de comandos. Proporciona una interfaz visual para realizar operaciones comunes como crear commits, trabajar con ramas, ver el historial de cambios y gestionar repositorios. Además de Git GUI, existen otras herramientas gráficas populares como GitKraken, SourceTree o GitHub Desktop que ofrecen funcionalidades similares y a menudo más avanzadas, pero Git GUI tiene la ventaja de venir integrada con la instalación estándar de Git."
    },
    {
        id: 5626,
        moduloId: 506,
        pregunta: "¿Qué herramienta permite virtualizar sistemas operativos con facilidad en entornos educativos?",
        opciones: [
        "IntelliJ IDEA",
        "Oracle VirtualBox",
        "GitHub Desktop",
        "VMware vSphere"
        ],
        respuestaCorrecta: 1,
        explicacion: "Oracle VirtualBox es una herramienta de virtualización gratuita y de código abierto que permite crear y ejecutar múltiples máquinas virtuales con diferentes sistemas operativos en un único equipo físico. Es ampliamente utilizada en entornos educativos debido a su facilidad de uso, su naturaleza multiplataforma (funciona en Windows, macOS, Linux), sus requerimientos de hardware relativamente modestos, y su capacidad para crear instantáneas del estado de las máquinas virtuales. Esto la hace ideal para experimentar con diferentes configuraciones de software sin arriesgar el sistema principal, perfecto para laboratorios y clases prácticas."
    },
    {
        id: 5627,
        moduloId: 506,
        pregunta: "¿Qué IDE es frecuentemente usado en desarrollo de aplicaciones móviles Android?",
        opciones: [
        "Android Studio",
        "Visual Studio Code",
        "Eclipse",
        "NetBeans"
        ],
        respuestaCorrecta: 0,
        explicacion: "Android Studio es el IDE oficial y más utilizado para el desarrollo de aplicaciones móviles Android. Desarrollado por Google, está basado en IntelliJ IDEA y está específicamente diseñado y optimizado para programación Android. Incluye herramientas especializadas como un diseñador visual de interfaces de usuario, un emulador integrado para probar aplicaciones en diferentes dispositivos, herramientas de perfilado para analizar rendimiento, memoria y uso de red, y soporte completo para el sistema de construcción Gradle. Además, se actualiza regularmente con las últimas APIs y características de Android."
    },
    {
        id: 5628,
        moduloId: 506,
        pregunta: "¿Qué nivel de abstracción se considera intermedio entre binario y lenguajes de alto nivel?",
        opciones: [
        "Ensamblador",
        "Binario",
        "Lenguaje natural",
        "SQL"
        ],
        respuestaCorrecta: 0,
        explicacion: "El lenguaje ensamblador (Assembly) se considera un nivel de abstracción intermedio entre el código binario (lenguaje máquina) y los lenguajes de alto nivel. El ensamblador utiliza mnemónicos legibles por humanos para representar instrucciones de la máquina, proporcionando una correspondencia casi directa con el código binario pero siendo más legible. A diferencia de los lenguajes de alto nivel que ocultan detalles del hardware y tienen estructuras más cercanas al pensamiento humano, el ensamblador requiere conocimiento de la arquitectura específica del procesador y ofrece control detallado sobre el hardware a costa de mayor complejidad."
    },
    {
        id: 5629,
        moduloId: 506,
        pregunta: "¿Qué parte del IDE ayuda a rastrear y resolver errores durante la ejecución del programa?",
        opciones: [
        "Consola de comandos",
        "Depurador",
        "Autocompletado",
        "Editor de texto"
        ],
        respuestaCorrecta: 1,
        explicacion: "El depurador es la parte del IDE diseñada específicamente para rastrear y resolver errores durante la ejecución del programa. Permite ejecutar el código paso a paso, establecer puntos de interrupción donde el programa se detendrá automáticamente, inspeccionar el valor de variables y expresiones en cualquier momento de la ejecución, visualizar la pila de llamadas, y modificar valores en tiempo de ejecución para probar soluciones. Estas capacidades son esenciales para entender por qué un programa no se comporta como se espera y localizar la fuente de los errores de manera eficiente."
    },
    {
        id: 5630,
        moduloId: 506,
        pregunta: "¿Qué permite determinar la complejidad ciclomática de una función?",
        opciones: [
        "El número de variables locales",
        "El número de comentarios por línea",
        "La cantidad de clases",
        "La cantidad de decisiones y bifurcaciones que contiene el flujo del código"
        ],
        respuestaCorrecta: 3,
        explicacion: "La complejidad ciclomática es una métrica que mide el número de caminos independientes a través del código fuente de una función o método. Se calcula contando la cantidad de decisiones y bifurcaciones (como if, while, for, case) presentes en el flujo del código, más uno. Esta métrica indica la complejidad estructural del código y ayuda a estimar el esfuerzo necesario para probarlo exhaustivamente, ya que un valor alto significa que se requieren más casos de prueba para cubrir todos los posibles caminos de ejecución."
    },
    {
        id: 5631,
        moduloId: 506,
        pregunta: "¿Qué problema refleja el mal olor de código llamado \"Shotgun Surgery\"?",
        opciones: [
        "Clases sin métodos",
        "Uso excesivo de herencia",
        "Repetición de estructuras de control",
        "Cambiar una parte del sistema implica modificar muchas otras"
        ],
        respuestaCorrecta: 3,
        explicacion: "\"Shotgun Surgery\" es un mal olor de código que ocurre cuando un solo cambio requiere modificaciones en múltiples clases diferentes. Esto indica que la responsabilidad está fragmentada y dispersa por todo el sistema, violando el principio de cohesión. Este problema dificulta el mantenimiento porque los desarrolladores deben localizar y modificar muchos lugares diferentes para implementar un solo cambio conceptual, aumentando el riesgo de introducir errores. Las refactorizaciones comunes para solucionarlo incluyen \"Move Method\", \"Move Field\" y \"Inline Class\" para consolidar funcionalidades relacionadas."
    },
    {
        id: 5632,
        moduloId: 506,
        pregunta: "¿Qué problema se conoce como \"Shotgun Surgery\"?",
        opciones: [
        "Cambiar una clase provoca errores de compilación",
        "Un cambio en una clase requiere cambios en muchas otras",
        "Se mezclan demasiadas responsabilidades en una clase",
        "El código se divide en métodos demasiado pequeños"
        ],
        respuestaCorrecta: 1,
        explicacion: "\"Shotgun Surgery\" es un mal olor de código que se produce cuando un cambio en una clase requiere cambios en muchas otras clases. Esto indica una mala distribución de responsabilidades, donde la funcionalidad relacionada está dispersa en lugar de cohesionada. Este problema dificulta el mantenimiento, aumenta el riesgo de errores y complica la comprensión del código. Para solucionarlo, se suelen aplicar refactorizaciones como \"Move Method\" o \"Move Field\" para consolidar el comportamiento relacionado, mejorando la cohesión y reduciendo el acoplamiento entre clases."
    },
    {
        id: 5633,
        moduloId: 506,
        pregunta: "¿Qué representa la complejidad ciclomática en un bloque de código?",
        opciones: [
        "El número de variables globales",
        "El número de caminos independientes en el flujo del programa",
        "La cantidad de comentarios por línea",
        "La cantidad de clases heredadas"
        ],
        respuestaCorrecta: 1,
        explicacion: "La complejidad ciclomática representa el número de caminos independientes en el flujo del programa, es decir, el número mínimo de rutas distintas que podrían tomarse a través de un bloque de código. Desarrollada por Thomas McCabe en 1976, esta métrica se calcula como el número de decisiones (condicionales como if, case, while, for) más uno. Un valor alto indica código más complejo, más difícil de entender y mantener, y que requiere más pruebas para cubrir todos los posibles caminos de ejecución. Se considera una buena práctica mantener la complejidad ciclomática por debajo de 10 para cada método."
    },
    {
        id: 5634,
        moduloId: 506,
        pregunta: "¿Qué representa un componente en un diagrama de componentes UML?",
        opciones: [
        "Un flujo de datos",
        "Una unidad funcional ejecutable del sistema",
        "Un entorno de ejecución",
        "Un actor externo"
        ],
        respuestaCorrecta: 1,
        explicacion: "En un diagrama de componentes UML, un componente representa una unidad funcional ejecutable del sistema con interfaces bien definidas. Los componentes encapsulan comportamiento y datos, proporcionando una vista modular de la arquitectura del software. Pueden ser elementos físicos (como archivos, bibliotecas, bases de datos) o lógicos (como módulos, paquetes o subsistemas). Los componentes se representan típicamente como rectángulos con el símbolo de componente (un rectángulo con dos pequeños rectángulos en el lado izquierdo) y se conectan mediante interfaces que definen cómo interactúan entre sí."
    },
    {
        id: 5635,
        moduloId: 506,
        pregunta: "¿Qué representa una entrada fuera del rango permitido en una clase de equivalencia?",
        opciones: [
        "Un valor duplicado",
        "Un dato opcional",
        "Una partición inválida",
        "Una entrada crítica"
        ],
        respuestaCorrecta: 2,
        explicacion: "En el diseño de pruebas mediante clases de equivalencia, una entrada fuera del rango permitido representa una partición inválida. Las clases de equivalencia dividen los datos de entrada en grupos o particiones que se espera que se comporten de manera similar, reduciendo así el número de casos de prueba necesarios. Las particiones inválidas corresponden a valores que están fuera de los rangos permitidos y que el sistema debería rechazar o manejar como excepciones. Probar con valores de estas particiones inválidas es esencial para verificar que el software maneja correctamente las entradas erróneas o inesperadas."
    },
    {
        id: 5636,
        moduloId: 506,
        pregunta: "¿Qué tipo de prueba se utiliza para verificar que una nueva funcionalidad no rompe lo ya existente?",
        opciones: [
        "Prueba de rendimiento",
        "Prueba de humo",
        "Prueba alfa",
        "Prueba de regresión"
        ],
        respuestaCorrecta: 3,
        explicacion: "Las pruebas de regresión se utilizan específicamente para verificar que nuevas funcionalidades o cambios en el código no han afectado negativamente a funcionalidades existentes que antes funcionaban correctamente. Consisten en volver a ejecutar pruebas previamente desarrolladas para asegurar que no hayan surgido defectos en áreas que ya funcionaban. Estas pruebas son especialmente importantes en entornos ágiles con desarrollo iterativo y continuo, donde los cambios frecuentes podrían afectar inadvertidamente a otras partes del sistema. Idealmente, las pruebas de regresión están automatizadas para poder ejecutarlas rápida y regularmente."
    },
    {
        id: 5637,
        moduloId: 506,
        pregunta: "¿Qué tipo de relación UML indica que una clase utiliza otra de forma temporal sin necesidad de poseerla?",
        opciones: [
        "Agregación",
        "Asociación",
        "Dependencia",
        "Composición"
        ],
        respuestaCorrecta: 2,
        explicacion: "En UML, una relación de dependencia indica que una clase utiliza o depende de otra de forma temporal, sin necesidad de mantener una referencia permanente a ella. Se representa con una flecha punteada desde la clase dependiente hacia la clase de la que depende. Este tipo de relación es más débil que la asociación, agregación o composición, ya que no implica que la clase dependiente contenga o posea a la otra. Ejemplos típicos incluyen cuando una clase usa otra como parámetro en un método, la crea localmente en un método, o la utiliza como tipo de retorno."
    },
    {
        id: 5638,
        moduloId: 506,
        pregunta: "¿Qué ventaja ofrece el uso de clases de equivalencia en pruebas?",
        opciones: [
        "Automatiza todo el proceso de pruebas",
        "Evita documentar los casos",
        "Reduce la cantidad de casos necesarios sin perder cobertura",
        "Elimina pruebas funcionales"
        ],
        respuestaCorrecta: 2,
        explicacion: "El uso de clases de equivalencia en pruebas ofrece la ventaja de reducir significativamente la cantidad de casos de prueba necesarios sin perder cobertura efectiva. Esta técnica agrupa las entradas del programa en clases donde se espera que todos los valores de una misma clase se comporten de forma similar, basándose en la premisa de que probar un valor representativo de cada clase es suficiente para validar el comportamiento con todos los valores de dicha clase. Esto optimiza el esfuerzo de pruebas al evitar probar valores redundantes, mientras asegura que se cubran todas las condiciones relevantes, tanto válidas como inválidas."
    },
    {
        id: 5639,
        moduloId: 506,
        pregunta: "¿Qué ventaja ofrece una refactorización frecuente en lugar de una única y compleja?",
        opciones: [
        "Mejora el mantenimiento y minimiza el riesgo",
        "Evita errores en producción",
        "Disminuye la cobertura de pruebas",
        "Reduce la reutilización del código"
        ],
        respuestaCorrecta: 0,
        explicacion: "Realizar refactorizaciones frecuentes y pequeñas en lugar de una única refactorización compleja mejora el mantenimiento del código y minimiza el riesgo. Las refactorizaciones pequeñas son más fáciles de entender, implementar y probar, lo que reduce la probabilidad de introducir errores. Además, permiten identificar y corregir problemas rápidamente, facilitan la integración continua, y distribuyen el esfuerzo de mejora a lo largo del tiempo en lugar de crear deuda técnica. Este enfoque incremental mantiene el código en un estado funcional durante todo el proceso, minimizando interrupciones en el desarrollo."
    },
    {
        id: 5640,
        moduloId: 506,
        pregunta: "¿Qué ventaja tiene un lenguaje de alto nivel frente a uno de bajo nivel?",
        opciones: [
        "Acceso directo a registros del procesador",
        "Mayor control de memoria",
        "Mayor complejidad en la sintaxis",
        "Mayor legibilidad y menor complejidad para el programador"
        ],
        respuestaCorrecta: 3,
        explicacion: "Los lenguajes de alto nivel ofrecen mayor legibilidad y menor complejidad para el programador al proporcionar abstracciones que ocultan los detalles del hardware y utilizan conceptos más cercanos al problema que se está resolviendo. Esto permite a los desarrolladores escribir código más intuitivo, expresivo y fácil de mantener, centrándose en la lógica del negocio en lugar de en detalles de bajo nivel como gestión de memoria o instrucciones específicas del procesador. Además, generalmente ofrecen portabilidad entre plataformas, bibliotecas estándar más completas, y mayor productividad de desarrollo, aunque pueden sacrificar cierto rendimiento y control preciso sobre el hardware."
    }
    ]
};

export default moduloSimulacroUnoEntornos;