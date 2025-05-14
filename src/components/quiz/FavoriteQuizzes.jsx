/**
 * Componente para mostrar y gestionar los quizzes de preguntas favoritas.
 * Permite ver, iniciar tests con preguntas favoritas y eliminar colecciones de favoritos.
 * Incluye opción para generar test con 40 preguntas aleatorias cuando hay más de 40 preguntas.
 *
 * @component
 * @returns {JSX.Element} Componente FavoriteQuizzes renderizado
 */
import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@components/common';
import Modal from '@components/common/Modal';
import { formatTimestamp } from '@utils/quizUtils';
import {
  getAllFavoriteAsignaturas,
  getFavoritesByAsignatura,
  clearFavorites
} from '@services/favoritesService';
import { showToast } from '@utils/toastUtils';

export default function FavoriteQuizzes() {
  const [showModal, setShowModal] = useState(false);
  const [favoriteQuizzes, setFavoriteQuizzes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [selectedDetail, setSelectedDetail] = useState(null);
  const [detailItems, setDetailItems] = useState([]);
  const [isLoadingDetail, setIsLoadingDetail] = useState(false);

  const navigate = useNavigate();

  // Cargar los quizzes de favoritos
  const loadFavoriteQuizzes = useCallback(async () => {
    setIsLoading(true);

    try {
      const favoriteAsignaturas = await getAllFavoriteAsignaturas();
      setFavoriteQuizzes(favoriteAsignaturas);
    } catch (error) {
      console.error('Error al cargar asignaturas con favoritos:', error);
      setFavoriteQuizzes([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Cargar los favoritos cuando se abre el modal
  useEffect(() => {
    if (showModal) {
      loadFavoriteQuizzes();
    }
  }, [showModal, loadFavoriteQuizzes]);

  // Manejar el clic para iniciar un quiz con favoritos
  const handleStartQuiz = (quiz) => {
    // Utilizamos sessionStorage para guardar la info necesaria para iniciar el quiz
    sessionStorage.setItem('start_favorites_quiz', 'true');
    sessionStorage.setItem('favorites_quiz_asignatura_id', quiz.id);
    sessionStorage.setItem('favorites_quiz_asignatura_nombre', quiz.nombre);

    // Redirigir a la ruta del quiz especial "favoritos"
    navigate(`/quiz/${quiz.id}/favoritos`);
    setShowModal(false);
  };

  // Manejar el clic para iniciar un quiz con 40 preguntas aleatorias
  const handleStartRandomQuiz = (quiz) => {
    // Utilizamos sessionStorage para guardar la info necesaria para iniciar el quiz
    sessionStorage.setItem('start_favorites_quiz', 'true');
    sessionStorage.setItem('favorites_quiz_asignatura_id', quiz.id);
    sessionStorage.setItem('favorites_quiz_asignatura_nombre', quiz.nombre);
    sessionStorage.setItem('favorites_quiz_random', 'true'); // Indicador para seleccionar 40 preguntas aleatorias
    sessionStorage.setItem('favorites_quiz_limit', '40'); // Límite de preguntas

    // Redirigir a la ruta del quiz especial "favoritos"
    navigate(`/quiz/${quiz.id}/favoritos`);
    setShowModal(false);
  };

  // Manejar la confirmación para eliminar un quiz
  const handleConfirmDelete = (quiz) => {
    setSelectedQuiz(quiz);
    setShowConfirmDelete(true);
  };

  // Eliminar una colección de favoritos
  const deleteQuiz = async () => {
    if (selectedQuiz) {
      try {
        const result = await clearFavorites(selectedQuiz.id);
        if (result.success) {
          showToast('Colección de favoritos eliminada', 'success');

          // Actualizar la lista
          setFavoriteQuizzes(prevQuizzes =>
            prevQuizzes.filter(quiz => quiz.id !== selectedQuiz.id)
          );

          // Si no quedan colecciones, cerrar el modal
          if (favoriteQuizzes.length === 1) {
            setShowModal(false);
          }
        } else {
          showToast(result.message, 'error');
        }
      } catch (error) {
        console.error('Error al eliminar colección de favoritos:', error);
        showToast('Error al eliminar colección', 'error');
      }
    }

    setShowConfirmDelete(false);
    setSelectedQuiz(null);
  };

  // Ver detalle de una colección de favoritos
  const handleViewDetail = async (quiz) => {
    setIsLoadingDetail(true);
    setSelectedDetail(quiz);
    setShowDetail(true);

    try {
      const favoritos = await getFavoritesByAsignatura(quiz.id);
      setDetailItems(favoritos.preguntas || []);
    } catch (error) {
      console.error('Error al cargar detalle de favoritos:', error);
      setDetailItems([]);
      showToast('Error al cargar detalles', 'error');
    } finally {
      setIsLoadingDetail(false);
    }
  };

  // Comprobar si hay colecciones de favoritos
  const hasFavoriteQuizzes = useCallback(async () => {
    try {
      const favoriteAsignaturas = await getAllFavoriteAsignaturas();
      return favoriteAsignaturas.length > 0;
    } catch (error) {
      console.error('Error al verificar colecciones de favoritos:', error);
      return false;
    }
  }, []);

  // Estado para controlar si hay colecciones favoritas
  const [hasQuizzes, setHasQuizzes] = useState(false);

  // Verificar si hay colecciones de favoritos
  useEffect(() => {
    const checkFavoriteQuizzes = async () => {
      const hasQuizzes = await hasFavoriteQuizzes();
      setHasQuizzes(hasQuizzes);
    };

    // Comprobar al montar
    checkFavoriteQuizzes();

    // Configurar un intervalo para comprobar periódicamente
    const interval = setInterval(checkFavoriteQuizzes, 10000);

    return () => clearInterval(interval);
  }, [hasFavoriteQuizzes]);

  return (
    <>
      <Button
        onClick={() => setShowModal(true)}
        disabled={!hasQuizzes}
        variant="secondary"
        size="medium"
        className="mb-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
        {hasQuizzes ? 'Practicar con preguntas favoritas' : 'No hay preguntas favoritas'}
      </Button>

      {/* Modal de colecciones de favoritos */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Colecciones de preguntas favoritas"
        size="4xl" // Tamaño más ancho para acomodar dos columnas
        footer={
          <Button
            onClick={() => setShowModal(false)}
            variant="primary"
          >
            Cerrar
          </Button>
        }
      >
        <div className="min-h-[200px] max-h-[70vh] overflow-y-auto">
          {isLoading ? (
            <div className="flex justify-center items-center h-48">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
            </div>
          ) : favoriteQuizzes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {favoriteQuizzes.map((quiz) => (
                <div
                  key={quiz.id}
                  className="bg-white dark:bg-gray-700 rounded-lg p-4 transition-all hover:shadow-md border border-gray-200 dark:border-gray-700"
                >
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white text-lg flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-yellow-500 mr-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                          </svg>
                          {quiz.nombre}
                        </h3>
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 text-right">
                        Actualizado: {formatTimestamp(quiz.ultimaActualizacion)}
                      </div>
                    </div>

                    <div className="mt-3">
                      <div className="text-sm text-gray-700 dark:text-gray-300">
                        {quiz.totalPreguntas} {quiz.totalPreguntas === 1 ? 'pregunta' : 'preguntas'} guardadas
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap justify-end gap-2">
                      <Button
                        variant="secondary"
                        size="small"
                        onClick={() => handleViewDetail(quiz)}
                      >
                        Ver preguntas
                      </Button>
                      <Button
                        variant="primary"
                        size="small"
                        onClick={() => handleStartQuiz(quiz)}
                      >
                        Practicar
                      </Button>
                      {/* Botón para practicar con 40 preguntas aleatorias - Solo visible cuando hay más de 40 preguntas */}
                      {quiz.totalPreguntas > 40 && (
                        <Button
                          variant="primary"
                          size="small"
                          className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
                          onClick={() => handleStartRandomQuiz(quiz)}
                        >
                          40 aleatorias
                        </Button>
                      )}
                      <Button
                        variant="danger"
                        size="small"
                        onClick={() => handleConfirmDelete(quiz)}
                      >
                        Eliminar
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-48">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-gray-400 dark:text-gray-600 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-gray-600 dark:text-gray-400">No tienes preguntas favoritas guardadas</p>
              <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
                Puedes marcar preguntas como favoritas durante los tests o en la revisión
              </p>
            </div>
          )}
        </div>
      </Modal>

      {/* Modal de confirmación para eliminar */}
      <Modal
        isOpen={showConfirmDelete}
        onClose={() => {
          setShowConfirmDelete(false);
          setSelectedQuiz(null);
        }}
        title="Eliminar colección de favoritos"
        size="sm"
        footer={
          <>
            <Button
              onClick={deleteQuiz}
              variant="danger"
              className="ml-3"
            >
              Sí, eliminar
            </Button>
            <Button
              onClick={() => {
                setShowConfirmDelete(false);
                setSelectedQuiz(null);
              }}
              variant="secondary"
            >
              Cancelar
            </Button>
          </>
        }
      >
        <p className="text-gray-600 dark:text-gray-400">
          ¿Estás seguro que deseas eliminar esta colección de preguntas favoritas? Esta acción no se puede deshacer.
        </p>
        {selectedQuiz && (
          <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-900 dark:text-white text-sm font-medium">{selectedQuiz.nombre}</p>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              {selectedQuiz.totalPreguntas} {selectedQuiz.totalPreguntas === 1 ? 'pregunta' : 'preguntas'} guardadas
            </p>
          </div>
        )}
      </Modal>

      {/* Modal de detalle para ver preguntas */}
      <Modal
        isOpen={showDetail}
        onClose={() => {
          setShowDetail(false);
          setSelectedDetail(null);
          setDetailItems([]);
        }}
        title={selectedDetail ? `Preguntas favoritas - ${selectedDetail.nombre}` : 'Detalle de favoritos'}
        size="4xl"
        footer={
          <Button
            onClick={() => {
              setShowDetail(false);
              setSelectedDetail(null);
              setDetailItems([]);
            }}
            variant="primary"
          >
            Cerrar
          </Button>
        }
      >
        <div className="min-h-[200px] max-h-[70vh] overflow-y-auto px-2">
          {isLoadingDetail ? (
            <div className="flex justify-center items-center h-48">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
            </div>
          ) : detailItems.length > 0 ? (
            <ul className="space-y-4">
              {detailItems.map((pregunta, index) => (
                <li
                  key={pregunta.id}
                  className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 shadow-sm"
                >
                  <div className="flex items-start">
                    <span className="font-medium text-gray-800 dark:text-gray-200 mr-2">{index + 1}.</span>
                    <div>
                      <p className="text-gray-800 dark:text-gray-200 mb-2">{pregunta.pregunta}</p>

                      {/* Respuesta correcta */}
                      <div className="mt-2 text-sm">
                        <span className="font-medium text-green-600 dark:text-green-400">
                          Respuesta correcta:
                        </span>
                        <span className="ml-2 text-gray-700 dark:text-gray-300">
                          {pregunta.opciones[pregunta.respuestaCorrecta]}
                        </span>
                      </div>
                       <div className="mt-2 text-sm">
                         <span className="font-medium text-green-600 dark:text-green-400">
                          Explicación:
                        </span>
                         <span className="ml-2 text-gray-700 dark:text-gray-300">
                          {pregunta.explicacion}
                        </span>
                        </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-600 dark:text-gray-400">No se encontraron preguntas en esta colección</p>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
}