import info from "./info.js";
import moduloPoo from "./modulos/poo.js";
import moduloEstructurasDatos from "./modulos/estructurasDatos.js";
import moduloFundamentosJava from "./modulos/fundamentosJava.js";


export const programacion = {
    ...info,
    modulos: [
        moduloPoo,
        moduloEstructurasDatos,
        moduloFundamentosJava,
    ],
};

export default programacion;
