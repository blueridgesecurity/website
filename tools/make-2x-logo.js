const fs = require('fs');
const path = require('path');

(async () => {
  try {
    const sharp = require('sharp');
    const src = path.join(__dirname, '..', 'public', 'images', 'logo.png');
    const out = path.join(__dirname, '..', 'public', 'images', 'logo@2x.png');

    if (!fs.existsSync(src)) {
      console.error('Source logo not found at', src);
      process.exit(2);
    }

    const metadata = await sharp(src).metadata();
    const width = metadata.width || 560;
    const height = metadata.height || Math.round(width * 0.44);

    await sharp(src)
      .resize(width * 2, height * 2, { fit: 'contain' })
      .toFile(out);

    console.log('Created', out);
  } catch (err) {
    console.error('Error creating 2x logo:', err.message || err);
    console.error('Hint: run `npm install sharp --save-dev` then run this script again');
    process.exit(1);
  }
})();
