# Guía de Pruebas para Quiz App

Este documento proporciona una guía para ejecutar y crear pruebas para la aplicación Quiz App, utilizando Vitest y React Testing Library.

## Configuración del Entorno de Pruebas

La aplicación usa las siguientes herramientas para pruebas:

- **Vitest**: Framework de pruebas compatible con Vite
- **React Testing Library**: Librería para probar componentes de React
- **JSDOM**: Implementación de DOM en JavaScript para ejecutar pruebas en Node.js

## Ejecutar Pruebas

### Comandos Disponibles

- Para ejecutar todas las pruebas una vez:

  ```bash
  npm test
  ```

- Para ejecutar pruebas en modo observador (útil durante el desarrollo):

  ```bash
  npm run test:watch
  ```

- Para generar un informe de cobertura de código:
  ```bash
  npm run test:coverage
  ```

### Filtrar Pruebas

Puedes ejecutar pruebas específicas usando los patrones de Vitest:

```bash
# Ejecutar pruebas de un archivo específico
npm test -- ModuleSelector.test.jsx

# Ejecutar pruebas que coincidan con un patrón
npm test -- examen

# Ejecutar solo tests de integración
npm test -- integration
```

## Estructura de Pruebas

La estructura de pruebas sigue una organización similar a la del código fuente:

```
src/
├── components/
│   ├── quiz/
│   │   ├── ModuleSelector.jsx
│   │   └── ModuleSelector.test.jsx  # Test unitario para componente
├── pages/
│   ├── QuizPage.jsx
│   └── QuizPage.test.jsx           # Test unitario para página
├── services/
│   ├── quizDataService.js
│   └── quizDataService.test.js     # Test unitario para servicio
├── utils/
│   ├── quizUtils.js
│   └── quizUtils.test.js           # Test unitario para utilidades
└── tests/
    ├── unit/                       # Tests unitarios adicionales
    └── integration/                # Tests de integración
        ├── examenWorkflow.test.jsx # Flujo completo del examen
        ├── routing.test.jsx        # Pruebas de enrutamiento
        └── localStorage.test.js    # Pruebas de almacenamiento local
```

## Tipos de Pruebas

### 1. Pruebas Unitarias

Se centran en probar componentes, funciones o servicios de forma aislada.

```javascript
// Ejemplo: prueba unitaria para un componente
import { render, screen } from "@testing-library/react";
import { MiComponente } from "./MiComponente";

test("muestra el título correcto", () => {
  render(<MiComponente titulo="Ejemplo" />);
  expect(screen.getByText("Ejemplo")).toBeInTheDocument();
});
```

### 2. Pruebas de Integración

Prueban cómo interactúan varios componentes o servicios juntos.

```javascript
// Ejemplo: prueba de integración
test("flujo completo de examen", async () => {
  render(
    <MemoryRouter initialEntries={["/asignaturas/1"]}>
      <App />
    </MemoryRouter>
  );

  // Navegar a la página de módulos
  await waitFor(() => {
    expect(screen.getByText("Módulo de Examen")).toBeInTheDocument();
  });

  // Hacer clic en el botón de examen
  fireEvent.click(screen.getByText("40 preguntas aleatorias de examen"));

  // Verificar la navegación a la página de examen
  expect(mockNavigate).toHaveBeenCalledWith("/quiz/1/examen");
});
```

## Mocks y Stubs

### Cómo Mockear Servicios

Usa `vi.mock()` para reemplazar módulos completos:

```javascript
vi.mock("@services/quizDataService", () => ({
  fetchAsignaturas: vi
    .fn()
    .mockResolvedValue([{ id: 1, nombre: "Asignatura Mock" }]),
  fetchAsignaturaCompleta: vi.fn().mockResolvedValue({
    id: 1,
    nombre: "Asignatura Mock",
    modulos: [],
  }),
}));
```

### Cómo Mockear APIs del Navegador

Para localStorage, sessionStorage, etc.:

```javascript
const mockStorage = {
  getItem: vi.fn().mockImplementation((key) => null),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};

Object.defineProperty(window, "localStorage", {
  value: mockStorage,
});
```

## Pruebas Específicas para Módulos de Examen

Para probar la funcionalidad de módulos de examen, asegúrate de verificar:

1. **ModuleSelector**: Que los módulos de examen se muestren distintivamente (color rojo)
2. **Botón de Examen**: Que aparezca solo cuando hay módulos marcados como examen
3. **QuizPage**: Que el indicador de modo examen y la barra de progreso roja se muestren
4. **Servicio de Datos**: Que `fetchRandomPreguntasByAsignaturaExamen` filtre correctamente las preguntas
5. **Almacenamiento**: Que los resultados de examen se guarden correctamente con su identificador

### Ejemplo: Módulo de Examen

```javascript
test("fetchRandomPreguntasByAsignaturaExamen solo devuelve preguntas de módulos marcados como examen", async () => {
  const preguntas = await fetchRandomPreguntasByAsignaturaExamen(1);

  // Verificar que solo hay preguntas de módulos marcados como examen
  expect(
    preguntas.every((p) =>
      // Suponer que las IDs de las preguntas de examen empiezan con 2xxx
      p.id.toString().startsWith("2")
    )
  ).toBe(true);
});
```

## Cómo Escribir Buenas Pruebas

1. **Nombres descriptivos**: Usa nombres que describan claramente qué se está probando
2. **Estructura AAA**: Arrange (preparar), Act (actuar), Assert (verificar)
3. **Independencia**: Cada prueba debe ser independiente, sin depender del estado de otras
4. **Simplicidad**: Prueba un solo concepto por prueba
5. **Robustez**: Evita pruebas frágiles que dependan de detalles de implementación

## Consideraciones Específicas para Quiz App

- **Componentes con rutas**: Envuélvelos en `<MemoryRouter>` o `<BrowserRouter>` para las pruebas
- **Servicios asíncronos**: Usa `waitFor` o `findBy*` para esperar respuestas asíncronas
- **Interacciones de usuario**: Usa `fireEvent` o `userEvent` para simular clics, entradas, etc.
- **Efectos visuales**: Verifica clases CSS para comprobar cambios visuales (ej. color rojo para exámenes)

## Solución de Problemas Comunes

- **Componentes no se renderizan**: Asegúrate de envolver componentes en los proveedores necesarios (Router, Context)
- **Errores de timeout**: Usa `waitFor` con `timeout` ajustado si es necesario
- **Mocks no funcionan**: Verifica que estás usando `vi.mock()` antes de importar el módulo
- **Errores de DOM**: Asegúrate de que JSDOM está correctamente configurado en `vitest.config.js`
