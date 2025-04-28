import info from "./info.js";
import moduloPrimerTrimestre from "./modulos/primerTrimestre";
import moduloSegundoTrimestre from "./modulos/segundoTrimestre";
import moduloBiblioteca from "./modulos/biblioteca.js";

export const moduloProfesionalOptativo = {
    ...info,
    modulos: [moduloPrimerTrimestre, moduloSegundoTrimestre, moduloBiblioteca],
};
export default moduloProfesionalOptativo;