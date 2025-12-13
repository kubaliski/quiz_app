const moduloRepaso1JavaScript = {
  id: 1205,
  asignaturaId: 12,
  nombre: "Repaso 1: JavaScript Cliente",
  titulo: "JavaScript",
  descripcion: "Variables, ámbito, tipos, operadores, strings, funciones, promesas, fetch, DOM, React y módulos ES.",
  esExamen: false,
  preguntas: [
    {
      id: 12051,
      pregunta: "¿Qué ocurre con una variable declarada con var dentro de una función debido al hoisting?",
      opciones: [
        "La declaración se eleva al inicio de la función con valor undefined",
        "No existe hasta la línea exacta donde se declara",
        "Se inicializa automáticamente a 0",
        "Solo es accesible fuera de la función"
      ],
      respuestaCorrecta: 0,
      explicacion: "El hoisting eleva la declaración al inicio pero no la inicialización, por eso vale undefined hasta que se le asigna un valor."
    },
    {
      id: 12052,
      pregunta: "¿Qué tipo de ámbito tienen let y const?",
      opciones: [
        "Ámbito global",
        "Ámbito de bloque",
        "Ámbito de función",
        "Sin ámbito definido"
      ],
      respuestaCorrecta: 1,
      explicacion: "let y const tienen block scope (ámbito de bloque), a diferencia de var que tiene function scope."
    },
    {
      id: 12053,
      pregunta: "En el siguiente código, ¿por qué se imprime primero 20 y luego 10?",
      recurso: {
        tipo: "codigo",
        contenido: `let total = 10;
{
  let total = 20;
  console.log("dentro:", total);
}
console.log("fuera:", total);`,
        lenguaje: "javascript"
      },
      opciones: [
        "Porque let siempre toma el último valor",
        "Porque total es global",
        "Porque la variable interna hace shadowing a la externa",
        "Porque console.log modifica la variable"
      ],
      respuestaCorrecta: 2,
      explicacion: "La variable total declarada dentro del bloque es diferente de la externa. El shadowing hace que dentro del bloque se use la variable local (20), y fuera se use la externa (10)."
    },
    {
      id: 12054,
      pregunta: "¿Qué devuelve typeof null en JavaScript?",
      opciones: ["null", "undefined", "primitive", "object"],
      respuestaCorrecta: 3,
      explicacion: "Es un bug histórico de JavaScript. typeof null devuelve 'object' aunque null sea un tipo primitivo."
    },
    {
      id: 12055,
      pregunta: "¿Qué expresión produce el número 4?",
      opciones: ["'5' - 1", "'5' + 1", "'5' * '5'", "'hola' * 4"],
      respuestaCorrecta: 0,
      explicacion: "Con el operador -, JavaScript convierte '5' a número (5) y resta 1, dando 4. Con + concatenaría ('51'), con * daría 25, y 'hola' * 4 da NaN."
    },
    {
      id: 12056,
      pregunta: "¿Cuál es el valor final de puntos en el siguiente código?",
      recurso: {
        tipo: "codigo",
        contenido: `let puntos = 10;
puntos += 5;
puntos -= 3;`,
        lenguaje: "javascript"
      },
      opciones: ["10", "12", "8", "15"],
      respuestaCorrecta: 1,
      explicacion: "10 + 5 = 15, luego 15 - 3 = 12."
    },
    {
      id: 12057,
      pregunta: "¿Cuál es la ventaja principal de los template literals?",
      opciones: [
        "Solo sirven con números",
        "Son más rápidos a nivel CPU",
        "Permiten interpolar variables fácilmente",
        "Obligan a usar var"
      ],
      respuestaCorrecta: 2,
      explicacion: "Los template literals (`texto ${variable}`) permiten insertar variables y expresiones directamente en strings con ${}."
    },
    {
      id: 12058,
      pregunta: "¿Qué ocurre al ejecutar s.toUpperCase() sobre una cadena?",
      opciones: [
        "Modifica la cadena original",
        "Convierte s en un array",
        "Genera un error",
        "Devuelve una nueva cadena sin modificar la original"
      ],
      respuestaCorrecta: 3,
      explicacion: "Los strings son inmutables en JavaScript. toUpperCase() retorna una nueva cadena transformada."
    },
    {
      id: 12059,
      pregunta: "¿Para qué sirve for...of?",
      opciones: [
        "Para recorrer elementos de arrays o strings",
        "Para recorrer propiedades de un objeto",
        "Para iterar índices solo numéricos",
        "Para iterar solo Promesas"
      ],
      respuestaCorrecta: 0,
      explicacion: "for...of itera sobre valores de estructuras iterables (arrays, strings, Maps, Sets). Para objetos se usa for...in."
    },
    {
      id: 12060,
      pregunta: "¿Qué son los parámetros rest?",
      opciones: [
        "Una forma de concatenar strings",
        "Una forma de recibir argumentos variables como array",
        "Un operador exclusivo de React",
        "Una forma de convertir arrays en argumentos"
      ],
      respuestaCorrecta: 1,
      explicacion: "function suma(...numeros) recibe todos los argumentos en un array llamado numeros."
    },
    {
      id: 12061,
      pregunta: "¿Qué hace el operador spread aplicado a un array?",
      opciones: [
        "Borra su contenido",
        "Lo convierte en un objeto",
        "Desempaqueta sus elementos",
        "Lo convierte automáticamente en JSON"
      ],
      respuestaCorrecta: 2,
      explicacion: "...array desempaqueta los elementos. Por ejemplo: [...arr1, ...arr2] combina arrays."
    },
    {
      id: 12062,
      pregunta: "¿Qué ocurre al combinar objetos con spread si se repite una clave?",
      opciones: [
        "Lanza error",
        "La clave siempre mantiene el primer valor",
        "Los dos objetos comparten referencia",
        "La clave toma el valor del último objeto"
      ],
      respuestaCorrecta: 3,
      explicacion: "{...obj1, ...obj2} - si ambos tienen la misma clave, prevalece el valor de obj2 (el último)."
    },
    {
      id: 12063,
      pregunta: "¿Qué es una función de orden superior?",
      opciones: [
        "Una función que solo devuelve números",
        "Una función que no tiene parámetros",
        "Una función que recibe o devuelve otra función",
        "Una función que solo funciona con async"
      ],
      respuestaCorrecta: 2,
      explicacion: "Higher-order functions como map, filter, reduce reciben funciones como argumentos o las devuelven."
    },
    {
      id: 12064,
      pregunta: "¿Qué diferencia una función flecha de una función clásica?",
      opciones: [
        "Puede usarse con new",
        "No tiene su propio this",
        "No puede tener parámetros",
        "Siempre es asíncrona"
      ],
      respuestaCorrecta: 1,
      explicacion: "Las arrow functions heredan el this del contexto donde se definen, no crean su propio this."
    },
    {
      id: 12065,
      pregunta: "¿Para qué sirven los parámetros con valor por defecto?",
      opciones: [
        "Impiden llamar a la función sin argumentos",
        "Obligan a pasar siempre null",
        "Permiten omitir un argumento",
        "Hacen que el parámetro sea de solo lectura"
      ],
      respuestaCorrecta: 2,
      explicacion: "function suma(a, b = 0) permite llamar suma(5) y b tomará el valor 0 por defecto."
    },
    {
      id: 12066,
      pregunta: "¿Qué devuelve siempre una función async?",
      opciones: ["Un número", "Una cadena", "Una Promesa", "Un objeto"],
      respuestaCorrecta: 2,
      explicacion: "Toda función async devuelve automáticamente una Promise, incluso si retorna un valor simple."
    },
    {
      id: 12067,
      pregunta: "¿Qué hace fetch(url)?",
      opciones: [
        "Ejecuta una función de React",
        "Hace una petición HTTP y devuelve una Promesa",
        "Solo funciona si hay jQuery",
        "Bloquea el hilo principal"
      ],
      respuestaCorrecta: 1,
      explicacion: "fetch() es la API nativa del navegador para hacer peticiones HTTP asíncronas."
    },
    {
      id: 12068,
      pregunta: "¿Cómo se detecta un error HTTP usando fetch?",
      opciones: [
        "Comprobando resp.statusText ≡ 'error'",
        "Comprobando !resp.ok",
        "Usando resp.json()",
        "No se puede detectar"
      ],
      respuestaCorrecta: 1,
      explicacion: "fetch() no rechaza la promesa por errores HTTP. Debes verificar response.ok (true si status es 200-299)."
    },
    {
      id: 12069,
      pregunta: "¿Qué par de funciones trabaja con JSON?",
      opciones: [
        "JSON.save() y JSON.load()",
        "JSON.toString() y JSON.parse()",
        "JSON.stringify() y JSON.parse()",
        "JSON.encode() y JSON.decode()"
      ],
      respuestaCorrecta: 2,
      explicacion: "JSON.stringify() convierte objetos a string JSON, JSON.parse() convierte string JSON a objeto."
    },
    {
      id: 12070,
      pregunta: "¿Qué hace Promise.all()?",
      opciones: [
        "Ejecuta promesas en serie",
        "Cancela todas las promesas",
        "Convierte una Promesa en callback",
        "Espera a que todas se resuelvan o una falle"
      ],
      respuestaCorrecta: 3,
      explicacion: "Promise.all([p1, p2, p3]) espera a que todas se resuelvan, o rechaza en cuanto una falle."
    },
    {
      id: 12071,
      pregunta: "¿Qué diferencia a getElementById de querySelector?",
      opciones: [
        "getElementById devuelve siempre varios elementos",
        "querySelector solo funciona en React",
        "querySelector acepta cualquier selector CSS",
        "Son idénticos"
      ],
      respuestaCorrecta: 2,
      explicacion: "querySelector() acepta cualquier selector CSS (#id, .clase, [atributo], etc.), mientras getElementById() solo busca por ID."
    },
    {
      id: 12072,
      pregunta: "¿Cómo se añade un li a una ul desde JavaScript?",
      opciones: [
        "document.add('lista', li)",
        "document.getElementById('lista').appendChild(li)",
        "document.appendChild('li', 'lista')",
        "innerHTML = <li> borra los demás elementos"
      ],
      respuestaCorrecta: 1,
      explicacion: "Primero obtienes el elemento ul, luego usas appendChild() para agregar el nuevo li."
    },
    {
      id: 12073,
      pregunta: "¿Por qué es preferible addEventListener a onclick?",
      opciones: [
        "onclick está obsoleto",
        "addEventListener solo funciona en React",
        "Permite múltiples eventos y separa lógica de HTML",
        "onclick no funciona con teclado"
      ],
      respuestaCorrecta: 2,
      explicacion: "addEventListener permite múltiples handlers para el mismo evento y mantiene separada la lógica del HTML."
    },
    {
      id: 12074,
      pregunta: "¿Cómo se accede al valor de un data-attribute?",
      opciones: [
        "event.target.value",
        "event.id.dataset",
        "event.dataset.id",
        "event.target.dataset.id"
      ],
      respuestaCorrecta: 3,
      explicacion: "Para acceder a data-id='5' usas element.dataset.id. En un evento: event.target.dataset.id."
    },
    {
      id: 12075,
      pregunta: "¿Qué es un componente funcional en React?",
      opciones: [
        "Una función que devuelve JSX",
        "Una clase que hereda de React.Component",
        "Un archivo CSS",
        "Un hook del DOM"
      ],
      respuestaCorrecta: 0,
      explicacion: "Los componentes funcionales son funciones que retornan JSX, la forma moderna de crear componentes en React."
    },
    {
      id: 12076,
      pregunta: "¿Qué devuelve useState?",
      opciones: [
        "Un número y una Promesa",
        "Una pareja [estado, actualizarEstado]",
        "Una cadena y un booleano",
        "Un objeto get/set"
      ],
      respuestaCorrecta: 1,
      explicacion: "const [count, setCount] = useState(0) devuelve un array con el valor actual y la función para actualizarlo."
    },
    {
      id: 12077,
      pregunta: "¿Qué significa ejecutar useEffect con [] como dependencia?",
      opciones: [
        "El efecto nunca se ejecuta",
        "Se ejecuta en cada render",
        "Se ejecuta solo al montar el componente",
        "Se ejecuta solo ante errores"
      ],
      respuestaCorrecta: 2,
      explicacion: "useEffect(() => {...}, []) con array vacío se ejecuta una sola vez al montar, similar a componentDidMount."
    },
    {
      id: 12078,
      pregunta: "¿Qué hace ReactDOM.createRoot(...).render()?",
      opciones: [
        "Crea un componente de clase",
        "Añade un listener global",
        "Muestra un alert",
        "Crea el root de React y monta App"
      ],
      respuestaCorrecta: 3,
      explicacion: "Es la forma de React 18+ para crear el punto de entrada y renderizar la aplicación en el DOM."
    },
    {
      id: 12079,
      pregunta: "¿Cuál es la sintaxis correcta para exportar e importar una función en módulos ES?",
      opciones: [
        "export func f() {}",
        "export function f() {} e import { f } from './archivo.js'",
        "module.export = f",
        "export default { f }"
      ],
      respuestaCorrecta: 1,
      explicacion: "La sintaxis ES6 modules usa export function y luego import { nombre }. module.exports es de CommonJS (Node.js antiguo)."
    },
    {
      id: 12080,
      pregunta: "¿Qué ventaja tiene dividir código en varios módulos JS?",
      opciones: [
        "Obliga a usar React",
        "Mejora mantenimiento, organización y reutilización",
        "Hace el código más rápido",
        "Evita todos los errores"
      ],
      respuestaCorrecta: 1,
      explicacion: "Los módulos facilitan la organización del código, permiten reutilizar funciones/componentes y mejoran el mantenimiento del proyecto."
    }
  ]
};

export default moduloRepaso1JavaScript;