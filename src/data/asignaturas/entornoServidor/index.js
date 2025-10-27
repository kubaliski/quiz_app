import info from './info.js';
import moduloUnidadDosFuncionesArrays from './modulos/unidad2.js';
import moduloUnidadTresFormulariosSesionesErrores from './modulos/unidad3.js';
export const entornoServidor = {
    ...info,
    modulos: [
        moduloUnidadDosFuncionesArrays,
        moduloUnidadTresFormulariosSesionesErrores
    ],
};
export default entornoServidor;