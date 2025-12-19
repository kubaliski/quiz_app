const moduloExamenUno = {
  id: 1005,
  asignaturaId: 10,
  nombre: "Preguntas de Examen 1",
  titulo: "Examen 1: Fundamentos de Cloud Computing y AWS",
  descripcion: "Migración a la nube, modelos de servicio, regiones, servicios AWS básicos, IAM y redes.",
  esExamen: true,
  preguntas: [
    {
      id: 10061,
      pregunta: "Una empresa quiere migrar sus servidores desde una infraestructura on-premise a la nube. ¿Cuál es la principal ventaja de este cambio?",
      opciones: [
        "Garantizar capacidad de cómputo sobredimensionada de forma permanente",
        "Mantener la gestión directa del hardware y su mantenimiento",
        "Incrementar los costes fijos asociados a la infraestructura tecnológica",
        "Ajustar los recursos de cómputo de forma flexible según la demanda del negocio"
      ],
      respuestaCorrecta: 3,
      explicacion: "La principal ventaja del cloud computing es la escalabilidad elástica, que permite ajustar recursos según necesidades reales y pagar solo por lo utilizado. La nube busca optimizar costes convirtiendo inversiones fijas en gastos variables operativos adaptables a la demanda."
    },
    {
      id: 10062,
      pregunta: "¿Qué ventaja principal ofrece el aprovisionamiento de recursos en la computación en la nube?",
      opciones: [
        "Bloquear recursos de forma fija para cada usuario",
        "Garantizar un coste exacto e invariable",
        "Mantener picos y valles de uso como en infraestructuras locales",
        "Ajustar los recursos de forma dinámica según la demanda"
      ],
      respuestaCorrecta: 3,
      explicacion: "El aprovisionamiento dinámico es la característica fundamental de la nube, permitiendo escalar recursos automáticamente según necesidades reales. La nube ajusta recursos continuamente optimizando costes y rendimiento, eliminando capacidad ociosa en valles y saturación en picos."
    },
    {
      id: 10063,
      pregunta: "¿Cuál es la principal diferencia entre los modelos SaaS, PaaS e IaaS en computación en la nube?",
      opciones: [
        "El tipo de empresa que puede utilizarlos",
        "El nivel de control y gestión que tiene el usuario sobre la infraestructura y el software",
        "El precio mensual del servicio",
        "El lenguaje de programación que se utiliza"
      ],
      respuestaCorrecta: 1,
      explicacion: "La diferencia fundamental entre estos modelos es el nivel de control: IaaS ofrece máximo control (infraestructura virtualizada), PaaS nivel medio (plataforma de desarrollo gestionada), y SaaS mínimo control (aplicación completa). Cualquier empresa puede usar cualquier modelo según sus necesidades."
    },
    {
      id: 10064,
      pregunta: "En un modelo IaaS (Infrastructure as a Service), ¿qué componentes son responsabilidad del usuario?",
      opciones: [
        "Aplicaciones, datos, sistema operativo y middleware",
        "Solo las aplicaciones",
        "Servidores físicos y red",
        "Virtualización y almacenamiento"
      ],
      respuestaCorrecta: 0,
      explicacion: "En IaaS, el proveedor gestiona la infraestructura física (hardware, red, virtualización, almacenamiento), mientras que el usuario es responsable de todo lo que corre sobre esa infraestructura: sistema operativo, middleware, runtime, datos y aplicaciones."
    },
    {
      id: 10065,
      pregunta: "¿Cuál es la principal diferencia entre una nube pública, una nube privada y una nube híbrida?",
      opciones: [
        "El tipo de sistema operativo que utilizan",
        "Quién es el propietario y cómo se comparten los recursos",
        "El número de usuarios que pueden acceder",
        "El lenguaje de programación de las aplicaciones"
      ],
      respuestaCorrecta: 1,
      explicacion: "La diferencia fundamental radica en la propiedad y el modelo de compartición: nube pública (recursos compartidos, propiedad del proveedor), nube privada (recursos dedicados a una organización, mayor control), y nube híbrida (combinación de ambas, permitiendo flexibilidad)."
    },
    {
      id: 10066,
      pregunta: "¿En qué situación tiene más sentido utilizar una estrategia multicloud?",
      opciones: [
        "Cuando una empresa solo quiere reducir el número de servidores físicos",
        "Cuando se utilizan servicios de un único proveedor para simplificar la gestión",
        "Cuando se combinan servicios de distintos proveedores para evitar dependencia de uno solo o usar lo mejor de cada uno",
        "Cuando se quiere instalar todo el software en local"
      ],
      respuestaCorrecta: 2,
      explicacion: "Multicloud permite aprovechar las fortalezas específicas de cada proveedor, evita el vendor lock-in y mejora la resiliencia mediante redundancia entre proveedores. Es ideal cuando se busca flexibilidad, especialización por proveedor o requisitos regulatorios específicos."
    },
    {
      id: 10067,
      pregunta: "¿Cuál de las siguientes opciones describe correctamente la diferencia entre una región y una Availability Zone en AWS?",
      opciones: [
        "Una región está formada por varias Availability Zones independientes entre sí",
        "Una Availability Zone contiene varias regiones dentro de ella",
        "Una región es un único centro de datos físico",
        "Las regiones y las Availability Zones son exactamente lo mismo"
      ],
      respuestaCorrecta: 0,
      explicacion: "Una región de AWS es una ubicación geográfica (ej: eu-west-1 en Irlanda) que contiene múltiples Availability Zones aisladas físicamente entre sí pero interconectadas con baja latencia, permitiendo alta disponibilidad y tolerancia a fallos."
    },
    {
      id: 10068,
      pregunta: "¿Por qué es importante elegir correctamente la región en la nube donde se despliega una aplicación?",
      opciones: [
        "Porque mejora la latencia al estar cerca de los usuarios, ayuda a cumplir normativas legales y puede optimizar disponibilidad y costes",
        "Porque garantiza automáticamente la seguridad total de los datos y elimina la necesidad de copias de seguridad",
        "Porque permite usar cualquier región sin impacto en rendimiento, costes o cumplimiento legal",
        "Ninguna de las anteriores"
      ],
      respuestaCorrecta: 0,
      explicacion: "La región afecta directamente a latencia (proximidad geográfica), cumplimiento normativo (GDPR requiere datos en UE), costes (varían según región), y disponibilidad (servicios específicos). La selección de región es una decisión arquitectónica fundamental."
    },
    {
      id: 10069,
      pregunta: "Una empresa que maneja datos personales quiere desplegar su aplicación en AWS. ¿Qué criterio puede ser determinante a la hora de elegir una región?",
      opciones: [
        "El tipo de hardware utilizado en los centros de datos",
        "La legislación y normativas de protección de datos aplicables en esa región",
        "El número de cuentas de usuario creadas en AWS",
        "La interfaz de la consola de AWS en ese país"
      ],
      respuestaCorrecta: 1,
      explicacion: "Al manejar datos personales, el cumplimiento normativo es crítico: regulaciones como GDPR (Europa) exigen que datos de ciudadanos europeos se almacenen en regiones de la UE, con restricciones estrictas sobre transferencias internacionales."
    },
    {
      id: 10070,
      pregunta: "¿Cuál de las siguientes asociaciones entre un servicio de AWS y su función es CORRECTA?",
      opciones: [
        "EC2: almacenamiento de objetos para guardar archivos",
        "S3: servicio de bases de datos relacionales gestionadas",
        "VPC: red privada donde se despliegan los recursos en la nube",
        "IAM: servicio para crear máquinas virtuales"
      ],
      respuestaCorrecta: 2,
      explicacion: "VPC (Virtual Private Cloud) permite crear redes privadas aisladas en AWS donde desplegar recursos con control total sobre configuración de red, subredes, tablas de enrutamiento y gateways. EC2 son máquinas virtuales, S3 es almacenamiento de objetos, e IAM gestiona identidades y permisos."
    },
    {
      id: 10071,
      pregunta: "¿Qué es el Free Tier de AWS y por qué es importante conocerlo?",
      opciones: [
        "Un conjunto de servicios siempre gratuitos sin ningún tipo de límite",
        "Un periodo de prueba con límites de uso gratuitos que ayuda a aprender y evitar costes inesperados",
        "Un servicio que bloquea automáticamente cualquier gasto en la cuenta",
        "Una herramienta exclusiva para empresas grandes"
      ],
      respuestaCorrecta: 1,
      explicacion: "El Free Tier ofrece acceso limitado gratuito a servicios AWS (12 meses para nuevos usuarios, o perpetuo en algunos servicios básicos), permitiendo experimentar sin costes dentro de umbrales específicos. Es crucial conocer sus límites para evitar cargos inesperados."
    },
    {
      id: 10072,
      pregunta: "¿Cuál es el objetivo principal de la Calculadora de precios de AWS?",
      opciones: [
        "Monitorizar el consumo real y generar facturas mensuales",
        "Crear y desplegar recursos directamente en AWS",
        "Estimar el coste de distintos servicios antes de desplegarlos y comparar configuraciones",
        "Aplicar automáticamente descuentos por uso prolongado"
      ],
      respuestaCorrecta: 2,
      explicacion: "La AWS Pricing Calculator permite simular arquitecturas completas estimando costes mensuales antes del despliegue, facilitando comparación entre configuraciones, regiones y servicios para optimizar presupuestos. Es una herramienta de planificación, no de gestión operativa."
    },
    {
      id: 10073,
      pregunta: "¿Cuál de las siguientes afirmaciones describe mejor una limitación de la AWS Pricing Calculator?",
      opciones: [
        "Ofrece siempre un coste exacto e idéntico al de la factura final",
        "No permite estimar más de un servicio a la vez",
        "La estimación puede no ser exacta, por lo que a veces es mejor empezar con un uso real y revisar la factura",
        "Solo puede usarse con cuentas de pago"
      ],
      respuestaCorrecta: 2,
      explicacion: "La calculadora proporciona estimaciones basadas en uso proyectado, pero los costes reales dependen de factores variables como transferencia de datos real, almacenamiento efectivo y patrones de tráfico que pueden diferir de las previsiones. Por eso es recomendable monitorizar facturas reales inicialmente."
    },
    {
      id: 10074,
      pregunta: "Al realizar una estimación en la AWS Pricing Calculator, ¿qué combinación de factores suele tener un impacto MÁS significativo en el coste final?",
      opciones: [
        "Tipo de servicio, tamaño del recurso, horas de uso y región seleccionada",
        "Número de usuarios IAM, políticas de permisos y grupos asignados",
        "Zona de disponibilidad elegida, nombre del recurso y etiquetas aplicadas",
        "Ninguna de las anteriores"
      ],
      respuestaCorrecta: 0,
      explicacion: "Los costes se determinan principalmente por: tipo de servicio (EC2, RDS, S3 tienen precios diferentes), tamaño/capacidad del recurso, horas de uso continuo o intermitente, y región (us-east-1 suele ser más barata que eu-west-1). IAM es gratuito y nombres/etiquetas no tienen coste asociado."
    },
    {
      id: 10075,
      pregunta: "¿Qué es Amazon EC2 dentro de los servicios de AWS?",
      opciones: [
        "Un servicio para crear y gestionar máquinas virtuales bajo demanda",
        "Un sistema de almacenamiento de archivos distribuido",
        "Un servicio de bases de datos gestionadas",
        "Un servicio de gestión de identidades"
      ],
      respuestaCorrecta: 0,
      explicacion: "EC2 (Elastic Compute Cloud) proporciona capacidad de cómputo escalable mediante servidores virtuales configurables en tamaño, sistema operativo y recursos. Permite ejecutar aplicaciones con control total sobre la instancia. Es el servicio fundamental de infraestructura computacional en AWS."
    },
    {
      id: 10076,
      pregunta: "¿Cuál es la función principal de Amazon S3?",
      opciones: [
        "Ejecutar aplicaciones sin necesidad de servidores",
        "Crear redes privadas virtuales en la nube",
        "Proporcionar almacenamiento de objetos escalable",
        "Gestionar usuarios y permisos"
      ],
      respuestaCorrecta: 2,
      explicacion: "S3 (Simple Storage Service) ofrece almacenamiento de objetos altamente escalable, duradero y accesible vía HTTP, ideal para archivos, backups, contenido estático web, datos de aplicaciones y data lakes. Se organiza en buckets con durabilidad del 99.999999999%."
    },
    {
      id: 10077,
      pregunta: "Según el modelo de responsabilidad compartida de AWS, ¿qué tarea es responsabilidad del CLIENTE al usar una instancia EC2?",
      opciones: [
        "La seguridad física del centro de datos",
        "La infraestructura de virtualización",
        "El mantenimiento del hardware del servidor",
        "La actualización y configuración del sistema operativo de la instancia"
      ],
      respuestaCorrecta: 3,
      explicacion: "En EC2, AWS gestiona la infraestructura física y el hipervisor, mientras que el cliente es responsable del sistema operativo hacia arriba: actualizaciones de seguridad, configuración, aplicaciones, datos, firewall, encriptación y backups. AWS asegura la nube, el cliente asegura lo que está en la nube."
    },
    {
      id: 10078,
      pregunta: "En el modelo de responsabilidad compartida de AWS, ¿quién es responsable de la capa de virtualización que permite ejecutar instancias EC2?",
      opciones: [
        "El cliente, ya que decide el tipo de instancia y el sistema operativo",
        "El cliente, porque configura la red y los grupos de seguridad",
        "AWS, ya que gestiona el hipervisor y la infraestructura de virtualización",
        "Ambos, de forma compartida y configurable"
      ],
      respuestaCorrecta: 2,
      explicacion: "AWS gestiona completamente el hipervisor y toda la infraestructura de virtualización subyacente, incluyendo hardware físico, red de datacenter, y capa de virtualización. El cliente no tiene acceso ni control sobre estos componentes. Esta capa es exclusivamente responsabilidad de AWS."
    },
    {
      id: 10079,
      pregunta: "¿Qué es un usuario de IAM en AWS?",
      opciones: [
        "Un recurso que define permisos sobre otros servicios",
        "Una persona o aplicación que puede autenticarse en una cuenta de AWS",
        "Un conjunto de permisos reutilizables",
        "Un mecanismo para conectar cuentas entre regiones"
      ],
      respuestaCorrecta: 1,
      explicacion: "Un usuario IAM representa una identidad individual (persona o aplicación) con credenciales únicas (contraseña y/o access keys) para autenticarse y acceder a recursos AWS según permisos asignados mediante políticas. Los usuarios IAM son fundamentales para el control de acceso granular."
    },
    {
      id: 10080,
      pregunta: "¿Qué es una política de IAM y en qué formato están escritas normalmente?",
      opciones: [
        "Un conjunto de reglas de red escritas en YAML",
        "Un usuario especial con permisos administrativos",
        "Un documento que define permisos sobre recursos y que está escrito en formato JSON",
        "Un rol que se asigna automáticamente a los servicios de AWS"
      ],
      respuestaCorrecta: 2,
      explicacion: "Las políticas IAM son documentos JSON que especifican permisos mediante declaraciones con Effect (Allow/Deny), Action (operaciones permitidas), Resource (recursos afectados) y opcionalmente Condition. Pueden ser gestionadas por AWS, inline o customer-managed."
    },
    {
      id: 10081,
      pregunta: "Una empresa quiere que varias aplicaciones en EC2 accedan a Amazon S3 sin usar usuarios ni contraseñas. ¿Cuál es la opción MÁS adecuada en IAM?",
      opciones: [
        "Crear un usuario de IAM y compartir sus credenciales",
        "Asignar una política directamente al bucket de S3",
        "Utilizar un rol de IAM asociado a la instancia EC2",
        "Añadir los permisos al usuario root"
      ],
      respuestaCorrecta: 2,
      explicacion: "Los roles IAM permiten que servicios AWS (como EC2) asuman permisos temporalmente sin credenciales hardcodeadas, siguiendo el principio de seguridad de no almacenar claves en código. La instancia obtiene credenciales temporales automáticamente. Los roles son la práctica recomendada."
    },
    {
      id: 10082,
      pregunta: "Según el modelo de responsabilidad compartida de AWS, ¿quién es el responsable de gestionar la seguridad de una aplicación y de los datos que utiliza?",
      opciones: [
        "AWS, ya que la aplicación se ejecuta en su infraestructura",
        "AWS, siempre que se utilicen servicios en la nube",
        "Ambos, pero solo cuando se usan servicios serverless",
        "El cliente, ya que es responsable de la seguridad en la nube (aplicaciones y datos)"
      ],
      respuestaCorrecta: 3,
      explicacion: "El modelo establece que AWS es responsable de la seguridad DE la nube (infraestructura física), mientras que el cliente es responsable de la seguridad EN la nube: configuración de aplicaciones, datos, cifrado, autenticación, firewalls, actualizaciones. Esta responsabilidad aplica a todos los modelos de servicio."
    },
    {
      id: 10083,
      pregunta: "En una cuenta de AWS, un usuario pertenece al grupo EC2-Support, que tiene una política de solo lectura sobre EC2. ¿Qué acciones podrá realizar este usuario?",
      opciones: [
        "Iniciar y detener instancias EC2",
        "Ver información de las instancias EC2, pero no modificarlas",
        "Administrar usuarios y grupos de IAM",
        "Administrar usuarios y grupos de IAM"
      ],
      respuestaCorrecta: 1,
      explicacion: "Las políticas de solo lectura (ReadOnly) permiten operaciones de consulta (Describe, List, Get) pero prohíben modificaciones (Create, Delete, Modify, Start, Stop). El usuario heredará los permisos del grupo que solo permite visualizar información. Este diseño sigue el principio de mínimo privilegio."
    },
    {
      id: 10084,
      pregunta: "Un usuario pertenece simultáneamente a los grupos EC2-Admin y S3-Support. Según las políticas mostradas en el laboratorio, ¿qué acciones podrá realizar este usuario?",
      opciones: [
        "Ver información de EC2 y S3, sin realizar cambios",
        "Podrá iniciar y detener instancias EC2 y leer objetos en cualquier bucket S3",
        "Podrá administrar completamente EC2, S3 e IAM",
        "Ninguna de las anteriores"
      ],
      respuestaCorrecta: 0,
      explicacion: "Los permisos IAM son aditivos: el usuario hereda todos los permisos de ambos grupos combinados. Si EC2-Admin tiene ReadOnly sobre EC2 y S3-Support tiene ReadOnly sobre S3, el usuario solo podrá consultar información sin modificar recursos. Las políticas Deny tienen prioridad sobre Allow."
    },
    {
      id: 10085,
      pregunta: "Dada una dirección IPv4 como 192.0.2.0, ¿cuál de las siguientes afirmaciones es CORRECTA?",
      opciones: [
        "Cada número decimal de la dirección IPv4 se representa usando 4 bits",
        "Cada uno de los cuatro bloques de la dirección IPv4 se representa con 8 bits",
        "La dirección IPv4 completa se representa usando 16 bits",
        "El valor decimal máximo que puede tomar uno de los bloques es 512"
      ],
      respuestaCorrecta: 1,
      explicacion: "IPv4 utiliza 32 bits totales divididos en 4 octetos de 8 bits cada uno, separados por puntos. Cada octeto representa valores de 0 a 255 (2^8 = 256 valores). Por ejemplo, 192.0.2.0 = 11000000.00000000.00000010.00000000 en binario."
    },
    {
      id: 10086,
      pregunta: "Observando el siguiente diagrama de una cuenta AWS con usuarios, grupos y políticas IAM, ¿qué representa correctamente la estructura mostrada?",
      opciones: [
        "Los usuarios heredan automáticamente todos los permisos de todos los grupos",
        "Cada grupo tiene políticas específicas que otorgan permisos diferentes a sus miembros",
        "Las políticas se asignan directamente a los usuarios sin necesidad de grupos",
        "Todos los usuarios tienen los mismos permisos independientemente del grupo"
      ],
      respuestaCorrecta: 1,
      explicacion: "El diagrama muestra la estructura jerárquica de IAM donde usuarios pertenecen a grupos específicos, y cada grupo tiene políticas asociadas que definen permisos concretos. Los usuarios solo heredan permisos de sus grupos, no de todos los grupos de la cuenta.",
      recurso: {
        tipo: "imagen",
        contenido: "/images/mpo2/examen1/pregunta26.png",
        altText: "Diagrama de estructura IAM mostrando usuarios (user-1, user-2, user-3), grupos (EC2-Support, EC2-Admin, S3-Support) y sus políticas asociadas (EC2:ReadOnly, EC2:FullAccess, S3:ReadOnly)"
      }
    }
  ]
};

export default moduloExamenUno;