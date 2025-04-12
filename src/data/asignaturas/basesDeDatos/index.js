import info from "./info.js";
import moduloDDLDML from "./modulos/ddlDql.js";
import moduloModeladoER from "./modulos/modeladoER.js";

export const basesDeDatos = {
    ...info,
    modulos: [
        moduloDDLDML,
        moduloModeladoER,
    ],
};

export default basesDeDatos;