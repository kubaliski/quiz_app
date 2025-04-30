import info from "./info.js";
import moduloPoo from "./modulos/poo.js";
import moduloEstructurasDatos from "./modulos/estructurasDatos.js";
import moduloFundamentosJava from "./modulos/fundamentosJava.js";
import moduloDiezAbril from "./modulos/diezAbril.js";
import moduloJavaVirtualLab from "./modulos/cuarentaVirtualLab.js";


export const programacion = {
    ...info,
    modulos: [
        moduloPoo,
        moduloEstructurasDatos,
        moduloFundamentosJava,
        moduloDiezAbril,
        moduloJavaVirtualLab,
    ],
};

export default programacion;
