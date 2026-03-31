// src/_data/servicePages.js
// Agrège tous les fichiers JSON de src/_data/services/ en un tableau
// utilisé par Eleventy pour la pagination des pages de service.

import { readFileSync, readdirSync, existsSync } from 'fs'
import { join } from 'path'

export default function () {
  const dir = 'src/_data/services'
  if (!existsSync(dir)) return []

  return readdirSync(dir)
    .filter(f => f.endsWith('.json'))
    .map(f => {
      const slug = f.replace('.json', '')
      const data = JSON.parse(readFileSync(join(dir, f), 'utf8'))
      return { slug, ...data }
    })
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99))
}
