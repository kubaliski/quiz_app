const fs = require('fs');
const path = require('path');

// Configuración específica para itinerarioParaLaEmpleabilidad
const DIRECTORIO_OBJETIVO = './src/data/asignaturas/itinerarioParaLaEmpleabilidad/modulos';
const PREFIJO_ASIGNATURA = 'itinerario';
const ASIGNATURA_ID = 6;

console.log('🔧 Reparador de IDs - Itinerario para la Empleabilidad');
console.log('=' .repeat(60));

function obtenerComando() {
  const comando = process.argv[2];
  const comandosValidos = ['validar', 'reporte', 'reparar'];

  if (!comando || !comandosValidos.includes(comando)) {
    console.log('\n📋 Uso del script:');
    console.log('  node fix-itinerario-ids.cjs validar  - Solo validar archivos');
    console.log('  node fix-itinerario-ids.cjs reporte  - Generar reporte detallado');
    console.log('  node fix-itinerario-ids.cjs reparar  - Reparar archivos automáticamente');
    console.log('\n💡 Ejemplo: node fix-itinerario-ids.cjs reparar');
    process.exit(1);
  }

  return comando;
}

function leerArchivo(rutaArchivo) {
  try {
    return fs.readFileSync(rutaArchivo, 'utf8');
  } catch (error) {
    console.log(`❌ Error leyendo ${rutaArchivo}: ${error.message}`);
    return null;
  }
}

function escribirArchivo(rutaArchivo, contenido) {
  try {
    fs.writeFileSync(rutaArchivo, contenido, 'utf8');
    return true;
  } catch (error) {
    console.log(`❌ Error escribiendo ${rutaArchivo}: ${error.message}`);
    return false;
  }
}

function analizarArchivo(contenido) {
  const info = {
    moduloId: null,
    asignaturaId: null,
    preguntas: []
  };

  // Buscar ID del módulo
  const moduloIdMatch = contenido.match(/id:\s*(\d+),/);
  if (moduloIdMatch) {
    info.moduloId = parseInt(moduloIdMatch[1]);
  }

  // Buscar ID de asignatura
  const asignaturaIdMatch = contenido.match(/asignaturaId:\s*(\d+),/);
  if (asignaturaIdMatch) {
    info.asignaturaId = parseInt(asignaturaIdMatch[1]);
  }

  // Buscar IDs de preguntas
  const preguntaMatches = contenido.matchAll(/{\s*id:\s*(\d+),\s*moduloId:\s*(\d+),/g);
  for (const match of preguntaMatches) {
    info.preguntas.push({
      id: parseInt(match[1]),
      moduloId: parseInt(match[2]),
      posicion: match.index
    });
  }

  return info;
}

function generarNuevoModuloId(nombreArchivo) {
  // Extraer número del nombre del archivo o usar un mapeo específico
  const mapeoModulos = {
    'importanteExamen01.js': 606,
    'importanteExamen02.js': 607,
    'importanteExamen03.js': 616,
    'legislacionYPrevencion.js': 601,
    'repasoUnidadCuatro.js': 615,
    'repasoUnidadDos.js': 613,
    'repasoUnidadTres.js': 614,
    'repasoUnidadUno.js': 612,
    'unidadCinco.js': 608,
    'unidadCuatro.js': 605,
    'unidadDos.js': 603,
    'unidadOcho.js': 611,
    'unidadSeis.js': 609,
    'unidadSiete.js': 610,
    'unidadTres.js': 604,
    'unidadUno.js': 602
  };

  return mapeoModulos[nombreArchivo] || null;
}

function generarNuevoPreguntaId(moduloId, indicePregunta) {
  // Para mantener consistencia con el sistema existente
  const baseId = moduloId * 100; // Por ejemplo: 606 * 100 = 60600
  return baseId + indicePregunta + 1;
}

function validarArchivo(rutaArchivo) {
  const contenido = leerArchivo(rutaArchivo);
  if (!contenido) return null;

  const info = analizarArchivo(contenido);
  const nombreArchivo = path.basename(rutaArchivo);

  const problemas = [];

  // Validar ID de asignatura
  if (info.asignaturaId !== ASIGNATURA_ID) {
    problemas.push({
      tipo: 'asignatura_incorrecta',
      actual: info.asignaturaId,
      esperado: ASIGNATURA_ID,
      descripcion: `AsignaturaId debe ser ${ASIGNATURA_ID}`
    });
  }

  // Validar ID de módulo
  const moduloIdEsperado = generarNuevoModuloId(nombreArchivo);
  if (moduloIdEsperado && info.moduloId !== moduloIdEsperado) {
    problemas.push({
      tipo: 'modulo_incorrecto',
      actual: info.moduloId,
      esperado: moduloIdEsperado,
      descripcion: `ModuloId debe ser ${moduloIdEsperado} para ${nombreArchivo}`
    });
  }

  // Validar IDs de preguntas
  info.preguntas.forEach((pregunta, indice) => {
    const preguntaIdEsperado = generarNuevoPreguntaId(moduloIdEsperado || info.moduloId, indice);

    // Verificar ID de pregunta
    if (pregunta.id !== preguntaIdEsperado) {
      problemas.push({
        tipo: 'pregunta_id_incorrecto',
        actual: pregunta.id,
        esperado: preguntaIdEsperado,
        indice: indice + 1,
        descripcion: `Pregunta ${indice + 1}: ID debe ser ${preguntaIdEsperado}`
      });
    }

    // Verificar moduloId en pregunta
    const moduloIdParaPregunta = moduloIdEsperado || info.moduloId;
    if (pregunta.moduloId !== moduloIdParaPregunta) {
      problemas.push({
        tipo: 'pregunta_modulo_incorrecto',
        actual: pregunta.moduloId,
        esperado: moduloIdParaPregunta,
        indice: indice + 1,
        descripcion: `Pregunta ${indice + 1}: moduloId debe ser ${moduloIdParaPregunta}`
      });
    }
  });

  return {
    archivo: nombreArchivo,
    rutaCompleta: rutaArchivo,
    totalPreguntas: info.preguntas.length,
    problemas: problemas,
    info: info
  };
}

function repararArchivo(rutaArchivo) {
  const contenido = leerArchivo(rutaArchivo);
  if (!contenido) return false;

  const info = analizarArchivo(contenido);
  const nombreArchivo = path.basename(rutaArchivo);

  let contenidoReparado = contenido;
  let cambios = 0;

  // Reparar asignaturaId
  if (info.asignaturaId !== ASIGNATURA_ID) {
    const regex = /(asignaturaId:\s*)(\d+)(,)/;
    contenidoReparado = contenidoReparado.replace(regex, `$1${ASIGNATURA_ID}$3`);
    cambios++;
  }

  // Reparar moduloId
  const moduloIdEsperado = generarNuevoModuloId(nombreArchivo);
  if (moduloIdEsperado && info.moduloId !== moduloIdEsperado) {
    const regex = /(id:\s*)(\d+)(,)/;
    contenidoReparado = contenidoReparado.replace(regex, `$1${moduloIdEsperado}$3`);
    cambios++;
  }

  // Reparar IDs de preguntas
  const moduloIdFinal = moduloIdEsperado || info.moduloId;

  info.preguntas.forEach((pregunta, indice) => {
    const preguntaIdEsperado = generarNuevoPreguntaId(moduloIdFinal, indice);

    // Reparar ID de pregunta
    if (pregunta.id !== preguntaIdEsperado) {
      const regex = new RegExp(`(id:\\s*)${pregunta.id}(,\\s*moduloId:)`);
      contenidoReparado = contenidoReparado.replace(regex, `$1${preguntaIdEsperado}$2`);
      cambios++;
    }

    // Reparar moduloId en pregunta
    if (pregunta.moduloId !== moduloIdFinal) {
      const regex = new RegExp(`(moduloId:\\s*)${pregunta.moduloId}(,)`);
      contenidoReparado = contenidoReparado.replace(regex, `$1${moduloIdFinal}$2`);
      cambios++;
    }
  });

  if (cambios > 0) {
    const exito = escribirArchivo(rutaArchivo, contenidoReparado);
    if (exito) {
      console.log(`✅ ${nombreArchivo}: ${cambios} IDs reparados`);
      return true;
    } else {
      console.log(`❌ ${nombreArchivo}: Error al escribir cambios`);
      return false;
    }
  } else {
    console.log(`✅ ${nombreArchivo}: Sin cambios necesarios`);
    return true;
  }
}

function procesarDirectorio(comando) {
  const rutaCompleta = path.resolve(DIRECTORIO_OBJETIVO);

  console.log(`📁 Procesando directorio: ${DIRECTORIO_OBJETIVO}`);
  console.log(`📍 Ruta completa: ${rutaCompleta}`);

  if (!fs.existsSync(rutaCompleta)) {
    console.log('❌ El directorio no existe');
    process.exit(1);
  }

  const archivos = fs.readdirSync(rutaCompleta)
    .filter(archivo => archivo.endsWith('.js'))
    .map(archivo => path.join(rutaCompleta, archivo));

  console.log(`📄 Archivos encontrados: ${archivos.length}`);
  console.log('');

  if (archivos.length === 0) {
    console.log('⚠️  No se encontraron archivos .js en el directorio');
    return;
  }

  let totalProblemas = 0;
  let archivosConProblemas = 0;
  let archivosReparados = 0;

  archivos.forEach(rutaArchivo => {
    const resultado = validarArchivo(rutaArchivo);
    if (!resultado) return;

    const tieneProblemas = resultado.problemas.length > 0;

    if (comando === 'validar') {
      if (tieneProblemas) {
        console.log(`❌ ${resultado.archivo}: ${resultado.problemas.length} problemas`);
        archivosConProblemas++;
        totalProblemas += resultado.problemas.length;
      } else {
        console.log(`✅ ${resultado.archivo}: OK`);
      }
    }

    else if (comando === 'reporte') {
      console.log(`📄 ${resultado.archivo}`);
      console.log(`   Total preguntas: ${resultado.totalPreguntas}`);
      console.log(`   ModuloId actual: ${resultado.info.moduloId}`);
      console.log(`   AsignaturaId actual: ${resultado.info.asignaturaId}`);

      if (tieneProblemas) {
        console.log(`   ⚠️  Problemas encontrados: ${resultado.problemas.length}`);
        resultado.problemas.forEach((problema, idx) => {
          console.log(`      ${idx + 1}. ${problema.tipo.toUpperCase()}: ${problema.descripcion}`);
          if (problema.actual !== undefined) {
            console.log(`         Actual: ${problema.actual} → Esperado: ${problema.esperado}`);
          }
        });
        archivosConProblemas++;
        totalProblemas += resultado.problemas.length;
      } else {
        console.log(`   ✅ Sin problemas`);
      }
      console.log('');
    }

    else if (comando === 'reparar') {
      if (tieneProblemas) {
        const exito = repararArchivo(rutaArchivo);
        if (exito) {
          archivosReparados++;
        }
        archivosConProblemas++;
        totalProblemas += resultado.problemas.length;
      } else {
        console.log(`✅ ${resultado.archivo}: Ya está correcto`);
      }
    }
  });

  // Resumen final
  console.log('\n' + '='.repeat(60));
  console.log('📊 RESUMEN');
  console.log(`📄 Archivos procesados: ${archivos.length}`);
  console.log(`⚠️  Archivos con problemas: ${archivosConProblemas}`);
  console.log(`🔢 Total de problemas: ${totalProblemas}`);

  if (comando === 'reparar') {
    console.log(`🔧 Archivos reparados: ${archivosReparados}`);
  }

  if (totalProblemas === 0) {
    console.log('🎉 ¡Todos los archivos están correctos!');
  } else if (comando === 'reparar' && archivosReparados > 0) {
    console.log('✅ Reparación completada');
  }
}

// Ejecutar el script
const comando = obtenerComando();
procesarDirectorio(comando);