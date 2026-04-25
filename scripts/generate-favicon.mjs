import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import pngToIco from "png-to-ico";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const inputPng = path.join(root, "public", "amt1.png");
const outIco = path.join(root, "public", "favicon.ico");
const tmpSquarePng = path.join(root, "public", ".tmp-favicon-square.png");

if (!fs.existsSync(inputPng)) {
  console.error(`[favicon] missing input: ${inputPng}`);
  process.exit(1);
}

// Ensure input is square; pad/contain into a square canvas (transparent background).
await sharp(inputPng)
  .resize(512, 512, {
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png()
  .toFile(tmpSquarePng);

const icoBuf = await pngToIco(tmpSquarePng, [16, 32]);
fs.writeFileSync(outIco, icoBuf);
try {
  fs.unlinkSync(tmpSquarePng);
} catch {
  // ignore
}
console.log(`[favicon] wrote ${path.relative(root, outIco)} (16x16, 32x32)`);

