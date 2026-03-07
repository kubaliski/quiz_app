const moduloTestDosDespliegue = {
  id: 807,
  asignaturaId: 8,
  nombre: "Test 2: Despliegue Avanzado, Docker y Seguridad",
  titulo: "Arquitectura Web, Docker, Kubernetes y Seguridad",
  descripcion:
    "Evaluación sobre arquitecturas web híbridas (Apache/Nginx), virtualización mediante contenedores (Docker), orquestación con Kubernetes, protocolos seguros y estrategias continuas de seguridad en producción.",
  esExamen: true,
  preguntas: [
    {
      id: 8089,
      pregunta:
        "Una empresa en crecimiento decide migrar de hosting compartido a VPS. ¿Cuál es la principal ventaja estratégica del VPS frente al hosting compartido?",
      opciones: [
        "Permite compartir recursos con otros clientes",
        "Ofrece recursos dedicados virtualizados y mayor control del sistema",
        "No requiere administración técnica",
        "Es más barato que cualquier otra opción",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "A diferencia del hosting compartido, un VPS virtualiza los recursos físicos para otorgar al cliente una partición con CPU y RAM dedicadas, garantizando el rendimiento y permitiendo control total (acceso root) para instalaciones personalizadas.",
    },
    {
      id: 8090,
      pregunta:
        "¿Qué característica diferencia principalmente un VPS de un servidor dedicado?",
      opciones: [
        "EI VPS no tiene sistema operativo",
        "El servidor dedicado comparte recursos con otros clientes",
        "EI VPS comparte hardware físico mediante virtualización",
        "EI VPS no permite acceso root",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Mientras que un servidor dedicado proporciona una máquina física entera exclusiva para un cliente, el VPS utiliza hipervisores para dividir un servidor físico en múltiples servidores virtuales independientes.",
    },
    {
      id: 8091,
      pregunta:
        "¿Cuál es la principal ventaja de autenticación mediante clave pública en SSH frente a contraseña?",
      opciones: [
        "Es más rápida pero menos segura",
        "Permite conexión sin cifrado",
        "Reduce el riesgo de ataques de fuerza bruta",
        "No requiere configuración previa",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "La autenticación asimétrica (par de claves) genera firmas criptográficas incifrabes por fuerza bruta, eliminando la vulnerabilidad de las contraseñas débiles o interceptables, mejorando exponencialmente la seguridad.",
    },
    {
      id: 8092,
      pregunta:
        "En la arquitectura cliente-servidor, HTTP es el protocolo encargado de:",
      opciones: [
        "Cifrar la información",
        "Gestionar bases de datos",
        "Definir cómo se estructuran peticiones y respuestas",
        "Resolver nombres de dominio",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "HTTP actúa en la capa de aplicación dictando el formato (métodos, cabeceras, cuerpo) en que los clientes (navegadores) y los servidores web deben comunicarse para solicitar y enviar recursos.",
    },
    {
      id: 8093,
      pregunta: "HTTP/2 mejora frente a HTTP/1.1 principalmente porque:",
      opciones: [
        "Usa UDP exclusivamente",
        "Introduce multiplexing en una sola conexión",
        "Elimina la compresión",
        "Sustituye completamente TCP",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "El multiplexing de HTTP/2 permite enviar múltiples peticiones y respuestas simultáneamente a través de una única conexión TCP, reduciendo drásticamente la latencia y el bloqueo 'head-of-line'.",
    },
    {
      id: 8094,
      pregunta:
        "HTTPS garantiza tres principios fundamentales. ¿Cuál de los siguientes NO es uno de ellos?",
      opciones: ["Cifrado", "Autenticación", "Integridad", "Compresión"],
      respuestaCorrecta: 3,
      explicacion:
        "Los pilares de la seguridad SSL/TLS en HTTPS son: cifrado (privacidad), integridad (datos no alterados) y autenticación (identidad verificada). La compresión es una técnica de optimización de red, no un principio de seguridad.",
    },
    {
      id: 8095,
      pregunta: "Un certificado autofirmado en producción provoca que:",
      opciones: [
        "El navegador lo reconozca como seguro automáticamente",
        "Se mejore el posicionamiento SEO",
        "El navegador muestre advertencias de seguridad",
        "Se active HSTS automáticamente",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Al no estar emitido por una Autoridad Certificadora (CA) de confianza reconocida por los navegadores, un certificado autofirmado generará una pantalla de advertencia roja alertando al usuario sobre un posible riesgo de seguridad.",
    },
    {
      id: 8096,
      pregunta: "HSTS (HTTP Strict Transport Security) sirve para:",
      opciones: [
        "Comprimir tráfico HTTP",
        "Obligar al navegador a usar siempre HTTPS",
        "Renovar certificados automáticamente",
        "Configurar DNS",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "HSTS es una cabecera de seguridad que el servidor envía al navegador, instruyéndole para que, en futuras visitas, solo establezca conexiones seguras (HTTPS), previniendo ataques de downgrade (como SSL Stripping).",
    },
    {
      id: 8097,
      pregunta: "Una autoridad certificadora (CA) se encarga de:",
      opciones: [
        "Crear dominios web",
        "Emitir certificados digitales verificados",
        "Configurar servidores Apache",
        "Gestionar DNS raíz",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Las CA (como Let's Encrypt o DigiCert) son entidades de confianza encargadas de validar la identidad de los solicitantes y emitir certificados SSL/TLS que los navegadores reconocerán como legítimos.",
    },
    {
      id: 8098,
      pregunta:
        "El registro DNS que asocia un dominio a una dirección IPv4 es:",
      opciones: ["MX", "CNAME", "A", "TXT"],
      respuestaCorrecta: 2,
      explicacion:
        "El registro tipo 'A' (Address) es la pieza central del DNS, encargada de traducir el nombre de dominio en la dirección numérica IPv4 donde reside el servidor.",
    },
    {
      id: 8099,
      pregunta: "Un error en el registro MX provocará principalmente:",
      opciones: [
        "Que la web no cargue",
        "Que el correo electrónico no funcione correctamente",
        "Que falle el HTTPS",
        "Que el dominio expire",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "El registro MX (Mail Exchange) indica qué servidores están autorizados para gestionar el correo entrante de ese dominio. Si está mal configurado, los correos rebotarán o se perderán, aunque la web siga funcionando.",
    },
    {
      id: 8100,
      pregunta: "El TTL en DNS determina:",
      opciones: [
        "El tiempo máximo de vida del servidor",
        "El tiempo que una respuesta puede permanecer en caché",
        "El número de servidores raíz consultados",
        "La prioridad del registro MX",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "El Time To Live (TTL) define en segundos cuánto tiempo los servidores DNS intermedios y navegadores deben almacenar en caché (recordar) un registro antes de volver a solicitar la información actualizada.",
    },
    {
      id: 8101,
      pregunta:
        "No se debe configurar simultáneamente un registro A y un CNAME en el mismo nombre porque:",
      opciones: [
        "Mejora la redundancia",
        "Genera conflicto en la resolución DNS",
        "Aumenta la velocidad",
        "Es obligatorio usar ambos",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Por estándar RFC, un CNAME indica que un dominio es un alias absoluto. Si se mezcla con un registro A para el mismo subdominio, los servidores DNS entran en conflicto sobre cómo resolver la petición.",
    },
    {
      id: 8102,
      pregunta: "Apache se caracteriza principalmente por:",
      opciones: [
        "Arquitectura basada en eventos asíncronos",
        "Uso exclusivo como proxy inverso",
        "Arquitectura modular y uso de .htaccess",
        "Bajo consumo extremo de memoria",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Históricamente, Apache destaca por su flexibilidad gracias a sus módulos de carga dinámica (MPMs) y su capacidad para sobrescribir configuraciones a nivel de directorio de forma descentralizada mediante archivos .htaccess.",
    },
    {
      id: 8103,
      pregunta:
        "Nginx es especialmente eficiente en escenarios de alta concurrencia porque:",
      opciones: [
        "Usa múltiples hilos por conexión",
        "Utiliza un modelo asíncrono basado en eventos",
        "Ejecuta código Java",
        "No procesa contenido dinámico",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Nginx utiliza un enfoque event-driven no bloqueante. En lugar de crear un proceso/hilo por cada solicitud (como Apache tradicional), utiliza workers que manejan miles de conexiones simultáneas, optimizando CPU y RAM.",
    },
    {
      id: 8104,
      pregunta: "En una arquitectura híbrida, Nginx suele actuar como:",
      opciones: [
        "Servidor de base de datos",
        "Proxy inverso delante de Apache",
        "Sustituto completo de Apache",
        "Cliente HTTP",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Es común colocar Nginx al frente como proxy inverso para despachar rápidamente el contenido estático y gestionar las conexiones SSL, enviando solo las peticiones dinámicas pesadas (ej. PHP) hacia Apache.",
    },
    {
      id: 8105,
      pregunta: "El comando nginx -t o apachectl configtest sirve para:",
      opciones: [
        "Reiniciar el servidor",
        "Ver estadísticas de tráfico",
        "Validar la sintaxis de configuración",
        "Crear certificados SSL",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Antes de reiniciar el servicio, estos comandos analizan los archivos de configuración en busca de errores de sintaxis o rutas inválidas, evitando que el servidor se caiga por un fallo tipográfico.",
    },
    {
      id: 8106,
      pregunta:
        "Un servidor de aplicaciones se diferencia de un servidor web porque:",
      opciones: [
        "Solo sirve archivos estáticos",
        "Ejecuta lógica del lado del servidor",
        "No puede usar HTTP",
        "No interactúa con bases de datos",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Mientras un servidor web gestiona el protocolo HTTP y entrega archivos estáticos, el servidor de aplicaciones ejecuta el código de negocio (Java, Node, Python), procesa datos y conecta con la base de datos.",
    },
    {
      id: 8107,
      pregunta: "Apache Tomcat está orientado principalmente a:",
      opciones: [
        "Aplicaciones PHP",
        "Aplicaciones Java (Servlets y JSP)",
        "Aplicaciones Python",
        "Microservicios en Go",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Tomcat es un contenedor de Servlets y JSP desarrollado por la Apache Software Foundation, diseñado de forma nativa para proporcionar un entorno puro de Java para ejecutar aplicaciones web Java.",
    },
    {
      id: 8108,
      pregunta: "Node.js destaca por:",
      opciones: [
        "Ser multiproceso tradicional",
        "Modelo síncrono bloqueante",
        "Modelo asíncrono y no bloqueante",
        "Ejecutarse sobre JVM",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Node.js se ejecuta en un solo hilo principal bajo el 'Event Loop', delegando las operaciones pesadas de E/S de forma asíncrona, lo que le permite manejar miles de conexiones concurrentes sin bloquearse.",
    },
    {
      id: 8109,
      pregunta: "Express.js es:",
      opciones: [
        "Un servidor web completo",
        "Un framework sobre Node.js para crear APIs y aplicaciones web",
        "Un proxy inverso",
        "Un gestor de contenedores",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Express.js es la infraestructura web más popular para Node.js. Proporciona una capa fina y minimalista de funcionalidades (enrutamiento, middlewares) para simplificar la creación de aplicaciones backend.",
    },
    {
      id: 8110,
      pregunta: "Una imagen Docker es:",
      opciones: [
        "Un contenedor en ejecución",
        "Una plantilla inmutable para crear contenedores",
        "Un servidor físico",
        "Un clúster Kubernetes",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Una imagen es un paquete estático de software que incluye todo lo necesario (código, runtime, librerías y configuraciones) para ejecutar la aplicación. Al ejecutarse, una imagen da lugar a un contenedor.",
    },
    {
      id: 8111,
      pregunta:
        "La principal diferencia entre una máquina virtual y un contenedor es que el contenedor:",
      opciones: [
        "Tiene su propio kernel",
        "Comparte el kernel del sistema host",
        "Es más pesado",
        "Tarda más en arrancar",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Las máquinas virtuales virtualizan el hardware y requieren instalar un sistema operativo (kernel) completo. Los contenedores, en cambio, virtualizan a nivel de SO, compartiendo el kernel del host, lo que los hace extremadamente ligeros y rápidos.",
    },
    {
      id: 8112,
      pregunta: "Kubernetes se utiliza para:",
      opciones: [
        "Crear imágenes Docker",
        "Orquestar y gestionar múltiples contenedores",
        "Configurar DNS",
        "Emitir certificados SSL",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Kubernetes es un sistema de orquestación (Container Orchestration) diseñado para automatizar el despliegue, el escalado, la recuperación y el manejo de aplicaciones en contenedores en entornos en clúster.",
    },
    {
      id: 8113,
      pregunta: "Un rolling update en Kubernetes permite:",
      opciones: [
        "Apagar todo el sistema para actualizar",
        "Actualizar sin interrumpir el servicio",
        "Eliminar contenedores antiguos sin reemplazo",
        "Reiniciar manualmente cada pod",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "La estrategia de 'rolling update' sustituye progresivamente las versiones antiguas de los pods por las nuevas, asegurando que siempre haya instancias disponibles y logrando despliegues con cero tiempo de inactividad (Zero Downtime).",
    },
    {
      id: 8114,
      pregunta: "Un firewall en un servidor tiene como función principal:",
      opciones: [
        "Servir contenido web",
        "Controlar y filtrar el tráfico de red",
        "Hacer backups",
        "Configurar contenedores",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Un firewall (como UFW o iptables) se sitúa como una barrera que analiza y filtra los paquetes de red entrantes y salientes según un conjunto de reglas, bloqueando puertos no deseados para prevenir accesos no autorizados.",
    },
    {
      id: 8115,
      pregunta: "Fail2Ban ayuda a proteger el servidor frente a:",
      opciones: [
        "Fallos de hardware",
        "Ataques de fuerza bruta",
        "Problemas DNS",
        "Errores de compilación",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Fail2Ban es una herramienta de seguridad que escanea activamente los archivos de log del servidor. Si detecta múltiples intentos de inicio de sesión fallidos, bloquea automáticamente la IP origen en el firewall.",
    },
    {
      id: 8116,
      pregunta: "Una estrategia correcta de copias de seguridad debe incluir:",
      opciones: [
        "Solo copias locales",
        "Copias externas y pruebas de restauración",
        "Una única copia manual mensual",
        "Solo copia del código fuente",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Guardar el backup fuera del servidor principal (off-site) evita perder los datos si la máquina falla críticamente. Además, probar la restauración garantiza que las copias no estén corruptas en el momento de necesitarlas.",
    },
    {
      id: 8117,
      pregunta: "Mantener el software actualizado reduce el riesgo de:",
      opciones: [
        "Saturación DNS",
        "Vulnerabilidades explotables",
        "Consumo de RAM",
        "Latencia de red",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Las actualizaciones (parches de seguridad) resuelven vulnerabilidades de software y brechas documentadas (Zero-days) que podrían ser aprovechadas por atacantes para infiltrarse en el sistema.",
    },
    {
      id: 8118,
      pregunta: "La seguridad en producción debe entenderse como:",
      opciones: [
        "Una tarea puntual tras el despliegue",
        "Un proceso continuo de prevención, monitorización y mejora",
        "Una acción exclusiva del desarrollador",
        "Un gasto opcional",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "La seguridad no es un estado estático, sino un ciclo continuo (DevSecOps). Requiere monitorizar amenazas constantemente, aplicar parches regulares y auditar sistemas y logs de manera iterativa.",
    },
  ],
};

export default moduloTestDosDespliegue;
