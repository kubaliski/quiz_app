const simulacroKahootNavidad = {
  id: 1009,
  asignaturaId: 10,
  nombre: "Simulacro Kahoot Navidad - Fundamentos de la Computación en la Nube",
  titulo: "Simulacro Kahoot Navidad: Fundamentos de la Computación en la Nube",
  descripcion:
    "Simulacro Kahoot de Navidad: redes en AWS, VPC, direccionamiento, conectividad, responsabilidad compartida y fundamentos de servicios gestionados.",
  esExamen: true,
  preguntas: [
    {
      id: 10171,
      pregunta: "¿Dónde es mejor colocar una base de datos en una VPC?",
      opciones: [
        "En una subred privada",
        "En la subred pública con security groups",
        "Da igual el tipo de subred si está bien filtrada",
        "En una subred pública con ACL",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Las bases de datos deben desplegarse en subredes privadas para evitar exposición directa a internet. La base de datos no debe ser accesible desde internet bajo ningún concepto: colocarla en una subred privada garantiza que no tiene ruta hacia el Internet Gateway, por lo que solo el servidor de aplicaciones puede conectarse a ella de forma interna. Ni las ACLs ni los Security Groups son sustitutos de este aislamiento de red.",
    },
    {
      id: 10172,
      pregunta:
        "¿Qué pasa si eliminas la ruta 0.0.0.0/0 de la tabla de enrutamiento asociada a una subred pública?",
      opciones: [
        "Pierde acceso a Internet",
        "Cambia de AZ",
        "La instancia pierde su IP privada",
        "Se apaga la instancia",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "La ruta 0.0.0.0/0 hacia el Internet Gateway es exactamente lo que convierte una subred en pública. Al eliminarla, la subred deja de tener salida a internet y las instancias pierden la conectividad externa, aunque conserven su IP privada y sigan encendidas. La instancia no cambia de AZ ni se apaga; simplemente queda incomunicada con el exterior, funcionando como una subred privada de facto.",
    },
    {
      id: 10173,
      pregunta:
        "¿Qué afirmación describe mejor la relación entre Región y Availability Zone?",
      opciones: [
        "Una región es una AZ con más recursos",
        "Una AZ puede pertenecer a varias regiones",
        "Varias regiones forman una sola AZ",
        "Una región contiene varias AZ independientes",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "Cada región de AWS agrupa varias Availability Zones aisladas físicamente pero interconectadas con baja latencia, lo que permite alta disponibilidad y tolerancia a fallos. Una región contiene entre 2 y 6 zonas de disponibilidad separadas físicamente con suministro eléctrico e infraestructura independientes.",
    },
    {
      id: 10174,
      pregunta: "¿Qué ocurre con la IP pública al parar una instancia?",
      opciones: [
        "Cambia solo el DNS sin cambiar la IP",
        "Se convierte en una IP privada",
        "La IP pública puede cambiar",
        "Se mantiene asociada a la instancia",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Las IPs públicas dinámicas de EC2 se liberan automáticamente al detener la instancia y AWS asigna una nueva diferente al volver a iniciarla. Esto puede romper configuraciones DNS o listas blancas que dependan de esa IP. Para mantener una dirección pública fija, la solución es usar una Elastic IP, que permanece reservada en la cuenta aunque la instancia esté parada.",
    },
    {
      id: 10175,
      pregunta:
        "¿Qué ocurre con la IP pública al parar una instancia si usa una IP elástica?",
      opciones: [
        "La IP pública puede cambiar",
        "Se mantiene asociada a la instancia",
        "Se convierte en una IP privada",
        "Cambia solo el DNS sin cambiar la IP",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Una Elastic IP es una dirección IPv4 pública estática que se reserva en la cuenta AWS y se asocia a una instancia de forma persistente. A diferencia de las IPs dinámicas, no se libera al detener la instancia: permanece asociada hasta que el usuario la desvincula manualmente. Esto la hace imprescindible en entornos donde se necesita una IP pública fija y predecible.",
    },
    {
      id: 10176,
      pregunta:
        "¿Qué mejora principalmente un despliegue en varias Availability Zones?",
      opciones: [
        "El coste de la infraestructura",
        "La velocidad de acceso de los usuarios",
        "La tolerancia a fallos del sistema",
        "El tiempo de respuesta de la aplicación",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Distribuir los recursos en varias AZs no reduce la latencia ni el coste (de hecho puede incrementarlo ligeramente), pero garantiza alta disponibilidad y tolerancia a fallos: si una zona experimenta un corte de suministro, un incendio u otro incidente, las instancias en las demás AZs siguen operativas. Es la base de arquitecturas resilientes en AWS.",
    },
    {
      id: 10177,
      pregunta: "¿Qué ocurre al hacer público un objeto en S3?",
      opciones: [
        "Se desactiva el cifrado",
        "Cambia de región",
        "Se accede por URL",
        "Todo el bucket es público",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Al hacer público un objeto concreto en S3, ese objeto obtiene una URL pública accesible desde internet. Este cambio afecta únicamente a ese objeto, no a todo el bucket. El cifrado en reposo no se desactiva por hacer un objeto público, y el objeto permanece en la misma región. La visibilidad pública a nivel de bucket requiere desactivar el 'Block Public Access' a nivel de cuenta o bucket.",
    },
    {
      id: 10178,
      pregunta: "¿Cuál es una ventaja real de la nube?",
      opciones: [
        "Escala bajo demanda",
        "No requiere administración técnica",
        "Elimina la necesidad de planificar capacidad",
        "Es más barata",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "La elasticidad (escalar bajo demanda) es una de las ventajas fundamentales y objetivas de la nube. La nube no es siempre más barata que on-premise (depende del caso de uso), sí requiere administración técnica (el modelo de responsabilidad compartida lo confirma) y, aunque reduce la planificación de capacidad a largo plazo, no la elimina completamente.",
    },
    {
      id: 10179,
      pregunta:
        "¿Qué conjunto de elementos es imprescindible para lanzar una instancia EC2 funcional?",
      opciones: [
        "Región y base de datos",
        "AMI, tipo de instancia y red",
        "Tipo de instancia, virtualización y almacenamiento",
        "Tipo de instancia y bucket S3",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Los elementos mínimos imprescindibles para lanzar una instancia EC2 son: la AMI (imagen con el sistema operativo y software base), el tipo de instancia (que determina CPU, RAM y red) y la configuración de red (VPC y subred donde se desplegará). Adicionalmente se necesitan el grupo de seguridad y el par de claves para administrarla.",
    },
    {
      id: 10180,
      pregunta: "¿Qué ventaja clave aporta una CDN?",
      opciones: [
        "Más permisos",
        "Más almacenamiento",
        "Menor latencia al usuario",
        "Más bases de datos",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Una CDN (Content Delivery Network) como Amazon CloudFront distribuye contenido en nodos perimetrales (edge locations) repartidos geográficamente por todo el mundo. Cuando un usuario solicita un recurso, la CDN lo sirve desde el nodo más cercano a su ubicación, reduciendo drásticamente la latencia percibida.",
    },
    {
      id: 10181,
      pregunta:
        "¿Cuál de las siguientes afirmaciones sobre EC2 es VERDADERA?",
      opciones: [
        "Las instancias EC2 se comparten entre varios clientes",
        "EC2 elimina la necesidad de administrar el sistema operativo",
        "Las instancias EC2 siempre tienen IP pública",
        "EC2 permite ejecutar tu propio sistema operativo en la nube",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "EC2 es un servicio IaaS que proporciona máquinas virtuales aisladas donde el cliente tiene control total sobre el sistema operativo: puede elegir la distribución de Linux, la versión de Windows Server, instalar software y configurar servicios. Las instancias son aisladas (no compartidas con otros clientes), no siempre tienen IP pública y el cliente es responsable de administrar el SO.",
    },
    {
      id: 10182,
      pregunta:
        "¿Qué criterio tiene más sentido usar para repartir tráfico global mediante DNS?",
      opciones: [
        "El coste de la región",
        "La ubicación del usuario",
        "El tamaño de la instancia",
        "La hora del servidor",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "El enrutamiento por geolocalización en Amazon Route 53 dirige cada petición DNS al recurso más cercano geográficamente al usuario que realiza la consulta. Esto minimiza la latencia y permite cumplir requisitos de soberanía de datos (por ejemplo, servir usuarios europeos desde la región europea). El coste, el tamaño de instancia o la hora del servidor no son criterios válidos para decisiones de enrutamiento DNS global.",
    },
    {
      id: 10183,
      pregunta:
        "¿Qué ocurre si una regla de entrada de un Security Group bloquea un puerto necesario?",
      opciones: [
        "La regla se aplica solo al tráfico saliente",
        "El tráfico se redirige a otro puerto",
        "El tráfico se permite si la instancia inició la conexión",
        "La conexión se rechaza",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "Los Security Groups son stateful y funcionan con listas blancas: solo permiten el tráfico que está explícitamente autorizado. Si no existe una regla de entrada que permita el puerto necesario, la conexión entrante se rechaza directamente, sin redirección ni reenvío. La característica stateful sí aplica en el sentido inverso: el tráfico de respuesta a una conexión iniciada por la instancia se permite automáticamente.",
    },
    {
      id: 10184,
      pregunta:
        "¿Qué responsabilidad NO asume AWS en el modelo de responsabilidad compartida?",
      opciones: [
        "La seguridad física de los centros de datos",
        "El mantenimiento del hardware subyacente",
        "La configuración del sistema operativo",
        "La infraestructura global de red",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "En el modelo de responsabilidad compartida, AWS gestiona la seguridad 'de' la nube: infraestructura física, hardware, red global y centros de datos. El cliente gestiona la seguridad 'en' la nube: configuración del SO, aplicaciones instaladas, datos almacenados, accesos IAM y cifrado. La configuración del sistema operativo es responsabilidad exclusiva del cliente en servicios como EC2.",
    },
    {
      id: 10185,
      pregunta: "¿Qué implica que un servicio como RDS sea administrado?",
      opciones: [
        "El usuario no accede nunca a la base de datos",
        "El servicio no necesita configuración",
        "AWS se encarga del sistema y su mantenimiento",
        "El usuario no define el motor de base de datos",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Un servicio gestionado (managed) como RDS significa que AWS asume la responsabilidad operativa de la infraestructura: instalación del motor, parches y actualizaciones automáticas, backups, failover Multi-AZ y monitorización del hardware. El cliente sigue eligiendo el motor (MySQL, PostgreSQL, etc.), accediendo a la base de datos y configurando parámetros, esquemas y usuarios.",
    },
  ],
};

export default simulacroKahootNavidad;