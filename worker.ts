// worker.ts — Point d'entrée Cloudflare Worker
//
// Rôle :
//   - /api/keystatic/* → handler Keystatic (OAuth GitHub, lecture/écriture)
//   - Tout le reste    → fichiers statiques depuis _site/

import { makeGenericAPIRouteHandler } from '@keystatic/core/api/generic'
import config from './keystatic.config'
// @ts-ignore
import notFoundHtml from './_site/404.html'

interface Env {
  ASSETS:                         { fetch(r: Request): Promise<Response> }
  KEYSTATIC_GITHUB_CLIENT_ID:     string
  KEYSTATIC_GITHUB_CLIENT_SECRET: string
  KEYSTATIC_SECRET:               string
}

function serve404(): Response {
  return new Response(notFoundHtml as string, {
    status: 404,
    headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' },
  })
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    try {
      const { pathname } = new URL(request.url)

      // ── Keystatic API ──────────────────────────────────────────────────
      if (pathname.startsWith('/api/keystatic/')) {
        try {
          const handler = makeGenericAPIRouteHandler({
            config,
            clientId:     env.KEYSTATIC_GITHUB_CLIENT_ID,
            clientSecret: env.KEYSTATIC_GITHUB_CLIENT_SECRET,
            secret:       env.KEYSTATIC_SECRET,
          })
          // Canonicalise l'URL sur le domaine de production
          const reqUrl          = new URL(request.url)
          const canonicalRequest = reqUrl.hostname === 'sportmed360.ch'
            ? request
            : new Request(
                new URL(request.url.replace(reqUrl.origin, 'https://sportmed360.ch')).toString(),
                request,
              )
          const ksRes = await handler(canonicalRequest)
          if (ksRes instanceof Response) return ksRes

          const headers = new Headers()
          if (ksRes.headers) {
            if (Symbol.iterator in Object(ksRes.headers)) {
              for (const [k, v] of ksRes.headers as Iterable<[string, string]>) headers.append(k, v)
            } else if (typeof ksRes.headers === 'object') {
              for (const [k, v] of Object.entries(ksRes.headers)) headers.append(k, String(v))
            }
          }
          // @ts-ignore
          return new Response(ksRes.body ?? null, { status: ksRes.status, headers })
        } catch (err: unknown) {
          const message = err instanceof Error
            ? `${err.name}: ${err.message}\n${err.stack ?? ''}`
            : String(err)
          return new Response(JSON.stringify({ error: message }, null, 2), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
          })
        }
      }

      // ── Fichiers statiques ─────────────────────────────────────────────
      let response: Response
      try {
        response = await env.ASSETS.fetch(request)
      } catch {
        return serve404()
      }

      // ── SPA Keystatic ──────────────────────────────────────────────────
      if (response.status === 404 && pathname.startsWith('/keystatic')) {
        try {
          const spaUrl = new URL('/keystatic/index.html', request.url)
          return await env.ASSETS.fetch(new Request(spaUrl, request))
        } catch {
          return serve404()
        }
      }

      if (response.status === 404) return serve404()
      return response

    } catch {
      return serve404()
    }
  },
}
