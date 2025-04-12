/**
 * Datos del módulo de Linux perteneciente a la asignatura de Sistemas Informáticos.
 * Incluye información del módulo y sus preguntas asociadas para el quiz.
 *
 * @type {Object}
 * @property {number} id - Identificador único del módulo
 * @property {string} nombre - Nombre del módulo
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
 * // Importar el módulo de Linux
 * import moduloLinux from '@data/modulos/linux';
 *
 * function PreguntasAleatorias() {
 *   // Seleccionar 5 preguntas aleatorias del módulo
 *   const preguntasAleatorias = moduloLinux.preguntas
 *     .sort(() => 0.5 - Math.random())
 *     .slice(0, 5);
 *
 *   return (
 *     <div>
 *       <h2>{moduloLinux.nombre}</h2>
 *       {preguntasAleatorias.map(pregunta => (
 *         <QuestionCard key={pregunta.id} pregunta={pregunta} />
 *       ))}
 *     </div>
 *   );
 * }
 */
export const moduloLinux = {
    id: 101,
    nombre: "Linux",
    asignaturaId: 1,
    descripcion: "Comandos y conceptos básicos de sistemas Linux",
    preguntas: [
      {
        id: 1001,
        moduloId: 101,
        pregunta: "¿Qué comando se utiliza para cambiar de directorio en Linux?",
        opciones: ["cd", "ls", "pwd", "mv"],
        respuestaCorrecta: 0,
        explicacion: "El comando 'cd' (change directory) se utiliza para cambiar de directorio en sistemas Linux y Unix."
      },
      {
        id: 1002,
        moduloId: 101,
        pregunta: "¿Cuál es el propósito del comando pwd?",
        opciones: ["Mover archivos", "Mostrar el directorio actual", "Crear archivos", "Borrar archivos"],
        respuestaCorrecta: 1,
        explicacion: "El comando 'pwd' (print working directory) muestra la ruta completa del directorio en el que te encuentras actualmente."
      },
      {
        id: 1003,
        moduloId: 101,
        pregunta: "¿Qué muestra el comando ls?",
        opciones: ["Borra archivos", "Muestra el directorio actual", "Lista archivos y carpetas", "Cambia de directorio"],
        respuestaCorrecta: 2,
        explicacion: "El comando 'ls' (list) muestra el contenido de un directorio, listando los archivos y carpetas que contiene."
      },
      {
        id: 1004,
        moduloId: 101,
        pregunta: "¿Qué hace el modificador -l en ls -l?",
        opciones: ["Muestra archivos ocultos", "Muestra inodos", "Ordena alfabéticamente", "Muestra detalles"],
        respuestaCorrecta: 3,
        explicacion: "El modificador -l (long format) muestra información detallada de los archivos como permisos, propietario, tamaño y fecha de modificación."
      },
      {
        id: 1005,
        moduloId: 101,
        pregunta: "¿Qué añade el parámetro -a al comando ls?",
        opciones: ["Muestra archivos ocultos", "Cambia permisos", "Borra archivos", "Muestra el propietario"],
        respuestaCorrecta: 0,
        explicacion: "El parámetro -a (all) permite ver también los archivos ocultos que comienzan con un punto (.)."
      },
      {
        id: 1006,
        moduloId: 101,
        pregunta: "¿Qué información adicional muestra ls -la?",
        opciones: ["Solo carpetas", "Fecha de modificación", "Archivos ocultos y detalles", "Tipo de sistema de archivos"],
        respuestaCorrecta: 2,
        explicacion: "El comando ls -la combina los parámetros -l y -a, mostrando información detallada y también archivos ocultos."
      },
      {
        id: 1007,
        moduloId: 101,
        pregunta: "¿Qué hace el parámetro -i en ls -li?",
        opciones: ["Ordena por fecha", "Muestra solo archivos", "Oculta carpetas", "Muestra el inodo"],
        respuestaCorrecta: 3,
        explicacion: "El parámetro -i muestra el número de inodo de cada archivo, que es un identificador único en el sistema de archivos."
      },
      {
        id: 1008,
        moduloId: 101,
        pregunta: "¿Qué contiene el archivo /etc/passwd?",
        opciones: ["Información de usuarios", "Permisos del sistema", "Información del hardware", "Logs del sistema"],
        respuestaCorrecta: 0,
        explicacion: "El archivo /etc/passwd contiene información básica sobre las cuentas de usuario del sistema, como nombres de usuario, UID, GID, etc."
      },
      {
        id: 1009,
        moduloId: 101,
        pregunta: "¿Qué comando permite visualizar el contenido de un archivo?",
        opciones: ["ls", "rm", "cat", "touch"],
        respuestaCorrecta: 2,
        explicacion: "El comando 'cat' (concatenate) muestra el contenido de un archivo en la terminal."
      },
      {
        id: 1010,
        moduloId: 101,
        pregunta: "¿Cuál es el uso principal del comando cp?",
        opciones: ["Mover archivos", "Eliminar archivos", "Crear enlaces", "Copiar archivos"],
        respuestaCorrecta: 3,
        explicacion: "El comando 'cp' (copy) se utiliza para copiar archivos y directorios de una ubicación a otra."
      },
      {
        id: 1011,
        moduloId: 101,
        pregunta: "¿Qué comando se usa para mover archivos?",
        opciones: ["mv", "cp", "touch", "rm"],
        respuestaCorrecta: 0,
        explicacion: "El comando 'mv' (move) permite mover archivos de una ubicación a otra, y también se usa para renombrar archivos."
      },
      {
        id: 1012,
        moduloId: 101,
        pregunta: "¿Qué hace el comando rm?",
        opciones: ["Cambia nombre", "Elimina archivos", "Muestra contenido", "Lista archivos"],
        respuestaCorrecta: 1,
        explicacion: "El comando 'rm' (remove) elimina archivos y directorios del sistema de archivos."
      },
      {
        id: 1013,
        moduloId: 101,
        pregunta: "¿Cuál es el propósito de rmdir?",
        opciones: ["Borra archivos", "Borra directorios vacíos", "Crea enlaces", "Cambia permisos"],
        respuestaCorrecta: 1,
        explicacion: "El comando 'rmdir' (remove directory) elimina directorios, pero solo si están vacíos. Para eliminar directorios con contenido se usa rm -r."
      },
      {
        id: 1014,
        moduloId: 101,
        pregunta: "¿Por qué es peligroso usar rm -r sin cuidado?",
        opciones: ["Oculta archivos", "Cambia contraseñas", "Puede borrar todo el sistema", "Congela el equipo"],
        respuestaCorrecta: 2,
        explicacion: "El comando rm -r elimina directorios y su contenido recursivamente. Usado sin precaución puede borrar archivos importantes o incluso todo el sistema."
      },
      {
        id: 1015,
        moduloId: 101,
        pregunta: "¿Qué hace el comando man en Linux?",
        opciones: ["Cambia usuarios", "Elimina archivos", "Lista procesos", "Muestra manuales"],
        respuestaCorrecta: 3,
        explicacion: "El comando 'man' (manual) muestra el manual de usuario para cualquier comando o función disponible en el sistema."
      },
      {
        id: 1016,
        moduloId: 101,
        pregunta: "¿Cómo se accede al manual del comando ls?",
        opciones: ["man ls", "ls --help", "help ls", "info man"],
        respuestaCorrecta: 0,
        explicacion: "Para acceder al manual del comando ls, se utiliza 'man ls', que mostrará la página completa del manual para ese comando."
      },
      {
        id: 1017,
        moduloId: 101,
        pregunta: "¿Qué es una opción en un comando de Linux?",
        opciones: ["Un archivo", "Un modificador del comportamiento del comando", "Un usuario", "Una ruta"],
        respuestaCorrecta: 1,
        explicacion: "Una opción es un modificador que cambia el comportamiento predeterminado de un comando. Generalmente se indica con guiones (-) o dobles guiones (--)."
      },
      {
        id: 1018,
        moduloId: 101,
        pregunta: "¿Qué es un inodo en Linux?",
        opciones: ["Una carpeta", "Un tipo de enlace", "Una estructura con metadatos del archivo", "Una contraseña"],
        respuestaCorrecta: 2,
        explicacion: "Un inodo es una estructura de datos que contiene metadatos sobre un archivo, como permisos, propietario, tamaño y ubicación en el disco."
      },
      {
        id: 1019,
        moduloId: 101,
        pregunta: "¿Qué tipo de enlace apunta al mismo inodo que el archivo original?",
        opciones: ["Soft link", "Hard link", "Symbolic link", "Alias"],
        respuestaCorrecta: 1,
        explicacion: "Un hard link (enlace duro) apunta al mismo inodo que el archivo original, lo que significa que es efectivamente el mismo archivo con diferentes nombres."
      },
      {
        id: 1020,
        moduloId: 101,
        pregunta: "¿Qué sucede si borras el archivo original de un enlace simbólico?",
        opciones: ["Se borra también el enlace", "Se mantiene el contenido", "Se oculta", "El enlace queda roto"],
        respuestaCorrecta: 3,
        explicacion: "Si se borra el archivo original al que apunta un enlace simbólico (soft link), el enlace quedará roto y no funcionará, ya que solo contiene una referencia al archivo original."
      },
      {
        id: 1021,
        moduloId: 101,
        pregunta: "¿Cuál de los siguientes crea un enlace simbólico?",
        opciones: ["ln", "cp -s", "ln -s", "mv -s"],
        respuestaCorrecta: 2,
        explicacion: "El comando 'ln -s' es el que se utiliza para crear enlaces simbólicos, que son referencias a otros archivos o directorios."
      },
      {
        id: 1022,
        moduloId: 101,
        pregunta: "¿Qué comando elimina un directorio y todo su contenido?",
        opciones: ["rmdir", "rm", "rm -r", "delete"],
        respuestaCorrecta: 2,
        explicacion: "El comando 'rm -r' elimina recursivamente un directorio y todo su contenido, incluyendo subdirectorios y archivos."
      },
      {
        id: 1023,
        moduloId: 101,
        pregunta: "¿Cómo se puede ver el número de inodo de un archivo?",
        opciones: ["ls -l", "stat", "info", "ls -li"],
        respuestaCorrecta: 3,
        explicacion: "El comando 'ls -li' muestra los números de inodo junto con la información detallada de los archivos."
      },
      {
        id: 1024,
        moduloId: 101,
        pregunta: "¿Qué hace el comando cd ..?",
        opciones: ["Sube un nivel en la jerarquía de directorios", "Borra el directorio actual", "Muestra archivos", "Cambia nombre"],
        respuestaCorrecta: 0,
        explicacion: "El comando 'cd ..' permite subir un nivel en la jerarquía de directorios, es decir, ir al directorio padre del directorio actual."
      },
      {
        id: 1025,
        moduloId: 101,
        pregunta: "¿Cuál de los siguientes comandos cambia al directorio raíz?",
        opciones: ["cd /", "cd ~", "cd root", "cd .."],
        respuestaCorrecta: 0,
        explicacion: "El comando 'cd /' cambia al directorio raíz del sistema de archivos, que es el nivel superior de la jerarquía."
      },
      {
        id: 1026,
        moduloId: 101,
        pregunta: "¿Qué representa el símbolo ~ en Linux?",
        opciones: ["El directorio /", "El directorio /etc", "El directorio del usuario actual", "El directorio temporal"],
        respuestaCorrecta: 2,
        explicacion: "El símbolo ~ (tilde) representa el directorio home del usuario actual. Por ejemplo, para el usuario 'juan', ~ equivale a /home/juan."
      },
      {
        id: 1027,
        moduloId: 101,
        pregunta: "¿Qué comando muestra los archivos en orden cronológico?",
        opciones: ["ls -a", "ls -lt", "ls -r", "ls -i"],
        respuestaCorrecta: 1,
        explicacion: "El comando 'ls -lt' ordena los archivos por fecha de modificación (t) y muestra la información detallada (l)."
      },
      {
        id: 1028,
        moduloId: 101,
        pregunta: "¿Qué comando se usa para copiar un directorio con todo su contenido?",
        opciones: ["cp", "mv -r", "cp -r", "ln -r"],
        respuestaCorrecta: 2,
        explicacion: "El comando 'cp -r' (copy recursive) copia un directorio y todos sus archivos y subdirectorios."
      },
      {
        id: 1029,
        moduloId: 101,
        pregunta: "¿Cuál es el comando para ver los permisos de los archivos?",
        opciones: ["chmod", "cat", "ls -l", "touch"],
        respuestaCorrecta: 2,
        explicacion: "El comando 'ls -l' muestra información detallada de los archivos, incluyendo sus permisos (lectura, escritura, ejecución)."
      },
      {
        id: 1030,
        moduloId: 101,
        pregunta: "¿Qué indica una \"d\" al principio de una línea de ls -l?",
        opciones: ["Archivo ejecutable", "Directorio", "Archivo oculto", "Enlace simbólico"],
        respuestaCorrecta: 1,
        explicacion: "La 'd' al principio de la información de permisos en ls -l indica que se trata de un directorio y no un archivo regular."
      },
      {
        id: 1031,
        moduloId: 101,
        pregunta: "¿Qué comando se utiliza para renombrar archivos?",
        opciones: ["mv", "rename", "cp", "ln"],
        respuestaCorrecta: 0,
        explicacion: "El comando 'mv' (move) también se utiliza para renombrar archivos. Por ejemplo: mv archivo1 archivo2."
      },
      {
        id: 1032,
        moduloId: 101,
        pregunta: "¿Qué hace el comando cat archivo > nuevo_archivo?",
        opciones: ["Borra el archivo original", "Copia el contenido en un nuevo archivo", "Une dos archivos", "Mueve el archivo"],
        respuestaCorrecta: 1,
        explicacion: "El operador '>' redirige la salida de un comando a un archivo. En este caso, el contenido del archivo original se copia a un nuevo archivo."
      },
      {
        id: 1033,
        moduloId: 101,
        pregunta: "¿Qué pasa si se ejecuta cp archivo1 archivo1?",
        opciones: ["Elimina el archivo", "Lo renombra", "No hace nada", "Cambia su nombre"],
        respuestaCorrecta: 2,
        explicacion: "Cuando el origen y el destino son el mismo, el comando cp detecta esta situación y no hace nada para evitar corromper el archivo."
      },
      {
        id: 1034,
        moduloId: 101,
        pregunta: "¿Qué comando muestra los manuales divididos por secciones?",
        opciones: ["man", "man -k", "help", "ls -man"],
        respuestaCorrecta: 0,
        explicacion: "El comando 'man' organiza los manuales en secciones. Por ejemplo, man 1 ls muestra la página del manual de ls en la sección 1 (comandos de usuario)."
      },
      {
        id: 1035,
        moduloId: 101,
        pregunta: "¿Cómo puedes ver la ayuda rápida de un comando?",
        opciones: ["man comando", "comando --help", "comando /help", "help comando"],
        respuestaCorrecta: 1,
        explicacion: "La mayoría de los comandos en Linux aceptan la opción --help para mostrar una ayuda rápida con las opciones más comunes."
      },
      {
        id: 1036,
        moduloId: 101,
        pregunta: "¿Cuál es el comando para borrar todos los archivos de un directorio sin eliminar el directorio?",
        opciones: ["rm -r", "rm *", "rmdir", "delete ."],
        respuestaCorrecta: 1,
        explicacion: "El comando 'rm *' elimina todos los archivos (no ocultos) del directorio actual, pero mantiene el directorio intacto."
      },
      {
        id: 1037,
        moduloId: 101,
        pregunta: "¿Cuál es la diferencia entre > y >> en Linux?",
        opciones: ["Ambos hacen lo mismo", "> sobrescribe, >> añade", ">> borra, > no", "> borra el archivo original"],
        respuestaCorrecta: 1,
        explicacion: "El operador '>' redirige la salida y sobrescribe el archivo de destino si existe, mientras que '>>' añade la salida al final del archivo existente."
      },
      {
        id: 1038,
        moduloId: 101,
        pregunta: "¿Qué comando crea un nuevo archivo vacío?",
        opciones: ["mkfile", "cat", "touch", "nano"],
        respuestaCorrecta: 2,
        explicacion: "El comando 'touch' crea un archivo vacío si no existe, o actualiza la fecha de modificación si ya existe."
      },
      {
        id: 1039,
        moduloId: 101,
        pregunta: "¿Qué hace el comando ln sin opciones?",
        opciones: ["Crea enlaces simbólicos", "Copia archivos", "Crea enlaces duros", "Elimina enlaces"],
        respuestaCorrecta: 2,
        explicacion: "El comando 'ln' sin opciones crea enlaces duros (hard links) por defecto, que comparten el mismo inodo que el archivo original."
      },
      {
        id: 1040,
        moduloId: 101,
        pregunta: "¿Qué indica una \"-\" al principio de una línea de ls -l?",
        opciones: ["Archivo", "Directorio", "Enlace simbólico", "Ninguna de las anteriores"],
        respuestaCorrecta: 0,
        explicacion: "Un guion ('-') al inicio de los permisos en la salida de ls -l indica que se trata de un archivo regular (no directorio, enlace u otro tipo especial)."
      }
    ]
  };

  export default moduloLinux;