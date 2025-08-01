import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const images = [
  'public/om_meg.jpg',
  'public/galleri/gellakk/gellakk_1.jpg',
  'public/galleri/gellakk/gellakk_2.jpg',
  'public/galleri/gellakk/gellakk_3.jpg',
  'public/galleri/gelenegler/gelenegler_1.jpg',
  'public/galleri/gelenegler/gelenegler_2.jpg',
  'public/galleri/gelenegler/IMG_2295.jpg'
];

async function convertToWebP() {
  console.log('Converting images to WebP format...');
  
  for (const imagePath of images) {
    if (!fs.existsSync(imagePath)) {
      console.log(`Skipping ${imagePath} - file not found`);
      continue;
    }
    
    const outputPath = imagePath.replace(/\.(jpg|jpeg)$/i, '.webp');
    const dir = path.dirname(outputPath);
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    try {
      await sharp(imagePath)
        .webp({ 
          quality: 85,
          effort: 6,
          nearLossless: false
        })
        .toFile(outputPath);
      
      const originalSize = fs.statSync(imagePath).size;
      const webpSize = fs.statSync(outputPath).size;
      const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
      
      console.log(`✅ ${imagePath} -> ${outputPath} (${savings}% smaller)`);
    } catch (error) {
      console.error(`❌ Error converting ${imagePath}:`, error.message);
    }
  }
  
  console.log('WebP conversion complete!');
}

convertToWebP().catch(console.error); 