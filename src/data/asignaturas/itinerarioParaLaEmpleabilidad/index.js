import info from "./info.js";
import moduloLegislacionLaboral from "./modulos/legislacionYPrevencion.js";
import moduloUnidadUno from "./modulos/unidadUno.js";
import moduloUnidadDos from "./modulos/unidadDos.js";
import moduloUnidadTres from "./modulos/unidadTres.js";
import moduloUnidadCuatro from "./modulos/unidadCuatro.js";
import moduloUnidadCinco from "./modulos/unidadCinco.js";
import moduloUnidadSeis from "./modulos/unidadSeis.js";
import moduloUnidadSiete from "./modulos/unidadSiete.js";
import moduloUnidadOcho from "./modulos/unidadOcho.js";
import importanteExamen01 from "./modulos/importanteExamen01.js";
import importanteExamen02 from "./modulos/importanteExamen02.js";
import moduloRepasoUnidadUno from "./modulos/repasoUnidadUno.js";
import moduloRepasoUnidadDos from "./modulos/repasoUnidadDos.js";
import moduloRepasoUnidadTres from "./modulos/repasoUnidadTres.js";
import moduloRepasoUnidadCuatro from "./modulos/repasoUnidadCuatro.js";
import importanteExamen03 from "./modulos/importanteExamen03.js";

export const itinerarioParaLaEmpleabilidad = {
  ...info,
  modulos: [
    moduloLegislacionLaboral,
    moduloUnidadUno,
    moduloUnidadDos,
    moduloUnidadTres,
    moduloUnidadCuatro,
    moduloRepasoUnidadUno,
    moduloRepasoUnidadDos,
    moduloRepasoUnidadTres,
    moduloRepasoUnidadCuatro,
    moduloUnidadCinco,
    moduloUnidadSeis,
    moduloUnidadOcho,
    moduloUnidadSiete,
    importanteExamen01,
    importanteExamen02,
    importanteExamen03
  ],
};
export default itinerarioParaLaEmpleabilidad;
