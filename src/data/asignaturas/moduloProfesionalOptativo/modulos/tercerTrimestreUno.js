/**
 * Datos del módulo práctico de SQL perteneciente a la asignatura MPO.
 * Incluye información del módulo y sus preguntas asociadas para el quiz.
 *
 * @type {Object}
 * @property {number} id - Identificador único del módulo
 * @property {string} nombre - Nombre del módulo
 * @property {boolean} esExamen - Indica si el módulo es un examen (true) o no (false)
 * @property {number} asignaturaId - ID de la asignatura a la que pertenece
 * @property {Array<Object>} preguntas - Lista de preguntas para el quiz de este módulo
 */
export const moduloTercerTrimestreUno = {
    id: 705,
    nombre: "Test Tercer Trimestre (DEPRECADO)",
    esExamen: false,
    asignaturaId: 7,
    descripcion:
      `# Enunciado del ejercicio: Base de datos de Películas

  Este módulo evalúa tus conocimientos sobre consultas SQL utilizando una base de datos de películas. La base de datos contiene información sobre películas, géneros, personas (actores/actrices y directores/as) y las relaciones entre estas entidades.

  La estructura de la base de datos incluye las siguientes tablas:
  - películas: Contiene información básica de las películas (título, duración, etc.)
  - personas: Almacena datos de personas (nombre, apellidos, nacionalidad)
  - géneros: Contiene los diferentes géneros cinematográficos
  - peliculas_personas: Tabla relacional entre películas y personas, incluyendo el rol (Actor, Actriz, Director, Directora)
  - peliculas_generos: Tabla relacional entre películas y géneros

  Para cada pregunta, selecciona la consulta SQL correcta que resuelve el problema planteado.`,
    preguntas: [
      {
        id: 7501,
        moduloId: 705,
        pregunta: "Listado de actores y actrices (Recuerda que tenemos rol Actor y Actriz)",
        recurso: {
          tipo: "imagen",
          contenido: "/images/mpo/tercerTrimestre.png",
          altText: "Diagrama de la base de datos de películas"
        },
        opciones: [
          "SELECT nombre, apellidos FROM personas JOIN peliculas_personas ON personas.cod_persona=peliculas_personas.cod_persona WHERE rol LIKE 'Act%' GROUP BY rol ORDER BY nombre, apellidos;",
          "SELECT nombre, apellidos FROM personas JOIN peliculas_personas ON personas.cod_persona=peliculas_personas.cod_persona WHERE rol LIKE 'Act%' ORDER BY nombre, apellidos;",
          "SELECT DISTINCT nombre, apellidos FROM personas JOIN peliculas_personas ON personas.cod_persona=peliculas_personas.cod_persona WHERE rol LIKE 'Act%' ORDER BY nombre, apellidos;",
          "Ninguna es correcta."
        ],
        respuestaCorrecta: 2,
        explicacion:
          "La opción correcta usa SELECT DISTINCT para evitar mostrar personas duplicadas cuando han participado en varias películas con el mismo rol. El JOIN entre personas y peliculas_personas es necesario para relacionar la información. La condición WHERE rol LIKE 'Act%' selecciona tanto Actor como Actriz. Finalmente, se ordena por nombre y apellidos para una presentación organizada. Las otras opciones no evitan duplicados o utilizan GROUP BY incorrectamente."
      },
      {
        id: 7502,
        moduloId: 705,
        pregunta: "Listado de directores con nacionalidad española",
        recurso: {
          tipo: "imagen",
          contenido: "/images/mpo/tercerTrimestre.png",
          altText: "Diagrama de la base de datos de películas"
        },
        opciones: [
          "SELECT DISTINCT nombre, apellidos FROM personas JOIN peliculas_personas ON personas.cod_persona=peliculas_personas.cod_persona WHERE rol='Director' ORDER BY nombre, apellidos;",
          "SELECT nombre, apellidos FROM personas JOIN peliculas_personas ON personas.cod_persona=peliculas_personas.cod_persona WHERE rol='Director' AND nacionalidad='Española' ORDER BY nombre, apellidos;",
          "SELECT nombre, apellidos FROM personas JOIN peliculas_personas ON personas.cod_persona=peliculas_personas.cod_persona WHERE rol='Director' ORDER BY nombre, apellidos;",
          "Ninguna es correcta"
        ],
        respuestaCorrecta: 1,
        explicacion:
          "La opción correcta realiza un JOIN entre las tablas personas y peliculas_personas, filtrando por rol='Director' y nacionalidad='Española', que son los criterios requeridos en la pregunta. Además, ordena los resultados por nombre y apellidos. La opción A no filtra por nacionalidad española, solo por rol Director. La opción C no filtra por nacionalidad ni evita duplicados."
      },
      {
        id: 7503,
        moduloId: 705,
        pregunta: "Listado de la/s pelicula/s con mayor duración",
        recurso: {
          tipo: "imagen",
          contenido: "/images/mpo/tercerTrimestre.png",
          altText: "Diagrama de la base de datos de películas"
        },
        opciones: [
          "SELECT titulo FROM peliculas WHERE duracion=MAX(duracion) ORDER BY titulo;",
          "SELECT titulo FROM peliculas ORDER BY titulo DESC LIMIT 1;",
          "Ninguna es correcta.",
          "SELECT titulo FROM peliculas WHERE duracion=(SELECT MAX(duracion) FROM peliculas) ORDER BY titulo;"
        ],
        respuestaCorrecta: 3,
        explicacion:
          "La opción correcta utiliza una subconsulta para encontrar el valor máximo de duración y luego selecciona todas las películas que tienen exactamente esa duración. Esto es importante porque podría haber varias películas con la misma duración máxima. Además, ordena los resultados por título. La opción A es incorrecta porque no se puede usar MAX() en la cláusula WHERE. La opción B ordena por título, no por duración, y devolvería solo la última película alfabéticamente."
      },
      {
        id: 7504,
        moduloId: 705,
        pregunta: "Listado de películas con sus géneros",
        recurso: {
          tipo: "imagen",
          contenido: "/images/mpo/tercerTrimestre.png",
          altText: "Diagrama de la base de datos de películas"
        },
        opciones: [
          "SELECT titulo, genero FROM peliculas JOIN generos JOIN peliculas_generos ON peliculas.cod_pelicula=peliculas_generos.cod_pelicula AND generos.cod_genero=peliculas_generos.cod_genero ORDER BY titulo, genero;",
          "SELECT titulo, genero FROM peliculas JOIN generos JOIN peliculas_generos ON peliculas.cod_pelicula=peliculas_generos.cod_pelicula AND generos.cod_genero=peliculas_generos.cod_genero ORDER BY titulo, genero;",
          "Ninguna es correcta.",
          "SELECT titulo, genero FROM peliculas JOIN peliculas_generos ON peliculas.cod_pelicula=peliculas_generos.cod_pelicula ORDER BY titulo, genero;"
        ],
        respuestaCorrecta: 0,
        explicacion:
          "La opción correcta realiza los JOINs necesarios entre las tres tablas involucradas: películas, géneros y la tabla relacional peliculas_generos. Es necesario unir las tres tablas para obtener tanto el título de la película como el nombre del género. Los criterios de JOIN relacionan correctamente los códigos de película y género entre las tablas. La respuesta D es incorrecta porque falta unir con la tabla géneros para obtener el nombre del género."
      },
      {
        id: 7505,
        moduloId: 705,
        pregunta: "Listado de películas cuya duración sea inferior a 90 minutos (la duración está en formato TIME)",
        recurso: {
          tipo: "imagen",
          contenido: "/images/mpo/tercerTrimestre.png",
          altText: "Diagrama de la base de datos de películas"
        },
        opciones: [
          "SELECT titulo FROM peliculas WHERE duracion<='01:30:00' ORDER BY titulo;",
          "SELECT titulo FROM peliculas WHERE duracion<'01:30:00' ORDER BY titulo;",
          "SELECT titulo FROM peliculas WHERE duracion>'01:30:00' ORDER BY titulo;",
          "Ninguna es correcta."
        ],
        respuestaCorrecta: 1,
        explicacion:
          "La opción correcta utiliza el operador < (menor que) para seleccionar las películas con duración estrictamente inferior a 1 hora y 30 minutos (90 minutos). El formato TIME utilizado '01:30:00' representa 1 hora y 30 minutos. La opción A es incorrecta porque incluiría películas de exactamente 90 minutos. La opción C haría lo contrario de lo que se pide, seleccionando películas con duración superior a 90 minutos."
      },
      {
        id: 7506,
        moduloId: 705,
        pregunta: "Listado de películas cuyo título contenga la palabra guerra",
        recurso: {
          tipo: "imagen",
          contenido: "/images/mpo/tercerTrimestre.png",
          altText: "Diagrama de la base de datos de películas"
        },
        opciones: [
          "SELECT titulo FROM peliculas WHERE titulo LIKE='%guerra%' ORDER BY titulo;",
          "SELECT titulo FROM peliculas WHERE titulo LIKE '%guerra%' ORDER BY titulo;",
          "SELECT titulo FROM peliculas WHERE titulo = 'guerra' ORDER BY titulo;",
          "Ninguna es correcta."
        ],
        respuestaCorrecta: 1,
        explicacion:
          "La opción correcta utiliza el operador LIKE con el patrón '%guerra%', que busca la palabra 'guerra' en cualquier posición dentro del título. Los caracteres % son comodines que representan cualquier secuencia de caracteres (incluso vacía). La opción A es incorrecta por la sintaxis, ya que LIKE no lleva el signo =. La opción C solo buscaría películas cuyo título sea exactamente 'guerra', no aquellas que contengan esta palabra."
      },
      {
        id: 7507,
        moduloId: 705,
        pregunta: "Listado de películas dirigidas por más de una persona (Recuerda que tenemos rol Director y Directora)",
        recurso: {
          tipo: "imagen",
          contenido: "/images/mpo/tercerTrimestre.png",
          altText: "Diagrama de la base de datos de películas"
        },
        opciones: [
          "SELECT titulo FROM peliculas JOIN peliculas_personas ON peliculas.cod_pelicula=peliculas_personas.cod_pelicula AND rol LIKE 'Direct%' WHERE COUNT(rol)>1;",
          "SELECT titulo FROM peliculas JOIN peliculas_personas ON peliculas.cod_pelicula=peliculas_personas.cod_pelicula GROUP BY peliculas_personas.rol HAVING COUNT(rol)>1;",
          "Ninguna es correcta.",
          "SELECT titulo FROM peliculas JOIN peliculas_personas ON peliculas.cod_pelicula=peliculas_personas.cod_pelicula AND rol LIKE 'Direct%' GROUP BY peliculas.cod_pelicula HAVING COUNT(rol)>1;"
        ],
        respuestaCorrecta: 3,
        explicacion:
          "La opción correcta realiza un JOIN entre películas y peliculas_personas, filtra los roles que empiezan con 'Direct' (para incluir tanto Director como Directora), agrupa por código de película y usa HAVING para seleccionar solo las películas que tienen más de un director/a. La opción A es incorrecta porque no se puede usar COUNT() en la cláusula WHERE. La opción B agruparía por rol, no por película, lo cual no responde a la pregunta planteada."
      },
      {
        id: 7508,
        moduloId: 705,
        pregunta: "Listado de películas y a cuántos géneros pertenece",
        recurso: {
          tipo: "imagen",
          contenido: "/images/mpo/tercerTrimestre.png",
          altText: "Diagrama de la base de datos de películas"
        },
        opciones: [
          "Ninguna es correcta.",
          "SELECT titulo, COUNT(cod_genero) num_generos FROM peliculas JOIN peliculas_generos ON peliculas.cod_pelicula=peliculas_generos.cod_pelicula GROUP BY(titulo) ORDER BY titulo;",
          "SELECT titulo, COUNT(cod_genero) num_generos FROM peliculas JOIN peliculas_generos ON peliculas.cod_pelicula=peliculas_generos.cod_pelicula GROUP BY(peliculas.cod_pelicula) ORDER BY titulo;",
          "SELECT titulo, COUNT(cod_genero) num_generos FROM peliculas JOIN peliculas_generos ON peliculas.cod_pelicula=peliculas_generos.cod_pelicula GROUP BY(cod_genero) ORDER BY titulo;"
        ],
        respuestaCorrecta: 2,
        explicacion:
          "La opción correcta realiza un JOIN entre películas y peliculas_generos, cuenta el número de géneros para cada película mediante COUNT(cod_genero), agrupa por código de película y ordena los resultados por título. Es importante agrupar por cod_pelicula y no por título, porque podría haber películas con el mismo título pero diferentes códigos. La opción D es incorrecta porque agruparía por género, no por película, lo que no respondería a la pregunta."
      },
      {
        id: 7509,
        moduloId: 705,
        pregunta: "Listado de películas y quiénes las dirigen (Recuerda que tenemos rol Director y Directora)",
        recurso: {
          tipo: "imagen",
          contenido: "/images/mpo/tercerTrimestre.png",
          altText: "Diagrama de la base de datos de películas"
        },
        opciones: [
          "SELECT titulo, nombre, apellidos FROM peliculas JOIN personas JOIN peliculas_personas ON peliculas.cod_pelicula=peliculas_personas.cod_pelicula AND personas.cod_persona=peliculas_personas.cod_persona AND rol='Director' OR rol='Directora' ORDER BY titulo, nombre, apellidos;",
          "SELECT titulo, nombre, apellidos FROM peliculas JOIN personas JOIN peliculas_personas ON peliculas.cod_pelicula=peliculas_personas.cod_pelicula AND personas.cod_persona=peliculas_personas.cod_persona AND rol LIKE 'Director%' ORDER BY titulo, nombre, apellidos;",
          "Ninguna es correcta.",
          "SELECT titulo, nombre, apellidos FROM peliculas JOIN personas JOIN peliculas_personas ON peliculas.cod_pelicula=peliculas_personas.cod_pelicula AND personas.cod_persona=peliculas_personas.cod_persona AND rol LIKE 'Dir' ORDER BY titulo, nombre, apellidos;"
        ],
        respuestaCorrecta: 1,
        explicacion:
          "La opción correcta realiza un JOIN entre las tres tablas necesarias (películas, personas y peliculas_personas), filtra por roles que empiecen con 'Director' (para incluir tanto Director como Directora) usando LIKE 'Director%', y ordena los resultados por título, nombre y apellidos. La opción A es incorrecta porque el uso de OR en la condición sin paréntesis causaría problemas, ya que se evaluaría (rol='Director') OR (rol='Directora') sin considerar las condiciones anteriores del JOIN."
      },
      {
        id: 7510,
        moduloId: 705,
        pregunta: "Listado de personas con nacionalidad estadounidense",
        recurso: {
          tipo: "imagen",
          contenido: "/images/mpo/tercerTrimestre.png",
          altText: "Diagrama de la base de datos de películas"
        },
        opciones: [
          "SELECT nombre, apellidos FROM personas WHERE nacionalidad='Estadounidense' ORDER BY nombre, apellidos;",
          "Ninguna es correcta.",
          "SELECT nombre, apellidos FROM personas WHERE nacionalidad='Estadounidense' GROUP BY nombre, apellidos;",
          "SELECT nombre, apellidos FROM personas HAVING nacionalidad='Estadounidense' GROUP BY nombre, apellidos;"
        ],
        respuestaCorrecta: 0,
        explicacion:
          "La opción correcta utiliza una simple consulta SELECT con la cláusula WHERE para filtrar las personas con nacionalidad 'Estadounidense' y ordena los resultados por nombre y apellidos. No es necesario usar JOIN ni GROUP BY para esta consulta, ya que toda la información está en la tabla personas. La opción C es innecesariamente compleja al usar GROUP BY sin ninguna función de agregación. La opción D es incorrecta porque HAVING se utiliza con funciones de agregación, no con condiciones simples."
      }
    ],
  };

  export default moduloTercerTrimestreUno;