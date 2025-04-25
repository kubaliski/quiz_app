/**
 * Componente que permite al usuario seleccionar un módulo específico o todos los módulos
 * de una asignatura para iniciar un quiz.
 *
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {Array<Object>} props.modulos - Lista de módulos disponibles para seleccionar
 * @param {string|number} props.modulos[].id - Identificador único del módulo
 * @param {string} props.modulos[].nombre - Nombre del módulo
 * @param {Array} props.modulos[].preguntas - Array de preguntas del módulo
 * @param {boolean} props.modulos[].esExamen - Indica si el módulo es de examen
 * @param {string|number} props.asignaturaId - Identificador de la asignatura actual
 * @returns {JSX.Element} Componente ModuleSelector renderizado
 */
import { useNavigate } from 'react-router-dom';
import { Card, Button } from '@components/common';

export default function ModuleSelector({ modulos, asignaturaId }) {
  const navigate = useNavigate();

  // Separamos los módulos regulares y los de examen
  const modulosExamen = modulos.filter(modulo => modulo.esExamen);

  // Calculamos el total de preguntas en todos los módulos
  const totalPreguntas = modulos.reduce(
    (sum, modulo) => sum + modulo.preguntas.length,
    0
  );

  // Calculamos el total de preguntas en módulos de examen
  const totalPreguntasExamen = modulosExamen.reduce(
    (sum, modulo) => sum + modulo.preguntas.length,
    0
  );

  const handleSelectModule = (moduloId) => {
    navigate(`/quiz/${asignaturaId}/${moduloId}`);
  };

  const handleSelectAllModules = () => {
    navigate(`/quiz/${asignaturaId}/todos`);
  };

  const handleSelectExamenModules = () => {
    navigate(`/quiz/${asignaturaId}/examen`);
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="space-y-6">
      <Card title="Selecciona un módulo">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {modulos.map(modulo => (
            <button
              key={modulo.id}
              className={`${modulo.esExamen
                ? "bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800"
                : "bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-800"}
                text-white font-medium py-3 px-4 rounded-lg transition duration-200`}
              onClick={() => handleSelectModule(modulo.id)}
            >
              <div className="flex flex-col">
                <span className="font-semibold">
                  {modulo.nombre}
                </span>
                <span className="text-sm opacity-80">
                  {modulo.preguntas.length} preguntas
                </span>
              </div>
            </button>
          ))}
        </div>
      </Card>

      <Card title="O selecciona">
        <div className="space-y-4">
          {/* Botón para todos los módulos */}
          <Button
            variant="primary"
            fullWidth
            onClick={handleSelectAllModules}
          >
            40 preguntas aleatorias de todos los módulos
          </Button>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 text-center">
            {totalPreguntas > 40
              ? `Se seleccionarán 40 preguntas aleatorias de un total de ${totalPreguntas}`
              : `Se seleccionarán todas las ${totalPreguntas} preguntas disponibles`}
          </p>

          {/* Botón para solo módulos de examen, solo si hay alguno */}
          {modulosExamen.length > 0 && (
            <>
              <Button
                variant="primary"
                fullWidth
                rainbow={true}
                className="bg-red-600 hover:bg-red-700 focus:ring-red-500 dark:bg-red-700 dark:hover:bg-red-800"
                onClick={handleSelectExamenModules}
              >
                40 preguntas aleatorias de test de examen
              </Button>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 text-center">
                {totalPreguntasExamen > 40
                  ? `Se seleccionarán 40 preguntas aleatorias de un total de ${totalPreguntasExamen} (solo módulos de examen)`
                  : `Se seleccionarán todas las ${totalPreguntasExamen} preguntas disponibles (solo módulos de examen)`}
              </p>
            </>
          )}
        </div>
      </Card>

      <Button
        variant="secondary"
        fullWidth
        onClick={handleBack}
      >
        Volver a asignaturas
      </Button>
    </div>
  );
}