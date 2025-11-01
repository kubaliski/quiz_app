
/**
 * Unidad 4: Servicios de Red para el Despliegue
 * DNS (A, MX, CNAME, propagación) y herramientas de red (ping, traceroute, curl, MTR).
 */
const moduloUnidadCuatroServiciosRed = {
  id: 802,
  asignaturaId: 8,
  nombre: "Unidad 4: Servicios de Red para el Despliegue",
  titulo: "Servicios de Red para el Despliegue",
  descripcion: "DNS (A, AAAA, CNAME, MX), propagación y herramientas de red (ping, traceroute, curl, MTR) y puertos HTTP",
  esExamen: false,
  preguntas: [
    {
      id: 8026,
      pregunta: "¿Qué tipo de registro DNS asocia un dominio con una dirección IP?",
      opciones: ["TXT", "A", "CNAME", "MX"],
      respuestaCorrecta: 1,
      explicacion: "El registro A mapea un nombre de dominio a una IPv4."
    },
    {
      id: 8027,
      pregunta: "¿Qué registro define el servidor de correo?",
      opciones: ["AAAA", "MX", "CNAME", "A"],
      respuestaCorrecta: 1,
      explicacion: "El registro MX especifica los servidores de correo del dominio."
    },
    {
      id: 8028,
      pregunta: "¿Qué comando verifica la resolución DNS?",
      opciones: ["nslookup", "traceroute", "ssh", "scp"],
      respuestaCorrecta: 0,
      explicacion: "nslookup consulta servidores DNS para resolver nombres."
    },
    {
      id: 8029,
      pregunta: "¿Qué hace un CNAME?",
      opciones: [
        "Bloquea peticiones",
        "Cambia la IP de un servidor",
        "Indica prioridad de correo",
        "Crea un alias hacia otro dominio"
      ],
      respuestaCorrecta: 3,
      explicacion: "CNAME crea un alias que apunta a otro nombre de dominio."
    },
    {
      id: 8030,
      pregunta: "¿Por qué puede tardar en aplicarse un cambio DNS?",
      opciones: [
        "Por la caché y propagación",
        "Porque el dominio caducó",
        "Por error del usuario",
        "Por fallo en HTTPS"
      ],
      respuestaCorrecta: 0,
      explicacion: "La caché DNS y la propagación global introducen retrasos."
    },
    {
      id: 8031,
      pregunta: "¿Qué comando verifica si un host responde?",
      opciones: ["nslookup", "ping", "curl", "traceroute"],
      respuestaCorrecta: 1,
      explicacion: "ping envía ICMP echo y mide la latencia de respuesta."
    },
    {
      id: 8032,
      pregunta: "¿Qué herramienta muestra la ruta de paquetes?",
      opciones: ["ping", "traceroute", "netstat", "dig"],
      respuestaCorrecta: 1,
      explicacion: "traceroute muestra los saltos hasta el destino."
    },
    {
      id: 8033,
      pregunta: "¿Qué indica curl -I?",
      opciones: [
        "Cabeceras HTTP y código de estado",
        "Latencia ICMP",
        "Rutas de paquetes",
        "Archivos de configuración"
      ],
      respuestaCorrecta: 0,
      explicacion: "curl -I realiza una petición HEAD y muestra solo cabeceras."
    },
    {
      id: 8034,
      pregunta: "¿Qué puerto debe abrirse para HTTP?",
      opciones: ["8080", "80", "22", "53"],
      respuestaCorrecta: 1,
      explicacion: "HTTP usa el puerto 80 por defecto (HTTPS el 443)."
    },
    {
      id: 8035,
      pregunta: "¿Qué herramienta combina ping y traceroute?",
      opciones: ["MTR", "ifconfig", "ss", "Nmap"],
      respuestaCorrecta: 0,
      explicacion: "MTR (My Traceroute) combina latencia y ruta en tiempo real."
    }
  ]
};

export default moduloUnidadCuatroServiciosRed;