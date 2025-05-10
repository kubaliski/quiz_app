import info from "./info.js";
import moduloLegislacionLaboral from "./modulos/legislacionYPrevencion.js";
import moduloUnidadUno from "./modulos/unidadUno.js";
import moduloUnidadDos from "./modulos/unidadDos.js";
import moduloUnidadTres from "./modulos/unidadTres.js";
import moduloUnidadCuatro from "./modulos/unidadCuatro.js";
import importanteExamen from "./modulos/importanteExamen.js";
import moduloUnidadCinco from "./modulos/unidadCinco.js";
import moduloUnidadSeis from "./modulos/unidadSeis.js";

export const itinerarioParaLaEmpleabilidad = {
  ...info,
  modulos: [
    moduloLegislacionLaboral,
    moduloUnidadUno,
    moduloUnidadDos,
    moduloUnidadTres,
    moduloUnidadCuatro,
    importanteExamen,
    moduloUnidadCinco,
    moduloUnidadSeis,
  ],
};
export default itinerarioParaLaEmpleabilidad;
