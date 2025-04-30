/**
 * Datos del módulo de Configuración, Usuarios y Optimización de MySQL perteneciente a la asignatura de Bases de Datos.
 * Incluye información del módulo y sus preguntas asociadas para el quiz.
 *
 * @type {Object}
 * @property {number} id - Identificador único del módulo
 * @property {string} nombre - Nombre del módulo
 * @property {boolean} esExamen - Indica si el módulo es un examen (true) o no (false)
 * @property {number} asignaturaId - ID de la asignatura a la que pertenece
 * @property {string} descripcion - Breve descripción del contenido del módulo
 * @property {Array<Object>} preguntas - Lista de preguntas para el quiz de este módulo
 * @property {number} preguntas[].id - Identificador único de la pregunta
 * @property {number} preguntas[].moduloId - ID del módulo al que pertenece la pregunta
 * @property {string} preguntas[].pregunta - Texto de la pregunta
 * @property {Array<string>} preguntas[].opciones - Lista de opciones de respuesta
 * @property {number} preguntas[].respuestaCorrecta - Índice (0-based) de la opción correcta
 * @property {string} preguntas[].explicacion - Explicación de la respuesta correcta
 */
export const moduloConfiguracionMySQL = {
    id: 202,
    nombre: "Configuración, Usuarios y Optimización",
    esExamen: false,
    asignaturaId: 2,
    descripcion: "Configuración del servidor MySQL, gestión de usuarios y permisos, y técnicas de optimización y mantenimiento de bases de datos MySQL.",
    preguntas: [
      // Sección de Configuración
      {
        id: 2201,
        moduloId: 202,
        pregunta: "¿Qué sección del archivo my.ini define las opciones del cliente de MySQL?",
        opciones: [
          "[server]",
          "[client]",
          "[mysqld]",
          "[mysql]"
        ],
        respuestaCorrecta: 1,
        explicacion: "La sección [client] en el archivo de configuración my.ini define las opciones que se aplican a todos los clientes MySQL. Esto incluye configuraciones como el puerto predeterminado, el socket, y opciones de conexión que usarán las herramientas cliente como mysql, mysqldump, etc."
      },
      {
        id: 2202,
        moduloId: 202,
        pregunta: "¿Qué opción en my.ini define el puerto en el que escucha el servidor?",
        opciones: [
          "server-port",
          "bind-address",
          "port",
          "basedir"
        ],
        respuestaCorrecta: 2,
        explicacion: "La opción 'port' en el archivo de configuración my.ini define el número de puerto TCP/IP en el que el servidor MySQL escuchará las conexiones entrantes. Por defecto, MySQL utiliza el puerto 3306 si no se especifica otro."
      },
      {
        id: 2203,
        moduloId: 202,
        pregunta: "¿Dónde suele estar el archivo my.ini en Windows si se instaló MySQL con el instalador oficial?",
        opciones: [
          "C:\\Program Files\\MySQL",
          "C:\\ProgramData\\MySQL",
          "C:\\MySQL",
          "C:\\AppData\\MySQL"
        ],
        respuestaCorrecta: 1,
        explicacion: "Cuando MySQL se instala con el instalador oficial en Windows, el archivo de configuración my.ini suele ubicarse en la carpeta C:\\ProgramData\\MySQL. Esta ubicación puede variar según la versión específica o las opciones de instalación, pero ProgramData es la ubicación estándar para archivos de configuración en Windows."
      },
      {
        id: 2204,
        moduloId: 202,
        pregunta: "¿Qué significa bind-address = 0.0.0.0?",
        opciones: [
          "El servidor está bloqueado.",
          "El servidor escucha solo conexiones SSL.",
          "El servidor solo escucha en localhost.",
          "El servidor escucha en cualquier IP."
        ],
        respuestaCorrecta: 3,
        explicacion: "Cuando se configura bind-address = 0.0.0.0, el servidor MySQL escuchará en todas las interfaces de red disponibles, lo que permite conexiones entrantes desde cualquier dirección IP. Esta configuración es útil para servidores que necesitan aceptar conexiones remotas, pero debe usarse con precaución junto con una adecuada seguridad de red y autenticación."
      },
      {
        id: 2205,
        moduloId: 202,
        pregunta: "¿Qué opción define el límite máximo de conexiones simultáneas?",
        opciones: [
          "table_open_cache",
          "max_connections",
          "thread_cache_size",
          "open_files_limit"
        ],
        respuestaCorrecta: 1,
        explicacion: "La opción max_connections establece el número máximo de conexiones simultáneas que el servidor MySQL permitirá. Si este límite se alcanza, nuevas conexiones serán rechazadas con un error. Es importante ajustar este valor según los recursos del servidor y la carga de trabajo esperada."
      },
      {
        id: 2206,
        moduloId: 202,
        pregunta: "¿Qué define lower_case_table_names=1 en Windows?",
        opciones: [
          "No se diferencian mayúsculas y minúsculas.",
          "Solo permite minúsculas en nombres de columnas.",
          "Tablas con nombres obligatoriamente en mayúsculas.",
          "Las consultas deben usar exactamente el mismo nombre."
        ],
        respuestaCorrecta: 0,
        explicacion: "La opción lower_case_table_names=1 hace que el servidor no diferencie entre mayúsculas y minúsculas en los nombres de tablas. En este modo, los nombres se almacenan en minúsculas y las comparaciones de nombres no son sensibles a mayúsculas/minúsculas. Es la configuración predeterminada en Windows para mantener la compatibilidad con sistemas de archivos que no distinguen mayúsculas/minúsculas."
      },
      {
        id: 2207,
        moduloId: 202,
        pregunta: "¿Qué opción impide insertar fechas inválidas como '0000-00-00'?",
        opciones: [
          "MAX_DATE_CHECK",
          "NO_ZERO_IN_DATE",
          "ONLY_FULL_GROUP_BY",
          "STRICT_MODE"
        ],
        respuestaCorrecta: 1,
        explicacion: "La opción NO_ZERO_IN_DATE es un modo SQL que impide insertar fechas con valores cero en el día o mes, como '2023-00-01' o '2023-01-00'. Esta opción ayuda a mantener la integridad de los datos asegurando que solo se almacenen fechas válidas. Se puede activar configurando sql_mode para incluir este valor."
      },

      // Sección de Usuarios y Privilegios
      {
        id: 2208,
        moduloId: 202,
        pregunta: "¿Qué comando permite ver todos los usuarios en MySQL?",
        opciones: [
          "SHOW DATABASES;",
          "SELECT * FROM users;",
          "SELECT user FROM mysql.user;",
          "SHOW USERS;"
        ],
        respuestaCorrecta: 2,
        explicacion: "Para ver todos los usuarios en MySQL, se debe ejecutar la consulta 'SELECT user FROM mysql.user;'. La tabla mysql.user es una tabla del sistema que contiene información sobre todos los usuarios definidos en el servidor MySQL, incluyendo sus nombres de usuario y hosts permitidos."
      },
      {
        id: 2209,
        moduloId: 202,
        pregunta: "¿Qué comando crea un usuario en MySQL?",
        opciones: [
          "GRANT USER 'nombre';",
          "NEW USER 'nombre';",
          "ADD USER 'nombre';",
          "CREATE USER 'nombre'@'localhost' IDENTIFIED BY 'contraseña';"
        ],
        respuestaCorrecta: 3,
        explicacion: "La sentencia CREATE USER crea una nueva cuenta de usuario en MySQL. El formato completo incluye el nombre de usuario, el host desde el que puede conectarse (como 'localhost') y el método de autenticación, que típicamente es una contraseña. Este comando solo crea el usuario pero no le otorga ningún privilegio."
      },
      {
        id: 2210,
        moduloId: 202,
        pregunta: "¿Qué comando otorga privilegios a un usuario?",
        opciones: [
          "ALLOW PRIVILEGES 'usuario';",
          "GRANT SELECT, INSERT ON basedatos.* TO 'usuario'@'localhost';",
          "PERMIT ALL TO 'usuario';",
          "ACCESS GRANT TO 'usuario';"
        ],
        respuestaCorrecta: 1,
        explicacion: "La sentencia GRANT se utiliza para otorgar privilegios específicos a un usuario. En este ejemplo, se conceden los privilegios SELECT e INSERT en todas las tablas (*) de la base de datos 'basedatos' al usuario 'usuario' cuando se conecta desde 'localhost'. Los privilegios pueden ser específicos (como SELECT, INSERT) o generales (como ALL PRIVILEGES)."
      },
      {
        id: 2211,
        moduloId: 202,
        pregunta: "¿Qué comando elimina un privilegio otorgado a un usuario?",
        opciones: [
          "DISABLE ACCESS 'usuario';",
          "REMOVE PRIVILEGE 'usuario';",
          "REVOKE INSERT ON basedatos.* FROM 'usuario'@'localhost';",
          "DENY SELECT ON basedatos.* TO 'usuario';"
        ],
        respuestaCorrecta: 2,
        explicacion: "La sentencia REVOKE elimina privilegios previamente otorgados a un usuario. En este caso, revoca el privilegio INSERT sobre todas las tablas de 'basedatos' al usuario 'usuario'@'localhost'. Es la operación inversa a GRANT y permite un control granular sobre los permisos de los usuarios."
      },
      {
        id: 2212,
        moduloId: 202,
        pregunta: "¿Qué comando muestra los privilegios actuales de un usuario?",
        opciones: [
          "DESCRIBE GRANTS 'usuario';",
          "SHOW PRIVILEGES;",
          "SELECT * FROM privileges;",
          "SHOW GRANTS FOR 'usuario'@'localhost';"
        ],
        respuestaCorrecta: 3,
        explicacion: "El comando SHOW GRANTS FOR muestra todos los privilegios que han sido otorgados a un usuario específico. Esta información es útil para auditar los permisos de seguridad y verificar que los usuarios tengan solo los privilegios necesarios para sus funciones."
      },

      // Sección de Optimización y Mantenimiento
      {
        id: 2213,
        moduloId: 202,
        pregunta: "¿Qué hace OPTIMIZE TABLE en MySQL?",
        opciones: [
          "Elimina los datos antiguos.",
          "Compacta y reorganiza los datos para ahorrar espacio.",
          "Cierra la tabla de inmediato.",
          "Analiza el rendimiento de la tabla."
        ],
        respuestaCorrecta: 1,
        explicacion: "El comando OPTIMIZE TABLE reorganiza físicamente los datos y los índices en una tabla para reducir el espacio de almacenamiento y mejorar la eficiencia de las operaciones de E/S. Es especialmente útil después de realizar muchas inserciones, actualizaciones o eliminaciones en una tabla, particularmente con motores de almacenamiento como MyISAM e InnoDB."
      },
      {
        id: 2214,
        moduloId: 202,
        pregunta: "¿Qué hace ANALYZE TABLE?",
        opciones: [
          "Cierra todas las conexiones abiertas.",
          "Copia la tabla a otro esquema.",
          "Actualiza las estadísticas de índices para optimizar el planificador de consultas.",
          "Borra registros duplicados."
        ],
        respuestaCorrecta: 2,
        explicacion: "El comando ANALYZE TABLE analiza y almacena la distribución de claves para una tabla. MySQL utiliza estas estadísticas para decidir el orden en que debe unir tablas cuando procesa consultas JOIN y para elegir qué índices utilizar. Esto ayuda al optimizador de consultas a generar planes de ejecución más eficientes."
      },
      {
        id: 2215,
        moduloId: 202,
        pregunta: "¿Qué archivo almacena los errores de MySQL?",
        opciones: [
          "slow_query_log_file",
          "general_log_file",
          "log-bin",
          "log-error"
        ],
        respuestaCorrecta: 3,
        explicacion: "La opción log-error especifica la ubicación del archivo donde MySQL registra los mensajes de error, advertencias y notas durante el arranque y la operación del servidor. Este archivo es crucial para diagnosticar problemas en el servidor MySQL y debe revisarse regularmente como parte del mantenimiento del sistema."
      }
    ]
  };

export default moduloConfiguracionMySQL;