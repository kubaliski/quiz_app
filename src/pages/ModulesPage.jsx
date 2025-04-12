/**
 * Página que muestra los módulos disponibles para una asignatura seleccionada.
 * Carga la información completa de la asignatura y permite al usuario seleccionar un módulo para el quiz.
 *
 * @component
 * @returns {JSX.Element} Componente ModulesPage renderizado
 *
 * @example
 * // En un componente Router
 * <Route path="/asignaturas/:asignaturaId" element={<ModulesPage />} />
 */
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Layout, PageHeader } from '@components/layout';
import { ModuleSelector } from '@components/quiz';
import { LoadingSpinner, ErrorMessage, Button } from '@components/common';
import { fetchAsignaturaCompleta } from '@services/quizDataService';

export default function ModulesPage() {
  const { asignaturaId } = useParams();
  const navigate = useNavigate();

  // Usamos estado local en lugar del contexto
  const [asignatura, setAsignatura] = useState(null);
  const [modulos, setModulos] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  // Convertir a número el ID de la URL
  const asigId = parseInt(asignaturaId, 10);

  useEffect(() => {
    let mounted = true;

    const cargarAsignatura = async () => {
      if (!asignatura || asignatura.id !== asigId) {
        try {
          setCargando(true);
          const asignaturaData = await fetchAsignaturaCompleta(asigId);

          if (!asignaturaData) {
            throw new Error("Asignatura no encontrada");
          }

          // Solo actualizamos el estado si el componente sigue montado
          if (mounted) {
            setAsignatura(asignaturaData);
            setModulos(asignaturaData.modulos || []);
            setCargando(false);
          }
        } catch (err) {
          console.error("Error al cargar asignatura:", err);
          if (mounted) {
            setError("No se pudo cargar la asignatura seleccionada. Por favor, inténtelo de nuevo.");
            setCargando(false);
          }
        }
      }
    };

    cargarAsignatura();

    // Función de limpieza para evitar actualizar estado en componentes desmontados
    return () => {
      mounted = false;
    };
  }, [asigId, asignatura]);

  const handleBack = () => {
    navigate('/');
  };

  if (error) {
    return (
      <Layout>
        <ErrorMessage message={error} />
        <div className="flex justify-center mt-6">
          <Button onClick={handleBack} variant="secondary">Volver a asignaturas</Button>
        </div>
      </Layout>
    );
  }

  // Obtenemos el nombre de la asignatura
  const asignaturaNombre = asignatura ? asignatura.nombre : "Cargando...";

  const breadcrumbs = [
    { label: 'Inicio', to: '/' },
    { label: asignaturaNombre }
  ];

  return (
    <Layout>
      <PageHeader
        title={asignaturaNombre}
        subtitle="Selecciona un módulo para comenzar el quiz"
        breadcrumbs={breadcrumbs}
        actions={
          <Button onClick={handleBack} variant="secondary">
            Volver a asignaturas
          </Button>
        }
      />

      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {cargando ? (
          <div className="py-12">
            <LoadingSpinner />
          </div>
        ) : (
          <ModuleSelector
            modulos={modulos}
            asignaturaId={asigId}
          />
        )}
      </div>
    </Layout>
  );
}