import info from './info.js';
import moduloUnidadDosInterfacesDeclarativasMaquetacionEstilos from './modulos/unidad2.js';
import moduloUnidadTresUsabilidadUXUI from './modulos/unidad3.js';
import moduloUnidadCuatroDisenoVisualYPrototipado from './modulos/unidad4.js';
import moduloUnidadCincoInformesDocumentacionMultimedia from './modulos/unidad5.js';
import moduloUnidadSeisPublicacionDistribucionLicencias from './modulos/unidad6.js';
import moduloUnidadSietePruebasCalidad from './modulos/unidad7.js';

export const disenoInterfaces = {
    ...info,
    modulos: [
        moduloUnidadDosInterfacesDeclarativasMaquetacionEstilos,
        moduloUnidadTresUsabilidadUXUI,
        moduloUnidadCuatroDisenoVisualYPrototipado,
        moduloUnidadCincoInformesDocumentacionMultimedia,
        moduloUnidadSeisPublicacionDistribucionLicencias,
        moduloUnidadSietePruebasCalidad,
    ]
};
export default disenoInterfaces;