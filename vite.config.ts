// vite.config.ts
// Bundle l'interface d'administration Keystatic.
// En mode dev : sert l'UI React + routes API locales.
// En mode build : bundle l'admin dans _site/keystatic/.

import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

function keystatiLocalAPI(): Plugin {
  return {
    name: 'keystatic-local-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url || !req.url.startsWith('/api/keystatic')) {
          return next()
        }
        try {
          const { makeGenericAPIRouteHandler } = await import('@keystatic/core/api/generic')
          const { default: keystatiConfig }    = await import('./keystatic.config')
          const handler = makeGenericAPIRouteHandler({ config: keystatiConfig })

          const body = await new Promise<Buffer>((resolve) => {
            const chunks: Buffer[] = []
            req.on('data', (chunk: Buffer) => chunks.push(chunk))
            req.on('end', () => resolve(Buffer.concat(chunks)))
          })

          const url     = new URL(req.url, `http://${req.headers.host}`)
          const headers = new Headers()
          for (const [key, value] of Object.entries(req.headers)) {
            if (value) headers.set(key, Array.isArray(value) ? value.join(', ') : value)
          }

          const webRequest = new Request(url.toString(), {
            method: req.method,
            headers,
            body: req.method !== 'GET' && req.method !== 'HEAD' ? body : undefined,
          })

          const response = await handler(webRequest) as {
            status: number
            body: string | Buffer | Uint8Array | null | undefined
            headers?: Record<string, string> | [string, string][]
          }

          res.statusCode = response.status ?? 200

          if (response.headers) {
            const entries = Array.isArray(response.headers)
              ? response.headers
              : Object.entries(response.headers)
            for (const [key, value] of entries) res.setHeader(key, value)
          }

          if (response.body == null)                res.end()
          else if (typeof response.body === 'string') res.end(response.body)
          else                                        res.end(Buffer.from(response.body))
        } catch (err) {
          console.error('[keystatic-api]', err)
          res.statusCode = 500
          res.end('Internal Server Error')
        }
      })
    },
  }
}

export default defineConfig({
  root: 'keystatic-admin',
  base: '/keystatic/',

  plugins: [react(), keystatiLocalAPI()],

  build: {
    outDir:      resolve(__dirname, '_site/keystatic'),
    emptyOutDir: true,
  },

  server: {
    port:       3001,
    host:       true,
    strictPort: true,
  },
})
