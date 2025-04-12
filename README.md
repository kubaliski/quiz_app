# Quiz App

Aplicación educativa para crear y realizar tests de diferentes asignaturas y módulos. Diseñada con React y Tailwind CSS, ofrece una interfaz intuitiva para practicar conocimientos a través de cuestionarios interactivos.

## Características

- 📚 Organización por asignaturas y módulos
- 🔄 Preguntas y respuestas con orden aleatorio
- 🌙 Modo oscuro/claro
- 📱 Diseño responsive para todos los dispositivos
- 📊 Resumen de resultados con explicaciones detalladas
- 📈 Historial de resultados
- 🧩 Fácilmente extensible con nuevos módulos y preguntas

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

4. Abre tu navegador en `http://localhost:3000`

### Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Compila la aplicación para producción
- `npm run preview` - Vista previa de la versión de producción
- `npm run lint` - Ejecuta el linter para verificar la calidad del código

## Estructura del proyecto

```
quiz-app/
├── public/               # Archivos estáticos
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
      pregunta: "¿Qué componente es conocido como el 'cerebro' del ordenador?",
      opciones: [
        "Memoria RAM",
        "CPU",
        "Tarjeta madre",
        "Fuente de alimentación",
      ],
      respuestaCorrecta: 1,
      explicacion:
        "La CPU (Unidad Central de Procesamiento) es considerada el 'cerebro' del ordenador ya que procesa las instrucciones y realiza los cálculos necesarios para el funcionamiento del sistema.",
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
  - `opciones`: Array de strings con las posibles respuestas.
  - `respuestaCorrecta`: Índice (base 0) de la opción correcta en el array.
  - `explicacion`: Texto explicativo de la respuesta correcta.
- **Estructura de módulo**:
  - `id`: Identificador único para el módulo.
  - `nombre`: Nombre visible del módulo.
  - `asignaturaId`: ID de la asignatura a la que pertenece.
  - `descripcion`: Breve descripción del módulo.
  - `preguntas`: Array de objetos de preguntas.

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

export const programacionWeb = {
  ...info,
  modulos: [moduloHTML, moduloCSS, moduloJS],
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
