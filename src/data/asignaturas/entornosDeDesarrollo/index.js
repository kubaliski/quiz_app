import info from "./info.js";
import moduloPruebasSoftware from "./modulos/pruebasSoftware.js";
import moduloMaquinasVirtuales from "./modulos/maquitavirtual.js";
import moduloMantenimientoCodigo from "./modulos/mantenimiento.js";

export const entornosDeDesarrollo = {
  ...info,
  modulos: [moduloPruebasSoftware, moduloMaquinasVirtuales, moduloMantenimientoCodigo],
};
export default entornosDeDesarrollo;
