const moduloExamenDos = {
	id: 1006,
	asignaturaId: 10,
	nombre: "Preguntas de Examen 2",
	titulo: "Examen 2: Redes, VPC y servicios clave de AWS",
	descripcion: "Redes en AWS, VPC, direccionamiento, conectividad, responsabilidad compartida y fundamentos de servicios gestionados.",
	esExamen: true,
	preguntas: [
		{
			id: 10087,
			pregunta: "¿Dónde es mejor colocar una base de datos en una VPC?",
			opciones: [
				"En una subred privada",
				"En la subred pública con security groups",
				"Da igual el tipo de subred si está bien filtrada",
				"En una subred pública con ACL"
			],
			respuestaCorrecta: 0,
			explicacion: "Las bases de datos deben desplegarse en subredes privadas para evitar exposición directa a internet. Se accede desde recursos internos controlados, usando security groups y NACLs como capas adicionales de protección."
		},
		{
			id: 10088,
			pregunta: "¿Qué pasa si eliminas la ruta 0.0.0.0/0 de la tabla de enrutamiento asociada a una subred pública?",
			opciones: [
				"Pierde acceso a Internet",
				"Cambia de AZ",
				"La instancia pierde su IP privada",
				"Se apaga la instancia"
			],
			respuestaCorrecta: 0,
			explicacion: "La ruta 0.0.0.0/0 envía el tráfico hacia el Internet Gateway. Si se elimina, las instancias conservan su red interna pero pierden conectividad saliente hacia internet."
		},
		{
			id: 10089,
			pregunta: "¿Qué afirmación describe mejor la relación entre Región y Availability Zone?",
			opciones: [
				"Una región es una AZ con más recursos",
				"Una AZ puede pertenecer a varias regiones",
				"Varias regiones forman una sola AZ",
				"Una región contiene varias AZ independientes"
			],
			respuestaCorrecta: 3,
			explicacion: "Cada región de AWS agrupa varias Availability Zones aisladas físicamente pero interconectadas con baja latencia, lo que permite alta disponibilidad y tolerancia a fallos."
		},
		{
			id: 10090,
			pregunta: "¿Qué ocurre con la IP pública al parar una instancia?",
			opciones: [
				"Cambia solo el DNS sin cambiar la IP",
				"Se convierte en una IP privada",
				"La IP pública puede cambiar",
				"Se mantiene asociada a la instancia"
			],
			respuestaCorrecta: 2,
			explicacion: "Las IP públicas dinámicas se liberan al detener la instancia y suelen reasignarse con otro valor al arrancar. Solo una Elastic IP permanece fija."
		},
		{
			id: 10091,
			pregunta: "¿Qué ocurre con la IP pública al parar una instancia si usa una IP elástica?",
			opciones: [
				"La IP pública puede cambiar",
				"Se mantiene asociada a la instancia",
				"Se convierte en una IP privada",
				"Cambia solo el DNS sin cambiar la IP"
			],
			respuestaCorrecta: 1,
			explicacion: "Las Elastic IP son públicas y estáticas. Permanecen asociadas al recurso aunque se detenga, garantizando una dirección fija al reiniciarlo."
		},
		{
			id: 10092,
			pregunta: "¿Qué mejora principalmente un despliegue en varias Availability Zones?",
			opciones: [
				"El coste de la infraestructura",
				"La velocidad de acceso de los usuarios",
				"La tolerancia a fallos del sistema",
				"El tiempo de respuesta de la aplicación"
			],
			respuestaCorrecta: 2,
			explicacion: "Distribuir la carga en múltiples AZ incrementa la resiliencia: si una zona falla, las otras mantienen el servicio operativo."
		},
		{
			id: 10093,
			pregunta: "¿Qué ocurre al hacer público un objeto en S3?",
			opciones: [
				"Se desactiva el cifrado",
				"Cambia de región",
				"Se accede por URL",
				"Todo el bucket es público"
			],
			respuestaCorrecta: 2,
			explicacion: "Al marcar un objeto como público se puede acceder mediante su URL sin autenticación. Solo ese objeto queda expuesto; el resto del bucket puede permanecer privado y cifrado."
		},
		{
			id: 10094,
			pregunta: "¿Cuál es una ventaja real de la nube?",
			opciones: [
				"Escala bajo demanda",
				"No requiere administración técnica",
				"Elimina la necesidad de planificar capacidad",
				"Es más barata"
			],
			respuestaCorrecta: 0,
			explicacion: "La elasticidad permite ajustar recursos a la demanda y pagar solo por uso. Aun así, la nube sigue requiriendo gestión técnica y la rentabilidad depende del patrón de consumo."
		},
		{
			id: 10095,
			pregunta: "¿Qué conjunto de elementos es imprescindible para lanzar una instancia EC2 funcional?",
			opciones: [
				"Región y base de datos",
				"AMI, tipo de instancia y red",
				"Tipo de instancia, virtualización y almacenamiento",
				"Tipo de instancia y bucket S3"
			],
			respuestaCorrecta: 1,
			explicacion: "Para crear una instancia operativa se necesita una AMI (SO), elegir el tipo de instancia y situarla en una red/VPC. El almacenamiento viene definido con la AMI o se añade automáticamente."
		},
		{
			id: 10096,
			pregunta: "¿Qué ventaja clave aporta una CDN?",
			opciones: [
				"Más permisos",
				"Más almacenamiento",
				"Menor latencia al usuario",
				"Más bases de datos"
			],
			respuestaCorrecta: 2,
			explicacion: "Una CDN distribuye contenido en nodos perimetrales cercanos al usuario, reduciendo la latencia al servir los objetos desde ubicaciones geográficas próximas."
		},
		{
			id: 10097,
			pregunta: "¿Cuál de las siguientes afirmaciones sobre EC2 es VERDADERA?",
			opciones: [
				"Las instancias EC2 se comparten entre varios clientes",
				"EC2 elimina la necesidad de administrar el sistema operativo",
				"Las instancias EC2 siempre tienen IP pública",
				"EC2 permite ejecutar tu propio sistema operativo en la nube"
			],
			respuestaCorrecta: 3,
			explicacion: "EC2 proporciona máquinas virtuales dedicadas al cliente donde se puede instalar el sistema operativo elegido con control total. La administración del SO sigue siendo responsabilidad del usuario."
		},
		{
			id: 10098,
			pregunta: "¿Qué criterio tiene más sentido usar para repartir tráfico global mediante DNS?",
			opciones: [
				"El coste de la región",
				"La ubicación del usuario",
				"El tamaño de la instancia",
				"La hora del servidor"
			],
			respuestaCorrecta: 1,
			explicacion: "El enrutamiento geográfico dirige al usuario al endpoint más cercano, reduciendo la latencia y mejorando la experiencia global."
		},
		{
			id: 10099,
			pregunta: "¿Qué ocurre si una regla de entrada de un Security Group bloquea un puerto necesario?",
			opciones: [
				"La regla se aplica solo al tráfico saliente",
				"El tráfico se redirige a otro puerto",
				"El tráfico se permite si la instancia inició la conexión",
				"La conexión se rechaza"
			],
			respuestaCorrecta: 3,
			explicacion: "Los security groups son listas permisivas: lo no permitido se bloquea. Si falta la regla para un puerto entrante, las conexiones a ese puerto se rechazan."
		},
		{
			id: 10100,
			pregunta: "¿Qué responsabilidad NO asume AWS en el modelo de responsabilidad compartida?",
			opciones: [
				"El mantenimiento del hardware subyacente",
				"La seguridad física de los centros de datos",
				"La configuración del sistema operativo",
				"La infraestructura global de red"
			],
			respuestaCorrecta: 2,
			explicacion: "AWS se ocupa de la seguridad de la nube (hardware, red, datacenters). El cliente gestiona la seguridad en la nube, incluyendo la configuración y parches del sistema operativo."
		},
		{
			id: 10101,
			pregunta: "¿Qué implica que un servicio como RDS sea administrado?",
			opciones: [
				"El usuario no accede nunca a la base de datos",
				"El servicio no necesita configuración",
				"AWS se encarga del sistema y su mantenimiento",
				"El usuario no define el motor de base de datos"
			],
			respuestaCorrecta: 2,
			explicacion: "RDS gestiona tareas operativas como parches del sistema, backups y actualizaciones del motor. El cliente sigue eligiendo motor, tamaño y parámetros, y accede mediante endpoints estándar."
		}
	]
};

export default moduloExamenDos;
