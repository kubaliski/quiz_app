import info from './info.js';
import moduloUnidadDosFuncionesArrays from './modulos/unidad2.js';
import moduloUnidadTresFormulariosSesionesErrores from './modulos/unidad3.js';
import moduloUnidadCuatroPOOJsonBBDD from './modulos/unidad4.js';

export const entornoServidor = {
    ...info,
    modulos: [
        moduloUnidadDosFuncionesArrays,
        moduloUnidadTresFormulariosSesionesErrores,
        moduloUnidadCuatroPOOJsonBBDD
    ],
};
export default entornoServidor;