import info from './info.js';
import moduloUnidadDosSoftSkills from './modulos/unidadDos.js';
import moduloUnidadTresEmprendimientoInnovacionSostenibilidad from './modulos/unidadTres.js';
import moduloUnidadCuatroIdentificacionValidacionIdeas from './modulos/unidadCuatro.js';
import moduloUnidadCincoConstruccionProyectosEmprendedores from './modulos/unidadCinco.js';

export const itinearioParaLaEmpleabilidad2 = {
    ...info,
    modulos: [
        moduloUnidadDosSoftSkills,
        moduloUnidadTresEmprendimientoInnovacionSostenibilidad,
        moduloUnidadCuatroIdentificacionValidacionIdeas,
        moduloUnidadCincoConstruccionProyectosEmprendedores
    ],
};

export default itinearioParaLaEmpleabilidad2;