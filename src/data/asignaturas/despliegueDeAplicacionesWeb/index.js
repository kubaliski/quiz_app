import info from './info.js';
import moduloUnidadDosArquitecturaYProtocolos from './modulos/unidadDos.js';
import moduloUnidadTresServidoresWeb from './modulos/unidadTres.js';
import moduloUnidadCuatroServiciosRed from './modulos/unidadCuatro.js';
import moduloUnidadCincoServidoresDespliegue from './modulos/unidadCinco.js';

export const despliegueDeAplicacionesWeb = {
  ...info,
  modulos: [
    moduloUnidadDosArquitecturaYProtocolos,
    moduloUnidadTresServidoresWeb,
    moduloUnidadCuatroServiciosRed,
    moduloUnidadCincoServidoresDespliegue
  ],
};

export default despliegueDeAplicacionesWeb;