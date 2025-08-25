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
const filesToCopy = ['CNAME', 'SECURITY.md'];
filesToCopy.forEach(file => {
  if (fs.existsSync(file)) {
    fs.copyFileSync(file, `dist/${file}`);
  }
});

console.log('Production build completed!');
console.log('Files generated in dist/ directory');
console.log('Run "npm run serve" to test the production build locally');
