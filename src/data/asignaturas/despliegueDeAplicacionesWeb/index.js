import info from './info.js';
import moduloUnidadDosArquitecturaYProtocolos from './modulos/unidadDos.js';
import moduloUnidadTresServidoresWeb from './modulos/unidadTres.js';
import moduloUnidadCuatroServiciosRed from './modulos/unidadCuatro.js';

export const despliegueDeAplicacionesWeb = {
  ...info,
  modulos: [
    moduloUnidadDosArquitecturaYProtocolos,
    moduloUnidadTresServidoresWeb,
    moduloUnidadCuatroServiciosRed
  ],
};

export default despliegueDeAplicacionesWeb;