/**
 * Datos del módulo de Programación Orientada a Objetos (POO) en Java perteneciente a la asignatura de Programación.
 * Incluye información del módulo y sus preguntas asociadas para el quiz.
 *
 * @type {Object}
 * @property {number} id - Identificador único del módulo
 * @property {string} nombre - Nombre del módulo
 * @property {boolean} esExamen - Indica si el módulo es un examen
 * @property {number} asignaturaId - ID de la asignatura a la que pertenece
 * @property {string} descripcion - Breve descripción del contenido del módulo
 * @property {Array<Object>} preguntas - Lista de preguntas para el quiz de este módulo
 */
export const moduloSimBloqueCinco = {
    id: 310,
    nombre: "Programación Orientada a Objetos (Bloque 5)",
    asignaturaId: 3,
    esExamen: true,
    descripcion: "Examen sobre programación orientada a objetos en Java, enfocado en conceptos fundamentales como clases, objetos, atributos, constructores y métodos.",
    preguntas: [
      {
        id: 31001,
        moduloId: 310,
        pregunta: "¿Cuál es la finalidad del uso de this en un constructor o método?",
        opciones: ["Referenciar los atributos del objeto actual para evitar ambigüedades", "Crear métodos vacíos", "Eliminar atributos duplicados", "Declarar atributos como privados"],
        respuestaCorrecta: 0,
        explicacion: "La palabra clave 'this' en Java se utiliza para hacer referencia al objeto actual dentro de un método o constructor. Su principal finalidad es evitar ambigüedades cuando existen parámetros con nombres iguales a los atributos de la clase, permitiendo distinguir entre el parámetro y el atributo de la clase."
      },
      {
        id: 31002,
        moduloId: 310,
        pregunta: "¿Por qué se recomienda usar métodos getters y setters en lugar de acceder directamente a los atributos?",
        opciones: ["Para escribir menos código", "Para mantener el principio de encapsulamiento y controlar el acceso", "Porque Java no permite el acceso directo", "Para poder usar static en los atributos"],
        respuestaCorrecta: 1,
        explicacion: "Los métodos getters y setters se utilizan para implementar el principio de encapsulamiento, uno de los pilares fundamentales de la programación orientada a objetos. Al usar estos métodos, se ocultan los detalles internos de la clase y se proporciona un punto de control donde se puede validar o manipular los datos antes de cambiarlos o devolverlos, lo que aumenta la seguridad y la mantenibilidad del código."
      },
      {
        id: 31003,
        moduloId: 310,
        pregunta: "¿Cuál es una característica de los constructores en Java?",
        opciones: ["Devuelven siempre un valor", "Pueden tener nombre distinto al de la clase", "Deben ser static y public", "Tienen el mismo nombre que la clase y no devuelven valor"],
        respuestaCorrecta: 3,
        explicacion: "Los constructores en Java tienen el mismo nombre que la clase a la que pertenecen y no tienen tipo de retorno (ni siquiera void). Su propósito es inicializar los objetos de esa clase, estableciendo el estado inicial del objeto mediante la asignación de valores a sus atributos."
      },
      {
        id: 31004,
        moduloId: 310,
        pregunta: "¿Qué ocurre al ejecutar este código?",
        recurso: {
          tipo: "codigo",
          contenido: `public class Alumno {
    private String nombre;

    public Alumno(String n) {
        this.nombre = n;
    }
}

public class Principal {
    public static void main(String[] args) {
        Alumno a = new Alumno("Ana");
        System.out.println("Alumno creado");
    }
}`,
          lenguaje: "java"
        },
        opciones: ["Error: falta el método getNombre()", "Se crea el objeto correctamente y se imprime \"Alumno creado\"", "El constructor debe ser static", "El atributo nombre se imprime automáticamente"],
        respuestaCorrecta: 1,
        explicacion: "El código crea correctamente un objeto de la clase Alumno pasando el parámetro \"Ana\" al constructor. Luego imprime el mensaje \"Alumno creado\". No hay ningún error de compilación o ejecución. El atributo nombre se inicializa correctamente pero no se imprime, ya que para mostrarlo sería necesario un método getNombre() y una instrucción para imprimirlo."
      },
      {
        id: 31005,
        moduloId: 310,
        pregunta: "¿Es correcta esta definición de un constructor?",
        recurso: {
          tipo: "codigo",
          contenido: `public class Libro {
    private String titulo;

    public void Libro(String t) {
        titulo = t;
    }
}`,
          lenguaje: "java"
        },
        opciones: ["No, ya que el título es private", "Sí, es correcto", "No, porque falta un parámetro", "No, porque tiene void, y por tanto no es un constructor sino un método"],
        respuestaCorrecta: 3,
        explicacion: "La definición no es correcta para un constructor porque incluye la palabra clave 'void' antes del nombre. Los constructores en Java no deben tener ningún tipo de retorno, ni siquiera void. Al incluir void, Java interpreta que este es un método regular con el mismo nombre que la clase, no un constructor."
      }
    ]
  };

  export default moduloSimBloqueCinco;