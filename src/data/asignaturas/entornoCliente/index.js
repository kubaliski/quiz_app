import info from './info.js';
import moduloUnidadDosJavascriptBasico from './modulos/unidad2.js';
import moduloUnidadTresEstructurasYFormularios from './modulos/unidad3.js';
import moduloUnidadCuatroDomAvanzadoYProgramacionIntermedia from './modulos/unidad4.js';
import moduloUnidadCincoServiciosWebIntegracionApis from './modulos/unidad5.js';
import moduloUnidadSeisXmlSeguridadDespliegue from './modulos/unidad6.js';
import moduloRepaso1JavaScript from './modulos/repaso1.js';
import moduloRepaso2JavaScriptReact from './modulos/repaso2.js';


export const entornoServidor = {
    ...info,
    modulos: [
        moduloUnidadDosJavascriptBasico,
        moduloUnidadTresEstructurasYFormularios,
        moduloUnidadCuatroDomAvanzadoYProgramacionIntermedia,
        moduloUnidadCincoServiciosWebIntegracionApis,
        moduloUnidadSeisXmlSeguridadDespliegue,
        moduloRepaso1JavaScript,
        moduloRepaso2JavaScriptReact
        
    ]
};
export default entornoServidor;