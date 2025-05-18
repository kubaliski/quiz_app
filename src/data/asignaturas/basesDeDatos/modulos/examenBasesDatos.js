/**
 * Datos del módulo de Examen de Bases de Datos.
 * Incluye información del módulo y sus preguntas asociadas para el quiz.
 *
 * @type {Object}
 * @property {number} id - Identificador único del módulo
 * @property {string} nombre - Nombre del módulo
 * @property {boolean} esExamen - Indica si el módulo es un examen (true) o no (false)
 * @property {number} asignaturaId - ID de la asignatura a la que pertenece
 * @property {string} descripcion - Breve descripción del contenido del módulo
 * @property {Array<Object>} preguntas - Lista de preguntas para el quiz de este módulo
 */
export const moduloExamenBBDD = {
    id: 206,
    nombre: "Examen Bases de Datos",
    esExamen: true,
    asignaturaId: 2,
    descripcion: "Primera parte del examen de Bases de Datos que abarca diagramas ER, modelo relacional, SQL básico y gestión de usuarios.",
    preguntas: [
      {
        id: 2601,
        moduloId: 206,
        pregunta: "¿Qué representa un rombo en un diagrama entidad-relación?",
        opciones: [
          "Una tabla de base de datos",
          "Una relación entre entidades",
          "Un atributo multivaluado",
          "Una clave primaria"
        ],
        respuestaCorrecta: 1,
        explicacion: "En un diagrama entidad-relación, el rombo representa una relación entre entidades. Las entidades se representan con rectángulos, los atributos con óvalos, y las relaciones (que conectan las entidades) se representan con rombos. Esta notación es estándar en el modelado conceptual de bases de datos."
      },
      {
        id: 2602,
        moduloId: 206,
        pregunta: "¿Qué significa que una relación tenga una cardinalidad 1:N entre dos entidades?",
        opciones: [
          "Que una entidad puede tener solo un valor",
          "Una entidad del lado 1 se relaciona con varias del lado N",
          "Ambas entidades deben coincidir en valores",
          "Hay una correspondencia muchos a muchos"
        ],
        respuestaCorrecta: 1,
        explicacion: "Una relación con cardinalidad 1:N significa que una instancia de la entidad del lado '1' puede estar relacionada con múltiples instancias de la entidad del lado 'N', mientras que cada instancia del lado 'N' está relacionada con exactamente una instancia del lado '1'. Por ejemplo: un departamento puede tener muchos empleados, pero cada empleado pertenece a un solo departamento."
      },
      {
        id: 2603,
        moduloId: 206,
        pregunta: "¿Cuál es la clave principal de una tabla de una relación N:M?",
        opciones: [
          "La clave foránea de una de las entidades",
          "Clave primaria de la entidad fuerte",
          "Un campo autoincremental",
          "La combinación de las claves primarias de ambas entidades"
        ],
        respuestaCorrecta: 3,
        explicacion: "En una tabla resultante de una relación N:M (muchos a muchos), la clave principal es una clave compuesta formada por la combinación de las claves primarias de ambas entidades relacionadas. Esta combinación garantiza la unicidad de cada registro en la tabla de relación."
      },
      {
        id: 2604,
        moduloId: 206,
        pregunta: "¿Qué representa un atributo subrayado en un modelo ER?",
        opciones: [
          "Es un atributo redundante",
          "Es un atributo compuesto",
          "Es un atributo clave (clave primaria)",
          "Es un atributo multivaluado"
        ],
        respuestaCorrecta: 2,
        explicacion: "En el modelo entidad-relación, un atributo subrayado indica que es un atributo clave o clave primaria. Este atributo identifica de manera única cada instancia de la entidad. La notación de subrayado es una convención estándar para distinguir visualmente las claves primarias en los diagramas ER."
      },
      {
        id: 2605,
        moduloId: 206,
        pregunta: "¿Qué ocurre al transformar una relación débil a tabla?",
        opciones: [
          "Su clave se convierte en clave foránea",
          "Hereda la clave primaria de la relación fuerte",
          "Se ignora porque no puede tener independencia",
          "Se convierte en un atributo derivado"
        ],
        respuestaCorrecta: 1,
        explicacion: "Cuando se transforma una entidad débil a tabla en el modelo relacional, esta hereda la clave primaria de la entidad fuerte de la cual depende, combinándola con su propio discriminador parcial para formar su clave primaria compuesta. Esto mantiene la dependencia existencial que caracteriza a las entidades débiles."
      },
      {
        id: 2606,
        moduloId: 206,
        pregunta: "En un diagrama ER, un atributo que depende de otros atributos se denomina:",
        opciones: [
          "Atributo multivaluado",
          "Atributo derivado",
          "Atributo compuesto",
          "Atributo independiente"
        ],
        respuestaCorrecta: 1,
        explicacion: "Un atributo derivado es aquel cuyo valor se puede calcular a partir de otros atributos de la misma entidad o de entidades relacionadas. Por ejemplo, la edad se puede derivar de la fecha de nacimiento, o el total de una factura se puede calcular sumando los subtotales de los elementos. Se suele representar con un óvalo punteado en los diagramas ER."
      },
      {
        id: 2607,
        moduloId: 206,
        pregunta: "¿Cuál es la característica principal de una entidad débil?",
        opciones: [
          "Tiene atributos multivaluados",
          "No tiene una clave primaria propia",
          "No puede participar en relaciones",
          "No puede tener atributos compuestos"
        ],
        respuestaCorrecta: 1,
        explicacion: "Una entidad débil se caracteriza principalmente por no tener una clave primaria propia que la identifique de manera única. Su identificación depende de su relación con una entidad fuerte, combinando la clave de esta última con un discriminador parcial. Por ejemplo, 'Dependiente' podría ser una entidad débil que depende de la entidad 'Empleado'."
      },
      {
        id: 2608,
        moduloId: 206,
        pregunta: "¿Qué tipo de relación se convierte en una tabla adicional en la conversión a tablas?",
        opciones: [
          "1:1",
          "1:N",
          "N:M",
          "Débil"
        ],
        respuestaCorrecta: 2,
        explicacion: "Las relaciones N:M (muchos a muchos) requieren la creación de una tabla adicional en el modelo relacional. Esta tabla contendrá las claves foráneas de ambas entidades participantes formando una clave primaria compuesta, y cualquier atributo propio de la relación. Las relaciones 1:1 y 1:N generalmente se resuelven añadiendo claves foráneas a las tablas existentes."
      },
      {
        id: 2609,
        moduloId: 206,
        pregunta: "¿Qué se hace con un atributo multivaluado al pasar de un modelo ER a tablas?",
        opciones: [
          "Se convierte en una columna de tipo JSON",
          "Se elimina por redundante",
          "Se transforma en una nueva tabla",
          "Se convierte en clave primaria"
        ],
        respuestaCorrecta: 2,
        explicacion: "Un atributo multivaluado se transforma en una nueva tabla separada cuando se convierte el modelo ER a tablas relacionales. Esta nueva tabla contendrá la clave foránea de la entidad original y una columna para cada valor del atributo multivaluado. Por ejemplo, si 'Teléfono' es multivaluado para 'Cliente', se crearía una tabla 'ClienteTelefono'."
      },
      {
        id: 2610,
        moduloId: 206,
        pregunta: "Si una entidad tiene un atributo compuesto, ¿cómo se representa al pasar a tablas?",
        opciones: [
          "Como una columna con varios valores",
          "Se descompone en atributos simples",
          "Se convierte en una relación",
          "Se guarda como texto plano"
        ],
        respuestaCorrecta: 1,
        explicacion: "Un atributo compuesto se descompone en sus atributos simples componentes al pasar al modelo relacional. Por ejemplo, si 'Dirección' es un atributo compuesto formado por 'Calle', 'Ciudad' y 'Código Postal', en la tabla se crearán tres columnas separadas para cada uno de estos componentes simples."
      },
      {
        id: 2611,
        moduloId: 206,
        pregunta: "¿Qué palabra clave permite insertar múltiples registros en una sola sentencia SQL?",
        opciones: [
          "INSERT MULTIPLE",
          "INSERT ALL",
          "INSERT INTO...VALUES(...),(...),(...)",
          "BULK INSERT"
        ],
        respuestaCorrecta: 2,
        explicacion: "La sintaxis INSERT INTO...VALUES(...),(...),(...) permite insertar múltiples registros en una sola sentencia SQL. Por ejemplo: 'INSERT INTO empleados (nombre, edad) VALUES ('Juan', 25), ('María', 30), ('Pedro', 28)'. Esta sintaxis es más eficiente que ejecutar múltiples sentencias INSERT individuales."
      },
      {
        id: 2612,
        moduloId: 206,
        pregunta: "¿Cuál es el propósito principal del comando GRANT en MySQL?",
        opciones: [
          "Eliminar un usuario",
          "Ver los permisos actuales de un usuario",
          "Crear una nueva tabla",
          "Conceder privilegios a un usuario"
        ],
        respuestaCorrecta: 3,
        explicacion: "El comando GRANT en MySQL se utiliza para conceder privilegios específicos a usuarios en bases de datos, tablas o columnas específicas. Por ejemplo: 'GRANT SELECT, INSERT ON mi_base.* TO 'usuario'@'localhost'' otorga permisos de lectura e inserción en todas las tablas de 'mi_base' al usuario especificado."
      },
      {
        id: 2613,
        moduloId: 206,
        pregunta: "¿Qué cláusula se usa para evitar errores al insertar un registro duplicado?",
        opciones: [
          "INSERT CHECK",
          "INSERT IGNORE",
          "SAFE INSERT",
          "INSERT OR ABORT"
        ],
        respuestaCorrecta: 1,
        explicacion: "La cláusula INSERT IGNORE en MySQL evita que se produzcan errores cuando se intenta insertar registros que violarían restricciones de clave primaria o única. En lugar de generar un error, simplemente ignora los registros duplicados y continúa con la operación. Es útil cuando se cargan datos masivos y algunos pueden ser duplicados."
      },
      {
        id: 2614,
        moduloId: 206,
        pregunta: "¿Qué hace el comando ANALYZE TABLE en MySQL?",
        opciones: [
          "Reorganiza físicamente los datos",
          "Elimina registros duplicados",
          "Actualiza estadísticas sobre índices y datos",
          "Cambia el nombre de una tabla"
        ],
        respuestaCorrecta: 2,
        explicacion: "El comando ANALYZE TABLE en MySQL analiza y almacena la distribución de claves para la tabla especificada, actualizando las estadísticas que el optimizador de consultas utiliza para decidir cómo ejecutar las consultas de manera más eficiente. Estas estadísticas incluyen información sobre la cardinalidad de los índices y la distribución de los datos."
      },
      {
        id: 2615,
        moduloId: 206,
        pregunta: "¿Qué valor tiene por defecto el parámetro port en MySQL?",
        opciones: [
          "3306",
          "8080",
          "5432",
          "1521"
        ],
        respuestaCorrecta: 0,
        explicacion: "El puerto por defecto para MySQL es 3306. Este es el puerto estándar que utiliza el servidor MySQL para escuchar conexiones TCP/IP. Otros puertos mencionados corresponden a diferentes tecnologías: 8080 (HTTP alternativo), 5432 (PostgreSQL), 1521 (Oracle)."
      },
      {
        id: 2616,
        moduloId: 206,
        pregunta: "¿Qué hace ON DELETE CASCADE en una clave foránea?",
        opciones: [
          "Evita que se eliminen registros relacionados",
          "Establece los valores en NULL",
          "Elimina automáticamente los registros relacionados",
          "Muestra un error si hay registros hijos"
        ],
        respuestaCorrecta: 2,
        explicacion: "La acción referencial ON DELETE CASCADE hace que cuando se elimina un registro en la tabla principal (padre), se eliminen automáticamente todos los registros relacionados en la tabla secundaria (hijos). Esta opción mantiene la integridad referencial eliminando las referencias huérfanas de manera automática."
      },
      {
        id: 2617,
        moduloId: 206,
        pregunta: "¿Qué función SQL devuelve el promedio?",
        opciones: [
          "SUM()",
          "COUNT()",
          "AVG()",
          "MEDIAN()"
        ],
        respuestaCorrecta: 2,
        explicacion: "La función AVG() en SQL calcula y devuelve el promedio aritmético de los valores de una columna numérica. Por ejemplo, 'SELECT AVG(salario) FROM empleados' devuelve el salario promedio de todos los empleados. Esta función ignora los valores NULL en el cálculo."
      },
      {
        id: 2618,
        moduloId: 206,
        pregunta: "¿Qué cláusula filtra resultados agrupados en SQL?",
        opciones: [
          "WHERE",
          "HAVING",
          "GROUP BY",
          "ORDER BY"
        ],
        respuestaCorrecta: 1,
        explicacion: "La cláusula HAVING se utiliza para filtrar resultados después de que se han aplicado las funciones de agregación y agrupación (GROUP BY). Mientras que WHERE filtra filas antes del agrupamiento, HAVING filtra grupos después del agrupamiento. Por ejemplo: 'SELECT departamento, COUNT(*) FROM empleados GROUP BY departamento HAVING COUNT(*) > 5'."
      },
      {
        id: 2619,
        moduloId: 206,
        pregunta: "¿Cuál es el objetivo del comando OPTIMIZE TABLE?",
        opciones: [
          "Crear índices nuevos",
          "Reorganizar la tabla para reducir la fragmentación",
          "Actualizar estadísticas",
          "Eliminar registros duplicados"
        ],
        respuestaCorrecta: 1,
        explicacion: "El comando OPTIMIZE TABLE reorganiza físicamente los datos de la tabla y los índices asociados para reducir la fragmentación y mejorar el rendimiento de acceso. Este comando es especialmente útil después de muchas operaciones DELETE o UPDATE que pueden dejar espacios fragmentados en los archivos de datos."
      },
      {
        id: 2620,
        moduloId: 206,
        pregunta: "¿Qué hace el parámetro bind-address=0.0.0.0 en MySQL?",
        opciones: [
          "Desactiva todas las conexiones de red",
          "Permite conexiones desde cualquier IP",
          "Solo permite conexión desde localhost",
          "Restringe la autenticación por plugin"
        ],
        respuestaCorrecta: 1,
        explicacion: "El parámetro bind-address=0.0.0.0 en MySQL configura el servidor para aceptar conexiones desde cualquier dirección IP. Por defecto, MySQL suele configurarse para aceptar conexiones solo desde localhost (127.0.0.1). Configurar bind-address a 0.0.0.0 permite conexiones remotas desde cualquier dirección IP."
      },
       {
        id: 2621,
        moduloId: 207,
        pregunta: "¿Qué obtiene esta consulta?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT NOMDE
FROM TDEPTO
WHERE NUMDE IN (
  SELECT NUMDE
  FROM TEMPLE
  GROUP BY NUMDE
  HAVING COUNT(*) > 5
);`,
          lenguaje: "sql"
        },
        opciones: [
          "Departamento con menos de 5 empleados",
          "Empleados con más de 5 años en la empresa",
          "Departamentos donde trabajan más de 5 empleados",
          "Departamento sin presupuesto"
        ],
        respuestaCorrecta: 2,
        explicacion: "Esta consulta utiliza una subconsulta para encontrar los números de departamento (NUMDE) que tienen más de 5 empleados, agrupando por departamento y usando HAVING COUNT(*) > 5. Luego devuelve los nombres (NOMDE) de esos departamentos desde la tabla TDEPTO. El resultado son los departamentos donde trabajan más de 5 empleados."
      },
      {
        id: 2622,
        moduloId: 207,
        pregunta: "¿Qué muestra esta consulta?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT Cliente.Nombre
FROM Cliente
JOIN EMPRESA ON Cliente.idCliente = Empresa.idCliente;`,
          lenguaje: "sql"
        },
        opciones: [
          "Clientes particulares",
          "Meseros y sus órdenes",
          "Clientes que son empresas",
          "Clientes sin órdenes"
        ],
        respuestaCorrecta: 2,
        explicacion: "Esta consulta realiza un JOIN entre las tablas Cliente y EMPRESA basándose en idCliente. El resultado muestra los nombres de los clientes que también están registrados en la tabla EMPRESA, es decir, clientes que son empresas (no particulares). Solo aparecerán aquellos clientes que tengan un registro correspondiente en la tabla EMPRESA."
      },
      {
        id: 2623,
        moduloId: 207,
        pregunta: "¿Qué tipo de JOIN incluye todas las filas de la tabla izquierda y solo coincidencias de la tabla derecha?",
        opciones: [
          "INNER JOIN",
          "FULL JOIN",
          "RIGHT JOIN",
          "LEFT JOIN"
        ],
        respuestaCorrecta: 3,
        explicacion: "LEFT JOIN (o LEFT OUTER JOIN) incluye todas las filas de la tabla izquierda y las filas coincidentes de la tabla derecha. Si no hay coincidencia en la tabla derecha, los campos correspondientes se llenan con NULL. Es útil cuando se quiere mantener todos los registros de la tabla principal y ver qué registros tienen correspondencia en la tabla secundaria."
      },
      {
        id: 2624,
        moduloId: 207,
        pregunta: "¿Qué resultado da esta consulta?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT SUM(Total)
FROM Orden
WHERE Fecha BETWEEN '2024-01-01' AND '2024-01-31';`,
          lenguaje: "sql"
        },
        opciones: [
          "El número de órdenes en enero",
          "El total de ingresos en enero",
          "Las órdenes con total mayor a 100",
          "Las órdenes por cliente"
        ],
        respuestaCorrecta: 1,
        explicacion: "Esta consulta suma todos los valores de la columna Total de las órdenes realizadas en enero de 2024. La función SUM() agrega todos los totales individuales, y la cláusula WHERE con BETWEEN filtra solo las órdenes del mes de enero. El resultado es el total de ingresos generados en enero."
      },
      {
        id: 2625,
        moduloId: 207,
        pregunta: "¿Qué hace esta consulta?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT NOMEM, SALAR
FROM TEMPLE
WHERE SALAR > (
  SELECT AVG(SALAR)
  FROM TEMPLE
);`,
          lenguaje: "sql"
        },
        opciones: [
          "Empleados con salario inferior al promedio",
          "Empleados con salario mayor al promedio",
          "Empleados con salario exacto al promedio",
          "Todos los empleados sin filtro"
        ],
        respuestaCorrecta: 1,
        explicacion: "Esta consulta utiliza una subconsulta para calcular el salario promedio de todos los empleados y luego selecciona el nombre (NOMEM) y salario (SALAR) de aquellos empleados cuyo salario es mayor que ese promedio. El resultado es la lista de empleados que ganan más que el salario promedio de la empresa."
      },
      {
        id: 2626,
        moduloId: 207,
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
    WHERE SALAR > 3000
  )
);`,
          lenguaje: "sql"
        },
        opciones: [
          "Centros sin empleados",
          "Centros con presupuesto mayor a 3000",
          "Centros donde hay empleados con salario mayor a 3000",
          "Centros con menos de 3 departamentos"
        ],
        respuestaCorrecta: 2,
        explicacion: "Esta consulta anidada primero busca empleados con salario mayor a 3000, luego encuentra los departamentos donde trabajan esos empleados, y finalmente devuelve los nombres de los centros que contienen esos departamentos. El resultado son los centros donde trabaja al menos un empleado con salario superior a 3000."
      },
      {
        id: 2627,
        moduloId: 207,
        pregunta: "¿Qué hace esta consulta?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT TURNO.Turno, COUNT(TURNO.NumOrden)
FROM TURNO
GROUP BY TURNO.Turno;`,
          lenguaje: "sql"
        },
        opciones: [
          "Cuenta los turnos disponibles",
          "Muestra el turno más largo",
          "Cuenta cuántas órdenes se atendieron por turno",
          "Filtra solo las órdenes de la mañana"
        ],
        respuestaCorrecta: 2,
        explicacion: "Esta consulta agrupa los registros por turno y cuenta cuántas órdenes (NumOrden) hay en cada turno. La función COUNT() cuenta el número de registros de órdenes para cada turno, y GROUP BY agrupa los resultados por el nombre del turno. El resultado muestra cuántas órdenes se atendieron en cada turno."
      },
      {
        id: 2628,
        moduloId: 207,
        pregunta: "¿Qué función se puede usar para redondear un número decimal en SQL?",
        opciones: [
          "ROUND()",
          "DECIMAL()",
          "INT()",
          "REDUCE()"
        ],
        respuestaCorrecta: 0,
        explicacion: "La función ROUND() se utiliza para redondear números decimales a un número específico de decimales. Por ejemplo, ROUND(3.14159, 2) devuelve 3.14. También puede redondear a enteros si no se especifica el número de decimales: ROUND(3.7) devuelve 4. Es una función estándar en la mayoría de sistemas de gestión de bases de datos."
      },
      {
        id: 2629,
        moduloId: 207,
        pregunta: "¿Qué obtiene la consulta?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT Nombre
FROM Mesero
WHERE FechaIncorporacion > '2021-01-01';`,
          lenguaje: "sql"
        },
        opciones: [
          "Meseros con más de 10 años",
          "Meseros con fecha de incorporación posterior a 2021",
          "Meseros que atendieron más de 10 órdenes",
          "Todos los meseros activos"
        ],
        respuestaCorrecta: 1,
        explicacion: "Esta consulta selecciona los nombres de los meseros cuya fecha de incorporación es posterior al 1 de enero de 2021. La condición WHERE FechaIncorporacion > '2021-01-01' filtra solo aquellos meseros que comenzaron a trabajar después de esa fecha, es decir, meseros incorporados a partir del 2 de enero de 2021 en adelante."
      },
      {
        id: 2630,
        moduloId: 207,
        pregunta: "¿Qué hace esta consulta?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT *
FROM Orden
ORDER BY Total DESC
LIMIT 1;`,
          lenguaje: "sql"
        },
        opciones: [
          "Orden con menor total",
          "Última orden registrada",
          "Orden con total más alto",
          "Orden más antigua"
        ],
        respuestaCorrecta: 2,
        explicacion: "Esta consulta ordena todas las órdenes por su total en orden descendente (de mayor a menor) y luego limita el resultado a solo el primer registro. Por lo tanto, devuelve la orden con el total más alto. ORDER BY Total DESC ordena de mayor a menor, y LIMIT 1 toma solo el primer resultado."
      },
      {
        id: 2631,
        moduloId: 207,
        pregunta: "¿Qué devuelve esta consulta?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT DISTINCT Cliente.Nombre
FROM Cliente
JOIN Orden ON Cliente.idCliente = Orden.idCliente;`,
          lenguaje: "sql"
        },
        opciones: [
          "Clientes con pedidos duplicados",
          "Clientes que realizaron al menos una orden",
          "Clientes sin pedidos",
          "Clientes que son empresas"
        ],
        respuestaCorrecta: 1,
        explicacion: "Esta consulta realiza un JOIN entre Cliente y Orden, devolviendo los nombres únicos (DISTINCT) de los clientes que tienen al menos una orden asociada. El JOIN interno solo incluye clientes que tienen registros coincidentes en la tabla Orden, y DISTINCT elimina duplicados si un cliente tiene múltiples órdenes."
      },
      {
        id: 2632,
        moduloId: 207,
        pregunta: "¿Qué hace esta subconsulta?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT NOMDE
FROM TDEPTO
WHERE NUMDE NOT IN (
  SELECT NUMDE
  FROM TEMPLE
  WHERE SALAR <= 2000
);`,
          lenguaje: "sql"
        },
        opciones: [
          "Departamentos con salario bajo",
          "Departamentos sin empleados",
          "Departamentos donde todos ganan más de 2000",
          "Departamentos de dirección"
        ],
        respuestaCorrecta: 2,
        explicacion: "Esta consulta utiliza NOT IN para seleccionar departamentos que no están en la lista de departamentos que tienen empleados con salario menor o igual a 2000. En otras palabras, devuelve los nombres de departamentos donde todos los empleados ganan más de 2000, ya que excluye los departamentos que tienen al menos un empleado con salario ≤ 2000."
      },
      {
        id: 2633,
        moduloId: 207,
        pregunta: "¿Qué resultado da esta consulta?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT NOMEM
FROM TEMPLE
WHERE FECIN > (
  SELECT MIN(FECIN)
  FROM TEMPLE
);`,
          lenguaje: "sql"
        },
        opciones: [
          "Empleados con más antigüedad",
          "Empleados contratados después del primero",
          "Empleados con salarios más altos",
          "Todos los empleados"
        ],
        respuestaCorrecta: 1,
        explicacion: "Esta consulta utiliza una subconsulta para encontrar la fecha de incorporación más antigua (MIN(FECIN)) y luego selecciona los nombres de todos los empleados cuya fecha de incorporación es posterior a esa fecha mínima. El resultado son todos los empleados excepto el primero que fue contratado, es decir, empleados contratados después del primero."
      },
      {
        id: 2634,
        moduloId: 207,
        pregunta: "¿Qué obtiene esta consulta?",
        recurso: {
          tipo: "codigo",
          contenido: `SELECT NOMCE, COUNT(NUMEM)
FROM TCENTR
JOIN TDEPTO ON TCENTR.NUMCE = TDEPTO.NUMCE
JOIN TEMPLE ON TDEPTO.NUMDE = TEMPLE.NUMDE
GROUP BY NOMCE;`,
          lenguaje: "sql"
        },
        opciones: [
          "Número de empleados por centro de trabajo",
          "Número de departamentos",
          "Número de hijos por centro",
          "Presupuesto por centro"
        ],
        respuestaCorrecta: 0,
        explicacion: "Esta consulta realiza JOIN entre tres tablas (TCENTR, TDEPTO, TEMPLE) para relacionar centros con departamentos y empleados. Luego agrupa por nombre de centro (NOMCE) y cuenta el número de empleados (COUNT(NUMEM)) en cada centro. El resultado muestra cuántos empleados trabajan en cada centro de trabajo."
      },
      {
        id: 2635,
        moduloId: 207,
        pregunta: "¿Qué tipo de relación suele representarse con una línea doble en un diagrama ER clásico?",
        opciones: [
          "Relación opcional",
          "Relación jerárquica",
          "Relación de participación total",
          "Relación entre atributos compuestos"
        ],
        respuestaCorrecta: 2,
        explicacion: "En un diagrama entidad-relación clásico, una línea doble indica participación total o obligatoria de una entidad en una relación. Esto significa que todas las instancias de esa entidad deben participar en la relación. En contraste, una línea simple indica participación parcial u opcional, donde algunas instancias pueden no participar en la relación."
      },
      {
        id: 2636,
        moduloId: 207,
        pregunta: "¿Qué ocurre si una relación tiene atributos propios al transformarse en tablas?",
        opciones: [
          "Los atributos se reparten entre las entidades participantes",
          "Se crean como columnas en una tabla independiente para la relación",
          "Se pierden porque no pertenecen a ninguna entidad",
          "Se integran como claves foráneas"
        ],
        respuestaCorrecta: 1,
        explicacion: "Cuando una relación tiene atributos propios, estos se convierten en columnas de una tabla independiente que representa la relación. Esta tabla contiene las claves foráneas de las entidades participantes y las columnas adicionales para los atributos propios de la relación, preservando toda la información asociada a la relación."
      },
      {
        id: 2637,
        moduloId: 207,
        pregunta: "¿Cómo se representa una generalización/especialización al pasar a tablas?",
        opciones: [
          "Como una sola tabla con un campo tipo",
          "Como varias tablas separadas por subentidad",
          "Depende del enfoque (única tabla, tabla por subentidad, tabla por jerarquía)",
          "No se puede representar en SQL"
        ],
        respuestaCorrecta: 2,
        explicacion: "La representación de jerarquías de generalización/especialización en tablas relacionales puede seguir varios enfoques: tabla única con discriminador (todos los atributos en una tabla con campo tipo), tabla por subentidad (cada subentidad es una tabla separada), o tabla por jerarquía. La elección depende de factores como el número de atributos específicos, consultas frecuentes y eficiencia requerida."
      },
      {
        id: 2638,
        moduloId: 207,
        pregunta: "¿Qué significa una relación reflexiva en un diagrama ER?",
        opciones: [
          "Que una entidad se relaciona consigo misma",
          "Que una relación apunta a dos entidades idénticas",
          "Que el atributo es redundante",
          "Que la clave primaria se duplica"
        ],
        respuestaCorrecta: 0,
        explicacion: "Una relación reflexiva ocurre cuando una entidad se relaciona consigo misma, es decir, cuando diferentes instancias de la misma entidad se relacionan entre sí. Por ejemplo, 'Empleado supervisa a Empleado', 'Persona es_pariente_de Persona', o 'Producto es_componente_de Producto'. Es útil para modelar jerarquías o relaciones internas."
      },
      {
        id: 2639,
        moduloId: 207,
        pregunta: "¿Qué tipo de atributo requiere una tabla adicional para representar su relación con la entidad?",
        opciones: [
          "Atributo derivado",
          "Atributo compuesto",
          "Atributo multivaluado",
          "Atributo clave"
        ],
        respuestaCorrecta: 2,
        explicacion: "Los atributos multivaluados requieren una tabla adicional en el modelo relacional. Esta tabla contiene la clave foránea de la entidad principal y una columna para cada valor del atributo multivaluado. Por ejemplo, si 'Teléfono' es multivaluado para 'Cliente', se crearía una tabla 'ClienteTelefono' con idCliente y telefono."
      },
      {
        id: 2640,
        moduloId: 207,
        pregunta: "¿Qué tipo de atributo requiere de otro a partir del cual poder calcularlo?",
        opciones: [
          "Atributo derivado",
          "Atributo compuesto",
          "Atributo multivaluado",
          "Atributo clave"
        ],
        respuestaCorrecta: 0,
        explicacion: "Un atributo derivado es aquel cuyo valor se puede calcular a partir de otros atributos de la misma entidad o de entidades relacionadas. Por ejemplo, la edad se deriva de la fecha de nacimiento, el total de una factura se calcula sumando los subtotales, o la antigüedad se calcula a partir de la fecha de ingreso. Se representa con un óvalo punteado en diagramas ER."
      }
    ]
};

export default moduloExamenBBDD;