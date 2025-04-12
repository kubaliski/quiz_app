/**
 * Componente de diálogo modal con botones de confirmación y cancelación.
 * Implementa manejo de accesibilidad y cierre con tecla Escape.
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

      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [open, onCancel]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Fondo oscuro */}
      <div className="fixed inset-0 bg-gray-100 dark:bg-gray-900 bg-opacity-15 dark:bg-opacity-50 transition-opacity" aria-hidden="true"></div>

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
              {/* Título y mensaje */}
              <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                {title && (
                  <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white" id="modal-title">
                    {title}
                  </h3>
                )}
                <div className="mt-2">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {message}
                  </p>
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
              className="sm:ml-3"
            >
              {confirmLabel}
            </Button>
            <Button
              variant="secondary"
              size="medium"
              onClick={onCancel}
              className="mt-3 sm:mt-0"
            >
              {cancelLabel}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}