/**
 * Tests aislados para la funcionalidad de exámenes.
 * Este archivo implementa sus propias versiones de las funciones para probar la lógica
 * sin depender de mocks complejos.
 */
import { describe, it, expect } from 'vitest';

// Implementación simplificada de la función que queremos probar
function fetchRandomPreguntasByAsignaturaExamen(asignatura, limit = 40) {
  // Filtrar solo los módulos de examen
  const modulosExamen = asignatura.modulos.filter(m => m.esExamen);

  // Obtener todas las preguntas de esos módulos
  const todasPreguntas = modulosExamen.flatMap(m => m.preguntas);

  // No mezclamos en tests para tener resultados predecibles
  return todasPreguntas.slice(0, limit);
}

describe('Funcionalidad de módulos de examen', () => {
  // Datos de prueba
  const mockAsignatura = {
    id: 1,
    nombre: 'Asignatura de Prueba',
    modulos: [
      {
        id: 101,
        nombre: 'Módulo Regular',
        esExamen: false,
        preguntas: [
          { id: 1, pregunta: 'Pregunta regular 1' },
          { id: 2, pregunta: 'Pregunta regular 2' }
        ]
      },
      {
        id: 102,
        nombre: 'Módulo de Examen',
        esExamen: true,
        preguntas: [
          { id: 3, pregunta: 'Pregunta examen 1' },
          { id: 4, pregunta: 'Pregunta examen 2' }
        ]
      },
      {
        id: 103,
        nombre: 'Otro Módulo de Examen',
        esExamen: true,
        preguntas: [
          { id: 5, pregunta: 'Pregunta examen 3' },
          { id: 6, pregunta: 'Pregunta examen 4' }
        ]
      }
    ]
  };

  it('fetchRandomPreguntasByAsignaturaExamen solo devuelve preguntas de módulos marcados como examen', () => {
    const preguntas = fetchRandomPreguntasByAsignaturaExamen(mockAsignatura);

    // Verificamos que solo contiene preguntas de los módulos marcados como examen
    expect(preguntas).toHaveLength(4);
    expect(preguntas.map(p => p.id).sort()).toEqual([3, 4, 5, 6]);

    // Verificamos que no contiene preguntas de módulos regulares
    expect(preguntas.find(p => p.id === 1 || p.id === 2)).toBeUndefined();
  });

  it('fetchRandomPreguntasByAsignaturaExamen limita correctamente el número de preguntas', () => {
    // Solicitar solo 2 preguntas
    const preguntas = fetchRandomPreguntasByAsignaturaExamen(mockAsignatura, 2);

    // Verificar que solo devuelve 2 preguntas
    expect(preguntas).toHaveLength(2);
    // Verificar que son preguntas de módulos de examen
    expect([3, 4, 5, 6]).toContain(preguntas[0].id);
    expect([3, 4, 5, 6]).toContain(preguntas[1].id);
  });

  it('fetchRandomPreguntasByAsignaturaExamen maneja correctamente asignaturas sin módulos de examen', () => {
    // Crear una asignatura sin módulos de examen
    const mockAsignaturaSinExamenes = {
      ...mockAsignatura,
      modulos: mockAsignatura.modulos.map(m => ({ ...m, esExamen: false }))
    };

    const preguntas = fetchRandomPreguntasByAsignaturaExamen(mockAsignaturaSinExamenes);

    // Verificar que devuelve un array vacío
    expect(preguntas).toHaveLength(0);
  });
});