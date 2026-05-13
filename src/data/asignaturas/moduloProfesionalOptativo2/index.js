import info from "./info.js";
import moduloUnidadUnoCloudComputing from "./modulos/unidad1.js";
import moduloUnidadDosInfraestructuraGlobal from "./modulos/unidad2.js";
import moduloUnidadTresSeguridadAWS from "./modulos/unidad3.js";
import moduloUnidadCuatroRedesEnLaNube from "./modulos/unidad4.js";
import moduloUnidadCincoServiciosDeComputo from "./modulos/unidad5.js";
import moduloExamenUno from "./modulos/preguntasExamen1.js";
import moduloExamenDos from "./modulos/preguntasExamen2.js";
import simulacroUnoModuloProfesional1 from "./modulos/simulacro1.js";
import simulacroDosModuloProfesional from "./modulos/simulacro2.js";
import simulacroKahootNavidad from "./modulos/simulacroKahoot.js";

export const moduloProfesionalOptativo = {
  ...info,
  modulos: [
    moduloUnidadUnoCloudComputing,
    moduloUnidadDosInfraestructuraGlobal,
    moduloUnidadTresSeguridadAWS,
    moduloUnidadCuatroRedesEnLaNube,
    moduloUnidadCincoServiciosDeComputo,
    moduloExamenUno,
    moduloExamenDos,
    simulacroUnoModuloProfesional1,
    simulacroDosModuloProfesional,
    simulacroKahootNavidad
  ],
};
export default moduloProfesionalOptativo;

