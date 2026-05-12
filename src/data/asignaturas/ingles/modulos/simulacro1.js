const moduloSimulacro1Ingles = {
  id: 1605,
  asignaturaId: 16,
  nombre: "Simulacro 1: Inglés Profesional",
  titulo: "Inglés Profesional",
  descripcion:
    "Cierre de llamadas, future going to, gramática correcta, acuerdo profesional, gestión de sugerencias, confirmación de comprensión, tono en mensajes internos, past simple secuencial, past continuous con interrupción, email formal externo, registro técnico, past simple doble y conectores.",
  esExamen: true,
  preguntas: [
    {
      id: 16101,
      pregunta:
        "Choose the most polite way to end a professional phone call with a client:",
      opciones: [
        "OK, bye.",
        "Talk soon. Goodbye.",
        "Thank you for your time. It was a pleasure speaking with you. Have a great day.",
        "That's all. Goodbye.",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "El cierre profesional incluye agradecimiento específico ('Thank you for your time'), reconocimiento positivo ('pleasure speaking with you') y despedida cortés. Las otras opciones son demasiado abruptas o informales para comunicación con clientes.",
    },
    {
      id: 16102,
      pregunta:
        "Complete the sentence with the correct future structure: The developers have confirmed they _______ (deploy) the update tomorrow morning.",
      opciones: [
        "deploying will",
        "will deploy it",
        "will to deploy",
        "are going to deploy",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "Cuando existe un plan previo o decisión ya tomada y confirmada, se usa 'be going to'. 'Have confirmed' indica que la decisión ya fue tomada, por lo que 'are going to deploy' es la forma correcta. 'Will' sería para decisiones espontáneas.",
    },
    {
      id: 16103,
      pregunta: "Identify the grammatically correct sentence:",
      opciones: [
        "The department manager not have completed the analysis yet.",
        "The department manager have not complete the analysis yet.",
        "The department manager hasn't completed the analysis yet.",
        "The department manager hasn't complete the analysis yesterday.",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Presente perfecto negativo con sujeto singular: hasn't + past participle (completed). 'Hasn't' es la contracción correcta. Las otras opciones tienen errores de concordancia, ausencia de auxiliar o participio incorrecto.",
    },
    {
      id: 16104,
      pregunta:
        "Your manager supports your proposal and you want to acknowledge this while adding a supplementary consideration. Which response best demonstrates professional agreement with addition?",
      opciones: [
        "You're right, but there's a better idea.",
        "That's obvious; let's move on.",
        "I disagree with most of that.",
        "That's an excellent point, and I would also like to explore funding options for the infrastructure upgrades.",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "Valida explícitamente ('excellent point'), usa 'and' para añadir (no 'but' para contrastar) y aporta un punto concreto y relevante. Las otras opciones minimizan, contradicen o rechazan en lugar de acordar y ampliar.",
    },
    {
      id: 16105,
      pregunta:
        "A teammate suggests adding a complex feature that seems unrealistic given the current timeline and resources. Which response is most professional?",
      opciones: [
        "That's impossible. It will never work.",
        "Your idea is terrible. We should ignore it.",
        "I appreciate your suggestion. Could we analyze the feasibility regarding our current timeline and resources?",
        "No way. We don't have time for that.",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Reconoce la sugerencia ('I appreciate'), propone un proceso ('Could we analyze') y plantea las limitaciones reales sin atacar a la persona. Las otras opciones son directamente negativas o despectivas.",
    },
    {
      id: 16106,
      pregunta:
        "During a meeting, your supervisor delegates several responsibilities. What is the most professional way to confirm your understanding?",
      opciones: [
        "I understand, no problem.",
        "Got it, I'll do whatever you need.",
        "Just to clarify, I'm responsible for the Q3 analysis, client communications, and the website audit, correct?",
        "Umm, I think you said something about reports?",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "'Just to clarify...' demuestra escucha activa reformulando específicamente las responsabilidades. Confirma comprensión con detalle y pide validación. Las otras opciones son vagas, informales o muestran confusión.",
    },
    {
      id: 16107,
      pregunta:
        "You are composing a message to a colleague from your department with whom you work regularly. What tone is most appropriate?",
      opciones: [
        "Hey Sarah, can you help me with the files? Much appreciated!",
        "Madam, I respectfully request your collaboration on this matter.",
        "To Whom It May Concern, I would be grateful for your assistance with the project.",
        "Good morning, Ms. Robinson. I would like to request your professional guidance.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Para un colega con quien se trabaja regularmente, el registro informal-amigable es el más natural. Saludo por nombre, petición directa y agradecimiento breve. Las otras opciones son excesivamente formales para esa relación.",
    },
    {
      id: 16108,
      pregunta:
        "Which past form is correct in this sequence of events: First, the marketing team created the campaign. Second, they _______ (launch) it across all social media platforms.",
      opciones: ["launched", "were launching", "have launched", "had launched"],
      respuestaCorrecta: 0,
      explicacion:
        "Dos acciones pasadas en secuencia con orden explícito (First... Second). Pasado simple ('launched') es suficiente para narrar eventos en orden cronológico. El past perfect sería necesario sin ese conector temporal.",
    },
    {
      id: 16109,
      pregunta:
        "Select the sentence with the correct past simple form: The server _______ (crash) while the IT team _______ (perform) the maintenance.",
      opciones: [
        "crashed / was performing",
        "had crashed / performed",
        "crashed / performed",
        "was crashing / was performing",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Estructura de interrupción: past simple ('crashed') para el evento que interrumpe, past continuous ('was performing') para la acción en progreso. 'While' introduce la acción de fondo en curso.",
    },
    {
      id: 16110,
      pregunta:
        "Complete with the correct past tense: Last week, the design team _______ (present) their mockups to the client.",
      opciones: ["presented", "had presented", "presents", "will present"],
      respuestaCorrecta: 0,
      explicacion:
        "Acción completada en el pasado con marcador temporal definido ('last week') → pasado simple. No hay relación con el presente ni necesidad de marcar anterioridad, así que past perfect no aplica.",
    },
    {
      id: 16111,
      pregunta:
        "Which introduction is most appropriate for a formal professional email to an external client?",
      opciones: [
        "Hi there! I'm reaching out about the project update.",
        "Dear Mr. Johnson, I am writing to provide you with the latest project report.",
        "Hey! Just wanted to touch base on the new software.",
        "What's up? I've got some info for you about the system.",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Apertura formal: saludo con título y apellido ('Dear Mr. Johnson'), estructura declarativa de propósito ('I am writing to') y vocabulario preciso. Las otras opciones usan registro coloquial inapropiado para clientes externos.",
    },
    {
      id: 16112,
      pregunta:
        "Which opening is most appropriate for a formal email requesting information from an external IT vendor?",
      opciones: [
        "Dear Sir or Madam, I am writing to inquire about your enterprise software solution.",
        "What's up? Tell me about your new software.",
        "So I need some info on your latest product.",
        "Hi there! Quick question about your software solution.",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Los correos formales a externos requieren saludo formal ('Dear Sir or Madam'), estructura declarativa ('I am writing') y terminología técnica precisa ('inquire', 'enterprise software'). Los otros usan tonos coloquiales inapropiados.",
    },
    {
      id: 16113,
      pregunta:
        "Identify the correct register for this sentence: 'The deployment was deferred due to unresolved critical bugs in the staging environment.'",
      opciones: [
        "Informal/Casual",
        "Formal/Technical",
        "Conversational",
        "Colloquial",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Vocabulario técnico preciso ('deployment', 'deferred', 'staging environment'), voz pasiva formal ('was deferred') y ausencia total de coloquialismos definen el registro Formal/Technical.",
    },
    {
      id: 16114,
      pregunta:
        "Complete with the correct past form: 'The security audit _______ (reveal) several vulnerabilities. After that, the team _______ (implement) immediate patches.'",
      opciones: [
        "reveals / implements",
        "had revealed / implemented",
        "revealed / implemented",
        "revealed / had implemented",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Dos acciones pasadas en secuencia con 'after that' como conector. Ambas en pasado simple. El past perfect sería necesario sin ese conector para marcar anterioridad, pero 'after that' hace la secuencia explícita.",
    },
    {
      id: 16115,
      pregunta:
        "What does the phrase 'Let's arrange a workshop' mean in a professional context?",
      opciones: [
        "To inform someone of an already confirmed event.",
        "To propose organizing a training session or working group meeting.",
        "To physically build something in a technical space.",
        "To cancel a previously scheduled meeting.",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "'Arrange' significa organizar; 'workshop' en contexto corporativo es una sesión de formación o reunión de trabajo colaborativo. La frase propone planificar este evento.",
    },
    {
      id: 16116,
      pregunta:
        "Fill in the correct past tense forms: The network _______ (fail) while the technicians _______ (install) the new hardware.",
      opciones: [
        "fails / are installing",
        "were failing / install",
        "failed / were installing",
        "fail / installing",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Past simple ('failed') para el evento que interrumpe, past continuous ('were installing') para la acción en progreso cuando ocurrió. 'While' introduce la acción de fondo.",
    },
    {
      id: 16117,
      pregunta:
        "Complete the sentence with the appropriate connector: 'The system performed well during development. ______, significant issues emerged during the testing phase.'",
      opciones: ["However", "Therefore", "Meanwhile", "Furthermore"],
      respuestaCorrecta: 0,
      explicacion:
        "'However' (sin embargo) introduce contraste: el sistema funcionó bien en desarrollo pero tuvó problemas en testing. 'Therefore' indica consecuencia, 'Meanwhile' simultaneidad, 'Furthermore' adición.",
    },
    {
      id: 16118,
      pregunta:
        "Select the most appropriate formal register opening for a professional email to a client:",
      opciones: [
        "What's up? Need to talk about the project.",
        "Hey! Just wanted to check in with you.",
        "Hi there! Hope you're having a great day!",
        "Dear Mr./Ms. [Name], I hope this email finds you well.",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "La apertura formal estándar incluye saludo con título y nombre, y una frase de cortesía establecida. Las otras opciones son informales, coloquiales o carecen del nivel de formalidad requerido.",
    },
    {
      id: 16119,
      pregunta:
        "Choose the correct connector: The database migration was successful. ______, the team documented all procedures thoroughly for future reference.",
      opciones: ["Moreover", "Nevertheless", "However", "On the other hand"],
      respuestaCorrecta: 0,
      explicacion:
        "'Moreover' añade información adicional positiva que complementa el éxito de la migración. 'Nevertheless' y 'However' introducen contraste que no existe aquí. 'On the other hand' también introduce contraste o alternativa.",
    },
    {
      id: 16120,
      pregunta:
        "Which of the following is the most suitable self-introduction for a professional software development conference?",
      opciones: [
        '"Good afternoon. I am Alexandra Chen, Senior Full-Stack Developer at InnovateTech Solutions. I specialize in scalable web applications and have over eight years of industry experience."',
        '"Hi everyone, I\'m Alex from the company, I do programming and technical things for work."',
        '"Hi, I\'m Alex, I code stuff and debug things, you know, tech things basically."',
        '"Hey Alex here, I work in tech and sometimes fix bugs."',
      ],
      respuestaCorrecta: 0,
      explicacion:
        "La introducción profesional incluye saludo formal, nombre completo, cargo específico con empresa, especialidad y experiencia cuantificada. Las otras opciones usan lenguaje vago o informal para un contexto de conferencia.",
    },
    {
      id: 16121,
      pregunta: "What does the expression 'to set up a training session' mean?",
      opciones: [
        "Attend a training session",
        "Organize and schedule a training session",
        "Cancel a training session",
        "Postpone a training session",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "'Set up' como phrasal verb significa organizar, preparar o establecer algo desde cero. Implica la planificación y organización del evento, no simplemente asistir, cancelar ni posponer.",
    },
    {
      id: 16122,
      pregunta:
        "Select the correct sentence that appropriately describes a procedure that occurred in sequence:",
      opciones: [
        "The developers had coded, tested, and deploying the application.",
        "First, the developers coded the application. Then they tested it. Finally, they deployed it.",
        "The developers are coding the application. They test it. Then they deploy.",
        "The developers deploy the application. They test it. They code it first.",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "La secuencia se describe en pasado simple con marcadores temporales explícitos ('First', 'Then', 'Finally'), lo que es gramaticalmente correcto y claro. La opción A mezcla tiempos y estructuras incorrectamente.",
    },
  ],
};

export default moduloSimulacro1Ingles;
