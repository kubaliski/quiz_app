import info from './info.js';
import moduloUnidadDosFuncionesArrays from './modulos/unidad2.js';
import moduloUnidadTresFormulariosSesionesErrores from './modulos/unidad3.js';
import moduloUnidadCuatroPOOJsonBBDD from './modulos/unidad4.js';
import moduloUnidadCincoMVCyApisRestful from './modulos/unidad5.js';
import moduloRepaso1ExpressEJSFormularios from './modulos/repaso1.js';
import moduloRepaso2NodeExpress from './modulos/repaso2.js';

export const entornoServidor = {
    ...info,
    modulos: [
        moduloUnidadDosFuncionesArrays,
        moduloUnidadTresFormulariosSesionesErrores,
        moduloUnidadCuatroPOOJsonBBDD,
        moduloUnidadCincoMVCyApisRestful,
        moduloRepaso1ExpressEJSFormularios,
        moduloRepaso2NodeExpress
    ],
};
export default entornoServidor;