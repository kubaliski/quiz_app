import info from "./info.js";
import moduloPruebasSoftware from "./modulos/pruebasSoftware.js";
import moduloMaquinasVirtuales from "./modulos/maquitavirtual.js";
import moduloMantenimientoCodigo from "./modulos/mantenimiento.js";
import moduloUML from "./modulos/uml.js";
import moduloGit from "./modulos/git.js";
import moduloSimulacroEntornos from "./modulos/SimulacroEntornosUno.js";

export const entornosDeDesarrollo = {
  ...info,
  modulos: [
    moduloPruebasSoftware,
    moduloMaquinasVirtuales,
    moduloMantenimientoCodigo,
    moduloGit,
    moduloUML,
    moduloSimulacroEntornos,
  ],
};
export default entornosDeDesarrollo;
