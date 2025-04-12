import { useEffect, useState } from 'react';
import { Layout, PageHeader } from '@components/layout';
import { SubjectSelector } from '@components/quiz';
import { LoadingSpinner, ErrorMessage } from '@components/common';
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
        {cargando ? (
          <div className="py-12">
            <LoadingSpinner />
          </div>
        ) : (
          <SubjectSelector asignaturas={asignaturas} />
        )}
      </div>
    </Layout>
  );
}