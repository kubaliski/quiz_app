/**
 * Script para verificar la configuración de versión en entorno de producción
 * Ejecutar con: node scripts/verify-version.js
 */
import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Obtener información del archivo actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Colores para console.log
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
};

console.log(`${colors.blue}Verificador de configuración de versión${colors.reset}`);
console.log('=================================');

// 1. Verificar si existe version.json local
const localVersionPath = path.join(process.cwd(), 'dist', 'version.json');
let localVersion = null;

console.log(`\n${colors.magenta}Comprobando archivo local de versión...${colors.reset}`);
if (fs.existsSync(localVersionPath)) {
  try {
    const content = fs.readFileSync(localVersionPath, 'utf8');
    localVersion = JSON.parse(content);
    console.log(`${colors.green}✓ Archivo version.json encontrado${colors.reset}`);
    console.log(`  Versión: ${localVersion.version}`);
    console.log(`  Fecha de build: ${localVersion.buildDate}`);

    // Comprobar si es versión de desarrollo
    if (localVersion.version.includes('-dev')) {
      console.log(`${colors.red}⚠ ADVERTENCIA: Versión de desarrollo detectada en archivo local${colors.reset}`);
    }
  } catch (error) {
    console.log(`${colors.red}✗ Error al leer version.json: ${error.message}${colors.reset}`);
  }
} else {
  console.log(`${colors.red}✗ No se encontró el archivo version.json local${colors.reset}`);
}

// 2. Verificar scripts de package.json
console.log(`\n${colors.magenta}Comprobando package.json...${colors.reset}`);
const packageJsonPath = path.join(process.cwd(), 'package.json');

if (fs.existsSync(packageJsonPath)) {
  try {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    console.log(`${colors.green}✓ package.json encontrado${colors.reset}`);
    console.log(`  Versión del proyecto: ${packageJson.version}`);

    // Comprobar scripts de build
    const scripts = packageJson.scripts || {};

    if (scripts.build) {
      console.log(`  Script de build: ${scripts.build}`);

      // Verificar si el script de build incluye la generación de version.json
      if (scripts.build.includes('generate-version') ||
          scripts.build.includes('version.json')) {
        console.log(`${colors.green}  ✓ El script de build parece incluir generación de version.json${colors.reset}`);
      } else {
        console.log(`${colors.yellow}  ⚠ El script de build no parece incluir generación explícita de version.json${colors.reset}`);
        console.log(`    Sugerencia: Modifica el script de build para incluir la generación del archivo de versión`);
      }
    } else {
      console.log(`${colors.red}  ✗ No se encontró script de build${colors.reset}`);
    }

    // Comprobar si existe un script postbuild
    if (scripts.postbuild) {
      console.log(`  Script postbuild: ${scripts.postbuild}`);

      if (scripts.postbuild.includes('generate-version') ||
          scripts.postbuild.includes('version.json') ||
          scripts.postbuild.includes('netlify-postbuild')) {
        console.log(`${colors.green}  ✓ El script postbuild incluye generación de version.json${colors.reset}`);
      } else {
        console.log(`${colors.yellow}  ⚠ El script postbuild no parece incluir generación de version.json${colors.reset}`);
      }
    } else {
      console.log(`${colors.yellow}  ⚠ No se encontró script postbuild${colors.reset}`);
      console.log(`    Sugerencia: Añade un script postbuild para generar version.json después del build`);
    }
  } catch (error) {
    console.log(`${colors.red}✗ Error al leer package.json: ${error.message}${colors.reset}`);
  }
} else {
  console.log(`${colors.red}✗ No se encontró package.json${colors.reset}`);
}

// 3. Verificar netlify.toml si existe
console.log(`\n${colors.magenta}Comprobando netlify.toml...${colors.reset}`);
const netlifyTomlPath = path.join(process.cwd(), 'netlify.toml');

if (fs.existsSync(netlifyTomlPath)) {
  try {
    const netlifyToml = fs.readFileSync(netlifyTomlPath, 'utf8');
    console.log(`${colors.green}✓ netlify.toml encontrado${colors.reset}`);

    // Verificar comandos de build
    const buildCommandMatch = netlifyToml.match(/command\s*=\s*"([^"]+)"/);
    if (buildCommandMatch) {
      const buildCommand = buildCommandMatch[1];
      console.log(`  Comando de build: ${buildCommand}`);

      if (buildCommand.includes('netlify-postbuild') ||
          buildCommand.includes('version.json')) {
        console.log(`${colors.green}  ✓ El comando de build incluye generación de version.json${colors.reset}`);
      } else {
        console.log(`${colors.red}  ✗ El comando de build no incluye generación de version.json${colors.reset}`);
        console.log(`    Sugerencia: Modifica el comando en netlify.toml para incluir 'node netlify-postbuild.js'`);
      }
    } else {
      console.log(`${colors.red}  ✗ No se encontró comando de build en netlify.toml${colors.reset}`);
    }

    // Verificar headers para version.json
    if (netlifyToml.includes('/version.json') &&
        netlifyToml.includes('Cache-Control')) {
      console.log(`${colors.green}  ✓ Headers para version.json configurados correctamente${colors.reset}`);
    } else {
      console.log(`${colors.yellow}  ⚠ No se encontraron headers para version.json o están incompletos${colors.reset}`);
    }
  } catch (error) {
    console.log(`${colors.red}✗ Error al leer netlify.toml: ${error.message}${colors.reset}`);
  }
} else {
  console.log(`${colors.yellow}⚠ No se encontró netlify.toml${colors.reset}`);
}

// 4. Verificar URL de producción si se proporciona
if (process.argv.length > 2) {
  const prodUrl = process.argv[2];
  console.log(`\n${colors.magenta}Comprobando versión en producción (${prodUrl})...${colors.reset}`);

  const versionUrl = new URL('/version.json', prodUrl);
  const client = versionUrl.protocol === 'https:' ? https : http;

  // Añadir timestamp para evitar caché
  versionUrl.searchParams.append('_t', Date.now());

  const options = {
    method: 'GET',
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
    }
  };

  const req = client.request(versionUrl, options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      if (res.statusCode === 200) {
        try {
          const remoteVersion = JSON.parse(data);
          console.log(`${colors.green}✓ Archivo version.json encontrado en producción${colors.reset}`);
          console.log(`  Versión: ${remoteVersion.version}`);
          console.log(`  Fecha de build: ${remoteVersion.buildDate}`);

          // Comprobar si es versión de desarrollo
          if (remoteVersion.version.includes('-dev')) {
            console.log(`${colors.red}⚠ ADVERTENCIA: Versión de desarrollo detectada en producción${colors.reset}`);
          }

          // Comparar con versión local si está disponible
          if (localVersion) {
            if (localVersion.version === remoteVersion.version) {
              console.log(`${colors.green}  ✓ Las versiones local y remota coinciden${colors.reset}`);
            } else {
              console.log(`${colors.yellow}  ⚠ Las versiones local y remota no coinciden:${colors.reset}`);
              console.log(`    Local: ${localVersion.version}`);
              console.log(`    Remota: ${remoteVersion.version}`);
            }
          }
        } catch (error) {
          console.log(`${colors.red}✗ Error al parsear version.json remoto: ${error.message}${colors.reset}`);
          console.log(`  Contenido recibido: ${data.substring(0, 100)}...`);
        }
      } else {
        console.log(`${colors.red}✗ Error al obtener version.json: ${res.statusCode} ${res.statusMessage}${colors.reset}`);
      }

      console.log('\nVerificación completa.');
    });
  });

  req.on('error', (error) => {
    console.log(`${colors.red}✗ Error al conectar con el servidor: ${error.message}${colors.reset}`);
    console.log('\nVerificación completa con errores.');
  });

  req.end();
} else {
  console.log(`\n${colors.yellow}ℹ Para verificar la versión en producción, ejecuta:${colors.reset}`);
  console.log(`  node scripts/verify-version.js https://kubaquizapp.netlify.app/`);
  console.log('\nVerificación local completa.');
}
