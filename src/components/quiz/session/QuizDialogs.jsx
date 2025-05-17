/**
 * Componente para manejar los diálogos del quiz
 * Incluye diálogos de salida y restauración de progreso
 *
 * @param {Object} props - Propiedades del componente
 * @param {boolean} props.dialogOpen - Si el diálogo está abierto
 * @param {string} props.dialogType - Tipo de diálogo ('exit', 'restore-progress')
 * @param {Object} props.savedProgress - Progreso guardado (para diálogo de restauración)
 * @param {function} props.handleConfirmExit - Función para confirmar salida
 * @param {function} props.handleCancelExit - Función para cancelar salida
 * @param {function} props.handleRestoreProgress - Función para restaurar progreso
 * @param {function} props.handleDiscardProgress - Función para descartar progreso
 * @returns {JSX.Element} Componente QuizDialogs
 */
import React from 'react';
import { Dialog } from '@components/common';
import { formatTimestamp } from '@utils/quizUtils';

export default function QuizDialogs({
  dialogOpen,
  dialogType,
  savedProgress,
  handleConfirmExit,
  handleCancelExit,
  handleRestoreProgress,
  handleDiscardProgress
}) {
  return (
    <Dialog
      open={dialogOpen}
      title={
        dialogType === 'exit'
          ? "Confirmar salida"
          : "Restaurar progreso"
      }
      message={
        dialogType === 'exit'
          ? "¿Seguro que deseas salir? Perderás tu progreso en este quiz."
          : (
              <>
                <div>Se encontró un progreso guardado para este quiz ({savedProgress ? formatTimestamp(savedProgress.timestamp) : ''}).</div>
                <div className="mt-2 text-center"><strong>¿Deseas restaurarlo?</strong></div>
              </>
            )
      }
      confirmLabel={
        dialogType === 'exit'
          ? "Sí, salir"
          : "Restaurar progreso"
      }
      cancelLabel={
        dialogType === 'exit'
          ? "Cancelar"
          : "Empezar de nuevo"
      }
      onConfirm={
        dialogType === 'exit'
          ? handleConfirmExit
          : handleRestoreProgress
      }
      onCancel={
        dialogType === 'exit'
          ? handleCancelExit
          : handleDiscardProgress
      }
      variant={dialogType === 'exit' ? "danger" : "primary"}
    />
  );
}