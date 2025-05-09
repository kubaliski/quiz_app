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
export const moduloSimulacroDos = {
    id: 204,
    nombre: "Simulacro 2 (09/05/2025)",
    esExamen: true,
    asignaturaId: 2,
    descripcion: "Implementación de modelos de bases de datos relacionales, consultas SQL avanzadas, gestión de permisos y estrategias de copia de seguridad.",
    preguntas: [
      {
        id: 2401,
        moduloId: 204,
        pregunta: "¿Cuál de las siguientes opciones es una forma válida de implementar la herencia en bases de datos relacionales?",
        opciones: [
          "Crear un índice de jerarquía",
          "Eliminar los atributos comunes",
          "Usar una tabla por cada subentidad",
          "Aplicar un disparador"
        ],
        respuestaCorrecta: 2,
        explicacion: "La implementación de herencia en bases de datos relacionales mediante el uso de una tabla por cada subentidad (también conocida como estrategia de mapeo de tabla por subclase) es una forma válida. En este enfoque, cada subentidad tiene su propia tabla que incluye sus atributos específicos y una clave foránea que la relaciona con la tabla de la superentidad. Este método permite representar relaciones de generalización/especialización eficientemente, manteniendo la integridad referencial."
      },
      {
        id: 2402,
        moduloId: 204,
        pregunta: "¿Cuál de los siguientes tipos de copia de seguridad guarda todos los datos seleccionados sin depender de copias anteriores?",
        opciones: [
          "Copia diferencial",
          "Copia completa",
          "Copia incremental",
          "Copia de logs"
        ],
        respuestaCorrecta: 1,
        explicacion: "La copia completa (full backup) guarda todos los datos seleccionados en su totalidad, independientemente de cualquier copia de seguridad anterior. Es autosuficiente y no requiere de otras copias para restaurar los datos, a diferencia de las copias incrementales o diferenciales que solo guardan los cambios y necesitan una copia completa como base."
      },
      {
        id: 2403,
        moduloId: 204,
        pregunta: "¿Cuál es el propósito principal del comando GRANT en MySQL?",
        opciones: [
          "Crear una nueva tabla",
          "Ver los permisos actuales de un usuario",
          "Conceder privilegios a un usuario",
          "Eliminar un usuario"
        ],
        respuestaCorrecta: 2,
        explicacion: "El comando GRANT en MySQL se utiliza principalmente para conceder privilegios a un usuario sobre objetos específicos de la base de datos. Estos privilegios pueden incluir permisos para realizar operaciones como SELECT, INSERT, UPDATE, DELETE, CREATE, entre otros, sobre tablas, bases de datos o vistas. La sintaxis básica es 'GRANT tipo_de_permiso ON objeto TO usuario', permitiendo así implementar un sistema de control de acceso granular."
      },
      {
        id: 2404,
        moduloId: 204,
        pregunta: "¿Cuál es una ventaja de realizar copias incrementales frente a copias completas?",
        opciones: [
          "Son más rápidas y ocupan menos espacio",
          "No requieren programación",
          "Son más seguras",
          "Se pueden usar sin conexión"
        ],
        respuestaCorrecta: 0,
        explicacion: "Las copias incrementales tienen como principal ventaja que son más rápidas de ejecutar y ocupan menos espacio de almacenamiento que las copias completas. Esto se debe a que solo guardan los datos que han cambiado desde la última copia (ya sea completa o incremental). Esta eficiencia permite realizar copias con mayor frecuencia, minimizando la pérdida potencial de datos en caso de fallo, aunque a costa de un proceso de restauración más complejo."
      },
      {
        id: 2405,
        moduloId: 204,
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
        id: 2406,
        moduloId: 204,
        pregunta: "¿Qué cláusula se utiliza para eliminar filas específicas de una tabla?",
        opciones: [
          "DELETE",
          "DROP",
          "REMOVE",
          "TRUNCATE"
        ],
        respuestaCorrecta: 0,
        explicacion: "La cláusula DELETE se utiliza en SQL para eliminar filas específicas de una tabla. Normalmente se combina con la cláusula WHERE para especificar qué filas deben eliminarse, por ejemplo: 'DELETE FROM empleados WHERE departamento = 'Ventas''. Sin WHERE, DELETE elimina todas las filas de la tabla pero mantiene su estructura. A diferencia de DROP, que elimina la tabla completa, o TRUNCATE, que elimina todas las filas de forma más eficiente."
      },
      {
        id: 2407,
        moduloId: 204,
        pregunta: "¿Qué comando crea una copia exacta de una tabla con sus datos?",
        opciones: [
          "CREATE TABLE nueva SELECT * FROM original",
          "COPY TABLE",
          "CLONE TABLE",
          "DUPLICATE TABLE"
        ],
        respuestaCorrecta: 0,
        explicacion: "El comando 'CREATE TABLE nueva SELECT * FROM original' crea una nueva tabla con el mismo esquema y datos que la tabla original. Esta sintaxis combina CREATE TABLE con una subconsulta SELECT, permitiendo no solo duplicar la estructura sino también poblar la nueva tabla con los datos existentes en la original. Es útil para crear copias de trabajo o versiones de respaldo de tablas importantes sin afectar a la tabla original."
      },
      {
        id: 2408,
        moduloId: 204,
        pregunta: "¿Qué comando en MySQL permite ver todos los privilegios asignados a un usuario?",
        opciones: [
          "SHOW GRANTS FOR 'usuario'@'localhost';",
          "DISPLAY USER PRIVILEGES;",
          "SELECT PRIVILEGES;",
          "LIST GRANTS usuario;"
        ],
        respuestaCorrecta: 0,
        explicacion: "El comando 'SHOW GRANTS FOR 'usuario'@'localhost';' en MySQL muestra todos los privilegios que han sido otorgados a un usuario específico desde una ubicación determinada. El resultado incluye todas las declaraciones GRANT que se aplicarían para recrear los permisos del usuario. Es una herramienta esencial para auditar y gestionar los permisos de acceso en un sistema de base de datos MySQL."
      },
      {
        id: 2409,
        moduloId: 204,
        pregunta: "¿Qué comando SQL revoca permisos previamente otorgados a un usuario?",
        opciones: [
          "REVOKE",
          "REMOVE",
          "DROP PERMISSION",
          "DENY"
        ],
        respuestaCorrecta: 0,
        explicacion: "El comando REVOKE en SQL se utiliza para quitar o revocar privilegios que previamente se habían otorgado a un usuario mediante el comando GRANT. La sintaxis básica es 'REVOKE tipo_de_permiso ON objeto FROM usuario'. Este comando es fundamental para gestionar los permisos de seguridad en una base de datos, permitiendo ajustar el nivel de acceso de los usuarios según sea necesario."
      },
      {
        id: 2410,
        moduloId: 204,
        pregunta: "¿Qué muestra la siguiente consulta SQL?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT Plato.Nombre, COUNT(DetalleOrden.idPlato)
FROM DetalleOrden
INNER JOIN Plato ON DetalleOrden.idPlato = Plato.idPlato
GROUP BY Plato.Nombre;`,
          lenguaje: "sql"
        },
        opciones: [
          "Número total de ingredientes por plato",
          "Número de veces que se ha pedido cada plato",
          "Platos ordenados por precio",
          "Total vendido por plato"
        ],
        respuestaCorrecta: 1,
        explicacion: "Esta consulta SQL realiza una unión interna (INNER JOIN) entre las tablas DetalleOrden y Plato, agrupando los resultados por el nombre del plato. Luego utiliza la función de agregación COUNT() para contar cuántas veces aparece cada plato en la tabla DetalleOrden, lo que representa la cantidad de veces que cada plato ha sido pedido. El resultado será una lista con el nombre de cada plato y su número total de pedidos."
      },
      {
        id: 2411,
        moduloId: 204,
        pregunta: "¿Qué devuelve la siguiente consulta SQL?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT Departamento.Nombre
FROM Departamento
LEFT JOIN Empleado ON Departamento.idDepartamento = Empleado.idDepartamento
GROUP BY Departamento.Nombre
HAVING COUNT(Empleado.idEmpleado) < 3;`,
          lenguaje: "sql"
        },
        opciones: [
          "Departamentos con menos de 3 empleados",
          "Departamentos sin empleados",
          "Departamentos con presupuestos altos",
          "Departamentos con más de 10 empleados"
        ],
        respuestaCorrecta: 0,
        explicacion: "Esta consulta SQL utiliza LEFT JOIN para incluir todos los departamentos, incluso aquellos sin empleados. Luego agrupa los resultados por nombre de departamento y utiliza HAVING para filtrar solo aquellos departamentos donde el conteo de empleados es menor que 3. El resultado es una lista de nombres de departamentos que tienen menos de 3 empleados, incluyendo aquellos que no tienen ningún empleado asignado."
      },
      {
        id: 2412,
        moduloId: 204,
        pregunta: "¿Qué devuelve la siguiente consulta SQL con subconsultas anidadas?",
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
          "Centros con varios departamentos",
          "Centros sin supervisores",
          "Centros donde trabaja al menos un supervisor",
          "Centros con presupuesto alto"
        ],
        respuestaCorrecta: 2,
        explicacion: "Esta consulta utiliza subconsultas anidadas para buscar, primero, los identificadores de departamentos (DepID) donde hay empleados con cargo 'Supervisor', luego busca los identificadores de centros (CentroID) a los que pertenecen esos departamentos, y finalmente devuelve los nombres de esos centros (CENTRO). El resultado final es la lista de centros donde trabaja al menos un empleado con cargo de Supervisor."
      },
      {
        id: 2413,
        moduloId: 204,
        pregunta: "¿Qué función SQL devuelve la fecha actual del sistema?",
        opciones: [
          "CURRENT()",
          "GETDATE()",
          "SYSDATE()",
          "NOW()"
        ],
        respuestaCorrecta: 3,
        explicacion: "La función NOW() en SQL devuelve la fecha y hora actuales del sistema en el formato 'YYYY-MM-DD HH:MM:SS'. Es ampliamente utilizada en MySQL y otros sistemas de gestión de bases de datos para registrar timestamps, calcular duraciones o filtrar registros por fechas relativas al momento actual. En algunos sistemas de bases de datos como Oracle, se utiliza SYSDATE() en lugar de NOW(), y en SQL Server se usa GETDATE()."
      },
      {
        id: 2414,
        moduloId: 204,
        pregunta: "¿Qué hace el comando ANALYZE TABLE en MySQL?",
        opciones: [
          "Elimina registros duplicados",
          "Cambia el nombre de una tabla",
          "Reorganiza físicamente los datos",
          "Actualiza estadísticas sobre índices y datos"
        ],
        respuestaCorrecta: 3,
        explicacion: "El comando ANALYZE TABLE en MySQL examina la tabla y actualiza las estadísticas sobre la distribución de claves en los índices y sobre los datos en la tabla. Estas estadísticas son utilizadas por el optimizador de consultas para determinar qué índices usar y cómo unir tablas eficientemente. No modifica los datos ni la estructura de la tabla, solo recopila y almacena información que ayuda a mejorar el rendimiento de las consultas."
      },
      {
        id: 2415,
        moduloId: 204,
        pregunta: "¿Qué hace el parámetro bind-address = 0.0.0.0 en MySQL?",
        opciones: [
          "Permite conexiones desde cualquier IP",
          "Solo permite conexión desde localhost",
          "Restringe la autenticación por plugin",
          "Desactiva todas las conexiones de red"
        ],
        respuestaCorrecta: 0,
        explicacion: "El parámetro 'bind-address = 0.0.0.0' en la configuración de MySQL permite que el servidor acepte conexiones desde cualquier dirección IP. La dirección 0.0.0.0 es una dirección comodín que representa todas las direcciones IPv4 posibles en la máquina local. Esto es útil en entornos donde MySQL debe ser accesible desde diferentes redes, aunque requiere configuraciones adecuadas de seguridad para evitar accesos no autorizados."
      },
      {
        id: 2416,
        moduloId: 204,
        pregunta: "¿Qué devuelve la siguiente consulta SQL?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT *
FROM Ventas
ORDER BY Fecha ASC
LIMIT 1;`,
          lenguaje: "sql"
        },
        opciones: [
          "Primera venta registrada",
          "Venta con cliente prioritario",
          "Venta con mayor importe",
          "Última venta registrada"
        ],
        respuestaCorrecta: 0,
        explicacion: "Esta consulta ordena todas las ventas por fecha en orden ascendente (de más antigua a más reciente) y luego limita el resultado a solo el primer registro. Por lo tanto, devuelve todos los datos de la primera venta registrada en el sistema, que es la venta con la fecha más antigua."
      },
      {
        id: 2417,
        moduloId: 204,
        pregunta: "¿Qué muestra la siguiente consulta SQL?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT Turno.Nombre, MAX(Orden.numero)
FROM Turno
JOIN Orden ON Turno.id = Orden.idTurno
GROUP BY Turno.Nombre;`,
          lenguaje: "sql"
        },
        opciones: [
          "Empleados por turno",
          "Última orden registrada por turno",
          "Todos los turnos disponibles",
          "Total de órdenes por turno"
        ],
        respuestaCorrecta: 1,
        explicacion: "Esta consulta SQL une las tablas Turno y Orden, agrupa los resultados por el nombre del turno, y para cada grupo encuentra el valor máximo del número de orden. Asumiendo que el número de orden es secuencial o temporal, esta consulta devuelve el nombre de cada turno junto con el número de la última orden (la más reciente) registrada en ese turno."
      },
      {
        id: 2418,
        moduloId: 204,
        pregunta: "¿Qué devuelve la siguiente consulta SQL?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT NOMBRE
FROM EMPLEADO
WHERE SALARIO < (SELECT AVG(SALARIO) FROM EMPLEADO);`,
          lenguaje: "sql"
        },
        opciones: [
          "Empleados con salario nulo",
          "Empleados con salario inferior al promedio",
          "Empleados con salario promedio",
          "Empleados con salario mayor al promedio"
        ],
        respuestaCorrecta: 1,
        explicacion: "Esta consulta SQL utiliza una subconsulta para calcular el salario promedio de todos los empleados, y luego selecciona los nombres de aquellos empleados cuyo salario es menor que ese promedio. El resultado es una lista con los nombres de todos los empleados que ganan menos que el salario promedio de la empresa."
      },
      {
        id: 2419,
        moduloId: 204,
        pregunta: "¿Qué hace la función LENGTH() en SQL?",
        opciones: [
          "Cuenta caracteres en un campo de texto",
          "Cuenta filas de la tabla",
          "Devuelve el tamaño en bytes de la tabla",
          "Devuelve la cantidad de columnas"
        ],
        respuestaCorrecta: 0,
        explicacion: "La función LENGTH() en SQL devuelve el número de caracteres en una cadena de texto. Por ejemplo, LENGTH('Hola mundo') devolvería 10. Es útil para validar la longitud de datos de entrada, crear restricciones basadas en longitud o filtrar registros según la longitud de un campo. En algunos sistemas de bases de datos, puede contar bytes en lugar de caracteres, lo que puede afectar el resultado con caracteres multibyte."
      },
      {
        id: 2420,
        moduloId: 204,
        pregunta: "¿Qué indica una línea doble que conecta una entidad con una relación en un diagrama entidad-relación clásico?",
        opciones: [
          "Que la entidad contiene atributos compuestos",
          "Que la participación de la entidad en la relación es obligatoria",
          "Que la participación es opcional",
          "Que hay una relación recursiva"
        ],
        respuestaCorrecta: 1,
        explicacion: "En un diagrama entidad-relación clásico, una línea doble que conecta una entidad con una relación indica que la participación de esa entidad en la relación es obligatoria (restricción de participación total). Esto significa que cada instancia de la entidad debe participar al menos en una relación de ese tipo. En contraste, una línea simple indica participación opcional, donde una instancia de la entidad puede o no participar en la relación."
      },
      {
        id: 2421,
        moduloId: 204,
        pregunta: "¿Qué instrucción se utiliza para eliminar permanentemente una tabla y su definición en SQL?",
        opciones: [
          "CLEAR TABLE",
          "DROP TABLE",
          "DELETE FROM tabla",
          "REMOVE RECORDS"
        ],
        respuestaCorrecta: 1,
        explicacion: "La instrucción DROP TABLE en SQL se utiliza para eliminar permanentemente una tabla de la base de datos, incluyendo toda su estructura (definición de columnas, índices, restricciones) y todos los datos que contiene. A diferencia de DELETE FROM, que solo elimina los registros pero mantiene la estructura de la tabla, DROP TABLE elimina la tabla completa y no puede deshacerse a menos que se tenga una copia de seguridad."
      },
      {
        id: 2422,
        moduloId: 204,
        pregunta: "¿Qué instrucción SQL se usa para actualizar valores en una tabla?",
        opciones: [
          "SET",
          "MODIFY",
          "UPDATE",
          "CHANGE"
        ],
        respuestaCorrecta: 2,
        explicacion: "La instrucción UPDATE en SQL se utiliza para modificar valores existentes en una tabla. Normalmente se combina con la cláusula SET para especificar qué columnas actualizar y con qué valores, y opcionalmente con la cláusula WHERE para limitar qué filas serán afectadas. Por ejemplo: 'UPDATE empleados SET salario = 50000 WHERE departamento = 'Ventas'' actualizaría el salario de todos los empleados del departamento de Ventas."
      },
      {
        id: 2423,
        moduloId: 204,
        pregunta: "¿Qué devuelve la siguiente consulta SQL?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT Empresa.Nombre
FROM Empresa
INNER JOIN Cliente ON Empresa.clienteAsociado = Cliente.idCliente;`,
          lenguaje: "sql"
        },
        opciones: [
          "Empresas sin clientes",
          "Empresas con cliente asociado",
          "Nombres duplicados de empresas",
          "Clientes sin empresas asignadas"
        ],
        respuestaCorrecta: 1,
        explicacion: "Esta consulta SQL realiza una unión interna (INNER JOIN) entre las tablas Empresa y Cliente, basándose en la coincidencia entre el campo clienteAsociado de Empresa y el idCliente de Cliente. El resultado es una lista con los nombres de las empresas que tienen un cliente asociado, ya que INNER JOIN solo devuelve las filas donde hay coincidencia en ambas tablas. Las empresas sin cliente asociado no aparecerán en el resultado."
      },
      {
        id: 2424,
        moduloId: 204,
        pregunta: "¿Qué devuelve la siguiente consulta SQL?",
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
          "Clientes con compras canceladas",
          "Clientes sin compras registradas",
          "Clientes con compras mayores al promedio"
        ],
        respuestaCorrecta: 2,
        explicacion: "Esta consulta SQL utiliza un LEFT JOIN para incluir todos los clientes, independientemente de si tienen ventas asociadas o no. Luego, la cláusula WHERE filtra para mostrar solo aquellos donde el ClienteID en la tabla Ventas es NULL, lo que significa que no hay registros coincidentes en la tabla Ventas. El resultado es una lista con los nombres de los clientes que no han realizado ninguna compra o no tienen ventas registradas en el sistema."
      },
      {
        id: 2425,
        moduloId: 204,
        pregunta: "¿Qué devuelve la siguiente consulta SQL?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT Nombre
FROM Empleados
WHERE FechaIngreso < '2019-01-01';`,
          lenguaje: "sql"
        },
        opciones: [
          "Empleados con más de 5 años",
          "Empleados con muchos pedidos",
          "Empleados con contrato temporal",
          "Empleados sin tareas asignadas"
        ],
        respuestaCorrecta: 0,
        explicacion: "Esta consulta SQL selecciona los nombres de los empleados cuya fecha de ingreso es anterior al 1 de enero de 2019. Considerando que estamos en 2025, estos empleados llevan más de 5 años en la empresa. La consulta compara fechas de manera que solo devuelve los empleados que comenzaron a trabajar antes de la fecha especificada."
      },
      {
        id: 2426,
        moduloId: 204,
        pregunta: "¿Qué palabra clave en SQL se utiliza para asegurar que los valores de una columna sean únicos?",
        opciones: [
          "PRIMARY",
          "DISTINCT",
          "NOT NULL",
          "UNIQUE"
        ],
        respuestaCorrecta: 3,
        explicacion: "La restricción UNIQUE en SQL garantiza que todos los valores en una columna (o conjunto de columnas) sean diferentes entre sí. A diferencia de PRIMARY KEY, una tabla puede tener múltiples restricciones UNIQUE y las columnas con restricción UNIQUE pueden contener valores NULL (aunque solo uno). Es útil para campos como correos electrónicos, nombres de usuario o números de identificación alternativos que deben ser únicos pero no son la clave principal."
      },
      {
        id: 2427,
        moduloId: 204,
        pregunta: "¿Qué representa una relación reflexiva en un modelo entidad-relación?",
        opciones: [
          "Una entidad relacionada consigo misma",
          "Una asociación entre atributos",
          "Una relación jerárquica entre niveles",
          "Una relación compuesta"
        ],
        respuestaCorrecta: 0,
        explicacion: "Una relación reflexiva en un modelo entidad-relación ocurre cuando una entidad se relaciona consigo misma, es decir, cuando diferentes instancias de la misma entidad se relacionan entre sí. Por ejemplo, 'Empleado supervisa a Empleado', 'Persona es_pariente_de Persona', o 'Producto es_componente_de Producto'. Estas relaciones son útiles para modelar jerarquías, relaciones de parentesco o cualquier caso donde los miembros de un mismo conjunto se relacionan entre sí."
      },
      {
        id: 2428,
        moduloId: 204,
        pregunta: "¿Qué muestra la siguiente consulta SQL?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT COUNT(*)
FROM Orden
WHERE Fecha BETWEEN '2024-02-01' AND '2024-02-29';`,
          lenguaje: "sql"
        },
        opciones: [
          "Total de ventas en febrero",
          "Órdenes realizadas en febrero",
          "Productos vendidos en febrero",
          "Clientes que compraron en febrero"
        ],
        respuestaCorrecta: 1,
        explicacion: "Esta consulta SQL cuenta el número de registros en la tabla Orden donde la fecha está entre el 1 y el 29 de febrero de 2024 (febrero completo). La función COUNT(*) cuenta todas las filas que cumplen con la condición especificada. Por lo tanto, el resultado es el número total de órdenes realizadas durante el mes de febrero de 2024."
      },
      {
        id: 2429,
        moduloId: 204,
        pregunta: "¿Qué sucede con los atributos propios de una relación al convertir el modelo ER en tablas?",
        opciones: [
          "Se eliminan si no son claves",
          "Se fusionan con los atributos de las entidades",
          "Se transforman en columnas de una tabla que representa la relación",
          "Se ignoran en el modelo relacional"
        ],
        respuestaCorrecta: 2,
        explicacion: "Cuando se convierte un modelo Entidad-Relación en un modelo relacional, los atributos propios de una relación (aquellos que pertenecen a la relación y no a las entidades participantes) se transforman en columnas de una tabla que representa la relación. Esta tabla, además de incluir como claves foráneas las claves primarias de las entidades participantes, contiene columnas adicionales para los atributos propios de la relación, preservando toda la información asociada a la relación."
      },
      {
        id: 2430,
        moduloId: 204,
        pregunta: "¿Qué tipo de copia solo almacena los cambios realizados desde la última copia completa?",
        opciones: [
          "Copia simultánea",
          "Copia incremental",
          "Copia redundante",
          "Copia parcial"
        ],
        respuestaCorrecta: 1,
        explicacion: "La copia incremental almacena únicamente los cambios (datos nuevos, modificados o eliminados) que se han producido desde la última copia de seguridad, ya sea completa o incremental. Este tipo de copia es eficiente en términos de tiempo y espacio de almacenamiento, ya que solo guarda lo que ha cambiado. Sin embargo, el proceso de restauración es más complejo, pues requiere la última copia completa y todas las incrementales posteriores, aplicadas en el orden correcto."
      },
      {
        id: 2431,
        moduloId: 204,
        pregunta: "¿Qué valor tiene por defecto el parámetro port en MySQL?",
        opciones: [
          "8080",
          "3306",
          "1521",
          "5432"
        ],
        respuestaCorrecta: 1,
        explicacion: "El valor predeterminado del parámetro port en MySQL es 3306. Este es el puerto estándar que MySQL utiliza para escuchar conexiones de red. Cuando se configura un cliente MySQL sin especificar un puerto, intentará conectarse automáticamente al puerto 3306. Es importante conocer este valor para configurar correctamente las conexiones y los firewalls. Otros sistemas de bases de datos utilizan puertos diferentes por defecto, como PostgreSQL (5432) u Oracle Database (1521)."
      },
      {
        id: 2432,
        moduloId: 204,
        pregunta: "¿Qué devuelve esta subconsulta SQL?",
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
          "Centros con varios jefes",
          "Centros con baja productividad",
          "Centros sin jefes",
          "Centros con al menos un jefe"
        ],
        respuestaCorrecta: 0,
        explicacion: "Esta consulta SQL anidada primero encuentra los departamentos donde hay empleados con cargo 'Jefe', luego agrupa estos departamentos por centro y filtra solo aquellos centros que tienen más de un departamento con jefes (HAVING COUNT(*) > 1). Finalmente, devuelve los nombres de estos centros. El resultado es una lista de centros que tienen varios departamentos dirigidos por jefes, lo que podría interpretarse como centros con múltiples jefes."
      },
      {
        id: 2433,
        moduloId: 204,
        pregunta: "¿Qué resultado da esta consulta SQL?",
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
          "Clientes con más de 3 facturas",
          "Clientes con facturas canceladas",
          "Clientes nuevos"
        ],
        respuestaCorrecta: 1,
        explicacion: "Esta consulta SQL une las tablas Cliente y Factura, agrupa los resultados por nombre de cliente, y utiliza la cláusula HAVING para filtrar solo aquellos clientes donde el conteo de facturas es mayor que 3. El resultado es una lista con los nombres de los clientes que tienen más de tres facturas registradas en el sistema, lo que podría indicar clientes frecuentes o con mayor actividad comercial."
      },
      {
        id: 2434,
        moduloId: 204,
        pregunta: "¿Qué resultado da esta consulta SQL?",
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
          "Clientes con facturas emitidas",
          "Clientes sin facturas"
        ],
        respuestaCorrecta: 3,
        explicacion: "Esta consulta SQL utiliza el operador NOT IN con una subconsulta para encontrar clientes cuyos identificadores no aparecen en la tabla de facturas. El resultado es una lista con los nombres de los clientes que no tienen ninguna factura asociada, es decir, clientes que están registrados en el sistema pero que nunca han generado una factura."
      },
      {
        id: 2435,
        moduloId: 204,
        pregunta: "¿Qué devuelve esta consulta SQL?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT e.Nombre
FROM Empleado e
WHERE e.idEmpleado NOT IN (
  SELECT idEmpleado
  FROM Pedido
);`,
          lenguaje: "sql"
        },
        opciones: [
          "Empleados con pedidos cancelados",
          "Empleados con pedidos incompletos",
          "Empleados que han hecho pedidos",
          "Empleados sin pedidos"
        ],
        respuestaCorrecta: 3,
        explicacion: "Esta consulta SQL utiliza el operador NOT IN con una subconsulta para encontrar empleados cuyos identificadores no aparecen en la tabla de pedidos. El resultado es una lista con los nombres de los empleados que no han realizado ningún pedido o no tienen pedidos asociados en el sistema."
      },
      {
        id: 2436,
        moduloId: 204,
        pregunta: "¿Qué muestra esta consulta SQL?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT COUNT(*)
FROM Venta
WHERE MetodoPago = 'Efectivo';`,
          lenguaje: "sql"
        },
        opciones: [
          "Total de ventas en efectivo",
          "Clientes que pagan en efectivo",
          "Total recaudado por tarjeta",
          "Ventas pendientes de cobro"
        ],
        respuestaCorrecta: 0,
        explicacion: "Esta consulta SQL cuenta el número de registros en la tabla Venta donde el método de pago es 'Efectivo'. La función COUNT(*) cuenta todas las filas que cumplen con la condición especificada. Por lo tanto, el resultado es el número total de ventas que se han pagado en efectivo, independientemente del monto o del cliente."
      },
      {
        id: 2437,
        moduloId: 204,
        pregunta: "¿Qué obtiene esta consulta SQL?",
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
          "Empleados con salario bajo",
          "Empleados sin salario",
          "Empleados mejor pagados que los de ventas"
        ],
        respuestaCorrecta: 3,
        explicacion: "Esta consulta SQL utiliza una subconsulta para encontrar el salario máximo entre los empleados del departamento de Ventas, y luego selecciona los nombres de los empleados cuyo salario es mayor que ese máximo. El resultado es una lista con los nombres de todos los empleados (de cualquier departamento) que tienen un salario superior al del empleado mejor pagado en el departamento de Ventas."
      },
      {
        id: 2438,
        moduloId: 204,
        pregunta: "¿Qué resultado da esta consulta SQL?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT COUNT(*)
FROM Orden
WHERE Fecha BETWEEN '2024-03-01' AND '2024-03-31';`,
          lenguaje: "sql"
        },
        opciones: [
          "Clientes nuevos en marzo",
          "Total de productos vendidos en marzo",
          "Órdenes realizadas en marzo",
          "Facturación en marzo"
        ],
        respuestaCorrecta: 2,
        explicacion: "Esta consulta SQL cuenta el número de registros en la tabla Orden donde la fecha está entre el 1 y el 31 de marzo de 2024 (marzo completo). La función COUNT(*) cuenta todas las filas que cumplen con la condición especificada. Por lo tanto, el resultado es el número total de órdenes realizadas durante el mes de marzo de 2024."
      },
      {
        id: 2439,
        moduloId: 204,
        pregunta: "¿Qué devuelve esta consulta SQL?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT Nombre
FROM Producto
ORDER BY VecesSolicitado DESC
LIMIT 1;`,
          lenguaje: "sql"
        },
        opciones: [
          "Producto menos vendido",
          "Producto más solicitado",
          "Producto sin stock",
          "Producto más caro"
        ],
        respuestaCorrecta: 1,
        explicacion: "Esta consulta SQL ordena todos los productos por el valor de la columna VecesSolicitado en orden descendente (de mayor a menor) y luego limita el resultado a solo el primer registro. Por lo tanto, devuelve el nombre del producto que ha sido solicitado más veces, es decir, el producto más popular o más solicitado según el contador VecesSolicitado."
      },
      {
        id: 2440,
        moduloId: 204,
        pregunta: "¿Qué muestra esta consulta SQL?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT p.Nombre, SUM(d.Cantidad)
FROM Producto p
JOIN Detalle d ON p.idProducto = d.idProducto
GROUP BY p.Nombre;`,
          lenguaje: "sql"
        },
        opciones: [
          "Cantidad total vendida por producto",
          "Nombre del producto más vendido",
          "Clientes por producto",
          "Productos sin stock"
        ],
        respuestaCorrecta: 0,
        explicacion: "Esta consulta SQL une las tablas Producto y Detalle, agrupa los resultados por nombre de producto, y utiliza la función de agregación SUM() para sumar los valores de la columna Cantidad para cada grupo. El resultado es una lista con el nombre de cada producto y la cantidad total que se ha vendido o distribuido de ese producto, calculada como la suma de todas las cantidades registradas en la tabla Detalle."
      }
    ]
  };

  export default moduloSimulacroDos;