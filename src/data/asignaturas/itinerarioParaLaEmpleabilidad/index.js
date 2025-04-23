import info from './info.js';
import moduloLegislacionLaboral from './modulos/legislacionYPrevencion.js';
export const itinerarioParaLaEmpleabilidad = {
    ...info,
    modulos: [
        moduloLegislacionLaboral,
    ],
};
export default itinerarioParaLaEmpleabilidad;