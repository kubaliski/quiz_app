import info from './info.js';
import moduloTestUnoIngles from './modulos/testUno.js';
import moduloTestDosIngles from './modulos/testDos.js';
import moduloTestTresIngles from './modulos/testTres.js';

export const ingles = {
    ...info,
    modulos: [
        moduloTestUnoIngles,
        moduloTestDosIngles,
        moduloTestTresIngles,
    ], 
};

export default ingles;