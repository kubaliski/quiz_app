import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import {ModuleSelector} from '@components/quiz';

// Mock de useNavigate
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => vi.fn(),
  };
});

describe('ModuleSelector', () => {
  // Módulos de prueba
  const modulos = [
    {
      id: 101,
      nombre: 'Módulo Regular',
      descripcion: 'Un módulo normal',
      asignaturaId: 1,
      esExamen: false,
      preguntas: [{ id: 1 }, { id: 2 }]
    },
    {
      id: 102,
      nombre: 'Módulo de Examen',
      descripcion: 'Un módulo de examen',
      asignaturaId: 1,
      esExamen: true,
      preguntas: [{ id: 3 }, { id: 4 }]
    }
  ];

  it('muestra correctamente un módulo marcado como examen con estilo distintivo', () => {
    render(
      <BrowserRouter>
        <ModuleSelector modulos={modulos} asignaturaId={1} />
      </BrowserRouter>
    );

    // Verificar que ambos módulos se muestran
    expect(screen.getByText('Módulo Regular')).toBeInTheDocument();
    expect(screen.getByText('Módulo de Examen')).toBeInTheDocument();

    // Obtener los botones de cada módulo
    const botonModuloRegular = screen.getByText('Módulo Regular').closest('button');
    const botonModuloExamen = screen.getByText('Módulo de Examen').closest('button');

    // Verificar que el módulo de examen tiene la clase de estilo rojo
    expect(botonModuloExamen).toHaveClass('bg-red-600');
    expect(botonModuloExamen).toHaveClass('hover:bg-red-700');

    // Verificar que el módulo regular no tiene la clase de estilo rojo
    expect(botonModuloRegular).toHaveClass('bg-indigo-600');
    expect(botonModuloRegular).toHaveClass('hover:bg-indigo-700');
  });

  it('muestra el botón de 30 preguntas aleatorias de examen cuando hay módulos de examen', () => {
    render(
      <BrowserRouter>
        <ModuleSelector modulos={modulos} asignaturaId={1} />
      </BrowserRouter>
    );

    // Verificar que el botón de examen está presente
    expect(screen.getByText('30 preguntas aleatorias de test de examen')).toBeInTheDocument();
  });

  it('no muestra el botón de examen cuando no hay módulos de examen', () => {
    const modulosSinExamen = [
      {
        id: 101,
        nombre: 'Módulo Regular 1',
        descripcion: 'Un módulo normal',
        asignaturaId: 1,
        esExamen: false,
        preguntas: [{ id: 1 }, { id: 2 }]
      },
      {
        id: 103,
        nombre: 'Módulo Regular 2',
        descripcion: 'Otro módulo normal',
        asignaturaId: 1,
        esExamen: false,
        preguntas: [{ id: 5 }, { id: 6 }]
      }
    ];

    render(
      <BrowserRouter>
        <ModuleSelector modulos={modulosSinExamen} asignaturaId={1} />
      </BrowserRouter>
    );

    // Verificar que el botón de examen NO está presente
    expect(screen.queryByText('30 preguntas aleatorias de test de examen')).not.toBeInTheDocument();
  });
});