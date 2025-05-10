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
export const importanteExamen01 = {
  id: 606,
  nombre: "Preguntas importantes. Bloque 1 (Temas 1 a 3)",
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
    // ---- Tema 3. Prevención de riesgos laborales y primeros auxilios. ----
    {
      id: 6669,
      moduloId: 606,
      pregunta: "¿Qué tipos de niveles de cualificación existen en la PRL?",
      opciones: [
        "Básico, Intermedio y Superior.",
        "Mínimo, Básico y Superior.",
        "Básico, Intermedio y Cualificado.",
        "Mínimo, Medio y Alto.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Según el Real Decreto 39/1997, los niveles de formación en prevención de riesgos laborales son: básico, intermedio y superior. Cada uno capacita para funciones preventivas distintas dentro de la empresa.",
    },
    {
      id: 6670,
      moduloId: 606,
      pregunta:
        "El nivel básico para la cualificación en prevención de riesgos laborales necesita de un mínimo de horas para ser acreditado en función de las características de la actividad de la empresa. Esta cantidad de horas sería:",
      opciones: [
        "50h para empresas con actividades peligrosas y 30h para el resto de empresas.",
        "30h para empresas con actividades peligrosas y 15h para el resto de empresas.",
        "60h para empresas con actividades peligrosas y 30h para el resto de empresas.",
        "50h para empresas con actividades peligrosas y 25h para el resto de empresas.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "El artículo 35 del Real Decreto 39/1997 establece que el nivel básico requiere al menos 50 horas de formación en empresas con riesgos importantes y 30 horas para el resto.",
    },
    {
      id: 6671,
      moduloId: 606,
      pregunta:
        "¿Cuántas horas de formación requiere el nivel superior de prevención de riesgos laborales?",
      opciones: [
        "Mínimo 600 horas acreditadas por una universidad.",
        "Máximo 600 horas acreditadas por una universidad.",
        "Mínimo 300 horas acreditadas por una universidad.",
        "Mínimo 250 horas acreditadas por una universidad.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Según el Anexo VI del Real Decreto 39/1997, el nivel superior requiere una formación mínima de 600 horas impartidas por una universidad para poder desempeñar funciones como técnico superior en PRL.",
    },
    {
      id: 6672,
      moduloId: 606,
      pregunta:
        "Son los representantes de los trabajadores en materia de seguridad y salud en el trabajo:",
      opciones: [
        "Delegados de Prevención.",
        "Delegados de Personal.",
        "Comités de Empresa.",
        "Comités de Seguridad y Salud.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Según el artículo 35 de la Ley 31/1995 de Prevención de Riesgos Laborales, los Delegados de Prevención son los representantes de los trabajadores con funciones específicas en materia de prevención de riesgos en el trabajo.",
    },
    {
      id: 6673,
      moduloId: 606,
      pregunta:
        "Son los representantes de los trabajadores en empresas que tienen entre 10 y 50 trabajadores:",
      opciones: [
        "Delegados de Prevención.",
        "Delegados de Personal.",
        "Comités de Empresa.",
        "Comités de Seguridad y Salud.",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "De acuerdo con el Estatuto de los Trabajadores (artículo 62) y la LPRL (artículo 34), en empresas de entre 10 y 49 trabajadores los Delegados de Personal representan a los trabajadores ante la empresa.",
    },
    {
      id: 6674,
      moduloId: 606,
      pregunta:
        "Son órganos de representación de los trabajadores en empresas que cuentan con 50 o más empleados. Están compuestos por representantes elegidos por los trabajadores:",
      opciones: [
        "Delegados de Prevención.",
        "Delegados de Personal.",
        "Comités de Empresa.",
        "Comités de Seguridad y Salud.",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Según el artículo 63 del Estatuto de los Trabajadores, las empresas con 50 o más trabajadores deben constituir un Comité de Empresa como órgano representativo de los trabajadores.",
    },
    {
      id: 6675,
      moduloId: 606,
      pregunta:
        "Son órganos formados por representantes de la empresa y de los trabajadores con la finalidad de velar por la seguridad y salud en el trabajo. En las empresas de 50 o más trabajadores, debe existir:",
      opciones: [
        "Delegados de Prevención.",
        "Delegados de Personal.",
        "Comités de Empresa.",
        "Comités de Seguridad y Salud.",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "Según el artículo 38 de la Ley 31/1995, en empresas con 50 o más trabajadores debe constituirse un Comité de Seguridad y Salud como órgano paritario y colegiado de participación en materia preventiva.",
    },
    {
      id: 6676,
      moduloId: 606,
      pregunta:
        "¿Con qué frecuencia debe reunirse el Comité de Seguridad y Salud en las empresas?",
      opciones: [
        "Al menos una vez cada tres meses.",
        "Al menos una vez cada seis meses.",
        "Al menos una vez cada dos meses.",
        "Al menos una vez cada cinco meses.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Según el artículo 38.3 de la Ley 31/1995 de Prevención de Riesgos Laborales, el Comité de Seguridad y Salud debe reunirse al menos cada tres meses y siempre que lo solicite alguna de las representaciones en el mismo.",
    },
    {
      id: 6677,
      moduloId: 606,
      pregunta:
        "¿Cuál es el número mínimo y máximo de Delegados de Prevención que puede tener una empresa según su tamaño?",
      opciones: [
        "Mínimo 1 y máximo 8.",
        "Mínimo 2 y máximo 8.",
        "Mínimo 1 y máximo según el número de trabajadores.",
        "Mínimo 2 y máximo según el número de trabajadores.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "El artículo 35.2 de la Ley 31/1995 establece que el número de Delegados de Prevención varía según el tamaño de la plantilla, partiendo de un mínimo de 1 (para empresas de hasta 49 trabajadores) y aumentando hasta un máximo de 8 en empresas de 2.000 trabajadores o más.",
    },
    {
      id: 6678,
      moduloId: 606,
      pregunta:
        "¿Qué formas de organización de la actividad preventiva puede adoptar una empresa según la normativa vigente?",
      opciones: [
        "Asunción por el empresario, designación de trabajadores, servicio de prevención propio, servicio de prevención mancomunado y servicio de prevención ajeno.",
        "Solo servicio de prevención propio y servicio de prevención ajeno.",
        "Servicio de prevención ajeno, concertado y mancomunado.",
        "Servicio de prevención propio, ajeno y mancomunado.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Según el artículo 10 del Real Decreto 39/1997, una empresa puede organizar la prevención mediante: 1) Asunción por el empresario; 2) Designación de uno o varios trabajadores; 3) Constitución de un servicio de prevención propio; 4) Servicio de prevención mancomunado; y 5) Recurso a un servicio de prevención ajeno.",
    },
    {
      id: 6679,
      moduloId: 606,
      pregunta:
        "¿En qué condiciones puede el propio empresario asumir personalmente la actividad preventiva?",
      opciones: [
        "Cuando la empresa tiene hasta 10 trabajadores, o hasta 25 si tiene un solo centro de trabajo y no realiza actividades peligrosas.",
        "Cuando la empresa tiene hasta 25 trabajadores, o hasta 50 si tiene un solo centro de trabajo y no realiza actividades peligrosas.",
        "Cuando la empresa tiene hasta 30 trabajadores, o hasta 60 si tiene un solo centro de trabajo y no realiza actividades peligrosas.",
        "Cuando la empresa tiene hasta 10 trabajadores, o hasta 30 si tiene un solo centro de trabajo y no realiza actividades peligrosas.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Según el artículo 11 del Real Decreto 39/1997, el empresario puede asumir la prevención si su empresa tiene hasta 10 trabajadores, o hasta 25 si desarrolla su actividad en un único centro y no realiza actividades peligrosas, y siempre que tenga la formación adecuada.",
    },
    {
      id: 6680,
      moduloId: 606,
      pregunta:
        "¿Cuántas especialidades preventivas debe cubrir como mínimo un servicio de prevención propio?",
      opciones: [
        "Al menos 2 de las 5 especialidades preventivas; el resto pueden externalizarse.",
        "Al menos 3 de las 5 especialidades preventivas; el resto pueden externalizarse.",
        "Al menos 1 de las 5 especialidades preventivas; el resto pueden externalizarse.",
        "Debe cubrir obligatoriamente todas las especialidades preventivas.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "El artículo 14.2 del Real Decreto 39/1997 establece que el servicio de prevención propio debe disponer, al menos, de dos de las especialidades preventivas exigidas (medicina del trabajo, seguridad, higiene, ergonomía y psicosociología). Las demás pueden ser cubiertas por un servicio ajeno.",
    },
    {
      id: 6681,
      moduloId: 606,
      pregunta:
        "¿Cuántas especialidades debe cubrir como mínimo un servicio de prevención mancomunado?",
      opciones: [
        "Al menos 2 de las 5 especialidades preventivas; el resto pueden externalizarse.",
        "Al menos 3 de las 5 especialidades preventivas; el resto pueden externalizarse.",
        "Al menos 1 de las 5 especialidades preventivas; el resto pueden externalizarse.",
        "Debe cubrir obligatoriamente todas las especialidades preventivas.",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Según el artículo 21 del Real Decreto 39/1997, el servicio de prevención mancomunado debe contar, como mínimo, con tres especialidades preventivas. El resto pueden ser concertadas con servicios ajenos si no se dispone de los recursos necesarios.",
    },
    {
      id: 6682,
      moduloId: 606,
      pregunta:
        "¿Cuáles son las fases del proceso de evaluación de riesgos laborales?",
      opciones: [
        "Tiene 3: identificación, evaluación y valoración.",
        "Tiene 4: identificación, evaluación, valoración y resolución.",
        "Tiene 3: proteger, alertar y socorrer.",
        "Tiene 4: identificación, evaluación y resolución.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "El proceso de evaluación de riesgos laborales consta de tres fases básicas: 1) Identificación del peligro, 2) Evaluación del riesgo (probabilidad x consecuencias), y 3) Valoración del riesgo en función de su aceptabilidad. Estas fases están recogidas de forma implícita en los artículos 3 y 5 del Real Decreto 39/1997, Reglamento de los Servicios de Prevención.",
    },
    {
      id: 6683,
      moduloId: 606,
      pregunta:
        "¿Cómo se denomina una situación de emergencia menor que puede ser controlada rápidamente sin afectar a la operativa normal?",
      opciones: [
        "Conato de emergencia.",
        "Emergencia nula.",
        "Emergencia baja.",
        "Simulacro de emergencia.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Un conato de emergencia es una situación de peligro inicial o muy limitado que puede ser controlado de forma rápida por medios locales, sin que llegue a interrumpir la actividad general. Esta clasificación se basa en los criterios establecidos en planes de emergencia y autoprotección según la Norma Básica de Autoprotección (Real Decreto 393/2007).",
    },
    {
      id: 6684,
      moduloId: 606,
      pregunta:
        "¿Cómo se clasifica una emergencia que afecta a una parte significativa del centro de trabajo, pero no a su totalidad?",
      opciones: [
        "Contacto de emergencia.",
        "Emergencia parcial.",
        "Emergencia moderada.",
        "Emergencia baja.",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Una emergencia parcial implica una situación que, aunque más grave que un conato, solo afecta a una parte del centro de trabajo y puede requerir la intervención de equipos internos de emergencia. Esta tipología se recoge en la planificación de emergencias según el Real Decreto 393/2007, sobre planes de autoprotección.",
    },
    {
      id: 6685,
      moduloId: 606,
      pregunta:
        "¿Qué tipo de emergencia implica un riesgo grave que afecta a la totalidad del centro de trabajo?",
      opciones: [
        "Emergencia de riesgo.",
        "Emergencia general.",
        "Emergencia crítica.",
        "Emergencia absoluta.",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "La emergencia general se refiere a situaciones que comprometen seriamente la seguridad de todo el centro de trabajo, pudiendo afectar a personas, instalaciones o al entorno. Este concepto está contemplado en el marco de los planes de emergencia y autoprotección conforme al Real Decreto 393/2007.",
    },
    {
      id: 6700,
      moduloId: 606,
      pregunta: "¿Qué significan las siglas PAS en primeros auxilios?",
      opciones: [
        "Proteger, Avisar, Socorrer.",
        "Parar, Actuar, Salvar.",
        "Prevenir, Atender, Sostener.",
        "Pedir ayuda, Atender, Solucionar.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "PAS es el protocolo básico de actuación ante una emergencia: Proteger el lugar del accidente, Avisar a los servicios de emergencia y Socorrer a la víctima sin poner en riesgo la propia seguridad.",
    },
    {
      id: 6701,
      moduloId: 606,
      pregunta:
        "¿Qué se evalúa en la primera evaluación de una víctima en primeros auxilios?",
      opciones: [
        "La conciencia, respiración y circulación.",
        "El historial médico de la víctima.",
        "El tipo de sangre y antecedentes familiares.",
        "La temperatura corporal y frecuencia urinaria.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "En la primera evaluación se valora si la víctima está consciente, respira adecuadamente y tiene pulso. Es clave para detectar situaciones críticas que requieren actuación inmediata.",
    },
    {
      id: 6702,
      moduloId: 606,
      pregunta: "¿Qué aspectos incluye la segunda evaluación de la víctima?",
      opciones: [
        "Exploración secundaria desde la cabeza a los pies para buscar lesiones.",
        "Medición de la glucosa y presión arterial.",
        "Interrogatorio exhaustivo del paciente.",
        "Revisión del entorno del accidente.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "La segunda evaluación consiste en una exploración completa del cuerpo, de cabeza a pies, para localizar heridas, fracturas, quemaduras u otros daños que no sean evidentes a primera vista.",
    },
    {
      id: 6703,
      moduloId: 606,
      pregunta: "¿Qué significan las siglas RCP?",
      opciones: [
        "Reanimación Cardio-Pulmonar.",
        "Respuesta Clínica Preventiva.",
        "Reacción Corporal Primaria.",
        "Reanimación Cráneo-Precordial.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "RCP significa Reanimación Cardio-Pulmonar, un conjunto de maniobras destinadas a mantener la circulación sanguínea y la oxigenación en casos de paro cardiorrespiratorio.",
    },
    {
      id: 6704,
      moduloId: 606,
      pregunta:
        "¿Cuál es el estándar actual en adultos para realizar la RCP básica?",
      opciones: [
        "30 compresiones por 2 insuflaciones.",
        "15 compresiones por 5 insuflaciones.",
        "20 compresiones por 4 insuflaciones.",
        "25 compresiones por 2 insuflaciones.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "El protocolo internacional de RCP básica en adultos establece una relación de 30 compresiones torácicas por 2 insuflaciones (ventilaciones).",
    },
    {
      id: 6705,
      moduloId: 606,
      pregunta:
        "¿En cuántos grados se clasifican las quemaduras y cuál es el más grave?",
      opciones: [
        "En tres grados; el tercero es el más grave.",
        "En cuatro grados; el primero es el más grave.",
        "En dos grados; el segundo es el más grave.",
        "En tres grados; el primero es el más grave.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Las quemaduras se clasifican en tres grados. El primero afecta solo a la epidermis (menos grave), el segundo a la dermis (moderada) y el tercero a todas las capas de la piel, incluso tejidos más profundos (más grave).",
    },
    {
      id: 6706,
      moduloId: 606,
      pregunta: "¿Qué indica el color rojo en un triaje de emergencia?",
      opciones: [
        "Emergencia vital: requiere atención inmediata.",
        "Leve: puede esperar asistencia.",
        "Fallecido o sin posibilidad de supervivencia.",
        "Urgencia moderada.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "El color rojo en el triaje significa que la víctima tiene lesiones que amenazan la vida y necesita atención inmediata para sobrevivir.",
    },
    {
      id: 6707,
      moduloId: 606,
      pregunta: "¿Qué indica el color amarillo en un triaje de emergencia?",
      opciones: [
        "Urgencia moderada: puede esperar asistencia.",
        "Emergencia vital: requiere atención inmediata.",
        "Fallecido o sin posibilidad de supervivencia.",
        "Sin heridas aparentes.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "El color amarillo en el triaje representa urgencias que no son críticas pero sí importantes, y que deben atenderse tras los casos rojos.",
    },
    {
      id: 6708,
      moduloId: 606,
      pregunta: "¿Qué indica el color verde en un triaje de emergencia?",
      opciones: [
        "Lesión leve: puede esperar o incluso marcharse por su propio pie.",
        "Emergencia vital: requiere atención inmediata.",
        "Urgencia quirúrgica.",
        "Fallecimiento inminente.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "El color verde en el triaje indica que el paciente presenta lesiones leves y puede esperar tratamiento o incluso valerse por sí mismo.",
    },
    {
      id: 6709,
      moduloId: 606,
      pregunta: "¿Qué indica el color negro en un triaje de emergencia?",
      opciones: [
        "Fallecido o con lesiones incompatibles con la vida.",
        "Urgencia moderada.",
        "Paciente en observación.",
        "Enfermedad infecciosa.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "El color negro en el triaje se asigna a las víctimas que han fallecido o presentan lesiones tan graves que no es posible brindar asistencia eficaz con los recursos disponibles.",
    },
  ],
};
export default importanteExamen01;
