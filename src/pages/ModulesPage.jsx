/**
 * Página que muestra los módulos disponibles para una asignatura seleccionada.
 * Carga la información completa de la asignatura y permite al usuario seleccionar un módulo para el quiz.
 * Gestiona errores relacionados con el Service Worker y caché.
 *
 * @component
 * @returns {JSX.Element} Componente ModulesPage renderizado
 */
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Layout, PageHeader } from '@components/layout';
import { ModuleSelector } from '@components/quiz';
import { LoadingSpinner, Button, SWErrorHandler } from '@components/common';
import { fetchAsignaturaCompleta } from '@services/quizDataService';
import { checkForUpdates } from '@services/swService';

export default function ModulesPage() {
  const { asignaturaId } = useParams();
  const navigate = useNavigate();

  // Estado local
  const [asignatura, setAsignatura] = useState(null);
  const [modulos, setModulos] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);
  const [reloadCount, setReloadCount] = useState(0); // Contador de reintentos

  // Convertir a número el ID de la URL
  const asigId = parseInt(asignaturaId, 10);

  useEffect(() => {
    let mounted = true;

    const cargarAsignatura = async () => {
      if (!asignatura || asignatura.id !== asigId) {
        try {
          setCargando(true);

          // Comprobar actualizaciones del Service Worker
          const hasUpdates = await checkForUpdates();
          if (hasUpdates) {
            console.log('Hay actualizaciones del Service Worker disponibles');
          }

          const asignaturaData = await fetchAsignaturaCompleta(asigId);

          if (!asignaturaData) {
            throw new Error("Asignatura no encontrada");
          }

          // Solo actualizamos el estado si el componente sigue montado
          if (mounted) {
            setAsignatura(asignaturaData);
            setModulos(asignaturaData.modulos || []);
            setError(null); // Limpiamos cualquier error previo
            setCargando(false);
          }
        } catch (err) {
          console.error("Error al cargar asignatura:", err);
          if (mounted) {
            setError(err);
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
  }, [asigId, asignatura, reloadCount]); // Añadimos reloadCount para forzar recarga

  const handleBack = () => {
    navigate('/');
  };

  const handleRetry = () => {
    // Incrementar contador para forzar recarga sin limpiar caché
    setReloadCount(prev => prev + 1);
  };

  // Manejo de errores relacionados con Service Worker
  if (error) {
    return (
      <Layout>
        <PageHeader
          title="Error al cargar módulos"
          subtitle="Se ha producido un problema al cargar la información de la asignatura"
          breadcrumbs={[
            { label: 'Inicio', to: '/' },
            { label: 'Error' }
          ]}
        />

        <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <SWErrorHandler
            error={error}
            onRetry={handleRetry}
            onReset={handleBack}
          />
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