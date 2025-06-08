const fs = require('fs');
const path = require('path');

function convertPxToRem(content) {
  return content.replace(/\[(-?\d*\.?\d+)px\]/g, (_, num) => {
    const value = parseFloat(num) / 16;
    const rounded = Math.round(value * 1000) / 1000;
    return `[${rounded}rem]`;
  });
}

function traverse(dir) {
  for (const file of fs.readdirSync(dir)) {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      traverse(full);
    } else if (/(tsx|jsx|ts|js|css)$/.test(file)) {
      const content = fs.readFileSync(full, 'utf8');
      const newContent = convertPxToRem(content);
      if (newContent !== content) fs.writeFileSync(full, newContent);
    }
  }
}

traverse('components');
traverse('app');
