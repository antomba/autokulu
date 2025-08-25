const fs = require('fs');
const path = require('path');

// Read the source HTML file
const sourceHtml = fs.readFileSync('index.html', 'utf8');

// Create production HTML by replacing CDN links with local files
const productionHtml = sourceHtml
  // Remove CDN Tailwind CSS
  .replace('<script src="https://cdn.tailwindcss.com"></script>', '')
  // Replace Vue CDN with local production build
  .replace(
    '<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>',
    '<script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>'
  )
  // Fix CSS path for production artifact root (dist/ becomes ./)
  .replace('dist/output.css', 'output.css')
  // Remove console.log statements for production
  .replace(/console\.log\([^)]+\);?\s*/g, '')
  .replace(/console\.error\([^)]+\);?\s*/g, '');

// Ensure dist directory exists
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

// Write the production HTML file
fs.writeFileSync('dist/index.html', productionHtml);

// Copy other necessary files to dist
const filesToCopy = ['CNAME', 'SECURITY.md', 'README.md', 'favicon.ico', 'favicon-32x32.png', 'favicon-16x16.png', 'apple-touch-icon.png'];
filesToCopy.forEach(file => {
  if (fs.existsSync(file)) {
    fs.copyFileSync(file, `dist/${file}`);
  }
});

// Copy the built CSS file to dist if it exists
if (fs.existsSync('dist/output.css')) {
  console.log('CSS file already exists in dist/');
} else {
  console.log('Warning: CSS file not found in dist/. Make sure to run "npm run build:css" first.');
}

console.log('Production build completed!');
console.log('Files generated in dist/ directory');
console.log('Run "npm run serve" to test the production build locally');
