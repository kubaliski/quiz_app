/**
 * Datos del módulo de Máquinas Virtuales perteneciente a la asignatura de Entornos de Desarrollo.
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
 *
 * @example
 * // Importar el módulo de Máquinas Virtuales
 * import moduloMaquinasVirtuales from '@data/modulos/maquinasVirtuales';
 *
 * function PreguntasAleatorias() {
 *   // Seleccionar 5 preguntas aleatorias del módulo
 *   const preguntasAleatorias = moduloMaquinasVirtuales.preguntas
 *     .sort(() => 0.5 - Math.random())
 *     .slice(0, 5);
 *
 *   return (
 *     <div>
 *       <h2>{moduloMaquinasVirtuales.nombre}</h2>
 *       {preguntasAleatorias.map(pregunta => (
 *         <QuestionCard key={pregunta.id} pregunta={pregunta} />
 *       ))}
 *     </div>
 *   );
 * }
 */
export const moduloMaquinasVirtuales = {
  id: 502,
  nombre: "Máquinas Virtuales",
  esExamen: false,
  asignaturaId: 5,
  descripcion:
    "Conceptos básicos y avanzados sobre máquinas virtuales, tipos, herramientas y formatos de archivos de máquinas virtuales.",
  preguntas: [
    {
      id: 5201,
      moduloId: 502,
      pregunta:
        "¿Cuál es el principal propósito de una máquina virtual de hardware?",
      opciones: [
        "Ejecutar un único proceso en un entorno aislado.",
        "Simular un sistema operativo completo en un entorno virtual.",
        "Ofrecer compatibilidad con múltiples lenguajes de programación.",
        "Sustituir el sistema operativo anfitrión.",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Una máquina virtual de hardware (también llamada máquina virtual de sistema o Tipo 2) está diseñada para simular un sistema operativo completo en un entorno virtual. Esto permite ejecutar un sistema operativo como invitado dentro de otro sistema operativo anfitrión, con su propio kernel, sistema de archivos y aplicaciones, todo ello funcionando como si estuviera en hardware real dedicado.",
    },
    {
      id: 5202,
      moduloId: 502,
      pregunta:
        "¿Qué herramienta se utiliza para gestionar máquinas virtuales en Windows que permite crear entornos virtualizados?",
      opciones: ["Hyper-V", "Docker", "Kubernetes", "WSL"],
      respuestaCorrecta: 0,
      explicacion:
        "Hyper-V es la plataforma de virtualización nativa de Microsoft para Windows. Permite crear y administrar máquinas virtuales en sistemas Windows, especialmente en versiones profesionales, empresariales y de servidor. A diferencia de Docker o Kubernetes (que se centran en la contenerización) o WSL (que es específicamente para ejecutar Linux en Windows), Hyper-V está diseñado para crear máquinas virtuales completas con sistemas operativos independientes.",
    },
    {
      id: 5203,
      moduloId: 502,
      pregunta:
        "¿Cuál es la diferencia principal entre un archivo VDI y un archivo OVA en el contexto de máquinas virtuales?",
      opciones: [
        "Un VDI es un paquete completo de una máquina virtual, mientras que un OVA solo contiene el disco duro virtual.",
        "Un OVA incluye una máquina virtual completa, mientras que un VDI solo contiene el disco duro virtual.",
        "Un VDI solo es compatible con VMware, mientras que un OVA solo funciona en VirtualBox.",
        "No existe ninguna diferencia entre VDI y OVA.",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Un archivo VDI (Virtual Disk Image) es un formato de archivo utilizado principalmente por VirtualBox que contiene únicamente el disco duro virtual de una máquina virtual. Por otro lado, un archivo OVA (Open Virtualization Archive) es un formato de distribución que encapsula todos los componentes necesarios para una máquina virtual completa, incluyendo el disco duro, la configuración de hardware virtual, y otras especificaciones. El OVA facilita la portabilidad y distribución de máquinas virtuales completas.",
    },
    {
      id: 5204,
      moduloId: 502,
      pregunta:
        "¿Cuál es la principal función de una máquina virtual de proceso?",
      opciones: [
        "Ejecutar un sistema operativo completo en un entorno virtual.",
        "Proveer un entorno aislado para ejecutar un único proceso o aplicación.",
        "Facilitar la gestión de múltiples sistemas operativos en un solo hardware.",
        "Emular la interfaz de un sistema operativo moderno.",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Una máquina virtual de proceso (también conocida como máquina virtual de aplicación o Tipo 1) está diseñada para proporcionar un entorno aislado donde se ejecuta un único proceso o aplicación, no un sistema operativo completo. Este tipo de máquina virtual actúa como una capa intermedia entre la aplicación y el sistema operativo subyacente, proporcionando abstracción y portabilidad para la aplicación, independientemente del sistema operativo o hardware sobre el que se ejecute.",
    },
    {
      id: 5205,
      moduloId: 502,
      pregunta:
        "¿Cuál de los siguientes es un ejemplo de máquina virtual de proceso?",
      opciones: [
        "VirtualBox",
        "Hyper-V",
        "Java Virtual Machine (JVM)",
        "VMware ESXi",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "La Java Virtual Machine (JVM) es un ejemplo clásico de máquina virtual de proceso. A diferencia de VirtualBox, Hyper-V y VMware ESXi, que son hipervisores para crear máquinas virtuales de hardware (donde se ejecutan sistemas operativos completos), la JVM proporciona un entorno de ejecución aislado específicamente para aplicaciones Java. La JVM interpreta el bytecode de Java y lo ejecuta en diferentes plataformas, proporcionando portabilidad a las aplicaciones Java.",
    },
    // {
    //   id: 5206,
    //   moduloId: 502,
    //   pregunta:
    //     "¿Qué significa el término 'hipervisor' en el contexto de la virtualización?",
    //   opciones: [
    //     "Un software especializado que permite ejecutar código de bajo nivel",
    //     "Un hardware diseñado específicamente para virtualización",
    //     "El componente que permite que múltiples máquinas virtuales compartan recursos físicos",
    //     "Un sistema operativo optimizado para entornos virtuales",
    //   ],
    //   respuestaCorrecta: 2,
    //   explicacion:
    //     "Un hipervisor es el componente fundamental de la virtualización que permite crear y ejecutar múltiples máquinas virtuales en un solo sistema físico. Actúa como una capa intermediaria entre el hardware físico y las máquinas virtuales, gestionando y asignando los recursos del sistema (CPU, memoria, almacenamiento, red) entre las diferentes máquinas virtuales. Los hipervisores garantizan el aislamiento entre las VMs mientras comparten eficientemente los recursos físicos subyacentes.",
    // },
    // {
    //   id: 5207,
    //   moduloId: 502,
    //   pregunta: "¿Cuál es la diferencia entre hipervisores Tipo 1 y Tipo 2?",
    //   opciones: [
    //     "Los Tipo 1 se instalan directamente sobre el hardware, los Tipo 2 se ejecutan sobre un sistema operativo",
    //     "Los Tipo 1 son para uso personal, los Tipo 2 son para entornos empresariales",
    //     "Los Tipo 1 solo soportan Linux, los Tipo 2 soportan Windows",
    //     "Los Tipo 1 son más lentos que los Tipo 2",
    //   ],
    //   respuestaCorrecta: 0,
    //   explicacion:
    //     "La principal diferencia entre hipervisores Tipo 1 y Tipo 2 radica en su instalación y ejecución. Los hipervisores Tipo 1 (nativos o bare-metal) se instalan y ejecutan directamente sobre el hardware físico, sin necesidad de un sistema operativo anfitrión, lo que los hace más eficientes y seguros, ideales para entornos de servidores. Los hipervisores Tipo 2 (hosted) se ejecutan como una aplicación dentro de un sistema operativo convencional, siendo más accesibles para uso personal pero con menor rendimiento.",
    // },
    // {
    //   id: 5208,
    //   moduloId: 502,
    //   pregunta: "¿Cuál de las siguientes es una ventaja de la virtualización?",
    //   opciones: [
    //     "Reducción del consumo energético y mejor aprovechamiento del hardware",
    //     "Mayor velocidad de ejecución que en hardware nativo",
    //     "Eliminación de la necesidad de hardware físico",
    //     "Simplificación de la arquitectura de red",
    //   ],
    //   respuestaCorrecta: 0,
    //   explicacion:
    //     "Una de las principales ventajas de la virtualización es la reducción del consumo energético y mejor aprovechamiento del hardware. Al consolidar múltiples servidores virtuales en una menor cantidad de servidores físicos, se reduce el número de equipos necesarios, lo que disminuye los costos de hardware, espacio, refrigeración y consumo eléctrico. Esto también contribuye a una mayor eficiencia energética y menor impacto ambiental, además de optimizar la utilización de recursos que de otra manera estarían infrautilizados.",
    // },
    // {
    //   id: 5209,
    //   moduloId: 502,
    //   pregunta: "¿Qué es la paravirtualización?",
    //   opciones: [
    //     "Una técnica para virtualizar solo parte del sistema operativo",
    //     "Un método donde el sistema operativo invitado es modificado para funcionar con el hipervisor",
    //     "La capacidad de una máquina virtual para funcionar en cualquier hardware",
    //     "Un tipo de virtualización exclusivo para aplicaciones gráficas",
    //   ],
    //   respuestaCorrecta: 1,
    //   explicacion:
    //     "La paravirtualización es una técnica de virtualización donde el sistema operativo invitado es modificado para ser consciente de que está siendo virtualizado y colaborar con el hipervisor. En lugar de que el hipervisor simule completamente el hardware (virtualización completa), en la paravirtualización el sistema operativo invitado se comunica directamente con el hipervisor mediante APIs específicas, lo que puede mejorar el rendimiento al eliminar la necesidad de algunas capas de emulación de hardware.",
    // },
    // {
    //   id: 5210,
    //   moduloId: 502,
    //   pregunta:
    //     "¿Qué tecnología permite que una máquina virtual acceda directamente al hardware sin pasar por el hipervisor?",
    //   opciones: [
    //     "PCI Passthrough",
    //     "Virtual Direct Access",
    //     "Hardware Emulation",
    //     "Direct Memory Access",
    //   ],
    //   respuestaCorrecta: 0,
    //   explicacion:
    //     "PCI Passthrough (también conocido como Device Passthrough o VT-d/IOMMU) es una tecnología que permite que una máquina virtual tenga acceso directo y exclusivo a un dispositivo de hardware PCI/PCIe del host, como una tarjeta gráfica o de red. Esto evita la virtualización de ese dispositivo específico, eliminando la sobrecarga del hipervisor para ese componente y proporcionando rendimiento nativo. Es especialmente útil para aplicaciones que requieren alto rendimiento gráfico o de E/S.",
    // },
    // {
    //   id: 5211,
    //   moduloId: 502,
    //   pregunta:
    //     "¿Qué permite la tecnología de 'snapshot' en máquinas virtuales?",
    //   opciones: [
    //     "Capturar una imagen del sistema invitado para transferirla a otro equipo",
    //     "Guardar el estado actual de la máquina virtual para poder restaurarlo posteriormente",
    //     "Crear una copia de seguridad automática diaria",
    //     "Optimizar el rendimiento de la máquina virtual",
    //   ],
    //   respuestaCorrecta: 1,
    //   explicacion:
    //     "Un snapshot (instantánea) en máquinas virtuales es una captura del estado completo de una máquina virtual en un momento específico, incluyendo la configuración, memoria y datos de los discos virtuales. Esta funcionalidad permite guardar un punto específico en el tiempo al que se puede volver posteriormente si algo sale mal, como después de actualizaciones o cambios importantes. Es una herramienta invaluable para pruebas y para recuperación rápida ante problemas, ya que permite revertir cambios sin necesidad de restaurar copias de seguridad completas.",
    // },
    // {
    //   id: 5212,
    //   moduloId: 502,
    //   pregunta:
    //     "¿Qué tecnología de virtualización proporciona Microsoft para sus sistemas operativos Windows?",
    //   opciones: ["KVM", "Xen", "Hyper-V", "ESXi"],
    //   respuestaCorrecta: 2,
    //   explicacion:
    //     "Hyper-V es la tecnología de virtualización desarrollada por Microsoft para sus sistemas operativos Windows. Está disponible como una característica o rol en versiones de Windows Server y en algunas ediciones de Windows cliente (como Pro y Enterprise). Hyper-V es un hipervisor de tipo 1 que, cuando se activa, convierte el sistema operativo host en una máquina virtual especializada, permitiendo la creación y gestión de múltiples máquinas virtuales en el mismo hardware físico.",
    // },
    // {
    //   id: 5213,
    //   moduloId: 502,
    //   pregunta: "¿Qué es la virtualización anidada?",
    //   opciones: [
    //     "Ejecutar un hipervisor dentro de una máquina virtual",
    //     "Crear múltiples snapshots de una máquina virtual",
    //     "Utilizar varios hipervisores en un mismo sistema",
    //     "Conectar varias máquinas virtuales en red",
    //   ],
    //   respuestaCorrecta: 0,
    //   explicacion:
    //     "La virtualización anidada se refiere a la capacidad de ejecutar un hipervisor dentro de una máquina virtual, lo que esencialmente permite crear máquinas virtuales dentro de otras máquinas virtuales. Esta característica es especialmente útil para entornos de desarrollo y pruebas, formación en virtualización, y para escenarios donde se necesitan múltiples niveles de aislamiento. Requiere soporte tanto del hipervisor de primer nivel como del hardware, y generalmente implica cierta penalización en el rendimiento.",
    // },
    // {
    //   id: 5214,
    //   moduloId: 502,
    //   pregunta: "¿Qué formato de archivo virtual es nativo de VMware?",
    //   opciones: ["VDI", "VMDK", "VHD", "QCOW2"],
    //   respuestaCorrecta: 1,
    //   explicacion:
    //     "VMDK (Virtual Machine Disk) es el formato de archivo nativo utilizado por los productos de virtualización de VMware, como VMware Workstation, VMware Fusion y VMware ESXi. Este formato almacena el contenido del disco duro de una máquina virtual y puede configurarse de diversas maneras, como discos monolíticos o divididos en varios archivos, así como con aprovisionamiento ligero (thin provisioning) o completo. Otros formatos como VDI son nativos de VirtualBox, VHD de Hyper-V y QCOW2 de QEMU/KVM.",
    // },
    // {
    //   id: 5215,
    //   moduloId: 502,
    //   pregunta:
    //     "¿Qué es la 'migración en vivo' (live migration) en el contexto de la virtualización?",
    //   opciones: [
    //     "La capacidad de cambiar dinámicamente el tamaño de disco de una máquina virtual",
    //     "Mover una máquina virtual en ejecución de un host físico a otro sin interrupción del servicio",
    //     "Actualizar el sistema operativo invitado sin reiniciar",
    //     "Transferir archivos entre el host y el invitado sin detener la máquina virtual",
    //   ],
    //   respuestaCorrecta: 1,
    //   explicacion:
    //     "La migración en vivo (live migration) es una característica avanzada de los sistemas de virtualización que permite mover una máquina virtual en ejecución desde un servidor físico a otro sin interrumpir su funcionamiento o la disponibilidad del servicio. Durante este proceso, el estado completo de la VM, incluyendo la memoria, el almacenamiento y las conexiones de red, se transfiere al nuevo host mientras la VM continúa ejecutándose. Esta capacidad es crucial para el mantenimiento de hardware, balanceo de carga y alta disponibilidad en entornos virtualizados.",
    // },
    // {
    //   id: 5216,
    //   moduloId: 502,
    //   pregunta:
    //     "¿Cuál es la principal diferencia entre virtualización y contenerización?",
    //   opciones: [
    //     "La contenerización es solo para aplicaciones web",
    //     "La virtualización emula hardware completo, mientras que la contenerización comparte el kernel del sistema operativo host",
    //     "La contenerización no puede ejecutarse en la nube",
    //     "La virtualización es exclusiva para Linux",
    //   ],
    //   respuestaCorrecta: 1,
    //   explicacion:
    //     "La principal diferencia entre virtualización y contenerización está en su arquitectura fundamental. La virtualización emula hardware completo para ejecutar sistemas operativos invitados independientes, cada uno con su propio kernel y recursos virtualizados. En cambio, la contenerización comparte el kernel del sistema operativo anfitrión entre todos los contenedores, siendo estos más ligeros y eficientes pero menos aislados. Los contenedores encapsulan una aplicación y sus dependencias, mientras que las VMs encapsulan sistemas operativos completos.",
    // },
    // {
    //   id: 5217,
    //   moduloId: 502,
    //   pregunta: "¿Qué es un archivo OVF en el contexto de máquinas virtuales?",
    //   opciones: [
    //     "Un formato de disco virtual específico de Oracle VM",
    //     "Un formato de archivo para almacenar configuraciones de red virtual",
    //     "Un formato estándar abierto para empaquetado y distribución de máquinas virtuales",
    //     "Un tipo de copia de seguridad de máquinas virtuales",
    //   ],
    //   respuestaCorrecta: 2,
    //   explicacion:
    //     "OVF (Open Virtualization Format) es un estándar abierto para el empaquetado y distribución de máquinas virtuales o dispositivos virtuales. Desarrollado por el Distributed Management Task Force (DMTF), OVF es independiente del proveedor y permite que las máquinas virtuales sean portable entre diferentes plataformas de virtualización. Un archivo OVF incluye metadatos que describen la máquina virtual y sus requisitos, facilitando la implementación y garantizando la interoperabilidad entre sistemas de virtualización compatibles.",
    // },
    // {
    //   id: 5218,
    //   moduloId: 502,
    //   pregunta:
    //     "¿Qué tecnología de virtualización de CPU permite aislar completamente las máquinas virtuales del sistema host?",
    //   opciones: [
    //     "VT-x/AMD-V",
    //     "Hyper-Threading",
    //     "Overclocking",
    //     "CPU Pinning",
    //   ],
    //   respuestaCorrecta: 0,
    //   explicacion:
    //     "VT-x (Intel Virtualization Technology) y AMD-V (AMD Virtualization) son extensiones de virtualización a nivel de hardware implementadas en los procesadores modernos de Intel y AMD respectivamente. Estas tecnologías proporcionan soporte de hardware para la virtualización, permitiendo que los hipervisores aíslen completamente las máquinas virtuales del sistema host de manera eficiente. Esto mejora significativamente el rendimiento y la seguridad de las máquinas virtuales, permitiendo ejecutar sistemas operativos invitados sin modificaciones (virtualización completa).",
    // },
    // {
    //   id: 5219,
    //   moduloId: 502,
    //   pregunta: "¿Qué es una máquina virtual?",
    //   opciones: [
    //     "Un hardware dedicado a ejecutar múltiples sistemas operativos",
    //     "Una emulación por software de un sistema físico capaz de ejecutar programas como si fuera una máquina física",
    //     "Un sistema operativo especializado en tareas de virtualización",
    //     "Un programa que optimiza el rendimiento de las aplicaciones",
    //   ],
    //   respuestaCorrecta: 1,
    //   explicacion:
    //     "Una máquina virtual es una emulación por software de un sistema físico (computadora) que crea un entorno aislado donde se pueden ejecutar aplicaciones y sistemas operativos como si estuvieran en una máquina física independiente. Proporciona una abstracción del hardware físico subyacente, permitiendo que múltiples entornos virtuales compartan los recursos de un único sistema físico mientras mantienen su aislamiento. Existen diferentes tipos de máquinas virtuales, como las que emulan sistemas completos (VM de sistema) o las que ejecutan aplicaciones específicas (VM de proceso).",
    // },
    // {
    //   id: 5220,
    //   moduloId: 502,
    //   pregunta: "¿Cuál de estas NO es una ventaja de usar máquinas virtuales?",
    //   opciones: [
    //     "Aislamiento de aplicaciones y sistemas",
    //     "Mejor rendimiento que el hardware nativo para todas las aplicaciones",
    //     "Capacidad para ejecutar múltiples sistemas operativos en un solo hardware",
    //     "Facilidad para realizar copias de seguridad y migración",
    //   ],
    //   respuestaCorrecta: 1,
    //   explicacion:
    //     "Las máquinas virtuales generalmente no ofrecen mejor rendimiento que el hardware nativo para todas las aplicaciones, ya que la capa de virtualización introduce cierta sobrecarga. Aunque algunas cargas de trabajo específicas pueden optimizarse en entornos virtuales, en general, las aplicaciones que requieren alto rendimiento (como juegos, renderizado 3D o cálculos intensivos) suelen funcionar mejor en hardware nativo. Las verdaderas ventajas de las máquinas virtuales incluyen aislamiento, consolidación de servidores, flexibilidad, y facilidad para gestión y mantenimiento, no una mejora universal del rendimiento.",
    // },
  ],
};

export default moduloMaquinasVirtuales;
