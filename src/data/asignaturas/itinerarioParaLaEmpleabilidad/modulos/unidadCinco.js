/**
 * Datos del módulo Unidad Cinco perteneciente a la asignatura de ITP.
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
export const moduloUnidadCinco = {
    id: 608,
    nombre: "Test Unidad 5 (Repaso)",
    esExamen: true,
    asignaturaId: 6,
    descripcion: "Aspectos fundamentales de la contratación laboral: modalidades de contratos, requisitos formales y características específicas en el marco jurídico español.",
    preguntas: [
      {
        id: 8801,
        moduloId: 608,
        pregunta: "¿Qué tipo de entidad es una persona jurídica?",
        opciones: [
          "Un ser humano con derechos y obligaciones",
          "Una entidad legal como empresa o asociación",
          "Un trabajador autónomo",
          "Un notario"
        ],
        respuestaCorrecta: 1,
        explicacion: "Una persona jurídica es una entidad legal como una empresa o asociación. A diferencia de la persona física (ser humano), la persona jurídica es una entidad creada por ley, que tiene personalidad jurídica propia, distinta de la de sus miembros o propietarios. Según el ordenamiento jurídico español, las personas jurídicas pueden ser de derecho público (como el Estado o los ayuntamientos) o de derecho privado (como sociedades mercantiles, asociaciones, fundaciones o cooperativas). Estas entidades tienen capacidad para ser titulares de derechos y obligaciones, pueden celebrar contratos, ser propietarias de bienes, demandar y ser demandadas, aunque siempre actúan a través de personas físicas que las representan. En el ámbito laboral, las personas jurídicas pueden ser empleadoras (empresas que contratan trabajadores) y están sujetas a las obligaciones que establece el Estatuto de los Trabajadores y demás normativa laboral para los empresarios."
      },
      {
        id: 8802,
        moduloId: 608,
        pregunta: "¿Qué incluye el contenido mínimo de un contrato de trabajo?",
        opciones: [
          "Fecha de nacimiento del empleador",
          "Identificación de las partes, retribución, duración, funciones",
          "Título universitario del trabajador",
          "Firma del delegado sindical"
        ],
        respuestaCorrecta: 1,
        explicacion: "El contenido mínimo de un contrato de trabajo incluye la identificación de las partes, retribución, duración y funciones. Según el artículo 8 del Estatuto de los Trabajadores, complementado por el Real Decreto 1659/1998, el contrato de trabajo debe informar al trabajador sobre los elementos esenciales de su relación laboral, que comprenden: identidad de las partes (datos del empresario y del trabajador); domicilio de la empresa; lugar de trabajo; categoría o grupo profesional y descripción del puesto o funciones; fecha de inicio y, en caso de contratos temporales, duración previsible; cuantía del salario base y complementos, así como periodicidad de su pago; duración y distribución de la jornada; vacaciones; plazos de preaviso en caso de extinción; y convenio colectivo aplicable. Estos elementos mínimos garantizan la seguridad jurídica y transparencia en la relación laboral. No son elementos esenciales datos personales no relevantes para la relación laboral (como la fecha de nacimiento del empleador), titulaciones no requeridas para el puesto, ni la firma del delegado sindical (que no es parte del contrato)."
      },
      {
        id: 8803,
        moduloId: 608,
        pregunta: "¿Según el estatuto de los trabajadores cuánto puede durar el periodo de prueba de un técnico titulado?",
        opciones: [
          "1 mes",
          "3 meses",
          "4 meses",
          "6 meses"
        ],
        respuestaCorrecta: 3,
        explicacion: "Según el Estatuto de los Trabajadores, el periodo de prueba de un técnico titulado puede durar hasta 6 meses. El artículo 14.1 del ET establece que \"en defecto de pacto en convenio, la duración del periodo de prueba no podrá exceder de seis meses para los técnicos titulados, ni de dos meses para los demás trabajadores\". Este periodo más extenso para técnicos titulados se justifica por la mayor complejidad y responsabilidad que suelen implicar estos puestos, requiriendo más tiempo para valorar adecuadamente la adaptación y competencia profesional del trabajador. Es importante destacar que esta duración es un máximo legal que opera en defecto de convenio colectivo, por lo que los convenios pueden establecer duraciones diferentes (nunca superiores a los límites legales). Además, en empresas con menos de 25 trabajadores, el periodo de prueba para trabajadores que no sean técnicos titulados puede ser de hasta 3 meses. Durante el periodo de prueba, cualquiera de las partes puede resolver la relación laboral sin necesidad de alegar causa, sin preaviso (salvo pacto) y sin indemnización."
      },
      {
        id: 8804,
        moduloId: 608,
        pregunta: "¿Qué entidad intermedia en una relación laboral a través de ETT?",
        opciones: [
          "El ministerio de trabajo",
          "La empresa de trabajo temporal",
          "El comité de empresa",
          "El trabajador autónomo"
        ],
        respuestaCorrecta: 1,
        explicacion: "La entidad que intermedia en una relación laboral a través de ETT es la empresa de trabajo temporal. Las ETT, reguladas por la Ley 14/1994, son empresas cuya actividad consiste en poner a disposición de otra empresa (llamada empresa usuaria) trabajadores contratados por la ETT, con carácter temporal. En esta relación triangular, la ETT contrata al trabajador (es el empleador formal, quien paga el salario y cotiza a la Seguridad Social) y lo cede temporalmente a la empresa usuaria, donde el trabajador presta efectivamente sus servicios bajo su dirección y control. La ETT debe estar autorizada administrativamente, constituir una garantía financiera y registrarse como tal. Esta intermediación permite a las empresas usuarias cubrir necesidades temporales de personal sin asumir directamente la contratación. El Ministerio de Trabajo tiene funciones de regulación y control, pero no de intermediación laboral directa. El comité de empresa es el órgano representativo de los trabajadores, no un intermediario. Y el trabajador autónomo presta servicios por cuenta propia, no como intermediario en relaciones laborales por cuenta ajena."
      },
      {
        id: 8805,
        moduloId: 608,
        pregunta: "¿Qué contrato permite contratar a un trabajador desempleado para sustituir a otro que se jubila parcialmente?",
        opciones: [
          "Temporal por producción",
          "Contrato de relevo",
          "Indefinido ordinario",
          "Fijo-discontinuo"
        ],
        respuestaCorrecta: 1,
        explicacion: "El contrato de relevo es el que permite contratar a un trabajador desempleado para sustituir a otro que se jubila parcialmente. Este contrato, regulado en el artículo 12.7 del Estatuto de los Trabajadores y en el Real Decreto 1131/2002, establece una vinculación directa entre la jubilación parcial de un trabajador (que reduce su jornada entre un 25% y un 50%, o hasta un 75% en ciertos casos) y la contratación simultánea de un trabajador en situación de desempleo o con contrato temporal en la empresa (relevista). El puesto del relevista puede ser el mismo del jubilado parcial o uno similar, y su jornada debe ser, como mínimo, igual a la reducción de jornada del jubilado parcial. Este contrato puede ser temporal (hasta que el jubilado parcial alcance la edad ordinaria de jubilación) o indefinido, y constituye una medida de fomento del empleo y renovación de plantillas, permitiendo la transferencia gradual de conocimientos y experiencia entre generaciones, mientras se garantiza el mantenimiento del empleo y la sostenibilidad del sistema de pensiones."
      },
      {
        id: 8806,
        moduloId: 608,
        pregunta: "¿Qué ocurre si se rompe el periodo de prueba por incapacidad temporal?",
        opciones: [
          "Se anula el contrato",
          "El empleador debe despedir",
          "El periodo se interrumpe si ambas partes están de acuerdo",
          "Se prolonga automáticamente 1 mes"
        ],
        respuestaCorrecta: 2,
        explicacion: "Si se rompe el periodo de prueba por incapacidad temporal (IT), el periodo se interrumpe si ambas partes están de acuerdo. El artículo 14.3 del Estatuto de los Trabajadores establece que \"las situaciones de incapacidad temporal, nacimiento, adopción, guarda con fines de adopción, acogimiento, riesgo durante el embarazo, riesgo durante la lactancia y violencia de género, que afecten a la persona trabajadora durante el periodo de prueba, interrumpen el cómputo del mismo siempre que se produzca acuerdo entre ambas partes\". Esto significa que el tiempo que el trabajador permanezca en IT no computará dentro del periodo de prueba, reanudándose el cómputo una vez finalice la situación de IT, pero solo si existe acuerdo expreso entre trabajador y empresario. No se produce una anulación del contrato, ni el empleador está obligado a despedir, ni se genera una prórroga automática de un mes. Esta regulación busca un equilibrio entre el derecho del trabajador a no ver perjudicada su situación por una contingencia de salud y el derecho del empresario a evaluar efectivamente las aptitudes del trabajador durante el tiempo inicialmente pactado."
      },
      {
        id: 8807,
        moduloId: 608,
        pregunta: "¿Quién debe comunicar al Servicio Público de Empleo los contratos firmados?",
        opciones: [
          "El trabajador",
          "El sindicato",
          "El empleador",
          "El notario"
        ],
        respuestaCorrecta: 2,
        explicacion: "El empleador es quien debe comunicar al Servicio Público de Empleo los contratos firmados. Según el artículo 8.3 del Estatuto de los Trabajadores, \"el empresario entregará a la representación legal de los trabajadores una copia básica de todos los contratos que deban celebrarse por escrito (...). Posteriormente, dicha copia básica se enviará a la oficina de empleo\". Este mismo artículo, en su apartado 4, establece que \"cualquiera que sea la forma de contratación, deberá comunicarse el contenido de los contratos de trabajo al Servicio Público de Empleo correspondiente, en el plazo de los diez días siguientes a su concertación\". Esta obligación recae exclusivamente sobre el empresario, no sobre el trabajador, el sindicato o el notario. La comunicación puede realizarse telemáticamente a través del sistema Contrat@. El incumplimiento de esta obligación constituye una infracción leve según la Ley sobre Infracciones y Sanciones en el Orden Social. El objetivo de esta comunicación es permitir un control administrativo sobre la contratación laboral, obtener datos estadísticos y verificar el cumplimiento de la normativa laboral."
      },
      {
        id: 8808,
        moduloId: 608,
        pregunta: "¿En qué plazo debe comunicarse un contrato al Servicio Público de Empleo?",
        opciones: [
          "5 días hábiles",
          "Al firmar el contrato",
          "Dentro de los 10 días siguientes",
          "En los primeros 3 días"
        ],
        respuestaCorrecta: 2,
        explicacion: "El plazo para comunicar un contrato al Servicio Público de Empleo es dentro de los 10 días siguientes a su concertación. Esta obligación viene establecida en el artículo 8.4 del Estatuto de los Trabajadores, que dispone: \"Cualquiera que sea la forma de contratación, deberá comunicarse el contenido de los contratos de trabajo al Servicio Público de Empleo correspondiente, en el plazo de los diez días siguientes a su concertación\". Este plazo de 10 días es de días hábiles (se excluyen domingos y festivos) y comienza a contar desde el día siguiente a la firma del contrato. La comunicación debe hacerse independientemente de que el contrato se haya formalizado por escrito o verbalmente, aunque en la práctica, para los verbales, se utiliza un modelo oficial. Actualmente, esta comunicación se realiza principalmente de forma telemática a través de la aplicación Contrat@ del SEPE. El incumplimiento de este plazo constituye una infracción leve en materia de relaciones laborales, sancionable según la Ley sobre Infracciones y Sanciones en el Orden Social."
      },
      {
        id: 8809,
        moduloId: 608,
        pregunta: "¿Qué información NO debe incluir la copia básica entregada a los representantes de los trabajadores?",
        opciones: [
          "Fecha de inicio",
          "Estado civil del trabajador",
          "Retribución",
          "Jornada laboral"
        ],
        respuestaCorrecta: 1,
        explicacion: "El estado civil del trabajador es la información que NO debe incluir la copia básica entregada a los representantes de los trabajadores. Según el artículo 8.4 del Estatuto de los Trabajadores, la copia básica debe contener todos los datos del contrato a excepción del número del documento nacional de identidad o de identidad de extranjero, el domicilio, el estado civil, y cualquier otro dato que pudiera afectar a la intimidad personal del interesado, de acuerdo con la Ley Orgánica 1/1982. La copia básica debe incluir información relevante para la verificación de la legalidad del contrato: modalidad contractual, fecha de inicio y duración (si es temporal), categoría o grupo profesional, retribución, jornada laboral, etc. Su finalidad es permitir a los representantes de los trabajadores comprobar la adecuación del contenido del contrato a la legalidad vigente, especialmente en lo referente a posibles discriminaciones. La exclusión del estado civil, junto con otros datos personales, busca proteger la privacidad del trabajador, en consonancia con la normativa de protección de datos, limitando el acceso a información que no es estrictamente necesaria para la función de control que ejercen los representantes."
      },
      {
        id: 8810,
        moduloId: 608,
        pregunta: "¿Qué contrato se usa para picos de producción?",
        opciones: [
          "De formación",
          "Eventual por circunstancias de la producción",
          "Fijo-discontinuo",
          "De grupo"
        ],
        respuestaCorrecta: 1,
        explicacion: "El contrato que se usa para picos de producción es el eventual por circunstancias de la producción. Este contrato temporal, regulado en el artículo 15.2 del Estatuto de los Trabajadores tras la reforma laboral de 2022 (Real Decreto-ley 32/2021), está específicamente diseñado para responder a circunstancias ocasionales e imprevisibles que generen un desajuste temporal entre el empleo estable disponible y el que se requiere. La norma incluye expresamente el caso del \"incremento ocasional e imprevisible de la actividad\", que es precisamente lo que constituye un pico de producción. Este contrato tiene una duración máxima de 6 meses, ampliable a 12 meses por convenio colectivo sectorial. También existe una modalidad específica para situaciones ocasionales, previsibles y de duración reducida (90 días no continuados en cada año natural). El contrato de formación en alternancia tiene finalidad formativa, no productiva. El fijo-discontinuo está pensado para actividades cíclicas o estacionales, pero de carácter permanente y previsible, no para picos ocasionales. El contrato de grupo es una modalidad especial donde un empresario contrata con un grupo de trabajadores considerado en su totalidad."
      }
    ]
  };

  export default moduloUnidadCinco;