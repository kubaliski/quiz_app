/**
 * Datos del módulo de Programación Orientada a Objetos perteneciente a la asignatura de Programación.
 * Incluye información del módulo y sus preguntas asociadas para el quiz.
 *
 * @type {Object}
 * @property {number} id - Identificador único del módulo
 * @property {string} nombre - Nombre del módulo
 * @property {number} asignaturaId - ID de la asignatura a la que pertenece
 * @property {string} descripcion - Breve descripción del contenido del módulo
 * @property {Array<Object>} preguntas - Lista de preguntas para el quiz de este módulo
 * @property {number} preguntas[].id - Identificador único de la pregunta
 * @property {number} preguntas[].moduloId - ID del módulo al que pertenece la pregunta
 * @property {string} preguntas[].pregunta - Texto de la pregunta
 * @property {Array<string>} preguntas[].opciones - Lista de opciones de respuesta
 * @property {number} preguntas[].respuestaCorrecta - Índice (0-based) de la opción correcta
 * @property {string} preguntas[].explicacion - Explicación de la respuesta correcta
 *
 * @example
 * // Importar el módulo de POO
 * import moduloPOO from '@data/modulos/poo';
 *
 * function PreguntasAleatorias() {
 *   // Seleccionar 5 preguntas aleatorias del módulo
 *   const preguntasAleatorias = moduloPOO.preguntas
 *     .sort(() => 0.5 - Math.random())
 *     .slice(0, 5);
 *
 *   return (
 *     <div>
 *       <h2>{moduloPOO.nombre}</h2>
 *       {preguntasAleatorias.map(pregunta => (
 *         <QuestionCard key={pregunta.id} pregunta={pregunta} />
 *       ))}
 *     </div>
 *   );
 * }
 */
export const moduloPOO = {
    id: 301,
    nombre: "Programación Orientada a Objetos",
    asignaturaId: 3,
    esExamen: false,
    descripcion: "Introducción a la programación orientada a objetos, incluyendo clases, objetos, herencia y polimorfismo.",
    preguntas: [
      {
        id: 3001,
        moduloId: 301,
        pregunta: "¿Qué es una clase en Java?",
        opciones: ["Un objeto instanciado.", "Un molde o plantilla para crear objetos.", "Un tipo de método especial.", "Una interfaz que define métodos."],
        respuestaCorrecta: 1,
        explicacion: "Una clase en Java es un molde o plantilla que define las características y comportamientos que tendrán los objetos creados a partir de ella."
      },
      {
        id: 3002,
        moduloId: 301,
        pregunta: "¿Qué es un atributo de una clase?",
        opciones: ["Una función que realiza operaciones.", "Un método estático.", "Una variable que representa el estado de un objeto.", "Un objeto contenido dentro de otro objeto."],
        respuestaCorrecta: 2,
        explicacion: "Un atributo de una clase es una variable que representa el estado o características de un objeto, almacenando datos que el objeto necesita mantener."
      },
      {
        id: 3003,
        moduloId: 301,
        pregunta: "¿Qué hace la palabra clave this en Java?",
        opciones: ["Hace referencia a la clase padre.", "Hace referencia al objeto actual.", "Permite importar paquetes.", "Es obligatoria al acceder a variables privadas."],
        respuestaCorrecta: 1,
        explicacion: "La palabra clave 'this' en Java hace referencia al objeto actual de la clase en la que se está utilizando, permitiendo acceder a sus atributos y métodos."
      },
      {
        id: 3004,
        moduloId: 301,
        pregunta: "¿Qué afirmaciones sobre constructores son verdaderas?",
        opciones: ["Pueden tener el mismo nombre que la clase.", "Pueden tener valor de retorno distinto de void.", "Un constructor hijo no puede llamar a un constructor padre. El método está sobre escrito.", "Se pueden sobrecargar."],
        respuestaCorrecta: 0,
        explicacion: "Los constructores deben tener el mismo nombre que la clase a la que pertenecen, es una de sus características fundamentales."
      },
      {
        id: 3005,
        moduloId: 301,
        pregunta: "¿Qué sucede si no se define un constructor en una clase?",
        opciones: ["Java genera uno por defecto (heredado de la clase Object).", "No se puede crear objetos de la clase.", "Se lanza un error en tiempo de ejecución.", "Solo se pueden crear objetos usando new."],
        respuestaCorrecta: 0,
        explicacion: "Si no se define un constructor en una clase, Java genera automáticamente un constructor por defecto sin parámetros que inicializa los atributos con valores predeterminados."
      },
      {
        id: 3006,
        moduloId: 301,
        pregunta: "¿Qué métodos son conocidos como getters y setters?",
        opciones: ["Métodos que inicializan objetos.", "Métodos que acceden o modifican atributos.", "Métodos estáticos.", "Métodos que ejecutan código externo."],
        respuestaCorrecta: 1,
        explicacion: "Los getters y setters son métodos que se utilizan para acceder (obtener) y modificar (establecer) el valor de los atributos de una clase, respectivamente, siguiendo el principio de encapsulación."
      },
      {
        id: 3007,
        moduloId: 301,
        pregunta: "¿Qué afirmaciones sobre objetos en Java son ciertas?",
        opciones: ["Los objetos pueden tener métodos y atributos.", "Los objetos no pueden contener otros objetos.", "Los objetos no pueden implementar interfaces.", "No se puede crear un objeto sin argumentos."],
        respuestaCorrecta: 0,
        explicacion: "Los objetos en Java pueden tener tanto métodos (comportamientos) como atributos (estados), lo que les permite representar entidades del mundo real con sus características y funcionalidades."
      },
      {
        id: 3008,
        moduloId: 301,
        pregunta: "¿Qué significa encapsulación?",
        opciones: ["Ocultar detalles internos de la implementación.", "Permitir acceso público a todos los métodos.", "Dividir una clase en varias subclases.", "Ejecutar múltiples tareas simultáneamente."],
        respuestaCorrecta: 0,
        explicacion: "La encapsulación es un principio de la POO que consiste en ocultar los detalles internos de implementación de una clase y exponer solo lo necesario mediante interfaces bien definidas, protegiendo así la integridad de los datos."
      },
      {
        id: 3009,
        moduloId: 301,
        pregunta: "¿Qué palabra clave se usa para crear objetos?",
        opciones: ["class", "object", "new", "static"],
        respuestaCorrecta: 2,
        explicacion: "La palabra clave 'new' se utiliza en Java para crear nuevas instancias (objetos) de una clase, asignando memoria para el objeto y llamando a su constructor."
      },
      {
        id: 3010,
        moduloId: 301,
        pregunta: "¿Cuál es la salida del siguiente código?",
        recurso: {
          tipo: "codigo",
          contenido: `Persona p = new Persona("Ana", "López", "123456");
System.out.println(p.getNombre());`,
          lenguaje: "java"
        },
        opciones: ["Ana", "null", "Error de compilación", "\"Ana López 123456\""],
        respuestaCorrecta: 0,
        explicacion: "Asumiendo que la clase Persona tiene un método getNombre() que devuelve el primer nombre, la salida será \"Ana\", que es el valor pasado como primer parámetro al constructor."
      },
      {
        id: 3011,
        moduloId: 301,
        pregunta: "¿Qué es la herencia en Java?",
        opciones: ["Permite a una clase heredar métodos y atributos.", "Se usa con la palabra clave implements.", "Solo se puede heredar de interfaces.", "Permite crear nuevas clases basadas en otras."],
        respuestaCorrecta: 0,
        explicacion: "La herencia en Java es un mecanismo que permite a una clase (subclase) heredar atributos y métodos de otra clase (superclase), promoviendo la reutilización de código."
      },
      {
        id: 3012,
        moduloId: 301,
        pregunta: "¿Qué palabra clave se usa para heredar de una clase?",
        opciones: ["this", "implements", "extends", "inherit"],
        respuestaCorrecta: 2,
        explicacion: "La palabra clave 'extends' se utiliza en Java para indicar que una clase hereda de otra, estableciendo una relación de herencia entre ellas."
      },
      {
        id: 3013,
        moduloId: 301,
        pregunta: "¿Qué se puede heredar de una superclase?",
        opciones: ["Atributos públicos", "Atributos privados", "Métodos públicos", "Todo, haciendo uso de super."],
        respuestaCorrecta: 0,
        explicacion: "De una superclase se pueden heredar los atributos públicos (y también los protegidos), pero no los privados, que son accesibles solo dentro de la propia clase que los define."
      },
      {
        id: 3014,
        moduloId: 301,
        pregunta: "¿Qué afirmaciones son verdaderas sobre super?",
        opciones: ["Se usa para acceder a métodos de la superclase.", "Se usa para heredar una clase.", "Debe ser la primera línea en un constructor al invocar superclase.", "Solo puede usarse en clases abstractas."],
        respuestaCorrecta: 0,
        explicacion: "La palabra clave 'super' se utiliza para acceder a los métodos y atributos de la superclase (clase padre), permitiendo invocar sus implementaciones desde la subclase."
      },
      {
        id: 3015,
        moduloId: 301,
        pregunta: "¿Qué es una clase abstracta?",
        opciones: ["Puede tener métodos sin implementar.", "No puede tener métodos concretos.", "No puede ser instanciada.", "Siempre debe extenderse."],
        respuestaCorrecta: 0,
        explicacion: "Una clase abstracta puede contener métodos abstractos (sin implementación) que las subclases deberán implementar, proporcionando así una estructura o plantilla para las clases derivadas."
      },
      {
        id: 3016,
        moduloId: 301,
        pregunta: "¿Cuál es la salida del siguiente código?",
        recurso: {
          tipo: "codigo",
          contenido: `class A {
 int x = 10;
 void mostrar() {
   System.out.println("Clase A: " + x);
 }
}
class B extends A {
 int x = 20;
 void mostrar() {
   System.out.println("Clase B: " + x);
 }
}
public class Test {
 public static void main(String[] args) {
   A obj = new B();
   obj.mostrar();
 }
}`,
          lenguaje: "java"
        },
        opciones: ["Clase A: 10", "Clase B: 20", "Clase A: 20", "Clase B: 10"],
        respuestaCorrecta: 1,
        explicacion: "Este código muestra el principio de polimorfismo. Aunque 'obj' está declarado como tipo A, contiene una instancia de B. Al llamar a mostrar(), se ejecuta el método de la clase B debido al enlace dinámico en tiempo de ejecución."
      },
      {
        id: 3017,
        moduloId: 301,
        pregunta: "¿Qué afirmaciones son ciertas sobre interfaces?",
        opciones: ["Los métodos de una interfaz son públicos por defecto.", "Se puede instanciar una interfaz directamente.", "Una clase puede implementar varias interfaces.", "Los atributos en una interfaz son constantes."],
        respuestaCorrecta: 0,
        explicacion: "En Java, los métodos declarados en una interfaz son implícitamente públicos y abstractos, aunque no se especifique explícitamente."
      },
      {
        id: 3018,
        moduloId: 301,
        pregunta: "¿Cuál de los siguientes códigos es correcto?",
        opciones: [
          "public abstract class Vehiculo { abstract void acelerar(); }",
          "interface Motor { void encender(); }",
          "class Coche extends Motor {}",
          "abstract interface Figura extends Vehiculo{}"
        ],
        respuestaCorrecta: 1,
        explicacion: "La definición 'interface Motor { void encender(); }' es sintácticamente correcta en Java. Una interfaz puede declarar métodos sin implementación y no necesita la palabra clave 'abstract' para sus métodos."
      },
      {
        id: 3019,
        moduloId: 301,
        pregunta: "¿Qué imprime el siguiente código?",
        recurso: {
          tipo: "codigo",
          contenido: `abstract class Figura {
 abstract void dibujar();
}
class Circulo extends Figura {
 void dibujar() {
   System.out.println("Dibuja círculo");
 }
}
public class Test {
 public static void main(String[] args) {
   Figura f = new Circulo();
   f.dibujar();
 }
}`,
          lenguaje: "java"
        },
        opciones: ["Dibuja círculo", "Error de compilación", "No imprime nada", "Dibuja figura", "No tengo ni la menor idea."],
        respuestaCorrecta: 0,
        explicacion: "El código imprime 'Dibuja círculo'. La variable 'f' es de tipo Figura (clase abstracta) pero contiene una instancia de Circulo. Al llamar a dibujar(), se ejecuta la implementación de Circulo debido al polimorfismo."
      },
      {
        id: 3020,
        moduloId: 301,
        pregunta: "¿Qué tipo de herencia NO se permite en Java con clases?",
        opciones: ["Herencia única", "Herencia jerárquica", "Herencia múltiple", "Herencia multinivel"],
        respuestaCorrecta: 2,
        explicacion: "Java no permite la herencia múltiple con clases, es decir, una clase no puede heredar directamente de más de una clase. Esto evita problemas como el 'problema del diamante'."
      },
      {
        id: 3021,
        moduloId: 301,
        pregunta: "¿Qué resultado da este código?",
        recurso: {
          tipo: "codigo",
          contenido: `interface Animal {
 void sonido();
}
class Perro implements Animal {
 public void sonido() {
   System.out.println("Guau");
 }
}
public class Test {
 public static void main(String[] args) {
   Animal a = new Perro();
   a.sonido();
 }
}`,
          lenguaje: "java"
        },
        opciones: ["Guau", "Error de compilación", "Null", "Sonido animal"],
        respuestaCorrecta: 0,
        explicacion: "El código imprime 'Guau'. Se crea una variable 'a' de tipo interfaz Animal que referencia a un objeto Perro. Al llamar a sonido(), se ejecuta la implementación de Perro."
      },
      {
        id: 3022,
        moduloId: 301,
        pregunta: "¿Qué es el overriding (sobreescritura)?",
        opciones: ["Repetir un método en la subclase con la misma firma.", "Crear múltiples métodos con el mismo nombre y distintos parámetros.", "Cambiar el tipo de retorno de un método.", "Es lo mismo que sobrecarga."],
        respuestaCorrecta: 0,
        explicacion: "El overriding o sobreescritura es la técnica de redefinir un método de la superclase en una subclase con la misma firma (nombre, tipo de retorno y parámetros), proporcionando una implementación específica."
      },
      {
        id: 3023,
        moduloId: 301,
        pregunta: "¿Qué condiciones debe cumplir un método para ser sobrescrito?",
        opciones: ["Mismo nombre", "Mismo tipo de retorno", "Misma lista de parámetros", "Puede cambiar modificador de acceso a más restrictivo"],
        respuestaCorrecta: 0,
        explicacion: "Para sobreescribir un método en Java, el método en la subclase debe tener el mismo nombre que el método en la superclase. También debe tener la misma firma (parámetros y tipo de retorno) y el mismo o un nivel de acceso menos restrictivo."
      },
      {
        id: 3024,
        moduloId: 301,
        pregunta: "¿Qué es el overloading (sobrecarga)?",
        opciones: ["Crear múltiples métodos con el mismo nombre pero distintos parámetros.", "Repetir métodos en subclases.", "Cambiar solo el tipo de retorno.", "Solo se puede hacer en interfaces."],
        respuestaCorrecta: 0,
        explicacion: "El overloading o sobrecarga es la capacidad de definir múltiples métodos con el mismo nombre en la misma clase, pero con diferentes parámetros (cantidad o tipos). Esto permite usar el mismo nombre para operaciones similares."
      },
      {
        id: 3025,
        moduloId: 301,
        pregunta: "¿Qué salida produce este código?",
        recurso: {
          tipo: "codigo",
          contenido: `public class Test {
 public static void main(String[] args) {
   int a = 5, b = 10;
   System.out.println(a + b + "Resultado");
   System.out.println("Resultado" + a + b);
 }
}`,
          lenguaje: "java"
        },
        opciones: [
          "15Resultado\nResultado15",
          "15Resultado\nResultado510",
          "Resultado15\nResultado15",
          "5Resultado10\nResultado15"
        ],
        respuestaCorrecta: 1,
        explicacion: "El código produce '15Resultado' en la primera línea porque primero suma a+b (5+10=15) y luego concatena el resultado con el string. En la segunda línea produce 'Resultado510' porque al encontrar primero un string, trata todo como concatenación de strings."
      },
      {
        id: 3026,
        moduloId: 301,
        pregunta: "¿Qué es necesario para hacer un cast explícito?",
        opciones: ["Que haya relación de herencia entre clases.", "Que los tipos sean compatibles.", "Que la clase base tenga métodos abstractos.", "Que ambos objetos estén en el mismo paquete."],
        respuestaCorrecta: 0,
        explicacion: "Para realizar un cast explícito entre objetos en Java, debe existir una relación de herencia entre las clases involucradas. Solo se puede hacer cast a una clase que sea superclase, subclase o la misma clase del objeto."
      },
      {
        id: 3027,
        moduloId: 301,
        pregunta: "¿Qué operador comprueba si un objeto pertenece a una clase?",
        opciones: ["instanceOf", "instanceof", "belongs", "castTo"],
        respuestaCorrecta: 1,
        explicacion: "El operador 'instanceof' en Java se utiliza para comprobar si un objeto es una instancia de una clase específica, interfaz o clase padre."
      },
      {
        id: 3028,
        moduloId: 301,
        pregunta: "¿Cuál es la diferencia entre this y super?",
        opciones: ["this accede a la clase actual.", "super accede a la clase padre.", "this se usa en constructores de la superclase.", "super permite acceder a métodos privados."],
        respuestaCorrecta: 0,
        explicacion: "La palabra clave 'this' se utiliza para referirse a la instancia actual (la clase en la que se está trabajando), mientras que 'super' se utiliza para acceder a elementos de la superclase (clase padre)."
      },
      {
        id: 3029,
        moduloId: 301,
        pregunta: "¿Qué sucede al hacer Empleado e = new Encargado();?",
        opciones: ["Puede ser válido por polimorfismo.", "Se puede acceder a métodos de Encargado sin cast.", "Solo se puede usar métodos definidos en Empleado.", "No es válido en Java."],
        respuestaCorrecta: 0,
        explicacion: "Esta asignación es válida gracias al polimorfismo de Java, siempre que Encargado sea una subclase de Empleado. Permite tratar un objeto de una subclase como si fuera de la superclase."
      },
      {
        id: 3030,
        moduloId: 301,
        pregunta: "¿Qué sucede al ejecutar este código?",
        recurso: {
          tipo: "codigo",
          contenido: `class Padre {
 void saludar() {
   System.out.println("Hola desde Padre");
 }
}
class Hijo extends Padre {
 void saludar() {
   System.out.println("Hola desde Hijo");
 }
}
public class Test {
 public static void main(String[] args) {
   Padre p = new Hijo();
   p.saludar();
 }
}`,
          lenguaje: "java"
        },
        opciones: ["Hola desde Padre", "Hola desde Hijo", "Error de compilación", "No imprime nada"],
        respuestaCorrecta: 1,
        explicacion: "El código imprime 'Hola desde Hijo'. Aunque la variable 'p' está declarada como tipo Padre, contiene una instancia de Hijo. Al llamar a saludar(), se ejecuta el método de Hijo debido al polimorfismo y enlace dinámico."
      }
    ]
  };

  export default moduloPOO;