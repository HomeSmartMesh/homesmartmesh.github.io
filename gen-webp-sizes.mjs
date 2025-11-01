import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { config } from './config.js';

const IMG_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.tif', '.tiff', '.bmp']);

function parseArgs(argv) {
  const opts = { quality: 75 };
  const args = [];
  for (const a of argv.slice(2)) {
    if (a.startsWith('--quality=')) opts.quality = Number(a.split('=')[1]) || 75;
    else args.push(a);
  }
  if (args.length < 1) {
    console.error('Usage: node gen-webp-sizes.mjs <inputDirInsideContent> [--quality=75]');
    process.exit(1);
  }
  const inputDir = path.resolve(args[0]);
  return { inputDir, ...opts };
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

function isImageFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return IMG_EXTS.has(ext);
}

async function* walk(dir, ignoreDir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (ignoreDir && full.startsWith(ignoreDir)) continue;
    if (e.isDirectory()) {
      yield* walk(full, ignoreDir);
    } else {
      yield full;
    }
  }
}

function targetWidthsFor(originalWidth) {
  const targets = [];
  if (!originalWidth) return targets;
  if (originalWidth > 1280) targets.push(640);
  if (originalWidth > 640) targets.push(320);
  return targets;
}

function outPathFor(contentRoot, imagesRoot, absFile, width) {
  const relFromContent = path.relative(contentRoot, absFile);
  const { dir, name } = path.parse(relFromContent);
  const outDir = path.join(imagesRoot, dir);
  const outFile = path.join(outDir, `${name}-${width}.webp`);
  return { outDir, outFile };
}

async function fileNewerOrEqual(a, b) {
  try {
    const sa = await fs.stat(a);
    const sb = await fs.stat(b);
    return sa.mtimeMs >= sb.mtimeMs;
  } catch {
    return false;
  }
}

async function processImage(absIn, contentRoot, imagesRoot, quality) {
  const buf = await fs.readFile(absIn);
  const img = sharp(buf).rotate(); // honor EXIF orientation
  const meta = await img.metadata();
  const ow = meta.width ?? 0;

  const targets = targetWidthsFor(ow);
  if (targets.length === 0) return { created: 0, skipped: 1 };

  let created = 0;
  await Promise.all(
    targets.map(async (w) => {
      const { outDir, outFile } = outPathFor(contentRoot, imagesRoot, absIn, w);
      await ensureDir(outDir);

      // Skip if up-to-date
      if (await fileNewerOrEqual(outFile, absIn)) return;

      await sharp(buf)
        .rotate()
        .resize({ width: w, withoutEnlargement: true })
        .webp({ quality, effort: 4 })
        .toFile(outFile);

      created += 1;
      console.log(`✓ ${path.relative(contentRoot, absIn)} -> ${path.relative(imagesRoot, outFile)}`);
    })
  );

  return { created, skipped: targets.length === 0 ? 1 : 0 };
}

async function main() {
  const { inputDir, quality } = parseArgs(process.argv);

  const contentRoot = path.resolve(config.content_path);
  const imagesRoot = path.join(config.rootdir, 'public', 'images');

  const normInput = inputDir.replaceAll('\\','/');
  const normContent = contentRoot.replaceAll('\\','/');
  if (!normInput.startsWith(normContent)) {
    console.error(`Input directory must be inside content root: ${contentRoot}`);
    process.exit(1);
  }

  await ensureDir(imagesRoot);

  let total = 0, created = 0, skipped = 0;
  for await (const f of walk(inputDir, imagesRoot)) {
    if (!isImageFile(f)) continue;
    total++;
    try {
      const res = await processImage(f, contentRoot, imagesRoot, quality);
      created += res.created;
      skipped += res.skipped;
    } catch (e) {
      console.error(`Error processing ${f}:`, e.message);
    }
  }
  console.log(`Done. Files scanned: ${total}, generated: ${created}, skipped: ${skipped}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
