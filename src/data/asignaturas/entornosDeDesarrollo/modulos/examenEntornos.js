/**
* Datos del módulo de Examen Final perteneciente a la asignatura de Entornos de Desarrollo.
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
export const moduloExamenFinalEntornos = {
id: 509,
nombre: "Examen Entornos de Desarrollo",
esExamen: true,
asignaturaId: 5,
descripcion: "Examen final que abarca todos los contenidos de la asignatura: ciclo de vida del software, metodologías, UML, control de versiones, pruebas y mantenimiento de software.",
preguntas: [
    {
        id: 5901,
        moduloId: 509,
        pregunta: "¿En qué fase del ciclo de vida del software se implementa el diseño del sistema mediante código?",
        opciones: [
            "Análisis de Requisitos",
            "Mantenimiento",
            "Implementación",
            "Pruebas"
        ],
        respuestaCorrecta: 2,
        explicacion: "La fase de implementación es donde se traduce el diseño del sistema en código ejecutable. Durante esta etapa, los programadores escriben el código fuente siguiendo las especificaciones y diagramas elaborados en la fase de diseño. Se implementan las estructuras de datos, algoritmos, interfaces de usuario y componentes del sistema según lo planificado. Además de la escritura del código, esta fase incluye actividades como compilación, depuración para corregir errores de sintaxis y lógica, integración de los diferentes módulos desarrollados, y documentación interna del código. La implementación transforma las abstracciones y representaciones del diseño en un producto de software tangible y funcional que puede ser posteriormente probado, validado y desplegado en el entorno de producción."
    },
    {
        id: 5902,
        moduloId: 509,
        pregunta: "¿Qué tipo de mantenimiento corrige errores detectados en el software tras su entrega?",
        opciones: [
            "Perfectivo",
            "Adaptativo",
            "Iterativo",
            "Correctivo"
        ],
        respuestaCorrecta: 3,
        explicacion: "El mantenimiento correctivo es el tipo de mantenimiento que se ocupa específicamente de corregir errores detectados en el software después de su entrega. Estos errores pueden ser identificados por los usuarios durante la operación normal del sistema o a través de reportes de incidencias. A diferencia de otros tipos de mantenimiento, el correctivo es generalmente reactivo, respondiendo a fallos ya ocurridos para restaurar la funcionalidad esperada del software. Este tipo de mantenimiento busca eliminar comportamientos no deseados, corregir resultados incorrectos, resolver problemas de rendimiento o estabilidad, y subsanar cualquier discrepancia entre el comportamiento real del software y lo especificado en los requisitos. El mantenimiento correctivo es fundamental para garantizar la fiabilidad y usabilidad continua del software a lo largo de su vida útil."
    },
    {
        id: 5903,
        moduloId: 509,
        pregunta: "¿Qué es un \"bad smell\" en el contexto del mantenimiento del código?",
        opciones: [
            "Una mala práctica de documentación",
            "Un error que impide la compilación",
            "Un síntoma de diseño deficiente en el código",
            "Una variable mal nombrada"
        ],
        respuestaCorrecta: 2,
        explicacion: "Un \"bad smell\" o \"mal olor\" en el contexto del mantenimiento del código es un síntoma de diseño deficiente en el código. Este término, popularizado por Martin Fowler y Kent Beck, se refiere a patrones o características en el código que sugieren problemas más profundos de diseño o implementación. Estos síntomas no son necesariamente errores técnicos que impidan la compilación o ejecución del programa, sino indicios de que el código podría ser difícil de mantener, propenso a errores o complicado de extender en el futuro. Ejemplos comunes incluyen métodos excesivamente largos, clases con demasiadas responsabilidades, duplicación de código, jerarquías de herencia complejas o acoplamiento excesivo entre componentes. Los \"bad smells\" sirven como señales de advertencia que sugieren dónde podría ser beneficiosa una refactorización para mejorar la calidad del código."
    },
    {
        id: 5904,
        moduloId: 509,
        pregunta: "¿Qué caracteriza a la metodología ágil Scrum respecto a la priorización de requisitos?",
        opciones: [
            "Es responsabilidad del Scrum Master",
            "Es responsabilidad del Product Owner",
            "El equipo de desarrollo define las prioridades",
            "No existe backlog en Scrum"
        ],
        respuestaCorrecta: 1,
        explicacion: "En la metodología ágil Scrum, la priorización de requisitos es responsabilidad exclusiva del Product Owner. Este rol tiene la autoridad y responsabilidad de gestionar el Product Backlog, que es una lista ordenada de todas las características, mejoras y correcciones que constituyen el trabajo pendiente para el producto. El Product Owner prioriza los ítems del backlog basándose en el valor de negocio, riesgo, dependencias y otros factores, asegurando que el equipo trabaje siempre en lo más valioso para los stakeholders. Aunque el equipo de desarrollo y el Scrum Master pueden proporcionar información técnica y facilitar el proceso, la decisión final sobre las prioridades recae en el Product Owner como representante de los intereses del cliente y del negocio. Esta clara asignación de responsabilidades es fundamental para el funcionamiento efectivo del marco Scrum."
    },
    {
        id: 5905,
        moduloId: 509,
        pregunta: "¿Qué técnica consiste en mejorar el diseño interno del código sin alterar su funcionalidad?",
        opciones: [
            "Testing automatizado",
            "Refactorización",
            "Reingeniería",
            "Documentación técnica"
        ],
        respuestaCorrecta: 1,
        explicacion: "La refactorización es la técnica que consiste en mejorar el diseño interno del código sin alterar su funcionalidad externa. Definida por Martin Fowler como \"un cambio realizado a la estructura interna del software para hacerlo más fácil de entender y más barato de modificar, sin cambiar su comportamiento observable\", esta práctica se centra en mejorar aspectos como la legibilidad, simplicidad, mantenibilidad y eficiencia del código. La refactorización incluye actividades como renombrar variables para mayor claridad, extraer métodos para reducir la complejidad, eliminar código duplicado, simplificar condicionales complejas o reorganizar la jerarquía de clases. A diferencia de la reingeniería, que puede implicar cambios significativos en la funcionalidad, la refactorización preserva meticulosamente el comportamiento existente, idealmente verificando esta preservación mediante pruebas automatizadas antes y después de los cambios."
    },
    {
        id: 5906,
        moduloId: 509,
        pregunta: "¿Qué problema se conoce como \"Shotgun Surgery\"?",
        opciones: [
            "Cambiar una clase provoca errores de compilación",
            "Un cambio en una clase requiere cambios en muchas otras",
            "Se mezclan demasiadas responsabilidades en una clase",
            "El código se divide en métodos demasiado pequeños"
        ],
        respuestaCorrecta: 1,
        explicacion: "\"Shotgun Surgery\" (Cirugía de Escopeta) es un problema o \"mal olor\" de código que ocurre cuando un cambio en una clase o componente requiere cambios en muchas otras partes dispersas del sistema. Este síntoma indica un alto acoplamiento y una baja cohesión en el diseño del software, donde una responsabilidad o concepto único está fragmentado a través de múltiples clases. Cuando surge la necesidad de modificar esta funcionalidad dispersa, el desarrollador debe identificar y cambiar todos los lugares afectados, lo que aumenta el riesgo de errores por omisión y dificulta el mantenimiento. A diferencia de \"Divergent Change\" (donde una clase cambia por muchas razones diferentes), \"Shotgun Surgery\" implica que un solo cambio conceptual afecta a muchas clases. La solución típica es aplicar refactorizaciones como 'Move Method', 'Move Field' o 'Inline Class' para consolidar la funcionalidad relacionada y mejorar la cohesión del sistema."
    },
    {
        id: 5907,
        moduloId: 509,
        pregunta: "¿Qué fase del ciclo de vida del software se encarga de verificar que se cumplan los requisitos establecidos?",
        opciones: [
            "Implementación",
            "Mantenimiento",
            "Pruebas",
            "Diseño"
        ],
        respuestaCorrecta: 2,
        explicacion: "La fase de pruebas en el ciclo de vida del software es la encargada de verificar que se cumplan los requisitos establecidos. Durante esta fase, se ejecutan diversos tipos de pruebas (unitarias, de integración, de sistema, de aceptación) para comprobar que el software funciona según lo especificado y cumple con las expectativas de calidad. Las pruebas evalúan tanto los requisitos funcionales (lo que el sistema debe hacer) como los no funcionales (cómo debe hacerlo). Se diseñan casos de prueba basados en las especificaciones y se comparan los resultados obtenidos con los esperados. Además de detectar defectos para su corrección, las pruebas proporcionan evidencia objetiva de que el software satisface los requisitos establecidos en las fases anteriores, validando así que el producto desarrollado se ajusta a lo que se solicitó inicialmente."
    },
    {
        id: 5908,
        moduloId: 509,
        pregunta: "¿Cuál es el principal objetivo del mantenimiento perfectivo en el software?",
        opciones: [
            "Corregir errores reportados por los usuarios",
            "Adaptar el software a nuevas plataformas o entornos",
            "Mejorar el rendimiento o la funcionalidad sin que exista un fallo previo",
            "Eliminar código duplicado"
        ],
        respuestaCorrecta: 2,
        explicacion: "El principal objetivo del mantenimiento perfectivo en el software es mejorar el rendimiento o la funcionalidad sin que exista un fallo previo. A diferencia del mantenimiento correctivo (que repara errores) o el adaptativo (que ajusta el software a cambios en el entorno), el mantenimiento perfectivo se centra en optimizar o ampliar un software que ya funciona correctamente. Este tipo de mantenimiento responde a solicitudes de mejora de los usuarios, nuevos requisitos de negocio, o iniciativas proactivas para mantener el software competitivo y valioso. Puede incluir actividades como optimización de rendimiento, mejora de la interfaz de usuario, adición de nuevas características, refinamiento de algoritmos, o reestructuración para facilitar el mantenimiento futuro. El mantenimiento perfectivo representa una inversión proactiva en el software para aumentar su valor, usabilidad y relevancia a lo largo del tiempo."
    },
    {
        id: 5909,
        moduloId: 509,
        pregunta: "¿Cuál es la solución común para métodos con muchos parámetros?",
        opciones: [
            "Escribir comentarios detallados",
            "Duplicar el método con variantes",
            "Agrupar los parámetros en un objeto",
            "Eliminar parámetros sin revisión"
        ],
        respuestaCorrecta: 2,
        explicacion: "Agrupar los parámetros en un objeto es la solución común y más efectiva para métodos con muchos parámetros, un problema conocido como \"Long Parameter List\" en refactorización. Esta técnica, llamada \"Introduce Parameter Object\", consiste en crear una clase o estructura que encapsule los parámetros relacionados. Por ejemplo, en lugar de pasar cinco parámetros relacionados con una dirección, se crearía un objeto Dirección que los contenga. Esta solución ofrece múltiples ventajas: reduce la complejidad de las firmas de los métodos, mejora la legibilidad del código, facilita la adición de nuevos parámetros sin modificar interfaces, y promueve la cohesión al agrupar datos relacionados. Además, el objeto creado puede encapsular comportamiento relacionado con esos datos, siguiendo principios de programación orientada a objetos y reduciendo la lógica duplicada en el sistema."
    },
    {
        id: 5910,
        moduloId: 509,
        pregunta: "¿Qué ventaja ofrece una refactorización frecuente en lugar de una única y compleja?",
        opciones: [
            "Disminuye las coberturas de pruebas",
            "Reduce la reutilización del código",
            "Evita errores de producción",
            "Mejora el mantenimiento y minimiza el riesgo"
        ],
        respuestaCorrecta: 3,
        explicacion: "La refactorización frecuente en lugar de una única y compleja mejora el mantenimiento y minimiza el riesgo. Las refactorizaciones pequeñas y graduales permiten realizar cambios controlados y focalizados en áreas específicas del código, lo que facilita entender su impacto, verificar que no alteran el comportamiento, y corregir rápidamente cualquier problema que surja. Cada pequeña refactorización puede ser probada de forma independiente, reduciendo la complejidad de las pruebas y aumentando la confianza en los cambios. Además, las refactorizaciones frecuentes distribuyen el esfuerzo de mantenimiento a lo largo del tiempo, integrándolo en el desarrollo normal en lugar de convertirlo en un proyecto extraordinario y riesgoso. Este enfoque incremental, similar a la filosofía de integración continua, previene la acumulación de deuda técnica y mantiene el código en un estado saludable permanentemente, al tiempo que reduce el riesgo de introducir regresiones significativas."
    },
    {
        id: 5911,
        moduloId: 509,
        pregunta: "¿Qué representa la complejidad ciclomática en un bloque de código?",
        opciones: [
            "La cantidad de comentarios por línea",
            "El número de caminos independientes en el programa",
            "La cantidad de clases heredadas",
            "El número de variables globales"
        ],
        respuestaCorrecta: 1,
        explicacion: "La complejidad ciclomática representa el número de caminos independientes en el programa o bloque de código. Desarrollada por Thomas McCabe en 1976, esta métrica cuantifica la complejidad estructural de un programa calculando el número de decisiones lógicas independientes que contiene más uno. En términos prácticos, se calcula como el número de condiciones o puntos de decisión (if, switch, while, for, do-while, etc.) más uno. Un valor alto indica un código más complejo con múltiples rutas de ejecución posibles, lo que generalmente lo hace más difícil de entender, probar y mantener. La complejidad ciclomática es particularmente útil para identificar componentes que podrían beneficiarse de refactorización y para estimar el esfuerzo necesario en pruebas, ya que indica el número mínimo de casos de prueba necesarios para cubrir todos los caminos posibles de ejecución en el código."
    },
    {
        id: 5912,
        moduloId: 509,
        pregunta: "¿Qué problema refleja el mal olor de código llamado \"Shotgun Surgery\"?",
        opciones: [
            "Clases sin métodos",
            "Repetición de estructuras de control",
            "Cambiar una parte del sistema implica modificar muchas otras",
            "Uso excesivo de herencia"
        ],
        respuestaCorrecta: 2,
        explicacion: "El mal olor de código llamado \"Shotgun Surgery\" (Cirugía de Escopeta) refleja el problema donde cambiar una parte del sistema implica modificar muchas otras partes dispersas. Este síntoma indica un alto acoplamiento y baja cohesión en el diseño del software, donde una responsabilidad o concepto está fragmentado a través de múltiples clases o módulos. Cuando surge la necesidad de realizar un cambio en esta funcionalidad fragmentada, el desarrollador debe identificar y modificar todos los lugares afectados, como si disparara con una escopeta a múltiples objetivos. Esto aumenta el riesgo de errores por omisión (olvidar actualizar algún lugar afectado) y hace el mantenimiento más costoso y propenso a errores. A diferencia de \"Divergent Change\" (donde una clase cambia por muchas razones), \"Shotgun Surgery\" implica que un solo cambio conceptual afecta a muchas clases. Las soluciones típicas incluyen técnicas de refactorización para consolidar la funcionalidad relacionada."
    },
    {
        id: 5913,
        moduloId: 509,
        pregunta: "¿Cuál de las siguientes representa un atributo de una clase con demasiadas responsabilidades?",
        opciones: [
            "Nombre corto",
            "Comentarios extensos",
            "Atributos privados",
            "Muchos métodos o atributos"
        ],
        respuestaCorrecta: 3,
        explicacion: "La presencia de muchos métodos o atributos es un atributo característico de una clase con demasiadas responsabilidades, conocida comúnmente como \"God Class\" o \"Blob\". Este anti-patrón viola el Principio de Responsabilidad Única (SRP) de SOLID, que establece que una clase debería tener una única razón para cambiar. Cuando una clase acumula numerosos métodos y atributos, generalmente indica que está asumiendo múltiples responsabilidades distintas que deberían distribuirse entre varias clases más específicas y cohesivas. Estas clases sobrecargadas suelen ser difíciles de entender, mantener y probar, tienen mayor riesgo de introducir errores cuando se modifican, y presentan barreras para la reutilización de código. La solución típica es aplicar refactorizaciones como \"Extract Class\" para dividir la clase en componentes más pequeños y enfocados, cada uno con una responsabilidad bien definida."
    },
    {
        id: 5914,
        moduloId: 509,
        pregunta: "¿Qué técnica permite agrupar entradas de prueba válidas en subconjuntos que representen clases?",
        opciones: [
            "Técnicas de refactorización",
            "Pruebas unitarias",
            "Clases de equivalencia",
            "Análisis de regresión"
        ],
        respuestaCorrecta: 2,
        explicacion: "La técnica de clases de equivalencia permite agrupar entradas de prueba válidas en subconjuntos o clases representativas. Esta estrategia divide el dominio de entrada en grupos donde los elementos de cada clase se comportarían de manera similar al ser procesados por el sistema, por lo que probar un valor representativo de cada clase es suficiente para verificar el comportamiento con todos los valores de esa clase. Por ejemplo, si un campo acepta valores entre 1 y 100, en lugar de probar los 100 valores posibles, se podría probar un valor representativo del rango válido (como 50) y valores representativos de rangos inválidos (como 0 y 101). Esta técnica optimiza significativamente el proceso de pruebas, reduciendo el número de casos necesarios sin sacrificar la cobertura efectiva, lo que permite diseñar conjuntos de pruebas más eficientes y manejables mientras se mantiene la calidad del proceso de verificación."
    },
    {
        id: 5915,
        moduloId: 509,
        pregunta: "En un caso de prueba basado en clases de equivalencia, ¿qué representa una partición inválida?",
        opciones: [
            "Un subconjunto de entradas no permitidas por el sistema",
            "Un error de compilación",
            "El caso de prueba ideal",
            "Un conjunto de variables"
        ],
        respuestaCorrecta: 0,
        explicacion: "En un caso de prueba basado en clases de equivalencia, una partición inválida representa un subconjunto de entradas no permitidas por el sistema. Al aplicar la técnica de clases de equivalencia, se dividen los datos de entrada en particiones o clases que el sistema debería tratar de manera similar. Estas particiones se clasifican en válidas (entradas que el sistema debe aceptar y procesar correctamente) e inválidas (entradas que el sistema debe rechazar o manejar como errores). Las particiones inválidas contienen valores que están fuera de los rangos especificados, tienen formatos incorrectos o violan alguna restricción del sistema. Probar con valores de estas particiones inválidas es crucial para verificar que el software valida adecuadamente las entradas, rechaza datos incorrectos y maneja las excepciones de forma apropiada, contribuyendo así a la robustez del sistema y su capacidad para responder correctamente ante situaciones anómalas."
    },
    {
        id: 5916,
        moduloId: 509,
        pregunta: "¿Qué representa un nodo en el grafo de flujo utilizado para calcular la complejidad ciclomática?",
        opciones: [
            "Una clase",
            "Una prueba",
            "Una instrucción o conjunto de instrucciones secuenciales",
            "Un archivo del proyecto"
        ],
        respuestaCorrecta: 2,
        explicacion: "En el grafo de flujo utilizado para calcular la complejidad ciclomática, un nodo representa una instrucción o conjunto de instrucciones secuenciales en el código. Específicamente, cada nodo corresponde a un bloque básico de código, que es una secuencia de instrucciones con un único punto de entrada (al inicio) y un único punto de salida (al final), sin posibilidad de bifurcación o salto dentro del bloque. Los nodos se conectan mediante aristas o flechas que representan las transferencias de control posibles entre estos bloques secuenciales, como las producidas por estructuras condicionales (if-else), bucles (for, while) o saltos (goto, break, continue). Este grafo de flujo proporciona una representación visual de todos los caminos de ejecución posibles a través del código, permitiendo calcular la complejidad ciclomática como el número de aristas menos el número de nodos más dos, o equivalentemente, como el número de regiones cerradas en el grafo más uno."
    },
    {
        id: 5917,
        moduloId: 509,
        pregunta: "¿Cuál de las siguientes estrategias mejora el mantenimiento de código al detectar malos olores?",
        opciones: [
            "Eliminar comentarios",
            "Aumentar el número de condicionales",
            "Revisión de código y herramientas de análisis estático",
            "Duplicar métodos para simplificar"
        ],
        respuestaCorrecta: 2,
        explicacion: "La revisión de código y herramientas de análisis estático constituyen la estrategia más efectiva para mejorar el mantenimiento de código mediante la detección de malos olores. Las revisiones de código realizadas por otros desarrolladores aportan una perspectiva fresca que puede identificar problemas no evidentes para el autor original. Complementariamente, las herramientas de análisis estático como SonarQube, ESLint, PMD o FindBugs examinan automáticamente el código sin ejecutarlo, detectando patrones problemáticos, violaciones de estándares, complejidad excesiva, duplicación y otros indicadores de posibles problemas de diseño o implementación. Estas herramientas pueden integrarse en el proceso de desarrollo continuo, proporcionando feedback inmediato y consistente. La combinación de revisión humana, que aporta contexto y juicio cualitativo, con el análisis automatizado, que ofrece consistencia y exhaustividad, crea un sistema robusto para identificar tempranamente problemas de mantenibilidad y actuar sobre ellos antes de que se acumule deuda técnica significativa."
    },
    {
        id: 5918,
        moduloId: 509,
        pregunta: "¿Qué indica la presencia de muchos condicionales y bucles anidados en un método?",
        opciones: [
            "Alta cohesión",
            "Complejidad ciclomática elevada",
            "Bajo acoplamiento",
            "Modularidad"
        ],
        respuestaCorrecta: 1,
        explicacion: "La presencia de muchos condicionales y bucles anidados en un método indica una complejidad ciclomática elevada. La complejidad ciclomática es una métrica que mide el número de caminos independientes a través del código, calculada contando el número de decisiones lógicas (como if, switch, while, for) más uno. Un valor alto sugiere un código difícil de entender, probar y mantener, con mayor propensión a errores. Los métodos con múltiples niveles de anidamiento de control de flujo son particularmente problemáticos, ya que requieren que el lector mantenga en mente múltiples condiciones simultáneamente. Estos métodos a menudo violan el principio de responsabilidad única haciendo demasiadas cosas o tomando demasiadas decisiones. La refactorización recomendada incluye dividir el método en partes más pequeñas y cohesivas, extraer bloques en métodos separados, simplificar lógica condicional, o utilizar patrones de diseño como Strategy o State para manejar comportamientos variables."
    },
    {
        id: 5919,
        moduloId: 509,
        pregunta: "¿Cuál de los siguientes es un síntoma de \"Feature Envy\"?",
        opciones: [
            "El método usa datos de otra clase más que de la suya",
            "El método está mal indentado",
            "El método está declarado como estático",
            "El método contiene varias excepciones"
        ],
        respuestaCorrecta: 0,
        explicacion: "\"Feature Envy\" (envidia de características) es un mal olor de código que se manifiesta cuando un método usa datos de otra clase más que de la suya propia. Este síntoma indica que el método parece más interesado en una clase diferente a la que pertenece, accediendo frecuentemente a los datos o métodos de esa otra clase. Este patrón viola el principio de encapsulamiento y aumenta el acoplamiento entre clases, haciendo el código más difícil de mantener y modificar. La presencia de Feature Envy sugiere que el método probablemente debería estar ubicado en la clase cuyos datos utiliza principalmente, o que quizás existe una responsabilidad que debería extraerse a una nueva clase. La solución típica es aplicar la refactorización \"Move Method\" para reubicar el método en la clase adecuada, o \"Extract Method/Class\" para abstraer la funcionalidad relacionada a un componente más cohesivo."
    },
    {
        id: 5920,
        moduloId: 509,
        pregunta: "¿Qué tipo de prueba automatizada se ejecuta cada vez que se produce un cambio en el sistema para asegurar que no se introdujeron errores nuevos?",
        opciones: [
            "Prueba de humo",
            "Prueba exploratoria",
            "Prueba de regresión",
            "Prueba beta"
        ],
        respuestaCorrecta: 2,
        explicacion: "Las pruebas de regresión son las pruebas automatizadas que se ejecutan cada vez que se produce un cambio en el sistema para asegurar que no se introdujeron errores nuevos en funcionalidades previamente validadas. Estas pruebas verifican que los cambios recientes en el código, ya sean nuevas características, correcciones de errores o refactorizaciones, no han afectado negativamente a partes existentes del sistema que funcionaban correctamente. Las pruebas de regresión típicamente incluyen un subconjunto de casos de prueba existentes que cubren áreas críticas o propensas a errores del software. La automatización es crucial para las pruebas de regresión, ya que permite ejecutarlas frecuentemente y de manera consistente con cada modificación del código, detectando rápidamente cualquier regresión introducida. Estas pruebas son especialmente importantes en entornos de integración continua, donde el código cambia constantemente, para mantener la estabilidad y calidad del sistema a lo largo del tiempo."
    },
    {
        id: 5921,
        moduloId: 509,
        pregunta: "¿Cuál de estas fases del ciclo de vida del software permite obtener una visión clara de las necesidades del cliente?",
        opciones: [
            "Diseño",
            "Mantenimiento",
            "Análisis de requisitos",
            "Pruebas"
        ],
        respuestaCorrecta: 2,
        explicacion: "La fase de análisis de requisitos es la que permite obtener una visión clara de las necesidades del cliente en el ciclo de vida del software. Durante esta fase inicial, se trabaja estrechamente con los stakeholders para identificar, documentar y priorizar lo que el sistema debe hacer (requisitos funcionales) y cómo debe hacerlo (requisitos no funcionales). Se utilizan diversas técnicas como entrevistas, encuestas, talleres, observación y análisis de documentos existentes para recopilar información detallada sobre las expectativas y necesidades de los usuarios. El objetivo es traducir las necesidades del negocio, a menudo expresadas en lenguaje no técnico, en requisitos precisos y verificables que guiarán las fases posteriores del desarrollo. Esta fase establece los cimientos del proyecto, definiendo el alcance, las restricciones y los criterios de aceptación, y es fundamental para asegurar que el producto final satisfaga efectivamente las necesidades reales de los usuarios."
    },
    {
        id: 5922,
        moduloId: 509,
        pregunta: "¿Qué modelo de desarrollo sigue una secuencia estricta de fases, sin retrocesos naturales?",
        opciones: [
            "Prototipado",
            "Modelo espiral",
            "Modelo incremental",
            "Modelo en cascada"
        ],
        respuestaCorrecta: 3,
        explicacion: "El modelo en cascada es el que sigue una secuencia estricta de fases sin retrocesos naturales en el proceso de desarrollo. Este modelo, uno de los más antiguos y tradicionales en ingeniería de software, organiza el desarrollo en etapas secuenciales y claramente definidas (típicamente: requisitos, diseño, implementación, verificación y mantenimiento), donde cada fase debe completarse totalmente antes de pasar a la siguiente. El modelo asume que los requisitos pueden especificarse completamente desde el inicio y que no cambiarán significativamente durante el desarrollo. No contempla formalmente la posibilidad de retroceder a fases anteriores para realizar ajustes, aunque en la práctica esto puede ocurrir con costes elevados. Esta rigidez en la progresión es su característica distintiva, a diferencia de modelos como el incremental, el espiral o el ágil, que incorporan iteración y retroalimentación como parte fundamental de su proceso, permitiendo adaptarse a cambios y aprender a medida que avanza el desarrollo."
    },
    {
        id: 5923,
        moduloId: 509,
        pregunta: "¿Qué nivel de abstracción tiene el lenguaje ensamblador comparado con otros lenguajes?",
        opciones: [
            "Muy alto",
            "Bajo",
            "Intermedio",
            "Nulo"
        ],
        respuestaCorrecta: 1,
        explicacion: "El lenguaje ensamblador tiene un nivel de abstracción bajo comparado con otros lenguajes de programación. Se sitúa un nivel por encima del lenguaje máquina (código binario), ofreciendo una representación simbólica de las instrucciones del procesador específico. Mientras que los lenguajes de alto nivel como Python, Java o C# proporcionan abstracciones significativas que ocultan los detalles del hardware y permiten expresar algoritmos de forma más cercana al pensamiento humano, el ensamblador trabaja directamente con registros, direcciones de memoria y el conjunto de instrucciones de la CPU. Cada instrucción en ensamblador típicamente se corresponde con una única instrucción de máquina, lo que requiere que el programador comprenda la arquitectura subyacente del procesador. Esta proximidad al hardware proporciona un control muy preciso y eficiencia máxima, pero a costa de mayor complejidad de programación, menor portabilidad entre arquitecturas diferentes, y desarrollo más lento comparado con lenguajes de mayor abstracción."
    },
    {
        id: 5924,
        moduloId: 509,
        pregunta: "¿Qué IDE es más utilizado para desarrollar aplicaciones empresariales en Java?",
        opciones: [
            "Visual Studio",
            "Eclipse",
            "PyCharm",
            "Android Studio"
        ],
        respuestaCorrecta: 1,
        explicacion: "Eclipse es uno de los IDEs más utilizados para desarrollar aplicaciones empresariales en Java. Con su naturaleza de código abierto, amplia comunidad y ecosistema de plugins extensible, Eclipse proporciona un entorno completo para el desarrollo Java empresarial. Incluye herramientas específicas como Java EE Tools que facilitan el desarrollo de aplicaciones web, servicios REST, EJBs y aplicaciones distribuidas. Su integración con servidores de aplicaciones como Tomcat, JBoss o WebSphere, soporte para frameworks empresariales como Spring, Hibernate y JSF, y herramientas de gestión de dependencias como Maven, hacen de Eclipse una opción robusta para el desarrollo Java en entornos corporativos. Aunque existen alternativas potentes como IntelliJ IDEA y NetBeans, Eclipse ha mantenido históricamente una fuerte presencia en el ámbito empresarial debido a su madurez, flexibilidad y amplio soporte para tecnologías Java EE."
    },
    {
        id: 5925,
        moduloId: 509,
        pregunta: "¿Qué tipo de máquina virtual ejecuta un sistema operativo completo de manera aislada?",
        opciones: [
            "Máquina virtual de proceso",
            "Máquina virtual de hardware",
            "Contenedor",
            "Microkernel"
        ],
        respuestaCorrecta: 1,
        explicacion: "Una máquina virtual de hardware (también conocida como máquina virtual de sistema o hipervisor tipo 1/2) es la que ejecuta un sistema operativo completo de manera aislada. Este tipo de virtualización emula completamente el hardware físico subyacente (CPU, memoria, dispositivos de entrada/salida), permitiendo que sistemas operativos invitados se ejecuten como si estuvieran en su propia máquina dedicada. Cada máquina virtual funciona de forma independiente con su propio sistema operativo, bibliotecas y aplicaciones, completamente aislada de otras máquinas virtuales en el mismo host. A diferencia de los contenedores que comparten el kernel del sistema operativo anfitrión, las máquinas virtuales de hardware incluyen su propio kernel. Ejemplos de software que proporciona este tipo de virtualización incluyen VMware, VirtualBox, Hyper-V y KVM. Este enfoque ofrece un alto nivel de aislamiento y compatibilidad, aunque con mayor sobrecarga de recursos que los contenedores."
    },
    {
        id: 5926,
        moduloId: 509,
        pregunta: "¿Qué técnica permite detectar automáticamente \"Malos olores\" en el código?",
        opciones: [
            "Compilar frecuentemente",
            "Uso de herramientas de análisis estático",
            "Pruebas funcionales",
            "Documentación externa"
        ],
        respuestaCorrecta: 1,
        explicacion: "El uso de herramientas de análisis estático es la técnica que permite detectar automáticamente \"malos olores\" en el código. Estas herramientas examinan el código fuente sin ejecutarlo, identificando patrones problemáticos, violaciones de estándares de codificación, complejidad excesiva, duplicación de código, y otros indicadores de posibles problemas de diseño o implementación. Herramientas como SonarQube, ESLint, PMD, FindBugs o Checkstyle pueden analizar grandes bases de código rápidamente, proporcionando informes detallados de áreas problemáticas que podrían beneficiarse de refactorización. Al integrarse en el proceso de desarrollo continuo, estas herramientas ayudan a mantener y mejorar la calidad del código sistemáticamente, facilitando la detección temprana de problemas antes de que se conviertan en deuda técnica significativa. A diferencia de las pruebas funcionales que verifican el comportamiento externo, el análisis estático se centra en la calidad estructural interna del código, complementando otras prácticas de aseguramiento de calidad."
    },
    {
        id: 5927,
        moduloId: 509,
        pregunta: "¿Qué es un \"bad smell\" en desarrollo de software?",
        opciones: [
            "Un tipo de virus que afecta el IDE",
            "Una vulnerabilidad crítica",
            "Un error de sintaxis",
            "Un indicio de diseño deficiente en el código"
        ],
        respuestaCorrecta: 3,
        explicacion: "Un \"bad smell\" (mal olor) en desarrollo de software es un indicio de diseño deficiente en el código. Este término, popularizado por Martin Fowler en su libro sobre refactorización, se refiere a patrones o características en el código que, aunque técnicamente funcionales, sugieren problemas subyacentes de diseño o implementación que podrían dificultar el mantenimiento, comprensión o extensión del software. Los malos olores no son errores técnicos que impidan la compilación o ejecución del programa, sino señales de advertencia de posibles problemas de calidad. Ejemplos comunes incluyen métodos demasiado largos, clases con excesivas responsabilidades, duplicación de código, listas largas de parámetros, o cambios que afectan a muchas partes del sistema. Estos síntomas indican áreas donde una refactorización podría mejorar significativamente la estructura y calidad del código, reduciendo la deuda técnica y facilitando el desarrollo futuro."
    },
    {
        id: 5928,
        moduloId: 509,
        pregunta: "¿Qué problema representa la \"Intimidad inapropiada\" en el código?",
        opciones: [
            "Uso excesivo de variables globales",
            "Un método accede demasiado a datos de otra clase",
            "Uso incorrecto de bucles",
            "Exceso de clases abstractas"
        ],
        respuestaCorrecta: 1,
        explicacion: "La \"Intimidad inapropiada\" (Inappropriate Intimacy) en el código representa el problema donde un método accede demasiado a datos de otra clase. Este mal olor de código ocurre cuando dos clases están excesivamente acopladas, conociendo y dependiendo demasiado de los detalles internos de la otra. Se manifiesta cuando un método de una clase frecuentemente accede a los atributos o métodos de otra clase, violando el principio de encapsulamiento y creando dependencias fuertes entre componentes que deberían estar más desacoplados. Este tipo de acoplamiento excesivo genera código frágil y difícil de mantener, ya que cambios en una clase pueden afectar inadvertidamente a la otra. Las soluciones típicas incluyen técnicas de refactorización como \"Move Method\" o \"Move Field\" para redistribuir responsabilidades, o aplicar el patrón \"Mediator\" para reducir las comunicaciones directas entre clases, preservando así los principios de encapsulamiento y bajo acoplamiento."
    },
    {
        id: 5929,
        moduloId: 509,
        pregunta: "¿Qué lenguaje es el más adecuado para desarrollar sistemas operativos por su bajo nivel de abstracción?",
        opciones: [
            "PHP",
            "Ruby",
            "C",
            "SQL"
        ],
        respuestaCorrecta: 2,
        explicacion: "El lenguaje C es el más adecuado para desarrollar sistemas operativos debido a su bajo nivel de abstracción. C proporciona un equilibrio óptimo entre la eficiencia del lenguaje ensamblador y la productividad de los lenguajes de alto nivel. Sus características lo hacen especialmente apropiado para programación de sistemas: permite acceso directo a la memoria mediante punteros, manipulación de bits, control preciso sobre estructuras de datos, generación de código eficiente y compacto, y una sobrecarga mínima en tiempo de ejecución. C también ofrece portabilidad suficiente para adaptarse a diferentes arquitecturas de hardware, manteniendo a la vez la capacidad de interactuar directamente con el hardware subyacente. No es casualidad que sistemas operativos como Unix, Linux, Windows y macOS tengan sus núcleos escritos predominantemente en C. Otros lenguajes como PHP, Ruby o SQL operan a niveles de abstracción mucho más altos y están diseñados para aplicaciones específicas, careciendo de las características necesarias para el desarrollo eficiente de sistemas operativos."
    },
    {
        id: 5930,
        moduloId: 509,
        pregunta: "¿Qué tipo de prueba permite comprobar si una función devuelve el valor esperado en base a una entrada concreta?",
        opciones: [
            "Prueba de integración",
            "Prueba de rendimiento",
            "Prueba de caja blanca",
            "Prueba unitaria"
        ],
        respuestaCorrecta: 3,
        explicacion: "Las pruebas unitarias son el tipo de prueba que permite comprobar si una función devuelve el valor esperado en base a una entrada concreta. Estas pruebas se centran en verificar el comportamiento correcto de unidades individuales de código (como funciones, métodos o clases) de forma aislada del resto del sistema. En una prueba unitaria típica, se proporciona una entrada específica a la función bajo prueba, se ejecuta la función, y se compara el resultado obtenido con el resultado esperado. Estas pruebas son automatizables, rápidas de ejecutar y proporcionan feedback inmediato sobre la corrección de componentes básicos del sistema. A diferencia de las pruebas de integración (que verifican la interacción entre componentes) o las pruebas de rendimiento (que evalúan aspectos como velocidad y eficiencia), las pruebas unitarias se centran exclusivamente en la lógica interna y el funcionamiento correcto de unidades de código individuales, constituyendo la base de la pirámide de pruebas y facilitando la detección temprana de defectos."
    },
    {
        id: 5931,
        moduloId: 509,
        pregunta: "¿Qué comando permite configurar el nombre de usuario global en GIT?",
        opciones: [
            "git name set",
            "git config user.name",
            "git config --global user.name",
            "git init user.name"
        ],
        respuestaCorrecta: 2,
        explicacion: "El comando 'git config --global user.name' seguido del nombre entre comillas es el que permite configurar el nombre de usuario global en Git. Este comando establece la identidad que se asociará a todos los commits realizados en cualquier repositorio del sistema. La opción '--global' indica que la configuración debe aplicarse a nivel de usuario, afectando a todos los repositorios, y se almacena en el archivo ~/.gitconfig (o %USERPROFILE%\\.gitconfig en Windows). Si se omite '--global', la configuración solo afectaría al repositorio actual. Configurar correctamente el nombre de usuario es importante ya que esta información se incluye en cada commit y sirve para identificar quién realizó los cambios. Este comando suele ejecutarse junto con 'git config --global user.email' al configurar Git por primera vez en un nuevo sistema, estableciendo así la identidad completa del desarrollador."
    },
    {
        id: 5932,
        moduloId: 509,
        pregunta: "¿Qué indica la relación «extends» entre casos de uso en UML?",
        opciones: [
            "Que el caso de uso base hereda comportamiento del extendido",
            "Que ambos casos de uso son opcionales",
            "Que el caso de uso fuente amplía el comportamiento del destino",
            "Que los actores intercambian roles"
        ],
        respuestaCorrecta: 2,
        explicacion: "En UML, la relación «extends» entre casos de uso indica que el caso de uso fuente amplía el comportamiento del caso de uso destino (también llamado caso de uso base). Esta relación se utiliza cuando un caso de uso añade pasos o comportamiento adicional a otro caso de uso en puntos específicos de extensión, pero solo bajo ciertas condiciones. El caso de uso base es independiente y completo por sí mismo, y puede ejecutarse sin necesidad de la extensión. El caso de uso que extiende sólo se ejecuta si se cumplen determinadas condiciones durante la ejecución del caso base. Esta relación se representa gráficamente con una flecha discontinua desde el caso de uso que extiende hacia el caso base, con la etiqueta «extends». Es útil para modelar variaciones, funcionalidades opcionales o manejo de excepciones sin complicar la descripción del flujo principal del caso de uso base."
    },
    {
        id: 5933,
        moduloId: 509,
        pregunta: "¿Cómo se representa gráficamente un caso de uso en UML?",
        opciones: [
            "Como un rectángulo dividido en tres partes",
            "Como un círculo",
            "Como un rombo",
            "Como una elipse"
        ],
        respuestaCorrecta: 3,
        explicacion: "En UML (Unified Modeling Language), un caso de uso se representa gráficamente mediante una elipse. Esta representación visual encapsula una funcionalidad o servicio completo que el sistema ofrece a sus usuarios. Dentro o debajo de la elipse se escribe el nombre del caso de uso, que describe brevemente la acción o el objetivo. Los casos de uso se conectan con los actores (representados como figuras de palo) que interactúan con ellos mediante líneas simples. La representación mediante elipses facilita la comprensión de los requisitos funcionales del sistema desde la perspectiva del usuario, ayudando a identificar y comunicar qué hace el sistema sin entrar en detalles de cómo lo hace internamente. Esta notación es parte del diagrama de casos de uso, que muestra la relación entre los actores externos y las funcionalidades que ofrece el sistema."
    },
    {
        id: 5934,
        moduloId: 509,
        pregunta: "¿Qué tipo de relación entre clases implica que una clase contiene a otra y ambas pueden existir por separado?",
        opciones: [
            "Composición",
            "Generalización",
            "Agregación",
            "Asociación"
        ],
        respuestaCorrecta: 2,
        explicacion: "La agregación es el tipo de relación entre clases que implica que una clase contiene a otra y ambas pueden existir por separado. Esta relación representa una asociación todo-parte más débil que la composición, donde el contenedor (el todo) tiene una referencia a los objetos contenidos (las partes), pero estos últimos pueden existir independientemente del contenedor y potencialmente pertenecer a múltiples contenedores simultáneamente. En UML, la agregación se representa con una línea que conecta las clases y un diamante vacío o blanco en el extremo de la clase contenedora. Un ejemplo clásico es la relación entre una universidad y sus estudiantes: la universidad contiene estudiantes, pero estos pueden existir si la universidad desaparece, y un estudiante podría pertenecer a varias universidades. Esta relación difiere de la composición, donde la existencia de las partes está ligada al contenedor, y de la generalización, que representa herencia entre clases."
    },
    {
        id: 5935,
        moduloId: 509,
        pregunta: "¿Qué comando en Git Bash verifica si la conexión SSH con GitHub es correcta?",
        opciones: [
            "git --check ssh",
            "ssh git@github.com",
            "ssh -T git@github.com",
            "git test ssh"
        ],
        respuestaCorrecta: 2,
        explicacion: "El comando 'ssh -T git@github.com' se utiliza en Git Bash para verificar si la conexión SSH con GitHub está configurada correctamente. Al ejecutar este comando, se intenta establecer una conexión SSH con los servidores de GitHub, y si la autenticación es exitosa, GitHub responderá con un mensaje de bienvenida que incluye tu nombre de usuario. Esta prueba confirma que las claves SSH están correctamente configuradas y que puedes autenticarte en GitHub sin usar contraseña. Es un paso importante al configurar Git para trabajar con repositorios remotos en GitHub mediante SSH, especialmente después de generar y añadir una nueva clave SSH a tu cuenta de GitHub. La opción '-T' indica a SSH que no asigne una terminal pseudo, ya que esta conexión es solo para verificación y no se espera una sesión interactiva."
    },
    {
        id: 5936,
        moduloId: 509,
        pregunta: "¿Qué representa un actor en un diagrama de casos de uso UML?",
        opciones: [
            "Un usuario interno del sistema",
            "Un componente de software",
            "Una clase del sistema",
            "Un elemento externo que interactúa con el sistema"
        ],
        respuestaCorrecta: 3,
        explicacion: "En un diagrama de casos de uso UML, un actor representa un elemento externo que interactúa con el sistema. Los actores pueden ser personas, organizaciones, sistemas externos u otros dispositivos que se comunican con el sistema bajo estudio. No forman parte del sistema en sí, sino que existen en su entorno y utilizan sus funcionalidades. Gráficamente, los actores se representan como figuras de palo (stick figures) etiquetadas con su rol o nombre. Los actores interactúan con los casos de uso mediante líneas de asociación, indicando qué funcionalidades del sistema utilizan o participan. Un mismo actor puede interactuar con múltiples casos de uso, y un caso de uso puede tener varios actores asociados. La identificación correcta de actores es crucial para entender los límites del sistema y asegurar que se capturen todas las interacciones relevantes con el entorno externo durante la fase de análisis de requisitos."
    },
    {
        id: 5937,
        moduloId: 509,
        pregunta: "¿Qué relación se representa con una línea discontinua dirigida entre dos clases en UML?",
        opciones: [
            "Asociación",
            "Herencia",
            "Dependencia",
            "Extensión de actor"
        ],
        respuestaCorrecta: 2,
        explicacion: "En UML, una línea discontinua dirigida (con una flecha) entre dos clases representa una relación de dependencia. Esta es la forma más débil de relación entre clases e indica que una clase (la dependiente) utiliza, conoce o depende de otra clase (la independiente) de alguna manera temporal o limitada. A diferencia de asociaciones más fuertes como agregación o composición, la dependencia no implica que la clase dependiente mantenga una referencia permanente a la otra clase. Las dependencias pueden ocurrir cuando una clase usa otra como parámetro en un método, como tipo de retorno, la crea localmente dentro de una operación, o accede a ella de forma estática. La flecha apunta desde la clase dependiente hacia la clase de la que depende, indicando la dirección de la dependencia. Reconocer y documentar estas dependencias es crucial para entender cómo los cambios en una clase pueden afectar a otras partes del sistema."
    },
    {
        id: 5938,
        moduloId: 509,
        pregunta: "¿Qué parte de una clase en UML contiene los métodos públicos?",
        opciones: [
            "La parte superior",
            "La parte intermedia",
            "La parte inferior",
            "No se representa"
        ],
        respuestaCorrecta: 2,
        explicacion: "En UML, los métodos públicos de una clase se representan en la parte inferior del rectángulo que simboliza la clase. El rectángulo de una clase en UML se divide típicamente en tres compartimentos o secciones: la parte superior contiene el nombre de la clase (y opcionalmente estereotipos o propiedades), la parte intermedia lista los atributos o variables de la clase, y la parte inferior enumera los métodos u operaciones. Los métodos públicos se indican generalmente con el símbolo '+' antes del nombre del método, seguido de paréntesis (que pueden contener parámetros) y opcionalmente el tipo de retorno. Esta organización en tres secciones proporciona una representación visual clara y estructurada de la clase, permitiendo distinguir fácilmente entre su identidad (nombre), sus datos (atributos) y su comportamiento (métodos), facilitando así la comprensión de su estructura y funcionalidad dentro del sistema."
    },
    {
        id: 5939,
        moduloId: 509,
        pregunta: "¿Qué comando se utiliza para crear un nuevo repositorio local con Git GUI?",
        opciones: [
            "File→ New Repo",
            "Repository→Initialize",
            "Create→ Git Project",
            "Create New Repository"
        ],
        respuestaCorrecta: 3,
        explicacion: "En Git GUI, el comando \"Create New Repository\" se utiliza para crear un nuevo repositorio local. Git GUI es una interfaz gráfica incluida con la instalación estándar de Git que proporciona acceso visual a las operaciones básicas de Git sin necesidad de usar la línea de comandos. Al seleccionar esta opción, se abre un diálogo que permite especificar la ubicación donde se creará el nuevo repositorio, similar a ejecutar 'git init' en la línea de comandos. Este proceso inicializa un directorio como un repositorio Git, creando la estructura interna necesaria (.git) para el control de versiones. Aunque Git GUI tiene una interfaz relativamente básica comparada con otras herramientas gráficas como GitKraken o SourceTree, ofrece funcionalidad suficiente para tareas comunes como creación de repositorios, realización de commits, visualización del historial y gestión de ramas, siendo especialmente útil para usuarios que prefieren interfaces visuales o están comenzando con Git."
    },
    {
        id: 5940,
        moduloId: 509,
        pregunta: "¿Qué indica una relación de generalización en un diagrama de clases UML?",
        opciones: [
            "Que una clase utiliza otra",
            "Que una clase se compone de otra",
            "Que una clase hereda de otra",
            "Que las clases se asocian con datos comunes"
        ],
        respuestaCorrecta: 2,
        explicacion: "Una relación de generalización en un diagrama de clases UML indica que una clase hereda de otra. Esta relación representa la herencia entre clases, donde una clase (la subclase o clase hija) adquiere las propiedades (atributos y métodos) de otra clase (la superclase o clase padre), pudiendo añadir sus propias características específicas o sobreescribir comportamientos heredados. Gráficamente, la generalización se representa con una línea sólida desde la subclase hacia la superclase, terminada con un triángulo vacío (o flecha vacía) apuntando a la superclase. Esta relación implementa el concepto de \"es un tipo de\" o \"es un\"; por ejemplo, \"Perro es un tipo de Animal\". La generalización permite la reutilización de código, el polimorfismo y la abstracción, que son principios fundamentales de la programación orientada a objetos, facilitando la creación de jerarquías de clases organizadas y extensibles."
    }
]
};

export default moduloExamenFinalEntornos;