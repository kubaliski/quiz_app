import info from './info.js';
import moduloTestUnoIngles from './modulos/testUno.js';
import moduloTestDosIngles from './modulos/testDos.js';

export const ingles = {
    ...info,
    modulos: [
        moduloTestUnoIngles,
        moduloTestDosIngles,
    ], 
};

export default ingles;