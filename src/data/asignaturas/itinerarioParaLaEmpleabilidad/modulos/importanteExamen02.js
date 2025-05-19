/**
 * Datos del Bloque 2 (Temas 4 a 6) perteneciente a la asignatura de ITP.
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
export const importanteExamen02 = {
  id: 607,
  nombre: "Preguntas importantes. Bloque 2 (Temas 4 a 6)",
  esExamen: true,
  asignaturaId: 6,
  descripcion: "Test de repaso de los puntos clave indicados para examen.",
  preguntas: [
    // ---- Tema 4. Derecho del trabajo: la relación laboral y el convenio colectivo. ----.
    {
      id: 6710,
      moduloId: 607,
      pregunta:
        "El derecho del trabajo tal como lo conocemos actualmente comenzó a formarse durante una época que posteriormente propició la aparición de las primeras leyes laborales. Esta etapa se conoce como:",
      opciones: [
        "Revolución industrial.",
        "Revolución laboral.",
        "Revolución del trabajo.",
        "Revolución mercantil.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "La Revolución Industrial trajo consigo la necesidad de regular las condiciones laborales ante los abusos sufridos por los trabajadores, dando origen al Derecho del Trabajo moderno.",
    },
    {
      id: 6711,
      moduloId: 607,
      pregunta:
        "Para que exista una relación laboral, son indispensables los siguientes elementos:",
      opciones: [
        "Voluntariedad, dependencia, remuneración, personalidad y ajenidad.",
        "Obligatoriedad, independencia, remuneración, personalidad y ajenidad.",
        "Voluntariedad, independencia, remuneración y ajenidad.",
        "Voluntariedad, remuneración y ajenidad.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Los elementos esenciales de la relación laboral son: voluntariedad, ajenidad, dependencia, remuneración y personalidad. Están recogidos en el Estatuto de los Trabajadores (art. 1.1).",
    },
    {
      id: 6712,
      moduloId: 607,
      pregunta:
        "¿Cuál es la jerarquía normativa en el ordenamiento jurídico laboral español?",
      opciones: [
        "Constitución, leyes, convenios colectivos, contratos y costumbre.",
        "Costumbre, convenios colectivos, Constitución, contratos y leyes.",
        "Leyes, Constitución, contratos, convenios y costumbre.",
        "Contratos, convenios colectivos, leyes, costumbre y Constitución.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Según el artículo 3.1 del Estatuto de los Trabajadores, la jerarquía normativa es: Constitución Española, normas legales y reglamentarias del Estado, convenios colectivos, voluntad de las partes (contratos) y costumbre.",
    },
    {
      id: 6713,
      moduloId: 607,
      pregunta:
        "Este principio significa que, en caso de duda sobre la interpretación de una norma laboral, la interpretación que favorezca al trabajador debe prevalecer. Este enfoque protege al trabajador frente a posibles ambigüedades o inconsistencias en las leyes laborales.",
      opciones: [
        "Principio de indubio pro operario.",
        "Principio de indubio operario.",
        "Principio de operario.",
        "Principio de indubio pro reo.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "El principio de indubio pro operario es un principio fundamental del Derecho del Trabajo que establece que, en caso de duda razonable en la interpretación de una norma, debe aplicarse la más favorable al trabajador. Este principio refleja el carácter protector del Derecho Laboral.",
    },
    {
      id: 6714,
      moduloId: 607,
      pregunta:
        "En el ámbito de la legislación laboral existe un proceso que tiene como objetivo intentar resolver disputas entre trabajadores y empleadores de manera amistosa y sin necesidad de llegar a un juicio. Este se conoce como:",
      opciones: [
        "Servicio de Mediación, Arbitraje y Conciliación (SMAC).",
        "Sistema de Mantenimiento y Administración de Contratos (SMAC).",
        "Sociedad Mercantil de Administración y Contabilidad (SMAC).",
        "Servicio de Monitoreo y Análisis de Conflictos (SMAC).",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "El SMAC (Servicio de Mediación, Arbitraje y Conciliación) es un organismo administrativo que busca resolver conflictos laborales entre trabajadores y empleadores antes de recurrir a los tribunales. Está regulado por la Ley de Procedimiento Laboral y fomenta la solución extrajudicial.",
    },
    {
      id: 6715,
      moduloId: 607,
      pregunta:
        "Para que un contrato de trabajo sea válido, debe cumplir con ciertos requisitos esenciales. Si alguno de estos falta, el contrato puede ser nulo o inválido. Estos requisitos son:",
      opciones: [
        "Consentimiento, Objeto y Causa.",
        "Consentimiento, Duración y Objeto.",
        "Voluntad, Cláusulas y Causa.",
        "Aceptación, Objeto y Beneficio.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Los requisitos esenciales de todo contrato, incluidos los laborales, son: consentimiento (voluntad de las partes), objeto (la prestación laboral) y causa (la justificación del acuerdo). Están recogidos en el Código Civil (art. 1261) y aplican al contrato laboral según el Estatuto de los Trabajadores.",
    },
    {
      id: 6716,
      moduloId: 607,
      pregunta:
        "¿Qué organización internacional jugó un papel importante en la consolidación del derecho laboral en el siglo XX?",
      opciones: [
        "La Organización Internacional del Trabajo (OIT).",
        "La Organización Mundial del Trabajo (OMT).",
        "La Organización de las Naciones Unidas (ONU).",
        "La Organización de los Derechos de los Niños (ODN).",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "La Organización Internacional del Trabajo (OIT), fundada en 1919, es una agencia de la ONU que promueve los derechos laborales, fomenta el empleo digno y establece normas internacionales del trabajo. Ha sido clave en el desarrollo del Derecho Laboral en todo el mundo.",
    },
    {
      id: 6717,
      moduloId: 607,
      pregunta:
        "Los tribunales laborales en España están estructurados en varios niveles. Indica la organización jerárquica correcta (de más importante a menos importante):",
      opciones: [
        "Tribunal Constitucional, Tribunal Supremo, Audiencia Nacional, Tribunal Superior de Justicia de la CCAA, Juzgados de lo Social.",
        "Tribunal Constitucional, Tribunal Supremo, Tribunal Superior de Justicia de la CCAA, Audiencia Nacional, Juzgados de lo Social.",
        "Tribunal Supremo, Tribunal Nacional, Tribunal Superior de Justicia de la CCAA, Audiencia Nacional, Juzgados de lo Social.",
        "Tribunal Constitucional, Tribunal Supremo, Tribunal Superior de Justicia de la CCAA, Audiencia Provincial, Juzgados de lo Social.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "En el orden jurisdiccional laboral, la jerarquía se estructura de la siguiente forma: el Tribunal Constitucional (máximo intérprete de la Constitución), el Tribunal Supremo (máxima autoridad judicial), la Audiencia Nacional (competente en conflictos colectivos de ámbito nacional), los Tribunales Superiores de Justicia de las Comunidades Autónomas (resuelven en segunda instancia), y finalmente los Juzgados de lo Social (primera instancia en la mayoría de los conflictos laborales).",
    },
    {
      id: 6718,
      moduloId: 607,
      pregunta:
        "Proceso mediante el cual las partes implicadas en un conflicto intentan llegar a un acuerdo de forma directa, sin intervención de terceros. En el ámbito laboral, puede producirse entre empleadores y trabajadores o sus representantes.",
      opciones: ["Negociación.", "Conciliación.", "Mediación.", "Arbitraje."],
      respuestaCorrecta: 0,
      explicacion:
        "La negociación es un método de resolución de conflictos basado en el diálogo directo entre las partes, sin la intervención de un tercero. En el entorno laboral, es común entre la empresa y los representantes de los trabajadores.",
    },
    {
      id: 6719,
      moduloId: 607,
      pregunta:
        "Proceso en el que trabajador y empleador se reúnen con un tercero neutral que facilita el diálogo y la negociación para alcanzar un acuerdo amistoso.",
      opciones: ["Negociación.", "Conciliación.", "Mediación.", "Arbitraje."],
      respuestaCorrecta: 1,
      explicacion:
        "La conciliación es un proceso extrajudicial donde un tercero imparcial (normalmente un funcionario público) ayuda a las partes a dialogar con el fin de alcanzar un acuerdo. Suele realizarse en los servicios de mediación, arbitraje y conciliación (SMAC).",
    },
    {
      id: 6720,
      moduloId: 607,
      pregunta:
        "Procedimiento en el que una persona imparcial ayuda a las partes a identificar sus intereses y encontrar una solución aceptable para ambas, sin imponer una decisión.",
      opciones: ["Negociación.", "Conciliación.", "Mediación.", "Arbitraje."],
      respuestaCorrecta: 2,
      explicacion:
        "La mediación es un proceso voluntario en el que un mediador neutral interviene para facilitar la comunicación entre las partes en conflicto. A diferencia del arbitraje, no impone una solución, sino que promueve un acuerdo mutuo.",
    },
    {
      id: 6721,
      moduloId: 607,
      pregunta:
        "Proceso en el que un tercero imparcial escucha a ambas partes y toma una decisión obligatoria para resolver el conflicto.",
      opciones: ["Negociación.", "Conciliación.", "Mediación.", "Arbitraje."],
      respuestaCorrecta: 3,
      explicacion:
        "El arbitraje consiste en la intervención de un árbitro que, tras escuchar a las partes, emite una resolución obligatoria para ambas. Es una alternativa al procedimiento judicial y se emplea en conflictos laborales y comerciales.",
    },
    // ---- Tema 5. El contrato de trabajo y las modalidades de contratación. ----.
    {
      id: 6722,
      moduloId: 607,
      pregunta:
        "¿Quiénes pueden firmar un contrato de trabajo según la legislación laboral española?",
      opciones: [
        "Mayores de edad, menores de 18 emancipados, mayores de 16 y menores de 18 con autorización y extranjeros conforme a la legislación.",
        "Mayores de edad, menores de 18 emancipados y extranjeros conforme a la legislación.",
        "Mayores de 16 años sin requisitos previos.",
        "Únicamente mayores de 18 años.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Pueden firmar un contrato de trabajo: los mayores de edad (18 años o más), los menores emancipados, y los mayores de 16 y menores de 18 años siempre que cuenten con autorización de sus padres o tutores, salvo que vivan de forma independiente con su consentimiento. Además, los extranjeros pueden contratar si cumplen lo dispuesto en la Ley Orgánica 4/2000 sobre derechos y libertades de los extranjeros en España y su integración social.",
    },
    {
      id: 6723,
      moduloId: 607,
      pregunta:
        "¿Cuáles son los elementos esenciales de un contrato de trabajo según el Código Civil español?",
      opciones: [
        "Consentimiento, objeto y causa.",
        "Consentimiento, objeto, causa y voluntariedad.",
        "Voluntariedad, objeto y causa.",
        "Consentimiento y causa.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Los elementos esenciales de todo contrato, incluido el de trabajo, son el consentimiento (acuerdo libre entre las partes), el objeto (la prestación de servicios) y la causa (la contraprestación, es decir, el salario). Esto se establece en el artículo 1261 del Código Civil. Sin alguno de estos elementos, el contrato carece de validez.",
    },
    {
      id: 6724,
      moduloId: 607,
      pregunta:
        "¿Qué tipo de contrato no es obligatorio formalizar por escrito según el Estatuto de los Trabajadores?",
      opciones: [
        "Indefinido u ordinario.",
        "Indefinido, ordinario y de prácticas.",
        "De relevo.",
        "De sustitución y de prácticas.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Según el artículo 8 del Estatuto de los Trabajadores, el contrato de trabajo se puede celebrar de forma verbal o escrita. Sin embargo, los contratos indefinidos ordinarios pueden celebrarse verbalmente. No obstante, existen contratos que deben formalizarse por escrito obligatoriamente, como los contratos a tiempo parcial, de relevo, de prácticas o formación. Si no se respeta esta forma escrita cuando es obligatoria, se presumirá que el contrato es indefinido y a jornada completa.",
    },
    {
      id: 6725,
      moduloId: 607,
      pregunta:
        "¿Qué norma determina la duración máxima del periodo de prueba en un contrato de trabajo?",
      opciones: [
        "El Convenio Colectivo o, en su defecto, el Estatuto de los Trabajadores (máx. 6 meses técnicos titulados, máx. 2 meses para otros trabajadores).",
        "El Estatuto de los Trabajadores (máx. 6 meses técnicos titulados, máx. 2 meses para otros trabajadores) o, en su defecto, el Convenio Colectivo.",
        "El Convenio Colectivo, en todo caso.",
        "El Estatuto de los Trabajadores, en todo caso.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "La duración máxima del periodo de prueba viene determinada por lo que establezca el Convenio Colectivo aplicable. En ausencia de convenio, se aplican los límites del artículo 14 del Estatuto de los Trabajadores: un máximo de 6 meses para técnicos titulados y de 2 meses para el resto de los trabajadores. En empresas de menos de 25 trabajadores, el límite para estos últimos se reduce a 3 meses.",
    },
    {
      id: 6726,
      moduloId: 607,
      pregunta:
        "¿Se interrumpe el periodo de prueba en caso de incapacidad temporal del trabajador?",
      opciones: [
        "No, excepto si se acordó previamente.",
        "Solamente si es un contrato de relevo.",
        "Sí, en todo caso. Es un derecho fundamental del trabajador.",
        "No, en ningún caso.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "El artículo 14.3 del Estatuto de los Trabajadores establece que el periodo de prueba puede ser interrumpido por incapacidad temporal, maternidad, adopción o acogimiento si ambas partes lo acuerdan expresamente. Si no se ha pactado esa posibilidad en el contrato, el periodo de prueba continuará corriendo durante la baja.",
    },
    {
      id: 6727,
      moduloId: 607,
      pregunta:
        "Este contrato no tiene una fecha de finalización preestablecida. Proporciona estabilidad laboral al empleado y se utiliza cuando no hay una razón específica para limitar la duración del empleo.",
      opciones: [
        "Contrato indefinido.",
        "Contrato de relevo.",
        "Contrato a tiempo parcial.",
        "Contrato fijo-discontinuo.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "El contrato indefinido no tiene una fecha concreta de finalización. Es la forma común de contratación estable y permanente, tal como establece el artículo 15 del Estatuto de los Trabajadores.",
    },
    {
      id: 6728,
      moduloId: 607,
      pregunta:
        "Similar al contrato indefinido o temporal, pero con una jornada laboral reducida. Se acuerda un número de horas inferior a la jornada completa, distribuidas según lo pactado.",
      opciones: [
        "Contrato indefinido.",
        "Contrato de relevo.",
        "Contrato a tiempo parcial.",
        "Contrato fijo-discontinuo.",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "El contrato a tiempo parcial es aquel en el que se presta servicio durante un número de horas inferior al de un trabajador a tiempo completo comparable, según lo establece el artículo 12 del Estatuto de los Trabajadores.",
    },
    {
      id: 6729,
      moduloId: 607,
      pregunta:
        "Utilizado para trabajos estacionales o actividades que no se realizan de forma continua a lo largo del año. El empleado trabaja en períodos determinados, con derecho a reincorporarse en las temporadas sucesivas.",
      opciones: [
        "Contrato indefinido.",
        "Contrato de relevo.",
        "Contrato a tiempo parcial.",
        "Contrato fijo-discontinuo.",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "El contrato fijo-discontinuo está regulado en el artículo 16 del Estatuto de los Trabajadores. Se utiliza para actividades estacionales o de temporada, en las que el trabajo no se realiza de forma continua pero sí recurrente.",
    },
    {
      id: 6730,
      moduloId: 607,
      pregunta:
        "Vinculado a situaciones de jubilación parcial, permite contratar a un trabajador desempleado o con un contrato temporal para que sustituya al empleado que reduce su jornada por jubilación parcial.",
      opciones: [
        "Contrato indefinido.",
        "Contrato de relevo.",
        "Contrato a tiempo parcial.",
        "Contrato de grupo.",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "El contrato de relevo está regulado en el artículo 12.7 del Estatuto de los Trabajadores. Se celebra para sustituir la jornada que deja vacante un trabajador que accede a la jubilación parcial.",
    },
    {
      id: 6731,
      moduloId: 607,
      pregunta:
        "Se celebra con un grupo de trabajadores representados por un jefe de grupo. Los trabajadores no tienen un vínculo directo individual con la empresa, sino a través del jefe de grupo.",
      opciones: [
        "Contrato indefinido.",
        "Contrato de relevo.",
        "Contrato a tiempo parcial.",
        "Contrato de grupo.",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "El contrato de grupo está contemplado en el artículo 10.3 del Estatuto de los Trabajadores. La empresa contrata a un grupo liderado por un jefe, y la relación jurídica se establece con este último, no directamente con cada miembro del grupo.",
    },
    {
      id: 6732,
      moduloId: 607,
      pregunta:
        "Este contrato responde a un incremento temporal de la actividad de la empresa, como picos de producción o demanda. Tiene una duración máxima, que suele estar regulada por convenios colectivos.",
      opciones: [
        "Contrato temporal por circunstancias en la producción.",
        "Contrato temporal por sustitución.",
        "Contrato formativo de contratación en alternancia.",
        "Contrato formativo para la obtención de la práctica profesional.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Este contrato está regulado en el artículo 15.2 del Estatuto de los Trabajadores. Se celebra por necesidades circunstanciales de la empresa, como un aumento puntual de actividad. Su duración está limitada y puede variar según el convenio colectivo.",
    },
    {
      id: 6733,
      moduloId: 607,
      pregunta:
        "Se emplea para sustituir a trabajadores con derecho a reserva de puesto, como en casos de baja por enfermedad o maternidad, o para cubrir temporalmente un puesto hasta su ocupación definitiva.",
      opciones: [
        "Contrato temporal por circunstancias en la producción.",
        "Contrato temporal por sustitución.",
        "Contrato formativo de contratación en alternancia.",
        "Contrato formativo para la obtención de la práctica profesional.",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Este contrato también se recoge en el artículo 15 del Estatuto de los Trabajadores. Se utiliza para sustituir a trabajadores con derecho a reincorporación, como por baja médica, maternidad, excedencia, etc.",
    },
    {
      id: 6734,
      moduloId: 607,
      pregunta:
        "Destinado a la formación profesional, combinando actividad laboral y formación teórica. Es adecuado para jóvenes sin cualificación profesional.",
      opciones: [
        "Contrato temporal por circunstancias en la producción.",
        "Contrato temporal por sustitución.",
        "Contrato formativo de contratación en alternancia.",
        "Contrato formativo para la obtención de la práctica profesional.",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "El contrato formativo en alternancia combina trabajo con formación (dual) y está regulado en el artículo 11.2 del Estatuto de los Trabajadores. Se dirige a jóvenes que cursan formación profesional, universitaria o del sistema educativo.",
    },
    {
      id: 6735,
      moduloId: 607,
      pregunta:
        "Enfocado en titulados universitarios o de formación profesional, permite adquirir experiencia en su campo de estudio. Debe realizarse dentro de un período específico tras la obtención del título.",
      opciones: [
        "Contrato temporal por circunstancias en la producción.",
        "Contrato temporal por sustitución.",
        "Contrato formativo de contratación en alternancia.",
        "Contrato formativo para la obtención de la práctica profesional.",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "Este contrato, regulado también en el artículo 11.3 del Estatuto de los Trabajadores, permite a personas con titulación reciente adquirir experiencia profesional adecuada a su nivel de estudios. Debe celebrarse dentro de los 3 años (5 si hay discapacidad) posteriores a la obtención del título.",
    },
    {
      id: 6736,
      moduloId: 607,
      pregunta:
        "Actúan como intermediarios entre los trabajadores y las empresas de usuarios.",
      opciones: [
        "ETT (Empresas de Trabajo Temporal).",
        "ETI (Empresas de Trabajo Indefinido).",
        "ETP (Empresas de Trabajo Personal).",
        "EPT (Empresas de Profesionales Temporal).",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Las ETT (Empresas de Trabajo Temporal) son empresas autorizadas que contratan trabajadores para cederlos temporalmente a empresas usuarias. Están reguladas por la Ley 14/1994, de 1 de junio, y deben cumplir requisitos específicos para operar legalmente. Su función es cubrir necesidades laborales temporales en otras empresas.",
    },
    // ---- Tema 6. Jornada laboral y salario. ----.
    {
      id: 6737,
      moduloId: 607,
      pregunta:
        "¿Cuál es la duración máxima legal de la jornada laboral semanal en España?",
      opciones: [
        "No puede exceder de 40h semanales.",
        "No puede exceder de 37,5h semanales.",
        "No puede exceder de 35h semanales.",
        "No puede exceder de 42h semanales.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Según el Estatuto de los Trabajadores, la jornada ordinaria máxima es de 40 horas semanales de promedio en cómputo anual.",
    },
    {
      id: 6738,
      moduloId: 607,
      pregunta: "¿Es posible distribuir la jornada laboral de forma irregular?",
      opciones: [
        "Sí se puede.",
        "No, en ningún caso.",
        "Sí, pero solo para un día.",
        "No, salvo que sea pactada por la jurisdicción laboral.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "La distribución irregular de la jornada está permitida por ley si se regula mediante convenio colectivo o acuerdo empresa-trabajador.",
    },
    {
      id: 6739,
      moduloId: 607,
      pregunta:
        "¿Puede el empresario modificar unilateralmente la distribución irregular?",
      opciones: [
        "Sí, un 10% si no hay acuerdo entre el jefe y el trabajador.",
        "Sí, un 30% si no hay acuerdo entre el jefe y el trabajador.",
        "No, en ningún caso. Es ilegal.",
        "Solamente si el trabajador ha sido sancionado.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "El empresario puede hacerlo hasta un 10% de la jornada anual si lo permite el convenio colectivo.",
    },
    {
      id: 6740,
      moduloId: 607,
      pregunta: "¿Cuál es el descanso mínimo entre dos jornadas laborales?",
      opciones: [
        "Mínimo 12h consecutivas.",
        "Máximo 12h consecutivas.",
        "Mínimo 12h discontinuas.",
        "Máximo 12h discontinuas.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Debe haber al menos 12 horas consecutivas de descanso entre una jornada y la siguiente.",
    },
    {
      id: 6741,
      moduloId: 607,
      pregunta: "¿Cuál es la duración mínima del descanso semanal?",
      opciones: [
        "Mínimo de un día y medio, que generalmente se fija en la tarde del sábado o la mañana del lunes, y el domingo completo.",
        "Máximo de un día y medio, que generalmente se fija en la tarde del sábado o la mañana del lunes, y el domingo completo.",
        "Mínimo de dos días y medio, que generalmente se fija en la tarde del viernes o la mañana del lunes, y el domingo completo.",
        "Máximo de dos días y medio, que generalmente se fija en la tarde del viernes o la mañana del lunes, y el domingo completo.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "El descanso semanal debe ser de al menos 36 horas ininterrumpidas.",
    },
    {
      id: 6742,
      moduloId: 607,
      pregunta: "¿Qué se considera trabajo nocturno?",
      opciones: [
        "El realizado entre las 10 de la noche y las 6 de la mañana.",
        "El realizado entre las 11 de la noche y las 7 de la mañana.",
        "El realizado entre las 9 de la noche y las 5 de la mañana.",
        "El realizado entre las 10 de la noche y las 5 de la mañana.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Así lo establece el artículo 36 del Estatuto de los Trabajadores.",
    },
    {
      id: 6743,
      moduloId: 607,
      pregunta:
        "¿Qué límite tienen los trabajadores nocturnos en un periodo de 24 horas?",
      opciones: [
        "Las 8 horas de trabajo efectivo en un período de 24 horas.",
        "Las 8 horas de trabajo efectivo en un período de 12 horas.",
        "Las 6 horas de trabajo efectivo en un período de 24 horas.",
        "Las 6 horas de trabajo efectivo en un período de 12 horas.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "No deben superar las 8 horas de trabajo efectivo por jornada si realizan trabajo nocturno continuado.",
    },
    {
      id: 6744,
      moduloId: 607,
      pregunta:
        "¿Qué reducción puede solicitarse por guarda legal de menor o persona con discapacidad?",
      opciones: [
        "Entre 1/8 y la mitad.",
        "Entre 1/4 y la mitad.",
        "Solamente la mitad.",
        "Entre 1/3 y la mitad.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Es un derecho para compatibilizar la vida laboral y familiar.",
    },
    {
      id: 6745,
      moduloId: 607,
      pregunta:
        "¿De cuánto puede ser la reducción de la jornada laboral por cuidado de familiares?",
      opciones: [
        "De hasta un 50%.",
        "De hasta un 30%.",
        "De hasta un 25%.",
        "De hasta un 20%.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Aplica cuando el familiar no pueda valerse por sí mismo y no desempeñe actividad retribuida.",
    },
    {
      id: 6746,
      moduloId: 607,
      pregunta:
        "¿Qué reducción se puede solicitar por lactancia de un menor de 9 meses?",
      opciones: [
        "De 1 hora diaria que puede dividirse en dos fracciones.",
        "De 1 hora diaria solamente.",
        "En dos fracciones de 1 hora.",
        "De media hora diaria que puede dividirse en dos fracciones.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Se permite ausentarse del trabajo por lactancia, y esa hora puede dividirse.",
    },
    {
      id: 6747,
      moduloId: 607,
      pregunta:
        "¿Cuál es el número máximo de horas extraordinarias permitido legalmente al año?",
      opciones: [
        "Por norma general, el número máximo permitido es de 80 horas al año, salvo excepciones.",
        "Por norma general, el número máximo permitido es de 40 horas al año.",
        "Por norma general, el número máximo permitido es de 80 horas al año, sin excepción.",
        "Por norma general, el número máximo permitido es de 60 horas al año, en todo caso.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "El Estatuto de los Trabajadores establece que el número máximo de horas extraordinarias no podrá superar las 80 al año, salvo en casos de fuerza mayor u otras excepciones contempladas por convenio o la ley.",
    },
    {
      id: 6748,
      moduloId: 607,
      pregunta:
        "¿Cómo se compensarán las horas extraordinarias si no lo establece el Convenio Colectivo ni el Estatuto de los Trabajadores?",
      opciones: [
        "Mediante descanso compensatorio dentro de los 4 meses siguientes a su realización.",
        "Se abonarán económicamente, en todo caso.",
        "Mediante descanso compensatorio dentro de los 2 meses siguientes a su realización.",
        "Mediante descanso compensatorio dentro de las 4 semanas siguientes a su realización.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Si no se especifica en el Convenio Colectivo ni en el contrato, las horas extraordinarias deben compensarse preferentemente con tiempo de descanso equivalente dentro de los 4 meses siguientes a su realización, tal como establece el Estatuto de los Trabajadores.",
    },
    {
      id: 6749,
      moduloId: 607,
      pregunta:
        "¿Durante cuánto tiempo está obligada la empresa a conservar los registros de la jornada laboral?",
      opciones: [
        "Durante 4 años.",
        "Durante 2 años.",
        "Durante 3 años.",
        "Deben eliminarse al finalizar la relación laboral con el trabajador.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Según el Real Decreto-ley 8/2019, las empresas están obligadas a conservar los registros diarios de jornada durante un período mínimo de 4 años y deben estar disponibles para su consulta por parte de los trabajadores, sus representantes y la Inspección de Trabajo.",
    },
    {
      id: 6750,
      moduloId: 607,
      pregunta: "El pago en especie no podrá superar en ningún caso...",
      opciones: ["El 30%.", "El 15%.", "El 50%.", "El 25%."],
      respuestaCorrecta: 0,
      explicacion:
        "El salario en especie es una parte del salario que no se paga en dinero, sino en bienes o servicios. La ley establece que no puede superar el 30% del total del salario del trabajador y nunca debe sustituir completamente el salario en efectivo.",
    },
    {
      id: 6751,
      moduloId: 607,
      pregunta:
        "¿Qué entidad pública garantiza el cobro de salarios e indemnizaciones a los trabajadores en caso de insolvencia de la empresa?",
      opciones: [
        "FOGASA (Fondo de Garantía Salarial).",
        "ITSS (Inspección de Trabajo y Seguridad Social).",
        "Ministerio de Trabajo.",
        "CNT (Comité Nacional del Trabajo).",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "FOGASA es una entidad pública que abona a los trabajadores los salarios e indemnizaciones pendientes cuando su empresa se declara insolvente o en concurso de acreedores, dentro de unos límites establecidos.",
    },
    {
      id: 6752,
      moduloId: 607,
      pregunta:
        "La persona trabajadora, previo aviso y justificación, podrá ausentarse del trabajo, con derecho a remuneración, por matrimonio o registro de pareja de hecho durante:",
      opciones: [
        "15 días naturales.",
        "30 días naturales.",
        "3 meses.",
        "2 meses.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "El Estatuto de los Trabajadores reconoce 15 días naturales de permiso retribuido por matrimonio o inscripción como pareja de hecho. Este permiso comienza desde el día del hecho causante.",
    },
    {
      id: 6754,
      moduloId: 607,
      pregunta:
        "¿Cuántos días de permiso retribuido tiene el trabajador por accidente, enfermedad grave, hospitalización o intervención quirúrgica sin hospitalización que precise reposo del cónyuge, pareja de hecho o familiares hasta segundo grado?",
      opciones: ["5 días.", "10 días.", "2 días.", "8 días."],
      respuestaCorrecta: 0,
      explicacion:
        "Según el artículo 37 del Estatuto de los Trabajadores, el trabajador tiene derecho a 5 días laborables de permiso retribuido por estos motivos, siempre que exista justificación y se comunique con antelación.",
    },
    {
      id: 6755,
      moduloId: 607,
      pregunta:
        "¿Cuántos días de permiso retribuido corresponden por el fallecimiento del cónyuge, pareja de hecho o familiares hasta segundo grado de consanguinidad o afinidad?",
      opciones: ["5 días.", "10 días.", "2 días.", "8 días."],
      respuestaCorrecta: 2,
      explicacion:
        "El trabajador tiene derecho a 2 días de permiso retribuido (ampliables a 4 si necesita desplazamiento) por fallecimiento de parientes hasta segundo grado, según el Estatuto de los Trabajadores.",
    },
    {
      id: 6756,
      moduloId: 607,
      pregunta: "¿Cuál es la duración mínima legal de las vacaciones anuales?",
      opciones: ["30 días.", "33 días.", "32 días.", "22 días."],
      respuestaCorrecta: 0,
      explicacion:
        "El mínimo legal de vacaciones anuales retribuidas es de 30 días naturales (lo que equivale a unos 22 días laborables). Este derecho no es sustituible por compensación económica salvo en caso de extinción del contrato.",
    },
    {
      id: 6757,
      moduloId: 607,
      pregunta: "¿Cuál es la duración mínima legal de las vacaciones anuales?",
      opciones: ["30 días.", "33 días.", "32 días.", "22 días."],
      respuestaCorrecta: 0,
      explicacion:
        "La duración mínima legal de las vacaciones es de 30 días naturales por año trabajado, aunque los convenios colectivos pueden mejorar este derecho. No pueden ser sustituidas por su retribución salvo en la extinción del contrato.",
    },
    {
      id: 6758,
      moduloId: 607,
      pregunta:
        "¿Con cuánta antelación debe conocer el trabajador las fechas de sus vacaciones?",
      opciones: [
        "Al menos 2 meses antes.",
        "Al menos 3 meses antes.",
        "Al menos 4 meses antes.",
        "Al menos 30 días antes.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "El Estatuto de los Trabajadores establece que las fechas de disfrute de las vacaciones deben ser comunicadas con al menos dos meses de antelación. Esta obligación busca garantizar la conciliación laboral y personal del trabajador.",
    },
    {
      id: 6759,
      moduloId: 607,
      pregunta:
        "¿Cómo se calcula la Base de Cotización por Contingencias Comunes (BCCC)?",
      opciones: [
        "Percepciones salariales + Prorrata de pagas extra + Exceso de percepciones no salariales.",
        "Salario base + Plus de transporte + Horas extraordinarias.",
        "Percepciones salariales brutas - retenciones del IRPF.",
        "Salario mensual + indemnizaciones por despido + pagas extra.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "La BCCC se calcula sumando las percepciones salariales (incluido salario base, complementos, etc.), la prorrata de pagas extra y las percepciones no salariales que excedan los límites exentos. Sirve para determinar cuánto cotiza un trabajador a la Seguridad Social.",
    },
  ],
};
export default importanteExamen02;
