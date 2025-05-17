/**
 * Componente de tarjeta que proporciona un contenedor estructurado para contenido.
 *
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {React.ReactNode} props.children - Contenido principal de la tarjeta
 * @param {string} [props.title] - Título de la tarjeta (opcional)
 * @param {string} [props.subtitle] - Subtítulo de la tarjeta (opcional)
 * @param {React.ReactNode} [props.footer] - Contenido del pie de la tarjeta (opcional)
 * @param {string} [props.className=''] - Clases CSS adicionales para personalizar la tarjeta
 * @returns {JSX.Element} Componente Card renderizado
 *
 * @example
 * <Card
 *   title="Información del Usuario"
 *   subtitle="Datos personales"
 *   footer={<Button>Guardar Cambios</Button>}
 * >
 *   <p>Contenido principal de la tarjeta</p>
 * </Card>
 */
export default function Card({
  children,
  title,
  subtitle,
  footer,
  className = ''
}) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden ${className}`}>
      {(title || subtitle) && (
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          {title && <h3 className="text-xl font-semibold dark:text-white">{title}</h3>}
          {subtitle && <p className="text-gray-600 dark:text-gray-400 mt-1">{subtitle}</p>}
        </div>
      )}

      <div className="p-6">
        {children}
      </div>

      {footer && (
        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-700">
          {footer}
        </div>
      )}
    </div>
  );
}