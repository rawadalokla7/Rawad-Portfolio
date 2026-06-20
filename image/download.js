/**
 * Profile & Project Asset Downloader
 * ----------------------------------------------------------------------------
 * This Node.js script automatically downloads your high-resolution bio photo
 * and all thematic showcase pictures from remote URLs, naming them professionally
 * to power your static HTML portfolio offline and on GitHub Pages!
 * 
 * Usage:
 *   1. Direct search or navigate to your exported portfolio folder.
 *   2. Run command in your term: node image/download.js
 * ----------------------------------------------------------------------------
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const assets = {
  "rawad_portrait.png": "https://raw.githubusercontent.com/rawadalokla7/rawad-khaled-portfolio/main/image/rawad_portrait.png",
  "rawad_portrait.jpg": "https://raw.githubusercontent.com/rawadalokla7/rawad-khaled-portfolio/main/image/rawad_portrait.jpg",
  "waveflow_subdiv.jpg": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=500&q=80",
  "waveflow_mesh.jpg": "https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&w=500&q=80",
  "waveflow_render.jpg": "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80",
  "aura_blur.jpg": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=500&q=80",
  "aura_opacity.jpg": "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=500&q=80",
  "aura_glow.jpg": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
  "solaris_endpoint.jpg": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=500&q=80",
  "solaris_latency.jpg": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=500&q=80",
  "solaris_response.jpg": "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80"
};

const outputDir = __dirname; // Current directory (image/)

console.log("=================================================");
console.log("🚀 RAWAD PORTFOLIO - AUTOMATIC ASSET DOWNLOADER");
console.log("=================================================");
console.log(`Downloading ${Object.keys(assets).length} files to: ${outputDir}\n`);

function downloadFile(filename, url) {
  return new Promise((resolve, reject) => {
    const dest = path.join(outputDir, filename);
    const file = fs.createWriteStream(dest);
    
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${filename}: Server returned status ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close(() => {
          console.log(`✅ Success: ${filename}`);
          resolve();
        });
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {}); // clean up partial files
      reject(err);
    });
  });
}

async function start() {
  for (const [filename, url] of Object.entries(assets)) {
    try {
      await downloadFile(filename, url);
    } catch (err) {
      console.error(`❌ Error downloading ${filename}: ${err.message}`);
    }
  }
  console.log("\n⚡ Image files downloaded and structured successfully!");
  console.log("Ready to push directly to GitHub Pages!");
}

start();
