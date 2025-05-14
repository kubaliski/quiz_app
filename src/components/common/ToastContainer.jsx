/**
 * Contenedor para gestionar múltiples toasts y mostrarlos en la interfaz.
 * Optimizado para visualización en dispositivos móviles y adaptado a temas.
 * Este componente debe ser utilizado una sola vez en la raíz de la aplicación.
 *
 * @component
 * @returns {JSX.Element} Componente ToastContainer renderizado
 */
import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useDeviceType } from '@hooks';
import { initToastManager } from '@utils/toastUtils';
import Toast from './Toast';

// Creamos un ID único para cada toast
let toastId = 0;

// Objeto para almacenar las funciones de control de toast
const toastManager = {
  toasts: [],
  listeners: new Set(),

  // Método para notificar a los listeners que ha habido un cambio
  notifyListeners() {
    this.listeners.forEach(listener => listener(this.toasts));
  },

  // Añadir un nuevo toast
  add(message, type = 'info', duration = 3000) {
    const id = ++toastId;
    this.toasts.push({ id, message, type, duration });
    this.notifyListeners();
    return id;
  },

  // Eliminar un toast por ID
  remove(id) {
    this.toasts = this.toasts.filter(toast => toast.id !== id);
    this.notifyListeners();
  },

  // Registrar un listener para cambios
  subscribe(listener) {
    this.listeners.add(listener);
    // Devolver una función para desuscribirse
    return () => {
      this.listeners.delete(listener);
    };
  }
};

// Inicializar el toastManager en toastUtils.js
// Importante: esto debe hacerse fuera del componente para evitar reinicialización
initToastManager(toastManager);

// Componente contenedor
export default function ToastContainer() {
  const [toasts, setToasts] = useState([]);
  const { isMobile } = useDeviceType();

  // Actualizar el estado cuando cambian los toasts
  useEffect(() => {
    const unsubscribe = toastManager.subscribe((newToasts) => {
      setToasts([...newToasts]);
    });

    return unsubscribe;
  }, []);

  const handleClose = useCallback((id) => {
    toastManager.remove(id);
  }, []);

  // Si no hay toasts, no renderizar nada
  if (toasts.length === 0) return null;

  // Crear un portal para renderizar los toasts fuera del flujo normal del DOM
  // En móvil, centrar en la parte inferior de la pantalla
  return createPortal(
    <div className={`
      fixed z-50 p-4 space-y-2
      ${isMobile
        ? 'bottom-0 left-0 right-0 flex flex-col items-center'
        : 'bottom-0 right-0 max-w-sm'
      }
    `}>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          duration={toast.duration}
          onClose={() => handleClose(toast.id)}
        />
      ))}
    </div>,
    document.body
  );
}