/**
 * Datos del módulo de Bases de Datos perteneciente a la asignatura de Bases de Datos.
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
 * // Importar el módulo de Bases de Datos
 * import moduloBasesDatos from '@data/modulos/basesDatos';
 *
 * function PreguntasAleatorias() {
 *   // Seleccionar 5 preguntas aleatorias del módulo
 *   const preguntasAleatorias = moduloBasesDatos.preguntas
 *     .sort(() => 0.5 - Math.random())
 *     .slice(0, 5);
 *
 *   return (
 *     <div>
 *       <h2>{moduloBasesDatos.nombre}</h2>
 *       {preguntasAleatorias.map(pregunta => (
 *         <QuestionCard key={pregunta.id} pregunta={pregunta} />
 *       ))}
 *     </div>
 *   );
 * }
 */
export const moduloDDLDML = {
    id: 201,
    nombre: "SQL: DDL y DML",
    asignaturaId: 2,
    descripcion: "Lenguaje de Definición de Datos (DDL) y Lenguaje de Manipulación de Datos (DML) en SQL para la creación, modificación y consulta de bases de datos relacionales.",
    preguntas: [
      // Sección DDL - Data Definition Language
      {
        id: 2001,
        moduloId: 201,
        pregunta: "¿Qué instrucción SQL crea una tabla llamada 'Empleado'?",
        opciones: [
          "ALTER TABLE Empleado ADD COLUMN (id INT, nombre VARCHAR(100));",
          "ADD TABLE Empleado (id INT, nombre VARCHAR(100));",
          "NEW TABLE Empleado (id INT, nombre VARCHAR(100));",
          "CREATE TABLE Empleado (id INT, nombre VARCHAR(100));"
        ],
        respuestaCorrecta: 3,
        explicacion: "CREATE TABLE es la instrucción SQL utilizada para crear una nueva tabla en una base de datos. En este caso, crea una tabla llamada 'Empleado' con dos columnas: 'id' de tipo entero y 'nombre' de tipo cadena variable con un máximo de 100 caracteres."
      },
      {
        id: 2002,
        moduloId: 201,
        pregunta: "¿Cuál es la manera correcta de añadir una columna a una tabla existente usando SQL?",
        opciones: [
          "ALTER TABLE Empleado ADD COLUMN edad INT;",
          "CREATE TABLE Empleado ADD edad INT;",
          "UPDATE TABLE Empleado ADD edad INT;",
          "ADD COLUMN edad INT IN Empleado;"
        ],
        respuestaCorrecta: 0,
        explicacion: "ALTER TABLE es la instrucción SQL que permite modificar la estructura de una tabla existente. La cláusula ADD COLUMN se utiliza para añadir una nueva columna. En este caso, se añade una columna 'edad' de tipo entero a la tabla 'Empleado'."
      },
      {
        id: 2003,
        moduloId: 201,
        pregunta: "¿Qué cláusula indica que una columna no puede tener valores repetidos?",
        opciones: [
          "CHECK",
          "UNIQUE",
          "PRIMARY KEY",
          "DEFAULT"
        ],
        respuestaCorrecta: 1,
        explicacion: "La restricción UNIQUE asegura que todos los valores en una columna sean diferentes (no repetidos). A diferencia de PRIMARY KEY, una tabla puede tener múltiples restricciones UNIQUE, y las columnas UNIQUE pueden contener valores NULL (aunque solo uno)."
      },
      {
        id: 2004,
        moduloId: 201,
        pregunta: "¿Cuál opción permite establecer automáticamente valores numéricos incrementales en una columna?",
        opciones: [
          "AUTOINCREMENTAL",
          "AUTONUMBER",
          "AUTO_INCREMENT",
          "AUTO_NUM"
        ],
        respuestaCorrecta: 2,
        explicacion: "AUTO_INCREMENT es una característica en MySQL (y similar en otros sistemas) que automáticamente genera un nuevo valor entero único cada vez que se inserta un nuevo registro. Normalmente se usa con la clave primaria para asignar identificadores únicos."
      },
      {
        id: 2005,
        moduloId: 201,
        pregunta: "¿Cómo definirías una columna con valores por defecto usando SQL?",
        opciones: [
          "Telefono VARCHAR(15) SET 'Desconocido'",
          "Telefono VARCHAR(15) AUTO 'Desconocido'",
          "Telefono VARCHAR(15) DEFAULT 'Desconocido'",
          "Telefono VARCHAR(15) VALUE 'Desconocido'"
        ],
        respuestaCorrecta: 2,
        explicacion: "La cláusula DEFAULT se utiliza para especificar un valor predeterminado para una columna. Este valor se inserta cuando no se proporciona uno explícitamente al insertar un nuevo registro. En este caso, si no se proporciona un valor para 'Telefono', se usará 'Desconocido'."
      },
      {
        id: 2006,
        moduloId: 201,
        pregunta: "¿Qué instrucción SQL eliminaría la columna 'Telefono' de la tabla 'Empleado'?",
        opciones: [
          "DROP COLUMN Telefono FROM Empleado;",
          "ALTER TABLE Empleado DROP COLUMN Telefono;",
          "ALTER TABLE Empleado REMOVE Telefono;",
          "ALTER TABLE Empleado DELETE COLUMN Telefono;"
        ],
        respuestaCorrecta: 1,
        explicacion: "ALTER TABLE se utiliza para modificar una tabla existente, y DROP COLUMN es la cláusula específica para eliminar una columna. La sintaxis correcta es 'ALTER TABLE nombre_tabla DROP COLUMN nombre_columna;'."
      },
      {
        id: 2007,
        moduloId: 201,
        pregunta: "¿Qué restricción asegura que una columna nunca contenga valores nulos?",
        opciones: [
          "CHECK",
          "DEFAULT",
          "NOT NULL",
          "UNIQUE"
        ],
        respuestaCorrecta: 2,
        explicacion: "La restricción NOT NULL se utiliza para garantizar que una columna no acepte valores NULL (vacíos). Esto obliga a que siempre se proporcione un valor para esa columna al insertar o actualizar registros."
      },
      {
        id: 2008,
        moduloId: 201,
        pregunta: "¿Cuál de estas instrucciones crea correctamente una clave primaria compuesta en SQL?",
        opciones: [
          "PRIMARY(id_empleado, id_proyecto)",
          "PRIMARY KEY(id_empleado, id_proyecto)",
          "PRIMARY KEY COMPOSED(id_empleado, id_proyecto)",
          "SET PRIMARY KEY(id_empleado, id_proyecto)"
        ],
        respuestaCorrecta: 1,
        explicacion: "Para crear una clave primaria compuesta (formada por múltiples columnas), se utiliza la sintaxis PRIMARY KEY seguida de las columnas entre paréntesis. Esta restricción garantiza que la combinación de valores en esas columnas sea única en toda la tabla."
      },
      {
        id: 2009,
        moduloId: 201,
        pregunta: "¿Qué sentencia SQL modificaría el tipo de dato de la columna 'salario' a DECIMAL(12,2)?",
        opciones: [
          "CHANGE COLUMN salario DECIMAL(12,2);",
          "ALTER TABLE empleados UPDATE salario DECIMAL(12,2);",
          "ALTER salario COLUMN DECIMAL(12,2);",
          "ALTER TABLE empleados MODIFY COLUMN salario DECIMAL(12,2);"
        ],
        respuestaCorrecta: 3,
        explicacion: "La instrucción ALTER TABLE con la cláusula MODIFY COLUMN se utiliza para cambiar el tipo de datos o las propiedades de una columna existente. La sintaxis correcta es 'ALTER TABLE tabla MODIFY COLUMN columna nuevo_tipo;'."
      },
      {
        id: 2010,
        moduloId: 201,
        pregunta: "¿Cuál de las siguientes instrucciones SQL añade una restricción UNIQUE sobre la columna 'Email'?",
        opciones: [
          "SET UNIQUE Email ON empleados;",
          "ALTER empleados TABLE UNIQUE Email;",
          "ALTER TABLE empleados ADD CONSTRAINT UNIQUE (Email);",
          "ALTER TABLE empleados ADD COLUMN UNIQUE Email;"
        ],
        respuestaCorrecta: 2,
        explicacion: "Para añadir una restricción UNIQUE a una columna existente, se utiliza ALTER TABLE con ADD CONSTRAINT. Esto asegura que todos los valores en la columna 'Email' sean únicos en toda la tabla."
      },

      // Sección DML - Data Manipulation Language y Consultas
      {
        id: 2011,
        moduloId: 201,
        pregunta: "¿Cuál consulta devuelve todos los empleados ordenados por salario descendente?",
        opciones: [
          "SELECT * FROM empleados ORDER salario DESC;",
          "SELECT * FROM empleados ORDER BY salario DESC;",
          "SELECT * FROM empleados SORT salario DESC;"
        ],
        respuestaCorrecta: 1,
        explicacion: "La cláusula ORDER BY se utiliza para ordenar los resultados de una consulta. La palabra clave DESC (descendente) hace que los resultados se ordenen del valor más alto al más bajo. Por lo tanto, esta consulta devuelve todos los empleados ordenados de mayor a menor salario."
      },
      {
        id: 2012,
        moduloId: 201,
        pregunta: "¿Qué función SQL usarías para contar el número total de empleados en una tabla?",
        opciones: [
          "SUM()",
          "TOTAL()",
          "COUNT()",
          "AVG()"
        ],
        respuestaCorrecta: 2,
        explicacion: "La función COUNT() se utiliza para contar el número de filas en un conjunto de resultados. Por ejemplo, 'SELECT COUNT(*) FROM empleados;' devuelve el número total de empleados en la tabla."
      },
      {
        id: 2013,
        moduloId: 201,
        pregunta: "¿Cuál consulta calcula el salario promedio de todos los empleados?",
        opciones: [
          "SELECT SUM(salario) FROM empleados;",
          "SELECT TOTAL(salario) FROM empleados;",
          "SELECT AVG(salario) FROM empleados;",
          "SELECT COUNT(salario) FROM empleados;"
        ],
        respuestaCorrecta: 2,
        explicacion: "La función AVG() calcula el promedio de los valores en una columna numérica. En este caso, 'SELECT AVG(salario) FROM empleados;' devuelve el salario promedio de todos los empleados en la tabla."
      },
      {
        id: 2014,
        moduloId: 201,
        pregunta: "¿Qué sentencia SQL devuelve cuántos empleados hay por cada departamento?",
        opciones: [
          "SELECT departamento, SUM(*) FROM empleados;",
          "SELECT departamento, COUNT(*) FROM empleados GROUP BY departamento;",
          "SELECT departamento, COUNT(*) FROM empleados ORDER BY departamento;",
          "SELECT departamento, COUNT(*) FROM empleados GROUP BY salario;"
        ],
        respuestaCorrecta: 1,
        explicacion: "Esta consulta utiliza GROUP BY para agrupar los empleados por departamento y luego COUNT(*) para contar cuántos empleados hay en cada grupo. El resultado muestra cada departamento junto con su número total de empleados."
      },
      {
        id: 2015,
        moduloId: 201,
        pregunta: "¿Qué instrucción SQL devuelve todos los empleados cuyo salario es superior a 3000?",
        opciones: [
          "SELECT nombre FROM empleados ORDER BY salario > 3000;",
          "SELECT nombre FROM empleados WHERE salario > 3000;",
          "SELECT nombre FROM empleados HAVING salario > 3000;",
          "SELECT nombre FROM empleados SALARIO > 3000;"
        ],
        respuestaCorrecta: 1,
        explicacion: "La cláusula WHERE se utiliza para filtrar los resultados de una consulta según una condición. Esta consulta devuelve los nombres de todos los empleados que tienen un salario mayor a 3000."
      },
      {
        id: 2016,
        moduloId: 201,
        pregunta: "¿Qué consulta devuelve los empleados que tienen un salario superior al salario promedio general de la empresa?",
        opciones: [
          "SELECT nombre FROM empleados WHERE salario > AVG(salario);",
          "SELECT nombre FROM empleados WHERE salario > (SELECT AVG(salario) FROM empleados);",
          "SELECT nombre FROM empleados HAVING salario > AVG(salario);",
          "SELECT AVG(salario) FROM empleados WHERE salario > promedio;"
        ],
        respuestaCorrecta: 1,
        explicacion: "Esta consulta utiliza una subconsulta para calcular el salario promedio de todos los empleados, y luego la consulta principal selecciona los empleados cuyo salario es mayor que ese promedio. Las funciones agregadas como AVG() no pueden usarse directamente en la cláusula WHERE, por lo que se necesita una subconsulta."
      },
      {
        id: 2017,
        moduloId: 201,
        pregunta: "¿Qué cláusula se utiliza para filtrar resultados agrupados por condiciones específicas?",
        opciones: [
          "GROUP BY",
          "HAVING",
          "WHERE",
          "ORDER BY"
        ],
        respuestaCorrecta: 1,
        explicacion: "La cláusula HAVING se utiliza para filtrar los resultados de una consulta después de que se han agrupado con GROUP BY. Mientras que WHERE filtra filas individuales antes de agruparlas, HAVING filtra grupos completos, generalmente basándose en funciones agregadas como COUNT, SUM o AVG."
      },
      {
        id: 2018,
        moduloId: 201,
        pregunta: "¿Qué consulta obtiene los departamentos cuyo salario promedio supera los 4000 euros?",
        opciones: [
          "SELECT departamento FROM empleados GROUP BY departamento WHERE AVG(salario) > 4000;",
          "SELECT departamento FROM empleados WHERE AVG(salario) > 4000;",
          "SELECT departamento, AVG(salario) FROM empleados;",
          "SELECT departamento FROM empleados GROUP BY departamento HAVING AVG(salario) > 4000;"
        ],
        respuestaCorrecta: 3,
        explicacion: "Esta consulta agrupa los empleados por departamento, calcula el salario promedio para cada grupo, y luego usa HAVING para filtrar solo aquellos departamentos donde el salario promedio es mayor que 4000. La cláusula HAVING se usa porque estamos filtrando basado en un resultado de función agregada."
      },
      {
        id: 2019,
        moduloId: 201,
        pregunta: "¿Cuál consulta obtiene los empleados junto con sus departamentos (considerando que todos tienen departamento asignado)?",
        opciones: [
          "SELECT empleados.nombre, departamentos.nombre FROM empleados OUTER JOIN departamentos ON empleados.id_departamento = departamentos.id_departamento;",
          "SELECT empleados.nombre, departamentos.nombre FROM empleados JOIN departamentos ON empleados.id_departamento = departamentos.id_departamento;",
          "SELECT empleados.nombre, departamentos.nombre FROM empleados LEFT JOIN departamentos ON empleados.id_departamento = departamentos.id_departamento;",
          "SELECT empleados.nombre, departamentos.nombre FROM empleados RIGHT JOIN departamentos ON empleados.id_departamento = departamentos.id_departamento;"
        ],
        respuestaCorrecta: 1,
        explicacion: "Un JOIN regular (también llamado INNER JOIN) devuelve solo las filas donde hay coincidencias en ambas tablas. Como el enunciado especifica que todos los empleados tienen un departamento asignado, un JOIN normal es suficiente para obtener todos los empleados junto con la información de sus departamentos."
      },
      {
        id: 2020,
        moduloId: 201,
        pregunta: "¿Cuál consulta obtiene los empleados que NO están asignados a ningún proyecto (empleados sin asignación)?",
        opciones: [
          "SELECT empleados.nombre FROM empleados LEFT JOIN asignaciones ON empleados.id_empleado = asignaciones.id_empleado WHERE asignaciones.id_empleado IS NULL;",
          "SELECT empleados.nombre FROM empleados JOIN asignaciones ON empleados.id_empleado = asignaciones.id_empleado WHERE asignaciones.id_empleado IS NULL;",
          "SELECT empleados.nombre FROM empleados RIGHT JOIN asignaciones ON empleados.id_empleado = asignaciones.id_empleado;",
          "SELECT empleados.nombre FROM empleados JOIN asignaciones ON empleados.id_empleado = asignaciones.id_empleado;"
        ],
        respuestaCorrecta: 0,
        explicacion: "Esta consulta utiliza LEFT JOIN para incluir todos los empleados, estén o no asignados a un proyecto. El LEFT JOIN garantiza que todos los registros de la tabla de la izquierda (empleados) se incluyan, mientras que la condición WHERE asignaciones.id_empleado IS NULL filtra solo aquellos empleados que no tienen asignaciones correspondientes."
      }
    ]
  };

  export default moduloDDLDML;