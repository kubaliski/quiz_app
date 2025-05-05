# Quiz App

Aplicación educativa para crear y realizar tests de diferentes asignaturas y módulos. Diseñada con React y Tailwind CSS, ofrece una interfaz intuitiva para practicar conocimientos a través de cuestionarios interactivos.

## Propósito Educativo

Este proyecto ha sido desarrollado sin ánimo de lucro y con el único objetivo de facilitar el estudio y aprendizaje. Quiz App está destinada a ser una herramienta educativa gratuita para estudiantes . Todos los materiales, preguntas y contenidos se proporcionan exclusivamente con fines formativos.

## Características

- Organización por asignaturas y módulos
- Preguntas y respuestas con orden aleatorio
- Soporte para recursos visuales (imágenes y bloques de código)
- Modo oscuro/claro
- Diseño responsive para todos los dispositivos
- Resumen de resultados con explicaciones detalladas
- Historial de resultados
- Fácilmente extensible con nuevos módulos y preguntas
- Modo examen para módulos específicos
- **Instalable como aplicación de escritorio y móvil (PWA)**

## Configuración del proyecto

### Requisitos previos

- Node.js (v14.0.0 o superior)
- npm (v6.0.0 o superior) o yarn

### Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/quiz-app.git
   cd quiz-app
   ```

2. Instala las dependencias:

   ```bash
   npm install
   # o
   yarn install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. Abre tu navegador en `http://localhost:5173`

### Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Compila la aplicación para producción
- `npm run preview` - Vista previa de la versión de producción
- `npm run lint` - Ejecuta el linter para verificar la calidad del código

## Estructura del proyecto

```
quiz-app/
├── public/               # Archivos estáticos
│   ├── images/           # Imágenes para preguntas
│   │   └── [modulo]/     # Carpetas específicas por módulo
│   ├── pwa-192x192.png   # Iconos para PWA
│   ├── pwa-512x512.png   # Iconos para PWA
│   └── apple-touch-icon.png # Icono para dispositivos Apple
├── src/
│   ├── components/       # Componentes React
│   │   ├── common/       # Componentes reutilizables (Button, Card, etc.)
│   │   ├── layout/       # Componentes de estructura (Header, Footer, etc.)
│   │   └── quiz/         # Componentes específicos del quiz
│   ├── context/          # Contextos de React (tema, etc.)
│   ├── data/             # Datos de la aplicación
│   │   ├── asignaturas/  # Asignaturas y sus módulos
│   │   │   ├── modulos/  # Módulos con preguntas
│   │   │   └── index.js  # Exportación de asignaturas
│   ├── hooks/            # Hooks personalizados
│   ├── pages/            # Componentes de páginas
│   ├── services/         # Servicios para manejar datos
│   └── utils/            # Utilidades y funciones auxiliares
├── package.json
└── README.md
```

## Instalación como aplicación (PWA)

Quiz App es una Progressive Web App (PWA) que permite instalarla como una aplicación en dispositivos móviles y ordenadores, ofreciendo una experiencia más integrada y la posibilidad de usar la aplicación sin conexión.

### Características de la PWA

- **Instalable en dispositivos**: La aplicación puede instalarse en la pantalla de inicio de dispositivos móviles o en el escritorio de ordenadores sin necesidad de tiendas de aplicaciones.
- **Funcionamiento offline**: Permite usar la aplicación incluso sin conexión a internet.
- **Experiencia tipo app**: Se ejecuta a pantalla completa sin barras de navegador, proporcionando una experiencia similar a las aplicaciones nativas.
- **Actualizaciones automáticas**: Recibe actualizaciones automáticamente cuando hay nuevas versiones disponibles.

### Cómo instalar Quiz App en tu dispositivo

#### En dispositivos móviles (Android/iOS):

1. Abre Quiz App en tu navegador móvil (Chrome, Safari, etc.)
2. En Android:
   - Aparecerá automáticamente un banner "Añadir a la pantalla de inicio"
   - O busca el menú de tres puntos y selecciona "Instalar aplicación"
3. En iOS (Safari):
   - Toca el icono de compartir en la barra de navegación
   - Desplázate y selecciona "Añadir a la pantalla de inicio"
   - Confirma pulsando "Añadir"

#### En ordenadores (Windows/Mac/Linux):

1. Abre Quiz App en Chrome, Edge o cualquier navegador basado en Chromium
2. Verás un icono de instalación ("+") en la barra de direcciones
3. Haz clic en él y selecciona "Instalar"
4. O busca en el menú del navegador la opción "Instalar Quiz App"

### Desarrollo y configuración de la PWA

Si estás contribuyendo al proyecto y necesitas modificar la configuración PWA:

1. La configuración se encuentra en `vite.config.js` usando el plugin VitePWA
2. Los iconos y recursos de la PWA están en la carpeta `public/`
3. Para modificar los iconos, deberás actualizar los archivos:
   - `pwa-192x192.png`
   - `pwa-512x512.png`
   - `apple-touch-icon.png`

Para desarrolladores que quieran añadir o modificar la funcionalidad PWA:

```bash
# Instalar el plugin VitePWA si no está instalado
npm install vite-plugin-pwa -D

# Generar iconos a partir del logo existente
npx pwa-asset-generator ./src/assets/ico.svg ./public -i ./index.html
```

## Cómo añadir recursos a las preguntas

La aplicación soporta la inclusión de recursos visuales (imágenes y bloques de código) en las preguntas, lo que permite crear contenido más interactivo y educativo.

### Estructura de recursos

Los recursos se definen dentro del objeto de la pregunta usando la propiedad `recurso`:

```js
{
  id: 1001,
  moduloId: 101,
  pregunta: "¿Qué muestra la siguiente imagen?",
  recurso: {
    tipo: "imagen",                              // Tipo de recurso: "imagen" o "codigo"
    contenido: "/images/modulo/pregunta1.png",   // Ruta relativa a la carpeta public
    altText: "Descripción de la imagen"          // Texto alternativo para accesibilidad
  },
  opciones: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"],
  respuestaCorrecta: 2,
  explicacion: "Explicación detallada de la respuesta correcta."
}
```

### Organización de imágenes

Las imágenes deben colocarse en la siguiente estructura para mantener el proyecto organizado:

```
public/
└── images/
    └── [nombre-modulo]/           # Carpeta específica del módulo
        └── preguntaXX.png         # Donde XX es el número o identificador de la pregunta
```

Por ejemplo:

- `/images/linux/comando-ls.png`
- `/images/redes/topologia-estrella.png`
- `/images/cienPreguntas/pregunta32.png`

### Uso de bloques de código

También puedes incluir bloques de código con resaltado de sintaxis:

```js
{
  id: 2001,
  moduloId: 102,
  pregunta: "¿Qué hace el siguiente código JavaScript?",
  recurso: {
    tipo: "codigo",
    contenido: `function sumar(a, b) {
  return a + b;
}
console.log(sumar(5, 3));`,
    lenguaje: "javascript"  // Especifica el lenguaje para el resaltado de sintaxis
  },
  opciones: ["Resta dos números", "Suma dos números", "Multiplica dos números", "Divide dos números"],
  respuestaCorrecta: 1,
  explicacion: "El código define una función 'sumar' que recibe dos parámetros y devuelve su suma. Luego imprime el resultado de sumar 5 + 3, que es 8."
}
```

### Lenguajes soportados para el resaltado de sintaxis

Algunos de los lenguajes soportados incluyen:

- `javascript`, `js`
- `python`
- `java`
- `html`
- `css`
- `bash`, `shell`
- `sql`
- `csharp`, `cs`
- `php`
- `ruby`

## Cómo añadir un nuevo módulo de preguntas

Para ampliar la aplicación con nuevos módulos y preguntas, sigue estos pasos:

### 1. Crear un nuevo archivo de módulo

Crea un nuevo archivo JavaScript en la carpeta `src/data/asignaturas/modulos/`. Por ejemplo, para crear un módulo de "Hardware" en la asignatura "Sistemas Informáticos":

```js
// src/data/asignaturas/modulos/hardware.js

export const moduloHardware = {
  id: 103, // Asigna un ID único para el módulo
  nombre: "Hardware",
  asignaturaId: 1, // ID de la asignatura a la que pertenece
  descripcion: "Componentes físicos del ordenador y su funcionamiento",
  esExamen: false, // Marca como false para módulos regulares, true para módulos de examen
  preguntas: [
    {
      id: 3001, // Asigna un ID único para la pregunta
      moduloId: 103,
      pregunta:
        "¿Cuál de los siguientes componentes es responsable de almacenar los datos de forma permanente?",
      opciones: ["CPU", "RAM", "Disco duro", "Tarjeta gráfica"],
      respuestaCorrecta: 2,
      explicacion:
        "El disco duro (HDD) o unidad de estado sólido (SSD) es el componente encargado de almacenar los datos de forma permanente, incluso cuando el ordenador está apagado.",
    },
    {
      id: 3002,
      moduloId: 103,
      pregunta: "¿Qué muestra la siguiente imagen de una placa base?",
      recurso: {
        tipo: "imagen",
        contenido: "/images/hardware/placa-base.png",
        altText: "Imagen de una placa base con componentes señalados",
      },
      opciones: [
        "Memoria RAM",
        "CPU",
        "Tarjeta madre",
        "Fuente de alimentación",
      ],
      respuestaCorrecta: 2,
      explicacion:
        "La imagen muestra una placa base o tarjeta madre, que es el circuito principal del ordenador donde se conectan todos los demás componentes.",
    },
    // Añade más preguntas siguiendo la misma estructura
  ],
};

export default moduloHardware;
```

### 2. Importar y registrar el módulo en la asignatura

Actualiza el archivo de la asignatura para incluir el nuevo módulo:

```js
// src/data/asignaturas/sistemasInformaticos/index.js

import info from "./info.js";
import moduloLinux from "./modulos/linux.js";
import moduloRedes from "./modulos/redes.js";
import moduloHardware from "./modulos/hardware.js"; // Importa el nuevo módulo

export const sistemasInformaticos = {
  ...info,
  modulos: [
    moduloLinux,
    moduloRedes,
    moduloHardware, // Añade el nuevo módulo a la lista
  ],
};

export default sistemasInformaticos;
```

### 3. Consideraciones importantes

- **IDs únicos**: Asegúrate de que tanto el ID del módulo como los IDs de las preguntas sean únicos en toda la aplicación.
- **Formato de preguntas**:
  - `id`: Identificador único para la pregunta.
  - `moduloId`: Debe coincidir con el ID del módulo.
  - `pregunta`: El texto de la pregunta.
  - `recurso`: (Opcional) Objeto con información del recurso visual.
  - `opciones`: Array de strings con las posibles respuestas.
  - `respuestaCorrecta`: Índice (base 0) de la opción correcta en el array.
  - `explicacion`: Texto explicativo de la respuesta correcta.
- **Estructura de módulo**:
  - `id`: Identificador único para el módulo.
  - `nombre`: Nombre visible del módulo.
  - `asignaturaId`: ID de la asignatura a la que pertenece.
  - `descripcion`: Breve descripción del módulo.
  - `esExamen`: Booleano que indica si el módulo es de tipo examen.
  - `preguntas`: Array de objetos de preguntas.

## Configuración de módulos de examen

La aplicación permite marcar módulos específicos como exámenes, lo que habilita funcionalidades adicionales para simular situaciones de evaluación real.

### 1. Marcar un módulo como examen

Para marcar un módulo como examen, añade la propiedad `esExamen: true` al objeto del módulo:

```js
// src/data/asignaturas/modulos/examenFinal.js

export const moduloExamenFinal = {
  id: 104,
  nombre: "Examen Final",
  asignaturaId: 1,
  descripcion: "Preguntas del examen final de la asignatura",
  esExamen: true, // Marca este módulo como examen
  preguntas: [
    // ... preguntas del examen
  ],
};
```

### 2. Características de los módulos de examen

Los módulos marcados como examen tienen las siguientes características especiales:

- **Visualización distintiva**: Se muestran con un color rojo en la interfaz para diferenciarlos de los módulos regulares.
- **Práctica específica**: La aplicación incluye un botón especial "40 preguntas aleatorias de examen" que permite practicar exclusivamente con preguntas de los módulos marcados como examen.

### 3. Consideraciones para módulos de examen

- Se recomienda marcar como examen aquellos módulos que contengan preguntas representativas de evaluaciones (28 de abril en adelante).
- Las preguntas de los módulos de examen también aparecerán en los quizzes normales de la asignatura, a menos que se implementen filtros adicionales.
- Los resultados de las prácticas en modo examen se almacenan en el historial, identificados específicamente como ejercicios de examen.

## Cómo crear una nueva asignatura

Si quieres crear una asignatura completamente nueva, sigue estos pasos:

### 1. Añadir la asignatura a la lista principal

Edita el archivo `src/data/asignaturas.js` para añadir la nueva asignatura:

```js
export const asignaturas = [
  // Asignaturas existentes...
  {
    id: 8, // Asigna un ID único
    nombre: "Programación Web",
    descripcion: "Desarrollo de aplicaciones y sitios web",
    icono: "code", // Opcional: icono asociado
  },
];
```

### 2. Crear el directorio para la asignatura

Crea un nuevo directorio en `src/data/asignaturas/` para la nueva asignatura, por ejemplo `programacionWeb`.

### 3. Crear el archivo info.js

```js
// src/data/asignaturas/programacionWeb/info.js
export default {
  id: 8,
  nombre: "Programación Web",
  descripcion: "Desarrollo de aplicaciones y sitios web",
};
```

### 4. Crear módulos para la asignatura

Crea un directorio `modulos` dentro de la carpeta de la asignatura y añade los archivos de módulos siguiendo la estructura explicada anteriormente.

### 5. Crear el archivo index.js para la asignatura

```js
// src/data/asignaturas/programacionWeb/index.js
import info from "./info.js";
import moduloHTML from "./modulos/html.js";
import moduloCSS from "./modulos/css.js";
import moduloJS from "./modulos/javascript.js";
import moduloExamen from "./modulos/examenFinal.js"; // Importar módulo de examen

export const programacionWeb = {
  ...info,
  modulos: [moduloHTML, moduloCSS, moduloJS, moduloExamen],
};

export default programacionWeb;
```

### 6. Actualizar el servicio quizDataService.js

Para que la aplicación pueda cargar la nueva asignatura, debes modificar la función `fetchAsignaturaCompleta` en `src/services/quizDataService.js`:

```js
export const fetchAsignaturaCompleta = async (asignaturaId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const id = parseInt(asignaturaId, 10);
        if (id === 1) {
          // Sistemas Informáticos
          import("../data/asignaturas/sistemasInformaticos")
            .then((module) => resolve(module.default))
            .catch((error) => reject(error));
        } else if (id === 8) {
          // Añade un nuevo caso para la nueva asignatura
          // Programación Web
          import("../data/asignaturas/programacionWeb")
            .then((module) => resolve(module.default))
            .catch((error) => reject(error));
        } else {
          // Otras asignaturas...
        }
      } catch (error) {
        reject(error);
      }
    }, 300);
  });
};
```

## Contribución

Nos encantaría que contribuyeras a este proyecto. Para hacerlo:

1. Haz fork del repositorio
2. Crea una rama para tu contribución (`git checkout -b mi-contribucion`)
3. Realiza tus cambios
4. Haz commit (`git commit -m 'Añade nuevas preguntas sobre hardware'`)
5. Haz push a la rama (`git push origin mi-contribucion`)
6. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

## Contacto

Si tienes preguntas o sugerencias, puedes contactar a través de los issues de GitHub o por email a angel.ccapb@gmail.com.
