const fs = require('fs');
const path = require('path');

const imgPath = path.join('public', 'images', 'usman-photo.png');
const imgBuffer = fs.readFileSync(imgPath);
const base64 = imgBuffer.toString('base64');
const dataUri = 'data:image/png;base64,' + base64;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <clipPath id="circleClip">
      <circle cx="50" cy="50" r="50" />
    </clipPath>
  </defs>
  <image href="${dataUri}" width="100" height="100" clip-path="url(#circleClip)" preserveAspectRatio="xMidYMid slice" />
</svg>`;

fs.writeFileSync(path.join('public', 'favicon.svg'), svg);
console.log('Saved round base64 SVG favicon!');
