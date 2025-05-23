/**
 * Datos del módulo de Examen Final 2 perteneciente a la asignatura de Entornos de Desarrollo.
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
export const moduloExamenFinal2Entornos = {
  id: 510,
  nombre: "Examen Final 2 - Entornos de Desarrollo",
  esExamen: true,
  asignaturaId: 5,
  descripcion:
    "Segundo examen final que abarca todos los contenidos de la asignatura: diagramas UML, control de versiones con Git, ciclo de vida del software, virtualización, lenguajes de programación, técnicas de pruebas y mantenimiento de software.",
  preguntas: [
    {
      id: 51001,
      moduloId: 510,
      pregunta: "¿Cuál es el rol de un actor en un diagrama de casos de uso?",
      opciones: [
        "Es una clase del sistema",
        "Es un usuario o sistema externo que interactúa",
        "Es un componente lógico",
        "Es un método intocable",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Un actor en un diagrama de casos de uso representa un usuario o sistema externo que interactúa con el sistema bajo estudio. Los actores no forman parte del sistema en sí, sino que existen en su entorno y utilizan sus funcionalidades. Pueden ser personas, organizaciones, sistemas externos u otros dispositivos que se comunican con el sistema.",
    },
    {
      id: 51002,
      moduloId: 510,
      pregunta:
        "¿Qué comando de Git permite subir los cambios locales al repositorio remoto?",
      opciones: ["git upload", "git push", "git deploy", "git export"],
      respuestaCorrecta: 1,
      explicacion:
        "El comando 'git push' es el utilizado para subir los cambios locales confirmados (commits) al repositorio remoto. Este comando sincroniza el repositorio local con el remoto, enviando los nuevos commits que se han realizado localmente.",
    },
    {
      id: 51003,
      moduloId: 510,
      pregunta: "¿Cuál es la utilidad de la relación «extends» en UML?",
      opciones: [
        "Obligar la ejecución conjunta de casos de uso",
        "Permitir comportamiento opcional alternativo",
        "Indicar herencia entre actores",
        "Definir atributos de una clase",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "La relación «extends» en UML permite añadir comportamiento opcional alternativo a un caso de uso base. El caso de uso que extiende solo se ejecuta bajo ciertas condiciones específicas, proporcionando funcionalidad adicional sin modificar el flujo principal del caso de uso base.",
    },
    {
      id: 51004,
      moduloId: 510,
      pregunta:
        "¿Qué herramienta gráfica permite trabajar con ramas y commits en Git sin usar terminal?",
      opciones: ["Git Manual", "GitHub CLI", "Git GUI", "Git Script"],
      respuestaCorrecta: 2,
      explicacion:
        "Git GUI es la herramienta gráfica incluida con Git que permite trabajar con repositorios, ramas y commits sin necesidad de usar la línea de comandos. Proporciona una interfaz visual para las operaciones básicas de Git como realizar commits, ver el historial y gestionar ramas.",
    },
    {
      id: 51005,
      moduloId: 510,
      pregunta: "¿Cómo se representa un caso de uso en UML?",
      opciones: [
        "Como un rectángulo",
        "Como un círculo",
        "Como una elipse",
        "Como una flecha",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "En UML, un caso de uso se representa gráficamente mediante una elipse. Dentro o debajo de la elipse se escribe el nombre del caso de uso, que describe brevemente la funcionalidad o servicio que el sistema ofrece a sus usuarios.",
    },
    {
      id: 51006,
      moduloId: 510,
      pregunta: "¿Qué simboliza una flecha con rombo negro en UML?",
      opciones: ["Herencia", "Agregación", "Composición", "Asociación"],
      respuestaCorrecta: 2,
      explicacion:
        "Una flecha con rombo negro (lleno) en UML simboliza una relación de composición. Esta es una relación fuerte de todo-parte donde las partes no pueden existir sin el todo, y su ciclo de vida está completamente ligado al objeto contenedor.",
    },
    {
      id: 51007,
      moduloId: 510,
      pregunta: "¿Qué diferencia a la agregación de la composición?",
      opciones: [
        "En agregación no hay relación de pertenencia",
        "En la composición, los objetos existen de forma independiente",
        "En la composición, la vida del contenido depende del contenedor",
        "No existe diferencia real",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "La principal diferencia es que en la composición, la vida del contenido depende completamente del contenedor. Si el objeto contenedor se destruye, los objetos contenidos también se destruyen. En la agregación, los objetos pueden existir independientemente del contenedor.",
    },
    {
      id: 51008,
      moduloId: 510,
      pregunta:
        "¿En qué fase del ciclo de vida del software se elabora un modelo detallado de cómo funcionaría el sistema?",
      opciones: [
        "Pruebas",
        "Diseño",
        "Implementación",
        "Análisis de requisitos",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "En la fase de diseño se elabora un modelo detallado de cómo funcionaría el sistema. Durante esta etapa se crean diagramas, se define la arquitectura del software, se especifican los componentes y sus interacciones, y se planifica la estructura técnica que guiará la implementación.",
    },
    {
      id: 51009,
      moduloId: 510,
      pregunta:
        "¿Qué fase del ciclo de vida se encarga de transformar el diseño en código ejecutable?",
      opciones: [
        "Diseño",
        "Análisis de requisitos",
        "Implementación",
        "Mantenimiento",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "La fase de implementación se encarga de transformar el diseño en código ejecutable. Durante esta etapa, los programadores escriben el código fuente siguiendo las especificaciones y diagramas elaborados en la fase de diseño.",
    },
    {
      id: 51010,
      moduloId: 510,
      pregunta:
        "¿Cuál es la fase en la que se validan los resultados obtenidos para comprobar que cumplen los requisitos?",
      opciones: [
        "Implementación",
        "Pruebas",
        "Mantenimiento",
        "Análisis de requisitos",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "La fase de pruebas es donde se validan los resultados obtenidos para comprobar que cumplen los requisitos establecidos. Se ejecutan diversos tipos de pruebas para verificar que el software funciona según lo especificado y cumple con las expectativas de calidad.",
    },
    {
      id: 51011,
      moduloId: 510,
      pregunta:
        "¿Qué se busca asegurar mediante la documentación de requisitos y pruebas?",
      opciones: [
        "Que el código sea fácilmente ejecutable",
        "Que se cumpla el cronograma",
        "Que el software cumpla con las expectativas",
        "Que los desarrolladores tengan acceso a Internet",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "La documentación de requisitos y pruebas busca asegurar que el software cumpla con las expectativas del cliente y los usuarios. Establece criterios claros de aceptación y proporciona evidencia objetiva de que el sistema satisface lo solicitado.",
    },
    {
      id: 51012,
      moduloId: 510,
      pregunta:
        "¿En qué fase se realiza la recopilación de necesidades del cliente?",
      opciones: [
        "Mantenimiento",
        "Análisis de requisitos",
        "Diseño",
        "Pruebas",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "En la fase de análisis de requisitos se realiza la recopilación de necesidades del cliente. Durante esta fase se trabaja estrechamente con los stakeholders para identificar, documentar y priorizar lo que el sistema debe hacer y cómo debe hacerlo.",
    },
    {
      id: 51013,
      moduloId: 510,
      pregunta:
        "¿Qué fase permite corregir errores detectados una vez entregado el software?",
      opciones: [
        "Pruebas",
        "Diseño",
        "Mantenimiento",
        "Análisis de requisitos",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "La fase de mantenimiento permite corregir errores detectados una vez entregado el software. Esta fase incluye actividades como corrección de defectos, adaptación a nuevos entornos, mejoras de rendimiento y adición de nuevas funcionalidades.",
    },
    {
      id: 51014,
      moduloId: 510,
      pregunta:
        "¿Qué caracteriza al modelo en cascada frente a otros modelos de desarrollo?",
      opciones: [
        "Las fases se realizan de forma simultánea",
        "Se permiten retrocesos entre fases",
        "Las fases son secuenciales y no se avanza sin completar la anterior",
        "Solo se aplica a pequeños proyectos",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "El modelo en cascada se caracteriza porque las fases son secuenciales y no se avanza sin completar la anterior. Cada fase debe completarse totalmente antes de pasar a la siguiente, sin retrocesos naturales en el proceso.",
    },
    {
      id: 51015,
      moduloId: 510,
      pregunta: "¿Cuál es la ventaja del modelo incremental?",
      opciones: [
        "Requiere todos los requisitos al inicio",
        "Entrega partes funcionales en cada incremento",
        "No permite retroalimentación",
        "Evita superposición entre diseño e implementación",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "La principal ventaja del modelo incremental es que entrega partes funcionales en cada incremento. Esto permite obtener retroalimentación temprana del cliente, reducir riesgos y proporcionar valor al usuario de forma gradual durante el desarrollo.",
    },
    {
      id: 51016,
      moduloId: 510,
      pregunta:
        "¿En qué fase se corrigen los defectos reportados tras la entrega del software al cliente?",
      opciones: [
        "Análisis de requisitos",
        "Mantenimiento",
        "Implementación",
        "Diseño",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "En la fase de mantenimiento se corrigen los defectos reportados tras la entrega del software al cliente. Esta fase se encarga del mantenimiento correctivo, adaptativo, perfectivo y preventivo del software ya desplegado.",
    },
    {
      id: 51017,
      moduloId: 510,
      pregunta:
        "¿Cuál de estas fases suele ser la primera en un ciclo de vida de desarrollo de software?",
      opciones: [
        "Diseño",
        "Pruebas",
        "Implementación",
        "Análisis de requisitos",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "El análisis de requisitos suele ser la primera fase en un ciclo de vida de desarrollo de software. En esta fase se identifican y documentan las necesidades del cliente, estableciendo los cimientos para todas las fases posteriores del proyecto.",
    },
    {
      id: 51018,
      moduloId: 510,
      pregunta: "¿Cuál es el propósito principal de la fase de pruebas?",
      opciones: [
        "Añadir nuevas funcionalidades",
        "Detectar errores y verificar que el software cumple los requisitos",
        "Traducir el diseño en código",
        "Interactuar con el cliente",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "El propósito principal de la fase de pruebas es detectar errores y verificar que el software cumple los requisitos establecidos. Las pruebas proporcionan evidencia objetiva de la calidad y funcionalidad del sistema desarrollado.",
    },
    {
      id: 51019,
      moduloId: 510,
      pregunta: "¿Qué es una máquina virtual de hardware?",
      opciones: [
        "Un entorno de red compartido para múltiples usuarios",
        "Un sistema operativo optimizado para servidores",
        "Un software que emula una computadora completa con su propio sistema operativo",
        "Un programa que traduce código fuente en tiempo real",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Una máquina virtual de hardware es un software que emula una computadora completa con su propio sistema operativo. Permite ejecutar múltiples sistemas operativos de forma aislada en el mismo hardware físico, emulando completamente los componentes del hardware subyacente.",
    },
    {
      id: 51020,
      moduloId: 510,
      pregunta:
        "¿Qué componente de una máquina virtual gestiona la asignación de recursos físicos?",
      opciones: [
        "El intérprete",
        "El compilador",
        "El hipervisor",
        "El contenedor",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "El hipervisor es el componente que gestiona la asignación de recursos físicos en una máquina virtual. Actúa como intermediario entre el hardware físico y las máquinas virtuales, controlando el acceso a CPU, memoria, almacenamiento y otros recursos.",
    },
    {
      id: 51021,
      moduloId: 510,
      pregunta:
        "¿Cuál de las siguientes es una ventaja de usar máquinas virtuales?",
      opciones: [
        "Requieren menos memoria que los sistemas reales",
        "Eliminan completamente la necesidad de un sistema operativo",
        "Permiten ejecutar varios sistemas operativos en el mismo hardware",
        "No necesitan recursos físicos para funcionar",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Una ventaja clave de las máquinas virtuales es que permiten ejecutar varios sistemas operativos en el mismo hardware físico de forma simultánea y aislada. Esto maximiza el uso de recursos y facilita la gestión de múltiples entornos.",
    },
    {
      id: 51022,
      moduloId: 510,
      pregunta:
        "¿Qué tipo de máquina virtual ejecuta instrucciones a nivel de lenguaje de programación y no emula hardware completo?",
      opciones: [
        "Máquina virtual de hardware",
        "Máquina virtual de proceso",
        "Máquina virtual de red",
        "Máquina física compartida",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Una máquina virtual de proceso ejecuta instrucciones a nivel de lenguaje de programación sin emular hardware completo. Ejemplos incluyen la JVM (Java Virtual Machine) o el CLR (.NET), que interpretan bytecode específico del lenguaje.",
    },
    {
      id: 51023,
      moduloId: 510,
      pregunta:
        "¿Qué aplicación permite crear, gestionar y ejecutar máquinas virtuales desde un entorno gráfico?",
      opciones: ["Git Bash", "Eclipse", "VirtualBox", "Wireshark"],
      respuestaCorrecta: 2,
      explicacion:
        "VirtualBox es una aplicación que permite crear, gestionar y ejecutar máquinas virtuales desde un entorno gráfico. Es una solución de virtualización gratuita y multiplataforma que facilita la administración de VMs sin necesidad de línea de comandos.",
    },
    {
      id: 51024,
      moduloId: 510,
      pregunta:
        "¿Qué nivel de abstracción tiene un lenguaje como el ensamblador?",
      opciones: ["Muy alto", "Bajo", "Intermedio", "Nulo"],
      respuestaCorrecta: 1,
      explicacion:
        "El lenguaje ensamblador tiene un nivel de abstracción bajo. Se sitúa un nivel por encima del lenguaje máquina, ofreciendo una representación simbólica de las instrucciones del procesador específico, pero mantiene una relación muy directa con el hardware.",
    },
    {
      id: 51025,
      moduloId: 510,
      pregunta:
        "¿Cuál de los siguientes es un ejemplo de lenguaje de muy alto nivel?",
      opciones: ["Ensamblador", "C", "Java", "Binario"],
      respuestaCorrecta: 2,
      explicacion:
        "Java es un ejemplo de lenguaje de muy alto nivel. Proporciona abstracciones significativas que ocultan los detalles del hardware y permiten expresar algoritmos de forma más cercana al pensamiento humano, con características como gestión automática de memoria y portabilidad.",
    },
    {
      id: 51026,
      moduloId: 510,
      pregunta:
        "¿Qué herramienta proporciona funciones como resaltado de sintaxis, depuración y ejecución del código?",
      opciones: [
        "Compilador",
        "Sistema operativo",
        "Intérprete",
        "Entorno de desarrollo integrado (IDE)",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "Un Entorno de Desarrollo Integrado (IDE) proporciona funciones como resaltado de sintaxis, depuración y ejecución del código. Los IDEs integran múltiples herramientas de desarrollo en una sola aplicación para facilitar la programación.",
    },
    {
      id: 51027,
      moduloId: 510,
      pregunta:
        "¿Qué IDE es especialmente popular para desarrollo en Java empresarial?",
      opciones: ["Visual Studio", "Android Studio", "Eclipse", "NetBeans"],
      respuestaCorrecta: 2,
      explicacion:
        "Eclipse es especialmente popular para desarrollo en Java empresarial. Con su naturaleza de código abierto y amplio ecosistema de plugins, proporciona herramientas específicas para desarrollo Java EE, integración con servidores de aplicaciones y frameworks empresariales.",
    },
    {
      id: 51028,
      moduloId: 510,
      pregunta:
        "¿Cuál es una ventaja clave de usar un lenguaje de alto nivel frente a uno de bajo nivel?",
      opciones: [
        "Mayor control sobre el hardware",
        "Mejor comprensión de datos",
        "Facilidad de escritura y mantenimiento del código",
        "Más consumo de recursos",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Una ventaja clave de los lenguajes de alto nivel es la facilidad de escritura y mantenimiento del código. Las abstracciones proporcionadas permiten expresar algoritmos de forma más intuitiva y reducen la complejidad del desarrollo y mantenimiento.",
    },
    {
      id: 51029,
      moduloId: 510,
      pregunta:
        "¿Qué técnica agrupa entradas válidas en conjuntos representativos para diseñar casos de prueba?",
      opciones: [
        "Refactorización",
        "Pruebas de integración",
        "Clases de equivalencia",
        "Análisis estático",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Las clases de equivalencia es la técnica que agrupa entradas válidas en conjuntos representativos para diseñar casos de prueba. Divide el dominio de entrada en grupos donde los elementos se comportarían de manera similar, optimizando el proceso de pruebas.",
    },
    {
      id: 51030,
      moduloId: 510,
      pregunta:
        "¿Qué representa una partición inválida en una clase de equivalencia?",
      opciones: [
        "Un subconjunto de entradas válidas",
        "Una entrada que no debe ser aceptada por el sistema",
        "Un valor límite",
        "Un caso ideal de prueba",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Una partición inválida en una clase de equivalencia representa una entrada que no debe ser aceptada por el sistema. Contiene valores que están fuera de los rangos especificados, tienen formatos incorrectos o violan alguna restricción del sistema.",
    },
    {
      id: 51031,
      moduloId: 510,
      pregunta: "¿Qué mide la complejidad ciclomática de un bloque de código?",
      opciones: [
        "El número de métodos",
        "La cantidad de errores posibles",
        "La cantidad de caminos lógicamente independientes",
        "El número de líneas por función",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "La complejidad ciclomática mide la cantidad de caminos lógicamente independientes en un bloque de código. Se calcula contando el número de decisiones lógicas (condiciones) más uno, indicando la complejidad estructural del programa.",
    },
    {
      id: 51032,
      moduloId: 510,
      pregunta:
        "¿Qué representa un nodo en el grafo de flujo usado para calcular la complejidad ciclomática?",
      opciones: [
        "Una prueba unitaria",
        "Un archivo fuente",
        "Una instrucción o conjunto de instrucciones secuenciales",
        "Una clase de equivalencia",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Un nodo en el grafo de flujo representa una instrucción o conjunto de instrucciones secuenciales. Cada nodo corresponde a un bloque básico de código con un único punto de entrada y salida, sin posibilidad de bifurcación dentro del bloque.",
    },
    {
      id: 51033,
      moduloId: 510,
      pregunta:
        "¿Qué tipo de prueba automatizada se ejecuta tras cada modificación del sistema?",
      opciones: [
        "Prueba de humo",
        "Prueba de integración",
        "Prueba de regresión",
        "Prueba beta",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Las pruebas de regresión son las que se ejecutan tras cada modificación del sistema. Verifican que los cambios recientes no han afectado negativamente a funcionalidades existentes que funcionaban correctamente.",
    },
    {
      id: 51034,
      moduloId: 510,
      pregunta:
        "¿Qué tipo de prueba evalúa si una función devuelve el valor esperado para una entrada concreta?",
      opciones: [
        "Prueba de integración",
        "Prueba de caja negra",
        "Prueba de rendimiento",
        "Prueba unitaria",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "Las pruebas unitarias evalúan si una función devuelve el valor esperado para una entrada concreta. Se centran en verificar el comportamiento correcto de unidades individuales de código de forma aislada del resto del sistema.",
    },
    {
      id: 51035,
      moduloId: 510,
      pregunta:
        "¿Qué estrategia ayuda a identificar defectos antes de la ejecución del código?",
      opciones: [
        "Pruebas exploratorias",
        "Análisis estático del código",
        "Pruebas funcionales",
        "Refactorización",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "El análisis estático del código ayuda a identificar defectos antes de la ejecución. Examina el código fuente sin ejecutarlo, detectando patrones problemáticos, violaciones de estándares y otros indicadores de posibles problemas.",
    },
    {
      id: 51036,
      moduloId: 510,
      pregunta:
        "¿Qué herramienta facilita la automatización de pruebas repetitivas y validación continua?",
      opciones: [
        "Editor de texto",
        "Depurador de código",
        "Framework de pruebas",
        "Gestor de versiones",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Un framework de pruebas facilita la automatización de pruebas repetitivas y validación continua. Proporciona estructura, herramientas y bibliotecas para escribir, organizar y ejecutar pruebas de manera sistemática y automatizada.",
    },
    {
      id: 51037,
      moduloId: 510,
      pregunta:
        "¿Qué condición podría indicar una complejidad ciclomática elevada?",
      opciones: [
        "Muchas pruebas unitarias",
        "Presencia de múltiples condicionales y bucles anidados",
        "Ausencia de clases de prueba",
        "Comentarios excesivos",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "La presencia de múltiples condicionales y bucles anidados indica una complejidad ciclomática elevada. Un valor alto sugiere un código difícil de entender, probar y mantener, con mayor propensión a errores.",
    },
    {
      id: 51038,
      moduloId: 510,
      pregunta:
        "¿Cuál es el propósito de automatizar las pruebas en un proyecto de software?",
      opciones: [
        "Reducir la necesidad de documentación",
        "Eliminar completamente los errores",
        "Mejorar la eficiencia y repetibilidad de las validaciones",
        "Reemplazar a los testers humanos",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "El propósito de automatizar las pruebas es mejorar la eficiencia y repetibilidad de las validaciones. Permite ejecutar pruebas frecuentemente y de manera consistente, detectando rápidamente cualquier regresión introducida en el código.",
    },
    {
      id: 51039,
      moduloId: 510,
      pregunta:
        "¿Qué beneficio clave aporta la documentación en proyectos con múltiples equipos?",
      opciones: [
        "Aumenta la complejidad del diseño",
        "Mejora la colaboración",
        "Elimina la necesidad de pruebas",
        "Reduce el tamaño del software",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "La documentación mejora la colaboración en proyectos con múltiples equipos. Facilita la comunicación, el entendimiento común del proyecto y la coordinación entre diferentes grupos de trabajo, reduciendo malentendidos y errores.",
    },
    {
      id: 51040,
      moduloId: 510,
      pregunta:
        "¿Cuál es una de las razones por las que la documentación facilita el mantenimiento?",
      opciones: [
        "Permite programar más rápido",
        "Reduce la necesidad de pruebas unitarias",
        "Disminuye la dependencia de los desarrolladores originales",
        "Mejora la velocidad del compilador",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "La documentación facilita el mantenimiento porque disminuye la dependencia de los desarrolladores originales. Permite que nuevos desarrolladores comprendan el sistema más rápidamente, facilitando las tareas de mantenimiento y evolución del software.",
    },
    {
      id:51041,
      moduloId:510,
      pregunta:
      "¿Qué elemento garantiza la trazabilidad entre requisitos y casos de prueba?",
      opciones:[
        "El backlog",
        "El cronograma de enrtegas",
        "La documentación estructurada del proyecto",
        "El entorno de desarrollo",
      ],
      respuestaCorrecta: 2,
      explicacion:
      ""
    },
    {
      id:51042,
      moduloId:510,
      pregunta:
      "Qué sucede tras la fase de implementación en el ciclo de vida del software?",
      opciones:[
        "Se recoge la retroalimentación inicial",
        "Se eliminan los errores en tiempo de diseño",
        "Se realizan pruebas para validar el funcionamiento del sistema",
        "Se redacta el código fuente"
      ],
      respuesta correccta: 2,
      explicacion:
      ""
    }
  ],
};

export default moduloExamenFinal2Entornos;
