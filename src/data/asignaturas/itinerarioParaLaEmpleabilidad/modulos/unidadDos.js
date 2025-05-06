/**
 * Datos del módulo Unidad Dos perteneciente a la asignatura de ITP.
 * Incluye información del módulo y sus preguntas asociadas para el quiz.
 *
 * @type {Object}
 * @property {number} id - Identificador único del módulo
 * @property {string} nombre - Nombre del módulo
 * @property {boolean} esExamen - Indica si el módulo es un examen
 * @property {number} asignaturaId - ID de la asignatura a la que pertenece
 * @property {string} descripcion - Breve descripción del contenido del módulo
 * @property {Array<Object>} preguntas - Lista de preguntas para el quiz de este módulo
 */
export const moduloUnidadDos = {
    id: 603,
    nombre: "Test Unidad 2",
    esExamen: false,
    asignaturaId: 6,
    descripcion: "Principios y técnicas de prevención de riesgos laborales, señalización, equipos de protección y medidas específicas de seguridad en el entorno laboral.",
    preguntas: [
      {
        id: 6301,
        moduloId: 603,
        pregunta: "¿Cuál es el primer principio básico de la prevención según la LPRL?",
        opciones: [
          "Evaluar los riesgos.",
          "Combatir los riesgos en su origen.",
          "Evitar los riesgos.",
          "Planificar la prevención.",
        ],
        respuestaCorrecta: 2,
        explicacion: "Según el artículo 15 de la Ley 31/1995 de Prevención de Riesgos Laborales (LPRL), el primer principio de la acción preventiva es 'evitar los riesgos'. Este principio fundamental establece que la primera medida a considerar siempre debe ser la eliminación completa del riesgo, antes de contemplar otras acciones como evaluarlo o reducirlo. La ley establece una jerarquía clara de principios preventivos, donde la prioridad absoluta es evitar que los riesgos lleguen a manifestarse, seguido por evaluar aquellos que no puedan evitarse, combatirlos en su origen, adaptar el trabajo a la persona, y así sucesivamente. Este enfoque preventivo prioriza la eliminación del riesgo sobre cualquier otra medida de control.",
      },
      {
        id: 6302,
        moduloId: 603,
        pregunta: "¿Qué técnica preventiva se usa para identificar agentes nocivos en el entorno laboral?",
        opciones: [
          "Higiene industrial.",
          "Seguridad en el trabajo.",
          "Ergonomía.",
          "Psicosociología.",
        ],
        respuestaCorrecta: 0,
        explicacion: "La higiene industrial es la técnica preventiva que se utiliza para identificar agentes nocivos en el entorno laboral. Esta disciplina se centra en el reconocimiento, evaluación y control de los factores ambientales que pueden causar enfermedades, deterioro de la salud o malestar entre los trabajadores. Se ocupa específicamente de los contaminantes químicos (como gases, vapores, polvos), físicos (ruido, vibraciones, radiaciones) y biológicos (virus, bacterias, hongos) presentes en el ambiente de trabajo. A diferencia de la seguridad en el trabajo, que se enfoca en prevenir accidentes, la higiene industrial busca prevenir enfermedades profesionales mediante la identificación, medición y eliminación o reducción de los agentes nocivos hasta niveles aceptables.",
      },
      {
        id: 6303,
        moduloId: 603,
        pregunta: "¿Cuál es el objetivo principal de la señalización de seguridad?",
        opciones: [
          "Ofrecer iluminación adecuada.",
          "Proporcionar información sobre medidas preventivas.",
          "Mantener la limpieza del área de trabajo.",
          "Garantizar el uso de equipos de protección personal.",
        ],
        respuestaCorrecta: 1,
        explicacion: "El objetivo principal de la señalización de seguridad es proporcionar información sobre medidas preventivas. Según el Real Decreto 485/1997 sobre disposiciones mínimas en materia de señalización de seguridad y salud en el trabajo, la señalización tiene como finalidad alertar a los trabajadores sobre la existencia de determinados riesgos, prohibiciones u obligaciones, y proporcionar indicaciones relativas a los medios de protección, evacuación, emergencia o primeros auxilios. La señalización no sustituye en ningún caso las medidas técnicas y organizativas de protección colectiva, ni la formación e información de los trabajadores, sino que es complementaria a estas, sirviendo como herramienta visual para recordar la información sobre los peligros y las medidas preventivas necesarias.",
      },
      {
        id: 6304,
        moduloId: 603,
        pregunta: "Según la normativa, ¿cuál es la altura mínima para barandillas de protección?",
        opciones: [
          "50 cm.",
          "70 cm.",
          "90 cm.",
          "100 cm.",
        ],
        respuestaCorrecta: 2,
        explicacion: "Según el Real Decreto 486/1997, que establece las disposiciones mínimas de seguridad y salud en los lugares de trabajo, la altura mínima para barandillas de protección es de 90 cm. Específicamente, el Anexo I, apartado 3.3 de dicho Real Decreto establece que 'Las barandillas serán de materiales rígidos, tendrán una altura mínima de 90 centímetros y dispondrán de una protección que impida el paso o deslizamiento por debajo de las mismas o la caída de objetos sobre personas'. Esta altura se considera suficiente para prevenir caídas de personas desde desniveles, plataformas, aberturas en suelos o paredes, proporcionando una barrera física que actúa como medida de protección colectiva. Las barandillas deben ser resistentes y estables para cumplir adecuadamente su función protectora.",
      },
      {
        id: 6305,
        moduloId: 603,
        pregunta: "¿Qué elemento es esencial para extinguir un fuego de Clase C?",
        opciones: [
          "Agua.",
          "Espuma.",
          "Extintor de CO2.",
          "Polvo químico especial.",
        ],
        respuestaCorrecta: 2,
        explicacion: "El elemento esencial para extinguir un fuego de Clase C (fuegos que involucran gases inflamables como propano, butano, metano, etc.) es el extintor de CO2 (dióxido de carbono). Los extintores de CO2 son efectivos para este tipo de fuegos porque actúan mediante sofocación, desplazando el oxígeno que alimenta la combustión, y además no dejan residuos tras su uso, lo que es importante en instalaciones con equipos delicados o eléctricos. El agua no es adecuada para fuegos de gases, ya que no puede sofocarlos y podría expandir el fuego. La espuma tampoco es apropiada para gases, siendo más efectiva para líquidos inflamables (Clase B). El polvo químico especial se utiliza principalmente para metales combustibles (Clase D), no para gases inflamables.",
      },
      {
        id: 6306,
        moduloId: 603,
        pregunta: "¿Cuál es la temperatura mínima para locales donde se realizan trabajos ligeros?",
        opciones: [
          "14°C.",
          "17°C.",
          "20°C.",
          "25°C.",
        ],
        respuestaCorrecta: 0,
        explicacion: "Según el Real Decreto 486/1997, por el que se establecen las disposiciones mínimas de seguridad y salud en los lugares de trabajo, la temperatura mínima para locales donde se realizan trabajos ligeros es de 14°C. Este decreto, en su Anexo III sobre condiciones ambientales, establece que 'la temperatura de los locales donde se realicen trabajos sedentarios propios de oficinas o similares estará comprendida entre 17 y 27°C', mientras que 'la temperatura de los locales donde se realicen trabajos ligeros estará comprendida entre 14 y 25°C'. Esta diferenciación reconoce que el nivel de actividad física influye en la percepción térmica y el confort de los trabajadores, requiriendo temperaturas mínimas más bajas para actividades que implican mayor movimiento físico.",
      },
      {
        id: 6307,
        moduloId: 603,
        pregunta: "¿Qué equipo es adecuado para proteger a los trabajadores de partículas proyectadas?",
        opciones: [
          "Cascos de seguridad.",
          "Gafas de seguridad.",
          "Guantes.",
          "Mascarillas.",
        ],
        respuestaCorrecta: 1,
        explicacion: "Las gafas de seguridad son el equipo adecuado para proteger a los trabajadores de partículas proyectadas. Estos equipos de protección individual (EPI) están diseñados específicamente para proteger los ojos contra impactos de partículas sólidas, salpicaduras de líquidos, polvos y otras proyecciones que podrían causar lesiones oculares. Según la normativa de EPI, las gafas de seguridad deben cumplir con la norma EN 166, que establece los requisitos funcionales para protectores oculares. Otros equipos como cascos, guantes o mascarillas cumplen funciones protectoras diferentes: los cascos protegen la cabeza de impactos, los guantes las manos del contacto con sustancias o superficies peligrosas, y las mascarillas el sistema respiratorio de la inhalación de contaminantes.",
      },
      {
        id: 6308,
        moduloId: 603,
        pregunta: "¿Cuál es el daño más común asociado al ruido excesivo en el trabajo?",
        opciones: [
          "Quemaduras.",
          "Sordera.",
          "Estrés visual.",
          "Deshidratación.",
        ],
        respuestaCorrecta: 1,
        explicacion: "La sordera o hipoacusia es el daño más común asociado al ruido excesivo en el trabajo. La exposición prolongada a niveles de ruido superiores a los 80 decibelios puede provocar pérdida auditiva progresiva e irreversible. Según el Real Decreto 286/2006, sobre la protección de la salud y la seguridad de los trabajadores contra los riesgos relacionados con la exposición al ruido, existen valores límite de exposición que no deben superarse (87 dB(A)) y valores que dan lugar a una acción preventiva (80 y 85 dB(A)). La pérdida auditiva inducida por ruido suele afectar primero a las frecuencias agudas y puede ir acompañada de acúfenos (zumbidos). Además del daño auditivo, el ruido excesivo puede causar estrés, fatiga, trastornos del sueño, problemas cardiovasculares y disminución de la capacidad de concentración.",
      },
      {
        id: 6309,
        moduloId: 603,
        pregunta: "¿Qué riesgo es causado siempre por un contacto eléctrico indirecto?",
        opciones: [
          "Paro cardíaco.",
          "Lesiones por calor.",
          "Electrocución.",
          "Lesión ocular.",
        ],
        respuestaCorrecta: 2,
        explicacion: "La electrocución es el riesgo causado siempre por un contacto eléctrico indirecto. El contacto eléctrico indirecto se produce cuando una persona entra en contacto con elementos conductores que normalmente no deberían estar en tensión, pero que se han energizado accidentalmente debido a un fallo de aislamiento o alguna otra circunstancia. A diferencia del contacto directo, donde el trabajador toca directamente una parte activa de la instalación, en el indirecto la corriente llega al cuerpo humano a través de masas metálicas accidentalmente en tensión. La electrocución resultante puede causar diversos efectos fisiopatológicos, desde hormigueos hasta la muerte por fibrilación ventricular. Las principales medidas preventivas incluyen puesta a tierra, interruptores diferenciales, doble aislamiento, separación de circuitos y uso de muy baja tensión de seguridad.",
      },
      {
        id: 6310,
        moduloId: 603,
        pregunta: "¿Qué medida es eficaz para prevenir caídas de distinto nivel?",
        opciones: [
          "Barreras acústicas.",
          "Barandillas y arneses.",
          "Extintores.",
          "Ventilación adecuada.",
        ],
        respuestaCorrecta: 1,
        explicacion: "Las barandillas y arneses son medidas eficaces para prevenir caídas de distinto nivel. Las barandillas son protecciones colectivas que se instalan en los bordes de plataformas, andamios, escaleras y otras zonas elevadas para impedir físicamente la caída. Según la normativa (RD 486/1997), deben tener al menos 90 cm de altura, ser rígidas y contar con protección intermedia. Los arneses de seguridad, por su parte, son equipos de protección individual que, conectados a líneas de vida o puntos de anclaje, detienen la caída una vez producida. Según el Real Decreto 773/1997, deben utilizarse cuando no sea posible eliminar el riesgo mediante protecciones colectivas. Ambas medidas son complementarias en un sistema integral de prevención de caídas, siendo preferible siempre la protección colectiva (barandillas) sobre la individual (arneses).",
      },
      {
        id: 6311,
        moduloId: 603,
        pregunta: "¿Qué extintor es adecuado para fuegos de materiales sólidos combustibles?",
        opciones: [
          "Extintor de CO2.",
          "Extintor de espuma.",
          "Extintor de polvo ABC.",
          "Ninguno de los anteriores.",
        ],
        respuestaCorrecta: 2,
        explicacion: "El extintor de polvo ABC es el adecuado para fuegos de materiales sólidos combustibles, clasificados como fuegos de Clase A. Estos extintores contienen fosfato monoamónico que, al ser descargado, crea una capa que sofoca y enfría el fuego, evitando además la reignición. La denominación 'ABC' indica que es un extintor polivalente, efectivo para tres tipos de fuegos: sólidos (A), líquidos (B) y gases (C). Los extintores de CO2 son más adecuados para fuegos eléctricos y de líquidos, pero tienen menor eficacia en sólidos. Los de espuma son buenos para líquidos inflamables pero menos eficientes para sólidos. Los extintores de polvo ABC son versátiles y ampliamente utilizados en entornos donde pueden encontrarse diferentes tipos de materiales combustibles, siendo una opción segura para fuegos de materiales sólidos como madera, papel, tela o plásticos.",
      },
      {
        id: 6312,
        moduloId: 603,
        pregunta: "¿Qué tipo de protección se prioriza según la LPRL?",
        opciones: [
          "Individual.",
          "Colectiva.",
          "Administrativa.",
          "Educativa.",
        ],
        respuestaCorrecta: 1,
        explicacion: "Según la Ley 31/1995 de Prevención de Riesgos Laborales (LPRL), se prioriza la protección colectiva sobre la individual. Este principio fundamental está recogido en el artículo 15.1.h, que establece como uno de los principios de la acción preventiva 'adoptar medidas que antepongan la protección colectiva a la individual'. La protección colectiva beneficia a todos los trabajadores expuestos a un determinado riesgo, sin necesidad de una acción por su parte, mientras que la protección individual solo protege al trabajador que la utiliza correctamente. Ejemplos de protecciones colectivas incluyen barandillas, redes de seguridad, ventilación general, aislamiento de procesos peligrosos o sistemas de alarma. Los equipos de protección individual (EPI) sólo deben utilizarse cuando los riesgos no se puedan evitar o limitar suficientemente mediante las medidas de protección colectiva.",
      },
      {
        id: 6313,
        moduloId: 603,
        pregunta: "¿Qué clase de riesgo se asocia con la exposición prolongada al frío extremo?",
        opciones: [
          "Hipotermia.",
          "Deshidratación.",
          "Estrés térmico.",
          "Insatisfacción laboral.",
        ],
        respuestaCorrecta: 0,
        explicacion: "La hipotermia es el principal riesgo asociado con la exposición prolongada al frío extremo. Esta condición ocurre cuando la temperatura corporal central desciende por debajo de los 35°C, provocando una disminución del funcionamiento del sistema nervioso central, alteraciones cardiacas y respiratorias, y en casos graves, puede llevar a la pérdida de consciencia y muerte. En entornos laborales con exposición a frío extremo (cámaras frigoríficas, trabajos exteriores en invierno, etc.), los trabajadores pueden sufrir diversos efectos: desde escalofríos y reducción de la destreza manual hasta congelación de extremidades e hipotermia generalizada. Según la normativa de prevención, estos riesgos deben evaluarse específicamente y controlarse mediante medidas como rotación de tareas, proporción de ropa térmica adecuada, periodos de descanso en lugares cálidos y formación específica a los trabajadores.",
      },
      {
        id: 6314,
        moduloId: 603,
        pregunta: "¿Qué contaminante químico puede afectar al sistema respiratorio?",
        opciones: [
          "Polvo.",
          "Gases.",
          "Vapores.",
          "Todas las anteriores.",
        ],
        respuestaCorrecta: 3,
        explicacion: "Todos los contaminantes mencionados (polvo, gases y vapores) pueden afectar al sistema respiratorio. El polvo consiste en partículas sólidas generadas por procesos mecánicos de trituración, molienda o abrasión, y según su tamaño puede depositarse en distintas zonas del aparato respiratorio, causando desde irritación hasta neumoconiosis. Los gases son sustancias que en condiciones normales se encuentran en estado gaseoso (como el monóxido de carbono o el cloro) y pueden causar asfixia o irritación de las vías respiratorias. Los vapores son la fase gaseosa de sustancias normalmente líquidas (como disolventes orgánicos), que pueden provocar irritación, narcosis o daño pulmonar. El Real Decreto 374/2001 sobre la protección de la salud y seguridad de los trabajadores contra los riesgos relacionados con los agentes químicos establece las medidas para la evaluación y control de estos contaminantes en el entorno laboral.",
      },
      {
        id: 6315,
        moduloId: 603,
        pregunta: "¿Qué agente biológico pertenece al Grupo 4?",
        opciones: [
          "Escherichia coli.",
          "Virus del Ébola.",
          "Mycobacterium tuberculosis.",
          "Staphylococcus aureus.",
        ],
        respuestaCorrecta: 1,
        explicacion: "El virus del Ébola pertenece al Grupo 4 de agentes biológicos, que es el nivel de mayor riesgo. Según el Real Decreto 664/1997 sobre la protección de los trabajadores contra los riesgos relacionados con la exposición a agentes biológicos, los agentes del Grupo 4 son aquellos que pueden causar enfermedades graves en el ser humano, suponen un serio peligro para los trabajadores, presentan un alto riesgo de propagación a la colectividad y no existe generalmente una profilaxis o tratamiento eficaz. El virus del Ébola cumple todos estos criterios, causando una fiebre hemorrágica con alta mortalidad, sin tratamiento específico, y con alto potencial de transmisión. Por el contrario, E. coli y S. aureus son bacterias del Grupo 2 (pueden causar enfermedad pero es poco probable que se propaguen a la colectividad y existe tratamiento), y M. tuberculosis es un agente del Grupo 3 (puede causar enfermedad grave pero existe profilaxis o tratamiento).",
      },
      {
        id: 6316,
        moduloId: 603,
        pregunta: "¿Qué acción es fundamental para prevenir el síndrome de burnout?",
        opciones: [
          "Incrementar la carga de trabajo.",
          "Fomentar la comunicación abierta.",
          "Implementar jornadas más largas.",
          "Reducir las pausas de descanso.",
        ],
        respuestaCorrecta: 1,
        explicacion: "Fomentar la comunicación abierta es una acción fundamental para prevenir el síndrome de burnout. Este síndrome, caracterizado por agotamiento emocional, despersonalización y reducida realización personal, se desarrolla como respuesta al estrés laboral crónico. La comunicación abierta permite identificar tempranamente los factores estresores, expresar preocupaciones, recibir apoyo social y participar en la toma de decisiones. Según estudios en psicología organizacional, los entornos laborales con comunicación fluida y transparente reducen significativamente el riesgo de burnout. Por el contrario, incrementar la carga de trabajo, implementar jornadas más largas o reducir las pausas de descanso aumentarían la presión sobre los trabajadores, exacerbando el riesgo de desarrollar este síndrome. Otras medidas preventivas incluyen la definición clara de roles, gestión adecuada del tiempo, capacitación, y fomento del equilibrio trabajo-vida personal.",
      },
      {
        id: 6317,
        moduloId: 603,
        pregunta: "¿Qué medida se debe tomar para prevenir daños en instalaciones eléctricas?",
        opciones: [
          "Usar ropa de colores vivos.",
          "Implementar sistemas de puesta a tierra.",
          "Evitar el uso de EPP.",
          "Realizar mantenimiento visual.",
        ],
        respuestaCorrecta: 1,
        explicacion: "Implementar sistemas de puesta a tierra es una medida fundamental para prevenir daños en instalaciones eléctricas. Según el Reglamento Electrotécnico para Baja Tensión (REBT), la puesta a tierra consiste en la unión directa de determinadas partes de una instalación eléctrica con la tierra, mediante elementos conductores de baja resistencia. Su función principal es evitar que en las masas metálicas aparezcan diferencias de potencial peligrosas en caso de un defecto de aislamiento, dirigiendo las corrientes de fuga hacia tierra y activando los dispositivos de protección. Esto previene la electrocución por contactos indirectos, protegiendo a las personas y a los propios equipos. Otras medidas importantes incluyen el uso de interruptores diferenciales, aislamiento adecuado, mantenimiento preventivo realizado por personal cualificado y el cumplimiento estricto de las normativas técnicas, no solo inspecciones visuales.",
      },
      {
        id: 6318,
        moduloId: 603,
        pregunta: "¿Qué debe incluir un plan de emergencia contra incendios?",
        opciones: [
          "Extintores obsoletos.",
          "Normas de comportamiento informal.",
          "Roles y responsabilidades claras.",
          "Cierre de vías de evacuación.",
        ],
        respuestaCorrecta: 2,
        explicacion: "Un plan de emergencia contra incendios debe incluir roles y responsabilidades claras. Según el Real Decreto 393/2007, que aprueba la Norma Básica de Autoprotección, los planes de emergencia deben definir con precisión quiénes son los responsables de las diferentes acciones durante la emergencia, como por ejemplo el jefe de emergencia, equipos de primera intervención, equipos de evacuación o personal de primeros auxilios. Esto garantiza una respuesta coordinada y eficaz, evitando confusiones en momentos críticos. El plan también debe incluir procedimientos de actuación, sistemas de detección y alarma, vías de evacuación, puntos de reunión, medios de extinción adecuados y actualizados (no obsoletos), formación del personal y realización de simulacros periódicos. Las normas de comportamiento deben ser formales y precisas, no informales, y las vías de evacuación deben mantenerse siempre despejadas, no cerradas.",
      },
      {
        id: 6319,
        moduloId: 603,
        pregunta: "¿Cuál es un ejemplo de señalización de advertencia?",
        opciones: [
          "Señal de no fumar.",
          "Triángulo amarillo con pictograma negro.",
          "Círculo azul con pictograma blanco.",
          "Rectángulo verde con pictograma blanco.",
        ],
        respuestaCorrecta: 1,
        explicacion: "Un triángulo amarillo con pictograma negro es el ejemplo característico de señalización de advertencia. Según el Real Decreto 485/1997 sobre disposiciones mínimas en materia de señalización de seguridad y salud en el trabajo, las señales de advertencia tienen forma triangular, fondo amarillo, bordes negros y un símbolo o pictograma negro que representa el peligro que se advierte. Estas señales alertan sobre un riesgo o peligro, como materiales inflamables, riesgo eléctrico, materias tóxicas o radiaciones. Por el contrario, una señal de prohibición como 'no fumar' tiene forma redonda con fondo blanco, borde y banda transversal rojos, y pictograma negro. Las señales de obligación (círculo azul con pictograma blanco) indican comportamientos obligatorios, y las de salvamento o socorro (rectángulo verde con pictograma blanco) señalan salidas de emergencia, primeros auxilios o dispositivos de salvamento."
      },
      {
        id: 6320,
        moduloId: 603,
        pregunta: "¿Qué normativa regula los niveles máximos de ruido en el entorno laboral?",
        opciones: [
          "Real Decreto 286/2006.",
          "Real Decreto 485/1997.",
          "Real Decreto 773/1997.",
          "Real Decreto 39/1997.",
        ],
        respuestaCorrecta: 0,
        explicacion: "El Real Decreto 286/2006, de 10 de marzo, sobre la protección de la salud y la seguridad de los trabajadores contra los riesgos relacionados con la exposición al ruido, es la normativa que regula los niveles máximos de ruido en el entorno laboral. Esta normativa establece los valores límite de exposición (87 dB(A) para el nivel diario equivalente y 140 dB(C) para el nivel de pico) que no deben superarse en ningún caso, así como los valores superiores e inferiores de exposición que dan lugar a una acción. También determina las obligaciones del empresario en cuanto a la evaluación de riesgos, medidas preventivas, uso de protección auditiva, vigilancia de la salud, información y formación de los trabajadores. Las otras normativas mencionadas regulan aspectos diferentes: el RD 485/1997 trata sobre señalización, el RD 773/1997 sobre equipos de protección individual, y el RD 39/1997 es el Reglamento de los Servicios de Prevención."
      }
    ]
  }
  export default moduloUnidadDos;