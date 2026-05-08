import type { NextConfig } from "next";
import fs from 'fs';
import path from 'path';

try {
  const srcDir = 'C:\\Users\\babus\\.gemini\\antigravity\\brain\\81549f04-1030-4b2a-954a-58e7ccabf578';
  const destDir = path.join(process.cwd(), 'public', 'images');
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
  
  const files = [
    { from: 'education_program_1778211954727.png', to: 'edu.png' },
    { from: 'healthcare_program_1778211973509.png', to: 'health.png' },
    { from: 'water_program_1778211994391.png', to: 'water.png' },
    { from: 'empowerment_program_1778212010757.png', to: 'empowerment.png' },
    { from: 'development_program_1778212028298.png', to: 'development.png' },
    { from: 'disaster_program_1778212047137.png', to: 'disaster.png' },
    { from: 'kids_hero_1778215370203.png', to: 'kids_hero.png' },
    { from: 'media__1778216469267.png', to: 'vidiyal_logo.png' },
  ];
  
  files.forEach(f => {
    const srcPath = path.join(srcDir, f.from);
    const destPath = path.join(destDir, f.to);
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log('Copied', f.to);
    }
  });
} catch (e) {
  console.error("Image copy failed", e);
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
