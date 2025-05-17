/**
 * Página que muestra los resultados de un quiz completado.
 *
 * Funcionalidades principales:
 * - Recupera los datos del quiz (preguntas y respuestas) desde sessionStorage
 * - Calcula la puntuación obtenida (respuestas correctas, total y porcentaje)
 * - Muestra un resumen visual con el porcentaje de acierto
 * - Presenta una revisión detallada de cada pregunta, indicando si la respuesta fue correcta
 * - Para respuestas incorrectas, muestra la opción correcta y su explicación
 * - Permite marcar preguntas como favoritas
 * - Permite exportar todas las preguntas en formato PDF
 * - Guarda los resultados del quiz usando el servicio quizDataService
 * - Ofrece opciones para reintentar el mismo quiz o volver a la selección de módulos
 * - Limpia flags de quiz en progreso al mostrar resultados
 *
 * @component
 * @param {Object} props - Las propiedades del componente
 * @returns {JSX.Element} Componente ResultsPage renderizado
 */
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Layout, PageHeader } from '@components/layout';
import { ResultSummary, QuestionReview } from '@components/quiz';
import { Button, ErrorMessage } from '@components/common';
import { guardarResultadosQuiz } from '@services/quizDataService';
import { calcularPuntuacion } from '@utils/quizUtils';
import { PDFGenerator } from '@components/quiz/';


export default function ResultsPage() {
  const { asignaturaId, moduloId } = useParams();
  const navigate = useNavigate();

  // Estado local
  const [preguntas, setPreguntas] = useState([]);
  const [respuestas, setRespuestas] = useState({});
  const [asignatura, setAsignatura] = useState(null);
  const [modulo, setModulo] = useState(null);
  const [resultados, setResultados] = useState(null);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);

  // Cargar datos de sessionStorage
  useEffect(() => {
    try {
      // Recuperar datos del quiz de sessionStorage
      const respuestasData = JSON.parse(sessionStorage.getItem('quiz_respuestas') || '{}');
      const preguntasData = JSON.parse(sessionStorage.getItem('quiz_preguntas') || '[]');
      const asignaturaData = JSON.parse(sessionStorage.getItem('quiz_asignatura') || '{}');
      const moduloData = JSON.parse(sessionStorage.getItem('quiz_modulo') || '{}');

      if (!preguntasData.length) {
        throw new Error('No hay resultados disponibles');
      }

      setPreguntas(preguntasData);
      setRespuestas(respuestasData);
      setAsignatura(asignaturaData);
      setModulo(moduloData);

      // Calcular puntuación
      const puntuacion = calcularPuntuacion(preguntasData, respuestasData);
      setResultados(puntuacion);

      // Asegurarse de quitar el flag de quiz en progreso
      localStorage.setItem('quiz_in_progress', 'false');

      // Eliminar cualquier progreso guardado para este quiz
      const quizKey = `quiz_progress_${asignaturaId}_${moduloId}`;
      localStorage.removeItem(quizKey);

      // Guardar resultados (opcional)
      guardarResultadosQuiz({
        asignaturaId: parseInt(asignaturaId, 10),
        moduloId: moduloId === 'todos' ? 'todos' : parseInt(moduloId, 10),
        preguntas: preguntasData.map(p => p.id),
        respuestas: respuestasData,
        puntuacion
      }).catch(err => console.error("Error al guardar resultados:", err));

      setCargando(false);
    } catch (err) {
      console.error("Error al recuperar resultados:", err);
      setError("No se pudieron cargar los resultados. Es posible que no hayas completado un quiz recientemente.");
      setCargando(false);
    }
  }, [asignaturaId, moduloId]);

  const handleRetry = () => {
    // Recuperamos el tipo de quiz de sessionStorage
    const tipoQuiz = sessionStorage.getItem('quiz_tipo') || 'regular';

    // Si el tipo es examen o todos, usamos rutas especiales
    if (moduloId === 'examen' || tipoQuiz === 'examen') {
      navigate(`/quiz/${asignaturaId}/examen`);
    } else if (moduloId === 'todos' || tipoQuiz === 'todos') {
      navigate(`/quiz/${asignaturaId}/todos`);
    } else if (moduloId === 'favoritos' || tipoQuiz === 'favoritos') {
      navigate(`/quiz/${asignaturaId}/favoritos`);
    } else {
      navigate(`/quiz/${asignaturaId}/${moduloId}`);
    }
  };

  const handleBackToModules = () => {
    navigate(`/asignaturas/${asignaturaId}`);
  };

  if (error) {
    return (
      <Layout>
        <ErrorMessage message={error} />
        <div className="flex justify-center mt-6">
          <Button onClick={() => navigate('/')} variant="secondary">
            Volver al inicio
          </Button>
        </div>
      </Layout>
    );
  }

  if (cargando || !resultados) {
    return (
      <Layout>
        <div className="text-center py-12">
          <p className="text-gray-500">Cargando resultados...</p>
        </div>
      </Layout>
    );
  }

  const breadcrumbs = [
    { label: 'Inicio', to: '/' },
    { label: asignatura?.nombre || 'Asignatura', to: `/asignaturas/${asignaturaId}` },
    {
      label: modulo?.nombre || 'Módulo',
      to: modulo?.id === 'todos' || modulo?.id === 'examen' || modulo?.id === 'favoritos'
        ? `/quiz/${asignaturaId}/${modulo.id}`
        : `/quiz/${asignaturaId}/${modulo?.id || ''}`
    },
    { label: 'Resultados' }
  ];

  // Crear título para el PDF basado en la información disponible
  const pdfTitulo = `Resultados Quiz - ${asignatura?.nombre || 'Asignatura'} - ${modulo?.nombre || 'Módulo'}`;

  // Crear subtítulo para el PDF con información de puntuación
  const pdfSubtitulo = `Puntuación: ${resultados.correctas}/${resultados.total} (${resultados.porcentaje}%)`;

  return (
    <Layout>
      <PageHeader
        title="Resultados del Quiz"
        subtitle={`${asignatura?.nombre} - ${modulo?.nombre}`}
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Contenedor modificado para mostrar ResultSummary y PDFGenerator en columna en lugar de fila */}
        <div className="flex flex-col mb-8 gap-4 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <ResultSummary puntuacion={resultados} />

          {/* Botón para exportar a PDF, ahora debajo del ResultSummary */}
          <div className="w-full flex justify-center mt-4">
            <PDFGenerator
              preguntas={preguntas}
              respuestas={respuestas}
              asignatura={asignatura || { id: asignaturaId, nombre: 'Asignatura' }}
              titulo={pdfTitulo}
              subtitulo={pdfSubtitulo}
              mostrarRespuestasUsuario={true}
              buttonSize="medium"
              buttonText="Descargar resultados en PDF"
              rainbow={resultados.porcentaje === 100} // Efecto rainbow si puntuación perfecta
            />
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Revisión de respuestas:</h2>

          <div className="space-y-6">
            {preguntas.map((pregunta, index) => (
              <QuestionReview
                key={pregunta.id}
                pregunta={pregunta}
                index={index}
                respuestaUsuario={respuestas[pregunta.id]}
                showFavoriteButton={true} // Mostrar botón de favoritos
                asignaturaId={parseInt(asignaturaId, 10)}
                asignatura={asignatura}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
          <Button
            variant="primary"
            fullWidth
            onClick={handleRetry}
          >
            Reintentar Quiz
          </Button>

          <Button
            variant="secondary"
            fullWidth
            onClick={handleBackToModules}
          >
            Volver a módulos
          </Button>
        </div>
      </div>
    </Layout>
  );
}