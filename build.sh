#!/bin/bash

echo "🚗 Building AutoKulu CSS..."

# Check if Node.js is installed
if command -v node &> /dev/null; then
    echo "✅ Node.js found, using Tailwind CLI..."
    
    # Install dependencies if package.json exists
    if [ -f "package.json" ]; then
        echo "📦 Installing dependencies..."
        npm install
        
        # Build CSS
        echo "🎨 Building CSS..."
        npm run build
        
        echo "✅ Build complete! CSS file: dist/output.css"
    else
        echo "❌ package.json not found"
    fi
else
    echo "ℹ️  Node.js not found. Using pre-built CSS file."
    echo "✅ Pre-built CSS file: dist/output.css"
    echo ""
    echo "💡 To build CSS yourself, install Node.js from https://nodejs.org/"
    echo "   Then run: npm install && npm run build"
fi

echo ""
echo "🌐 Open index.html in your browser to test the application!"
