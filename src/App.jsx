// App.jsx
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Suspense, lazy, useState, useEffect } from 'react';
import {
  HomePage,
  AboutPage,
  NotFoundPage
} from './pages';
import { PWAInstallPrompt } from '@components/layout';
import { ServiceWorkerUpdater, LoadingSpinner, ErrorMessage } from '@components/common';
import { registerModuleErrorHandler } from '@services/swService';

// Importaciones diferidas para mejorar el rendimiento y manejo de errores
const ModulesPage = lazy(() => import('./pages/ModulesPage'));
const QuizPage = lazy(() => import('./pages/QuizPage'));
const ResultsPage = lazy(() => import('./pages/ResultsPage'));

// Wrapper con error boundary para componentes de ruta
function RouteErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Registrar manejador de errores de módulos
    const unregister = registerModuleErrorHandler((error) => {
      console.error('Error capturado por el boundary:', error);
      setErrorMessage(error.message || "Error al cargar un módulo");
      setHasError(true);
    });

    return () => {
      unregister();
    };
  }, []);

  if (hasError) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <ErrorMessage message={errorMessage || "Se ha producido un error al cargar los datos. Es posible que se esté utilizando una versión en caché."} />
        <div className="mt-4 space-y-4">
          <p className="text-center text-gray-600">Intenta una de las siguientes soluciones:</p>
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => {
                // Limpiar caché si es posible y recargar
                if ('caches' in window) {
                  caches.keys().then(cacheNames => {
                    cacheNames.forEach(cacheName => {
                      if (cacheName.includes('quiz')) {
                        caches.delete(cacheName);
                      }
                    });
                    window.location.reload(true);
                  });
                } else {
                  window.location.reload(true);
                }
              }}
              className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
            >
              Recargar la aplicación
            </button>
            <button
              onClick={() => navigate('/')}
              className="bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300"
            >
              Volver a la página principal
            </button>
          </div>
        </div>
      </div>
    );
  }

  return children;
}

export default function App() {
  return (
    <BrowserRouter>
      <PWAInstallPrompt />
      <ServiceWorkerUpdater />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/asignaturas/:asignaturaId"
          element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><LoadingSpinner /></div>}>
              <RouteErrorBoundary>
                <ModulesPage />
              </RouteErrorBoundary>
            </Suspense>
          }
        />
        <Route
          path="/quiz/:asignaturaId/:moduloId"
          element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><LoadingSpinner /></div>}>
              <RouteErrorBoundary>
                <QuizPage />
              </RouteErrorBoundary>
            </Suspense>
          }
        />
        <Route
          path="/resultados/:asignaturaId/:moduloId"
          element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><LoadingSpinner /></div>}>
              <RouteErrorBoundary>
                <ResultsPage />
              </RouteErrorBoundary>
            </Suspense>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}