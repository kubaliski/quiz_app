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
 * @param {string|number} props.asignaturaId - Identificador de la asignatura actual
 * @returns {JSX.Element} Componente ModuleSelector renderizado
 *
 * @example
 * const modulos = [
 *   { id: 1, nombre: 'Introducción', preguntas: [...] },
 *   { id: 2, nombre: 'Conceptos avanzados', preguntas: [...] }
 * ];
 *
 * <ModuleSelector modulos={modulos} asignaturaId="javascript" />
 */
import { useNavigate } from 'react-router-dom';
import { Card, Button } from '@components/common';

export default function ModuleSelector({ modulos, asignaturaId }) {
  const navigate = useNavigate();

  // Calculamos el total de preguntas en todos los módulos
  const totalPreguntas = modulos.reduce((sum, modulo) => sum + modulo.preguntas.length, 0);

  const handleSelectModule = (moduloId) => {
    navigate(`/quiz/${asignaturaId}/${moduloId}`);
  };

  const handleSelectAllModules = () => {
    navigate(`/quiz/${asignaturaId}/todos`);
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
              className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-800 text-white font-medium py-3 px-4 rounded-lg transition duration-200"
              onClick={() => handleSelectModule(modulo.id)}
            >
              <div className="flex flex-col">
                <span className="font-semibold">{modulo.nombre}</span>
                <span className="text-sm opacity-80">
                  {modulo.preguntas.length} preguntas
                </span>
              </div>
            </button>
          ))}
        </div>
      </Card>

      <Card title="O selecciona">
        <Button
          variant="primary"
          fullWidth
          rainbow={true}
          onClick={handleSelectAllModules}
        >
          40 preguntas aleatorias de todos los módulos
        </Button>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">
          {totalPreguntas > 40
            ? `Se seleccionarán 40 preguntas aleatorias de un total de ${totalPreguntas}`
            : `Se seleccionarán todas las ${totalPreguntas} preguntas disponibles`}
        </p>
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