/**
 * Datos del módulo Unidad Siete perteneciente a la asignatura de ITP.
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
export const moduloUnidadSiete = {
    id: 610,
    nombre: "Test Unidad 7 (Repaso)",
    esExamen: true,
    asignaturaId: 6,
    descripcion: "Modificación, suspensión y extinción del contrato de trabajo: aspectos clave sobre cambios en la relación laboral, interrupciones temporales y finalización de la relación laboral.",
    preguntas: [
      {
        id: 10001,
        moduloId: 610,
        pregunta: "¿Cuál es una causa válida para una modificación sustancial de las condiciones de trabajo según el ET?",
        opciones: [
          "Motivos estéticos",
          "Cambio voluntario de residencia",
          "Opinión del supervisor",
          "Motivos económicos, técnicos, organizativos o de producción"
        ],
        respuestaCorrecta: 3,
        explicacion: "Según el artículo 41 del Estatuto de los Trabajadores, una modificación sustancial de las condiciones de trabajo debe estar basada en motivos económicos, técnicos, organizativos o de producción. La norma establece que se consideran tales causas las que estén relacionadas con la competitividad, productividad u organización técnica o del trabajo en la empresa. La dirección de la empresa puede acordar estas modificaciones cuando existan probadas razones en estos ámbitos, debiendo seguir el procedimiento establecido en la ley para su implementación. Estas modificaciones pueden afectar a condiciones como jornada, horario, régimen de trabajo a turnos, sistema de remuneración, sistema de trabajo y rendimiento, o funciones que excedan los límites de la movilidad funcional. Los motivos estéticos, cambios voluntarios de residencia o la mera opinión del supervisor no constituyen causas válidas según el Estatuto de los Trabajadores para implementar modificaciones sustanciales en las condiciones laborales."
      },
      {
        id: 10002,
        moduloId: 610,
        pregunta: "¿Qué implica una movilidad funcional dentro del mismo grupo profesional?",
        opciones: [
          "Cambio permanente a otro grupo profesional",
          "Asignación temporal sin necesidad de justificación",
          "Asignación de funciones compatibles con la categoría y formación del trabajador",
          "Asignación de tareas superiores siempre con aumento salarial"
        ],
        respuestaCorrecta: 2,
        explicacion: "La movilidad funcional dentro del mismo grupo profesional, regulada en el artículo 39 del Estatuto de los Trabajadores, implica la asignación de funciones compatibles con la categoría y formación del trabajador. Esta modalidad de movilidad se encuadra dentro del poder de dirección ordinario del empresario y puede ejercerse sin necesidad de alegar causas específicas. El trabajador deberá realizar las funciones asignadas que sean compatibles con su titulación académica o profesional y con el grupo profesional al que pertenece. El cambio de funciones puede realizarse sin limitación temporal y no supone modificación sustancial de las condiciones de trabajo. Esto se diferencia de la movilidad a otro grupo profesional, que requiere justificación por razones técnicas u organizativas, tiene limitación temporal y puede implicar ajustes salariales si se realizan funciones superiores. Así, la esencia de la movilidad dentro del mismo grupo es la compatibilidad de las nuevas funciones con la formación y categoría profesional del trabajador."
      },
      {
        id: 10003,
        moduloId: 610,
        pregunta: "¿Cuál es la duración máxima de un desplazamiento temporal?",
        opciones: [
          "6 meses",
          "12 meses en un periodo de 3 años",
          "9 meses",
          "3 meses"
        ],
        respuestaCorrecta: 1,
        explicacion: "La duración máxima de un desplazamiento temporal es de 12 meses en un periodo de 3 años. Esta limitación temporal está establecida en el artículo 40.6 del Estatuto de los Trabajadores. Los desplazamientos temporales implican que el trabajador resida en población distinta a su domicilio habitual, pero de manera no permanente. Si exceden de 12 meses en un período de 3 años, se consideran traslados (con diferente regulación legal). El desplazamiento debe estar justificado por razones económicas, técnicas, organizativas o de producción, o bien por contrataciones referidas a la actividad empresarial. El trabajador debe ser informado con una antelación suficiente (mínimo 5 días laborables para desplazamientos superiores a 3 meses) y tiene derecho a percibir, además de su salario, los gastos de viaje y dietas correspondientes. En caso de desplazamiento superior a 3 meses, el trabajador tendrá derecho a un permiso retribuido de 4 días laborables en su domicilio de origen por cada 3 meses de desplazamiento."
      },
      {
        id: 10004,
        moduloId: 610,
        pregunta: "¿Qué derecho tiene un trabajador en excedencia voluntaria?",
        opciones: [
          "Pago de salario durante la excedencia",
          "Indemnización mensual",
          "Reserva de su puesto de trabajo",
          "Derecho preferente al reingreso en vacantes de igual o similar categoría"
        ],
        respuestaCorrecta: 3,
        explicacion: "Un trabajador en situación de excedencia voluntaria tiene derecho preferente al reingreso en vacantes de igual o similar categoría. Según establece el artículo 46.5 del Estatuto de los Trabajadores, el trabajador en excedencia voluntaria conserva solo un derecho preferente al reingreso en las vacantes de igual o similar categoría a la suya que hubiera o se produjeran en la empresa. Esto significa que no hay una reserva del puesto concreto que ocupaba (a diferencia de lo que ocurre en otros tipos de excedencia, como la forzosa o por cuidado de hijos), sino solo un derecho preferente cuando exista una vacante adecuada. Durante el período de excedencia voluntaria, se suspende el contrato de trabajo, por lo que el trabajador no percibe salario ni indemnización alguna, ni genera antigüedad. Tampoco se mantiene la obligación de cotizar a la Seguridad Social, aunque el trabajador puede suscribir un convenio especial con la Seguridad Social para mantener determinados derechos."
      },
      {
        id: 10005,
        moduloId: 610,
        pregunta: "¿Cuál es una causa de extinción del contrato reconocida por el ET?",
        opciones: [
          "Falta de puntualidad leve",
          "Mal clima laboral",
          "Mutuo acuerdo de las partes",
          "Cambio de dirección de la empresa"
        ],
        respuestaCorrecta: 2,
        explicacion: "El mutuo acuerdo de las partes es una causa de extinción del contrato reconocida por el Estatuto de los Trabajadores. El artículo 49.1.a del ET establece expresamente que el contrato de trabajo se extinguirá 'por mutuo acuerdo de las partes'. Esta causa, también conocida como extinción consensual, requiere el consentimiento libre de ambas partes (empresario y trabajador) y suele formalizarse mediante un documento que recoge las condiciones pactadas. Es habitual que en estos acuerdos se establezca algún tipo de compensación económica para el trabajador. Las faltas de puntualidad leves podrían ser causa de sanción pero no de extinción directa del contrato. El mal clima laboral no constituye por sí mismo una causa legal de extinción. El cambio de dirección de la empresa tampoco es una causa legal de extinción, ya que la relación laboral se establece con la empresa como persona jurídica y no con sus directivos o propietarios concretos, aplicándose el principio de subrogación empresarial."
      },
      {
        id: 10006,
        moduloId: 610,
        pregunta: "¿Qué tipo de despido no da derecho a indemnización si es declarado procedente?",
        opciones: [
          "Colectivo",
          "Disciplinario",
          "Objetivo",
          "Por fuerza mayor"
        ],
        respuestaCorrecta: 1,
        explicacion: "El despido disciplinario no da derecho a indemnización si es declarado procedente. Según el artículo 55 del Estatuto de los Trabajadores, cuando el despido disciplinario se califica como procedente porque queda acreditado el incumplimiento grave y culpable alegado por el empresario, el trabajador no tiene derecho a indemnización ni a salarios de tramitación. El despido disciplinario se basa en incumplimientos contractuales del trabajador según las causas establecidas en el artículo 54 del ET (faltas repetidas e injustificadas, indisciplina, ofensas verbales o físicas, transgresión de la buena fe contractual, etc.). En cambio, los despidos objetivos (art. 52 ET), colectivos (art. 51 ET) y por fuerza mayor (art. 49.1.h ET), incluso cuando son declarados procedentes, generan derecho a una indemnización de 20 días de salario por año trabajado con un máximo de 12 mensualidades, ya que se fundamentan en causas ajenas a la voluntad y comportamiento del trabajador (económicas, técnicas, organizativas, productivas o de fuerza mayor)."
      },
      {
        id: 10007,
        moduloId: 610,
        pregunta: "¿Qué debe incluir el finiquito?",
        opciones: [
          "Vacaciones disfrutadas",
          "Solo comisiones e incentivos",
          "Salario pendiente, pagas extras proporcionales, vacaciones no disfrutadas, horas extra, indemnizaciones si corresponde",
          "Solo el salario del último mes"
        ],
        respuestaCorrecta: 2,
        explicacion: "El finiquito debe incluir el salario pendiente, pagas extras proporcionales, vacaciones no disfrutadas, horas extra e indemnizaciones si corresponde. Si bien no existe una regulación específica en el Estatuto de los Trabajadores sobre el contenido exacto del finiquito, la jurisprudencia ha establecido que debe comprender todas las cantidades pendientes de pago al trabajador en el momento de la extinción del contrato. Esto incluye: el salario de los días trabajados en el mes en que se produce la extinción; la parte proporcional de las pagas extraordinarias devengadas y no percibidas; la compensación económica por las vacaciones devengadas y no disfrutadas; las horas extraordinarias realizadas y no pagadas; los complementos salariales pendientes; y, cuando proceda, la indemnización correspondiente según el tipo de extinción contractual. Las vacaciones ya disfrutadas no se incluyen en el finiquito puesto que no generan una deuda para la empresa. El finiquito no se limita a comisiones e incentivos ni únicamente al salario del último mes, sino que debe comprender todas las cantidades adeudadas al trabajador."
      },
      {
        id: 10008,
        moduloId: 610,
        pregunta: "¿Qué requisito es necesario para acceder a una excedencia voluntaria?",
        opciones: [
          "Reserva indefinida del puesto",
          "Ser representante sindical",
          "Estar en situación de maternidad",
          "Un año de antigüedad en la empresa"
        ],
        respuestaCorrecta: 3,
        explicacion: "Para acceder a una excedencia voluntaria, el requisito necesario es tener un año de antigüedad en la empresa. Así lo establece expresamente el artículo 46.2 del Estatuto de los Trabajadores: 'El trabajador con al menos una antigüedad en la empresa de un año tiene derecho a que se le reconozca la posibilidad de situarse en excedencia voluntaria por un plazo no menor a cuatro meses y no mayor a cinco años'. Este requisito temporal busca garantizar un mínimo de estabilidad en la relación laboral antes de permitir su suspensión temporal. La excedencia voluntaria no conlleva reserva indefinida del puesto, sino solo un derecho preferente al reingreso en vacantes de igual o similar categoría. No se requiere ser representante sindical para solicitarla, siendo un derecho de todos los trabajadores que cumplan con la antigüedad requerida. Tampoco es necesario estar en situación de maternidad, pues para ello existe una excedencia específica por cuidado de hijos con una regulación diferente y más favorable (art. 46.3 ET)."
      },
      {
        id: 10009,
        moduloId: 610,
        pregunta: "¿Qué causa puede justificar un despido objetivo?",
        opciones: [
          "Opiniones políticas del trabajador",
          "Cambio de domicilio del empresario",
          "Desacuerdo con el supervisor",
          "Ineptitud sobrevenida del trabajador"
        ],
        respuestaCorrecta: 3,
        explicacion: "La ineptitud sobrevenida del trabajador puede justificar un despido objetivo según establece el artículo 52.a del Estatuto de los Trabajadores. Esta causa se refiere a la pérdida o disminución involuntaria de las condiciones y capacidades necesarias para realizar adecuadamente el trabajo. La ineptitud debe ser posterior al inicio de la relación laboral o, si es anterior, debe haberse descubierto con posterioridad a la contratación y no haber sido conocida por el empresario. Debe afectar a las tareas fundamentales de su puesto y tener cierta permanencia (no meramente circunstancial). El despido objetivo por ineptitud sobrevenida genera derecho a una indemnización de 20 días de salario por año trabajado, con un máximo de 12 mensualidades. Las opiniones políticas están protegidas por el derecho a la libertad ideológica y no pueden justificar un despido. El cambio de domicilio del empresario no es causa de despido objetivo. El mero desacuerdo con el supervisor tampoco constituye causa legal de despido objetivo, salvo que derive en incumplimientos graves del trabajador que pudieran motivar un despido disciplinario."
      },
      {
        id: 10010,
        moduloId: 610,
        pregunta: "¿Qué derecho se conserva durante una excedencia por cuidado de hijo?",
        opciones: [
          "Reserva del puesto de trabajo durante tres años",
          "Reserva del puesto de trabajo durante dos años",
          "Reserva del puesto de trabajo durante un año",
          "Reserva del puesto de trabajo durante cuatro años"
        ],
        respuestaCorrecta: 0,
        explicacion: "Durante una excedencia por cuidado de hijo se conserva la reserva del puesto de trabajo durante tres años. Esta regulación se encuentra en el artículo 46.3 del Estatuto de los Trabajadores, que establece: 'Los trabajadores tendrán derecho a un periodo de excedencia de duración no superior a tres años para atender al cuidado de cada hijo, tanto cuando lo sea por naturaleza, como por adopción, o en los supuestos de guarda con fines de adopción o acogimiento permanente'. El mismo artículo específica que 'durante el primer año tendrá derecho a la reserva de su puesto de trabajo. Transcurrido dicho plazo, la reserva quedará referida a un puesto de trabajo del mismo grupo profesional o categoría equivalente'. Este periodo de reserva se amplía cuando se trata de una familia numerosa: hasta 15 meses en categoría general y 18 meses en categoría especial. Todo el periodo de excedencia es computable a efectos de antigüedad y el trabajador tiene derecho a asistir a cursos de formación profesional. Además, durante este tiempo, se mantiene la consideración de situación asimilada al alta a efectos de las prestaciones de la Seguridad Social."
      },
      {
        id: 10011,
        moduloId: 610,
        pregunta: "¿Cuál es un efecto del despido nulo?",
        opciones: [
          "Indemnización máxima sin readmisión",
          "Readmisión inmediata del trabajador y pago de salarios de tramitación",
          "Despido sin indemnización",
          "Recolocación automática"
        ],
        respuestaCorrecta: 1,
        explicacion: "Un efecto del despido nulo es la readmisión inmediata del trabajador y el pago de los salarios de tramitación. Según establece el artículo 55.6 del Estatuto de los Trabajadores, 'el despido nulo tendrá el efecto de la readmisión inmediata del trabajador, con abono de los salarios dejados de percibir'. Esto significa que la declaración de nulidad supone la obligación empresarial de reincorporar al trabajador en las mismas condiciones que tenía antes del despido, considerándose que la relación laboral nunca se interrumpió, y debiendo abonarle los salarios dejados de percibir desde la fecha del despido hasta la de readmisión efectiva (salarios de tramitación). La nulidad se produce cuando el despido tiene como móvil alguna causa de discriminación prohibida o se produce con violación de derechos fundamentales, cuando afecta a trabajadores durante los períodos de suspensión del contrato por maternidad, paternidad, adopción, acogimiento, riesgo durante el embarazo o la lactancia natural, o durante ciertas situaciones relacionadas con el embarazo, la conciliación familiar o la violencia de género."
      },
      {
        id: 10012,
        moduloId: 610,
        pregunta: "¿Cuál es un objetivo del arbitraje laboral?",
        opciones: [
          "Permitir huelgas de larga duración",
          "Resolver el conflicto con una decisión vinculante sin ir a juicio",
          "Evitar toda comunicación entre las partes",
          "Permitir decisiones unilaterales del empleador"
        ],
        respuestaCorrecta: 1,
        explicacion: "Un objetivo fundamental del arbitraje laboral es resolver el conflicto con una decisión vinculante sin ir a juicio. El arbitraje es un procedimiento extrajudicial de solución de conflictos laborales regulado principalmente en el Real Decreto-Ley 5/1979 y desarrollado por los acuerdos interprofesionales sobre la materia (como el ASAC a nivel estatal). Su característica principal es que las partes en conflicto se someten voluntariamente a la decisión de un tercero neutral (árbitro o colegio arbitral), comprometiéndose de antemano a acatar su decisión (laudo arbitral), que tiene fuerza vinculante similar a una sentencia judicial y solo puede ser impugnada por motivos tasados. El arbitraje busca resolver conflictos de forma más rápida, especializada y menos costosa que la vía judicial. No persigue permitir huelgas prolongadas, sino al contrario, suele utilizarse como mecanismo para finalizar conflictos colectivos, incluyendo huelgas. Tampoco evita la comunicación entre las partes, pues el procedimiento arbitral incluye audiencia de ambas. Finalmente, no permite decisiones unilaterales del empleador, sino que garantiza la participación igualitaria de trabajadores y empresarios en la resolución del conflicto."
      },
      {
        id: 10013,
        moduloId: 610,
        pregunta: "¿Qué entidad interviene en la conciliación previa al juicio laboral?",
        opciones: [
          "Inspección de Hacienda",
          "Servicio de Mediación, Arbitraje y Conciliación (SMAC)",
          "Comité de Seguridad",
          "Ministerio de Economía"
        ],
        respuestaCorrecta: 1,
        explicacion: "La entidad que interviene en la conciliación previa al juicio laboral es el Servicio de Mediación, Arbitraje y Conciliación (SMAC), aunque actualmente en muchas Comunidades Autónomas recibe distintas denominaciones como parte de los servicios de resolución extrajudicial de conflictos laborales. Esta conciliación previa está regulada en los artículos 63 a 68 de la Ley 36/2011, Reguladora de la Jurisdicción Social, que establece como requisito previo para la tramitación del proceso judicial el intento de conciliación o mediación ante el servicio administrativo correspondiente o ante el órgano que asuma estas funciones en virtud de los acuerdos interprofesionales. El SMAC o entidad equivalente actúa como un organismo imparcial que intenta acercar las posturas de trabajador y empresario para lograr un acuerdo que evite el juicio. La conciliación debe intentarse en la mayoría de los procedimientos laborales (con algunas excepciones, como procesos de Seguridad Social). Lo acordado en conciliación tiene fuerza ejecutiva sin necesidad de ratificación judicial. La Inspección de Hacienda, el Comité de Seguridad y el Ministerio de Economía no tienen competencias en materia de conciliación laboral previa a juicio."
      },
      {
        id: 10014,
        moduloId: 610,
        pregunta: "¿Quién no puede afiliarse a un sindicato según la ley?",
        opciones: [
          "Funcionarios",
          "Miembros de las Fuerzas Armadas",
          "Delegados sindicales",
          "Inspectores de trabajo"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los miembros de las Fuerzas Armadas no pueden afiliarse a un sindicato según la ley. Esta restricción está contemplada en el artículo 1.3 de la Ley Orgánica 11/1985, de Libertad Sindical, que establece que quedan exceptuados del ejercicio del derecho de libertad sindical 'los miembros de las Fuerzas Armadas y de los Institutos Armados de carácter militar'. Esta limitación responde a los principios de jerarquía, disciplina y unidad que rigen estas instituciones. Sin embargo, estos colectivos pueden crear asociaciones profesionales para la defensa de sus intereses profesionales, según su normativa específica. Los funcionarios públicos sí pueden afiliarse a sindicatos, derecho reconocido expresamente en el artículo 1.2 de la misma ley. Los delegados sindicales, por definición, son miembros de sindicatos y representan a los afiliados en la empresa. Los inspectores de trabajo, como funcionarios públicos, también tienen derecho a la libertad sindical. Respecto a los miembros de cuerpos sometidos a disciplina militar, existe jurisprudencia del Tribunal Constitucional que ha matizado esta limitación para ciertos cuerpos como la Guardia Civil."
      },
      {
        id: 10015,
        moduloId: 610,
        pregunta: "¿Qué tipo de huelga se considera ilegal?",
        opciones: [
          "Huelga por motivos políticos ajenos al interés profesional",
          "Huelga general con aviso legal",
          "Huelga por mejores salarios",
          "Huelga parcial con comité de huelga"
        ],
        respuestaCorrecta: 0,
        explicacion: "La huelga por motivos políticos ajenos al interés profesional se considera ilegal. Según el artículo 11 del Real Decreto-Ley 17/1977, sobre relaciones de trabajo, son ilegales 'las huelgas políticas o con cualquier otra finalidad ajena al interés profesional de los trabajadores afectados'. Las huelgas son un instrumento de presión de los trabajadores para defender sus intereses laborales y profesionales, no para promover intereses políticos ajenos al ámbito laboral. Una huelga general con aviso legal (comunicada a la autoridad competente con la antelación mínima de 5 días o el plazo específico fijado para servicios esenciales) que persiga la defensa de intereses de los trabajadores es legal, aunque tenga implicaciones políticas indirectas. Las huelgas por mejoras salariales son plenamente legales, al buscar mejores condiciones laborales. Las huelgas parciales (que afectan solo a parte de la plantilla o a determinados departamentos) también son legales si cumplen los requisitos formales, incluida la constitución del comité de huelga como órgano representativo de los trabajadores durante el conflicto."
      },
      {
        id: 10016,
        moduloId: 610,
        pregunta: "¿Qué es la movilidad geográfica según el Estatuto de los Trabajadores?",
        opciones: [
          "Cambio de funciones dentro de la empresa",
          "Cambio de centro de trabajo que implica cambio de residencia",
          "Modificación del salario sin aviso",
          "Turno rotativo temporal"
        ],
        respuestaCorrecta: 1,
        explicacion: "La movilidad geográfica según el Estatuto de los Trabajadores es el cambio de centro de trabajo que implica cambio de residencia. Esta figura está regulada en el artículo 40 del ET y comprende tanto traslados (cambios definitivos o superiores a 12 meses en un período de 3 años) como desplazamientos temporales (cambios no permanentes inferiores a ese plazo). Para que se considere movilidad geográfica, el cambio de centro de trabajo debe exigir que el trabajador cambie su residencia habitual. Si el cambio de centro no requiere cambio de domicilio, se trata de un mero ejercicio del poder de dirección empresarial. La movilidad geográfica debe estar justificada por razones económicas, técnicas, organizativas o de producción, o contrataciones referidas a la actividad empresarial. Existen procedimientos específicos para cada tipo de movilidad geográfica, con distintos plazos de preaviso, y el trabajador tiene ciertos derechos compensatorios (gastos propios y de familiares) y, en caso de traslados, derecho a optar entre el traslado con compensación de gastos, la extinción del contrato con indemnización de 20 días por año trabajado, o la impugnación judicial de la decisión."
      },
      {
        id: 10017,
        moduloId: 610,
        pregunta: "¿Cuál es una característica de la movilidad funcional fuera del grupo profesional?",
        opciones: [
          "Debe aplicarse solo en festivos",
          "No requiere formación específica",
          "Debe ser temporal y estar justificada",
          "Se mantiene siempre el mismo salario"
        ],
        respuestaCorrecta: 2,
        explicacion: "Una característica fundamental de la movilidad funcional fuera del grupo profesional es que debe ser temporal y estar justificada. Según el artículo 39.2 del Estatuto de los Trabajadores, la movilidad funcional para la realización de funciones, tanto superiores como inferiores, no correspondientes al grupo profesional solo será posible si existen, además, razones técnicas u organizativas que la justifiquen y por el tiempo imprescindible para su atención. Esta movilidad extraordinaria está sujeta a limitaciones temporales (debe ser por el tiempo imprescindible) y causales (debe responder a necesidades perentorias o imprevisibles), a diferencia de la movilidad dentro del mismo grupo profesional, que forma parte del poder de dirección ordinario del empresario. Además, el empresario debe comunicar esta decisión a los representantes de los trabajadores. No es cierto que deba aplicarse solo en festivos; puede implementarse en cualquier momento si está justificada. Sí requiere atender a las titulaciones académicas o profesionales necesarias para el desempeño de las nuevas funciones. En cuanto al salario, si se realizan funciones superiores, el trabajador tiene derecho a la retribución correspondiente a las funciones efectivamente realizadas."
      },
      {
        id: 10018,
        moduloId: 610,
        pregunta: "¿Qué plazo mínimo debe respetar una empresa para notificar una modificación sustancial individual?",
        opciones: [
          "5 días",
          "15 días",
          "30 días",
          "48 horas"
        ],
        respuestaCorrecta: 1,
        explicacion: "El plazo mínimo que debe respetar una empresa para notificar una modificación sustancial individual es de 15 días. Este plazo está establecido en el artículo 41.3 del Estatuto de los Trabajadores, que indica que 'la decisión de modificación sustancial de condiciones de trabajo de carácter individual deberá ser notificada por el empresario al trabajador afectado y a sus representantes legales con una antelación mínima de quince días a la fecha de su efectividad'. Este preaviso es obligatorio y tiene como finalidad que el trabajador pueda conocer con antelación suficiente el cambio en sus condiciones laborales y pueda tomar decisiones al respecto, ya que frente a una modificación sustancial individual, el trabajador tiene varias opciones: aceptarla, solicitar la extinción indemnizada del contrato si se trata de modificaciones del artículo 41.1 a), b), c), d) o f) que le causen perjuicio, o impugnarla judicialmente si considera que no se cumplen los requisitos legales. Este plazo de 15 días es específico para modificaciones individuales; para las de carácter colectivo, existe un procedimiento distinto que requiere un período de consultas previo."
      },
      {
        id: 10019,
        moduloId: 610,
        pregunta: "¿Qué tipo de excedencia requiere que el trabajador haya sido elegido para un cargo público?",
        opciones: [
          "Voluntaria",
          "Por cuidado de hijos",
          "Por cuidado de familiares",
          "Forzosa"
        ],
        respuestaCorrecta: 3,
        explicacion: "La excedencia forzosa es la que requiere que el trabajador haya sido elegido para un cargo público. Según el artículo 46.1 del Estatuto de los Trabajadores, 'la excedencia forzosa, que dará derecho a la conservación del puesto y al cómputo de la antigüedad de su vigencia, se concederá por la designación o elección para un cargo público que imposibilite la asistencia al trabajo'. Esta modalidad de excedencia se caracteriza por ser un derecho del trabajador cuando concurre la causa legal (designación para cargo público), por mantener el derecho a la reserva del puesto de trabajo (no solo preferencia al reingreso) y por computar el tiempo de excedencia a efectos de antigüedad. El reingreso debe solicitarse dentro del mes siguiente al cese en el cargo público. La excedencia voluntaria no requiere justificación específica. Las excedencias por cuidado de hijos o por cuidado de familiares están vinculadas a situaciones de cuidado de menores o familiares dependientes, no al desempeño de cargos públicos."
      },
      {
        id: 10020,
        moduloId: 610,
        pregunta: "¿Cuál es el plazo máximo de la excedencia voluntaria?",
        opciones: [
          "Seis meses",
          "Cinco años",
          "Dos años",
          "Tres años"
        ],
        respuestaCorrecta: 1,
        explicacion: "El plazo máximo de la excedencia voluntaria es de cinco años. Según establece el artículo 46.2 del Estatuto de los Trabajadores, 'el trabajador con al menos una antigüedad en la empresa de un año tiene derecho a que se le reconozca la posibilidad de situarse en excedencia voluntaria por un plazo no menor a cuatro meses y no mayor a cinco años'. Este período se configura como un límite máximo legal, aunque el trabajador puede solicitar una duración inferior dentro de los márgenes establecidos (entre cuatro meses y cinco años). Los convenios colectivos pueden mejorar esta regulación, estableciendo duraciones superiores o mejores condiciones para el reingreso. Es importante diferenciar la excedencia voluntaria de otros tipos como la excedencia por cuidado de hijos (máximo tres años) o por cuidado de familiares (máximo dos años), que tienen regulación específica en el artículo 46.3 ET. Una vez finalizado el período inicialmente solicitado, el trabajador puede solicitar prórroga de la excedencia, siempre que en total no supere el límite máximo legal de cinco años, salvo mejora por convenio colectivo."
      },
      {
        id: 10021,
        moduloId: 610,
        pregunta: "¿Qué debe justificar una empresa para efectuar un traslado?",
        opciones: [
          "Decisión empresarial",
          "Razones económicas, técnicas, organizativas o de producción",
          "Razones económicas, exclusivamente",
          "Razones de producción, exclusivamente"
        ],
        respuestaCorrecta: 1,
        explicacion: "Una empresa debe justificar razones económicas, técnicas, organizativas o de producción para efectuar un traslado. Esta exigencia viene establecida en el artículo 40.1 del Estatuto de los Trabajadores, que indica que 'el traslado de trabajadores que no hayan sido contratados específicamente para prestar sus servicios en empresas con centros de trabajo móviles o itinerantes a un centro de trabajo distinto de la misma empresa que exija cambios de residencia requerirá la existencia de razones económicas, técnicas, organizativas o de producción que lo justifiquen'. El mismo artículo aclara que 'se considerarán tales las que estén relacionadas con la competitividad, productividad u organización técnica o del trabajo en la empresa, así como las contrataciones referidas a la actividad empresarial'. No basta con la mera decisión empresarial sin justificación causal. Tampoco se limita exclusivamente a razones económicas o exclusivamente a razones de producción, sino que puede fundamentarse en cualquiera de las cuatro causas mencionadas, o en una combinación de ellas, siempre que estén debidamente acreditadas y respondan a necesidades empresariales objetivas."
      },
    ]
  };

  export default moduloUnidadSiete;