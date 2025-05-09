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
export const moduloSimulacroUnoMPO = {
    id: 707,
    nombre: "Simulacro 1 (08/05/2025)",
    esExamen: true,
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
        id: 7701,
        moduloId: 707,
        pregunta: "Queremos almacenar la información del teléfono de un alumno. Teniendo en cuenta que es un teléfono nacional, ¿qué tipo de dato asignarías al teléfono?",
        opciones: [
          "CHAR(9)",
          "VARCHAR(9)",
          "INT"
        ],
        respuestaCorrecta: 0,
        explicacion: "Se debe utilizar CHAR(9) ya que los números de teléfono nacionales tienen una longitud fija de 9 dígitos y no van a cambiar. Aunque pueden ser números, se almacenan como texto ya que no se realizan operaciones matemáticas con ellos."
      },
      {
        id: 7702,
        moduloId: 707,
        pregunta: "Marca la respuesta correcta:",
        opciones: [
          "Ninguna es correcta.",
          "La sentencia DELETE no pertenece al DDL ni al DML.",
          "La sentencia DELETE pertenece al DML (Lenguaje de MANIPULACIÓN de Datos).",
          "La sentencia DELETE pertenece al DDL (Lenguaje de DEFINICIÓN de Datos)."
        ],
        respuestaCorrecta: 2,
        explicacion: "La sentencia DELETE pertenece al DML (Lenguaje de Manipulación de Datos) ya que se utiliza para eliminar registros de las tablas, manipulando así los datos existentes. El DML incluye las operaciones que modifican datos: SELECT, INSERT, UPDATE y DELETE."
      },
      {
        id: 7703,
        moduloId: 707,
        pregunta: "Marca la respuesta correcta:",
        opciones: [
          "La sentencia CREATE DATABASE pertenece al DML (Lenguaje de MANIPULACIÓN de Datos).",
          "La sentencia CREATE DATABASE pertenece al DDL (Lenguaje de DEFINICIÓN de Datos).",
          "Ninguna es correcta.",
          "La sentencia CREATE DATABASE no pertenece al DDL ni al DML."
        ],
        respuestaCorrecta: 1,
        explicacion: "La sentencia CREATE DATABASE pertenece al DDL (Lenguaje de Definición de Datos) ya que se utiliza para definir estructuras de la base de datos, no para manipular datos. El DDL incluye comandos como CREATE, ALTER y DROP que definen o modifican la estructura."
      },
      {
        id: 7704,
        moduloId: 707,
        pregunta: "Marca la respuesta correcta:",
        opciones: [
          "La sentencia CREATE TABLE pertenece al DDL (Lenguaje de DEFINICIÓN de Datos).",
          "Ninguna es correcta.",
          "La sentencia CREATE TABLE no pertenece al DDL ni al DML.",
          "La sentencia CREATE TABLE pertenece al DML (Lenguaje de MANIPULACIÓN de Datos)."
        ],
        respuestaCorrecta: 0,
        explicacion: "La sentencia CREATE TABLE pertenece al DDL (Lenguaje de Definición de Datos) ya que define la estructura de una tabla, especificando sus columnas, tipos de datos y restricciones. Es una operación de definición, no de manipulación de datos."
      },
      {
        id: 7705,
        moduloId: 707,
        pregunta: "Tenemos la entidad A y la entidad B y existe una relación entre A y B con cardinalidad 1:1. Esto quiere decir:",
        opciones: [
          "Que una ocurrencia de la entidad A sólo puede estar relacionada con una ocurrencia de la entidad B.",
          "Que una ocurrencia de la entidad A sólo puede estar relacionada con una ocurrencia de la entidad B y viceversa.",
          "Que una ocurrencia de la entidad B sólo puede estar relacionada con una ocurrencia de la entidad A."
        ],
        respuestaCorrecta: 1,
        explicacion: "Una relación con cardinalidad 1:1 significa que una ocurrencia de la entidad A sólo puede estar relacionada con una única ocurrencia de la entidad B, y a su vez, una ocurrencia de la entidad B sólo puede estar relacionada con una única ocurrencia de la entidad A. Es bidireccional y de único valor en ambos sentidos."
      },
      {
        id: 7706,
        moduloId: 707,
        pregunta: "Marca la respuesta correcta:",
        opciones: [
          "La sentencia ALTER TABLE no pertenece al DDL ni al DML.",
          "La sentencia ALTER TABLE pertenece al DML (Lenguaje de MANIPULACIÓN de Datos).",
          "Ninguna es correcta.",
          "La sentencia ALTER TABLE pertenece al DDL (Lenguaje de DEFINICIÓN de Datos)."
        ],
        respuestaCorrecta: 3,
        explicacion: "La sentencia ALTER TABLE pertenece al DDL (Lenguaje de Definición de Datos) ya que se utiliza para modificar la estructura de una tabla existente, como añadir o eliminar columnas, cambiar tipos de datos o añadir restricciones, no para manipular los datos que contiene."
      },
      {
        id: 7707,
        moduloId: 707,
        pregunta: "Marca la afirmación correcta:",
        opciones: [
          "El grado de una relación hace referencia al número de entidades que participan en dicha relación.",
          "El grado de una entidad hace referencia al número de entidades que participan en una relación."
        ],
        respuestaCorrecta: 0,
        explicacion: "El grado de una relación se refiere al número de entidades que participan en dicha relación. Por ejemplo, una relación binaria (grado 2) implica dos entidades, una relación ternaria (grado 3) implica tres entidades, etc."
      },
      {
        id: 7708,
        moduloId: 707,
        pregunta: "Queremos almacenar la información del código postal. Teniendo en cuenta que los códigos postales tienen 5 dígitos, ¿qué tipo de dato asignarías al código postal?",
        opciones: [
          "TINYINT",
          "CHAR(5)",
          "SMALLINT"
        ],
        respuestaCorrecta: 1,
        explicacion: "Se debe utilizar CHAR(5) para los códigos postales ya que tienen una longitud fija de 5 dígitos. Aunque son numéricos, se tratan como texto porque pueden comenzar con ceros (como 01001) que se perderían en un tipo numérico, y porque no se realizan operaciones aritméticas con ellos."
      },
      {
        id: 7709,
        moduloId: 707,
        pregunta: "Marca la respuesta correcta",
        opciones: [
          "Las relaciones pueden tener atributos.",
          "Los atributos pertenecen exclusivamente a las entidades."
        ],
        respuestaCorrecta: 0,
        explicacion: "Las relaciones pueden tener atributos propios que no pertenecen a ninguna de las entidades que relacionan, sino que describen alguna característica de la asociación entre ellas. Por ejemplo, en una relación 'compra' entre 'cliente' y 'producto', la 'fecha_compra' sería un atributo de la relación."
      },
      {
        id: 7710,
        moduloId: 707,
        pregunta: "¿En una BBDD, con qué formato guardarías la fecha de nacimiento de un alumno?",
        opciones: [
          "dd/mm/aaaa",
          "aaaa/mm/dd",
          "aaaa-mm-dd",
          "dd-mm-aaaa"
        ],
        respuestaCorrecta: 2,
        explicacion: "El formato estándar para almacenar fechas en bases de datos SQL es 'aaaa-mm-dd' (ISO 8601). Este formato permite ordenar las fechas alfabéticamente y coincide con el orden cronológico, además de ser reconocido universalmente sin importar la configuración regional."
      },
      {
        id: 7711,
        moduloId: 707,
        pregunta: "Si tenemos siete AIC (atributo identificador candidato) y elegimos uno de ellos como AIP (atributo identificador principal) ¿cuántos AIA (atributo identificador alternativo) tendríamos?:",
        opciones: [
          "Ninguna es correcta.",
          "Siete.",
          "Seis.",
          "Ocho."
        ],
        respuestaCorrecta: 2,
        explicacion: "Si tenemos siete atributos identificadores candidatos (AIC) y elegimos uno como atributo identificador principal (AIP), los seis restantes se convierten en atributos identificadores alternativos (AIA). Cada AIC que no es seleccionado como AIP automáticamente se convierte en AIA."
      },
      {
        id: 7712,
        moduloId: 707,
        pregunta: "Si queremos eliminar las columnas observaciones y departamento de la tabla empleados, debemos ejecutar la siguiente query:",
        opciones: [
          "ALTER TABLE empleados DROP observaciones, DROP departamento;",
          "ALTER TABLE empleados DROP observaciones AND departamento;",
          "Ninguna es correcta.",
          "ALTER TABLE empleados DROP observaciones, departamento;"
        ],
        respuestaCorrecta: 0,
        explicacion: "La sintaxis correcta para eliminar múltiples columnas en una tabla es repetir la palabra clave DROP para cada columna que se desea eliminar. Por tanto, 'ALTER TABLE empleados DROP observaciones, DROP departamento;' es la forma correcta."
      },
      {
        id: 7713,
        moduloId: 707,
        pregunta: "¿Cuál es la diferencia principal entre INNER JOIN y LEFT JOIN?",
        opciones: [
          "LEFT JOIN elimina duplicados automáticamente",
          "LEFT JOIN devuelve todas las filas de la tabla de la izquierda, INNER JOIN solo las coincidentes",
          "INNER JOIN devuelve más resultados que LEFT JOIN",
          "INNER JOIN permite datos NULL en la tabla de la izquierda"
        ],
        respuestaCorrecta: 1,
        explicacion: "La diferencia principal entre INNER JOIN y LEFT JOIN es que INNER JOIN solo devuelve las filas donde hay coincidencia en ambas tablas, mientras que LEFT JOIN devuelve todas las filas de la tabla de la izquierda, incluso si no hay coincidencias en la tabla de la derecha (en cuyo caso las columnas de la tabla derecha se rellenan con NULL)."
      },
      {
        id: 7714,
        moduloId: 707,
        pregunta: "Tenemos una entidad A y una entidad B, y existe una relación entre A y B con cardinalidad 1:N. Si la relación tiene un atributo, ¿dónde hay que incluir el atributo de la relación al realizar el paso a tablas?",
        opciones: [
          "En la tabla A.",
          "En la tabla B.",
          "Puedo elegir en la tabla A o en la tabla B indistintamente.",
          "En la tercera tabla que se genera."
        ],
        respuestaCorrecta: 1,
        explicacion: "En una relación 1:N con atributos, estos se incluyen en la tabla correspondiente al lado N de la relación (la tabla B). Esto es porque la tabla B ya contiene la clave foránea que referencia a la tabla A, por lo que añadir ahí los atributos de la relación evita la necesidad de crear una tabla adicional."
      },
      {
        id: 7715,
        moduloId: 707,
        pregunta: "Marca la respuesta correcta:",
        opciones: [
          "La sentencia UPDATE pertenece al DML (Lenguaje de MANIPULACIÓN de Datos).",
          "La sentencia UPDATE pertenece al DDL (Lenguaje de DEFINICIÓN de Datos).",
          "Ninguna es correcta.",
          "La sentencia UPDATE no pertenece al DDL ni al DML."
        ],
        respuestaCorrecta: 0,
        explicacion: "La sentencia UPDATE pertenece al DML (Lenguaje de Manipulación de Datos) ya que se utiliza para modificar datos existentes en las tablas. El DML incluye operaciones que manipulan datos como SELECT, INSERT, UPDATE y DELETE."
      },
      {
        id: 7716,
        moduloId: 707,
        pregunta: "El tipo de dato VARCHAR()",
        opciones: [
          "Represente un dato de tipo cadena de texto de longitud variable.",
          "Represente un dato de tipo cadena de texto con una longitud fija o variable según el sistema gestor.",
          "Represente un dato de tipo cadena de texto de longitud fija.",
          "Ninguna es correcta"
        ],
        respuestaCorrecta: 0,
        explicacion: "VARCHAR() representa un tipo de dato de cadena de texto de longitud variable. A diferencia de CHAR(), que siempre ocupa el espacio especificado, VARCHAR() solo utiliza el espacio necesario para los caracteres almacenados más un pequeño overhead para la longitud, lo que optimiza el almacenamiento."
      },
      {
        id: 7717,
        moduloId: 707,
        pregunta: "¿Qué operador se utiliza para verificar si un valor es NULL en SQL?",
        opciones: [
          "IS NULL",
          "Ninguna es correcta",
          "IS NOT NULL",
          "NULL"
        ],
        respuestaCorrecta: 0,
        explicacion: "El operador IS NULL se utiliza para verificar si un valor es NULL en SQL. No se puede usar el operador de igualdad (=) para comparar con NULL, ya que NULL representa la ausencia de valor y no es comparable directamente. Por ejemplo: SELECT * FROM tabla WHERE columna IS NULL."
      },
      {
        id: 7718,
        moduloId: 707,
        pregunta: "Marca la respuesta correcta:",
        opciones: [
          "La inconsistencia puede provocar redundancia.",
          "La redundancia provoca inconsistencia.",
          "La inconsistencia provoca redundancia.",
          "La redundancia puede provocar inconsistencia."
        ],
        respuestaCorrecta: 3,
        explicacion: "La redundancia puede provocar inconsistencia en una base de datos. Cuando la misma información se almacena en múltiples lugares (redundancia), existe el riesgo de que al actualizar los datos, no se actualicen todas las copias, lo que lleva a inconsistencias donde distintas partes de la base de datos contienen valores diferentes para el mismo dato."
      },
      {
        id: 7719,
        moduloId: 707,
        pregunta: "¿Qué comando se utiliza para eliminar una tabla?",
        opciones: [
          "TRUNCATE TABLE",
          "REMOVE TABLE",
          "Ninguna es correcta.",
          "DELETE TABLE"
        ],
        respuestaCorrecta: 2,
        explicacion: "Ninguna de las opciones es correcta. El comando para eliminar una tabla en SQL es DROP TABLE. TRUNCATE TABLE elimina todos los datos de una tabla pero mantiene su estructura, mientras que DELETE TABLE y REMOVE TABLE no son comandos SQL válidos."
      },
       {
        id: 7720,
        moduloId: 707,
        pregunta: "Marca la respuesta correcta:",
        opciones: [
          "La sentencia SELECT pertenece al DML (Lenguaje de MANIPULACIÓN de Datos).",
          "La sentencia SELECT pertenece al DDL (Lenguaje de DEFINICIÓN de Datos).",
          "La sentencia SELECT no pertenece al DDL ni al DML.",
          "Ninguna es correcta."
        ],
        respuestaCorrecta: 0,
        explicacion: "La sentencia SELECT pertenece al DML (Lenguaje de Manipulación de Datos) ya que se utiliza para recuperar datos almacenados en las tablas de la base de datos. Aunque no modifica los datos, sí los manipula para presentarlos al usuario, por lo que se clasifica como parte del DML."
      },
      {
        id: 7721,
        moduloId: 707,
        pregunta: "Tenemos una entidad A y una entidad B, y existe una relación entre A y B con cardinalidad N:M. Si la relación tiene un atributo, ¿dónde hay que incluir el atributo de la relación al realizar el paso a tablas?",
        opciones: [
          "En la tabla A.",
          "En la tabla B.",
          "Puedo elegir en la tabla A o en la tabla B indistintamente.",
          "En la tercera tabla que se genera."
        ],
        respuestaCorrecta: 3,
        explicacion: "En una relación N:M, se crea una tercera tabla (tabla de unión o tabla intermedia) que contiene las claves foráneas de ambas entidades. Cualquier atributo de la relación debe incluirse en esta tercera tabla, ya que los atributos describen características de la asociación entre instancias específicas de ambas entidades."
      },
      {
        id: 7722,
        moduloId: 707,
        pregunta: "El dominio es:",
        opciones: [
          "El conjunto de ocurrencias posibles que puede tener una entidad.",
          "Ninguna es correcta.",
          "El conjunto de valores posibles que puede tener un atributo.",
          "El conjunto de ocurrencias posibles que puede tener una relación."
        ],
        respuestaCorrecta: 2,
        explicacion: "El dominio de un atributo es el conjunto de todos los valores posibles que puede tomar dicho atributo. Por ejemplo, el dominio del atributo 'género' podría ser {masculino, femenino, no binario}, mientras que el dominio de 'edad' podría ser todos los enteros positivos entre 0 y 120."
      },
      {
        id: 7723,
        moduloId: 707,
        pregunta: "Marca la respuesta correcta:",
        opciones: [
          "Pueden establecerse relaciones entre relaciones.",
          "Las relaciones se establecen entre entidades.",
          "Pueden establecerse relaciones entre atributos si uno es AIP (atributo identificador principal).",
          "Pueden establecerse relaciones entre atributos."
        ],
        respuestaCorrecta: 1,
        explicacion: "En el modelo entidad-relación, las relaciones se establecen únicamente entre entidades. Las relaciones representan asociaciones entre entidades, mientras que los atributos describen propiedades de las entidades o relaciones, pero no participan directamente en relaciones entre sí."
      },
      {
        id: 7724,
        moduloId: 707,
        pregunta: "¿Qué cláusula se utiliza en SQL para filtrar registros después de realizar una agrupación?",
        opciones: [
          "WHERE",
          "HAVING WHERE",
          "HAVING",
          "GROUP BY"
        ],
        respuestaCorrecta: 2,
        explicacion: "La cláusula HAVING se utiliza para filtrar registros después de realizar una agrupación con GROUP BY. Mientras que WHERE filtra filas antes de la agrupación, HAVING se aplica después y permite filtrar basándose en los resultados de funciones de agregación como COUNT, SUM, AVG, etc."
      },
      {
        id: 7725,
        moduloId: 707,
        pregunta: "¿Cuál es la cláusula que se usa para agrupar resultados que tienen el mismo valor en una columna?",
        opciones: [
          "GROUP TO",
          "GROUP INTO",
          "JOIN",
          "GROUP BY"
        ],
        respuestaCorrecta: 3,
        explicacion: "La cláusula GROUP BY se utiliza para agrupar filas que tienen los mismos valores en las columnas especificadas. Es comúnmente utilizada con funciones de agregación como COUNT, SUM, AVG, MAX o MIN para realizar cálculos sobre cada grupo de filas. Las opciones GROUP TO y GROUP INTO no existen en SQL estándar."
      },
      {
        id: 7726,
        moduloId: 707,
        pregunta: "En una base de datos relacional, las relaciones entre las tablas se establecen:",
        opciones: [
          "Por medio de las claves primarias, claves foráneas y atributos.",
          "Ninguna respuesta es correcta.",
          "Por medio de las claves primarias y claves foráneas.",
          "Por medio de las claves primarias y atributos de la relación."
        ],
        respuestaCorrecta: 2,
        explicacion: "En una base de datos relacional, las relaciones entre tablas se establecen mediante claves primarias y claves foráneas. La clave primaria identifica de forma única cada fila en una tabla, mientras que la clave foránea en otra tabla hace referencia a la clave primaria, estableciendo así la relación entre ambas tablas."
      },
      {
        id: 7727,
        moduloId: 707,
        pregunta: "Queremos eliminar la columna observaciones de la tabla alumnos. ¿Qué query sería la correcta?",
        opciones: [
          "DELETE FROM alumnos DROP observaciones;",
          "Ninguna es correcta.",
          "DROP COLUMN observaciones FROM alumnos;",
          "ALTER TABLE alumnos DELETE observaciones;"
        ],
        respuestaCorrecta: 1,
        explicacion: "Ninguna de las opciones es correcta. La sintaxis correcta para eliminar una columna en SQL estándar es: ALTER TABLE alumnos DROP COLUMN observaciones; o en algunos sistemas gestores de bases de datos se acepta la forma abreviada: ALTER TABLE alumnos DROP observaciones;"
      },
      {
        id: 7728,
        moduloId: 707,
        pregunta: "Marca la respuesta correcta:",
        opciones: [
          "Ninguna es correcta.",
          "Para una ocurrencia de un atributo cada atributo sólo puede tomar un valor.",
          "Para una ocurrencia de una entidad cada atributo sólo puede tomar un valor.",
          "Para una ocurrencia de una entidad cada ocurrencia sólo puede tomar un valor."
        ],
        respuestaCorrecta: 2,
        explicacion: "En el modelo relacional, para una ocurrencia (instancia) de una entidad, cada atributo solo puede tomar un único valor. Esto se conoce como la primera forma normal (1NF), que establece que cada atributo en una relación debe contener solo valores atómicos (indivisibles)."
      },
      {
        id: 7729,
        moduloId: 707,
        pregunta: "Queremos eliminar la columna sueldo de la tabla empleados. ¿Qué query sería la correcta?",
        opciones: [
          "ALTER TABLE empleados DROP sueldo;",
          "Ninguna de las anteriores.",
          "DROP COLUMN sueldo FROM empleados;",
          "ALTER TABLE empleados DELETE sueldo;"
        ],
        respuestaCorrecta: 0,
        explicacion: "La sintaxis correcta para eliminar una columna en SQL es ALTER TABLE empleados DROP sueldo; o ALTER TABLE empleados DROP COLUMN sueldo; en algunos sistemas. Las demás opciones utilizan sintaxis incorrecta o inexistente en SQL estándar."
      },
      {
        id: 7730,
        moduloId: 707,
        pregunta: "Marca la respuesta correcta:",
        opciones: [
          "La sentencia INSERT pertenece al DML (Lenguaje de MANIPULACIÓN de Datos).",
          "La sentencia INSERT pertenece al DDL (Lenguaje de DEFINICIÓN de Datos).",
          "La sentencia INSERT no pertenece al DDL ni al DML.",
          "Ninguna es correcta."
        ],
        respuestaCorrecta: 0,
        explicacion: "La sentencia INSERT pertenece al DML (Lenguaje de Manipulación de Datos) ya que se utiliza para añadir nuevos registros (filas) a una tabla existente. Junto con SELECT, UPDATE y DELETE, forma parte de las operaciones básicas de manipulación de datos en SQL."
      },
      {
        id: 7731,
        moduloId: 707,
        pregunta: "En un diagrama de entidad-relación (DER) debe haber:",
        opciones: [
          "Entidades, atributos, atributos identificadores principales, relaciones y cardinalidades.",
          "Entidades débiles, atributos, atributos identificadores candidatos, relaciones y cardinalidades.",
          "Entidades, atributos identificadores principales, relaciones y cardinalidades."
        ],
        respuestaCorrecta: 0,
        explicacion: "Un diagrama de entidad-relación (DER) completo debe incluir entidades (que representan objetos o conceptos), atributos (que describen propiedades de las entidades), atributos identificadores principales (que identifican unívocamente cada instancia de entidad), relaciones (que muestran asociaciones entre entidades) y cardinalidades (que indican la cantidad de instancias que participan en cada relación)."
      },
      {
        id: 7732,
        moduloId: 707,
        pregunta: "El tipo de dato CHAR()",
        opciones: [
          "Represente un dato de tipo cadena de texto de longitud fija.",
          "Represente un dato de tipo cadena de texto de longitud fija o variable según el sistema gestor.",
          "Represente un dato de tipo cadena de texto de longitud variable.",
          "Ninguna es correcta"
        ],
        respuestaCorrecta: 0,
        explicacion: "CHAR() representa un tipo de dato de cadena de texto de longitud fija. Esto significa que siempre ocupará exactamente la cantidad de espacio especificada, independientemente de la longitud real del texto almacenado. Si el texto es más corto, se rellena con espacios para alcanzar la longitud definida."
      },
      {
        id: 7733,
        moduloId: 707,
        pregunta: "Tenemos la entidad A y la entidad B y existe una relación entre A y B con cardinalidad N:M. Esto quiere decir:",
        opciones: [
          "Que una ocurrencia de la entidad B puede estar relacionada con varias ocurrencias de la entidad A.",
          "Que una ocurrencia de la entidad A puede estar relacionada con varias ocurrencias de la entidad B.",
          "Que muchas ocurrencias de la entidad A pueden estar relacionadas con varias ocurrencias de la entidad B.",
          "Que una ocurrencia de la entidad A puede estar relacionada con varias ocurrencias de la entidad B y que una ocurrencia de la entidad B puede estar relacionada con varias ocurrencias de la entidad A."
        ],
        respuestaCorrecta: 3,
        explicacion: "Una relación con cardinalidad N:M (muchos a muchos) significa que una ocurrencia de la entidad A puede estar relacionada con varias ocurrencias de la entidad B, y a su vez, una ocurrencia de la entidad B puede estar relacionada con varias ocurrencias de la entidad A. Por ejemplo, en una relación entre 'estudiantes' y 'cursos', un estudiante puede matricularse en varios cursos y un curso puede tener varios estudiantes."
      },
      {
        id: 7734,
        moduloId: 707,
        pregunta: "¿Con qué formato se guarda la fecha 17 de mayo de 2025 en una BBDD?",
        opciones: [
          "dd-mm-aaaa",
          "aaaa-mm-dd",
          "dd/mm/aaaa",
          "aaaa/mm/dd"
        ],
        respuestaCorrecta: 1,
        explicacion: "El formato estándar para almacenar fechas en bases de datos SQL es 'aaaa-mm-dd' (ISO 8601). Por lo tanto, la fecha 17 de mayo de 2025 se guardaría como '2025-05-17'. Este formato tiene la ventaja de que el ordenamiento alfabético coincide con el ordenamiento cronológico."
      },
      {
        id: 7735,
        moduloId: 707,
        pregunta: "Tenemos la entidad A y la entidad B y existe una relación entre A y B con cardinalidad 1:N. Esto quiere decir:",
        opciones: [
          "Que una ocurrencia de la entidad A puede estar relacionada con varias ocurrencias de la entidad B, mientras que una ocurrencia de la entidad B sólo puede estar relacionada con una ocurrencia de la entidad A.",
          "Que una ocurrencia de la entidad A puede estar relacionada con varias ocurrencias de la entidad B, mientras que varias ocurrencias de la entidad B sólo pueden estar relacionadas con una ocurrencia de la entidad A.",
          "Que una ocurrencia de la entidad A puede estar relacionada con varias ocurrencias de la entidad B, mientras que una ocurrencia de la entidad B puede estar relacionada con varias ocurrencias de la entidad A."
        ],
        respuestaCorrecta: 0,
        explicacion: "Una relación con cardinalidad 1:N (uno a muchos) significa que una ocurrencia de la entidad A puede estar relacionada con múltiples ocurrencias de la entidad B, pero cada ocurrencia de la entidad B solo puede estar relacionada con una única ocurrencia de la entidad A. Por ejemplo, en una relación entre 'departamento' y 'empleados', un departamento puede tener muchos empleados, pero cada empleado pertenece a un único departamento."
      },
      {
        id: 7736,
        moduloId: 707,
        pregunta: "¿Para qué sirve un atributo identificador principal?",
        opciones: [
          "Para identificar cada atributo de forma única.",
          "Para identificar cada relación de forma única.",
          "Para identificar cada entidad de forma única.",
          "Para identificar cada ocurrencia de forma única."
        ],
        respuestaCorrecta: 3,
        explicacion: "Un atributo identificador principal (AIP), también conocido como clave primaria, sirve para identificar de forma única cada ocurrencia (instancia) de una entidad. Permite distinguir cada registro de manera inequívoca dentro de la tabla correspondiente a esa entidad."
      },
      {
        id: 7737,
        moduloId: 707,
        pregunta: "Si tenemos creada la tabla empleados (no importa con qué campos) y ya tenemos 10 filas con información insertada en la misma, al ejecutar la query",
        recurso: {
          tipo: "codigo",
          contenido: "ALTER TABLE empleados ADD COLUMN sueldo FLOAT(7,2) UNSIGNED NOT NULL AFTER apellidos;",
          lenguaje: "sql"
        },
        opciones: [
          "La información del campo sueldo en todas las filas será 0.00",
          "La información del campo sueldo en todas las filas será NULL.",
          "Ninguna es correcta.",
          "La información del campo sueldo en todas las filas estará vacía."
        ],
        respuestaCorrecta: 0,
        explicacion: "Al añadir una nueva columna a una tabla existente con la restricción NOT NULL y sin especificar un valor por defecto, MySQL asigna automáticamente valores predeterminados según el tipo de dato. Para datos numéricos como FLOAT, el valor predeterminado es 0, por lo que todas las filas existentes tendrán el valor 0.00 en la nueva columna sueldo."
      },
      {
        id: 7738,
        moduloId: 707,
        pregunta: "Teniendo en cuenta que el número máximo de caracteres para una dirección de correo electrónico es de 320 caracteres ¿qué tipo de dato asignarías al correo electrónico de un empleado?",
        opciones: [
          "CHAR(320)",
          "VARCHAR(320)",
          "BLOB",
          "TEXT"
        ],
        respuestaCorrecta: 1,
        explicacion: "VARCHAR(320) es el tipo de dato más apropiado para almacenar direcciones de correo electrónico. Las direcciones de email tienen longitud variable y raramente alcanzan el límite máximo de 320 caracteres, por lo que VARCHAR es más eficiente en almacenamiento que CHAR(320), que siempre ocuparía 320 caracteres independientemente de la longitud real."
      },
      {
        id: 7739,
        moduloId: 707,
        pregunta: "Al realizar el paso a tablas:",
        opciones: [
          "Cada entidad débil se convierte en una tabla si su relación no tiene atributos.",
          "Cada entidad, sea fuerte o débil, se convierte en una tabla",
          "Cada entidad fuerte se convierte en una tabla si su relación no tiene atributos.",
          "Cada entidad débil se convierte en una tabla si su relación tiene atributos."
        ],
        respuestaCorrecta: 1,
        explicacion: "En el proceso de transformación del modelo entidad-relación al modelo relacional, cada entidad, ya sea fuerte o débil, se convierte en una tabla propia. La diferencia radica en cómo se definen las claves primarias: para entidades fuertes será su propio identificador, mientras que para entidades débiles será una combinación del identificador de la entidad fuerte de la que depende y sus propios atributos discriminadores."
      },
      {
        id: 7740,
        moduloId: 707,
        pregunta: "Queremos almacenar la información del sueldo bruto anual de los empleados. Teniendo en cuenta que el sueldo máximo sería 200000.00 euros, ¿qué tipo de dato asignarías al sueldo?",
        opciones: [
          "FLOAT(8,2)",
          "FLOAT(6,2)"
        ],
        respuestaCorrecta: 0,
        explicacion: "Para almacenar un sueldo máximo de 200000.00 euros necesitamos un tipo de dato que pueda contener 6 dígitos enteros más 2 decimales. FLOAT(8,2) permite almacenar hasta 8 dígitos en total, con 2 decimales, lo que da espacio para 6 dígitos enteros (suficiente para 200000). FLOAT(6,2) solo permitiría almacenar hasta 9999.99, que es insuficiente para el requisito."
      }
    ],
  };

  export default moduloSimulacroUnoMPO;