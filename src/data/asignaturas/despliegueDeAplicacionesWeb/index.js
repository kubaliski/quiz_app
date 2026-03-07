import info from './info.js';
import moduloUnidadDosArquitecturaYProtocolos from './modulos/unidadDos.js';
import moduloUnidadTresServidoresWeb from './modulos/unidadTres.js';
import moduloUnidadCuatroServiciosRed from './modulos/unidadCuatro.js';
import moduloUnidadCincoServidoresDespliegue from './modulos/unidadCinco.js';
import moduloUnidadSeisAutomatizacionContenedoresCICD from './modulos/unidadSeis.js';
import moduloUnidadSieteSeguridadDespliegue from './modulos/unidadSiete.js';
import moduloTestUnoDespliegue from './modulos/testUno.js';
import moduloTestDosDespliegue from './modulos/testDos.js';

export const despliegueDeAplicacionesWeb = {
  ...info,
  modulos: [
    moduloUnidadDosArquitecturaYProtocolos,
    moduloUnidadTresServidoresWeb,
    moduloUnidadCuatroServiciosRed,
    moduloUnidadCincoServidoresDespliegue,
    moduloUnidadSeisAutomatizacionContenedoresCICD,
    moduloUnidadSieteSeguridadDespliegue,
    moduloTestUnoDespliegue,
    moduloTestDosDespliegue
  ],
};

export default despliegueDeAplicacionesWeb;