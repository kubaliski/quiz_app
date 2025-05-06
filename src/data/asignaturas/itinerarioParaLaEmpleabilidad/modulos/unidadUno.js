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
export const moduloUnidadUno = {
    id: 602,
    nombre: "Test Unidad 1",
    esExamen: false,
    asignaturaId: 6,
    descripcion: "Conceptos fundamentales sobre salud laboral, accidentes de trabajo y enfermedades profesionales en el marco de la legislación española.",
    preguntas: [
      {
        id: 6201,
        moduloId: 602,
        pregunta: "¿Cuál es el objetivo principal de una cultura preventiva?",
        opciones: [
          "Aumentar la producción a cualquier costo.",
          "Garantizar la seguridad y salud de los trabajadores.",
          "Reducir los días de vacaciones.",
          "Evitar la capacitación de los empleados.",
        ],
        respuestaCorrecta: 1,
        explicacion: "El objetivo principal de una cultura preventiva en el entorno laboral es garantizar la seguridad y salud de los trabajadores. Esta cultura implica la integración de valores, actitudes y comportamientos que priorizan la prevención de riesgos en todos los niveles de la organización. No se trata simplemente de cumplir con la normativa, sino de crear un entorno donde la seguridad sea un valor fundamental compartido por todos los miembros de la empresa. La cultura preventiva busca anticiparse a los posibles riesgos laborales y establecer medidas para evitarlos, protegiendo así el bienestar físico, mental y social de todos los trabajadores.",
      },
      {
        id: 6202,
        moduloId: 602,
        pregunta: "¿Qué se entiende por accidente de trabajo in itinere?",
        opciones: [
          "Accidente durante las vacaciones.",
          "Accidente en el hogar.",
          "Accidente al ir o volver del trabajo.",
          "Accidente fuera del horario laboral.",
        ],
        respuestaCorrecta: 2,
        explicacion: "El accidente de trabajo in itinere se refiere al que sufre el trabajador al ir o volver del trabajo. Según el artículo 156.2.a de la Ley General de la Seguridad Social, se considera accidente de trabajo el que sufra el trabajador al ir o al volver del lugar de trabajo. Para que se reconozca como tal, deben cumplirse ciertos requisitos: que ocurra en el trayecto habitual entre el domicilio y el lugar de trabajo, que no se produzcan interrupciones por motivos personales, que se utilice el itinerario habitual, y que se emplee un medio de transporte normal. Este reconocimiento legal otorga al trabajador la misma protección que tendría si el accidente ocurriera en el propio centro de trabajo.",
      },
      {
        id: 6203,
        moduloId: 602,
        pregunta: "¿Qué son las enfermedades profesionales según el RD 1299/2006?",
        opciones: [
          "Enfermedades comunes.",
          "Lesiones fuera del trabajo.",
          "Cualquier enfermedad durante el empleo.",
          "Aquellas causadas por agentes presentes en el entorno laboral.",
        ],
        respuestaCorrecta: 3,
        explicacion: "Según el Real Decreto 1299/2006, las enfermedades profesionales son aquellas causadas por agentes presentes en el entorno laboral. Este Real Decreto aprueba el cuadro de enfermedades profesionales en el sistema de la Seguridad Social, estableciendo una lista cerrada de enfermedades reconocidas como profesionales, agrupadas según los agentes que las causan: químicos, físicos, biológicos, inhalación de sustancias, enfermedades de la piel y agentes carcinogénicos. Para que una enfermedad sea considerada profesional debe estar incluida en dicho cuadro y haberse contraído como consecuencia del trabajo en las actividades que se especifican, existiendo una relación de causalidad directa entre la exposición a determinados riesgos y la patología desarrollada.",
      },
      {
        id: 6204,
        moduloId: 602,
        pregunta: "¿Qué organismo promueve la seguridad en el trabajo a nivel internacional?",
        opciones: [
          "INSST.",
          "OIT.",
          "EU-OSHA.",
          "OMS.",
        ],
        respuestaCorrecta: 1,
        explicacion: "La Organización Internacional del Trabajo (OIT) es el principal organismo que promueve la seguridad en el trabajo a nivel internacional. Fundada en 1919 como parte del Tratado de Versalles y convertida en la primera agencia especializada de la ONU en 1946, la OIT tiene como objetivo establecer normas laborales internacionales, formular políticas y elaborar programas que promuevan el trabajo decente para todos. En materia de seguridad y salud laboral, ha adoptado más de 40 convenios y recomendaciones específicos, además de desarrollar códigos de práctica y directrices técnicas que sirven como referencia internacional para las legislaciones nacionales de sus 187 Estados miembros.",
      },
      {
        id: 6205,
        moduloId: 602,
        pregunta: "¿Qué caracteriza al síndrome de burnout?",
        opciones: [
          "Agotamiento emocional y despersonalización.",
          "Cabreo generalizado.",
          "Mayor productividad.",
          "Estrés generalizado.",
        ],
        respuestaCorrecta: 0,
        explicacion: "El síndrome de burnout se caracteriza principalmente por agotamiento emocional y despersonalización, junto con una reducida realización personal. Este trastorno, reconocido por la OMS en su Clasificación Internacional de Enfermedades (CIE-11), se desarrolla como respuesta a estresores laborales crónicos. El agotamiento emocional se manifiesta como una sensación de estar emocionalmente exhausto, sin recursos ni energía. La despersonalización implica el desarrollo de actitudes cínicas y distantes hacia las personas con las que se trabaja, tratándolas como objetos impersonales. La reducida realización personal se refleja en una autoevaluación negativa, sentimientos de incompetencia y falta de logros. Afecta principalmente a profesionales que trabajan en contacto directo con otras personas.",
      },
      {
        id: 6206,
        moduloId: 602,
        pregunta: "¿Qué consecuencias tiene el estrés laboral para la salud laboral?",
        opciones: [
          "Mejora del rendimiento.",
          "Mayor cohesión en el equipo.",
          "Aumento de beneficios.",
          "Ansiedad y problemas de salud mental.",
        ],
        respuestaCorrecta: 3,
        explicacion: "El estrés laboral tiene como principales consecuencias para la salud la ansiedad y diversos problemas de salud mental, entre otros efectos negativos. A nivel psicológico, puede provocar irritabilidad, dificultad para concentrarse, insomnio, depresión y trastornos de ansiedad. Físicamente, se relaciona con trastornos cardiovasculares, musculoesqueléticos, gastrointestinales, dermatológicos e inmunológicos. En el ámbito laboral, genera absentismo, disminución del rendimiento, aumento de accidentes y deterioro del clima laboral. Aunque un nivel moderado de estrés puntual puede activar recursos y mejorar el desempeño (eustress), el estrés crónico (distress) tiene efectos claramente perjudiciales que afectan tanto a la salud individual como a la organización en su conjunto.",
      },
      {
        id: 6207,
        moduloId: 602,
        pregunta: "¿A qué derecho tienen los trabajadores según la LPRL?",
        opciones: [
          "Interrumpir la actividad en caso de riesgo grave e inminente.",
          "Negarse a cumplir las normativas en caso de considerarlas injustas.",
          "No asistir a capacitaciones si ya las han recibido.",
          "Omitir el uso de equipos de protección si les incomoda.",
        ],
        respuestaCorrecta: 0,
        explicacion: "Según el artículo 21 de la Ley 31/1995 de Prevención de Riesgos Laborales (LPRL), los trabajadores tienen derecho a interrumpir su actividad y abandonar el lugar de trabajo cuando consideren que dicha actividad entraña un riesgo grave e inminente para su vida o su salud. Este derecho fundamental protege la integridad física de los trabajadores ante situaciones de peligro inmediato que no puedan evitarse con las medidas de protección habituales. La ley define el riesgo grave e inminente como aquel que resulte probable que se materialice en un futuro inmediato y pueda suponer un daño grave para la salud. Este derecho no puede dar lugar a perjuicios para el trabajador, salvo que haya actuado de mala fe o cometido negligencia grave.",
      },
      {
        id: 6208,
        moduloId: 602,
        pregunta: "Si un trabajador sufre un accidente al ir al trabajo, ¿cómo se clasifica?",
        opciones: [
          "Enfermedad profesional.",
          "Accidente común.",
          "Accidente fuera del trabajo.",
          "Accidente in itinere.",
        ],
        respuestaCorrecta: 3,
        explicacion: "Un accidente que sufre un trabajador al ir al trabajo se clasifica como accidente in itinere. Según el artículo 156.2.a de la Ley General de la Seguridad Social, tienen la consideración de accidentes de trabajo los que sufra el trabajador al ir o al volver del lugar de trabajo. Para que se considere como tal, debe cumplir varios requisitos: que el accidente ocurra en el trayecto habitual entre el domicilio y el centro de trabajo, que no se hayan producido interrupciones por motivos personales, que se utilice el itinerario habitual, y que se emplee un medio de transporte normal. Esta consideración otorga al trabajador accidentado las mismas protecciones y prestaciones que tendría si el accidente hubiera ocurrido en el propio centro de trabajo.",
      },
      {
        id: 6209,
        moduloId: 602,
        pregunta: "¿Qué debe hacer un trabajador al identificar un riesgo no detectado previamente?",
        opciones: [
          "Evitarlo.",
          "Resolverlo por su cuenta.",
          "Detener su actividad.",
          "Reportarlo a su superior inmediato.",
        ],
        respuestaCorrecta: 3,
        explicacion: "Cuando un trabajador identifica un riesgo no detectado previamente, debe reportarlo a su superior inmediato. Según el artículo 29.2.4 de la Ley 31/1995 de Prevención de Riesgos Laborales, los trabajadores tienen la obligación de 'informar de inmediato a su superior jerárquico directo, y a los trabajadores designados para realizar actividades de protección y de prevención o, en su caso, al servicio de prevención, acerca de cualquier situación que, a su juicio, entrañe un riesgo para la seguridad y la salud de los trabajadores'. Esta comunicación permite que se activen los mecanismos de prevención adecuados, se evalúe el riesgo detectado y se implementen las medidas necesarias para eliminarlo o reducirlo, protegiendo así la salud de todos los trabajadores.",
      },
      {
        id: 6210,
        moduloId: 602,
        pregunta: "¿Qué incluye un plan de prevención?",
        opciones: [
          "Solo un informe anual de accidentes.",
          "Lista de trabajadores con riesgo de enfermedad.",
          "Medidas para eliminar o reducir riesgos.",
          "Detalles de beneficios salariales por peligrosidad.",
        ],
        respuestaCorrecta: 2,
        explicacion: "Un plan de prevención incluye medidas para eliminar o reducir riesgos laborales. Según el artículo 16 de la Ley 31/1995 de Prevención de Riesgos Laborales, el plan de prevención de riesgos laborales es la herramienta mediante la cual se integra la actividad preventiva en el sistema general de gestión de la empresa. Debe incluir la estructura organizativa, las responsabilidades, las funciones, las prácticas, los procedimientos y los recursos necesarios para realizar la acción de prevención. Además, debe contemplar la evaluación inicial de riesgos, su actualización periódica, y la planificación de la actividad preventiva, que establecerá las medidas concretas para eliminar, reducir o controlar los riesgos detectados, incluyendo plazos, responsables y recursos necesarios para su ejecución.",
      },
      {
        id: 6211,
        moduloId: 602,
        pregunta: "La Inspección de Trabajo ha detectado riesgos graves e inminentes. ¿Qué actuación debería llevar a cabo?",
        opciones: [
          "Ordenar la paralización inmediata de trabajos.",
          "Sancionar a la empresa.",
          "Solicitar la paralización inmediata de los trabajos.",
          "Iniciar un expediente sancionador.",
        ],
        respuestaCorrecta: 0,
        explicacion: "Cuando la Inspección de Trabajo detecta riesgos graves e inminentes, debe ordenar la paralización inmediata de trabajos. Según el artículo 44 de la Ley 31/1995 de Prevención de Riesgos Laborales, cuando un Inspector de Trabajo y Seguridad Social compruebe que la inobservancia de la normativa sobre prevención de riesgos laborales implica, a su juicio, un riesgo grave e inminente para la seguridad y salud de los trabajadores, podrá ordenar la paralización inmediata de tales trabajos o tareas. Esta decisión será comunicada a la empresa responsable, que la pondrá en conocimiento de los trabajadores afectados, del Comité de Seguridad y Salud, y de los representantes de los trabajadores. La empresa responsable dará cuenta al Inspector del cumplimiento de esta orden.",
      },
      {
        id: 6212,
        moduloId: 602,
        pregunta: "¿Qué objetivo tiene la vigilancia de la salud según la LPRL?",
        opciones: [
          "Incrementar la productividad.",
          "Evitar el absentismo.",
          "Detectar problemas relacionados con riesgos laborales.",
          "Aumentar los tiempos de descanso.",
        ],
        respuestaCorrecta: 2,
        explicacion: "Según el artículo 22 de la Ley 31/1995 de Prevención de Riesgos Laborales (LPRL), el objetivo principal de la vigilancia de la salud es detectar problemas relacionados con los riesgos laborales. Esta vigilancia, que debe ser garantizada por el empresario, permite evaluar los efectos de las condiciones de trabajo sobre la salud de los trabajadores, verificar si el estado de salud del trabajador puede constituir un peligro, y determinar si las medidas preventivas son adecuadas. Se realiza mediante reconocimientos médicos específicos en función de los riesgos inherentes al trabajo, respetando siempre el derecho a la intimidad y dignidad del trabajador, y manteniendo la confidencialidad de toda la información relacionada con su estado de salud.",
      },
      {
        id: 6213,
        moduloId: 602,
        pregunta: "¿A quién compete organizar y tutelar la salud pública según la Constitución Española?",
        opciones: [
          "A la Seguridad Social.",
          "Al Ministerio de Trabajo.",
          "A la Inspección de Trabajo.",
          "A los Poderes Públicos.",
        ],
        respuestaCorrecta: 3,
        explicacion: "Según el artículo 43.2 de la Constitución Española, compete a los Poderes Públicos organizar y tutelar la salud pública. Dicho artículo establece textualmente que 'Compete a los poderes públicos organizar y tutelar la salud pública a través de medidas preventivas y de las prestaciones y servicios necesarios. La ley establecerá los derechos y deberes de todos al respecto'. Esta responsabilidad constitucional se desarrolla a través de diferentes administraciones (estatal, autonómica y local) y organismos específicos. En el ámbito laboral, este mandato constitucional se concreta principalmente en la Ley 31/1995 de Prevención de Riesgos Laborales, que establece el marco normativo para proteger la salud de los trabajadores mediante la prevención de los riesgos derivados del trabajo.",
      },
      {
        id: 6214,
        moduloId: 602,
        pregunta: "¿Cuál de los siguientes es un accidente de trabajo?",
        opciones: [
          "Trabajador que tropieza al salir de trabajar camino al supermercado.",
          "Trabajadora embarazada que no puede trabajar.",
          "Trabajador en permiso por nacimiento de su hijo.",
          "Trabajador con hernia discal por carga pesada.",
        ],
        respuestaCorrecta: 3,
        explicacion: "Un trabajador con hernia discal causada por levantar carga pesada en el trabajo constituye un accidente laboral. Según el artículo 156.1 de la Ley General de la Seguridad Social, se considera accidente de trabajo toda lesión corporal que el trabajador sufra con ocasión o por consecuencia del trabajo que ejecute por cuenta ajena. En este caso, existe una lesión (hernia discal) que tiene una relación causal directa con la actividad laboral (levantamiento de carga pesada). Los otros ejemplos no califican como accidentes de trabajo: el tropiezo camino al supermercado no está relacionado con el trabajo, la situación de la trabajadora embarazada es una contingencia común protegida específicamente, y el permiso por nacimiento es una suspensión del contrato con protección social específica.",
      },
      {
        id: 6215,
        moduloId: 602,
        pregunta: "¿Cuál de los siguientes no es un principio de la prevención según la LPRL?",
        opciones: [
          "Evaluar los riesgos.",
          "Adaptar la persona al trabajo.",
          "Planificar la prevención.",
          "Tener en cuenta la evolución de la técnica.",
        ],
        respuestaCorrecta: 1,
        explicacion: "Adaptar la persona al trabajo no es un principio de la prevención según la Ley 31/1995 de Prevención de Riesgos Laborales (LPRL). De hecho, el artículo 15.1.d establece exactamente lo contrario: 'Adaptar el trabajo a la persona, en particular en lo que respecta a la concepción de los puestos de trabajo, así como a la elección de los equipos y los métodos de trabajo y de producción, con miras, en particular, a atenuar el trabajo monótono y repetitivo y a reducir los efectos del mismo en la salud'. Este principio ergonómico fundamental busca ajustar las condiciones y exigencias del trabajo a las capacidades y características de los trabajadores, y no al revés, para prevenir daños a la salud derivados de la inadaptación.",
      },
      {
        id: 6216,
        moduloId: 602,
        pregunta: "¿Cuál de los siguientes no es un derecho del trabajador en materia preventiva?",
        opciones: [
          "Formular propuestas al empresario.",
          "Recibir formación exclusivamente práctica.",
          "Recibir información sobre riesgos del puesto.",
          "Vigilancia de su salud respetando su intimidad.",
        ],
        respuestaCorrecta: 1,
        explicacion: "Recibir formación exclusivamente práctica no es un derecho del trabajador en materia preventiva. Según el artículo 19 de la Ley 31/1995 de Prevención de Riesgos Laborales, el empresario debe garantizar que cada trabajador reciba una formación teórica y práctica, suficiente y adecuada, en materia preventiva. La formación debe ser tanto teórica como práctica, no exclusivamente práctica, para asegurar que el trabajador comprende los riesgos y las medidas preventivas desde un punto de vista conceptual y sabe aplicarlas correctamente. Los otros elementos mencionados sí constituyen derechos reconocidos: formular propuestas (art. 18.2), recibir información sobre riesgos (art. 18.1) y vigilancia de la salud respetando la intimidad (art. 22).",
      },
      {
        id: 6217,
        moduloId: 602,
        pregunta: "¿Cuál de las siguientes NO es una enfermedad profesional?",
        opciones: [
          "Lucas, trabaja con amianto y padece enfermedad respiratoria.",
          "Koldo, sufre desgaste de columna por levantar maletines.",
          "Iñaki, peluquero con enfermedad respiratoria por tintes.",
          "Rocío, sufre desvanecimiento por calor y se golpea la cabeza.",
        ],
        respuestaCorrecta: 3,
        explicacion: "El caso de Rocío, que sufre un desvanecimiento por calor y se golpea la cabeza, NO constituye una enfermedad profesional, sino un accidente de trabajo. Según el Real Decreto 1299/2006, que establece el cuadro de enfermedades profesionales, estas deben cumplir dos requisitos: estar causadas por elementos o sustancias específicas listadas en dicho cuadro y contraerse en actividades también especificadas. El desvanecimiento por calor seguido de un golpe es un suceso súbito y traumático, característico de un accidente laboral, no una enfermedad de desarrollo progresivo. En cambio, los otros casos sí pueden considerarse enfermedades profesionales: la enfermedad respiratoria por amianto (grupo 4), el desgaste de columna por manipulación de cargas (grupo 3) y la enfermedad respiratoria del peluquero por exposición a productos químicos (grupo 1).",
      },
      {
        id: 6218,
        moduloId: 602,
        pregunta: "¿Cuál es la norma básica en materia de prevención de riesgos laborales?",
        opciones: [
          "Ley 31/1995, de Prevención de Riesgos Laborales.",
          "Ley 15/1931, de Prevención de Riesgos.",
          "Ley 31/2005, de Prevención de Accidentes.",
          "Real Decreto sobre Prevención en Entornos de Trabajo.",
        ],
        respuestaCorrecta: 0,
        explicacion: "La Ley 31/1995, de 8 de noviembre, de Prevención de Riesgos Laborales es la norma básica en esta materia en España. Esta ley transpuso al derecho español la Directiva 89/391/CEE y estableció el marco fundamental en el que se desarrollan las distintas acciones preventivas. Define los derechos y obligaciones de trabajadores y empresarios, establece los principios generales de la acción preventiva, regula los servicios de prevención, y determina las responsabilidades y sanciones relacionadas con el incumplimiento de la normativa preventiva. Es la piedra angular de toda la estructura normativa sobre seguridad y salud en el trabajo en España, siendo desarrollada posteriormente por numerosos reglamentos específicos. Las otras opciones mencionan normas inexistentes o con denominaciones incorrectas.",
      },
      {
        id: 6219,
        moduloId: 602,
        pregunta: "¿Cuál de las siguientes no es una obligación del trabajador en PRL?",
        opciones: [
          "Cooperar con la empresa.",
          "Usar adecuadamente los equipos.",
          "Informar de los riesgos.",
          "Investigar fuentes de peligro e informar al empresario.",
        ],
        respuestaCorrecta: 3,
        explicacion: "Investigar fuentes de peligro e informar al empresario no es una obligación del trabajador en materia de prevención de riesgos laborales. Según el artículo 29 de la Ley 31/1995, los trabajadores deben informar de inmediato a su superior jerárquico directo sobre cualquier situación que, a su juicio, entrañe un riesgo, pero no tienen la obligación de investigar activamente las fuentes de peligro, ya que esta es una responsabilidad que corresponde al empresario mediante la evaluación de riesgos. Las otras opciones sí son obligaciones explícitas de los trabajadores recogidas en este artículo: cooperar con el empresario para garantizar condiciones de trabajo seguras, usar adecuadamente los equipos de trabajo y medios de protección, e informar de inmediato sobre situaciones que entrañen riesgo."
      }
    ]
  }
  export default moduloUnidadUno;