const fs = require('fs');
const path = require('path');

const src = 'C:\\Users\\babus\\.gemini\\antigravity\\brain\\5a5c80a3-baae-4d87-832d-145fd28bfc72';
const dest = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });

const files = [
  { from: 'hero_emotional_1778162859064.png', to: 'hero.png' },
  { from: 'story_impact_1778162874918.png', to: 'story.png' },
  { from: 'volunteer_hands_1778162892288.png', to: 'volunteer.png' },
  { from: 'education_india_1778161645224.png', to: 'education.png' },
  { from: 'healthcare_india_1778161662096.png', to: 'healthcare.png' },
  { from: 'clean_water_india_1778161682644.png', to: 'clean-water.png' },
];

files.forEach(f => {
  const srcPath = path.join(src, f.from);
  const destPath = path.join(dest, f.to);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log('Copied', f.to);
  } else {
    console.log('NOT FOUND:', srcPath);
  }
});
console.log('Done!');
