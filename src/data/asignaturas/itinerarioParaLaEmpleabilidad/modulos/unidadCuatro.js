/**
 * Datos del módulo Unidad Cuatro perteneciente a la asignatura de ITP.
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
export const moduloUnidadCuatro = {
    id: 605,
    nombre: "Test Unidad 4",
    esExamen: false,
    asignaturaId: 6,
    descripcion: "Principios y fuentes del Derecho del Trabajo, relaciones laborales y derechos fundamentales de los trabajadores en el marco legal español.",
    preguntas: [
      {
        id: 6501,
        moduloId: 605,
        pregunta: "¿Qué documento regula principalmente las relaciones laborales en España?",
        opciones: [
          "Constitución Española de 1978.",
          "Ley Orgánica del Trabajo.",
          "Estatuto de los Trabajadores.",
          "Real Decreto Legislativo de Seguridad Social.",
        ],
        respuestaCorrecta: 2,
        explicacion: "El Estatuto de los Trabajadores (actualmente regulado por el Real Decreto Legislativo 2/2015, de 23 de octubre) es la norma legal básica que regula principalmente las relaciones laborales en España. Este texto normativo establece el marco general de los derechos y deberes de empresarios y trabajadores, los diferentes tipos de contratos, las condiciones laborales, la negociación colectiva, y otros aspectos fundamentales del ámbito laboral. Aunque la Constitución Española establece los derechos laborales fundamentales (como el derecho al trabajo, a la libre elección de profesión, a la promoción a través del trabajo, etc.), es el Estatuto de los Trabajadores la norma específica que desarrolla estos principios constitucionales y regula de forma detallada las relaciones laborales.",
      },
      {
        id: 6502,
        moduloId: 605,
        pregunta: "¿Qué principio asegura que el trabajador obtenga siempre la mayor ventaja posible ante normas conflictivas?",
        opciones: [
          "Principio de Irrenunciabilidad.",
          "Principio de Norma Más Favorable.",
          "Principio de Condición Más Beneficiosa.",
          "Principio de Igualdad.",
        ],
        respuestaCorrecta: 1,
        explicacion: "El Principio de Norma Más Favorable es el que asegura que el trabajador obtenga siempre la mayor ventaja posible ante normas conflictivas. Este principio, recogido en el artículo 3.3 del Estatuto de los Trabajadores, establece que en caso de concurrencia de normas laborales aplicables a una misma situación, se aplicará aquella que resulte más favorable para el trabajador en su conjunto. Este principio supone una excepción a la jerarquía normativa tradicional, permitiendo que normas de rango inferior (como un convenio colectivo) prevalezcan sobre normas superiores cuando establecen condiciones más ventajosas para los trabajadores. De esta manera, se garantiza que, ante el conflicto entre diferentes normas aplicables a una misma situación laboral, se aplique la que proporcione mayores beneficios al trabajador.",
      },
      {
        id: 6503,
        moduloId: 605,
        pregunta: "¿Cuál de los siguientes NO es un derecho básico del trabajador?",
        opciones: [
          "Libre sindicación.",
          "Derecho a huelga.",
          "Derecho a participar en beneficios empresariales.",
          "Derecho a negociación colectiva.",
        ],
        respuestaCorrecta: 2,
        explicacion: "El derecho a participar en los beneficios empresariales NO es un derecho básico del trabajador reconocido legalmente en España. Si bien algunos convenios colectivos o acuerdos específicos pueden establecer sistemas de participación en beneficios, no se trata de un derecho universal garantizado por la legislación laboral. El artículo 4 del Estatuto de los Trabajadores enumera los derechos laborales básicos, entre los que se incluyen el derecho a la libre sindicación, a la negociación colectiva, a la huelga, a la reunión, a la información, consulta y participación en la empresa, pero no menciona específicamente un derecho general a participar en los beneficios empresariales. Los trabajadores tienen derecho a una remuneración suficiente, pero esto no implica obligatoriamente una participación en los beneficios de la empresa.",
      },
      {
        id: 6504,
        moduloId: 605,
        pregunta: "¿Qué órgano regula los conflictos laborales antes de llegar a juicio?",
        opciones: [
          "Tribunal Constitucional.",
          "Juzgados de lo Social.",
          "SMAC (Servicio de Mediación, Arbitraje y Conciliación).",
          "Inspección de Trabajo.",
        ],
        respuestaCorrecta: 2,
        explicacion: "El SMAC (Servicio de Mediación, Arbitraje y Conciliación) es el órgano que regula los conflictos laborales antes de llegar a juicio. Este servicio administrativo, dependiente de las Comunidades Autónomas, tiene como función principal realizar el trámite de conciliación previa obligatoria antes de acudir a la vía judicial en la mayoría de los litigios laborales, según establece el artículo 63 de la Ley Reguladora de la Jurisdicción Social. Durante este procedimiento, un funcionario intenta que las partes (trabajador y empresa) lleguen a un acuerdo que evite el posterior proceso judicial. Si se alcanza un acuerdo, este tiene fuerza ejecutiva similar a una sentencia; si no se llega a acuerdo, se expide una certificación que permite iniciar el procedimiento judicial ante los Juzgados de lo Social. Este sistema busca descongestionar los tribunales y proporcionar una solución más rápida y menos costosa a los conflictos laborales.",
      },
      {
        id: 6505,
        moduloId: 605,
        pregunta: "¿Qué modalidad de trabajo se realiza exclusivamente con medios tecnológicos?",
        opciones: [
          "Teletrabajo.",
          "Trabajo presencial.",
          "Trabajo híbrido.",
          "Trabajo temporal.",
        ],
        respuestaCorrecta: 0,
        explicacion: "El teletrabajo es la modalidad de trabajo que se realiza exclusivamente con medios tecnológicos. Según la Ley 10/2021, de trabajo a distancia, el teletrabajo se define como una forma específica de trabajo a distancia que se lleva a cabo mediante el uso exclusivo o prevalente de medios y sistemas informáticos, telemáticos y de telecomunicación. Mientras que el trabajo a distancia es un concepto más amplio que incluye cualquier forma de trabajo que se realice fuera de los establecimientos y centros de trabajo de la empresa, el teletrabajo específicamente requiere el uso de tecnologías de la información y comunicación. Esta modalidad ha cobrado especial relevancia en los últimos años, especialmente a raíz de la pandemia de COVID-19, y cuenta con una regulación específica que establece diversos derechos y obligaciones tanto para empresas como para trabajadores.",
      },
      {
        id: 6506,
        moduloId: 605,
        pregunta: "¿Qué principio establece que el trabajador no puede renunciar a sus derechos laborales?",
        opciones: [
          "Principio de Condición Más Beneficiosa.",
          "Principio de Norma Mínima.",
          "Principio de Irrenunciabilidad de Derechos.",
          "Principio de Igualdad.",
        ],
        respuestaCorrecta: 2,
        explicacion: "El Principio de Irrenunciabilidad de Derechos establece que el trabajador no puede renunciar a sus derechos laborales. Este principio, recogido implícitamente en el artículo 3.5 del Estatuto de los Trabajadores, señala que los trabajadores no pueden disponer válidamente de los derechos reconocidos como indisponibles por convenio colectivo o por disposiciones legales de derecho necesario. La irrenunciabilidad es una característica esencial del Derecho Laboral que lo distingue del Derecho Civil, donde rige el principio de autonomía de la voluntad. La finalidad de este principio es proteger al trabajador, considerado la parte más débil de la relación laboral, impidiendo que pueda verse forzado a renunciar a derechos básicos por presiones económicas o de otra índole. Así, cualquier acuerdo o pacto en el que el trabajador renuncie a derechos laborales legalmente reconocidos será considerado nulo y sin efectos jurídicos.",
      },
      {
        id: 6507,
        moduloId: 605,
        pregunta: "¿Cuál de las siguientes no es una relación laboral especial según el Estatuto de los Trabajadores?",
        opciones: [
          "Deportistas profesionales.",
          "Trabajadores autónomos.",
          "Penados en instituciones penitenciarias.",
          "Personal de alta dirección.",
        ],
        respuestaCorrecta: 1,
        explicacion: "Los trabajadores autónomos no constituyen una relación laboral especial según el Estatuto de los Trabajadores, ya que no mantienen una relación laboral en sentido estricto al no existir dependencia ni ajenidad. El artículo 2 del Estatuto de los Trabajadores enumera las relaciones laborales de carácter especial, entre las que se incluyen los deportistas profesionales, los penados en instituciones penitenciarias y el personal de alta dirección, pero no los trabajadores autónomos. Estos últimos están regulados por la Ley 20/2007, del Estatuto del Trabajo Autónomo, que establece un régimen jurídico propio fuera del ámbito del Derecho Laboral tradicional. Las relaciones laborales especiales son aquellas que, por sus peculiaridades, reciben una regulación específica distinta de la común, aunque mantienen las características esenciales de la relación laboral (voluntariedad, retribución, dependencia y ajenidad).",
      },
      {
        id: 6508,
        moduloId: 605,
        pregunta: "¿Qué requisito es indispensable para que exista una relación laboral?",
        opciones: [
          "Existencia de un contrato escrito.",
          "Voluntariedad en la prestación del servicio.",
          "Trabajo presencial.",
          "Jornada laboral completa.",
        ],
        respuestaCorrecta: 1,
        explicacion: "La voluntariedad en la prestación del servicio es un requisito indispensable para que exista una relación laboral. Según el artículo 1.1 del Estatuto de los Trabajadores, para que exista un contrato de trabajo y, por tanto, una relación laboral, deben concurrir cuatro elementos esenciales: voluntariedad, retribución, dependencia y ajenidad. La voluntariedad implica que el trabajador presta sus servicios libremente, por propia decisión, sin coacción ni obligación legal. No es imprescindible que exista un contrato escrito, ya que la ley admite la contratación verbal en ciertos casos; el trabajo no tiene por qué ser presencial, como demuestra la regulación del teletrabajo; y la jornada puede ser tanto completa como parcial. Sin embargo, sin el elemento de voluntariedad no podría hablarse de una relación laboral, sino de otro tipo de relación jurídica (por ejemplo, un trabajo forzoso, que está prohibido por la legislación).",
      },
      {
        id: 6509,
        moduloId: 605,
        pregunta: "¿Qué debe contener obligatoriamente un acuerdo de trabajo a distancia según la Ley 10/2021?",
        opciones: [
          "Registro de horas extras.",
          "Inventario de medios y herramientas.",
          "Condiciones para vacaciones adicionales.",
          "Detalles de beneficios sociales.",
        ],
        respuestaCorrecta: 1,
        explicacion: "Según la Ley 10/2021, de trabajo a distancia, un acuerdo de trabajo a distancia debe contener obligatoriamente un inventario de medios y herramientas. El artículo 7 de esta ley establece el contenido mínimo obligatorio del acuerdo de trabajo a distancia, que incluye, entre otros elementos: el inventario de los medios, equipos y herramientas que exige el desarrollo del trabajo a distancia concertado, incluidos los consumibles y los elementos muebles, así como la vida útil o periodo máximo para la renovación de estos. Este requisito busca garantizar que el trabajador disponga de todos los recursos necesarios para realizar su labor adecuadamente desde su domicilio u otro lugar distinto del centro de trabajo. La empresa debe proporcionar, mantener y garantizar la atención en caso de dificultades técnicas de estos medios, pero es necesario que queden detallados en el acuerdo para evitar conflictos futuros.",
      },
      {
        id: 6510,
        moduloId: 605,
        pregunta: "¿Qué principio permite interpretar normas laborales dudosas en favor del trabajador?",
        opciones: [
          "Norma Mínima.",
          "Norma Más Favorable.",
          "In Dubio Pro Operario.",
          "Condición Más Beneficiosa.",
        ],
        respuestaCorrecta: 2,
        explicacion: "El principio 'In Dubio Pro Operario' (en caso de duda, a favor del trabajador) es el que permite interpretar normas laborales dudosas en favor del trabajador. Este principio, derivado del carácter tuitivo o protector del Derecho Laboral, establece que cuando una norma laboral admite más de una interpretación razonable y no es posible determinar con claridad su sentido y alcance, debe optarse por aquella interpretación que sea más favorable a los intereses del trabajador. No debe confundirse con el principio de norma más favorable, que se aplica cuando existen varias normas aplicables a un mismo supuesto, ni con el de condición más beneficiosa, que protege situaciones ya consolidadas. El 'In Dubio Pro Operario' opera en el ámbito interpretativo de una misma norma cuando su redacción es ambigua o imprecisa, reflejando así la finalidad protectora del Derecho del Trabajo hacia la parte considerada más débil de la relación laboral.",
      },
      {
        id: 6511,
        moduloId: 605,
        pregunta: "Según el Estatuto de los Trabajadores, ¿cuál es una característica de la 'ajenidad' en una relación laboral?",
        opciones: [
          "El trabajador debe asumir los riesgos del negocio.",
          "El empleador asume los beneficios y riesgos del negocio.",
          "El trabajador comparte beneficios y pérdidas del negocio.",
          "Ambos asumen riesgos de manera equitativa.",
        ],
        respuestaCorrecta: 1,
        explicacion: "Según el Estatuto de los Trabajadores, una característica esencial de la 'ajenidad' en una relación laboral es que el empleador asume los beneficios y riesgos del negocio. El concepto de ajenidad, recogido en el artículo 1.1 del Estatuto como uno de los elementos definitorios de la relación laboral, implica que los frutos o resultados del trabajo se transfieren automáticamente al empresario, quien asume la titularidad originaria de lo producido. Paralelamente, el empresario también asume los riesgos económicos de la actividad, independientemente de su resultado favorable o adverso. El trabajador, por su parte, percibe su salario con independencia del éxito o fracaso de la empresa, sin participar directamente en las pérdidas o ganancias del negocio. Esta característica es fundamental para distinguir la relación laboral de otras relaciones jurídicas como las mercantiles o las de trabajo por cuenta propia, donde es el propio trabajador quien asume los riesgos de su actividad.",
      },
      {
        id: 6512,
        moduloId: 605,
        pregunta: "¿Qué derecho garantiza que un trabajador no esté disponible fuera de su horario laboral?",
        opciones: [
          "Derecho a la salud y seguridad.",
          "Derecho a la desconexión digital.",
          "Derecho a la igualdad de trato.",
          "Derecho a la promoción profesional.",
        ],
        respuestaCorrecta: 1,
        explicacion: "El derecho a la desconexión digital garantiza que un trabajador no esté disponible fuera de su horario laboral. Este derecho, reconocido en el artículo 88 de la Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales, y reforzado en la Ley 10/2021 para el trabajo a distancia, asegura a los trabajadores el respeto a su tiempo de descanso, permisos y vacaciones, así como a su intimidad personal y familiar. La desconexión digital implica que el trabajador no tiene obligación de atender llamadas, correos electrónicos, mensajes u otras comunicaciones profesionales fuera de su jornada laboral. Este derecho cobra especial relevancia en la era digital, donde las tecnologías de la comunicación pueden difuminar los límites entre tiempo de trabajo y tiempo de descanso. Las empresas deben elaborar políticas internas que definan las modalidades del ejercicio de este derecho, tras audiencia con los representantes de los trabajadores.",
      },
      {
        id: 6513,
        moduloId: 605,
        pregunta: "¿Qué principio asegura que los derechos adquiridos por un trabajador no pueden ser reducidos?",
        opciones: [
          "Principio de Irrenunciabilidad.",
          "Principio de Condición Más Beneficiosa.",
          "Principio de Norma Más Favorable.",
          "Principio de Norma Mínima.",
        ],
        respuestaCorrecta: 1,
        explicacion: "El Principio de Condición Más Beneficiosa asegura que los derechos adquiridos por un trabajador no pueden ser reducidos unilateralmente por el empresario. Este principio, desarrollado jurisprudencialmente y con base en el artículo 3.1.c del Estatuto de los Trabajadores, protege aquellas condiciones laborales más favorables que el trabajador ha incorporado a su relación laboral por voluntad unilateral del empresario o por acuerdo entre ambas partes, y que no tienen su origen en una norma jurídica o convenio colectivo. Para que opere este principio, es necesario que la condición se haya consolidado, sea clara y regular, y se haya otorgado por voluntad inequívoca del empresario de incorporarla al nexo contractual. Una vez consolidada, esta condición no puede ser suprimida ni disminuida unilateralmente por el empresario, respetando así los derechos ya adquiridos por el trabajador e incorporados a su patrimonio jurídico-laboral.",
      },
      {
        id: 6514,
        moduloId: 605,
        pregunta: "Según la jerarquía normativa, ¿qué tiene prioridad sobre un convenio colectivo?",
        opciones: [
          "Usos y costumbres locales.",
          "Reglamento empresarial.",
          "Constitución Española.",
          "Contrato individual de trabajo.",
        ],
        respuestaCorrecta: 2,
        explicacion: "Según la jerarquía normativa, la Constitución Española tiene prioridad sobre un convenio colectivo. El artículo 3 del Estatuto de los Trabajadores establece las fuentes de la relación laboral y su jerarquía, situando en primer lugar las disposiciones legales y reglamentarias del Estado, que deben respetar en todo caso la Constitución como norma suprema del ordenamiento jurídico. Los convenios colectivos, aunque son una importante fuente del Derecho Laboral y tienen eficacia normativa, están subordinados a la Constitución y a las leyes. Esto significa que ningún convenio colectivo puede contener cláusulas que contravengan disposiciones constitucionales, como el derecho a la igualdad, a la no discriminación o cualquier otro derecho fundamental. Los usos y costumbres locales y los contratos individuales de trabajo ocupan un lugar inferior en esta jerarquía, mientras que los reglamentos empresariales deben respetar tanto las leyes como los convenios colectivos aplicables.",
      },
      {
        id: 6515,
        moduloId: 605,
        pregunta: "¿Qué elemento no es esencial en una relación laboral?",
        opciones: [
          "Remuneración económica.",
          "Personalidad en la prestación del servicio.",
          "Dependencia del trabajador hacia el empleador.",
          "Modalidad del contrato (escrito o verbal).",
        ],
        respuestaCorrecta: 3,
        explicacion: "La modalidad del contrato (escrito o verbal) no es un elemento esencial en una relación laboral. Según el artículo 1.1 del Estatuto de los Trabajadores, los elementos esenciales que definen una relación laboral son: voluntariedad (el trabajador presta sus servicios libremente), remuneración (el trabajo se realiza a cambio de un salario), dependencia (el trabajador está bajo la dirección y organización del empresario) y ajenidad (los frutos del trabajo se transfieren al empresario, quien asume los riesgos). La personalidad en la prestación del servicio, aunque no mencionada expresamente en el artículo, se considera también un elemento característico, derivado del carácter personal del contrato de trabajo. Sin embargo, la forma del contrato (escrito o verbal) es un requisito formal que, en general, no afecta a la existencia de la relación laboral, ya que el contrato de trabajo puede celebrarse verbalmente, salvo en casos específicos donde la ley exige forma escrita.",
      },
      {
        id: 6516,
        moduloId: 605,
        pregunta: "¿Qué característica diferencia al teletrabajo del trabajo a distancia?",
        opciones: [
          "Uso exclusivo de medios tecnológicos.",
          "Flexibilidad en el horario.",
          "Requiere de acuerdo por escrito.",
          "No tiene compensación de gastos.",
        ],
        respuestaCorrecta: 0,
        explicacion: "La característica que diferencia al teletrabajo del trabajo a distancia es el uso exclusivo de medios tecnológicos. Según la Ley 10/2021, de trabajo a distancia, el trabajo a distancia es un concepto amplio que abarca toda forma de organización del trabajo en la que este se realiza fuera de los establecimientos y centros de la empresa, durante toda o parte de la jornada. El teletrabajo, por su parte, es una modalidad específica de trabajo a distancia que se lleva a cabo mediante el uso exclusivo o prevalente de medios y sistemas informáticos, telemáticos y de telecomunicación. Así, mientras todo teletrabajo es trabajo a distancia, no todo trabajo a distancia es teletrabajo. Por ejemplo, un vendedor que trabaja fuera de la oficina pero no utiliza medios tecnológicos de forma exclusiva o prevalente, realiza trabajo a distancia pero no teletrabajo. Ambas modalidades comparten características como la necesidad de acuerdo escrito y el derecho a compensación de gastos.",
      },
      {
        id: 6517,
        moduloId: 605,
        pregunta: "¿Qué tribunal es el más alto en resolver conflictos laborales en España?",
        opciones: [
          "Audiencia Nacional.",
          "Tribunal Supremo.",
          "Tribunal Superior de Justicia.",
          "Juzgados de lo Social.",
        ],
        respuestaCorrecta: 1,
        explicacion: "El Tribunal Supremo es el órgano jurisdiccional más alto en resolver conflictos laborales en España. La estructura judicial en materia laboral comienza con los Juzgados de lo Social, que conocen en primera instancia de la mayoría de los litigios. Sus sentencias pueden ser recurridas ante las Salas de lo Social de los Tribunales Superiores de Justicia de cada Comunidad Autónoma. La Audiencia Nacional interviene en primera instancia en conflictos colectivos de ámbito superior a una Comunidad Autónoma. Finalmente, en la cúspide de esta jerarquía se encuentra la Sala de lo Social del Tribunal Supremo, que conoce fundamentalmente de los recursos de casación para la unificación de doctrina contra sentencias dictadas por los TSJ y de los recursos de casación contra sentencias de la Audiencia Nacional. Sus sentencias crean jurisprudencia y son vinculantes para los tribunales inferiores, ejerciendo así una función esencial en la interpretación y aplicación uniforme del ordenamiento jurídico laboral en todo el territorio nacional.",
      },
      {
        id: 6518,
        moduloId: 605,
        pregunta: "¿Qué derecho permite al trabajador impugnar un despido injustificado?",
        opciones: [
          "Derecho a la igualdad.",
          "Derecho a la negociación colectiva.",
          "Derecho a la tutela judicial efectiva.",
          "Derecho a la seguridad en el empleo.",
        ],
        respuestaCorrecta: 2,
        explicacion: "El derecho a la tutela judicial efectiva es el que permite al trabajador impugnar un despido injustificado. Este derecho fundamental, recogido en el artículo 24 de la Constitución Española, garantiza a todas las personas el acceso a los tribunales para la defensa de sus derechos e intereses legítimos, sin que en ningún caso pueda producirse indefensión. En el ámbito laboral, este derecho se concreta en la posibilidad que tiene el trabajador de acudir a los Juzgados de lo Social para impugnar un despido que considere injustificado o improcedente, dentro del plazo de caducidad de 20 días hábiles. La Ley Reguladora de la Jurisdicción Social desarrolla este derecho estableciendo un procedimiento específico para las demandas por despido, que incluye la posibilidad de solicitar la nulidad o improcedencia del mismo, con las consecuencias legales correspondientes (readmisión o indemnización).",
      },
      {
        id: 6519,
        moduloId: 605,
        pregunta: "¿Qué derecho no puede ser limitado por un contrato de trabajo?",
        opciones: [
          "La duración de las vacaciones.",
          "El salario mínimo interprofesional.",
          "La jornada máxima de trabajo.",
          "Todos los anteriores.",
        ],
        respuestaCorrecta: 3,
        explicacion: "Todos los derechos mencionados (la duración de las vacaciones, el salario mínimo interprofesional y la jornada máxima de trabajo) no pueden ser limitados por un contrato de trabajo. Estos son ejemplos de derechos laborales mínimos establecidos por ley que tienen carácter de derecho necesario, es decir, son indisponibles para las partes y no pueden ser objeto de renuncia ni limitación contractual. El artículo 3.5 del Estatuto de los Trabajadores establece que los trabajadores no pueden disponer válidamente de derechos reconocidos como indisponibles por disposiciones legales de derecho necesario. Así, un contrato que estableciera vacaciones inferiores a los 30 días naturales anuales, un salario por debajo del SMI o una jornada que excediera las 40 horas semanales de promedio en cómputo anual, sería nulo en esos aspectos. Estos mínimos actúan como un suelo de protección que garantiza condiciones laborales dignas y puede ser mejorado, pero nunca empeorado, por la negociación colectiva o individual.",
      },
      {
        id: 6520,
        moduloId: 605,
        pregunta: "¿Qué principio asegura que los trabajadores disfruten siempre del mínimo de derechos establecidos?",
        opciones: [
          "Principio de Norma Mínima.",
          "Principio de Igualdad.",
          "Principio de Norma Más Favorable.",
          "Principio de Condición Más Beneficiosa.",
        ],
        respuestaCorrecta: 0,
        explicacion: "El Principio de Norma Mínima es el que asegura que los trabajadores disfruten siempre del mínimo de derechos establecidos. Este principio fundamental del Derecho Laboral establece que las leyes laborales marcan un nivel mínimo de protección y derechos para los trabajadores, que debe ser respetado en todo caso. Estas normas actúan como un 'suelo' o estándar mínimo que puede ser mejorado, pero nunca reducido, por normas de rango inferior, convenios colectivos o contratos individuales. Por ejemplo, el Estatuto de los Trabajadores establece derechos mínimos en materia de jornada, salario, vacaciones, etc., que constituyen un límite infranqueable. Este principio se relaciona con el carácter tuitivo del Derecho Laboral, que busca proteger a la parte considerada más débil de la relación laboral, y se complementa con otros principios como el de norma más favorable o el de irrenunciabilidad de derechos."
      }
    ]
  }
  export default moduloUnidadCuatro;