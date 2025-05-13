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
export const importanteExamen02 = {
  id: 607,
  nombre: "Preguntas importantes. Bloque 2 (Temas 4 -temporal-)",
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
    // ---- Tema 5. El contrato de trabajo y las modalidades de contratación. ----.
    {
      id: 6718,
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
      id: 6719,
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
      id: 6720,
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
      id: 6721,
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
      id: 6722,
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
      id: 6723,
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
      id: 6724,
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
      id: 6725,
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
      id: 6726,
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
      id: 6727,
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
      id: 6728,
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
      id: 6729,
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
      id: 6730,
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
      id: 6731,
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
      id: 6732,
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
  ],
};
export default importanteExamen02;
