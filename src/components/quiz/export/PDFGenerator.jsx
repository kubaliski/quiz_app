/**
 * Componente para generar PDF de preguntas con respuestas y explicaciones.
 * Permite exportar las preguntas mostradas en FavoriteQuizzes y ResultsPage.
 *
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {Array<Object>} props.preguntas - Lista de preguntas para incluir en el PDF
 * @param {Object} [props.respuestas] - Objeto con las respuestas del usuario (id_pregunta: indice_respuesta)
 * @param {Object} props.asignatura - Objeto con información de la asignatura
 * @param {string} props.titulo - Título del PDF
 * @param {string} [props.subtitulo] - Subtítulo opcional del PDF
 * @param {boolean} [props.mostrarRespuestasUsuario=false] - Indica si mostrar respuestas del usuario
 * @param {string} [props.buttonSize='small'] - Tamaño del botón (small, medium, etc.)
 * @param {string} [props.buttonClassName=''] - Clases adicionales para el botón
 * @param {string} [props.buttonText='Exportar PDF'] - Texto a mostrar en el botón
 * @returns {JSX.Element} Botón para generar el PDF
 */
import { useState, useEffect } from 'react';
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  pdf,
  Image
} from '@react-pdf/renderer';
import { formatTimestamp } from '@utils/quizUtils';

// Estilos para el documento PDF
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center',
    color: '#555',
  },
  sectionTitle: {
    fontSize: 14,
    marginTop: 15,
    marginBottom: 10,
    fontWeight: 'bold',
    backgroundColor: '#f0f0f0',
    padding: 5,
  },
  questionsContainer: {
    marginTop: 10,
  },
  questionContainer: {
    marginBottom: 20,
    padding: 10,
    border: '1pt solid #ddd',
    borderRadius: 5,
    // Evitar que una pregunta se corte por un salto de página
    breakInside: 'avoid',
  },
  question: {
    fontSize: 12,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  option: {
    fontSize: 11,
    marginBottom: 4,
    marginLeft: 15,
  },
  selectedOption: {
    fontSize: 11,
    marginBottom: 4,
    marginLeft: 15,
    backgroundColor: '#ffecb3',
    padding: 2,
  },
  correctOption: {
    fontSize: 11,
    marginBottom: 4,
    marginLeft: 15,
    backgroundColor: '#c8e6c9',
    padding: 2,
  },
  explanation: {
    fontSize: 10,
    marginTop: 8,
    marginLeft: 15,
    fontStyle: 'italic',
    color: '#555',
  },
  codeBlock: {
    fontFamily: 'Courier',
    fontSize: 9,
    backgroundColor: '#f5f5f5',
    padding: 8,
    marginVertical: 8,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 4,
    border: '1pt solid #ddd',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    maxWidth: '80%',
    maxHeight: 200,
    objectFit: 'contain',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    fontSize: 8,
    textAlign: 'center',
    color: '#999',
  },
  pageNumber: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    fontSize: 10,
    color: '#999',
  },
});

// Componente para renderizar código en el PDF
const CodeBlockPdf = ({ code }) => (
  <View style={styles.codeBlock}>
    <Text>{code}</Text>
  </View>
);

// Componente para renderizar imagen en el PDF
const ImageResource = ({ src, alt }) => {
  // Si la fuente de la imagen es una URL válida, renderizamos la imagen
  if (src && (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:'))) {
    return (
      <View style={styles.imageContainer}>
        <Image src={src} style={styles.image} />
      </View>
    );
  }
  // Si no es una URL válida, mostramos un texto alternativo
  return <Text style={{ textAlign: 'center', marginVertical: 10, color: '#666' }}>[Imagen no disponible: {alt || 'recurso visual'}]</Text>;
};

// Componente de Documento PDF
const PdfDocument = ({ preguntas, respuestas = {}, asignatura, titulo, subtitulo, mostrarRespuestasUsuario }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>{titulo}</Text>
      {subtitulo && <Text style={styles.subtitle}>{subtitulo}</Text>}
      <Text style={styles.subtitle}>Asignatura: {asignatura.nombre}</Text>
      <Text style={styles.subtitle}>Fecha: {formatTimestamp(Date.now())}</Text>

      {/* Contenedor para todas las preguntas */}
      <View style={styles.questionsContainer}>
        {preguntas.map((pregunta, index) => {
          const respuestaUsuario = respuestas[pregunta.id];
          const respuestaCorrecta = pregunta.respuestaCorrecta;

          return (
            <View key={pregunta.id} style={styles.questionContainer} wrap={false}>
              <Text style={styles.question}>{index + 1}. {pregunta.pregunta}</Text>

              {/* Renderizar recurso según su tipo */}
              {pregunta.recurso && (
                <>
                  {pregunta.recurso.tipo === 'codigo' && (
                    <CodeBlockPdf
                      code={pregunta.recurso.contenido}
                    />
                  )}
                  {pregunta.recurso.tipo === 'imagen' && (
                    <ImageResource
                      src={pregunta.recurso.contenido}
                      alt={pregunta.recurso.altText || 'Imagen de la pregunta'}
                    />
                  )}
                </>
              )}

              {/* Opciones de respuesta */}
              {pregunta.opciones.map((opcion, idx) => {
                let optionStyle = styles.option;

                // Si mostramos respuestas del usuario y esta es la que seleccionó
                if (mostrarRespuestasUsuario && respuestaUsuario === idx) {
                  optionStyle = respuestaUsuario === respuestaCorrecta ? styles.correctOption : styles.selectedOption;
                }
                // Siempre destacar la respuesta correcta
                else if (idx === respuestaCorrecta) {
                  optionStyle = styles.correctOption;
                }

                return (
                  <Text key={idx} style={optionStyle}>
                    {String.fromCharCode(65 + idx)}. {opcion}
                  </Text>
                );
              })}

              {/* Explicación */}
              <Text style={styles.explanation}>
                <Text style={{ fontWeight: 'bold' }}>Explicación: </Text>
                {pregunta.explicacion}
              </Text>

              {/* Renderizar código de explicación si existe */}
              {pregunta.explicacionCodigo && (
                <CodeBlockPdf
                  code={pregunta.explicacionCodigo.contenido}
                />
              )}
            </View>
          );
        })}
      </View>

      <Text style={styles.footer}>
        Documento generado desde Quiz App - {new Date().toLocaleDateString()}
      </Text>
      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
    </Page>
  </Document>
);

/**
 * Componente para generar PDF utilizando @react-pdf/renderer.
 * Esta versión es optimizada para trabajar con React sin necesidad de renderizado previo.
 */
export default function PdfGenerator({
  preguntas,
  respuestas = {},
  asignatura,
  titulo,
  subtitulo,
  mostrarRespuestasUsuario = false,
  // Eliminar buttonVariant que no se usa
  buttonSize = 'small',
  buttonClassName = '',
  buttonText = 'Exportar PDF',
  // Eliminar rainbow que no se usa
}) {
  const [isGenerating, setIsGenerating] = useState(false);
  // Eliminar darkMode que no se usa

  // Registrar la fuente Courier para los bloques de código
  useEffect(() => {
    // Registrar fuente Courier para bloques de código
    Font.register({
      family: 'Courier',
      fonts: [
        { src: 'https://fonts.gstatic.com/s/courierprime/v9/u-450q2lgwslOqpF_6gQ8kELWwZjW-_-tvg.woff2' }
      ]
    });
  }, []);

  // Generar el PDF a través de la API programática
  const handleGeneratePDF = async () => {
    try {
      setIsGenerating(true);

      // Crear el documento con los datos proporcionados
      const blob = await pdf(
        <PdfDocument
          preguntas={preguntas}
          respuestas={respuestas}
          asignatura={asignatura}
          titulo={titulo}
          subtitulo={subtitulo}
          mostrarRespuestasUsuario={mostrarRespuestasUsuario}
        />
      ).toBlob();

      // Crear una URL para el blob
      const url = URL.createObjectURL(blob);

      // Crear un enlace temporal y hacer clic en él
      const link = document.createElement('a');
      const filename = `${asignatura.nombre.replace(/\s+/g, '-').toLowerCase()}-preguntas-${Date.now()}.pdf`;

      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();

      // Limpieza
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

    } catch (error) {
      console.error('Error al generar PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  // Eliminar customStyles que no se usa

  // Icono de PDF personalizado que se muestra antes del texto del botón
  const PdfIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 mr-2"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 8h-3v6h3m-3-3h2"
        fill="currentColor"
      />
    </svg>
  );

  return (
    <button
      onClick={handleGeneratePDF}
      disabled={isGenerating}
      className={`bg-[#ef4036] hover:bg-[#d63a31] hover:cursor-pointer text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center ${buttonSize === 'small' ? 'py-1 px-3 text-sm' : 'py-2 px-4'} ${buttonClassName}`}
      style={{ backgroundColor: '#ef4036' }}
    >
      {isGenerating ? (
        <>
          <div className="animate-spin h-4 w-4 mr-2 border-2 border-white rounded-full border-t-transparent"></div>
          Generando...
        </>
      ) : (
        <>
          <PdfIcon />
          {buttonText}
        </>
      )}
    </button>
  );
}