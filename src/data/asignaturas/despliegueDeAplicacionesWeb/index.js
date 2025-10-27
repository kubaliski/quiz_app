import info from './info.js';
import moduloUnidadDosArquitecturaYProtocolos from './modulos/unidadDos.js';
import moduloUnidadTresServidoresWeb from './modulos/unidadTres.js';


export const despliegueDeAplicacionesWeb = {
  ...info,
  modulos: [
    moduloUnidadDosArquitecturaYProtocolos,
    moduloUnidadTresServidoresWeb
  ],
};

export default despliegueDeAplicacionesWeb;