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
export const moduloSimulacroDosSistemas = {
    id: 105,
    nombre: "Simulacro 2 (12/05/2025)",
    esExamen: true,
    asignaturaId: 1,
    descripcion: "Conceptos de hardware, redes y comandos de sistema",
    preguntas: [
      {
        id: 1501,
        moduloId: 105,
        pregunta: "¿Cuál de estas funciones realiza la placa base?",
        opciones: ["Almacenar archivos", "Ejecutar programas del usuario", "Producir imágenes en la pantalla", "Conectar y permitir la comunicación entre todos los componentes del ordenador"],
        respuestaCorrecta: 3,
        explicacion: "La placa base es el circuito principal que conecta y permite la comunicación entre todos los componentes del sistema, como CPU, memoria, tarjetas y periféricos."
      },
      {
        id: 1502,
        moduloId: 105,
        pregunta: "¿Cuál de las siguientes afirmaciones es cierta sobre IPv6?",
        opciones: ["Usa 8 bloques hexadecimales de 16 bits", "Es incompatible con redes IPv4", "Usa direcciones de 32 bits", "Usa puntos para separar los bloques"],
        respuestaCorrecta: 0,
        explicacion: "IPv6 utiliza 8 bloques hexadecimales de 16 bits cada uno (para un total de 128 bits), separados por dos puntos (:), no por puntos como en IPv4."
      },
      {
        id: 1503,
        moduloId: 105,
        pregunta: "¿Cuál de las siguientes direcciones IP es de clase A?",
        opciones: ["224.0.0.1", "172.16.0.1", "10.0.0.1", "192.168.1.1"],
        respuestaCorrecta: 2,
        explicacion: "Las direcciones IP de clase A tienen el primer octeto entre 1 y 126. La dirección 10.0.0.1 pertenece a este rango y es parte del espacio reservado para redes privadas de clase A."
      },
      {
        id: 1504,
        moduloId: 105,
        pregunta: "¿Cuál de las siguientes direcciones IP es una dirección de tipo B?",
        opciones: ["172.16.0.1", "1.1.1.1", "66.220.144.0", "8.8.8.8"],
        respuestaCorrecta: 0,
        explicacion: "Las direcciones IP de clase B tienen el primer octeto entre 128 y 191. La dirección 172.16.0.1 pertenece a este rango y forma parte del espacio reservado para redes privadas de clase B."
      },
      {
        id: 1505,
        moduloId: 105,
        pregunta: "¿Cuál de los siguientes elementos es un ejemplo de hardware?",
        opciones: ["Linux", "Disco duro", "Microsoft Word", "Firmware"],
        respuestaCorrecta: 1,
        explicacion: "El disco duro es un componente físico (hardware) de almacenamiento. Linux es un sistema operativo, Microsoft Word es una aplicación, y el firmware es software almacenado en memoria no volátil."
      },
      {
        id: 1506,
        moduloId: 105,
        pregunta: "¿Cuál es el número máximo de direcciones IP que puede contener una red clase C?",
        opciones: ["254", "256", "128", "64"],
        respuestaCorrecta: 1,
        explicacion: "Una red de clase C tiene 8 bits para identificar hosts (2^8 = 256). Esto incluye la dirección de red y la de broadcast, por lo que tiene 256 direcciones en total, aunque solo 254 son utilizables para hosts."
      },
      {
        id: 1507,
        moduloId: 105,
        pregunta: "¿Cuál es el principal motivo de la creación de IPv6?",
        opciones: ["Aumentar la cantidad de direcciones disponibles", "Mejorar la velocidad de navegación", "Evitar la fragmentación de paquetes", "Cambiar el formato de las IP públicas"],
        respuestaCorrecta: 0,
        explicacion: "El principal motivo para la creación de IPv6 fue solucionar el problema de agotamiento de direcciones IPv4, aumentando drásticamente el espacio de direcciones disponibles (de 32 bits a 128 bits)."
      },
      {
        id: 1508,
        moduloId: 105,
        pregunta: "¿Cuál es el valor decimal del número binario 1010?",
        opciones: ["8", "15", "10", "12"],
        respuestaCorrecta: 2,
        explicacion: "El número binario 1010 equivale a (1×2^3) + (0×2^2) + (1×2^1) + (0×2^0) = 8 + 0 + 2 + 0 = 10 en decimal."
      },
      {
        id: 1509,
        moduloId: 105,
        pregunta: "¿Cuál es una ventaja de una dirección IP estática frente a una dinámica?",
        opciones: ["Es más barata", "Es constante y facilita servicios como servidores web", "No requiere configuración manual", "Es más fácil de cambiar"],
        respuestaCorrecta: 1,
        explicacion: "Una dirección IP estática permanece constante, lo que la hace ideal para servicios que necesitan ser localizados consistentemente, como servidores web, servidores de correo o cualquier servicio que necesite ser accesible en una dirección fija."
      },
      {
        id: 1510,
        moduloId: 105,
        pregunta: "¿Qué característica define a una dirección IP pública?",
        opciones: ["Es accesible desde internet", "Puede ser usada por cualquier dispositivo interno", "Cambia cada vez que reiniciamos el router", "Solo se usa dentro de redes locales"],
        respuestaCorrecta: 0,
        explicacion: "Una dirección IP pública es enrutable y accesible directamente desde Internet, a diferencia de las direcciones IP privadas que solo son accesibles dentro de una red local."
      },
      {
        id: 1511,
        moduloId: 105,
        pregunta: "¿Qué comando muestra la ruta absoluta del directorio actual?",
        opciones: ["pwd", "ls", "cd", "whoami"],
        respuestaCorrecta: 0,
        explicacion: "El comando 'pwd' (print working directory) muestra la ruta absoluta del directorio de trabajo actual en sistemas Unix/Linux."
      },
      {
        id: 1512,
        moduloId: 105,
        pregunta: "¿Qué comando permite ver todos los archivos, incluidos los ocultos, con detalles como permisos y fecha?",
        opciones: ["ls -R", "ls -l", "ls -la", "ls -a"],
        respuestaCorrecta: 2,
        explicacion: "El comando 'ls -la' combina las opciones -l (formato largo con detalles) y -a (mostrar todos los archivos, incluidos los ocultos que comienzan con punto)."
      },
      {
        id: 1513,
        moduloId: 105,
        pregunta: "¿Qué comando se usa para cambiar de directorio?",
        opciones: ["cp", "cd", "ls", "pwd"],
        respuestaCorrecta: 1,
        explicacion: "El comando 'cd' (change directory) se utiliza para cambiar el directorio de trabajo actual en sistemas Unix/Linux."
      },
      {
        id: 1514,
        moduloId: 105,
        pregunta: "¿Qué comando se usa para mover un archivo a otra ubicación?",
        opciones: ["cp", "mv", "ls", "rm"],
        respuestaCorrecta: 1,
        explicacion: "El comando 'mv' (move) se utiliza para mover archivos o directorios de una ubicación a otra, o para renombrarlos en la misma ubicación."
      },
      {
        id: 1515,
        moduloId: 105,
        pregunta: "¿Qué comando se utiliza para copiar un archivo?",
        opciones: ["cp", "copy", "push", "mv"],
        respuestaCorrecta: 0,
        explicacion: "El comando 'cp' (copy) se utiliza para copiar archivos o directorios (con la opción -r) de una ubicación a otra en sistemas Unix/Linux."
      },
      {
        id: 1516,
        moduloId: 105,
        pregunta: "¿Qué comando sirve para crear un archivo vacío?",
        opciones: ["nano", "touch", "mkdir", "cp"],
        respuestaCorrecta: 1,
        explicacion: "El comando 'touch' crea un archivo vacío si no existe, o actualiza la fecha y hora de modificación si el archivo ya existe."
      },
      {
        id: 1517,
        moduloId: 105,
        pregunta: "¿Qué componente es conocido como el \"cerebro\" del ordenador?",
        opciones: ["ROM", "SSD", "BIOS", "CPU"],
        respuestaCorrecta: 3,
        explicacion: "La CPU (Central Processing Unit o Unidad Central de Procesamiento) es considerada el 'cerebro' del ordenador, ya que es responsable de ejecutar instrucciones, realizar cálculos y controlar el funcionamiento de todo el sistema."
      },
      {
        id: 1518,
        moduloId: 105,
        pregunta: "¿Qué componente se encarga de iniciar el hardware y cargar el sistema operativo?",
        opciones: ["RAM", "CPU", "BIOS", "SSD"],
        respuestaCorrecta: 2,
        explicacion: "La BIOS (Basic Input/Output System) es el firmware que se ejecuta al encender el ordenador para inicializar y probar el hardware, y que luego carga el sistema operativo desde un dispositivo de almacenamiento."
      },
      {
        id: 1519,
        moduloId: 105,
        pregunta: "¿Qué diferencia principal existe entre la RAM y la ROM?",
        opciones: ["La RAM guarda programas, la ROM no tiene datos", "La RAM almacena el sistema operativo, la ROM no", "La RAM es permanente y la ROM es temporal", "La RAM se borra al apagar el equipo, la ROM no"],
        respuestaCorrecta: 3,
        explicacion: "La principal diferencia es que la RAM (Random Access Memory) es volátil y pierde su contenido cuando se apaga el equipo, mientras que la ROM (Read-Only Memory) es no volátil y mantiene su contenido incluso sin alimentación eléctrica."
      },
      {
        id: 1520,
        moduloId: 105,
        pregunta: "¿Qué diferencia principal hay entre `ls -l` y `ls -la`?",
        opciones: ["`ls -l` muestra los archivos ocultos", "`ls -la` muestra menos detalles", "`ls -la` muestra archivos de solo lectura", "`ls -l` no muestra archivos ocultos y `ls -la` sí"],
        respuestaCorrecta: 3,
        explicacion: "Ambos comandos muestran información detallada en formato largo, pero `ls -l` solo muestra los archivos normales (no ocultos), mientras que `ls -la` también incluye los archivos ocultos (aquellos que comienzan con un punto)."
      },
      {
        id: 1521,
        moduloId: 105,
        pregunta: "¿Qué dirección IP pertenece al rango de clase B?",
        opciones: ["172.20.0.1", "10.1.1.1", "224.0.0.1", "192.0.2.1"],
        respuestaCorrecta: 0,
        explicacion: "Las direcciones IP de clase B tienen el primer octeto entre 128 y 191. La dirección 172.20.0.1 tiene el primer octeto 172, por lo que pertenece a la clase B."
      },
      {
        id: 1522,
        moduloId: 105,
        pregunta: "¿Qué es el firmware?",
        opciones: ["Sistema operativo para móviles", "Un componente físico del ordenador", "Software almacenado en una memoria no volátil", "Un programa que se ejecuta en la nube"],
        respuestaCorrecta: 2,
        explicacion: "El firmware es un tipo de software que está almacenado permanentemente en una memoria no volátil (como ROM, EPROM o flash) y controla el funcionamiento básico del hardware al que está asociado."
      },
      {
        id: 1523,
        moduloId: 105,
        pregunta: "¿Qué función cumple el chipset norte en una placa base?",
        opciones: ["Controlar la tarjeta gráfica y la RAM", "Gestionar puertos USB", "Almacenar el sistema operativo", "Controlar la red y el sonido"],
        respuestaCorrecta: 0,
        explicacion: "El chipset norte (también llamado Northbridge) tradicionalmente se encarga de las comunicaciones de alta velocidad entre la CPU, la memoria RAM y la tarjeta gráfica (controlador PCI Express), aunque en arquitecturas modernas muchas de estas funciones se han integrado en la CPU."
      },
      {
        id: 1524,
        moduloId: 105,
        pregunta: "¿Qué hace el comando `cd ..`?",
        opciones: ["Sube un nivel en la jerarquía de directorios", "Cambia al directorio anterior", "Va al directorio del usuario", "Cambia al directorio raíz"],
        respuestaCorrecta: 0,
        explicacion: "El comando `cd ..` sube un nivel en la jerarquía de directorios, es decir, cambia al directorio padre del directorio actual."
      },
      {
        id: 1525,
        moduloId: 105,
        pregunta: "¿Qué hace el comando `chmod o-x archivo.sh`?",
        opciones: ["Quita permiso de ejecución al propietario", "Quita permiso de ejecución a otros (usuarios no propietarios ni del grupo)", "Quita permiso de ejecución al grupo", "Da permiso de ejecución a todos"],
        respuestaCorrecta: 1,
        explicacion: "El comando `chmod o-x archivo.sh` quita (-) el permiso de ejecución (x) a 'otros' (o), es decir, a los usuarios que no son ni el propietario ni pertenecen al grupo del archivo."
      },
      {
        id: 1526,
        moduloId: 105,
        pregunta: "¿Qué hace el comando `chmod u+r archivo.txt`?",
        opciones: ["Da permiso de lectura al grupo", "Da permiso de lectura al usuario (propietario)", "Asigna todos los permisos al usuario", "Quita permiso de lectura al usuario"],
        respuestaCorrecta: 1,
        explicacion: "El comando `chmod u+r archivo.txt` añade (+) el permiso de lectura (r) al usuario propietario (u) del archivo."
      },
      {
        id: 1527,
        moduloId: 105,
        pregunta: "¿Qué hace el símbolo `<` en un comando?",
        opciones: ["Muestra el contenido del archivo", "Redirige errores a un archivo", "Redirige la salida estándar a un archivo", "Redirige la entrada desde un archivo"],
        respuestaCorrecta: 3,
        explicacion: "El símbolo `<` se utiliza para redirigir la entrada estándar de un comando, tomándola desde un archivo en lugar de desde el teclado. Por ejemplo, `comando < archivo.txt`."
      },
      {
        id: 1528,
        moduloId: 105,
        pregunta: "¿Qué hace el símbolo `>` en un comando?",
        opciones: ["Ejecuta el archivo como root", "Redirige la salida a un archivo, sobrescribiéndolo", "Redirige la entrada desde un archivo", "Muestra el contenido de un archivo"],
        respuestaCorrecta: 1,
        explicacion: "El símbolo `>` redirige la salida estándar de un comando a un archivo, sobrescribiendo el contenido del archivo si ya existe. Por ejemplo, `comando > archivo.txt`."
      },
      {
        id: 1529,
        moduloId: 105,
        pregunta: "¿Qué hace el símbolo `2>` en un comando?",
        opciones: ["Redirige los errores estándar a un archivo", "Duplica el archivo de salida", "Redirige la salida de texto plano", "Redirige la salida estándar al archivo"],
        respuestaCorrecta: 0,
        explicacion: "El símbolo `2>` redirige la salida de error estándar (descriptor 2) a un archivo. Por ejemplo, `comando 2> errores.log` capturará los mensajes de error generados por el comando."
      },
      {
        id: 1530,
        moduloId: 105,
        pregunta: "¿Qué opción de `chmod` permite quitar el permiso de escritura a todos los usuarios?",
        opciones: ["chmod a-w archivo.txt", "chmod u-w archivo.txt", "chmod g-w archivo.txt", "chmod a+w archivo.txt"],
        respuestaCorrecta: 0,
        explicacion: "La opción `chmod a-w archivo.txt` quita (-) el permiso de escritura (w) a todos los usuarios (a): propietario, grupo y otros."
      },
      {
        id: 1531,
        moduloId: 105,
        pregunta: "¿Qué parte identifica la red en la IP 192.168.1.100 con máscara 255.255.255.0?",
        opciones: ["192.168.1", "168.1.100", "100", "192"],
        respuestaCorrecta: 0,
        explicacion: "Con una máscara 255.255.255.0 (equivalente a /24), los primeros tres octetos (192.168.1) identifican la red, y el último octeto (100) identifica el host dentro de esa red."
      },
      {
        id: 1532,
        moduloId: 105,
        pregunta: "¿Qué parte representa el host en la IP 10.0.5.25 con máscara 255.0.0.0?",
        opciones: ["0", "10", "0.5.25", "5.25"],
        respuestaCorrecta: 2,
        explicacion: "Con una máscara 255.0.0.0 (equivalente a /8), el primer octeto (10) identifica la red, y los últimos tres octetos (0.5.25) identifican el host dentro de esa red."
      },
      {
        id: 1533,
        moduloId: 105,
        pregunta: "¿Qué protocolo IP permite un mayor número de direcciones?",
        opciones: ["IPv6", "IPX/SPX", "IPv4", "ARP"],
        respuestaCorrecta: 0,
        explicacion: "IPv6 utiliza direcciones de 128 bits (frente a los 32 bits de IPv4), lo que permite un número astronómicamente mayor de direcciones (2^128 frente a 2^32)."
      },
      {
        id: 1534,
        moduloId: 105,
        pregunta: "¿Qué representa la letra `g` en los permisos al usar `chmod`?",
        opciones: ["Propietario raíz", "Grupo del archivo", "Otros (others)", "Usuario (user)"],
        respuestaCorrecta: 1,
        explicacion: "La letra `g` en los comandos de chmod representa al grupo al que pertenece el archivo, permitiendo modificar los permisos específicamente para los usuarios que pertenecen a ese grupo."
      },
      {
        id: 1535,
        moduloId: 105,
        pregunta: "¿Qué tipo de almacenamiento es más rápido?",
        opciones: ["HDD", "Cinta magnética", "CD-ROM", "SSD"],
        respuestaCorrecta: 3,
        explicacion: "Los SSD (Solid State Drives) son significativamente más rápidos que los discos duros tradicionales (HDD), cintas magnéticas o CD-ROMs, gracias a su acceso no mecánico a los datos y a la ausencia de partes móviles."
      },
      {
        id: 1536,
        moduloId: 105,
        pregunta: "¿Qué tipo de IP es 127.0.0.1?",
        opciones: ["Tipo C", "Tipo D", "Tipo A", "Tipo B"],
        respuestaCorrecta: 2,
        explicacion: "Técnicamente, 127.0.0.1 pertenece al rango de direcciones de clase A (primer octeto entre 1-126), aunque es una dirección especial de loopback que se utiliza para referirse al propio equipo local."
      },
      {
        id: 1537,
        moduloId: 105,
        pregunta: "¿Qué tipo de IP es la 169.254.0.10?",
        opciones: ["Tipo B", "Tipo A", "Tipo D", "Tipo C"],
        respuestaCorrecta: 0,
        explicacion: "La dirección 169.254.0.10 pertenece al rango de clase B (primer octeto entre 128-191), aunque es parte del rango especial de direcciones APIPA (Automatic Private IP Addressing) que se asignan automáticamente cuando no hay un servidor DHCP disponible."
      },
      {
        id: 1538,
        moduloId: 105,
        pregunta: "¿Qué tipo de memoria se borra al apagar el ordenador?",
        opciones: ["Memoria flash", "SSD", "RAM", "ROM"],
        respuestaCorrecta: 2,
        explicacion: "La RAM (Random Access Memory) es volátil, lo que significa que pierde toda la información almacenada cuando se apaga el ordenador o se corta el suministro eléctrico."
      },
      {
        id: 1539,
        moduloId: 105,
        pregunta: "En una red de clase C, ¿cuántas direcciones se pueden asignar a hosts?",
        opciones: ["252", "255", "254", "256"],
        respuestaCorrecta: 2,
        explicacion: "Una red de clase C tiene 8 bits para hosts (2^8 = 256), pero dos direcciones están reservadas: la primera para la dirección de red y la última para broadcast. Por lo tanto, se pueden asignar 254 direcciones a hosts."
      },
      {
        id: 1540,
        moduloId: 105,
        pregunta: "Una dirección IP dinámica se caracteriza por:",
        opciones: ["Estar reservada para redes privadas", "Ser configurada manualmente por el usuario", "Ser asignada automáticamente por un servidor", "Ser fija y constante en el tiempo"],
        respuestaCorrecta: 2,
        explicacion: "Una dirección IP dinámica es aquella que se asigna automáticamente a un dispositivo por un servidor DHCP cuando se conecta a la red, y puede cambiar cada vez que el dispositivo se reconecta."
      }
    ]
  };

  export default moduloSimulacroDosSistemas;