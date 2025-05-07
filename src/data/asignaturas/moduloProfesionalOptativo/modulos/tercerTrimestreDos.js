/**
 * Datos del módulo teórico de SQL y Bases de Datos perteneciente a la asignatura MPO.
 * Incluye información del módulo y sus preguntas asociadas para el quiz.
 *
 * @type {Object}
 * @property {number} id - Identificador único del módulo
 * @property {string} nombre - Nombre del módulo
 * @property {boolean} esExamen - Indica si el módulo es un examen (true) o no (false)
 * @property {number} asignaturaId - ID de la asignatura a la que pertenece
 * @property {Array<Object>} preguntas - Lista de preguntas para el quiz de este módulo
 */
export const moduloTercerTrimestreDos = {
    id: 706,
    nombre: "Test Tercer Trimestre 2",
    esExamen: false,
    asignaturaId: 7,
    descripcion:
      `# Conceptos Fundamentales de SQL y Bases de Datos

  Este módulo evalúa tus conocimientos teóricos sobre SQL y fundamentos de bases de datos relacionales. Las preguntas cubren desde tipos de datos hasta operaciones básicas de consulta y modificación de estructuras.

  Los temas principales que se abordan son:
  - Tipos de datos en SQL
  - Operadores y cláusulas SQL
  - Consultas JOIN
  - Modelado de bases de datos relacionales
  - Operaciones DDL (Data Definition Language)

  Para cada pregunta, selecciona la opción que mejor responda a la pregunta planteada.`,
    preguntas: [
      {
        id: 7601,
        moduloId: 706,
        pregunta: "El tipo de dato CHAR()",
        opciones: [
          "Representa un dato de tipo cadena de texto de longitud fija o variable según el sistema gestor.",
          "Ninguna es correcta",
          "Representa un dato de tipo cadena de texto de longitud variable.",
          "Representa un dato de tipo cadena de texto de longitud fija."
        ],
        respuestaCorrecta: 3,
        explicacion:
          "CHAR() es un tipo de dato para cadenas de caracteres de longitud fija. Esto significa que siempre ocupará exactamente la cantidad de espacio especificada, independientemente de la longitud real del texto almacenado. Si el texto es más corto que la longitud especificada, se rellena con espacios. Este comportamiento es consistente en todos los sistemas gestores de bases de datos relacionales."
      },
      {
        id: 7602,
        moduloId: 706,
        pregunta: "¿Cuál es la diferencia principal entre INNER JOIN y LEFT JOIN?",
        opciones: [
          "INNER JOIN permite datos NULL en la tabla de la izquierda",
          "LEFT JOIN elimina duplicados automáticamente",
          "LEFT JOIN devuelve todas las filas de la tabla de la izquierda, INNER JOIN solo las coincidentes",
          "INNER JOIN devuelve más resultados que LEFT JOIN"
        ],
        respuestaCorrecta: 2,
        explicacion:
          "La diferencia principal entre INNER JOIN y LEFT JOIN es que INNER JOIN devuelve únicamente las filas donde hay coincidencia en ambas tablas (intersección), mientras que LEFT JOIN devuelve todas las filas de la tabla de la izquierda y, para aquellas filas que no tienen coincidencia en la tabla de la derecha, se rellenan los campos correspondientes con NULL. Esto hace que LEFT JOIN pueda devolver más filas que INNER JOIN, nunca menos."
      },
      {
        id: 7603,
        moduloId: 706,
        pregunta: "¿Qué operador se utiliza para verificar si un valor es NULL en SQL?",
        opciones: [
          "NULL",
          "IS NULL",
          "Ninguna es correcta",
          "IS NOT NULL"
        ],
        respuestaCorrecta: 1,
        explicacion:
          "El operador correcto para verificar si un valor es NULL en SQL es 'IS NULL'. Es importante destacar que no se puede usar el operador de igualdad (=) para comparar con NULL, ya que NULL representa la ausencia de valor y no se puede comparar directamente. Por ejemplo: SELECT * FROM tabla WHERE columna IS NULL. Para verificar si un valor no es NULL, se utiliza 'IS NOT NULL'."
      },
      {
        id: 7604,
        moduloId: 706,
        pregunta: "Al realizar el paso a tablas:",
        opciones: [
          "Cada entidad débil se convierte en una tabla si su relación tiene atributos.",
          "Cada entidad, sea fuerte o débil, se convierte en una tabla",
          "Cada entidad débil se convierte en una tabla si su relación no tiene atributos.",
          "Cada entidad fuerte se convierte en una tabla si su relación no tiene atributos."
        ],
        respuestaCorrecta: 1,
        explicacion:
          "En el proceso de transformación de un modelo entidad-relación a un modelo relacional, cada entidad, ya sea fuerte o débil, se convierte en una tabla. La diferencia está en cómo se definen las claves primarias: para las entidades fuertes, la clave primaria será su propio identificador; para las entidades débiles, la clave primaria será una combinación del identificador de la entidad fuerte relacionada y su propio identificador parcial."
      },
      {
        id: 7605,
        moduloId: 706,
        pregunta: "Queremos eliminar la columna observaciones de la tabla alumnos. ¿Qué query sería la correcta?",
        opciones: [
          "ALTER TABLE alumnos DELETE observaciones;",
          "DELETE FROM alumnos DROP observaciones;",
          "Ninguna es correcta.",
          "DROP COLUMN observaciones FROM alumnos;"
        ],
        respuestaCorrecta: 2,
        explicacion:
          "Ninguna de las opciones es correcta. La sintaxis correcta para eliminar una columna en SQL estándar es: ALTER TABLE alumnos DROP COLUMN observaciones; La opción A usa DELETE en lugar de DROP COLUMN, la opción B utiliza una sintaxis incorrecta mezclando DELETE y DROP, y la opción D invierte el orden de la instrucción, colocando el objeto (DROP COLUMN) antes del sujeto (FROM alumnos)."
      },
      {
        id: 7606,
        moduloId: 706,
        pregunta: "¿Qué cláusula se utiliza en SQL para filtrar registros después de realizar una agrupación?",
        opciones: [
          "GROUP BY",
          "HAVING",
          "WHERE",
          "Ninguna es correcta"
        ],
        respuestaCorrecta: 1,
        explicacion:
          "La cláusula HAVING se utiliza en SQL para filtrar registros después de realizar una agrupación con GROUP BY. Mientras que la cláusula WHERE se utiliza para filtrar filas antes de la agrupación, HAVING se aplica después de que los datos han sido agrupados y se usa principalmente para filtrar basándose en los resultados de funciones de agregación como COUNT, SUM, AVG, etc. Por ejemplo: SELECT departamento, AVG(salario) FROM empleados GROUP BY departamento HAVING AVG(salario) > 50000;"
      },
      {
        id: 7607,
        moduloId: 706,
        pregunta: "¿Con qué formato se guarda la fecha 17 de mayo de 2025 en una BBDD?",
        opciones: [
          "dd/mm/aaaa",
          "dd-mm-aaaa",
          "aaaa-mm-dd",
          "aaaa/mm/dd"
        ],
        respuestaCorrecta: 2,
        explicacion:
          "El formato estándar ISO para almacenar fechas en bases de datos SQL es 'aaaa-mm-dd' (año-mes-día). Por lo tanto, la fecha 17 de mayo de 2025 se guardaría como '2025-05-17'. Este formato, también conocido como ISO 8601, tiene la ventaja de permitir ordenaciones alfabéticas que coinciden con el orden cronológico, y es reconocido universalmente independientemente de las configuraciones regionales."
      },
      {
        id: 7608,
        moduloId: 706,
        pregunta: "El tipo de dato VARCHAR()",
        opciones: [
          "Representa un dato de tipo cadena de texto de longitud fija.",
          "Ninguna es correcta",
          "Representa un dato de tipo cadena de texto con una longitud fija o variable según el sistema gestor.",
          "Representa un dato de tipo cadena de texto de longitud variable."
        ],
        respuestaCorrecta: 3,
        explicacion:
          "VARCHAR() representa un tipo de dato de cadena de texto de longitud variable. A diferencia de CHAR(), que siempre ocupa exactamente el espacio especificado, VARCHAR() solo utiliza el espacio necesario para almacenar los caracteres reales más un pequeño overhead para registrar la longitud. El parámetro especificado en VARCHAR() indica la longitud máxima que puede tener la cadena. Este comportamiento es consistente en todos los sistemas gestores de bases de datos relacionales."
      },
      {
        id: 7609,
        moduloId: 706,
        pregunta: "¿Qué comando se utiliza para eliminar una tabla?",
        opciones: [
          "REMOVE TABLE",
          "DELETE TABLE",
          "TRUNCATE TABLE",
          "Ninguna es correcta."
        ],
        respuestaCorrecta: 3,
        explicacion:
          "Ninguna de las opciones dadas es correcta. El comando para eliminar una tabla en SQL es DROP TABLE. Por ejemplo: DROP TABLE nombre_tabla; La opción TRUNCATE TABLE elimina todos los datos de una tabla, pero mantiene la estructura de la tabla. DELETE TABLE no es un comando SQL válido, y REMOVE TABLE tampoco existe en SQL estándar."
      },
      {
        id: 7610,
        moduloId: 706,
        pregunta: "¿Cuál es la cláusula que se usa para agrupar resultados que tienen el mismo valor en una columna?",
        opciones: [
          "GROUP BY",
          "JOIN",
          "GROUP TO",
          "GROUP INTO"
        ],
        respuestaCorrecta: 0,
        explicacion:
          "La cláusula GROUP BY se utiliza en SQL para agrupar filas que tienen los mismos valores en columnas especificadas. Esta cláusula suele usarse en conjunto con funciones de agregación como COUNT, MAX, MIN, SUM, AVG para realizar cálculos sobre cada grupo de filas. Por ejemplo: SELECT departamento, COUNT(*) FROM empleados GROUP BY departamento; No existen las cláusulas GROUP TO o GROUP INTO en SQL estándar, y JOIN se utiliza para combinar filas de diferentes tablas."
      }
    ],
  };

  export default moduloTercerTrimestreDos;