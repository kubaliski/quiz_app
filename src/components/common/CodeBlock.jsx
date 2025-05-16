import { useState, useEffect } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { showToast } from '@utils/toastUtils';

/**
 * Componente reutilizable para mostrar bloques de código con la opción de copiar al portapapeles.
 * Este componente mantiene el estilo visual existente mientras agrega la funcionalidad de copia.
 *
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {string} props.code - El código a mostrar
 * @param {string} [props.language='text'] - El lenguaje del código para el resaltado de sintaxis
 * @param {boolean} [props.darkMode=false] - Si se debe usar el tema oscuro
 * @param {string} [props.className=''] - Clases adicionales para el contenedor
 * @param {Object} [props.customStyle={}] - Estilos personalizados para el SyntaxHighlighter
 * @param {boolean} [props.isSmallScreen=false] - Si se está mostrando en pantalla pequeña
 * @param {boolean} [props.textoLargo=false] - Si el texto es largo
 * @returns {JSX.Element} Componente CodeBlock renderizado
 */
export default function CodeBlock({
  code,
  language = 'text',
  darkMode = false,
  className = '',
  customStyle = {},
  isSmallScreen = false,
  textoLargo = false
}) {
  // Estado para manejar el feedback de la copia
  const [copiado, setCopiado] = useState(false);

  // Resetear el estado de copiado después de 2 segundos
  useEffect(() => {
    let timer;
    if (copiado) {
      timer = setTimeout(() => {
        setCopiado(false);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [copiado]);

  // Función para copiar código al portapapeles
  const handleCopyCode = async () => {
    if (!code) return;

    try {
      await navigator.clipboard.writeText(code);
      setCopiado(true);
      showToast('Código copiado al portapapeles', 'success');
    } catch (error) {
      console.error('Error al copiar código:', error);
      showToast('Error al copiar el código', 'error');
    }
  };

  // Si no hay código, no renderizar nada
  if (!code) return null;

  // Estilos por defecto para el SyntaxHighlighter
  const defaultStyle = {
    borderRadius: '0.5rem',
    margin: 0,
    padding: '0.75rem',
    fontSize: isSmallScreen && textoLargo ? '0.8rem' : '0.9rem',
    ...customStyle
  };

  return (
    <div className={`relative ${className}`}>
      <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
        <SyntaxHighlighter
          language={language}
          style={darkMode ? dark : docco}
          customStyle={defaultStyle}
        >
          {code}
        </SyntaxHighlighter>
      </div>

      {/* Botón para copiar código */}
      <button
        onClick={handleCopyCode}
        className={`absolute top-2 right-2 p-1.5 rounded-md transition-all duration-200 ${
          copiado
            ? 'bg-green-500 text-white'
            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
        }`}
        title="Copiar código"
        aria-label="Copiar código al portapapeles"
      >
        {copiado ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
            <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
          </svg>
        )}
      </button>
    </div>
  );
}