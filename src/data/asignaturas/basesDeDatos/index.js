import info from "./info.js";
import moduloDDLDML from "./modulos/ddlDml.js";
import moduloModeladoER from "./modulos/modeladoER.js";
import moduloConfiguracionMySQL from "./modulos/configUserOptimizacion.js";
import moduloSimulacroUno from "./modulos/moduloSimulacroUno.js";
import moduloSimulacroDos from "./modulos/moduloSimulacroDos.js";

export const basesDeDatos = {
    ...info,
    modulos: [
        moduloDDLDML,
        moduloModeladoER,
        moduloConfiguracionMySQL,
        moduloSimulacroUno,
        moduloSimulacroDos,
    ],
};

export default basesDeDatos;