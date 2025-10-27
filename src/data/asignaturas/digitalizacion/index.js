import info from './info.js';
import moduloUnidadDosTecnologiasHabilitadorasDigitales from './modulos/unidadDos.js';
import moduloUnidadTresSistemasConectados from './modulos/unidadTres.js';
import moduloUnidadCuatroIAyBigData from './modulos/unidadCuatro.js';

export const digitalizacion = {
    ...info,
    modulos: [
        moduloUnidadDosTecnologiasHabilitadorasDigitales,
        moduloUnidadTresSistemasConectados,
        moduloUnidadCuatroIAyBigData
    ]
}; 
export default digitalizacion;