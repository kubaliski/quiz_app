/**
 * Script para generar automáticamente el archivo version.json
 * Debe ejecutarse como parte del proceso de construcción
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Directorio de salida, asumiendo que es 'dist' para Vite
const outputDir = path.resolve(__dirname, 'dist');

// Asegurarse de que el directorio existe
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Obtener información de versión del package.json
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const version = packageJson.version || '1.0.0';

// Obtener hash del último commit de Git (opcional)
let gitHash = '';
try {
  gitHash = execSync('git rev-parse --short HEAD').toString().trim();
} catch (error) {
  console.warn('No se pudo obtener el hash de Git:', error.message);
}

// Crear objeto de versión
const versionData = {
  version: version + (gitHash ? `-${gitHash}` : ''),
  buildDate: new Date().toISOString(),
  notes: process.env.VERSION_NOTES || 'Actualización de la aplicación'
};

// Escribir archivo version.json
const versionFilePath = path.join(outputDir, 'version.json');
fs.writeFileSync(versionFilePath, JSON.stringify(versionData, null, 2));

console.log(`✅ Archivo version.json generado con versión: ${versionData.version}`);