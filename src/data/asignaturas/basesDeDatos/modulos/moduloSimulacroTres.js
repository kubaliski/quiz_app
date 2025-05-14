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
export const moduloSimulacroTres = {
    id: 205,
    nombre: "Simulacro 3 (14/05/2025) REMIX 1 - 2",
    esExamen: true,
    asignaturaId: 2,
    descripcion: "Implementación de modelos de bases de datos relacionales, consultas SQL avanzadas, gestión de permisos y estrategias de copia de seguridad.",
    preguntas: [
      {
        id: 2501,
        moduloId: 205,
        pregunta: "¿Cuál de los siguientes tipos de copia de seguridad guarda todos los datos seleccionados sin depender de copias anteriores?",
        opciones: [
          "Copia diferencial",
          "Copia incremental",
          "Copia de logs",
          "Copia completa"
        ],
        respuestaCorrecta: 3,
        explicacion: "La copia completa (full backup) guarda todos los datos seleccionados en su totalidad, independientemente de cualquier copia de seguridad anterior. Es autosuficiente y no requiere de otras copias para restaurar los datos, a diferencia de las copias incrementales o diferenciales que solo guardan los cambios y necesitan una copia completa como base."
      },
      {
        id: 2502,
        moduloId: 205,
        pregunta: "¿Cuál es el efecto de usar LIMIT 5 en una consulta SQL?",
        opciones: [
          "Devuelve del 11º al 15º resultado",
          "Muestra los resultados hasta el décimo",
          "Devuelve los primeros 5 resultados",
          "Devuelve 10 resultados desde el quinto"
        ],
        respuestaCorrecta: 2,
        explicacion: "La cláusula LIMIT 5 en una consulta SQL limita el conjunto de resultados a las primeras 5 filas que cumplan con los criterios de la consulta. Es útil para paginar resultados o cuando solo se necesita ver una pequeña muestra de los datos. Por ejemplo, 'SELECT * FROM productos ORDER BY precio DESC LIMIT 5' devolvería los 5 productos más caros."
      },
      {
        id: 2503,
        moduloId: 205,
        pregunta: "¿Cuál es la clave principal de una tabla resultado de una relación N:M?",
        opciones: [
          "La combinación de las claves primarias de ambas entidades",
          "Un campo autoincremental",
          "La clave primaria de la entidad fuerte",
          "La clave foránea de una de las entidades"
        ],
        respuestaCorrecta: 0,
        explicacion: "En una tabla resultante de una relación N:M (muchos a muchos), la clave principal suele ser una clave compuesta formada por la combinación de las claves primarias de ambas entidades relacionadas. Esta combinación garantiza la unicidad de cada registro en la tabla de relación, permitiendo que una misma entidad pueda relacionarse con múltiples instancias de la otra entidad y viceversa, sin crear duplicados."
      },
      {
        id: 2504,
        moduloId: 205,
        pregunta: "¿Qué cláusula se usa para agrupar resultados según una o varias columnas?",
        opciones: [
          "SORT BY",
          "ORDER BY",
          "COLLECT BY",
          "GROUP BY"
        ],
        respuestaCorrecta: 3,
        explicacion: "La cláusula GROUP BY se utiliza en SQL para agrupar filas que tienen los mismos valores en las columnas especificadas, tratándolas como un grupo único. Es especialmente útil cuando se combina con funciones de agregación como COUNT(), SUM(), AVG(), etc., permitiendo calcular estadísticas sobre cada grupo. Por ejemplo, 'SELECT departamento, AVG(salario) FROM empleados GROUP BY departamento' calcula el salario promedio para cada departamento."
      },
      {
        id: 2505,
        moduloId: 205,
        pregunta: "¿Qué comando en MySQL permite ver todos los privilegios asignados a un usuario?",
        opciones: [
          "DISPLAY USER PRIVILEGES;",
          "SHOW GRANTS FOR 'usuario'@'localhost';",
          "LIST GRANTS usuario;",
          "SELECT PRIVILEGES;"
        ],
        respuestaCorrecta: 1,
        explicacion: "El comando 'SHOW GRANTS FOR 'usuario'@'localhost';' en MySQL muestra todos los privilegios que han sido otorgados a un usuario específico desde una ubicación determinada. El resultado incluye todas las declaraciones GRANT que se aplicarían para recrear los permisos del usuario. Es una herramienta esencial para auditar y gestionar los permisos de acceso en un sistema de base de datos MySQL."
      },
      {
        id: 2506,
        moduloId: 205,
        pregunta: "¿Qué comando SQL revoca permisos previamente otorgados a un usuario?",
        opciones: [
          "REVOKE",
          "REMOVE",
          "DENY",
          "DROP PERMISSION"
        ],
        respuestaCorrecta: 0,
        explicacion: "El comando REVOKE en SQL se utiliza para quitar o revocar privilegios que previamente se habían otorgado a un usuario mediante el comando GRANT. La sintaxis básica es 'REVOKE tipo_de_permiso ON objeto FROM usuario'. Este comando es fundamental para gestionar los permisos de seguridad en una base de datos, permitiendo ajustar el nivel de acceso de los usuarios según sea necesario."
      },
      {
        id: 2507,
        moduloId: 205,
        pregunta: "¿Qué devuelve esta consulta SQL?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT Plato.Nombre, COUNT(DetalleOrden.idPlato)
FROM DetalleOrden
INNER JOIN Plato ON DetalleOrden.idPlato = Plato.idPlato
GROUP BY Plato.Nombre;`,
          lenguaje: "sql"
        },
        opciones: [
          "Platos ordenados por precio",
          "Número total de ingredientes por plato",
          "Total vendido por plato",
          "Número de veces que se ha pedido cada plato"
        ],
        respuestaCorrecta: 3,
        explicacion: "Esta consulta SQL realiza una unión interna (INNER JOIN) entre las tablas DetalleOrden y Plato, agrupando los resultados por el nombre del plato. Luego utiliza la función de agregación COUNT() para contar cuántas veces aparece cada plato en la tabla DetalleOrden, lo que representa la cantidad de veces que cada plato ha sido pedido. El resultado será una lista con el nombre de cada plato y su número total de pedidos."
      },
      {
        id: 2508,
        moduloId: 205,
        pregunta: "¿Qué devuelve esta subconsulta?",
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
          "Centros sin jefes",
          "Centros con salario promedio alto",
          "Centros donde trabaja al menos un jefe",
          "Centros con más de un departamento"
        ],
        respuestaCorrecta: 2,
        explicacion: "Esta consulta utiliza subconsultas anidadas para buscar, primero, los identificadores de departamentos (NUMDE) donde hay empleados con cargo 'Jefe', luego busca los identificadores de centros (NUMCE) a los que pertenecen esos departamentos, y finalmente devuelve los nombres de esos centros (NOMCE). El resultado final es la lista de centros donde trabaja al menos un empleado con cargo de Jefe."
      },
      {
        id: 2509,
        moduloId: 205,
        pregunta: "¿Qué devuelve esta subconsulta SQL?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT CENTRO
FROM CENTROS
WHERE ID IN (
  SELECT CentroID
  FROM Departamentos
  WHERE DepID IN (
    SELECT DepID
    FROM Empleados
    WHERE Cargo = 'Supervisor'
  )
);`,
          lenguaje: "sql"
        },
        opciones: [
          "Centros sin supervisores",
          "Centros con varios departamentos",
          "Centros donde trabaja al menos un supervisor",
          "Centros con presupuesto alto"
        ],
        respuestaCorrecta: 2,
        explicacion: "Esta consulta utiliza subconsultas anidadas para buscar, primero, los identificadores de departamentos (DepID) donde hay empleados con cargo 'Supervisor', luego busca los identificadores de centros (CentroID) a los que pertenecen esos departamentos, y finalmente devuelve los nombres de esos centros (CENTRO). El resultado final es la lista de centros donde trabaja al menos un empleado con cargo de Supervisor."
      },
      {
        id: 2510,
        moduloId: 205,
        pregunta: "¿Qué efecto tiene ON DELETE SET NULL al definir una clave foránea?",
        opciones: [
          "Bloquea la operación de eliminación",
          "Establece los valores foráneos como NULL",
          "No permite claves foráneas vacías",
          "Elimina los registros relacionados"
        ],
        respuestaCorrecta: 1,
        explicacion: "La opción ON DELETE SET NULL es una regla de integridad referencial que se aplica a una clave foránea. Cuando se elimina un registro en la tabla principal (referenciada), esta opción hace que los valores de la clave foránea en la tabla secundaria se establezcan automáticamente como NULL. Esto mantiene la integridad referencial sin bloquear la eliminación ni propagar la eliminación a otros registros. Es útil cuando la relación es opcional y la ausencia del registro principal no invalida los registros secundarios."
      },
       {
        id: 2511,
        moduloId: 205,
        pregunta: "¿Qué estrategia de implementación permite representar una jerarquía con generalización en una sola tabla en SQL?",
        opciones: [
          "Tabla única con columna discriminadora",
          "Tabla puente",
          "Tabla por subentidad",
          "Tabla por superentidad"
        ],
        respuestaCorrecta: 0,
        explicacion: "La estrategia de tabla única con columna discriminadora consiste en almacenar todos los atributos de todas las entidades de la jerarquía (superentidad y subentidades) en una sola tabla, añadiendo una columna adicional (discriminador) que indica a qué tipo específico pertenece cada registro. Esta estrategia es simple y eficiente para consultas que abarcan toda la jerarquía, aunque puede contener muchos valores NULL si las subentidades tienen atributos muy diferentes entre sí."
      },
      {
        id: 2512,
        moduloId: 205,
        pregunta: "¿Qué función SQL devuelve la cantidad de registros en una tabla?",
        opciones: [
          "TOTAL()",
          "SUM()",
          "COUNT()",
          "NUMBER()"
        ],
        respuestaCorrecta: 2,
        explicacion: "La función COUNT() en SQL se utiliza para devolver el número de filas o registros que cumplen un criterio específico. Por ejemplo, 'SELECT COUNT(*) FROM empleados' devuelve el número total de registros en la tabla empleados. COUNT(*) cuenta todas las filas, incluyendo aquellas con valores NULL, mientras que COUNT(columna) cuenta solo las filas donde la columna especificada no es NULL. Es una de las funciones de agregación más utilizadas en SQL."
      },
      {
        id: 2513,
        moduloId: 205,
        pregunta: "¿Qué hace esta consulta?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT TURNO.Turno, MAX(TURNO.NumOrden)
FROM TURNO
GROUP BY TURNO.Turno;`,
          lenguaje: "sql"
        },
        opciones: [
          "Muestra el número de órdenes por turno",
          "Cuenta todos los turnos disponibles",
          "Muestra el nombre de los empleados por turno",
          "Muestra la última orden registrada por turno"
        ],
        respuestaCorrecta: 3,
        explicacion: "Esta consulta SQL agrupa los registros de la tabla TURNO por el campo Turno, y para cada grupo encuentra el valor máximo del campo NumOrden. Asumiendo que el número de orden es secuencial o temporal, esta consulta devuelve el nombre de cada turno junto con el número de la última orden (la más reciente) registrada en ese turno. Es útil para identificar el estado actual o el último evento registrado en cada periodo o categoría."
      },
      {
        id: 2514,
        moduloId: 205,
        pregunta: "¿Qué indica una línea doble que conecta una entidad con una relación en un diagrama entidad-relación clásico?",
        opciones: [
          "Que la entidad contiene atributos compuestos",
          "Que la participación de la entidad en la relación es obligatoria",
          "Que hay una relación reflexiva",
          "Que la participación es opcional"
        ],
        respuestaCorrecta: 1,
        explicacion: "En un diagrama entidad-relación clásico, una línea doble que conecta una entidad con una relación indica que la participación de esa entidad en la relación es obligatoria (restricción de participación total). Esto significa que cada instancia de la entidad debe participar al menos en una relación de ese tipo. En contraste, una línea simple indica participación opcional, donde una instancia de la entidad puede o no participar en la relación."
      },
      {
        id: 2515,
        moduloId: 205,
        pregunta: "¿Qué instrucción se utiliza para eliminar permanentemente una tabla y su definición en SQL?",
        opciones: [
          "REMOVE RECORDS",
          "CLEAR TABLE",
          "DELETE FROM tabla",
          "DROP TABLE"
        ],
        respuestaCorrecta: 3,
        explicacion: "La instrucción DROP TABLE en SQL se utiliza para eliminar permanentemente una tabla de la base de datos, incluyendo toda su estructura (definición de columnas, índices, restricciones) y todos los datos que contiene. A diferencia de DELETE FROM, que solo elimina los registros pero mantiene la estructura de la tabla, DROP TABLE elimina la tabla completa y no puede deshacerse a menos que se tenga una copia de seguridad."
      },
      {
        id: 2516,
        moduloId: 205,
        pregunta: "¿Qué instrucción SQL se usa para actualizar valores en una tabla?",
        opciones: [
          "UPDATE",
          "SET",
          "MODIFY",
          "CHANGE"
        ],
        respuestaCorrecta: 0,
        explicacion: "La instrucción UPDATE en SQL se utiliza para modificar valores existentes en una tabla. Normalmente se combina con la cláusula SET para especificar qué columnas actualizar y con qué valores, y opcionalmente con la cláusula WHERE para limitar qué filas serán afectadas. Por ejemplo: 'UPDATE empleados SET salario = 50000 WHERE departamento = 'Ventas'' actualizaría el salario de todos los empleados del departamento de Ventas."
      },
      {
        id: 2517,
        moduloId: 205,
        pregunta: "¿Qué devuelve esta consulta SQL?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT Empresa.Nombre
FROM Empresa
INNER JOIN Cliente ON Empresa.clienteAsociado = Cliente.idCliente;`,
          lenguaje: "sql"
        },
        opciones: [
          "Clientes sin empresas asignadas",
          "Empresas con cliente asociado",
          "Empresas sin clientes",
          "Nombres duplicados de empresas"
        ],
        respuestaCorrecta: 1,
        explicacion: "Esta consulta SQL realiza una unión interna (INNER JOIN) entre las tablas Empresa y Cliente, basándose en la coincidencia entre el campo clienteAsociado de Empresa y el idCliente de Cliente. El resultado es una lista con los nombres de las empresas que tienen un cliente asociado, ya que INNER JOIN solo devuelve las filas donde hay coincidencia en ambas tablas. Las empresas sin cliente asociado no aparecerán en el resultado."
      },
      {
        id: 2518,
        moduloId: 205,
        pregunta: "¿Qué obtiene esta consulta?",
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
          "Clientes que no han realizado ninguna orden",
          "Clientes con facturación superior a la media",
          "Clientes que han realizado más de una orden"
        ],
        respuestaCorrecta: 1,
        explicacion: "Esta consulta SQL utiliza un LEFT JOIN para incluir todos los clientes, independientemente de si tienen órdenes asociadas o no. Luego, la cláusula WHERE filtra para mostrar solo aquellos donde el idCliente en la tabla Orden es NULL, lo que significa que no hay registros coincidentes en la tabla Orden. El resultado es una lista con los nombres de los clientes que no han realizado ninguna orden en el sistema."
      },
      {
        id: 2519,
        moduloId: 205,
        pregunta: "¿Qué devuelve esta consulta SQL?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT C.Nombre
FROM Clientes C
LEFT JOIN Ventas V ON C.id = V.ClienteID
WHERE V.ClienteID IS NULL;`,
          lenguaje: "sql"
        },
        opciones: [
          "Clientes con múltiples compras",
          "Clientes con compras mayores al promedio",
          "Clientes con compras canceladas",
          "Clientes sin compras registradas"
        ],
        respuestaCorrecta: 3,
        explicacion: "Esta consulta SQL utiliza un LEFT JOIN para incluir todos los clientes, independientemente de si tienen ventas asociadas o no. Luego, la cláusula WHERE filtra para mostrar solo aquellos donde el ClienteID en la tabla Ventas es NULL, lo que significa que no hay registros coincidentes en la tabla Ventas. El resultado es una lista con los nombres de los clientes que no han realizado ninguna compra o no tienen ventas registradas en el sistema."
      },
      {
        id: 2520,
        moduloId: 205,
        pregunta: "¿Qué obtiene esta consulta?",
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
        explicacion: "Esta consulta SQL selecciona los nombres de los meseros cuya fecha de incorporación es anterior al 1 de enero de 2020. La consulta compara fechas de manera que solo devuelve los meseros que comenzaron a trabajar antes de la fecha especificada. Es útil para identificar empleados con cierta antigüedad o experiencia en la organización."
      },
       {
        id: 2521,
        moduloId: 205,
        pregunta: "¿Qué ocurre si se ejecuta un DELETE sin cláusula WHERE en una tabla con miles de registros?",
        opciones: [
          "No ocurre nada",
          "Se borra solo el primer registro",
          "Se eliminan todos los registros de la tabla",
          "Aparece un error de sintaxis"
        ],
        respuestaCorrecta: 2,
        explicacion: "Cuando se ejecuta un comando DELETE sin una cláusula WHERE en SQL, se eliminan todos los registros de la tabla especificada. Es una operación potencialmente peligrosa, especialmente en tablas con muchos registros, ya que elimina todos los datos pero mantiene la estructura de la tabla. A diferencia de TRUNCATE TABLE, que es más eficiente para eliminar todos los registros, DELETE sin WHERE ejecuta una eliminación registro por registro, lo que puede ser más lento y generar más registros en el log de transacciones."
      },
      {
        id: 2522,
        moduloId: 205,
        pregunta: "¿Qué operador lógico se utiliza en SQL para verificar si un valor no está dentro de un conjunto?",
        opciones: [
          "NOT BETWEEN",
          "NOT IN",
          "IS NULL",
          "EXCEPT"
        ],
        respuestaCorrecta: 1,
        explicacion: "El operador NOT IN en SQL se utiliza para verificar si un valor no se encuentra dentro de un conjunto específico de valores o dentro de los resultados de una subconsulta. Por ejemplo, 'SELECT nombre FROM empleados WHERE departamento NOT IN ('Ventas', 'Marketing')' devuelve los nombres de empleados que no pertenecen a los departamentos de Ventas o Marketing. Este operador es útil para filtrar registros excluyendo múltiples valores en una sola condición."
      },
      {
        id: 2523,
        moduloId: 205,
        pregunta: "¿Qué operador se usa en SQL para buscar coincidencias parciales en texto?",
        opciones: [
          "EQUALS",
          "LIKE",
          "MATCH",
          "FIND"
        ],
        respuestaCorrecta: 1,
        explicacion: "El operador LIKE en SQL se utiliza para realizar búsquedas de patrones en columnas de tipo texto. Permite buscar coincidencias parciales usando caracteres comodín: % representa cualquier secuencia de cero o más caracteres, y _ representa un único carácter. Por ejemplo, 'SELECT * FROM clientes WHERE nombre LIKE 'Mar%'' encontraría nombres como María, Marta, Martín, etc. Es una herramienta esencial para búsquedas flexibles de texto en bases de datos."
      },
      {
        id: 2524,
        moduloId: 205,
        pregunta: "¿Qué representa una relación reflexiva en un modelo entidad-relación?",
        opciones: [
          "Una asociación entre atributos",
          "Una relación compuesta",
          "Una relación jerárquica entre niveles",
          "Una entidad relacionada consigo misma"
        ],
        respuestaCorrecta: 3,
        explicacion: "Una relación reflexiva en un modelo entidad-relación ocurre cuando una entidad se relaciona consigo misma, es decir, cuando diferentes instancias de la misma entidad se relacionan entre sí. Por ejemplo, 'Empleado supervisa a Empleado', 'Persona es_pariente_de Persona', o 'Producto es_componente_de Producto'. Estas relaciones son útiles para modelar jerarquías, relaciones de parentesco o cualquier caso donde los miembros de un mismo conjunto se relacionan entre sí."
      },
      {
        id: 2525,
        moduloId: 205,
        pregunta: "¿Qué devuelve esta consulta SQL?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT COUNT(*)
FROM Orden
WHERE Fecha BETWEEN '2024-02-01' AND '2024-02-29';`,
          lenguaje: "sql"
        },
        opciones: [
          "Total de ventas en febrero",
          "Productos vendidos en febrero",
          "Órdenes realizadas en febrero",
          "Clientes que compraron en febrero"
        ],
        respuestaCorrecta: 2,
        explicacion: "Esta consulta SQL cuenta el número de registros en la tabla Orden donde la fecha está entre el 1 y el 29 de febrero de 2024 (febrero completo). La función COUNT(*) cuenta todas las filas que cumplen con la condición especificada. Por lo tanto, el resultado es el número total de órdenes realizadas durante el mes de febrero de 2024."
      },
      {
        id: 2526,
        moduloId: 205,
        pregunta: "¿Qué sentencia elimina completamente una tabla y todos sus datos en MySQL?",
        opciones: [
          "REMOVE TABLE nombre;",
          "CLEAR TABLE nombre;",
          "DROP TABLE nombre;",
          "DELETE TABLE nombre;"
        ],
        respuestaCorrecta: 2,
        explicacion: "La sentencia DROP TABLE nombre; en MySQL elimina completamente una tabla y todos sus datos de la base de datos. Esta operación elimina no solo los datos, sino también la definición de la tabla (estructura, índices, restricciones), por lo que la tabla deja de existir en la base de datos. Es una operación irreversible a menos que se tenga una copia de seguridad de la tabla. A diferencia de DELETE FROM o TRUNCATE TABLE, que solo eliminan los datos pero mantienen la estructura de la tabla."
      },
      {
        id: 2527,
        moduloId: 205,
        pregunta: "¿Qué sentencia se utiliza para cambiar el nombre de una tabla en MySQL?",
        opciones: [
          "CHANGE TABLE nombre",
          "MODIFY TABLE nombre",
          "RENAME TABLE nombre AS nuevo_nombre",
          "ALTER TABLE nombre RENAME TO nuevo_nombre"
        ],
        respuestaCorrecta: 3,
        explicacion: "En MySQL, la sentencia ALTER TABLE nombre RENAME TO nuevo_nombre se utiliza para cambiar el nombre de una tabla existente. Esta operación modifica solo el nombre de la tabla, manteniendo intactos su estructura, índices, restricciones y datos. Es parte de las operaciones de DDL (Data Definition Language) que permiten modificar la estructura de objetos en la base de datos. También existe la sintaxis RENAME TABLE nombre TO nuevo_nombre que cumple la misma función."
      },
      {
        id: 2528,
        moduloId: 205,
        pregunta: "¿Qué sentencia SQL se utiliza para agregar una nueva columna a una tabla existente?",
        opciones: [
          "MODIFY TABLE",
          "INSERT COLUMN",
          "UPDATE COLUMN",
          "ALTER TABLE ... ADD COLUMN"
        ],
        respuestaCorrecta: 3,
        explicacion: "La sentencia ALTER TABLE ... ADD COLUMN se utiliza en SQL para agregar una nueva columna a una tabla existente. Por ejemplo, 'ALTER TABLE empleados ADD COLUMN telefono VARCHAR(15);' añadiría una columna llamada 'telefono' de tipo VARCHAR(15) a la tabla 'empleados'. Esta sentencia es parte del lenguaje DDL (Data Definition Language) y permite modificar la estructura de las tablas sin afectar los datos existentes. La nueva columna se crea con valores NULL para todos los registros existentes, a menos que se especifique un valor predeterminado."
      },
      {
        id: 2529,
        moduloId: 205,
        pregunta: "¿Qué significa que una relación tenga una cardinalidad 1:N entre dos entidades?",
        opciones: [
          "Cada entidad puede tener solo un valor",
          "Ambas entidades deben coincidir en valores",
          "Una entidad del lado 1 se relaciona con varias del lado N",
          "Hay una correspondencia muchos a muchos"
        ],
        respuestaCorrecta: 2,
        explicacion: "Una relación con cardinalidad 1:N (uno a muchos) significa que una instancia de la entidad del lado '1' puede estar relacionada con varias instancias de la entidad del lado 'N', mientras que cada instancia del lado 'N' está relacionada con exactamente una instancia del lado '1'. Por ejemplo, en una relación 1:N entre Departamento y Empleado, un departamento puede tener varios empleados, pero cada empleado pertenece a un solo departamento. Este tipo de relación es una de las más comunes en el diseño de bases de datos relacionales."
      },
      {
        id: 2530,
        moduloId: 205,
        pregunta: "¿Qué sucede con los atributos de una relación si esta es eliminada del modelo relacional?",
        opciones: [
          "Se agrupan como metadatos",
          "Se transforman en atributos de una entidad",
          "Se pierden, ya que solo pertenecen a la relación",
          "Se convierten en claves foráneas"
        ],
        respuestaCorrecta: 2,
        explicacion: "En el modelo relacional, si una relación es eliminada, los atributos que pertenecen exclusivamente a esa relación se pierden, ya que estos atributos solo tienen sentido en el contexto de la relación. Estos atributos describen propiedades de la asociación entre entidades, no de las entidades mismas. Al eliminar la relación, se pierde la estructura que daba significado a estos atributos, a menos que se realice algún proceso específico para reubicarlos o transformarlos de manera que mantengan su semántica en otra parte del modelo."
      },
        {
        id: 2531,
        moduloId: 205,
        pregunta: "¿Qué sucede con los atributos propios de una relación al convertir el modelo ER en tablas?",
        opciones: [
          "Se eliminan si no son claves",
          "Se transforman en columnas de una tabla que representa la relación",
          "Se ignoran en el modelo relacional",
          "Se fusionan con los atributos de las entidades"
        ],
        respuestaCorrecta: 1,
        explicacion: "Cuando se convierte un modelo Entidad-Relación en un modelo relacional, los atributos propios de una relación (aquellos que pertenecen a la relación y no a las entidades participantes) se transforman en columnas de una tabla que representa la relación. Esta tabla, además de incluir como claves foráneas las claves primarias de las entidades participantes, contiene columnas adicionales para los atributos propios de la relación, preservando toda la información asociada a la relación."
      },
      {
        id: 2532,
        moduloId: 205,
        pregunta: "¿Qué tipo de copia se ejecuta después de una copia completa y registra los cambios desde esa copia completa, sin considerar incrementales anteriores?",
        opciones: [
          "Copia diferencial",
          "Copia de logs",
          "Copia de respaldo lógico",
          "Copia automática"
        ],
        respuestaCorrecta: 0,
        explicacion: "Una copia diferencial es aquella que almacena todos los cambios realizados desde la última copia completa, sin tener en cuenta las posibles copias diferenciales anteriores. A diferencia de las copias incrementales, que solo guardan los cambios desde la última copia (ya sea completa o incremental), las diferenciales siempre toman como referencia la última copia completa. Esto las hace más rápidas de restaurar que las incrementales, ya que solo se necesita la última copia completa y la última diferencial, aunque ocupan más espacio a medida que pasa el tiempo desde la última copia completa."
      },
      {
        id: 2533,
        moduloId: 205,
        pregunta: "¿Qué tipo de relación existe cuando una entidad se relaciona con otra y ambas representan el mismo conjunto de elementos?",
        opciones: [
          "Generalización",
          "Relación reflexiva",
          "Asociación débil",
          "Agregación"
        ],
        respuestaCorrecta: 1,
        explicacion: "Una relación reflexiva ocurre cuando una entidad se relaciona consigo misma, es decir, cuando diferentes instancias de la misma entidad se relacionan entre sí. Por ejemplo, en un modelo que representa empleados, puede existir una relación reflexiva 'supervisa' que conecta un empleado (supervisor) con otro empleado (supervisado). Estas relaciones son útiles para modelar jerarquías, relaciones de parentesco, subordinación o cualquier caso donde los elementos de un mismo conjunto se relacionan entre sí."
      },
      {
        id: 2534,
        moduloId: 205,
        pregunta: "¿Qué ventaja tiene una copia completa frente a una copia incremental?",
        opciones: [
          "Es más simple de restaurar",
          "No necesita programación previa",
          "Es más rápida",
          "Consume menos espacio"
        ],
        respuestaCorrecta: 0,
        explicacion: "Una ventaja principal de la copia completa frente a la incremental es que es más simple de restaurar. Para restaurar datos desde una copia completa, solo se necesita ese único archivo de respaldo, mientras que con copias incrementales se requiere la última copia completa más todas las copias incrementales posteriores, aplicadas en el orden correcto. Esto hace que el proceso de restauración con copias completas sea más rápido, sencillo y menos propenso a errores, aunque a costa de un mayor uso de espacio y tiempo durante el proceso de copia."
      },
      {
        id: 2535,
        moduloId: 205,
        pregunta: "¿Qué devuelve esta subconsulta?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT Nombre
FROM Centro
WHERE idCentro IN (
  SELECT idCentro
  FROM Departamento
  WHERE idDepto IN (
    SELECT idDepto
    FROM Empleado
    WHERE Cargo = 'Jefe'
  )
  GROUP BY idCentro
  HAVING COUNT(*) > 1
);`,
          lenguaje: "sql"
        },
        opciones: [
          "Centros con al menos un jefe",
          "Centros con baja productividad",
          "Centros sin jefes",
          "Centros con varios jefes"
        ],
        respuestaCorrecta: 3,
        explicacion: "Esta consulta SQL anidada primero encuentra los departamentos donde hay empleados con cargo 'Jefe', luego agrupa estos departamentos por centro y filtra solo aquellos centros que tienen más de un departamento con jefes (HAVING COUNT(*) > 1). Finalmente, devuelve los nombres de estos centros. El resultado es una lista de centros que tienen varios departamentos dirigidos por jefes, lo que podría interpretarse como centros con múltiples jefes."
      },
      {
        id: 2536,
        moduloId: 205,
        pregunta: "¿Qué resultado da esta consulta?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT c.Nombre
FROM Cliente c
JOIN Factura f ON c.idCliente = f.idCliente
GROUP BY c.Nombre
HAVING COUNT(*) > 3;`,
          lenguaje: "sql"
        },
        opciones: [
          "Clientes con pagos atrasados",
          "Clientes con facturas canceladas",
          "Clientes con más de 3 facturas",
          "Clientes nuevos"
        ],
        respuestaCorrecta: 2,
        explicacion: "Esta consulta SQL une las tablas Cliente y Factura, agrupa los resultados por nombre de cliente, y utiliza la cláusula HAVING para filtrar solo aquellos clientes donde el conteo de facturas es mayor que 3. El resultado es una lista con los nombres de los clientes que tienen más de tres facturas registradas en el sistema, lo que podría indicar clientes frecuentes o con mayor actividad comercial."
      },
      {
        id: 2537,
        moduloId: 205,
        pregunta: "¿Qué resultado da esta consulta?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT Nombre
FROM Cliente
WHERE idCliente NOT IN (
  SELECT idCliente
  FROM Factura
);`,
          lenguaje: "sql"
        },
        opciones: [
          "Clientes con múltiples direcciones",
          "Clientes con facturas duplicadas",
          "Clientes sin facturas",
          "Clientes con facturas emitidas"
        ],
        respuestaCorrecta: 2,
        explicacion: "Esta consulta SQL utiliza el operador NOT IN con una subconsulta para encontrar clientes cuyos identificadores no aparecen en la tabla de facturas. El resultado es una lista con los nombres de los clientes que no tienen ninguna factura asociada, es decir, clientes que están registrados en el sistema pero que nunca han generado una factura."
      },
      {
        id: 2538,
        moduloId: 205,
        pregunta: "¿Qué obtiene esta consulta?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT Nombre
FROM Empleado
WHERE Salario > (
  SELECT MAX(Salario)
  FROM Empleado
  WHERE Departamento = 'Ventas'
);`,
          lenguaje: "sql"
        },
        opciones: [
          "Empleados en ventas",
          "Empleados mejor pagados que los de ventas",
          "Empleados con salario bajo",
          "Empleados sin salario"
        ],
        respuestaCorrecta: 1,
        explicacion: "Esta consulta SQL utiliza una subconsulta para encontrar el salario máximo entre los empleados del departamento de Ventas, y luego selecciona los nombres de los empleados cuyo salario es mayor que ese máximo. El resultado es una lista con los nombres de todos los empleados (de cualquier departamento) que tienen un salario superior al del empleado mejor pagado en el departamento de Ventas."
      },
      {
        id: 2539,
        moduloId: 205,
        pregunta: "En un diagrama ER, se modela una entidad general llamada \"Vehículo\" con las subentidades \"Coche\" y \"Moto\". ¿Qué tipo de relación representa esta estructura?",
        opciones: [
          "Generalización/especialización",
          "Asociación débil",
          "Relación reflexiva",
          "Agregación"
        ],
        respuestaCorrecta: 0,
        explicacion: "Esta estructura representa una relación de generalización/especialización, también conocida como jerarquía de herencia. La entidad general 'Vehículo' es la superclase o generalización, mientras que 'Coche' y 'Moto' son subclases o especializaciones. Esta relación permite modelar que ambas subentidades son tipos específicos de la entidad general, heredando sus atributos y comportamientos, pero añadiendo características propias. Por ejemplo, todos los vehículos tendrán un número de matrícula, pero solo los coches tendrán número de puertas."
      },
      {
        id: 2540,
        moduloId: 205,
        pregunta: "¿Qué devuelve esta consulta?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT Nombre
FROM Producto
ORDER BY VecesSolicitado DESC
LIMIT 1;`,
          lenguaje: "sql"
        },
        opciones: [
          "Producto más solicitado",
          "Producto sin stock",
          "Producto más caro",
          "Producto menos vendido"
        ],
        respuestaCorrecta: 0,
        explicacion: "Esta consulta SQL ordena todos los productos por el valor de la columna VecesSolicitado en orden descendente (de mayor a menor) y luego limita el resultado a solo el primer registro. Por lo tanto, devuelve el nombre del producto que ha sido solicitado más veces, es decir, el producto más popular o más solicitado según el contador VecesSolicitado."
      }
    ]
};

export default moduloSimulacroTres;