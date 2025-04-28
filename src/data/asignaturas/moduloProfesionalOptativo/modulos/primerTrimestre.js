
/**
 * Datos del módulo de Fundamentos de Bases de Datos perteneciente a la asignatura MPO (Módulo Profesional Optativo).
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
export const moduloPrimerTrimestre = {
    id: 701,
    nombre: "Test Primer Trimestre",
    esExamen: false,
    asignaturaId: 7,
    descripcion:
      "Conceptos básicos sobre diseño de bases de datos, modelado entidad-relación, cardinalidades, tipos de datos y transformación a tablas.",
    preguntas: [
      {
        id: 7001,
        moduloId: 701,
        pregunta: "Tenemos una entidad A y una entidad B, y existe una relación entre A y B con cardinalidad N:M. Si la relación tiene un atributo, ¿dónde hay que incluir el atributo de la relación al realizar el paso a tablas?",
        opciones: [
          "Puedo elegir en la tabla A o en la tabla B indistintamente.",
          "En la tabla A.",
          "En la tercera tabla que se genera.",
          "En la tabla B.",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "En una relación N:M entre entidades A y B, al transformar a modelo relacional, se crea una tercera tabla que representa la relación. Los atributos propios de la relación deben incluirse en esta tercera tabla, junto con las claves foráneas de ambas entidades A y B."
      },
      {
        id: 7002,
        moduloId: 701,
        pregunta: "Marca la afirmación correcta:",
        opciones: [
          "El grado de una entidad hace referencia al número de entidades que participan en una relación.",
          "El grado de una relación hace referencia al número de entidades que participan en dicha relación.",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "El grado de una relación indica el número de entidades que participan en ella. Por ejemplo, una relación binaria (grado 2) conecta dos entidades, una relación ternaria (grado 3) conecta tres entidades, y así sucesivamente."
      },
      {
        id: 7003,
        moduloId: 701,
        pregunta: "Queremos almacenar la información del sueldo bruto anual de los empleados. Teniendo en cuenta que el sueldo máximo sería 200000.00 euros, ¿qué tipo de dato asignarías al sueldo?",
        opciones: [
          "FLOAT(8,2)",
          "FLOAT(6,2)",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "Para almacenar un sueldo máximo de 200000.00 euros, necesitamos un tipo de dato que pueda representar 6 dígitos enteros y 2 decimales. FLOAT(8,2) proporciona 8 dígitos en total, con 2 decimales, lo que permite almacenar hasta 999999.99, suficiente para el valor máximo especificado."
      },
      {
        id: 7004,
        moduloId: 701,
        pregunta: "¿Para qué sirve un atributo identificador principal?",
        opciones: [
          "Para identificar cada atributo de forma única.",
          "Para identificar cada entidad de forma única.",
          "Para identificar cada relación de forma única.",
          "Para identificar cada ocurrencia de forma única.",
        ],
        respuestaCorrecta: 3,
        explicacion:
          "Un atributo identificador principal (o clave primaria) sirve para identificar de forma única cada ocurrencia o instancia de una entidad dentro de un conjunto de entidades. Permite distinguir unívocamente cada registro en una tabla de base de datos."
      },
      {
        id: 7005,
        moduloId: 701,
        pregunta: "Si tenemos siete AIC (atributo identificador candidato) y elegimos uno de ellos como AIP (atributo identificador principal) ¿cuántos AIA (atributo identificador alternativo) tendríamos?:",
        opciones: [
          "Siete.",
          "Ocho.",
          "Ninguna es correcta.",
          "Seis.",
        ],
        respuestaCorrecta: 3,
        explicacion:
          "Si tenemos siete atributos identificadores candidatos (AIC) y elegimos uno como atributo identificador principal (AIP), los seis restantes se convierten en atributos identificadores alternativos (AIA). Cada uno podría servir como clave primaria, pero se han dejado como alternativas."
      },
      {
        id: 7006,
        moduloId: 701,
        pregunta: "Queremos almacenar la información del código postal. Teniendo en cuenta que los códigos postales tienen 5 dígitos, ¿qué tipo de dato asignarías al código postal?",
        opciones: [
          "TINYINT",
          "SMALLINT",
          "CHAR(5)",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "Para almacenar códigos postales de 5 dígitos, lo más adecuado es usar CHAR(5). Aunque los códigos postales sean numéricos, no se realizan operaciones aritméticas con ellos y pueden empezar por cero en algunos casos, por lo que deben tratarse como texto de longitud fija."
      },
      {
        id: 7007,
        moduloId: 701,
        pregunta: "Tenemos la entidad A y la entidad B y existe una relación entre A y B con cardinalidad 1:N. Esto quiere decir:",
        opciones: [
          "Que una ocurrencia de la entidad A puede estar relacionada con varias ocurrencias de la entidad B, mientras que una ocurrencia de la entidad B sólo puede estar relacionada con una ocurrencia de la entidad A.",
          "Que una ocurrencia de la entidad A puede estar relacionada con varias ocurrencias de la entidad B, mientras que una ocurrencia de la entidad B puede estar relacionada con varias ocurrencias de la entidad A.",
          "Que una ocurrencia de la entidad A puede estar relacionada con varias ocurrencias de la entidad B, mientras que varias ocurrencias de la entidad B sólo pueden estar relacionadas con una ocurrencia de la entidad A.",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "En una relación con cardinalidad 1:N entre entidades A y B, una ocurrencia de A puede relacionarse con muchas ocurrencias de B (relación 'uno a muchos'), mientras que cada ocurrencia de B solo puede relacionarse con una única ocurrencia de A. Por ejemplo, un departamento (A) puede tener muchos empleados (B), pero cada empleado pertenece a un único departamento."
      },
      {
        id: 7008,
        moduloId: 701,
        pregunta: "En una base de datos relacional, las relaciones entre las tablas se establecen:",
        opciones: [
          "Ninguna respuesta es correcta.",
          "Por medio de las claves primarias y atributos de la relación.",
          "Por medio de las claves primarias y claves foráneas.",
          "Por medio de las claves primarias, claves foráneas y atributos.",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "En una base de datos relacional, las relaciones entre tablas se establecen mediante claves primarias y claves foráneas. La clave primaria identifica unívocamente cada registro de una tabla, mientras que la clave foránea en otra tabla hace referencia a esa clave primaria, estableciendo así la relación entre ambas tablas."
      },
      {
        id: 7009,
        moduloId: 701,
        pregunta: "Marca la respuesta correcta:",
        opciones: [
          "La redundancia puede provocar inconsistencia.",
          "La inconsistencia puede provocar redundancia.",
          "La redundancia provoca inconsistencia.",
          "La inconsistencia provoca redundancia.",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "La redundancia puede provocar inconsistencia en los datos. Cuando la misma información se almacena en múltiples lugares, existe el riesgo de que al actualizar uno de estos lugares, los demás no se actualicen correctamente, lo que lleva a datos inconsistentes. Sin embargo, no siempre la redundancia causa inconsistencia si se gestiona adecuadamente."
      },
      {
        id: 7010,
        moduloId: 701,
        pregunta: "Tenemos la entidad A y la entidad B y existe una relación entre A y B con cardinalidad N:M. Esto quiere decir:",
        opciones: [
          "Que muchas ocurrencias de la entidad A pueden estar relacionadas con varias ocurrencias de la entidad B.",
          "Que una ocurrencia de la entidad A puede estar relacionada con varias ocurrencias de la entidad B.",
          "Que una ocurrencia de la entidad A puede estar relacionada con varias ocurrencias de la entidad B y que una ocurrencia de la entidad B puede estar relacionada con varias ocurrencias de la entidad A.",
          "Que una ocurrencia de la entidad B puede estar relacionada con varias ocurrencias de la entidad A.",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "Una relación con cardinalidad N:M (muchos a muchos) entre entidades A y B significa que una ocurrencia de A puede relacionarse con varias ocurrencias de B, y a su vez, una ocurrencia de B puede relacionarse con varias ocurrencias de A. Por ejemplo, un estudiante puede matricularse en varias asignaturas, y una asignatura puede tener varios estudiantes matriculados."
      },
      {
        id: 7011,
        moduloId: 701,
        pregunta: "En un diagrama de entidad-relación (DER) debe haber:",
        opciones: [
          "Entidades, atributos identificadores principales, relaciones y cardinalidades.",
          "Entidades débiles, atributos, atributos identificadores candidatos, relaciones y cardinalidades.",
          "Entidades, atributos, atributos identificadores principales, relaciones y cardinalidades.",
        ],
        respuestaCorrecta: 2,
        explicacion:
          "Un diagrama de entidad-relación (DER) completo debe incluir entidades (que representan objetos del mundo real), atributos (propiedades de las entidades), atributos identificadores principales (claves primarias), relaciones (asociaciones entre entidades) y cardinalidades (que indican cuántas instancias de una entidad pueden relacionarse con instancias de otra)."
      },
      {
        id: 7012,
        moduloId: 701,
        pregunta: "Queremos almacenar la información del teléfono de un alumno. Teniendo en cuenta que es un teléfono nacional, ¿qué tipo de dato asignarías al teléfono?",
        opciones: [
          "CHAR(9)",
          "VARCHAR(9)",
          "INT",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "Para almacenar un número de teléfono nacional de 9 dígitos, CHAR(9) es la opción más adecuada. Aunque los números de teléfono contienen dígitos, no se realizan operaciones aritméticas con ellos, por lo que deben tratarse como texto. CHAR es preferible a VARCHAR para longitudes fijas como los números de teléfono nacionales."
      },
      {
        id: 7013,
        moduloId: 701,
        pregunta: "Marca la respuesta correcta",
        opciones: [
          "Las relaciones pueden tener atributos.",
          "Los atributos pertenecen exclusivamente a las entidades.",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "Las relaciones pueden tener atributos propios, no solo las entidades. Estos atributos describen características de la relación específica entre las entidades. Por ejemplo, en una relación 'Matriculación' entre 'Estudiante' y 'Asignatura', podríamos tener atributos como 'FechaMatrícula' o 'CalificaciónFinal'."
      },
      {
        id: 7014,
        moduloId: 701,
        pregunta: "¿En una BBDD, con qué formato guardarías la fecha de nacimiento de un alumno?",
        opciones: [
          "aaaa-mm-dd",
          "dd-mm-aaaa",
          "aaaa/mm/dd",
          "dd/mm/aaaa",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "El formato aaaa-mm-dd (año-mes-día) es el estándar ISO 8601 para representar fechas en bases de datos. Este formato permite una correcta ordenación cronológica y es compatible con la mayoría de los sistemas de gestión de bases de datos. Además, evita ambigüedades en la interpretación de la fecha."
      },
      {
        id: 7015,
        moduloId: 701,
        pregunta: "El dominio es:",
        opciones: [
          "El conjunto de valores posibles que puede tener un atributo.",
          "Ninguna es correcta.",
          "El conjunto de ocurrencias posibles que puede tener una relación.",
          "El conjunto de ocurrencias posibles que puede tener una entidad.",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "El dominio de un atributo define el conjunto de todos los valores posibles que puede tomar dicho atributo. Por ejemplo, el dominio para un atributo 'Género' podría ser {'M', 'F', 'Otro'}, o el dominio para 'Edad' podría ser el conjunto de enteros positivos."
      },
      {
        id: 7016,
        moduloId: 701,
        pregunta: "Marca la respuesta correcta:",
        opciones: [
          "Pueden establecerse relaciones entre atributos si uno es AIP (atributo identificador principal).",
          "Pueden establecerse relaciones entre atributos.",
          "Pueden establecerse relaciones entre relaciones.",
          "Las relaciones se establecen entre entidades.",
        ],
        respuestaCorrecta: 3,
        explicacion:
          "En el modelo entidad-relación, las relaciones se establecen entre entidades, no entre atributos ni entre otras relaciones. Los atributos son propiedades de las entidades o de las relaciones, pero no son elementos que se relacionen entre sí directamente en el modelo."
      },
      {
        id: 7017,
        moduloId: 701,
        pregunta: "Marca la respuesta correcta:",
        opciones: [
          "Ninguna es correcta.",
          "Para una ocurrencia de una entidad cada atributo sólo puede tomar un valor.",
          "Para una ocurrencia de una entidad cada ocurrencia sólo puede tomar un valor.",
          "Para una ocurrencia de un atributo cada atributo sólo puede tomar un valor.",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "En el modelo entidad-relación básico, para una ocurrencia o instancia específica de una entidad, cada atributo simple solo puede tomar un único valor. Esto se conoce como la 'primera forma normal' en la teoría de bases de datos relacionales. Los atributos multivaluados requieren un tratamiento especial durante el paso a tablas."
      },
      {
        id: 7018,
        moduloId: 701,
        pregunta: "Tenemos la entidad A y la entidad B y existe una relación entre A y B con cardinalidad 1:1. Esto quiere decir:",
        opciones: [
          "Que una ocurrencia de la entidad A sólo puede estar relacionada con una ocurrencia de la entidad B y viceversa.",
          "Que una ocurrencia de la entidad B sólo puede estar relacionada con una ocurrencia de la entidad A.",
          "Que una ocurrencia de la entidad A sólo puede estar relacionada con una ocurrencia de la entidad B.",
        ],
        respuestaCorrecta: 0,
        explicacion:
          "Una relación con cardinalidad 1:1 (uno a uno) entre entidades A y B significa que una ocurrencia de A puede relacionarse con máximo una ocurrencia de B, y a su vez, una ocurrencia de B puede relacionarse con máximo una ocurrencia de A. Por ejemplo, una relación entre 'Persona' y 'Pasaporte', donde cada persona tiene un único pasaporte y cada pasaporte pertenece a una única persona."
      },
      {
        id: 7019,
        moduloId: 701,
        pregunta: "Teniendo en cuenta que el número máximo de caracteres para una dirección de correo electrónico es de 320 caracteres ¿qué tipo de dato asignarías al correo electrónico de un empleado?",
        opciones: [
          "CHAR(320)",
          "VARCHAR(320)",
          "TEXT",
          "BLOB",
        ],
        respuestaCorrecta: 1,
        explicacion:
          "Para almacenar direcciones de correo electrónico, VARCHAR(320) es la opción más adecuada. VARCHAR permite almacenar cadenas de texto de longitud variable, ocupando solo el espacio necesario para cada valor específico. Como las direcciones de email varían en longitud pero tienen un límite máximo conocido de 320 caracteres, VARCHAR es más eficiente que CHAR (longitud fija) o TEXT (para textos muy largos)."
      },
      {
        id: 7020,
        moduloId: 701,
        pregunta: "Tenemos una entidad A y una entidad B, y existe una relación entre A y B con cardinalidad 1:N. Si la relación tiene un atributo, ¿dónde hay que incluir el atributo de la relación al realizar el paso a tablas?",
        opciones: [
          "En la tabla A.",
          "Puedo elegir en la tabla A o en la tabla B indistintamente.",
          "En la tercera tabla que se genera.",
          "En la tabla B.",
        ],
        respuestaCorrecta: 3,
        explicacion:
          "En una relación 1:N entre entidades A y B, al transformar a modelo relacional, los atributos de la relación deben incluirse en la tabla del lado N (en este caso, la tabla B). Esto es porque la tabla B ya contendrá una clave foránea que hace referencia a la tabla A, y es más eficiente incluir los atributos de la relación junto con esta clave foránea."
      },
    ],
  };

  export default moduloPrimerTrimestre;