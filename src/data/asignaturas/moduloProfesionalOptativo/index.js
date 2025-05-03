import info from "./info.js";
import moduloPrimerTrimestre from "./modulos/primerTrimestre";
import moduloSegundoTrimestre from "./modulos/segundoTrimestre";
import moduloBiblioteca from "./modulos/biblioteca.js";
import moduloMopeVL from "./modulos/cientoMolpe.js";

export const moduloProfesionalOptativo = {
    ...info,
    modulos: [
        moduloPrimerTrimestre,
        moduloSegundoTrimestre,
        moduloBiblioteca,
        moduloMopeVL,
    ],
};
export default moduloProfesionalOptativo;