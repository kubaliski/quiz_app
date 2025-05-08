import info from "./info.js";
import moduloPrimerTrimestre from "./modulos/primerTrimestre";
import moduloSegundoTrimestre from "./modulos/segundoTrimestre";
import moduloBiblioteca from "./modulos/biblioteca.js";
import moduloTercerTrimestreUno from "./modulos/tercerTrimestreUno.js";
import moduloTercerTrimestreDos from "./modulos/tercerTrimestreDos.js";
import moduloMopeVL from "./modulos/cientoMolpe.js";
import moduloSimulacroUnoMPO from "./modulos/simulacroUnoMPO.js";

export const moduloProfesionalOptativo = {
    ...info,
    modulos: [
        moduloPrimerTrimestre,
        moduloSegundoTrimestre,
        moduloBiblioteca,
        moduloMopeVL,
        moduloTercerTrimestreUno,
        moduloTercerTrimestreDos,
        moduloSimulacroUnoMPO,
    ],
};
export default moduloProfesionalOptativo;