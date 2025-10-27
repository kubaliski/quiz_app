import info from './info.js';
import moduloUnidadDosCambioClimaticoDescarbonizacion from './modulos/unidadDos.js';
import moduloUnidadTresEconomiaCircularAplicacion from './modulos/unidadTres.js';
import moduloUnidadCuatroConservacionEcosistemas from './modulos/unidadCuatro.js';

export const sostenibilidad = {
    ...info,
    modulos: [
        moduloUnidadDosCambioClimaticoDescarbonizacion,
        moduloUnidadTresEconomiaCircularAplicacion,
        moduloUnidadCuatroConservacionEcosistemas
    ]

};
export default sostenibilidad;