/**
 * Componente de notificación toast mejorado con colores seguros y barra de progreso.
 * Optimizado para dispositivos móviles con mejor visibilidad y diseño centrado.
 *
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {string} props.message - Mensaje a mostrar
 * @param {string} [props.type='info'] - Tipo de toast ('success', 'error', 'warning', 'info')
 * @param {number} [props.duration=3000] - Duración en milisegundos
 * @param {Function} props.onClose - Función para cerrar el toast
 * @returns {JSX.Element} Componente Toast renderizado
 */
import React, { useEffect, useState, useRef } from 'react';
import { useTheme, useDeviceType } from '@hooks';
import { SAFE_COLORS, COMPONENT_COLORS } from '@styles/safeStyles';

export default function Toast({ message, type = 'info', duration = 3000, onClose }) {
  const { darkMode } = useTheme();
  const { isMobile } = useDeviceType();
  const [timeLeft, setTimeLeft] = useState(duration);
  const intervalRef = useRef(null);
  const startTimeRef = useRef(Date.now());

  // Efecto para el tiempo restante y cerrar automáticamente
  useEffect(() => {
    startTimeRef.current = Date.now();

    // Actualizar el tiempo restante cada 16ms (60fps)
    intervalRef.current = setInterval(() => {
      const elapsedTime = Date.now() - startTimeRef.current;
      const remaining = Math.max(0, duration - elapsedTime);
      setTimeLeft(remaining);

      if (remaining <= 0) {
        clearInterval(intervalRef.current);
        onClose();
      }
    }, 16); // Actualizar frecuentemente para animación fluida

    // Limpiar el temporizador al desmontar
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [duration, onClose]);

  // Mapeo de tipo de toast a componente de colores seguros
  const getTypeComponent = () => {
    switch (type) {
      case 'success': return 'correct';
      case 'error': return 'incorrect';
      case 'warning': return 'warning';
      case 'info':
      default: return 'neutral';
    }
  };

  // Obtener colores seguros basados en el tipo de toast y el tema
  const component = getTypeComponent();
  const theme = darkMode ? 'dark' : 'light';

  let bgColor, textColor, iconColor, borderColor;

  if (component === 'neutral') {
    // Caso especial para info/neutral
    bgColor = darkMode ? SAFE_COLORS.neutral.gray800 : SAFE_COLORS.neutral.white;
    textColor = darkMode ? SAFE_COLORS.neutral.white : SAFE_COLORS.neutral.gray900;
    iconColor = darkMode ? SAFE_COLORS.neutral.gray300 : SAFE_COLORS.neutral.gray600;
    borderColor = darkMode ? SAFE_COLORS.neutral.gray700 : SAFE_COLORS.neutral.gray200;
  } else {
    // Colores para success, error y warning
    const colors = COMPONENT_COLORS[component][theme];

    // En móvil, reducir transparencia para mejor visualización
    if (isMobile) {
      if (darkMode) {
        // En modo oscuro en móvil, usar colores más sólidos
        bgColor = component === 'correct' ? SAFE_COLORS.green[900] :
                  component === 'incorrect' ? SAFE_COLORS.red[900] :
                  SAFE_COLORS.yellow[900];
        bgColor = `${bgColor}`;  // Sin transparencia para móvil
      } else {
        // En modo claro en móvil, usar colores más sólidos
        bgColor = component === 'correct' ? SAFE_COLORS.green[100] :
                  component === 'incorrect' ? SAFE_COLORS.red[100] :
                  SAFE_COLORS.yellow[100];
      }
    } else {
      // En escritorio, usar los colores normales
      bgColor = colors.bg;
    }

    textColor = colors.text;
    iconColor = textColor;
    borderColor = colors.border;
  }

  // Obtener el porcentaje de tiempo restante
  const progressPercentage = (timeLeft / duration) * 100;

  // Obtener el icono según el tipo
  const getIcon = () => {
    switch (type) {
      case 'success':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        );
      case 'error':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
        );
      case 'warning':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        );
      case 'info':
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        );
    }
  };

  // Color de progreso basado en el tipo
  const getProgressColor = () => {
    switch (type) {
      case 'success': return darkMode ? SAFE_COLORS.green[500] : SAFE_COLORS.green[600];
      case 'error': return darkMode ? SAFE_COLORS.red[500] : SAFE_COLORS.red[600];
      case 'warning': return darkMode ? SAFE_COLORS.yellow[500] : SAFE_COLORS.yellow[600];
      case 'info':
      default: return darkMode ? SAFE_COLORS.neutral.gray500 : SAFE_COLORS.neutral.gray600;
    }
  };

  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: textColor,
        borderColor: borderColor,
        borderWidth: '1px',
        borderStyle: 'solid',
        position: 'relative',
        overflow: 'hidden',
        // En móvil, centrar y hacer más pequeño
        maxWidth: isMobile ? '90%' : '20rem',
        margin: isMobile ? '0 auto' : '0',
      }}
      className={`px-3 py-${isMobile ? '2' : '3'} rounded-lg shadow-md flex items-center w-full transition-all duration-300 animate-fade-in-up`}
      role="alert"
    >
      {/* Barra de progreso */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '3px',
          width: `${progressPercentage}%`,
          backgroundColor: getProgressColor(),
          transition: 'width 16ms linear'
        }}
      />

      <div style={{ color: iconColor }} className={`flex-shrink-0 mr-2 ${isMobile ? 'h-4 w-4' : 'h-5 w-5'}`}>
        {getIcon()}
      </div>
      <div className="flex-grow">
        <p className={`${isMobile ? 'text-xs' : 'text-sm'} font-medium`} style={{ color: textColor }}>{message}</p>
      </div>
      <button
        type="button"
        style={{ color: iconColor }}
        className="ml-auto flex-shrink-0 -mx-1 -my-1 rounded-lg p-1 inline-flex focus:outline-none"
        onClick={onClose}
        aria-label="Cerrar"
      >
        <svg className={`${isMobile ? 'w-3.5 h-3.5' : 'w-4 h-4'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
        </svg>
      </button>
    </div>
  );
}