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
export const importanteExamen = {
  id: 606,
  nombre: "Preguntas importantes (Tema 1 - 2 temporal)",
  esExamen: true,
  asignaturaId: 6,
  descripcion: "Test de repaso de los puntos clave indicados para examen.",
  preguntas: [
    // ---- Tema 1. La salud laboral y la prevención. ----.
    {
      id: 6601,
      moduloId: 606,
      pregunta:
        "Indica si se considera accidente de trabajo o no: 'Los daños que sufra el trabajador al ir o volver del trabajo'.",
      opciones: [
        "Es un accidente de trabajo.",
        "No es un accidente de trabajo.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "El Real Decreto Legislativo 8/2015, de 30 de octubre, por el que se aprueba el texto refundido de la Ley General de la Seguridad Social indica en su artículo 156 que tiene consideración de accidente laboral.",
    },
    {
      id: 6602,
      moduloId: 606,
      pregunta:
        "Indica si se considera accidente de trabajo o no: 'Los que sufra el trabajador con ocasión o como consecuencia del desempeño de cargos electivos de carácter sindical, así como los ocurridos al ir o al volver del lugar en que se ejerciten las funciones propias de dichos cargos'.",
      opciones: [
        "Es un accidente de trabajo.",
        "No es un accidente de trabajo.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "El Real Decreto Legislativo 8/2015, de 30 de octubre, por el que se aprueba el texto refundido de la Ley General de la Seguridad Social indica en su artículo 156 que tiene consideración de accidente laboral.",
    },
    {
      id: 6603,
      moduloId: 606,
      pregunta:
        "Indica si se considera accidente de trabajo o no: 'Los ocurridos con ocasión o por consecuencia de las tareas que, aun siendo distintas a las de su grupo profesional, ejecute el trabajador en cumplimiento de las órdenes del empresario o espontáneamente en interés del buen funcionamiento de la empresa'.",
      opciones: [
        "Es un accidente de trabajo.",
        "No es un accidente de trabajo.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "El Real Decreto Legislativo 8/2015, de 30 de octubre, por el que se aprueba el texto refundido de la Ley General de la Seguridad Social indica en su artículo 156 que tiene consideración de accidente laboral.",
    },
    {
      id: 6604,
      moduloId: 606,
      pregunta:
        "Indica si se considera accidente de trabajo o no: 'Los acaecidos en actos de salvamento y en otros de naturaleza análoga, cuando unos y otros tengan conexión con el trabajo'.",
      opciones: [
        "Es un accidente de trabajo.",
        "No es un accidente de trabajo.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "El Real Decreto Legislativo 8/2015, de 30 de octubre, por el que se aprueba el texto refundido de la Ley General de la Seguridad Social indica en su artículo 156 que tiene consideración de accidente laboral.",
    },
    {
      id: 6605,
      moduloId: 606,
      pregunta:
        "Indica si se considera accidente de trabajo o no: 'Las enfermedades que contraiga el trabajador con motivo de la realización de su trabajo, siempre que se pruebe que la enfermedad tuvo por causa exclusiva la ejecución del mismo'.",
      opciones: [
        "Es un accidente de trabajo.",
        "No es un accidente de trabajo.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "El Real Decreto Legislativo 8/2015, de 30 de octubre, por el que se aprueba el texto refundido de la Ley General de la Seguridad Social indica en su artículo 156 que tiene consideración de accidente laboral.",
    },
    {
      id: 6606,
      moduloId: 606,
      pregunta:
        "Indica si se considera accidente de trabajo o no: 'Las enfermedades o defectos, padecidos con anterioridad por el trabajador, que se agraven como consecuencia de la lesión constitutiva del accidente'.",
      opciones: [
        "Es un accidente de trabajo.",
        "No es un accidente de trabajo.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "El Real Decreto Legislativo 8/2015, de 30 de octubre, por el que se aprueba el texto refundido de la Ley General de la Seguridad Social indica en su artículo 156 que tiene consideración de accidente laboral.",
    },
    {
      id: 6607,
      moduloId: 606,
      pregunta:
        "Indica si se considera accidente de trabajo o no: 'las lesiones que sufra el trabajador durante el tiempo y en el lugar del trabajo'.",
      opciones: [
        "Es un accidente de trabajo.",
        "No es un accidente de trabajo.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "El Real Decreto Legislativo 8/2015, de 30 de octubre, por el que se aprueba el texto refundido de la Ley General de la Seguridad Social indica en su artículo 156 que tiene consideración de accidente laboral.",
    },
    {
      id: 6608,
      moduloId: 606,
      pregunta:
        "Indica si se considera accidente de trabajo o no: 'Los que sean debidos a fuerza mayor extraña al trabajo, entendiéndose por esta la que sea de tal naturaleza que no guarde relación alguna con el trabajo que se ejecutaba al ocurrir el accidente'.",
      opciones: [
        "Es un accidente de trabajo.",
        "No es un accidente de trabajo.",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "El Real Decreto Legislativo 8/2015, de 30 de octubre, por el que se aprueba el texto refundido de la Ley General de la Seguridad Social indica en su artículo 156 que NO tiene consideración de accidente laboral.",
    },
    {
      id: 6609,
      moduloId: 606,
      pregunta:
        "Indica si se considera accidente de trabajo o no: 'Los que sean debidos a dolo o a imprudencia temeraria del trabajador accidentado'.",
      opciones: [
        "Es un accidente de trabajo.",
        "No es un accidente de trabajo.",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "El Real Decreto Legislativo 8/2015, de 30 de octubre, por el que se aprueba el texto refundido de la Ley General de la Seguridad Social indica en su artículo 156 que NO tiene consideración de accidente laboral.",
    },
    {
      id: 6610,
      moduloId: 606,
      pregunta:
        "Indica si se considera accidente de trabajo o no: 'La imprudencia profesional que sea consecuencia del ejercicio habitual de un trabajo y se derive de la confianza que este inspira'.",
      opciones: [
        "Es un accidente de trabajo.",
        "No es un accidente de trabajo.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "El Real Decreto Legislativo 8/2015, de 30 de octubre, por el que se aprueba el texto refundido de la Ley General de la Seguridad Social indica en su artículo 156 que este tipo de accidente 'no impide su calificación como un accidente de trabajo'. A efectos prácticos y según los ejemplos propuestos por Carlos en clase, lo tomaremos como que SÍ es un accidente de trabajo, sin entrar en detalles.",
    },
    {
      id: 6611,
      moduloId: 606,
      pregunta:
        "Indica si se considera accidente de trabajo o no: 'La concurrencia de culpabilidad civil o criminal del empresario, de un compañero de trabajo del accidentado o de un tercero, salvo que no guarde relación alguna con el trabajo'.",
      opciones: [
        "Es un accidente de trabajo.",
        "No es un accidente de trabajo.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "El Real Decreto Legislativo 8/2015, de 30 de octubre, por el que se aprueba el texto refundido de la Ley General de la Seguridad Social indica en su artículo 156 que este tipo de accidente 'no impide su calificación como un accidente de trabajo'. A efectos prácticos y según los ejemplos propuestos por Carlos en clase, lo tomaremos como que SÍ es un accidente de trabajo, sin entrar en detalles.",
    },
    {
      id: 6612,
      moduloId: 606,
      pregunta:
        "Señale a qué concepto de la Ley PRL hace referencia: 'Conjunto de actividades o medidas adoptadas o previstas en todas las fases de actividad de la empresa con el fin de evitar o disminuir los riesgos derivados del trabajo'.",
      opciones: [
        "Prevención.",
        "Riesgo laboral.",
        "Daños derivados del trabajo.",
        "Riesgo laboral grave e inminente.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Todas las definiciones las encontramos en el artículo 4 de la Ley 31/1995, de 8 de noviembre, de Prevención de Riesgos Laborales.",
    },
    {
      id: 6613,
      moduloId: 606,
      pregunta:
        "Señale a qué concepto de la Ley PRL hace referencia: 'Posibilidad de que un trabajador sufra un determinado daño derivado del trabajo'.",
      opciones: [
        "Prevención.",
        "Riesgo laboral.",
        "Daños derivados del trabajo.",
        "Riesgo laboral grave e inminente.",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Todas las definiciones las encontramos en el artículo 4 de la Ley 31/1995, de 8 de noviembre, de Prevención de Riesgos Laborales.",
    },
    {
      id: 6614,
      moduloId: 606,
      pregunta:
        "Señale a qué concepto de la Ley PRL hace referencia: 'Enfermedades, patologías o lesiones sufridas con motivo u ocasión del trabajo'.",
      opciones: [
        "Prevención.",
        "Riesgo laboral.",
        "Daños derivados del trabajo.",
        "Riesgo laboral grave e inminente.",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Todas las definiciones las encontramos en el artículo 4 de la Ley 31/1995, de 8 de noviembre, de Prevención de Riesgos Laborales.",
    },
    {
      id: 6615,
      moduloId: 606,
      pregunta:
        "Señale a qué concepto de la Ley PRL hace referencia: 'Aquel que resulte probable racionalmente que se materialice en un futuro inmediato y pueda suponer un daño grave para la salud de los trabajadores'.",
      opciones: [
        "Prevención.",
        "Riesgo laboral.",
        "Daños derivados del trabajo.",
        "Riesgo laboral grave e inminente.",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "Todas las definiciones las encontramos en el artículo 4 de la Ley 31/1995, de 8 de noviembre, de Prevención de Riesgos Laborales.",
    },
    {
      id: 6616,
      moduloId: 606,
      pregunta:
        "Señale a qué concepto de la Ley PRL hace referencia: 'Aquellos que, en ausencia de medidas preventivas específicas, originen riesgos para la seguridad y la salud de los trabajadores que los desarrollan o utilizan'.",
      opciones: [
        "Procesos, actividades, operaciones, equipos o productos potencialmente peligrosos.",
        "Riesgo laboral.",
        "Equipo de trabajo.",
        "Equipo de protección individual.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Todas las definiciones las encontramos en el artículo 4 de la Ley 31/1995, de 8 de noviembre, de Prevención de Riesgos Laborales.",
    },
    {
      id: 6617,
      moduloId: 606,
      pregunta:
        "Señale a qué concepto de la Ley PRL hace referencia: 'Cualquier máquina, aparato, instrumento o instalación utilizada en el trabajo'.",
      opciones: [
        "Procesos, actividades, operaciones, equipos o productos potencialmente peligrosos.",
        "Condición de trabajo.",
        "Equipo de trabajo.",
        "Equipo de protección individual.",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Todas las definiciones las encontramos en el artículo 4 de la Ley 31/1995, de 8 de noviembre, de Prevención de Riesgos Laborales.",
    },
    {
      id: 6618,
      moduloId: 606,
      pregunta:
        "Señale a qué concepto de la Ley PRL hace referencia: 'Cualquier característica del mismo que pueda tener una influencia significativa en la generación de riesgos para la seguridad y la salud del trabajador'.",
      opciones: [
        "Procesos, actividades, operaciones, equipos o productos potencialmente peligrosos.",
        "Condición de trabajo.",
        "Equipo de trabajo.",
        "Equipo de protección individual.",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Todas las definiciones las encontramos en el artículo 4 de la Ley 31/1995, de 8 de noviembre, de Prevención de Riesgos Laborales.",
    },
    {
      id: 6619,
      moduloId: 606,
      pregunta:
        "Señale a qué concepto de la Ley PRL hace referencia: 'Cualquier equipo destinado a ser llevado o sujetado por el trabajador para que le proteja de uno o varios riesgos que puedan amenazar su seguridad o su salud en el trabajo, así como cualquier complemento o accesorio destinado a tal fin'.",
      opciones: [
        "Procesos, actividades, operaciones, equipos o productos potencialmente peligrosos.",
        "Condición de trabajo.",
        "Equipo de trabajo.",
        "Equipo de protección individual.",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "Todas las definiciones las encontramos en el artículo 4 de la Ley 31/1995, de 8 de noviembre, de Prevención de Riesgos Laborales.",
    },
    {
      id: 6620,
      moduloId: 606,
      pregunta:
        "Las enfermedades profesionales se clasifican numeradas del 1 al 6. ¿Qué tipo de enfermadades pertenecen al grupo 1?.",
      opciones: [
        "Las causadas por agentes químicos.",
        "Las causadas por agentes físicos.",
        "Las causadas por agentes biológicos.",
        "Las causadas por inhalación de sustancias.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Podemos encontrar la clasifiación del cuadro de enfermades profesionales en el Real Decreto 1299/2006, de 10 de noviembre, por el que se aprueba el cuadro de enfermedades profesionales en el sistema de la Seguridad Social y se establecen criterios para su notificación y registro.",
    },
    {
      id: 6621,
      moduloId: 606,
      pregunta:
        "Las enfermedades profesionales se clasifican numeradas del 1 al 6. ¿Qué tipo de enfermadades pertenecen al grupo 2?.",
      opciones: [
        "Las causadas por agentes químicos.",
        "Las causadas por agentes físicos.",
        "Las causadas por agentes biológicos.",
        "Las causadas por inhalación de sustancias.",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Podemos encontrar la clasifiación del cuadro de enfermades profesionales en el Real Decreto 1299/2006, de 10 de noviembre, por el que se aprueba el cuadro de enfermedades profesionales en el sistema de la Seguridad Social y se establecen criterios para su notificación y registro.",
    },
    {
      id: 6622,
      moduloId: 606,
      pregunta:
        "Las enfermedades profesionales se clasifican numeradas del 1 al 6. ¿Qué tipo de enfermadades pertenecen al grupo 3?.",
      opciones: [
        "Las causadas por agentes químicos.",
        "Las causadas por agentes físicos.",
        "Las causadas por agentes biológicos.",
        "Las causadas por inhalación de sustancias.",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Podemos encontrar la clasifiación del cuadro de enfermades profesionales en el Real Decreto 1299/2006, de 10 de noviembre, por el que se aprueba el cuadro de enfermedades profesionales en el sistema de la Seguridad Social y se establecen criterios para su notificación y registro.",
    },
    {
      id: 6623,
      moduloId: 606,
      pregunta:
        "Las enfermedades profesionales se clasifican numeradas del 1 al 6. ¿Qué tipo de enfermadades pertenecen al grupo 4?.",
      opciones: [
        "Las causadas por agentes químicos.",
        "Las causadas por agentes físicos.",
        "Las causadas por agentes biológicos.",
        "Las causadas por inhalación de sustancias.",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "Podemos encontrar la clasifiación del cuadro de enfermades profesionales en el Real Decreto 1299/2006, de 10 de noviembre, por el que se aprueba el cuadro de enfermedades profesionales en el sistema de la Seguridad Social y se establecen criterios para su notificación y registro.",
    },
    {
      id: 6624,
      moduloId: 606,
      pregunta:
        "Las enfermedades profesionales se clasifican numeradas del 1 al 6. ¿Qué tipo de enfermadades pertenecen al grupo 5?.",
      opciones: [
        "Las causadas por agentes químicos.",
        "Las causadas por agentes carcinogénicos.",
        "Enfermedades de la piel.",
        "Las causadas por inhalación de sustancias.",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Podemos encontrar la clasifiación del cuadro de enfermades profesionales en el Real Decreto 1299/2006, de 10 de noviembre, por el que se aprueba el cuadro de enfermedades profesionales en el sistema de la Seguridad Social y se establecen criterios para su notificación y registro.",
    },
    {
      id: 6625,
      moduloId: 606,
      pregunta:
        "Las enfermedades profesionales se clasifican numeradas del 1 al 6. ¿Qué tipo de enfermadades pertenecen al grupo 6?.",
      opciones: [
        "Las causadas por agentes químicos.",
        "Las causadas por agentes carcinogénicos.",
        "Enfermedades de la piel.",
        "Las causadas por inhalación de sustancias.",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Los principios de la citada ley podemos se encuentran en el artículo 15 (Ley 31/1995, de 8 de noviembre, de Prevención de Riesgos Laborales).",
    },
    {
      id: 6626,
      moduloId: 606,
      pregunta:
        "Indica cuál de los siguientes es un principio de la Ley de Prevención de Riesgos Laborales.",
      opciones: [
        "Combatir los riesgos en su origen.",
        "Evaluar los riesgos que se puedan evitar.",
        "Combatir los riesgos una vez desaparecido el peligro.",
        "Adaptar la persona al trabajo.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Los principios de la citada ley podemos se encuentran en el artículo 15 (Ley 31/1995, de 8 de noviembre, de Prevención de Riesgos Laborales).",
    },
    {
      id: 6627,
      moduloId: 606,
      pregunta:
        "Indica cuál de los siguientes es un principio de la Ley de Prevención de Riesgos Laborales.",
      opciones: [
        "Evitar los riesgos.",
        "Afrontar los riesgos si ocurren.",
        "Transferir los riesgos a terceros.",
        "Minimizar los riesgos sin evitarlos.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Los principios de la citada ley podemos se encuentran en el artículo 15 (Ley 31/1995, de 8 de noviembre, de Prevención de Riesgos Laborales).",
    },
    {
      id: 6628,
      moduloId: 606,
      pregunta:
        "Indica cuál de los siguientes es un principio de la Ley de Prevención de Riesgos Laborales.",
      opciones: [
        "Evaluar los riesgos que no se puedan evitar.",
        "Evitar los riesgos que puedan ser evaluados.",
        "Evaluar solo los riesgos inevitables leves.",
        "Evitar la evaluación si el riesgo es bajo.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Los principios de la citada ley podemos se encuentran en el artículo 15 (Ley 31/1995, de 8 de noviembre, de Prevención de Riesgos Laborales).",
    },
    {
      id: 6629,
      moduloId: 606,
      pregunta:
        "Indica cuál de los siguientes es un principio de la Ley de Prevención de Riesgos Laborales.",
      opciones: [
        "Adaptar el trabajo a la persona.",
        "Adaptar la persona al entorno laboral.",
        "Hacer que los trabajadores se ajusten al ritmo de producción.",
        "Seleccionar al personal más fuerte físicamente.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Los principios de la citada ley podemos se encuentran en el artículo 15 (Ley 31/1995, de 8 de noviembre, de Prevención de Riesgos Laborales).",
    },
    {
      id: 6630,
      moduloId: 606,
      pregunta:
        "Indica cuál de los siguientes es un principio de la Ley de Prevención de Riesgos Laborales.",
      opciones: [
        "Tener en cuenta la evolución de la técnica.",
        "Ignorar la evolución técnica hasta que sea obligatoria.",
        "Usar la técnica más económica disponible.",
        "Esperar a que la técnica esté obsoleta para cambiarla.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Los principios de la citada ley podemos se encuentran en el artículo 15 (Ley 31/1995, de 8 de noviembre, de Prevención de Riesgos Laborales).",
    },
    {
      id: 6631,
      moduloId: 606,
      pregunta:
        "Indica cuál de los siguientes es un principio de la Ley de Prevención de Riesgos Laborales.",
      opciones: [
        "Sustituir lo peligroso por lo que entrañe poco o ningún peligro.",
        "Aislar los riesgos sin sustituirlos.",
        "Usar lo peligroso con más cuidado.",
        "Sustituir lo poco peligroso por tecnología avanzada aunque peligrosa.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Los principios de la citada ley podemos se encuentran en el artículo 15 (Ley 31/1995, de 8 de noviembre, de Prevención de Riesgos Laborales).",
    },
    {
      id: 6632,
      moduloId: 606,
      pregunta:
        "Indica cuál de los siguientes es un principio de la Ley de Prevención de Riesgos Laborales.",
      opciones: [
        "Planificar la prevención integrando técnica, organización y condiciones laborales.",
        "Aplicar medidas preventivas improvisadas según los riesgos.",
        "Planificar solo cuando haya accidentes previos.",
        "Dejar la prevención a criterio de cada trabajador.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Los principios de la citada ley podemos se encuentran en el artículo 15 (Ley 31/1995, de 8 de noviembre, de Prevención de Riesgos Laborales).",
    },
    {
      id: 6633,
      moduloId: 606,
      pregunta:
        "Indica cuál de los siguientes es un principio de la Ley de Prevención de Riesgos Laborales.",
      opciones: [
        "Adoptar medidas que antepongan la protección colectiva a la individual.",
        "Fomentar el uso de EPIs como medida principal.",
        "Centrarse en la protección individual en primer lugar.",
        "Proteger individualmente y luego pensar en lo colectivo.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Los principios de la citada ley podemos se encuentran en el artículo 15 (Ley 31/1995, de 8 de noviembre, de Prevención de Riesgos Laborales).",
    },
    {
      id: 6634,
      moduloId: 606,
      pregunta:
        "Indica cuál de los siguientes es un principio de la Ley de Prevención de Riesgos Laborales.",
      opciones: [
        "Dar las debidas instrucciones a los trabajadores.",
        "Suponer que el trabajador ya sabe cómo actuar.",
        "Limitar la formación a jefes y supervisores.",
        "Formar a los trabajadores solo si lo solicitan.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Los principios de la citada ley podemos se encuentran en el artículo 15 (Ley 31/1995, de 8 de noviembre, de Prevención de Riesgos Laborales).",
    },
    // ---- Tema 2. Riesgos profesionales y prevención ----.
    {
      id: 6635,
      moduloId: 606,
      pregunta:
        "Selecciona la técnica de prevención a la que pertenece la siguiente definición: 'Estudio de todas las consecuencias derivadas de las condiciones materiales y ambientales que afecten a las personas buscando así reducir al máximo la posibilidad de que surjan enfermedades a consecuencia de la actividad normal en una empresa'.",
      opciones: [
        "Medicina en el trabajo.",
        "Psicosociología.",
        "Ergonomía.",
        "Higiene industrial.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "La medicina en el trabajo está regulada en el marco de la Ley de Prevención de Riesgos Laborales y tiene como objetivo preservar la salud de los trabajadores mediante reconocimientos médicos y vigilancia sanitaria.",
    },
    {
      id: 6636,
      moduloId: 606,
      pregunta:
        "Selecciona la técnica de prevención a la que pertenece la siguiente definición: 'Se encarga del estudio de todos los daños de carácter psicológico que pueda sufrir un trabajador en el ejercicio de sus funciones en una empresa'.",
      opciones: [
        "Medicina en el trabajo.",
        "Psicosociología.",
        "Ergonomía.",
        "Higiene industrial.",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "La psicosociología analiza factores como el estrés laboral, la carga mental o los conflictos interpersonales, con base en lo recogido por la normativa sobre condiciones psicosociales del trabajo.",
    },
    {
      id: 6637,
      moduloId: 606,
      pregunta:
        "Selecciona la técnica de prevención a la que pertenece la siguiente definición: 'Disciplina que se encarga del estudio de la adecuación de las capacidad de las personas a las exigencias previstas en sus respectivos trabajos con el objetivo de mejorar sus capacidades funcionales y rendimiento'.",
      opciones: [
        "Medicina en el trabajo.",
        "Psicosociología.",
        "Ergonomía.",
        "Higiene industrial.",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "La ergonomía busca adaptar el entorno laboral a las características del trabajador, tal como establece el INSST en sus directrices para la prevención de riesgos ergonómicos.",
    },
    {
      id: 6638,
      moduloId: 606,
      pregunta:
        "Selecciona la técnica de prevención a la que pertenece la siguiente definición: 'Disciplina que tiene como objetivo la identificación, evaluación y control de todos los elementos de origen químico, físico o biológico que puedan perjudicar a los trabajadores en el ejercicio de sus funciones'.",
      opciones: [
        "Medicina en el trabajo.",
        "Psicosociología.",
        "Seguridad en el trabajo.",
        "Higiene industrial.",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "La higiene industrial se basa en la anticipación y control de contaminantes, conforme a lo estipulado en el Real Decreto 374/2001 sobre protección frente a agentes químicos.",
    },
    {
      id: 6639,
      moduloId: 606,
      pregunta:
        "Selecciona la técnica de prevención a la que pertenece la siguiente definición: 'Disciplina que estudia los riesgos en sí y las condiciones en el trabajo que puedan afectar a los trabajadores pudiendo producir entre otros accidentes de trabajo'.",
      opciones: [
        "Medicina en el trabajo.",
        "Psicosociología.",
        "Ergonomía.",
        "Seguridad en el trabajo.",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "La seguridad en el trabajo se centra en evitar accidentes mediante medidas de control de riesgos mecánicos, eléctricos o estructurales, en cumplimiento del artículo 15 de la Ley 31/1995.",
    },
    {
      id: 6640,
      moduloId: 606,
      pregunta:
        "¿A qué tipo de señalización hace referencia? 'Proporciona información clara y concisa sobre los riesgos específicos y las medidas de seguridad que deben tomarse en ciertas áreas o situaciones'.",
      opciones: ["Información.", "Prevención.", "Orientación.", "Advertencia."],
      respuestaCorrecta: 0,
      explicacion:
        "Este tipo de señalización está regulada por el Real Decreto 485/1997 y tiene como fin informar sin necesidad de exigir una acción inmediata.",
    },
    {
      id: 6641,
      moduloId: 606,
      pregunta:
        "¿A qué tipo de señalización hace referencia? 'Alerta a los trabajadores sobre la presencia de peligros potenciales y les recuerda la necesidad de seguir procedimientos seguros'.",
      opciones: ["Información.", "Prevención.", "Orientación.", "Advertencia."],
      respuestaCorrecta: 1,
      explicacion:
        "La señalización preventiva busca evitar situaciones de riesgo antes de que ocurran, como parte del principio de acción preventiva.",
    },
    {
      id: 6642,
      moduloId: 606,
      pregunta:
        "¿A qué tipo de señalización hace referencia? 'Guía a los trabajadores y visitantes hacia salidas de emergencia, equipos de protección, áreas seguras y otros lugares relevantes'.",
      opciones: ["Información.", "Prevención.", "Orientación.", "Advertencia."],
      respuestaCorrecta: 2,
      explicacion:
        "La señalización de orientación facilita la evacuación o localización rápida de zonas importantes en situaciones de emergencia, según normativas como ISO 7010.",
    },
    {
      id: 6643,
      moduloId: 606,
      pregunta:
        "¿A qué tipo de señalización hace referencia? 'Avisa sobre situaciones peligrosas inminentes que requieren atención inmediata y precaución'.",
      opciones: ["Información.", "Prevención.", "Orientación.", "Advertencia."],
      respuestaCorrecta: 3,
      explicacion:
        "Las señales de advertencia se usan cuando existe un peligro concreto y presente, y deben cumplir criterios visuales normalizados (forma triangular y colores llamativos).",
    },
    {
      id: 6644,
      moduloId: 606,
      pregunta:
        "¿A qué tipo de señalización hace referencia? 'Indica acciones o comportamientos que están prohibidos para prevenir accidentes o daños a la salud'.",
      opciones: ["Emergencia.", "Prevención.", "Prohibición.", "Advertencia."],
      respuestaCorrecta: 2,
      explicacion:
        "Estas señales están diseñadas para evitar comportamientos peligrosos mediante una prohibición clara, y su formato visual está recogido en el RD 485/1997.",
    },
    {
      id: 6645,
      moduloId: 606,
      pregunta:
        "¿A qué tipo de señalización hace referencia? 'Facilita la respuesta rápida y eficaz ante emergencias como incendios, escapes de sustancias peligrosas u otras situaciones críticas'.",
      opciones: ["Emergencia.", "Prevención.", "Prohibición.", "Advertencia."],
      respuestaCorrecta: 0,
      explicacion:
        "La señalización de emergencia incluye salidas, equipos de extinción o primeros auxilios, y se basa en estándares europeos de seguridad en evacuaciones.",
    },
    {
      id: 6646,
      moduloId: 606,
      pregunta:
        "Indica el tipo de señal al que se refiere la siguiente descripción: 'Símbolos o palabras en rojo sobre fondo blanco que indican acciones o comportamientos prohibidos (por ejemplo, no fumar). En forma de círculo, bordes rojos, fondo blanco y pictograma negro'.",
      opciones: ["Prohibición.", "Obligación.", "Advertencia.", "Salvamento."],
      respuestaCorrecta: 0,
      explicacion:
        "La descripción ya contiene los elementos clave que definen la señal de prohibición.",
    },
    {
      id: 6647,
      moduloId: 606,
      pregunta:
        "Indica el tipo de señal al que se refiere la siguiente descripción: 'Símbolos o palabras en blanco sobre fondo azul que indican la obligación de llevar a cabo una acción específica (por ejemplo, uso de equipo de protección personal). En forma de círculo,  fondo azul y pictograma blanco'.",
      opciones: ["Prohibición.", "Obligación.", "Advertencia.", "Salvamento."],
      respuestaCorrecta: 1,
      explicacion:
        "La forma, color y contenido de la señal indican claramente una obligación.",
    },
    {
      id: 6648,
      moduloId: 606,
      pregunta:
        "Indica el tipo de señal al que se refiere la siguiente descripción: 'Triángulo amarillo con símbolos o palabras negras que alertan sobre posibles peligros o riesgos (por ejemplo, precaución: suelo mojado). En forma de triángulo, bordes negros, fondo amarillo y pictograma negro'.",
      opciones: ["Prohibición.", "Obligación.", "Advertencia.", "Salvamento."],
      respuestaCorrecta: 2,
      explicacion:
        "La forma triangular y el color amarillo con negro son característicos de las señales de advertencia.",
    },
    {
      id: 6649,
      moduloId: 606,
      pregunta:
        "Indica el tipo de señal al que se refiere la siguiente descripción: 'Símbolos o palabras en verde sobre fondo blanco que indican la ubicación de equipos de salvamento o primeros auxilios. En forma de rectángulo, fondo verde y pictograma blanco'.",
      opciones: [
        "Prohibición.",
        "Extinción de incendios.",
        "Desniveles y obstáculos.",
        "Salvamento.",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "El color verde y la referencia a primeros auxilios indican una señal de salvamento.",
    },
    {
      id: 6650,
      moduloId: 606,
      pregunta:
        "Indica el tipo de señal al que se refiere la siguiente descripción: 'Símbolos o palabras en rojo sobre fondo blanco que indican la ubicación de equipos para la extinción de incendios (por ejemplo, extintor). En forma de cuadrado, fondo rojo y pictograma blanco'.",
      opciones: [
        "Prohibición.",
        "Extinción de incendios.",
        "Desniveles y obstáculos.",
        "Salvamento.",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Las señales de extinción de incendios se identifican por su fondo rojo y pictogramas blancos.",
    },
    {
      id: 6651,
      moduloId: 606,
      pregunta:
        "Indica el tipo de señal al que se refiere la siguiente descripción: 'Marcas visuales (generalmente en el suelo) que alertan sobre desniveles, escalones u otros obstáculos que podrían causar tropiezos o caídas. Rayas amarillas y negras'.",
      opciones: [
        "Prohibición.",
        "Extinción de incendios.",
        "Desniveles y obstáculos.",
        "Salvamento.",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Las franjas amarillas y negras se usan comúnmente para señalar obstáculos o desniveles peligrosos.",
    },
    {
      id: 6652,
      moduloId: 606,
      pregunta:
        "El tetraedro de fuego es un modelo conceptual que describe los cuatro elementos necesarios para que ocurra un incendio. Indica a qué elemento del mismo corresponde la siguiente descripción:'Es cualquier material que pueda arder. Pueden ser sólidos (madera, papel), líquidos (gasolina, aceites), gases (propano, butano) o incluso metales combustibles'.",
      opciones: ["Combustible.", "Calor.", "Comburente."],
      respuestaCorrecta: 0,
      explicacion:
        "Sin este componente, no hay materia que reaccione con el oxígeno para producir fuego.",
    },
    {
      id: 6653,
      moduloId: 606,
      pregunta:
        "El tetraedro de fuego es un modelo conceptual que describe los cuatro elementos necesarios para que ocurra un incendio. Indica a qué elemento del mismo corresponde la siguiente descripción:'Es el componente del aire que reacciona con el combustible durante la combustión. Se necesita un mínimo de concentración de oxígeno para que un material arda'.",
      opciones: ["Combustible.", "Calor.", "Comburente."],
      respuestaCorrecta: 2,
      explicacion:
        "Sin este elemento, la reacción de combustión no puede mantenerse, ya que actúa como agente oxidante.",
    },
    {
      id: 6654,
      moduloId: 606,
      pregunta:
        "El tetraedro de fuego es un modelo conceptual que describe los cuatro elementos necesarios para que ocurra un incendio. Indica a qué elemento del mismo corresponde la siguiente descripción:'Es la energía suficiente para iniciar y mantener la reacción química de la combustión. Puede provenir de una fuente externa como una chispa, llama o radiante'.",
      opciones: ["Combustible.", "Calor.", "Comburente."],
      respuestaCorrecta: 1,
      explicacion:
        "Este factor actúa como iniciador del proceso de combustión y es clave para romper la inercia química del combustible.",
    },
    {
      id: 6655,
      moduloId: 606,
      pregunta:
        "Existen diferentes tipos de fuego, clasificados según el tipo de combustible involucrado. Cada clase de fuego requiere un tipo específico de extintor para apagarlo de manera segura y efectiva. ¿Cuál se usa para materiales sólidos combustibles (madera, papel, tela, cartón, etc.)?",
      opciones: ["A.", "B.", "C.", "D."],
      respuestaCorrecta: 0,
      explicacion:
        "Los fuegos de clase A se apagan con extintores que actúan por enfriamiento, como los de agua pulverizada.",
    },
    {
      id: 6656,
      moduloId: 606,
      pregunta:
        "Existen diferentes tipos de fuego, clasificados según el tipo de combustible involucrado. Cada clase de fuego requiere un tipo específico de extintor para apagarlo de manera segura y efectiva. ¿Cuál se usa para gases inflamables (butano, propano, gas natural)?",
      opciones: ["A.", "B.", "C.", "D."],
      respuestaCorrecta: 2,
      explicacion:
        "Los fuegos de clase C implican gases y suelen extinguirse cortando el suministro y usando polvo químico seco.",
    },
    {
      id: 6657,
      moduloId: 606,
      pregunta:
        "Existen diferentes tipos de fuego, clasificados según el tipo de combustible involucrado. Cada clase de fuego requiere un tipo específico de extintor para apagarlo de manera segura y efectiva. ¿Cuál se usa para metales combustibles (magnesio, aluminio, sodio)?",
      opciones: ["A.", "B.", "C.", "D."],
      respuestaCorrecta: 3,
      explicacion:
        "Los fuegos de clase D requieren agentes especiales como polvo seco específico que no reaccione con los metales.",
    },
    {
      id: 6658,
      moduloId: 606,
      pregunta:
        "Existen diferentes tipos de fuego, clasificados según el tipo de combustible involucrado. Cada clase de fuego requiere un tipo específico de extintor para apagarlo de manera segura y efectiva. ¿Cuál se usa para líquidos inflamables (gasolina, aceites, pintura, alcohol)?",
      opciones: ["A.", "B.", "C.", "D."],
      respuestaCorrecta: 1,
      explicacion:
        "Los fuegos de clase B deben sofocarse con extintores que impidan la emisión de vapores inflamables, como espuma o CO₂.",
    },
    {
      id: 6659,
      moduloId: 606,
      pregunta:
        "Existen varios métodos utilizados para extinguir incendios, cada uno diseñado para abordar un aspecto específico del tetraedro de fuego. ¿Cuál es aquel que consiste en eliminar el oxígeno del área afectada para interrumpir la combustión?",
      opciones: ["Sofocación.", "Enfriamiento.", "Dilución."],
      respuestaCorrecta: 0,
      explicacion:
        "Este método actúa sobre el comburente, impidiendo que el oxígeno alimente el fuego.",
    },
    {
      id: 6660,
      moduloId: 606,
      pregunta:
        "Existen varios métodos utilizados para extinguir incendios, cada uno diseñado para abordar un aspecto específico del tetraedro de fuego. ¿Cuál es aquel que se basa en reducir la temperatura del combustible por debajo de su punto de ignición?",
      opciones: ["Sofocación.", "Enfriamiento.", "Dilución."],
      respuestaCorrecta: 1,
      explicacion:
        "Actúa sobre el calor, eliminando la energía necesaria para que continúe la combustión.",
    },
    {
      id: 6661,
      moduloId: 606,
      pregunta:
        "Existen varios métodos utilizados para extinguir incendios, cada uno diseñado para abordar un aspecto específico del tetraedro de fuego. ¿Cuál es aquel que consiste en reducir la concentración de combustible en el área afectada?",
      opciones: ["Sofocación.", "Enfriamiento.", "Dilución."],
      respuestaCorrecta: 2,
      explicacion:
        "Este método interrumpe la reacción al limitar la cantidad de material que puede arder.",
    },
    {
      id: 6662,
      moduloId: 606,
      pregunta:
        "¿Qué tipo de radiación es aquella con suficiente energía para ionizar átomos o moléculas, es decir, para arrancar electrones de los átomos, creando iones?",
      opciones: [
        "Radiación ionizante.",
        "Radiación no ionizante.",
        "Radiación neutronizante.",
        "Radiación no cationizante.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Este tipo de radiación puede dañar el ADN y tejidos vivos, por lo que es especialmente peligrosa en entornos laborales.",
    },
    {
      id: 6663,
      moduloId: 606,
      pregunta:
        "¿Qué tipo de radiación es aquella que no tiene suficiente energía para ionizar átomos o moléculas?",
      opciones: [
        "Radiación ionizante.",
        "Radiación no ionizante.",
        "Radiación neutronizante.",
        "Radiación no cationizante.",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "A pesar de no ser ionizante, puede provocar efectos térmicos o biológicos a largo plazo si hay sobreexposición.",
    },
    {
      id: 6664,
      moduloId: 606,
      pregunta:
        "¿Qué tipo de radiación son los rayos X, rayos gamma, partículas alfa, partículas beta y neutrones?",
      opciones: [
        "Radiación ionizante.",
        "Radiación no ionizante.",
        "Radiación neutronizante.",
        "Radiación no cationizante.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Estos tipos de radiación tienen aplicaciones médicas e industriales, pero requieren estrictos controles de protección.",
    },
    {
      id: 6665,
      moduloId: 606,
      pregunta:
        "¿Qué tipo de radiación son la ultravioleta, la luz visible, las microondas, las radiofrecuencias y los campos electromagnéticos?",
      opciones: [
        "Radiación ionizante.",
        "Radiación no ionizante.",
        "Radiación neutronizante.",
        "Radiación no cationizante.",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Estas radiaciones forman parte del espectro electromagnético común y se encuentran en nuestro entorno cotidiano.",
    },
    {
      id: 6666,
      moduloId: 606,
      pregunta: "¿Cómo se clasifican los riesgos biológicos?",
      opciones: [
        "Del 1 (más leve) al 4 (más grave).",
        "Del 4 (más leve) al 1 (más grave).",
        "Del 1 (más leve) al 6 (más grave).",
        "Del 6 (más leve) al 1 (más grave).",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "La clasificación sigue una escala creciente de peligrosidad en función del nivel de riesgo para la salud humana.",
    },
    {
      id: 6667,
      moduloId: 606,
      pregunta:
        "La temperatura de los locales donde se realicen trabajos sedentarios propios de oficinas o similares estará comprendida entre:",
      opciones: [
        "17ºC y 27ºC.",
        "14ºC y 25ºC.",
        "16ºC y 26ºC.",
        "17ºC y 25ºC.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Este rango busca garantizar el confort térmico para trabajadores en actividad mínima.",
    },
    {
      id: 6668,
      moduloId: 606,
      pregunta:
        "La temperatura de los locales donde se realicen trabajos ligeros estará comprendida entre:",
      opciones: [
        "17ºC y 27ºC.",
        "14ºC y 25ºC.",
        "16ºC y 26ºC.",
        "17ºC y 25ºC.",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Los trabajos ligeros generan más calor corporal, por eso se permite un ambiente algo más fresco.",
    },
  ],
};
export default importanteExamen;
