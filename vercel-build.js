// Este archivo ayuda a Vercel a construir correctamente el proyecto
const fs = require('fs');
const path = require('path');

console.log('=== Iniciando proceso de construcción para Vercel ===');

// Verificar estructura de directorios necesarios
const requiredDirs = [
  'css',
  'js',
  'images',
  'data',
  'components'
];

console.log('Verificando estructura de directorios...');
requiredDirs.forEach(dir => {
  const dirPath = path.join(process.cwd(), dir);
  if (!fs.existsSync(dirPath)) {
    console.log(`Creando directorio: ${dir}`);
    fs.mkdirSync(dirPath, { recursive: true });
  }
});

console.log('=== Proceso de construcción completado ===');
