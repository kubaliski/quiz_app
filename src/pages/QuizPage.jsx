/**
 * Página que presenta el quiz al usuario con las preguntas y opciones de respuesta.
 *
 * Funcionalidades principales:
 * - Carga preguntas de un módulo específico o de todos los módulos de una asignatura
 * - Mezcla aleatoriamente las preguntas y las opciones de respuesta
 * - Permite navegar entre preguntas (adelante/atrás)
 * - Guarda las respuestas seleccionadas por el usuario
 * - Muestra una barra de progreso con el avance del quiz
 * - Permite salir del quiz con confirmación para evitar pérdida accidental de progreso
 * - Redirige a la página de resultados al completar todas las preguntas
 * - Permite navegación con teclas izquierda/derecha del teclado
 * - Guarda y restaura progreso para prevenir pérdida durante actualizaciones de la PWA
 *
 * @component
 * @param {Object} props - Las propiedades del componente
 * @param {string} [props.tipo] - Tipo de quiz ('examen' para preguntas de examen)
 * @returns {JSX.Element} Componente QuizPage renderizado
 */
import { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Layout, PageHeader } from '@components/layout';
import { QuestionCard, QuizNavigation } from '@components/quiz';
import { LoadingSpinner, ErrorMessage, Button, ProgressBar, Dialog } from '@components/common';
import {
  fetchAsignaturaCompleta,
  fetchModulo,
  fetchRandomPreguntasByAsignatura,
  fetchRandomPreguntasByAsignaturaExamen
} from '@services/quizDataService';
import { shuffleArray, shuffleQuestionOptions, formatTimestamp } from '@utils/quizUtils';

export default function QuizPage({ tipo }) {
  const { asignaturaId, moduloId } = useParams();
  const navigate = useNavigate();

  // Estado local para el quiz
  const [asignatura, setAsignatura] = useState(null);
  const [modulo, setModulo] = useState(null);
  const [preguntas, setPreguntas] = useState([]);
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestas, setRespuestas] = useState({});
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);
  const [modoTodos, setModoTodos] = useState(false);
  const [modoExamen, setModoExamen] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Estados adicionales para el diálogo
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState(''); // 'exit', 'restore-progress'
  const [savedProgress, setSavedProgress] = useState(null);

  // Estado para controlar si ya se ha verificado actualización
  const [updateChecked, setUpdateChecked] = useState(false);

  // Establecer tipo de quiz basado en props o moduloId
  const tipoQuiz = tipo || (moduloId === 'todos' ? 'todos' : (moduloId === 'examen' ? 'examen' : null));

  // Convertir a número los IDs de la URL
  const asigId = parseInt(asignaturaId, 10);
  const modId = moduloId === 'todos' || moduloId === 'examen'
    ? moduloId
    : parseInt(moduloId, 10);

  // Propiedades calculadas
  const totalPreguntas = preguntas.length;
  const progreso = totalPreguntas ? ((preguntaActual + 1) / totalPreguntas) * 100 : 0;
  const preguntaActiva = preguntas[preguntaActual] || null;
  const tieneRespuestaActual = preguntaActiva ? respuestas[preguntaActiva.id] !== undefined : false;

  // Función para obtener el nombre del módulo (declarada antes de su uso en saveQuizProgress)
  const getNombreModulo = useCallback(() => {
    if (modoExamen || tipoQuiz === 'examen' || moduloId === 'examen') return "Preguntas de examen";
    if (modoTodos || tipoQuiz === 'todos' || moduloId === 'todos') return "Todos los módulos";
    if (modulo) return modulo.nombre;
    return "Módulo";
  }, [modoExamen, tipoQuiz, moduloId, modoTodos, modulo]);

  // Función para guardar el progreso actual
  const saveQuizProgress = useCallback(() => {
    // Crear clave única basada en asignatura y módulo
    const quizKey = `quiz_progress_${asignaturaId}_${modId}`;

    // Guardar el estado actual completo
    const progressData = {
      respuestas,
      preguntaActual,
      preguntas,
      timestamp: new Date().getTime(),
      asignatura: {
        id: asigId,
        nombre: asignatura?.nombre
      },
      modulo: modulo ? {
        id: modulo.id,
        nombre: modulo.nombre,
        esExamen: modulo.esExamen
      } : {
        id: modId,
        nombre: getNombreModulo(),
        esExamen: modoExamen
      },
      tipoQuiz
    };

    localStorage.setItem(quizKey, JSON.stringify(progressData));
    // Establecer flag para indicar quiz en progreso
    localStorage.setItem('quiz_in_progress', 'true');
  }, [respuestas, preguntaActual, preguntas, asigId, modId, asignatura, modulo, tipoQuiz, modoExamen, asignaturaId, getNombreModulo]);

  // Verificar si acabamos de actualizar durante un quiz
  const checkForPWAUpdate = useCallback(() => {
    // Verificar si hay un indicador de actualización reciente en localStorage
    const wasUpdated = localStorage.getItem('pwa_just_updated') === 'true';

    if (wasUpdated) {
      console.log('Detectada actualización durante quiz, restaurando estado...');

      // Verificar que la actualización fue reciente (en los últimos 10 minutos)
      const updateTimestamp = parseInt(localStorage.getItem('pwa_update_timestamp') || '0', 10);
      const now = Date.now();
      const minutesSinceUpdate = (now - updateTimestamp) / (1000 * 60);

      if (minutesSinceUpdate <= 10) {
        // Buscar si hay un progreso guardado para este quiz
        const quizKey = `quiz_progress_${asignaturaId}_${modId}`;
        const savedProgressJSON = localStorage.getItem(quizKey);

        if (savedProgressJSON) {
          try {
            const savedProgress = JSON.parse(savedProgressJSON);

            // Restaurar automáticamente sin preguntar al usuario
            setRespuestas(savedProgress.respuestas || {});
            setPreguntaActual(savedProgress.preguntaActual || 0);

            // Si hay preguntas guardadas y son diferentes a las actuales
            if (savedProgress.preguntas && savedProgress.preguntas.length > 0) {
              setPreguntas(savedProgress.preguntas);
            }

            // Mostrar mensaje de éxito con setTimeout para darle tiempo al componente de actualizarse
            setTimeout(() => {
              alert('La aplicación se ha actualizado correctamente y tu progreso ha sido restaurado.');
            }, 1000);
          } catch (error) {
            console.error('Error al recuperar progreso guardado después de actualización:', error);
          }
        }
      }

      // Limpiar los indicadores de actualización
      localStorage.removeItem('pwa_just_updated');
      localStorage.removeItem('pwa_update_timestamp');
    }

    // Marcar que ya se verificó la actualización
    setUpdateChecked(true);
  }, [asignaturaId, modId]);

  // Manejar funciones de navegación
  const handleNext = useCallback(() => {
    if (preguntaActual < totalPreguntas - 1) {
      setPreguntaActual(preguntaActual + 1);
      // Guardar progreso actualizado
      setTimeout(saveQuizProgress, 0);
    } else {
      // Guardar resultados en sessionStorage para la página de resultados
      sessionStorage.setItem('quiz_respuestas', JSON.stringify(respuestas));
      sessionStorage.setItem('quiz_preguntas', JSON.stringify(preguntas));
      sessionStorage.setItem('quiz_asignatura', JSON.stringify({
        id: asigId,
        nombre: asignatura?.nombre || 'Asignatura'
      }));

      // Guardar información sobre el tipo de quiz
      sessionStorage.setItem('quiz_tipo', tipoQuiz || 'regular');

      // Marcar como completado
      setQuizCompleted(true);
      // Eliminar del localStorage ya que se completó
      const quizKey = `quiz_progress_${asignaturaId}_${modId}`;
      localStorage.removeItem(quizKey);
      // Quitar flag de quiz en progreso
      localStorage.setItem('quiz_in_progress', 'false');

      if (modulo) {
        sessionStorage.setItem('quiz_modulo', JSON.stringify({
          id: modulo.id,
          nombre: modulo.nombre,
          esExamen: modulo.esExamen
        }));

        // Navegación a módulo específico
        navigate(`/resultados/${asignaturaId}/${modulo.id}`);
      } else if (modoExamen || tipoQuiz === 'examen') {
        sessionStorage.setItem('quiz_modulo', JSON.stringify({
          id: 'examen',
          nombre: 'Preguntas de examen'
        }));

        // Navegación a modo examen
        navigate(`/resultados/${asignaturaId}/examen`);
      } else {
        sessionStorage.setItem('quiz_modulo', JSON.stringify({
          id: 'todos',
          nombre: 'Todos los módulos'
        }));

        // Navegación a modo todos
        navigate(`/resultados/${asignaturaId}/todos`);
      }
    }
  }, [preguntaActual, totalPreguntas, respuestas, preguntas, asigId, asignatura, tipoQuiz, modulo, modoExamen, asignaturaId, navigate, saveQuizProgress, modId]);

  const handlePrevious = useCallback(() => {
    if (preguntaActual > 0) {
      setPreguntaActual(preguntaActual - 1);
      // Guardar progreso actualizado
      setTimeout(saveQuizProgress, 0);
    }
  }, [preguntaActual, saveQuizProgress]);

  // Función para restaurar el progreso guardado
  const handleRestoreProgress = useCallback(() => {
    if (!savedProgress) return;

    // Restaurar el estado desde el progreso guardado
    setRespuestas(savedProgress.respuestas || {});
    setPreguntaActual(savedProgress.preguntaActual || 0);

    // Si hay preguntas guardadas y son diferentes a las actuales
    if (savedProgress.preguntas && savedProgress.preguntas.length > 0 &&
        JSON.stringify(savedProgress.preguntas) !== JSON.stringify(preguntas)) {
      setPreguntas(savedProgress.preguntas);
    }

    // Cerrar el diálogo
    setDialogOpen(false);
    setDialogType('');
    setSavedProgress(null);
  }, [savedProgress, preguntas]);

  // Función para descartar el progreso guardado
  const handleDiscardProgress = useCallback(() => {
    // Eliminar el progreso guardado
    const quizKey = `quiz_progress_${asignaturaId}_${modId}`;
    localStorage.removeItem(quizKey);

    // Cerrar el diálogo
    setDialogOpen(false);
    setDialogType('');
    setSavedProgress(null);
  }, [asignaturaId, modId]);

  // Manejador de teclas para navegación con teclado
  const handleKeyDown = useCallback((event) => {
    // Solo manejar eventos de teclado si no hay diálogo abierto y el quiz está cargado
    if (dialogOpen || cargando || preguntas.length === 0) {
      return;
    }

    // Verificar qué tecla se presionó
    if (event.key === 'ArrowRight') {
      // Permitir navegar a la siguiente pregunta aunque no haya respuesta seleccionada
      if (preguntaActual < totalPreguntas - 1) {
        event.preventDefault(); // Prevenir comportamiento por defecto
        setPreguntaActual(preguntaActual + 1);
        // Guardar progreso actualizado
        setTimeout(saveQuizProgress, 0);
      }
    } else if (event.key === 'ArrowLeft') {
      // Tecla izquierda: ir a pregunta anterior si no es la primera
      if (preguntaActual > 0) {
        event.preventDefault(); // Prevenir comportamiento por defecto
        setPreguntaActual(preguntaActual - 1);
        // Guardar progreso actualizado
        setTimeout(saveQuizProgress, 0);
      }
    }
  }, [dialogOpen, cargando, preguntas.length, preguntaActual, totalPreguntas, saveQuizProgress]);

  // Efecto para manejar eventos de teclado
  useEffect(() => {
    // Añadir el event listener cuando el componente se monta
    document.addEventListener('keydown', handleKeyDown);

    // Limpiar el event listener cuando el componente se desmonta
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]); // Dependencias para recrear el efecto cuando cambien estas variables

  // Efecto para verificar si hay una actualización reciente durante el montaje inicial
  useEffect(() => {
    // Verificar actualización inmediatamente al montar el componente
    if (!updateChecked) {
      checkForPWAUpdate();
    }
  }, [updateChecked, checkForPWAUpdate]);

  // Efecto para verificar progreso guardado al iniciar
  useEffect(() => {
    let mounted = true;

    // No verificar progreso guardado si venimos de una actualización reciente
    // (ya que en ese caso ya hemos restaurado el progreso automáticamente)
    if (localStorage.getItem('pwa_just_updated') === 'true') {
      return;
    }

    const checkSavedProgress = () => {
      const quizKey = `quiz_progress_${asignaturaId}_${modId}`;
      const savedProgressJSON = localStorage.getItem(quizKey);

      if (!savedProgressJSON) return;

      try {
        const savedProgress = JSON.parse(savedProgressJSON);

        // Verificar si el progreso guardado es reciente (menos de 24 horas)
        const now = new Date().getTime();
        const progressTime = savedProgress.timestamp || 0;
        const hoursElapsed = (now - progressTime) / (1000 * 60 * 60);

        if (hoursElapsed < 24 && mounted) {
          // Mostrar diálogo para restaurar progreso
          setDialogOpen(true);
          setDialogType('restore-progress');
          setSavedProgress(savedProgress);
        } else {
          // Progreso demasiado antiguo, eliminarlo
          localStorage.removeItem(quizKey);
        }
      } catch (error) {
        console.error('Error al recuperar progreso guardado:', error);
        localStorage.removeItem(quizKey);
      }
    };

    // Solo verificar si ya se cargaron las preguntas y no se ha verificado actualización
    if (!cargando && preguntas.length > 0 && updateChecked) {
      checkSavedProgress();
    }

    return () => {
      mounted = false;
    };
  }, [asignaturaId, modId, cargando, preguntas.length, updateChecked]);

  useEffect(() => {
    let mounted = true;

    const cargarQuiz = async () => {
      try {
        setCargando(true);

        // Cargar datos de la asignatura
        const asignaturaData = await fetchAsignaturaCompleta(asigId);

        if (!mounted) return;

        setAsignatura(asignaturaData);

        // Cargar preguntas según el modo
        let quizQuestions = [];

        if (tipoQuiz === 'examen' || moduloId === 'examen') {
          // Modo examen: cargar preguntas aleatorias de módulos de examen
          const preguntasExamen = await fetchRandomPreguntasByAsignaturaExamen(asigId, 40);

          if (!mounted) return;

          quizQuestions = preguntasExamen;
          setModoTodos(true);
          setModoExamen(true);
        } else if (tipoQuiz === 'todos' || moduloId === 'todos') {
          // Modo todos: cargar preguntas aleatorias de todos los módulos
          const preguntasAleatorias = await fetchRandomPreguntasByAsignatura(asigId, 40);

          if (!mounted) return;

          quizQuestions = preguntasAleatorias;
          setModoTodos(true);
        } else {
          // Modo específico: cargar preguntas de un módulo
          const moduloData = await fetchModulo(asigId, modId);

          if (!mounted) return;

          setModulo(moduloData);
          quizQuestions = shuffleArray([...(moduloData.preguntas || [])]);

          // Verificar si es un módulo de examen
          if (moduloData.esExamen) {
            setModoExamen(true);
          }
        }

        // Mezclar las opciones de cada pregunta
        const preguntasConOpcionesMezcladas = quizQuestions.map(
          pregunta => shuffleQuestionOptions(pregunta)
        );

        setPreguntas(preguntasConOpcionesMezcladas);
        setCargando(false);
      } catch (err) {
        console.error("Error al cargar datos del quiz:", err);
        if (mounted) {
          setError("No se pudieron cargar las preguntas. Por favor, inténtelo de nuevo.");
          setCargando(false);
        }
      }
    };

    cargarQuiz();

    return () => {
      mounted = false;
    };
  }, [asigId, modId, tipoQuiz, moduloId, updateChecked]);

  // Efecto para limpiar flags cuando se desmonta el componente
  useEffect(() => {
    return () => {
      // Si el quiz no se completó pero se sale del componente
      if (!quizCompleted) {
        localStorage.setItem('quiz_in_progress', 'false');
      }
    };
  }, [quizCompleted]);

  const handleSelectAnswer = (preguntaId, respuestaIndex) => {
    // Actualizar el estado
    setRespuestas(prev => ({
      ...prev,
      [preguntaId]: respuestaIndex
    }));

    // Guardar progreso después de cada respuesta
    // Usar setTimeout para no bloquear la UI
    setTimeout(() => {
      saveQuizProgress();
    }, 0);
  };

  const handleExit = () => {
    // Abrir el diálogo en lugar de usar window.confirm
    setDialogOpen(true);
    setDialogType('exit');
  };

  const handleConfirmExit = () => {
    // El usuario confirmó salir
    setDialogOpen(false);

    // Si el quiz no se completó, limpiar flag
    if (!quizCompleted) {
      localStorage.setItem('quiz_in_progress', 'false');
    }

    // Eliminar progreso guardado
    const quizKey = `quiz_progress_${asignaturaId}_${modId}`;
    localStorage.removeItem(quizKey);

    navigate(`/asignaturas/${asignaturaId}`);
  };

  const handleCancelExit = () => {
    // El usuario canceló la acción
    setDialogOpen(false);
  };

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

  const breadcrumbs = [
    { label: 'Inicio', to: '/' },
    { label: asignatura?.nombre || 'Asignatura', to: `/asignaturas/${asignaturaId}` },
    { label: getNombreModulo() }
  ];

  return (
    <Layout>
      <PageHeader
        title={`Quiz - ${getNombreModulo()}`}
        subtitle="Selecciona la respuesta correcta para cada pregunta"
        breadcrumbs={breadcrumbs}
        actions={
          <Button onClick={handleExit} variant="secondary">
            Salir del quiz
          </Button>
        }
      />

      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {cargando ? (
          <div className="py-12">
            <LoadingSpinner />
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm font-medium bg-indigo-100 text-indigo-800 py-1 px-3 rounded-full">
                Pregunta {preguntaActual + 1} de {totalPreguntas}
              </div>

              {modoExamen && (
                <div className="text-sm font-medium bg-red-100 text-red-800 py-1 px-3 rounded-full">
                  Modo examen
                </div>
              )}
            </div>

            <ProgressBar
              progreso={progreso}
              className={`mb-6 ${modoExamen ? 'bg-red-600' : 'bg-indigo-600'}`}
            />

            {preguntaActiva && (
              <>
                <QuestionCard
                  pregunta={preguntaActiva}
                  respuestaSeleccionada={respuestas[preguntaActiva.id]}
                  onSelectAnswer={handleSelectAnswer}
                />

                <QuizNavigation
                  preguntaActual={preguntaActual}
                  totalPreguntas={totalPreguntas}
                  respuestaSeleccionada={tieneRespuestaActual}
                  onPrevious={handlePrevious}
                  onNext={handleNext}
                />

                {/* Añadimos una pequeña nota sobre la navegación por teclado */}
                <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
                  <span className="inline-block mx-1 font-medium">←</span> Anterior
                  <span className="mx-2">|</span>
                  Siguiente
                  <span className="inline-block mx-1 font-medium">→</span>
                </div>
              </>
            )}
          </>
        )}
      </div>

      {/* Componente Dialog para confirmar salida o restaurar progreso */}
      <Dialog
        open={dialogOpen}
        title={
          dialogType === 'exit'
            ? "Confirmar salida"
            : "Restaurar progreso"
        }
        message={
          dialogType === 'exit'
            ? "¿Seguro que deseas salir? Perderás tu progreso en este quiz."
            : (
                <>
                  <div>Se encontró un progreso guardado para este quiz ({savedProgress ? formatTimestamp(savedProgress.timestamp) : ''}).</div>
                  <div className="mt-2 text-center"><strong>¿Deseas restaurarlo?</strong></div>
                </>
              )
        }
        confirmLabel={
          dialogType === 'exit'
            ? "Sí, salir"
            : "Restaurar progreso"
        }
        cancelLabel={
          dialogType === 'exit'
            ? "Cancelar"
            : "Empezar de nuevo"
        }
        onConfirm={
          dialogType === 'exit'
            ? handleConfirmExit
            : handleRestoreProgress
        }
        onCancel={
          dialogType === 'exit'
            ? handleCancelExit
            : handleDiscardProgress
        }
        variant={dialogType === 'exit' ? "danger" : "primary"}
      />
    </Layout>
  );
}