/**
 * Componente para mostrar y gestionar los quizzes pendientes del usuario.
 * Permite visualizar y retomar quizzes que fueron iniciados pero no completados.
 * Presenta los tests en un formato de dos columnas para mejor visualización.
 *
 * @component
 * @returns {JSX.Element} Componente PendingQuizzes renderizado
 */
import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@components/common';
import Modal from '@components/common/Modal';
import { formatTimestamp } from '@utils/quizUtils';

export default function PendingQuizzes() {
  const [showModal, setShowModal] = useState(false);
  const [pendingQuizzes, setPendingQuizzes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const navigate = useNavigate();

  // Cargar los quizzes pendientes del localStorage
  const loadPendingQuizzes = useCallback(() => {
    setIsLoading(true);

    try {
      // Buscar todas las claves en localStorage que comiencen con quiz_progress_
      const pendingQuizList = [];

      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        if (key && key.startsWith('quiz_progress_')) {
          try {
            const quizData = JSON.parse(localStorage.getItem(key));

            // Extraer correctamente los IDs de asignatura y módulo de la clave
            // Formato de la clave: quiz_progress_asignaturaId_moduloId
            const parts = key.split('_');
            // Asegurarse de que hay suficientes partes en la clave
            if (parts.length >= 4) {
              const asignaturaId = parts[2];
              const moduloId = parts.slice(3).join('_'); // Por si el moduloId contiene guiones bajos

              // FIX: Detectar si es un quiz de favoritos para mostrar etiqueta especial
              const isFavoritesQuiz = quizData.tipoQuiz === 'favoritos' || moduloId === 'favoritos';

              // FIX: Ajustar nombre del módulo según sea favoritos o no
              let moduloNombre = quizData.modulo?.nombre || 'Módulo';
              if (isFavoritesQuiz) {
                moduloNombre = 'Preguntas favoritas';
              }

              // Solo añadir si tiene los datos necesarios y los IDs son válidos
              if (quizData && quizData.timestamp && asignaturaId && moduloId) {
                pendingQuizList.push({
                  key,
                  asignaturaId,
                  moduloId,
                  asignaturaNombre: quizData.asignatura?.nombre || 'Asignatura',
                  moduloNombre: moduloNombre,
                  timestamp: quizData.timestamp,
                  preguntaActual: quizData.preguntaActual || 0,
                  totalPreguntas: quizData.preguntas?.length || 0,
                  tipoQuiz: quizData.tipoQuiz, // FIX: Guardar el tipo de quiz
                  isFavoritesQuiz, // FIX: Flag para identificar quizzes de favoritos
                  progreso: quizData.preguntas?.length
                    ? Math.round(((quizData.preguntaActual || 0) + 1) / quizData.preguntas.length * 100)
                    : 0
                });
              }
            }
          } catch (error) {
            console.error(`Error al procesar quiz pendiente con clave ${key}:`, error);
            // Continuar con el siguiente quiz
          }
        }
      }

      // Ordenar por fecha (más recientes primero)
      pendingQuizList.sort((a, b) => b.timestamp - a.timestamp);

      setPendingQuizzes(pendingQuizList);
    } catch (error) {
      console.error('Error al cargar quizzes pendientes:', error);
      setPendingQuizzes([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (showModal) {
      loadPendingQuizzes();
    }
  }, [showModal, loadPendingQuizzes]);

  // Manejar el clic para retomar un quiz
  const handleResumeQuiz = (quiz) => {
    // FIX: Si es un quiz de favoritos, establecer flag en sessionStorage
    if (quiz.isFavoritesQuiz || quiz.tipoQuiz === 'favoritos' || quiz.moduloId === 'favoritos') {
      sessionStorage.setItem('start_favorites_quiz', 'true');

      // Si hay asignatura, guardar su nombre
      if (quiz.asignaturaNombre) {
        sessionStorage.setItem('favorites_quiz_asignatura_nombre', quiz.asignaturaNombre);
      }
    } else {
      // Asegurarse de que no haya flags de favoritos si es un quiz regular
      sessionStorage.removeItem('start_favorites_quiz');
      sessionStorage.removeItem('favorites_quiz_asignatura_nombre');
    }

    // Comprobar si es un identificador de módulo especial ('todos', 'examen', 'favoritos')
    const esModuloEspecial = ['todos', 'examen', 'favoritos'].includes(quiz.moduloId);

    if (esModuloEspecial) {
      // Añadir parámetro de consulta para indicar que venimos de "continuar test"
      navigate(`/quiz/${quiz.asignaturaId}/${quiz.moduloId}?continue=true`);
    } else {
      // Si no, asegurarse de que el moduloId sea un número (para módulos específicos)
      const moduleId = isNaN(parseInt(quiz.moduloId)) ? quiz.moduloId : parseInt(quiz.moduloId);
      // Añadir parámetro de consulta para indicar que venimos de "continuar test"
      navigate(`/quiz/${quiz.asignaturaId}/${moduleId}?continue=true`);
    }

    setShowModal(false);
  };

  // Manejar la confirmación para eliminar un quiz
  const handleConfirmDelete = (quiz) => {
    setSelectedQuiz(quiz);
    setShowConfirmDelete(true);
  };

  // Eliminar un quiz pendiente
  const deleteQuiz = () => {
    if (selectedQuiz) {
      try {
        localStorage.removeItem(selectedQuiz.key);
        // Actualizar la lista
        setPendingQuizzes(prevQuizzes =>
          prevQuizzes.filter(quiz => quiz.key !== selectedQuiz.key)
        );

        // Si no quedan quizzes pendientes, cerrar el modal
        if (pendingQuizzes.length === 1) {
          setShowModal(false);
        }
      } catch (error) {
        console.error('Error al eliminar quiz pendiente:', error);
      }
    }

    setShowConfirmDelete(false);
    setSelectedQuiz(null);
  };

  // Comprobar si hay quizzes pendientes
  const hasPendingQuizzes = useCallback(() => {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('quiz_progress_')) {
        return true;
      }
    }
    return false;
  }, []);

  // Estado para controlar si hay quizzes pendientes
  const [hasQuizzes, setHasQuizzes] = useState(false);

  // Verificar si hay quizzes pendientes
  useEffect(() => {
    const checkPendingQuizzes = () => {
      setHasQuizzes(hasPendingQuizzes());
    };

    // Comprobar al montar
    checkPendingQuizzes();

    // Configurar un intervalo para comprobar periódicamente
    const interval = setInterval(checkPendingQuizzes, 5000);

    return () => clearInterval(interval);
  }, [hasPendingQuizzes]);

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
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {hasQuizzes ? 'Continuar tests pendientes' : 'No hay tests pendientes'}
        </Button>

      {/* Modal de tests pendientes con layout de 2 columnas */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Tests pendientes"
        size="4xl" // Usar un tamaño más ancho para acomodar dos columnas
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
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
            </div>
          ) : pendingQuizzes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pendingQuizzes.map((quiz) => (
                <div
                  key={quiz.key}
                  className="bg-white dark:bg-gray-700 rounded-lg p-4 transition-all hover:shadow-md border border-gray-200 dark:border-gray-700"
                >
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white text-lg">{quiz.asignaturaNombre}</h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          {quiz.moduloNombre}
                          {/* FIX: Mostrar etiqueta de favoritos si es necesario */}
                          {quiz.isFavoritesQuiz && (
                            <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100">
                              Favoritos
                            </span>
                          )}
                        </p>
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 text-right">
                        Iniciado: {formatTimestamp(quiz.timestamp)}
                      </div>
                    </div>

                    <div className="mt-3">
                      <div className="flex items-center">
                        <div className="text-xs mr-2 text-gray-600 dark:text-gray-400">Progreso: {quiz.progreso}%</div>
                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${getProgressBarColor(quiz.progreso, quiz.isFavoritesQuiz)}`}
                            style={{ width: `${quiz.progreso}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        Pregunta {quiz.preguntaActual + 1} de {quiz.totalPreguntas}
                      </div>
                    </div>

                    <div className="mt-4 flex justify-end gap-2">
                      <Button
                        variant="primary"
                        size="small"
                        onClick={() => handleResumeQuiz(quiz)}
                      >
                        Continuar
                      </Button>
                      <Button
                        variant="secondary"
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
              <p className="text-gray-600 dark:text-gray-400">No tienes tests pendientes</p>
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
        title="Eliminar test pendiente"
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
          ¿Estás seguro que deseas eliminar este test? Se perderá todo el progreso realizado.
        </p>
        {selectedQuiz && (
          <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-900 dark:text-white text-sm font-medium">{selectedQuiz.asignaturaNombre}</p>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              {selectedQuiz.moduloNombre}
              {/* FIX: Mostrar etiqueta de favoritos si es necesario */}
              {selectedQuiz.isFavoritesQuiz && (
                <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100">
                  Favoritos
                </span>
              )}
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">Progreso: {selectedQuiz.progreso}%</p>
          </div>
        )}
      </Modal>
    </>
  );
}

// Función auxiliar para obtener el color de la barra de progreso según el porcentaje
// FIX: Añadir parámetro para personalizar el color para quizzes de favoritos
function getProgressBarColor(progreso, isFavorite = false) {
  // Si es un quiz de favoritos, usar colores amarillos/dorados
  if (isFavorite) {
    if (progreso < 30) return 'bg-yellow-400 dark:bg-yellow-500';
    if (progreso < 70) return 'bg-yellow-500 dark:bg-yellow-600';
    return 'bg-yellow-600 dark:bg-yellow-700';
  }

  // Colores normales para quizzes regulares
  if (progreso < 30) return 'bg-red-500 dark:bg-red-600';
  if (progreso < 70) return 'bg-yellow-500 dark:bg-yellow-600';
  return 'bg-green-500 dark:bg-green-600';
}