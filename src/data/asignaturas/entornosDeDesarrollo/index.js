import info from "./info.js";
import moduloPruebasSoftware from "./modulos/pruebasSoftware.js";

export const entornosDeDesarrollo = {
  ...info,
  modulos: [moduloPruebasSoftware],
};
export default entornosDeDesarrollo;
