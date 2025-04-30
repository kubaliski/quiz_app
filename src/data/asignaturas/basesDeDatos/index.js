import info from "./info.js";
import moduloDDLDML from "./modulos/ddlDml.js";
import moduloModeladoER from "./modulos/modeladoER.js";
import moduloConfiguracionMySQL from "./modulos/configUserOptimizacion.js";

export const basesDeDatos = {
    ...info,
    modulos: [
        moduloDDLDML,
        moduloModeladoER,
        moduloConfiguracionMySQL,
    ],
};

export default basesDeDatos;