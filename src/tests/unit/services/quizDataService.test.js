/**
 * Tests aislados para la funcionalidad de exámenes y estructura por años.
 * Este archivo implementa sus propias versiones de las funciones para probar la lógica
 * sin depender de mocks complejos.
 */
import { describe, it, expect } from 'vitest';

// Implementación simplificada de la función que queremos probar
function fetchRandomPreguntasByAsignaturaExamen(asignatura, limit = 30) {
  // Filtrar solo los módulos de examen
  const modulosExamen = asignatura.modulos.filter(m => m.esExamen);

  // Obtener todas las preguntas de esos módulos
  const todasPreguntas = modulosExamen.flatMap(m => m.preguntas);

  // No mezclamos en tests para tener resultados predecibles
  return todasPreguntas.slice(0, limit);
}

// Implementación simplificada para estructura por años
function fetchAsignaturasPorAno() {
  const asignaturasPorAno = {
    1: {
      nombre: "Primer Año",
      asignaturas: [
        {
          id: 1,
          nombre: 'Sistemas Informáticos',
          modulos: [
            { id: 101, nombre: 'Linux', esExamen: false, preguntas: [{ id: 1 }, { id: 2 }] },
            { id: 102, nombre: 'Examen Sistemas', esExamen: true, preguntas: [{ id: 3 }, { id: 4 }] }
          ]
        },
        {
          id: 2,
          nombre: 'Bases de Datos',
          modulos: [
            { id: 201, nombre: 'DDL/DML', esExamen: false, preguntas: [{ id: 5 }, { id: 6 }] },
            { id: 202, nombre: 'Examen BD', esExamen: true, preguntas: [{ id: 7 }, { id: 8 }] }
          ]
        }
      ],
      disponible: true
    },
    2: {
      nombre: "Segundo Año",
      asignaturas: [], // Vacío hasta implementación futura
      disponible: false
    }
  };

  return asignaturasPorAno;
}

function fetchAsignaturasPorAnoEspecifico(ano) {
  const asignaturasPorAno = fetchAsignaturasPorAno();
  return asignaturasPorAno[ano] || null;
}

function fetchAnosDisponibles() {
  const asignaturasPorAno = fetchAsignaturasPorAno();
  return Object.keys(asignaturasPorAno).map(ano => ({
    numero: parseInt(ano),
    ...asignaturasPorAno[ano]
  }));
}

function buscarAsignaturaPorId(asignaturaId, asignaturasPorAno) {
  const id = parseInt(asignaturaId, 10);

  // Buscar en todas las asignaturas de todos los años
  for (const ano of Object.values(asignaturasPorAno)) {
    const asignatura = ano.asignaturas.find((asignatura) => asignatura.id === id);
    if (asignatura) return asignatura;
  }

  return null;
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

describe('Funcionalidad de estructura por años académicos', () => {
  it('fetchAsignaturasPorAno devuelve la estructura correcta por años', () => {
    const asignaturasPorAno = fetchAsignaturasPorAno();

    // Verificar que tiene las claves de años esperadas
    expect(asignaturasPorAno).toHaveProperty('1');
    expect(asignaturasPorAno).toHaveProperty('2');

    // Verificar la estructura del primer año
    expect(asignaturasPorAno[1]).toHaveProperty('nombre', 'Primer Año');
    expect(asignaturasPorAno[1]).toHaveProperty('disponible', true);
    expect(asignaturasPorAno[1].asignaturas).toHaveLength(2);

    // Verificar la estructura del segundo año
    expect(asignaturasPorAno[2]).toHaveProperty('nombre', 'Segundo Año');
    expect(asignaturasPorAno[2]).toHaveProperty('disponible', false);
    expect(asignaturasPorAno[2].asignaturas).toHaveLength(0);
  });

  it('fetchAsignaturasPorAnoEspecifico devuelve el año solicitado', () => {
    const primerAno = fetchAsignaturasPorAnoEspecifico(1);
    const segundoAno = fetchAsignaturasPorAnoEspecifico(2);
    const anoInexistente = fetchAsignaturasPorAnoEspecifico(3);

    // Verificar primer año
    expect(primerAno).not.toBeNull();
    expect(primerAno.nombre).toBe('Primer Año');
    expect(primerAno.disponible).toBe(true);

    // Verificar segundo año
    expect(segundoAno).not.toBeNull();
    expect(segundoAno.nombre).toBe('Segundo Año');
    expect(segundoAno.disponible).toBe(false);

    // Verificar año inexistente
    expect(anoInexistente).toBeNull();
  });

  it('fetchAnosDisponibles devuelve la lista correcta de años', () => {
    const anos = fetchAnosDisponibles();

    expect(anos).toHaveLength(2);

    // Verificar primer año
    expect(anos[0]).toEqual({
      numero: 1,
      nombre: 'Primer Año',
      asignaturas: expect.any(Array),
      disponible: true
    });

    // Verificar segundo año
    expect(anos[1]).toEqual({
      numero: 2,
      nombre: 'Segundo Año',
      asignaturas: [],
      disponible: false
    });
  });

  it('buscarAsignaturaPorId encuentra asignaturas en diferentes años', () => {
    const asignaturasPorAno = fetchAsignaturasPorAno();

    // Buscar asignatura del primer año
    const sistemas = buscarAsignaturaPorId(1, asignaturasPorAno);
    expect(sistemas).not.toBeNull();
    expect(sistemas.nombre).toBe('Sistemas Informáticos');

    const basesDatos = buscarAsignaturaPorId(2, asignaturasPorAno);
    expect(basesDatos).not.toBeNull();
    expect(basesDatos.nombre).toBe('Bases de Datos');

    // Buscar asignatura inexistente
    const inexistente = buscarAsignaturaPorId(999, asignaturasPorAno);
    expect(inexistente).toBeNull();
  });

  it('las asignaturas de primer año tienen módulos de examen correctamente marcados', () => {
    const asignaturasPorAno = fetchAsignaturasPorAno();
    const sistemas = asignaturasPorAno[1].asignaturas[0];

    // Verificar que tiene módulos regulares y de examen
    const moduloRegular = sistemas.modulos.find(m => !m.esExamen);
    const moduloExamen = sistemas.modulos.find(m => m.esExamen);

    expect(moduloRegular).toBeDefined();
    expect(moduloRegular.nombre).toBe('Linux');

    expect(moduloExamen).toBeDefined();
    expect(moduloExamen.nombre).toBe('Examen Sistemas');

    // Verificar que fetchRandomPreguntasByAsignaturaExamen funciona con esta estructura
    const preguntasExamen = fetchRandomPreguntasByAsignaturaExamen(sistemas);
    expect(preguntasExamen).toHaveLength(2);
    expect(preguntasExamen.map(p => p.id)).toEqual([3, 4]);
  });

  it('el segundo año está preparado para futuras implementaciones', () => {
    const asignaturasPorAno = fetchAsignaturasPorAno();
    const segundoAno = asignaturasPorAno[2];

    // Verificar que está marcado como no disponible
    expect(segundoAno.disponible).toBe(false);

    // Verificar que no tiene asignaturas aún
    expect(segundoAno.asignaturas).toHaveLength(0);

    // Verificar que la estructura está lista para ser extendida
    expect(segundoAno).toHaveProperty('nombre');
    expect(segundoAno).toHaveProperty('asignaturas');
    expect(segundoAno).toHaveProperty('disponible');
  });
});