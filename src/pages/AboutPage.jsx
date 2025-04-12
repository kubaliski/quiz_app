import { Layout, PageHeader } from '@components/layout';
import { Card, Button } from '@components/common';

export default function AboutPage() {
  return (
    <Layout>
      <PageHeader
        title="Colabora con Quiz App"
        subtitle="Aprende cómo puedes contribuir al proyecto y ayudarnos a crecer"
        breadcrumbs={[
          { label: 'Inicio', to: '/' },
          { label: 'Colaboración' }
        ]}
      />

      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <Card className="mb-8">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">¿Cómo puedes colaborar?</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-200">
            Esta App es un proyecto educativo de código abierto creado para nuestra clase.
          </p>
        </Card>

        <Card className="mb-8">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Contribuir a través de GitHub</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-indigo-500 pl-4 py-2 mb-4 bg-indigo-50 dark:bg-indigo-900 dark:bg-opacity-40 dark:border-indigo-400">
              <p className="text-sm text-gray-700 dark:text-gray-200">
                Todo el código fuente está disponible en GitHub, lo que facilita las contribuciones
                y el trabajo colaborativo.
              </p>
            </div>

            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Pasos para contribuir:</h3>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong className="text-gray-900 dark:text-white">Hacer fork del repositorio</strong>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                  Ve al repositorio en GitHub y haz click en el botón "Fork" para crear una copia
                  en tu cuenta personal.
                </p>
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Clonar tu fork</strong>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                  Clona tu fork a tu máquina local usando el comando:
                </p>
                <div className="bg-gray-100 dark:bg-gray-800 p-2 mt-1 rounded font-mono text-sm text-gray-800 dark:text-gray-200">
                  git clone https://github.com/tu-usuario/quiz-app.git
                </div>
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Crear una rama para tus cambios</strong>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                  Crea una nueva rama para tus modificaciones:
                </p>
                <div className="bg-gray-100 dark:bg-gray-800 p-2 mt-1 rounded font-mono text-sm text-gray-800 dark:text-gray-200">
                  git checkout -b nombre-de-tu-cambio
                </div>
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Realizar tus cambios</strong>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                  Añade nuevos tests, corrige erratas o implementa nuevas funcionalidades.
                </p>
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Hacer commit y push</strong>
                <div className="bg-gray-100 dark:bg-gray-800 p-2 mt-1 rounded font-mono text-sm text-gray-800 dark:text-gray-200">
                  git add .<br />
                  git commit -m "Descripción de tus cambios"<br />
                  git push origin nombre-de-tu-cambio
                </div>
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Crear un Pull Request</strong>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                  Ve a nuestro repositorio original en GitHub y haz clic en "New pull request".
                  Selecciona tu rama y describe los cambios que has realizado.
                </p>
              </li>
            </ol>
          </div>

          <div className="mt-6">
            {/* Usando el componente Button en lugar de un enlace personalizado */}
            <Button
              as="a"
              href="https://github.com/tu-usuario/quiz-app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              Ver repositorio en GitHub
            </Button>
          </div>
        </Card>

        <Card className="mb-8">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Creación de nuevos tests</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-200">
            Una de las formas más sencillas de contribuir es crear nuevos tests para la aplicación.
            Sigue estas instrucciones:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700 dark:text-gray-200">
            <li>Utiliza la estructura JSON definida en nuestro README para crear tus preguntas</li>
            <li>Coloca tus preguntas en el directorio correcto según la asignatura y el módulo</li>
            <li>Asegúrate de incluir las respuestas correctas y explicaciones detalladas</li>
            <li>Si es posible, añade también referencias o fuentes de información</li>
          </ol>
          <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900 dark:bg-opacity-30 border-l-4 border-yellow-400 dark:border-yellow-500">
            <p className="text-sm text-gray-700 dark:text-gray-200">
              <strong className="text-gray-900 dark:text-white">Nota:</strong> Para más detalles sobre el formato exacto y la estructura de los archivos,
              consulta el archivo README.md en el repositorio.
            </p>
          </div>
        </Card>

        <Card className="mb-8">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Otros tipos de contribuciones</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-200">
            Además de crear tests, hay muchas formas de contribuir:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200">
            <li>Reportar errores y erratas en las preguntas existentes</li>
            <li>Mejorar la documentación y el README</li>
            <li>Añadir nuevas funcionalidades a la aplicación</li>
            <li>Optimizar el código existente</li>
            <li>Mejorar la interfaz de usuario y la experiencia</li>
            <li>Traducir la aplicación a otros idiomas</li>
          </ul>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Contacto y comunidad</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-200">
            ¿Tienes dudas sobre cómo contribuir? ¿Necesitas ayuda? Puedes contactarnos de las siguientes formas:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200">
            <li>Abre un issue en nuestro repositorio de GitHub</li>
            <li>Contacta con cualquiera de los colaboradores principales</li>
            <li>Envía un correo a <a href="mailto:angel.ccapb@gmail.com" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300">angel.ccapb@gmail.com</a></li>
            <li>Escribe a discord <strong>kubaliski</strong></li>
            <li>Pregunta a cualquiera de los compañeros de clase que ya hayan contribuido</li>
          </ul>
          <p className="mt-4 text-gray-700 dark:text-gray-200">
            Cualquier ayuda es bienvenida y si quieres practicar git y github practica con esta app y te ayudo en lo que pueda
          </p>
        </Card>
      </div>
    </Layout>
  );
}