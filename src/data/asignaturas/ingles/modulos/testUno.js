const moduloTestUnoIngles = {
  id: 1601,
  asignaturaId: 16,
  nombre: "Test 1: Business English",
  titulo: "Business English",
  descripcion: "Tiempos verbales, registro formal/informal, fórmulas de cortesía, llamadas telefónicas profesionales y falsos amigos.",
  esExamen: true,
  preguntas: [
    {
      id: 16001,
      pregunta: "She ____ (talk) to customers on the phone at that moment.",
      opciones: [
        "talked",
        "talks",
        "was talking",
        "talk"
      ],
      respuestaCorrecta: 2,
      explicacion: "\"At that moment\" señala una acción en progreso en el pasado. El pasado continuo (was talking) es correcto para expresar una acción que estaba ocurriendo en un momento específico del pasado."
    },
    {
      id: 16002,
      pregunta: "According to the IT plan, the team __ (upgrade) the software tonight.",
      opciones: [
        "will upgrade",
        "is going to upgrade",
        "will upgrades",
        "is going upgrading"
      ],
      respuestaCorrecta: 1,
      explicacion: "\"According to the IT plan\" indica una decisión o plan ya establecido. \"Is going to upgrade\" expresa planes preexistentes. El contexto de plan previo favorece \"going to\"."
    },
    {
      id: 16003,
      pregunta: "First, the manager checked the report. Second, he sent it to the team. ⇒ He checked the report and later he ___ it to the team.",
      opciones: [
        "has sent",
        "was sending",
        "sended",
        "sent"
      ],
      respuestaCorrecta: 3,
      explicacion: "Dos acciones completadas en el pasado requieren pasado simple (sent). \"Sended\" es incorrecto (sent es irregular). El pasado simple conecta naturalmente dos eventos secuenciales."
    },
    {
      id: 16004,
      pregunta: "The IT department _ (install) the new software at 2 p.m. on Thursday.",
      opciones: [
        "will install",
        "is going to install",
        "is installing",
        "install"
      ],
      respuestaCorrecta: 2,
      explicacion: "Con hora y día específicos (\"at 2 p.m. on Thursday\"), el presente continuo expresa un plan futuro confirmado. \"Is installing\" es perfecto para arreglos ya establecidos."
    },
    {
      id: 16005,
      pregunta: "First, she collected customer data. Second, she wrote the report. ⇒ She wrote the report using the data she ___.",
      opciones: [
        "collected",
        "has collected",
        "had collected",
        "was collecting"
      ],
      respuestaCorrecta: 2,
      explicacion: "La acción de recolectar datos ocurrió primero, luego escribió. El pasado perfecto (had collected) muestra la secuencia temporal correcta: una acción anterior a otra acción pasada."
    },
    {
      id: 16006,
      pregunta: "Our team ___ (work) on a new mobile app now.",
      opciones: [
        "works",
        "has worked",
        "is working",
        "work"
      ],
      respuestaCorrecta: 2,
      explicacion: "\"Now\" indica una acción en curso en el presente. El presente continuo (is working) expresa acciones ocurriendo en este momento."
    },
    {
      id: 16007,
      pregunta: "Look! The printer ___ (work) again.",
      opciones: [
        "aren't working",
        "work",
        "isn't working",
        "working"
      ],
      respuestaCorrecta: 2,
      explicacion: "\"Look!\" introduce una observación presente. La negación requiere \"isn't working\" (present continuous negativo). El sujeto \"printer\" es singular, por lo que necesita \"isn't\" no \"aren't\"."
    },
    {
      id: 16008,
      pregunta: "First, we planned the campaign. Second, we launched it. ⇒ We launched the campaign after we _ it.",
      opciones: [
        "planed",
        "have planned",
        "had planned",
        "were planning"
      ],
      respuestaCorrecta: 2,
      explicacion: "Planificar ocurrió antes de lanzar (ambas acciones pasadas). El pasado perfecto (had planned) establece que planificar fue anterior a lanzar."
    },
    {
      id: 16009,
      pregunta: "Last week we ____ (write) a report on customer behaviour.",
      opciones: [
        "wrote",
        "writed",
        "write",
        "writted"
      ],
      respuestaCorrecta: 0,
      explicacion: "\"Last week\" es tiempo pasado completo. El pasado simple (wrote) es correcto. \"Writed\" y \"writted\" son ortografías incorrectas del verbo irregular write (wrote, written)."
    },
    {
      id: 16010,
      pregunta: "They ____ (collect) data for the project when the lights went out.",
      opciones: [
        "were collecting",
        "was collecting",
        "collect",
        "collecting"
      ],
      respuestaCorrecta: 0,
      explicacion: "\"When the lights went out\" interrumpe una acción en progreso. El pasado continuo (were collecting) muestra la acción durando cuando pasó algo más. \"Was collecting\" es singular (incorrecto con \"they\")."
    },
    {
      id: 16011,
      pregunta: "Which introduction BEST represents a Formal Register?",
      opciones: [
        "\"Hey, I'm Carlos. I work in IT support. Nice to meet you! Do you work on the same floor?\"",
        "\"Good morning, my name is Carlos Duarte, and I oversee IT system operations. I look forward to supporting your department during this transition.\"",
        "\"Hi, I'm Carlos from IT. I'll help with the technical setup today.\"",
        "\"Hi there! I'm Carlos. I fix the tech stuff around here.\""
      ],
      respuestaCorrecta: 1,
      explicacion: "El registro formal usa: \"Good morning\" (saludo formal), nombre completo, títulos exactos, vocabulario profesional (\"oversee\", \"look forward to supporting\"), oraciones complejas bien estructuradas y tono respetuoso."
    },
    {
      id: 16012,
      pregunta: "Which introduction BEST represents a Standard Professional Register?",
      opciones: [
        "\"Hello, my name is Maria Sánchez, Senior Operations Consultant. It is an honour to meet your leadership team today.\"",
        "\"Hi, I'm Maria from operations. Looking forward to being here supporting the process\"",
        "\"Hey! I'm Maria. I work in ops. How's it going?\"",
        "\"Hi, what's up? This is Maria Sánchez speaking. How long have you been working here?\""
      ],
      respuestaCorrecta: 1,
      explicacion: "El registro estándar profesional balancea: \"Hi\" y \"I'm Maria\" son accesibles; \"from operations\" identifica rol; \"Looking forward to being here supporting the process\" muestra profesionalismo moderado sin exceso."
    },
    {
      id: 16013,
      pregunta: "Which introduction MOST closely matches the Formal Register definition?",
      opciones: [
        "\"Hi, I'm Steven from IT security. I'll help set up your accounts.\"",
        "\"Hey, I'm Steven. I'm the security guy around here.\"",
        "\"Good afternoon. My name is Steven Lin, IT Security Analyst. I look forward to supporting your system implementation.\"",
        "\"Hi there! Steven here from security. Let me know what you need.\""
      ],
      respuestaCorrecta: 2,
      explicacion: "Elementos formales presentes: \"Good afternoon\" (saludo formal), nombre completo con apellido, título profesional completo, estructura de oración compleja y objetiva, \"look forward to supporting\" (expresión formal de disponibilidad)."
    },
    {
      id: 16014,
      pregunta: "What is our intention when we start a sentence with \"Please allow me to assist you with…\"?",
      opciones: [
        "Offering help",
        "Making requests",
        "Expressing disagreement",
        "Making friends"
      ],
      respuestaCorrecta: 0,
      explicacion: "\"Please allow me to assist you with...\" es una fórmula de cortesía que ofrece ayuda proactiva. La estructura \"allow me to assist\" expresa disponibilidad para ayudar."
    },
    {
      id: 16015,
      pregunta: "Which courtesy formula is the most casual?",
      opciones: [
        "I'd be happy to help you with…",
        "Could you please…?",
        "With respect, I would suggest an alternative approach",
        "Hmm, not sure about that…"
      ],
      respuestaCorrecta: 3,
      explicacion: "\"Hmm, not sure about that...\" es extremadamente casual, dudosa y poco profesional. Las otras opciones mantienen algún nivel de formalidad profesional."
    },
    {
      id: 16016,
      pregunta: "Which courtesy formula is the most standard?",
      opciones: [
        "No way I'll do that!",
        "Please allow me to introduce myself",
        "Could you please…?",
        "Can you help me?"
      ],
      respuestaCorrecta: 2,
      explicacion: "\"Could you please...?\" es la fórmula estándar equilibrada: educada, clara, directa y ampliamente aceptada profesionalmente. Es el estándar universal en comunicación profesional moderna."
    },
    {
      id: 16017,
      pregunta: "Imagine you are asked to join a meeting at a bad time. What is the most diplomatic way to respond?",
      opciones: [
        "You'll have to go without me",
        "I won't be there",
        "That's not convenient for me, cancel it",
        "Perhaps we could reschedule the meeting?"
      ],
      respuestaCorrecta: 3,
      explicacion: "\"Perhaps we could reschedule the meeting?\" es diplomática: usa \"perhaps\" (suaviza), pregunta colaborativa, ofrece solución. No rechaza directamente. Mantiene relaciones mientras resuelve el conflicto."
    },
    {
      id: 16018,
      pregunta: "Which phrase is used to ask a question during the main business / exchanging information part of a call?",
      opciones: [
        "\"Could you tell me…\"",
        "\"Have a good afternoon\"",
        "\"Let me summarize what we've agreed…\"",
        "\"The reason for my call is…\""
      ],
      respuestaCorrecta: 0,
      explicacion: "Durante la fase de negocios (business/exchanging information), se hacen preguntas para obtener datos. \"Could you tell me...\" es una pregunta clara durante esta sección."
    },
    {
      id: 16019,
      pregunta: "Which phrase is used to check understanding or confirm agreements?",
      opciones: [
        "\"The next step is…\"",
        "\"So, to confirm…\"",
        "\"I'm calling about…\"",
        "\"Thank you for your time\""
      ],
      respuestaCorrecta: 1,
      explicacion: "\"So, to confirm...\" es la frase específica para verificar comprensión y confirmar acuerdos. La estructura \"to confirm\" indica síntesis y validación."
    },
    {
      id: 16020,
      pregunta: "Which phrase can you use to summarize what has been agreed on a call?",
      opciones: [
        "\"Let me summarize what we've agreed…\"",
        "\"Good morning, this is [Name]…\"",
        "\"Let me explain the situation…\"",
        "\"I need to confirm…\""
      ],
      respuestaCorrecta: 0,
      explicacion: "\"Let me summarize what we've agreed...\" es la frase específica para resumir acuerdos finales. \"We've agreed\" indica consenso previo que se sintetiza."
    },
    {
      id: 16021,
      pregunta: "Don't worry! I _ (help) you with the report if you want.",
      opciones: [
        "will help",
        "am going to help",
        "will to help",
        "am helping"
      ],
      respuestaCorrecta: 0,
      explicacion: "Una decisión espontánea expresada con \"Don't worry!\" requiere \"will help\". Es una oferta inmediata de ayuda, no un plan previo. \"Will\" expresa disponibilidad espontánea."
    },
    {
      id: 16022,
      pregunta: "The sales manager __(present) the new strategy soon.",
      opciones: [
        "will present",
        "is going to present",
        "is presenting",
        "is going to presents"
      ],
      respuestaCorrecta: 1,
      explicacion: "\"Soon\" indica un plan cercano previamente establecido. \"Is going to present\" expresa un plan ya decidido. \"Going to\" es correcto para planes próximos."
    },
    {
      id: 16023,
      pregunta: "According to the IT plan, the team __(upgrade) the software tonight.",
      opciones: [
        "will upgrade",
        "is going to upgrade",
        "will upgrades",
        "is going upgrading"
      ],
      respuestaCorrecta: 1,
      explicacion: "\"According to the IT plan\" establece que la acción está ya planificada. \"Is going to upgrade\" es la forma correcta para planes previos."
    },
    {
      id: 16024,
      pregunta: "Situation: Someone talks too fast while presenting a new process. Your response:",
      opciones: [
        "\"Could you explain what you mean by 'optimization'?\"",
        "\"Could you repeat that, please?\"",
        "\"Are you saying the client changed?\"",
        "\"So, if I understand correctly, it's approved.\""
      ],
      respuestaCorrecta: 1,
      explicacion: "Cuando alguien habla demasiado rápido, se pide que repita. \"Could you repeat that, please?\" es la respuesta directa y apropiada para el problema de velocidad."
    },
    {
      id: 16025,
      pregunta: "Situation: A coworker describes a situation, but you want a concrete example. Your response:",
      opciones: [
        "\"Could you give me an example?\"",
        "\"Could you say that again?\"",
        "\"I didn't quite catch the last part.\"",
        "\"Do you mean the file is missing?\""
      ],
      respuestaCorrecta: 0,
      explicacion: "Para solicitar un ejemplo concreto, la pregunta es \"Could you give me an example?\". Es directa y clara para solicitar evidencia concreta."
    },
    {
      id: 16026,
      pregunta: "Translate into English: \"Él te puede ayudar en la configuración del software.\"",
      opciones: [
        "He can attend you in the software setup.",
        "He can assist you in the software setup.",
        "He can pretend you in the software setup.",
        "He can realize you in the software setup."
      ],
      respuestaCorrecta: 1,
      explicacion: "\"Assist\" es el verbo correcto para \"ayudar\" en contexto profesional. \"Attend\" (atender) es incorrecto; \"pretend\" significa fingir; \"realize\" significa darse cuenta."
    },
    {
      id: 16027,
      pregunta: "What is the correct meaning of \"actual\" in English?",
      opciones: [
        "Current",
        "Actual (same as Spanish)",
        "Eventual",
        "Compromise"
      ],
      respuestaCorrecta: 0,
      explicacion: "En inglés, \"actual\" significa \"current\" o \"real\". Es una falsa amistad con el español \"actual\". \"Current\" es la mejor traducción para \"actual\" en contexto temporal."
    },
    {
      id: 16028,
      pregunta: "She __ (check) the campaign results when she __ (notice) a mistake.",
      opciones: [
        "checks / noticed",
        "was checking / noticed",
        "checked / was noticing",
        "was checking / was noticing"
      ],
      respuestaCorrecta: 1,
      explicacion: "Una acción en progreso (checking) es interrumpida por otra (notice). \"Was checking / noticed\" muestra la estructura correcta: pasado continuo + pasado simple."
    },
    {
      id: 16029,
      pregunta: "While the team __ (discuss) the budget, the manager __ (arrive).",
      opciones: [
        "discussed / arrived",
        "was discussing / arrived",
        "was discussing / were arriving",
        "discussed / was arriving"
      ],
      respuestaCorrecta: 1,
      explicacion: "\"While\" introduce una acción durando cuando algo más ocurre. \"Was discussing / arrived\" es correcto: pasado continuo (acción larga) + pasado simple (acción que interrumpe)."
    },
    {
      id: 16030,
      pregunta: "The server ___ (work) since last night, so we can't access the data.",
      opciones: [
        "are running",
        "has been ran",
        "hasn't worked",
        "works"
      ],
      respuestaCorrecta: 2,
      explicacion: "\"Since last night\" hasta ahora indica presente perfecto. \"Hasn't worked\" expresa: empezó sin funcionar desde anoche y continúa así. Captura la duración desde \"last night\" hasta ahora."
    }
  ]
};

export default moduloTestUnoIngles;