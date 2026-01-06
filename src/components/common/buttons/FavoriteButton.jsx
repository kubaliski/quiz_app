/**
 * Componente que renderiza un botón para marcar/desmarcar una pregunta como favorita.
 * Muestra un ícono de estrella y cambia su estado visual según si la pregunta es favorita o no.
 *
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {string|number} props.asignaturaId - ID de la asignatura
 * @param {string|number} props.preguntaId - ID de la pregunta
 * @param {Function} props.onToggle - Función a ejecutar cuando se cambia el estado (recibe el nuevo estado)
 * @param {boolean} [props.initialState=false] - Estado inicial del botón
 * @param {string} [props.size='md'] - Tamaño del botón ('sm', 'md', 'lg')
 * @param {string} [props.className=''] - Clases CSS adicionales
 * @returns {JSX.Element} Componente FavoriteButton renderizado
 */
import { useState, useEffect, useContext } from 'react';
import { isFavorite } from '@services/favoritesService';
import { QuizContext } from '@context';

export default function FavoriteButton({
  asignaturaId,
  preguntaId,
  onToggle,
  initialState = false,
  size = 'md',
  className = ''
}) {
  const [isFav, setIsFav] = useState(initialState);
  const [isLoading, setIsLoading] = useState(true);
  const quizContext = useContext(QuizContext);
  const favoritesToggled = quizContext?.favoritesToggled;

  // Verificar el estado inicial desde localStorage
  useEffect(() => {
    if (!asignaturaId || !preguntaId) return;

    const checkFavoriteStatus = async () => {
      setIsLoading(true);
      try {
        const status = await isFavorite(asignaturaId, preguntaId);
        setIsFav(status);
      } catch (error) {
        console.error('Error al verificar favorito:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkFavoriteStatus();
  }, [asignaturaId, preguntaId]);

  // Sincronizar con cambios globales de favoritos cuando existe QuizProvider
  useEffect(() => {
    if (!favoritesToggled || !preguntaId || !asignaturaId) return;

    const key = favoritesToggled[preguntaId];
    if (!key) return;

    let mounted = true;

    (async () => {
      setIsLoading(true);
      try {
        const status = await isFavorite(asignaturaId, preguntaId);
        if (mounted) setIsFav(status);
      } catch (error) {
        console.error('Error al refrescar favorito:', error);
      } finally {
        if (mounted) setIsLoading(false);
      }
    })();

    return () => { mounted = false; };
  }, [favoritesToggled, asignaturaId, preguntaId]);

  // Determinar tamaño del botón - círculos compactos (heredado del estilo iOS)
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'w-8 h-8 min-w-8 min-h-8';
      case 'lg':
        return 'w-12 h-12 min-w-12 min-h-12';
      case 'md':
      default:
        return 'w-10 h-10 min-w-10 min-h-10';
    }
  };

  // Tamaño del ícono dentro del círculo
  const getIconSize = () => {
    switch (size) {
      case 'sm':
      case 'lg':
      case 'md':
      default:
        return '85%';
    }
  };

  // Manejar el clic
  const handleClick = (e) => {
    // Evitar propagación para no interferir con otros handlers
    e.stopPropagation();

    // Cambiar estado local
    setIsFav(!isFav);

    // Llamar al callback con el nuevo estado
    if (onToggle) {
      onToggle(!isFav);
    }
  };

  // Determinar clases según el estado (recupera el estilo más pulido)
  const buttonClasses = `
    ${getSizeClasses()}
    flex items-center justify-center
    rounded-full
    transition-all duration-200
    cursor-pointer
    select-none
    ${isFav
      ? 'bg-yellow-100 text-yellow-500 hover:bg-yellow-200 active:bg-yellow-300 dark:bg-yellow-900 dark:text-yellow-400 dark:hover:bg-yellow-800'
      : 'bg-gray-200 text-gray-500 hover:bg-gray-300 active:bg-gray-400 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600'
    }
    ${className}
    ${isLoading ? 'opacity-60' : ''}
    touch-manipulation
    transform-gpu
  `.replace(/\s+/g, ' ').trim();

  const iconSize = getIconSize();

  return (
    <button
      className={buttonClasses}
      onClick={handleClick}
      title={isFav ? 'Quitar de favoritos' : 'Añadir a favoritos'}
      disabled={isLoading}
      aria-pressed={isFav}
      aria-label={isFav ? 'Quitar de favoritos' : 'Añadir a favoritos'}
      style={{
        WebkitTapHighlightColor: 'transparent',
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        touchAction: 'manipulation'
      }}
      type="button"
    >
      {isLoading ? (
        <span
          className="animate-pulse text-xl"
          style={{ fontSize: iconSize }}
        >
          ⭐
        </span>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={isFav ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={isFav ? "0" : "2"}
          className={`${isFav ? 'transform scale-110' : ''} transition-transform duration-200`}
          style={{
            width: iconSize,
            height: iconSize,
            flexShrink: 0
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
      )}
    </button>
  );
}