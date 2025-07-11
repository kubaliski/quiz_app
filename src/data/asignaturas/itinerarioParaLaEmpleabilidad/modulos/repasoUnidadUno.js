/**
 * Datos del módulo Unidad Uno perteneciente a la asignatura de ITP.
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
export const moduloRepasoUnidadUno = {
    id: 612,
    nombre: "Test Unidad 1 (Repaso)",
    esExamen: true,
    asignaturaId: 6,
    descripcion: "Fundamentos de la prevención de riesgos laborales: conceptos básicos, derechos y obligaciones, accidentes de trabajo y enfermedades profesionales según la LPRL.",
    preguntas: [
      {
        id: 61201,
        moduloId: 612,
        pregunta: "¿Cuál de los siguientes no es un requisito para que exista un accidente de trabajo?",
        opciones: [
          "Existencia de una lesión corporal",
          "Que el trabajador sea por cuenta ajena",
          "Que una lesión corporal sea como consecuencia de un accidente de trabajo",
          "Que se dé una relación de causalidad entre la lesión sufrida y el estado de salud del trabajador"
        ],
        respuestaCorrecta: 2,
        explicacion: "La opción 'Que una lesión corporal sea como consecuencia de un accidente de trabajo' es una definición circular (tautológica) y no constituye un requisito válido. Los requisitos reales para considerar un accidente de trabajo según el artículo 115 de la Ley General de la Seguridad Social son: 1) Que el trabajador sea por cuenta ajena, 2) Que exista una lesión corporal (o perturbación funcional), 3) Que esta lesión sea causada por el trabajo o en ocasión del trabajo, y 4) Que exista una relación de causalidad entre el evento y la lesión. La opción c) no aporta información útil ya que simplemente repite que la lesión debe ser consecuencia del accidente, sin establecer criterios específicos para determinarlo. Los demás elementos sí son requisitos esenciales: la condición de trabajador por cuenta ajena distingue el accidente laboral del de trabajadores autónomos, la existencia de lesión corporal es el resultado material que debe producirse, y la relación de causalidad es el nexo que debe establecerse entre el evento y el daño sufrido."
      },
      {
        id: 61202,
        moduloId: 612,
        pregunta: "Los daños profesionales se pueden clasificar en",
        opciones: [
          "Específicas e inespecíficas",
          "Genéricas y concretas",
          "Mejores y peores",
          "Abundantes y escasas"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los daños profesionales se clasifican en específicas e inespecíficas. Los daños específicos son aquellos que tienen una relación directa y exclusiva con el trabajo, como las enfermedades profesionales incluidas en el cuadro oficial (silicosis, asbestosis, dermatitis por sustancias químicas, etc.) o los accidentes de trabajo típicos del puesto. Los daños inespecíficos son aquellos que, aunque pueden estar relacionados con el trabajo, también pueden tener otras causas no laborales, como el estrés, la fatiga mental, trastornos musculoesqueléticos generales, o algunas enfermedades cardiovasculares. Esta clasificación es importante para determinar la responsabilidad empresarial, las prestaciones de la Seguridad Social y las medidas preventivas a adoptar. Los daños específicos son más fáciles de demostrar su origen laboral y suelen tener protocolos de vigilancia de la salud más definidos, mientras que los inespecíficos requieren un análisis más complejo para establecer su relación con las condiciones de trabajo."
      },
      {
        id: 61203,
        moduloId: 612,
        pregunta: "¿Cuál de los siguientes no es una obligación de un trabajador en materia de prevención de riesgos laborales?",
        opciones: [
          "Recibir formación en materia preventiva tanto teórica como práctica",
          "A usar adecuadamente los equipos de trabajo",
          "A informar de los riesgos",
          "A cooperar con la empresa"
        ],
        respuestaCorrecta: 0,
        explicacion: "Recibir formación en materia preventiva tanto teórica como práctica no es una obligación del trabajador, sino un derecho. Según el artículo 29 de la Ley de Prevención de Riesgos Laborales (LPRL), las obligaciones de los trabajadores incluyen: usar adecuadamente las máquinas, aparatos, herramientas, sustancias peligrosas, equipos de transporte y equipos de protección individual; utilizar correctamente los dispositivos de seguridad; informar inmediatamente sobre cualquier situación que entrañe riesgo; contribuir al cumplimiento de las obligaciones de seguridad; y cooperar con el empresario para garantizar condiciones de trabajo seguras. Por el contrario, el artículo 19 de la LPRL establece que el trabajador tiene derecho a recibir formación teórica y práctica en materia preventiva, siendo obligación del empresario proporcionarla. Esta formación debe ser suficiente y adecuada, centrada en el puesto de trabajo, adaptada a la evolución de los riesgos y repetida periódicamente si fuera necesario."
      },
      {
        id: 61204,
        moduloId: 612,
        pregunta: "¿Cuál de las siguientes no es un derecho de un trabajador en materia de riesgos laborales?",
        opciones: [
          "Participar en todos los aspectos de la prevención en el trabajo",
          "La vigilancia de su salud",
          "Interrumpir la actividad y abandonar el trabajo",
          "Usar adecuadamente los equipos de trabajo"
        ],
        respuestaCorrecta: 3,
        explicacion: "Usar adecuadamente los equipos de trabajo no es un derecho del trabajador, sino una obligación. Según el artículo 29.1 de la LPRL, los trabajadores tienen la obligación de 'usar adecuadamente, de acuerdo con su naturaleza y los riesgos previsibles, las máquinas, aparatos, herramientas, sustancias peligrosas, equipos de transporte y, en general, cualesquiera otros medios con los que desarrollen su actividad'. Los derechos de los trabajadores en materia de prevención, según los artículos 14 a 21 de la LPRL, incluyen: participar en todos los aspectos relacionados con la prevención (a través de sus representantes), vigilancia de su salud mediante reconocimientos médicos periódicos, e interrumpir su actividad y abandonar el lugar de trabajo cuando considere que existe un riesgo grave e inminente para su vida o salud (artículo 21). Este último derecho es fundamental para la protección del trabajador, permitiéndole actuar unilateralmente ante situaciones de peligro extremo, sin que pueda ser sancionado por ello si su valoración del riesgo es razonable."
      },
      {
        id: 61205,
        moduloId: 612,
        pregunta: "¿Cuál de estos es un daño no específico?",
        opciones: [
          "Accidente de tráfico sufrido con el coche de la empresa en horario laboral",
          "Estrés crónico",
          "Intoxicación química",
          "Enfermedad pulmonar por amianto"
        ],
        respuestaCorrecta: 1,
        explicacion: "El estrés crónico es un daño no específico o inespecífico. Los daños no específicos son aquellos que, aunque pueden estar relacionados con el trabajo, también pueden tener causas ajenas al ámbito laboral. El estrés crónico puede originarse por factores laborales (sobrecarga de trabajo, presión temporal, conflictos interpersonales, etc.) pero también por circunstancias personales, familiares o sociales. Los demás ejemplos son daños específicos: el accidente de tráfico en horario laboral con vehículo de empresa es un accidente de trabajo típico con relación directa y exclusiva con la actividad laboral; la intoxicación química está directamente relacionada con la exposición a sustancias peligrosas en el trabajo; y la enfermedad pulmonar por amianto es una enfermedad profesional reconocida oficialmente, causada específicamente por la exposición laboral a fibras de amianto. Los daños no específicos requieren un análisis más complejo para establecer su relación con las condiciones de trabajo y determinar si procede su reconocimiento como contingencia profesional."
      },
      {
        id: 61206,
        moduloId: 612,
        pregunta: "¿Qué organismo puede sancionar a empresas por incumplir la LPRL?",
        opciones: [
          "Eurofound",
          "Organización Mundial de la Salud",
          "Organización Internacional del Trabajo",
          "Inspección de Trabajo y de la Seguridad Social"
        ],
        respuestaCorrecta: 3,
        explicacion: "La Inspección de Trabajo y de la Seguridad Social es el organismo competente para sancionar a las empresas por incumplir la Ley de Prevención de Riesgos Laborales. Según el artículo 9 de la LPRL, la Inspección de Trabajo y Seguridad Social es el órgano encargado de la vigilancia y control del cumplimiento de la normativa sobre prevención de riesgos laborales, así como de sancionar las infracciones que se cometan. Las infracciones se clasifican en leves, graves y muy graves (artículos 11 a 13 de la LPRL), con sus correspondientes sanciones económicas reguladas por la Ley sobre Infracciones y Sanciones en el Orden Social. Los demás organismos citados tienen funciones diferentes: Eurofound es una agencia europea que estudia las condiciones de trabajo; la OMS es una agencia de Naciones Unidas centrada en salud pública global; y la OIT es una organización internacional que establece normas laborales, pero ninguna tiene competencias sancionadoras directas sobre empresas españolas en materia de prevención de riesgos laborales."
      },
      {
        id: 61207,
        moduloId: 612,
        pregunta: "¿Qué es el síndrome de burnout?",
        opciones: [
          "Fatiga leve por ejercicio",
          "Motivación excesiva",
          "Trastorno emocional por estrés laboral crónico",
          "Depresión por desempleo"
        ],
        respuestaCorrecta: 2,
        explicacion: "El síndrome de burnout es un trastorno emocional causado por estrés laboral crónico. También conocido como síndrome de desgaste profesional o de quemarse por el trabajo, fue descrito por primera vez por Herbert Freudenberger en 1974. Se caracteriza por tres dimensiones principales: agotamiento emocional (sensación de estar exhausto emocionalmente por las demandas del trabajo), despersonalización (actitudes cínicas hacia el trabajo y las personas relacionadas con él), y reducida realización personal (sentimientos de incompetencia y falta de logro en el trabajo). El burnout es reconocido por la OMS como un fenómeno ocupacional incluido en la Clasificación Internacional de Enfermedades (CIE-11) como un factor que influye en el estado de salud. No es simplemente fatiga leve (que se resuelve con descanso), ni motivación excesiva (que sería lo opuesto), ni depresión por desempleo (que implica falta de trabajo). Es específicamente resultado del estrés laboral prolongado y no gestionado adecuadamente, afectando principalmente a profesionales de servicios humanos aunque puede darse en cualquier ámbito laboral."
      },
      {
        id: 61208,
        moduloId: 612,
        pregunta: "¿Cuál NO se considera accidente de trabajo?",
        opciones: [
          "Una insolación mientras se repara un equipo de aire acondicionado en el exterior",
          "Lesión que se sufre durante el trayecto al trabajo",
          "Una lesión causada por imprudencia temeraria",
          "Intoxicación causada por inhalación de partículas en suspensión en el centro de trabajo"
        ],
        respuestaCorrecta: 2,
        explicacion: "Una lesión causada por imprudencia temeraria NO se considera accidente de trabajo. Según el artículo 115.4.e) de la Ley General de la Seguridad Social, se excluyen de la consideración de accidente de trabajo 'los que sean debidos a imprudencia temeraria del trabajador accidentado'. La imprudencia temeraria implica una actuación consciente del riesgo con total desprecio hacia las consecuencias, superando los límites de la imprudencia simple que sí estaría cubierta. Los demás casos sí constituyen accidentes de trabajo: la insolación al reparar equipos en exterior es un accidente ocurrido durante el trabajo y por causa del mismo; la lesión en el trayecto al trabajo se considera accidente 'in itinere' (artículo 115.2.a), siempre que se use el recorrido habitual; y la intoxicación por partículas en el centro de trabajo es claramente un accidente laboral al producirse en el lugar de trabajo por causa directamente relacionada con la actividad. La exclusión por imprudencia temeraria requiere que esta sea la causa única del accidente, no concurriendo con otras causas laborales."
      },
      {
        id: 61209,
        moduloId: 612,
        pregunta: "¿Qué define la OMS como salud?",
        opciones: [
          "Ausencia de enfermedades físicas",
          "Un cuerpo atlético",
          "Capacidad de trabajar sin interrupciones",
          "Estado completo de bienestar físico, mental y social"
        ],
        respuestaCorrecta: 3,
        explicacion: "La Organización Mundial de la Salud (OMS) define la salud como 'un estado de completo bienestar físico, mental y social, y no solamente la ausencia de afecciones o enfermedades'. Esta definición, establecida en 1946 en la Constitución de la OMS y que permanece sin cambios, representa un concepto integral y holístico de la salud. Va más allá de la simple ausencia de enfermedad para abarcar el bienestar en todas sus dimensiones: física (ausencia de enfermedades y buen funcionamiento del organismo), mental (equilibrio psicológico y emocional) y social (capacidad de relacionarse satisfactoriamente con el entorno y la comunidad). Esta definición es fundamental en el ámbito de la prevención de riesgos laborales, ya que reconoce que los factores laborales pueden afectar no solo la salud física sino también la mental y social de los trabajadores. Por ello, las políticas preventivas deben considerar aspectos psicosociales, organizacionales y de clima laboral, no limitándose únicamente a los riesgos físicos tradicionales como accidentes o exposiciones a agentes químicos."
      },
      {
        id: 61210,
        moduloId: 612,
        pregunta: "¿Qué es la cultura preventiva en la empresa?",
        opciones: [
          "La promoción de productos saludables",
          "Un sistema para mejorar las ventas",
          "Un plan de marketing",
          "La implementación de medidas para prever y evitar riesgos"
        ],
        respuestaCorrecta: 3,
        explicacion: "La cultura preventiva en la empresa es la implementación de medidas para prever y evitar riesgos. Más específicamente, la cultura preventiva se refiere al conjunto de valores, actitudes, percepciones, competencias y patrones de comportamiento individuales y de grupo que determinan el compromiso, el estilo y la competencia de una organización en materia de salud y seguridad. Incluye la integración de la prevención en todos los niveles de la organización, desde la alta dirección hasta los trabajadores, pasando por los mandos intermedios. Una cultura preventiva sólida se caracteriza por: liderazgo visible en seguridad por parte de la dirección, participación activa de todos los trabajadores, comunicación abierta sobre temas de seguridad, aprendizaje continuo de incidentes y accidentes, asignación de recursos adecuados para la prevención, y la percepción de que la seguridad es una responsabilidad compartida. No se trata de promoción de productos saludables (que sería más bien un programa de bienestar), ni de sistemas de ventas o marketing, sino de una filosofía integral que hace de la prevención de riesgos un valor fundamental en todas las actividades empresariales."
      }
    ]
  };

  export default moduloRepasoUnidadUno;