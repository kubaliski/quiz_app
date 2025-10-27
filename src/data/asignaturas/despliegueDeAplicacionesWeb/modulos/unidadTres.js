/**
 * Unidad 3: Servidores Web - Apache y Nginx
 * Comparativa, virtual hosts, proxy inverso y balanceo de carga.
 */
const moduloUnidadTresServidoresWeb = {
  id: 801,
  nombre: "Unidad 3: Servidores Web - Apache y Nginx",
  titulo: "Servidores Web - Apache y Nginx",
  descripcion: "Comparativa Apache/Nginx, virtual hosts, proxy inverso y balanceo",
  esExamen: false,
  asignaturaId: 8,
  preguntas: [
    {
      id: 8011,
      pregunta: "¿Qué servidor usa arquitectura basada en eventos?",
      opciones: ["Apache", "Nginx", "IIS", "Tomcat"],
      respuestaCorrecta: 1,
      explicacion: "Nginx usa un modelo asíncrono y basado en eventos."
    },
    {
      id: 8012,
      pregunta: "¿Qué ventaja ofrece Apache?",
      opciones: [
        "Menor uso de RAM",
        "Asincronía",
        "Flexibilidad y compatibilidad con .htaccess",
        "Caché integrada"
      ],
      respuestaCorrecta: 2,
      explicacion: "Apache destaca por .htaccess y su gran compatibilidad."
    },
    {
      id: 8013,
      pregunta: "¿Cuál es la función principal de un servidor web?",
      opciones: [
        "Enviar correos electrónicos",
        "Ejecutar código de escritorio",
        "Almacenar bases de datos",
        "Servir recursos HTTP a los clientes"
      ],
      respuestaCorrecta: 3,
      explicacion: "Su propósito es servir contenido vía HTTP/HTTPS."
    },
    {
      id: 8014,
      pregunta: "¿Qué herramienta mide rendimiento web?",
      opciones: ["FileZilla", "Apache Benchmark (ab)", "SSH", "nslookup"],
      respuestaCorrecta: 1,
      explicacion: "ab permite generar carga y medir peticiones/segundo y latencia."
    },
    {
      id: 8015,
      pregunta: "¿Qué combinación es ideal para alto tráfico?",
      opciones: [
        "Solo Apache",
        "Solo Nginx",
        "Nginx (proxy) + Apache (backend)",
        "IIS + Nginx"
      ],
      respuestaCorrecta: 2,
      explicacion: "Nginx como proxy inverso y Apache gestionando aplicaciones."
    },
    {
      id: 8016,
      pregunta: "¿Qué comando instala Nginx en Ubuntu?",
      opciones: [
        "install nginx-server",
        "systemctl nginx install",
        "sudo apt install nginx",
        "yum nginx setup"
      ],
      respuestaCorrecta: 2,
      explicacion: "En Ubuntu/Debian se usa apt."
    },
    {
      id: 8017,
      pregunta: "¿Dónde se define un virtual host en Apache?",
      opciones: [
        "/var/www/html/",
        "/etc/apache2/sites-available/",
        "/home/apache/",
        "/usr/local/bin/"
      ],
      respuestaCorrecta: 1,
      explicacion: "Los vhosts se crean en sites-available y se habilitan con a2ensite."
    },
    {
      id: 8018,
      pregunta: "¿Qué puerto usa por defecto HTTP?",
      opciones: ["80", "8080", "443", "22"],
      respuestaCorrecta: 0,
      explicacion: "HTTP usa 80; HTTPS usa 443."
    },
    {
      id: 8019,
      pregunta: "¿Qué comando prueba configuración Nginx?",
      opciones: ["systemctl test nginx", "test-nginx", "nginx -t", "nginx test"],
      respuestaCorrecta: 2,
      explicacion: "nginx -t valida la sintaxis de la configuración."
    },
    {
      id: 8020,
      pregunta: "¿Qué hace systemctl reload nginx?",
      opciones: [
        "Limpia logs",
        "Recarga la configuración sin reiniciar",
        "Apaga el servicio",
        "Reinicia el VPS"
      ],
      respuestaCorrecta: 1,
      explicacion: "Recarga la config aplicando cambios sin cortar servicio."
    },
    {
      id: 8021,
      pregunta: "¿Qué función cumple un proxy inverso?",
      opciones: [
        "Cifrar contraseñas",
        "Gestionar bases de datos",
        "Redirigir peticiones al servidor backend",
        "Enviar correos"
      ],
      respuestaCorrecta: 2,
      explicacion: "Actúa de intermediario hacia servidores de aplicación."
    },
    {
      id: 8022,
      pregunta: "¿Qué directiva define el destino en Nginx?",
      opciones: ["load_dir", "proxy_pass", "upstream", "location_root"],
      respuestaCorrecta: 1,
      explicacion: "proxy_pass especifica el backend al que se reenvía."
    },
    {
      id: 8023,
      pregunta: "¿Qué método de balanceo reparte tráfico equitativamente?",
      opciones: ["least connections", "random", "round-robin", "IP hash"],
      respuestaCorrecta: 2,
      explicacion: "round-robin distribuye de forma uniforme por turno."
    },
    {
      id: 8024,
      pregunta: "¿Qué ventaja aporta el proxy inverso?",
      opciones: [
        "Compresión de archivos",
        "Limpieza de logs",
        "Reducción de disco duro",
        "Mayor seguridad y escalabilidad"
      ],
      respuestaCorrecta: 3,
      explicacion: "Permite ocultar backends, cachear y escalar horizontalmente."
    },
    {
      id: 8025,
      pregunta: "¿Qué comando verifica encabezados HTTP?",
      opciones: ["curl -I", "traceroute", "netstat", "ping"],
      respuestaCorrecta: 0,
      explicacion: "curl -I realiza una petición HEAD y muestra headers."
    }
  ]
};

export default moduloUnidadTresServidoresWeb;