import React from 'react';
import { useState, useEffect } from 'react';

/**
 * Componente de botón reutilizable con diferentes variantes, tamaños, estados y borde animado arcoíris.
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
 * @param {boolean} [props.rainbow=false] - Si es true, muestra el borde animado de arcoíris
 * @param {string} [props.className] - Clases CSS adicionales
 * @returns {JSX.Element} Componente Button renderizado
 */
export default function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  type = 'button',
  rainbow = false,
  className = ''
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Base styles for all variants
  const baseStyles = 'inline-flex items-center justify-center font-medium transition duration-200 focus:outline-none rounded-lg';

  // Variant-specific styles
  const variantStyles = {
    primary: 'bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-indigo-700 dark:hover:bg-indigo-800',
    secondary: 'bg-gray-500 hover:bg-gray-600 text-white dark:bg-gray-600 dark:hover:bg-gray-700',
    danger: 'bg-red-600 hover:bg-red-700 text-white dark:bg-red-700 dark:hover:bg-red-800',
    success: 'bg-green-600 hover:bg-green-700 text-white dark:bg-green-700 dark:hover:bg-green-800'
  };

  // Size-specific styles
  const sizeStyles = {
    small: 'py-1 px-3 text-sm',
    medium: 'py-2 px-4',
    large: 'py-3 px-6 text-lg'
  };

  // Disabled styles
  const disabledStyles = disabled
    ? 'opacity-50 cursor-not-allowed'
    : 'hover:shadow-md';

  // Width styles
  const widthStyles = fullWidth ? 'w-full' : '';

  // Focus ring styles
  const focusRingStyle = `focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800 focus:ring-${
    variant === 'primary' ? 'indigo' :
    variant === 'secondary' ? 'gray' :
    variant === 'danger' ? 'red' : 'green'
  }-500`;

  // Combine all styles
  const buttonClassName = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${disabledStyles}
    ${widthStyles}
    ${className}
  `;

  // Agregar estilos de keyframes globalmente si es necesario
  // Esto evita problemas con el atributo jsx
  useEffect(() => {
    // Solo procedemos si el botón es de tipo rainbow
    if (!rainbow) return;

    // Definimos los estilos aquí dentro del efecto para evitar la dependencia
    const keyframesStyles = `
      @keyframes gradient-shift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }

      @keyframes orbit-new {
        0% { top: -20px; left: 50%; transform: translateX(-50%); }
        25% { top: 50%; left: calc(100% + 20px); transform: translateY(-50%); }
        50% { top: calc(100% + 20px); left: 50%; transform: translateX(-50%); }
        75% { top: 50%; left: -20px; transform: translateY(-50%); }
        100% { top: -20px; left: 50%; transform: translateX(-50%); }
      }

      @keyframes orbit-fancy {
        0% { top: calc(100% + 20px); left: 50%; transform: translateX(-50%); }
        25% { top: 50%; left: -20px; transform: translateY(-50%); }
        50% { top: -20px; left: 50%; transform: translateX(-50%); }
        75% { top: 50%; left: calc(100% + 20px); transform: translateY(-50%); }
        100% { top: calc(100% + 20px); left: 50%; transform: translateX(-50%); }
      }

      @keyframes orbit-wow {
        0% { top: 50%; left: calc(100% + 20px); transform: translateY(-50%); }
        25% { top: calc(100% + 20px); left: 50%; transform: translateX(-50%); }
        50% { top: 50%; left: -20px; transform: translateY(-50%); }
        75% { top: -20px; left: 50%; transform: translateX(-50%); }
        100% { top: 50%; left: calc(100% + 20px); transform: translateY(-50%); }
      }
    `;

    // Solo agregamos los estilos si no existen ya
    if (!document.getElementById('rainbow-button-styles')) {
      const styleEl = document.createElement('style');
      styleEl.id = 'rainbow-button-styles';
      styleEl.textContent = keyframesStyles;
      document.head.appendChild(styleEl);
    }

    // No es necesario limpiar este efecto ya que solo se ejecuta una vez
    // y los estilos deben permanecer mientras la aplicación esté en uso
  }, [rainbow]); // Solo depende de la prop rainbow

  // Render with rainbow effect if specified
  if (rainbow) {
    return (
      <div
        className={`relative ${fullWidth ? 'w-full' : 'inline-block'}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        data-rainbow="true"
      >
        {/* Tag "NEW" rotando por el borde del botón */}
        <div
          className={`absolute bg-yellow-400 text-black text-xs px-2 py-0.5 rounded-md font-bold transition-all duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'} z-20`}
          style={{
            animation: isHovered ? 'orbit-new 8s linear infinite' : 'none',
          }}
        >
          NEW
        </div>

        {/* Tag "WOW" rotando por el borde del botón */}
        <div
          className={`absolute bg-cyan-500 text-white text-xs px-2 py-0.5 rounded-md font-bold transition-all duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'} z-20`}
          style={{
            animation: isHovered ? 'orbit-wow 8s linear infinite' : 'none',
          }}
        >
          WOW
        </div>

        {/* Contenedor con borde arcoíris giratorio */}
        <div className="relative p-0.5 rounded-lg overflow-hidden">
          {/* Fondo animado arcoíris giratorio */}
          <div
            className={`absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 via-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 transition-all duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            style={{
              backgroundSize: '200% 200%',
              animation: isHovered ? 'gradient-shift 6s linear infinite' : 'none'
            }}
          />

          {/* Botón real */}
          <button
            type={type}
            className={`${buttonClassName} relative z-10 w-full`}
            onClick={onClick}
            disabled={disabled}
          >
            {children}
          </button>
        </div>

        {/* Tag "FANCY" rotando por el borde del botón */}
        <div
          className={`absolute bg-pink-500 text-white text-xs px-2 py-0.5 rounded-md font-bold transition-all duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'} z-20`}
          style={{
            animation: isHovered ? 'orbit-fancy 8s linear infinite' : 'none',
          }}
        >
          FANCY
        </div>
      </div>
    );
  }

  // Versión normal del botón (sin arcoíris)
  return (
    <button
      type={type}
      className={`${buttonClassName} ${focusRingStyle}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}