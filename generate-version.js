/**
 * Script para generar automáticamente el archivo version.json
 * Debe ejecutarse como parte del proceso de construcción
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { execSync } from 'child_process';

// Obtener información del archivo actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Directorio de salida, asumiendo que es 'dist' para Vite
const outputDir = path.resolve(__dirname, 'dist');

// Asegurarse de que el directorio existe
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Obtener información de versión del package.json
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const version = packageJson.version || '1.0.0';

// Obtener SOLO el hash del último commit de Git (sin rama)
let gitHash = '';
try {
  // Usar exactamente este comando para obtener solo el hash
  gitHash = execSync('git rev-parse --short HEAD').toString().trim();
  console.log(`Hash Git obtenido: ${gitHash}`);
} catch (error) {
  console.warn('No se pudo obtener el hash de Git:', error.message);
}

// Crear objeto de versión con entorno claramente marcado
// Asegurarse de que nunca incluya '-dev' en producción
const isProduction = process.env.NODE_ENV === 'production';
const versionData = {
  // Construir versión solo con el hash, sin incluir la rama
  version: version + (gitHash ? `-${gitHash}` : '') + (isProduction ? '' : '-dev'),
  buildDate: new Date().toISOString(),
  environment: isProduction ? 'production' : 'development',
  notes: process.env.VERSION_NOTES || (isProduction ? 'Actualización de la aplicación' : 'Versión de desarrollo')
};

// Escribir archivo version.json
const versionFilePath = path.join(outputDir, 'version.json');
fs.writeFileSync(versionFilePath, JSON.stringify(versionData, null, 2));

console.log(`✅ Archivo version.json generado con versión: ${versionData.version}`);
console.log(`📂 Entorno: ${versionData.environment}`);