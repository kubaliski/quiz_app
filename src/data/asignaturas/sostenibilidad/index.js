import info from "./info.js";
import moduloUnidadDosCambioClimaticoDescarbonizacion from "./modulos/unidadDos.js";
import moduloUnidadTresEconomiaCircularAplicacion from "./modulos/unidadTres.js";
import moduloUnidadCuatroConservacionEcosistemas from "./modulos/unidadCuatro.js";
import moduloUnidadCincoEquidadBienestarSocial from "./modulos/unidadCinco.js";
import moduloTestUnoSostenibilidad from "./modulos/testUno.js";
import simulacroUnoSostenibilidad from "./modulos/simulacro1.js";

export const sostenibilidad = {
  ...info,
  modulos: [
    moduloUnidadDosCambioClimaticoDescarbonizacion,
    moduloUnidadTresEconomiaCircularAplicacion,
    moduloUnidadCuatroConservacionEcosistemas,
    moduloUnidadCincoEquidadBienestarSocial,
    moduloTestUnoSostenibilidad,
    simulacroUnoSostenibilidad,
  ],
};
export default sostenibilidad;

