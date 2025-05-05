/**
 * Script de post-procesamiento para Netlify
 * Genera el archivo version.json después del build
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuración - ajústala según necesites
const config = {
  // Directorio de publicación en Netlify
  publishDir: 'dist',
  // Formato de fecha para la compilación
  dateFormat: {
    timeZone: 'Europe/Madrid',
    dateStyle: 'full',
    timeStyle: 'long'
  }
};

// Fecha formateada para España
const buildDate = new Date().toLocaleString('es-ES', config.dateFormat);

// Intenta obtener la versión del package.json
let version = '1.0.0';
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  version = packageJson.version || version;
} catch (error) {
  console.warn('No se pudo leer package.json:', error.message);
}

// Intenta obtener información de Git si está disponible
let gitInfo = '';
try {
  // Obtener hash corto del último commit
  const gitHash = execSync('git rev-parse --short HEAD').toString().trim();

  // Obtener rama actual
  const gitBranch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();

  gitInfo = `${gitBranch}-${gitHash}`;
} catch (error) {
  console.warn('No se pudo obtener información de Git:', error.message);
}

// Obtener información del despliegue de Netlify si está disponible
const netlifyInfo = {
  buildId: process.env.NETLIFY_BUILD_ID || '',
  siteName: process.env.NETLIFY_SITE_NAME || '',
  deployUrl: process.env.DEPLOY_URL || '',
  commitRef: process.env.COMMIT_REF || ''
};

// Crear objeto de versión
const versionData = {
  version: version + (gitInfo ? `-${gitInfo}` : ''),
  buildDate,
  deployInfo: netlifyInfo.buildId ? {
    buildId: netlifyInfo.buildId,
    siteName: netlifyInfo.siteName,
    deployUrl: netlifyInfo.deployUrl,
    commitRef: netlifyInfo.commitRef
  } : undefined,
  notes: process.env.VERSION_NOTES || 'Actualización de la aplicación'
};

// Asegurarse de que el directorio de publicación existe
const publishDir = path.resolve(process.cwd(), config.publishDir);
if (!fs.existsSync(publishDir)) {
  console.error(`Error: El directorio de publicación '${publishDir}' no existe.`);
  process.exit(1);
}

// Escribir archivo version.json
const versionFilePath = path.join(publishDir, 'version.json');
fs.writeFileSync(versionFilePath, JSON.stringify(versionData, null, 2));

console.log(`✅ Archivo version.json generado con versión: ${versionData.version}`);
console.log(`📂 Ubicación: ${versionFilePath}`);