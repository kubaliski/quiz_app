# Guía de Contribución

¡Gracias por tu interés en contribuir a Quiz App! Este documento te proporcionará toda la información necesaria para comenzar a contribuir al proyecto.

## Índice

- [Código de Conducta](#código-de-conducta)
- [¿Cómo puedo contribuir?](#cómo-puedo-contribuir)
  - [Reportar errores](#reportar-errores)
  - [Sugerir mejoras](#sugerir-mejoras)
  - [Añadir contenido educativo](#añadir-contenido-educativo)
  - [Desarrollo de código](#desarrollo-de-código)
- [Flujo de trabajo con Git](#flujo-de-trabajo-con-git)
- [Estructura para contribuciones de contenido](#estructura-para-contribuciones-de-contenido)
- [Estilo y convenciones de código](#estilo-y-convenciones-de-código)
- [Pull Requests](#pull-requests)
- [Contacto](#contacto)

## Código de Conducta

Este proyecto y todos sus participantes están bajo un Código de Conducta que promueve un entorno de respeto y colaboración. Al participar, se espera que respetes este código.

## ¿Cómo puedo contribuir?

### Reportar errores

Si encuentras algún error en la aplicación o en el contenido educativo:

1. Verifica que el error no haya sido reportado previamente en la sección de Issues
2. Abre un nuevo issue usando la plantilla de "Bug" si está disponible
3. Incluye pasos detallados para reproducir el error
4. Añade capturas de pantalla si es posible

### Sugerir mejoras

Las sugerencias de funcionalidades son bienvenidas:

1. Describe claramente la mejora y el problema que resuelve
2. Explica cómo beneficiaría a los usuarios
3. Considera tanto el diseño como la implementación

### Añadir contenido educativo

Una de las formas más valiosas de contribuir es añadiendo nuevos tests:

1. Sigue la estructura JSON definida (consulta [este apartado](#estructura-para-contribuciones-de-contenido))
2. Asegúrate de que las preguntas sean claras y precisas
3. Incluye explicaciones detalladas para cada respuesta
4. Añade recursos visuales cuando sea apropiado
5. Verifica que los IDs de módulos y preguntas sean únicos

### Desarrollo de código

Si quieres contribuir al código de la aplicación:

1. Verifica que tu contribución no esté ya en desarrollo consultando los issues y pull requests existentes
2. Comenta en un issue existente o crea uno nuevo explicando tu propuesta
3. Sigue el [flujo de trabajo con Git](#flujo-de-trabajo-con-git)
4. Asegúrate de que tu código cumple con las [convenciones de estilo](#estilo-y-convenciones-de-código)

## Flujo de trabajo con Git

> Estrategia de ramas
>
> - main: rama de producción (deploy automático en Netlify).
> - release/x.y.z: rama de integración para preparar una versión. Aquí llegan las PRs “normales”.
> - hotfix/...: ramas de corrección urgente que van directas a main mediante PR.

1. **Fork**: Haz un fork del repositorio a tu cuenta de GitHub

  ```bash
  # En la interfaz web de GitHub, pulsa el botón "Fork"
  ```

2. **Clone**: Clona tu fork a tu máquina local

  ```bash
  git clone https://github.com/tu-usuario/quiz-app.git
  cd quiz-app
  ```

3. **Rama**: Crea una rama para tu contribución según el destino de la PR

  - Cambios normales (features, mejoras, refactors, docs):
    - Crea tu rama desde la release objetivo.
    - Nombra tu rama como `feature/...`, `fix/...`, `chore/...`, `docs/...`.
    - Abre PR hacia `release/x.y.z` correspondiente.

    ```bash
    # Ejemplo: trabajar para la versión 2.1.0
    git fetch origin
    git checkout -b feature/nueva-funcionalidad origin/release/2.1.0
    ```

  - Hotfix (parches urgentes para producción):
    - Crea tu rama desde `main`.
    - Nómbrala `hotfix/descripcion-corta`.
    - Abre PR hacia `main`.

    ```bash
    git fetch origin
    git checkout -b hotfix/corrige-crash origin/main
    ```

4. **Desarrollo**: Realiza tus cambios siguiendo las convenciones del proyecto

5. **Commit**: Haz commits con mensajes descriptivos

  ```bash
  git add .
  git commit -m "feat: descripción clara del cambio"
  ```

6. **Push**: Sube tus cambios a tu fork

  ```bash
  git push origin nombre-de-tu-rama
  ```

7. **Pull Request**: Crea un PR desde la interfaz de GitHub
  - Cambios normales: base = `release/x.y.z` correspondiente
  - Hotfix: base = `main`
  - Si no existe la rama release objetivo, solicita su creación en un issue
  - Utiliza la plantilla de PR correspondiente y vincula el issue relacionado si existe

## Estructura para contribuciones de contenido

Si estás añadiendo nuevos tests, sigue esta estructura:

### Para un nuevo módulo en una asignatura existente:

```js
// src/data/asignaturas/[nombreAsignatura]/modulos/[nombreModulo].js

export const modulo[NombreModulo] = {
  id: XXX, // ID único para el módulo
  nombre: "Nombre del Módulo",
  asignaturaId: X, // ID de la asignatura a la que pertenece
  descripcion: "Descripción breve del módulo",
  preguntas: [
    {
      id: XXXX, // ID único para la pregunta
      moduloId: XXX, // Debe coincidir con el ID del módulo
      pregunta: "Texto de la pregunta",
      opciones: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"],
      respuestaCorrecta: X, // Índice (base 0) de la opción correcta
      explicacion: "Explicación detallada de la respuesta correcta"
    },
    // Más preguntas...
  ]
};

export default modulo[NombreModulo];
```

### Para añadir preguntas con recursos visuales:

```js
{
  id: XXXX,
  moduloId: XXX,
  pregunta: "Texto de la pregunta",
  recurso: {
    tipo: "imagen", // o "codigo"
    contenido: "/images/[modulo]/nombre-imagen.png", // o código para tipo "codigo"
    altText: "Descripción de la imagen", // Solo para imágenes
    lenguaje: "javascript" // Solo para código
  },
  opciones: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"],
  respuestaCorrecta: X,
  explicacion: "Explicación detallada"
}
```

Consulta el README para información más detallada sobre la estructura del proyecto y cómo crear nuevas asignaturas completas.

## Estilo y convenciones de código

- **JavaScript/React**: Utilizamos ESLint con la configuración del proyecto
- **CSS**: Utilizamos Tailwind CSS para los estilos
- **Nomenclatura**:
  - Componentes: PascalCase
  - Funciones y variables: camelCase
  - Archivos de componentes: PascalCase
  - Otros archivos JS: camelCase
- **Importaciones**: Organiza las importaciones por tipo (React, componentes, utilidades)
- **Comentarios**: Documenta las funciones complejas y componentes con JSDoc

## Pull Requests

Al enviar un Pull Request:

1. Destino de la PR
  - Cambios normales: hacia `release/x.y.z` correspondiente.
  - Hotfix: hacia `main`.

2. Requisitos de CI (obligatorios en las PRs)
  - Lint: `npm run lint`
  - Tests: `npm run test -- --run`
  - Build: `npm run build` (genera `dist/version.json` y lo valida en CI)

3. Buenas prácticas
  - Títulos con prefijo: `feat:`, `fix:`, `chore:`, `docs:`
  - Vincula issues relacionados y describe el alcance.
  - Mantén los cambios enfocados y con cobertura de tests cuando aplique.

4. Despliegue
  - Al fusionar en `main`, Netlify despliega automáticamente a producción.
  - Las ramas `release/*` no despliegan a producción automáticamente.

## Contacto

Si tienes dudas sobre cómo contribuir:

- Abre un issue en GitHub
- Contacta directamente a través de:
  - Email: angel.ccapb@gmail.com
  - Discord: kubaliski
  - Compañeros de clase que ya hayan contribuido

---

¡Gracias por contribuir a Quiz App y ayudar a mejorar esta herramienta educativa!
