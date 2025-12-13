/**
 * Unidad 7: Seguridad en el despliegue
 */
const moduloUnidadSieteSeguridadDespliegue = {
  id: 805,
  asignaturaId: 8,
  nombre: "Unidad 7: Seguridad en el despliegue",
  titulo: "Seguridad en el despliegue",
  descripcion:
    "Gestión de firewall (UFW), puertos seguros, tareas programadas (cron) y principios de copias de seguridad (3-2-1).",
  esExamen: false,
  preguntas: [
    {
      id: 8056,
      pregunta: "¿Qué herramienta configura reglas de acceso en Ubuntu?",
      opciones: ["wget", "ssh", "cron", "ufw"],
      respuestaCorrecta: 3,
      explicacion:
        "UFW (Uncomplicated Firewall) simplifica la gestión de reglas de firewall en Ubuntu." 
    },
    {
      id: 8057,
      pregunta: "¿Qué puerto usa HTTPS?",
      opciones: ["440", "443", "442", "400"],
      respuestaCorrecta: 1,
      explicacion:
        "HTTPS usa el puerto 443 por defecto para tráfico cifrado mediante TLS." 
    },
    {
      id: 8058,
      pregunta: "¿Qué comando programa tareas automáticas en Linux?",
      opciones: ["cron", "ssh-keygen", "docker run", "ping"],
      respuestaCorrecta: 0,
      explicacion:
        "cron ejecuta tareas programadas según una configuración de crontab." 
    },
    {
      id: 8059,
      pregunta: "¿Qué principio sigue la estrategia 3-2-1?",
      opciones: [
        "3 usuarios, 2 contraseñas, 1 red",
        "3 archivos, 2 logs, 1 servidor",
        "3 servidores, 2 firewalls, 1 backup",
        "3 copias, 2 soportes, 1 ubicación externa"
      ],
      respuestaCorrecta: 3,
      explicacion:
        "Mantener 3 copias, en 2 tipos de soporte y 1 ubicada fuera del sitio para resiliencia." 
    },
    {
      id: 8060,
      pregunta: "¿Qué protege un firewall?",
      opciones: [
        "Filtra tráfico no autorizado hacia o desde el servidor",
        "Bloquea inicios de sesión de administrador",
        "Hace copias de seguridad",
        "Encripta contraseñas"
      ],
      respuestaCorrecta: 0,
      explicacion:
        "El firewall controla el flujo de red permitiendo o bloqueando tráfico según reglas definidas." 
    }
  ]
};

export default moduloUnidadSieteSeguridadDespliegue;
