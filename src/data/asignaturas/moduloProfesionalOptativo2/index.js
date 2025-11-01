import info from './info.js';
import moduloUnidadUnoCloudComputing from './modulos/unidad1.js';
import moduloUnidadDosInfraestructuraGlobal from './modulos/unidad2.js';
import moduloUnidadTresSeguridadAWS from './modulos/unidad3.js';
import moduloUnidadCuatroRedesEnLaNube from './modulos/unidad4.js';

export const moduloProfesionalOptativo = {
    ...info,
    modulos: [
        moduloUnidadUnoCloudComputing,
        moduloUnidadDosInfraestructuraGlobal,
        moduloUnidadTresSeguridadAWS,
        moduloUnidadCuatroRedesEnLaNube
    ],
};
export default moduloProfesionalOptativo;