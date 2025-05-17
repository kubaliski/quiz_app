/**
 * Componente de límite de errores global que captura errores no manejados
 * en cualquier parte de la aplicación y muestra una interfaz de recuperación.
 *
 * @component
 */
import React from 'react';
import { Button, ErrorMessage } from '@components/common';
import { isModuleLoadError } from '@services/swService';
import { attemptRecovery, reportError } from '@services/errorService';

class GlobalErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      isRecovering: false
    };
  }

  // Este método se ejecuta cuando ocurre un error en cualquier componente hijo
  static getDerivedStateFromError(error) {
    // Actualizar el estado para mostrar la UI de fallback
    return { hasError: true, error };
  }

  // Este método permite manejar el error y registrarlo
  componentDidCatch(error, errorInfo) {
    // Registrar el error para análisis
    console.error('Error capturado por GlobalErrorBoundary:', error, errorInfo);
    this.setState({ errorInfo });

    // Reportar al sistema centralizado
    reportError(error, 'react');
  }

  // Método para reiniciar la aplicación con limpieza
  handleReloadApp = async () => {
    this.setState({ isRecovering: true });

    try {
      // Intentar recuperación automática primero
      await attemptRecovery(this.state.error);

      // Recargar la página en cualquier caso
      window.location.reload(true);
    } catch (error) {
      console.error('Error durante el proceso de recarga:', error);

      // Si falla, intentar una recarga directa
      window.location.reload(true);
    }
  };

  // Método para intentar recuperarse sin recargar
  handleTryRecover = async () => {
    this.setState({ isRecovering: true });

    try {
      const success = await attemptRecovery(this.state.error);

      if (success) {
        // Si parece que se recuperó, resetear el error boundary
        this.setState({
          hasError: false,
          error: null,
          errorInfo: null,
          isRecovering: false
        });
      } else {
        // Si no se pudo recuperar, mantener isRecovering en false
        this.setState({ isRecovering: false });
      }
    } catch (error) {
      console.error('Error durante intento de recuperación:', error);
      this.setState({ isRecovering: false });
    }
  };

  render() {
    if (this.state.hasError) {
      // Detectar si el error está relacionado con carga de módulos
      const isModuleError = isModuleLoadError(this.state.error);

      // Renderizar UI de fallback cuando ocurre un error
      return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
          <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">
              {isModuleError
                ? "Error de carga de recursos"
                : "Ha ocurrido un problema"}
            </h2>

            <ErrorMessage
              message={
                this.state.error?.message ||
                "Ha ocurrido un error inesperado en la aplicación."
              }
            />

            {isModuleError && (
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Parece que hubo un problema al cargar algunos recursos. Esto puede ocurrir cuando hay una actualización de la aplicación o problemas de conexión.
              </p>
            )}

            <div className="mt-6 space-y-3">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Intenta una de las siguientes opciones:
              </p>

              <div className="flex flex-col space-y-2">
                <Button
                  onClick={this.handleTryRecover}
                  variant="secondary"
                  fullWidth
                  disabled={this.state.isRecovering}
                >
                  {this.state.isRecovering ? "Intentando recuperar..." : "Intentar recuperar"}
                </Button>

                <Button
                  onClick={this.handleReloadApp}
                  variant="primary"
                  fullWidth
                  disabled={this.state.isRecovering}
                >
                  {this.state.isRecovering ? "Recargando..." : "Recargar aplicación"}
                </Button>
              </div>

              {/* Mostrar detalles del error para desarrollo */}
              {import.meta.env?.DEV && this.state.errorInfo && (
                <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-700 rounded overflow-auto text-xs">
                  <details>
                    <summary className="cursor-pointer text-sm font-medium mb-2">
                      Detalles del error (solo desarrollo)
                    </summary>
                    <pre className="whitespace-pre-wrap">
                      {this.state.error?.toString()}
                    </pre>
                    <pre className="whitespace-pre-wrap mt-2">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  </details>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }

    // Si no hay error, renderizar los hijos normalmente
    return this.props.children;
  }
}

export default GlobalErrorBoundary;