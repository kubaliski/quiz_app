const simulacroDosModuloProfesional = {
  id: 1008,
  asignaturaId: 10,
  nombre: "Simulacro 2 - Módulo Profesional Optativo 2",
  titulo: "Simulacro 2: Fundamentos de la Computación en la Nube",
  descripcion:
    "Simulacro completo de 39 preguntas sobre EC2, S3, Lambda, VPC, RDS, EBS, Docker, Kubernetes, CloudFront, escalado y arquitectura Well-Architected en AWS.",
  esExamen: true,
  preguntas: [
    {
      id: 10132,
      pregunta:
        "Una empresa necesita desplegar un servidor web con Linux en AWS. ¿Cuáles son los elementos imprescindibles al lanzar una instancia EC2?",
      opciones: [
        "Solo el tipo de instancia y el nombre del servidor",
        "AMI, tipo de instancia, par de claves y grupo de seguridad",
        "Solo la AMI y la región donde se va a desplegar",
        "El sistema operativo, el hostname y la dirección IP pública",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Para lanzar una instancia EC2 correctamente se necesita: la AMI (imagen base con el SO), el tipo de instancia (CPU/RAM), un par de claves (para acceso SSH seguro) y un grupo de seguridad (firewall que controla el tráfico entrante y saliente). Sin alguno de estos elementos, la instancia no puede arrancarse ni administrarse de forma segura.",
    },
    {
      id: 10133,
      pregunta: "¿Qué significa que AWS Lambda es un servicio 'serverless'?",
      opciones: [
        "Que el código nunca se ejecuta en servidores físicos reales",
        "Que no puede usarse junto con otros servicios de AWS",
        "Que AWS gestiona toda la infraestructura y solo pagas por las ejecuciones",
        "Que el código se ejecuta de forma continua en segundo plano",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "'Serverless' no significa ausencia de servidores físicos, sino que el desarrollador no gestiona la infraestructura. AWS aprovisiona, escala y mantiene los servidores automáticamente. El modelo de facturación es por ejecución (número de invocaciones y tiempo de cómputo), sin pagar por capacidad ociosa. Ideal para cargas de trabajo eventuales o muy variables.",
    },
    {
      id: 10134,
      pregunta:
        "¿Cuándo tiene más sentido usar Amazon S3 en lugar de Amazon EBS para el almacenamiento?",
      opciones: [
        "Para guardar archivos estáticos, imágenes o backups accesibles vía HTTP",
        "Cuando necesitas almacenamiento de bloque para el sistema operativo",
        "Para alojar bases de datos relacionales con alto rendimiento de escritura",
        "Para conectar el disco directamente a una instancia EC2 activa",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "S3 es un almacenamiento de objetos orientado a archivos accesibles mediante URLs HTTP/S, ideal para contenido estático, imágenes, backups y datos compartidos entre múltiples servicios. EBS, en cambio, es almacenamiento de bloque que se adjunta a una instancia EC2 concreta y está diseñado para sistemas operativos, bases de datos y aplicaciones que requieren baja latencia de disco.",
    },
    {
      id: 10135,
      pregunta:
        "¿Qué ventaja principal ofrece la configuración Multi-AZ en Amazon RDS?",
      opciones: [
        "Mejora el rendimiento de lectura con instancias en paralelo",
        "Permite usar diferentes motores de BBDD en la misma instancia",
        "Da alta disponibilidad con failover automático a otra zona",
        "Reduce costes al compartir la instancia entre varias aplicaciones",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Multi-AZ crea una réplica sincrónica de la base de datos en una zona de disponibilidad distinta. Si la instancia principal falla, RDS realiza un failover automático hacia la réplica sin intervención manual, minimizando el tiempo de inactividad. No está diseñado para mejorar rendimiento de lectura (eso es Read Replicas), sino exclusivamente para alta disponibilidad y recuperación ante fallos.",
    },
    {
      id: 10136,
      pregunta: "¿Qué es una VPC (Virtual Private Cloud) en AWS y para qué sirve?",
      opciones: [
        "Un servicio para crear máquinas virtuales aisladas dentro de una región de AWS",
        "Una red privada virtual aislada donde se despliegan y conectan los recursos de AWS",
        "Un servicio de almacenamiento privado cifrado para datos sensibles de la empresa",
        "Un sistema de monitorización del tráfico de red entre servicios de AWS",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Una VPC es una red virtual privada dentro de AWS que permite definir rangos de IPs, subredes públicas y privadas, tablas de enrutamiento, gateways y reglas de seguridad. Es el entorno de red aislado donde se despliegan los recursos (EC2, RDS, Lambda...). Cada cuenta AWS tiene una VPC por defecto, y se pueden crear VPCs personalizadas para mayor control y seguridad.",
    },
    {
      id: 10137,
      pregunta:
        "¿Qué problema principal resuelve Docker en el desarrollo de software?",
      opciones: [
        "Permite escalar aplicaciones automáticamente según la demanda del sistema",
        "Proporciona almacenamiento persistente para aplicaciones distribuidas en red",
        "Gestiona los permisos y accesos entre los microservicios de forma centralizada",
        "Empaqueta la app con sus dependencias, resolviendo el 'funciona en mi máquina'",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "Docker empaqueta una aplicación junto con todas sus dependencias, librerías y configuración en un contenedor portable. Esto garantiza que el software se ejecuta de forma idéntica en cualquier entorno (desarrollo, staging, producción), eliminando el clásico problema de incompatibilidades entre máquinas. No gestiona escalado (eso es Kubernetes/ECS) ni permisos entre servicios.",
    },
    {
      id: 10138,
      pregunta: "¿Cuántas direcciones IP contiene una subred con el prefijo /24?",
      opciones: [
        "24 direcciones disponibles para asignar a hosts",
        "256 en total, siendo 254 utilizables para hosts",
        "512 en total, con 510 utilizables para hosts",
        "65.536 direcciones en total para la red",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Una subred /24 tiene 32 - 24 = 8 bits para hosts, lo que resulta en 2⁸ = 256 direcciones totales. De estas, 2 no son asignables a hosts: la dirección de red (primera) y la dirección de broadcast (última), dejando 254 IPs utilizables. En AWS se reservan 5 IPs por subred (red, router, DNS, futuro uso, broadcast), quedando 251 utilizables en la práctica.",
    },
    {
      id: 10139,
      pregunta:
        "¿Qué es un snapshot en Amazon EBS y para qué se utiliza principalmente?",
      opciones: [
        "Un tipo de volumen de alto rendimiento optimizado para bases de datos",
        "Una métrica de rendimiento del volumen registrada en tiempo real",
        "Una copia puntual de un volumen que se guarda en S3",
        "Un volumen temporal que se elimina automáticamente al detener la instancia",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Un snapshot de EBS es una fotografía del estado de un volumen en un momento concreto, almacenada de forma incremental en S3. Se usa principalmente para backups, migrar volúmenes entre regiones o zonas de disponibilidad, y crear AMIs personalizadas. Los snapshots son incrementales: solo guardan los bloques modificados desde el último snapshot, optimizando el almacenamiento.",
    },
    {
      id: 10140,
      pregunta:
        "¿Cuál es la diferencia clave entre una subred pública y una subred privada en una VPC de AWS?",
      opciones: [
        "La subred pública usa IPv6 y la privada solo IPv4",
        "La subred pública tiene más capacidad de IPs que la privada por defecto",
        "La subred pública tiene una ruta al Internet Gateway; la privada no tiene acceso directo a internet",
        "La subred privada no puede contener instancias EC2, solo bases de datos RDS",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "La diferencia fundamental está en la tabla de enrutamiento: una subred pública tiene una ruta que apunta a un Internet Gateway (IGW), permitiendo tráfico entrante y saliente desde/hacia internet. Una subred privada no tiene esa ruta y sus recursos no son accesibles directamente desde internet. Para que los recursos privados accedan a internet de forma saliente, se usa un NAT Gateway ubicado en la subred pública.",
    },
    {
      id: 10141,
      pregunta:
        "Una aplicación web tiene picos de tráfico muy variables e impredecibles. ¿Qué combinación de servicios AWS permite gestionar la capacidad de forma automática?",
      opciones: [
        "Amazon RDS Multi-AZ y Amazon Route 53 con enrutamiento de latencia",
        "AWS Lambda con EventBridge y Amazon S3 para el contenido estático",
        "Amazon EBS con instantáneas programadas y Amazon CloudFront",
        "EC2 Auto Scaling junto con un balanceador de carga ELB",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "EC2 Auto Scaling ajusta automáticamente el número de instancias según métricas de demanda (CPU, peticiones), añadiendo o eliminando instancias según el tráfico. El Elastic Load Balancer (ELB) distribuye las peticiones entre las instancias disponibles. Juntos forman la arquitectura estándar para aplicaciones web elásticas en AWS, garantizando disponibilidad y eficiencia en costes ante tráfico variable.",
    },
    {
      id: 10142,
      pregunta:
        "¿Cuál de los siguientes NO puede actuar como trigger de una función Lambda?",
      opciones: [
        "Una petición HTTP a través de Amazon API Gateway",
        "La subida de un objeto a un bucket de S3",
        "La creación de un nuevo volumen de Amazon EBS",
        "Un cambio en una tabla de Amazon DynamoDB",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "AWS Lambda puede ser invocada por decenas de servicios: API Gateway, S3, DynamoDB, SNS, SQS, EventBridge, Kinesis, Cognito, etc. Sin embargo, Amazon EBS no genera eventos que puedan actuar como trigger de Lambda. EBS es almacenamiento de bloque a nivel de instancia y no tiene integración nativa de eventos con Lambda. La creación de volúmenes puede detectarse con CloudTrail/EventBridge, pero EBS por sí solo no dispara funciones Lambda.",
    },
    {
      id: 10143,
      pregunta:
        "Un administrador quiere crear una copia de seguridad completa de una instancia EC2 en producción para poder restaurarla íntegramente si es necesario. ¿Cuál es la forma más completa de hacerlo?",
      opciones: [
        "Crear un snapshot solo del volumen de datos adicional, excluyendo el volumen raíz",
        "Exportar los logs de CloudWatch a S3 como respaldo de la configuración",
        "Crear una AMI personalizada a partir de la instancia, que captura todos sus volúmenes",
        "Copiar los ficheros de configuración manualmente a otro servidor EC2",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Crear una AMI personalizada (Custom AMI) a partir de una instancia EC2 genera snapshots de todos los volúmenes asociados (incluido el volumen raíz) y los empaqueta como imagen lista para lanzar. Es la forma más completa de backup porque permite restaurar la instancia entera con su SO, configuración y datos en cualquier momento. Los snapshots aislados o los logs de CloudWatch no permiten restaurar una instancia completa.",
    },
    {
      id: 10144,
      pregunta:
        "¿Cuál es la principal ventaja de usar Amazon RDS frente a instalar la base de datos en una instancia EC2?",
      opciones: [
        "RDS solo soporta MySQL, lo que simplifica la gestión de motores",
        "Con RDS, AWS gestiona parches, backups y alta disponibilidad por ti",
        "RDS no permite hacer copias de seguridad automáticas del sistema",
        "EC2 con BBDD es siempre más barato que RDS en cualquier escenario",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Amazon RDS es un servicio gestionado: AWS se encarga de las actualizaciones del motor de base de datos, los backups automáticos, el failover Multi-AZ y el mantenimiento del sistema operativo subyacente. Esto reduce drásticamente la carga operativa del equipo. Además, RDS soporta múltiples motores (MySQL, PostgreSQL, MariaDB, Oracle, SQL Server, Aurora), no solo MySQL.",
    },
    {
      id: 10145,
      pregunta: "¿Qué es una AMI (Amazon Machine Image) en AWS?",
      opciones: [
        "Un sistema automático de copias de seguridad para instancias EC2",
        "Un servicio para monitorizar el rendimiento de las instancias en tiempo real",
        "Un tipo de almacenamiento en bloque persistente asociado a las instancias",
        "Una plantilla con SO y software preinstalado para lanzar instancias EC2",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "Una AMI es una plantilla inmutable que contiene el sistema operativo, las aplicaciones preinstaladas, la configuración y los parámetros de lanzamiento necesarios para arrancar una instancia EC2. Se pueden usar AMIs de AWS (Amazon Linux, Ubuntu...), del Marketplace (con software de terceros) o crear AMIs propias a partir de instancias existentes, permitiendo replicar entornos de forma consistente.",
    },
    {
      id: 10146,
      pregunta:
        "¿Cuál es una característica fundamental de los nombres de bucket en Amazon S3?",
      opciones: [
        "Deben ser únicos a nivel mundial en toda la plataforma de AWS",
        "Solo tienen que ser únicos dentro de la misma región de AWS",
        "Pueden contener letras mayúsculas y caracteres especiales sin restricciones",
        "Se generan automáticamente por AWS y no pueden ser personalizados",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Los nombres de bucket en S3 tienen alcance global: deben ser únicos en toda la plataforma de AWS, independientemente de la región o cuenta. Esto se debe a que los buckets se acceden mediante URLs con el nombre como subdominio (nombre.s3.amazonaws.com). Además, los nombres solo pueden contener letras minúsculas, números y guiones, con entre 3 y 63 caracteres.",
    },
    {
      id: 10147,
      pregunta: "¿Cuáles son los 6 pilares del AWS Well-Architected Framework?",
      opciones: [
        "Seguridad, Escalabilidad, Automatización, Rendimiento, Costes y Resiliencia",
        "Excelencia Operativa, Seguridad, Fiabilidad, Rendimiento, Costes y Sostenibilidad",
        "Disponibilidad, Seguridad, Escalabilidad, Costes, Monitorización y Elasticidad",
        "Seguridad, Redundancia, Automatización, Latencia, Costes y Sostenibilidad",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "El AWS Well-Architected Framework define 6 pilares para evaluar y mejorar arquitecturas cloud: 1) Excelencia Operativa (operar y monitorizar sistemas), 2) Seguridad (proteger datos e infraestructura), 3) Fiabilidad (recuperarse de fallos), 4) Eficiencia del Rendimiento (usar recursos eficientemente), 5) Optimización de Costes (evitar gastos innecesarios) y 6) Sostenibilidad (minimizar el impacto ambiental), añadido en 2021.",
    },
    {
      id: 10148,
      pregunta:
        "Un administrador ha perdido la clave privada (.pem) de una instancia EC2 Linux en producción. ¿Qué procedimiento permite recuperar el acceso?",
      opciones: [
        "Contactar con AWS Support para que restablezcan la clave privada desde sus sistemas",
        "Usar el usuario root de IAM para hacer SSH directamente a la instancia",
        "Detener la instancia, desconectar el volumen raíz, montarlo en otra instancia, añadir la nueva clave pública y revertir el proceso",
        "Es imposible recuperar el acceso; hay que crear una nueva instancia desde cero",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "AWS nunca tiene acceso a las claves privadas de los usuarios (modelo de responsabilidad compartida). El procedimiento correcto es: detener la instancia, desconectar el volumen raíz (EBS), montarlo como volumen secundario en otra instancia 'de rescate', editar el archivo ~/.ssh/authorized_keys para añadir la nueva clave pública, desmontar el volumen y volver a adjuntarlo a la instancia original. Es laborioso pero completamente recuperable.",
    },
    {
      id: 10149,
      pregunta:
        "¿A través de qué protocolo y puerto te conectas habitualmente a instancias EC2 con Windows Server?",
      opciones: [
        "SSH en el puerto 22, igual que en las instancias Linux",
        "FTP en el puerto 21, para la transferencia de ficheros del sistema",
        "RDP en el puerto 3389, el protocolo de escritorio remoto de Windows",
        "HTTP en el puerto 80, accediendo a través de un navegador web",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Las instancias Windows en EC2 se administran mediante RDP (Remote Desktop Protocol), que opera por defecto en el puerto 3389. Permite acceso gráfico al escritorio remoto de Windows. Para conectarse se necesita el archivo .rdp o las credenciales del administrador (que AWS genera y se desencriptan con la clave privada del par de claves). Linux usa SSH en el puerto 22.",
    },
    {
      id: 10150,
      pregunta:
        "¿Cuál es la principal diferencia entre Amazon DynamoDB y Amazon RDS?",
      opciones: [
        "DynamoDB es NoSQL (clave-valor/documentos) y RDS gestiona BBDD relacionales",
        "DynamoDB es una base de datos relacional y RDS es un servicio NoSQL",
        "DynamoDB solo puede usarse en aplicaciones serverless con AWS Lambda",
        "RDS no garantiza alta disponibilidad, mientras que DynamoDB sí lo hace",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "DynamoDB es una base de datos NoSQL totalmente gestionada, diseñada para acceso por clave con latencia de milisegundos a cualquier escala, sin esquema fijo. RDS, en cambio, gestiona bases de datos relacionales (MySQL, PostgreSQL, Oracle, SQL Server, Aurora) con esquemas estructurados y soporte SQL. La elección depende del modelo de datos: estructurado con relaciones → RDS; alta velocidad con acceso por clave → DynamoDB.",
    },
    {
      id: 10151,
      pregunta:
        "¿Cuál es la principal ventaja de usar Amazon CloudFront para una aplicación con usuarios repartidos por todo el mundo?",
      opciones: [
        "Escala instancias EC2 automáticamente según la demanda en cada región",
        "Cifra todos los datos almacenados en S3 de forma completamente automática",
        "Gestiona los certificados SSL de todos los balanceadores de carga de la cuenta",
        "Entrega el contenido desde ubicaciones edge cercanas al usuario final",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "Amazon CloudFront es una CDN (Content Delivery Network) que distribuye el contenido desde más de 450 puntos de presencia (edge locations) repartidos globalmente. Cuando un usuario solicita contenido, CloudFront lo sirve desde el edge más cercano, reduciendo drásticamente la latencia. El contenido se cachea en los edges, descargando también al servidor de origen. Ideal para webs, APIs, vídeo y activos estáticos con audiencia internacional.",
    },
    {
      id: 10152,
      pregunta:
        "Si Docker permite ejecutar contenedores individualmente, ¿qué problema adicional resuelve Kubernetes (o Amazon EKS)?",
      opciones: [
        "Crear y optimizar imágenes Docker más ligeras y eficientes en recursos",
        "Orquestar múltiples contenedores gestionando despliegue y escalado",
        "Almacenar imágenes de contenedores en un registro privado y seguro",
        "Convertir aplicaciones monolíticas en microservicios de forma automática",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Docker gestiona contenedores individuales, pero en producción se necesitan decenas o cientos de contenedores coordinados. Kubernetes (y su versión gestionada en AWS, EKS) se encarga de la orquestación: despliegue automático, escalado horizontal, reinicio ante fallos, balanceo de carga entre pods, gestión de configuraciones y actualizaciones sin downtime. Es la capa de coordinación que Docker por sí solo no ofrece.",
    },
    {
      id: 10153,
      pregunta:
        "Una instancia EC2 utiliza almacenamiento de tipo 'Instance Store'. ¿Qué ocurre con los datos almacenados si la instancia se detiene?",
      opciones: [
        "Los datos se conservan igual que en EBS; el Instance Store también es persistente",
        "Los datos se sincronizan automáticamente con S3 justo antes del apagado",
        "Los datos se mantienen si la instancia se reinicia, pero se pierden si se detiene",
        "Los datos se pierden permanentemente porque el Instance Store es almacenamiento efímero",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "El Instance Store es almacenamiento físico local del host que ejecuta la instancia. Los datos sobreviven a un reinicio (reboot), pero se pierden permanentemente si la instancia se detiene (stop), se termina (terminate) o falla el hardware subyacente. Por eso se usa solo para datos temporales, cachés o buffers, nunca para datos que requieran persistencia. Para persistencia, se usa EBS.",
    },
    {
      id: 10154,
      pregunta:
        "Una instancia EC2 tiene un volumen raíz de tipo EBS. ¿Qué ocurre con los datos si la instancia se detiene y se vuelve a iniciar?",
      opciones: [
        "Los datos se conservan porque EBS persiste aunque la instancia esté parada",
        "Los datos se pierden porque EBS es almacenamiento efímero por naturaleza",
        "Los datos se copian automáticamente a S3 como medida de seguridad",
        "La instancia no puede reiniciarse sin formatear previamente el volumen",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Amazon EBS es almacenamiento de bloque persistente e independiente del ciclo de vida de la instancia. Al detener una instancia EC2, el volumen EBS conserva todos los datos intactos y permanece disponible. Al volver a iniciarla, el volumen se monta de nuevo con todos sus datos. Esta persistencia es la diferencia clave frente al Instance Store. El volumen EBS incluso puede desconectarse y asociarse a otra instancia.",
    },
    {
      id: 10155,
      pregunta: "¿Cuál es el tiempo máximo de ejecución de una función de AWS Lambda?",
      opciones: [
        "5 minutos como límite máximo configurable por el usuario",
        "Sin límite de tiempo; la función se ejecuta hasta completarse",
        "15 minutos como límite máximo definido por AWS",
        "1 hora por cada invocación individual de la función",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "AWS Lambda tiene un timeout máximo de 15 minutos (900 segundos) por invocación. Este límite es fijo y no puede superarse. Para procesos de larga duración se deben usar alternativas como EC2, ECS/Fargate, o AWS Step Functions (que puede encadenar múltiples funciones Lambda). El timeout es configurable entre 1 segundo y 15 minutos, siendo 3 segundos el valor por defecto.",
    },
    {
      id: 10156,
      pregunta:
        "¿Qué es una Elastic IP en AWS y cuál es su principal ventaja frente a una IP pública normal?",
      opciones: [
        "Una IP privada fija dentro de la VPC que nunca cambia aunque la instancia se reinicie",
        "Una dirección IP pública estática que permanece aunque la instancia se detenga e inicie",
        "Una IP dinámica que AWS reasigna automáticamente al crear cada instancia EC2",
        "Un bloque de IPs reservado para uso exclusivo dentro de una subred privada",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Las IPs públicas normales de EC2 cambian cada vez que la instancia se para y se vuelve a iniciar. Una Elastic IP es una dirección IPv4 pública estática, asociada a la cuenta AWS, que permanece fija aunque la instancia se detenga o se reemplace. Esto es crucial para servicios que dependen de una IP fija (DNS, listas blancas). Una Elastic IP no asociada a una instancia en ejecución genera coste.",
    },
    {
      id: 10157,
      pregunta:
        "Una base de datos Amazon RDS tiene activado Multi-AZ y además tiene réplicas de lectura. ¿Cuál de las siguientes afirmaciones es CORRECTA sobre la diferencia entre ambos mecanismos?",
      opciones: [
        "Multi-AZ y las réplicas de lectura sirven exactamente para lo mismo; es redundante tener ambas",
        "Multi-AZ replica de forma asíncrona; las réplicas de lectura lo hacen de forma síncrona",
        "Multi-AZ garantiza alta disponibilidad con failover automático; las réplicas escalan el rendimiento de lectura",
        "Las réplicas de lectura sirven como destino de failover automático igual que Multi-AZ",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Son mecanismos complementarios con propósitos distintos: Multi-AZ replica de forma síncrona en otra zona y su único fin es la alta disponibilidad (failover automático ante fallos). Las Read Replicas replican de forma asíncrona y están diseñadas para escalar el rendimiento de lectura, permitiendo que las aplicaciones lean desde réplicas y descarguen la instancia principal. Se pueden combinar perfectamente.",
    },
    {
      id: 10158,
      pregunta:
        "¿Puede un balanceador de carga (ELB) de AWS distribuir tráfico entre instancias que están en distintas regiones de AWS?",
      opciones: [
        "No, un ELB opera dentro de una región aunque cubre varias zonas de disponibilidad",
        "Sí, los ELB distribuyen tráfico entre cualquier región de AWS por defecto",
        "Sí, pero requiere activar la opción Multi-Region en la configuración avanzada",
        "No, los ELB solo pueden distribuir tráfico dentro de una única subred privada",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Un ELB (Elastic Load Balancer) opera dentro de una única región AWS, aunque puede distribuir tráfico entre múltiples zonas de disponibilidad (AZs) dentro de esa región. Para balancear entre regiones se usa Amazon Route 53 con políticas de enrutamiento (latencia, geolocalización, failover). Esta arquitectura multi-región requiere diseño explícito, no es algo que ELB haga de forma nativa.",
    },
    {
      id: 10159,
      pregunta: "¿Es posible cambiar el tipo de una instancia EC2 mientras está en ejecución?",
      opciones: [
        "Sí, se puede modificar el tipo en cualquier momento sin interrumpir el servicio",
        "Sí, pero únicamente en instancias con sistema operativo Windows Server",
        "No, es necesario detener la instancia antes de cambiar su tipo",
        "No, el tipo de instancia queda fijo y no puede modificarse una vez creada",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Para cambiar el tipo de instancia EC2 (por ejemplo de t3.micro a m5.large) es obligatorio detenerla previamente. No se puede modificar en caliente. El proceso es: stop → cambiar tipo → start. Sí es posible cambiar el tipo (no es permanente como en D), y aplica tanto a Linux como a Windows. Esto implica un breve periodo de inactividad que debe planificarse en mantenimiento.",
    },
    {
      id: 10160,
      pregunta:
        "Una empresa despliega un servidor web en EC2 y una base de datos en RDS dentro de una VPC. ¿En qué tipo de subred debe colocarse la base de datos y por qué?",
      opciones: [
        "En una subred pública, para que el equipo de desarrollo acceda directamente",
        "En la misma subred que el servidor web para simplificar la configuración de red",
        "En una subred privada, sin acceso directo desde internet",
        "En una subred con su propio Internet Gateway para recibir actualizaciones",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "La arquitectura estándar de seguridad en capas dicta que las bases de datos deben estar siempre en subredes privadas, sin ruta hacia Internet Gateway. Solo el servidor web (en subred pública o privada con acceso controlado) puede comunicarse con la BBDD a través de grupos de seguridad. Exponer la base de datos a internet es una vulnerabilidad crítica. El acceso del equipo de desarrollo debe hacerse mediante VPN, bastion host o AWS Systems Manager.",
    },
    {
      id: 10161,
      pregunta:
        "¿Qué gestiona automáticamente AWS Elastic Beanstalk al desplegar una aplicación web?",
      opciones: [
        "Los repositorios de código fuente y el historial de commits de la aplicación",
        "El aprovisionamiento de recursos, balanceo de carga, escalado y monitorización",
        "Las consultas SQL de la aplicación y la optimización de sus índices",
        "Solo los certificados SSL y las reglas del grupo de seguridad asociadas",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Elastic Beanstalk es una plataforma PaaS que permite desplegar aplicaciones web subiendo el código, y AWS se encarga automáticamente de: provisionar instancias EC2, configurar el balanceador de carga, gestionar el Auto Scaling, instalar el entorno de ejecución y habilitar la monitorización con CloudWatch. El desarrollador mantiene control total sobre los recursos subyacentes si lo desea, pero no necesita gestionarlos manualmente.",
    },
    {
      id: 10162,
      pregunta:
        "¿Cuál es la diferencia entre el escalado horizontal y el escalado vertical?",
      opciones: [
        "El horizontal añade más instancias al grupo; el vertical aumenta los recursos de una instancia",
        "El vertical añade más instancias al grupo; el horizontal aumenta CPU y RAM de una instancia",
        "Ambos son equivalentes y solo difieren en la terminología del proveedor cloud",
        "El escalado horizontal aplica solo a BBDD y el vertical solo a servidores web",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Escalado horizontal (scale out/in): se añaden o eliminan instancias al grupo según la demanda, más servidores para repartir la carga. Escalado vertical (scale up/down): se aumenta o reduce la CPU, RAM y capacidad de una única instancia existente. En la nube se prefiere el horizontal por ser más resiliente y sin límite teórico, mientras que el vertical tiene un techo físico y requiere parar la instancia.",
    },
    {
      id: 10163,
      pregunta:
        "Una función Lambda recibe de repente miles de peticiones simultáneas. ¿Cómo responde Lambda ante esta situación?",
      opciones: [
        "Lambda solo procesa una petición a la vez; el resto se descartan sin respuesta",
        "Lambda escala automáticamente ejecutando múltiples instancias en paralelo hasta el límite de concurrencia",
        "Lambda agrupa las peticiones en lotes y las procesa secuencialmente en orden de llegada",
        "Lambda delega el exceso de peticiones a EC2 automáticamente si supera su capacidad",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Una de las principales ventajas de Lambda es su escalado automático instantáneo: ante miles de peticiones simultáneas, Lambda lanza múltiples instancias de la función en paralelo sin intervención manual. El límite por defecto es 1.000 ejecuciones concurrentes por región (ampliable solicitándolo a AWS). Las peticiones que superan el límite reciben un error de throttling. Lambda nunca delega a EC2; son servicios independientes.",
    },
    {
      id: 10164,
      pregunta:
        "Una empresa quiere apagar automáticamente sus instancias EC2 fuera del horario laboral para reducir costes. ¿Qué combinación de servicios es la más adecuada?",
      opciones: [
        "EC2 Auto Scaling con una política de escalado programado por horario fijo",
        "Amazon RDS con la opción de mantenimiento automático fuera de horario",
        "AWS Lambda con un evento cronológico usando una regla horaria",
        "AWS Elastic Beanstalk con entornos configurados por turno de trabajo",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "La solución estándar es usar Amazon EventBridge (antes CloudWatch Events) con una regla horaria (cron) que dispare una función Lambda a la hora deseada. La función llama a la API de EC2 (start_instances / stop_instances) para encender o apagar las instancias según el horario. Auto Scaling programado también puede funcionar, pero Lambda + EventBridge es más flexible, ligero y sin coste de infraestructura adicional.",
    },
    {
      id: 10165,
      pregunta:
        "Una aplicación tiene muchas consultas de solo lectura que saturan la instancia principal de Amazon RDS. ¿Cuál es la solución más adecuada?",
      opciones: [
        "Activar Multi-AZ para que las consultas de lectura se repartan entre zonas",
        "Aumentar el tipo de instancia del servidor de aplicaciones web frontend",
        "Migrar completamente la base de datos a Amazon DynamoDB",
        "Crear réplicas de lectura de RDS para redirigir las consultas de solo lectura",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "Las Read Replicas (réplicas de lectura) de RDS son instancias adicionales que replican los datos de la instancia principal de forma asíncrona y pueden atender consultas SELECT. Al redirigir el tráfico de lectura hacia ellas, se descarga la instancia principal. Multi-AZ no distribuye lecturas (su réplica es pasiva, solo para failover). Migrar a DynamoDB sería una refactorización mayor innecesaria para este problema.",
    },
    {
      id: 10166,
      pregunta:
        "Una empresa quiere evaluar si su arquitectura en AWS sigue las mejores prácticas en términos de seguridad, costes y resiliencia. ¿Qué herramienta de AWS utiliza para ello?",
      opciones: [
        "AWS Pricing Calculator, para estimar el coste mensual de los servicios",
        "AWS CloudFormation, para desplegar la infraestructura como código",
        "AWS Well-Architected Tool, basada en el Well-Architected Framework",
        "Amazon CloudWatch, para monitorizar métricas y crear alertas",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "La AWS Well-Architected Tool es una herramienta gratuita de la consola de AWS que permite revisar arquitecturas respondiendo preguntas basadas en los 6 pilares del Well-Architected Framework. Genera un informe con los riesgos detectados y recomendaciones de mejora. CloudWatch monitoriza en tiempo real pero no evalúa arquitecturas. CloudFormation despliega infraestructura. Pricing Calculator estima costes futuros.",
    },
    {
      id: 10167,
      pregunta: "¿Para qué tipo de caso de uso es más adecuado Amazon EBS?",
      opciones: [
        "Almacenar y servir imágenes, vídeos y archivos estáticos a escala global",
        "Proporcionar el disco del sistema operativo y datos de una instancia EC2",
        "Distribuir contenido multimedia a usuarios de distintas partes del mundo",
        "Gestionar bases de datos NoSQL sin necesidad de administrar servidores",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Amazon EBS es almacenamiento de bloque persistente diseñado para adjuntarse a instancias EC2 como si fuera un disco duro. Su caso de uso principal es alojar el sistema operativo, las aplicaciones instaladas y los datos de la instancia. Para archivos estáticos a escala global se usa S3, para distribución multimedia CloudFront, y para NoSQL gestionado DynamoDB. EBS requiere estar asociado a una instancia EC2 para ser utilizado.",
    },
    {
      id: 10168,
      pregunta:
        "¿Cuál es la principal ventaja económica de pasar de un modelo on-premise (CAPEX) a la nube (OPEX)?",
      opciones: [
        "Se convierte la inversión fija en hardware en un gasto variable por uso",
        "Se eliminan por completo todos los gastos de TI al transferirlos al proveedor",
        "El proveedor asume todos los riesgos de seguridad sin coste adicional",
        "Se incrementan los costes fijos pero aumenta el rendimiento general del sistema",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "El modelo CAPEX (on-premise) requiere grandes inversiones iniciales en servidores, instalaciones y licencias, independientemente del uso real. La nube transforma esto en OPEX: se paga solo por lo que se consume, cuando se consume. Esto mejora la flexibilidad financiera, elimina la sobrecapacidad y permite escalar sin inversión previa. Los gastos de TI no desaparecen (opción B es falsa), simplemente cambian de naturaleza.",
    },
    {
      id: 10169,
      pregunta:
        "¿Cuál de los siguientes motores de base de datos NO está disponible de forma nativa en Amazon RDS?",
      opciones: [
        "MySQL",
        "PostgreSQL",
        "Oracle",
        "MongoDB",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "Amazon RDS soporta de forma nativa: MySQL, PostgreSQL, MariaDB, Oracle, SQL Server y Amazon Aurora. MongoDB es una base de datos NoSQL orientada a documentos que no está disponible en RDS. Para MongoDB en AWS se usa Amazon DocumentDB (compatible con MongoDB) o MongoDB Atlas. RDS está diseñado exclusivamente para motores de bases de datos relacionales SQL.",
    },
    {
      id: 10170,
      pregunta:
        "En la regla de un grupo de seguridad de AWS aparece como origen la IP 203.0.113.25/32. ¿Qué significa esta notación y qué tráfico permite?",
      opciones: [
        "Permite tráfico desde todos los hosts en la red 203.0.113.0",
        "Permite tráfico desde los primeros 32 hosts de la red 203.0.113.0",
        "Permite tráfico únicamente desde esa dirección IP concreta y ninguna otra",
        "Bloquea el tráfico procedente de esa dirección IP específica",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "La notación CIDR /32 significa que los 32 bits de la dirección IP son fijos, es decir, representa exactamente una única dirección IP. 203.0.113.25/32 permite tráfico exclusivamente desde la IP 203.0.113.25 y ninguna otra. Es la forma estándar de restringir el acceso a una única IP específica en reglas de grupos de seguridad, ideal para acceso administrativo desde una IP conocida.",
    },
  ],
};

export default simulacroDosModuloProfesional;