# AutoKulu - Auto kulude kalkulaator

A car ownership cost calculator built with Vue.js and Tailwind CSS, available in Estonian, English, and Russian.

## Features

- 🚗 Smart cost calculations including fuel, insurance, maintenance, and more
- 💾 Data management with import/export functionality
- 🌍 Multi-language support (Estonian, English, Russian)
- 📱 Responsive design for all devices
- 🔒 Security-focused with XSS protection

## Development

### Prerequisites

- Node.js (v14 or higher)
- npm

### Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development mode:
   ```bash
   npm run dev
   ```

## Production Build

### Build Process

The application now uses a proper production build system instead of CDN links:

1. **Build CSS**: Tailwind CSS is compiled and minified
2. **Build HTML**: Production HTML is generated with production Vue.js build
3. **Optimize**: Console logs are removed and files are optimized

### Build Commands

```bash
# Full production build
npm run build

# Build CSS only
npm run build:css

# Build HTML only
npm run build:html

# Watch mode for development
npm run watch

# Serve production build locally
npm run serve
```

### Build Output

The production build creates a `dist/` directory containing:
- `index.html` - Production-ready HTML file
- `output.css` - Minified Tailwind CSS
- `CNAME` - Domain configuration (if exists)
- `SECURITY.md` - Security documentation

## Deployment

1. Run the production build:
   ```bash
   npm run build
   ```

2. Deploy the contents of the `dist/` directory to your hosting provider

3. The application will now run without CDN dependencies and console warnings

## What Changed

- ✅ Removed CDN Tailwind CSS dependency
- ✅ Switched to production Vue.js build
- ✅ Added proper build process with Tailwind CLI
- ✅ Removed development console.log statements
- ✅ Created production-optimized output

## Local Testing

Test the production build locally:

```bash
npm run build
npm run serve
```

Then open http://localhost:8080 in your browser.

## License

MIT License - see LICENSE file for details.
