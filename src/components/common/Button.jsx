/**
 * Componente de botón reutilizable con diferentes variantes, tamaños y estados.
 *
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {React.ReactNode} props.children - Contenido del botón
 * @param {Function} [props.onClick] - Función a ejecutar al hacer clic en el botón
 * @param {('primary'|'secondary'|'danger'|'success')} [props.variant='primary'] - Variante visual del botón
 * @param {('small'|'medium'|'large')} [props.size='medium'] - Tamaño del botón
 * @param {boolean} [props.fullWidth=false] - Si es true, el botón ocupará todo el ancho disponible
 * @param {boolean} [props.disabled=false] - Si es true, el botón estará deshabilitado
 * @param {('button'|'submit'|'reset')} [props.type='button'] - Tipo HTML del botón
 * @returns {JSX.Element} Componente Button renderizado
 *
 * @example
 * // Botón primario básico
 * <Button onClick={() => console.log('Clicked!')}>Aceptar</Button>
 *
 * @example
 * // Botón de peligro grande y deshabilitado
 * <Button
 *   variant="danger"
 *   size="large"
 *   disabled={true}
 *   onClick={handleDelete}
 * >
 *   Eliminar
 * </Button>
 */
export default function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  type = 'button'
}) {
  const variantStyles = {
    primary: 'bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-indigo-500 dark:bg-indigo-700 dark:hover:bg-indigo-800',
    secondary: 'bg-gray-500 hover:bg-gray-600 text-white focus:ring-gray-500 dark:bg-gray-600 dark:hover:bg-gray-700',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500 dark:bg-red-700 dark:hover:bg-red-800',
    success: 'bg-green-600 hover:bg-green-700 text-white focus:ring-green-500 dark:bg-green-700 dark:hover:bg-green-800'
  };

  const sizeStyles = {
    small: 'py-1 px-3 text-sm',
    medium: 'py-2 px-4',
    large: 'py-3 px-6 text-lg'
  };

  const disabledStyles = disabled
    ? 'opacity-50 cursor-not-allowed'
    : 'hover:shadow-md';

  const widthStyles = fullWidth ? 'w-full' : '';

  const className = `
    inline-flex items-center justify-center rounded-lg font-medium
    transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2
    dark:focus:ring-offset-gray-800
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${disabledStyles}
    ${widthStyles}
  `;

  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}