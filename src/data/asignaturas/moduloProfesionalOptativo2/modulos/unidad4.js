const moduloUnidadCuatroRedesEnLaNube = {
  id: 1003,
  asignaturaId: 10,
  nombre: "Unidad 4: Redes en la nube",
  titulo: "Redes en la nube",
  descripcion: "VPC, subredes públicas/privadas, Internet/NAT Gateway, Security Groups, Route 53 y balanceo",
  esExamen: false,
  preguntas: [
    {
      id: 10036,
      pregunta: "¿Qué componente permite la conexión directa a Internet en una VPC?",
      opciones: ["Route Table", "NAT Gateway", "Internet Gateway", "Security Group"],
      respuestaCorrecta: 2,
      explicacion: "Un Internet Gateway habilita conectividad directa a Internet para recursos en subred pública."
    },
    {
      id: 10037,
      pregunta: "¿Dónde se alojan las bases de datos en una arquitectura segura en AWS?",
      opciones: ["Subred pública", "Subred privada", "Internet Gateway", "Route Table"],
      respuestaCorrecta: 1,
      explicacion: "Las BBDD deben residir en subred privada, sin exposición directa a Internet."
    },
    {
      id: 10038,
      pregunta: "¿Qué función tiene un NAT Gateway?",
      opciones: [
        "Bloquear tráfico externo",
        "Redirigir tráfico interno a Internet sin exponer IP pública",
        "Conectar con otras regiones",
        "Monitorizar tráfico"
      ],
      respuestaCorrecta: 1,
      explicacion: "Permite salida a Internet desde subredes privadas manteniendo IPs privadas ocultas."
    },
    {
      id: 10039,
      pregunta: "¿Qué controla un Security Group?",
      opciones: [
        "El tráfico entrante y saliente por instancia",
        "El tráfico por subred",
        "Las rutas internas",
        "La asignación de IPs"
      ],
      respuestaCorrecta: 0,
      explicacion: "Es un firewall virtual a nivel de instancia, con reglas stateful."
    },
    {
      id: 10040,
      pregunta: "¿Cuál es la ventaja principal de usar subredes privadas?",
      opciones: ["Aumentar velocidad", "Mejorar seguridad", "Reducir costes", "Compartir direcciones IP"],
      respuestaCorrecta: 1,
      explicacion: "Restringen el acceso directo desde redes públicas a recursos internos."
    },
    {
      id: 10041,
      pregunta: "¿Qué función principal cumple Route 53?",
      opciones: ["Resolver nombres de dominio", "Almacenar datos", "Monitorizar instancias", "Crear subredes"],
      respuestaCorrecta: 0,
      explicacion: "Es el servicio DNS de AWS para resolver nombres y enrutar tráfico."
    },
    {
      id: 10042,
      pregunta: "¿Qué servicio distribuye tráfico entre instancias?",
      opciones: ["NAT Gateway", "Elastic Load Balancer", "CloudWatch", "S3"],
      respuestaCorrecta: 1,
      explicacion: "ELB reparte tráfico entre múltiples destinos para alta disponibilidad."
    },
    {
      id: 10043,
      pregunta: "¿Qué tipo de ruteo dirige al usuario a la región más cercana?",
      opciones: ["Latency routing", "Weighted routing", "Failover routing", "Simple routing"],
      respuestaCorrecta: 0,
      explicacion: "Enruta a la región con menor latencia percibida por el usuario."
    },
    {
      id: 10044,
      pregunta: "¿Qué ocurre si un endpoint falla y hay failover configurado?",
      opciones: [
        "La aplicación se detiene",
        "Se borra el registro DNS",
        "Se lanza un nuevo servidor automáticamente",
        "Route 53 redirige el tráfico a un endpoint saludable"
      ],
      respuestaCorrecta: 3,
      explicacion: "Con health checks y failover, Route 53 enruta a endpoints saludables."
    },
    {
      id: 10045,
      pregunta: "¿Por qué combinar DNS y balanceadores?",
      opciones: [
        "Para reducir costes",
        "Para ocultar IPs",
        "Para alta disponibilidad y rendimiento global",
        "Para almacenar datos"
      ],
      respuestaCorrecta: 2,
      explicacion: "DNS + ELB distribuyen carga globalmente y mejoran resiliencia y rendimiento."
    }
  ]
};

export default moduloUnidadCuatroRedesEnLaNube;