/**
 * Datos del módulo Unidad Seis perteneciente a la asignatura de ITP.
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
export const moduloUnidadSeis = {
    id: 609,
    nombre: "Test Unidad 6",
    esExamen: false,
    asignaturaId: 6,
    descripcion: "Jornada laboral, salario y nómina: aspectos fundamentales sobre tiempo de trabajo, remuneración y documentación laboral en el marco jurídico español.",
    preguntas: [
      {
        id: 9901,
        moduloId: 609,
        pregunta: "¿Cuál es, actualmente, la duración máxima de la jornada laboral ordinaria semanal en España?",
        opciones: [
          "35 horas",
          "45 horas",
          "40 horas",
          "38 horas"
        ],
        respuestaCorrecta: 2,
        explicacion: "La duración máxima de la jornada laboral ordinaria semanal en España es de 40 horas. Así lo establece el artículo 34.1 del Estatuto de los Trabajadores: \"La duración máxima de la jornada ordinaria de trabajo será de cuarenta horas semanales de trabajo efectivo de promedio en cómputo anual\". Esta formulación permite cierta flexibilidad en la distribución del tiempo de trabajo, siempre que en cómputo anual no se supere dicho máximo de 40 horas semanales. Los convenios colectivos pueden establecer una jornada inferior (como ocurre en muchos sectores), pero nunca superior. Es importante señalar que este límite afecta a la jornada ordinaria; las horas extraordinarias tienen su propia regulación y límites específicos. Esta duración máxima de 40 horas semanales está en línea con la Directiva 2003/88/CE del Parlamento Europeo y del Consejo, relativa a determinados aspectos de la ordenación del tiempo de trabajo, y busca garantizar condiciones de trabajo que protejan la salud y seguridad de los trabajadores."
      },
      {
        id: 9902,
        moduloId: 609,
        pregunta: "¿Cuánto tiempo mínimo debe haber entre el final de una jornada y el comienzo de la siguiente?",
        opciones: [
          "10 horas",
          "12 horas",
          "14 horas",
          "8 horas"
        ],
        respuestaCorrecta: 1,
        explicacion: "El tiempo mínimo que debe haber entre el final de una jornada y el comienzo de la siguiente es de 12 horas. Esta previsión está contenida en el artículo 34.3 del Estatuto de los Trabajadores, que establece: \"Entre el final de una jornada y el comienzo de la siguiente mediarán, como mínimo, doce horas\". Este periodo de descanso diario es obligatorio y tiene como finalidad garantizar que el trabajador disponga de un tiempo suficiente para su recuperación física y mental, así como para atender a sus necesidades personales y familiares. Este descanso entre jornadas es irrenunciable y no puede ser compensado económicamente. Existen algunas excepciones en sectores específicos como el transporte, la marina mercante o la sanidad, donde puede establecerse un régimen especial de descansos, siempre que existan periodos equivalentes de descanso compensatorio. La vulneración de este tiempo mínimo de descanso constituye una infracción grave en materia de relaciones laborales, sancionable según la Ley sobre Infracciones y Sanciones en el Orden Social."
      },
      {
        id: 9903,
        moduloId: 609,
        pregunta: "¿A partir de cuántas horas de trabajo diario se debe otorgar un descanso mínimo de 15 minutos, a personas adultas?",
        opciones: [
          "4 horas",
          "6 horas",
          "5 horas",
          "7 horas"
        ],
        respuestaCorrecta: 1,
        explicacion: "A partir de 6 horas de trabajo diario se debe otorgar un descanso mínimo de 15 minutos a personas adultas. El artículo 34.4 del Estatuto de los Trabajadores establece: \"Siempre que la duración de la jornada diaria continuada exceda de seis horas, deberá establecerse un periodo de descanso durante la misma de duración no inferior a quince minutos\". Este descanso, conocido comúnmente como \"pausa\" o \"descanso para el bocadillo\", tiene como finalidad permitir al trabajador recuperarse durante la jornada laboral. En el caso de los trabajadores menores de 18 años, este descanso debe otorgarse cuando la jornada exceda de 4 horas y 30 minutos. Es importante señalar que este tiempo de descanso se considera tiempo de trabajo efectivo cuando así esté establecido o se establezca por convenio colectivo o contrato de trabajo; en caso contrario, no computará como jornada. Los convenios colectivos pueden mejorar esta regulación, estableciendo descansos de mayor duración o en jornadas más cortas, pero nunca reducir los mínimos legales."
      },
      {
        id: 9904,
        moduloId: 609,
        pregunta: "¿Cuál es el número máximo de horas extraordinarias permitidas al año?",
        opciones: [
          "80 horas",
          "120 horas",
          "100 horas",
          "60 horas"
        ],
        respuestaCorrecta: 0,
        explicacion: "El número máximo de horas extraordinarias permitidas al año es de 80 horas. Esta limitación viene establecida en el artículo 35.2 del Estatuto de los Trabajadores: \"El número de horas extraordinarias no podrá ser superior a ochenta al año\". Es importante destacar que este límite se refiere a las horas extraordinarias habituales o voluntarias, y no computan a estos efectos: 1) Las horas extraordinarias compensadas mediante descanso en los cuatro meses siguientes a su realización; 2) Las realizadas para prevenir o reparar siniestros y otros daños extraordinarios y urgentes (horas de fuerza mayor), que son obligatorias para el trabajador. El límite de 80 horas se aplica en proporción al tiempo efectivamente trabajado, por lo que en contratos a tiempo parcial o de duración inferior al año, el número máximo se reducirá proporcionalmente. La realización de horas extraordinarias es voluntaria para el trabajador (salvo pacto en convenio o contrato), deben registrarse día a día y totalizarse mensualmente, entregando copia del resumen al trabajador junto con el recibo de salarios. Superar el límite anual de 80 horas puede constituir una infracción grave en materia de relaciones laborales."
      },
      {
        id: 9905,
        moduloId: 609,
        pregunta: "¿Qué horario comprende el trabajo nocturno?",
        opciones: [
          "De 21:00 a 5:00",
          "De 00:00 a 6:00",
          "De 22:00 a 6:00",
          "De 20:00 a 4:00"
        ],
        respuestaCorrecta: 2,
        explicacion: "El trabajo nocturno comprende el horario de 22:00 a 6:00. Según el artículo 36.1 del Estatuto de los Trabajadores, \"se considera trabajo nocturno el realizado entre las diez de la noche y las seis de la mañana\". Esta definición legal tiene importantes implicaciones, ya que el trabajo nocturno está sujeto a una regulación especial debido a sus mayores exigencias y potenciales efectos sobre la salud. Entre estas especificidades destacan: 1) Se considera trabajador nocturno a quien realiza normalmente en periodo nocturno una parte no inferior a tres horas de su jornada diaria, o a quien se prevea que puede realizar en tal periodo una parte no inferior a un tercio de su jornada anual; 2) La jornada de los trabajadores nocturnos no puede exceder de 8 horas diarias de promedio en un periodo de referencia de 15 días; 3) Los trabajadores nocturnos no pueden realizar horas extraordinarias, salvo en supuestos excepcionales; 4) Este trabajo debe ser retribuido específicamente (plus de nocturnidad), salvo que el salario se haya establecido atendiendo a que el trabajo sea nocturno por su propia naturaleza o se haya acordado la compensación por descansos."
      },
      {
        id: 9906,
        moduloId: 609,
        pregunta: "¿Qué derecho tienen las trabajadoras víctimas de violencia de género respecto a la jornada laboral?",
        opciones: [
          "Derecho a jornada continua a su elección",
          "Días libres ilimitados",
          "Reducción o reordenación del tiempo de trabajo",
          "Jornada nocturna voluntaria"
        ],
        respuestaCorrecta: 2,
        explicacion: "Las trabajadoras víctimas de violencia de género tienen derecho a la reducción o reordenación del tiempo de trabajo. El artículo 37.8 del Estatuto de los Trabajadores establece que las trabajadoras víctimas de violencia de género o de terrorismo tendrán derecho, para hacer efectiva su protección o su derecho a la asistencia social integral, \"a la reducción de la jornada de trabajo con disminución proporcional del salario o a la reordenación del tiempo de trabajo, a través de la adaptación del horario, de la aplicación del horario flexible o de otras formas de ordenación del tiempo de trabajo que se utilicen en la empresa\". Estos derechos se concretarán en los términos establecidos en los convenios colectivos, acuerdos entre empresa y representantes de los trabajadores, o acuerdo entre empresa y trabajadora afectada. A falta de acuerdo, la trabajadora puede determinar estas adaptaciones, con los límites y procedimientos previstos en la normativa. Además de estos derechos relativos a la jornada, las víctimas también tienen derecho a la movilidad geográfica, a la suspensión del contrato con reserva de puesto (con derecho a prestación por desempleo) y a la extinción voluntaria del contrato con derecho a prestación por desempleo."
      },
      {
        id: 9907,
        moduloId: 609,
        pregunta: "¿Qué es el SMI?",
        opciones: [
          "Un impuesto especial",
          "Una subvención empresarial",
          "Una base de cotización específica",
          "El salario mínimo que debe recibir un trabajador por jornada completa"
        ],
        respuestaCorrecta: 3,
        explicacion: "El SMI (Salario Mínimo Interprofesional) es el salario mínimo que debe recibir un trabajador por jornada completa. Está regulado en el artículo 27 del Estatuto de los Trabajadores, que establece que \"el Gobierno fijará, previa consulta con las organizaciones sindicales y asociaciones empresariales más representativas, anualmente, el salario mínimo interprofesional\". El SMI determina la retribución mínima que debe percibir un trabajador por la jornada legal de trabajo, independientemente del sector en que trabaje, el tipo de contrato o su cualificación. Se fija en atención a factores como el IPC, la productividad media nacional, el incremento de la participación del trabajo en la renta nacional y la coyuntura económica general. El SMI puede establecerse por día, mes o año, y se aplica tanto a trabajadores fijos como eventuales o temporeros, así como a empleados de hogar. Ningún salario puede estar por debajo del SMI en cómputo anual, constituyendo un suelo de contratación irrenunciable. Los convenios colectivos y contratos individuales pueden fijar salarios superiores, pero nunca inferiores al SMI."
      },
      {
        id: 9908,
        moduloId: 609,
        pregunta: "¿Cuál es el porcentaje máximo que puede representar el salario en especie respecto al total salarial?",
        opciones: [
          "50%",
          "40%",
          "30%",
          "20%"
        ],
        respuestaCorrecta: 2,
        explicacion: "El porcentaje máximo que puede representar el salario en especie respecto al total salarial es del 30%. Esta limitación está establecida en el artículo 26.1 del Estatuto de los Trabajadores, que establece: \"En ningún caso, incluidas las relaciones laborales de carácter especial a que se refiere el artículo 2, el salario en especie podrá superar el 30 por 100 de las percepciones salariales del trabajador, ni dar lugar a la minoración de la cuantía íntegra en dinero del salario mínimo interprofesional\". El salario en especie consiste en la retribución no monetaria que el trabajador recibe por su trabajo, como pueden ser el uso de vivienda, vehículo, seguros médicos, planes de pensiones, formación, vales de comida, etc. Esta limitación del 30% busca garantizar que los trabajadores reciban la mayor parte de su salario en dinero efectivo, asegurando así su libre disposición y uso. Además, la segunda parte del precepto garantiza que el SMI debe percibirse íntegramente en dinero, sin que pueda verse reducido por las retribuciones en especie."
      },
      {
        id: 9909,
        moduloId: 609,
        pregunta: "¿Qué no se considera salario según el Estatuto de los Trabajadores?",
        opciones: [
          "Indemnizaciones por despido",
          "Salario base",
          "Complementos salariales",
          "Pagas extra"
        ],
        respuestaCorrecta: 0,
        explicacion: "Las indemnizaciones por despido no se consideran salario según el Estatuto de los Trabajadores. El artículo 26.1 del ET define el salario como \"la totalidad de las percepciones económicas de los trabajadores, en dinero o en especie, por la prestación profesional de los servicios laborales por cuenta ajena\". Sin embargo, el artículo 26.2 excluye expresamente del concepto de salario \"las cantidades percibidas por el trabajador en concepto de indemnizaciones o suplidos por los gastos realizados como consecuencia de su actividad laboral, las prestaciones e indemnizaciones de la Seguridad Social y las indemnizaciones correspondientes a traslados, suspensiones o despidos\". Esta distinción es relevante a efectos fiscales, de cotización a la Seguridad Social y para el cálculo de futuras indemnizaciones. El salario base, los complementos salariales y las pagas extraordinarias son percepciones salariales, es decir, retribución por el trabajo realizado. En cambio, las indemnizaciones por despido tienen carácter compensatorio por la pérdida del empleo, no retributivo por los servicios prestados, por lo que no se consideran salario."
      },
      {
        id: 9910,
        moduloId: 609,
        pregunta: "¿Qué entidad cubre salarios e indemnizaciones en caso de insolvencia empresarial?",
        opciones: [
          "SEPE",
          "INEM",
          "FOGASA",
          "Seguridad Social"
        ],
        respuestaCorrecta: 2,
        explicacion: "El FOGASA (Fondo de Garantía Salarial) es la entidad que cubre salarios e indemnizaciones en caso de insolvencia empresarial. Este organismo autónomo, adscrito al Ministerio de Trabajo y Economía Social, está regulado en el artículo 33 del Estatuto de los Trabajadores. Su finalidad principal es garantizar la percepción de salarios e indemnizaciones por despido o extinción de la relación laboral pendientes de pago a causa de insolvencia, suspensión de pagos, quiebra o concurso de acreedores del empresario. FOGASA abona los salarios pendientes de pago con un límite máximo de 120 días y con una cuantía máxima de 2 veces el SMI diario, incluyendo la parte proporcional de pagas extras. Respecto a las indemnizaciones, cubre un máximo de 30 días por año trabajado (o, en su caso, la cantidad legal fijada) con un límite de una anualidad y sin que el salario diario base del cálculo pueda exceder de 2 veces el SMI. FOGASA se financia principalmente con las cotizaciones empresariales (actualmente el 0,2% de la base de contingencias profesionales) y, tras abonar las cantidades a los trabajadores, se subroga en los derechos y acciones de éstos frente a la empresa."
      },
      {
        id: 9911,
        moduloId: 609,
        pregunta: "¿Cuál es una percepción no salarial?",
        opciones: [
          "Salario base",
          "Horas extra",
          "Dietas por desplazamiento",
          "Pagas extraordinarias"
        ],
        respuestaCorrecta: 2,
        explicacion: "Las dietas por desplazamiento constituyen una percepción no salarial. Según el artículo 26.2 del Estatuto de los Trabajadores, \"no tendrán la consideración de salario las cantidades percibidas por el trabajador en concepto de indemnizaciones o suplidos por los gastos realizados como consecuencia de su actividad laboral\". Las dietas por desplazamiento son precisamente suplidos o compensaciones que el empresario abona al trabajador para resarcirle de los gastos que debe realizar al tener que desplazarse fuera de su lugar habitual de trabajo. No retribuyen la prestación de servicios (como sí lo hacen el salario base, las horas extra o las pagas extraordinarias), sino que compensan un gasto realizado por el trabajador en interés de la empresa. Esta distinción tiene importantes consecuencias prácticas: las percepciones no salariales están exentas de cotización a la Seguridad Social hasta ciertos límites, reciben un tratamiento fiscal específico y no se computan para el cálculo de indemnizaciones, lo que no ocurre con los conceptos salariales, que sí están sujetos a cotización, tributación y computan para el cálculo de indemnizaciones."
      },
      {
        id: 9912,
        moduloId: 609,
        pregunta: "¿Qué incluye el encabezamiento de una nómina?",
        opciones: [
          "Solo el nombre del trabajador",
          "Datos del trabajador y de la empresa",
          "Devengos",
          "Base de cotización"
        ],
        respuestaCorrecta: 1,
        explicacion: "El encabezamiento de una nómina incluye los datos del trabajador y de la empresa. Según la Orden de 27 de diciembre de 1994, por la que se aprueba el modelo de recibo individual de salarios, el encabezamiento o cabecera de la nómina debe contener la siguiente información: 1) Datos de la empresa: denominación o razón social, domicilio, Código de Identificación Fiscal (CIF) y código de cuenta de cotización a la Seguridad Social; 2) Datos del trabajador: nombre y apellidos, Número de Identificación Fiscal (NIF) o Número de Identidad de Extranjero (NIE), número de afiliación a la Seguridad Social, antigüedad, grupo profesional o categoría, y grupo de cotización. También debe incluir el periodo de liquidación al que corresponde la nómina (mes y año, o periodo inferior si es el caso) y los días naturales que comprende. Estos datos son esenciales para identificar correctamente a las partes de la relación laboral y el periodo al que corresponde la retribución. Los devengos (cantidades que el trabajador gana) y las bases de cotización aparecen en secciones posteriores de la nómina, no en el encabezamiento."
      },
      {
        id: 9913,
        moduloId: 609,
        pregunta: "¿Qué impuesto se descuenta del salario en la nómina?",
        opciones: [
          "IVA",
          "Impuesto de Sociedades",
          "IRPF",
          "ISI"
        ],
        respuestaCorrecta: 2,
        explicacion: "El impuesto que se descuenta del salario en la nómina es el IRPF (Impuesto sobre la Renta de las Personas Físicas). Este impuesto grava la renta obtenida por las personas físicas, incluyendo los rendimientos del trabajo como los salarios. En la relación laboral, el empresario actúa como retenedor, descontando un porcentaje del salario bruto del trabajador y abonándolo directamente a la Agencia Tributaria como anticipo de la liquidación anual del IRPF que posteriormente deberá realizar el trabajador. El porcentaje de retención varía en función de las circunstancias personales y familiares del trabajador, así como de sus ingresos previstos para el año, siguiendo las tablas aprobadas anualmente. Las cotizaciones a la Seguridad Social, aunque también se descuentan del salario, no son un impuesto sino aportaciones al sistema de Seguridad Social. El IVA es un impuesto indirecto que grava el consumo; el Impuesto de Sociedades grava los beneficios de las personas jurídicas, no los rendimientos del trabajo; y el ISI no existe en el sistema tributario español."
      },
      {
        id: 9914,
        moduloId: 609,
        pregunta: "En caso de desacuerdo entre el trabajador y el jefe, cuál es el límite que se puede redistribuir irregularmente una jornada?",
        opciones: [
          "Jornada nocturna",
          "Jornada a turnos",
          "Jornada ordinaria",
          "Jornada parcial"
        ],
        respuestaCorrecta: 2,
        explicacion: "En caso de desacuerdo entre el trabajador y el jefe, el límite que se puede redistribuir irregularmente una jornada es la jornada ordinaria. Específicamente, el artículo 34.2 del Estatuto de los Trabajadores establece que \"mediante convenio colectivo o, en su defecto, por acuerdo entre la empresa y los representantes de los trabajadores, se podrá establecer la distribución irregular de la jornada a lo largo del año. En defecto de pacto, la empresa podrá distribuir de manera irregular a lo largo del año el diez por ciento de la jornada de trabajo\". Por tanto, en ausencia de acuerdo, el empresario puede distribuir irregularmente hasta un 10% de la jornada ordinaria anual, respetando siempre los descansos mínimos diarios (12 horas entre final de una jornada e inicio de la siguiente) y semanales (día y medio ininterrumpido). Esta facultad empresarial debe ejercerse con un preaviso mínimo de 5 días al trabajador afectado. La distribución irregular permite adaptar el tiempo de trabajo a las necesidades productivas, pudiendo establecer jornadas superiores a 9 horas diarias en momentos de mayor actividad, compensadas con jornadas inferiores en periodos de menor actividad, siempre que en cómputo anual se respete la jornada máxima legal o convencional."
      },
      {
        id: 9915,
        moduloId: 609,
        pregunta: "¿Qué documento acredita de forma detallada el salario que recibe un trabajador?",
        opciones: [
          "Contrato de trabajo",
          "Informe de vida laboral",
          "Nómina",
          "Certificado de empresa"
        ],
        respuestaCorrecta: 2,
        explicacion: "La nómina es el documento que acredita de forma detallada el salario que recibe un trabajador. También conocida como recibo individual de salarios, está regulada en el artículo 29.1 del Estatuto de los Trabajadores y desarrollada por la Orden de 27 de diciembre de 1994, que establece su modelo oficial. La nómina debe reflejar claramente todos los conceptos retributivos y deducciones, incluyendo: 1) Datos identificativos del trabajador y la empresa; 2) Periodo de liquidación; 3) Devengos: salario base, complementos salariales, horas extraordinarias, gratificaciones, percepciones no salariales, etc.; 4) Deducciones: cotizaciones a la Seguridad Social, retenciones de IRPF, anticipos, etc.; 5) Líquido total a percibir; 6) Determinación de las bases de cotización a la Seguridad Social y la base sujeta a retención del IRPF. El empresario está obligado a entregar al trabajador este documento junto con el pago del salario. El contrato de trabajo establece las condiciones laborales, incluido el salario, pero no detalla las cantidades efectivamente percibidas cada mes. El informe de vida laboral recoge los periodos de cotización, no el salario detallado. El certificado de empresa se emite al finalizar la relación laboral para trámites de desempleo y otros."
      },
      {
        id: 9916,
        moduloId: 609,
        pregunta: "¿Cuál es el descanso mínimo semanal según el Estatuto de los Trabajadores en trabajadores mayores de 18 años?",
        opciones: [
          "1 día",
          "1 día y medio ininterrumpido",
          "2 días",
          "1 mañana"
        ],
        respuestaCorrecta: 1,
        explicacion: "El descanso mínimo semanal según el Estatuto de los Trabajadores para trabajadores mayores de 18 años es de 1 día y medio ininterrumpido. El artículo 37.1 del ET establece que \"los trabajadores tendrán derecho a un descanso mínimo semanal, acumulable por periodos de hasta catorce días, de día y medio ininterrumpido que, como regla general, comprenderá la tarde del sábado o, en su caso, la mañana del lunes y el día completo del domingo\". Este descanso mínimo es irrenunciable, aunque su distribución puede modificarse por convenio colectivo o contrato, pudiendo establecerse, por ejemplo, dos días completos o acumularse por periodos de hasta 14 días. En el caso de los menores de 18 años, el descanso semanal mínimo es de dos días ininterrumpidos. Existen regulaciones especiales para ciertos sectores como el comercio, hostelería o transportes, donde pueden establecerse regímenes específicos de descanso, siempre que se respeten los mínimos legales en cómputo anual. Este descanso semanal es independiente del descanso diario de 12 horas entre jornadas, y ambos deben respetarse conjuntamente."
      },
      {
        id: 9917,
        moduloId: 609,
        pregunta: "¿Qué componente de la nómina refleja lo que el trabajador cobra tras las deducciones?",
        opciones: [
          "Salario neto o líquido a percibir",
          "Salario bruto",
          "Devengo",
          "Complemento"
        ],
        respuestaCorrecta: 0,
        explicacion: "El componente de la nómina que refleja lo que el trabajador cobra tras las deducciones es el salario neto o líquido a percibir. Este concepto, que aparece habitualmente al final del recibo de salarios (nómina), representa la cantidad que efectivamente va a recibir el trabajador después de haberse practicado todas las deducciones sobre el salario bruto. El proceso de cálculo es el siguiente: 1) Se suman todos los devengos (salario base, complementos salariales, horas extraordinarias, plus de transporte, etc.) para obtener el salario bruto o total devengado; 2) A esa cantidad se le restan las deducciones correspondientes (cotizaciones a la Seguridad Social, retención del IRPF, anticipos, aportaciones a planes de pensiones, etc.); 3) El resultado es el líquido a percibir o salario neto, que es la cantidad que se abona finalmente al trabajador. Es importante distinguir entre el salario bruto, que es la suma total de percepciones antes de deducciones y sobre el que se calculan las bases de cotización y retención, y el salario neto, que es la cantidad que efectivamente llega al bolsillo del trabajador."
      },
      {
        id: 9918,
        moduloId: 609,
        pregunta: "¿Cuál es la función principal del FOGASA?",
        opciones: [
          "Ayudar a empresas en crisis",
          "Asignar subsidios por desempleo",
          "Garantizar pagos a trabajadores en caso de insolvencia empresarial",
          "Regular las bases de cotización"
        ],
        respuestaCorrecta: 2,
        explicacion: "La función principal del FOGASA (Fondo de Garantía Salarial) es garantizar pagos a trabajadores en caso de insolvencia empresarial. Este organismo autónomo, adscrito al Ministerio de Trabajo y Economía Social, está regulado en el artículo 33 del Estatuto de los Trabajadores y tiene como misión fundamental asegurar que los trabajadores perciban determinados salarios e indemnizaciones pendientes de pago a causa de la insolvencia, suspensión de pagos, quiebra o concurso de acreedores de la empresa. Específicamente, FOGASA abona: 1) Salarios pendientes de pago reconocidos en procedimiento concursal o sentencia judicial, con un máximo de 120 días y un límite cuantitativo de 2 veces el SMI diario con pagas extras; 2) Indemnizaciones reconocidas por despido o extinción de contrato, con un límite de una anualidad y un máximo diario de 2 veces el SMI. FOGASA no tiene entre sus funciones ayudar directamente a empresas en crisis (aunque excepcionalmente puede asumir parte de las indemnizaciones en empresas de menos de 25 trabajadores), ni asignar subsidios por desempleo (competencia del SEPE), ni regular las bases de cotización (competencia del Ministerio de Inclusión, Seguridad Social y Migraciones)."
      },
      {
        id: 9919,
        moduloId: 609,
        pregunta: "¿Cuánto puede reducirse la jornada por guarda legal?",
        opciones: [
          "Máximo 25%",
          "Solo una hora diaria",
          "Sin límite legal",
          "Entre un octavo y la mitad"
        ],
        respuestaCorrecta: 3,
        explicacion: "La jornada por guarda legal puede reducirse entre un octavo y la mitad. El artículo 37.6 del Estatuto de los Trabajadores establece que \"quien por razones de guarda legal tenga a su cuidado directo algún menor de doce años o una persona con discapacidad que no desempeñe una actividad retribuida tendrá derecho a una reducción de la jornada de trabajo diaria, con la disminución proporcional del salario entre, al menos, un octavo y un máximo de la mitad de la duración de aquélla\". Esta reducción es un derecho individual de los trabajadores, hombres o mujeres, y está pensada para facilitar la conciliación de la vida laboral y familiar. La concreción horaria y la determinación del periodo de disfrute corresponden al trabajador, dentro de su jornada ordinaria, aunque los convenios colectivos pueden establecer criterios para la concreción horaria en atención a los derechos de conciliación y las necesidades productivas y organizativas de la empresa. La reducción de jornada implica una disminución proporcional del salario y puede afectar a las bases de cotización a la Seguridad Social, aunque existen mecanismos para mitigar este impacto en determinadas prestaciones como la jubilación o la incapacidad permanente."
      },
      {
        id: 9920,
        moduloId: 609,
        pregunta: "¿Qué derecho tiene el trabajador para acudir a exámenes prenatales durante la jornada?",
        opciones: [
          "Permiso sin retribución",
          "Jornada reducida",
          "Permiso retribuido por el tiempo indispensable",
          "Excedencia"
        ],
        respuestaCorrecta: 2,
        explicacion: "El trabajador tiene derecho a un permiso retribuido por el tiempo indispensable para acudir a exámenes prenatales durante la jornada. Este derecho está recogido en el artículo 37.3.f del Estatuto de los Trabajadores, que establece que el trabajador, previo aviso y justificación, podrá ausentarse del trabajo, con derecho a remuneración, \"por el tiempo indispensable para la realización de exámenes prenatales y técnicas de preparación al parto y, en los casos de adopción, guarda con fines de adopción o acogimiento, para la asistencia a las preceptivas sesiones de información y preparación y para la realización de los preceptivos informes psicológicos y sociales previos a la declaración de idoneidad, siempre, en todos los casos, que deban tener lugar dentro de la jornada de trabajo\". Este permiso forma parte de las medidas de protección a la maternidad/paternidad y garantiza que el trabajador/a pueda cumplir con las obligaciones médicas y administrativas relacionadas con el embarazo, la adopción o el acogimiento sin perder salario. Es importante destacar que este permiso es por el tiempo estrictamente necesario (\"indispensable\") y que se requiere aviso previo al empresario y justificación posterior."
      },
      {
        id: 9921,
        moduloId: 609,
        pregunta: "¿Cuál es la base de cotización por horas extra voluntarias para el trabajador?",
        opciones: [
          "2%",
          "4.7%",
          "12%",
          "0%"
        ],
        respuestaCorrecta: 1,
        explicacion: "La base de cotización por horas extra voluntarias para el trabajador es del 4.7%. Según la Ley General de la Seguridad Social y la Orden anual por la que se desarrollan las normas legales de cotización, las horas extraordinarias tienen un tratamiento específico en la cotización a la Seguridad Social. Se distingue entre horas extraordinarias por fuerza mayor (motivadas por siniestros, catástrofes, etc.) y el resto de horas extraordinarias (voluntarias o normales). Para las horas extraordinarias voluntarias o normales, el tipo de cotización es del 28,3% total, del cual un 23,6% corresponde a la empresa y un 4,7% al trabajador. Este porcentaje se aplica sobre la base de cotización por horas extraordinarias, que está constituida por el valor de las remuneraciones percibidas por este concepto. La cotización por horas extraordinarias es adicional a la cotización ordinaria por contingencias comunes y profesionales. Esta cotización específica busca desincentivar el uso de horas extraordinarias y promover la creación de empleo, además de financiar las prestaciones contributivas del sistema de Seguridad Social."
      },
      {
        id: 9922,
        moduloId: 609,
        pregunta: "¿Qué jornada diaria no se puede superar salvo pacto en convenio colectivo?",
        opciones: [
          "10 horas",
          "9 horas",
          "8 horas",
          "7 horas"
        ],
        respuestaCorrecta: 1,
        explicacion: "La jornada diaria que no se puede superar salvo pacto en convenio colectivo es de 9 horas. Así lo establece el artículo 34.3 del Estatuto de los Trabajadores: \"El número de horas ordinarias de trabajo efectivo no podrá ser superior a nueve diarias, salvo que por convenio colectivo o, en su defecto, acuerdo entre la empresa y los representantes de los trabajadores, se establezca otra distribución del tiempo de trabajo diario, respetando en todo caso el descanso entre jornadas\". Esta limitación busca proteger la salud y seguridad de los trabajadores, evitando jornadas excesivamente largas que puedan provocar fatiga, estrés o accidentes. Es importante destacar que esta limitación afecta a la jornada ordinaria; las horas extraordinarias se computan aparte y tienen sus propios límites legales. También hay que subrayar que, mediante convenio colectivo o acuerdo entre empresa y representantes de los trabajadores, puede establecerse una jornada diaria superior a 9 horas, siempre que se respete el descanso mínimo entre jornadas (12 horas) y el límite de horas semanales y anuales. Para los menores de 18 años, la jornada diaria no puede exceder de 8 horas, incluyendo la formación."
      },
      {
        id: 9923,
        moduloId: 609,
        pregunta: "¿Qué incluye el concepto de devengos en la nómina?",
        opciones: [
          "Lo que se deduce de la nómina del trabajador",
          "Todo lo que el trabajador gana, como salario base y complementos",
          "Lo que se retiene en la nómina del trabajador",
          "Solo anticipos"
        ],
        respuestaCorrecta: 1,
        explicacion: "El concepto de devengos en la nómina incluye todo lo que el trabajador gana, como salario base y complementos. Según la Orden de 27 de diciembre de 1994, por la que se aprueba el modelo de recibo individual de salarios, los devengos comprenden todas las percepciones económicas del trabajador, tanto salariales como no salariales. Específicamente, los devengos incluyen: 1) Percepciones salariales: salario base, complementos salariales (personales, de puesto de trabajo, por calidad o cantidad de trabajo, etc.), horas extraordinarias, gratificaciones extraordinarias y salario en especie; 2) Percepciones no salariales: indemnizaciones o suplidos por gastos relacionados con el trabajo (plus de transporte, dietas, etc.), prestaciones e indemnizaciones de la Seguridad Social, indemnizaciones por traslados, suspensiones o despidos, y otras percepciones no salariales. Los devengos representan la parte positiva de la nómina, es decir, lo que el trabajador gana o percibe. Por el contrario, las deducciones (cotizaciones a la Seguridad Social, retenciones del IRPF, etc.) representan la parte negativa, lo que se resta de los devengos para obtener el líquido a percibir."
      },
      {
        id: 9924,
        moduloId: 609,
        pregunta: "¿Qué trabajadores tienen derecho a una hora por lactancia de hijos menores de 9 meses?",
        opciones: [
          "Solo las madres",
          "Ambos progenitores, si trabajan",
          "Solo en jornada completa",
          "Solo en empresas públicas"
        ],
        respuestaCorrecta: 1,
        explicacion: "Ambos progenitores, si trabajan, tienen derecho a una hora por lactancia de hijos menores de 9 meses. El artículo 37.4 del Estatuto de los Trabajadores establece que \"en los supuestos de nacimiento, adopción, guarda con fines de adopción o acogimiento, las personas trabajadoras tendrán derecho a una hora de ausencia del trabajo, que podrán dividir en dos fracciones, para el cuidado del lactante hasta que este cumpla nueve meses\". Este permiso se incrementa proporcionalmente en casos de parto, adopción o acogimiento múltiples. La reforma de 2019 (RDL 6/2019) transformó este derecho, antes reservado principalmente a las madres, en un derecho individual de cada progenitor, adoptante, guardador o acogedor. Esta reforma busca fomentar la corresponsabilidad en el cuidado de los hijos y eliminar la discriminación por razón de sexo. El permiso puede ejercerse de varias formas: ausentarse una hora durante la jornada, dividir esa hora en dos fracciones, o acumularlo en jornadas completas según lo previsto en convenio o acuerdo con la empresa. Cuando ambos progenitores ejercen este derecho con la misma duración y régimen, puede extenderse hasta los 12 meses, con reducción proporcional del salario a partir del noveno mes."
      },
      {
        id: 9925,
        moduloId: 609,
        pregunta: "¿Qué tipo de cotización cubre enfermedades profesionales?",
        opciones: [
          "Contingencias profesionales",
          "Contingencias comunes",
          "Desempleo",
          "Formación profesional"
        ],
        respuestaCorrecta: 0,
        explicacion: "El tipo de cotización que cubre enfermedades profesionales es el de contingencias profesionales. Según el Real Decreto Legislativo 8/2015, que aprueba el texto refundido de la Ley General de la Seguridad Social, y la Orden anual de cotización, las contingencias profesionales incluyen tanto los accidentes de trabajo como las enfermedades profesionales, entendiendo por estas últimas las contraídas a consecuencia del trabajo ejecutado por cuenta ajena, provocadas por la acción de elementos o sustancias específicos listados en el cuadro oficial de enfermedades profesionales (Real Decreto 1299/2006). La cotización por contingencias profesionales corre exclusivamente a cargo del empresario (no hay aportación del trabajador) y varía según la actividad económica de la empresa, conforme a una tarifa de primas vinculada al nivel de riesgo de cada actividad. Esta cotización financia prestaciones específicas de la Seguridad Social como la incapacidad temporal, incapacidad permanente, muerte y supervivencia derivadas de contingencias profesionales, así como actividades preventivas. Las contingencias comunes cubren enfermedad común y accidente no laboral; el desempleo financia las prestaciones por desempleo; y la formación profesional financia actividades formativas para trabajadores."
      },
      {
        id: 9926,
        moduloId: 609,
        pregunta: "¿Qué ocurre si el convenio no fija cómo compensar horas extra?",
        opciones: [
          "No se pagan",
          "El trabajador decide",
          "Se descuentan del salario",
          "Se compensan con descanso en los 4 meses siguientes"
        ],
        respuestaCorrecta: 3,
        explicacion: "Si el convenio no fija cómo compensar las horas extra, se compensan con descanso en los 4 meses siguientes. El artículo 35.1 del Estatuto de los Trabajadores establece que \"mediante convenio colectivo o, en su defecto, contrato individual, se optará entre abonar las horas extraordinarias en la cuantía que se fije, que en ningún caso podrá ser inferior al valor de la hora ordinaria, o compensarlas por tiempos equivalentes de descanso retribuido. En ausencia de pacto al respecto, se entenderá que las horas extraordinarias realizadas deberán ser compensadas mediante descanso dentro de los cuatro meses siguientes a su realización\". Esta disposición establece un criterio legal supletorio para los casos en que ni el convenio colectivo ni el contrato individual hayan previsto cómo compensar las horas extraordinarias, dando preferencia a la compensación mediante descanso sobre la compensación económica. El periodo de 4 meses es un plazo máximo legal, que puede ser ampliado por convenio colectivo. Las horas compensadas con descanso no computan para el límite máximo anual de 80 horas extraordinarias, lo que incentiva esta forma de compensación como mecanismo de reparto del trabajo y conciliación."
      },
      {
        id: 9927,
        moduloId: 609,
        pregunta: "¿Qué institución fija anualmente el Salario Mínimo Interprofesional?",
        opciones: [
          "FOGASA",
          "El Gobierno mediante Real Decreto",
          "El Banco de España",
          "Los sindicatos"
        ],
        respuestaCorrecta: 1,
        explicacion: "El Salario Mínimo Interprofesional (SMI) es fijado anualmente por el Gobierno mediante Real Decreto. Así lo establece el artículo 27.1 del Estatuto de los Trabajadores: \"El Gobierno fijará, previa consulta con las organizaciones sindicales y asociaciones empresariales más representativas, anualmente, el salario mínimo interprofesional\". Para la determinación del SMI, el Gobierno debe tener en cuenta factores como el índice de precios al consumo (IPC), la productividad media nacional, el incremento de la participación del trabajo en la renta nacional y la coyuntura económica general. Aunque el Gobierno debe consultar previamente con los agentes sociales (sindicatos y organizaciones empresariales), la decisión final le corresponde en exclusiva. El SMI se publica en el Boletín Oficial del Estado, normalmente a finales de diciembre de cada año para su aplicación desde el 1 de enero del año siguiente, aunque puede modificarse en cualquier momento del año. El FOGASA es un organismo que garantiza el pago de salarios e indemnizaciones en caso de insolvencia empresarial; el Banco de España es el banco central nacional; y los sindicatos, aunque participan en la consulta previa, no tienen potestad para fijar el SMI."
      },
      {
        id: 9928,
        moduloId: 609,
        pregunta: "¿Qué derecho tiene el trabajador cuando debe cumplir un deber público como votar?",
        opciones: [
          "Excedencia voluntaria",
          "Suspensión del contrato",
          "Permiso retribuido",
          "Reducción de jornada"
        ],
        respuestaCorrecta: 2,
        explicacion: "El trabajador tiene derecho a un permiso retribuido cuando debe cumplir un deber público como votar. El artículo 37.3.d del Estatuto de los Trabajadores establece que el trabajador, previo aviso y justificación, podrá ausentarse del trabajo, con derecho a remuneración, \"por el tiempo indispensable para el cumplimiento de un deber inexcusable de carácter público y personal, comprendido el ejercicio del sufragio activo\". Los deberes inexcusables de carácter público y personal incluyen, además del voto, actividades como participar como miembro de una mesa electoral, comparecer como testigo ante un tribunal, formar parte de un jurado, o ejercer cargo público representativo, entre otros. El permiso abarca el tiempo estrictamente necesario para cumplir con el deber, incluyendo el desplazamiento, y debe ser retribuido como si se tratara de trabajo efectivo. Para ejercer este derecho, el trabajador debe avisar previamente al empresario y posteriormente justificar su cumplimiento. La excedencia voluntaria supone una suspensión temporal del contrato para atender asuntos personales; la suspensión del contrato implica la interrupción temporal de las obligaciones principales; y la reducción de jornada disminuye el tiempo de trabajo y el salario proporcionalmente."
      },
      {
        id: 9929,
        moduloId: 609,
        pregunta: "¿Qué trabajadores pueden acceder a una reducción de jornada por cuidado de familiares?",
        opciones: [
          "Solo padres y madres",
          "Trabajadores con familiares hasta segundo grado sin actividad retribuida",
          "Empleados públicos únicamente",
          "Solo en casos de enfermedad terminal"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los trabajadores con familiares hasta segundo grado sin actividad retribuida pueden acceder a una reducción de jornada por cuidado de familiares. El artículo 37.6 del Estatuto de los Trabajadores establece que \"quien por razones de guarda legal tenga a su cuidado directo algún menor de doce años o una persona con discapacidad que no desempeñe una actividad retribuida tendrá derecho a una reducción de la jornada de trabajo diaria (...). Tendrá el mismo derecho quien precise encargarse del cuidado directo de un familiar, hasta el segundo grado de consanguinidad o afinidad, que por razones de edad, accidente o enfermedad no pueda valerse por sí mismo, y que no desempeñe actividad retribuida\". Esta reducción puede ser de entre un octavo y la mitad de la jornada, con la disminución proporcional del salario. Los familiares hasta segundo grado incluyen padres, hijos, abuelos, hermanos, nietos, suegros, yernos/nueras y cuñados. Es un derecho individual de todos los trabajadores, no limitado a padres/madres ni a empleados públicos, y aplicable a situaciones diversas, no solo enfermedades terminales. Su objetivo es facilitar la conciliación de la vida laboral y familiar, especialmente para el cuidado de personas dependientes."
      },
      {
        id: 9930,
        moduloId: 609,
        pregunta: "¿Qué derecho tiene el trabajador por traslado del domicilio habitual?",
        opciones: [
          "Ninguno",
          "1 día de permiso retribuido",
          "3 días no retribuidos",
          "Jornada reducida"
        ],
        respuestaCorrecta: 1,
        explicacion: "El trabajador tiene derecho a 1 día de permiso retribuido por traslado del domicilio habitual. Así lo establece el artículo 37.3.c del Estatuto de los Trabajadores, que reconoce el derecho del trabajador a ausentarse del trabajo, con derecho a remuneración, previo aviso y justificación, \"por traslado del domicilio habitual, un día\". Este permiso está pensado para que el trabajador pueda realizar la mudanza y los trámites asociados al cambio de domicilio. El día de permiso debe ser retribuido como si se tratara de trabajo efectivo y no puede ser compensado económicamente ni sustituido por días de vacaciones. Es importante distinguir este permiso, que corresponde cuando el trabajador decide voluntariamente cambiar su domicilio, de los derechos que asisten al trabajador cuando es la empresa quien decide su traslado a otro centro de trabajo que implique cambio de residencia (art. 40 ET), situación que genera derechos más amplios como compensación de gastos o incluso extinción indemnizada del contrato. Muchos convenios colectivos mejoran este derecho, ampliando el número de días de permiso en función de la distancia del traslado u otras circunstancias."
      }
    ]
  };

  export default moduloUnidadSeis;