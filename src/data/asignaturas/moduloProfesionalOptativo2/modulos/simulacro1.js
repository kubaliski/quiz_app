const simulacroUnoModuloProfesional1 = {
  id: 1007,
  asignaturaId: 10,
  nombre: "Simulacro 1 - Módulo Profesional Optativo 2",
  titulo: "Simulacro 1: Fundamentos AWS - EC2, S3, IAM, VPC y servicios clave",
  descripcion:
    "Simulacro completo de 30 preguntas sobre responsabilidad compartida, EC2, S3, Lambda, VPC, IAM, redes y modelos de despliegue en AWS.",
  esExamen: true,
  preguntas: [
    {
      id: 10102,
      pregunta:
        "En el modelo de responsabilidad compartida de AWS, ¿cuál de las siguientes responsabilidades NO asume AWS?",
      opciones: [
        "El mantenimiento físico del centro de datos",
        "La redundancia de la infraestructura subyacente",
        "La configuración segura del sistema operativo en las instancias EC2",
        "La seguridad del firmware de los servidores físicos",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "AWS es responsable de la seguridad 'de' la infraestructura (hardware, centros de datos, firmware). El cliente es responsable de la seguridad 'en' la infraestructura, incluyendo la configuración del SO, aplicaciones, datos, políticas de acceso y parches del sistema operativo en sus instancias.",
    },
    {
      id: 10103,
      pregunta:
        "¿Qué necesidad empresarial resuelve un servicio CDN (Content Delivery Network) como Amazon CloudFront?",
      opciones: [
        "Crear instancias de EC2 en múltiples regiones de forma simultánea",
        "Encriptar automáticamente todas las bases de datos de la aplicación",
        "Eliminar la necesidad de utilizar Grupos de Seguridad en instancias EC2",
        "Reducir la latencia y mejorar la velocidad de distribución de contenido a usuarios finales en diferentes geografías",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "CloudFront es una red de distribución de contenido que cachea contenido en servidores ubicados estratégicamente alrededor del mundo. Cuando un usuario solicita contenido, se sirve desde el punto de presencia más cercano, reduciendo latencia y mejorando la experiencia del usuario.",
    },
    {
      id: 10104,
      pregunta:
        "¿Qué ocurre con un volumen de Amazon EBS cuando la instancia de EC2 a la que está conectado es terminada, si el volumen no tiene el atributo 'Delete on Termination' activo?",
      opciones: [
        "El volumen se archiva automáticamente en S3 para recuperación",
        "El volumen se detiene pero no se elimina, permitiendo su reutilización posterior",
        "El volumen persiste de forma independiente y puede ser adjuntado a otra instancia",
        "El volumen se elimina automáticamente junto con la instancia",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Por defecto, los volúmenes EBS pueden sobrevivir a la terminación de la instancia EC2 a la que están conectados. Si 'Delete on Termination' está desactivado, el volumen permanece disponible como volumen independiente en la zona de disponibilidad, pudiendo ser reutilizado o adjuntado a otras instancias.",
    },
    {
      id: 10105,
      pregunta:
        "¿Qué significa configurar 0.0.0.0/0 como origen en una regla de ingreso de un Grupo de Seguridad?",
      opciones: [
        "Solo se permiten conexiones desde la red privada de la VPC",
        "Solo se permite desde servidores AWS en la misma región",
        "Se permite acceso desde cualquier dirección IP en internet",
        "Se permite exclusivamente desde direcciones IP del ISP del cliente",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "La notación CIDR 0.0.0.0/0 representa el rango de todas las direcciones IPv4 posibles. Configurarlo como origen en una regla abre el puerto a internet público. Se utiliza para servicios web públicos pero debe evitarse para puertos de administración como SSH (22) o RDP (3389) por razones de seguridad.",
    },
    {
      id: 10106,
      pregunta: "¿Para qué se utiliza un par de claves (Key Pair) en AWS EC2?",
      opciones: [
        "Encriptar datos en reposo dentro de volúmenes EBS",
        "Establecer políticas de firewall en grupos de seguridad",
        "Configurar replicación de bases de datos",
        "Autenticar y permitir acceso remoto a instancias mediante SSH o RDP",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "Un par de claves (Key Pair) consta de una clave pública (almacenada en AWS) y una clave privada (descargada por el usuario). La clave privada se utiliza para autenticarse y acceder remotamente a instancias EC2 mediante SSH (Linux) o RDP (Windows), estableciendo un canal seguro sin necesidad de contraseñas.",
    },
    {
      id: 10107,
      pregunta:
        "¿Qué capas de la pila tecnológica gestiona directamente el cliente en un modelo IaaS?",
      opciones: [
        "Sistema operativo, middleware, aplicaciones y datos",
        "Únicamente los datos y aplicaciones",
        "Solo la capa de virtualización de servidores",
        "La infraestructura física y el almacenamiento",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "En IaaS (Infrastructure as a Service), el proveedor gestiona la infraestructura física, virtualización y almacenamiento. El cliente es responsable de instalar y configurar el sistema operativo, middleware, aplicaciones y datos sobre los recursos proporcionados.",
    },
    {
      id: 10108,
      pregunta: "¿Qué es una Amazon Machine Image (AMI)?",
      opciones: [
        "Un volumen independiente de almacenamiento que se conecta a instancias EC2",
        "Un servicio de monitorización que registra las métricas de rendimiento de servidores",
        "Una plantilla precargada con sistema operativo y software para lanzar instancias EC2",
        "Un tipo de instancia EC2 especializada para cargas de trabajo de inteligencia artificial",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Una AMI es una plantilla que contiene el sistema operativo, librerías, aplicaciones preinstaladas y configuraciones necesarias. Al lanzar una instancia EC2, se especifica qué AMI usar. AWS proporciona AMIs públicas de diferentes SOs y terceros; también pueden crearse AMIs personalizadas.",
    },
    {
      id: 10109,
      pregunta:
        "¿Qué servicio de AWS permite ejecutar código sin necesidad de provisionar, configurar ni administrar servidores?",
      opciones: [
        "Amazon RDS",
        "AWS Lambda",
        "AWS Elastic Beanstalk",
        "Amazon EC2",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "AWS Lambda es un servicio de computación sin servidores (serverless) que ejecuta código en respuesta a eventos sin requerir aprovisionamiento, configuración o gestión de instancias. El usuario solo proporciona el código y Lambda se encarga de la escala, disponibilidad y mantenimiento de la infraestructura subyacente.",
    },
    {
      id: 10110,
      pregunta:
        "Al cambiar el tipo de instancia de una instancia EC2 en ejecución, ¿cuál de las siguientes afirmaciones es correcta?",
      opciones: [
        "Es posible cambiar el tipo de instancia sin detener la ejecución de la instancia",
        "El tipo de instancia solo puede modificarse antes de lanzar la instancia; una vez en ejecución, es permanente",
        "Es necesario detener la instancia, cambiar el tipo y reiniciarla para que el cambio sea efectivo",
        "El cambio de tipo de instancia requiere la creación de una AMI y el lanzamiento de una nueva instancia",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "En AWS EC2, para modificar el tipo de instancia es obligatorio detener la instancia primero. Una vez detenida, se puede cambiar el tipo de instancia y luego reiniciarla. El cambio no puede realizarse mientras la instancia está en ejecución. Esta operación preserva el almacenamiento de volumen raíz y los datos existentes.",
    },
    {
      id: 10111,
      pregunta:
        "¿Qué necesidad específica resuelve un servicio CDN como Amazon CloudFront en la arquitectura de aplicaciones en la nube?",
      opciones: [
        "Reemplazar las instancias EC2 en regiones sin cobertura de AWS",
        "Gestionar la autenticación de usuarios distribuidos globalmente",
        "Distribuir contenido estático con baja latencia desde ubicaciones geográficamente cercanas",
        "Realizar copias de seguridad automáticas de buckets de S3 entre regiones",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "CloudFront es una red de distribución de contenidos (CDN) que almacena en caché contenido estático en servidores distribuidos globalmente, reduciendo la latencia y mejorando la velocidad de entrega para usuarios geográficamente dispersos.",
    },
    {
      id: 10112,
      pregunta:
        "¿Cuál es la principal diferencia funcional entre una Zona de Disponibilidad y una Región en la arquitectura de AWS?",
      opciones: [
        "Las Zonas de Disponibilidad son datacenters independientes dentro de una Región, mientras que las Regiones agrupan múltiples Zonas de Disponibilidad geográficamente dispersas",
        "Las Zonas de Disponibilidad están limitadas a un único servicio de AWS, mientras que las Regiones ofrecen acceso a todos los servicios",
        "Las Regiones son instalaciones de red, mientras que las Zonas de Disponibilidad son servidores físicos individuales",
        "No existe diferencia funcional; ambos términos se utilizan indistintamente para describir ubicaciones de recursos",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Una Región es una área geográfica que agrupa varias Zonas de Disponibilidad interconectadas. Las Zonas de Disponibilidad son instalaciones de infraestructura física aisladas y redundantes dentro de una Región, diseñadas para proporcionar alta disponibilidad y tolerancia a fallos.",
    },
    {
      id: 10113,
      pregunta:
        "¿Cuál es la definición técnica precisa de una Zona de Disponibilidad (AZ) en la infraestructura de AWS?",
      opciones: [
        "Un área geográfica independiente que contiene todos los servicios de AWS disponibles",
        "Un conjunto de centros de datos físicamente aislados dentro de una región, diseñados para ser independientes",
        "Una red virtual privada dedicada a un único cliente de AWS",
        "Un servidor de caché distribuido para reducir la latencia en aplicaciones web",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Una Zona de Disponibilidad (AZ) representa uno o varios centros de datos físicamente separados dentro de una región de AWS. Cada AZ cuenta con infraestructura, suministro eléctrico y refrigeración independiente, permitiendo que los recursos distribuidos entre múltiples AZ tengan alta disponibilidad ante fallos de una zona completa.",
    },
    {
      id: 10114,
      pregunta:
        "¿Cuáles son los requisitos mínimos imprescindibles para lanzar una instancia EC2 en AWS?",
      opciones: [
        "Una AMI, un tipo de instancia y una clave de par SSH",
        "Una clave de par SSH, un tipo de instancia y permisos de seguridad en el grupo de seguridad",
        "Una AMI, una clave de par SSH obligatoria, un grupo de seguridad y una dirección IP elástica",
        "Una AMI, un tipo de instancia, una VPC o subred donde ejecutarse, y acceso configurado",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "Para lanzar una instancia EC2, los requisitos fundamentales son: una AMI (SO y software preinstalado), un tipo de instancia (recursos de cómputo), y un contexto de red (VPC y subred). La clave de par SSH no es imprescindible: existen alternativas como AWS Systems Manager Session Manager. Una IP elástica es opcional.",
    },
    {
      id: 10115,
      pregunta:
        "¿Cuál de las siguientes responsabilidades NO corresponde a AWS en el modelo de responsabilidad compartida?",
      opciones: [
        "Mantener la disponibilidad y redundancia de los servicios en las zonas disponibles",
        "Asegurar la encriptación de datos en tránsito dentro de la red AWS",
        "Aplicar parches de seguridad al sistema operativo de las instancias EC2",
        "Garantizar la seguridad física de los datacenters y la infraestructura de red",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "En el modelo de responsabilidad compartida, AWS es responsable de la seguridad de la infraestructura física y servicios gestionados. El cliente es responsable del sistema operativo de sus instancias, incluyendo la aplicación de parches y actualizaciones de seguridad.",
    },
    {
      id: 10116,
      pregunta:
        "¿Qué sucede con los datos almacenados en un volumen EBS cuando la instancia EC2 asociada se apaga o se elimina?",
      opciones: [
        "Se eliminan automáticamente al desconectarse de la instancia",
        "Se migran automáticamente a Amazon S3 como respaldo",
        "Se mantienen persistentes en el volumen y pueden reutilizarse en otra instancia EC2",
        "Quedan inaccesibles hasta que la misma instancia se reinicia",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Amazon EBS proporciona almacenamiento en bloques persistente desacoplado del ciclo de vida de la instancia. Los datos persisten aunque la instancia se detenga o termine, permitiendo reasignar el volumen a otra instancia o crear snapshots. Esta característica es fundamental para la separación entre almacenamiento y cómputo en arquitecturas cloud.",
    },
    {
      id: 10117,
      pregunta:
        "En Amazon S3, ¿cuál es la unidad fundamental de almacenamiento y organización de datos?",
      opciones: [
        "La partición, que divide el almacenamiento en segmentos para mejorar el rendimiento",
        "El objeto, que es la unidad granular de almacenamiento identificada por una clave única",
        "El bucket, que es el contenedor primario y el espacio de nombres global donde se almacenan los objetos",
        "La carpeta, que organiza jerárquicamente los objetos dentro del almacenamiento",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "En Amazon S3, el bucket es la unidad fundamental de almacenamiento y organización. Es un contenedor de nivel superior que actúa como espacio de nombres global y único en toda AWS. Los objetos (archivos) se almacenan dentro de los buckets. Sin un bucket no se pueden almacenar objetos.",
    },
    {
      id: 10118,
      pregunta:
        "¿Cuál es la característica definitoria del servicio AWS Lambda en comparación con otros servicios de cómputo?",
      opciones: [
        "Ofrece máquinas virtuales de bajo coste optimizadas para cargas de trabajo batch",
        "Simplifica el despliegue de aplicaciones web mediante contenedores Docker gestionados",
        "Permite ejecutar código de forma automática sin necesidad de provisionamiento o administración de servidores",
        "Proporciona orquestación automática de contenedores en clústeres distribuidos",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "AWS Lambda es un servicio serverless (sin servidor) que ejecuta código en respuesta a eventos sin que el desarrollador tenga que provisionar, configurar ni administrar servidores. El usuario carga el código, define los triggers, y Lambda se encarga de la escalabilidad automática, pagando solo por el tiempo de ejecución consumido.",
    },
    {
      id: 10119,
      pregunta:
        "Para permitir que un administrador se conecte de forma remota a un servidor Windows en EC2, ¿qué protocolo y puertos deben configurarse en el grupo de seguridad?",
      opciones: [
        "SSH en puerto 22",
        "RDP (Remote Desktop Protocol) en puerto 3389",
        "HTTP en puerto 80",
        "Telnet en puerto 23",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Windows utiliza RDP (Remote Desktop Protocol) en el puerto 3389 para conexiones remotas de escritorio. SSH en puerto 22 es específico de sistemas Linux. Para acceso remoto administrativo a instancias Windows, debe permitirse RDP en el grupo de seguridad.",
    },
    {
      id: 10120,
      pregunta:
        "Cuando una instancia de Amazon EC2 se detiene sin tener asignada una dirección IP elástica, ¿qué ocurre con su dirección IP pública?",
      opciones: [
        "Se bloquea automáticamente por razones de seguridad",
        "Se conserva en una piscina de AWS para futuras asignaciones a la misma instancia",
        "Se libera y puede ser asignada a otra instancia; al reiniciar, se asigna una nueva IP pública diferente",
        "Se mantiene asignada permanentemente a la instancia",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Las direcciones IP públicas estándar en EC2 son dinámicas y transitorias. Cuando se detiene la instancia, AWS libera esa IP pública al conjunto general de direcciones. Al reiniciar, se asigna una IP pública diferente. Para mantener una dirección IP pública consistente, es necesario asignar una Elastic IP Address.",
    },
    {
      id: 10121,
      pregunta:
        "¿Qué define técnicamente una política de IAM y cuál es su propósito principal en AWS?",
      opciones: [
        "Un protocolo de encriptación para comunicaciones entre servicios",
        "Un documento JSON que especifica permisos explícitos para acceder a recursos AWS",
        "Un archivo de configuración que restringe únicamente el acceso mediante contraseñas",
        "Una tabla de enrutamiento que define qué usuarios pueden conectarse a la VPC",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Una política IAM es un documento JSON que define permisos (acciones permitidas o denegadas) sobre recursos específicos de AWS. Puede asociarse a usuarios, grupos o roles, controlando granularmente qué acciones pueden realizar en la plataforma.",
    },
    {
      id: 10122,
      pregunta:
        "¿Qué factor NO influye en la determinación del precio de los recursos en AWS bajo su modelo de precios?",
      opciones: [
        "La región geográfica donde se despliega el recurso",
        "El nombre elegido para etiquetar el recurso",
        "La duración del tiempo de uso del recurso",
        "El tipo y capacidad de instancia seleccionada",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Los precios en AWS se determinan por factores técnicos como la región, el tipo de instancia, su capacidad de procesamiento y tiempo de uso. Las etiquetas o nombres asignados a los recursos son únicamente mecanismos de organización y no afectan al cálculo del coste.",
    },
    {
      id: 10123,
      pregunta:
        "¿Qué representa fundamentalmente una Política de IAM en AWS y cuál es su propósito principal?",
      opciones: [
        "Un certificado criptográfico para cifrado de datos",
        "Una restricción de tiempo para la conexión a instancias EC2",
        "Un documento JSON que define permisos explícitos para acceder a recursos AWS",
        "Un archivo de configuración que establece la región predeterminada",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Una Política de IAM es un documento JSON que especifica qué acciones se permiten o deniegan sobre qué recursos bajo qué condiciones. Su propósito es implementar el control de acceso granular, permitiendo que usuarios, grupos y roles tengan permisos específicos sobre la infraestructura.",
    },
    {
      id: 10124,
      pregunta:
        "¿Cuál de estos factores influye directamente en la facturación de los servicios de AWS?",
      opciones: [
        "La cantidad de datos almacenados y la capacidad de cómputo asignada a recursos",
        "La cantidad de políticas de IAM configuradas en la cuenta",
        "El número de reglas de firewall definidas en los Grupos de Seguridad",
        "Las etiquetas y metadatos utilizados para clasificar y organizar los recursos",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "AWS factura principalmente por recursos consumidos: almacenamiento (GB/mes), tiempo de computación (horas de instancias), transferencia de datos y servicios específicos. Aspectos como políticas IAM, reglas de seguridad o etiquetas no generan costes, ya que son funciones de gestión y seguridad sin consumo de recursos.",
    },
    {
      id: 10125,
      pregunta:
        "¿Qué representa técnicamente la dirección CIDR 0.0.0.0/0 cuando se configura en una tabla de enrutamiento o grupo de seguridad?",
      opciones: [
        "Conexiones restringidas a administradores autenticados",
        "Tráfico únicamente desde direcciones IP privadas de clase C",
        "Tráfico exclusivamente desde hosts locales en la misma subred",
        "Acceso desde cualquier dirección IP de cualquier origen o destino",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "La notación CIDR 0.0.0.0/0 representa todo el espacio de direcciones IPv4 posibles. Cuando se usa en reglas de seguridad o enrutamiento, indica que se permite tráfico desde o hacia cualquier dirección IP, lo que debe emplearse con cautela en entornos de producción.",
    },
    {
      id: 10126,
      pregunta:
        "Una organización debe mantener cierta información de negocio sensible en sus propios servidores debido a regulaciones internas, pero desea aprovechar la nube pública para otras operaciones menos críticas. ¿Qué modelo de despliegue es el más apropiado?",
      opciones: [
        "Nube híbrida que integra infraestructura local privada con servicios de nube pública",
        "Nube pública con cifrado avanzado en todas las capas de la aplicación",
        "Nube privada gestionada completamente por un proveedor externo en sus instalaciones",
        "Nube comunitaria compartida exclusivamente con otras organizaciones del mismo sector",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "La nube híbrida permite a las organizaciones mantener datos y cargas de trabajo sensibles en infraestructura privada (on-premise o dedicada) mientras aprovechan la flexibilidad, escalabilidad y costes de la nube pública para aplicaciones no críticas. Esta combinación ofrece el balance óptimo entre control, cumplimiento normativo y eficiencia económica.",
    },
    {
      id: 10127,
      pregunta:
        "¿Cuál de las siguientes afirmaciones sobre regiones y zonas de disponibilidad en AWS es correcta?",
      opciones: [
        "Todos los usuarios deben desplegar recursos en la misma zona de disponibilidad",
        "Las zonas de disponibilidad dentro de una región comparten la misma infraestructura física",
        "Cada región está formada por múltiples zonas de disponibilidad independientes y aisladas",
        "Una región contiene una única zona de disponibilidad para simplificar la gestión",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Las regiones de AWS son áreas geográficas independientes, y cada una contiene múltiples zonas de disponibilidad (AZ). Las AZ están físicamente separadas pero conectadas con baja latencia, proporcionando redundancia y alta disponibilidad para aplicaciones resilientes.",
    },
    {
      id: 10128,
      pregunta:
        "¿Quién es responsable de mantener el hardware físico en el servicio EC2 de AWS?",
      opciones: [
        "Ambas partes comparten la responsabilidad de forma equitativa",
        "AWS se encarga de la gestión, mantenimiento y reemplazo del hardware físico",
        "El proveedor de servicios de internet del cliente es responsable de la infraestructura",
        "El cliente es responsable de reemplazar y reparar servidores defectuosos",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "En el modelo de responsabilidad compartida de AWS, la empresa es responsable de la infraestructura física (servidores, redes, centros de datos). El cliente es responsable de la instalación del SO, configuración de seguridad de red y actualizaciones de aplicaciones. AWS garantiza disponibilidad, redundancia y mantenimiento del hardware.",
    },
    {
      id: 10129,
      pregunta:
        "¿Qué conjunto de elementos es imprescindible para lanzar correctamente una instancia de Amazon EC2?",
      opciones: [
        "Únicamente especificar la región geográfica deseada",
        "Una dirección IP elástica asignada previamente",
        "Una política IAM y una tabla de enrutamiento configurada",
        "Una AMI, un tipo de instancia, un grupo de seguridad y un par de claves",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "Para lanzar una instancia EC2 se requieren: una Amazon Machine Image (AMI) como plantilla del sistema, un tipo de instancia definiendo recursos, un grupo de seguridad especificando reglas de firewall, y un par de claves para acceso remoto seguro.",
    },
    {
      id: 10130,
      pregunta:
        "¿Cuál de las siguientes descripciones sobre la arquitectura de regiones y zonas de disponibilidad en AWS es precisa?",
      opciones: [
        "Una Región es el centro de datos principal, y las Zonas de Disponibilidad son configuraciones lógicas que el administrador crea dentro de ella",
        "Una Región agrupa múltiples Zonas de Disponibilidad independientes, que son instalaciones de centros de datos distintos dentro de la misma área geográfica",
        "Las Zonas de Disponibilidad son réplicas de seguridad distribuidas automáticamente en múltiples Regiones para redundancia",
        "Una Zona de Disponibilidad contiene varias Regiones conectadas mediante fibra óptica de baja latencia",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "La arquitectura de AWS organiza sus servicios en Regiones (áreas geográficas grandes) y dentro de cada Región hay varias Zonas de Disponibilidad (AZ). Cada AZ es una instalación de datos físicamente separada, aunque cercana, permitiendo alta disponibilidad y tolerancia a fallos.",
    },
    {
      id: 10131,
      pregunta:
        "En Amazon S3, ¿cómo se organizan jerárquicamente los datos almacenados?",
      opciones: [
        "Se agrupan dentro de contenedores llamados buckets, siendo cada archivo almacenado un objeto",
        "Se distribuyen en bloques que se asignan dinámicamente según el volumen utilizado",
        "Se utilizan volúmenes que contienen snapshots individuales de datos",
        "Los datos se organizan en repositorios que alojan archivos estructurados",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Amazon S3 utiliza una estructura jerárquica simple: los buckets actúan como contenedores de nivel superior (similares a carpetas raíz), y cada archivo almacenado se denomina objeto. Los objetos dentro de un bucket se identifican por una clave única que puede incluir prefijos similares a rutas de directorios, pero no existe una jerarquía de carpetas real.",
    },
  ],
};

export default simulacroUnoModuloProfesional1;
