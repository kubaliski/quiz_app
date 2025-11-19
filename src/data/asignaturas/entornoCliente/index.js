import info from './info.js';
import moduloUnidadDosJavascriptBasico from './modulos/unidad2.js';
import moduloUnidadTresEstructurasYFormularios from './modulos/unidad3.js';
import moduloUnidadCuatroDomAvanzadoYProgramacionIntermedia from './modulos/unidad4.js';
import moduloUnidadCincoServiciosWebIntegracionApis from './modulos/unidad5.js';

export const entornoServidor = {
    ...info,
    modulos: [
        moduloUnidadDosJavascriptBasico,
        moduloUnidadTresEstructurasYFormularios,
        moduloUnidadCuatroDomAvanzadoYProgramacionIntermedia,
        moduloUnidadCincoServiciosWebIntegracionApis
    ]
};
export default entornoServidor;