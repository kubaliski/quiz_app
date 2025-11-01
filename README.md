# Quiz App

Aplicación educativa de preguntas y respuestas organizada por asignaturas y módulos. Construida con React + Vite y Tailwind CSS, con soporte PWA para instalación y uso offline.

> Proyecto sin ánimo de lucro y con fines exclusivamente educativos.

## Características

- Organización por asignaturas y módulos
- Preguntas/respuestas con orden aleatorio
- Recursos en preguntas (imágenes y bloques de código)
- Modo oscuro/claro y diseño responsive
- Resultados con explicaciones e historial
- Módulos marcados como “examen” y práctica específica
- PWA instalable (escritorio y móvil) y funcionamiento offline

## Requisitos

- Node.js 18+ (recomendado)
- npm (o pnpm/yarn)

## Empezar

```bash
# Instalar dependencias
npm install

# Entorno de desarrollo (http://localhost:5173 por defecto)
npm run dev

# Build de producción y vista previa
npm run build
npm run preview
```

### Scripts disponibles

- `npm run dev` — servidor de desarrollo
- `npm run build` — build de producción (Vite)
- `npm run preview` — vista previa del build
- `npm run lint` — lint del proyecto
- `npm test` — ejecutar pruebas (Vitest)
- `npm run test:watch` — pruebas en modo observador
- `npm run test:coverage` — informe de cobertura

## Estructura (resumen)

```
public/           # estáticos (imágenes, manifest, iconos PWA)
src/
   components/     # UI (common, layout, quiz, ...)
   context/        # contextos de React
   data/           # asignaturas, módulos y preguntas
   hooks/          # hooks personalizados
   pages/          # páginas de la app
   services/       # servicios (datos, favoritos, SW)
   utils/          # utilidades
```

## PWA

- Configuración en `vite.config.js` (VitePWA). Iconos y manifiesto en `public/`.
- Funciona offline y es instalable. Para cambios en iconos/manifest, edita `public/site.webmanifest` y los recursos de `public/`.

## Guía para añadir contenido

La guía completa para crear asignaturas, módulos y preguntas, y para añadir recursos a las preguntas está en:

- [docs/adding-content.md](./docs/adding-content.md)

## Documentación y guías

- Contribución: [CONTRIBUTING.md](./CONTRIBUTING.md)
- Pruebas: [TESTING.md](./docs/TESTING.md)
- Seguridad: [SECURITY.md](./SECURITY.md)
- Código de Conducta: [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)

## Despliegue

El proyecto usa Vite para el build y Netlify para despliegue automático desde `main`. Revisa `netlify.toml` y los scripts de verificación (`scripts/verify-version.js`, `netlify-postbuild.js`).

## Licencia y contacto

- Licencia: ver [LICENSE](./LICENSE)
- Dudas o propuestas: abre un issue o revisa los contactos en [CONTRIBUTING.md](./CONTRIBUTING.md)


