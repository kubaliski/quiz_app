import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ResultsPage}  from '@pages';

// Mock de react-router-dom
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => vi.fn(),
    useParams: () => ({ asignaturaId: '1', moduloId: 'examen' })
  };
});

// Mock de los servicios
vi.mock('@services/quizDataService', () => ({
  guardarResultadosQuiz: vi.fn().mockResolvedValue({ success: true })
}));

// Mock de los componentes
vi.mock('@components/layout', () => ({
  Layout: ({ children }) => <div data-testid="layout">{children}</div>,
  PageHeader: ({ title, subtitle }) => (
    <header data-testid="page-header">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </header>
  )
}));

vi.mock('@components/quiz', () => ({
  ResultSummary: ({ puntuacion }) => (
    <div data-testid="result-summary">
      <span>{puntuacion.porcentaje}%</span>
      <span>Correctas: {puntuacion.correctas}</span>
      <span>Incorrectas: {puntuacion.incorrectas}</span>
      {puntuacion.penalizacion > 0 && (
        <span>Penalización: {puntuacion.penalizacion}</span>
      )}
    </div>
  ),
  QuestionReview: ({ pregunta, respuestaUsuario }) => (
    <div data-testid="question-review">
      <div>{pregunta.pregunta}</div>
      <div>Respuesta: {respuestaUsuario !== undefined ? respuestaUsuario : 'Sin respuesta'}</div>
    </div>
  )
}));

vi.mock('@components/common', () => ({
  Button: ({ children, onClick }) => <button onClick={onClick}>{children}</button>,
  ErrorMessage: ({ message }) => <div data-testid="error-message">{message}</div>
}));

describe('ResultsPage', () => {
  // Mock para sessionStorage
  const mockSessionStorage = {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn()
  };

  beforeEach(() => {
    vi.clearAllMocks();
    // Restaurar el comportamiento por defecto de sessionStorage.getItem
    mockSessionStorage.getItem.mockImplementation((key) => {
      if (key === 'quiz_preguntas') {
        return JSON.stringify([
          {
            id: 2001,
            pregunta: 'Pregunta examen 1',
            opciones: ['Opción A', 'Opción B', 'Opción C', 'Opción D'],
            respuestaCorrecta: 1
          },
          {
            id: 2002,
            pregunta: 'Pregunta examen 2',
            opciones: ['Opción A', 'Opción B', 'Opción C', 'Opción D'],
            respuestaCorrecta: 2
          }
        ]);
      } else if (key === 'quiz_respuestas') {
        return JSON.stringify({
          2001: 1, // Correcta
          2002: 1  // Incorrecta
        });
      } else if (key === 'quiz_asignatura') {
        return JSON.stringify({ id: 1, nombre: 'Asignatura de Test' });
      } else if (key === 'quiz_modulo') {
        return JSON.stringify({ id: 'examen', nombre: 'Preguntas de examen', esExamen: true });
      }
      return null;
    });

    // Asignar el mock a window.sessionStorage
    Object.defineProperty(window, 'sessionStorage', {
      value: mockSessionStorage
    });
  });

  it('muestra correctamente los resultados de un examen', async () => {
    render(
      <MemoryRouter>
        <ResultsPage />
      </MemoryRouter>
    );

    // Verificar que se muestra el encabezado de resultados
    expect(screen.getByText('Resultados del Quiz')).toBeInTheDocument();

    // Verificar que se muestra el subtítulo con la información del examen
    expect(screen.getByText('Asignatura de Test - Preguntas de examen')).toBeInTheDocument();

    // Verificar que el resumen de resultados se muestra correctamente
    const resultSummary = screen.getByTestId('result-summary');
    expect(resultSummary).toBeInTheDocument();
    expect(screen.getByText('50%')).toBeInTheDocument();
    expect(screen.getByText('Correctas: 1')).toBeInTheDocument();
    expect(screen.getByText('Incorrectas: 1')).toBeInTheDocument();

    // Verificar que se muestran las revisiones de preguntas
    const questionReviews = screen.getAllByTestId('question-review');
    expect(questionReviews).toHaveLength(2);
    expect(screen.getByText('Pregunta examen 1')).toBeInTheDocument();
    expect(screen.getByText('Pregunta examen 2')).toBeInTheDocument();

    // Verificar que se muestran los botones de acción
    expect(screen.getByText('Reintentar Quiz')).toBeInTheDocument();
    expect(screen.getByText('Volver a módulos')).toBeInTheDocument();
  });

  it('muestra error cuando no hay resultados disponibles', async () => {
    // Modificar el mock para simular que no hay resultados
    mockSessionStorage.getItem.mockImplementation(() => null);

    render(
      <MemoryRouter>
        <ResultsPage />
      </MemoryRouter>
    );

    // Verificar que se muestra el mensaje de error
    expect(screen.getByTestId('error-message')).toBeInTheDocument();
    expect(screen.getByText('Volver al inicio')).toBeInTheDocument();
  });

  it('muestra correctamente la penalización cuando aplica', async () => {
    // Modificar el mock para simular más respuestas incorrectas (que generen penalización)
    mockSessionStorage.getItem.mockImplementation((key) => {
      if (key === 'quiz_preguntas') {
        return JSON.stringify([
          { id: 1, pregunta: 'P1', respuestaCorrecta: 0 },
          { id: 2, pregunta: 'P2', respuestaCorrecta: 0 },
          { id: 3, pregunta: 'P3', respuestaCorrecta: 0 },
          { id: 4, pregunta: 'P4', respuestaCorrecta: 0 },
          { id: 5, pregunta: 'P5', respuestaCorrecta: 0 },
          { id: 6, pregunta: 'P6', respuestaCorrecta: 0 },
        ]);
      } else if (key === 'quiz_respuestas') {
        return JSON.stringify({
          1: 0, // Correcta
          2: 0, // Correcta
          3: 0, // Correcta
          4: 1, // Incorrecta
          5: 1, // Incorrecta
          6: 1  // Incorrecta
        });
      } else if (key === 'quiz_asignatura') {
        return JSON.stringify({ id: 1, nombre: 'Asignatura Test' });
      } else if (key === 'quiz_modulo') {
        return JSON.stringify({ id: 'examen', nombre: 'Examen', esExamen: true });
      }
      return null;
    });

    render(
      <MemoryRouter>
        <ResultsPage />
      </MemoryRouter>
    );

    // Verificar que se muestra la penalización (3 incorrectas = 1 de penalización)
    expect(screen.getByText('Penalización: 1')).toBeInTheDocument();
  });
});