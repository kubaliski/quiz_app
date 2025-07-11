/**
 * Datos del módulo Unidad Tres (Parte 1) perteneciente a la asignatura de ITP.
 * Incluye información del módulo y las primeras 10 preguntas asociadas para el quiz.
 *
 * @type {Object}
 * @property {number} id - Identificador único del módulo
 * @property {string} nombre - Nombre del módulo
 * @property {boolean} esExamen - Indica si el módulo es un examen
 * @property {number} asignaturaId - ID de la asignatura a la que pertenece
 * @property {string} descripcion - Breve descripción del contenido del módulo
 * @property {Array<Object>} preguntas - Lista de preguntas para el quiz de este módulo (preguntas 1-10)
 */
export const moduloRepasoUnidadTres = {
    id: 614,
    nombre: "Test Unidad 3 (Repaso)",
    esExamen: true,
    asignaturaId: 6,
    descripcion: "Organización de la prevención en la empresa: modalidades preventivas, formación, representación de los trabajadores, evaluación de riesgos, planes de emergencia y primeros auxilios.",
    preguntas: [
      {
        id: 61401,
        moduloId: 614,
        pregunta: "¿Cuántas horas de formación son necesarias para un nivel básico en empresas con actividades peligrosas?",
        opciones: [
          "600 horas",
          "50 horas",
          "30 horas",
          "100 horas"
        ],
        respuestaCorrecta: 1,
        explicacion: "Para el nivel básico en empresas con actividades peligrosas se requieren 50 horas de formación. Según el anexo IV del Reglamento de los Servicios de Prevención (Real Decreto 39/1997), la formación de nivel básico tiene una duración mínima de 30 horas para empresas de actividades no incluidas en el anexo I, y de 50 horas para empresas cuyas actividades están incluidas en el anexo I (actividades especialmente peligrosas). Las actividades consideradas especialmente peligrosas incluyen: construcción, industrias extractivas, trabajo con exposición a radiaciones ionizantes, trabajo con agentes cancerígenos, mutagénicos o tóxicos para la reproducción, actividades con productos químicos de alto riesgo, trabajos que impliquen la exposición a agentes biológicos de los grupos 3 ó 4, actividades de fabricación, manipulación y utilización de explosivos, trabajos realizados en recintos confinados, y actividades de inmersión bajo el agua. Esta formación de 50 horas capacita para realizar funciones de nivel básico en prevención, como promover comportamientos seguros y la correcta utilización de equipos de protección, informar sobre los riesgos en el trabajo y colaborar en la evaluación y control de riesgos."
      },
      {
        id: 61402,
        moduloId: 614,
        pregunta: "¿Quiénes eligen a los Delegados de Prevención?",
        opciones: [
          "El empresario",
          "Los trabajadores en general",
          "Los representantes del personal",
          "La Inspección de Trabajo"
        ],
        respuestaCorrecta: 2,
        explicacion: "Los Delegados de Prevención son elegidos por los representantes del personal. Según el artículo 35 de la Ley de Prevención de Riesgos Laborales, 'los Delegados de Prevención son los representantes de los trabajadores con funciones específicas en materia de prevención de riesgos en el trabajo' y 'serán designados por y entre los representantes del personal'. Esto significa que son elegidos por y entre los miembros del comité de empresa, delegados de personal u otros representantes unitarios de los trabajadores, según corresponda en función del tamaño de la empresa. No son elegidos directamente por todos los trabajadores (lo que sería una elección democrática directa), sino por sus representantes ya constituidos. Tampoco es el empresario quien los designa, ya que esto comprometería su independencia como representantes de los trabajadores en materia preventiva. La Inspección de Trabajo no interviene en su designación, aunque puede requerir información sobre quiénes son los delegados de prevención en sus visitas de inspección. Esta forma de designación garantiza que los delegados de prevención tengan legitimidad representativa y mantengan su independencia respecto al empresario."
      },
      {
        id: 61403,
        moduloId: 614,
        pregunta: "¿Qué tipo de formación necesita un empresario para asumir la prevención en empresas de menos de 10 trabajadores?",
        opciones: [
          "Formación jurídica",
          "Formación básica en prevención de 30 horas",
          "Formación de posgrado",
          "No necesita formación"
        ],
        respuestaCorrecta: 1,
        explicacion: "Un empresario para asumir la prevención en empresas de menos de 10 trabajadores necesita formación básica en prevención de 30 horas. Según el artículo 11.1 del Reglamento de los Servicios de Prevención (RD 39/1997), el empresario puede asumir personalmente la actividad preventiva en empresas de hasta 25 trabajadores (y menos de 10 si son del anexo I) cumpliendo varios requisitos, entre ellos 'poseer una formación correspondiente, como mínimo, a las funciones de nivel básico'. Esta formación básica, según el anexo IV del RSP, tiene una duración mínima de 30 horas para actividades no especialmente peligrosas. Además, debe desarrollar habitualmente su actividad profesional en el centro de trabajo y tener capacidad correspondiente a las funciones preventivas que va a desarrollar. No necesita formación jurídica específica, ni formación de posgrado (que sería exigible para niveles superiores), y definitivamente sí necesita formación (no es cierto que no la necesite). Esta posibilidad permite a pequeñas empresas contar con gestión preventiva sin recurrir necesariamente a servicios externos, manteniendo un nivel básico pero suficiente de competencia en prevención."
      },
      {
        id: 61404,
        moduloId: 614,
        pregunta: "¿Cuántos Delegados de Prevención corresponden a una empresa como máximo?",
        opciones: [
          "4",
          "5",
          "8",
          "7"
        ],
        respuestaCorrecta: 2,
        explicacion: "El número máximo de Delegados de Prevención que puede tener una empresa es 8. Según el artículo 35.2 de la LPRL, el número de Delegados de Prevención se establece según el número de trabajadores de la empresa: hasta 30 trabajadores, 1 delegado; de 31 a 49 trabajadores, 1 delegado; de 50 a 100 trabajadores, 2 delegados; de 101 a 500 trabajadores, 3 delegados; de 501 a 1000 trabajadores, 4 delegados; de 1001 a 2000 trabajadores, 5 delegados; de 2001 a 3000 trabajadores, 6 delegados; de 3001 a 4000 trabajadores, 7 delegados; y de 4001 trabajadores en adelante, 8 delegados. Por tanto, independientemente del tamaño que alcance la empresa, nunca tendrá más de 8 Delegados de Prevención. Este número máximo busca un equilibrio entre asegurar una representación adecuada de los trabajadores en materia preventiva y mantener un órgano operativo que pueda funcionar eficazmente. En empresas muy grandes, estos 8 delegados pueden representar a miles de trabajadores, por lo que se complementan con otras figuras como el Comité de Seguridad y Salud."
      },
      {
        id: 61405,
        moduloId: 614,
        pregunta: "¿Qué se considera un riesgo 'trivial'?",
        opciones: [
          "Riesgo que debe eliminarse urgentemente",
          "Riesgo que no requiere medidas adicionales",
          "Riesgo que causa baja médica inmediata",
          "Riesgo que afecta a toda la plantilla"
        ],
        respuestaCorrecta: 1,
        explicacion: "Un riesgo 'trivial' es aquel que no requiere medidas adicionales. Según las guías técnicas del Instituto Nacional de Seguridad e Higiene en el Trabajo (INSHT), en la metodología de evaluación de riesgos laborales se establece una jerarquía de niveles de riesgo. El riesgo trivial es el nivel más bajo en la escala de valoración, caracterizándose porque no se requiere acción específica más allá del mantenimiento de las medidas de control existentes. Este nivel se alcanza cuando la probabilidad de que ocurra un daño es muy baja y las consecuencias serían menores. No significa que el riesgo sea inexistente, sino que está en un nivel tan bajo que no justifica inversiones adicionales en medidas preventivas específicas, aunque sí se debe mantener la vigilancia para asegurar que no evolucione negativamente. No es un riesgo que deba eliminarse urgentemente (eso serían los intolerables), no causa baja médica inmediata, ni necesariamente afecta a toda la plantilla. La clasificación como trivial permite priorizar recursos y esfuerzos preventivos hacia riesgos más significativos."
      },
      {
        id: 61406,
        moduloId: 614,
        pregunta: "¿Cómo se clasifica una situación controlada por medios propios rápidamente?",
        opciones: [
          "Emergencia general",
          "Conato de emergencia",
          "Emergencia parcial",
          "Crisis industrial"
        ],
        respuestaCorrecta: 1,
        explicacion: "Una situación controlada por medios propios rápidamente se clasifica como conato de emergencia. Según las pautas para la elaboración de planes de autoprotección y emergencia, establecidas por la normativa de protección civil y la Norma Básica de Autoprotección (Real Decreto 393/2007), las emergencias se clasifican en función de su gravedad y alcance: Conato de emergencia es una situación que puede ser controlada y solucionada de forma sencilla y rápida por el personal y medios de protección del local, edificio o área. Emergencia parcial es aquella que para ser dominada requiere la actuación de equipos especiales de control de emergencias del sector, y puede afectar a sectores colindantes. Emergencia general es aquella que por su gravedad puede afectar al edificio o área y su entorno, y que requiere para ser dominada el concurso de todos los equipos y medios de protección propios y la ayuda de medios de socorro y salvamento exteriores. El término 'crisis industrial' no es una clasificación estándar en planes de emergencia. El conato se caracteriza por su limitada extensión, fácil control y resolución rápida con medios ordinarios disponibles en el área."
      },
      {
        id: 61407,
        moduloId: 614,
        pregunta: "¿Cuál es la primera medida ante un accidente, según el protocolo PAS?",
        opciones: [
          "Alertar",
          "Proteger",
          "Socorrer",
          "Transportar"
        ],
        respuestaCorrecta: 1,
        explicacion: "La primera medida ante un accidente según el protocolo PAS es Proteger. El protocolo PAS es una secuencia de actuación fundamental en primeros auxilios que significa: P-Proteger, A-Alertar (o Avisar), S-Socorrer. La secuencia es estricta y debe seguirse en este orden: 1) PROTEGER: Antes de actuar, hay que asegurar que tanto el accidentado como el socorrista están fuera de peligro. Esto implica evaluar la zona del accidente, eliminar o evitar riesgos adicionales (fuego, tráfico, cables eléctricos, estructuras inestables, etc.), y proteger al herido de nuevos daños. 2) ALERTAR/AVISAR: Una vez asegurada la zona, se debe dar aviso a los servicios de emergencia (112) proporcionando información clara sobre localización, tipo de accidente, número de víctimas y estado aparente. 3) SOCORRER: Solo después de proteger y alertar se procede a administrar primeros auxilios según los conocimientos y medios disponibles. 'Transportar' no forma parte del protocolo PAS básico, y cuando es necesario, debe realizarse solo por personal cualificado con los medios adecuados, salvo situaciones de peligro inminente donde sea imprescindible el traslado inmediato."
      },
      {
        id: 61408,
        moduloId: 614,
        pregunta: "¿Qué maniobra se aplica en caso de atragantamiento grave?",
        opciones: [
          "Maniobra de Heimlich",
          "Maniobra de Valsalva",
          "Técnica de Rautek",
          "Maniobra de Kravitz"
        ],
        respuestaCorrecta: 0,
        explicacion: "En caso de atragantamiento grave se aplica la maniobra de Heimlich. Esta técnica, desarrollada por el doctor Henry Heimlich en 1974, es el procedimiento estándar para desbloquear las vías respiratorias cuando existe obstrucción completa por un cuerpo extraño. Consiste en realizar compresiones abdominales súbitas hacia arriba y adentro, colocándose detrás de la víctima, posicionando las manos por debajo del esternón y por encima del ombligo, y ejerciendo presión firme y rápida. Esta presión crea un aumento súbito de la presión intratorácica que puede expulsar el objeto obstructor. Se considera atragantamiento grave cuando la persona no puede hablar, toser eficazmente, respirar o emite sonidos agudos al intentar respirar. Las otras técnicas mencionadas tienen aplicaciones diferentes: la maniobra de Valsalva se usa para probar la función cardíaca y compensar presión en los oídos; la técnica de Rautek es un método de extracción de víctimas de vehículos; y la 'maniobra de Kravitz' no es una técnica reconocida en primeros auxilios. En lactantes se modifica la técnica usando golpes en la espalda y compresiones en el pecho."
      },
      {
        id: 61409,
        moduloId: 614,
        pregunta: "¿Qué se debe hacer ante una hemorragia venosa?",
        opciones: [
          "Aplicar calor",
          "Aplicar presión directa y elevar la zona afectada",
          "Dejar que sangre",
          "Aplicar hielo directamente en la herida"
        ],
        respuestaCorrecta: 1,
        explicacion: "Ante una hemorragia venosa se debe aplicar presión directa y elevar la zona afectada. Las hemorragias venosas se caracterizan por un sangrado continuo de color rojo oscuro que fluye de manera constante pero sin la fuerza pulsátil de las arteriales. El tratamiento incluye: 1) Presión directa: aplicar presión firme directamente sobre la herida con gasas estériles o paño limpio para comprimir los vasos sanguíneos y facilitar la coagulación. 2) Elevación: si es posible y no hay fractura, elevar la zona afectada por encima del nivel del corazón para reducir la presión venosa y disminuir el flujo sanguíneo. 3) Mantener la presión de forma continuada hasta que se detenga el sangrado o llegue ayuda médica. No se debe aplicar calor (empeora el sangrado y puede provocar vasodilatación), ni dejar que sangre libremente (puede llevar a shock hipovolémico), ni aplicar hielo directamente en la herida (puede causar lesiones por frío y vasoconstricción excesiva). Si la presión directa no es suficiente, se puede aplicar presión en puntos de compresión arterial específicos, pero nunca como primera medida en hemorragias venosas."
      },
      {
        id: 61410,
        moduloId: 614,
        pregunta: "¿Qué clasificación tiene una quemadura que afecta todas las capas de la piel y tejido muscular?",
        opciones: [
          "Primer grado",
          "Segundo grado",
          "Tercer grado",
          "Cuarto grado"
        ],
        respuestaCorrecta: 3,
        explicacion: "Una quemadura que afecta todas las capas de la piel y tejido muscular tiene clasificación de cuarto grado. La clasificación de quemaduras según su profundidad es: Primer grado: afecta solo la epidermis (capa superficial de la piel), causando enrojecimiento, dolor y edema leve. Segundo grado: afecta epidermis y dermis, subdividiéndose en superficial (con ampollas y dolor intenso) y profunda (con menor dolor pero mayor daño). Tercer grado: destruye todas las capas de la piel (epidermis, dermis y tejido subcutáneo), presentando aspecto acartonado, blanco o carbonizado, sin dolor por destrucción de terminaciones nerviosas. Cuarto grado: la lesión se extiende más allá de la piel afectando músculos, tendones, ligamentos, huesos u órganos internos. Estas quemaduras son las más graves y requieren tratamiento especializado inmediato, cirugía reconstructiva y pueden amenazar la vida. Se caracterizan por aspecto carbonizado o de coagulación, ausencia total de dolor en la zona quemada, y pueden comprometer funciones vitales si afectan órganos importantes. Requieren derivación inmediata a unidades especializadas de quemados."
      },
       {
        id: 61411,
        moduloId: 614,
        pregunta: "¿Qué formación requiere el nivel superior en Prevención de Riesgos Laborales?",
        opciones: [
          "Curso de 30 horas",
          "Ciclo formativo de grado medio",
          "Mínimo 600 horas acreditadas por una universidad",
          "Ninguna formación específica"
        ],
        respuestaCorrecta: 2,
        explicacion: "El nivel superior en Prevención de Riesgos Laborales requiere mínimo 600 horas acreditadas por una universidad. Según el anexo VI del Reglamento de los Servicios de Prevención (Real Decreto 39/1997), las funciones de nivel superior pueden ser ejercidas por quienes posean una titulación universitaria y acrediten la formación específica en una o varias especialidades preventivas. Esta formación específica debe tener un mínimo de 600 horas y ser impartida por universidades, escuelas técnicas superiores u otras instituciones aprobadas por las Administraciones Públicas. El programa formativo incluye contenidos de nivel superior en las especialidades de Seguridad en el Trabajo, Higiene Industrial, Ergonomía y Psicosociología Aplicada, y Medicina del Trabajo (esta última solo para profesionales sanitarios). También pueden ejercer estas funciones quienes posean titulaciones específicas (Ingeniero Industrial, Ingeniero de Minas, etc.) con formación complementaria adecuada. Un curso de 30 horas corresponde al nivel básico, un ciclo formativo de grado medio al nivel intermedio, y definitivamente sí requiere formación específica muy cualificada. El nivel superior capacita para realizar evaluaciones de riesgos complejas, diseñar y aplicar planes de prevención, y dirigir servicios de prevención."
      },
      {
        id: 61412,
        moduloId: 614,
        pregunta: "¿Cada cuánto debe reunirse como mínimo el Comité de Seguridad y Salud?",
        opciones: [
          "Cada mes",
          "Cada tres meses",
          "Cada seis meses",
          "Una vez al año"
        ],
        respuestaCorrecta: 1,
        explicacion: "El Comité de Seguridad y Salud debe reunirse como mínimo cada tres meses. Según el artículo 38.3 de la Ley de Prevención de Riesgos Laborales, 'el Comité de Seguridad y Salud se reunirá trimestralmente y siempre que lo solicite alguna de las representaciones en él presentes'. Esta periodicidad trimestral garantiza un seguimiento regular de las cuestiones de seguridad y salud en el trabajo, permitiendo abordar de manera oportuna los problemas que puedan surgir y hacer un seguimiento efectivo de las medidas preventivas adoptadas. Adicionalmente, el Comité podrá reunirse con carácter extraordinario cuando ocurra algún accidente grave, cuando lo soliciten las representaciones presentes, o cuando las circunstancias lo aconsejen. El funcionamiento del Comité debe establecerse en el reglamento interno que elabore el propio Comité. Esta frecuencia mínima trimestral busca mantener un diálogo social activo en materia preventiva, aunque en la práctica muchas empresas optan por reuniones más frecuentes según sus necesidades específicas y la complejidad de sus riesgos laborales."
      },
      {
        id: 61413,
        moduloId: 614,
        pregunta: "¿Qué modalidad de organización preventiva pueden adoptar varias empresas juntas?",
        opciones: [
          "Servicio de prevención ajeno",
          "Servicio de prevención propio",
          "Servicio de prevención mancomunado",
          "Delegación de prevención externa"
        ],
        respuestaCorrecta: 2,
        explicacion: "La modalidad de organización preventiva que pueden adoptar varias empresas juntas es el servicio de prevención mancomunado. Según el artículo 21 del Reglamento de los Servicios de Prevención (Real Decreto 39/1997), 'podrán constituirse servicios de prevención mancomunados entre empresas que desarrollen simultáneamente actividades en un mismo centro de trabajo, edificio o centro comercial, siempre que quede garantizada la operatividad y eficacia del servicio'. También puede constituirse entre empresas pertenecientes al mismo sector productivo o grupo empresarial, o que desarrollen sus actividades en polígonos industriales o áreas geográficas limitadas. Los requisitos incluyen: contar con al menos dos especialidades preventivas, disponer de recursos técnicos y humanos suficientes, tener capacidad de actuación para cubrir el conjunto de actividades preventivas de todas las empresas participantes, y designar una empresa responsable del servicio. Esta modalidad permite a empresas pequeñas o medianas compartir recursos especializados en prevención, reducir costes y mejorar la eficacia de la gestión preventiva, especialmente útil cuando individualmente no justificarían un servicio propio o cuando comparten riesgos similares por proximidad geográfica o actividad."
      },
      {
        id: 61414,
        moduloId: 614,
        pregunta: "¿Qué procedimiento se sigue si un trabajador presenta hemorragia nasal?",
        opciones: [
          "Acostarlo",
          "Inclinar la cabeza hacia atrás",
          "Inclinar la cabeza hacia adelante y presionar las fosas nasales",
          "Aplicar calor en la nariz"
        ],
        respuestaCorrecta: 2,
        explicacion: "Ante una hemorragia nasal se debe inclinar la cabeza hacia adelante y presionar las fosas nasales. El procedimiento correcto para epistaxis (hemorragia nasal) incluye: 1) Sentar al paciente e inclinar la cabeza ligeramente hacia adelante para evitar que la sangre fluya hacia la garganta, lo que podría causar náuseas o aspiración. 2) Presionar las fosas nasales con los dedos (compresión de las alas nasales contra el tabique) durante 10-15 minutos continuos. 3) Respirar por la boca durante este tiempo. 4) Aplicar frío local en el puente nasal (no calor). 5) Después de este tiempo, soltar gradualmente la presión para comprobar si ha cesado el sangrado. NO se debe inclinar la cabeza hacia atrás porque facilita que la sangre fluya hacia la garganta y pueda ser deglutida o aspirada, provocando náuseas, vómitos o problemas respiratorios. Tampoco se debe acostar al paciente por la misma razón. El calor está contraindicado porque produce vasodilatación y empeora el sangrado. Si la hemorragia no se controla tras dos intentos de 15 minutos cada uno, o si es muy abundante, se debe buscar atención médica urgente."
      },
      {
        id: 61415,
        moduloId: 614,
        pregunta: "¿Qué indica una tarjeta roja en el triaje de emergencias?",
        opciones: [
          "Herido leve",
          "Atención inmediata",
          "No necesita atención",
          "Esperar turno"
        ],
        respuestaCorrecta: 1,
        explicacion: "Una tarjeta roja en el triaje de emergencias indica atención inmediata. El triaje es un sistema de clasificación de víctimas en situaciones de emergencia con múltiples heridos que permite priorizar la atención médica según la gravedad y pronóstico de supervivencia. El sistema de colores estándar es: ROJO (Prioridad 1): Víctimas con lesiones que requieren atención médica inmediata. Son casos graves pero con posibilidades de supervivencia si reciben tratamiento urgente (shock, hemorragias graves, obstrucción respiratoria, etc.). AMARILLO (Prioridad 2): Víctimas con lesiones importantes pero que pueden esperar un tiempo limitado sin comprometer su vida (fracturas complejas, quemaduras moderadas). VERDE (Prioridad 3): Víctimas con lesiones menores que pueden esperar o incluso cuidarse por sí mismas (heridas superficiales, contusiones leves). NEGRO (Prioridad 4): Víctimas fallecidas o con lesiones incompatibles con la vida. El objetivo del triaje es maximizar el número de supervivientes asignando recursos limitados de manera más eficiente, dando prioridad absoluta a quienes más se pueden beneficiar de atención inmediata."
      },
      {
        id: 61416,
        moduloId: 614,
        pregunta: "¿Cuál es la frecuencia adecuada de compresiones en RCP?",
        opciones: [
          "80-100 por minuto",
          "100-120 por minuto",
          "60-80 por minuto",
          "120-150 por minuto"
        ],
        respuestaCorrecta: 1,
        explicacion: "La frecuencia adecuada de compresiones en RCP es de 100-120 por minuto. Según las guías de reanimación cardiopulmonar del European Resuscitation Council (ERC) 2021 y la American Heart Association (AHA), las compresiones torácicas deben realizarse a una frecuencia de al menos 100 compresiones por minuto, pero no más de 120 compresiones por minuto. Esta frecuencia optimiza el flujo sanguíneo durante la RCP sin comprometer la calidad de las compresiones. Las compresiones deben ser: - Profundas (al menos 5 cm en adultos, pero no más de 6 cm), - Rápidas (100-120/minuto), - Con retroceso completo del tórax entre compresiones, - Con interrupciones mínimas, - Permitiendo relajación completa entre compresiones. Una frecuencia menor (60-100) no genera suficiente flujo sanguíneo, mientras que una frecuencia superior (120-150) puede ser difícil de mantener, causar fatiga del reanimador y no permitir un llenado ventricular adecuado. La relación compresiones-ventilaciones recomendada es 30:2 en adultos. Es crucial mantener esta frecuencia de manera constante para maximizar las posibilidades de recuperación espontánea de la circulación."
      },
      {
        id: 61417,
        moduloId: 614,
        pregunta: "¿Qué nivel de riesgo requiere tomar medidas específicas en un plazo razonable?",
        opciones: [
          "Trivial",
          "Moderado",
          "Tolerable",
          "Intolerable"
        ],
        respuestaCorrecta: 1,
        explicacion: "El nivel de riesgo moderado requiere tomar medidas específicas en un plazo razonable. Según las metodologías de evaluación de riesgos laborales desarrolladas por el INSHT (actualmente INSST), la escala de valoración del riesgo incluye: TRIVIAL: No se requiere acción específica. TOLERABLE: No se necesita mejorar la acción preventiva, pero se deben considerar soluciones más rentables o de fácil aplicación. MODERADO: Se deben hacer esfuerzos para reducir el riesgo, determinando las inversiones precisas. Las medidas para reducir el riesgo deben implantarse en un período determinado y razonable. IMPORTANTE: No debe comenzarse el trabajo hasta que se haya reducido el riesgo. Puede que se precisen recursos considerables. INTOLERABLE: No debe comenzar ni continuar el trabajo hasta que se reduzca el riesgo. Esta clasificación permite establecer prioridades de actuación y asignar recursos de manera eficiente. El nivel moderado implica que aunque no es urgente como el importante o intolerable, sí requiere planificación y actuación en un plazo razonable para evitar que evolucione hacia niveles más graves de riesgo."
      },
      {
        id: 61418,
        moduloId: 614,
        pregunta: "¿Cuál es la prioridad de ejecución para un riesgo catalogado como 'intolerable'?",
        opciones: [
          "Alta prioridad en unos meses",
          "Baja prioridad a largo plazo",
          "Medidas inmediatas y detener el trabajo",
          "Evaluación anual del riesgo"
        ],
        respuestaCorrecta: 2,
        explicacion: "Para un riesgo catalogado como 'intolerable', la prioridad de ejecución es tomar medidas inmediatas y detener el trabajo. Según las guías de evaluación de riesgos del Instituto Nacional de Seguridad y Salud en el Trabajo (INSST), un riesgo intolerable se define como aquel donde 'no debe comenzar ni continuar el trabajo hasta que se reduzca el riesgo. Si no es posible reducir el riesgo, incluso con recursos ilimitados, debe prohibirse el trabajo'. Las características del riesgo intolerable son: - Acción requerida: Inmediata, - No puede esperarse ni posponerse, - El trabajo debe detenerse de forma inmediata, - Se requieren medidas correctoras urgentes, - Solo se puede reanudar el trabajo cuando el riesgo se haya reducido. Este nivel de riesgo representa situaciones donde existe una alta probabilidad de que ocurra un accidente grave o muy grave, por lo que no se puede tolerar ninguna demora en la implementación de medidas correctoras. No es aceptable una 'alta prioridad en unos meses' porque el tiempo de exposición al riesgo podría resultar en consecuencias graves o fatales. La evaluación anual es insuficiente para un riesgo de esta categoría, que requiere seguimiento continuo hasta su eliminación o reducción a niveles aceptables."
      },
      {
        id: 61419,
        moduloId: 614,
        pregunta: "Si un riesgo se valora como 'importante', ¿qué debe hacerse?",
        opciones: [
          "Documentarlo sin actuar",
          "Tomar medidas de inmediato sin demoras",
          "Revisarlo dentro de seis meses",
          "Aplicar únicamente mejoras de bajo coste"
        ],
        respuestaCorrecta: 1,
        explicacion: "Si un riesgo se valora como 'importante', se deben tomar medidas de inmediato sin demoras. Según la metodología de evaluación de riesgos del INSST, un riesgo importante se caracteriza porque 'no debe comenzarse el trabajo hasta que se haya reducido el riesgo. Puede que se precisen recursos considerables para controlar el riesgo. Cuando el riesgo corresponda a un trabajo que se está realizando, debe remediarse el problema en un tiempo inferior al de los riesgos moderados'. Las características del nivel de riesgo importante son: - Requiere acción inmediata antes de comenzar o continuar el trabajo, - Puede requerir recursos considerables, - El tiempo para implementar medidas debe ser inferior al de riesgos moderados, - No se debe postergar la adopción de medidas. No es suficiente con documentarlo sin actuar, ya que esto mantendría a los trabajadores expuestos a un riesgo significativo. Tampoco es aceptable revisarlo en seis meses, pues requiere acción inmediata. Las mejoras de bajo coste pueden ser insuficientes, ya que este nivel puede requerir inversiones considerables para reducir el riesgo a niveles aceptables. La prioridad es proteger a los trabajadores mediante medidas eficaces, independientemente de su coste."
      },
      {
        id: 61420,
        moduloId: 614,
        pregunta: "¿Qué combinación de factores puede llevar a calificar un riesgo como 'intolerable'?",
        opciones: [
          "Alta probabilidad y severidad leve",
          "Baja probabilidad y severidad grave",
          "Alta probabilidad y severidad extremadamente dañina",
          "Media probabilidad y severidad ligera"
        ],
        respuestaCorrecta: 2,
        explicacion: "La combinación de alta probabilidad y severidad extremadamente dañina puede llevar a calificar un riesgo como 'intolerable'. Según las metodologías de evaluación de riesgos, el nivel de riesgo se determina combinando la probabilidad de que ocurra un evento peligroso con la severidad de las consecuencias potenciales. La matriz de riesgo típica considera: PROBABILIDAD: Baja, Media, Alta. SEVERIDAD/CONSECUENCIAS: Ligeramente dañina, Dañina, Extremadamente dañina. La combinación de alta probabilidad con severidad extremadamente dañina resulta en el nivel más alto de la matriz de riesgo, catalogándose como intolerable. Este escenario implica que es muy probable que ocurra un evento con consecuencias muy graves (muerte, lesiones permanentes, enfermedades profesionales graves). Las otras combinaciones resultarían en: alta probabilidad + severidad leve = riesgo tolerable o moderado; baja probabilidad + severidad grave = riesgo tolerable o moderado; media probabilidad + severidad ligera = riesgo trivial o tolerable. El objetivo de la evaluación es identificar estas combinaciones críticas para priorizar las intervenciones preventivas y eliminar o reducir los riesgos antes de que se materialicen en daños para los trabajadores."
      }
    ]
  };

  export default moduloRepasoUnidadTres;