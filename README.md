# SportMed360 — Centre Médical Neuchâtel

> Site officiel du centre médical **SportMed360** — médecine du sport, physiothérapie et préparation physique à Neuchâtel.

[![Site en production](https://img.shields.io/badge/production-sportmed360.ch-4622CC?style=flat-square&logo=googlechrome&logoColor=white)](https://sportmed360.ch)
[![GitHub Pages](https://img.shields.io/badge/hébergé_sur-GitHub_Pages-222?style=flat-square&logo=github)](https://github.com/doctorfill-dev/sportmed360.ch)
[![Issues SEO ouvertes](https://img.shields.io/github/issues/doctorfill-dev/sportmed360.ch/seo?style=flat-square&color=0075CA&label=issues%20SEO)](https://github.com/doctorfill-dev/sportmed360.ch/issues?q=label%3Aseo+is%3Aopen)

---

## Stack technique

Site **100% statique** — HTML / CSS / JavaScript vanilla, sans framework, sans dépendance npm, sans étape de build.

| Couche | Technologie |
|--------|-------------|
| Markup | HTML5 sémantique (SSR-friendly, JS non requis) |
| Style | CSS3 — variables custom, Grid, Flexbox, responsive |
| Comportements | Vanilla JS — carousel, menu mobile, modal contact, scroll-reveal |
| Offline | Service Worker (`sw.js`) — stratégie stale-while-revalidate |
| PWA | `manifest.json` — standalone, icônes 192 & 512px, catégorie `medical` |
| Formulaire | Formspree (AJAX, pas de backend) |
| Analytics | Google Analytics 4 — chargement différé (interaction ou 4s) |
| Déploiement | GitHub Actions → GitHub Pages |

---

## Structure du projet

```
sportmed360.ch/
├── index.html                    # Page principale (single-page)
├── styles.css                    # Styles globaux
├── script.js                     # Comportements (carousel, menu, modal, SW)
├── sw.js                         # Service Worker
├── robots.txt                    # Directives crawlers + référence sitemap
├── sitemap.xml                   # Sitemap avec images
├── manifest.json                 # PWA manifest
├── humans.txt                    # Crédits
├── CNAME                         # Domaine custom → sportmed360.ch
├── .well-known/
│   └── security.txt              # Politique de sécurité
├── assets/
│   ├── employees/                # Photos équipe (WebP, 300×360)
│   │   ├── bertrand_curty.webp
│   │   ├── franco_pisino.webp
│   │   ├── maiwenn_crausaz.webp
│   │   ├── orlane_gaudenzi.webp
│   │   └── sara_ramos.webp
│   ├── logo/                     # Logos (SVG vectoriel + PNG fallback)
│   └── premises/                 # Photos du centre (WebP)
├── public/                       # Build de déploiement (copié par CI/CD)
└── .github/
    └── workflows/
        └── deploy.yml            # Pipeline GitHub Pages
```

---

## SEO

### Technique (on-page)
- HTML entièrement rendu côté serveur — contenu indexable sans JavaScript
- **Schema.org JSON-LD** — 10 blocs structurés :
  - `MedicalClinic` (organisation principale)
  - `Physician` (Dr Bertrand Curty) + 6 × `Person` (équipe)
  - `WebSite`
  - 7 × services médicaux (`MedicalProcedure`, `MedicalTherapy`, `MedicalTest`)
- **Open Graph** & **Twitter Cards** — titre, description, image 1200×630
- **Geo-tags** — coordonnées Neuchâtel (46.9930, 6.9298)
- **hreflang** `fr-CH` + `x-default`
- Balise `canonical`, balise `robots` avec directives `max-image-preview:large`
- Toutes les images en **WebP** avec attributs `alt`, `width`, `height`, `loading="lazy"`
- Favicon en **SVG** (`type="image/svg+xml"`)

### Outils Google
- ✅ Google Analytics 4 (`G-THHRDGB6X6`)
- ✅ Google Search Console — site vérifié
- ✅ Google Business Profile — fiche créée et complétée
- ⏳ Apple Business Connect — en attente de validation
- ⏳ Google Ads — en attente de validation juridique (publicité médicale)

### Roadmap SEO
Voir les [issues ouvertes avec le label `seo`](https://github.com/doctorfill-dev/sportmed360.ch/issues?q=label%3Aseo+is%3Aopen) :

| Priorité | Issue | Type |
|----------|-------|------|
| 🔴 Haute | [#11 Optimiser description Google Business Profile](../../issues/11) | off-site |
| 🔴 Haute | [#10 Stratégie avis Google — objectif 20+](../../issues/10) | off-site |
| 🔴 Haute | [#9 Annuaires locaux suisses (NAP)](../../issues/9) | off-site |
| 🟡 Moyenne | [#7 Section FAQ + schema FAQPage](../../issues/7) | content |
| 🟡 Moyenne | [#5 Minifier CSS et JS](../../issues/5) | performance |
| 🟡 Moyenne | [#6 srcset/sizes pour les images carousel](../../issues/6) | performance |
| 🟢 Basse | [#8 Pages dédiées par service](../../issues/8) | content |

---

## Équipe

| Nom | Rôle |
|-----|------|
| Dr méd. Bertrand Curty | Médecin du sport — FMH Médecine interne & SEMS |
| Mitko Bogoev | Physiothérapeute du sport (BSc & MSc) |
| Franco Pisino | Préparateur physique & Coach — Swiss Olympic Coach Award 2019 |
| Elise Jauzac | Physiothérapeute |
| Maïwenn Crausaz | Coach sportive |
| Orlane Gaudenzi | Physiologiste du sport |
| Sara Ramos | Assistante médicale |

---

## Déploiement

Le déploiement est **automatique** à chaque push sur `main` via GitHub Actions.

```
push → main
  └── .github/workflows/deploy.yml
        └── copie les fichiers dans /public
              └── publie sur GitHub Pages → sportmed360.ch
```

**Aucune commande à lancer manuellement.**

---

## Contact

| | |
|-|-|
| 🌐 Site | [sportmed360.ch](https://sportmed360.ch) |
| 📧 Email | [hello@evo360.ch](mailto:hello@evo360.ch) |
| 📞 Téléphone | +41 76 541 03 60 |
| 📍 Adresse | Avenue Edouard-Dubois 20, 2000 Neuchâtel |
| 🕐 Horaires | Lundi – Vendredi · 7h30 – 18h30 |

---

© SportMed360 by [evo360](https://evo360.ch) — Tous droits réservés
