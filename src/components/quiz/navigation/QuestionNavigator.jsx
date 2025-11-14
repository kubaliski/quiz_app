/**
 * Componente que muestra una navegación visual de todas las preguntas del quiz
 * con optimizaciones específicas para dispositivos móviles.
 *
 * @component
 * @returns {JSX.Element} Componente QuestionNavigator renderizado
 */
import React, { useEffect, useRef, useCallback, useState } from 'react';
import { useQuizContext } from '@hooks';
import { Button } from '@components/common';

export default function QuestionNavigator() {
  const {
    preguntas,
    preguntaActual,
    respuestas,
    setPreguntaActual,
    estadisticasPreguntas,
    questionNavigatorOpen,
    showOnlyUnanswered,
    toggleQuestionNavigator,
    setShowOnlyUnanswered
  } = useQuizContext();

  // Estado para detectar si estamos en móvil
  const [isMobile, setIsMobile] = useState(false);

  // Referencias para UI
  const navigatorRef = useRef(null);
  const containerRef = useRef(null);

  // Efecto para detectar móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // Comprobar al inicio
    checkMobile();

    // Comprobar en cada cambio de tamaño de ventana
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Filtrar preguntas según el modo de visualización
  const filteredQuestions = showOnlyUnanswered
    ? preguntas.map((pregunta, index) => ({ pregunta, index }))
        .filter(item => respuestas[item.pregunta.id] === undefined)
    : preguntas.map((pregunta, index) => ({ pregunta, index }));

  // Función para desplazarse a la siguiente pregunta sin responder
  const goToNextUnanswered = useCallback(() => {
    // Encontrar la siguiente pregunta sin responder después de la actual
    const nextUnansweredIndex = preguntas.findIndex((pregunta, index) =>
      index > preguntaActual && respuestas[pregunta.id] === undefined
    );

    if (nextUnansweredIndex !== -1) {
      setPreguntaActual(nextUnansweredIndex);
      return true;
    }

    // Si no hay más adelante, buscar desde el principio
    const firstUnansweredIndex = preguntas.findIndex((pregunta) =>
      respuestas[pregunta.id] === undefined
    );

    if (firstUnansweredIndex !== -1 && firstUnansweredIndex !== preguntaActual) {
      setPreguntaActual(firstUnansweredIndex);
      return true;
    }

    return false; // No se encontraron preguntas sin responder
  }, [preguntas, preguntaActual, respuestas, setPreguntaActual]);

  // Función para desplazarse a la pregunta sin responder anterior
  const goToPrevUnanswered = useCallback(() => {
    // Buscar hacia atrás desde la pregunta actual
    for (let i = preguntaActual - 1; i >= 0; i--) {
      if (respuestas[preguntas[i].id] === undefined) {
        setPreguntaActual(i);
        return true;
      }
    }

    // Si no hay antes, buscar desde el final
    for (let i = preguntas.length - 1; i > preguntaActual; i--) {
      if (respuestas[preguntas[i].id] === undefined) {
        setPreguntaActual(i);
        return true;
      }
    }

    return false; // No se encontraron preguntas sin responder
  }, [preguntas, preguntaActual, respuestas, setPreguntaActual]);

  // Efecto para hacer scroll a la pregunta actual cuando el navegador está abierto
  useEffect(() => {
    if (questionNavigatorOpen && navigatorRef.current) {
      const activeButton = navigatorRef.current.querySelector('.current-question');
      if (activeButton) {
        // Calculamos el centro del contenedor
        const containerCenter = navigatorRef.current.offsetWidth / 2;
        // Scroll suave al elemento, centrándolo
        navigatorRef.current.scrollLeft = activeButton.offsetLeft - containerCenter + (activeButton.offsetWidth / 2);
      }
    }
  }, [questionNavigatorOpen, preguntaActual, showOnlyUnanswered]);

  // Manejador para alternar modo de visualización
    const handleToggleUnanswered = useCallback(() => {
        setShowOnlyUnanswered(!showOnlyUnanswered);
    }, [setShowOnlyUnanswered, showOnlyUnanswered]);

  // Función para determinar el estado de una pregunta
  const getQuestionStatus = (pregunta, index) => {
    if (preguntaActual === index) return 'current';
    return respuestas[pregunta.id] !== undefined ? 'answered' : 'unanswered';
  };

  // Función para obtener las clases CSS según el estado
  const getButtonClasses = (status) => {
    // Tamaño adaptativo para móvil/escritorio
    const size = isMobile ? "w-11 h-11" : "w-10 h-10";
    // Base común para todos los botones
    const baseClasses = `${size} rounded-full flex items-center justify-center font-medium transition-all border hover:cursor-pointer`;

    switch (status) {
      case 'current':
        return `${baseClasses} bg-brand-600 text-white border-brand-700 shadow-md current-question`;
      case 'answered':
        return `${baseClasses} bg-green-500 text-white border-green-600`;
      default: // unanswered
        return `${baseClasses} bg-white text-gray-700 border-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600`;
    }
  };

  // Manejador de teclas para atajos de teclado (solo para desktop)
  const handleKeyDown = useCallback((event) => {
    // Solo procesar atajos de teclado en desktop
    if (isMobile) return;

    // Alt+N: Ir a siguiente pregunta sin responder
    if (event.altKey && event.key === 'n') {
      event.preventDefault();
      goToNextUnanswered();
    }
    // Alt+P: Ir a pregunta anterior sin responder
    else if (event.altKey && event.key === 'p') {
      event.preventDefault();
      goToPrevUnanswered();
    }
    // Alt+Q: Mostrar/ocultar navegador
    else if (event.altKey && event.key === 'q') {
      event.preventDefault();
      toggleQuestionNavigator();
    }
    // Alt+F: Alternar filtro de preguntas sin responder
    else if (event.altKey && event.key === 'f') {
      event.preventDefault();
      handleToggleUnanswered();
    }
  }, [isMobile, goToNextUnanswered, goToPrevUnanswered, toggleQuestionNavigator, handleToggleUnanswered]);

  // Efecto para manejar atajos de teclado
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);


  return (
    <div className="mb-6" ref={containerRef}>
      {/* Botones de control - Adaptados para móvil */}
      <div className="flex justify-center flex-wrap gap-2 mb-4">
        <Button
          variant={questionNavigatorOpen ? "primary" : "secondary"}
          onClick={() => toggleQuestionNavigator()}
          className={`text-sm ${isMobile ? 'py-2.5 px-4' : 'py-2'}`}
        >
          {questionNavigatorOpen
            ? (isMobile ? 'Ocultar' : 'Ocultar navegador')
            : (isMobile ? 'Ver todas' : 'Mostrar todas las preguntas')}
        </Button>

        {estadisticasPreguntas.pendientes > 0 && (
          <Button
            variant="secondary"
            onClick={goToNextUnanswered}
            className={`text-sm ${isMobile ? 'py-2.5 px-4' : 'py-2'}`}
            title={isMobile ? undefined : "Alt+N"}
          >
            {isMobile
              ? `Sin responder (${estadisticasPreguntas.pendientes})`
              : `Ir a sin responder (${estadisticasPreguntas.pendientes})`}
          </Button>
        )}
      </div>

      {/* Navegador de preguntas - Optimizado para móvil */}
      {questionNavigatorOpen && (
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-3 sm:p-4 shadow-md mb-4">
          {/* Cabecera con información de navegación */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-3">
            {/* Título adaptado */}
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 sm:mb-0">
              {isMobile ? `Pregunta ${preguntaActual + 1} de ${preguntas.length}` : "Navegación rápida"}
            </h3>

            {/* Controles para filtrado y navegación */}
            <div className={`flex gap-2 ${isMobile ? 'w-full justify-between' : ''}`}>
              <Button
                variant={showOnlyUnanswered ? "primary" : "secondary"}
                onClick={handleToggleUnanswered}
                className={`text-xs ${isMobile ? 'py-1.5 px-3 flex-1' : 'py-1 px-2'}`}
                title={isMobile ? undefined : "Alt+F"}
              >
                {showOnlyUnanswered
                  ? (isMobile ? 'Todas' : 'Mostrar todas')
                  : (isMobile ? 'Sin responder' : 'Solo pendientes')}
              </Button>

              {estadisticasPreguntas.pendientes > 0 && (
                <>
                  <Button
                    variant="secondary"
                    onClick={goToPrevUnanswered}
                    className={`text-xs ${isMobile ? 'py-1.5 px-3 flex-1' : 'py-1 px-2'}`}
                    title={isMobile ? undefined : "Alt+P"}
                    aria-label="Ir a pregunta anterior sin responder"
                  >
                    {isMobile ? '← Anterior' : '← Anterior sin resp.'}
                  </Button>

                  <Button
                    variant="secondary"
                    onClick={goToNextUnanswered}
                    className={`text-xs ${isMobile ? 'py-1.5 px-3 flex-1' : 'py-1 px-2'}`}
                    title={isMobile ? undefined : "Alt+N"}
                    aria-label="Ir a siguiente pregunta sin responder"
                  >
                    {isMobile ? 'Siguiente →' : 'Siguiente sin resp. →'}
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* Leyenda - Más compacta en móvil */}
          <div className={`flex justify-center gap-4 mb-3 flex-wrap text-xs ${isMobile ? 'mb-2' : 'mb-4'}`}>
            <div className="flex items-center">
              <div className={getButtonClasses('current')} style={{ width: '16px', height: '16px' }}></div>
              <span className="ml-1 text-gray-700 dark:text-gray-300">Actual</span>
            </div>
            <div className="flex items-center">
              <div className={getButtonClasses('answered')} style={{ width: '16px', height: '16px' }}></div>
              <span className="ml-1 text-gray-700 dark:text-gray-300">Respondida</span>
            </div>
            <div className="flex items-center">
              <div className={getButtonClasses('unanswered')} style={{ width: '16px', height: '16px' }}></div>
              <span className="ml-1 text-gray-700 dark:text-gray-300">Sin responder</span>
            </div>
          </div>

          {/* Contenedor para los botones: optimizado para táctil en móvil */}
            <div
            ref={navigatorRef}
            className={`
                ${isMobile
                ? 'grid grid-cols-5 gap-2 auto-rows-auto'  // Vista de cuadrícula para móvil
                : 'flex flex-wrap justify-center gap-2 py-2 px-1' // Flexbox para desktop con centrado por fila
                }
            `}
            style={{
                scrollBehavior: 'smooth',
                gap: isMobile ? '0.75rem' : '0.5rem',
                touchAction: 'manipulation' // Mejora interacción táctil
            }}
            >
            {filteredQuestions.length === 0 ? (
              <div className={`${isMobile ? 'col-span-5' : 'col-span-full'} text-center text-gray-500 dark:text-gray-400 py-3`}>
                No hay preguntas que mostrar
              </div>
            ) : (
              filteredQuestions.map(({ pregunta, index }) => {
                const status = getQuestionStatus(pregunta, index);
                return (
                  <button
                    key={pregunta.id}
                    onClick={() => setPreguntaActual(index)}
                    className={`
                      ${getButtonClasses(status)}
                      snap-center
                      ${isMobile
                        ? 'active:scale-95 touch-manipulation' // Efecto al pulsar en móvil
                        : 'hover:opacity-90 hover:scale-105'
                      }
                      focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 focus:outline-none
                    `}
                    aria-label={`Ir a pregunta ${index + 1}`}
                    title={`Pregunta ${index + 1}${status === 'answered' ? ' - Respondida' : status === 'unanswered' ? ' - Sin responder' : ''}`}
                  >
                    {index + 1}
                  </button>
                );
              })
            )}
          </div>

          {/* Información de progreso */}
          <div className="mt-3 text-center text-sm text-gray-600 dark:text-gray-400">
            <span className="font-medium">
              {estadisticasPreguntas.respondidas} de {estadisticasPreguntas.total} respondidas
            </span>
            {estadisticasPreguntas.pendientes > 0 && (
              <span> ({estadisticasPreguntas.pendientes} pendientes)</span>
            )}
          </div>

          {/* Atajos de teclado - Solo en desktop */}
          {!isMobile && (
            <div className="mt-2 text-center text-xs text-gray-500 dark:text-gray-400">
              <div className="flex flex-wrap justify-center gap-x-3 gap-y-1">
                <span className="whitespace-nowrap"><kbd className="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded border border-gray-300 dark:border-gray-600 font-mono text-xs">Alt+N</kbd> Siguiente sin responder</span>
                <span className="whitespace-nowrap"><kbd className="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded border border-gray-300 dark:border-gray-600 font-mono text-xs">Alt+P</kbd> Anterior sin responder</span>
                <span className="whitespace-nowrap"><kbd className="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded border border-gray-300 dark:border-gray-600 font-mono text-xs">Alt+Q</kbd> Mostrar/ocultar navegador</span>
                <span className="whitespace-nowrap"><kbd className="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded border border-gray-300 dark:border-gray-600 font-mono text-xs">Alt+F</kbd> Filtrar pendientes</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}