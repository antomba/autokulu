#!/bin/bash

echo "🚗 Building AutoKulu for production..."

# Clean dist directory
rm -rf dist
mkdir -p dist

# Build Tailwind CSS
echo "📦 Building Tailwind CSS..."
npx tailwindcss -i ./src/input.css -o ./dist/output.css --minify

# Build production HTML
echo "🔨 Building production HTML..."
node build.js

# Copy static files
echo "📋 Copying static files..."
cp CNAME dist/ 2>/dev/null || echo "CNAME not found, skipping..."
cp SECURITY.md dist/ 2>/dev/null || echo "SECURITY.md not found, skipping..."
cp favicon.ico dist/ 2>/dev/null || echo "favicon.ico not found, skipping..."
cp favicon-32x32.png dist/ 2>/dev/null || echo "favicon-32x32.png not found, skipping..."
cp favicon-16x16.png dist/ 2>/dev/null || echo "favicon-16x16.png not found, skipping..."
cp apple-touch-icon.png dist/ 2>/dev/null || echo "apple-touch-icon.png not found, skipping..."

echo "✅ Production build completed!"
echo "📁 Files are in the dist/ directory"
echo "🌐 Run 'npm run serve' to test locally"
echo "🚀 Deploy the contents of dist/ to your hosting provider"
