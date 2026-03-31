// eleventy.config.js

export default function (eleventyConfig) {

  // ── CSS Minification ─────────────────────────────────────────────────────
  eleventyConfig.on('eleventy.after', async () => {
    const fs   = await import('fs')
    const path = await import('path')
    const cssPath = path.default.join('_site', 'assets', 'css', 'styles.css')
    if (fs.default.existsSync(cssPath)) {
      let css = fs.default.readFileSync(cssPath, 'utf8')
      css = css.replace(/\/\*(?!\!)[\s\S]*?\*\//g, '')
      css = css.replace(/\s+/g, ' ')
      css = css.replace(/\s*([{}:;,>~+])\s*/g, '$1')
      css = css.replace(/;}/g, '}')
      css = css.trim()
      fs.default.writeFileSync(cssPath, css)
    }
  })

  // ── Passthrough Copy ─────────────────────────────────────────────────────
  eleventyConfig.addPassthroughCopy('src/assets')
  eleventyConfig.addPassthroughCopy({ 'src/legal': 'legal' })
  eleventyConfig.addPassthroughCopy({ 'manifest.json': 'manifest.json' })
  eleventyConfig.addPassthroughCopy({ 'sw.js': 'sw.js' })
  eleventyConfig.addPassthroughCopy({ 'CNAME': 'CNAME' })
  eleventyConfig.addPassthroughCopy({ 'robots.txt': 'robots.txt' })
  // ── Filtres ──────────────────────────────────────────────────────────────
  eleventyConfig.addFilter('currentYear', () => new Date().getFullYear())
  eleventyConfig.addFilter('padStart', (val, len, char = '0') => String(val).padStart(len, char))
  eleventyConfig.addGlobalData('dateNow', () => new Date().toISOString().split('T')[0])

  // Echappe une valeur pour l'inclure dans une chaine JSON (JSON-LD).
  // N'introduit AUCUNE entite HTML — seuls les caracteres JSON speciaux sont echappes.
  eleventyConfig.addFilter('jsonEscape', (str) =>
    String(str ?? '')
      .replace(/\\/g, '\\\\')
      .replace(/"/g, '\\"')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/\t/g, '\\t')
  )

  // Convertit une chaine "FR · EN · DE" en tableau JSON ["FR","EN","DE"].
  // A utiliser avec | safe pour eviter le double-echappement Nunjucks.
  eleventyConfig.addFilter('toJsonArray', (str) => {
    const items = String(str ?? '').split(' · ').map(s => s.trim()).filter(Boolean)
    return JSON.stringify(items)
  })

  eleventyConfig.addFilter('toPublicPath', (path) => {
    if (!path) return ''
    if (path.startsWith('/')) return path
    if (path.startsWith('src/')) return '/' + path.slice(4)
    return '/' + path
  })

  // ── Ignores ──────────────────────────────────────────────────────────────
  eleventyConfig.ignores.add('src/legal/**')

  // ── Configuration ────────────────────────────────────────────────────────
  return {
    templateFormats: ['njk', 'html', 'md', 'liquid'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input:    'src',
      output:   '_site',
      includes: '_includes',
      data:     '_data',
    },
  }
}
