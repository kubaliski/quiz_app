import info from "./info.js";
import moduloPruebasSoftware from "./modulos/pruebasSoftware.js";
import moduloMaquinasVirtuales from "./modulos/maquitavirtual.js";

export const entornosDeDesarrollo = {
  ...info,
  modulos: [moduloPruebasSoftware, moduloMaquinasVirtuales],
};
export default entornosDeDesarrollo;
