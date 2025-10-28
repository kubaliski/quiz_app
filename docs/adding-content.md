# Guía para añadir contenido (asignaturas, módulos y preguntas)

Esta guía explica cómo ampliar Quiz App creando nuevas asignaturas, módulos y preguntas, y cómo añadir recursos (imágenes y bloques de código) de forma consistente.

> Nota: Sigue las convenciones de estilo indicadas en CONTRIBUTING.md (IDs únicos, nombres claros, imports ordenados, etc.).

## 1) Dónde viven los datos

Estructura relevante del proyecto:

```
src/
  data/
    asignaturas.js               # Lista principal de asignaturas
    asignaturas/
      <asignatura>/              # Carpeta de cada asignatura
        info.js                  # Metadatos de la asignatura
        index.js                 # Export central de la asignatura (incluye sus módulos)
        modulos/
          <modulo>.js            # Módulos con preguntas
public/
  images/
    <modulo>/                    # Imágenes por módulo
```

## 2) Formato de las preguntas

Cada pregunta es un objeto con esta forma mínima:

```js
{
  id: 1001,                         // ID único de la pregunta (número entero)
  moduloId: 101,                    // Debe coincidir con el id del módulo
  pregunta: "Texto de la pregunta",
  opciones: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"],
  respuestaCorrecta: 2,             // Índice base 0 de la opción correcta
  explicacion: "Explicación de la respuesta"
}
```

Además, puedes adjuntar recursos con la propiedad opcional `recurso`.

### 2.1) Recurso: imagen

```js
{
  // ...campos base
  recurso: {
    tipo: "imagen",
    contenido: "/images/<modulo>/pregunta1.png", // ruta relativa a public/
    altText: "Descripción accesible"
  }
}
```

Coloca los ficheros en `public/images/<modulo>/`.

### 2.2) Recurso: bloque de código

```js
{
  // ...campos base
  recurso: {
    tipo: "codigo",
    contenido: `function sumar(a, b) {\n  return a + b;\n}\nconsole.log(sumar(5, 3));`,
    lenguaje: "javascript" // para el resaltado de sintaxis
  }
}
```

Lenguajes comunes: `javascript`, `python`, `java`, `html`, `css`, `bash`, `sql`, `csharp`, `php`, `ruby`.

## 3) Crear un módulo nuevo

Crea un archivo en `src/data/asignaturas/<asignatura>/modulos/<modulo>.js`:

```js
// src/data/asignaturas/sistemasInformaticos/modulos/hardware.js

export const moduloHardware = {
  id: 103,                        // ID único del módulo
  nombre: "Hardware",
  asignaturaId: 1,                // Debe coincidir con la asignatura
  descripcion: "Fundamentos de hardware",
  esExamen: false,                // opcional; marca en rojo y habilita prácticas de examen si true
  preguntas: [
    {
      id: 10301,
      moduloId: 103,
      pregunta: "¿Qué componente…?",
      opciones: ["CPU", "RAM", "SSD", "GPU"],
      respuestaCorrecta: 0,
      explicacion: "La CPU …"
    }
    // más preguntas…
  ]
};

export default moduloHardware;
```

### 3.1) Registrar el módulo en la asignatura

Edita `src/data/asignaturas/<asignatura>/index.js` para importar y añadir el módulo a la lista:

```js
import info from "./info.js";
import moduloHardware from "./modulos/hardware.js";
// importa aquí otros módulos…

export const sistemasInformaticos = {
  ...info,
  modulos: [
    // otros módulos…
    moduloHardware
  ]
};

export default sistemasInformaticos;
```

## 4) Módulos de examen

Para marcar un módulo como examen, usa `esExamen: true` en el objeto del módulo.

Efectos en la app:
- Se muestra con estilo distintivo (rojo)
- Aparecen flujos/botones específicos de práctica de examen

## 5) Crear una asignatura nueva

1. Añade la asignatura a `src/data/asignaturas.js` (lista principal):

```js
export const asignaturas = [
  // …asignaturas existentes
  {
    id: 8,
    nombre: "Programación Web",
    slug: "programacionWeb",
    descripcion: "Desarrollo de aplicaciones y sitios web"
  }
];
```

2. Crea la carpeta `src/data/asignaturas/programacionWeb/` con:

```js
// src/data/asignaturas/programacionWeb/info.js
export default {
  id: 8,
  nombre: "Programación Web",
  slug: "programacionWeb",
  descripcion: "Desarrollo de aplicaciones y sitios web"
};
```

```js
// src/data/asignaturas/programacionWeb/index.js
import info from "./info.js";
import moduloHTML from "./modulos/html.js";

export const programacionWeb = {
  ...info,
  modulos: [moduloHTML]
};

export default programacionWeb;
```

3. Crea los módulos en `src/data/asignaturas/programacionWeb/modulos/` siguiendo el apartado 3.

## 6) Buenas prácticas y validación

- Usa IDs únicos globalmente (módulos, preguntas). Evita colisiones.
- Mantén `moduloId` consistente con el `id` del módulo que contiene la pregunta.
- Añade `explicacion` útil en todas las preguntas (mejora el valor educativo).
- Para imágenes, rellena `altText` por accesibilidad.
- Guarda los recursos en `public/images/<modulo>/` con nombres claros.
- Revisa que todos los módulos estén importados/exportados correctamente en sus `index.js`.
- Ejecuta comprobaciones rápidas:

```bash
npm run lint
npm test -- --run
npm run build
```

## 7) Ejemplos rápidos

Pregunta con imagen:

```js
{
  id: 20001,
  moduloId: 201,
  pregunta: "¿Qué muestra la siguiente imagen?",
  recurso: {
    tipo: "imagen",
    contenido: "/images/redes/topologia-estrella.png",
    altText: "Topología de red en estrella"
  },
  opciones: ["Bus", "Anillo", "Estrella", "Malla"],
  respuestaCorrecta: 2,
  explicacion: "La topología en estrella …"
}
```

Pregunta con código:

```js
{
  id: 20002,
  moduloId: 201,
  pregunta: "¿Qué imprime el siguiente código?",
  recurso: {
    tipo: "codigo",
    contenido: `const x = [1,2,3].map(n => n*2);\nconsole.log(x.join('-'));`,
    lenguaje: "javascript"
  },
  opciones: ["1-2-3", "2-4-6", "[2,4,6]", "Error"],
  respuestaCorrecta: 1,
  explicacion: "map duplica y join une con guiones => 2-4-6"
}
```

## 8) Checklist antes de abrir PR

- [ ] IDs únicos para módulos y preguntas
- [ ] Rutas de imágenes bajo `public/images/<modulo>/`
- [ ] `moduloId` consistente en todas las preguntas
- [ ] Importación/exportación correcta en `index.js` de la asignatura
- [ ] Lint y tests en verde (`npm run lint`, `npm test -- --run`)
- [ ] Build correcto (`npm run build`)
