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
export const moduloRepasoUnidadCuatro = {
    id: 615,
    nombre: "Test Unidad 4 (Repaso)",
    esExamen: true,
    asignaturaId: 6,
    descripcion: "Introducción al Derecho del Trabajo: principios fundamentales, fuentes del derecho laboral, relaciones laborales especiales, jurisdicción social y marco normativo español.",
    preguntas: [
      {
        id: 15001,
        moduloId: 615,
        pregunta: "¿Dónde surgió el Derecho del Trabajo como necesidad de regular las condiciones laborales?",
        opciones: [
          "En la Antigua Roma",
          "En la Revolución Industrial",
          "En la Edad Media",
          "En la Revolución Francesa"
        ],
        respuestaCorrecta: 1,
        explicacion: "El Derecho del Trabajo surgió como necesidad durante la Revolución Industrial. Este proceso histórico, iniciado en Inglaterra a finales del siglo XVIII y extendido durante el siglo XIX, transformó radicalmente las relaciones de producción al introducir la mecanización y la producción en masa. La concentración de trabajadores en fábricas, las jornadas laborales extenuantes (hasta 16 horas diarias), la explotación del trabajo infantil, las condiciones insalubres y la ausencia de protección social generaron la necesidad de regulación jurídica específica. Aunque en la Antigua Roma existían formas de trabajo dependiente, estas se regían por el derecho civil y no constituían relaciones laborales en el sentido moderno. En la Edad Media predominaban las relaciones feudales y gremiales, tampoco asimilables al trabajo asalariado actual. La Revolución Francesa, aunque estableció principios de libertad e igualdad, inicialmente aplicó un liberalismo económico extremo que prohibía las asociaciones obreras. El Derecho del Trabajo nació precisamente como respuesta a la 'cuestión social' generada por la industrialización, buscando equilibrar las relaciones entre capital y trabajo mediante la intervención del Estado."
      },
      {
        id: 15002,
        moduloId: 615,
        pregunta: "¿Cuál es uno de los elementos esenciales de la relación laboral?",
        opciones: [
          "Voluntariedad",
          "Gratuidad",
          "Continuidad",
          "Independencia"
        ],
        respuestaCorrecta: 0,
        explicacion: "La voluntariedad es uno de los elementos esenciales de la relación laboral. Según el artículo 1.1 del Estatuto de los Trabajadores, la relación laboral se caracteriza por ser voluntaria, por cuenta ajena, dependiente y retribuida. La voluntariedad significa que tanto el trabajador como el empresario deben manifestar libremente su consentimiento para establecer la relación contractual, sin que medie coacción, engaño o vicio que altere la validez del consentimiento. Este elemento distingue el trabajo libre del trabajo forzoso o en condiciones de esclavitud, prohibidos por nuestra Constitución y por los convenios internacionales. La gratuidad no es un elemento esencial, sino todo lo contrario: la retribución es obligatoria en toda relación laboral. La continuidad tampoco es esencial, pues existen contratos temporales válidos. La independencia es incompatible con la relación laboral, ya que uno de sus elementos característicos es precisamente la dependencia del trabajador respecto al empresario, quien ostenta las facultades de dirección, organización y control de la prestación laboral. Sin voluntariedad no puede existir contrato de trabajo válido."
      },
      {
        id: 15003,
        moduloId: 615,
        pregunta: "¿Qué principio establece que la norma más beneficiosa para el trabajador debe aplicarse en caso de conflicto?",
        opciones: [
          "Principio de norma mínima",
          "Principio de norma más favorable",
          "Principio de in dubio pro operario",
          "Principio de condición más beneficiosa"
        ],
        respuestaCorrecta: 1,
        explicacion: "El principio de norma más favorable establece que la norma más beneficiosa para el trabajador debe aplicarse en caso de conflicto entre diferentes fuentes del derecho laboral. Este principio, reconocido en el artículo 3.3 del Estatuto de los Trabajadores, determina que en caso de concurrencia entre normas laborales (ley, convenio colectivo, contrato individual), se aplicará la que sea más favorable para el trabajador considerada globalmente. Es diferente del principio 'in dubio pro operario', que se refiere a la interpretación de normas ambiguas (ante la duda interpretativa, se opta por el sentido más favorable al trabajador), y del principio de condición más beneficiosa, que protege las condiciones individuales más favorables ya adquiridas por el trabajador frente a normas posteriores menos favorables. El principio de norma mínima no existe como tal; las normas laborales establecen mínimos que pueden ser mejorados. La norma más favorable tutela el carácter tuitivo del Derecho del Trabajo, asegurando que la aplicación del ordenamiento jurídico redunde siempre en el mayor beneficio posible para la parte más débil de la relación laboral: el trabajador."
      },
      {
        id: 15004,
        moduloId: 615,
        pregunta: "¿Qué tipo de relación laboral es la de un deportista profesional?",
        opciones: [
          "Ordinaria",
          "Especial",
          "No laboral",
          "Funcionario"
        ],
        respuestaCorrecta: 1,
        explicacion: "La relación laboral de un deportista profesional es de tipo especial. El artículo 2 del Estatuto de los Trabajadores establece que se consideran relaciones laborales de carácter especial aquellas que, por sus peculiaridades, requieren una regulación específica. Entre estas relaciones especiales, el apartado d) incluye expresamente 'la del deportista profesional'. Esta especialidad está desarrollada en el Real Decreto 1006/1985, que regula la relación laboral especial de los deportistas profesionales. Las características específicas incluyen: duración determinada coincidente con la temporada deportiva o periodo de participación en competiciones, sujeción a las normas federativas correspondientes, posibilidad de traslados y préstamos entre clubes, régimen disciplinario específico, y adaptación de la jornada laboral a las peculiaridades del entrenamiento y competición. No es una relación ordinaria porque requiere regulación específica diferente al régimen general del ET. Tampoco es no laboral, pues cumple todos los elementos esenciales (voluntariedad, dependencia, ajenidad, retribución). Y obviamente no es funcionarial, pues los deportistas profesionales trabajan para entidades privadas (clubes, sociedades deportivas), no para la Administración Pública."
      },
      {
        id: 15005,
        moduloId: 615,
        pregunta: "¿Qué principio impide que los trabajadores renuncien a sus derechos básicos?",
        opciones: [
          "Principio de irrenunciabilidad de derechos",
          "Principio de condición más beneficiosa",
          "Principio de flexibilidad laboral",
          "Principio de eficacia directa"
        ],
        respuestaCorrecta: 0,
        explicacion: "El principio de irrenunciabilidad de derechos impide que los trabajadores renuncien a sus derechos básicos. Este principio, consagrado en el artículo 3.5 del Estatuto de los Trabajadores, establece que 'los trabajadores no podrán disponer válidamente, antes o después de su adquisición, de los derechos que tengan reconocidos por las disposiciones legales de derecho necesario. Tampoco podrán disponer válidamente de los derechos reconocidos como indisponibles por convenio colectivo'. El fundamento de este principio radica en el carácter tuitivo del Derecho del Trabajo y en la posición de inferioridad del trabajador en la relación laboral, que podría verse compelido a renunciar a derechos básicos por necesidad económica o presión empresarial. Los derechos irrenunciables incluyen salario mínimo, jornada máxima, vacaciones, protección en materia de seguridad y salud, indemnizaciones legales, etc. Es diferente del principio de condición más beneficiosa (protege situaciones individuales favorables), del principio de flexibilidad laboral (no existe como principio jurídico básico) y del principio de eficacia directa (se refiere a la aplicabilidad inmediata de las normas). La irrenunciabilidad garantiza la efectividad real de los derechos laborales."
      },
      {
        id: 15006,
        moduloId: 615,
        pregunta: "¿Ante qué institución se debe intentar plantear las disputas laborales en primer lugar?",
        opciones: [
          "Tribunal Supremo",
          "Juzgados de lo Social",
          "Inspección de Trabajo",
          "SMAC (Servicio de Mediación, Arbitraje y Conciliación)"
        ],
        respuestaCorrecta: 3,
        explicacion: "Las disputas laborales deben intentar plantearse en primer lugar ante el SMAC (Servicio de Mediación, Arbitraje y Conciliación). El artículo 63 de la Ley Reguladora de la Jurisdicción Social establece que, con carácter previo a la interposición de demanda ante los órganos jurisdiccionales, será obligatorio el intento de conciliación o mediación ante el servicio administrativo correspondiente. Los SMAC son servicios de las Comunidades Autónomas encargados de intentar la resolución extrajudicial de conflictos laborales mediante conciliación (donde las partes buscan un acuerdo con ayuda del conciliador), mediación (intervención más activa del mediador proponiendo soluciones) o arbitraje (cuando las partes se someten a la decisión vinculante de un árbitro). Solo tras haber intentado esta vía extrajudicial, certificando bien el acuerdo alcanzado o bien la falta de avenencia, se puede acudir a los Juzgados de lo Social. El Tribunal Supremo es la instancia casacional máxima, no la primera instancia. La Inspección de Trabajo tiene funciones de vigilancia y sanción, no de resolución de conflictos. Esta exigencia pretende descongestionar los tribunales y fomentar soluciones consensuadas más rápidas y económicas."
      },
      {
        id: 15007,
        moduloId: 615,
        pregunta: "¿Qué derecho garantiza el teletrabajo según la Ley 10/2021?",
        opciones: [
          "Derecho a cambio automático de categoría profesional",
          "Derecho a desconexión digital",
          "Derecho a teletrabajar siempre que se quiera",
          "Derecho a trabajar menos horas sin reducción salarial"
        ],
        respuestaCorrecta: 1,
        explicacion: "Según la Ley 10/2021, el teletrabajo garantiza, entre otros derechos, el derecho a desconexión digital. El artículo 18 de esta ley establece que 'las personas que trabajen a distancia tendrán derecho a la desconexión digital fuera de su horario de trabajo de acuerdo con lo establecido en la legislación vigente en la materia', refiriéndose al artículo 88 de la Ley Orgánica 3/2018 (LOPDGDD). Este derecho permite a los trabajadores no responder comunicaciones y requerimientos fuera de su horario laboral, evitando la hiperconectividad que puede generar estrés y afectar el equilibrio vida-trabajo. La ley NO garantiza derecho a cambio automático de categoría (solo desarrolla modalidades de trabajo), ni derecho a teletrabajar siempre que se quiera (requiere acuerdo bilateral y actividades compatibles), ni derecho a trabajar menos horas sin reducción salarial (la jornada y retribución se mantienen). Otros derechos regulados incluyen: equilibrio entre vida laboral y personal, formación y promoción profesional en igualdad de condiciones, dotación de medios y equipos, protección de datos, prevención de riesgos laborales adaptada al entorno domiciliario, y reversibilidad de la modalidad de teletrabajo bajo ciertas condiciones."
      },
      {
        id: 15008,
        moduloId: 615,
        pregunta: "¿Qué es el principio de 'In dubio pro operario'?",
        opciones: [
          "El empleador puede interpretar las normas en su favor",
          "Ante la duda, se interpreta la norma a favor del trabajador",
          "Ante la duda, el trabajador decide qué norma le resulta más beneficiosa",
          "El tribunal decide libremente sin criterios"
        ],
        respuestaCorrecta: 1,
        explicacion: "El principio 'In dubio pro operario' significa que ante la duda, se interpreta la norma a favor del trabajador. Este principio hermenéutico, aunque no está expresamente recogido en el Estatuto de los Trabajadores, es ampliamente aceptado por la doctrina y jurisprudencia como manifestación del carácter tuitivo del Derecho del Trabajo. Se aplica cuando existe ambigüedad o incertidumbre en la interpretación de una norma laboral, de modo que ante varias interpretaciones posibles, debe elegirse aquella que resulte más favorable para el trabajador. El Tribunal Supremo ha precisado que este principio solo opera cuando existe 'verdadera duda' interpretativa, no para forzar significados que la norma no contenga. Es diferente del principio de norma más favorable (que elige entre normas concurrentes) y del principio de condición más beneficiosa (que protege derechos adquiridos). No significa que el trabajador pueda elegir arbitrariamente la interpretación, ni que el empleador pueda interpretar en su favor, ni que el tribunal decida sin criterios. Refleja el reconocimiento de la posición de debilidad del trabajador en la relación laboral y la función compensadora del ordenamiento jurídico laboral."
      },
      {
        id: 15009,
        moduloId: 615,
        pregunta: "¿Cuál es el nivel máximo dentro de los tribunales ordinarios laborales en España?",
        opciones: [
          "Tribunal Superior de Justicia",
          "Tribunal Constitucional",
          "Audiencia Nacional",
          "Tribunal Supremo"
        ],
        respuestaCorrecta: 3,
        explicacion: "El nivel máximo dentro de los tribunales ordinarios laborales en España es el Tribunal Supremo. La estructura jurisdiccional del orden social, según la Ley Reguladora de la Jurisdicción Social, se organiza en: 1) Juzgados de lo Social (primera instancia), 2) Salas de lo Social de los Tribunales Superiores de Justicia (segunda instancia y primera instancia en determinados asuntos), 3) Sala de lo Social de la Audiencia Nacional (primera instancia en conflictos colectivos con ámbito superior a una Comunidad Autónoma), y 4) Sala Cuarta (de lo Social) del Tribunal Supremo (casación ordinaria y para unificación de doctrina). El Tribunal Supremo es el órgano jurisdiccional superior en todos los órdenes jurisdiccionales y tiene competencia casacional, conociendo recursos de casación para unificación de doctrina, recursos de casación ordinaria (en determinados asuntos) y recursos de suplicación en algunos casos específicos. El Tribunal Constitucional, aunque superior jerárquicamente, no pertenece al poder judicial ordinario sino que es el máximo intérprete de la Constitución. Los Tribunales Superiores de Justicia y la Audiencia Nacional son niveles intermedios, pero no el máximo en el orden social."
      },
      {
        id: 15010,
        moduloId: 615,
        pregunta: "¿Cuál de las siguientes condiciones no es necesaria para que exista una relación laboral?",
        opciones: [
          "Voluntariedad",
          "Dependencia",
          "Ajenidad",
          "Universalidad"
        ],
        respuestaCorrecta: 3,
        explicacion: "La universalidad no es necesaria para que exista una relación laboral. Los elementos esenciales de la relación laboral, según el artículo 1.1 del Estatuto de los Trabajadores, son: voluntariedad (libre consentimiento de las partes), dependencia (subordinación del trabajador a las facultades de dirección y organización del empresario), ajenidad (el trabajador presta servicios por cuenta de otro, sin asumir riesgos empresariales), y retribución (carácter oneroso del trabajo). La universalidad no constituye un elemento esencial de la relación laboral individual. Este concepto podría confundirse con la 'universalidad' en el sentido de aplicación general de las normas laborales, pero esa es una característica del ordenamiento jurídico laboral, no de la relación laboral individual. Cada relación laboral es específica entre un trabajador y un empresario concretos, con condiciones particulares determinadas por el contrato, sin que sea necesario que tenga carácter universal. Los cuatro elementos mencionados (voluntariedad, dependencia, ajenidad y retribución) deben concurrir simultáneamente para que exista verdadera relación laboral y no otra forma de prestación de servicios (autónoma, civil, mercantil, funcionarial, etc.)."
      },
      {
        id: 15011,
        moduloId: 615,
        pregunta: "¿Qué principio asegura que los beneficios adquiridos por un trabajador no puedan ser eliminados por normas posteriores menos favorables?",
        opciones: [
          "Norma mínima",
          "In dubio pro operario",
          "Condición más beneficiosa",
          "Igualdad de oportunidades"
        ],
        respuestaCorrecta: 2,
        explicacion: "El principio de condición más beneficiosa asegura que los beneficios adquiridos por un trabajador no puedan ser eliminados por normas posteriores menos favorables. Este principio, desarrollado jurisprudencialmente y reconocido en el artículo 3.1.c) del Estatuto de los Trabajadores, protege las condiciones individuales más favorables que el trabajador tenga reconocidas en su contrato o que haya adquirido por cualquier título, impidiendo que normas posteriores (leyes, convenios colectivos, etc.) puedan empeorarlas. Para su aplicación se exigen varios requisitos: que las condiciones sean más beneficiosas que las establecidas en la norma posterior, que estén claramente determinadas y reconocidas (no meras expectativas), y que se hayan incorporado efectivamente al patrimonio jurídico del trabajador. Es diferente del principio 'in dubio pro operario' (regla interpretativa), del principio de norma mínima (que no existe como tal), y de la igualdad de oportunidades (principio constitucional de no discriminación). La condición más beneficiosa opera como una cláusula de garantía individual frente a modificaciones normativas in peius, asegurando que los trabajadores no vean empeorada su situación por reformas legales o convencionales posteriores."
      },
      {
        id: 15012,
        moduloId: 615,
        pregunta: "¿Qué tipo de relación NO se considera laboral según el Estatuto de los Trabajadores?",
        opciones: [
          "Deportistas profesionales",
          "Personal de alta dirección",
          "Consejeros de sociedades que solo cumplen funciones inherentes al cargo",
          "Trabajadores del hogar"
        ],
        respuestaCorrecta: 2,
        explicacion: "Los consejeros de sociedades que solo cumplen funciones inherentes al cargo NO se consideran trabajadores según el Estatuto de los Trabajadores. El artículo 1.3.c) excluye expresamente de la relación laboral las 'prestaciones personales obligatorias'. Según la jurisprudencia consolidada del Tribunal Supremo, los consejeros que únicamente ejercen funciones de administración y gobierno corporativo inherentes a su cargo (asistir a consejos, votar decisiones estratégicas, supervisar la gestión) no mantienen relación laboral, sino una relación orgánica de naturaleza mercantil. Diferente es el caso de consejeros-ejecutivos o consejeros-delegados que, además de las funciones inherentes al cargo, desarrollan actividades ejecutivas de dirección y gestión, pues entonces sí puede existir relación laboral si concurren los elementos esenciales (dependencia, ajenidad, etc.). Los deportistas profesionales, personal de alta dirección y trabajadores del hogar SÍ se consideran trabajadores, aunque están sujetos a relaciones laborales especiales con regulación específica según los apartados d), a) y f) del artículo 2 del ET respectivamente. La clave está en determinar si el consejero desarrolla actividades ejecutivas dependientes (laboral) o solo funciones de administración y control (no laboral)."
      },
      {
        id: 15013,
        moduloId: 615,
        pregunta: "¿Qué tipo de ley requiere mayoría absoluta del Congreso para ser aprobada?",
        opciones: [
          "Ley ordinaria",
          "Ley orgánica",
          "Reglamento",
          "Decreto-ley"
        ],
        respuestaCorrecta: 1,
        explicacion: "La ley orgánica requiere mayoría absoluta del Congreso para ser aprobada. Según el artículo 81 de la Constitución Española, 'son leyes orgánicas las relativas al desarrollo de los derechos fundamentales y de las libertades públicas, las que aprueben los Estatutos de Autonomía y el régimen electoral general y las demás previstas en la Constitución. La aprobación, modificación o derogación de las leyes orgánicas exigirá mayoría absoluta del Congreso, en una votación final sobre el conjunto del proyecto'. En materia laboral, tienen rango de ley orgánica aspectos como el derecho fundamental de huelga (artículo 28.2 CE), libertad sindical y derecho de asociación sindical. Las leyes ordinarias requieren solo mayoría simple (más votos a favor que en contra), los reglamentos son normas del poder ejecutivo que no requieren votación parlamentaria, y los decreto-leyes son normas gubernamentales con rango de ley que posteriormente deben ser convalidadas por el Congreso (también por mayoría simple). La exigencia de mayoría absoluta para las leyes orgánicas (más de la mitad de los miembros del Congreso, no solo de los presentes) refleja la importancia de las materias que regulan, especialmente los derechos fundamentales, requiriendo un consenso político más amplio."
      },
      {
        id: 15014,
        moduloId: 615,
        pregunta: "¿Cuál es la función de los convenios colectivos?",
        opciones: [
          "Regular condiciones laborales específicas mejorando lo establecido por las leyes",
          "Reemplazar las leyes laborales",
          "Suprimir derechos laborales básicos",
          "Limitar el acceso a formación profesional"
        ],
        respuestaCorrecta: 0,
        explicacion: "La función de los convenios colectivos es regular condiciones laborales específicas mejorando lo establecido por las leyes. Según el artículo 82.1 del Estatuto de los Trabajadores, el convenio colectivo es 'el acuerdo libremente adoptado por los representantes de los trabajadores y de los empresarios para regular las condiciones de trabajo y de productividad'. Los convenios actúan como normas jurídicas (artículo 82.3 ET) que desarrollan y mejoran las condiciones mínimas establecidas por las leyes, adaptándolas a las particularidades de cada sector, empresa o ámbito territorial. Su función es complementaria y de mejora respecto a la legislación básica, nunca de sustitución total. Según el principio de jerarquía normativa y el artículo 3.3 ET, los convenios no pueden empeorar las condiciones establecidas por normas de rango superior (leyes, reglamentos), pero sí pueden mejorarlas. Ejemplos: incrementar salarios por encima del mínimo legal, reducir jornada laboral, ampliar periodo vacacional, establecer medidas de conciliación adicionales, regular promoción profesional específica, etc. Los convenios no pueden suprimir derechos básicos (principio de irrenunciabilidad) ni reemplazar totalmente las leyes, sino mejorar las condiciones laborales dentro del marco legal vigente."
      }
    ]
  };

  export default moduloRepasoUnidadCuatro;