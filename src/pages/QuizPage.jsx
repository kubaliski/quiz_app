/**
 * Versión simplificada que llama al diálogo al principio.
 */
import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Layout } from '@components/layout';
import { ErrorMessage, Button } from '@components/common';

// Componentes refactorizados - Importación con nombre en lugar de por defecto
import {
  QuizHeader,
  QuizProgress,
  QuizContent,
  QuizDialogs,
  FavoritesQuizLoader
} from '@components/quiz';

// Hooks personalizados
import { QuizProvider } from '@context';
import {
  useQuizContext,
  useQuizLoader,
  useQuizProgress,
  useQuizNavigation,
  useQuizDialogs
} from '@hooks';
import { useAnswerShortcuts } from '@hooks';
import { addFavorite, removeFavorite, isFavorite } from '@services/favoritesService';
import { showSuccess, showError } from '@utils/toastUtils';

// Componente interno que usa los hooks y el contexto
function QuizPageContent({ tipo }) {
  const { asignaturaId, moduloId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Verificar si el usuario ha decidido continuar el test desde PendingQuizzes o iniciar un quiz de favoritos
  const continueFromPending = new URLSearchParams(location.search).get('continue') === 'true';
  const isFavoritesQuiz = moduloId === 'favoritos' || sessionStorage.getItem('start_favorites_quiz') === 'true';

  // Estado para controlar si ya se ha verificado actualización
  const [updateChecked, setUpdateChecked] = useState(false);
  // Referencia para controlar si ya se ha verificado el diálogo
  const dialogCheckDone = useRef(false);

  // Establecer tipo de quiz basado en props o moduloId
  const tipoQuiz = tipo ||
    (moduloId === 'todos' ? 'todos' :
      (moduloId === 'examen' ? 'examen' :
        (moduloId === 'favoritos' ? 'favoritos' : null)
      )
    );

  // Convertir a número los IDs de la URL
  const asigId = parseInt(asignaturaId, 10);
  const modId = moduloId === 'todos' || moduloId === 'examen' || moduloId === 'favoritos'
    ? moduloId
    : parseInt(moduloId, 10);

  // Acceder al contexto del quiz
  const {
    error,
    setRespuesta,
    tipoQuiz: contextTipoQuiz,
    setTipoQuiz,
    preguntaActiva,
    asignatura,
    notifyFavoriteToggled
  } = useQuizContext();

  // Establecer el tipo de quiz en el contexto si es quiz de favoritos
  useEffect(() => {
    if (isFavoritesQuiz) {
      setTipoQuiz('favoritos');
    }
  }, [isFavoritesQuiz, setTipoQuiz]);

  // Información para cargar quiz de favoritos
  const favoritesInfo = isFavoritesQuiz ? {
    asignaturaId: asigId,
    asignaturaNombre: sessionStorage.getItem('favorites_quiz_asignatura_nombre') || 'Asignatura'
  } : null;

  // Usar hook para cargar datos del quiz con parámetro para habilitar/deshabilitar
  useQuizLoader({
    asigId,
    modId,
    tipoQuiz,
    moduloId,
    continueFromPending,
    asignaturaId,
    enabled: !isFavoritesQuiz // Pasar flag para habilitar/deshabilitar en lugar de usar condicional
  });

  // Usar hook para gestionar el progreso
  const { saveQuizProgress, getNombreModulo } = useQuizProgress({
    asignaturaId,
    modId,
    asigId,
    continueFromPending,
    updateChecked,
    isFavoritesQuiz
  });

  // Marcar que se verificó la actualización después del primer renderizado
  useEffect(() => {
    if (!updateChecked) {
      setUpdateChecked(true);
    }
  }, [updateChecked]);

  // Manejar la selección de respuestas
  const handleSelectAnswer = (preguntaId, respuestaIndex) => {
    // Actualizar el estado
    setRespuesta(preguntaId, respuestaIndex);

    // Guardar progreso después de cada respuesta
    setTimeout(saveQuizProgress, 0);
  };

  // Manejar toggle favorito (usado por atajo 0)
  const handleToggleFavorite = async () => {
    if (!preguntaActiva) return;

    try {
      const already = await isFavorite(asigId, preguntaActiva.id);

      if (already) {
        await removeFavorite(asigId, preguntaActiva.id);
        showSuccess('Pregunta eliminada de favoritos');
        // Notificar al contexto
        if (typeof notifyFavoriteToggled === 'function') notifyFavoriteToggled(preguntaActiva.id);
      } else {
        await addFavorite(asigId, asignatura, preguntaActiva);
        showSuccess('Pregunta añadida a favoritos');
        if (typeof notifyFavoriteToggled === 'function') notifyFavoriteToggled(preguntaActiva.id);
      }
    } catch (err) {
      console.error('Error toggle favorite:', err);
      showError('No se pudo actualizar favorito');
    }
  };

  // Usar hook para navegación
  const {
    handleNext,
    handlePrevious,
    handleExit,
    handleConfirmExit,
    handleCancelExit
  } = useQuizNavigation({
    saveQuizProgress,
    asignaturaId,
    modId
  });

  // Activar atajos: 1-9 para respuestas, 0 para favorito
  useAnswerShortcuts({ onSelectAnswer: handleSelectAnswer, onToggleFavorite: handleToggleFavorite });

  // Usar hook para diálogos - pasar flag continueFromPending para que sepa si venimos de pendientes
  const {
    dialogOpen,
    dialogType,
    savedProgress,
    handleRestoreProgress,
    handleDiscardProgress,
    checkForSavedProgress // Asegúrate de recibir esta función
  } = useQuizDialogs({
    asignaturaId,
    modId,
    handleConfirmExit,
    handleCancelExit,
    continueFromPending  // Pasar este parámetro es clave para que funcione bien
  });

  // Efecto para verificar si hay progreso guardado (una sola vez y al principio)
  useEffect(() => {
    // Hacemos esto como primera prioridad y una sola vez
    if (!continueFromPending && !dialogCheckDone.current && checkForSavedProgress) {
      dialogCheckDone.current = true;

      // Verificar inmediatamente - sin retrasos que puedan causar destellos
      checkForSavedProgress();
    }
  }, [continueFromPending, checkForSavedProgress]);

  // Manejar error
  if (error) {
    return (
      <Layout>
        <ErrorMessage message={error} />
        <div className="flex justify-center mt-6">
          <Button
            onClick={() => navigate(`/asignaturas/${asignaturaId}`)}
            variant="secondary"
          >
            Volver a módulos
          </Button>
        </div>
      </Layout>
    );
  }

  // Renderizar loader de favoritos si es necesario
  if (isFavoritesQuiz && (!contextTipoQuiz || contextTipoQuiz !== 'favoritos' || !tipoQuiz)) {
    return (
      <Layout>
        <QuizHeader
          getNombreModulo={() => 'Preguntas favoritas'}
          handleExit={handleExit}
          asignaturaId={asignaturaId}
        />
        <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <FavoritesQuizLoader
            quiz={{
              asignaturaId: asigId,
              asignaturaNombre: favoritesInfo?.asignaturaNombre
            }}
          />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Cabecera del Quiz */}
      <QuizHeader
        getNombreModulo={getNombreModulo}
        handleExit={handleExit}
        asignaturaId={asignaturaId}
      />

      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Barra de progreso */}
        <QuizProgress />

        {/* Contenido principal del Quiz */}
        <QuizContent
          handlePrevious={handlePrevious}
          handleNext={handleNext}
          handleSelectAnswer={handleSelectAnswer}
          showFavoriteButton={contextTipoQuiz !== 'favoritos'} // No mostrar botón de favorito en quizzes de favoritos
          asignaturaId={asigId}
        />
      </div>

      {/* Diálogos */}
      <QuizDialogs
        dialogOpen={dialogOpen}
        dialogType={dialogType}
        savedProgress={savedProgress}
        handleConfirmExit={handleConfirmExit}
        handleCancelExit={handleCancelExit}
        handleRestoreProgress={handleRestoreProgress}
        handleDiscardProgress={handleDiscardProgress}
      />
    </Layout>
  );
}

// Componente principal que proporcione el contexto
export default function QuizPage({ tipo }) {
  return (
    <QuizProvider>
      <QuizPageContent tipo={tipo} />
    </QuizProvider>
  );
}