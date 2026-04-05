# AutoKulu - Auto kulude kalkulaator

A car ownership cost calculator built with Vue.js and Tailwind CSS, available in Estonian, English, and Russian.

## Features

- 🚗 Smart cost calculations including fuel, insurance, maintenance, and more
- 💾 Data management with import/export functionality
- 🌍 Multi-language support (Estonian, English, Russian)
- 📱 Responsive design for all devices
- 🔒 Security-focused with XSS protection

## Data Sources

### make_model.json

The `make_model.json` file contains a standardized list of vehicle makes and models used for dropdown selections in the application.

- **Source**: https://andmed.eesti.ee/datasets/esmaselt-registreeritud-soidukid
- **Generation Prompt**: "Based on registration data, generate a standardized global make + model list for dropdowns. Cover ~97 percentile by count (arv), normalize naming across markets, remove low-frequency models, and keep it user-friendly."

This dataset is optimized to:

- Cover the vast majority of commonly registered vehicles (~97 percentile by count)
- Normalize make and model naming across different markets
- Exclude rare or low-frequency models to keep the UI clean and practical
- Provide a user-friendly selection experience

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

### GitHub Pages (Recommended)

This project is configured for automatic deployment to GitHub Pages:

1. **Push to GitHub**: Your code will automatically deploy when you push to the `main` or `master` branch
2. **Automatic Build**: GitHub Actions will build and deploy your site automatically
3. **Custom Domain**: If you have a `CNAME` file, it will be automatically configured

#### Manual GitHub Pages Setup

1. Go to your repository Settings → Pages
2. Set Source to "GitHub Actions"
3. The workflow will automatically deploy from the `dist/` folder

### Manual Deployment

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
