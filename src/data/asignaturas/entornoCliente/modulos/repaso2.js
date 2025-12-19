const moduloRepaso2JavaScriptReact = {
  id: 1207,
  asignaturaId: 12,
  nombre: "Repaso 2: JavaScript y React",
  titulo: "JavaScript y React",
  descripcion: "JavaScript vanilla, eventos DOM, React con Vite, useState, useEffect, JSX, componentes controlados y servicios API.",
  esExamen: true,
  preguntas: [
    {
      id: 12096,
      pregunta: "¿Qué significa JavaScript vanilla?",
      opciones: [
        "JavaScript sin navegador",
        "JavaScript puro sin frameworks",
        "JavaScript ejecutado en Node.js",
        "JavaScript con React"
      ],
      respuestaCorrecta: 1,
      explicacion: "JavaScript vanilla se refiere a JavaScript puro, sin usar ningún framework o librería adicional como React, Angular o Vue."
    },
    {
      id: 12097,
      pregunta: "¿Para qué se usa el evento DOMContentLoaded?",
      opciones: [
        "Para esperar a que carguen todas las imágenes",
        "Para ejecutar código cuando el DOM está listo",
        "Para inicializar React",
        "Para cargar hojas CSS"
      ],
      respuestaCorrecta: 1,
      explicacion: "DOMContentLoaded se dispara cuando el HTML ha sido completamente parseado y el DOM está listo, sin esperar a imágenes u otros recursos externos."
    },
    {
      id: 12098,
      pregunta: "¿Qué archivo arranca realmente una aplicación React con Vite?",
      opciones: ["index.html", "App.jsx", "main.jsx", "package.json"],
      respuestaCorrecta: 2,
      explicacion: "main.jsx es el punto de entrada de la aplicación React con Vite, donde se monta el componente raíz en el DOM."
    },
    {
      id: 12099,
      pregunta: "¿Cuál es la función principal de apiService.js?",
      opciones: [
        "Renderizar el HTML",
        "Gestionar estilos",
        "Acceder a datos y APIs",
        "Controlar eventos del DOM"
      ],
      respuestaCorrecta: 2,
      explicacion: "apiService.js centraliza las llamadas a APIs externas, separando la lógica de acceso a datos de los componentes."
    },
    {
      id: 12100,
      pregunta: "¿Qué hace useState en React?",
      opciones: [
        "Crea una variable global",
        "Maneja estilos dinámicos",
        "Permite crear estado reactivo",
        "Ejecuta código al cargar el componente"
      ],
      respuestaCorrecta: 2,
      explicacion: "useState es un hook que permite crear estado reactivo en componentes funcionales. Cuando el estado cambia, el componente se re-renderiza."
    },
    {
      id: 12101,
      pregunta: "¿Qué ocurre cuando cambia el estado en React?",
      opciones: [
        "Se recarga la página",
        "Se vuelve a ejecutar el componente",
        "Se reinicia la aplicación",
        "Se destruye el DOM"
      ],
      respuestaCorrecta: 1,
      explicacion: "Cuando el estado cambia, React re-ejecuta el componente (re-render) para reflejar los nuevos valores en la interfaz."
    },
    {
      id: 12102,
      pregunta: "¿Para qué sirve useEffect con un array de dependencias vacío?",
      opciones: [
        "Para ejecutar código en cada render",
        "Para limpiar memoria",
        "Para ejecutar código solo al montar el componente",
        "Para manejar eventos"
      ],
      respuestaCorrecta: 2,
      explicacion: "useEffect con [] como dependencias se ejecuta solo una vez al montar el componente, ideal para cargar datos iniciales."
    },
    {
      id: 12103,
      pregunta: "¿Qué es JSX?",
      opciones: [
        "HTML real",
        "Una plantilla CSS",
        "JavaScript con sintaxis parecida a HTML",
        "Un lenguaje de servidor"
      ],
      respuestaCorrecta: 2,
      explicacion: "JSX es una extensión de sintaxis de JavaScript que permite escribir estructuras similares a HTML dentro del código JavaScript."
    },
    {
      id: 12104,
      pregunta: "¿Por qué en JSX se usa className en lugar de class?",
      opciones: [
        "Por compatibilidad con CSS",
        "Porque class es palabra reservada en JavaScript",
        "Por rendimiento",
        "Por accesibilidad"
      ],
      respuestaCorrecta: 1,
      explicacion: "En JavaScript, 'class' es una palabra reservada para definir clases, por eso JSX usa 'className' para asignar clases CSS."
    },
    {
      id: 12105,
      pregunta: "¿Qué significa que un input sea controlado en React?",
      opciones: [
        "Que tenga validación HTML",
        "Que use required",
        "Que su valor dependa del estado",
        "Que tenga placeholder"
      ],
      respuestaCorrecta: 2,
      explicacion: "Un input controlado tiene su valor vinculado al estado de React, actualizándose mediante onChange y reflejando siempre el estado actual."
    },
    {
      id: 12106,
      pregunta: "¿Qué operador se usa comúnmente para renderizado condicional simple en JSX?",
      opciones: ["&&", "||", "??", "=="],
      respuestaCorrecta: 0,
      explicacion: "El operador && permite renderizar un elemento solo si la condición es verdadera: {condition && <Component />}."
    },
    {
      id: 12107,
      pregunta: "¿Qué función cumple la propiedad key al renderizar listas?",
      opciones: [
        "Dar estilo al elemento",
        "Evitar errores de sintaxis",
        "Ayudar a React a identificar elementos",
        "Ordenar la lista"
      ],
      respuestaCorrecta: 2,
      explicacion: "La prop key ayuda a React a identificar qué elementos han cambiado, añadido o eliminado, optimizando el re-renderizado."
    },
    {
      id: 12108,
      pregunta: "¿Cuál es una buena práctica para actualizar estado basado en el estado anterior?",
      opciones: [
        "setUsers([...users])",
        "setUsers(users)",
        "setUsers(prev => [...prev])",
        "setUsers()"
      ],
      respuestaCorrecta: 2,
      explicacion: "Usar la función actualizadora (prev => ...) garantiza trabajar con el estado más reciente, evitando problemas de sincronización."
    },
    {
      id: 12109,
      pregunta: "¿Qué problema resuelven los mocks en frontend?",
      opciones: [
        "Mejoran el rendimiento",
        "Evitan depender del backend real",
        "Sustituyen React",
        "Eliminan errores de red"
      ],
      respuestaCorrecta: 1,
      explicacion: "Los mocks simulan respuestas de API, permitiendo desarrollar y probar el frontend sin necesidad de un backend funcional."
    },
    {
      id: 12110,
      pregunta: "¿Qué devuelve la función fetch() en JavaScript?",
      opciones: [
        "Un objeto JSON directamente",
        "Un array con los datos",
        "Una Promise que resuelve en una respuesta",
        "Un string con el contenido"
      ],
      respuestaCorrecta: 2,
      explicacion: "fetch() devuelve una Promise que resuelve en un objeto Response. Para obtener los datos, se usa .json() o .text()."
    },
    {
      id: 12111,
      pregunta: "¿Qué método se usa para evitar que un formulario recargue la página?",
      opciones: ["stop()", "preventDefault()", "cancel()", "block()"],
      respuestaCorrecta: 1,
      explicacion: "event.preventDefault() evita el comportamiento por defecto del formulario, que es recargar la página al enviarse."
    },
    {
      id: 12112,
      pregunta: "¿Qué devuelve fetch si la petición tiene éxito?",
      opciones: [
        "Un objeto JSON directamente",
        "Una Promise con la respuesta",
        "Un array",
        "Un string"
      ],
      respuestaCorrecta: 1,
      explicacion: "fetch devuelve una Promise que resuelve en un objeto Response, del cual se extraen los datos con métodos como .json()."
    },
    {
      id: 12113,
      pregunta: "¿Dónde se debe manipular el DOM en una app React?",
      opciones: [
        "En el servicio",
        "En el componente",
        "En main.jsx",
        "No se manipula directamente"
      ],
      respuestaCorrecta: 3,
      explicacion: "En React no se manipula el DOM directamente. React gestiona el DOM mediante el Virtual DOM basándose en el estado."
    },
    {
      id: 12114,
      pregunta: "¿Qué representa el estado loading?",
      opciones: [
        "Datos cargados",
        "Error de red",
        "Proceso en curso",
        "Resultado final"
      ],
      respuestaCorrecta: 2,
      explicacion: "El estado loading indica que hay una operación asíncrona en curso, como una petición a una API."
    },
    {
      id: 12115,
      pregunta: "¿Qué ocurre si un try tiene finally pero no catch?",
      opciones: [
        "El error se ignora",
        "finally no se ejecuta",
        "finally se ejecuta y el error se propaga",
        "El programa continúa normalmente"
      ],
      respuestaCorrecta: 2,
      explicacion: "El bloque finally siempre se ejecuta, pero sin catch el error no se captura y se propaga hacia arriba en la pila de llamadas."
    },
    {
      id: 12116,
      pregunta: "¿Qué valor tiene new int[5] en la posición 4 en Java?",
      opciones: ["null", "undefined", "1", "0"],
      respuestaCorrecta: 3,
      explicacion: "En Java, los arrays de enteros se inicializan con 0 por defecto. Esta pregunta contrasta con JavaScript donde sería undefined."
    },
    {
      id: 12117,
      pregunta: "¿Qué indica el campo __apiMessage?",
      opciones: [
        "Un dato de usuario",
        "Un error del navegador",
        "Un mensaje interno del servicio",
        "Un campo de la base de datos"
      ],
      respuestaCorrecta: 2,
      explicacion: "Campos con prefijo __ suelen ser convenciones para indicar propiedades internas o de sistema, como mensajes del servicio API."
    },
    {
      id: 12118,
      pregunta: "¿Qué archivo contiene el HTML principal en React?",
      opciones: ["App.jsx", "main.jsx", "index.html", "index.js"],
      respuestaCorrecta: 2,
      explicacion: "index.html es el archivo HTML base donde se monta la aplicación React, conteniendo el div root."
    },
    {
      id: 12119,
      pregunta: "¿Qué hace React cuando cambia el estado?",
      opciones: [
        "Recarga el navegador",
        "Modifica el DOM directamente",
        "Re-renderiza el componente",
        "Reinicia Vite"
      ],
      respuestaCorrecta: 2,
      explicacion: "React re-renderiza el componente afectado, comparando el Virtual DOM con el DOM real y aplicando solo los cambios necesarios."
    },
    {
      id: 12120,
      pregunta: "¿Cuál es la responsabilidad de app.js o App.jsx?",
      opciones: [
        "Acceder a la base de datos",
        "Gestionar la interfaz y el estado",
        "Configurar el servidor",
        "Crear la API"
      ],
      respuestaCorrecta: 1,
      explicacion: "App.jsx es el componente raíz que gestiona la interfaz principal y coordina el estado y los componentes hijos."
    },
    {
      id: 12121,
      pregunta: "¿Qué estructura se usa para renderizar listas en React?",
      opciones: ["for", "while", "map", "filter"],
      respuestaCorrecta: 2,
      explicacion: "map() transforma cada elemento del array en JSX, siendo el método estándar para renderizar listas en React."
    },
    {
      id: 12122,
      pregunta: "¿Qué significa que React sea declarativo?",
      opciones: [
        "Que usa HTML",
        "Que describe cómo debe verse la UI",
        "Que ejecuta código automáticamente",
        "Que no usa JavaScript"
      ],
      respuestaCorrecta: 1,
      explicacion: "React es declarativo porque describes qué debe mostrarse según el estado, no cómo manipular el DOM paso a paso."
    },
    {
      id: 12123,
      pregunta: "¿Qué evento se usa en React para controlar un input?",
      opciones: ["onInput", "onWrite", "onChange", "onKey"],
      respuestaCorrecta: 2,
      explicacion: "onChange es el evento estándar en React para detectar cambios en inputs y actualizar el estado correspondiente."
    },
    {
      id: 12124,
      pregunta: "¿Qué comando lanza un proyecto React con Vite?",
      opciones: ["npm start", "npm serve", "npm run dev", "npm build"],
      respuestaCorrecta: 2,
      explicacion: "npm run dev inicia el servidor de desarrollo de Vite con hot reload para proyectos React."
    },
    {
      id: 12125,
      pregunta: "¿Qué ventaja tiene separar app y apiService?",
      opciones: [
        "Más archivos",
        "Menos código",
        "Mejor separación de responsabilidades",
        "Más rendimiento"
      ],
      respuestaCorrecta: 2,
      explicacion: "Separar la lógica de API en un servicio mejora la organización, facilita el testing y permite reutilizar las llamadas en distintos componentes."
    }
  ]
};

export default moduloRepaso2JavaScriptReact;