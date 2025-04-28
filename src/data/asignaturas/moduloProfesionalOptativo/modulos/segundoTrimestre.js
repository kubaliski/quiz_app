/**
 * Datos del módulo de Fundamentos de Bases de Datos (Segundo Trimestre) perteneciente a la asignatura MPO (Módulo Profesional Optativo).
 * Incluye información del módulo y sus preguntas asociadas para el quiz.
 *
 * @type {Object}
 * @property {number} id - Identificador único del módulo
 * @property {string} nombre - Nombre del módulo
 * @property {boolean} esExamen - Indica si el módulo es un examen (true) o no (false)
 * @property {number} asignaturaId - ID de la asignatura a la que pertenece
 * @property {Array<Object>} preguntas - Lista de preguntas para el quiz de este módulo
 * @property {number} preguntas[].id - Identificador único de la pregunta
 * @property {number} preguntas[].moduloId - ID del módulo al que pertenece la pregunta
 * @property {string} preguntas[].pregunta - Texto de la pregunta
 * @property {Array<string>} preguntas[].opciones - Lista de opciones de respuesta
 * @property {number} preguntas[].respuestaCorrecta - Índice (0-based) de la opción correcta
 * @property {string} preguntas[].explicacion - Explicación de la respuesta correcta
 */
export const moduloSegundoTrimestre = {
    id: 702,
    nombre: "Test Segundo Trimestre",
    esExamen: false,
    asignaturaId: 7,
    descripcion:
      "Lenguaje SQL para definición y manipulación de datos (DDL y DML), modificación de estructuras y gestión de registros en bases de datos.",
    preguntas: [
      {
        id: 7101,
        moduloId: 702,
        pregunta: "Queremos eliminar la columna sueldo de la tabla empleados. ¿Qué query sería la correcta?",
        opciones: [
          "Ninguna de las anteriores.",
          "DROP COLUMN sueldo FROM empleados;",
          "ALTER TABLE empleados DELETE sueldo;",
          "ALTER TABLE empleados DROP sueldo;",
        ],
        respuestaCorrecta: 3,
        explicacion:
          "La sintaxis correcta para eliminar una columna de una tabla en SQL es 'ALTER TABLE [nombre_tabla] DROP [nombre_columna]'. Por lo tanto, la query correcta es 'ALTER TABLE empleados DROP sueldo;'. Las otras opciones contienen errores de sintaxis o utilizan palabras clave incorrectas."
      },
      {
        id: 7102,
        moduloId: 702,
        pregunta: "Marca la respuesta correcta:",
        opciones: [
          "Ninguna es correcta.",
          "La sentencia CREATE DATABASE no pertenece al DDL ni al DML.",
          "La sentencia CREATE DATABASE pertenece al DDL (Lenguaje de DEFINICIÓN de Datos).",
          "La sentencia CREATE DATABASE pertenece al DML (Lenguaje de MANIPULACIÓN de Datos).",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "La sentencia CREATE DATABASE pertenece al DDL (Lenguaje de Definición de Datos). El DDL se utiliza para definir la estructura de una base de datos, incluyendo la creación de la propia base de datos, tablas, índices, restricciones, etc. Otros comandos DDL incluyen ALTER, DROP, TRUNCATE y RENAME."
      },
      {
        id: 7103,
        moduloId: 702,
        pregunta: "Marca la respuesta correcta:",
        opciones: [
          "La sentencia CREATE pertenece al DML (Lenguaje de MANIPULACIÓN de Datos).",
          "La sentencia CREATE pertenece al DDL (Lenguaje de DEFINICIÓN de Datos).",
          "La sentencia CREATE no pertenece al DDL ni al DML.",
          "Ninguna es correcta.",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "La sentencia CREATE pertenece al DDL (Lenguaje de Definición de Datos). El comando CREATE se utiliza para crear objetos de base de datos como tablas, vistas, índices, procedimientos almacenados, etc. El DDL se ocupa de la definición y estructura de la base de datos, mientras que el DML se utiliza para manipular los datos dentro de esas estructuras."
      },
      {
        id: 7104,
        moduloId: 702,
        pregunta: "Si queremos eliminar las columnas observaciones y departamento de la tabla empleados, debemos ejecutar la siguiente query:",
        opciones: [
          "ALTER TABLE empleados DROP observaciones AND departamento;",
          "Ninguna es correcta.",
          "ALTER TABLE empleados DROP observaciones, DROP departamento;",
          "ALTER TABLE empleados DROP observaciones, departamento;",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "Para eliminar múltiples columnas de una tabla en una sola sentencia SQL, debemos usar la sintaxis 'ALTER TABLE [nombre_tabla] DROP [columna1], DROP [columna2]'. Por lo tanto, la query correcta es 'ALTER TABLE empleados DROP observaciones, DROP departamento;'. Las otras opciones no utilizan la sintaxis correcta para eliminar múltiples columnas."
      },
      {
        id: 7105,
        moduloId: 702,
        pregunta: "Si tenemos creada la tabla empleados (no importa con qué campos) y ya tenemos 10 filas con información insertada en la misma, al ejecutar la query ALTER TABLE empleados ADD COLUMN sueldo FLOAT(7,2) UNSIGNED NOT NULL AFTER apellidos; creará la columna sueldo después de la columna apellidos y",
        opciones: [
          "La información del campo sueldo en todas las filas será 0.00",
          "La información del campo sueldo en todas las filas será NULL.",
          "Ninguna es correcta.",
          "La información del campo sueldo en todas las filas estará vacía.",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "Al agregar una nueva columna con la restricción NOT NULL y sin especificar un valor predeterminado (DEFAULT), MySQL asignará automáticamente el valor '0' para tipos numéricos como FLOAT. Por lo tanto, todas las filas existentes tendrán el valor 0.00 en la nueva columna 'sueldo'. La opción NULL no es posible debido a la restricción NOT NULL, y 'vacía' no es un estado válido para campos numéricos."
      },
      {
        id: 7106,
        moduloId: 702,
        pregunta: "Marca la respuesta correcta:",
        opciones: [
          "La sentencia DELETE pertenece al DML (Lenguaje de MANIPULACIÓN de Datos).",
          "La sentencia DELETE no pertenece al DDL ni al DML.",
          "La sentencia DELETE pertenece al DDL (Lenguaje de DEFINICIÓN de Datos).",
          "Ninguna es correcta.",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "La sentencia DELETE pertenece al DML (Lenguaje de Manipulación de Datos). El DML incluye comandos que manipulan los datos dentro de las tablas, como INSERT (insertar), UPDATE (actualizar), DELETE (eliminar) y SELECT (consultar). DELETE se utiliza para eliminar registros o filas de una tabla, afectando a los datos y no a la estructura de la base de datos."
      },
      {
        id: 7107,
        moduloId: 702,
        pregunta: "Marca la respuesta correcta:",
        opciones: [
          "Ninguna es correcta.",
          "La sentencia UPDATE pertenece al DML (Lenguaje de MANIPULACIÓN de Datos).",
          "La sentencia UPDATE no pertenece al DDL ni al DML.",
          "La sentencia UPDATE pertenece al DDL (Lenguaje de DEFINICIÓN de Datos).",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "La sentencia UPDATE pertenece al DML (Lenguaje de Manipulación de Datos). El DML se utiliza para manipular los datos dentro de las tablas, incluyendo INSERT, UPDATE, DELETE y SELECT. UPDATE específicamente se utiliza para modificar los valores de los registros existentes en una tabla, afectando a los datos y no a la estructura de la base de datos."
      },
      {
        id: 7108,
        moduloId: 702,
        pregunta: "Marca la respuesta correcta:",
        opciones: [
          "Ninguna es correcta.",
          "La sentencia ALTER TABLE no pertenece al DDL ni al DML.",
          "La sentencia ALTER TABLE pertenece al DDL (Lenguaje de DEFINICIÓN de Datos).",
          "La sentencia ALTER TABLE pertenece al DML (Lenguaje de MANIPULACIÓN de Datos).",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "La sentencia ALTER TABLE pertenece al DDL (Lenguaje de Definición de Datos). El DDL se utiliza para definir y modificar la estructura de una base de datos, incluyendo la creación y modificación de tablas, índices, restricciones, etc. ALTER TABLE específicamente se utiliza para cambiar la estructura de una tabla existente, como agregar o eliminar columnas, cambiar tipos de datos, agregar restricciones, etc."
      },
      {
        id: 7109,
        moduloId: 702,
        pregunta: "Marca la respuesta correcta:",
        opciones: [
          "La sentencia CREATE TABLE no pertenece al DDL ni al DML.",
          "La sentencia CREATE TABLE pertenece al DDL (Lenguaje de DEFINICIÓN de Datos).",
          "Ninguna es correcta.",
          "La sentencia CREATE TABLE pertenece al DML (Lenguaje de MANIPULACIÓN de Datos).",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "La sentencia CREATE TABLE pertenece al DDL (Lenguaje de Definición de Datos). El DDL se utiliza para definir y modificar la estructura de una base de datos. CREATE TABLE específicamente se utiliza para crear una nueva tabla en la base de datos, definiendo su estructura, columnas, tipos de datos, claves primarias, restricciones, etc. No manipula los datos en sí, sino que define dónde y cómo se almacenarán."
      },
      {
        id: 7110,
        moduloId: 702,
        pregunta: "Marca la respuesta correcta:",
        opciones: [
          "La sentencia INSERT pertenece al DDL (Lenguaje de DEFINICIÓN de Datos).",
          "La sentencia INSERT pertenece al DML (Lenguaje de MANIPULACIÓN de Datos).",
          "La sentencia INSERT no pertenece al DDL ni al DML.",
          "Ninguna es correcta.",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "La sentencia INSERT pertenece al DML (Lenguaje de Manipulación de Datos). El DML incluye comandos que manipulan los datos dentro de las tablas, como INSERT, UPDATE, DELETE y SELECT. INSERT específicamente se utiliza para agregar nuevos registros o filas a una tabla existente, manipulando así los datos y no la estructura de la base de datos."
      },
    ],
  };

  export default moduloSegundoTrimestre;