/**
 * Simulacro 1: Despliegue de Aplicaciones Web
 * Basado en el quiz real. Cubre contenedores, protocolos, SSH, servidores web,
 * DNS, CI/CD, seguridad y arquitectura cliente-servidor.
 */
const moduloSimulacroUnoDespliegue = {
  id: 808,
  asignaturaId: 8,
  nombre: "Simulacro 1: Despliegue de Aplicaciones Web",
  titulo: "Despliegue de Aplicaciones Web",
  descripcion:
    "Simulacro completo sobre contenedores Docker/Kubernetes, protocolos HTTP/HTTPS, DNS, SSH, servidores web y de aplicaciones, CI/CD, seguridad y arquitectura cliente-servidor.",
  esExamen: true,
  preguntas: [
    {
      id: 8119,
      pregunta:
        "Un desarrollador crea una aplicación con Python, Node.js, PostgreSQL y todas sus librerías en un único paquete reproducible. ¿Qué tecnología está utilizando?",
      opciones: [
        "Contenedor Docker",
        "Máquina virtual de hipervisor",
        "Servidor proxy",
        "Servidor VPS",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Docker empaqueta la aplicación, sus dependencias y todo el entorno en una imagen inmutable que se ejecuta de forma aislada, garantizando que funcione idénticamente en desarrollo, testing y producción.",
    },
    {
      id: 8120,
      pregunta:
        "¿Cuál es la secuencia de eventos que ocurre cuando un usuario escribe una dirección web en el navegador?",
      opciones: [
        "El proveedor de Internet intercepta la solicitud y la procesa directamente en su servidor local",
        "El navegador compila el HTML a código máquina antes de enviar la solicitud",
        "Se resuelve el dominio a IP mediante DNS, se establece conexión TCP, se envía solicitud HTTP/HTTPS y el servidor responde",
        "El navegador localiza el archivo en la memoria caché y lo muestra inmediatamente sin conexión",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "El proceso correcto es: (1) DNS resuelve el dominio a IP, (2) se establece una conexión TCP con el servidor, (3) se envía una solicitud HTTP/HTTPS, (4) el servidor procesa y devuelve una respuesta con el contenido.",
    },
    {
      id: 8121,
      pregunta: "¿Qué es SSH y cuál es su propósito principal?",
      opciones: [
        "Un protocolo exclusivamente para transferencia de correo electrónico",
        "Un protocolo de acceso remoto seguro que permite administrar servidores de forma cifrada",
        "Un protocolo de transferencia de archivos no cifrado para redes locales",
        "Un servicio de almacenamiento en nube para copias de seguridad",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "SSH (Secure Shell) es un protocolo de red que proporciona acceso remoto seguro a servidores y dispositivos. Cifra toda la comunicación entre el cliente y el servidor, previniendo la interceptación de credenciales y comandos.",
    },
    {
      id: 8122,
      pregunta:
        "Cuando una arquitectura web necesita servir millones de peticiones con bajo consumo de memoria, manteniendo alta concurrencia, ¿qué servidor se adecúa mejor a estos requisitos?",
      opciones: ["Apache", "Nginx", "Tomcat", "MySQL"],
      respuestaCorrecta: 1,
      explicacion:
        "Nginx utiliza un modelo basado en eventos y arquitectura asíncrona que le permite manejar miles de conexiones simultáneas con un consumo mínimo de recursos. Apache usa un modelo de procesos/hilos que consume más memoria bajo carga masiva.",
    },
    {
      id: 8123,
      pregunta:
        "¿Qué proceso técnico ocurre internamente cuando un usuario introduce una dirección web en el navegador?",
      opciones: [
        "Se descarga e instala software adicional sin intervención del usuario",
        "Se crea automáticamente un servidor web en la máquina local",
        "El navegador ejecuta un programa que instala componentes de servidor",
        "El navegador realiza una consulta DNS para obtener la IP del dominio solicitado",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "Cuando el usuario introduce una URL: 1) El navegador extrae el dominio, 2) Consulta servidores DNS para resolver el dominio a IP, 3) Establece conexión TCP, 4) Envía solicitud HTTP/HTTPS, 5) Recibe y renderiza la respuesta. DNS es el primer paso crítico.",
    },
    {
      id: 8124,
      pregunta:
        "¿Cuál es la misión de un firewall en la seguridad de una infraestructura web?",
      opciones: [
        "Replicar y respaldar datos en múltiples servidores",
        "Evaluar y controlar el tráfico de red según reglas de seguridad predefinidas",
        "Diseñar la arquitectura de software",
        "Compilar y optimizar código de aplicaciones",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Un firewall actúa como barrera de seguridad entre redes confiables e internet. Inspecciona cada conexión entrante y saliente, permitiendo o bloqueando el tráfico según reglas configuradas basadas en puertos, protocolos y direcciones IP.",
    },
    {
      id: 8125,
      pregunta:
        "Un cliente intenta acceder a un sitio web escribiendo un nombre de dominio en el navegador. ¿Qué mecanismo de red resuelve ese nombre de dominio a su dirección IP correspondiente?",
      opciones: ["SMTP", "FTP", "DNS", "HTTP"],
      respuestaCorrecta: 2,
      explicacion:
        "El Sistema de Nombres de Dominio (DNS) traduce nombres de dominio legibles en direcciones IP numéricas que los navegadores necesitan para conectarse. SMTP es para correo, FTP para transferencia de archivos, y HTTP se usa después de que DNS resuelve la dirección.",
    },
    {
      id: 8126,
      pregunta: "¿Qué función desempeña un registro MX en el sistema de DNS?",
      opciones: [
        "Apuntar un dominio a una dirección IPv4",
        "Validar la propiedad del dominio mediante un código de verificación",
        "Dirigir el tráfico de correo electrónico al servidor de correo correspondiente",
        "Crear un alias para redirigir un dominio a otro",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "El registro MX (Mail Exchange) especifica qué servidor de correo debe recibir los mensajes de correo electrónico dirigidos a un dominio. Puede haber múltiples registros MX con diferentes prioridades para redundancia.",
    },
    {
      id: 8127,
      pregunta:
        "¿Qué rol cumple Express en el contexto del desarrollo con Node.js?",
      opciones: [
        "Es un lenguaje de programación para aplicaciones web",
        "Es un servidor físico de alto rendimiento",
        "Es un servidor de nombres de dominio",
        "Es un framework que simplifica la creación de aplicaciones web en Node.js",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "Express es un framework minimalista y flexible para Node.js que proporciona herramientas esenciales para construir aplicaciones web y APIs REST: enrutamiento HTTP, middleware, manejo de peticiones y respuestas.",
    },
    {
      id: 8128,
      pregunta:
        "¿Cuál es el propósito operativo de realizar copias de seguridad periódicas en un sistema de despliegue?",
      opciones: [
        "Crear nuevos servidores de producción",
        "Restaurar sistemas y datos completos en caso de corrupción, pérdida o desastre",
        "Identificar y eliminar errores de programación",
        "Mejorar notablemente el rendimiento de las aplicaciones",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Las copias de seguridad son un mecanismo esencial de recuperación ante desastres. Garantizan que los datos críticos puedan ser restaurados completamente en caso de fallos de hardware, ataques cibernéticos o eliminación accidental.",
    },
    {
      id: 8129,
      pregunta:
        "¿Cómo se suelen combinar Apache y Nginx en una arquitectura de despliegue?",
      opciones: [
        "Se utilizan indistintamente sin que uno dependa del otro",
        "Apache y Nginx se ejecutan en el mismo servidor en el mismo puerto",
        "Apache es obligatorio detrás de Nginx para servir contenido estático",
        "Nginx actúa como proxy inverso frente a Apache, que ejecuta la aplicación",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "En una arquitectura común, Nginx se posiciona en el frontend escuchando conexiones en los puertos 80/443 como proxy inverso, redirigiendo solicitudes hacia Apache que corre internamente ejecutando aplicaciones dinámicas con módulos.",
    },
    {
      id: 8130,
      pregunta:
        "En un entorno de producción con 200 contenedores Docker desplegados, se necesita automatizar su orquestación, escalado y recuperación ante fallos. ¿Qué herramienta es la más apropiada?",
      opciones: ["Apache Tomcat", "Kubernetes", "Dockerfile", "ProFTPd"],
      respuestaCorrecta: 1,
      explicacion:
        "Kubernetes es un orquestador de contenedores que gestiona automáticamente el ciclo de vida completo: despliegue, escalado horizontal/vertical, balanceo de carga y recuperación ante fallos.",
    },
    {
      id: 8131,
      pregunta:
        "¿Cuál es la principal característica de seguridad que añade HTTPS respecto a HTTP?",
      opciones: [
        "Reduce el tamaño de los paquetes transmitidos",
        "Cifra la comunicación mediante certificados SSL/TLS",
        "Permite autenticación de usuarios mediante contraseña",
        "Aumenta la velocidad de transferencia de datos",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "HTTPS incorpora una capa de cifrado mediante SSL/TLS que protege la integridad y confidencialidad de los datos transmitidos. Los certificados digitales verifican la autenticidad del servidor, previniendo ataques de intermediario.",
    },
    {
      id: 8132,
      pregunta:
        "Una aplicación web necesita ejecutar código Python en el servidor, consultar una base de datos y retornar resultados dinámicos al cliente. ¿Qué componente del backend es esencial?",
      opciones: [
        "Proxy inverso",
        "Servidor DNS",
        "Servidor de aplicaciones",
        "Servidor web (nginx o Apache)",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Un servidor de aplicaciones (como Gunicorn, Uvicorn o Tomcat) ejecuta la lógica de negocio, maneja la interacción con bases de datos y genera respuestas dinámicas. El servidor web estático carece del intérprete necesario.",
    },
    {
      id: 8133,
      pregunta:
        "¿Qué característica distintiva define a Apache como servidor web?",
      opciones: [
        "No permitir la ejecución de scripts del lado del servidor",
        "Tener la capacidad de compilar código Java automáticamente",
        "Procesar múltiples solicitudes simultáneas mediante arquitectura modular basada en procesos/hilos",
        "Ser completamente asincrónico y orientado a eventos",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Apache utiliza una arquitectura modular donde cada solicitud es manejada por un proceso o hilo separado, lo que permite procesar múltiples conexiones de forma simultánea y extender su funcionalidad mediante módulos.",
    },
    {
      id: 8134,
      pregunta:
        "En una arquitectura cliente-servidor, ¿cuál es el rol específico del servidor en la interacción?",
      opciones: [
        "Mostrar la interfaz gráfica de la aplicación web en pantalla",
        "Recibir peticiones de clientes, procesarlas y enviar respuestas",
        "Almacenar localmente los datos de cada usuario en su disco duro",
        "Ejecutar únicamente código JavaScript en el navegador del usuario",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "En la arquitectura cliente-servidor, el servidor escucha peticiones de clientes, las procesa según la lógica de negocio, accede a bases de datos si es necesario, y devuelve las respuestas correspondientes.",
    },
    {
      id: 8135,
      pregunta:
        "¿Qué ventaja específica proporciona HTTP/2 en relación con la eficiencia de las conexiones?",
      opciones: [
        "Obliga a los navegadores a establecer múltiples conexiones simultáneas",
        "Elimina completamente la necesidad de cifrado SSL/TLS",
        "Requiere el uso exclusivo del protocolo UDP",
        "Permite procesar varias peticiones en paralelo dentro de la misma conexión, reduciendo latencia",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "La multiplexación de HTTP/2 permite que múltiples peticiones coexistan en la misma conexión TCP, eliminando el overhead de crear nuevas conexiones y reduciendo significativamente el tiempo de carga de páginas con muchos recursos.",
    },
    {
      id: 8136,
      pregunta:
        "¿Cuál es la principal diferencia funcional entre un servidor web y un servidor de aplicaciones?",
      opciones: [
        "El servidor de aplicaciones es más antiguo y el servidor web es la tecnología moderna",
        "El servidor web maneja protocolos HTTP/HTTPS y sirve contenido, mientras que el servidor de aplicaciones ejecuta código de negocio y lógica dinámica",
        "El servidor web solo sirve contenido estático, mientras que el servidor de aplicaciones solo gestiona bases de datos",
        "El servidor web no requiere conexión a internet, mientras que el servidor de aplicaciones sí",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Un servidor web (Apache, Nginx) recibe solicitudes HTTP/HTTPS y sirve contenido. Un servidor de aplicaciones (Tomcat, Node.js) ejecuta código de backend para procesar lógica de negocio, acceder a bases de datos y generar contenido dinámico.",
    },
    {
      id: 8137,
      pregunta:
        "¿Qué protocolo de capa de aplicación es el estándar predominante para la transmisión de contenido web?",
      opciones: [
        "DNS (Domain Name System)",
        "FTP (File Transfer Protocol)",
        "HTTP (HyperText Transfer Protocol)",
        "SSH (Secure Shell)",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "HTTP es el protocolo de transferencia de hipertexto usado por navegadores y servidores web para intercambiar documentos HTML, imágenes y otros recursos. Opera sobre TCP en el puerto 80 y es fundamental para la web moderna.",
    },
    {
      id: 8138,
      pregunta:
        "¿Qué característica define principalmente el modelo de arquitectura cliente-servidor?",
      opciones: [
        "Todos los procesos se ejecutan en una única máquina centralizada",
        "La eliminación de toda necesidad de conexión a internet",
        "El uso obligatorio de protocolos inalámbricos para la comunicación",
        "La separación entre componentes que solicitan servicios y componentes que los proporcionan",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "La arquitectura cliente-servidor se basa en la división clara de roles: el cliente solicita servicios y el servidor los proporciona. Esta separación permite escalabilidad, modularidad y facilita la administración centralizada de recursos.",
    },
    {
      id: 8139,
      pregunta:
        "¿A qué categoría pertenece Tomcat y cuál es su función principal?",
      opciones: [
        "Es un servidor de aplicaciones capaz de ejecutar aplicaciones Java",
        "Es un servidor web que solo sirve archivos HTML estáticos",
        "Es un lenguaje de programación para desarrollo backend",
        "Es un protocolo de comunicación entre clientes y servidores",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Tomcat es un contenedor de servlets y páginas JSP desarrollado por Apache. Actúa como servidor de aplicaciones Java, permitiendo la ejecución de código Java en el servidor, gestión de sesiones y procesamiento de peticiones HTTP.",
    },
    {
      id: 8140,
      pregunta:
        "Un administrador necesita bloquear acceso a puertos específicos del servidor y permitir solo tráfico desde IPs autorizadas. ¿Qué herramienta de seguridad debe configurar?",
      opciones: [
        "Firewall del sistema operativo",
        "Proxy SOCKS",
        "Servidor DNS",
        "Protocolo SSH",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Un firewall implementa reglas de filtrado de paquetes a nivel de kernel, permitiendo o bloqueando tráfico según puertos, protocolos e IPs de origen/destino. DNS resuelve nombres, SSH es acceso remoto y el proxy redirecciona tráfico.",
    },
    {
      id: 8141,
      pregunta:
        "¿Qué propósito cumple un registro MX en la configuración DNS de un dominio?",
      opciones: [
        "Almacenar información textual verificable del dominio",
        "Especificar el servidor de correo responsable de ese dominio",
        "Asignar una dirección IP al dominio principal",
        "Crear un alias que apunta a otro nombre de dominio",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "MX (Mail Exchange) es un registro DNS que indica qué servidor de correo debe recibir mensajes de email dirigidos a ese dominio. Contiene una prioridad y el hostname del servidor. Sin registros MX correctos, los emails no pueden ser entregados.",
    },
    {
      id: 8142,
      pregunta: "¿Qué es Tomcat y en qué contexto se utiliza?",
      opciones: [
        "Un protocolo de red para transferencia segura de datos",
        "Un gestor de bases de datos relacional",
        "Un servidor web ligero para servir archivos HTML estáticos",
        "Un servidor de aplicaciones Java que ejecuta servlets y JSP",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "Apache Tomcat es un servidor de aplicaciones de código abierto que implementa las especificaciones de Java Servlet y JavaServer Pages (JSP). Es ampliamente utilizado en entornos empresariales para desplegar aplicaciones web Java.",
    },
    {
      id: 8143,
      pregunta: "¿Cuál es la función principal de un registro MX en DNS?",
      opciones: [
        "Mapear nombres de subdominio a direcciones IP",
        "Controlar el acceso a la base de datos del dominio",
        "Almacenar información de seguridad del dominio",
        "Especificar el servidor de correo electrónico responsable de recibir mensajes para el dominio",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "El registro MX indica cuál es el servidor de correo que debe recibir los mensajes destinados a ese dominio. Cuando alguien envía un email, el sistema consulta el registro MX para saber a qué servidor enviarlo. Pueden existir múltiples con prioridades distintas.",
    },
    {
      id: 8144,
      pregunta:
        "Para ejecutar aplicaciones desarrolladas en Java que requieren servlets y JSP, ¿cuál es el servidor de aplicaciones más apropiado?",
      opciones: ["Tomcat", "Nginx", "Apache", "Node.js"],
      respuestaCorrecta: 0,
      explicacion:
        "Tomcat es un contenedor servlet y servidor de aplicaciones diseñado específicamente para ejecutar aplicaciones Java que utilizan servlets, JSP y archivos WAR. Nginx es proxy inverso, Node.js es runtime JavaScript y Apache es servidor web generalista.",
    },
    {
      id: 8145,
      pregunta:
        "Tras una corrupción de datos en producción, una empresa recupera el sistema completamente mediante copias realizadas semanalmente. ¿Qué estrategia de administración ha seguido?",
      opciones: [
        "Balanceo de carga",
        "Realización de backups periódicos",
        "Proxy inverso",
        "Virtualización de servidores",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Las copias de seguridad (backups) periódicos permiten recuperar sistemas completos ante desastres, corrupción o ataques. Solo los backups permiten restaurar datos históricos; el balanceo mejora rendimiento y la virtualización ahorra recursos.",
    },
    {
      id: 8146,
      pregunta: "¿Qué función cumple un registro A en el sistema DNS?",
      opciones: [
        "Almacena certificados SSL para el dominio",
        "Especifica el servidor de correo electrónico del dominio",
        "Redirige un dominio a otro dominio diferente",
        "Asocia un nombre de dominio con una dirección IP",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "El registro A es el registro DNS más fundamental. Traduce un nombre de dominio legible (como www.ejemplo.com) a su correspondiente dirección IPv4 (como 192.168.1.1), permitiendo que los navegadores encuentren el servidor web correcto.",
    },
    {
      id: 8147,
      pregunta:
        "¿Qué función realiza un registro CNAME en la configuración DNS?",
      opciones: [
        "Redirigir automáticamente todas las peticiones HTTP a HTTPS",
        "Listar todos los servidores disponibles para un dominio",
        "Crear un alias o nombre alternativo que apunta a otro dominio o subdominio",
        "Definir la dirección IP de los servidores de nombres autoritativos",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Un registro CNAME (Canonical Name) crea un alias que apunta a otro dominio. Por ejemplo, www.ejemplo.com puede ser un CNAME que apunta a ejemplo.com, permitiendo múltiples nombres para un mismo destino.",
    },
  ],
};

export default moduloSimulacroUnoDespliegue;
