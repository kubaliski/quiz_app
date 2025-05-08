/**
 * Componente para mostrar la cabecera del quiz
 * Incluye título, subtítulo, breadcrumbs y botón de salida
 */
import React from 'react';
import { PageHeader } from '@components/layout';
import { Button } from '@components/common';
import { useQuizContext } from '@hooks';

/**
 * @param {Object} props - Propiedades del componente
 * @param {function} props.getNombreModulo - Función para obtener nombre del módulo
 * @param {function} props.handleExit - Función para manejar salida del quiz
 * @param {string} props.asignaturaId - ID de la asignatura
 * @returns {JSX.Element} Componente QuizHeader
 */
export default function QuizHeader({ getNombreModulo, handleExit, asignaturaId }) {
  const { asignatura } = useQuizContext();

  // Generar breadcrumbs para la navegación
  const breadcrumbs = [
    { label: 'Inicio', to: '/' },
    { label: asignatura?.nombre || 'Asignatura', to: `/asignaturas/${asignaturaId}` },
    { label: getNombreModulo() }
  ];

  return (
    <PageHeader
      title={`Quiz - ${getNombreModulo()}`}
      subtitle="Selecciona la respuesta correcta para cada pregunta"
      breadcrumbs={breadcrumbs}
      actions={
        <Button onClick={handleExit} variant="secondary">
          Salir del quiz
        </Button>
      }
    />
  );
}