import sharp from 'sharp';
import { randomBytes } from 'node:crypto';

const input = process.argv[2];
if (!input) {
  console.error('Usage: node scripts/photo.mjs <source-image>');
  process.exit(1);
}

const id = randomBytes(4).toString('hex');
const out = `public/photos/${id}.jpg`;

await sharp(input)
  .rotate()
  .resize(1600, 1600, { fit: 'inside', withoutEnlargement: true })
  .jpeg({ quality: 78, mozjpeg: true })
  .toFile(out);

console.log(`${input} -> ${out}`);
