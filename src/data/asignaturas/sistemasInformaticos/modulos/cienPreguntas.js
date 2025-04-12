// src/data/asignaturas/modulos/cienPreguntas.js

export const moduloCienPreguntas = {
    id: 103,
    nombre: "100 Preguntas Sistemas Informáticos",
    asignaturaId: 1, // ID de Sistemas Informáticos
    descripcion: "Conjunto completo de 100 preguntas para evaluar conocimientos de Sistemas Informáticos",
    preguntas: [
      {
        id: 3001,
        moduloId: 103,
        pregunta: "¿Qué define mejor un Sistema de Información (SSII)?",
        opciones: [
          "Sistema de redes interconectadas",
          "Sistema que almacena, procesa y distribuye información",
          "Sistema operativo",
          "Hardware del servidor"
        ],
        respuestaCorrecta: 1,
        explicacion: "Un Sistema de Información (SSII) se define como un sistema que almacena, procesa y distribuye información para apoyar la toma de decisiones y el control en una organización."
      },
      {
        id: 3002,
        moduloId: 103,
        pregunta: "¿Qué característica distingue al firmware del hardware y software?",
        opciones: [
          "Es tangible como el hardware",
          "Es un programa que gestiona el hardware a bajo nivel",
          "Es un sistema operativo",
          "Es un periférico"
        ],
        respuestaCorrecta: 1,
        explicacion: "El firmware es un programa que gestiona el hardware a bajo nivel. A diferencia del software, está integrado en los dispositivos hardware y controla su funcionamiento básico."
      },
      {
        id: 3003,
        moduloId: 103,
        pregunta: "¿Qué reemplazó a los tubos de vacío en la evolución de los ordenadores?",
        opciones: [
          "Discos duros",
          "Transistores",
          "Placas base",
          "ROM"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los transistores reemplazaron a los tubos de vacío en la evolución de los ordenadores, marcando el inicio de la segunda generación de computadoras. Esto permitió reducir significativamente el tamaño, consumo energético y calor generado."
      },
      {
        id: 3004,
        moduloId: 103,
        pregunta: "¿Cómo se clasifican comúnmente los SSII?",
        opciones: [
          "Centralizados y distribuidos",
          "Manuales y automáticos",
          "Locales y globales",
          "Públicos y privados"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los Sistemas de Información (SSII) se clasifican comúnmente en centralizados y distribuidos según su arquitectura. Los centralizados tienen todos los componentes en una ubicación única, mientras que los distribuidos reparten sus componentes en diferentes ubicaciones."
      },
      {
        id: 3005,
        moduloId: 103,
        pregunta: "¿Qué define a un cliente ligero?",
        opciones: [
          "Alta capacidad de procesamiento",
          "Depende de un servidor para procesamiento de datos",
          "Sistema operativo independiente",
          "Software de virtualización"
        ],
        respuestaCorrecta: 1,
        explicacion: "Un cliente ligero se define como un dispositivo que depende principalmente de un servidor para el procesamiento de datos. Tiene capacidades limitadas y actúa como terminal de acceso a servicios proporcionados por un servidor central."
      },
      {
        id: 3006,
        moduloId: 103,
        pregunta: "¿Qué componente NO forma parte de la arquitectura básica de un ordenador?",
        opciones: [
          "CPU",
          "Memoria",
          "Software de usuario",
          "Dispositivos de entrada/salida"
        ],
        respuestaCorrecta: 2,
        explicacion: "El software de usuario no forma parte de la arquitectura básica de un ordenador. La arquitectura básica incluye componentes hardware como CPU, memoria y dispositivos de entrada/salida, junto con el firmware básico, pero no el software de aplicación."
      },
      {
        id: 3007,
        moduloId: 103,
        pregunta: "¿Cuántos MB hay en 3 GB?",
        opciones: [
          "3072 MB",
          "4096 MB",
          "1024 MB",
          "2048 MB"
        ],
        respuestaCorrecta: 0,
        explicacion: "En 3 GB hay 3072 MB. Esto se calcula multiplicando 3 por 1024, ya que 1 GB = 1024 MB."
      },
      {
        id: 3008,
        moduloId: 103,
        pregunta: "¿Qué componente conecta la CPU con la memoria RAM?",
        opciones: [
          "Puente norte",
          "Puente sur",
          "Chipset",
          "BIOS"
        ],
        respuestaCorrecta: 0,
        explicacion: "El puente norte (North Bridge) es el componente del chipset que conecta la CPU con la memoria RAM y con las tarjetas gráficas a través del bus de alta velocidad."
      },
      {
        id: 3009,
        moduloId: 103,
        pregunta: "¿Qué hace la ALU en un ordenador?",
        opciones: [
          "Ejecuta instrucciones de control",
          "Realiza operaciones matemáticas y lógicas",
          "Procesa gráficos",
          "Controla el flujo de datos en redes"
        ],
        respuestaCorrecta: 1,
        explicacion: "La Unidad Aritmético-Lógica (ALU) realiza operaciones matemáticas (suma, resta, multiplicación, división) y operaciones lógicas (AND, OR, NOT) sobre los datos dentro de la CPU."
      },
      {
        id: 3010,
        moduloId: 103,
        pregunta: "¿Qué es un disco de red?",
        opciones: [
          "Un disco duro local",
          "Un almacenamiento accesible a través de una red",
          "Una partición local",
          "Una memoria RAM"
        ],
        respuestaCorrecta: 1,
        explicacion: "Un disco de red es un almacenamiento que se accede a través de una red de computadoras, en lugar de estar conectado directamente al ordenador. Permite compartir espacio de almacenamiento entre múltiples usuarios."
      },
      {
        id: 3011,
        moduloId: 103,
        pregunta: "¿Qué es un proceso en un sistema operativo?",
        opciones: [
          "Una tarea en espera",
          "Una instancia de un programa en ejecución",
          "Un archivo de configuración",
          "Un servicio de red"
        ],
        respuestaCorrecta: 1,
        explicacion: "Un proceso en un sistema operativo es una instancia de un programa en ejecución. Incluye el código del programa, sus datos y su estado actual de ejecución."
      },
      {
        id: 3012,
        moduloId: 103,
        pregunta: "¿Qué son los servicios en Windows?",
        opciones: [
          "Programas para el usuario",
          "Procesos que se ejecutan en segundo plano",
          "Aplicaciones móviles",
          "Controladores de hardware"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los servicios en Windows son procesos que se ejecutan en segundo plano y no requieren interacción del usuario. Realizan tareas del sistema o proporcionan funcionalidades a otros programas."
      },
      {
        id: 3013,
        moduloId: 103,
        pregunta: "¿Cuál es una ventaja de los discos SSHD sobre los HDD?",
        opciones: [
          "Mayor costo",
          "Rendimiento superior al combinar SSD y HDD",
          "Menor velocidad",
          "Más partes móviles"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los discos SSHD (Solid State Hybrid Drive) combinan un disco duro tradicional (HDD) con memoria flash (SSD), ofreciendo un rendimiento superior al almacenar los datos más frecuentemente utilizados en la parte SSD para acceso rápido."
      },
      {
        id: 3014,
        moduloId: 103,
        pregunta: "¿Qué es un sistema operativo?",
        opciones: [
          "Software de usuario",
          "Programa que gestiona hardware y software del sistema",
          "Dispositivo de entrada",
          "Aplicación de red"
        ],
        respuestaCorrecta: 1,
        explicacion: "Un sistema operativo es un programa que gestiona el hardware y el software del sistema, actuando como intermediario entre las aplicaciones y el hardware del ordenador."
      },
      {
        id: 3015,
        moduloId: 103,
        pregunta: "¿Qué función cumple el núcleo (kernel) en un sistema operativo?",
        opciones: [
          "Ejecutar software de usuario",
          "Gestionar la memoria, procesos y hardware",
          "Crear interfaces gráficas",
          "Conectar redes externas"
        ],
        respuestaCorrecta: 1,
        explicacion: "El núcleo o kernel es la parte central de un sistema operativo que se encarga de gestionar la memoria, los procesos y el hardware. Proporciona servicios esenciales para el funcionamiento del sistema."
      },
      {
        id: 3016,
        moduloId: 103,
        pregunta: "¿Cuántos megabytes (MB) hay en 5 gigabytes (GB)?",
        opciones: [
          "5120 MB",
          "4096 MB",
          "1024 MB",
          "2048 MB"
        ],
        respuestaCorrecta: 0,
        explicacion: "En 5 GB hay 5120 MB. Esto se calcula multiplicando 5 por 1024, ya que 1 GB = 1024 MB."
      },
      {
        id: 3017,
        moduloId: 103,
        pregunta: "¿Cuántos gigabytes (GB) hay en 8192 megabytes (MB)?",
        opciones: [
          "4 GB",
          "8 GB",
          "16 GB",
          "2 GB"
        ],
        respuestaCorrecta: 1,
        explicacion: "En 8192 MB hay 8 GB. Esto se calcula dividiendo 8192 entre 1024, ya que 1 GB = 1024 MB."
      },
      {
        id: 3018,
        moduloId: 103,
        pregunta: "¿Cuántos terabytes (TB) hay en 2048 gigabytes (GB)?",
        opciones: [
          "1 TB",
          "2 TB",
          "0.5 TB",
          "4 TB"
        ],
        respuestaCorrecta: 1,
        explicacion: "En 2048 GB hay 2 TB. Esto se calcula dividiendo 2048 entre 1024, ya que 1 TB = 1024 GB."
      },
      {
        id: 3019,
        moduloId: 103,
        pregunta: "Convierte el número decimal 15 a binario.",
        opciones: [
          "1100",
          "1111",
          "1001",
          "1010"
        ],
        respuestaCorrecta: 1,
        explicacion: "El número decimal 15 en binario es 1111. Esto se obtiene al realizar divisiones sucesivas por 2: 15÷2=7 con resto 1, 7÷2=3 con resto 1, 3÷2=1 con resto 1, 1÷2=0 con resto 1, dando como resultado 1111."
      },
      {
        id: 3020,
        moduloId: 103,
        pregunta: "Convierte el número binario 1010 a decimal.",
        opciones: [
          "8",
          "10",
          "12",
          "15"
        ],
        respuestaCorrecta: 1,
        explicacion: "El número binario 1010 en decimal es 10. Se calcula como: 1×2³ + 0×2² + 1×2¹ + 0×2⁰ = 8 + 0 + 2 + 0 = 10."
      },
      {
        id: 3021,
        moduloId: 103,
        pregunta: "¿Cuántos kilobytes (KB) hay en 2 megabytes (MB)?",
        opciones: [
          "1024 KB",
          "2048 KB",
          "512 KB",
          "4096 KB"
        ],
        respuestaCorrecta: 1,
        explicacion: "En 2 MB hay 2048 KB. Esto se calcula multiplicando 2 por 1024, ya que 1 MB = 1024 KB."
      },
      {
        id: 3022,
        moduloId: 103,
        pregunta: "Convierte 0.5 terabytes (TB) a gigabytes (GB).",
        opciones: [
          "256 GB",
          "512 GB",
          "1024 GB",
          "2048 GB"
        ],
        respuestaCorrecta: 1,
        explicacion: "0.5 TB equivale a 512 GB. Esto se calcula multiplicando 0.5 por 1024, ya que 1 TB = 1024 GB."
      },
      {
        id: 3023,
        moduloId: 103,
        pregunta: "Convierte 4096 kilobytes (KB) a megabytes (MB).",
        opciones: [
          "2 MB",
          "4 MB",
          "6 MB",
          "8 MB"
        ],
        respuestaCorrecta: 1,
        explicacion: "4096 KB equivale a 4 MB. Esto se calcula dividiendo 4096 entre 1024, ya que 1 MB = 1024 KB."
      },
      {
        id: 3024,
        moduloId: 103,
        pregunta: "Convierte el número decimal 255 a binario.",
        opciones: [
          "11111110",
          "11111111",
          "10101010",
          "11001100"
        ],
        respuestaCorrecta: 1,
        explicacion: "El número decimal 255 en binario es 11111111. Representa 8 bits con todos los valores en 1, equivalente a 2⁸-1."
      },
      {
        id: 3025,
        moduloId: 103,
        pregunta: "¿Cuántos terabytes (TB) hay en 10,240 gigabytes (GB)?",
        opciones: [
          "5 TB",
          "10 TB",
          "20 TB",
          "15 TB"
        ],
        respuestaCorrecta: 1,
        explicacion: "En 10,240 GB hay 10 TB. Esto se calcula dividiendo 10,240 entre 1024, ya que 1 TB = 1024 GB."
      },
      {
        id: 3026,
        moduloId: 103,
        pregunta: "Convierte el número binario 1101 a decimal.",
        opciones: [
          "11",
          "12",
          "13",
          "14"
        ],
        respuestaCorrecta: 2,
        explicacion: "El número binario 1101 en decimal es 13. Se calcula como: 1×2³ + 1×2² + 0×2¹ + 1×2⁰ = 8 + 4 + 0 + 1 = 13."
      },
      {
        id: 3027,
        moduloId: 103,
        pregunta: "Convierte 1.5 terabytes (TB) a gigabytes (GB).",
        opciones: [
          "1536 GB",
          "1024 GB",
          "512 GB",
          "2048 GB"
        ],
        respuestaCorrecta: 0,
        explicacion: "1.5 TB equivale a 1536 GB. Esto se calcula multiplicando 1.5 por 1024, ya que 1 TB = 1024 GB."
      },
      {
        id: 3028,
        moduloId: 103,
        pregunta: "Convierte el número decimal 64 a binario.",
        opciones: [
          "1000000",
          "100000",
          "111111",
          "1100000"
        ],
        respuestaCorrecta: 0,
        explicacion: "El número decimal 64 en binario es 1000000. Es una potencia exacta de 2 (2⁶), por lo que se representa como un 1 seguido de seis ceros."
      },
      {
        id: 3029,
        moduloId: 103,
        pregunta: "Convierte 20480 kilobytes (KB) a megabytes (MB).",
        opciones: [
          "10 MB",
          "15 MB",
          "20 MB",
          "25 MB"
        ],
        respuestaCorrecta: 2,
        explicacion: "20480 KB equivale a 20 MB. Esto se calcula dividiendo 20480 entre 1024, ya que 1 MB = 1024 KB."
      },
      {
        id: 3030,
        moduloId: 103,
        pregunta: "Convierte 256 megabytes (MB) a gigabytes (GB).",
        opciones: [
          "0.25 GB",
          "0.5 GB",
          "1 GB",
          "2 GB"
        ],
        respuestaCorrecta: 0,
        explicacion: "256 MB equivale a 0.25 GB. Esto se calcula dividiendo 256 entre 1024, ya que 1 GB = 1024 MB."
      },
      {
        id: 3031,
        moduloId: 103,
        pregunta: "Convierte el número binario 1001 a decimal.",
        opciones: [
          "7",
          "8",
          "9",
          "10"
        ],
        respuestaCorrecta: 2,
        explicacion: "El número binario 1001 en decimal es 9. Se calcula como: 1×2³ + 0×2² + 0×2¹ + 1×2⁰ = 8 + 0 + 0 + 1 = 9."
      },
      {
        id: 3032,
        moduloId: 103,
        pregunta: "¿Qué componente representa el número 1 en la imagen?",
        recurso: {
          tipo: "imagen",
          contenido: "/images/cienPreguntas/pregunta32.png",
          altText: "Imagen de una placa base con componentes numerados"
        },
        opciones: [
          "Puerto PCI",
          "Conector de alimentación principal ATX",
          "Puerto SATA",
          "Zócalo de CPU"
        ],
        respuestaCorrecta: 1,
        explicacion: "El componente número 1 en la imagen es el conector de alimentación principal ATX, que proporciona energía a la placa base desde la fuente de alimentación."
      },
      {
        id: 3033,
        moduloId: 103,
        pregunta: "¿Qué representan los elementos numerados como 2?",
        recurso: {
          tipo: "imagen",
          contenido: "/images/cienPreguntas/pregunta32.png",
          altText: "Imagen de una placa base con componentes numerados"
        },
        opciones: [
          "Ranuras PCIe",
          "Ranuras de memoria RAM DDR",
          "Puertos USB",
          "Conectores SATA"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los elementos numerados como 2 en la imagen son las ranuras de memoria RAM DDR, utilizadas para instalar los módulos de memoria RAM."
      },
      {
        id: 3034,
        moduloId: 103,
        pregunta: "¿Qué componente se encuentra marcado con el número 3?",
        recurso: {
          tipo: "imagen",
          contenido: "/images/cienPreguntas/pregunta32.png",
          altText: "Imagen de una placa base con componentes numerados"
        },
        opciones: [
          "Puertos PCI",
          "Conectores SATA para discos duros y SSDs",
          "Conector de audio",
          "Zócalo de CPU"
        ],
        respuestaCorrecta: 1,
        explicacion: "El componente marcado con el número 3 corresponde a los conectores SATA, utilizados para conectar discos duros y unidades SSD a la placa base."
      },
      {
        id: 3035,
        moduloId: 103,
        pregunta: "¿Qué parte indica el número 4?",
        recurso: {
          tipo: "imagen",
          contenido: "/images/cienPreguntas/pregunta32.png",
          altText: "Imagen de una placa base con componentes numerados"
        },
        opciones: [
          "Fuente de alimentación",
          "Batería CMOS",
          "BIOS",
          "Chipset"
        ],
        respuestaCorrecta: 0,
        explicacion: "El número 4 en la imagen indica la fuente de alimentación, componente que proporciona energía a todos los dispositivos internos del ordenador."
      },
      {
        id: 3036,
        moduloId: 103,
        pregunta: "¿Qué funcionalidad tiene el componente 5?",
        recurso: {
          tipo: "imagen",
          contenido: "/images/cienPreguntas/pregunta32.png",
          altText: "Imagen de una placa base con componentes numerados"
        },
        opciones: [
          "Proveer sonido a altavoces externos",
          "Conectar unidades de disquete (FDD)",
          "Gestionar puertos USB",
          "Controlar ventiladores"
        ],
        respuestaCorrecta: 1,
        explicacion: "El componente 5 es el conector para unidades de disquete (FDD), un tipo de conector heredado que se utilizaba para conectar unidades de disquete de 3.5 pulgadas."
      },
      {
        id: 3037,
        moduloId: 103,
        pregunta: "¿Qué componente muestra el número 6?",
        recurso: {
          tipo: "imagen",
          contenido: "/images/cienPreguntas/pregunta32.png",
          altText: "Imagen de una placa base con componentes numerados"
        },
        opciones: [
          "Ranuras PCI para tarjetas de expansión",
          "Conectores SATA",
          "BIOS",
          "Zócalo de CPU"
        ],
        respuestaCorrecta: 2,
        explicacion: "El número 6 muestra la BIOS (Basic Input/Output System), un chip que contiene el firmware básico que inicia el hardware durante el arranque del sistema."
      },
      {
        id: 3038,
        moduloId: 103,
        pregunta: "¿Qué indican los elementos marcados con el número 7?",
        recurso: {
          tipo: "imagen",
          contenido: "/images/cienPreguntas/pregunta32.png",
          altText: "Imagen de una placa base con componentes numerados"
        },
        opciones: [
          "Proporcionar energía adicional a la CPU",
          "Conectar discos duros",
          "Puertos de red",
          "Tarjetas de expansión"
        ],
        respuestaCorrecta: 3,
        explicacion: "Los elementos marcados con el número 7 son las ranuras para tarjetas de expansión, que permiten añadir funcionalidades adicionales al ordenador como tarjetas gráficas, tarjetas de sonido, etc."
      },
      {
        id: 3039,
        moduloId: 103,
        pregunta: "¿Qué representa el componente número 8?",
        recurso: {
          tipo: "imagen",
          contenido: "/images/cienPreguntas/pregunta32.png",
          altText: "Imagen de una placa base con componentes numerados"
        },
        opciones: [
          "Conector SATA",
          "Ranura PCIe x16 para tarjetas gráficas",
          "Puerto USB",
          "Ranura PCI"
        ],
        respuestaCorrecta: 1,
        explicacion: "El componente número 8 es una ranura PCIe x16, diseñada específicamente para tarjetas gráficas. Ofrece mayor ancho de banda que las ranuras PCI estándar."
      },
      {
        id: 3040,
        moduloId: 103,
        pregunta: "¿Qué parte indica el número 9?",
        recurso: {
          tipo: "imagen",
          contenido: "/images/cienPreguntas/pregunta32.png",
          altText: "Imagen de una placa base con componentes numerados"
        },
        opciones: [
          "Puertos traseros de entrada/salida (E/S)",
          "Puertos SATA",
          "Ranuras PCI",
          "Conector de energía"
        ],
        respuestaCorrecta: 0,
        explicacion: "El número 9 indica los puertos traseros de entrada/salida (E/S), que incluyen puertos USB, Ethernet, audio, y otros conectores externos de la placa base."
      },
      {
        id: 3041,
        moduloId: 103,
        pregunta: "¿Qué componente es el número 10?",
        recurso: {
          tipo: "imagen",
          contenido: "/images/cienPreguntas/pregunta32.png",
          altText: "Imagen de una placa base con componentes numerados"
        },
        opciones: [
          "Conector de red",
          "Zócalo de CPU",
          "Puerto SATA",
          "Puerto PCI"
        ],
        respuestaCorrecta: 1,
        explicacion: "El componente número 10 es el zócalo de CPU, donde se instala el procesador. Este componente conecta la CPU con el resto de la placa base."
      },
      {
        id: 3042,
        moduloId: 103,
        pregunta: "¿Qué función cumplen los componentes número 11?",
        recurso: {
          tipo: "imagen",
          contenido: "/images/cienPreguntas/pregunta32.png",
          altText: "Imagen de una placa base con componentes numerados"
        },
        opciones: [
          "Fijar la RAM a las ranuras correspondientes",
          "Conectar discos duros",
          "Suministrar energía a la CPU",
          "Enfriar el procesador"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los componentes número 11 son los mecanismos de fijación que aseguran los módulos de memoria RAM en sus ranuras correspondientes, impidiendo que se suelten."
      },
      {
        id: 3043,
        moduloId: 103,
        pregunta: "¿Qué es la virtualización en el ámbito informático?",
        opciones: [
          "La creación de redes locales",
          "La simulación de recursos de hardware mediante software",
          "La instalación de software en el hardware físico",
          "La conexión remota a servidores externos"
        ],
        respuestaCorrecta: 1,
        explicacion: "La virtualización en el ámbito informático es la simulación de recursos de hardware mediante software, permitiendo crear múltiples entornos virtuales que funcionan independientemente sobre un mismo hardware físico."
      },
      {
        id: 3044,
        moduloId: 103,
        pregunta: "¿Cuál es una ventaja clave de la virtualización?",
        opciones: [
          "Mayor consumo energético",
          "Disminución de la seguridad",
          "Reducción de costos operativos",
          "Necesidad de más hardware"
        ],
        respuestaCorrecta: 2,
        explicacion: "Una ventaja clave de la virtualización es la reducción de costos operativos, gracias a la consolidación de múltiples servidores virtuales en menos hardware físico, menor consumo energético y mejor aprovechamiento de recursos."
      },
      {
        id: 3045,
        moduloId: 103,
        pregunta: "¿Qué componente gestiona las máquinas virtuales en un entorno virtualizado?",
        opciones: [
          "Router",
          "Firewall",
          "Hipervisor",
          "Servidor web"
        ],
        respuestaCorrecta: 2,
        explicacion: "El hipervisor es el componente que gestiona las máquinas virtuales en un entorno virtualizado. Actúa como una capa entre el hardware físico y las máquinas virtuales, asignando recursos y garantizando el aislamiento entre ellas."
      },
      {
        id: 3046,
        moduloId: 103,
        pregunta: "¿Qué tipo de hipervisor se ejecuta directamente sobre el hardware?",
        opciones: [
          "Hipervisor de tipo 1",
          "Hipervisor de tipo 2",
          "Máquina virtual",
          "Sistema operativo huésped"
        ],
        respuestaCorrecta: 0,
        explicacion: "La principal diferencia entre IPv4 e IPv6 es la longitud de la dirección: IPv4 usa direcciones de 32 bits (4 bytes) que permiten aproximadamente 4.3 mil millones de direcciones, mientras que IPv6 usa direcciones de 128 bits (16 bytes) que permiten un número prácticamente ilimitado de direcciones."
        },
        {
        id: 3094,
        moduloId: 103,
        pregunta: "¿Cuál es un beneficio de IPv6 sobre IPv4?",
        opciones: [
            "Más direcciones disponibles",
            "Mayor latencia",
            "Menor seguridad",
            "Uso de direcciones dinámicas únicamente"
        ],
        // Continuación del código anterior
      respuestaCorrecta: 0,
      explicacion: "El hipervisor de tipo 1 (o nativo) se ejecuta directamente sobre el hardware físico sin necesidad de un sistema operativo anfitrión. Ejemplos incluyen VMware ESXi, Microsoft Hyper-V Server y Citrix XenServer."
    },
    {
      id: 3047,
      moduloId: 103,
      pregunta: "¿Qué se entiende por \"máquina virtual\" (VM)?",
      opciones: [
        "Un servidor físico",
        "Un entorno de software que emula un sistema informático",
        "Un protocolo de red",
        "Un contenedor de aplicaciones"
      ],
      respuestaCorrecta: 1,
      explicacion: "Una máquina virtual (VM) es un entorno de software que emula un sistema informático completo, incluyendo hardware virtual, sistema operativo y aplicaciones, todo funcionando de manera aislada dentro de un sistema anfitrión."
    },
    {
      id: 3048,
      moduloId: 103,
      pregunta: "¿Qué es la virtualización de servidores?",
      opciones: [
        "Uso de múltiples servidores físicos",
        "Consolidación de servidores físicos en servidores virtuales",
        "Dividir un servidor en múltiples redes",
        "Aislamiento de procesos de red"
      ],
      respuestaCorrecta: 1,
      explicacion: "La virtualización de servidores es la consolidación de múltiples servidores físicos en servidores virtuales que se ejecutan en un número menor de máquinas físicas, optimizando así el uso de recursos y reduciendo costos."
    },
    {
      id: 3049,
      moduloId: 103,
      pregunta: "¿Cuál de los siguientes NO es un beneficio de la virtualización?",
      opciones: [
        "Mayor flexibilidad",
        "Mejora en la recuperación ante desastres",
        "Aumento del consumo energético",
        "Ahorro de espacio físico"
      ],
      respuestaCorrecta: 2,
      explicacion: "El aumento del consumo energético no es un beneficio de la virtualización; de hecho, uno de sus principales beneficios es reducir el consumo energético al utilizar menos hardware físico para realizar el mismo trabajo."
    },
    {
      id: 3050,
      moduloId: 103,
      pregunta: "¿Qué tipo de virtualización permite ejecutar un sistema operativo distinto sobre otro?",
      opciones: [
        "Virtualización de almacenamiento",
        "Virtualización de escritorio",
        "Virtualización de red",
        "Virtualización de aplicaciones"
      ],
      respuestaCorrecta: 1,
      explicacion: "La virtualización de escritorio permite ejecutar un sistema operativo completo diferente sobre otro sistema operativo base. Esto facilita el acceso remoto a entornos de trabajo y la ejecución de sistemas operativos incompatibles con el hardware actual."
    },
    {
      id: 3051,
      moduloId: 103,
      pregunta: "¿Qué ventaja ofrece la virtualización para pruebas de software?",
      opciones: [
        "Ejecución en hardware especializado",
        "Creación rápida de entornos aislados",
        "Mayor dependencia del hardware",
        "Instalaciones permanentes"
      ],
      respuestaCorrecta: 1,
      explicacion: "La virtualización ofrece como ventaja para pruebas de software la posibilidad de crear rápidamente entornos aislados, lo que permite probar aplicaciones en diferentes configuraciones sin afectar al sistema principal y poder revertir cambios fácilmente."
    },
    {
      id: 3052,
      moduloId: 103,
      pregunta: "¿Qué tecnología permite ejecutar aplicaciones en entornos virtuales sin crear una máquina virtual completa?",
      opciones: [
        "Hipervisor de tipo 1",
        "Contenedores",
        "Virtualización de red",
        "Emuladores"
      ],
      respuestaCorrecta: 1,
      explicacion: "Los contenedores (como Docker o Kubernetes) permiten ejecutar aplicaciones en entornos virtuales aislados sin necesidad de crear una máquina virtual completa, compartiendo el kernel del sistema operativo anfitrión para mayor eficiencia."
    },
    {
      id: 3053,
      moduloId: 103,
      pregunta: "¿Qué describe mejor un entorno \"sandbox\" en virtualización?",
      opciones: [
        "Un servidor en la nube",
        "Un entorno seguro para pruebas sin afectar el sistema principal",
        "Un software de monitoreo de red",
        "Un entorno de producción"
      ],
      respuestaCorrecta: 1,
      explicacion: "Un entorno \"sandbox\" en virtualización es un entorno seguro y aislado donde se pueden realizar pruebas, ejecutar código potencialmente peligroso o experimentar con configuraciones sin riesgo de afectar al sistema principal."
    },
    {
      id: 3054,
      moduloId: 103,
      pregunta: "¿Qué protocolo facilita la conexión remota a máquinas virtuales?",
      opciones: [
        "HTTP",
        "RDP (Remote Desktop Protocol)",
        "FTP",
        "SSH"
      ],
      respuestaCorrecta: 1,
      explicacion: "El protocolo RDP (Remote Desktop Protocol) facilita la conexión remota a máquinas virtuales, especialmente en entornos Windows. Permite a los usuarios interactuar con el escritorio de la máquina virtual como si estuvieran sentados frente a ella."
    },
    {
      id: 3055,
      moduloId: 103,
      pregunta: "¿Qué factor es crítico para la eficiencia en entornos virtualizados?",
      opciones: [
        "Velocidad del disco duro",
        "Cantidad de memoria RAM disponible",
        "Número de usuarios",
        "Color del gabinete del servidor"
      ],
      respuestaCorrecta: 1,
      explicacion: "La cantidad de memoria RAM disponible es un factor crítico para la eficiencia en entornos virtualizados, ya que cada máquina virtual requiere su propia asignación de memoria para funcionar correctamente."
    },
    {
      id: 3056,
      moduloId: 103,
      pregunta: "¿Qué es la virtualización en la nube?",
      opciones: [
        "Almacenar datos localmente",
        "Ejecutar máquinas virtuales en servidores de terceros a través de Internet",
        "Descargar aplicaciones",
        "Configurar redes privadas"
      ],
      respuestaCorrecta: 1,
      explicacion: "La virtualización en la nube consiste en ejecutar máquinas virtuales en servidores de terceros (proveedores de servicios en la nube) a través de Internet, eliminando la necesidad de mantener hardware propio."
    },
    {
      id: 3057,
      moduloId: 103,
      pregunta: "¿Qué plataforma de virtualización es conocida por su código abierto?",
      opciones: [
        "VMware vSphere",
        "Microsoft Hyper-V",
        "Oracle VirtualBox",
        "Citrix XenServer"
      ],
      respuestaCorrecta: 2,
      explicacion: "Oracle VirtualBox es conocida por ser una plataforma de virtualización de código abierto (bajo licencia GPL), lo que permite a cualquiera acceder, modificar y distribuir su código fuente."
    },
    {
      id: 3058,
      moduloId: 103,
      pregunta: "¿Cuál es la función principal de la Unidad Lógica y Aritmética (ALU)?",
      opciones: [
        "Almacenar datos a largo plazo",
        "Realizar operaciones matemáticas y lógicas",
        "Controlar el flujo de datos de red",
        "Ejecutar aplicaciones de usuario"
      ],
      respuestaCorrecta: 1,
      explicacion: "La función principal de la Unidad Lógica y Aritmética (ALU) es realizar operaciones matemáticas (como suma, resta, multiplicación y división) y operaciones lógicas (como AND, OR y NOT) dentro del procesador."
    },
    {
      id: 3059,
      moduloId: 103,
      pregunta: "¿Qué operaciones realiza la ALU además de sumas y restas?",
      opciones: [
        "Operaciones lógicas como AND, OR y NOT",
        "Gestión de almacenamiento",
        "Procesos de red",
        "Gestión de entradas y salidas"
      ],
      respuestaCorrecta: 0,
      explicacion: "Además de sumas y restas, la ALU realiza operaciones lógicas como AND, OR y NOT, que son fundamentales para la manipulación de datos a nivel de bits y la toma de decisiones dentro del procesador."
    },
    {
      id: 3060,
      moduloId: 103,
      pregunta: "¿Qué tipo de memoria es volátil?",
      opciones: [
        "ROM",
        "RAM",
        "SSD",
        "Disco duro"
      ],
      respuestaCorrecta: 1,
      explicacion: "La memoria RAM (Random Access Memory) es volátil, lo que significa que pierde toda la información almacenada cuando se corta la alimentación eléctrica. Por eso se usa como memoria temporal durante la ejecución de programas."
    },
    {
      id: 3061,
      moduloId: 103,
      pregunta: "¿Qué tipo de memoria es utilizada para almacenar el firmware del sistema?",
      opciones: [
        "RAM",
        "ROM",
        "SSD",
        "Caché"
      ],
      respuestaCorrecta: 1,
      explicacion: "La memoria ROM (Read-Only Memory) se utiliza para almacenar el firmware del sistema, como la BIOS o UEFI. Es no volátil y retiene la información incluso sin alimentación eléctrica."
    },
    {
      id: 3062,
      moduloId: 103,
      pregunta: "¿Qué memoria es más rápida pero tiene menor capacidad?",
      opciones: [
        "Disco duro",
        "Memoria caché",
        "RAM",
        "SSD"
      ],
      respuestaCorrecta: 1,
      explicacion: "La memoria caché es más rápida que otros tipos de memoria pero tiene menor capacidad. Actúa como intermediaria entre la CPU y la RAM para acelerar el acceso a datos frecuentemente utilizados."
    },
    {
      id: 3063,
      moduloId: 103,
      pregunta: "¿Qué tipo de memoria se usa para el almacenamiento a largo plazo?",
      opciones: [
        "ROM",
        "RAM",
        "HDD",
        "Memoria caché"
      ],
      respuestaCorrecta: 2,
      explicacion: "Los discos duros (HDD) se utilizan principalmente para el almacenamiento a largo plazo de datos, ya que son no volátiles y mantienen la información incluso cuando el equipo está apagado."
    },
    {
      id: 3064,
      moduloId: 103,
      pregunta: "¿Cuál es una ventaja de los SSD sobre los HDD?",
      opciones: [
        "Mayor velocidad de lectura y escritura",
        "Mayor capacidad de almacenamiento",
        "Menor costo por GB",
        "Más partes móviles"
      ],
      respuestaCorrecta: 0,
      explicacion: "Una ventaja principal de los SSD (Solid State Drives) sobre los HDD (Hard Disk Drives) es su mayor velocidad de lectura y escritura, lo que permite tiempos de arranque más rápidos y mejor rendimiento general del sistema."
    },
    {
      id: 3065,
      moduloId: 103,
      pregunta: "¿Qué característica distingue a los discos duros HDD?",
      opciones: [
        "Almacenamiento basado en memoria flash",
        "Uso de platos giratorios y cabezales de lectura/escritura",
        "Tiempo de acceso ultra rápido",
        "Mayor resistencia a golpes"
      ],
      respuestaCorrecta: 1,
      explicacion: "Los discos duros HDD se distinguen por usar platos giratorios magnéticos y cabezales de lectura/escritura mecánicos para almacenar y acceder a los datos, a diferencia de los SSD que utilizan memoria flash sin partes móviles."
    },
    {
      id: 3066,
      moduloId: 103,
      pregunta: "¿Cuál es el principal factor que hace a los HDD más económicos que los SSD?",
      opciones: [
        "Capacidad limitada",
        "Tecnología de fabricación más simple y madura",
        "Mayor velocidad",
        "Más eficiencia energética"
      ],
      respuestaCorrecta: 1,
      explicacion: "El principal factor que hace a los HDD más económicos que los SSD es su tecnología de fabricación más simple y madura, que lleva décadas en el mercado, mientras que la tecnología de estado sólido es más compleja y costosa de producir."
    },
    {
      id: 3067,
      moduloId: 103,
      pregunta: "¿Qué disco es más adecuado para almacenar grandes volúmenes de datos de bajo acceso?",
      opciones: [
        "SSD",
        "HDD",
        "Memoria RAM",
        "Disco óptico"
      ],
      respuestaCorrecta: 1,
      explicacion: "Los discos duros HDD son más adecuados para almacenar grandes volúmenes de datos de bajo acceso debido a su menor costo por GB, aunque sean más lentos que los SSD, lo que los hace ideales para archivos que no necesitan acceso frecuente o rápido."
    },
    {
      id: 3068,
      moduloId: 103,
      pregunta: "¿Cuál de las siguientes opciones tiene un menor tiempo de arranque del sistema operativo?",
      opciones: [
        "HDD",
        "SSD",
        "Disco óptico",
        "USB 2.0"
      ],
      respuestaCorrecta: 1,
      explicacion: "Los SSD (Solid State Drives) ofrecen un menor tiempo de arranque del sistema operativo debido a su acceso aleatorio más rápido y ausencia de latencia mecánica, lo que permite cargar archivos del sistema mucho más rápido que con un HDD."
    },
    {
      id: 3069,
      moduloId: 103,
      pregunta: "¿Qué factor influye directamente en la vida útil de un SSD?",
      opciones: [
        "Número de ciclos de lectura/escritura",
        "Velocidad del ventilador",
        "Capacidad de almacenamiento total",
        "Color de la carcasa"
      ],
      respuestaCorrecta: 0,
      explicacion: "El número de ciclos de lectura/escritura influye directamente en la vida útil de un SSD. Cada celda de memoria flash puede soportar un número limitado de escrituras antes de fallar, lo que afecta a la longevidad total del dispositivo."
    },
    {
      id: 3070,
      moduloId: 103,
      pregunta: "¿Qué tipo de disco es más resistente a golpes y caídas?",
      opciones: [
        "HDD",
        "SSD",
        "Disco óptico",
        "Ninguno"
      ],
      respuestaCorrecta: 1,
      explicacion: "Los SSD son más resistentes a golpes y caídas porque no tienen partes móviles, a diferencia de los HDD que tienen platos giratorios y cabezales que pueden dañarse con los impactos."
    },
    {
      id: 3071,
      moduloId: 103,
      pregunta: "¿Qué tecnología permite a un SSD ser más eficiente energéticamente que un HDD?",
      opciones: [
        "Memoria flash NAND",
        "Platos giratorios",
        "Cabezal de lectura",
        "Tecnología magnética"
      ],
      respuestaCorrecta: 0,
      explicacion: "La tecnología de memoria flash NAND utilizada en los SSD permite un consumo energético mucho menor que los HDD, ya que no requiere mover partes mecánicas (como platos giratorios o cabezales) para leer o escribir datos."
    },
    {
      id: 3072,
      moduloId: 103,
      pregunta: "¿Qué disco es recomendable para sistemas operativos y aplicaciones que requieren alta velocidad?",
      opciones: [
        "HDD",
        "SSD",
        "Disco óptico",
        "Memoria RAM"
      ],
      respuestaCorrecta: 1,
      explicacion: "Los SSD son recomendables para sistemas operativos y aplicaciones que requieren alta velocidad, ya que ofrecen tiempos de acceso y transferencia mucho más rápidos que los HDD tradicionales, mejorando notablemente el rendimiento general del sistema."
    },
    {
      id: 3073,
      moduloId: 103,
      pregunta: "¿Qué es el CMD en Windows?",
      opciones: [
        "Una interfaz gráfica de usuario",
        "Un intérprete de comandos",
        "Un procesador de texto",
        "Un gestor de archivos"
      ],
      respuestaCorrecta: 1,
      explicacion: "CMD (Command Prompt) en Windows es un intérprete de comandos que permite a los usuarios interactuar con el sistema operativo mediante comandos de texto en lugar de la interfaz gráfica."
    },
    {
      id: 3074,
      moduloId: 103,
      pregunta: "¿Qué comando se utiliza para ver la dirección IP en CMD?",
      opciones: [
        "ipconfig",
        "ping",
        "dir",
        "netstat"
      ],
      respuestaCorrecta: 0,
      explicacion: "El comando 'ipconfig' se utiliza en CMD para mostrar información sobre la configuración de red del sistema, incluyendo direcciones IP, máscaras de subred y puertas de enlace."
    },
    {
      id: 3075,
      moduloId: 103,
      pregunta: "¿Qué comando sirve para verificar la conectividad a una dirección en CMD?",
      opciones: [
        "ping",
        "tracert",
        "netsh",
        "path"
      ],
      respuestaCorrecta: 0,
      explicacion: "El comando 'ping' se utiliza para verificar la conectividad entre el equipo local y un destino específico (como un servidor o sitio web) enviando paquetes de datos y midiendo el tiempo de respuesta."
    },
    {
      id: 3076,
      moduloId: 103,
      pregunta: "¿Qué comando se usa para listar archivos y carpetas en el directorio actual?",
      opciones: [
        "cd",
        "dir",
        "copy",
        "del"
      ],
      respuestaCorrecta: 1,
      explicacion: "El comando 'dir' (directory) se usa para listar los archivos y carpetas contenidos en el directorio actual o en una ruta específica en el símbolo del sistema de Windows."
    },
    {
      id: 3077,
      moduloId: 103,
      pregunta: "¿Qué comando se usa para cambiar de directorio en CMD?",
      opciones: [
        "chdir",
        "cd",
        "mkdir",
        "rmdir"
      ],
      respuestaCorrecta: 1,
      explicacion: "El comando 'cd' (change directory) se usa para cambiar el directorio actual en el símbolo del sistema de Windows. Por ejemplo, 'cd Documents' cambia al directorio Documents."
    },
    {
      id: 3078,
      moduloId: 103,
      pregunta: "¿Cómo se accede a la página de Servicios en Windows?",
      opciones: [
        "Ejecutando services.msc",
        "Abriendo el Administrador de Tareas",
        "Ejecutando taskmgr",
        "Desde el Explorador de Archivos"
      ],
      respuestaCorrecta: 0,
      explicacion: "Para acceder a la página de Servicios en Windows, se debe ejecutar 'services.msc' en el cuadro de diálogo Ejecutar (Win+R) o en el menú Inicio. Esta herramienta permite administrar los servicios del sistema."
    },
    {
      id: 3079,
      moduloId: 103,
      pregunta: "¿Qué estado indica que un servicio de Windows se está ejecutando?",
      opciones: [
        "Detenido",
        "En ejecución",
        "Pausado",
        "Deshabilitado"
      ],
      respuestaCorrecta: 1,
      explicacion: "El estado 'En ejecución' indica que un servicio de Windows está activo y funcionando correctamente. Este estado se muestra en la columna de Estado del Administrador de servicios."
    },
    {
      id: 3080,
      moduloId: 103,
      pregunta: "¿Qué tipo de inicio permite que un servicio se ejecute al arrancar el sistema?",
      opciones: [
        "Manual",
        "Automático",
        "Deshabilitado",
        "Diferido"
      ],
      respuestaCorrecta: 1,
      explicacion: "El tipo de inicio 'Automático' permite que un servicio se ejecute inmediatamente al arrancar el sistema, sin intervención del usuario. Es útil para servicios esenciales o que necesitan estar disponibles desde el inicio."
    },
    {
      id: 3081,
      moduloId: 103,
      pregunta: "¿Qué herramienta de Windows muestra el uso de CPU y memoria en tiempo real?",
      opciones: [
        "Panel de Control",
        "Administrador de Tareas",
        "Explorador de Archivos",
        "CMD"
      ],
      respuestaCorrecta: 1,
      explicacion: "El Administrador de Tareas de Windows muestra el uso de CPU, memoria, disco y red en tiempo real, permitiendo a los usuarios monitorear el rendimiento del sistema y cerrar aplicaciones que no responden."
    },
    {
      id: 3082,
      moduloId: 103,
      pregunta: "¿Qué pestaña del Administrador de Tareas muestra los procesos en ejecución?",
      opciones: [
        "Procesos",
        "Rendimiento",
        "Historial de aplicaciones",
        "Usuarios"
      ],
      respuestaCorrecta: 0,
      explicacion: "La pestaña 'Procesos' del Administrador de Tareas muestra todos los procesos en ejecución, incluyendo aplicaciones, procesos en segundo plano y procesos del sistema, junto con su uso de recursos."
    },
    {
      id: 3083,
      moduloId: 103,
      pregunta: "¿Qué unidad se utiliza para medir el uso de la CPU en el Administrador de Tareas?",
      opciones: [
        "MB",
        "GHz",
        "% (porcentaje)",
        "GB"
      ],
      respuestaCorrecta: 2,
      explicacion: "El uso de la CPU en el Administrador de Tareas se mide en porcentaje (%), donde 0% indica que la CPU está inactiva y 100% indica que está completamente utilizada."
    },
    {
      id: 3084,
      moduloId: 103,
      pregunta: "¿Qué representa el uso de memoria en el Administrador de Tareas?",
      opciones: [
        "La cantidad de memoria virtual disponible",
        "El total de memoria física utilizada",
        "El uso del disco duro",
        "La capacidad máxima de la RAM"
      ],
      respuestaCorrecta: 1,
      explicacion: "El uso de memoria en el Administrador de Tareas representa el total de memoria física (RAM) utilizada actualmente por el sistema operativo y las aplicaciones en ejecución."
    },
    {
      id: 3085,
      moduloId: 103,
      pregunta: "¿Qué acción se puede realizar desde el Administrador de Tareas para cerrar un programa que no responde?",
      opciones: [
        "Ejecutar nuevo proceso",
        "Finalizar tarea",
        "Analizar cadena de espera",
        "Crear acceso directo"
      ],
      respuestaCorrecta: 1,
      explicacion: "La acción 'Finalizar tarea' en el Administrador de Tareas permite cerrar forzadamente un programa que no responde o se ha bloqueado, terminando inmediatamente su proceso."
    },
    {
      id: 3086,
      moduloId: 103,
      pregunta: "¿Qué pestaña del Administrador de Tareas permite ver el uso de red?",
      opciones: [
        "Procesos",
        "Rendimiento",
        "Usuarios",
        "Servicios"
      ],
      respuestaCorrecta: 1,
      explicacion: "La pestaña 'Rendimiento' del Administrador de Tareas permite ver el uso de red, junto con otras métricas de rendimiento como CPU, memoria y disco, mostrando gráficos en tiempo real."
    },
    {
      id: 3087,
      moduloId: 103,
      pregunta: "¿Qué opción del Administrador de Tareas se utiliza para ver el impacto de las aplicaciones al inicio?",
      opciones: [
        "Inicio",
        "Procesos",
        "Servicios",
        "Detalles"
      ],
      respuestaCorrecta: 0,
      explicacion: "La pestaña 'Inicio' del Administrador de Tareas muestra las aplicaciones que se inician automáticamente cuando Windows arranca y su impacto en el tiempo de inicio del sistema."
    },
    {
      id: 3088,
      moduloId: 103,
      pregunta: "¿Cuál es la función principal de la máscara de red?",
      opciones: [
        "Determinar la dirección MAC de un dispositivo",
        "Identificar la parte de red y de host en una dirección IP",
        "Asignar direcciones dinámicas",
        "Establecer el rango de puertos abiertos"
      ],
      respuestaCorrecta: 1,
      explicacion: "La función principal de la máscara de red es identificar qué parte de una dirección IP corresponde a la red (network ID) y qué parte corresponde al host, permitiendo así la segmentación y el enrutamiento correcto de las redes IP."
    },
    {
      id: 3089,
      moduloId: 103,
      pregunta: "¿Qué máscara de red corresponde a /24?",
      opciones: [
        "255.0.0.0",
        "255.255.0.0",
        "255.255.255.0",
        "255.255.255.255"
      ],
      respuestaCorrecta: 2,
      explicacion: "La máscara de red /24 corresponde a 255.255.255.0, lo que significa que los primeros 24 bits (3 octetos) identifican la red y los últimos 8 bits (1 octeto) identifican el host dentro de esa red."
    },
    {
      id: 3090,
      moduloId: 103,
      pregunta: "¿Cuál de las siguientes máscaras permite más hosts?",
      opciones: [
        "255.255.255.0",
        "255.255.0.0",
        "255.255.255.128",
        "255.255.255.192"
      ],
      respuestaCorrecta: 1,
      explicacion: "La máscara 255.255.0.0 (/16) permite más hosts porque destina 16 bits para identificar hosts (2^16 - 2 = 65.534 hosts posibles), mientras que las otras máscaras reservan menos bits para hosts."
    },
    {
      id: 3091,
      moduloId: 103,
      pregunta: "¿Cuántos bits tiene una dirección IPv4?",
      opciones: [
        "32",
        "64",
        "128",
        "256"
      ],
      respuestaCorrecta: 0,
      explicacion: "Una dirección IPv4 tiene 32 bits, divididos en cuatro octetos (bloques de 8 bits) separados por puntos. Cada octeto puede representar un valor entre 0 y 255."
    },
    {
      id: 3092,
      moduloId: 103,
      pregunta: "¿Cuál es un ejemplo válido de una dirección IPv4?",
      opciones: [
        "192.168.1.1",
        "2001:0db8:85a3:0000:0000:8a2e:0370:7334",
        "300.168.1.1",
        "192.168.1"
      ],
      respuestaCorrecta: 0,
      explicacion: "192.168.1.1 es un ejemplo válido de una dirección IPv4. Contiene cuatro octetos separados por puntos, y cada octeto está dentro del rango válido de 0-255."
    },
    {
      id: 3093,
      moduloId: 103,
      pregunta: "¿Cuál es la principal diferencia entre IPv4 e IPv6?",
      opciones: [
        "La longitud de la dirección",
        "La velocidad de transmisión",
        "El tipo de protocolo de transporte",
        "La cantidad de puertos disponibles"
      ],
        respuestaCorrecta: 0,
        explicacion: "Un beneficio clave de IPv6 sobre IPv4 es la disponibilidad de más direcciones (2^128 frente a 2^32), lo que resuelve el problema de agotamiento de direcciones IPv4 y permite asignar direcciones únicas a un número prácticamente ilimitado de dispositivos."
        },
        {
        id: 3095,
        moduloId: 103,
        pregunta: "¿Qué es una dirección de broadcast?",
        opciones: [
            "La dirección del primer host de la red",
            "La última dirección válida de la red",
            "La dirección del router por defecto",
            "La dirección asignada al DNS"
        ],
        respuestaCorrecta: 1,
        explicacion: "Una dirección de broadcast es la última dirección válida de una red y se utiliza para enviar paquetes a todos los dispositivos de esa red simultáneamente. En una red IPv4, normalmente termina en .255 (para una red /24)."
        },
        {
        id: 3096,
        moduloId: 103,
        pregunta: "¿Cuál es la dirección de broadcast para la red 192.168.1.0/24?",
        opciones: [
            "192.168.1.255",
            "192.168.1.0",
            "192.168.1.1",
            "192.168.1.254"
        ],
        respuestaCorrecta: 0,
        explicacion: "La dirección de broadcast para la red 192.168.1.0/24 es 192.168.1.255. Esta dirección se utiliza para enviar paquetes a todos los dispositivos dentro de esa red."
        },
        {
        id: 3097,
        moduloId: 103,
        pregunta: "¿Qué define una subred?",
        opciones: [
            "Un grupo de dispositivos en diferentes redes",
            "Un segmento de red que comparte la misma máscara de red",
            "Una dirección IP asignada a un host",
            "Un protocolo de enrutamiento"
        ],
        respuestaCorrecta: 1,
        explicacion: "Una subred es un segmento de red que comparte la misma máscara de red y la misma dirección de red. Es una subdivisión lógica de una red IP más grande para mejorar el rendimiento y la seguridad."
        },
        {
        id: 3098,
        moduloId: 103,
        pregunta: "¿Cuántas subredes se pueden crear usando una máscara /26?",
        opciones: [
            "2",
            "4",
            "8",
            "16"
        ],
        respuestaCorrecta: 1,
        explicacion: "Usando una máscara /26 para subdividir una red /24, se pueden crear 4 subredes. Esto es porque se toman 2 bits adicionales para la parte de red (2^2 = 4)."
        },
        {
        id: 3099,
        moduloId: 103,
        pregunta: "¿Qué máscara se usa para crear 4 subredes de igual tamaño a partir de una red /24?",
        opciones: [
            "/25",
            "/26",
            "/27",
            "/28"
        ],
        respuestaCorrecta: 1,
        explicacion: "Para crear 4 subredes de igual tamaño a partir de una red /24, se usa la máscara /26. Esto añade 2 bits a la porción de red (2^2 = 4 subredes) y deja 6 bits para hosts (2^6 - 2 = 62 hosts por subred)."
        },
        {
        id: 3100,
        moduloId: 103,
        pregunta: "¿Por qué es importante que un estudiante de DAM (Desarrollo de Aplicaciones Multiplataforma) y DAW (Desarrollo de Aplicaciones Web) comprenda el funcionamiento de las direcciones IP?",
        opciones: [
            "Para diseñar componentes de hardware y configurar redes físicas.",
            "Para gestionar bases de datos relacionales.",
            "Para asegurar la correcta comunicación entre aplicaciones, servidores y redes durante el desarrollo y despliegue de software.",
            "Para crear interfaces gráficas de usuario (GUI)."
        ],
        respuestaCorrecta: 2,
        explicacion: "Comprender el funcionamiento de las direcciones IP es importante para estudiantes de DAM y DAW porque necesitan asegurar la correcta comunicación entre aplicaciones, servidores y redes durante el desarrollo y despliegue de software. Esto es fundamental para crear aplicaciones que funcionen correctamente en entornos conectados a Internet."
        }
    ]
    };

    export default moduloCienPreguntas;