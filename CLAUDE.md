# CLAUDE.md — sportmed360.ch

Site web du centre médical SportMed360 (Neuchâtel). Stack hybride : site statique rendu par **Eleventy** + interface d'administration **Keystatic** (React, bundlée par Vite) + **Cloudflare Worker** comme point d'entrée.

---

## Stack

| Couche | Outil |
|--------|-------|
| SSG | Eleventy 3.x (`eleventy.config.js`) |
| CMS admin | Keystatic 0.5.x (`keystatic.config.ts`) |
| Bundler admin | Vite 6 (`vite.config.ts`) |
| Runtime edge | Cloudflare Worker (`worker.ts`, `wrangler.toml`) |
| Templates | Nunjucks (`.njk`) |
| Styles | CSS vanille global (`src/assets/css/styles.css`) |
| JS frontend | Vanilla JS (`src/assets/js/script.js`) |
| Images | WebP via Sharp (`scripts/optimize-images.mjs`) |

---

## Commandes

```bash
npm run dev          # Eleventy en mode watch (port 8080) — site principal
npm run dev:admin    # Vite + API Keystatic locale (port 3001) — interface CMS
npm run build        # eleventy && vite build → _site/
npm run optimize     # Conversion manuelle images → WebP
```

**Dev CMS complet :** lancer `npm run dev` ET `npm run dev:admin` en parallèle dans deux terminaux.

---

## Architecture des fichiers

```
src/
├── index.njk          # Template principal (unique page publique)
├── 404.njk            # Page d'erreur (utilisée aussi par worker.ts)
├── _data/
│   ├── home.json      # Tout le contenu de la page (héros, équipe, services…)
│   └── seo.json       # Métadonnées SEO séparées (title, description, og_image…)
├── assets/            # Copié tel quel dans _site/assets/
│   ├── css/styles.css
│   ├── js/script.js
│   ├── employees/     # Photos d'équipe (WebP)
│   ├── premises/      # Photos du centre (WebP)
│   └── logo/
└── legal/             # Copié tel quel (passthrough, non traité par Nunjucks)

keystatic-admin/       # Source React du CMS admin
_site/                 # Sortie de build (gitignorée)
scripts/               # Scripts Node utilitaires
.github/workflows/     # CI/CD
```

---

## Règles critiques

### Branches
- **Ne jamais pusher sur `main`** — déclenche un déploiement GitHub Pages immédiat
- Branche de travail CMS : `cms_new`
- Déploiement Cloudflare : merger sur `cms_deploy`

### Images
- Toujours stocker des **WebP** dans `src/assets/`
- Les chemins dans `home.json` et `seo.json` doivent être au format **publicPath** : `/assets/...` (pas `src/assets/...`)
- Le filtre Nunjucks `toPublicPath` gère les deux formats → pas besoin de migrer manuellement
- Le workflow `optimize-images.yml` convertit automatiquement JPG/PNG → WebP sur push

### Keystatic — schéma
- `seo` singleton → `src/_data/seo.json` (SEO uniquement)
- `home` singleton → `src/_data/home.json` (tout le contenu)
- Ces deux fichiers **ne doivent pas** partager de clés — Keystatic valide chacun contre son schéma et rejette les clés inconnues
- Les champs image Keystatic utilisent `fields.image({ directory: 'src/assets/...', publicPath: '/assets/...' })`

### Eleventy — conventions
- `src/legal/` est en **passthrough** (non traité par Nunjucks) — ne pas y mettre de fichiers `.njk`
- `robots.txt`, `sitemap.xml`, `manifest.json`, `sw.js`, `CNAME` sont copiés depuis la racine
- Le CSS est minifié après build via le hook `eleventy.after`

---

## Déploiement

### GitHub Pages (production actuelle)
Automatique sur push `main` via `.github/workflows/deploy.yml`.

### Cloudflare Workers (CMS en production)
1. Push sur `cms_deploy`
2. `.github/workflows/deploy-cloudflare.yml` : `npm ci` → `npm run build` → `wrangler deploy`
3. Secrets requis : `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`
4. Variables d'env Cloudflare : `KEYSTATIC_GITHUB_CLIENT_ID`, `KEYSTATIC_GITHUB_CLIENT_SECRET`, `KEYSTATIC_SECRET`

Le worker route `/api/keystatic/*` vers Keystatic et le reste vers les assets statiques de `_site/`.

---

## Données de contenu

`src/_data/home.json` suit exactement le schéma Keystatic défini dans `keystatic.config.ts`. Toute modification du schéma doit être reflétée dans les deux fichiers.

Données auto-injectées par Eleventy dans les templates :
- `{{ home.* }}` — depuis `src/_data/home.json`
- `{{ seo.* }}` — depuis `src/_data/seo.json`
