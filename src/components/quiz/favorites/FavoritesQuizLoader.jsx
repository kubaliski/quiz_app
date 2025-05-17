/**
 * Componente de loader personalizado para cargar quiz de favoritos.
 * Se encarga de cargar preguntas favoritas y prepararlas para el quiz.
 * Adaptado para usar con el sistema de reducer.
 *
 * @param {Object} props - Propiedades del componente
 * @param {Object} props.quiz - Objeto con información del quiz
 * @returns {JSX.Element} Componente FavoritesQuizLoader
 */
import { useEffect, useRef } from 'react';
import { LoadingSpinner } from '@components/common';
import { startFavoritesQuiz } from '@services/favoritesService';
import { useQuizContext } from '@hooks';

export default function FavoritesQuizLoader({ quiz }) {
  const mounted = useRef(true);
  const {
    setCargando,
    setPreguntas,
    setAsignatura,
    setTipoQuiz,
    setError
  } = useQuizContext();

  // Efecto para cargar preguntas favoritas
  useEffect(() => {
    mounted.current = true;
    setCargando(true);

    const loadFavoritesQuiz = async () => {
      try {
        // Verificar que tenemos un ID de asignatura válido
        if (!quiz.asignaturaId) {
          throw new Error('ID de asignatura no válido');
        }

        // Iniciar quiz con preguntas favoritas
        const result = await startFavoritesQuiz(quiz.asignaturaId);

        if (!mounted.current) return;

        if (result.success && result.preguntas && result.preguntas.length > 0) {
          // Actualizar el estado con los datos cargados
          setPreguntas(result.preguntas);

          // Establecer información de asignatura
          setAsignatura(result.asignatura || {
            id: quiz.asignaturaId,
            nombre: quiz.asignaturaNombre || 'Preguntas favoritas'
          });

          // Establecer el tipo de quiz como 'favoritos'
          setTipoQuiz('favoritos');
          setCargando(false);

          // Limpiar datos de sessionStorage
          sessionStorage.removeItem('start_favorites_quiz');
          sessionStorage.removeItem('favorites_quiz_asignatura_id');
          sessionStorage.removeItem('favorites_quiz_asignatura_nombre');
          sessionStorage.removeItem('favorites_quiz_random');
          sessionStorage.removeItem('favorites_quiz_limit');
        } else {
          // Establecer error
          setError(result.message || 'No se pudieron cargar las preguntas favoritas');
          setCargando(false);
        }
      } catch (error) {
        console.error('Error al cargar quiz de favoritos:', error);
        if (mounted.current) {
          setError('Error al cargar el quiz de preguntas favoritas: ' + (error.message || ''));
          setCargando(false);
        }
      }
    };

    loadFavoritesQuiz();

    return () => {
      mounted.current = false;
    };
  }, [quiz, setCargando, setPreguntas, setAsignatura, setTipoQuiz, setError]);

  return (
    <div className="py-12 flex flex-col items-center">
      <LoadingSpinner />
      <p className="text-gray-600 dark:text-gray-300 mt-4">Cargando preguntas favoritas...</p>
    </div>
  );
}