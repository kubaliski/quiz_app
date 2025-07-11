/**
 * Datos del módulo Unidad Tres perteneciente a la asignatura de ITP.
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
export const moduloUnidadTres = {
    id: 604,
    nombre: "Test Unidad 3 (Antiguo)",
    esExamen: false,
    asignaturaId: 6,
    descripcion: "Gestión de la prevención de riesgos laborales, primeros auxilios y protocolos de actuación en casos de emergencia.",
    preguntas: [
      {
        id: 60401,
        moduloId: 604,
        pregunta: "¿Cuál es la duración mínima de la formación en prevención de riesgos laborales para un empresario que asume la prevención en su empresa?",
        opciones: [
          "10 horas.",
          "20 horas.",
          "30 horas.",
          "50 horas.",
        ],
        respuestaCorrecta: 2,
        explicacion: "La duración mínima de la formación en prevención de riesgos laborales para un empresario que asume la prevención en su empresa es de 30 horas. Según el artículo 35 del Real Decreto 39/1997, por el que se aprueba el Reglamento de los Servicios de Prevención, para empresas que desarrollen actividades no incluidas en el Anexo I (actividades de especial peligrosidad), el empresario puede asumir personalmente la actividad preventiva si cumple determinados requisitos, entre ellos tener una formación mínima de nivel básico en prevención de riesgos laborales, cuya duración mínima es de 30 horas. Esta formación debe capacitarle para llevar a cabo las funciones preventivas básicas que asume, aunque para actividades incluidas en el Anexo I o empresas de mayor tamaño se requerirán otras modalidades organizativas.",
      },
      {
        id: 60402,
        moduloId: 604,
        pregunta: "Según el nivel de riesgo, ¿qué acción se requiere para un riesgo clasificado como 'intolerable'?",
        opciones: [
          "Monitoreo continuo.",
          "Implementar medidas a largo plazo.",
          "Detener el trabajo hasta reducir el riesgo.",
          "Tomar medidas en un plazo razonable.",
        ],
        respuestaCorrecta: 2,
        explicacion: "Cuando un riesgo se clasifica como 'intolerable', se debe detener el trabajo hasta reducir el riesgo. Según la metodología del Instituto Nacional de Seguridad y Salud en el Trabajo (INSST) para la evaluación de riesgos laborales, un riesgo intolerable es aquel que representa la situación más grave y requiere la adopción de medidas inmediatas. En estos casos, no debe comenzarse ni continuar el trabajo hasta que se reduzca el riesgo a un nivel aceptable. Si no es posible reducir el riesgo, incluso con recursos ilimitados, debe prohibirse el trabajo. Esta clasificación forma parte de la valoración de riesgos que combina la probabilidad y severidad del daño, siendo el nivel 'intolerable' el que requiere las medidas más drásticas y urgentes para proteger la seguridad y salud de los trabajadores.",
      },
      {
        id: 60403,
        moduloId: 604,
        pregunta: "¿Qué órgano debe formarse en empresas con más de 50 trabajadores para abordar la prevención de riesgos laborales?",
        opciones: [
          "Delegados de prevención.",
          "Comité de Seguridad y Salud.",
          "Servicio de Prevención Propio.",
          "Equipo de Primera Intervención.",
        ],
        respuestaCorrecta: 1,
        explicacion: "En empresas con más de 50 trabajadores debe formarse un Comité de Seguridad y Salud. Según el artículo 38 de la Ley 31/1995 de Prevención de Riesgos Laborales, este Comité es un órgano paritario y colegiado de participación, destinado a la consulta regular y periódica de las actuaciones de la empresa en materia de prevención de riesgos. Está formado por los Delegados de Prevención (representantes de los trabajadores) y el empresario y/o sus representantes en igual número. Sus funciones incluyen participar en la elaboración y evaluación de planes y programas de prevención, promover iniciativas sobre métodos para la prevención efectiva de riesgos, y conocer y analizar los daños producidos en la salud de los trabajadores. La constitución de este Comité es obligatoria en todas las empresas o centros de trabajo que cuenten con 50 o más trabajadores.",
      },
      {
        id: 60404,
        moduloId: 604,
        pregunta: "¿Qué se debe hacer en caso de una hemorragia venosa?",
        opciones: [
          "Mantener al paciente en posición horizontal.",
          "Aplicar presión con una compresa sobre la herida.",
          "Administrar líquidos al paciente.",
          "Elevar el área afectada y no intervenir.",
        ],
        respuestaCorrecta: 1,
        explicacion: "En caso de una hemorragia venosa, la acción correcta es aplicar presión con una compresa sobre la herida. La hemorragia venosa se caracteriza por un sangrado continuo de color rojo oscuro y, a diferencia de la arterial, no sale a borbotones. La presión directa sobre la herida con una compresa estéril o, en su defecto, un paño limpio, es la medida más efectiva para detener el sangrado al favorecer la coagulación. Esta presión debe mantenerse de forma constante durante al menos 10-15 minutos. Complementariamente, es conveniente elevar la extremidad afectada por encima del nivel del corazón si es posible, lo que reduce la presión venosa y facilita el control de la hemorragia. No se recomienda administrar líquidos orales al paciente, ya que podrían estar contraindicados si requiriera una intervención quirúrgica posterior.",
      },
      {
        id: 60405,
        moduloId: 604,
        pregunta: "¿Cuál es el objetivo principal de un Plan de Prevención de Riesgos Laborales?",
        opciones: [
          "Reducir costos empresariales.",
          "Garantizar la seguridad y salud de los trabajadores.",
          "Cumplir con auditorías externas.",
          "Aumentar la productividad.",
        ],
        respuestaCorrecta: 1,
        explicacion: "El objetivo principal de un Plan de Prevención de Riesgos Laborales es garantizar la seguridad y salud de los trabajadores. Según el artículo 16 de la Ley 31/1995 de Prevención de Riesgos Laborales, este plan es la herramienta a través de la cual se integra la actividad preventiva en el sistema general de gestión de la empresa, estableciendo la política de prevención de riesgos laborales. El plan debe incluir la estructura organizativa, las responsabilidades, las funciones, las prácticas, los procedimientos y los recursos necesarios para realizar la acción preventiva en la empresa. Aunque indirectamente puede contribuir a reducir costos (por menor siniestralidad), mejorar la productividad y facilitar el cumplimiento de auditorías, su finalidad esencial es proteger a los trabajadores de los riesgos derivados del trabajo mediante acciones preventivas integradas en todas las actividades de la empresa.",
      },
      {
        id: 60406,
        moduloId: 604,
        pregunta: "En caso de quemaduras químicas, ¿qué acción es crucial?",
        opciones: [
          "Aplicar crema hidratante.",
          "Retirar la ropa contaminada y lavar la zona afectada.",
          "Cubrir la zona afectada con un vendaje seco.",
          "Enfriar la zona con hielo.",
        ],
        respuestaCorrecta: 1,
        explicacion: "En caso de quemaduras químicas, la acción crucial es retirar la ropa contaminada y lavar la zona afectada. La primera prioridad es detener la acción del agente químico, ya que mientras permanezca en contacto con la piel seguirá causando daño. Para ello, se debe retirar cuidadosamente la ropa, joyas u otros elementos contaminados, evitando que el químico se extienda a otras zonas. Después, se debe lavar la zona afectada con abundante agua corriente durante al menos 15-20 minutos. No se recomienda aplicar cremas, ungüentos o hielo directamente, ya que podrían agravar la lesión o dificultar su posterior evaluación médica. Tampoco es aconsejable cubrir inmediatamente con vendajes secos, pues algunos agentes químicos pueden reactivarse si se secan. Es fundamental buscar atención médica después de los primeros auxilios, llevando la información del producto químico causante si es posible.",
      },
      {
        id: 60407,
        moduloId: 604,
        pregunta: "¿Cuál es la principal función de los Delegados de Prevención?",
        opciones: [
          "Ejecutar simulacros.",
          "Gestionar los recursos financieros de la empresa.",
          "Promover la cooperación en la ejecución de la normativa preventiva.",
          "Diseñar el sistema de gestión de la empresa.",
        ],
        respuestaCorrecta: 2,
        explicacion: "La principal función de los Delegados de Prevención es promover la cooperación en la ejecución de la normativa preventiva. Según el artículo 36 de la Ley 31/1995 de Prevención de Riesgos Laborales, los Delegados de Prevención son los representantes de los trabajadores con funciones específicas en materia de prevención de riesgos laborales. Entre sus competencias destacan: colaborar con la dirección de la empresa en la mejora de la acción preventiva, promover y fomentar la cooperación de los trabajadores en la ejecución de la normativa, ser consultados por el empresario sobre decisiones referentes a la seguridad y salud, ejercer una labor de vigilancia y control sobre el cumplimiento de la normativa, y acompañar a los técnicos e inspectores en sus visitas. No son responsables de aspectos como la gestión financiera, el diseño del sistema de gestión empresarial o la ejecución directa de simulacros, aunque participan en su planificación y evaluación.",
      },
      {
        id: 60408,
        moduloId: 604,
        pregunta: "¿Qué acción preventiva es prioritaria ante un riesgo catalogado como 'moderado'?",
        opciones: [
          "Implementar medidas de bajo costo.",
          "Tomar medidas inmediatas.",
          "Implementar medidas en un plazo razonable.",
          "No requiere acciones adicionales.",
        ],
        respuestaCorrecta: 2,
        explicacion: "Ante un riesgo catalogado como 'moderado', la acción preventiva prioritaria es implementar medidas en un plazo razonable. Según la metodología de evaluación de riesgos laborales del Instituto Nacional de Seguridad y Salud en el Trabajo (INSST), un riesgo moderado requiere realizar esfuerzos para reducirlo, determinando las inversiones precisas que deben implantarse en un período determinado. A diferencia de los riesgos intolerables o importantes que requieren acciones inmediatas, o los riesgos triviales donde no se necesita acción específica, los riesgos moderados ocupan una posición intermedia en la que se deben adoptar medidas correctoras, pero se dispone de cierto margen temporal para su implementación. El criterio no debe basarse principalmente en el costo, sino en la efectividad de las medidas para reducir el riesgo. Las medidas para estos riesgos deben implantarse dentro de un período de tiempo definido en la planificación preventiva.",
      },
      {
        id: 60409,
        moduloId: 604,
        pregunta: "¿Qué significa 'PAS' en primeros auxilios?",
        opciones: [
          "Proteger, Ayudar, Supervisar.",
          "Proteger, Alertar, Socorrer.",
          "Prevenir, Actuar, Salvar.",
          "Proteger, Auxiliar, Salvaguardar.",
        ],
        respuestaCorrecta: 1,
        explicacion: "En primeros auxilios, 'PAS' significa Proteger, Alertar, Socorrer. Este acrónimo representa el protocolo básico de actuación ante cualquier emergencia médica, estableciendo una secuencia ordenada de acciones que busca garantizar tanto la seguridad del socorrista como la atención adecuada a la víctima. 'Proteger' implica asegurar que el lugar del accidente sea seguro, eliminando o alejando cualquier peligro para evitar más víctimas, incluido el propio socorrista. 'Alertar' consiste en llamar a los servicios de emergencia (112 en Europa, 911 en EE.UU.), proporcionando información clara sobre la localización, número de heridos y estado de los mismos. 'Socorrer' es prestar los primeros auxilios básicos a las víctimas según sus lesiones, siempre después de haber protegido y alertado. Esta secuencia es fundamental, ya que seguir el orden adecuado maximiza las posibilidades de ayuda efectiva.",
      },
      {
        id: 60410,
        moduloId: 604,
        pregunta: "En caso de atragantamiento severo, ¿qué técnica se utiliza?",
        opciones: [
          "Golpes en la cabeza.",
          "Presión torácica.",
          "Maniobra de Heimlich.",
          "Elevación de las piernas.",
        ],
        respuestaCorrecta: 2,
        explicacion: "En caso de atragantamiento severo, la técnica que se utiliza es la maniobra de Heimlich. Esta técnica, también conocida como compresión abdominal, se aplica cuando una persona presenta un atragantamiento severo, caracterizado por la imposibilidad de hablar, toser o respirar, y suele llevar las manos al cuello (signo universal de asfixia). La maniobra consiste en colocarse detrás de la víctima, rodear su cintura con los brazos, colocar el puño con el pulgar hacia dentro justo por encima del ombligo, agarrarlo con la otra mano y realizar compresiones rápidas hacia arriba y hacia dentro. Estas compresiones crean una presión que puede expulsar el objeto extraño de las vías respiratorias. Esta técnica es reconocida internacionalmente en los protocolos de primeros auxilios como el método más efectivo para resolver obstrucciones graves de la vía aérea en adultos conscientes.",
      },
      {
        id: 60411,
        moduloId: 604,
        pregunta: "¿Qué tipo de quemadura afecta todas las capas de la piel y tejidos subyacentes?",
        opciones: [
          "De primer grado.",
          "De segundo grado.",
          "De tercer grado.",
          "Superficial.",
        ],
        respuestaCorrecta: 2,
        explicacion: "Las quemaduras de tercer grado afectan todas las capas de la piel y tejidos subyacentes. Estas quemaduras, también llamadas de espesor total o completo, destruyen la epidermis, la dermis y pueden llegar a dañar tejidos más profundos como músculos, tendones, nervios y huesos. Se caracterizan por tener una apariencia carbonizada, cerosa, blanca o marrón, y suelen carecer de sensibilidad en la zona central debido a la destrucción de las terminaciones nerviosas. A diferencia de las quemaduras de primer grado, que sólo afectan la capa externa (epidermis) y causan enrojecimiento, o las de segundo grado, que dañan la epidermis y parte de la dermis provocando ampollas, las de tercer grado representan la forma más grave y requieren atención médica urgente. Su recuperación es más prolongada, frecuentemente requieren injertos de piel y suelen dejar secuelas permanentes.",
      },
      {
        id: 60412,
        moduloId: 604,
        pregunta: "¿Qué acción debe realizarse en caso de paro cardíaco?",
        opciones: [
          "Colocar a la persona de lado.",
          "Iniciar RCP inmediatamente.",
          "Insuflaciones de emergencia.",
          "Elevar las piernas de la persona.",
        ],
        respuestaCorrecta: 1,
        explicacion: "En caso de paro cardíaco, la acción que debe realizarse inmediatamente es iniciar la RCP (Reanimación Cardiopulmonar). Según las guías internacionales de reanimación, ante una persona inconsciente que no respira o no respira normalmente (solo gasping), se debe comenzar la RCP sin demora. El protocolo actual para adultos prioriza las compresiones torácicas (C-A-B: Compresiones-Vía Aérea-Ventilación), comenzando con 30 compresiones de al menos 5 cm de profundidad a un ritmo de 100-120 por minuto, seguidas de 2 ventilaciones de un segundo cada una. Colocar a la persona de lado (posición lateral de seguridad) está indicado para personas inconscientes que respiran normalmente; las insuflaciones sin compresiones son insuficientes en paro cardíaco; y elevar las piernas podría ser útil en ciertos tipos de shock, pero no en paro cardíaco. La rápida iniciación de RCP puede doblar o triplicar las posibilidades de supervivencia.",
      },
      {
        id: 60413,
        moduloId: 604,
        pregunta: "¿Qué acción se prioriza en una emergencia parcial en una empresa?",
        opciones: [
          "Activar todos los equipos de intervención.",
          "Detener todas las actividades de la empresa.",
          "Evacuar solo la zona afectada.",
          "Solicitar ayuda externa inmediata.",
        ],
        respuestaCorrecta: 2,
        explicacion: "En una emergencia parcial en una empresa, la acción que se prioriza es evacuar solo la zona afectada. Según los criterios establecidos en los planes de autoprotección empresariales, basados en la Norma Básica de Autoprotección (RD 393/2007), una emergencia parcial es aquella que, aun siendo importante, puede ser controlada con los medios disponibles en el centro y sólo afecta a una zona determinada. En este tipo de situación, lo adecuado es evacuar preventivamente el área directamente afectada, mientras los equipos de primera y segunda intervención trabajan para controlar la emergencia. No es necesario activar todos los equipos de intervención ni detener las actividades en zonas no afectadas, lo que provocaría pérdidas económicas injustificadas. La solicitud de ayuda externa se valora según la evolución de la emergencia y si los equipos internos pueden controlarla, pero no es automáticamente prioritaria como lo sería en una emergencia general.",
      },
      {
        id: 60414,
        moduloId: 604,
        pregunta: "¿Cuál es la primera fase en la evaluación de riesgos laborales?",
        opciones: [
          "Estimación de riesgos.",
          "Identificación de riesgos.",
          "Valoración de riesgos.",
          "Control de riesgos.",
        ],
        respuestaCorrecta: 1,
        explicacion: "La primera fase en la evaluación de riesgos laborales es la identificación de riesgos. Según la metodología del Instituto Nacional de Seguridad y Salud en el Trabajo (INSST), el proceso de evaluación de riesgos laborales comienza necesariamente con la identificación de los peligros presentes en cada puesto de trabajo o tarea. Esta fase consiste en reconocer y documentar los factores que pueden causar daños a la salud de los trabajadores, como equipos, materiales, procesos, organización o condiciones del entorno laboral. Solo después de identificar correctamente los riesgos se puede proceder a las siguientes fases: la estimación (que determina la probabilidad y severidad potencial), la valoración (que determina la magnitud del riesgo y establece prioridades) y finalmente el control (que establece medidas preventivas). Sin una adecuada identificación inicial, las fases posteriores carecerían de fundamento y podrían pasar desapercibidos riesgos significativos.",
      },
      {
        id: 60415,
        moduloId: 604,
        pregunta: "¿Qué indica una tarjeta de triaje de color negro?",
        opciones: [
          "Atención inmediata necesaria.",
          "Riesgo moderado.",
          "No hay posibilidad de supervivencia.",
          "Situación estable.",
        ],
        respuestaCorrecta: 2,
        explicacion: "Una tarjeta de triaje de color negro indica que no hay posibilidad de supervivencia o que la persona ha fallecido. En el sistema de triaje, utilizado por los servicios de emergencia en situaciones con múltiples víctimas, se establece una clasificación por colores según la gravedad y prioridad de atención. El color negro se asigna a personas fallecidas o con lesiones incompatibles con la vida, para quienes las intervenciones médicas serían fútiles y se priorizan los recursos para aquellos con posibilidades de supervivencia. El triaje establece también otros colores: rojo para pacientes críticos que requieren atención inmediata, amarillo para pacientes graves pero estables que pueden esperar, y verde para heridos leves. Este sistema, basado en criterios internacionalmente aceptados, permite optimizar los recursos sanitarios en situaciones de emergencia, asegurando que se atienda primero a quienes más pueden beneficiarse de la intervención médica.",
      },
      {
        id: 60416,
        moduloId: 604,
        pregunta: "¿Qué método de transporte se usa en situaciones de emergencia cuando se requiere mover rápido al herido?",
        opciones: [
          "Método del bombero.",
          "Arrastre de emergencia.",
          "Uso de una camilla rígida.",
          "Método del cabestrillo.",
        ],
        respuestaCorrecta: 1,
        explicacion: "En situaciones de emergencia cuando se requiere mover rápidamente al herido, el método de transporte que se utiliza es el arrastre de emergencia. Este método se emplea especialmente cuando existe un peligro inminente (incendio, derrumbe, atmósfera tóxica) y es necesario retirar a la víctima con urgencia de la zona de riesgo. Consiste en arrastrar a la persona tirando de sus ropas, axilas, o mediante técnicas específicas como el arrastre por las axilas o el arrastre por los tobillos, minimizando la manipulación de la columna vertebral. A diferencia de otros métodos, no requiere equipamiento y puede ser realizado por un solo rescatador. Aunque no es el método ideal desde el punto de vista de la protección de posibles lesiones, está justificado cuando el riesgo de permanecer en el lugar supera los posibles daños del traslado. Una vez en zona segura, se debe valorar utilizar métodos más adecuados como camillas si es necesario un transporte posterior.",
      },
      {
        id: 60417,
        moduloId: 604,
        pregunta: "¿Qué se debe hacer si un trabajador presenta una hemorragia nasal?",
        opciones: [
          "Inclinar la cabeza hacia atrás.",
          "Inclinar la cabeza hacia adelante.",
          "Tapar la nariz completamente.",
          "Mantener al trabajador tumbado.",
        ],
        respuestaCorrecta: 1,
        explicacion: "Si un trabajador presenta una hemorragia nasal (epistaxis), se debe inclinar la cabeza hacia adelante. Esta posición permite que la sangre salga por las fosas nasales en lugar de deslizarse por la faringe hacia el estómago, lo que podría causar náuseas o vómitos. El protocolo correcto incluye: sentar a la persona, inclinar ligeramente su cabeza hacia adelante, presionar con el pulgar y el índice la parte blanda de la nariz (justo debajo del hueso) durante 10-15 minutos continuos, y aplicar frío local en la frente o nuca. Inclinar la cabeza hacia atrás es incorrecto y peligroso, ya que facilita que la sangre se dirija hacia la garganta, pudiendo provocar atragantamiento o que la persona la trague. Tapar completamente la nariz impediría la salida de la sangre y podría aumentar la presión. Mantener al trabajador tumbado tampoco es recomendable, pues facilitaría la deglución de sangre.",
      },
      {
        id: 60418,
        moduloId: 604,
        pregunta: "¿Cuál es la profundidad mínima recomendada en compresiones torácicas para adultos durante la RCP?",
        opciones: [
          "3 cm.",
          "4 cm.",
          "5 cm.",
          "6 cm.",
        ],
        respuestaCorrecta: 2,
        explicacion: "La profundidad mínima recomendada en compresiones torácicas para adultos durante la RCP (Reanimación Cardiopulmonar) es de 5 cm. Según las guías internacionales de resucitación, como las del European Resuscitation Council (ERC) y la American Heart Association (AHA), las compresiones torácicas deben realizarse con una profundidad de al menos 5 cm, pero no superior a 6 cm en adultos. Esta profundidad garantiza un bombeo cardíaco artificial eficaz, permitiendo que la sangre circule y mantenga oxigenados los órganos vitales, especialmente el cerebro. Además de la profundidad, otros factores importantes para una RCP efectiva son: realizar las compresiones a un ritmo de 100-120 por minuto, permitir la reexpansión completa del tórax después de cada compresión, y minimizar las interrupciones. Las compresiones de menor profundidad (3 o 4 cm) no serían suficientes para generar un flujo sanguíneo adecuado en adultos.",
      },
      {
        id: 60419,
        moduloId: 604,
        pregunta: "¿Qué modalidad de organización preventiva es obligatoria en empresas con más de 500 trabajadores?",
        opciones: [
          "Servicio de Prevención Ajeno.",
          "Servicio de Prevención Propio.",
          "Delegados de Prevención.",
          "Comité de Seguridad y Salud.",
        ],
        respuestaCorrecta: 1,
        explicacion: "En empresas con más de 500 trabajadores, la modalidad de organización preventiva obligatoria es el Servicio de Prevención Propio. Según el artículo 14 del Real Decreto 39/1997, por el que se aprueba el Reglamento de los Servicios de Prevención, el empresario deberá constituir un Servicio de Prevención Propio cuando concurran alguno de estos supuestos: que la empresa tenga más de 500 trabajadores; que, tratándose de empresas de entre 250 y 500 trabajadores, desarrollen actividades de especial peligrosidad incluidas en el Anexo I; o cuando así lo decida la Autoridad Laboral, previo informe de la Inspección de Trabajo. El Servicio de Prevención Propio es una unidad organizativa específica dentro de la empresa, cuyos integrantes se dedican exclusivamente a la actividad preventiva. Debe contar con las instalaciones y medios necesarios, así como con al menos dos de las especialidades preventivas (Seguridad, Higiene, Ergonomía y Psicosociología, Medicina del Trabajo) desarrolladas por expertos con dedicación exclusiva.",
      },
      {
        id: 60420,
        moduloId: 604,
        pregunta: "¿Qué equipo es obligatorio en empresas con más de 50 empleados?",
        opciones: [
          "Un servicio médico completo.",
          "Una brigada contra incendios.",
          "Un área de primeros auxilios.",
          "Un desfibrilador automático.",
        ],
        respuestaCorrecta: 2,
        explicacion: "En empresas con más de 50 empleados es obligatorio contar con un área de primeros auxilios. Según el Real Decreto 486/1997, por el que se establecen las disposiciones mínimas de seguridad y salud en los lugares de trabajo, en su Anexo VI sobre material y locales de primeros auxilios, establece que 'los lugares de trabajo de más de 50 trabajadores deberán disponer de un local destinado a los primeros auxilios y otras posibles atenciones sanitarias'. Este local debe disponer, como mínimo, de un botiquín, una camilla y una fuente de agua potable, estar próximo a los puestos de trabajo, ser de fácil acceso para camillas y estar claramente señalizado. No es obligatorio en todas las empresas de este tamaño disponer de un servicio médico completo, una brigada contra incendios o un desfibrilador automático, aunque en ciertos sectores o actividades específicas la normativa puede exigir medidas adicionales en función de los riesgos existentes."
      }
    ]
  }
  export default moduloUnidadTres;