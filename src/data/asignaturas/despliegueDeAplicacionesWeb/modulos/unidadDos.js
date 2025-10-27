/**
 * Unidad 2: Arquitectura Web y Protocolos
 * Módulo no examen con preguntas sobre arquitectura cliente/servidor, HTTP/2, HTTP/3 y HTTPS.
 */
const moduloUnidadDosArquitecturaYProtocolos = {
  id: 800,
  nombre: "Unidad 2: Arquitectura Web y Protocolos",
  titulo: "Arquitectura Web y Protocolos",
  descripcion: "Cliente/servidor, códigos HTTP, HTTP/2, HTTP/3 (QUIC) y HTTPS",
  esExamen: false,
  asignaturaId: 8,
  preguntas: [
    {
      id: 8001,
      pregunta: "¿Qué rol cumple el cliente en la arquitectura web?",
      opciones: [
        "Envía solicitudes al servidor",
        "Responde a las peticiones",
        "Administra la base de datos",
        "Cifra el tráfico"
      ],
      respuestaCorrecta: 0,
      explicacion: "El cliente inicia la comunicación enviando solicitudes al servidor."
    },
    {
      id: 8002,
      pregunta: "¿Qué código HTTP indica éxito en la respuesta?",
      opciones: ["404", "200", "500", "301"],
      respuestaCorrecta: 1,
      explicacion: "La familia 2xx indica éxito; 200 OK es la respuesta más común."
    },
    {
      id: 8003,
      pregunta: "¿Qué mejora principal aporta HTTP/2?",
      opciones: [
        "Mayor seguridad",
        "Multiplexing (varios recursos en una conexión)",
        "Uso exclusivo en móviles",
        "Evitar uso de contraseñas"
      ],
      respuestaCorrecta: 1,
      explicacion: "HTTP/2 permite multiplexar múltiples solicitudes/respuestas en una sola conexión."
    },
    {
      id: 8004,
      pregunta: "¿Sobre qué protocolo se basa HTTP/3?",
      opciones: ["TCP", "FTP", "SMTP", "UDP"],
      respuestaCorrecta: 3,
      explicacion: "HTTP/3 usa QUIC, que funciona sobre UDP."
    },
    {
      id: 8005,
      pregunta: "¿Por qué HTTP/3 es más eficiente en móviles?",
      opciones: [
        "Porque usa conexiones persistentes y rápidas",
        "Porque requiere menos batería",
        "Porque solo descarga imágenes",
        "Porque elimina el cifrado"
      ],
      respuestaCorrecta: 0,
      explicacion: "QUIC (HTTP/3) reduce latencia y recupera mejor ante cambios de red."
    },
    {
      id: 8006,
      pregunta: "¿Qué significa la “S” en HTTPS?",
      opciones: ["Seguro", "Servidor", "Sistema", "Software"],
      respuestaCorrecta: 0,
      explicacion: "HTTPS añade una capa de seguridad mediante TLS."
    },
    {
      id: 8007,
      pregunta: "¿Qué función cumple un certificado SSL/TLS?",
      opciones: [
        "Guardar contraseñas",
        "Aumentar la velocidad del servidor",
        "Validar identidad y cifrar comunicaciones",
        "Evitar spam en correos"
      ],
      respuestaCorrecta: 2,
      explicacion: "Autentica al servidor y permite cifrar el canal."
    },
    {
      id: 8008,
      pregunta: "¿Cuál es una ventaja de usar HTTPS?",
      opciones: [
        "Protege la integridad de los datos",
        "Reduce consumo de ancho de banda",
        "Evita actualizaciones automáticas",
        "Hace innecesario un firewall"
      ],
      respuestaCorrecta: 0,
      explicacion: "TLS protege confidencialidad e integridad frente a manipulaciones."
    },
    {
      id: 8009,
      pregunta: "¿Cuál es una autoridad certificadora (CA)?",
      opciones: [
        "Un servidor DNS",
        "Una empresa que emite certificados digitales",
        "Un protocolo de cifrado",
        "Un plugin de WordPress"
      ],
      respuestaCorrecta: 1,
      explicacion: "Las CA emiten y validan certificados (p.ej., Let's Encrypt)."
    },
    {
      id: 8010,
      pregunta: "¿Qué herramienta permite instalar certificados gratuitos y automáticos?",
      opciones: ["Certbot", "PuTTY", "Traceroute", "Curl"],
      respuestaCorrecta: 0,
      explicacion: "Certbot automatiza la obtención/renovación de certificados de Let's Encrypt."
    }
  ]
};

export default moduloUnidadDosArquitecturaYProtocolos;