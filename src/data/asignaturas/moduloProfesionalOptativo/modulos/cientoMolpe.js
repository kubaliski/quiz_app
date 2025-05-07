/**
 * Datos del módulo de SQL Básico perteneciente a la asignatura MPO (Módulo Profesional Optativo).
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
export const moduloMopeVL = {
    id: 704,
    nombre: "Test 114 preguntas Molpe VL",
    esExamen: true ,
    asignaturaId: 7,
    descripcion:
      "Conceptos básicos de SQL, comandos fundamentales, funciones de agregación y joins básicos.",
    preguntas: [
      {
        id: 7400,
        moduloId: 704,
        pregunta: "¿Qué comando se utiliza para eliminar una tabla en SQL?",
        opciones: [
          "DELETE TABLE",
          "ERASE TABLE",
          "DROP TABLE",
          "REMOVE TABLE",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "DROP TABLE es el comando SQL estándar para eliminar una tabla completa, incluyendo su estructura y todos sus datos."
      },
      {
        id: 7401,
        moduloId: 704,
        pregunta: "¿Qué palabra clave se usa para evitar valores duplicados en una consulta SELECT?",
        opciones: [
          "DISTINCT",
          "UNIQUE",
          "DIFFERENT",
          "FILTER",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "DISTINCT es la palabra clave utilizada después de SELECT para eliminar registros duplicados del conjunto de resultados."
      },
      {
        id: 7402,
        moduloId: 704,
        pregunta: "¿Cuál es la cláusula utilizada para ordenar los resultados de una consulta?",
        opciones: [
          "SORT",
          "ORDER BY",
          "ARRANGE",
          "GROUP BY",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "ORDER BY es la cláusula que permite ordenar los resultados de una consulta en orden ascendente (ASC) o descendente (DESC)."
      },
      {
        id: 7403,
        moduloId: 704,
        pregunta: "¿Qué operador lógico se usa para combinar condiciones en una cláusula WHERE?",
        opciones: [
          "LINK",
          "WITH",
          "UNION",
          "AND",
        ],
        respuestaCorrecta: 3,
        explicacion:
          "AND es el operador lógico que permite combinar múltiples condiciones en una cláusula WHERE. También existen OR y NOT."
      },
      {
        id: 7404,
        moduloId: 704,
        pregunta: "¿Cuál de los siguientes tipos de datos es adecuado para almacenar texto en SQL?",
        opciones: [
          "DATE",
          "INTEGER",
          "FLOAT",
          "VARCHAR",
        ],
        respuestaCorrecta: 3,
        explicacion:
          "VARCHAR es el tipo de dato más común para almacenar cadenas de texto de longitud variable en SQL."
      },
      {
        id: 7405,
        moduloId: 704,
        pregunta: "¿Cuál es el valor que representa 'sin datos' en una base de datos SQL?",
        opciones: [
          "NULL",
          "ZERO",
          "BLANK",
          "EMPTY",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "NULL representa la ausencia de un valor o un valor desconocido en SQL. Es diferente de cero o de una cadena vacía."
      },
      {
        id: 7406,
        moduloId: 704,
        pregunta: "¿Qué comando se usa para agregar una nueva fila a una tabla?",
        opciones: [
          "APPEND",
          "PUSH INTO",
          "INSERT INTO",
          "ADD",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "INSERT INTO es el comando SQL que se utiliza para agregar nuevas filas (registros) a una tabla."
      },
      {
        id: 7407,
        moduloId: 704,
        pregunta: "¿Cuál es la cláusula que se usa para agrupar resultados que tienen el mismo valor en una columna?",
        opciones: [
          "CLUSTER BY",
          "JOIN",
          "GROUP BY",
          "ORDER BY",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "GROUP BY agrupa filas que tienen los mismos valores en columnas específicas y se usa comúnmente con funciones de agregación."
      },
      {
        id: 7408,
        moduloId: 704,
        pregunta: "¿Qué comando se usa para modificar datos existentes en una tabla?",
        opciones: [
          "UPDATE",
          "CHANGE",
          "ALTER",
          "MODIFY",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "UPDATE es el comando SQL utilizado para modificar datos existentes en una tabla. ALTER se usa para modificar la estructura de una tabla."
      },
      {
        id: 7409,
        moduloId: 704,
        pregunta: "¿Qué comando de SQL se usa para eliminar todos los registros de una tabla sin borrar la tabla en sí?",
        opciones: [
          "TRUNCATE TABLE",
          "DROP TABLE",
          "DELETE DATABASE",
          "REMOVE TABLE",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "TRUNCATE TABLE elimina todos los registros de una tabla pero mantiene la estructura de la tabla. Es más rápido que DELETE para grandes cantidades de datos."
      },
      {
        id: 7410,
        moduloId: 704,
        pregunta: "¿Qué operador se usa en SQL para buscar un patrón en una columna de texto?",
        opciones: [
          "LIKE",
          "FIND",
          "SEARCH",
          "LOCATE",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "LIKE es el operador utilizado para buscar patrones en cadenas de texto, usando % para cualquier secuencia de caracteres y _ para un carácter individual."
      },
      {
        id: 7411,
        moduloId: 704,
        pregunta: "¿Qué sentencia SQL se utiliza para cambiar la estructura de una tabla existente?",
        opciones: [
          "ALTER TABLE",
          "MODIFY TABLE",
          "CHANGE TABLE",
          "UPDATE TABLE",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "ALTER TABLE es la sentencia utilizada para modificar la estructura de una tabla existente, como agregar, eliminar o modificar columnas."
      },
      {
        id: 7412,
        moduloId: 704,
        pregunta: "¿Cuál de las siguientes sentencias se usa para recuperar datos de una base de datos?",
        opciones: [
          "GET",
          "EXTRACT",
          "SELECT",
          "FETCH",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "SELECT es la sentencia fundamental en SQL para consultar y recuperar datos de una base de datos."
      },
      {
        id: 7413,
        moduloId: 704,
        pregunta: "¿Qué palabra clave se usa en SQL para asegurar que una columna no pueda contener valores NULL?",
        opciones: [
          "REQUIRED",
          "NOT NULL",
          "UNIQUE",
          "NO EMPTY",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "NOT NULL es la restricción que se aplica a una columna para garantizar que siempre contenga un valor, no puede ser NULL."
      },
      {
        id: 7414,
        moduloId: 704,
        pregunta: "¿Qué cláusula se utiliza en SQL para filtrar registros después de realizar una agrupación?",
        opciones: [
          "WHERE",
          "HAVING",
          "ORDER BY",
          "GROUP BY",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "HAVING se utiliza para filtrar grupos después de una cláusula GROUP BY, mientras que WHERE filtra filas antes de la agrupación."
      },
      {
        id: 7415,
        moduloId: 704,
        pregunta: "¿Qué tipo de clave se utiliza para identificar de manera única un registro en una tabla?",
        opciones: [
          "PRIMARY KEY",
          "FOREIGN KEY",
          "UNIQUE KEY",
          "IDENTIFIER KEY",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "PRIMARY KEY es la clave principal que identifica de manera única cada fila en una tabla. Solo puede haber una PRIMARY KEY por tabla."
      },
      {
        id: 7416,
        moduloId: 704,
        pregunta: "¿Qué comando se utiliza para eliminar una base de datos completa en SQL?",
        opciones: [
          "DROP DATABASE",
          "ERASE DATABASE",
          "DELETE DATABASE",
          "REMOVE DATABASE",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "DROP DATABASE es el comando que elimina una base de datos completa junto con todas sus tablas y datos."
      },
      {
        id: 7417,
        moduloId: 704,
        pregunta: "¿Qué función SQL devuelve el número de filas que cumple una condición?",
        opciones: [
          "SUM()",
          "COUNT()",
          "TOTAL()",
          "NUMBER()",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "COUNT() es la función de agregación que devuelve el número de filas que coinciden con una condición específica."
      },
      {
        id: 7418,
        moduloId: 704,
        pregunta: "¿Cuál es el propósito de un alias en una consulta SQL?",
        opciones: [
          "Crear índices en tablas",
          "Cambiar temporalmente el nombre de una tabla o columna",
          "Eliminar registros duplicados",
          "Actualizar datos automáticamente",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "Un alias proporciona un nombre temporal a una tabla o columna en una consulta, útil para simplificar consultas complejas o mejorar la legibilidad."
      },
      {
        id: 7419,
        moduloId: 704,
        pregunta: "¿Cuál es el resultado de una función agregada como SUM() en SQL?",
        opciones: [
          "Devuelve la suma de valores de una columna",
          "Devuelve el número total de filas",
          "Devuelve el valor máximo de una columna",
          "Devuelve el primer valor encontrado",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "SUM() calcula la suma total de todos los valores de una columna numérica en un conjunto de resultados."
      },
      {
        id: 7420,
        moduloId: 704,
        pregunta: "¿Qué palabra clave se usa para extraer datos de varias tablas basándose en una relación entre ellas?",
        opciones: [
          "MERGE",
          "JOIN",
          "LINK",
          "COMBINE",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "JOIN es la palabra clave utilizada para combinar datos de varias tablas basándose en una relación entre ellas."
      },
      {
        id: 7421,
        moduloId: 704,
        pregunta: "¿Cuál de las siguientes funciones SQL devuelve la media de un conjunto de valores?",
        opciones: [
          "SUM()",
          "AVG()",
          "MEDIAN()",
          "MEAN()",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "AVG() calcula la media (promedio) aritmética de los valores en una columna numérica."
      },
      {
        id: 7422,
        moduloId: 704,
        pregunta: "¿Qué operador de comparación se utiliza para comprobar si un valor está en un conjunto de resultados?",
        opciones: [
          "CONTAINS",
          "ANY",
          "IN",
          "HAS",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "IN es el operador utilizado para verificar si un valor coincide con cualquier valor en una lista específica."
      },
      {
        id: 7423,
        moduloId: 704,
        pregunta: "¿Qué comando se utiliza para cambiar el nombre de una tabla en SQL?",
        opciones: [
          "ALTER NAME",
          "RENAME TABLE",
          "CHANGE NAME",
          "MODIFY TABLE",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "RENAME TABLE es el comando utilizado para cambiar el nombre de una tabla existente en la base de datos."
      },
      {
        id: 7424,
        moduloId: 704,
        pregunta: "¿Qué función se puede usar para redondear siempre a la alta un número decimal en SQL?",
        opciones: [
          "CEIL()",
          "ROUND()",
          "FLOOR()",
          "TRUNCATE()",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "CEIL() o CEILING() redondea un número hacia arriba al entero más cercano, sin importar el valor decimal."
      },
      {
        id: 7425,
        moduloId: 704,
        pregunta: "¿Cuál de las siguientes instrucciones se usa para crear una nueva tabla en SQL?",
        opciones: [
          "MAKE TABLE",
          "CREATE TABLE",
          "NEW TABLE",
          "BUILD TABLE",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "CREATE TABLE es la sentencia SQL utilizada para crear una nueva tabla especificando sus columnas y tipos de datos."
      },
      {
        id: 7426,
        moduloId: 704,
        pregunta: "¿Qué comando se usa para eliminar filas específicas de una tabla basándose en una condición?",
        opciones: [
          "ERASE",
          "REMOVE",
          "DELETE FROM",
          "DROP",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "DELETE FROM se utiliza para eliminar filas específicas de una tabla según una condición especificada en la cláusula WHERE."
      },
      {
        id: 7427,
        moduloId: 704,
        pregunta: "¿Cuál es la palabra clave en SQL para ordenar resultados de manera descendente?",
        opciones: [
          "DESC",
          "DOWN",
          "LOWER",
          "ORDER DOWN",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "DESC (descendente) se utiliza junto con ORDER BY para ordenar resultados en orden decreciente."
      },
      {
        id: 7428,
        moduloId: 704,
        pregunta: "¿Qué operador se utiliza para verificar si un valor es NULL en SQL?",
        opciones: [
          "IS NOT NULL",
          "= NULL",
          "== NULL",
          "IS NULL",
        ],
        respuestaCorrecta: 3,
        explicacion:
          "IS NULL es el operador correcto para verificar si un valor es NULL. No se pueden usar operadores de comparación como = con NULL."
      },
      {
        id: 7429,
        moduloId: 704,
        pregunta: "¿Qué tipo de dato es más adecuado para almacenar números enteros en SQL?",
        opciones: [
          "TEXT",
          "VARCHAR",
          "INTEGER",
          "DATE",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "INTEGER es el tipo de dato específico para almacenar números enteros sin decimales en SQL."
      },
      {
        id: 7430,
        moduloId: 704,
        pregunta: "¿Cuál es la diferencia principal entre INNER JOIN y LEFT JOIN?",
        opciones: [
          "LEFT JOIN devuelve todas las filas de la tabla de la izquierda, INNER JOIN solo las coincidentes",
          "INNER JOIN devuelve más resultados que LEFT JOIN",
          "LEFT JOIN elimina duplicados automáticamente",
          "INNER JOIN permite datos NULL en la tabla de la izquierda",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "LEFT JOIN incluye todas las filas de la tabla izquierda, mientras que INNER JOIN solo incluye filas que tienen coincidencias en ambas tablas."
      },
      {
        id: 7431,
        moduloId: 704,
        pregunta: "¿Cuál de estas funciones de agregación devuelve el valor más grande de una columna?",
        opciones: [
          "MAX()",
          "GREATEST()",
          "TOP()",
          "BIGGEST()",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "MAX() es la función de agregación estándar que devuelve el valor máximo de una columna."
      },
      {
        id: 7432,
        moduloId: 704,
        pregunta: "¿Cuál es el propósito de usar un índice en una tabla de base de datos?",
        opciones: [
          "Reducir el tamaño de la tabla",
          "Incrementar la velocidad de las búsquedas",
          "Crear copias de seguridad automáticas",
          "Ordenar los datos de forma permanente",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "Los índices mejoran significativamente la velocidad de las consultas de búsqueda al evitar escaneos completos de tabla."
      },
      {
        id: 7433,
        moduloId: 704,
        pregunta: "¿Qué cláusula de SQL permite limitar el número de filas que devuelve una consulta?",
        opciones: [
          "LIMIT",
          "TOP",
          "ROWS",
          "FETCH",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "LIMIT es la cláusula utilizada en la mayoría de sistemas SQL para restringir el número de filas devueltas en una consulta."
      },
      {
        id: 7434,
        moduloId: 704,
        pregunta: "¿Cuál es la diferencia principal entre un LEFT JOIN y un RIGHT JOIN en SQL?",
        opciones: [
          "LEFT JOIN devuelve solo las filas de la tabla de la derecha, RIGHT JOIN de la tabla de la izquierda",
          "LEFT JOIN devuelve todas las filas de la tabla de la izquierda, RIGHT JOIN de la tabla de la derecha",
          "LEFT JOIN elimina filas duplicadas, RIGHT JOIN no",
          "LEFT JOIN se usa solo en relaciones 1:N, RIGHT JOIN solo en 1:1",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "LEFT JOIN devuelve todas las filas de la tabla de la izquierda más las coincidencias de la derecha, mientras que RIGHT JOIN hace lo opuesto."
      },
      {
        id: 7435,
        moduloId: 704,
        pregunta: "¿Qué tipo de relación existe entre una tabla CLIENTS y una tabla ORDERS en un modelo relacional si un cliente puede tener muchos pedidos pero un pedido puede ser realizado por un solo cliente?",
        opciones: [
          "1:1",
          "1:N",
          "N:M",
          "N:1",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "Esta es una relación 1:N (uno a muchos), donde un cliente puede tener múltiples pedidos, pero cada pedido pertenece a un único cliente."
      },
      {
        id: 7436,
        moduloId: 704,
        pregunta: "Cuando se usa un INNER JOIN en SQL, ¿qué resultado se obtiene?",
        opciones: [
          "Todos los registros de ambas tablas, incluso si no coinciden",
          "Solo los registros que coinciden en ambas tablas",
          "Todos los registros de la tabla de la izquierda, sin importar si coinciden",
          "Todos los registros de la tabla de la derecha, sin importar si coinciden",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "INNER JOIN devuelve únicamente las filas que tienen coincidencias en ambas tablas basadas en la condición de JOIN."
      },
      {
        id: 7437,
        moduloId: 704,
        pregunta: "¿Qué tipo de relación representa una tabla DETAILS que contiene las FK product_id y order_id de las tablas PRODUCTS y ORDERS?",
        opciones: [
          "1:1",
          "1:N",
          "N:M",
          "0:N",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "Una tabla DETAILS con claves foráneas de PRODUCTS y ORDERS representa una relación N:M (muchos a muchos) entre productos y pedidos."
      },
      {
        id: 7438,
        moduloId: 704,
        pregunta: "En un esquema E/R, ¿cuál de los siguientes describe mejor una relación 1:1 entre las entidades EMPLOYEES y OFFICES?",
        opciones: [
          "Un empleado puede estar en varias oficinas, pero cada oficina tiene un solo empleado",
          "Cada empleado tiene una sola oficina asignada y cada oficina tiene un solo empleado",
          "Un empleado puede tener muchas oficinas, pero cada oficina solo tiene un empleado",
          "Los empleados no tienen asignada ninguna oficina",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "En una relación 1:1, cada empleado está asociado con exactamente una oficina y cada oficina está asignada a exactamente un empleado."
      },
      {
        id: 7439,
        moduloId: 704,
        pregunta: "¿Qué hace el LEFT JOIN en una consulta SQL?",
        opciones: [
          "Devuelve todos los registros de la tabla de la izquierda, y los registros correspondientes de la tabla de la derecha",
          "Devuelve solo los registros que coinciden en ambas tablas",
          "Devuelve todos los registros de la tabla de la derecha, y los correspondientes de la tabla de la izquierda",
          "Devuelve solo los registros de la tabla de la derecha, aunque no coincidan",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "LEFT JOIN incluye todas las filas de la tabla izquierda, y agrega los datos correspondientes de la tabla derecha. Si no hay coincidencia, muestra NULL para las columnas de la tabla derecha."
      },
      {
        id: 7440,
        moduloId: 704,
        pregunta: "En un modelo relacional, ¿cómo se representa una relación 1:N entre CATEGORIES y PRODUCTS?",
        opciones: [
          "Un producto puede pertenecer a varias categorías, pero cada categoría tiene un solo producto",
          "Cada categoría puede tener muchos productos, pero cada producto pertenece a una sola categoría",
          "Cada producto tiene una sola categoría y cada categoría tiene muchos productos",
          "Ninguna de las anteriores",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "En una relación 1:N, una categoría puede tener múltiples productos asociados, pero cada producto pertenece a una única categoría."
      },
      {
        id: 7441,
        moduloId: 704,
        pregunta: "En un modelo E/R, ¿cómo se representa una relación N:M entre las tablas BOOKS y AUTHORS?",
        opciones: [
          "Una tabla intermedia BOOKS_AUTHORS que contiene las referencias a las claves primarias de ambas tablas",
          "Un campo author_id en la tabla BOOKS",
          "Un campo book_id en la tabla AUTHORS",
          "Ninguna de las anteriores",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "Las relaciones N:M se modelan mediante una tabla intermedia que contiene las claves primarias de ambas entidades relacionadas."
      },
      {
        id: 7442,
        moduloId: 704,
        pregunta: "¿Qué sucede si se usa un RIGHT JOIN entre dos tablas en SQL?",
        opciones: [
          "Se obtienen todas las filas de la tabla de la izquierda, y solo las filas coincidentes de la tabla de la derecha (las no coincidentes mostrarán NULL)",
          "Se obtienen solo las filas coincidentes de ambas tablas",
          "Se obtienen todas las filas de la tabla de la derecha, y solo las filas coincidentes de la tabla de la izquierda (las no coincidentes mostrarán NULL)",
          "Se obtienen todas las filas de ambas tablas, sin importar si coinciden o no",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "RIGHT JOIN incluye todas las filas de la tabla derecha y agrega los datos coincidentes de la tabla izquierda, mostrando NULL donde no hay coincidencias."
      },
      {
        id: 7443,
        moduloId: 704,
        pregunta: "¿Cuál de las siguientes consultas devuelve el número total de pedidos realizados en la tabla ORDERS?",
        opciones: [
          "SELECT COUNT(*) FROM orders;",
          "SELECT SUM(*) FROM orders;",
          "SELECT TOTAL(*) FROM orders;",
          "SELECT NUMBER(*) FROM orders;",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "COUNT(*) es la función de agregación correcta para contar el número total de filas (registros) en una tabla."
      },
      {
        id: 7444,
        moduloId: 704,
        pregunta: "¿Qué consulta devuelve todos los productos cuyo precio es mayor que 100 ordenados de mayor a menor?",
        opciones: [
          "SELECT * FROM products WHERE price > 100 ORDER BY price ASC;",
          "SELECT * FROM products WHERE price > 100 ORDER BY price DESC;",
          "SELECT price FROM products WHERE price > 100;",
          "SELECT products WHERE price > 100 SORT BY price DESC;",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "Esta consulta selecciona todos los productos con precio mayor a 100 y los ordena de forma descendente (mayor a menor) con ORDER BY price DESC."
      },
      {
        id: 7445,
        moduloId: 704,
        pregunta: "¿Cómo escribirías una consulta que obtiene todos los clientes cuyo nombre empieza por 'A'?",
        opciones: [
          "SELECT * FROM clients WHERE name LIKE '%A';",
          "SELECT * FROM clients WHERE name LIKE 'A%';",
          "SELECT * FROM clients WHERE name = 'A%';",
          "SELECT * FROM clients WHERE name = '%A%';",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "LIKE 'A%' busca todos los valores que empiezan con 'A'. El % representa cualquier cantidad de caracteres después de 'A'."
      },
      {
        id: 7446,
        moduloId: 704,
        pregunta: "¿Qué devuelve esta consulta SQL?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT DISTINCT brand FROM products;`,
          lenguaje: "sql"
        },
        opciones: [
          "Muestra todas las marcas repetidas de productos.",
          "Muestra todas las marcas, sin repetir.",
          "Elimina la columna marca de productos.",
          "Muestra solo productos cuyo nombre es distinto."
        ],
        respuestaCorrecta: 1,
        explicacion: "DISTINCT elimina registros duplicados, mostrando cada marca única una sola vez en el resultado."
      },
      {
        id: 7447,
        moduloId: 704,
        pregunta: "¿Qué devuelve esta consulta SQL?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT AVG(price) FROM products;`,
          lenguaje: "sql"
        },
        opciones: [
          "Suma todos los precios de productos.",
          "Calcula el precio más bajo entre todos los productos.",
          "Calcula la media de los precios de todos los productos.",
          "Devuelve el precio más alto de la tabla productos."
        ],
        respuestaCorrecta: 2,
        explicacion: "AVG() calcula el promedio (media aritmética) de todos los valores de la columna price."
      },
      {
        id: 7448,
        moduloId: 704,
        pregunta: "¿Qué consulta devolvería los pedidos realizados entre 2023-01-01 y 2023-12-31?",
        opciones: [
          "SELECT * FROM orders WHERE order_date IN (2023-01-01, 2023-12-31);",
          "SELECT * FROM orders WHERE order_date BETWEEN '2023-01-01' AND '2023-12-31';",
          "SELECT * FROM orders WHERE order_date = '2023-01-01' OR '2023-12-31';",
          "SELECT * FROM orders WHERE order_date > '2023-01-01';",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "BETWEEN se utiliza para seleccionar valores dentro de un rango específico, incluyendo los límites del rango."
      },
      {
        id: 7449,
        moduloId: 704,
        pregunta: "¿Qué efecto tiene usar GROUP BY en una consulta?",
        opciones: [
          "Agrupa filas que tienen los mismos valores en las columnas especificadas.",
          "Combina dos tablas en una sola.",
          "Filtra las filas que cumplen una condición.",
          "Ordena las filas de la consulta.",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "GROUP BY agrupa filas con valores iguales en las columnas especificadas y se utiliza típicamente con funciones de agregación."
      },
      {
        id: 7450,
        moduloId: 704,
        pregunta: "¿Cómo obtendrías la cantidad total de unidades vendidas por producto?",
        opciones: [
          "SELECT product_id, COUNT(*) FROM orders_details GROUP BY product_id;",
          "SELECT product_id, SUM(amount) FROM orders_details GROUP BY product_id;",
          "SELECT product_id, AVG(amount) FROM orders_details;",
          "SELECT product_id, amount FROM orders_details;",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "SUM(amount) calculará la suma total de unidades y GROUP BY product_id agrupará los resultados por producto."
      },
      {
        id: 7451,
        moduloId: 704,
        pregunta: "¿Qué devuelve esta consulta SQL?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT name FROM clients WHERE address IS NULL;`,
          lenguaje: "sql"
        },
        opciones: [
          "Devuelve clientes que no tienen un email.",
          "Devuelve clientes sin dirección de envío registrada.",
          "Devuelve todos los clientes.",
          "Devuelve clientes cuyo nombre es NULL."
        ],
        respuestaCorrecta: 1,
        explicacion: "La condición WHERE address IS NULL selecciona solo aquellos registros donde la dirección no tiene valor asignado."
      },
      {
        id: 7452,
        moduloId: 704,
        pregunta: "¿Cuál es la manera más correcta, entre estas consultas, de mostrar todos los productos que no tienen stock disponible?",
        opciones: [
          "SELECT * FROM products WHERE stock = 0;",
          "SELECT * FROM products WHERE stock > 0;",
          "SELECT * FROM products WHERE stock IS NULL;",
          "SELECT * FROM products WHERE stock <> 0;",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "Para encontrar productos sin stock, necesitamos verificar que stock sea igual a 0, no NULL ni otro valor."
      },
      {
        id: 7453,
        moduloId: 704,
        pregunta: "¿Qué consulta devuelve los nombres de los productos con un precio superior al precio medio de todos los productos?",
        opciones: [
          "SELECT name FROM products WHERE price > (SELECT price FROM products);",
          "SELECT name FROM products WHERE price > (SELECT AVG(price) FROM products);",
          "SELECT name FROM products WHERE price IN (SELECT AVG(price) FROM products);",
          "SELECT name FROM products WHERE price > AVG(price);",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "Esta consulta utiliza una subconsulta para calcular primero el precio medio de todos los productos y luego selecciona solo aquellos con precio superior."
      },
      {
        id: 7454,
        moduloId: 704,
        pregunta: "¿Qué hace una cláusula HAVING en SQL?",
        opciones: [
          "Filtra filas después de hacer un GROUP BY.",
          "Filtra columnas seleccionadas en la consulta.",
          "Establece condiciones para combinaciones de tablas.",
          "Elimina filas duplicadas en el resultado.",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "HAVING se utiliza para filtrar grupos resultantes después de aplicar GROUP BY, mientras que WHERE filtra filas antes del agrupamiento."
      },
      {
        id: 7455,
        moduloId: 704,
        pregunta: "¿Cuál de estas consultas devuelve los clientes que han realizado más de 5 pedidos?",
        opciones: [
          "SELECT client_id FROM orders WHERE COUNT(*) > 5;",
          "SELECT client_id FROM orders GROUP BY client_id HAVING COUNT(*) > 5;",
          "SELECT client_id FROM orders GROUP BY client_id WHERE COUNT(*) > 5;",
          "SELECT client_id FROM orders WHERE client_id > 5 GROUP BY client_id;",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "Esta consulta agrupa por client_id y utiliza HAVING para filtrar grupos que tengan más de 5 registros (pedidos)."
      },
      {
        id: 7456,
        moduloId: 704,
        pregunta: "¿Cuál es el propósito principal de un LEFT JOIN?",
        opciones: [
          "Devolver solo filas que coinciden en ambas tablas.",
          "Devolver todas las filas de la tabla de la izquierda, aunque no haya coincidencia en la derecha.",
          "Devolver todas las filas de la tabla de la derecha.",
          "Devolver solo las filas que no coinciden.",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "LEFT JOIN incluye todas las filas de la tabla izquierda y agrega información de la tabla derecha cuando hay coincidencias, mostrando NULL cuando no las hay."
      },
      {
        id: 7457,
        moduloId: 704,
        pregunta: "¿Qué hace un RIGHT JOIN entre dos tablas?",
        opciones: [
          "Devuelve todas las filas de la primera tabla, y solo las coincidencias de la segunda.",
          "Devuelve todas las filas de la segunda tabla, y solo las coincidencias de la primera.",
          "Devuelve únicamente las filas comunes a ambas tablas.",
          "Devuelve todas las combinaciones posibles de filas.",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "RIGHT JOIN devuelve todas las filas de la tabla derecha (segunda) y las coincidencias de la tabla izquierda, mostrando NULL donde no hay match."
      },
      {
        id: 7458,
        moduloId: 704,
        pregunta: "¿Cuál de estas consultas calcula la cantidad total vendida por producto y muestra solo los que superan 100 unidades?",
        opciones: [
          "SELECT product_id, COUNT(*) FROM orders GROUP BY product_id HAVING COUNT(*) > 100;",
          "SELECT product_id, SUM(*) FROM orders WHERE amount > 100 GROUP BY product_id;",
          "SELECT product_id FROM orders GROUP BY product_id WHERE SUM(amount) > 100;",
          "SELECT product_id, COUNT(*) FROM orders WHERE amount > 100 GROUP BY product_id;",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "Esta consulta cuenta el número de registros por producto y filtra con HAVING solo aquellos que tienen más de 100 registros."
      },
      {
        id: 7459,
        moduloId: 704,
        pregunta: "¿Cuál de estas consultas muestra el producto más caro utilizando una subconsulta?",
        opciones: [
          "SELECT * FROM products WHERE price = (SELECT MIN(price) FROM products);",
          "SELECT * FROM products WHERE price = (SELECT MAX(price) FROM products);",
          "SELECT * FROM products ORDER BY price ASC LIMIT 1;",
          "SELECT name FROM products GROUP BY price;",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "Esta consulta busca el producto con el precio igual al valor máximo de precio en la tabla."
      },
      {
        id: 7460,
        moduloId: 704,
        pregunta: "¿Qué significa hacer un INNER JOIN entre dos tablas?",
        opciones: [
          "Combinar todas las filas de ambas tablas, independientemente de coincidencias.",
          "Combinar filas que tienen coincidencias en ambas tablas.",
          "Combinar filas sin coincidencias.",
          "Mostrar únicamente filas de la primera tabla.",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "INNER JOIN devuelve solo las filas donde existe una coincidencia en ambas tablas según la condición de unión."
      },
      {
        id: 7461,
        moduloId: 704,
        pregunta: "¿Qué devuelve esta consulta SQL?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT name, SUM(quantity) FROM sales
      GROUP BY name
      HAVING SUM(quantity) >= 100;`,
          lenguaje: "sql"
        },
        opciones: [
          "Muestra nombres y cantidades de ventas donde el total vendido es igual o mayor a 100.",
          "Muestra todos los nombres de clientes.",
          "Agrupa ventas por nombre de cliente, sin filtros.",
          "Suma el precio total de cada venta."
        ],
        respuestaCorrecta: 0,
        explicacion: "Esta consulta agrupa por nombre, suma las cantidades y muestra solo aquellos con suma total igual o mayor a 100."
      },
      {
        id: 7462,
        moduloId: 704,
        pregunta: "¿Qué consulta muestra los departamentos que tienen más de 10 empleados?",
        opciones: [
          "SELECT department_id FROM employees GROUP BY department_id HAVING COUNT(*) > 10;",
          "SELECT department_id FROM employees WHERE COUNT(*) > 10 GROUP BY department_id;",
          "SELECT department_id FROM employees WHERE SUM(*) > 10;",
          "SELECT department_id FROM employees HAVING COUNT(*) > 10;",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "Esta consulta agrupa empleados por departamento y usa HAVING para filtrar solo departamentos con más de 10 empleados."
      },
      {
        id: 7463,
        moduloId: 704,
        pregunta: "¿Cuál es la sintaxis correcta para agregar una clave externa a una tabla ya existente?",
        opciones: [
          "ALTER TABLE table_name ADD CONSTRAINT FOREIGN KEY (column) REFERENCES another_table_name(column);",
          "ALTER TABLE table_name MODIFY FOREIGN KEY (column) REFERENCES another_table_name(column);",
          "ALTER TABLE table_name SET FOREIGN KEY column REFERENCES another_table_name(column);",
          "ALTER TABLE table_name FOREIGN (column) REFERENCES another_table_name(column);",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "ALTER TABLE con ADD CONSTRAINT FOREIGN KEY es la sintaxis correcta para agregar una restricción de clave externa a una tabla existente."
      },
      {
        id: 7464,
        moduloId: 704,
        pregunta: "¿Qué sucede si intentamos eliminar una fila de una tabla principal a la que apunta una clave externa sin ON DELETE?",
        opciones: [
          "Se elimina automáticamente en la tabla secundaria.",
          "La operación falla con un error de restricción.",
          "Se actualiza la clave externa a NULL.",
          "Se elimina también la clave primaria.",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "Sin especificar una acción ON DELETE, intentar eliminar una fila referenciada por una clave externa resultará en un error de restricción."
      },
      {
        id: 7465,
        moduloId: 704,
        pregunta: "¿Cuál de las siguientes opciones elimina correctamente una clave primaria de una tabla existente?",
        opciones: [
          "ALTER TABLE table DROP PRIMARY KEY;",
          "ALTER TABLE table DELETE PRIMARY KEY;",
          "ALTER TABLE table REMOVE PRIMARY KEY;",
          "ALTER TABLE table SET PRIMARY KEY NULL;",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "ALTER TABLE table DROP PRIMARY KEY es la sintaxis correcta para eliminar una restricción de clave primaria."
      },
      {
        id: 7466,
        moduloId: 704,
        pregunta: "¿Qué opción define una clave externa con acción 'de borrado en cascada'?",
        opciones: [
          "FOREIGN KEY (column) REFERENCES pk_table(column) ON DELETE CASCADE",
          "FOREIGN KEY (column) DELETE CASCADE REFERENCES pk_table(column)",
          "FOREIGN KEY (column) CASCADE DELETE pk_table(column)",
          "FOREIGN KEY (column) REFERENCES pk_table(column)",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "ON DELETE CASCADE especifica que cuando se elimina una fila en la tabla primaria, también se eliminan las filas relacionadas en la tabla secundaria."
      },
      {
        id: 7467,
        moduloId: 704,
        pregunta: "¿Qué hace el modificador ON DELETE SET NULL en una relación entre clave primaria y clave externa?",
        opciones: [
          "Elimina la fila de la tabla secundaria.",
          "Establece a NULL la clave externa cuando se elimina la fila de la tabla principal.",
          "Borra la tabla secundaria entera.",
          "No permite la eliminación de la fila principal.",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "ON DELETE SET NULL establece los valores de la clave externa a NULL cuando se elimina la fila referenciada en la tabla principal."
      },
      {
        id: 7468,
        moduloId: 704,
        pregunta: "¿Cuál de estas instrucciones agrega una columna nueva con una restricción de clave externa?",
        opciones: [
          "ALTER TABLE table_name ADD column_name INT, ADD CONSTRAINT FOREIGN KEY (column_name) REFERENCES another_table(id);",
          "ALTER TABLE table_name ADD COLUMN FOREIGN KEY column_name REFERENCES another_table(id);",
          "ALTER TABLE table_name SET column_name INT FOREIGN another_table(id);",
          "ALTER TABLE table_name ADD FOREIGN COLUMN column_name REFERENCES another_table(id);",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "Esta sintaxis primero agrega la columna y luego define la restricción de clave externa en una sola instrucción ALTER TABLE."
      },
      {
        id: 7469,
        moduloId: 704,
        pregunta: "¿Qué instrucción modifica el nombre de una tabla?",
        opciones: [
          "ALTER TABLE table_name RENAME TO new_table_name;",
          "MODIFY TABLE table_name RENAME new_table_name;",
          "RENAME TABLE table_name AS new_table_name;",
          "UPDATE TABLE table_name SET nombre = new_table_name;",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "ALTER TABLE table_name RENAME TO new_table_name es la sintaxis estándar para cambiar el nombre de una tabla."
      },
      {
        id: 7470,
        moduloId: 704,
        pregunta: "¿Cuál de los siguientes tipos de datos almacena números enteros en SQL?",
        opciones: [
          "VARCHAR",
          "DATE",
          "INTEGER",
          "BOOLEAN",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "INTEGER es el tipo de dato específico para almacenar números enteros positivos o negativos sin decimales."
      },
      {
        id: 7471,
        moduloId: 704,
        pregunta: "¿Qué tipo de datos deberías usar para almacenar un texto corto como un nombre?",
        opciones: [
          "VARCHAR",
          "BOOLEAN",
          "CHAR",
          "INT",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "VARCHAR es la mejor opción para textos cortos de longitud variable como nombres, ya que es eficiente en términos de almacenamiento."
      },
      {
        id: 7472,
        moduloId: 704,
        pregunta: "¿Cuál es el tipo de datos adecuado para almacenar valores TRUE o FALSE?",
        opciones: [
          "BOOLEAN",
          "INTEGER",
          "VARCHAR(1)",
          "DATE",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "BOOLEAN es el tipo de dato específicamente diseñado para almacenar valores verdadero/falso."
      },
      {
        id: 7473,
        moduloId: 704,
        pregunta: "¿Cuál sería el tipo de datos más apropiado para almacenar una fecha de nacimiento?",
        opciones: [
          "VARCHAR",
          "DATE",
          "TEXT",
          "BOOLEAN",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "DATE es el tipo de dato apropiado para almacenar fechas, permitiendo operaciones específicas de fechas y formateo correcto."
      },
      {
        id: 7474,
        moduloId: 704,
        pregunta: "¿Qué tipo de datos deberías usar para almacenar un número con decimales?",
        opciones: [
          "FLOAT",
          "BOOLEAN",
          "VARCHAR",
          "DATE",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "FLOAT o DECIMAL son tipos de datos adecuados para almacenar números con punto decimal."
      },
      {
        id: 7475,
        moduloId: 704,
        pregunta: "¿Para almacenar textos largos como descripciones, qué tipo de dato sería más adecuado?",
        opciones: [
          "CHAR",
          "TEXT",
          "INT",
          "FLOAT",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "TEXT es el tipo de dato más apropiado para almacenar cadenas de texto largas sin límite específico de longitud."
      },
      {
        id: 7476,
        moduloId: 704,
        pregunta: "¿Cuál es la diferencia principal entre CHAR y VARCHAR?",
        opciones: [
          "VARCHAR tiene longitud fija, CHAR tiene longitud variable",
          "CHAR tiene longitud fija, VARCHAR tiene longitud variable",
          "VARCHAR almacena números, CHAR textos",
          "No hay ninguna diferencia entre ellos",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "CHAR almacena cadenas de longitud fija, mientras que VARCHAR almacena cadenas de longitud variable, siendo más eficiente en términos de almacenamiento."
      },
      {
        id: 7477,
        moduloId: 704,
        pregunta: "¿Cuál de los siguientes tipos de datos puede almacenar valores de fecha y hora juntos?",
        opciones: [
          "DATETIME",
          "NOW()",
          "TIME",
          "CURRENT_TIMESTAMP",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "DATETIME es el tipo de dato que puede almacenar tanto fecha como hora en un solo valor."
      },
      {
        id: 7478,
        moduloId: 704,
        pregunta: "¿Cuál de los siguientes tipos de datos usarías para almacenar solo una hora (sin fecha)?",
        opciones: [
          "DATE",
          "TIME",
          "DATETIME",
          "VARCHAR(5)",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "TIME es el tipo de dato específico para almacenar solo información de hora, sin incluir fecha."
      },
      {
        id: 7479,
        moduloId: 704,
        pregunta: "¿Qué restricción se usa para evitar que una columna acepte valores nulos?",
        opciones: [
          "NOT NULL",
          "UNIQUE",
          "CHECK",
          "FOREIGN KEY",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "NOT NULL es la restricción que asegura que una columna siempre contenga un valor, no permitiendo valores NULL."
      },
      {
        id: 7480,
        moduloId: 704,
        pregunta: "¿Cuál es la función principal de la restricción UNIQUE en SQL?",
        opciones: [
          "Permitir valores repetidos en una columna",
          "Impedir valores duplicados en una columna",
          "Obligar a usar siempre valores nulos",
          "Restringir la longitud de un campo de texto",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "UNIQUE asegura que todos los valores en una columna o conjunto de columnas sean diferentes entre sí."
      },
      {
        id: 7481,
        moduloId: 704,
        pregunta: "¿Qué restricción asegura que el valor de una columna cumpla una condición?",
        opciones: [
          "PRIMARY KEY",
          "DEFAULT",
          "CHECK",
          "UNIQUE",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "CHECK permite definir una condición que debe cumplir el valor de una columna para ser aceptado."
      },
      {
        id: 7482,
        moduloId: 704,
        pregunta: "¿Qué restricción define un valor automático si no se especifica ninguno en una inserción?",
        opciones: [
          "DEFAULT",
          "NOT NULL",
          "UNIQUE",
          "FOREIGN KEY",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "DEFAULT especifica un valor predeterminado que se asigna automáticamente si no se proporciona uno explícitamente."
      },
      {
        id: 7483,
        moduloId: 704,
        pregunta: "¿Cuál de las siguientes restricciones garantiza que una columna sea única y no nula al mismo tiempo?",
        opciones: [
          "FOREIGN KEY",
          "NOT NULL UNIQUE",
          "CHECK",
          "DEFAULT",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "La combinación de NOT NULL y UNIQUE asegura que una columna tenga valores únicos y nunca permita valores NULL."
      },
      {
        id: 7484,
        moduloId: 704,
        pregunta: "¿Qué hace la restricción PRIMARY KEY en una tabla?",
        opciones: [
          "Permite varios valores repetidos",
          "Establece una combinación de valores predeterminados",
          "Identifica de manera única cada fila en una tabla",
          "Verifica condiciones entre tablas",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "PRIMARY KEY identifica de forma única cada registro en una tabla y garantiza que no haya valores duplicados ni NULL."
      },
      {
        id: 7485,
        moduloId: 704,
        pregunta: "¿Qué restricción se utiliza para asegurar que una columna apunte a una fila existente en otra tabla?",
        opciones: [
          "CHECK",
          "FOREIGN KEY",
          "UNIQUE",
          "DEFAULT",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "FOREIGN KEY crea una relación entre dos tablas, asegurando que los valores en una columna correspondan a valores existentes en otra tabla."
      },
      {
        id: 7486,
        moduloId: 704,
        pregunta: "¿Cuál es la consecuencia de definir una columna como NOT NULL?",
        opciones: [
          "Permite valores duplicados",
          "No se pueden insertar valores NULL en esa columna",
          "Obliga a usar claves externas",
          "Asigna automáticamente un valor por defecto",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "NOT NULL exige que siempre se proporcione un valor para esa columna durante inserciones o actualizaciones."
      },
      {
        id: 7487,
        moduloId: 704,
        pregunta: "¿Qué ocurre si intentamos insertar un valor que viola una restricción UNIQUE?",
        opciones: [
          "El sistema ignora la restricción",
          "Se produce un error y no se inserta la fila",
          "Se inserta la fila con el valor duplicado",
          "El valor se convierte automáticamente en NULL",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "Violar una restricción UNIQUE resulta en un error de integridad de datos y la operación de inserción se rechaza."
      },
      {
        id: 7488,
        moduloId: 704,
        pregunta: "¿Qué es una clave compuesta en una base de datos relacional?",
        opciones: [
          "Una clave que se genera automáticamente",
          "Una clave formada por la combinación de dos o más atributos",
          "Una clave que permite valores duplicados",
          "Una clave basada en funciones de agregación",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "Una clave compuesta utiliza múltiples columnas en combinación para identificar de forma única cada fila."
      },
      {
        id: 7489,
        moduloId: 704,
        pregunta: "¿Cuándo suele utilizarse una clave compuesta?",
        opciones: [
          "Cuando un solo atributo no puede identificar de manera única una fila",
          "Cuando se necesita una restricción de unicidad adicional",
          "Para almacenar funciones de agregación",
          "Para limitar el tamaño de una tabla",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "Las claves compuestas se usan cuando ningún atributo individual puede garantizar la unicidad de cada registro."
      },
      {
        id: 7490,
        moduloId: 704,
        pregunta: "¿Qué significa tener una clave primaria compuesta?",
        opciones: [
          "Que no puedo repetir ninguna de las claves externas que la componen. Ni por separado ni juntas",
          "Que una de las dos claves externas puede ser NULL, pero solo una vez cada una, para no repetir la combinación",
          "Que no puede repetirse la misma combinación. Pueden repetirse si la combinación entre ellas es diferente",
          "Que puedo tener claves primarias simples además de la clave primaria compuesta dentro de la misma tabla",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "En una clave primaria compuesta, la combinación única de valores es lo que importa, no los valores individuales."
      },
      {
        id: 7491,
        moduloId: 704,
        pregunta: "¿Qué modificadores de borrado y actualización sobre claves externas conoces?",
        opciones: [
          "PRIMARY KEY, FOREIGN KEY, CONSTRAINT",
          "RESTRICT, SET NULL, CASCADE",
          "FORBIDDEN, SET NULL, CASCADE",
          "NOT NULL, UNIQUE, RESTRICT",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "Los modificadores más comunes son RESTRICT (no permite la operación), SET NULL (establece NULL) y CASCADE (propaga la operación)."
      },
      {
        id: 7492,
        moduloId: 704,
        pregunta: "¿Para qué nos puede servir elegir tener una clave primaria compuesta?",
        opciones: [
          "Porque si es compuesta, al tener más claves estará mejor indexada. Siempre más es mejor",
          "Tener claves primarias compuestas no vale para nada",
          "Para que el motor de BBDD nos permita almacenar NULL, ya que de manera normal con las claves simples no nos deja",
          "Para controlar que la misma combinación entre los atributos que componen la clave no se repita para las tablas intermedias por cuestiones de lógica de negocio",
        ],
        respuestaCorrecta: 3,
        explicacion:
          "Las claves compuestas son útiles para modelar correctamente relaciones donde la unicidad se basa en la combinación de varios atributos."
      },
      {
        id: 7493,
        moduloId: 704,
        pregunta: "¿Qué significa un atributo en un óvalo con líneas discontínuas o línea punteada en un Esquema E/R?",
        opciones: [
          "Atributo derivado: Significa que su valor no se almacena, se calcula en el momento de la consulta",
          "Atributo multivaluado: Significa que el atributo tiene más de un valor y debería acabar convirtiéndose en otra entidad",
          "Atributo que pertenece a una entidad débil: Es la manera que se suele usar para indicar que la entidad donde se encuentra el atributo es débil",
          "Atributo único y NOT NULL: Significa que el atributo no se puede repetir y tampoco puede ser NULL",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "Los atributos derivados se representan con líneas punteadas en diagramas E/R y se calculan a partir de otros atributos."
      },
      {
        id: 7494,
        moduloId: 704,
        pregunta: "¿Qué representa un rectángulo en un diagrama E/R?",
        opciones: [
          "Un atributo",
          "Una relación",
          "Una entidad",
          "Una clave primaria",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "En los diagramas E/R, los rectángulos representan entidades, que son objetos o conceptos del mundo real que se modelan en la base de datos."
      },
      {
        id: 7495,
        moduloId: 704,
        pregunta: "¿Cómo se representa gráficamente una relación en un esquema E/R?",
        opciones: [
          "Mediante un rectángulo",
          "Mediante un óvalo",
          "Mediante un rombo",
          "Mediante un cuadrado",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "Las relaciones se representan con rombos en los diagramas E/R, conectando las entidades relacionadas."
      },
      {
        id: 7496,
        moduloId: 704,
        pregunta: "¿Qué indica un óvalo con doble línea en un esquema E/R?",
        opciones: [
          "Atributo clave",
          "Atributo derivado",
          "Atributo multivaluado",
          "Relación compuesta",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "Los óvalos con doble línea representan atributos multivaluados, que pueden tener múltiples valores para una entidad."
      },
      {
        id: 7497,
        moduloId: 704,
        pregunta: "¿Qué elemento se utiliza para conectar entidades y atributos en un diagrama E/R?",
        opciones: [
          "No se conectan",
          "Líneas",
          "Rombos",
          "Rectángulos",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "Las líneas conectan entidades con sus atributos y con las relaciones en los diagramas E/R."
      },
      {
        id: 7498,
        moduloId: 704,
        pregunta: "¿Qué tipo de relación se representa cuando una entidad se asocia consigo misma?",
        opciones: [
          "Relación de especialización",
          "Relación reflexiva",
          "Relación multivaluada",
          "Relación derivada",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "Una relación reflexiva es cuando una entidad se relaciona consigo misma, como empleados que tienen supervisores que también son empleados."
      },
      {
        id: 7499,
        moduloId: 704,
        pregunta: "¿Qué es la cardinalidad en un esquema E/R?",
        opciones: [
          "El número máximo de atributos en una entidad",
          "El número de relaciones entre dos entidades",
          "La cantidad mínima y máxima de instancias que pueden estar relacionadas",
          "El número de claves primarias en una relación",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "La cardinalidad define cuántas instancias de una entidad pueden relacionarse con instancias de otra entidad."
      },
      {
        id: 7500,
        moduloId: 704,
        pregunta: "¿Cuál es el símbolo habitual para representar una entidad débil en un diagrama E/R?",
        opciones: [
          "Rectángulo simple",
          "Rombo de doble línea",
          "Rectángulo de doble línea",
          "Óvalo punteado",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "Las entidades débiles se representan con rectángulos de doble línea en los diagramas E/R."
      },
      {
        id: 7501,
        moduloId: 704,
        pregunta: "¿Cómo se representa un atributo derivado en un diagrama E/R?",
        opciones: [
          "Con un óvalo de doble línea",
          "Con un rombo punteado",
          "Con un óvalo de línea discontinua",
          "Con un rectángulo sombreado",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "Los atributos derivados se representan con óvalos de línea discontinua o punteada en los diagramas E/R."
      },
      {
        id: 7502,
        moduloId: 704,
        pregunta: "¿Qué tipo de JOIN devuelve solo las filas que tienen coincidencias en ambas tablas?",
        opciones: [
          "RIGHT JOIN",
          "FULL JOIN",
          "LEFT JOIN",
          "INNER JOIN",
        ],
        respuestaCorrecta: 3,
        explicacion:
          "INNER JOIN solo devuelve las filas donde existe una coincidencia en ambas tablas según la condición de unión."
      },
      {
        id: 7503,
        moduloId: 704,
        pregunta: "Cuando en una consulta SQL se asigna un alias a una tabla, ¿cuál es su propósito principal?",
        opciones: [
          "Mejorar el rendimiento de la consulta",
          "Hacer que el nombre de la tabla sea más corto y claro en la consulta",
          "Evitar errores de sintaxis",
          "Cambiar el nombre original de la tabla en la base de datos",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "Los alias simplifican nombres largos de tablas y hacen las consultas más legibles, especialmente con JOINs múltiples."
      },
      {
        id: 7504,
        moduloId: 704,
        pregunta: "¿Qué sucede si olvidas la condición de unión (ON) en un JOIN?",
        opciones: [
          "No se ejecuta la consulta",
          "Se genera un producto cartesiano",
          "Se eliminan las filas duplicadas automáticamente",
          "Solo se muestra la primera fila de cada tabla",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "Sin una condición de unión, se produce un producto cartesiano donde cada fila de una tabla se combina con todas las filas de la otra tabla."
      },
      {
        id: 7505,
        moduloId: 704,
        pregunta: "¿Cuál es el objetivo principal de una subconsulta en la cláusula FROM?",
        opciones: [
          "Crear una tabla temporal sobre la que hacer consultas",
          "Eliminar filas duplicadas",
          "Cambiar la estructura de la base de datos",
          "Limitar el número de columnas visibles",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "Una subconsulta en FROM crea un conjunto de resultados temporal que se puede usar como una tabla en la consulta principal."
      },
      {
        id: 7506,
        moduloId: 704,
        pregunta: "¿Qué tipo de JOIN se debe usar para obtener todas las filas de la tabla de la izquierda y solo las coincidencias de la tabla de la derecha?",
        opciones: [
          "FULL JOIN",
          "CROSS JOIN",
          "LEFT JOIN",
          "INNER JOIN",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "LEFT JOIN incluye todas las filas de la tabla izquierda y solo las coincidencias de la tabla derecha, mostrando NULL donde no hay match."
      },
      {
        id: 7507,
        moduloId: 704,
        pregunta: "¿Cuál es el resultado de realizar un RIGHT JOIN entre dos tablas A y B?",
        opciones: [
          "Todas las filas de A y solo las coincidencias de B",
          "Solo las filas coincidentes entre A y B",
          "Todas las filas de B y las coincidencias de A",
          "Solo las filas de A",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "RIGHT JOIN incluye todas las filas de la tabla derecha (B) y las coincidencias de la tabla izquierda (A)."
      },
      {
        id: 7508,
        moduloId: 704,
        pregunta: "¿Qué función de agregación se utiliza para obtener la suma de los valores de una columna?",
        opciones: [
          "COUNT",
          "AVG",
          "SUM",
          "MIN",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "SUM() calcula la suma total de todos los valores numéricos en una columna."
      },
      {
        id: 7509,
        moduloId: 704,
        pregunta: "¿Cuál de las siguientes funciones devuelve el número de filas en una consulta?",
        opciones: [
          "MAX",
          "SUM",
          "AVG",
          "COUNT",
        ],
        respuestaCorrecta: 3,
        explicacion:
          "COUNT() retorna el número de filas que cumplen con los criterios especificados."
      },
      {
        id: 7510,
        moduloId: 704,
        pregunta: "¿Qué función devuelve el valor mínimo de una columna numérica o de fecha?",
        opciones: [
          "AVG",
          "MAX",
          "MIN",
          "SUM",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "MIN() devuelve el valor más pequeño de una columna numérica o el valor más antiguo para fechas."
      },
      {
        id: 7511,
        moduloId: 704,
        pregunta: "¿Cuál es la función SQL adecuada para calcular la media de los valores en una columna?",
        opciones: [
          "SUM",
          "MIN",
          "AVG",
          "COUNT",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "AVG() calcula el promedio aritmético de todos los valores en una columna numérica."
      },
      {
        id: 7512,
        moduloId: 704,
        pregunta: "¿Qué se utiliza para conocer la hora exacta?",
        opciones: [
          "DATETIME",
          "CURRENT_TIMESTAMP",
          "TIME",
          "CURDATE",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "CURRENT_TIMESTAMP o NOW() devuelven la fecha y hora actual del sistema."
      },
      {
        id: 7513,
        moduloId: 704,
        pregunta: "Si quieres mostrar solo el día de una fecha completa, ¿qué función debes usar?",
        opciones: [
          "DAYNAME()",
          "DAY()",
          "MONTH()",
          "WEEKDAY()",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "DAY() extrae el número del día del mes de una fecha (1-31)."
      }
    ],
  };

  export default moduloMopeVL;