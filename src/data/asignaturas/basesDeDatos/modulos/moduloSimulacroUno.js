/**
 * Datos del módulo de Diseño y Consultas perteneciente a la asignatura de Bases de Datos.
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
 */
export const moduloSimulacroUno = {
    id: 203,
    nombre: "Simulacro 1 (04/05/2025)",
    esExamen: true,
    asignaturaId: 2,
    descripcion: "Diseño de modelos entidad-relación, consultas SQL avanzadas y estrategias de copias de seguridad para bases de datos relacionales.",
    preguntas: [
      {
        id: 2301,
        moduloId: 203,
        pregunta: "¿Cuál de los siguientes tipos de copia de seguridad guarda todos los datos seleccionados sin depender de copias anteriores?",
        opciones: [
          "Copia diferencial",
          "Copia completa",
          "Copia de logs",
          "Copia incremental"
        ],
        respuestaCorrecta: 1,
        explicacion: "La copia completa (full backup) guarda todos los datos seleccionados en su totalidad, independientemente de cualquier copia de seguridad anterior. Es autosuficiente y no requiere de otras copias para restaurar los datos, a diferencia de las copias incrementales o diferenciales que solo guardan los cambios y necesitan una copia completa como base."
      },
      {
        id: 2302,
        moduloId: 203,
        pregunta: "¿Cuál es el efecto de usar LIMIT 5 en una consulta SQL?",
        opciones: [
          "Muestra los resultados hasta el décimo",
          "Devuelve del 11º al 15º resultado",
          "Devuelve 10 resultados desde el quinto",
          "Devuelve los primeros 5 resultados"
        ],
        respuestaCorrecta: 3,
        explicacion: "La cláusula LIMIT 5 en SQL restringe el número de filas devueltas por una consulta a un máximo de 5 registros. Específicamente, devuelve solo los primeros 5 resultados del conjunto de resultados. Es útil para paginar resultados o limitar la cantidad de datos obtenidos, especialmente en tablas grandes."
      },
      {
        id: 2303,
        moduloId: 203,
        pregunta: "¿Cuál es la clave principal de una tabla resultado de una relación N:M?",
        opciones: [
          "La clave foránea de una de las entidades",
          "La combinación de las claves primarias de ambas entidades",
          "La clave primaria de la entidad fuerte",
          "Un campo autoincremental"
        ],
        respuestaCorrecta: 1,
        explicacion: "En una relación muchos a muchos (N:M), la tabla intermedia o tabla de unión que se crea normalmente tiene como clave primaria la combinación de las claves primarias de ambas entidades relacionadas. Esto se conoce como clave compuesta y garantiza la unicidad de cada relación entre entidades de ambas tablas."
      },
      {
        id: 2304,
        moduloId: 203,
        pregunta: "¿Qué cláusula permite ordenar los resultados de una consulta SQL por varias columnas?",
        opciones: [
          "GROUP BY",
          "ARRANGE BY",
          "ORDER BY columna1, columna2",
          "SORT BY"
        ],
        respuestaCorrecta: 2,
        explicacion: "La cláusula ORDER BY en SQL se utiliza para ordenar los resultados según una o más columnas. Para ordenar por varias columnas, simplemente se listan separadas por comas, como 'ORDER BY columna1, columna2'. El sistema ordenará primero por la primera columna y, cuando haya valores iguales, usará la segunda columna para determinar el orden."
      },
      {
        id: 2305,
        moduloId: 203,
        pregunta: "¿Qué devuelve esta consulta SQL?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT Cliente.Nombre
FROM Cliente
WHERE idCliente NOT IN (SELECT idCliente FROM Orden);`,
          lenguaje: "sql"
        },
        opciones: [
          "Clientes con pedidos pendientes",
          "Clientes que cancelaron sus pedidos",
          "Clientes sin pedidos",
          "Clientes que han hecho más de un pedido"
        ],
        respuestaCorrecta: 2,
        explicacion: "Esta consulta utiliza una subconsulta con el operador NOT IN para encontrar clientes cuyos IDs no aparecen en la tabla de órdenes. El resultado son los nombres de los clientes que nunca han realizado un pedido, ya que sus identificadores no están presentes en la tabla Orden."
      },
      {
        id: 2306,
        moduloId: 203,
        pregunta: "¿Qué devuelve esta consulta SQL?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT Plato.Nombre, COUNT(*)
FROM DetalleOrden
JOIN Plato ON DetalleOrden.idPlato = Plato.idPlato
GROUP BY Plato.Nombre;`,
          lenguaje: "sql"
        },
        opciones: [
          "La cantidad total vendida por plato",
          "El número de veces que se ha pedido cada plato",
          "Los platos ordenados por precio",
          "El número de ingredientes por plato"
        ],
        respuestaCorrecta: 1,
        explicacion: "Esta consulta une la tabla DetalleOrden con la tabla Plato, agrupa los resultados por nombre de plato y cuenta el número de registros en cada grupo. El resultado muestra cada plato junto con el número de veces que ha sido pedido, ya que cada registro en DetalleOrden representa un plato en una orden."
      },
      {
        id: 2307,
        moduloId: 203,
        pregunta: "¿Qué devuelve esta consulta SQL con subconsultas anidadas?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT NOMCE
FROM TCENTR
WHERE NUMCE IN (
  SELECT NUMCE
  FROM TDEPTO
  WHERE NUMDE IN (
    SELECT NUMDE
    FROM TEMPLE
    WHERE CARGO = 'Jefe'
  )
);`,
          lenguaje: "sql"
        },
        opciones: [
          "Centros donde trabaja al menos un jefe",
          "Centros con salario promedio alto",
          "Centros sin jefes",
          "Centros con más de un departamento"
        ],
        respuestaCorrecta: 0,
        explicacion: "Esta consulta anidada busca primero los departamentos (NUMDE) que tienen empleados con cargo 'Jefe', luego busca los centros (NUMCE) a los que pertenecen esos departamentos, y finalmente devuelve los nombres (NOMCE) de esos centros. El resultado son los nombres de los centros donde trabaja al menos un empleado con cargo de 'Jefe'."
      },
      {
        id: 2308,
        moduloId: 203,
        pregunta: "¿Qué efecto tiene ON DELETE SET NULL al definir una clave foránea?",
        opciones: [
          "No permite claves foráneas vacías",
          "Bloquea la operación de eliminación",
          "Establece los valores foráneos como NULL",
          "Elimina los registros relacionados"
        ],
        respuestaCorrecta: 2,
        explicacion: "La restricción ON DELETE SET NULL en una clave foránea especifica que cuando se elimina un registro referenciado, los valores de la clave foránea en las filas relacionadas se establecerán como NULL. Esto mantiene la integridad referencial sin eliminar los registros relacionados, pero indica que ya no tienen una relación con ningún registro en la tabla principal."
      },
      {
        id: 2309,
        moduloId: 203,
        pregunta: "¿Qué estrategia de implementación permite representar una jerarquía con generalización en una sola tabla en SQL?",
        opciones: [
          "Tabla puente",
          "Tabla única con columna discriminadora",
          "Tabla por superentidad",
          "Tabla por subentidad"
        ],
        respuestaCorrecta: 1,
        explicacion: "La estrategia de 'tabla única con columna discriminadora' consiste en representar toda una jerarquía de entidades en una sola tabla, incluyendo todos los atributos de todas las subentidades. Se añade una columna discriminadora (o tipo) que indica a qué subentidad pertenece cada registro. Esta estrategia simplifica las consultas pero puede resultar en muchos valores NULL para atributos no aplicables a todas las subentidades."
      },
      {
        id: 2310,
        moduloId: 203,
        pregunta: "¿Qué función SQL devuelve la cantidad de registros en una tabla?",
        opciones: [
          "COUNT()",
          "TOTAL()",
          "NUMBER()",
          "SUM()"
        ],
        respuestaCorrecta: 0,
        explicacion: "La función COUNT() en SQL se utiliza para contar el número de filas en un conjunto de resultados. Por ejemplo, 'SELECT COUNT(*) FROM tabla' devuelve el número total de registros en la tabla. Es una de las funciones agregadas más comunes en SQL, junto con SUM(), AVG(), MIN() y MAX()."
      },
      {
        id: 2311,
        moduloId: 203,
        pregunta: "¿Qué hace esta consulta SQL?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT TURNO.Turno, MAX(TURNO.NumOrden)
FROM TURNO
GROUP BY TURNO.Turno;`,
          lenguaje: "sql"
        },
        opciones: [
          "Muestra el nombre de los empleados por turno",
          "Muestra la última orden registrada por turno",
          "Cuenta todos los turnos disponibles",
          "Muestra el número de órdenes por turno"
        ],
        respuestaCorrecta: 1,
        explicacion: "Esta consulta agrupa los registros de la tabla TURNO por el valor de la columna Turno y, para cada grupo, encuentra el valor máximo de NumOrden. Asumiendo que NumOrden es un número secuencial o timestamp, esta consulta devuelve el último (más reciente) número de orden para cada turno, es decir, la última orden registrada en cada turno."
      },
      {
        id: 2312,
        moduloId: 203,
        pregunta: "¿Qué hace esta consulta SQL?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT NOMEM
FROM TEMPLE
WHERE SALAR < (SELECT AVG(SALAR) FROM TEMPLE);`,
          lenguaje: "sql"
        },
        opciones: [
          "Empleados con salario inferior al promedio",
          "Empleados sin salario definido",
          "Empleados con salario exacto al promedio",
          "Empleados con salario mayor al promedio"
        ],
        respuestaCorrecta: 0,
        explicacion: "Esta consulta utiliza una subconsulta para calcular el salario promedio de todos los empleados y luego selecciona los nombres de los empleados cuyo salario es menor que ese promedio. El resultado son los nombres de todos los empleados que ganan menos que el salario promedio de la empresa."
      },
      {
        id: 2313,
        moduloId: 203,
        pregunta: "¿Qué hace esta consulta SQL?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT *
FROM Orden
ORDER BY Fecha ASC
LIMIT 1;`,
          lenguaje: "sql"
        },
        opciones: [
          "Orden más reciente",
          "Orden más antigua",
          "Orden con cliente prioritario",
          "Orden con mayor total"
        ],
        respuestaCorrecta: 1,
        explicacion: "Esta consulta ordena todas las órdenes por fecha en orden ascendente (de más antigua a más reciente) y luego limita el resultado a solo la primera fila. Por lo tanto, devuelve la orden más antigua, ya que es la primera después de ordenar por fecha en orden ascendente."
      },
      {
        id: 2314,
        moduloId: 203,
        pregunta: "¿Qué instrucción se utiliza para eliminar permanentemente una tabla y su definición en SQL?",
        opciones: [
          "DROP TABLE",
          "REMOVE RECORDS",
          "CLEAR TABLE",
          "DELETE FROM tabla"
        ],
        respuestaCorrecta: 0,
        explicacion: "La instrucción DROP TABLE se utiliza para eliminar permanentemente una tabla de la base de datos, incluyendo su definición y todos sus datos. A diferencia de DELETE FROM, que solo elimina los registros pero mantiene la estructura de la tabla, DROP TABLE elimina completamente la tabla y requiere crear la tabla de nuevo si se necesita posteriormente."
      },
      {
        id: 2315,
        moduloId: 203,
        pregunta: "¿Qué muestra esta consulta SQL?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT Empresa.Nombre
FROM Empresa
JOIN Cliente ON Empresa.idCliente = Cliente.idCliente;`,
          lenguaje: "sql"
        },
        opciones: [
          "Empresas sin clientes",
          "Clientes con múltiples empresas",
          "Empresas que tienen asociado un cliente",
          "Nombres duplicados de empresas"
        ],
        respuestaCorrecta: 2,
        explicacion: "Esta consulta realiza una unión interna (INNER JOIN) entre las tablas Empresa y Cliente, basada en la coincidencia de idCliente. Devuelve los nombres de las empresas que tienen asociado un cliente, es decir, aquellas empresas cuyo idCliente existe en la tabla Cliente. Las empresas sin cliente asociado no aparecerán en el resultado."
      },
      {
        id: 2316,
        moduloId: 203,
        pregunta: "¿Qué obtiene esta consulta SQL?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT Cliente.Nombre
FROM Cliente
LEFT JOIN Orden ON Cliente.idCliente = Orden.idCliente
WHERE Orden.idCliente IS NULL;`,
          lenguaje: "sql"
        },
        opciones: [
          "Clientes con órdenes canceladas",
          "Clientes con facturación superior a la media",
          "Clientes que no han realizado ninguna orden",
          "Clientes que han realizado más de una orden"
        ],
        respuestaCorrecta: 2,
        explicacion: "Esta consulta utiliza un LEFT JOIN para incluir todos los clientes, independientemente de si han realizado órdenes o no. La condición WHERE Orden.idCliente IS NULL filtra solo aquellos clientes para los que no hay coincidencia en la tabla Orden, es decir, clientes que nunca han realizado una orden."
      },
      {
        id: 2317,
        moduloId: 203,
        pregunta: "¿Qué obtiene esta consulta SQL?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT Nombre
FROM Mesero
WHERE FechaIncorporacion < '2020-01-01';`,
          lenguaje: "sql"
        },
        opciones: [
          "Meseros incorporados antes de 2020",
          "Meseros sin órdenes asignadas",
          "Meseros con contrato temporal",
          "Meseros que han atendido más de 10 órdenes"
        ],
        respuestaCorrecta: 0,
        explicacion: "Esta consulta selecciona los nombres de los meseros cuya fecha de incorporación es anterior al 1 de enero de 2020. El operador < compara fechas de manera que solo devuelve los registros donde FechaIncorporacion es una fecha anterior a la especificada, resultando en una lista de meseros que comenzaron a trabajar antes del año 2020."
      },
      {
        id: 2318,
        moduloId: 203,
        pregunta: "¿Qué ocurre al transformar una relación débil a tabla?",
        opciones: [
          "Se ignora porque no puede tener independencia",
          "Se convierte en un atributo derivado",
          "Su clave se convierte en clave foránea",
          "Hereda la clave primaria de la relación fuerte"
        ],
        respuestaCorrecta: 3,
        explicacion: "Cuando se transforma una entidad débil en una tabla, su clave primaria incluye la clave primaria de la entidad fuerte de la que depende. Es decir, hereda la clave primaria de la entidad fuerte y la combina con su propio discriminador para formar una clave primaria compuesta. Esto refleja la dependencia existencial de la entidad débil."
      },
      {
        id: 2319,
        moduloId: 203,
        pregunta: "¿Qué ocurre si se ejecuta un DELETE sin cláusula WHERE en una tabla con miles de registros?",
        opciones: [
          "Aparece un error de sintaxis",
          "Se eliminan todos los registros de la tabla",
          "No ocurre nada",
          "Se borra solo el primer registro"
        ],
        respuestaCorrecta: 1,
        explicacion: "La instrucción DELETE sin una cláusula WHERE elimina todos los registros de la tabla especificada. A diferencia de DROP TABLE, que elimina la tabla completa incluyendo su estructura, DELETE sin WHERE mantiene la estructura de la tabla (columnas, índices, restricciones) pero elimina todos los datos que contiene."
      },
      {
        id: 2320,
        moduloId: 203,
        pregunta: "¿Qué operador lógico se utiliza en SQL para verificar si un valor no está dentro de un conjunto?",
        opciones: [
          "IS NULL",
          "NOT IN",
          "EXCEPT",
          "NOT BETWEEN"
        ],
        respuestaCorrecta: 1,
        explicacion: "El operador NOT IN se utiliza en SQL para verificar si un valor no está presente en un conjunto específico de valores o en los resultados de una subconsulta. Por ejemplo, 'WHERE columna NOT IN (valor1, valor2, valor3)' o 'WHERE columna NOT IN (SELECT columna FROM tabla)' seleccionará las filas donde el valor de la columna no coincide con ninguno de los valores especificados."
      },
      {
        id: 2321,
        moduloId: 203,
        pregunta: "¿Qué operador se usa en SQL para buscar coincidencias parciales en texto?",
        opciones: [
          "MATCH",
          "EQUALS",
          "FIND",
          "LIKE"
        ],
        respuestaCorrecta: 3,
        explicacion: "El operador LIKE se utiliza en SQL para buscar patrones de texto en una columna. Permite usar comodines como % (que representa cualquier secuencia de caracteres) y _ (que representa un solo carácter). Por ejemplo, 'WHERE nombre LIKE 'A%'' encuentra todos los nombres que comienzan con 'A', mientras que 'WHERE nombre LIKE '%an%'' encuentra nombres que contienen 'an' en cualquier posición."
      },
      {
        id: 2322,
        moduloId: 203,
        pregunta: "¿Qué palabra clave en SQL se utiliza para asegurar que los valores de una columna sean únicos?",
        opciones: [
          "UNIQUE",
          "NOT NULL",
          "DISTINCT",
          "PRIMARY"
        ],
        respuestaCorrecta: 0,
        explicacion: "La restricción UNIQUE en SQL garantiza que todos los valores en una columna (o conjunto de columnas) sean diferentes. A diferencia de PRIMARY KEY, una tabla puede tener múltiples restricciones UNIQUE y las columnas con restricción UNIQUE pueden contener valores NULL (aunque solo uno). Es útil para campos como emails o números de identificación alternativos que deben ser únicos pero no son la clave principal."
      },
      {
        id: 2323,
        moduloId: 203,
        pregunta: "¿Qué representa la siguiente situación en un diagrama ER: una entidad EMPLEADO vinculada a sí misma mediante una relación LLAMA?",
        opciones: [
          "Atributo compuesto",
          "Entidad débil",
          "Relación jerárquica",
          "Relación reflexiva"
        ],
        respuestaCorrecta: 3,
        explicacion: "Una relación reflexiva ocurre cuando una entidad se relaciona consigo misma. En el ejemplo, la relación LLAMA conecta la entidad EMPLEADO consigo misma, lo que podría representar que un empleado llama a otro empleado. Las relaciones reflexivas son comunes para modelar jerarquías organizacionales, relaciones de parentesco, o cualquier caso donde los miembros de un mismo conjunto se relacionan entre sí."
      },
      {
        id: 2324,
        moduloId: 203,
        pregunta: "¿Qué representa un atributo subrayado en un modelo ER?",
        opciones: [
          "Es un atributo clave (clave primaria)",
          "Es un atributo compuesto",
          "Es un atributo multivaluado",
          "Es un atributo redundante"
        ],
        respuestaCorrecta: 0,
        explicacion: "En un diagrama Entidad-Relación (ER), un atributo subrayado indica que es un atributo clave o clave primaria de la entidad. La clave primaria es un atributo o conjunto de atributos que identifica de manera única cada instancia de la entidad, diferenciándola de todas las demás instancias."
      },
      {
        id: 2325,
        moduloId: 203,
        pregunta: "¿Qué representa un rombo en un diagrama entidad-relación?",
        opciones: [
          "Una relación entre entidades",
          "Una clave primaria",
          "Un atributo multivaluado",
          "Una tabla de base de datos"
        ],
        respuestaCorrecta: 0,
        explicacion: "En un diagrama Entidad-Relación (ER), el rombo es el símbolo utilizado para representar una relación entre entidades. Una relación es una asociación entre dos o más entidades que describe cómo estas se conectan o interactúan entre sí. Las líneas conectan el rombo con las entidades participantes, y suelen incluir la cardinalidad de la relación."
      },
      {
        id: 2326,
        moduloId: 203,
        pregunta: "¿Qué resultado da esta consulta SQL?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT COUNT(*)
FROM Orden
WHERE Fecha BETWEEN '2024-01-01' AND '2024-01-31';`,
          lenguaje: "sql"
        },
        opciones: [
          "Número de clientes en enero",
          "Número total de órdenes en enero",
          "Total de productos vendidos",
          "Total facturado en enero"
        ],
        respuestaCorrecta: 1,
        explicacion: "Esta consulta cuenta el número de registros en la tabla Orden donde la fecha está entre el 1 y el 31 de enero de 2024. La función COUNT(*) cuenta todas las filas que cumplen con la condición. Por lo tanto, el resultado es el número total de órdenes realizadas durante el mes de enero de 2024."
      },
      {
        id: 2327,
        moduloId: 203,
        pregunta: "¿Qué sentencia elimina completamente una tabla y todos sus datos en MySQL?",
        opciones: [
          "DROP TABLE nombre;",
          "CLEAR TABLE nombre;",
          "REMOVE TABLE nombre;",
          "DELETE TABLE nombre;"
        ],
        respuestaCorrecta: 0,
        explicacion: "La sentencia DROP TABLE en MySQL elimina completamente una tabla de la base de datos, incluyendo su definición, estructura, índices, restricciones y todos los datos que contiene. Es una operación irreversible a menos que se tenga una copia de seguridad. La sintaxis correcta es 'DROP TABLE nombre_tabla;'."
      },
      {
        id: 2328,
        moduloId: 203,
        pregunta: "¿Qué sentencia se utiliza para cambiar el nombre de una tabla en MySQL?",
        opciones: [
          "RENAME TABLE nombre AS nuevo_nombre",
          "MODIFY TABLE nombre",
          "ALTER TABLE nombre RENAME TO nuevo_nombre",
          "CHANGE TABLE nombre"
        ],
        respuestaCorrecta: 2,
        explicacion: "En MySQL, la sentencia ALTER TABLE con la cláusula RENAME TO se utiliza para cambiar el nombre de una tabla existente. La sintaxis correcta es 'ALTER TABLE nombre_actual RENAME TO nuevo_nombre;'. También existe una variante simplificada: 'RENAME TABLE nombre_actual TO nuevo_nombre;'."
      },
      {
        id: 2329,
        moduloId: 203,
        pregunta: "¿Qué sentencia SQL se utiliza para agregar una nueva columna a una tabla existente?",
        opciones: [
          "MODIFY TABLE",
          "INSERT COLUMN",
          "UPDATE COLUMN",
          "ALTER TABLE ... ADD COLUMN"
        ],
        respuestaCorrecta: 3,
        explicacion: "La sentencia ALTER TABLE con la cláusula ADD COLUMN se utiliza para añadir una nueva columna a una tabla existente. La sintaxis completa es 'ALTER TABLE nombre_tabla ADD COLUMN nombre_columna tipo_dato [restricciones];'. Esta operación mantiene todos los datos existentes y añade la nueva columna con valores NULL o con un valor predeterminado si se especifica."
      },
      {
        id: 2330,
        moduloId: 203,
        pregunta: "¿Qué significa que una relación tenga una cardinalidad 1:N entre dos entidades?",
        opciones: [
          "Una entidad del lado 1 se relaciona con varias del lado N",
          "Cada entidad puede tener solo un valor",
          "Hay una correspondencia muchos a muchos",
          "Ambas entidades deben coincidir en valores"
        ],
        respuestaCorrecta: 0,
        explicacion: "Una relación con cardinalidad 1:N (uno a muchos) significa que cada instancia de la entidad del lado '1' puede estar relacionada con cero, una o muchas instancias de la entidad del lado 'N', pero cada instancia del lado 'N' está relacionada con exactamente una instancia del lado '1'. Por ejemplo, un departamento (1) puede tener muchos empleados (N), pero cada empleado pertenece a un único departamento."
      },
      {
        id: 2331,
        moduloId: 203,
        pregunta: "¿Qué sucede con los atributos de una relación si esta es eliminada del modelo relacional?",
        opciones: [
          "Se transforman en atributos de una entidad",
          "Se convierten en claves foráneas",
          "Se agrupan como metadatos",
          "Se pierden, ya que solo pertenecen a la relación"
        ],
        respuestaCorrecta: 3,
        explicacion: "Los atributos que pertenecen específicamente a una relación (no a las entidades participantes) se perderán si la relación es eliminada del modelo, ya que estos atributos solo tienen sentido en el contexto de dicha relación. Al eliminar la relación, se pierde también la información que estos atributos representaban sobre la relación entre las entidades."
      },
      {
        id: 2332,
        moduloId: 203,
        pregunta: "¿Qué tipo de atributo en un modelo ER puede descomponerse en subatributos más simples?",
        opciones: [
          "Atributo derivado",
          "Atributo clave",
          "Atributo compuesto",
          "Atributo multivaluado"
        ],
        respuestaCorrecta: 2,
        explicacion: "Un atributo compuesto es aquel que puede descomponerse en componentes más pequeños y significativos, cada uno con su propio significado semántico. Por ejemplo, la dirección podría descomponerse en calle, número, ciudad, código postal y país. Cada uno de estos subatributos tiene un significado y valor propios."
      },
      {
        id: 2333,
        moduloId: 203,
        pregunta: "¿Qué tipo de atributo requiere su propia tabla si un solo registro puede tener varios valores para ese atributo?",
        opciones: [
          "Atributo redundante",
          "Atributo compuesto",
          "Atributo multivaluado",
          "Atributo derivado"
        ],
        respuestaCorrecta: 2,
        explicacion: "Un atributo multivaluado es aquel que puede tener múltiples valores para una sola entidad. Al transformar el modelo ER a tablas, los atributos multivaluados requieren la creación de una tabla separada para mantener la normalización, ya que una celda en una tabla relacional solo puede contener un valor atómico. Por ejemplo, los teléfonos de un cliente o las habilidades de un empleado."
      },
      {
        id: 2334,
        moduloId: 203,
        pregunta: "¿Qué tipo de copia de seguridad es más rápida de ejecutar pero requiere siempre la última copia completa para poder restaurar?",
        opciones: [
          "Copia manual",
          "Copia incremental",
          "Copia diferencial",
          "Copia lógica"
        ],
        respuestaCorrecta: 1,
        explicacion: "La copia incremental es más rápida de ejecutar porque solo guarda los cambios realizados desde la última copia (ya sea completa o incremental). Sin embargo, para restaurar los datos, siempre se necesita la última copia completa y todas las copias incrementales realizadas desde entonces, aplicadas en el orden correcto."
      },
      {
        id: 2335,
        moduloId: 203,
        pregunta: "¿Qué tipo de copia se ejecuta después de una copia completa y registra los cambios desde esa copia completa, sin considerar incrementales anteriores?",
        opciones: [
          "Copia automática",
          "Copia de logs",
          "Copia diferencial",
          "Copia de respaldo lógico"
        ],
        respuestaCorrecta: 2,
        explicacion: "La copia diferencial guarda todos los cambios realizados desde la última copia completa, ignorando cualquier copia diferencial anterior. A diferencia de la incremental, que solo guarda cambios desde la última copia de cualquier tipo, la diferencial siempre toma como referencia la última copia completa, lo que simplifica la restauración (solo se necesita la última copia completa y la última diferencial)."
      },
      {
        id: 2336,
        moduloId: 203,
        pregunta: "¿Qué tipo de JOIN devuelve todas las filas de la tabla izquierda y las coincidentes de la derecha o NULL si no hay coincidencia?",
        opciones: [
          "INNER JOIN",
          "FULL OUTER JOIN",
          "RIGHT JOIN",
          "LEFT JOIN"
        ],
        respuestaCorrecta: 3,
        explicacion: "LEFT JOIN (o LEFT OUTER JOIN) devuelve todas las filas de la tabla izquierda (la primera tabla mencionada en la consulta) junto con las filas coincidentes de la tabla derecha. Si no hay coincidencia para una fila de la tabla izquierda, los valores de las columnas de la tabla derecha se establecen como NULL. Es útil para encontrar registros que no tienen correspondencia."
      },
      {
        id: 2337,
        moduloId: 203,
        pregunta: "¿Qué tipo de relación existe cuando una entidad se relaciona con otra y ambas representan el mismo conjunto de elementos?",
        opciones: [
          "Generalización",
          "Relación reflexiva",
          "Asociación débil",
          "Agregación"
        ],
        respuestaCorrecta: 1,
        explicacion: "Una relación reflexiva ocurre cuando una entidad se relaciona consigo misma, es decir, cuando diferentes instancias de la misma entidad se relacionan entre sí. Por ejemplo, 'Empleado supervisa a Empleado' o 'Persona es_amigo_de Persona'. Esto permite modelar jerarquías, relaciones de parentesco o cualquier situación donde los elementos de un mismo conjunto se relacionan entre sí."
      },
      {
        id: 2338,
        moduloId: 203,
        pregunta: "¿Qué ventaja tiene una copia completa frente a una copia incremental?",
        opciones: [
          "No necesita programación previa",
          "Es más simple de restaurar",
          "Es más rápida",
          "Consume menos espacio"
        ],
        respuestaCorrecta: 1,
        explicacion: "La principal ventaja de una copia completa sobre una incremental es la simplicidad de restauración. Una copia completa contiene todos los datos necesarios para restaurar el sistema a un punto específico en el tiempo, sin depender de otras copias. En cambio, para restaurar desde copias incrementales, se necesita la última copia completa y todas las incrementales posteriores, aplicadas en secuencia, lo que es más complejo y propenso a errores."
      },
      {
        id: 2339,
        moduloId: 203,
        pregunta: "En un diagrama ER, se modela una entidad general llamada 'Vehículo' con las subentidades 'Coche' y 'Moto'. ¿Qué tipo de relación representa esta estructura?",
        opciones: [
          "Relación reflexiva",
          "Agregación",
          "Asociación débil",
          "Generalización/especialización"
        ],
        respuestaCorrecta: 3,
        explicacion: "La estructura descrita representa una relación de generalización/especialización (también llamada herencia o jerarquía ISA). En este modelo, 'Vehículo' es la entidad general o superclase, mientras que 'Coche' y 'Moto' son entidades especializadas o subclases. Las subclases heredan todos los atributos de la superclase y además añaden sus propios atributos específicos."
      },
      {
        id: 2340,
        moduloId: 203,
        pregunta: "En un diagrama ER, un atributo que depende de otros atributos se denomina:",
        opciones: [
          "Atributo derivado",
          "Atributo independiente",
          "Atributo compuesto",
          "Atributo multivaluado"
        ],
        respuestaCorrecta: 0,
        explicacion: "Un atributo derivado es aquel cuyo valor puede calcularse a partir de otros atributos, ya sea de la misma entidad o de entidades relacionadas. No se almacena físicamente en la base de datos, sino que se calcula cuando es necesario. Ejemplos comunes son la edad (derivada de la fecha de nacimiento), el total (derivado de precio × cantidad) o el promedio de calificaciones."
      }
    ]
  };

  export default moduloSimulacroUno;