import info from "./info";
import moduloJavaScriptXML from "./modulos/javascriptXml";
import moduloJavaScript from "./modulos/javascript";
import moduloBootstrap from "./modulos/bootstrap";
import moduloIntroduccion from "./modulos/introduccion";
import moduloHTMLBasico from "./modulos/html";
import moduloHTMLTablas from "./modulos/tablas";
import moduloHTMLListas from "./modulos/listas";
import moduloHTMLFormularios from "./modulos/formularios";
import moduloHTMLCSSLayout from "./modulos/layout";
import moduloSimulacroMayo from "./modulos/simulacromayo";

export const lenguajesMarcas = {
    ...info,
    modulos: [
        moduloJavaScriptXML,
        moduloJavaScript,
        moduloBootstrap,
        moduloIntroduccion,
        moduloHTMLBasico,
        moduloHTMLTablas,
        moduloHTMLListas,
        moduloHTMLFormularios,
        moduloHTMLCSSLayout,
        moduloSimulacroMayo
    ],
    };
export default lenguajesMarcas;