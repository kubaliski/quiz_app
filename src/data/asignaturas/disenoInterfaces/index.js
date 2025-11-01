import info from './info.js';
import moduloUnidadDosInterfacesDeclarativasMaquetacionEstilos from './modulos/unidad2.js';
import moduloUnidadTresUsabilidadUXUI from './modulos/unidad3.js';
import moduloUnidadCuatroDisenoVisualYPrototipado from './modulos/unidad4.js';

export const disenoInterfaces = {
    ...info,
    modulos: [
        moduloUnidadDosInterfacesDeclarativasMaquetacionEstilos,
        moduloUnidadTresUsabilidadUXUI,
        moduloUnidadCuatroDisenoVisualYPrototipado
    ]
};
export default disenoInterfaces;