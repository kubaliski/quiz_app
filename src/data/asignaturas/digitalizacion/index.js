import info from "./info.js";
import moduloUnidadDosTecnologiasHabilitadorasDigitales from "./modulos/unidadDos.js";
import moduloUnidadTresSistemasConectados from "./modulos/unidadTres.js";
import moduloUnidadCuatroIAyBigData from "./modulos/unidadCuatro.js";
import moduloUnidadCincoValorDelDato from "./modulos/unidadCinco.js";
import moduloUnidadSeisTransformacionDigital from "./modulos/unidadSeis.js";
import moduloTestUnoDigitalizacion from "./modulos/testUno.js";
import moduloTestDosDigitalizacion from "./modulos/testDos.js";
import moduloSimulacroUnoDigitalizacion from "./modulos/simulacro1.js";

export const digitalizacion = {
  ...info,
  modulos: [
    moduloUnidadDosTecnologiasHabilitadorasDigitales,
    moduloUnidadTresSistemasConectados,
    moduloUnidadCuatroIAyBigData,
    moduloUnidadCincoValorDelDato,
    moduloUnidadSeisTransformacionDigital,
    moduloTestUnoDigitalizacion,
    moduloTestDosDigitalizacion,
    moduloSimulacroUnoDigitalizacion,
  ],
};
export default digitalizacion;

