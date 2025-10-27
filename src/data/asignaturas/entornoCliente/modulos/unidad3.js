const moduloUnidadTresEstructurasYFormularios = {
  id: 1201,
  asignaturaId: 12,
  nombre: "Unidad 3: Estructuras de datos y Formularios",
  titulo: "Estructuras de datos y Formularios",
  descripcion: "Set, Map, JSON, eventos de formulario y validación en cliente",
  esExamen: false,
  preguntas: [
    {
      id: 12021,
      pregunta: "¿Qué estructura evita valores duplicados?",
      opciones: ["Set", "Map", "Array", "Object"],
      respuestaCorrecta: 0,
      explicacion: "Set solo mantiene valores únicos; los duplicados se descartan."
    },
    {
      id: 12022,
      pregunta: "¿Qué método convierte un objeto en texto JSON?",
      opciones: ["JSON.stringify()", "JSON.parse()", "toString()", "JSON.format()"],
      respuestaCorrecta: 0,
      explicacion: "JSON.stringify() serializa un valor JS a una cadena JSON."
    },
    {
      id: 12023,
      pregunta: "¿Qué método agrega un elemento a un Map?",
      opciones: ["set()", "add()", "push()", "append()"],
      respuestaCorrecta: 0,
      explicacion: "map.set(clave, valor) inserta o actualiza una entrada."
    },
    {
      id: 12024,
      pregunta: "¿Qué devuelve JSON.parse()?",
      opciones: ["Un objeto JS", "Un texto plano", "Un número", "Una función"],
      respuestaCorrecta: 0,
      explicacion: "Convierte texto JSON válido en su valor JS (objeto, array, etc.)."
    },
    {
      id: 12025,
      pregunta: "¿Qué ventaja tiene Map sobre un objeto normal?",
      opciones: [
        "Acepta cualquier tipo de clave y mantiene el orden",
        "Es más ligero",
        "No necesita claves",
        "Se guarda automáticamente"
      ],
      respuestaCorrecta: 0,
      explicacion: "Map permite claves de cualquier tipo y preserva el orden de inserción."
    },
    {
      id: 12026,
      pregunta: "¿Qué evento se usa para detectar el envío del formulario?",
      opciones: ["click", "submit", "change", "input"],
      respuestaCorrecta: 1,
      explicacion: "El evento submit se dispara al intentar enviar el formulario."
    },
    {
      id: 12027,
      pregunta: "¿Qué función evita el envío automático del formulario?",
      opciones: ["stopPropagation()", "event.preventDefault()", "return false", "event.stop()"],
      respuestaCorrecta: 1,
      explicacion: "event.preventDefault() bloquea el comportamiento por defecto (envío)."
    },
    {
      id: 12028,
      pregunta: "¿Qué propiedad accede al valor de un input?",
      opciones: [".text", ".innerHTML", ".value", ".name"],
      respuestaCorrecta: 2,
      explicacion: "value contiene el valor actual del campo de formulario."
    },
    {
      id: 12029,
      pregunta: "¿Qué herramienta permite validar formularios en React?",
      opciones: ["Axios", "Router", "Formik", "Redux"],
      respuestaCorrecta: 2,
      explicacion: "Formik (junto con Yup) facilita manejo de formularios y validación."
    },
    {
      id: 12030,
      pregunta: "¿Por qué es importante validar también en el servidor?",
      opciones: [
        "Porque es más rápido",
        "Porque no hay otra forma",
        "Para cambiar el diseño",
        "Para evitar manipulación o datos maliciosos"
      ],
      respuestaCorrecta: 3,
      explicacion: "La validación en servidor protege contra datos alterados o ataques."
    }
  ]
};

export default moduloUnidadTresEstructurasYFormularios;