/**
 * Utilidades para mostrar notificaciones toast en la aplicación
 * Este archivo exporta funciones para mostrar diferentes tipos de toasts
 * sin depender directamente de ToastContainer.jsx
 *
 * @module toastUtils
 */

// Objeto para almacenar las funciones de manejo de toasts
let toastManager = {
  add: (_message, _type, _duration) => {
    console.warn('Toast manager no inicializado');
    return -1;
  },
  remove: () => {}
};

/**
 * Inicializa el administrador de toasts
 * @param {Object} manager - Objeto que contiene las funciones add y remove
 */
export const initToastManager = (manager) => {
  if (manager && typeof manager.add === 'function' && typeof manager.remove === 'function') {
    toastManager = manager;
  }
};

/**
 * Muestra un toast genérico
 * @param {string} message - Mensaje a mostrar
 * @param {string} [type='info'] - Tipo de toast ('success', 'error', 'warning', 'info')
 * @param {number} [duration=3000] - Duración en milisegundos
 * @returns {number} ID del toast
 */
export const showToast = (message, type = 'info', duration = 3000) => {
  return toastManager.add(message, type, duration);
};

/**
 * Muestra un toast de éxito
 * @param {string} message - Mensaje a mostrar
 * @param {number} [duration=3000] - Duración en milisegundos
 * @returns {number} ID del toast
 */
export const showSuccess = (message, duration = 3000) => {
  return showToast(message, 'success', duration);
};

/**
 * Muestra un toast de error
 * @param {string} message - Mensaje a mostrar
 * @param {number} [duration=3000] - Duración en milisegundos
 * @returns {number} ID del toast
 */
export const showError = (message, duration = 3000) => {
  return showToast(message, 'error', duration);
};

/**
 * Muestra un toast de advertencia
 * @param {string} message - Mensaje a mostrar
 * @param {number} [duration=3000] - Duración en milisegundos
 * @returns {number} ID del toast
 */
export const showWarning = (message, duration = 3000) => {
  return showToast(message, 'warning', duration);
};

/**
 * Muestra un toast informativo
 * @param {string} message - Mensaje a mostrar
 * @param {number} [duration=3000] - Duración en milisegundos
 * @returns {number} ID del toast
 */
export const showInfo = (message, duration = 3000) => {
  return showToast(message, 'info', duration);
};

/**
 * Oculta un toast específico
 * @param {number} id - ID del toast a ocultar
 */
export const hideToast = (id) => {
  toastManager.remove(id);
};