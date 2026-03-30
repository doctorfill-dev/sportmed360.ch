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
  eleventyConfig.addPassthroughCopy({ 'manifest.json': 'manifest.json' })
  eleventyConfig.addPassthroughCopy({ 'sw.js': 'sw.js' })
  eleventyConfig.addPassthroughCopy({ 'CNAME': 'CNAME' })

  // ── Filtres ──────────────────────────────────────────────────────────────
  eleventyConfig.addFilter('currentYear', () => new Date().getFullYear())

  eleventyConfig.addFilter('toPublicPath', (path) => {
    if (!path) return ''
    if (path.startsWith('/')) return path
    if (path.startsWith('src/')) return '/' + path.slice(4)
    return '/' + path
  })

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
