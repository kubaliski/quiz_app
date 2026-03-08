const moduloRepaso3NodeExpressDB = {
  id: 1107,
  asignaturaId: 11,
  nombre: "Repaso 3: Node, Express y Bases de Datos",
  titulo: "Backend con Express y Bases de Datos",
  descripcion:
    "Evaluación sobre manejo de peticiones en Express, métodos HTTP, ORMs, arquitectura MVC, bases de datos relacionales (claves, relaciones, índices) y asincronía.",
  esExamen: true,
  preguntas: [
    {
      id: 11141,
      pregunta:
        "¿Qué objeto contiene los datos enviados en una petición POST en Express?",
      opciones: ["req.body", "req.params", "req.headers", "res.locals"],
      respuestaCorrecta: 0,
      explicacion:
        "En Express, req.body contiene los pares clave-valor de los datos enviados en el cuerpo (body) de la petición HTTP, típico de los métodos POST y PUT.",
    },
    {
      id: 11142,
      pregunta:
        "¿Qué método HTTP se utiliza normalmente para obtener datos sin modificarlos?",
      opciones: ["POST", "GET", "PUT", "DELETE"],
      respuestaCorrecta: 1,
      explicacion:
        "El método GET está diseñado exclusivamente para recuperar información del servidor sin producir efectos secundarios ni alterar el estado de los recursos.",
    },
    {
      id: 11143,
      pregunta: "¿Qué permite un ORM en una aplicación backend?",
      opciones: [
        "Crear interfaces gráficas",
        "Gestionar rutas automáticamente",
        "Mapear tablas a objetos",
        "Evitar usar servidor",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Un ORM (Object-Relational Mapping) permite interactuar con una base de datos relacional mapeando sus tablas a objetos del lenguaje de programación (como JavaScript), evitando escribir sentencias SQL en crudo.",
    },
    {
      id: 11144,
      pregunta: "¿Cuál es la función principal de un controlador?",
      opciones: [
        "Definir estilos",
        "Gestionar sesiones",
        "Renderizar CSS",
        "Coordinar petición y respuesta",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "En el patrón MVC, el controlador actúa como intermediario: recibe la petición del usuario, interactúa con el modelo (datos) y determina qué respuesta o vista enviar.",
    },
    {
      id: 11145,
      pregunta:
        "¿Qué ventaja aporta separar lógica de negocio y acceso a datos?",
      opciones: [
        "Mayor mantenibilidad",
        "Menos seguridad",
        "Más duplicación",
        "Mayor latencia",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Separar la lógica de negocio del acceso a datos (por ejemplo, usando servicios y repositorios) hace que el código sea más modular, testeable y fácil de mantener si cambian los requisitos o la base de datos.",
    },
    {
      id: 11146,
      pregunta: "¿Qué hace el método PUT normalmente?",
      opciones: [
        "Leer datos",
        "Actualizar un recurso",
        "Eliminar recurso",
        "Renderizar vista",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "El método PUT se utiliza en APIs RESTful para actualizar o reemplazar por completo un recurso existente en el servidor.",
    },
    {
      id: 11147,
      pregunta: "¿Qué representa una relación 1:N en base de datos?",
      opciones: [
        "Un registro único",
        "Tabla sin claves",
        "Un registro relacionado con varios",
        "Datos duplicados",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Una relación de uno a muchos (1:N) indica que un único registro en la tabla A puede estar asociado con múltiples registros en la tabla B (ej: un autor y sus múltiples libros).",
    },
    {
      id: 11148,
      pregunta: "¿Qué se consigue validando datos en el servidor?",
      opciones: [
        "Mejor diseño visual",
        "Mayor velocidad",
        "Evitar uso de CSS",
        "Mayor seguridad",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "La validación en el servidor es crucial para la seguridad, ya que las validaciones del frontend pueden ser eludidas. Asegura que los datos entrantes sean correctos y seguros antes de procesarlos o guardarlos.",
    },
    {
      id: 11149,
      pregunta: "¿Qué devuelve res.json() en Express?",
      opciones: [
        "Respuesta en formato JSON",
        "Archivo HTML",
        "Vista renderizada",
        "Redirección",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "El método res.json() envía una respuesta HTTP al cliente formateando el parámetro proporcionado como una cadena JSON y configurando las cabeceras correspondientes.",
    },
    {
      id: 11150,
      pregunta: "¿Qué es middleware en Express?",
      opciones: [
        "Base de datos",
        "Función intermedia en el ciclo request-response",
        "Motor de plantillas",
        "Servidor externo",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Un middleware es una función que tiene acceso al objeto de petición (req), al de respuesta (res) y a la siguiente función middleware (next) en el ciclo de solicitud/respuesta.",
    },
    {
      id: 11151,
      pregunta: "¿Qué hace una consulta parametrizada?",
      opciones: [
        "Ordenar resultados",
        "Crear índices",
        "Prevenir inyección SQL",
        "Aumentar RAM",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Las consultas parametrizadas separan la estructura de la consulta de los datos proporcionados por el usuario, siendo la técnica principal para prevenir ataques de inyección SQL.",
    },
    {
      id: 11152,
      pregunta: "¿Qué hace res.redirect()?",
      opciones: [
        "Renderizar HTML",
        "Eliminar recurso",
        "Crear sesión",
        "Redirigir al cliente a otra ruta",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "res.redirect() envía una respuesta de redirección (usualmente código 302) indicando al navegador del cliente que debe realizar una nueva petición a la URL especificada.",
    },
    {
      id: 11153,
      pregunta: "¿Qué significa CRUD?",
      opciones: [
        "Create, Read, Update, Delete",
        "Copy, Render, Use, Deploy",
        "Connect, Route, Update, Delete",
        "Control, Run, Update, Data",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "CRUD es el acrónimo de las cuatro operaciones básicas que se pueden realizar sobre los datos persistentes: Crear, Leer, Actualizar y Borrar.",
    },
    {
      id: 11154,
      pregunta: "¿Qué es una API REST?",
      opciones: [
        "Lenguaje de programación",
        "Interfaz basada en HTTP",
        "Motor de plantillas",
        "Base de datos",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Una API REST (Representational State Transfer) es una interfaz de software que permite a dos sistemas intercambiar datos de forma estandarizada a través de los protocolos web, típicamente HTTP.",
    },
    {
      id: 11155,
      pregunta: "¿Qué mejora la reutilización del código?",
      opciones: [
        "Duplicarlo",
        "Evitar funciones",
        "Modularizarlo",
        "Eliminar comentarios",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "Modularizar el código (dividirlo en partes independientes y pequeñas) facilita que esas mismas partes puedan ser llamadas o importadas desde múltiples lugares sin necesidad de reescribirlas.",
    },
    {
      id: 11156,
      pregunta: "¿Qué hace async/await?",
      opciones: [
        "Compilar código",
        "Crear rutas",
        "Eliminar callbacks",
        "Gestionar asincronía",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "Las palabras clave async y await permiten trabajar con operaciones asíncronas (promesas) de una forma que visualmente se asemeja a la ejecución síncrona, facilitando su lectura y manejo.",
    },
    {
      id: 11157,
      pregunta: "¿Qué es una promesa en JavaScript?",
      opciones: [
        "Objeto para operaciones asíncronas",
        "Tipo de variable",
        "Evento DOM",
        "Motor de BD",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Una Promesa es un objeto que representa la eventual finalización (o falla) de una operación asíncrona y su valor resultante.",
    },
    {
      id: 11158,
      pregunta: "¿Qué hace next() en Express?",
      opciones: [
        "Cierra servidor",
        "Pasa al siguiente middleware",
        "Renderiza vista",
        "Crea base de datos",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "La función next() se utiliza dentro de un middleware para ceder el control al siguiente middleware en la cadena. Si no se llama, la petición queda 'colgada'.",
    },
    {
      id: 11159,
      pregunta: "¿Qué riesgo implica no escapar HTML?",
      opciones: ["Error 404", "Fallo SQL", "Ataque XSS", "Desbordamiento RAM"],
      respuestaCorrecta: 2,
      explicacion:
        "No escapar el contenido HTML introducido por los usuarios permite ataques de Cross-Site Scripting (XSS), donde un atacante puede inyectar y ejecutar scripts maliciosos en el navegador de otros usuarios.",
    },
    {
      id: 11160,
      pregunta: "¿Qué es un endpoint?",
      opciones: [
        "Motor de vistas",
        "Base de datos",
        "Modelo ORM",
        "Punto de acceso a una ruta",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "Un endpoint es una URL específica (y un método HTTP asociado) a través de la cual una API puede ser accedida por una aplicación cliente.",
    },
    {
      id: 11161,
      pregunta: "¿Qué ventaja tiene usar variables de entorno?",
      opciones: [
        "Separar configuración del código",
        "Eliminar rutas",
        "Aumentar CPU",
        "Reducir validación",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Las variables de entorno (.env) permiten almacenar configuraciones sensibles (como contraseñas, puertos o URLs de bases de datos) fuera del código fuente, mejorando la seguridad y portabilidad de la aplicación.",
    },
    {
      id: 11162,
      pregunta: "¿Qué hace un layout en plantillas?",
      opciones: [
        "Define consultas",
        "Reutiliza estructura común",
        "Crea índices",
        "Ejecuta SQL",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Un layout (o plantilla base) en motores de vistas (como EJS o Pug) permite definir una estructura HTML común (cabecera, menú, pie) que se reutiliza en múltiples páginas, inyectando solo el contenido específico de cada vista.",
    },
    {
      id: 11163,
      pregunta: "¿Qué hace map() en JavaScript?",
      opciones: [
        "Eliminar elementos",
        "Ordenar array",
        "Transformar elementos de un array",
        "Detener ejecución",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "El método map() crea un nuevo array poblado con los resultados de llamar a una función proporcionada sobre cada elemento del array original.",
    },
    {
      id: 11164,
      pregunta: "¿Qué hace DELETE en HTTP?",
      opciones: [
        "Leer recurso",
        "Actualizar recurso",
        "Crear recurso",
        "Eliminar recurso",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "El método DELETE solicita que el servidor de origen elimine el recurso identificado por la URL solicitada.",
    },
    {
      id: 11165,
      pregunta: "¿Qué es una clave primaria?",
      opciones: [
        "Identificador único",
        "Campo opcional",
        "Índice duplicado",
        "Clave foránea",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "En bases de datos relacionales, una clave primaria (Primary Key) es una columna (o conjunto de ellas) que identifica de forma exclusiva a cada fila en una tabla.",
    },
    {
      id: 11166,
      pregunta: "¿Qué es una clave foránea?",
      opciones: [
        "Clave duplicada",
        "Campo que referencia otra tabla",
        "Variable temporal",
        "Motor SQL",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Una clave foránea (Foreign Key) es un campo en una tabla que se utiliza para establecer y aplicar un vínculo o relación entre los datos de esa tabla y los de otra, apuntando a la clave primaria de la segunda.",
    },
    {
      id: 11167,
      pregunta: "¿Qué mejora usar try/catch?",
      opciones: [
        "Aumentar velocidad",
        "Reducir código",
        "Controlar errores",
        "Eliminar validación",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "La declaración try...catch marca un bloque de instrucciones a intentar y especifica una respuesta en caso de que se produzca una excepción, permitiendo manejar y controlar los errores de ejecución sin que la aplicación se detenga abruptamente.",
    },
    {
      id: 11168,
      pregunta: "¿Qué hace res.status(404)?",
      opciones: [
        "Cierra servidor",
        "Actualiza recurso",
        "Renderiza layout",
        "Establece código HTTP 404",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "El método res.status(code) establece el código de estado HTTP de la respuesta. El código 404 se utiliza convencionalmente para indicar que el recurso solicitado no fue encontrado.",
    },
    {
      id: 11169,
      pregunta: "¿Qué hace un índice en base de datos?",
      opciones: [
        "Acelerar búsquedas",
        "Eliminar tablas",
        "Cifrar datos",
        "Crear vistas",
      ],
      respuestaCorrecta: 0,
      explicacion:
        "Un índice es una estructura de datos asociada a una tabla que mejora drásticamente la velocidad de las operaciones de recuperación de datos (búsquedas) a costa de un mayor espacio de almacenamiento.",
    },
    {
      id: 11170,
      pregunta: "¿Qué es escalabilidad?",
      opciones: [
        "Aumentar complejidad",
        "Capacidad de crecer en carga",
        "Reducir memoria",
        "Eliminar módulos",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "En desarrollo de software, la escalabilidad es la propiedad de un sistema que indica su capacidad de manejar una cantidad creciente de trabajo (como más usuarios o peticiones) añadiendo recursos o mejorando su arquitectura.",
    },
  ],
};

export default moduloRepaso3NodeExpressDB;
