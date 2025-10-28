import { describe, it, expect } from 'vitest';
import {
  shuffleArray,
  shuffleQuestionOptions,
  formatPorcentaje,
  getColorClasePorcentaje,
  getBackgroundColorClass,
  esRespuestaCorrecta,
  calcularPuntuacion
} from '@utils/quizUtils';

describe('quizUtils', () => {
  describe('shuffleArray', () => {
    it('devuelve un array con los mismos elementos', () => {
      const array = [1, 2, 3, 4, 5];
      const shuffled = shuffleArray(array);

      expect(shuffled).toHaveLength(array.length);
      expect(shuffled.sort()).toEqual(array.sort());
    });

    it('no modifica el array original', () => {
      const array = [1, 2, 3, 4, 5];
      const originalArray = [...array];
      shuffleArray(array);

      expect(array).toEqual(originalArray);
    });
  });

  describe('shuffleQuestionOptions', () => {
    it('mezcla las opciones y actualiza el índice de respuesta correcta', () => {
      const pregunta = {
        id: 1,
        pregunta: '¿Qué es React?',
        opciones: ['A', 'B', 'C', 'D'],
        respuestaCorrecta: 2 // La respuesta correcta es 'C'
      };

      const mezclada = shuffleQuestionOptions(pregunta);

      // Verificar que la nueva respuesta correcta apunta a la misma opción original
      expect(mezclada.opciones[mezclada.respuestaCorrecta]).toBe('C');
    });
  });

  describe('formatPorcentaje', () => {
    it('formatea correctamente un porcentaje', () => {
      expect(formatPorcentaje(75.5)).toBe('76%');
      expect(formatPorcentaje(75.4)).toBe('75%');
      expect(formatPorcentaje(0)).toBe('0%');
      expect(formatPorcentaje(100)).toBe('100%');
    });
  });

  describe('getColorClasePorcentaje', () => {
    it('devuelve la clase correcta según el porcentaje', () => {
      expect(getColorClasePorcentaje(75)).toBe('text-green-600 dark:text-green-400');
      expect(getColorClasePorcentaje(60)).toBe('text-yellow-600 dark:text-yellow-400');
      expect(getColorClasePorcentaje(45)).toBe('text-red-600 dark:text-red-400');
    });
  });

  describe('getBackgroundColorClass', () => {
    it('devuelve la clase de fondo correcta según el porcentaje', () => {
      expect(getBackgroundColorClass(75)).toBe('bg-green-500 dark:bg-green-600');
      expect(getBackgroundColorClass(60)).toBe('bg-yellow-500 dark:bg-yellow-600');
      expect(getBackgroundColorClass(45)).toBe('bg-red-500 dark:bg-red-600');
    });
  });

  describe('esRespuestaCorrecta', () => {
    it('verifica correctamente si una respuesta es correcta', () => {
      const pregunta = {
        respuestaCorrecta: 2
      };

      expect(esRespuestaCorrecta(pregunta, 2)).toBe(true);
      expect(esRespuestaCorrecta(pregunta, 1)).toBe(false);
      expect(esRespuestaCorrecta(pregunta, undefined)).toBe(false);
    });
  });

  describe('calcularPuntuacion', () => {
  it('calcula correctamente la puntuación sin penalización (máximo 10 puntos)', () => {
      const preguntas = [
        { id: 1, respuestaCorrecta: 0 },
        { id: 2, respuestaCorrecta: 1 },
        { id: 3, respuestaCorrecta: 2 },
        { id: 4, respuestaCorrecta: 1 }
      ];

      const respuestas = {
        1: 0, // Correcta
        2: 1, // Correcta
        3: 2, // Correcta
        4: 1  // Correcta
      };

      const puntuacion = calcularPuntuacion(preguntas, respuestas);

  // Nueva lógica dinámica: total=4 => correcta=10/4=2.5; 4 correctas => 10 puntos
      expect(puntuacion.correctas).toBe(4);
      expect(puntuacion.incorrectas).toBe(0);

      // En lugar de verificar el valor exacto, verificamos que Math.abs() del valor es 0
      // Esto maneja tanto +0 como -0
      expect(Math.abs(puntuacion.puntosPorIncorrectas)).toBe(0);

      expect(puntuacion.total).toBe(4);
      expect(puntuacion.porcentaje).toBe(100); // 10/10 = 100%
      expect(puntuacion.puntosTotales).toBeCloseTo(10, 6); // 4 * 2.5 = 10
      expect(puntuacion.puntosPorCorrectas).toBeCloseTo(10, 6); // 4 * 2.5 = 10
    });

    it('calcula correctamente la puntuación con penalización (penalización 1/3)', () => {
      const preguntas = [
        { id: 1, respuestaCorrecta: 0 },
        { id: 2, respuestaCorrecta: 1 },
        { id: 3, respuestaCorrecta: 2 },
        { id: 4, respuestaCorrecta: 1 },
        { id: 5, respuestaCorrecta: 3 },
        { id: 6, respuestaCorrecta: 2 },
        { id: 7, respuestaCorrecta: 1 },
        { id: 8, respuestaCorrecta: 0 },
        { id: 9, respuestaCorrecta: 2 }
      ];

      const respuestas = {
        1: 0, // Correcta
        2: 1, // Correcta
        3: 2, // Correcta
        4: 0, // Incorrecta
        5: 0, // Incorrecta
        6: 0, // Incorrecta
        7: 1, // Correcta
        8: 0, // Correcta
        9: 3  // Incorrecta
      };

      const puntuacion = calcularPuntuacion(preguntas, respuestas);

  // Nueva lógica dinámica (total=9):
  // correcta = 10/9 ≈ 1.1111; incorrecta = -(10/9)/3 ≈ -0.37037
  // 5 correctas => ≈ 5.5556; 4 incorrectas => ≈ -1.4815; total ≈ 4.0741

      expect(puntuacion.correctas).toBe(5); // 5 respuestas correctas
      expect(puntuacion.incorrectas).toBe(4); // 4 respuestas incorrectas
      expect(puntuacion.total).toBe(9); // 9 preguntas en total

      // El porcentaje redondeado es 41%
      expect(puntuacion.porcentaje).toBe(41);

      // Comprobamos que los puntos son correctos (con cierta tolerancia por redondeo)
      expect(puntuacion.puntosPorCorrectas).toBeCloseTo(5 * (10/9), 4);
      expect(puntuacion.puntosPorIncorrectas).toBeCloseTo(4 * (-(10/9)/3), 4);
      expect(puntuacion.puntosTotales).toBeCloseTo((5 * (10/9)) + (4 * (-(10/9)/3)), 4);
    });

    it('nunca devuelve una puntuación negativa', () => {
      const preguntas = [
        { id: 1, respuestaCorrecta: 0 },
        { id: 2, respuestaCorrecta: 1 },
        { id: 3, respuestaCorrecta: 2 }
      ];

      const respuestas = {
        1: 1, // Incorrecta
        2: 2, // Incorrecta
        3: 0  // Incorrecta
      };

      const puntuacion = calcularPuntuacion(preguntas, respuestas);

  // Nueva lógica dinámica (total=3):
  // correcta = 10/3 ≈ 3.3333; incorrecta = -(10/3)/3 ≈ -1.1111
  // 0 correctas => 0; 3 incorrectas => ≈ -3.3333; total se ajusta a 0

      expect(puntuacion.correctas).toBe(0);
      expect(puntuacion.incorrectas).toBe(3);
      expect(puntuacion.total).toBe(3);
      expect(puntuacion.porcentaje).toBe(0);

      // Usar Math.abs para verificar que es 0, ya sea +0 o -0
      expect(Math.abs(puntuacion.puntosPorCorrectas)).toBe(0);
      expect(puntuacion.puntosPorIncorrectas).toBeCloseTo(-10/3, 4);
      expect(Math.abs(puntuacion.puntosTotales)).toBe(0); // Se ajusta a 0 (nunca negativo)
    });
  });
});