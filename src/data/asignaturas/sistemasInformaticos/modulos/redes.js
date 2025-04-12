/**
 * Datos del módulo de Redes perteneciente a la asignatura de Sistemas Informáticos.
 * Incluye información del módulo y sus preguntas asociadas para el quiz.
 *
 * @type {Object}
 * @property {number} id - Identificador único del módulo
 * @property {string} nombre - Nombre del módulo
 * @property {number} asignaturaId - ID de la asignatura a la que pertenece
 * @property {string} descripcion - Breve descripción del contenido del módulo
 * @property {Array<Object>} preguntas - Lista de preguntas para el quiz de este módulo
 * @property {number} preguntas[].id - Identificador único de la pregunta
 * @property {number} preguntas[].moduloId - ID del módulo al que pertenece la pregunta
 * @property {string} preguntas[].pregunta - Texto de la pregunta
 * @property {Array<string>} preguntas[].opciones - Lista de opciones de respuesta
 * @property {number} preguntas[].respuestaCorrecta - Índice (0-based) de la opción correcta
 * @property {string} preguntas[].explicacion - Explicación de la respuesta correcta
 *
 * @example
 * // Importar el módulo de Redes
 * import moduloRedes from '@data/modulos/redes';
 *
 * function QuizRedes() {
 *   return (
 *     <div>
 *       <h1>{moduloRedes.nombre}</h1>
 *       <p>{moduloRedes.descripcion}</p>
 *       <p>Este módulo contiene {moduloRedes.preguntas.length} preguntas.</p>
 *       <Button onClick={() => iniciarQuiz(moduloRedes.id)}>
 *         Iniciar Quiz
 *       </Button>
 *     </div>
 *   );
 * }
 */
export const moduloRedes = {
    id: 102,
    nombre: "Redes",
    asignaturaId: 1,
    descripcion: "Fundamentos de redes informáticas, topologías, protocolos y arquitecturas de red",
    preguntas: [
      {
        id: 2001,
        moduloId: 102,
        pregunta: "¿Cuál de las siguientes opciones NO es un componente del modelo de comunicación en informática?",
        opciones: ["Fuente", "Transmisor", "Codificador", "Destino"],
        respuestaCorrecta: 2,
        explicacion: "En un modelo de comunicación, los componentes clave son fuente, transmisor y destino, pero el codificador no es un elemento esencial por sí solo."
      },
      {
        id: 2002,
        moduloId: 102,
        pregunta: "¿Qué tipo de red cubre un área geográfica extensa, como regiones o países?",
        opciones: ["LAN", "PAN", "WAN", "MAN"],
        respuestaCorrecta: 2,
        explicacion: "Las redes WAN (Wide Area Network) cubren grandes distancias, como países o continentes."
      },
      {
        id: 2003,
        moduloId: 102,
        pregunta: "En una red con topología en estrella, si el nodo central falla, ¿qué ocurre?",
        opciones: ["Toda la red se cae", "Se desconectan solo algunos dispositivos", "Solo el nodo central queda afectado", "Se activan conexiones de respaldo automáticamente"],
        respuestaCorrecta: 0,
        explicacion: "En una topología en estrella, el nodo central gestiona la comunicación. Si falla, todos los dispositivos conectados a él quedan incomunicados."
      },
      {
        id: 2004,
        moduloId: 102,
        pregunta: "¿Cuál de los siguientes dispositivos de red permite conectar diferentes redes y dirigir el tráfico entre ellas?",
        opciones: ["Hub", "Switch", "Router", "Access Point"],
        respuestaCorrecta: 2,
        explicacion: "Un router es el dispositivo encargado de conectar redes diferentes y gestionar el tráfico de datos entre ellas."
      },
      {
        id: 2005,
        moduloId: 102,
        pregunta: "¿Cuál de las siguientes es una característica del protocolo IP?",
        opciones: ["Es orientado a conexión", "Garantiza la entrega de paquetes", "Es independiente del medio de transmisión", "Mantiene el estado de las conexiones"],
        respuestaCorrecta: 2,
        explicacion: "IP no depende del medio físico (cableado, fibra óptica, inalámbrico, etc.), lo que lo hace muy versátil."
      },
      {
        id: 2006,
        moduloId: 102,
        pregunta: "En el modelo OSI, ¿qué capa se encarga de la retransmisión de bits a través de un medio físico?",
        opciones: ["Capa de Transporte", "Capa de Red", "Capa Física", "Capa de Enlace de Datos"],
        respuestaCorrecta: 2,
        explicacion: "La Capa Física del modelo OSI se encarga de la transmisión de bits a través del medio físico, como cables o señales inalámbricas."
      },
      {
        id: 2007,
        moduloId: 102,
        pregunta: "¿Qué protocolo de la capa de Transporte en el modelo TCP/IP garantiza la entrega confiable de datos?",
        opciones: ["UDP", "TCP", "ICMP", "ARP"],
        respuestaCorrecta: 1,
        explicacion: "TCP (Transmission Control Protocol) garantiza la entrega ordenada y sin errores de los datos. UDP no ofrece confiabilidad."
      },
      {
        id: 2008,
        moduloId: 102,
        pregunta: "En el protocolo IP, ¿qué sucede si un paquete es demasiado grande para ser transmitido en una red específica?",
        opciones: ["Es descartado automáticamente", "Se divide en fragmentos más pequeños", "Se almacena en caché hasta que haya suficiente ancho de banda", "Se retransmite continuamente hasta que pueda enviarse completo"],
        respuestaCorrecta: 1,
        explicacion: "Si un paquete IP es más grande que el MTU (Maximum Transmission Unit) de la red, se fragmenta en partes más pequeñas."
      },
      {
        id: 2009,
        moduloId: 102,
        pregunta: "¿Qué mensaje del protocolo ICMP se utiliza para comprobar la disponibilidad de un host en la red?",
        opciones: ["Echo Request y Echo Reply", "TTL Exceeded", "Destination Unreachable", "Redirect"],
        respuestaCorrecta: 0,
        explicacion: "El protocolo ICMP usa estos mensajes para verificar si un host está activo en la red, como en el comando ping."
      },
      {
        id: 2010,
        moduloId: 102,
        pregunta: "¿Cuál de las siguientes direcciones NO pertenece a una dirección IPv4 de Clase B?",
        opciones: ["128.10.5.3", "172.16.45.22", "191.200.100.8", "192.168.1.1"],
        respuestaCorrecta: 3,
        explicacion: "Clase B abarca direcciones entre 128.0.0.0 y 191.255.255.255. La dirección 192.168.1.1 es Clase C."
      },
      {
        id: 2011,
        moduloId: 102,
        pregunta: "¿Qué tipo de dirección IPv4 se usa para enviar un paquete a todos los dispositivos de una red?",
        opciones: ["Unicast", "Multicast", "Broadcast", "Anycast"],
        respuestaCorrecta: 2,
        explicacion: "En broadcast, un paquete se envía a todos los dispositivos de la red (por ejemplo, 255.255.255.255 en IPv4)."
      },
      {
        id: 2012,
        moduloId: 102,
        pregunta: "En el modelo TCP/IP, ¿qué capa se encarga del direccionamiento y enrutamiento de paquetes?",
        opciones: ["Capa de Enlace", "Capa de Transporte", "Capa de Internet", "Capa de Aplicación"],
        respuestaCorrecta: 2,
        explicacion: "En el modelo TCP/IP, la Capa de Internet se encarga del direccionamiento y enrutamiento de los paquetes IP."
      },
      {
        id: 2013,
        moduloId: 102,
        pregunta: "¿Cuál de las siguientes direcciones es reservada para multicast en IPv4?",
        opciones: ["10.0.0.1", "192.168.1.1", "224.0.0.5", "172.16.0.1"],
        respuestaCorrecta: 2,
        explicacion: "Direcciones IPv4 en el rango 224.0.0.0 - 239.255.255.255 están reservadas para multicast."
      },
      {
        id: 2014,
        moduloId: 102,
        pregunta: "¿Qué función tiene la máscara de subred en una dirección IP?",
        opciones: ["Determinar si la IP es pública o privada", "Dividir una red grande en redes más pequeñas", "Identificar la dirección MAC de un host", "Convertir direcciones IPv4 a IPv6"],
        respuestaCorrecta: 1,
        explicacion: "La máscara de subred permite definir el tamaño de la red y separarla en subredes más pequeñas."
      },
      {
        id: 2015,
        moduloId: 102,
        pregunta: "En CIDR (Classless Inter-Domain Routing), ¿qué significa la notación /24 en la dirección 192.168.1.0/24?",
        opciones: ["Que los primeros 24 bits identifican la red", "Que la red tiene 24 dispositivos", "Que la dirección pertenece a IPv6", "Que la red se ha dividido en 24 subredes"],
        respuestaCorrecta: 0,
        explicacion: "En una dirección /24, los primeros 24 bits definen la red y los restantes 8 bits identifican los hosts."
      },
      {
        id: 2016,
        moduloId: 102,
        pregunta: "¿Cuál sería la máscara de subred para dividir la red 130.50.0.0 en 6 subredes?",
        opciones: ["255.255.255.0", "255.255.240.0", "255.255.224.0", "255.255.192.0"],
        respuestaCorrecta: 2,
        explicacion: "Para obtener 6 subredes, se requieren 3 bits adicionales en la máscara de una dirección de Clase B, resultando en /19 (255.255.224.0)."
      },
      {
        id: 2017,
        moduloId: 102,
        pregunta: "¿Cuántos hosts máximos puede tener cada subred en la división de la red 130.50.0.0 en 6 subredes?",
        opciones: ["8190", "4094", "2046", "1022"],
        respuestaCorrecta: 0,
        explicacion: "Con 13 bits para hosts en una subred /19, se pueden tener 2¹³ - 2 = 8190 hosts (se restan 2 para red y broadcast)."
      },
      {
        id: 2018,
        moduloId: 102,
        pregunta: "¿Cuál es la dirección de red de la subred 134 en la segmentación de la red 130.50.0.0 para un total de 170 subredes?",
        opciones: ["130.50.134.0", "130.50.160.0", "130.50.128.0", "130.50.96.0"],
        respuestaCorrecta: 0,
        explicacion: "Para 170 subredes se necesitan 8 bits, lo que da una máscara /16+8=/24, y la dirección de red para la subred 134 sería 130.50.134.0."
      },
      {
        id: 2019,
        moduloId: 102,
        pregunta: "¿Cuál es la dirección de broadcast de la subred 134 en la segmentación de la red 130.50.0.0 con un total del 250 subredes?",
        opciones: ["130.50.134.255", "130.50.159.255", "130.50.255.255", "130.50.192.255"],
        respuestaCorrecta: 0,
        explicacion: "Con 250 subredes se necesitan 8 bits (/24), y la dirección de broadcast para la subred 134 sería 130.50.134.255."
      },
      {
        id: 2020,
        moduloId: 102,
        pregunta: "¿Cuántos hosts utilizables hay en la subred 134 de la red 130.50.0.0 con un total de 254 subredes?",
        opciones: ["8190", "256", "254", "510"],
        respuestaCorrecta: 2,
        explicacion: "Con 254 subredes se necesitan 8 bits (/24), dejando 8 bits para hosts, lo que permite 2⁸-2=254 hosts utilizables."
      }
    ]
  };

  export default moduloRedes;