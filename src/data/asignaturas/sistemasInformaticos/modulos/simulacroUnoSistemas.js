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
export const moduloSimulacroUnoSistemas = {
    id: 104,
    nombre: "Simulacro 1 (05/05/2025)",
    esExamen: true,
    asignaturaId: 1,
    descripcion: "Conceptos de redes, hardware y administración de sistemas",
    preguntas: [
      {
        id: 1401,
        moduloId: 104,
        pregunta: "¿A qué clase pertenece la IP 192.0.2.1?",
        opciones: ["C", "A", "B", "E"],
        respuestaCorrecta: 0,
        explicacion: "La dirección IP 192.0.2.1 pertenece a la clase C, ya que las direcciones de clase C comienzan con los bits 110 y tienen un rango de 192.0.0.0 a 223.255.255.255."
      },
      {
        id: 1402,
        moduloId: 104,
        pregunta: "¿Cuál de estas direcciones pertenece a una clase A?",
        opciones: ["224.0.0.1", "10.5.6.7", "172.20.30.40", "192.168.1.1"],
        respuestaCorrecta: 1,
        explicacion: "La dirección 10.5.6.7 pertenece a la clase A, ya que las direcciones de clase A tienen un rango de 1.0.0.0 a 126.255.255.255, y la red 10.0.0.0 es una de las reservadas para uso privado dentro de clase A."
      },
      {
        id: 1403,
        moduloId: 104,
        pregunta: "¿Cuál de las siguientes acciones se puede realizar desde la BIOS?",
        opciones: ["Abrir archivos de Word", "Configurar el orden de arranque de los discos", "Cambiar la resolución del monitor", "Instalar programas"],
        respuestaCorrecta: 1,
        explicacion: "La BIOS permite configurar hardware básico y opciones de arranque, como el orden de arranque de los dispositivos, pero no puede ejecutar aplicaciones como Word, cambiar resoluciones de pantalla o instalar programas."
      },
      {
        id: 1404,
        moduloId: 104,
        pregunta: "¿Cuál de los siguientes componentes es considerado un dispositivo de almacenamiento secundario?",
        opciones: ["RAM", "GPU", "SSD", "Procesador"],
        respuestaCorrecta: 2,
        explicacion: "El SSD (Solid State Drive) es un dispositivo de almacenamiento secundario o persistente, a diferencia de la RAM (memoria primaria volátil), la GPU (procesamiento gráfico) o el procesador (unidad de cálculo)."
      },
      {
        id: 1405,
        moduloId: 104,
        pregunta: "¿Cuál es el uso principal del comando cp?",
        opciones: ["Crear enlaces", "Mover archivos", "Eliminar archivos", "Copiar archivos"],
        respuestaCorrecta: 3,
        explicacion: "El comando 'cp' (copy) se utiliza principalmente para copiar archivos y directorios de una ubicación a otra en sistemas Unix y Linux."
      },
      {
        id: 1406,
        moduloId: 104,
        pregunta: "¿Cuál es la dirección de broadcast para la red 192.168.1.64/26?",
        opciones: ["192.168.1.63", "192.168.1.127", "192.168.1.255", "192.168.1.64"],
        respuestaCorrecta: 1,
        explicacion: "Con una máscara /26 (255.255.255.192), la red 192.168.1.64/26 tiene 64 direcciones (2^6), desde 192.168.1.64 hasta 192.168.1.127. La dirección de broadcast es siempre la última dirección del rango, 192.168.1.127."
      },
      {
        id: 1407,
        moduloId: 104,
        pregunta: "¿Cuál es la dirección de red de 192.168.50.123/26?",
        opciones: ["192.168.50.64", "192.168.50.96", "192.168.50.128", "192.168.50.0"],
        respuestaCorrecta: 0,
        explicacion: "Con una máscara /26, los primeros 26 bits identifican la red. Para calcular la dirección de red, se aplica una operación AND entre la IP y la máscara. Para 192.168.50.123/26, la dirección de red es 192.168.50.64."
      },
      {
        id: 1408,
        moduloId: 104,
        pregunta: "¿Cuál es la función de la máscara de subred?",
        opciones: ["Establecer la dirección MAC", "Aumentar la velocidad de la red", "Identificar si la IP es pública o privada", "Determinar qué parte de la IP es red y cuál es host"],
        respuestaCorrecta: 3,
        explicacion: "La máscara de subred permite distinguir qué parte de una dirección IP identifica la red y qué parte identifica el host dentro de esa red, mediante una operación AND bit a bit."
      },
      {
        id: 1409,
        moduloId: 104,
        pregunta: "¿Cuál es la máscara por defecto de una red de clase B?",
        opciones: ["255.255.255.255", "255.255.255.0", "255.0.0.0", "255.255.0.0"],
        respuestaCorrecta: 3,
        explicacion: "Las redes de clase B utilizan los primeros 16 bits para identificar la red, por lo que su máscara por defecto es 255.255.0.0 (también representada como /16)."
      },
      {
        id: 1410,
        moduloId: 104,
        pregunta: "¿Cuál es la principal diferencia entre una dirección IP pública y una privada?",
        opciones: ["Las IP públicas no necesitan pasar por un router", "Las IP públicas tienen más velocidad de conexión", "Las IP privadas se usan solo en redes gubernamentales", "Las IP privadas no son accesibles directamente desde Internet"],
        respuestaCorrecta: 3,
        explicacion: "Las direcciones IP privadas se utilizan en redes locales y no son enrutables directamente a través de Internet. Requieren NAT (Network Address Translation) para comunicarse con hosts en Internet."
      },
      {
        id: 1411,
        moduloId: 104,
        pregunta: "¿Cuál es la principal función de la memoria RAM en un ordenador?",
        opciones: ["Procesar señales gráficas", "Almacenar archivos a largo plazo", "Almacenar temporalmente instrucciones y datos para que el procesador los ejecute", "Controlar dispositivos de entrada/salida"],
        respuestaCorrecta: 2,
        explicacion: "La RAM (Random Access Memory) proporciona almacenamiento temporal y de acceso rápido para los datos e instrucciones que el procesador necesita ejecutar en tiempo real."
      },
      {
        id: 1412,
        moduloId: 104,
        pregunta: "¿Cuál es una diferencia clave entre la memoria RAM y la memoria ROM?",
        opciones: ["La ROM pierde sus datos al apagar el equipo, la RAM no", "La RAM contiene el sistema BIOS, la ROM solo guarda programas temporales", "Ambas almacenan datos permanentemente", "La RAM es volátil y la ROM no lo es"],
        respuestaCorrecta: 3,
        explicacion: "La RAM es volátil, lo que significa que pierde su contenido cuando se corta la energía. La ROM es no volátil y conserva su contenido incluso sin alimentación eléctrica."
      },
      {
        id: 1413,
        moduloId: 104,
        pregunta: "¿Cuál sería la dirección de broadcast para la red 192.168.10.0/24?",
        opciones: ["192.168.10.0", "192.168.255.255", "192.168.10.255", "192.168.0.0"],
        respuestaCorrecta: 2,
        explicacion: "Para una red /24, los primeros 24 bits identifican la red y los últimos 8 bits identifican hosts. La dirección de broadcast tiene todos los bits de host en 1, por lo que para 192.168.10.0/24 es 192.168.10.255."
      },
      {
        id: 1414,
        moduloId: 104,
        pregunta: "¿Cuántos bits tiene una dirección IPv4?",
        opciones: ["128", "32", "64", "16"],
        respuestaCorrecta: 1,
        explicacion: "Una dirección IPv4 está compuesta por 32 bits, normalmente representados como cuatro octetos (números de 0 a 255) separados por puntos."
      },
      {
        id: 1415,
        moduloId: 104,
        pregunta: "¿Cuántos hosts útiles puede tener la red 192.168.1.0/25?",
        opciones: ["254", "126", "128", "64"],
        respuestaCorrecta: 1,
        explicacion: "Una red /25 tiene 7 bits para hosts (2^7 = 128 direcciones). De estas, se restan 2 (la de red y la de broadcast), dejando 126 direcciones IP utilizables para hosts."
      },
      {
        id: 1416,
        moduloId: 104,
        pregunta: "¿Por qué es importante que un desarrollador de aplicaciones web (DAW) tenga conocimientos de hardware?",
        opciones: ["Para poder reparar físicamente ordenadores", "Para evitar usar software de terceros", "Para optimizar el rendimiento de sus aplicaciones y entender mejor el entorno de ejecución", "Porque es obligatorio para programar en HTML"],
        respuestaCorrecta: 2,
        explicacion: "Conocer el hardware permite a los desarrolladores optimizar sus aplicaciones, entender limitaciones, gestionar recursos eficientemente y diseñar código que se ejecute correctamente en diferentes entornos."
      },
      {
        id: 1417,
        moduloId: 104,
        pregunta: "¿Por qué es peligroso usar rm -r sin cuidado?",
        opciones: ["Puede borrar todo el sistema", "Oculta archivos", "Cambia contraseñas", "Congela el equipo"],
        respuestaCorrecta: 0,
        explicacion: "El comando rm -r elimina directorios y su contenido recursivamente. Si se usa sin precaución (especialmente con sudo), puede borrar archivos críticos del sistema o todos los datos del usuario."
      },
      {
        id: 1418,
        moduloId: 104,
        pregunta: "¿Qué añade el parámetro -a al comando ls?",
        opciones: ["Muestra archivos ocultos", "Muestra el propietario", "Cambia permisos", "Borra archivos"],
        respuestaCorrecta: 0,
        explicacion: "El parámetro -a (all) hace que ls muestre todos los archivos, incluidos los archivos ocultos que comienzan con un punto (.) en sistemas Unix/Linux."
      },
      {
        id: 1419,
        moduloId: 104,
        pregunta: "¿Qué clase es la dirección IP 172.16.0.1?",
        opciones: ["D", "B", "C", "A"],
        respuestaCorrecta: 1,
        explicacion: "La dirección 172.16.0.1 pertenece a la clase B, ya que las direcciones de clase B tienen un rango de 128.0.0.0 a 191.255.255.255, y 172.16.0.0 es parte de las redes privadas de clase B."
      },
      {
        id: 1420,
        moduloId: 104,
        pregunta: "¿Qué comando crea un nuevo archivo vacío?",
        opciones: ["cat", "mkfile", "nano", "touch"],
        respuestaCorrecta: 3,
        explicacion: "El comando 'touch' crea un archivo vacío si no existe, o actualiza la fecha y hora de modificación si el archivo ya existe."
      },
      {
        id: 1421,
        moduloId: 104,
        pregunta: "¿Qué comando elimina un directorio y todo su contenido?",
        opciones: ["rmdir", "delete", "rm -r", "rm"],
        respuestaCorrecta: 2,
        explicacion: "El comando 'rm -r' elimina recursivamente un directorio y todo su contenido, incluyendo subdirectorios y archivos contenidos en él."
      },
      {
        id: 1422,
        moduloId: 104,
        pregunta: "¿Qué comando se usa para copiar un directorio con todo su contenido?",
        opciones: ["cp -r", "ln -r", "mv -r", "cp"],
        respuestaCorrecta: 0,
        explicacion: "El comando 'cp -r' (copy recursive) permite copiar un directorio completo junto con todos sus archivos y subdirectorios."
      },
      {
        id: 1423,
        moduloId: 104,
        pregunta: "¿Qué comando se utiliza para cambiar de directorio en Linux?",
        opciones: ["mv", "cd", "ls", "pwd"],
        respuestaCorrecta: 1,
        explicacion: "El comando 'cd' (change directory) se utiliza para cambiar el directorio de trabajo actual en sistemas Unix/Linux."
      },
      {
        id: 1424,
        moduloId: 104,
        pregunta: "¿Qué componente se encarga de realizar los cálculos y ejecutar instrucciones?",
        opciones: ["Disco duro", "Placa base", "Fuente de alimentación", "CPU"],
        respuestaCorrecta: 3,
        explicacion: "La CPU (Unidad Central de Procesamiento) es el componente principal que ejecuta las instrucciones de los programas, realiza cálculos y controla las operaciones del sistema."
      },
      {
        id: 1425,
        moduloId: 104,
        pregunta: "¿Qué contiene el archivo /etc/passwd?",
        opciones: ["Permisos del sistema", "Logs del sistema", "Información de usuarios", "Información del hardware"],
        respuestaCorrecta: 2,
        explicacion: "El archivo /etc/passwd contiene información básica sobre las cuentas de usuario del sistema, como nombres de usuario, UID, GID, directorio home y shell por defecto."
      },
      {
        id: 1426,
        moduloId: 104,
        pregunta: "¿Qué dirección IP representa el primer host en la red 10.0.0.0/8?",
        opciones: ["10.0.0.0", "10.0.0.255", "10.255.255.255", "10.0.0.1"],
        respuestaCorrecta: 3,
        explicacion: "La dirección 10.0.0.0 es la dirección de la red, mientras que 10.0.0.1 es la primera dirección utilizable para un host en esa red."
      },
      {
        id: 1427,
        moduloId: 104,
        pregunta: "¿Qué es la BIOS en una computadora?",
        opciones: ["Un programa para editar textos", "Un firmware que inicia y prueba el hardware del sistema", "Un sistema operativo secundario", "Una aplicación de seguridad"],
        respuestaCorrecta: 1,
        explicacion: "La BIOS (Basic Input/Output System) es un firmware almacenado en un chip que se ejecuta al encender el ordenador para inicializar y probar el hardware antes de cargar el sistema operativo."
      },
      {
        id: 1428,
        moduloId: 104,
        pregunta: "¿Qué función tiene la placa base en una computadora?",
        opciones: ["Servir de soporte e interconexión entre todos los componentes", "Ejecutar gráficos complejos", "Aumentar la velocidad de red", "Alimentar directamente la CPU"],
        respuestaCorrecta: 0,
        explicacion: "La placa base es el circuito principal que conecta y permite la comunicación entre todos los componentes del sistema, como CPU, memoria, tarjetas de expansión y periféricos."
      },
      {
        id: 1429,
        moduloId: 104,
        pregunta: "¿Qué hace el comando man en Linux?",
        opciones: ["Muestra manuales", "Cambia usuarios", "Elimina archivos", "Lista procesos"],
        respuestaCorrecta: 0,
        explicacion: "El comando 'man' (manual) muestra las páginas del manual con documentación detallada sobre comandos, funciones y archivos de configuración del sistema."
      },
      {
        id: 1430,
        moduloId: 104,
        pregunta: "¿Qué hace el comando rm?",
        opciones: ["Cambia nombre", "Lista archivos", "Elimina archivos", "Muestra contenido"],
        respuestaCorrecta: 2,
        explicacion: "El comando 'rm' (remove) se utiliza para eliminar archivos y directorios del sistema de archivos en Unix/Linux."
      },
      {
        id: 1431,
        moduloId: 104,
        pregunta: "¿Qué hace el modificador -l en ls -l?",
        opciones: ["Muestra inodos", "Ordena alfabéticamente", "Muestra detalles", "Muestra archivos ocultos"],
        respuestaCorrecta: 2,
        explicacion: "El modificador -l (long format) muestra la información detallada de los archivos, incluyendo permisos, propietario, grupo, tamaño, fecha de modificación y nombre."
      },
      {
        id: 1432,
        moduloId: 104,
        pregunta: "¿Qué indica una \"d\" al principio de una línea de ls -l?",
        opciones: ["Archivo oculto", "Enlace simbólico", "Directorio", "Archivo ejecutable"],
        respuestaCorrecta: 2,
        explicacion: "En la salida detallada de ls -l, una 'd' al principio de los permisos indica que el elemento es un directorio, en lugar de un archivo regular o un enlace."
      },
      {
        id: 1433,
        moduloId: 104,
        pregunta: "¿Qué parte de la IP representa el host en 192.168.5.10/24?",
        opciones: ["192.168", "10", "5", "5.10"],
        respuestaCorrecta: 1,
        explicacion: "En la dirección 192.168.5.10/24, la máscara indica que los primeros 24 bits (192.168.5) identifican la red, y el último octeto (10) identifica el host."
      },
      {
        id: 1434,
        moduloId: 104,
        pregunta: "¿Qué rango de IPs cubre la subred 192.168.0.0/24?",
        opciones: ["192.168.1.0 – 192.168.1.255", "192.168.0.1 – 192.168.0.254", "192.168.0.10 – 192.168.0.240", "192.168.0.0 – 192.168.0.255"],
        respuestaCorrecta: 3,
        explicacion: "La subred 192.168.0.0/24 incluye todas las direcciones desde 192.168.0.0 (dirección de red) hasta 192.168.0.255 (dirección de broadcast)."
      },
      {
        id: 1435,
        moduloId: 104,
        pregunta: "¿Qué representa el símbolo ~ en Linux?",
        opciones: ["El directorio /etc", "El directorio temporal", "El directorio /", "El directorio del usuario actual"],
        respuestaCorrecta: 3,
        explicacion: "El símbolo ~ (tilde) en Linux es una abreviatura que representa el directorio home del usuario que ha iniciado sesión, como /home/usuario."
      },
      {
        id: 1436,
        moduloId: 104,
        pregunta: "¿Qué sucede si borras el archivo original de un enlace simbólico?",
        opciones: ["Se borra también el enlace", "Se mantiene el contenido", "El enlace queda roto", "Se oculta"],
        respuestaCorrecta: 2,
        explicacion: "Si se elimina el archivo original al que apunta un enlace simbólico, el enlace seguirá existiendo pero quedará roto, ya que apunta a un archivo que ya no existe."
      },
      {
        id: 1437,
        moduloId: 104,
        pregunta: "¿Qué tipo de dispositivo es un teclado en términos de hardware?",
        opciones: ["Dispositivo de procesamiento", "Dispositivo de entrada", "Dispositivo de salida", "Dispositivo mixto"],
        respuestaCorrecta: 1,
        explicacion: "Un teclado es un dispositivo de entrada que permite al usuario introducir datos e instrucciones en el sistema informático."
      },
      {
        id: 1438,
        moduloId: 104,
        pregunta: "¿Qué tipo de enlace apunta al mismo inodo que el archivo original?",
        opciones: ["Symbolic link", "Alias", "Soft link", "Hard link"],
        respuestaCorrecta: 3,
        explicacion: "Un hard link (enlace duro) apunta al mismo inodo que el archivo original, lo que significa que es efectivamente otra entrada en el sistema de archivos para los mismos datos."
      },
      {
        id: 1439,
        moduloId: 104,
        pregunta: "¿Qué tipo de memoria se usa normalmente para almacenar la BIOS?",
        opciones: ["ROM", "HDD", "DRAM", "RAM"],
        respuestaCorrecta: 0,
        explicacion: "La BIOS tradicionalmente se almacena en memoria ROM (Read-Only Memory) o en memorias flash EEPROM que son no volátiles y retienen su contenido incluso sin energía."
      },
      {
        id: 1440,
        moduloId: 104,
        pregunta: "Dada la IP 192.168.1.1 con máscara 255.255.255.0, ¿cuál es la parte de red?",
        opciones: ["192.168.1", "192.168", "192", "1.1"],
        respuestaCorrecta: 0,
        explicacion: "Con la máscara 255.255.255.0 (equivalente a /24), los primeros tres octetos (192.168.1) identifican la red, y el último octeto (1) identifica el host."
      }
    ]
  };

  export default moduloSimulacroUnoSistemas;