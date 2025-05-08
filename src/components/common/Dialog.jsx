/**
 * Componente de diálogo modal con botones de confirmación y cancelación.
 * Implementa manejo de accesibilidad y cierre con tecla Escape.
 * Soporta diferentes tipos de diálogo para la gestión de quiz y actualizaciones.
 *
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {boolean} [props.open=false] - Controla si el diálogo está visible
 * @param {string} [props.title] - Título del diálogo
 * @param {string|React.ReactNode} [props.message] - Mensaje o contenido del diálogo
 * @param {string} [props.confirmLabel='Aceptar'] - Texto del botón de confirmación
 * @param {string} [props.cancelLabel='Cancelar'] - Texto del botón de cancelación
 * @param {Function} props.onConfirm - Función a ejecutar al confirmar
 * @param {Function} props.onCancel - Función a ejecutar al cancelar
 * @param {('primary'|'danger'|'success')} [props.variant='primary'] - Variante visual del botón de confirmación
 * @param {('small'|'medium'|'large')} [props.size='medium'] - Tamaño del diálogo
 * @returns {JSX.Element|null} Componente Dialog renderizado o null si está cerrado
 *
 * @example
 * const [isOpen, setIsOpen] = useState(false);
 *
 * <Dialog
 *   open={isOpen}
 *   title="Confirmar acción"
 *   message="¿Estás seguro que deseas continuar?"
 *   onConfirm={() => { setIsOpen(false); doAction(); }}
 *   onCancel={() => setIsOpen(false)}
 *   variant="danger"
 *   confirmLabel="Sí, continuar"
 * />
 */
import { useEffect, useRef } from 'react';
import { Button } from './';

export default function Dialog({
  open = false,
  title,
  message,
  confirmLabel = 'Aceptar',
  cancelLabel = 'Cancelar',
  onConfirm,
  onCancel,
  variant = 'primary', // primario, peligro, éxito, etc.
  size = 'medium', // pequeño, mediano, grande
}) {
  const dialogRef = useRef(null);

  // Manejo de foco y tecla escape
  useEffect(() => {
    const dialogElement = dialogRef.current;

    if (open && dialogElement) {
      // Enfocar el diálogo cuando se abre
      dialogElement.focus();

      // Manejar la tecla escape para cerrar el diálogo
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          onCancel();
        }
      };

      // Prevenir desplazamiento cuando el diálogo está abierto
      document.body.style.overflow = 'hidden';

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'auto';
      };
    }
  }, [open, onCancel]);

  if (!open) return null;

  // Determinar clases de variante para botón principal
  const getButtonVariantClass = () => {
    switch(variant) {
      case 'danger':
        return 'bg-red-600 hover:bg-red-700 text-white dark:bg-red-700 dark:hover:bg-red-800';
      case 'success':
        return 'bg-green-600 hover:bg-green-700 text-white dark:bg-green-700 dark:hover:bg-green-800';
      case 'primary':
      default:
        return 'bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-indigo-700 dark:hover:bg-indigo-800';
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Fondo oscuro */}
      <div
        className="fixed inset-0 bg-gray-500 dark:bg-gray-900 bg-opacity-75 dark:bg-opacity-75 transition-opacity"
        aria-hidden="true"
        onClick={onCancel}  // Permitir cerrar al hacer clic en el fondo
      ></div>

      {/* Posicionamiento del diálogo */}
      <div className="flex items-center justify-center min-h-screen p-4 text-center sm:p-0">
        {/* Panel del diálogo */}
        <div
          ref={dialogRef}
          tabIndex="-1"
          className={`
            relative bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8
            ${size === 'small' ? 'sm:max-w-sm' : size === 'large' ? 'sm:max-w-lg' : 'sm:max-w-md'}
          `}
        >
          <div className="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              {/* Ícono para diálogos de tipo específico */}
              {variant === 'danger' && (
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-red-900 sm:mx-0 sm:h-10 sm:w-10">
                  <svg className="h-6 w-6 text-red-600 dark:text-red-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
              )}

              {variant === 'success' && (
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 sm:mx-0 sm:h-10 sm:w-10">
                  <svg className="h-6 w-6 text-green-600 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}

              {/* Título y mensaje */}
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                {title && (
                  <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white" id="modal-title">
                    {title}
                  </h3>
                )}
                <div className="mt-2">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {message}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <Button
              variant={variant}
              size="medium"
              onClick={onConfirm}
              className="w-full sm:w-auto sm:ml-3"
            >
              {confirmLabel}
            </Button>
            <Button
              variant="secondary"
              size="medium"
              onClick={onCancel}
              className="w-full mt-3 sm:w-auto sm:mt-0"
            >
              {cancelLabel}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}