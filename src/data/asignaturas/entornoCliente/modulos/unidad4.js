const moduloUnidadCuatroDomAvanzadoYProgramacionIntermedia = {
  id: 1203,
  asignaturaId: 12,
  nombre: "Unidad 4: DOM avanzado y programación intermedia",
  titulo: "DOM avanzado y programación intermedia",
  descripcion: "Selección y manipulación del DOM, Virtual DOM, módulos ES, Promesas, async/await y bundling con Webpack",
  esExamen: false,
  preguntas: [
    {
      id: 12031,
      pregunta: "¿Qué método selecciona un elemento por su ID?",
      opciones: ["getElementById()", "querySelectorAll()", "getByClass()", "select()"],
      respuestaCorrecta: 0,
      explicacion: "getElementById() selecciona un elemento del DOM por su atributo id único."
    },
    {
      id: 12032,
      pregunta: "¿Qué método crea un nuevo nodo HTML?",
      opciones: ["addNode()", "append()", "buildElement()", "createElement()"],
      respuestaCorrecta: 3,
      explicacion: "createElement() crea un nuevo elemento HTML que luego puedes insertar en el DOM."
    },
    {
      id: 12033,
      pregunta: "¿Qué propiedad permite modificar las clases CSS de un elemento?",
      opciones: ["classList", "classNameList", "cssClass", "styleClass"],
      respuestaCorrecta: 0,
      explicacion: "classList permite añadir, quitar o alternar clases CSS de un elemento."
    },
    {
      id: 12034,
      pregunta: "¿Qué diferencia el Virtual DOM del DOM real?",
      opciones: [
        "Se ejecuta en el navegador directamente",
        "No representa elementos reales",
        "Actualiza solo lo necesario, mejorando el rendimiento",
        "Solo se usa en HTML puro"
      ],
      respuestaCorrecta: 2,
      explicacion: "El Virtual DOM calcula cambios mínimos y aplica solo los necesarios al DOM real."
    },
    {
      id: 12035,
      pregunta: "¿Qué método elimina un elemento del DOM?",
      opciones: ["deleteNode()", "detach()", "remove()", "clear()"],
      respuestaCorrecta: 2,
      explicacion: "remove() elimina el nodo actual del DOM."
    },
    {
      id: 12036,
      pregunta: "¿Qué palabra clave exporta un módulo?",
      opciones: ["module", "send", "export", "require"],
      respuestaCorrecta: 2,
      explicacion: "export permite exponer funciones, objetos o valores desde un módulo ES."
    },
    {
      id: 12037,
      pregunta: "¿Qué método ejecuta código después de resolver una promesa?",
      opciones: ["await()", "catch()", "next()", "then()"],
      respuestaCorrecta: 3,
      explicacion: "then() se ejecuta cuando la promesa se resuelve correctamente."
    },
    {
      id: 12038,
      pregunta: "¿Qué hace await en una función async?",
      opciones: [
        "Crea una promesa nueva",
        "Espera a que la promesa se resuelva",
        "Rechaza la promesa",
        "Repite la función"
      ],
      respuestaCorrecta: 1,
      explicacion: "await pausa la ejecución hasta que la promesa se resuelve o es rechazada."
    },
    {
      id: 12039,
      pregunta: "¿Qué ventaja tiene async/await sobre callbacks?",
      opciones: [
        "Código más legible y menos anidado",
        "Ejecución más lenta",
        "Menor compatibilidad",
        "Uso exclusivo del backend"
      ],
      respuestaCorrecta: 0,
      explicacion: "async/await reduce el callback hell y hace el flujo asíncrono más claro."
    },
    {
      id: 12040,
      pregunta: "¿Qué herramienta empaqueta módulos JS para navegadores?",
      opciones: ["Babel", "ESLint", "Redux", "Webpack"],
      respuestaCorrecta: 3,
      explicacion: "Webpack agrupa módulos y recursos para su uso eficiente en el navegador."
    }
  ]
};

export default moduloUnidadCuatroDomAvanzadoYProgramacionIntermedia;