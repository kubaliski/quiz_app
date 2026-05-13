import info from "./info.js";
import moduloTestUnoIngles from "./modulos/testUno.js";
import moduloTestDosIngles from "./modulos/testDos.js";
import moduloTestTresIngles from "./modulos/testTres.js";
import moduloSimulacro1Ingles from "./modulos/simulacro1.js";
import moduloSimulacro2Ingles from "./modulos/simulalcro2.js";
import moduloSimulacro3Inlges from "./modulos/simulacro3.js";
import moduloSimulacro4Ingles from "./modulos/simulacro4.js";
import moduloSimulacro5Ingles from "./modulos/simulacro5.js";

export const ingles = {
  ...info,
  modulos: [
    moduloTestUnoIngles,
    moduloTestDosIngles,
    moduloTestTresIngles,
    moduloSimulacro1Ingles,
    moduloSimulacro2Ingles,
    moduloSimulacro3Inlges,
    moduloSimulacro4Ingles,
    moduloSimulacro5Ingles,
  ],
};

export default ingles;
