// scripts/optimize-images.mjs
// Optimise toutes les images non-WebP dans src/assets/ :
//   - Convertit JPG/PNG/GIF → WebP
//   - Redimensionne si > maxWidth
//   - Compresse avec Sharp
//
// Usage :
//   npm run optimize              — traite tous les fichiers non-WebP
//   node scripts/optimize-images.mjs [chemin/image.jpg]  — fichier spécifique

import sharp from 'sharp'
import { readdir, stat, unlink } from 'fs/promises'
import { join, extname, basename, dirname } from 'path'

const ASSETS_DIR = 'src/assets'
const MAX_WIDTH  = 1600   // px — réduire si trop large
const QUALITY    = 82     // qualité WebP (0–100)
const EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.gif', '.tiff', '.bmp'])

async function* walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) yield* walk(fullPath)
    else yield fullPath
  }
}

async function optimizeImage(inputPath) {
  const ext = extname(inputPath).toLowerCase()
  if (!EXTENSIONS.has(ext)) return

  const dir      = dirname(inputPath)
  const name     = basename(inputPath, ext)
  const outputPath = join(dir, `${name}.webp`)

  try {
    const image    = sharp(inputPath)
    const metadata = await image.metadata()

    const pipeline = image
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })

    await pipeline.toFile(outputPath)

    const inputStat  = await stat(inputPath)
    const outputStat = await stat(outputPath)
    const saving     = Math.round((1 - outputStat.size / inputStat.size) * 100)

    console.log(`✓ ${inputPath} → ${outputPath} (${saving}% plus léger, ${metadata.width}px → max ${MAX_WIDTH}px)`)

    // Supprimer le fichier original si différent du WebP
    if (inputPath !== outputPath) {
      await unlink(inputPath)
      console.log(`  🗑  Supprimé : ${inputPath}`)
    }
  } catch (err) {
    console.error(`✗ Erreur sur ${inputPath} :`, err.message)
  }
}

async function main() {
  const specificFile = process.argv[2]

  if (specificFile) {
    console.log(`Optimisation de : ${specificFile}`)
    await optimizeImage(specificFile)
  } else {
    console.log(`Scan de ${ASSETS_DIR}…`)
    let count = 0
    for await (const file of walk(ASSETS_DIR)) {
      await optimizeImage(file)
      count++
    }
    console.log(`\nTerminé. ${count} fichier(s) traité(s).`)
  }
}

main()
