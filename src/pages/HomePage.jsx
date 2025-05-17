/**
 * Página principal de la aplicación que muestra el selector de asignaturas.
 * Carga la lista de asignaturas disponibles y gestiona los estados de carga y error.
 * Incluye sección para retomar quizzes pendientes y acceder a preguntas favoritas.
 *
 * @component
 * @returns {JSX.Element} Componente HomePage renderizado
 *
 * @example
 * // En un componente Router
 * <Route path="/" element={<HomePage />} />
 */
import { useEffect, useState } from 'react';
import { Layout, PageHeader } from '@components/layout';
import { SubjectSelector, PendingQuizzes, FavoriteQuizzes } from '@components/quiz';
import { LoadingSpinner, ErrorMessage, ToastContainer } from '@components/common';
import { fetchAsignaturas } from '@services/quizDataService';

export default function HomePage() {
  // Usamos estado local en lugar del contexto
  const [asignaturas, setAsignaturas] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);
  // Añadimos un estado para controlar si ya se ha hecho la carga inicial
  const [cargaInicial, setCargaInicial] = useState(false);

  useEffect(() => {
    // Cargamos las asignaturas al montar el componente, solo si no se han cargado
    const loadAsignaturas = async () => {
      try {
        setCargando(true);
        const data = await fetchAsignaturas();
        setAsignaturas(data);
      } catch (err) {
        console.error("Error al cargar asignaturas:", err);
        setError("No se pudieron cargar las asignaturas. Por favor, inténtelo de nuevo.");
      } finally {
        setCargando(false);
        // Marcamos que ya se ha realizado la carga inicial
        setCargaInicial(true);
      }
    };

    // Solo cargamos la primera vez
    if (!cargaInicial && asignaturas.length === 0) {
      loadAsignaturas();
    }
  }, [cargaInicial, asignaturas.length]);

  if (error) {
    return (
      <Layout>
        <ErrorMessage message={error} />
      </Layout>
    );
  }

  return (
    <Layout>
      <PageHeader
        title="Elige una asignatura"
        subtitle="Selecciona una asignatura para comenzar a practicar con los cuestionarios disponibles."
      />

      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Sección para tests pendientes */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            <span className="border-b-2 border-indigo-500 pb-1">Mis secciones</span>
          </h2>
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <PendingQuizzes />
            <FavoriteQuizzes />
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-gray-200 dark:border-gray-700 my-8"></div>

        {/* Sección de asignaturas */}
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          <span className="border-b-2 border-indigo-500 pb-1">Asignaturas disponibles</span>
        </h2>

        {cargando ? (
          <div className="py-12">
            <LoadingSpinner />
          </div>
        ) : (
          <SubjectSelector asignaturas={asignaturas} />
        )}
      </div>

      {/* Contenedor de toasts para notificaciones */}
      <ToastContainer />
    </Layout>
  );
}