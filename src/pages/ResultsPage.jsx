import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Layout, PageHeader } from '@components/layout';
import { ResultSummary, QuestionReview } from '@components/quiz';
import { Button, ErrorMessage } from '@components/common';
import { guardarResultadosQuiz } from '@services/quizDataService';
import { calcularPuntuacion } from '@utils/quizUtils';

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
    navigate(`/quiz/${asignaturaId}/${moduloId}`);
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
    { label: modulo?.nombre || 'Módulo', to: `/quiz/${asignaturaId}/${moduloId}` },
    { label: 'Resultados' }
  ];

  return (
    <Layout>
      <PageHeader
        title="Resultados del Quiz"
        subtitle={`${asignatura?.nombre} - ${modulo?.nombre}`}
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <ResultSummary puntuacion={resultados} />

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Revisión de respuestas:</h2>

          <div className="space-y-6">
            {preguntas.map((pregunta, index) => (
              <QuestionReview
                key={pregunta.id}
                pregunta={pregunta}
                index={index}
                respuestaUsuario={respuestas[pregunta.id]}
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