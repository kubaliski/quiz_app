import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { VitePWA } from 'vite-plugin-pwa'
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Función para generar version.json en tiempo de construcción
function generateVersionPlugin() {
  return {
    name: 'vite-plugin-generate-version',
    buildEnd: async () => {
      // Asegurarse de que el directorio dist existe
      const outputDir = path.resolve(__dirname, 'dist');
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      // Leer version del package.json
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      let version = packageJson.version || '1.0.0';

      // Intentar añadir hash de git si está disponible
      try {
        const { execSync } = await import('child_process');
        const gitHash = execSync('git rev-parse --short HEAD').toString().trim();
        version = `${version}-${gitHash}`;
      } catch (error) {
        console.warn('No se pudo obtener hash de Git:', error.message);
      }

      // Crear objeto de versión
      const versionData = {
        version,
        buildDate: new Date().toISOString(),
        notes: process.env.VERSION_NOTES || 'Actualización de la aplicación'
      };

      // Escribir archivo version.json
      const versionFilePath = path.join(outputDir, 'version.json');
      fs.writeFileSync(versionFilePath, JSON.stringify(versionData, null, 2));
      console.log(`✅ Archivo version.json generado con versión: ${versionData.version}`);
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@styles': path.resolve(__dirname, 'src/styles'),
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'prompt', // Cambiado de 'autoUpdate' a 'prompt' para tener más control
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Quiz App',
        short_name: 'QuizApp',
        description: 'Una aplicación para crear y responder cuestionarios',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/',
        icons: [
          {
            src: 'android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      devOptions: {
        enabled: true
      },
      // Estrategias de cacheo personalizadas
      workbox: {
        // Personalizar la gestión del caché
        runtimeCaching: [
          {
            // Regla para version.json - nunca cachear
            urlPattern: /\/version\.json$/i,
            handler: 'NetworkOnly',
            options: {
              backgroundSync: {
                name: 'version-check-queue',
                options: {
                  maxRetentionTime: 24 * 60 // Retento por 24 horas máximo
                }
              }
            }
          },
          {
            // Regla para archivos de módulos de asignaturas
            urlPattern: /\/modulos\/.*\.js$/i,
            handler: 'NetworkFirst', // Prioriza la red sobre el caché
            options: {
              cacheName: 'quiz-dynamic-modules',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24, // 1 día
              },
              // Estrategia para determinar si una respuesta de red se considera "fresca"
              cacheableResponse: {
                statuses: [0, 200],
              },
              // Broadcast update cuando hay cambios en el contenido
              broadcastUpdate: {
                channelName: 'module-updates',
                options: {
                  headersToCheck: ['ETag', 'Last-Modified'],
                }
              },
            },
          },
          {
            // Para el resto de assets estáticos
            urlPattern: /\.(?:js|css|woff2?|png|jpg|jpeg|svg|gif)$/i,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'quiz-static-resources',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 7, // 1 semana
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            // Para las solicitudes de API o datos
            urlPattern: /\/data\/|\/services\//,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'quiz-api-data',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 5, // 5 minutos
              },
              networkTimeoutSeconds: 5, // Timeout de red
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
        // Ignorar algunos patrones de URL para no cachear
        navigateFallbackDenylist: [
          // Patrones que nunca deberían ser cacheados (si los hay)
        ],
        // Configuración de skipWaiting para activación automática o manual
        skipWaiting: false, // Lo gestionamos manualmente desde nuestro componente
        clientsClaim: true,
      },
    }),
    generateVersionPlugin(),
  ],
  build: {
    // Asegurarse de que el contenido hash cambie cuando se actualiza el contenido
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Separar los módulos de las asignaturas en chunks independientes
          if (id.includes('/modulos/')) {
            return `modulo-${id.split('/modulos/')[1].split('.')[0]}`;
          }
        },
        // Generar nombres de archivo con hash para evitar problemas de caché
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
  },
})