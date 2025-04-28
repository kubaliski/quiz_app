import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import {QuizPage} from '@pages';

// Mock de los servicios
vi.mock('@services/quizDataService', () => ({
  fetchAsignaturaCompleta: vi.fn().mockResolvedValue({
    id: 1,
    nombre: 'Asignatura de Prueba',
    modulos: []
  }),
  fetchModulo: vi.fn().mockResolvedValue({
    id: 101,
    nombre: 'Módulo de Prueba',
    esExamen: false,
    preguntas: []
  }),
  fetchRandomPreguntasByAsignatura: vi.fn().mockResolvedValue([]),
  fetchRandomPreguntasByAsignaturaExamen: vi.fn().mockResolvedValue([])
}));

// Mock del hook useNavigate
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => vi.fn(),
  };
});

// Para evitar errores con el componente Dialog
vi.mock('@components/common', () => ({
  LoadingSpinner: () => <div data-testid="loading-spinner">Cargando...</div>,
  ErrorMessage: ({ message }) => <div data-testid="error-message">{message}</div>,
  Button: ({ children, onClick }) => <button onClick={onClick}>{children}</button>,
  ProgressBar: ({ progreso, className }) => (
    <div data-testid="progress-bar" className={className} style={{ width: `${progreso}%` }}>
      {progreso}%
    </div>
  ),
  Dialog: ({ open, title, message, onConfirm, onCancel }) => (
    open ? (
      <div data-testid="dialog">
        <h2>{title}</h2>
        <p>{message}</p>
        <button onClick={onConfirm}>Confirmar</button>
        <button onClick={onCancel}>Cancelar</button>
      </div>
    ) : null
  )
}));

// Mock de los componentes de quiz
vi.mock('@components/quiz', () => ({
  QuestionCard: ({ pregunta }) => <div data-testid="question-card">{pregunta.pregunta}</div>,
  QuizNavigation: () => <div data-testid="quiz-navigation">Navegación</div>
}));

// Mock de los componentes de layout
vi.mock('@components/layout', () => ({
  Layout: ({ children }) => <div data-testid="layout">{children}</div>,
  PageHeader: ({ title }) => <header data-testid="page-header">{title}</header>
}));

describe('QuizPage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('muestra el indicador de modo examen cuando se está realizando un examen', async () => {
    render(
      <MemoryRouter initialEntries={['/quiz/1/examen']}>
        <Routes>
          <Route path="/quiz/:asignaturaId/:moduloId" element={<QuizPage tipo="examen" />} />
        </Routes>
      </MemoryRouter>
    );

    // Verificar que el indicador de modo examen aparece
    // Debe esperar a que los datos se carguen
    const modoExamenIndicator = await screen.findByText('Modo examen');
    expect(modoExamenIndicator).toBeInTheDocument();
  });

  it('la barra de progreso tiene el color correcto en modo examen', async () => {
    render(
      <MemoryRouter initialEntries={['/quiz/1/examen']}>
        <Routes>
          <Route path="/quiz/:asignaturaId/:moduloId" element={<QuizPage tipo="examen" />} />
        </Routes>
      </MemoryRouter>
    );

    // Verificar que la barra de progreso tiene la clase de color rojo
    const progressBar = await screen.findByTestId('progress-bar');
    expect(progressBar).toHaveClass('bg-red-600');
  });

  it('la barra de progreso tiene el color normal en modo regular', async () => {
    render(
      <MemoryRouter initialEntries={['/quiz/1/101']}>
        <Routes>
          <Route path="/quiz/:asignaturaId/:moduloId" element={<QuizPage />} />
        </Routes>
      </MemoryRouter>
    );

    // Verificar que la barra de progreso tiene la clase de color indigo (normal)
    const progressBar = await screen.findByTestId('progress-bar');
    expect(progressBar).toHaveClass('bg-indigo-600');
  });
});