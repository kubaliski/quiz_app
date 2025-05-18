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
export const moduloRepasoUnidadDos = {
    id: 613,
    nombre: "Test Unidad 2 (Repaso)",
    esExamen: true,
    asignaturaId: 6,
    descripcion: "Técnicas de prevención de riesgos laborales: higiene industrial, seguridad en el trabajo, ergonomía y psicosociología aplicada. Análisis de riesgos físicos, químicos, biológicos y condiciones medioambientales.",
    preguntas: [
      {
        id: 13001,
        moduloId: 613,
        pregunta: "¿Qué técnica de prevención se centra en evitar enfermedades profesionales?",
        opciones: [
          "Higiene industrial",
          "Seguridad en el trabajo",
          "Psicosociología",
          "Ergonomía"
        ],
        respuestaCorrecta: 0,
        explicacion: "La higiene industrial es la técnica de prevención que se centra específicamente en evitar enfermedades profesionales. Según la definición de la American Industrial Hygiene Association (AIHA), la higiene industrial es 'la ciencia y arte dedicados al reconocimiento, evaluación y control de aquellos factores ambientales o tensiones emanadas o provocadas por el lugar de trabajo y que pueden ocasionar enfermedades, destruir la salud y el bienestar, o crear algún malestar significativo entre los trabajadores o los ciudadanos de la comunidad'. Su objetivo principal es prevenir la aparición de enfermedades profesionales mediante el control de contaminantes químicos, físicos y biológicos en el ambiente laboral. A diferencia de la seguridad en el trabajo (que se centra en prevenir accidentes), la psicosociología (que estudia factores psicosociales) y la ergonomía (que busca adaptar el trabajo a la persona), la higiene industrial se especializa en identificar, evaluar y controlar los agentes que pueden causar patologías específicas derivadas de la exposición laboral prolongada, como silicosis, asbestosis, dermatitis profesionales, hipoacusia, intoxicaciones crónicas, etc."
      },
      {
        id: 13002,
        moduloId: 613,
        pregunta: "¿Qué tipo de protección debe priorizarse según los principios de la LPRL?",
        opciones: [
          "Protección en seguridad",
          "Protección legal",
          "Protección individual",
          "Protección colectiva"
        ],
        respuestaCorrecta: 3,
        explicacion: "Según los principios de la LPRL, debe priorizarse la protección colectiva sobre la individual. El artículo 15.1.h) de la Ley de Prevención de Riesgos Laborales establece como principio de la actividad preventiva 'adoptar medidas que antepongan la protección colectiva a la individual'. Este principio se basa en la jerarquía de controles establecida internacionalmente: primero eliminar el riesgo, luego sustituirlo, después implementar controles de ingeniería (protección colectiva), seguido de controles administrativos y, como última opción, los equipos de protección individual (EPI). La protección colectiva (barreras, sistemas de ventilación, encerramiento de máquinas, etc.) es más eficaz porque protege simultáneamente a todos los trabajadores expuestos, no depende del comportamiento individual y su eficacia es más fácil de verificar y mantener. Los EPI solo deben utilizarse cuando las medidas colectivas sean insuficientes o como complemento a estas, nunca como sustituto cuando sea técnicamente posible implementar medidas colectivas. Esta jerarquización busca garantizar una protección más efectiva y duradera para todos los trabajadores."
      },
      {
        id: 13003,
        moduloId: 613,
        pregunta: "¿Qué representan los cuatro elementos del tetraedro del fuego?",
        opciones: [
          "Madera, aire, energía, espacio",
          "Combustible, comburente y calor",
          "Oxígeno, fuego y comburente",
          "Comburente, oxígeno y chispa"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los elementos del tetraedro del fuego son combustible, comburente, calor y reacción en cadena (aunque la pregunta solo menciona tres de ellos). Tradicionalmente se habló del 'triángulo del fuego' con combustible, comburente (generalmente oxígeno) y calor (fuente de ignición), pero posteriormente se añadió un cuarto elemento: la reacción en cadena, formando el 'tetraedro del fuego'. El combustible es cualquier sustancia susceptible de arder (sólida, líquida o gaseosa); el comburente es la sustancia que permite la combustión (normalmente el oxígeno del aire); el calor es la energía necesaria para iniciar la combustión (chispa, llama, fricción, etc.); y la reacción en cadena son las reacciones químicas que se autorelevan y mantienen la combustión. Para que se produzca fuego deben coexistir los cuatro elementos, y para extinguirlo hay que eliminar al menos uno de ellos: separar combustible y comburente, enfriar por debajo de la temperatura de ignición, o interrumpir la reacción en cadena mediante agentes químicos. Este modelo es fundamental para entender tanto la prevención como la extinción de incendios en el ámbito laboral."
      },
      {
        id: 13004,
        moduloId: 613,
        pregunta: "¿Cuál es una vía de entrada del contaminante químico al cuerpo?",
        opciones: [
          "Vía reflexiva",
          "Vía parenteral",
          "Vía energética",
          "Vía genérica"
        ],
        respuestaCorrecta: 1,
        explicacion: "La vía parenteral es una de las principales vías de entrada de contaminantes químicos al organismo. Las vías de entrada de contaminantes químicos se clasifican en: vía respiratoria (inhalación de gases, vapores, aerosoles), vía dérmica (absorción a través de la piel), vía digestiva (ingestión accidental o por malos hábitos) y vía parenteral (entrada directa al torrente sanguíneo a través de heridas, cortes, pinchazos, inyecciones accidentales). La vía parenteral, aunque menos frecuente, puede ser muy peligrosa porque permite que el contaminante acceda directamente al sistema circulatorio, evitando las barreras naturales del organismo. Esto puede ocurrir por accidentes con objetos cortopunzantes contaminados, inyecciones accidentales con pistolas de grasa o pintura a presión, o entrada a través de heridas abiertas. Las otras opciones mencionadas no son vías de entrada reconocidas en higiene industrial: 'vía reflexiva', 'vía energética' y 'vía genérica' no forman parte de la clasificación estándar de vías de penetración de contaminantes químicos en el organismo según la normativa y literatura científica especializada."
      },
      {
        id: 13005,
        moduloId: 613,
        pregunta: "¿Qué daño puede causar una vibración prolongada en el trabajo?",
        opciones: [
          "Trastorno musculoesquelético",
          "Estrés corporal",
          "Quemadura",
          "Estrés térmico"
        ],
        respuestaCorrecta: 0,
        explicacion: "La vibración prolongada en el trabajo puede causar trastornos musculoesqueléticos. Las vibraciones mecánicas, según el Real Decreto 1311/2005 que transpone la Directiva 2002/44/CE, se clasifican en vibraciones transmitidas al sistema mano-brazo y vibraciones transmitidas al cuerpo entero. Las vibraciones mano-brazo (por herramientas vibrátiles como martillos neumáticos, sierras, etc.) pueden causar trastornos vasculares (síndrome de Raynaud o dedo blanco), neurológicos (pérdida de sensibilidad, hormigueos) y musculoesqueléticos (artrosis, contracturas, perdida de fuerza). Las vibraciones cuerpo entero (vehículos, maquinaria industrial) pueden provocar lumbalgias, hernias discales, contracturas musculares y otros trastornos de la columna vertebral y sistema musculoesquelético. Estos efectos se desarrollan gradualmente con la exposición prolongada. El 'estrés corporal' no es una patología específica reconocida; las quemaduras son causadas por agentes térmicos, químicos o eléctricos, no por vibraciones; y el estrés térmico es consecuencia de exposición a temperaturas extremas, no de vibraciones mecánicas."
      },
      {
        id: 13006,
        moduloId: 613,
        pregunta: "¿Qué clase de fuego involucra metales combustibles?",
        opciones: [
          "Clase A",
          "Clase B",
          "Clase C",
          "Clase D"
        ],
        respuestaCorrecta: 3,
        explicacion: "Los fuegos de Clase D involucran metales combustibles. Según la clasificación internacional de fuegos (normas UNE-EN 2 y NFPA): Clase A comprende fuegos de materiales sólidos ordinarios como madera, papel, textiles, plásticos; Clase B incluye fuegos de líquidos inflamables y gases licuados como gasolina, aceites, alcoholes; Clase C abarca fuegos que involucran equipos eléctricos energizados; y Clase D corresponde específicamente a fuegos de metales combustibles como magnesio, titanio, sodio, potasio, aleaciones de aluminio, etc. Los fuegos de metales combustibles requieren agentes extintores especiales (polvos especiales como polvo de grafito, arena seca, sal común o agentes específicos tipo Met-L-X), ya que el agua y otros agentes convencionales pueden ser contraproducentes al reaccionar violentamente con estos metales. En el ámbito industrial, estos fuegos pueden presentarse en fundiciones, laboratorios químicos, industria aeroespacial, y procesos que involucren magnesio, titanio o aleaciones ligeras. La identificación correcta de la clase de fuego es crucial para seleccionar el método de extinción adecuado y garantizar la seguridad de los intervinientes."
      },
      {
        id: 13007,
        moduloId: 613,
        pregunta: "¿Cuál de las siguientes NO es una radiación ionizante?",
        opciones: [
          "Radiación UV",
          "Rayos X",
          "Rayos Gamma",
          "Partículas Alfa"
        ],
        respuestaCorrecta: 0,
        explicacion: "La radiación UV (ultravioleta) NO es una radiación ionizante. Las radiaciones se clasifican en ionizantes y no ionizantes según su capacidad para arrancar electrones de los átomos. Las radiaciones ionizantes tienen suficiente energía para ionizar la materia y incluyen: rayos X, rayos gamma, partículas alfa, partículas beta, neutrones y radiación cósmica. Estas radiaciones pueden causar daños celulares directos, mutaciones genéticas y cáncer debido a su alta energía. Por el contrario, las radiaciones no ionizantes (como la UV, radiofrecuencias, microondas, luz visible, infrarrojos) no tienen suficiente energía para ionizar átomos, aunque pueden causar otros efectos como calentamiento de tejidos o daños en la piel. La radiación UV, específicamente, puede causar eritemas, envejecimiento prematuro de la piel, cataratas y cáncer de piel, pero actúa mediante mecanismos fotoquímicos, no ionizantes. El Real Decreto 783/2001 regula la protección sanitaria de los trabajadores contra riesgos derivados de radiaciones ionizantes, mientras que otros reglamentos específicos regulan las no ionizantes como la UV (RD 486/2010)."
      },
      {
        id: 13008,
        moduloId: 613,
        pregunta: "¿Cuál de los siguientes NO es un riesgo derivado de condiciones medioambientales?",
        opciones: [
          "Riesgos físicos",
          "Riesgos parenterales",
          "Riesgos químicos",
          "Riesgos biológicos"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los 'riesgos parenterales' NO son un tipo de riesgo derivado de condiciones medioambientales. Los riesgos medioambientales en el ámbito laboral se clasifican tradicionalmente en: riesgos físicos (ruido, vibraciones, radiaciones, temperaturas extremas, iluminación deficiente), riesgos químicos (exposición a sustancias tóxicas, corrosivas, cancerígenas), riesgos biológicos (exposición a microorganismos patógenos como bacterias, virus, hongos), y también se incluyen riesgos ergonómicos y psicosociales. El término 'parenteral' hace referencia a una vía de administración o entrada (generalmente en medicina, se refiere a la administración de medicamentos por vía intravenosa, intramuscular, etc., evitando el tracto digestivo). En higiene industrial, 'parenteral' describe una vía de entrada de contaminantes al organismo, no un tipo de riesgo medioambiental. Los riesgos se clasifican por el agente causal o el factor de riesgo (físico, químico, biológico), mientras que 'parenteral' describe cómo un contaminante puede ingresar al cuerpo (junto con vía respiratoria, dérmica y digestiva), no qué tipo de agente es."
      },
      {
        id: 13009,
        moduloId: 613,
        pregunta: "Los riesgos biológicos se clasifican en",
        opciones: [
          "Cuatro grupos, siendo el cuarto el de mayor gravedad",
          "Cinco grupos, siendo el primero el de mayor gravedad",
          "En cuatro grupos, siendo el primero de ellos el de mayor gravedad",
          "En cinco grupos, siendo el primero de ellos de menor gravedad"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los riesgos biológicos se clasifican en cuatro grupos, siendo el cuarto el de mayor gravedad. Según el Real Decreto 664/1997 sobre protección de los trabajadores contra riesgos relacionados con la exposición a agentes biológicos durante el trabajo, que transpone la Directiva 90/679/CEE, los agentes biológicos se clasifican en cuatro grupos según su nivel de riesgo: Grupo 1: agentes biológicos que resulta poco probable que causen enfermedad en el hombre (riesgo individual y poblacional muy bajo); Grupo 2: agentes que pueden causar enfermedad en el hombre y suponer un peligro para los trabajadores, pero que es poco probable que se propaguen a la colectividad y para los que generalmente existen medidas preventivas o tratamientos eficaces; Grupo 3: agentes que pueden causar enfermedad grave en el hombre y suponen un serio peligro para los trabajadores, con riesgo de propagación a la colectividad, aunque existen medidas preventivas o tratamientos eficaces; Grupo 4: agentes que causan enfermedad grave en el hombre y suponen un serio peligro para los trabajadores, con muchas probabilidades de propagación a la colectividad y sin que existan medidas preventivas o tratamientos eficaces. Por tanto, el grupo 4 representa el mayor nivel de riesgo."
      },
      {
        id: 13010,
        moduloId: 613,
        pregunta: "¿Cuál es el primer principio básico de la prevención según la LPRL?",
        opciones: [
          "Dar instrucciones a los trabajadores",
          "Evaluar los riesgos",
          "Adaptar el trabajo a la persona",
          "Evitar los riesgos"
        ],
        respuestaCorrecta: 3,
        explicacion: "El primer principio básico de la prevención según la LPRL es evitar los riesgos. El artículo 15.1 de la Ley de Prevención de Riesgos Laborales establece los principios de la actividad preventiva, y el primer principio, recogido en el apartado a), es 'evitar los riesgos'. Esta jerarquización no es casualidad: refleja la filosofía preventiva de que la medida más eficaz es eliminar completamente el riesgo, cuando sea técnicamente posible. Los principios se ordenan jerárquicamente: a) evitar los riesgos; b) evaluar los riesgos que no se puedan evitar; c) combatir los riesgos en su origen; d) adaptar el trabajo a la persona; e) tener en cuenta la evolución de la técnica; f) sustituir lo peligroso por lo que entrañe poco o ningún peligro; g) planificar la prevención; h) adoptar medidas que antepongan la protección colectiva a la individual; i) dar las debidas instrucciones a los trabajadores. Esta jerarquía establece un orden lógico: primero intentar evitar completamente el riesgo, si no es posible then evaluarlo para conocer su magnitud, y luego aplicar las demás medidas preventivas siguiendo el orden establecido hasta llegar a las instrucciones a los trabajadores como última medida complementaria."
      }
    ]
  };

  export default moduloRepasoUnidadDos;