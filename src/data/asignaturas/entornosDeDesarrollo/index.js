import info from "./info.js";
import moduloPruebasSoftware from "./modulos/pruebasSoftware.js";
import moduloMaquinasVirtuales from "./modulos/maquitavirtual.js";
import moduloMantenimientoCodigo from "./modulos/mantenimiento.js";
import moduloUML from "./modulos/uml.js";
import moduloGit from "./modulos/git.js";
import moduloSimulacroEntornos from "./modulos/SimulacroEntornosUno.js";
import moduloSimulacroDosEntornos from "./modulos/simulacroEntornosDos.js";
import moduloSimulacroTresEntornos from "./modulos/simulacroEntornosTres.js";
import moduloExamenFinalEntornos from "./modulos/examenEntornos.js";
import moduloExamenFinal2Entornos from "./modulos/examenEntornosDos.js";

export const entornosDeDesarrollo = {
  ...info,
  modulos: [
    moduloPruebasSoftware,
    moduloMaquinasVirtuales,
    moduloMantenimientoCodigo,
    moduloGit,
    moduloUML,
    moduloSimulacroEntornos,
    moduloSimulacroDosEntornos,
    moduloSimulacroTresEntornos,
    moduloExamenFinalEntornos,
    moduloExamenFinal2Entornos,
  ],
};
export default entornosDeDesarrollo;
