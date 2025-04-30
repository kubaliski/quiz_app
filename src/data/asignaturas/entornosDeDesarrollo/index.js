import info from "./info.js";
import moduloPruebasSoftware from "./modulos/pruebasSoftware.js";
import moduloMaquinasVirtuales from "./modulos/maquitavirtual.js";
import moduloMantenimientoCodigo from "./modulos/mantenimiento.js";
import moduloUML from "./modulos/uml.js";
import moduloGit from "./modulos/git.js";

export const entornosDeDesarrollo = {
  ...info,
  modulos: [
    moduloPruebasSoftware,
    moduloMaquinasVirtuales,
    moduloMantenimientoCodigo,
    moduloGit,
    moduloUML,
  ],
};
export default entornosDeDesarrollo;
