const moduloRepaso3JavaScriptReact = {
  id: 1208,
  asignaturaId: 12,
  nombre: "Repaso 3: DOM, Hooks y SPA",
  titulo: "DOM, Asincronía y React Avanzado",
  descripcion:
    "Evaluación sobre enrutamiento SPA, hooks de React (useState, useEffect, useContext, useMemo), asincronía con fetch, y manipulación de eventos en el DOM.",
  esExamen: true,
  preguntas: [
    {
      id: 12126,
      pregunta:
        "¿Qué instrucción permite navegar dentro de una SPA sin recargar la página?",
      opciones: ["window.location", "fetch()", "Link", "document.reload()"],
      respuestaCorrecta: 2,
      explicacion:
        "En una Single Page Application (SPA) con React Router, se utiliza el componente <Link> para manejar la navegación interna de forma eficiente sin forzar la recarga completa que provocaría window.location.",
    },
    {
      id: 12127,
      pregunta:
        "¿Qué hook permite ejecutar código tras el renderizado de un componente?",
      opciones: ["useMemo", "useEffect", "useState", "useRef"],
      respuestaCorrecta: 1,
      explicacion:
        "El hook useEffect permite realizar efectos secundarios en componentes funcionales, y por defecto se ejecuta después de cada renderizado del componente.",
    },
    {
      id: 12128,
      pregunta: "¿Qué método selecciona un elemento por su id en JavaScript?",
      opciones: [
        "querySelectorAll()",
        "getElementById()",
        "selectNode()",
        "getElementsByTag()",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "getElementById() es el método nativo del DOM utilizado para obtener la referencia a un elemento HTML a través de su atributo de identificación único (id).",
    },
    {
      id: 12129,
      pregunta: "¿Qué método permite añadir un listener a un evento?",
      opciones: ["attach()", "bindEvent()", "listen()", "addEventListener()"],
      respuestaCorrecta: 3,
      explicacion:
        "addEventListener() registra un evento a un objeto específico (como un elemento HTML, el documento o la ventana), indicando qué función ejecutar cuando ocurra dicho evento.",
    },
    {
      id: 12130,
      pregunta: "¿Qué hook permite almacenar estado dentro de un componente?",
      opciones: ["useState", "useContext", "useEffect", "useRoute"],
      respuestaCorrecta: 0,
      explicacion:
        "El hook useState permite a los componentes funcionales de React tener y gestionar su propio estado local reactivo.",
    },
    {
      id: 12131,
      pregunta: "¿Qué API permite hacer peticiones HTTP desde el navegador?",
      opciones: ["httpCall()", "fetch()", "ajaxSend()", "requestAPI()"],
      respuestaCorrecta: 1,
      explicacion:
        "Fetch es la API web moderna e integrada nativamente en los navegadores que proporciona una interfaz global para realizar solicitudes a recursos a través de la red (HTTP).",
    },
    {
      id: 12132,
      pregunta: "¿Qué devuelve fetch antes de convertir la respuesta en JSON?",
      opciones: ["String", "Response", "Array", "Boolean"],
      respuestaCorrecta: 1,
      explicacion:
        "La llamada a fetch() devuelve una Promesa que, al resolverse, entrega un objeto Response. Este objeto representa la respuesta HTTP completa.",
    },
    {
      id: 12133,
      pregunta:
        "¿Qué método transforma cada elemento de un array en otro nuevo?",
      opciones: ["filter()", "reduce()", "map()", "join()"],
      respuestaCorrecta: 2,
      explicacion:
        "El método map() itera sobre cada elemento de un array y devuelve un nuevo array con los resultados de aplicar una función a cada elemento.",
    },
    {
      id: 12134,
      pregunta: "¿Dónde se almacenan datos persistentes en el navegador?",
      opciones: ["Hooks", "Props", "Session RAM", "localStorage"],
      respuestaCorrecta: 3,
      explicacion:
        "localStorage permite guardar pares clave/valor en el navegador web con persistencia total, lo que significa que los datos no expiran al cerrar la pestaña o el navegador.",
    },
    {
      id: 12135,
      pregunta: "¿Qué significa SPA?",
      opciones: [
        "Servidor Programado Asíncrono",
        "Aplicación de Página Única",
        "Sistema Proxy Activo",
        "Servicio Persistente Autónomo",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "SPA son las siglas de Single Page Application (Aplicación de Página Única), un tipo de web que interactúa con el usuario reescribiendo la página actual en lugar de cargar páginas enteras desde el servidor.",
    },
    {
      id: 12136,
      pregunta: "¿Qué operador se usa para renderizado condicional en JSX?",
      opciones: ["||", "??", "&&", "::"],
      respuestaCorrecta: 2,
      explicacion:
        "El operador lógico AND (&&) es el estándar en React para mostrar u ocultar un elemento JSX basado en una condición booleana simple.",
    },
    {
      id: 12137,
      pregunta:
        "¿Qué propiedad permite modificar el texto visible de un elemento?",
      opciones: ["value", "innerText", "nodeData", "setText()"],
      respuestaCorrecta: 1,
      explicacion:
        "La propiedad innerText de la interfaz HTMLElement representa el contenido de texto renderizado de un nodo y sus descendientes.",
    },
    {
      id: 12138,
      pregunta: "¿Qué hace preventDefault() en un evento?",
      opciones: [
        "Detiene JavaScript",
        "Evita la acción por defecto",
        "Cierra ventana",
        "Borra el DOM",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "El método preventDefault() le dice al navegador que no ejecute el comportamiento predeterminado asociado a ese evento particular (ej: evitar que un formulario recargue la página).",
    },
    {
      id: 12139,
      pregunta:
        "¿Qué hook permite compartir datos globales sin pasar props manualmente?",
      opciones: ["useMemo", "useContext", "useStore", "useEvent"],
      respuestaCorrecta: 1,
      explicacion:
        "El hook useContext consume valores de un Context de React, lo que es ideal para evitar el 'prop drilling' al pasar estados globales como el usuario logueado o el tema visual.",
    },
    {
      id: 12140,
      pregunta: "¿Qué método crea un elemento HTML dinámicamente?",
      opciones: [
        "newElement()",
        "appendHTML()",
        "createElement()",
        "insertNode()",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "document.createElement(tagName) es el método que instancia un nuevo elemento HTML que posteriormente podrá ser añadido al DOM.",
    },
    {
      id: 12141,
      pregunta: "¿Qué evento detecta que el DOM ha terminado de cargarse?",
      opciones: ["onload", "init", "DOMContentLoaded", "readyEvent"],
      respuestaCorrecta: 2,
      explicacion:
        "El evento DOMContentLoaded se dispara cuando el documento HTML inicial ha sido completamente cargado y parseado, sin tener que esperar a hojas de estilo o imágenes.",
    },
    {
      id: 12142,
      pregunta: "¿Qué hace JSON.parse()?",
      opciones: [
        "Convierte objeto a texto",
        "Convierte texto JSON en objeto",
        "Elimina JSON",
        "Serializa datos",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "JSON.parse() toma un string formateado en JSON y lo transforma en un objeto o valor nativo de JavaScript listo para ser manipulado.",
    },
    {
      id: 12143,
      pregunta: "¿Qué técnica evita modificar directamente el estado?",
      opciones: [
        "Mutar referencia",
        "Copiar estructuras",
        "Reasignar DOM",
        "Reiniciar componente",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "En React el estado debe ser inmutable. Para actualizar arrays u objetos se deben copiar las estructuras (por ejemplo, usando el spread operator ...) en lugar de modificarlas (mutarlas) directamente.",
    },
    {
      id: 12144,
      pregunta: "¿Qué representa 123 en una URL como /usuario/123?",
      opciones: ["Constante", "Hook", "Parámetro dinámico", "CSS value"],
      respuestaCorrecta: 2,
      explicacion:
        "En el enrutamiento (como React Router), ese fragmento de la ruta representa un parámetro de URL (dinámico), que en la definición de la ruta suele declararse como /usuario/:id.",
    },
    {
      id: 12145,
      pregunta: "¿Qué componente define qué vista se muestra para cada URL?",
      opciones: ["Routes", "Navigate", "Switch", "Context"],
      respuestaCorrecta: 0,
      explicacion:
        "En versiones modernas de React Router, el componente <Routes> encapsula las distintas <Route> y decide cuál componente renderizar emparejando la URL actual con las definiciones.",
    },
    {
      id: 12146,
      pregunta: "¿Qué hace async/await?",
      opciones: [
        "Ejecuta código síncrono",
        "Simplifica manejo de promesas",
        "Elimina funciones",
        "Reduce memoria",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "La sintaxis de async/await es 'azúcar sintáctico' en JavaScript que permite escribir y manejar código basado en promesas de forma mucho más sencilla, simulando un flujo secuencial o síncrono.",
    },
    {
      id: 12147,
      pregunta:
        "¿Qué método elimina valores que no cumplen una condición en un array?",
      opciones: ["map()", "filter()", "reduce()", "join()"],
      respuestaCorrecta: 1,
      explicacion:
        "El método filter() de los arrays genera un nuevo array conteniendo únicamente los elementos que pasaron (devolvieron true) la validación impuesta por la función proporcionada.",
    },
    {
      id: 12148,
      pregunta: "¿Qué operador compara valor y tipo estrictamente?",
      opciones: ["==", "===", "!=", "<>"],
      respuestaCorrecta: 1,
      explicacion:
        "El operador de igualdad estricta (===) verifica que los dos operandos sean iguales, asegurándose de que posean el mismo valor numérico/cadena y el mismo tipo de dato, sin realizar conversiones forzosas.",
    },
    {
      id: 12149,
      pregunta: "¿Qué hace classList.add()?",
      opciones: [
        "Elimina nodo",
        "Añade clase CSS",
        "Guarda datos",
        "Crea evento",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Es un método asociado a la propiedad classList del DOM que permite inyectar fácilmente una nueva clase CSS a la lista de clases que ya posee un elemento HTML.",
    },
    {
      id: 12150,
      pregunta:
        "¿Qué hook se usa para memorizar cálculos derivados del estado?",
      opciones: ["useEffect", "useMemo", "useState", "useRef"],
      respuestaCorrecta: 1,
      explicacion:
        "useMemo almacena en memoria caché el resultado de un cálculo o función. Solo vuelve a computar el valor cuando una de sus dependencias ha cambiado, optimizando el rendimiento.",
    },
    {
      id: 12151,
      pregunta: "¿Qué método añade un nodo hijo al DOM?",
      opciones: ["appendChild()", "pushNode()", "insertHTML()", "addNode()"],
      respuestaCorrecta: 0,
      explicacion:
        "El método appendChild() agrega un nodo al final de la lista de nodos hijos de un elemento padre especificado en el árbol del DOM.",
    },
    {
      id: 12152,
      pregunta: "¿Qué estructura permite búsquedas rápidas clave valor?",
      opciones: ["Array", "Map", "Stack", "List"],
      respuestaCorrecta: 1,
      explicacion:
        "El objeto Map de JavaScript almacena colecciones de pares clave-valor recordando el orden de inserción y optimizando el acceso y búsquedas basándose en la clave.",
    },
    {
      id: 12153,
      pregunta: "¿Qué hace response.json()?",
      opciones: [
        "Devuelve texto",
        "Devuelve promesa con datos convertidos",
        "Guarda en localStorage",
        "Elimina respuesta",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "Es un método de la interfaz Response en Fetch API. Toma un flujo de datos (stream) y devuelve una promesa que se resuelve con el resultado de parsear el cuerpo del texto como JSON.",
    },
    {
      id: 12154,
      pregunta: "¿Qué paradigma caracteriza JavaScript en navegador?",
      opciones: [
        "Procedural puro",
        "Batch",
        "Orientado a eventos",
        "Solo orientado a objetos",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "La ejecución de JavaScript en el navegador está principalmente dirigida por el usuario (clicks, teclados) y eventos del sistema (red, temporizadores), adoptando una arquitectura fuertemente orientada a eventos.",
    },
    {
      id: 12155,
      pregunta: "¿Qué mejora dividir el código en módulos?",
      opciones: [
        "Aumenta renders",
        "Reduce memoria automáticamente",
        "Elimina asincronía",
        "Mejora mantenibilidad",
      ],
      respuestaCorrecta: 3,
      explicacion:
        "La modularización del código fuente fomenta el principio de responsabilidad única, aislando funcionalidades lo que hace que la base de código sea más limpia, reutilizable y mucho más fácil de mantener a largo plazo.",
    },
  ],
};

export default moduloRepaso3JavaScriptReact;
