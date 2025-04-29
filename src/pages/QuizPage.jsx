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
 *
 * @component
 * @param {Object} props - Las propiedades del componente
 * @param {string} [props.tipo] - Tipo de quiz ('examen' para preguntas de examen)
 * @returns {JSX.Element} Componente QuizPage renderizado
 */
import { useEffect, useState } from 'react';
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
import { shuffleArray, shuffleQuestionOptions } from '@utils/quizUtils';

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

  // Estado para controlar la visualización del diálogo
  const [dialogOpen, setDialogOpen] = useState(false);

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
  }, [asigId, modId, tipoQuiz, moduloId]);

  const handleSelectAnswer = (preguntaId, respuestaIndex) => {
    setRespuestas(prev => ({
      ...prev,
      [preguntaId]: respuestaIndex
    }));
  };

  const handleNext = () => {
    if (preguntaActual < totalPreguntas - 1) {
      setPreguntaActual(preguntaActual + 1);
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
  };

  const handlePrevious = () => {
    if (preguntaActual > 0) {
      setPreguntaActual(preguntaActual - 1);
    }
  };

  const handleExit = () => {
    // Abrir el diálogo en lugar de usar window.confirm
    setDialogOpen(true);
  };

  const handleConfirmExit = () => {
    // El usuario confirmó salir
    setDialogOpen(false);
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

  const getNombreModulo = () => {
    if (modoExamen || tipoQuiz === 'examen' || moduloId === 'examen') return "Preguntas de examen";
    if (modoTodos || tipoQuiz === 'todos' || moduloId === 'todos') return "Todos los módulos";
    if (modulo) return modulo.nombre;
    return "Módulo";
  };

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
              </>
            )}
          </>
        )}
      </div>

      {/* Componente Dialog para confirmar salida */}
      <Dialog
        open={dialogOpen}
        title="Confirmar salida"
        message="¿Seguro que deseas salir? Perderás tu progreso en este quiz."
        confirmLabel="Sí, salir"
        cancelLabel="Cancelar"
        onConfirm={handleConfirmExit}
        onCancel={handleCancelExit}
        variant="danger"
      />
    </Layout>
  );
}