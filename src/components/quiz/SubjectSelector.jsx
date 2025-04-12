/**
 * Componente que permite al usuario seleccionar una asignatura para acceder a sus módulos.
 *
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {Array<Object>} props.asignaturas - Lista de asignaturas disponibles
 * @param {string|number} props.asignaturas[].id - Identificador único de la asignatura
 * @param {string} props.asignaturas[].nombre - Nombre de la asignatura
 * @param {string} [props.asignaturas[].icono] - Nombre del icono asociado a la asignatura (opcional)
 * @returns {JSX.Element} Componente SubjectSelector renderizado
 *
 * @example
 * const asignaturas = [
 *   { id: 'js', nombre: 'JavaScript', icono: 'js' },
 *   { id: 'react', nombre: 'React', icono: 'react' },
 *   { id: 'node', nombre: 'Node.js', icono: 'node' }
 * ];
 *
 * <SubjectSelector asignaturas={asignaturas} />
 */
import { useNavigate } from 'react-router-dom';
import { Card } from '@components/common';

export default function SubjectSelector({ asignaturas }) {
  const navigate = useNavigate();

  const handleSelectSubject = (id) => {
    navigate(`/asignaturas/${id}`);
  };

  return (
    <Card title="Selecciona una asignatura">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {asignaturas.map(asignatura => (
          <button
            key={asignatura.id}
            className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-800 text-white font-medium py-3 px-4 rounded-lg transition duration-200"
            onClick={() => handleSelectSubject(asignatura.id)}
          >
            <div className="flex items-center">
              {asignatura.icono && (
                <span className="mr-2">
                  <i className={`icon-${asignatura.icono}`}></i>
                </span>
              )}
              <span>{asignatura.nombre}</span>
            </div>
          </button>
        ))}
      </div>
    </Card>
  );
}