const moduloTestUnoDespliegue = {
  id: 806,
  asignaturaId: 8,
  nombre: "Test 1: Despliegue de Aplicaciones Web",
  titulo: "Despliegue de Aplicaciones Web",
  descripcion: "VPS, servidores dedicados, SSH, arquitectura cliente-servidor, HTTP/HTTPS, DNS, servidores web y de aplicaciones, diagnóstico de red.",
  esExamen: true,
  preguntas: [
    {
      id: 8061,
      pregunta: "¿Qué es un VPS (Virtual Private Server)?",
      opciones: [
        "Un servidor físico dedicado a un solo cliente",
        "Un tipo de hosting compartido sin virtualización",
        "Un servidor virtual que comparte hardware físico pero funciona de forma independiente",
        "Un servicio exclusivo para aplicaciones en la nube"
      ],
      respuestaCorrecta: 2,
      explicacion: "Un VPS es una máquina virtual que reside en un servidor físico compartido pero actúa como un servidor independiente, ofreciendo dedicación de recursos, aislamiento del sistema operativo y acceso root."
    },
    {
      id: 8062,
      pregunta: "¿Cuál es la principal ventaja de un VPS frente al hosting compartido?",
      opciones: [
        "Es siempre más barato",
        "No requiere administración técnica",
        "Ofrece recursos garantizados y mayor control",
        "Utiliza únicamente software propietario"
      ],
      respuestaCorrecta: 2,
      explicacion: "La ventaja clave del VPS es la garantía de recursos (CPU, RAM, almacenamiento) asignados específicamente a cada cliente, sin competencia con otros usuarios, además de acceso administrativo total (root)."
    },
    {
      id: 8063,
      pregunta: "¿Qué característica define a un servidor dedicado?",
      opciones: [
        "Comparte recursos con otros clientes",
        "Tiene coste bajo y poco control",
        "Asigna toda la máquina física a un solo cliente",
        "No permite instalar software personalizado"
      ],
      respuestaCorrecta: 2,
      explicacion: "Un servidor dedicado asigna completamente el hardware físico a un único cliente, proporcionando máximo rendimiento, control total del sistema y acceso total a recursos sin competencia."
    },
    {
      id: 8064,
      pregunta: "¿Qué es SSH?",
      opciones: [
        "Un lenguaje de programación",
        "Un protocolo de transferencia sin cifrado",
        "Un protocolo para conexión remota cifrada",
        "Un sistema operativo para servidores"
      ],
      respuestaCorrecta: 2,
      explicacion: "SSH (Secure Shell) es un protocolo criptográfico que permite acceso remoto seguro a servidores, estableciendo una conexión cifrada que protege credenciales y datos en tránsito."
    },
    {
      id: 8065,
      pregunta: "¿En qué consiste la arquitectura cliente-servidor?",
      opciones: [
        "El servidor solicita recursos al cliente",
        "Cliente y servidor intercambian datos sin reglas",
        "El cliente realiza peticiones y el servidor responde",
        "Ambos ejecutan las mismas tareas"
      ],
      respuestaCorrecta: 2,
      explicacion: "En la arquitectura cliente-servidor, el cliente inicia la comunicación enviando una petición al servidor, quien procesa la solicitud y envía una respuesta. Esta relación es asimétrica."
    },
    {
      id: 8066,
      pregunta: "¿Qué protocolo regula la comunicación básica en la Web?",
      opciones: [
        "FTP",
        "TCP",
        "HTTP",
        "DNS"
      ],
      respuestaCorrecta: 2,
      explicacion: "HTTP (HyperText Transfer Protocol) es el protocolo fundamental de la Web que define cómo se comunican los navegadores con los servidores web, operando en la capa de aplicación."
    },
    {
      id: 8067,
      pregunta: "HTTPS se define correctamente como:",
      opciones: [
        "Un protocolo distinto a HTTP",
        "HTTP cifrado mediante SSL/TLS",
        "Un sistema de autenticación por usuario",
        "Un firewall web"
      ],
      respuestaCorrecta: 1,
      explicacion: "HTTPS es HTTP con capa de seguridad SSL/TLS. No es un protocolo completamente distinto, sino HTTP operando sobre conexiones SSL/TLS cifradas, proporcionando encriptación, autenticación e integridad."
    },
    {
      id: 8068,
      pregunta: "¿Cuál NO es uno de los principios de seguridad que aporta HTTPS?",
      opciones: [
        "Cifrado",
        "Autenticación",
        "Integridad",
        "Compresión"
      ],
      respuestaCorrecta: 3,
      explicacion: "Compresión no es un principio de seguridad de HTTPS. Los tres pilares de seguridad son: cifrado (protege confidencialidad), autenticación (verifica identidad del servidor) e integridad (detecta modificaciones)."
    },
    {
      id: 8069,
      pregunta: "¿Cuál es la función principal de un servidor web?",
      opciones: [
        "Almacenar bases de datos",
        "Procesar solicitudes HTTP/HTTPS y devolver recursos al cliente",
        "Gestionar usuarios del sistema operativo",
        "Compilar aplicaciones web"
      ],
      respuestaCorrecta: 1,
      explicacion: "El servidor web recibe peticiones HTTP/HTTPS desde navegadores, identifica el recurso solicitado (HTML, CSS, JS, imágenes), procesa la solicitud y devuelve la respuesta con códigos de estado apropiados."
    },
    {
      id: 8070,
      pregunta: "¿En qué tipo de arquitectura es habitual combinar Apache y Nginx?",
      opciones: [
        "Apache como proxy inverso y Nginx como backend",
        "Nginx como proxy inverso y Apache como backend",
        "Ambos siempre en el mismo puerto",
        "Solo en servidores dedicados"
      ],
      respuestaCorrecta: 1,
      explicacion: "En arquitecturas modernas, Nginx actúa como proxy inverso en el puerto 80/443 recibiendo peticiones y gestionando SSL/TLS, mientras Apache funciona como backend procesando solicitudes específicas."
    },
    {
      id: 8071,
      pregunta: "¿Qué puertos utilizan habitualmente HTTP y HTTPS?",
      opciones: [
        "21 y 22",
        "25 y 110",
        "80 y 443",
        "8080 y 3306"
      ],
      respuestaCorrecta: 2,
      explicacion: "HTTP utiliza el puerto 80 y HTTPS utiliza el puerto 443 por convención IANA. Puerto 21 es FTP, 22 es SSH, 25 es SMTP, 110 es POP3, 3306 es MySQL."
    },
    {
      id: 8072,
      pregunta: "¿Qué es un proxy inverso?",
      opciones: [
        "Un servidor que da acceso de usuarios a Internet",
        "Un intermediario entre clientes y servidores backend",
        "Un firewall de red",
        "Un sistema de autenticación"
      ],
      respuestaCorrecta: 1,
      explicacion: "Un proxy inverso es un intermediario que recibe peticiones de clientes externos y las redirige a servidores backend internos, manejando SSL/TLS, balanceando carga y proporcionando seguridad."
    },
    {
      id: 8073,
      pregunta: "¿Cuál es la función principal del sistema DNS?",
      opciones: [
        "Cifrar las comunicaciones web",
        "Traducir nombres de dominio en direcciones IP",
        "Almacenar páginas web",
        "Gestionar certificados SSL"
      ],
      respuestaCorrecta: 1,
      explicacion: "DNS (Domain Name System) traduce nombres de dominio legibles (ejemplo.com) en direcciones IP numéricas requeridas para enrutamiento de red, operando de forma distribuida globalmente."
    },
    {
      id: 8074,
      pregunta: "¿Qué tipo de registro DNS asocia un dominio con una dirección IPv4?",
      opciones: [
        "CNAME",
        "MX",
        "A",
        "TXT"
      ],
      respuestaCorrecta: 2,
      explicacion: "El registro A (Address) asocia un nombre de dominio con una dirección IPv4 específica. Es el tipo de registro DNS más fundamental. CNAME crea alias, MX especifica servidores de correo."
    },
    {
      id: 8075,
      pregunta: "¿Qué registro DNS se utiliza para crear un alias hacia otro dominio?",
      opciones: [
        "A",
        "MX",
        "TXT",
        "CNAME"
      ],
      respuestaCorrecta: 3,
      explicacion: "CNAME (Canonical Name) permite crear un alias de un dominio hacia otro nombre de dominio canónico. Útil para subdominios (www.ejemplo.com → ejemplo.com). No puede apuntar directamente a IPs."
    },
    {
      id: 8076,
      pregunta: "¿Qué registro DNS indica el servidor responsable del correo electrónico de un dominio?",
      opciones: [
        "A",
        "CNAME",
        "MX",
        "TXT"
      ],
      respuestaCorrecta: 2,
      explicacion: "MX (Mail Exchange) especifica qué servidores de correo están autorizados a recibir mensajes para un dominio. Incluye prioridad para determinar orden de intentos."
    },
    {
      id: 8077,
      pregunta: "¿Qué comando permite comprobar los registros MX de un dominio?",
      opciones: [
        "ping dominio.com",
        "traceroute dominio.com",
        "nslookup -type=MX dominio.com",
        "curl dominio.com"
      ],
      respuestaCorrecta: 2,
      explicacion: "nslookup -type=MX dominio.com consulta los registros MX de un dominio específico. nslookup es una herramienta de diagnóstico DNS. Alternativas incluyen dig o host."
    },
    {
      id: 8078,
      pregunta: "¿Qué herramienta permite comprobar si un host responde y medir latencia?",
      opciones: [
        "traceroute",
        "dig",
        "ping",
        "netstat"
      ],
      respuestaCorrecta: 2,
      explicacion: "ping envía paquetes ICMP Echo Request a un host y espera Echo Reply, midiendo tiempo de viaje redondo (RTT/latencia). Indica si un host es alcanzable y la latencia de la red."
    },
    {
      id: 8079,
      pregunta: "¿Qué comando muestra la ruta completa que siguen los paquetes hasta el destino?",
      opciones: [
        "ping",
        "curl",
        "traceroute",
        "netstat"
      ],
      respuestaCorrecta: 2,
      explicacion: "traceroute (o tracert en Windows) envía paquetes con TTL incremental mostrando cada salto (router) en la ruta hacia el destino. Útil para diagnosticar problemas de enrutamiento."
    },
    {
      id: 8080,
      pregunta: "¿Qué herramienta permite ver los puertos abiertos y servicios en escucha?",
      opciones: [
        "dig",
        "netstat / ss",
        "ping",
        "nslookup"
      ],
      respuestaCorrecta: 1,
      explicacion: "netstat (antigua) y ss (moderna) muestran conexiones de red activas y puertos en escucha con estados y procesos asociados. ss es preferida en sistemas recientes por mejor rendimiento."
    },
    {
      id: 8081,
      pregunta: "¿Cuál es una buena práctica profesional en diagnóstico de red?",
      opciones: [
        "Reiniciar el servidor directamente",
        "Cambiar el código sin pruebas",
        "Documentar cada prueba realizada",
        "Ignorar los errores intermedios"
      ],
      respuestaCorrecta: 2,
      explicacion: "Documentar cada prueba es práctica profesional esencial: permite reproducir problemas, evaluar eficacia de soluciones, y crear histórico para future debugging."
    },
    {
      id: 8082,
      pregunta: "¿Cuál es la función principal de un servidor de aplicaciones?",
      opciones: [
        "Servir únicamente archivos estáticos",
        "Ejecutar lógica del lado del servidor",
        "Resolver nombres DNS",
        "Balancear tráfico de red"
      ],
      respuestaCorrecta: 1,
      explicacion: "El servidor de aplicaciones ejecuta código backend (Java, PHP, Node.js, Python) procesando lógica de negocio compleja, interactuando con bases de datos y generando contenido dinámico."
    },
    {
      id: 8083,
      pregunta: "¿Qué servidor de aplicaciones está orientado al entorno Java EE/Jakarta EE?",
      opciones: [
        "Node.js",
        "Express.js",
        "Apache Tomcat",
        "Nginx"
      ],
      respuestaCorrecta: 2,
      explicacion: "Apache Tomcat es el servidor de aplicaciones Java más utilizado. Implementa especificaciones Java Servlet y JSP, diseñado específicamente para ejecutar aplicaciones Java EE (ahora Jakarta EE)."
    },
    {
      id: 8084,
      pregunta: "¿Qué afirmación describe correctamente a Node.js?",
      opciones: [
        "Es un servidor web clásico",
        "Es un entorno de ejecución JavaScript del lado del servidor",
        "Solo sirve para proyectos pequeños",
        "Funciona exclusivamente con Apache"
      ],
      respuestaCorrecta: 1,
      explicacion: "Node.js es un entorno de ejecución que permite ejecutar JavaScript fuera del navegador, en el servidor. Usa motor V8 de Google Chrome y permite crear servidores, APIs REST y aplicaciones completas."
    },
    {
      id: 8085,
      pregunta: "¿Qué es Express.js?",
      opciones: [
        "Un servidor web independiente",
        "Un framework minimalista sobre Node.js",
        "Un gestor de bases de datos",
        "Un sistema operativo"
      ],
      respuestaCorrecta: 1,
      explicacion: "Express.js es un framework web minimalista para Node.js que simplifica creación de servidores y APIs REST, proporcionando enrutamiento, middleware y utilidades para HTTP."
    },
    {
      id: 8086,
      pregunta: "¿Qué papel suelen desempeñar Apache o Nginx en arquitecturas modernas?",
      opciones: [
        "Sustituir al servidor de aplicaciones",
        "Proxy inverso y balanceador de carga",
        "Ejecutar lógica de negocio",
        "Compilar código"
      ],
      respuestaCorrecta: 1,
      explicacion: "En arquitecturas modernas, Apache/Nginx actúan como proxy inverso frente a servidores de aplicaciones, manejando SSL/TLS, balanceando carga entre múltiples instancias y cacheando contenido."
    },
    {
      id: 8087,
      pregunta: "¿Qué herramienta permite probar una web o API y ver el código HTTP?",
      opciones: [
        "traceroute",
        "ping",
        "curl",
        "ufw"
      ],
      respuestaCorrecta: 2,
      explicacion: "curl es una herramienta de línea de comandos para transferir datos usando URLs. Permite realizar peticiones HTTP/HTTPS, ver headers de respuesta, verificar códigos de estado y probar APIs."
    },
    {
      id: 8088,
      pregunta: "¿Cuál es el método de autenticación SSH más seguro?",
      opciones: [
        "Usuario y contraseña",
        "Token por SMS",
        "Par de claves pública/privada",
        "Dirección IP fija"
      ],
      respuestaCorrecta: 2,
      explicacion: "Autenticación por pares de claves criptográficas (asimétrica) es más segura que contraseña. La clave privada nunca se transmite, solo se usa localmente. Resistente a ataques de fuerza bruta."
    }
  ]
};

export default moduloTestUnoDespliegue;