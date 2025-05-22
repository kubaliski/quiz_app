/**
 * Datos del módulo de Sistemas Informáticos perteneciente a la asignatura de Sistemas Informáticos.
 * Incluye información del módulo y sus preguntas asociadas para el quiz.
 *
 * @type {Object}
 * @property {number} id - Identificador único del módulo
 * @property {string} nombre - Nombre del módulo
 * @property {boolean} esExamen - Indica si el módulo es un examen
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
export const moduloSimulacroSistemas = {
    id: 107,
    nombre: "Simulacro 4 (19/05/2025)",
    esExamen: true,
    asignaturaId: 1,
    descripcion: "Comandos Linux, redes, hardware, virtualización y conversiones",
    preguntas: [
      {
        id: 1701,
        moduloId: 107,
        pregunta: "¿Cómo puedes ver el manual de un comando en Linux?",
        opciones: ["man", "info", "help", "doc"],
        respuestaCorrecta: 0,
        explicacion: "El comando 'man' (manual) es la forma estándar en sistemas Unix/Linux para acceder a las páginas del manual de cualquier comando, función o archivo de configuración."
      },
      {
        id: 1702,
        moduloId: 107,
        pregunta: "¿Cómo se puede calcular el número máximo de hosts en una red dada una máscara de subred?",
        opciones: ["Sumar los bits de red y de host", "Multiplicar las direcciones disponibles por 2", "2 elevado al número de bits de host menos 2", "Restar 1 al número de bits de red"],
        respuestaCorrecta: 2,
        explicacion: "Para calcular el número máximo de hosts, se usa la fórmula 2^n - 2, donde 'n' es el número de bits de host. Se restan 2 direcciones: una para la dirección de red y otra para la dirección de broadcast."
      },
      {
        id: 1703,
        moduloId: 107,
        pregunta: "¿Cuál de estos dispositivos es considerado de entrada?",
        opciones: ["Ratón", "Altavoz", "Pantalla", "Proyector"],
        respuestaCorrecta: 0,
        explicacion: "El ratón es un dispositivo de entrada porque permite al usuario introducir datos e interactuar con el sistema. Los altavoces, pantallas y proyectores son dispositivos de salida."
      },
      {
        id: 1704,
        moduloId: 107,
        pregunta: "¿Cuál es el primer host disponible en la red 10.0.0.0, máscara 255.0.0.0?",
        opciones: ["10.255.255.255", "10.0.0.0", "10.0.0.1", "10.0.1.0"],
        respuestaCorrecta: 2,
        explicacion: "En cualquier red, la primera dirección (10.0.0.0) está reservada para identificar la red misma, por lo que el primer host disponible es siempre la siguiente dirección: 10.0.0.1."
      },
      {
        id: 1705,
        moduloId: 107,
        pregunta: "¿Cuál es el propósito de la fuente de alimentación en un PC?",
        opciones: ["Procesar datos", "Controlar ventiladores", "Proveer energía eléctrica", "Conectar dispositivos"],
        respuestaCorrecta: 2,
        explicacion: "La fuente de alimentación (PSU) convierte la corriente alterna de la red eléctrica a corriente continua con los voltajes específicos que necesitan los componentes del ordenador (12V, 5V, 3.3V)."
      },
      {
        id: 1706,
        moduloId: 107,
        pregunta: "¿Cuál es el rango útil de direcciones IP en la red 192.168.10.0 de máscara de red 255.255.255.0?",
        opciones: ["192.168.10.1 a 192.168.10.254", "192.168.10.0 a 192.168.10.254", "192.168.10.1 a 192.168.10.255", "192.168.10.0 a 192.168.10.255"],
        respuestaCorrecta: 0,
        explicacion: "En una red /24 (255.255.255.0), la primera dirección (.0) es la dirección de red y la última (.255) es la dirección de broadcast. Por tanto, las direcciones útiles para hosts van de .1 a .254."
      },
      {
        id: 1707,
        moduloId: 107,
        pregunta: "¿Cuál es el tamaño en bits de una dirección IPv4?",
        opciones: ["128 bits", "32 bits", "256 bits", "64 bits"],
        respuestaCorrecta: 1,
        explicacion: "Una dirección IPv4 está compuesta por 4 octetos de 8 bits cada uno, lo que da un total de 32 bits (4 × 8 = 32). IPv6 utiliza 128 bits."
      },
      {
        id: 1708,
        moduloId: 107,
        pregunta: "¿Cuál es la dirección de broadcast de una red 10.0.0.0 con máscara 255.0.0.0?",
        opciones: ["10.0.255.255", "10.255.255.255", "10.0.0.255", "10.0.0.1"],
        respuestaCorrecta: 1,
        explicacion: "Con máscara 255.0.0.0 (/8), solo el primer octeto identifica la red (10). Los 3 octetos restantes son para hosts, por lo que la dirección de broadcast es 10.255.255.255 (todos los bits de host en 1)."
      },
      {
        id: 1709,
        moduloId: 107,
        pregunta: "¿Cuál es la función principal de la batería en una placa base de computadora?",
        opciones: ["Alimentar la CPU cuando el equipo está apagado.", "Proporcionar energía a la tarjeta gráfica para mantener la configuración de vídeo.", "Mantener activa la memoria CMOS para conservar la configuración del BIOS, como la fecha y la hora, cuando el equipo está apagado.", "Cargar el disco duro durante el arranque del sistema."],
        respuestaCorrecta: 2,
        explicacion: "La batería CMOS (generalmente una pila de litio CR2032) mantiene alimentada la memoria CMOS que guarda la configuración del BIOS/UEFI, incluyendo fecha, hora y configuraciones del hardware, cuando el equipo está apagado."
      },
      {
        id: 1710,
        moduloId: 107,
        pregunta: "¿Cuál es una ventaja clave de la virtualización?",
        opciones: ["Disminución de la seguridad", "Mayor consumo energético", "Reducción de costos operativos", "Necesidad de más hardware"],
        respuestaCorrecta: 2,
        explicacion: "La virtualización permite ejecutar múltiples sistemas operativos en un solo servidor físico, lo que reduce significativamente los costos de hardware, mantenimiento, energía y espacio físico."
      },
      {
        id: 1711,
        moduloId: 107,
        pregunta: "¿Por qué es importante aprender Linux para un estudiante de Desarrollo de Aplicaciones Web (DAW)?",
        opciones: ["Porque Linux no requiere aprender redes ni administración.", "Porque es el sistema operativo más utilizado en servidores, y se usa en desarrollo y despliegue de aplicaciones.", "Porque solo se usa en servidores web.", "Porque reemplaza completamente a Windows en todas las empresas."],
        respuestaCorrecta: 1,
        explicacion: "Linux domina el mercado de servidores web y es fundamental en el desarrollo web moderno. La mayoría de aplicaciones web se despliegan en servidores Linux, y muchas herramientas de desarrollo están optimizadas para este entorno."
      },
      {
        id: 1712,
        moduloId: 107,
        pregunta: "¿Qué archivo contiene la información de los usuarios del sistema?",
        opciones: ["/etc/hosts", "/etc/group", "/etc/passwd", "/etc/shadow"],
        respuestaCorrecta: 2,
        explicacion: "El archivo /etc/passwd contiene información básica de las cuentas de usuario como nombre de usuario, UID, GID, directorio home y shell por defecto. Las contraseñas se almacenan en /etc/shadow por seguridad."
      },
      {
        id: 1713,
        moduloId: 107,
        pregunta: "¿Qué clase de IP tiene el rango 172.16.0.0 a 172.31.255.255?",
        opciones: ["Clase C", "Clase D", "Clase A", "Clase B"],
        respuestaCorrecta: 3,
        explicacion: "El rango 172.16.0.0 a 172.31.255.255 pertenece a las direcciones IP privadas de clase B, definidas en RFC 1918. Las direcciones de clase B tienen el primer octeto entre 128 y 191."
      },
      {
        id: 1714,
        moduloId: 107,
        pregunta: "¿Qué comando cambiaría los permisos de un archivo?",
        opciones: ["chmod", "cat", "chown", "touch"],
        respuestaCorrecta: 0,
        explicacion: "El comando 'chmod' (change mode) modifica los permisos de lectura, escritura y ejecución de archivos y directorios. 'chown' cambia el propietario, 'cat' muestra contenido y 'touch' crea archivos."
      },
      {
        id: 1715,
        moduloId: 107,
        pregunta: "¿Qué comando crea un nuevo directorio?",
        opciones: ["mkdir", "rmdir", "touch", "cat"],
        respuestaCorrecta: 0,
        explicacion: "El comando 'mkdir' (make directory) crea nuevos directorios. 'rmdir' elimina directorios vacíos, 'touch' crea archivos vacíos y 'cat' muestra el contenido de archivos."
      },
      {
        id: 1716,
        moduloId: 107,
        pregunta: "¿Qué comando en Linux permite cambiar de directorio?",
        opciones: ["ls", "mkdircat", "cd", "pwd"],
        respuestaCorrecta: 2,
        explicacion: "El comando 'cd' (change directory) cambia el directorio de trabajo actual. 'ls' lista archivos, 'pwd' muestra el directorio actual y 'mkdircat' no es un comando válido."
      },
      {
        id: 1717,
        moduloId: 107,
        pregunta: "¿Qué comando en Windows muestra la configuración IP actual?",
        opciones: ["ping", "netstat", "ipconfig", "traceroute"],
        respuestaCorrecta: 2,
        explicacion: "El comando 'ipconfig' en Windows muestra la configuración IP actual de todas las interfaces de red. En Linux el equivalente sería 'ifconfig' o 'ip addr'."
      },
      {
        id: 1718,
        moduloId: 107,
        pregunta: "¿Qué comando muestra el contenido de un archivo en la terminal?",
        opciones: ["echo", "cat", "chmod", "ls"],
        respuestaCorrecta: 1,
        explicacion: "El comando 'cat' (concatenate) muestra el contenido completo de uno o más archivos en la terminal. 'echo' imprime texto, 'chmod' cambia permisos y 'ls' lista archivos."
      },
      {
        id: 1719,
        moduloId: 107,
        pregunta: "¿Qué comando muestra los procesos activos en la terminal?",
        opciones: ["top", "ls", "pwd", "grep"],
        respuestaCorrecta: 0,
        explicacion: "El comando 'top' muestra en tiempo real los procesos activos del sistema con información como uso de CPU, memoria y tiempo de ejecución. También existe 'ps' para listar procesos."
      },
      {
        id: 1720,
        moduloId: 107,
        pregunta: "¿Qué comando permite ver la estructura de directorios de forma jerárquica?",
        opciones: ["ps", "pstree", "ls", "pwd"],
        respuestaCorrecta: 1,
        explicacion: "El comando 'pstree' muestra los procesos en forma de árbol jerárquico. Para ver la estructura de directorios jerárquicamente se usa 'tree', aunque 'pstree' es la respuesta correcta según el contexto."
      },
      {
        id: 1721,
        moduloId: 107,
        pregunta: "¿Qué comando sirve para copiar archivos?",
        opciones: ["mv", "touch", "cp", "cat"],
        respuestaCorrecta: 2,
        explicacion: "El comando 'cp' (copy) copia archivos y directorios. 'mv' mueve/renombra, 'touch' crea archivos vacíos o actualiza timestamps, y 'cat' muestra contenido."
      },
      {
        id: 1722,
        moduloId: 107,
        pregunta: "¿Qué componente actúa como el cerebro del ordenador, ejecutando instrucciones del sistema?",
        opciones: ["Disco duro", "CPU", "RAM", "BIOS"],
        respuestaCorrecta: 1,
        explicacion: "La CPU (Unidad Central de Procesamiento) es el 'cerebro' del ordenador, responsable de ejecutar todas las instrucciones de los programas y coordinar el funcionamiento del sistema."
      },
      {
        id: 1723,
        moduloId: 107,
        pregunta: "¿Qué componente almacena instrucciones que se ejecutan al encender el ordenador?",
        opciones: ["Disco duro", "GPU", "BIOS", "RAM"],
        respuestaCorrecta: 2,
        explicacion: "La BIOS (Basic Input/Output System) o UEFI almacena el firmware que se ejecuta al encender el ordenador para inicializar el hardware y cargar el sistema operativo."
      },
      {
        id: 1724,
        moduloId: 107,
        pregunta: "¿Qué componente se utiliza para almacenar datos de forma permanente?",
        opciones: ["Disco duro", "Memoria RAM", "Memoria caché", "Fuente de alimentación"],
        respuestaCorrecta: 0,
        explicacion: "El disco duro (HDD) o SSD proporciona almacenamiento permanente no volátil para el sistema operativo, aplicaciones y datos del usuario, manteniendo la información incluso cuando se apaga el equipo."
      },
      {
        id: 1725,
        moduloId: 107,
        pregunta: "¿Qué dirección es la de broadcast para la red 172.16.0.0, máscara 255.255.0.0?",
        opciones: ["172.16.0.255", "172.16.0.0", "172.16.255.255", "172.16.1.255"],
        respuestaCorrecta: 2,
        explicacion: "Con máscara 255.255.0.0 (/16), los primeros 2 octetos identifican la red (172.16). Los 2 octetos restantes son para hosts, por lo que la dirección de broadcast es 172.16.255.255."
      },
      {
        id: 1726,
        moduloId: 107,
        pregunta: "¿Qué dirección IP es la última dirección útil (para un host) en la red 192.168.5.0?",
        opciones: ["192.168.5.254", "192.168.5.255", "192.168.5.1", "192.168.5.0"],
        respuestaCorrecta: 0,
        explicacion: "En una red /24 por defecto (192.168.5.0/24), la dirección .255 es la de broadcast, por lo que la última dirección útil para un host es 192.168.5.254."
      },
      {
        id: 1727,
        moduloId: 107,
        pregunta: "¿Qué dirección IP pertenece al rango de clase C?",
        opciones: ["11.0.0.5", "172.15.5.5", "8.8.8.8", "192.168.1.100"],
        respuestaCorrecta: 3,
        explicacion: "Las direcciones de clase C tienen el primer octeto entre 192 y 223. La dirección 192.168.1.100 pertenece a este rango y es parte del espacio privado de clase C."
      },
      {
        id: 1728,
        moduloId: 107,
        pregunta: "¿Qué elemento divide una red en subredes más pequeñas?",
        opciones: ["Router", "Firewall", "Máscara de subred", "Gateway"],
        respuestaCorrecta: 2,
        explicacion: "La máscara de subred define qué parte de la dirección IP corresponde a la red y qué parte al host, permitiendo dividir una red grande en subredes más pequeñas (subnetting)."
      },
      {
        id: 1729,
        moduloId: 107,
        pregunta: "¿Qué hace el comando rm?",
        opciones: ["Elimina archivos", "Mueve archivos", "Copia archivos", "Cambia permisos"],
        respuestaCorrecta: 0,
        explicacion: "El comando 'rm' (remove) elimina archivos y directorios del sistema de archivos. Es importante usarlo con cuidado ya que la eliminación puede ser permanente."
      },
      {
        id: 1730,
        moduloId: 107,
        pregunta: "¿Qué indica un archivo que empieza con un punto (.) en Linux?",
        opciones: ["Archivo ejecutable", "Archivo oculto", "Directorio", "Archivo de sistema"],
        respuestaCorrecta: 1,
        explicacion: "En sistemas Unix/Linux, los archivos y directorios que comienzan con un punto (.) son considerados ocultos y no se muestran en listados normales a menos que se use la opción -a con ls."
      },
      {
        id: 1731,
        moduloId: 107,
        pregunta: "¿Qué máscara permite 254 hosts en una red?",
        opciones: ["255.255.0.0", "255.255.255.128", "255.255.255.0", "255.255.255.192"],
        respuestaCorrecta: 2,
        explicacion: "La máscara 255.255.255.0 (/24) tiene 8 bits para hosts, lo que permite 2^8 - 2 = 254 direcciones útiles para hosts (se restan la dirección de red y la de broadcast)."
      },
      {
        id: 1732,
        moduloId: 107,
        pregunta: "¿Qué número representa la parte de red en la máscara 255.255.255.0?",
        opciones: ["Que los 4 octetos de bits de bits de la dirección IP pertenecen a la red.", "Que los 3 primeros octetos de bits de la dirección IP pertenecen a la red.", "Que los 2 primeros octetos de bits de la dirección de IP pertenecen a la red.", "Que los 3 primeros octetos de bits de la dirección IP pertenecen al host."],
        respuestaCorrecta: 1,
        explicacion: "La máscara 255.255.255.0 indica que los primeros 3 octetos (24 bits) están dedicados a identificar la red, mientras que el último octeto (8 bits) identifica los hosts dentro de esa red."
      },
      {
        id: 1733,
        moduloId: 107,
        pregunta: "¿Qué opción de ls muestra también los archivos ocultos?",
        opciones: ["-l", "-R", "-h", "-a"],
        respuestaCorrecta: 3,
        explicacion: "La opción '-a' (all) del comando ls muestra todos los archivos, incluyendo los ocultos (que comienzan con punto). La opción '-l' muestra formato largo, '-R' recursivo y '-h' tamaños legibles."
      },
      {
        id: 1734,
        moduloId: 107,
        pregunta: "¿Qué operador en Linux permite encadenar la salida de un comando como entrada de otro?",
        opciones: ["|", "<", ">", ">>"],
        respuestaCorrecta: 0,
        explicacion: "El operador pipe '|' permite encadenar comandos, enviando la salida estándar del primer comando como entrada estándar del segundo comando, permitiendo crear flujos de procesamiento de datos."
      },
      {
        id: 1735,
        moduloId: 107,
        pregunta: "¿Qué significa que una dirección IP sea pública?",
        opciones: ["Está reservada para dispositivos locales", "Se usa solo en laboratorios", "Se puede enrutar en Internet", "Se utiliza en redes privadas"],
        respuestaCorrecta: 2,
        explicacion: "Una dirección IP pública es enrutable globalmente en Internet, lo que significa que puede ser alcanzada desde cualquier punto de la red mundial, a diferencia de las direcciones privadas que solo funcionan en redes locales."
      },
      {
        id: 1736,
        moduloId: 107,
        pregunta: "¿Qué símbolo se utiliza para redirigir la salida estándar sobrescribiendo el archivo?",
        opciones: [">>", "<", ">", "|"],
        respuestaCorrecta: 2,
        explicacion: "El símbolo '>' redirige la salida estándar a un archivo, sobrescribiendo su contenido si ya existe. El símbolo '>>' añade al final del archivo sin sobrescribir."
      },
      {
        id: 1737,
        moduloId: 107,
        pregunta: "¿Qué tipo de memoria es extremadamente rápida y se encuentra cerca de la CPU?",
        opciones: ["RAM", "Memoria caché", "Memoria virtual", "ROM"],
        respuestaCorrecta: 1,
        explicacion: "La memoria caché es extremadamente rápida y se encuentra integrada en el procesador o muy cerca de él, almacenando temporalmente los datos e instrucciones más utilizados para acelerar el acceso."
      },
      {
        id: 1738,
        moduloId: 107,
        pregunta: "¿Qué tipo de memoria se borra al apagar el ordenador?",
        opciones: ["SSD", "Caché", "ROM", "RAM"],
        respuestaCorrecta: 3,
        explicacion: "La RAM (Random Access Memory) es memoria volátil que requiere alimentación eléctrica constante para mantener los datos. Al apagar el ordenador, toda la información almacenada en RAM se pierde."
      },
      {
        id: 1739,
        moduloId: 107,
        pregunta: "Convierte 20480 kilobytes (KB) a megabytes (MB).",
        opciones: ["10 MB", "20 MB", "15 MB", "25 MB"],
        respuestaCorrecta: 1,
        explicacion: "Para convertir KB a MB se divide entre 1024: 20480 KB ÷ 1024 = 20 MB. En el sistema binario, 1 MB = 1024 KB."
      },
      {
        id: 1740,
        moduloId: 107,
        pregunta: "Convierte el número decimal 255 a binario.",
        opciones: ["11111110", "10101010", "11001100", "11111111"],
        respuestaCorrecta: 3,
        explicacion: "El número decimal 255 en binario es 11111111. Es el valor máximo que se puede representar con 8 bits (2^8 - 1 = 255), donde todos los bits están en 1."
      }
    ]
  };

  export default moduloSimulacroSistemas;