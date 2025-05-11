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
    //!-----------------------------------------------
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
  ],
};
export default importanteExamen02;
