

/**
 * Componente para mostrar imágenes en las preguntas.
*
* @component
* @param {Object} props - Propiedades del componente
* @param {string} props.src - URL de la imagen
* @param {string} props.alt - Texto alternativo para accesibilidad
* @param {string} [props.className] - Clases CSS adicionales
* @returns {JSX.Element} Componente ImageResource
*/
import React from 'react';

export default function ImageResource({ src, alt, className = '' }) {
  return (
    <div className={`${className}`}>
      <img
        src={src}
        alt={alt || "Imagen de la pregunta"}
        className="max-w-full rounded-lg border border-gray-200 dark:border-gray-700 shadow-md hover:opacity-95 transition-opacity"
      />
    </div>
  );
}