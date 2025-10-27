/**
 * Componente que permite al usuario seleccionar una asignatura organizada por años académicos.
 *
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {Object} props.asignaturasPorAno - Asignaturas organizadas por año académico
 * @returns {JSX.Element} Componente SubjectSelector renderizado
 *
 * @example
 * const asignaturasPorAno = {
 *   1: {
 *     nombre: "Primer Año",
 *     asignaturas: [...],
 *     disponible: true
 *   },
 *   2: {
 *     nombre: "Segundo Año",
 *     asignaturas: [...],
 *     disponible: false
 *   }
 * };
 *
 * <SubjectSelector asignaturasPorAno={asignaturasPorAno} />
 */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button } from '@components/common';

export default function SubjectSelector({ asignaturasPorAno }) {
  const navigate = useNavigate();
  const [expandedYears, setExpandedYears] = useState({ 2: true }); // Segundo año expandido por defecto

  const handleSelectSubject = (id) => {
    navigate(`/asignaturas/${id}`);
  };

  const toggleYear = (year) => {
    setExpandedYears(prev => ({
      ...prev,
      [year]: !prev[year]
    }));
  };

  return (
    <Card title="Selecciona una asignatura">
      <div className="space-y-4">
        {Object.entries(asignaturasPorAno).map(([year, yearData]) => (
          <div key={year} className="border border-gray-200 dark:border-gray-700 rounded-lg">
            {/* Header del año */}
            <button
              onClick={() => toggleYear(year)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 rounded-t-lg"
              disabled={!yearData.disponible}
            >
              <div className="flex items-center">
                <h3 className={`text-lg font-semibold ${
                  yearData.disponible
                    ? 'text-gray-900 dark:text-gray-100'
                    : 'text-gray-500 dark:text-gray-400'
                }`}>
                  {yearData.nombre}
                </h3>
                {!yearData.disponible && (
                  <span className="ml-2 px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
                    Próximamente
                  </span>
                )}
              </div>

              {yearData.disponible && (
                <div className="flex items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400 mr-2">
                    {yearData.asignaturas.length} asignatura{yearData.asignaturas.length !== 1 ? 's' : ''}
                  </span>
                  <span className="text-gray-500 text-lg">
                    {expandedYears[year] ? '▲' : '▼'}
                  </span>
                </div>
              )}
            </button>

            {/* Lista de asignaturas */}
            {yearData.disponible && expandedYears[year] && yearData.asignaturas.length > 0 && (
              <div className="p-4 pt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {yearData.asignaturas.map(asignatura => (
                    <Button
                      key={asignatura.id}
                      onClick={() => handleSelectSubject(asignatura.id)}
                      className="justify-start text-left"
                    >
                      <div className="flex items-center w-full">
                        {asignatura.icono && (
                          <span className="mr-3">
                            <i className={`icon-${asignatura.icono}`}></i>
                          </span>
                        )}
                        <span className="flex-1">{asignatura.nombre}</span>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Mensaje cuando no hay asignaturas disponibles */}
            {!yearData.disponible && (
              <div className="p-4 pt-0">
                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                  <p className="text-sm">
                    Las asignaturas de {yearData.nombre.toLowerCase()} estarán disponibles próximamente.
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}