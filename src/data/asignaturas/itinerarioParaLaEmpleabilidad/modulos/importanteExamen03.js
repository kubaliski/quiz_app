/**
 * Datos del Bloque 3 (Temas 7 y 8) perteneciente a la asignatura de ITP.
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
export const importanteExamen03 = {
  id: 607,
  nombre: "Preguntas importantes. Bloque 3 (Temas 7 y 8)",
  esExamen: true,
  asignaturaId: 6,
  descripcion: "Test de repaso de los puntos clave indicados para examen.",
  preguntas: [
    // ---- Tema 7. Modificaciones de la relación laboral. ----.
    {
      id: 6760,
      moduloId: 607,
      pregunta:
        "¿Qué dos modalidades de movilidad funcional contempla el Estatuto de los Trabajadores?",
      opciones: [
        "Ascendente y descendente.",
        "Superior e inferior.",
        "Total y parcial.",
        "Voluntaria y obligatoria.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "La movilidad funcional puede ser ascendente (asignar tareas de un grupo profesional superior) o descendente (de nivel inferior). Ha de respetar los límites del art. 39 ET: titulación adecuada, necesidad técnica u organizativa y duración temporal.",
    },
    {
      id: 6761,
      moduloId: 607,
      pregunta:
        "¿Cuál es el límite máximo para un desplazamiento temporal de trabajadores dentro del territorio nacional?",
      opciones: [
        "12 meses en un período de 3 años.",
        "12 meses en un período de 2 años.",
        "6 meses en un período de 3 años.",
        "6 meses en un período de 2 años.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Según el art. 40 ET, los desplazamientos que no superen 12 meses acumulados en 3 años se consideran temporales; si exceden ese tope, se tratarían como traslado.",
    },
    {
      id: 6762,
      moduloId: 607,
      pregunta:
        "¿Con cuánta antelación mínima debe comunicarse al trabajador un traslado definitivo?",
      opciones: [
        "Al menos 30 días antes.",
        "Al menos 20 días antes.",
        "Al menos 15 días antes.",
        "Al menos 3 meses antes.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "El art. 40 ET establece que la empresa debe preavisar con 30 días naturales antes de la fecha efectiva del traslado individual.",
    },
    {
      id: 6763,
      moduloId: 607,
      pregunta:
        "Indica cuál de los siguientes motivos legitima una modificación sustancial de las condiciones de trabajo.",
      opciones: [
        "Necesidades de competitividad, productividad u organización técnica o del trabajo.",
        "Solo razones técnicas.",
        "Exclusivamente negligencia del trabajador o del empresario.",
        "Las que disponga el contrato individual.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "El art. 41 ET permite la modificación sustancial cuando existan probadas causas económicas, técnicas, organizativas o de producción vinculadas a la competitividad o productividad de la empresa.",
    },
    {
      id: 6764,
      moduloId: 607,
      pregunta:
        "Si el contrato se extingue por causas objetivas (art. 52 ET), la indemnización que corresponde al trabajador es:",
      opciones: [
        "20 días de salario por año de servicio, con un máximo de 12 mensualidades.",
        "30 días de salario por año, con un máximo de 15 mensualidades.",
        "15 días de salario por año, con un máximo de 12 mensualidades.",
        "33 días de salario por año, con un máximo de 12 mensualidades.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Para extinciones objetivas (ineptitud, falta de adaptación, causas económicas, técnicas, organizativas o productivas) el ET fija 20 días por año trabajado hasta 12 mensualidades.",
    },
    {
      id: 6765,
      moduloId: 607,
      pregunta:
        "En un despido disciplinario, la resolución judicial puede declararlo:",
      opciones: [
        "Procedente, improcedente o nulo.",
        "Justificado, injustificado o ilegal.",
        "Solo procedente o improcedente.",
        "Válido, nulo o forzoso.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Conforme a los arts. 55-56 ET, el juez calificará el despido disciplinario como procedente, improcedente o nulo, con efectos distintos en cada caso.",
    },
    {
      id: 6766,
      moduloId: 607,
      pregunta:
        "Si el despido se declara improcedente, ¿qué opciones tiene el empresario?",
      opciones: [
        "Optar entre readmitir al trabajador o abonarle la indemnización legal.",
        "Pagar una multa administrativa o cerrar la empresa.",
        "Únicamente readmitir al trabajador.",
        "Ser sancionado penalmente e indemnizar al trabajador.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Art. 56 ET: ante el despido improcedente, la empresa puede elegir entre la readmisión (con abono de salarios de tramitación) o el pago de la indemnización correspondiente.",
    },
    {
      id: 6767,
      moduloId: 607,
      pregunta:
        "En caso de despido improcedente, la indemnización a favor del trabajador es de:",
      opciones: [
        "33 días de salario por año trabajado, con un máximo de 24 mensualidades.",
        "30 días de salario por año trabajado, con un máximo de 12 mensualidades.",
        "35 días de salario por año trabajado, con un máximo de 24 mensualidades.",
        "33 días de salario por año trabajado, con un máximo de 12 mensualidades.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Para contratos celebrados tras el 12‑2‑2012, la indemnización por despido improcedente es de 33 días por año con tope de 24 mensualidades (DT 5.ª ET).",
    },
    {
      id: 6768,
      moduloId: 607,
      pregunta:
        "Tras la sentencia que declara improcedente el despido, el empresario dispone de un plazo para optar entre readmitir o indemnizar. ¿Cuál es ese plazo?",
      opciones: [
        "5 días.",
        "10 días.",
        "15 días.",
        "Debe manifestarlo en el acto del juicio.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "El art. 56 ET concede al empresario 5 días hábiles desde la notificación de la sentencia para comunicar su opción; de no hacerlo, se entiende que opta por la readmisión.",
    },
    {
      id: 6769,
      moduloId: 607,
      pregunta:
        "¿Qué duración puede tener una excedencia voluntaria prevista en el art. 46.2 ET?",
      opciones: [
        "Mínimo 4 meses y máximo 5 años.",
        "Mínimo 6 meses y máximo 4 años.",
        "Mínimo 4 meses y máximo 3 años.",
        "Mínimo 6 meses y máximo 5 años.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "La excedencia voluntaria requiere al menos un año de antigüedad y puede solicitarse por un plazo de 4 meses a 5 años; no genera reserva de puesto, solo preferencia para reingresar en vacantes de igual o similar categoría (art. 46.2 ET).",
    },
    {
      id: 6770,
      moduloId: 607,
      pregunta:
        "¿Cómo se denomina la excedencia concedida por elección o designación para un cargo público que impide asistir al trabajo o por funciones sindicales de ámbito provincial o superior?",
      opciones: [
        "Excedencia forzosa.",
        "Excedencia por obligaciones públicas.",
        "Excedencia especial.",
        "Excedencia voluntaria.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "La excedencia forzosa (art. 46.1 ET) garantiza la reserva del puesto y el cómputo de antigüedad durante el tiempo que dure el desempeño del cargo público o sindical.",
    },
    {
      id: 6771,
      moduloId: 607,
      pregunta:
        "¿Qué duración tiene la excedencia forzosa regulada en el art. 46.1 ET?",
      opciones: [
        "Todo el tiempo que se ejerza el cargo público o sindical.",
        "Mínimo 4 meses y máximo 6 años.",
        "2 años como máximo.",
        "3 años como máximo.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "La excedencia forzosa coincide exactamente con la duración del mandato o cargo que la motiva, sin límite temporal; a su término el trabajador debe solicitar el reingreso en el plazo máximo de 30 días.",
    },
    {
      id: 6772,
      moduloId: 607,
      pregunta:
        "¿Cuál es el límite de duración para la excedencia por cuidado de cada hijo, por naturaleza, adopción o acogimiento?",
      opciones: [
        "Hasta 3 años.",
        "Hasta 2 años.",
        "Hasta 4 años.",
        "Hasta 5 años.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "El art. 46.3 ET concede hasta 3 años por cada hijo, computados desde su nacimiento o desde la resolución administrativa o judicial de adopción/acogimiento, con reserva del puesto el primer año.",
    },
    {
      id: 6773,
      moduloId: 607,
      pregunta:
        "¿Cuál es el plazo máximo de la excedencia para cuidado de familiares hasta segundo grado que no puedan valerse por sí mismos?",
      opciones: [
        "Hasta 3 años.",
        "Hasta 2 años.",
        "Hasta 4 años.",
        "Hasta 5 años.",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "El mismo art. 46.3 ET reconoce una excedencia de hasta 2 años para atender a familiares dependientes hasta segundo grado; se disfruta de forma continua o fraccionada.",
    },
    {
      id: 6774,
      moduloId: 607,
      pregunta:
        "A efectos de solicitar la extinción indemnizada del contrato por incumplimiento empresarial (art. 50 ET), se considera falta grave de pago:",
      opciones: [
        "Tres meses de impago o seis meses de retraso continuado en el abono del salario.",
        "Seis meses de impago o doce de retraso.",
        "Cuatro meses de impago u ocho de retraso.",
        "Dos meses de impago o cuatro de retraso.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "La jurisprudencia del TS equipara ‘grave incumplimiento’ a tres nóminas impagadas o retrasos reiterados durante, al menos, seis meses, legitimando al trabajador para rescindir el contrato con indemnización equivalente al despido improcedente.",
    },
    {
      id: 6775,
      moduloId: 607,
      pregunta:
        "¿Con cuántos días de preaviso debe comunicarse al trabajador un despido por causas objetivas?",
      opciones: ["15 días.", "10 días.", "5 días.", "30 días."],
      respuestaCorrecta: 0,
      explicacion:
        "El art. 53 ET exige preaviso escrito de 15 días naturales. Durante ese período el trabajador tiene derecho a una licencia retribuida de 6 horas semanales para buscar empleo.",
    },
    {
      id: 6776,
      moduloId: 607,
      pregunta:
        "En un despido objetivo, la indemnización que debe ponerse a disposición del trabajador junto con la carta es:",
      opciones: [
        "20 días de salario por año de servicio, con un máximo de 12 mensualidades.",
        "30 días de salario por año con un máximo de 12 mensualidades.",
        "20 días por año con un máximo de 10 mensualidades.",
        "15 días por año con un máximo de 6 mensualidades.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Conforme al art. 53 ET (en relación con el 52 ET), la extinción objetiva exige indemnizar con 20 días por año trabajado hasta 12 mensualidades, salvo empresas en concurso que pueden diferir el pago.",
    },
    {
      id: 6777,
      moduloId: 607,
      pregunta:
        "¿Cuál es el número máximo de miembros que puede integrar un comité de huelga?",
      opciones: [
        "12 personas como máximo.",
        "Al menos 12 personas.",
        "6 personas como máximo.",
        "Al menos 6 personas.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "El art. 3 del Real Decreto‑ley 17/1977 sobre Relaciones de Trabajo limita el comité de huelga a un máximo de 12 miembros, quienes representan a los trabajadores ante la empresa y la autoridad laboral.",
    },
    // ---- Tema 8. La Seguridad Social. ----.
    {
      id: 6778,
      moduloId: 607,
      pregunta:
        "¿Qué protege el sistema español de Seguridad Social, de acuerdo con el art. 41 CE y la Ley General de la Seguridad Social (LGSS 2015)?",
      opciones: [
        "Las contingencias comunes y profesionales de la ciudadanía.",
        "La seguridad personal de los trabajadores.",
        "Gastos de representación pública.",
        "Solo enfermedad o accidente laboral.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "La acción protectora de la Seguridad Social comprende contingencias comunes (enfermedad común, maternidad, etc.) y profesionales (accidente de trabajo y enfermedad profesional) para toda la población, conforme al art. 41 CE y al art. 42 LGSS.",
    },
    {
      id: 6779,
      moduloId: 607,
      pregunta: "¿Qué clases de cotización distingue la LGSS?",
      opciones: [
        "Regímenes contributivos y no contributivos.",
        "Comunes y específicas.",
        "Por cuenta ajena y por cuenta propia.",
        "Régimen general y regímenes especiales.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "El art. 2 LGSS diferencia entre el sistema contributivo (financiado por cotizaciones de empresas y trabajadores) y el no contributivo (financiado vía impuestos).",
    },
    {
      id: 6780,
      moduloId: 607,
      pregunta:
        "¿Cuál de los siguientes forma parte de un régimen especial de la Seguridad Social?",
      opciones: [
        "RETA (Régimen Especial de Trabajadores Autónomos), Régimen Especial de Trabajadores del Mar y MUFACE (Mutualidad General de Funcionarios Civiles del Estado).",
        "Solo RETA.",
        "Únicamente personas con incapacidad absoluta.",
        "Trabajadores por cuenta ajena.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Junto al Régimen General, la LGSS mantiene regímenes especiales (arts. 10‑13) para colectivos como autónomos (RETA), trabajadores del mar y mutualistas de la Administración (MUFACE, ISFAS, MUGEJU).",
    },
    {
      id: 6781,
      moduloId: 607,
      pregunta:
        "¿Qué entidad gestora centraliza el reconocimiento de la mayoría de prestaciones económicas de la Seguridad Social? (INSS)",
      opciones: [
        "INSS – Instituto Nacional de la Seguridad Social.",
        "IMSERSO – Instituto de Mayores y Servicios Sociales.",
        "TGSS – Tesorería General de la Seguridad Social.",
        "INSST – Instituto Nacional de Seguridad y Salud en el Trabajo.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "El INSS (art. 48 LGSS y RD 2583/1996) tramita y reconoce prestaciones como incapacidad temporal, jubilación, viudedad, etc.",
    },
    {
      id: 6782,
      moduloId: 607,
      pregunta:
        "¿Qué organismo gestiona las pensiones no contributivas y programas para personas mayores y dependientes? (IMSERSO)",
      opciones: [
        "INSS – Instituto Nacional de la Seguridad Social.",
        "IMSERSO – Instituto de Mayores y Servicios Sociales.",
        "TGSS – Tesorería General de la Seguridad Social.",
        "INSST – Instituto Nacional de Seguridad y Salud en el Trabajo.",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "El IMSERSO, adscrito al Ministerio de Derechos Sociales, gestiona pensiones no contributivas, turismo social y servicios de atención a la dependencia.",
    },
    {
      id: 6783,
      moduloId: 607,
      pregunta:
        "¿Qué función principal desempeña la TGSS, Tesorería General de la Seguridad Social?",
      opciones: [
        "Recaudar cotizaciones y gestionar la financiación del sistema.",
        "Conceder pensiones contributivas.",
        "Gestionar prestaciones de dependencia.",
        "Promover la prevención de riesgos laborales.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "La TGSS (arts. 70‑73 LGSS) es la ‘caja única’: afilia a empresas y trabajadores, recauda cuotas e ingresa los recursos financieros del sistema.",
    },
    {
      id: 6784,
      moduloId: 607,
      pregunta:
        "¿Qué organismo autónomo reconoce la prestación por desempleo y coordina las políticas activas de empleo? (SEPE)",
      opciones: [
        "INSS – Instituto Nacional de la Seguridad Social.",
        "IMSERSO – Instituto de Mayores y Servicios Sociales.",
        "SEPE – Servicio Público de Empleo Estatal.",
        "INSST – Instituto Nacional de Seguridad y Salud en el Trabajo.",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "El SEPE, regulado por el RD 1383/2008, gestiona las prestaciones por desempleo y coordina programas de inserción laboral.",
    },
    {
      id: 6785,
      moduloId: 607,
      pregunta:
        "¿Qué institución promueve la seguridad y salud en el trabajo proporcionando asistencia técnica? (INSST)",
      opciones: [
        "INSS – Instituto Nacional de la Seguridad Social.",
        "IMSERSO – Instituto de Mayores y Servicios Sociales.",
        "SEPE – Servicio Público de Empleo Estatal.",
        "INSST – Instituto Nacional de Seguridad y Salud en el Trabajo.",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "El INSST, creado por la Ley 31/1995 y regulado por el RD 577/2023, elabora guías y estudios para la prevención de riesgos laborales.",
    },
    {
      id: 6786,
      moduloId: 607,
      pregunta:
        "En caso de incapacidad temporal derivada de enfermedad común o accidente no laboral, ¿qué cuantía percibe la persona trabajadora?",
      opciones: [
        "60 % de la base reguladora del día 4.º al 20.º y 75 % desde el 21.º.",
        "75 % desde el día siguiente a la baja.",
        "60 % desde el día 4.º en todo caso.",
        "75 % desde el día siguiente en todo caso.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Arts. 169 y 172 LGSS: del día 4 al 20 → 60 % de la base reguladora; desde el 21 → 75 %. Los tres primeros días no se abonan salvo mejora convencional.",
    },
    {
      id: 6787,
      moduloId: 607,
      pregunta:
        "Para la incapacidad temporal por accidente de trabajo o enfermedad profesional, ¿qué prestación se abona?",
      opciones: [
        "60 % del día 4 al 20 y 75 % después.",
        "75 % de la base reguladora desde el día siguiente a la baja.",
        "60 % desde el día 4 siempre.",
        "75 % solo si hay hospitalización.",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Art. 173 LGSS: para contingencias profesionales, la cuantía es el 75 % de la base reguladora desde el día siguiente a la baja médica.",
    },
    {
      id: 6788,
      moduloId: 607,
      pregunta:
        "Según el art. 169 LGSS, ¿cuál es la duración máxima de la incapacidad temporal antes de pasar a prórroga o valoración de incapacidad permanente?",
      opciones: [
        "365 días, prorrogables 180 días si se prevé curación.",
        "365 días, improrrogables.",
        "6 meses.",
        "Mientras dure la baja médica.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "La IT dura 365 días y puede prorrogarse otros 180 días cuando se prevea recuperación en ese periodo; después se inicia expediente de incapacidad permanente o alta médica.",
    },
    {
      id: 6789,
      moduloId: 607,
      pregunta:
        "¿Qué prestación económica percibe la persona trabajadora declarada en Incapacidad Permanente Parcial derivada de contingencias comunes o profesionales?",
      opciones: [
        "Una indemnización a tanto alzado equivalente a 24 mensualidades de la base reguladora.",
        "Una pensión vitalicia del 55 % de la base reguladora.",
        "Una pensión vitalicia del 100 % de la base reguladora.",
        "Una pensión del 150 % de la base reguladora.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Art. 196 LGSS: la incapacidad permanente parcial no genera pensión, sino una indemnización única de 24 mensualidades de la base reguladora.",
    },
    {
      id: 6790,
      moduloId: 607,
      pregunta:
        "En la Incapacidad Permanente Total, ¿qué porcentaje de la base reguladora corresponde a la pensión ordinaria?",
      opciones: [
        "55 %, con posibilidad de incrementar al 75 % a partir de los 55 años si existe dificultad de colocación.",
        "75 % desde el reconocimiento, sin requisitos de edad.",
        "100 % de la base reguladora.",
        "24 mensualidades en pago único.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Art. 197 LGSS: la IPT genera pensión del 55 % de la base reguladora; si el beneficiario tiene 55 años o más y dificultades para acceder a empleo, se incrementa al 75 %.",
    },
    {
      id: 6791,
      moduloId: 607,
      pregunta:
        "Para la Incapacidad Permanente Absoluta, ¿cuál es la cuantía de la pensión sobre la base reguladora?",
      opciones: [
        "100 % de la base reguladora como pensión vitalicia.",
        "75 % de la base reguladora.",
        "55 % incrementable al 75 %.",
        "24 mensualidades de indemnización.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Art. 198 LGSS: la IPA da derecho a pensión vitalicia equivalente al 100 % de la base reguladora.",
    },
    {
      id: 6792,
      moduloId: 607,
      pregunta:
        "En caso de Gran Invalidez, además de la pensión del 100 % de la base reguladora, se abona:",
      opciones: [
        "Un complemento destinado a remunerar a la persona que asiste al gran inválido, calculado sumando el 45 % de la base mínima de cotización vigente más el 30 % de la última base de cotización del trabajador.",
        "Un complemento fijo de 55 % de la base reguladora.",
        "Una indemnización única de 12 mensualidades adicionales.",
        "Ningún complemento; solo la pensión del 100 %.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Art. 196.2 LGSS: la Gran Invalidez conlleva la pensión del 100 % de la base reguladora más un complemento para la persona cuidadora, calculado con el 45 % de la base mínima de cotización + 30 % de la última base del trabajador (no puede ser inferior al 45 % de la pensión reconocida).",
    },
    {
      id: 6793,
      moduloId: 607,
      pregunta:
        "¿Cuál es la prestación económica que recibe una trabajadora en situación de riesgo durante el embarazo cuando es apartada de su puesto de trabajo?",
      opciones: [
        "El 100 % de la base reguladora por contingencias profesionales, desde el día siguiente a la suspensión del contrato.",
        "El 75 % de la base reguladora por contingencias comunes, desde el día 4º de la suspensión.",
        "El 60 % de la base reguladora por contingencias profesionales, desde el día 4º de la suspensión.",
        "Una indemnización única de 24 mensualidades de la base reguladora.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Art. 186 LGSS: la prestación por riesgo durante el embarazo asciende al 100 % de la base reguladora de contingencias profesionales y se inicia al día siguiente de la suspensión del contrato o cambio de puesto.",
    },
    {
      id: 6794,
      moduloId: 607,
      pregunta:
        "En caso de riesgo durante la lactancia natural de un menor de 9 meses, la trabajadora percibirá:",
      opciones: [
        "El 100 % de la base reguladora por contingencias profesionales, desde el día siguiente a la suspensión del contrato.",
        "El 75 % de la base reguladora por contingencias comunes.",
        "El 55 % de la base reguladora con un máximo de 12 mensualidades.",
        "Una indemnización a tanto alzado de 24 mensualidades.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Art. 187 LGSS: la cuantía y el inicio de la prestación por riesgo durante la lactancia son idénticos a los del riesgo durante el embarazo: 100 % BR de contingencias profesionales desde el día siguiente a la suspensión.",
    },
    {
      id: 6795,
      moduloId: 607,
      pregunta:
        "Durante la prestación por nacimiento y cuidado de menor (anterior ‘maternidad / paternidad’), ¿qué porcentaje de la base reguladora perciben los progenitores?",
      opciones: [
        "El 100 % de la base reguladora por contingencias comunes durante las 16 semanas reconocidas.",
        "El 75 % de la base reguladora por contingencias profesionales durante 12 semanas.",
        "El 85 % de la base reguladora con posibilidad de ampliación hasta 18 semanas.",
        "El 100 % de la base reguladora durante 12 semanas y el 75 % las 4 restantes.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Arts. 179‑183 LGSS: la prestación por nacimiento y cuidado de menor cubre el 100 % de la base reguladora (contingencias comunes) durante 16 semanas para cada progenitor, siendo intransferibles las 6 primeras.",
    },
    {
      id: 6796,
      moduloId: 607,
      pregunta:
        "La prestación para las personas trabajadoras que reducen su jornada al menos un 50 % para el cuidado de menores afectados por cáncer u otra enfermedad grave consiste en:",
      opciones: [
        "Un subsidio equivalente al 100 % de la base reguladora proporcional a la reducción de jornada.",
        "Un subsidio fijo de 75 % de la base reguladora, sin atender al grado de reducción.",
        "Una indemnización única de 12 mensualidades de la base reguladora.",
        "Un subsidio del 60 % de la base reguladora durante un máximo de 12 meses.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Art. 190 LGSS: la prestación por cuidado de menores con cáncer u otra enfermedad grave cubre el 100 % de la base reguladora por contingencias profesionales, aplicando el porcentaje de reducción de jornada (mínimo 50 %). Duración máxima: hasta que el menor cumpla 18 años o se extinga la causa.",
    },
  ],
};
export default importanteExamen03;
