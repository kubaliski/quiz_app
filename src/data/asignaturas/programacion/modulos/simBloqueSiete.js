/**
 * Datos del módulo de Herencia, Polimorfismo, Interfaces y Clases Abstractas en Java perteneciente a la asignatura de Programación.
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
export const moduloSimBloqueSiete = {
    id: 312,
    nombre: "Herencia, Polimorfismo, Interfaces, Clases Abstractas (Bloque 7)",
    asignaturaId: 3,
    esExamen: true,
    descripcion: "Examen sobre conceptos avanzados de la programación orientada a objetos en Java: herencia, polimorfismo, interfaces y clases abstractas.",
    preguntas: [
      {
        id: 31201,
        moduloId: 312,
        pregunta: "¿Qué palabra clave se utiliza en Java para indicar que una clase hereda de otra?",
        opciones: ["Inherit", "Include", "Extends", "implements"],
        respuestaCorrecta: 2,
        explicacion: "En Java, la palabra clave 'extends' se utiliza para establecer una relación de herencia entre clases. Cuando una clase extiende a otra, hereda todos los miembros (atributos y métodos) no privados de la clase padre o superclase."
      },
      {
        id: 31202,
        moduloId: 312,
        pregunta: "¿Qué palabra clave permite acceder a un atributo o método sobrescrito en la superclase?",
        opciones: ["This", "Super", "Parent", "base"],
        respuestaCorrecta: 1,
        explicacion: "La palabra clave 'super' en Java se utiliza para acceder a los miembros (atributos y métodos) de la clase padre o superclase, especialmente cuando se han sobrescrito en la clase hija. Es útil para mantener la funcionalidad original del método padre mientras se añade comportamiento adicional en la subclase."
      },
      {
        id: 31203,
        moduloId: 312,
        pregunta: "¿Cuál de las siguientes afirmaciones es verdadera sobre las clases abstractas en Java?",
        opciones: ["Pueden instanciarse directamente.", "Todos sus métodos deben ser abstractos.", "Solo se usan para interfaces o en el interior de otras clases.", "Pueden contener métodos abstractos y no abstractos."],
        respuestaCorrecta: 3,
        explicacion: "Las clases abstractas en Java pueden contener tanto métodos abstractos (sin implementación) como métodos no abstractos (con implementación). Esta característica permite definir comportamientos comunes en la clase abstracta mientras se deja la implementación de comportamientos específicos a las subclases."
      },
      {
        id: 31204,
        moduloId: 312,
        pregunta: "¿Cuál es la diferencia principal entre una clase abstracta y una interfaz en Java?",
        opciones: ["Las interfaces pueden tener constructores", "Las clases abstractas no permiten atributos", "Las interfaces no tienen implementación, solo declaraciones de métodos", "Las clases abstractas no tienen implementación, solo declaraciones de métodos"],
        respuestaCorrecta: 2,
        explicacion: "La diferencia principal es que las interfaces tradicionalmente solo contienen declaraciones de métodos sin implementación (aunque en versiones recientes de Java permiten métodos default). En cambio, las clases abstractas pueden tener tanto métodos abstractos como métodos con implementación completa. Además, las interfaces no pueden tener atributos de instancia (solo constantes) ni constructores, mientras que las clases abstractas sí pueden tenerlos."
      },
      {
        id: 31205,
        moduloId: 312,
        pregunta: "¿Qué ocurre al compilar este código?",
        recurso: {
          tipo: "codigo",
          contenido: `abstract class Figura {
    abstract void dibujar();
}

class Cuadrado extends Figura {}`,
          lenguaje: "java"
        },
        opciones: ["Se crea el objeto Circulo sin problema", "El método dibujar() se hereda sin error", "El compilador crea una versión vacía del método", "Da error porque Cuadrado no implementa el método abstracto"],
        respuestaCorrecta: 3,
        explicacion: "Al compilar este código, se producirá un error de compilación porque la clase Cuadrado extiende una clase abstracta (Figura) pero no implementa el método abstracto 'dibujar()'. Cualquier clase no abstracta que herede de una clase abstracta debe proporcionar implementaciones para todos los métodos abstractos de la superclase, o también debe declararse como abstracta."
      },
      {
        id: 31206,
        moduloId: 312,
        pregunta: "¿Qué imprime el siguiente código?",
        recurso: {
          tipo: "codigo",
          contenido: `class Empleado {
    public String getTipo() {
        return "Empleado";
    }
}

class Gerente extends Empleado {
    public String getTipo() {
        return "Gerente";
    }
}

Empleado e = new Gerente();
System.out.println(e.getTipo());`,
          lenguaje: "java"
        },
        opciones: ["Empleado", "Gerente", "Error de compilación", "null"],
        respuestaCorrecta: 1,
        explicacion: "El código imprimirá 'Gerente'. Esto es un ejemplo de polimorfismo en Java. Aunque la variable 'e' está declarada como tipo Empleado, contiene una referencia a un objeto Gerente. Cuando se llama al método getTipo(), Java ejecuta la versión del método que corresponde al tipo real del objeto (Gerente), no al tipo de la referencia (Empleado)."
      },
      {
        id: 31207,
        moduloId: 312,
        pregunta: "¿Qué es el polimorfismo en Java?",
        opciones: ["La capacidad de una clase de cambiar de nombre", "La posibilidad de que un mismo método se comporte de forma diferente según el objeto que lo invoque", "El uso de muchas clases a la vez", "El proceso de ocultar atributos privados"],
        respuestaCorrecta: 1,
        explicacion: "El polimorfismo en Java es la capacidad que permite que un mismo método se comporte de manera diferente según el objeto que lo invoque. Es uno de los principios fundamentales de la programación orientada a objetos y permite escribir código más flexible y reutilizable. Se implementa principalmente a través de la sobrescritura de métodos en subclases."
      },
      {
        id: 31208,
        moduloId: 312,
        pregunta: "¿Qué imprime el siguiente código?",
        recurso: {
          tipo: "codigo",
          contenido: `class Vehiculo {
    public void encender() {
        System.out.println("Vehículo encendido");
    }
}

class Moto extends Vehiculo {
    public void encender() {
        System.out.println("Moto encendida");
    }
}

Vehiculo v = new Moto();
v.encender();`,
          lenguaje: "java"
        },
        opciones: ["Moto encendida", "Vehículo encendido", "Error", "null"],
        respuestaCorrecta: 0,
        explicacion: "El código imprimirá 'Moto encendida'. Este es otro ejemplo de polimorfismo. La variable 'v' es de tipo Vehiculo pero referencia a un objeto de tipo Moto. Al llamar al método encender(), se ejecuta la versión sobrescrita del método en la clase Moto, no la versión de la clase Vehiculo."
      },
      {
        id: 31209,
        moduloId: 312,
        pregunta: "¿Cuál de las siguientes afirmaciones es verdadera sobre las interfaces en Java?",
        opciones: ["Pueden contener atributos private", "Deben contener al menos un método main", "Solo pueden ser usadas en clases abstractas", "No pueden tener atributos de instancia"],
        respuestaCorrecta: 3,
        explicacion: "Las interfaces en Java no pueden tener atributos de instancia, solo pueden contener constantes (variables estáticas finales). Todos los campos declarados en una interfaz son implícitamente public, static y final. Además, las interfaces pueden ser implementadas por cualquier clase, no solo por clases abstractas, y no requieren un método main."
      },
      {
        id: 31210,
        moduloId: 312,
        pregunta: "¿Qué palabra clave se usa para declarar una clase abstracta en Java?",
        opciones: ["Interface", "Abstract", "Super", "static"],
        respuestaCorrecta: 1,
        explicacion: "La palabra clave 'abstract' se utiliza para declarar una clase abstracta en Java. Una clase abstracta es aquella que no puede ser instanciada directamente y que puede contener métodos abstractos (sin implementación) que deben ser implementados por sus subclases no abstractas."
      },
      {
        id: 31211,
        moduloId: 312,
        pregunta: "¿Tiene algún error este código?",
        recurso: {
          tipo: "codigo",
          contenido: `abstract class Figura {
    abstract void dibujar();
}

class Cuadrado extends Figura {}`,
          lenguaje: "java"
        },
        opciones: ["Si, cuadrado no implementa el método abstracto dibujar().", "No, el código es correcto.", "Si, Cuadrado debe ser abstracto también.", "Si, falta el constructor."],
        respuestaCorrecta: 0,
        explicacion: "Sí, el código tiene un error. La clase Cuadrado extiende una clase abstracta (Figura) pero no implementa el método abstracto 'dibujar()'. Cuando una clase no abstracta extiende una clase abstracta, debe proporcionar implementaciones para todos los métodos abstractos heredados. De lo contrario, la clase Cuadrado debería ser declarada como abstracta también."
      },
      {
        id: 31212,
        moduloId: 312,
        pregunta: "¿Qué permite la implementación múltiple de interfaces en Java?",
        opciones: ["Heredar de varias clases a la vez", "Reutilizar atributos entre clases, siempre que sean public o protected", "Implementar varios comportamientos distintos en una sola clase", "Evitar el uso de métodos abstractos y así garantizar el encapsulamiento"],
        respuestaCorrecta: 2,
        explicacion: "La implementación múltiple de interfaces en Java permite que una clase implemente varios comportamientos distintos definidos en diferentes interfaces. Esto supera la limitación de la herencia simple de Java (una clase solo puede extender una clase) y permite que una clase tenga múltiples 'tipos' y comportamientos, aumentando la flexibilidad del diseño."
      },
      {
        id: 31213,
        moduloId: 312,
        pregunta: "¿Qué ocurre si intentamos crear un objeto directamente de una clase abstracta?",
        opciones: ["Se crea con métodos vacíos", "Da error de compilación", "Se crea si tiene constructor", "Solo da error si tiene métodos abstractos"],
        respuestaCorrecta: 1,
        explicacion: "Si intentamos crear un objeto directamente de una clase abstracta, obtendremos un error de compilación. Las clases abstractas no pueden ser instanciadas directamente, independientemente de si tienen o no un constructor definido. El propósito de una clase abstracta es ser extendida por subclases que proporcionen implementaciones concretas."
      }
    ]
  };

  export default moduloSimBloqueSiete;