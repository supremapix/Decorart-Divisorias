import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import pngjs from 'pngjs';

const { PNG } = pngjs;
const assets = ['paredes','forros','acustico','externo','juntas','cimenticia'];
const output = 'dist/imagens/drywall';
mkdirSync(output, { recursive: true });

// Resample original, opaque imagegen art without any added dependency or runtime transformation.
function resize(source, width) {
  const height = Math.round(width * source.height / source.width);
  const out = new PNG({width, height, colorType: 2});
  for (let y = 0; y < height; y++) {
    const fy = (y + .5) * source.height / height - .5;
    const y0 = Math.max(0, Math.floor(fy)), y1 = Math.min(source.height - 1, y0 + 1), t = Math.max(0, fy - y0);
    for (let x = 0; x < width; x++) {
      const fx = (x + .5) * source.width / width - .5;
      const x0 = Math.max(0, Math.floor(fx)), x1 = Math.min(source.width - 1, x0 + 1), s = Math.max(0, fx - x0);
      const i = (y * width + x) * 4;
      for (let c = 0; c < 3; c++) {
        const a = source.data[(y0 * source.width + x0) * 4 + c] * (1-s) + source.data[(y0 * source.width + x1) * 4 + c] * s;
        const b = source.data[(y1 * source.width + x0) * 4 + c] * (1-s) + source.data[(y1 * source.width + x1) * 4 + c] * s;
        out.data[i+c] = Math.round(a * (1-t) + b * t);
      }
      out.data[i+3] = 255;
    }
  }
  return PNG.sync.write(out, {colorType:2, inputColorType:6, deflateLevel:9, filterType:-1});
}

for (const asset of assets) {
  const original = readFileSync('content/drywall-source/' + asset + '.png');
  const source = PNG.sync.read(original);
  if (source.width !== 1536 || source.height !== 1024) throw new Error('Unexpected original art dimensions: ' + asset);
  for (const width of [640,768,1200]) {
    const variant = resize(source, width);
    const file = output + '/' + asset + '-' + width + '.png';
    writeFileSync(file, variant);
    console.log(file + ': ' + variant.length + ' bytes (original ' + original.length + ')');
  }
}
