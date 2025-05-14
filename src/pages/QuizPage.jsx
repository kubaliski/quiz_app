/**
 * Página que presenta el quiz al usuario con las preguntas y opciones de respuesta.
 * Versión refactorizada que utiliza componentes más pequeños y hooks personalizados.
 * Incluye soporte para quizzes con preguntas favoritas.
 * Adaptado para usar el sistema de reducer.
 *
 * @component
 * @param {Object} props - Las propiedades del componente
 * @param {string} [props.tipo] - Tipo de quiz ('examen' para preguntas de examen, 'favoritos' para favoritos)
 * @returns {JSX.Element} Componente QuizPage renderizado
 */
import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Layout } from '@components/layout';
import { ErrorMessage, Button } from '@components/common';

// Componentes refactorizados - Importación con nombre en lugar de por defecto
import {
  QuizHeader,
  QuizProgress,
  QuizContent,
  QuizDialogs,
  FavoritesQuizLoader // Nombre correcto según index.js
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
    tipoQuiz: contextTipoQuiz
  } = useQuizContext();

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
    updateChecked
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

  // Usar hook para diálogos
  const {
    dialogOpen,
    dialogType,
    savedProgress,
    handleRestoreProgress,
    handleDiscardProgress
  } = useQuizDialogs({
    asignaturaId,
    modId,
    handleConfirmExit,
    handleCancelExit
  });

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
  if (isFavoritesQuiz && !contextTipoQuiz) {
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