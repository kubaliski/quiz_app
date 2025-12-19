import info from './info.js';
import moduloUnidadDosInterfacesDeclarativasMaquetacionEstilos from './modulos/unidad2.js';
import moduloUnidadTresUsabilidadUXUI from './modulos/unidad3.js';
import moduloUnidadCuatroDisenoVisualYPrototipado from './modulos/unidad4.js';
import moduloUnidadCincoInformesDocumentacionMultimedia from './modulos/unidad5.js';
import moduloUnidadSeisPublicacionDistribucionLicencias from './modulos/unidad6.js';
import moduloUnidadSietePruebasCalidad from './modulos/unidad7.js';
import moduloSimulacro1CSS3 from './modulos/simulacro1.js';

export const disenoInterfaces = {
    ...info,
    modulos: [
        moduloUnidadDosInterfacesDeclarativasMaquetacionEstilos,
        moduloUnidadTresUsabilidadUXUI,
        moduloUnidadCuatroDisenoVisualYPrototipado,
        moduloUnidadCincoInformesDocumentacionMultimedia,
        moduloUnidadSeisPublicacionDistribucionLicencias,
        moduloUnidadSietePruebasCalidad,
        moduloSimulacro1CSS3
    ]
};
export default disenoInterfaces;