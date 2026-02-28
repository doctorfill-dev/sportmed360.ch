# SportMed360 — Landing Page

Centre médical nouvelle génération spécialisé en médecine du sport et physiothérapie à Neuchâtel.

## Technologies

Site statique en **HTML / CSS / JavaScript** pur — aucun framework, aucune dépendance, aucune étape de build.

## Structure du projet

```
sportmed360.ch/
├── public/                     # Fichiers servis par GitHub Pages
│   ├── index.html              # Page complète (HTML pur, SSR-friendly)
│   ├── styles.css              # Tous les styles (couleurs brand, layout, responsive)
│   ├── script.js               # Carousel + année dynamique
│   ├── robots.txt              # Directives pour les robots
│   ├── sitemap.xml             # Sitemap SEO
│   ├── manifest.json           # PWA manifest
│   ├── CNAME                   # Domaine custom (sportmed360.ch)
│   ├── humans.txt              # Crédits
│   └── .well-known/
│       └── security.txt        # Politique de sécurité
├── .github/workflows/
│   └── deploy.yml              # GitHub Pages CI/CD (déploiement direct)
├── .gitignore
└── README.md
```

## Déploiement

Le site est déployé automatiquement via **GitHub Pages** à chaque push sur `main`.

Le workflow CI/CD publie directement le contenu de `/public` — aucune étape de build nécessaire.

- **Production** : `main` → https://sportmed360.ch

## SEO

- HTML entièrement rendu côté serveur (SSR-friendly) — contenu visible sans JavaScript
- Schema.org JSON-LD statiques (`MedicalClinic`, `WebSite`, `BreadcrumbList`, `MedicalBusiness`)
- Open Graph & Twitter Cards
- Geo-tags Neuchâtel (46.9930, 6.9298)
- `robots.txt` & `sitemap.xml`

## Contact

- **Email** : med@evo360.ch
- **Téléphone** : +41 76 541 0 360
- **Adresse** : Avenue Edouard-Dubois 20, 2000 Neuchâtel
- **Horaires** : Lundi–Vendredi 7h30–18h30

---

Tous droits réservés — SportMed360 by evo360
