/**
 * Componente Modal reutilizable para mostrar contenido superpuesto.
 * Implementa transiciones fluidas, cierre con Escape, y prevención de scroll.
 *
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {boolean} props.isOpen - Controla si el modal está visible
 * @param {Function} props.onClose - Función a ejecutar al cerrar el modal
 * @param {string} [props.title] - Título del modal (opcional)
 * @param {React.ReactNode} props.children - Contenido principal del modal
 * @param {React.ReactNode} [props.footer] - Contenido del pie del modal (opcional)
 * @param {string} [props.size='md'] - Tamaño del modal ('sm', 'md', 'lg', 'xl')
 * @param {boolean} [props.closeOnBackdropClick=true] - Si es true, el modal se cierra al hacer clic en el fondo
 * @returns {JSX.Element|null} Componente Modal renderizado o null si está cerrado
 *
 * @example
 * <Modal
 *   isOpen={modalOpen}
 *   onClose={() => setModalOpen(false)}
 *   title="Título del Modal"
 *   footer={<Button onClick={() => setModalOpen(false)}>Cerrar</Button>}
 * >
 *   <p>Contenido del modal</p>
 * </Modal>
 */
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'md',
  closeOnBackdropClick = true
}) {
  const modalRef = useRef(null);

  // Determinar la clase de tamaño
  const sizeClass = {
    sm: 'sm:max-w-sm',
    md: 'sm:max-w-md',
    lg: 'sm:max-w-lg',
    xl: 'sm:max-w-xl',
    '2xl': 'sm:max-w-2xl',
    '3xl': 'sm:max-w-3xl',
    '4xl': 'sm:max-w-4xl',
    '5xl': 'sm:max-w-5xl',
    full: 'sm:max-w-full sm:w-full'
  }[size] || 'sm:max-w-md';

  // Manejar tecla Escape y prevenir desplazamiento
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Prevenir scroll en el cuerpo cuando el modal está abierto
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      // Restaurar scroll cuando el modal se cierra
      document.body.style.overflow = originalStyle;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Enfocar el modal cuando se abre (accesibilidad)
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  // Manejar clic en el backdrop
  const handleBackdropClick = (e) => {
    if (closeOnBackdropClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {/* Overlay/Backdrop */}
      <div
        className="fixed inset-0 bg-gray-500 dark:bg-gray-900 bg-opacity-75 dark:bg-opacity-75 transition-opacity"
        aria-hidden="true"
        onClick={handleBackdropClick}
      ></div>

      {/* Modal Container */}
      <div className="flex items-center justify-center min-h-screen p-4 text-center sm:p-0">
        {/* Modal Panel */}
        <div
          ref={modalRef}
          tabIndex="-1"
          className={`relative bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all w-full ${sizeClass}`}
        >
          {/* Modal Header */}
          {title && (
            <div className="px-4 py-3 sm:px-6 border-b border-gray-200 dark:border-gray-700">
              <h3
                className="text-lg leading-6 font-medium text-gray-900 dark:text-white"
                id="modal-title"
              >
                {title}
              </h3>
            </div>
          )}

          {/* Modal Content */}
          <div className="px-4 py-3 sm:p-6">
            {children}
          </div>

          {/* Modal Footer */}
          {footer && (
            <div className="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse border-t border-gray-200 dark:border-gray-700">
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}