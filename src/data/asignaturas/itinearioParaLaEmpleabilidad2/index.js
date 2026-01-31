import info from './info.js';
import moduloUnidadDosSoftSkills from './modulos/unidadDos.js';
import moduloUnidadTresEmprendimientoInnovacionSostenibilidad from './modulos/unidadTres.js';
import moduloUnidadCuatroIdentificacionValidacionIdeas from './modulos/unidadCuatro.js';
import moduloUnidadCincoConstruccionProyectosEmprendedores from './modulos/unidadCinco.js';
import moduloTestUnoEstrategiasBusqueda from './modulos/testUno.js';
import moduloTestDosInteligenciaEmocional from './modulos/testDos.js';
import moduloTestTresEmprendimiento from './modulos/testTres.js';
import moduloTestCuatroITP2 from './modulos/testCuatro.js';
import moduloTestCincoITP2 from './modulos/testCinco.js';


export const itinearioParaLaEmpleabilidad2 = {
    ...info,
    modulos: [
        moduloUnidadDosSoftSkills,
        moduloUnidadTresEmprendimientoInnovacionSostenibilidad,
        moduloUnidadCuatroIdentificacionValidacionIdeas,
        moduloUnidadCincoConstruccionProyectosEmprendedores,
        moduloTestUnoEstrategiasBusqueda,
        moduloTestDosInteligenciaEmocional,
        moduloTestTresEmprendimiento,
        moduloTestCuatroITP2,
        moduloTestCincoITP2,
    ],
};

export default itinearioParaLaEmpleabilidad2;