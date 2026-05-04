const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir(path.join(__dirname, 'src'), function(filePath) {
  if (filePath.endsWith('.jsx') || filePath.endsWith('.css')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Tighten the leading to remove "air" between lines
    let updated = content.replace(/leading-relaxed/g, 'leading-snug');
    
    // Increase font weight globally to make it physically heavier
    updated = updated.replace(/font-normal/g, 'font-medium');
    
    // Make very wide uppercase tracking less airy
    updated = updated.replace(/tracking-\[0\.3em\]/g, 'tracking-[0.15em]');
    updated = updated.replace(/tracking-\[0\.4em\]/g, 'tracking-[0.15em]');
    updated = updated.replace(/tracking-\[0\.5em\]/g, 'tracking-[0.2em]');
    updated = updated.replace(/tracking-widest/g, 'tracking-wider');
    
    // Increase text contrast slightly to make it feel more "solid"
    updated = updated.replace(/text-stone-400/g, 'text-stone-500');
    updated = updated.replace(/text-stone-500/g, 'text-stone-600');
    updated = updated.replace(/text-stone-600/g, 'text-stone-700');
    
    // Bump up body text sizes to feel more substantial
    // Be careful with word boundaries
    updated = updated.replace(/\btext-sm\b/g, 'text-base');
    updated = updated.replace(/\btext-base md:text-lg\b/g, 'text-lg md:text-xl');
    updated = updated.replace(/\btext-lg\b/g, 'text-xl');
    
    if (content !== updated) {
      fs.writeFileSync(filePath, updated, 'utf8');
      console.log('Updated: ' + filePath);
    }
  }
});
