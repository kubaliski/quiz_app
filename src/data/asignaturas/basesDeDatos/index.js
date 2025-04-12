import info from "./info.js";
import moduloDDLDML from "./modulos/ddlDql.js";

export const basesDeDatos = {
    ...info,
    modulos: [
        moduloDDLDML,
    ],
};

export default basesDeDatos;