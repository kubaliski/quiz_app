import { useEffect, useCallback } from 'react';
import { useQuizContext } from './useQuizContext';

/**
 * Hook para atajos de teclado de respuesta.
 * Acepta un objeto con callbacks: { onSelectAnswer, onToggleFavorite }
 */
export function useAnswerShortcuts({ onSelectAnswer, onToggleFavorite } = {}) {
  const { preguntaActiva, dialogOpen, cargando, setRespuesta } = useQuizContext();

  const handleKey = useCallback((e) => {
    if (dialogOpen || cargando || !preguntaActiva) return;

    const active = document.activeElement;
    const tag = active?.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || active?.isContentEditable) return;

    const key = e.key;
    // Aceptar 0-9 (incluye Numpad cuando numlock está activo, que suele devolver '0'..'9')
    if (!/^[0-9]$/.test(key)) return;

    e.preventDefault();

    if (key === '0') {
      // Toggle favorito
      if (typeof onToggleFavorite === 'function') {
        onToggleFavorite();
      }
      return;
    }

    // 1..9 -> seleccionar opción (índice 0..8)
    const idx = parseInt(key, 10) - 1;
    if (!preguntaActiva.opciones || idx < 0 || idx >= preguntaActiva.opciones.length) return;

    if (typeof onSelectAnswer === 'function') {
      onSelectAnswer(preguntaActiva.id, idx);
    } else {
      setRespuesta(preguntaActiva.id, idx);
    }
  }, [dialogOpen, cargando, preguntaActiva, onSelectAnswer, onToggleFavorite, setRespuesta]);

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [handleKey]);
}

export default useAnswerShortcuts;