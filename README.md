# SportMed360 - Landing Page

Centre médical nouvelle génération spécialisé en médecine du sport et physiothérapie à Neuchâtel.

## Technologies

### Frontend
- **React** 19 avec **React Router DOM**
- **Tailwind CSS** 3 + **shadcn/ui**
- **CRACO** (Create React App Configuration Override)
- **Embla Carousel**, **Lucide React**, **Recharts**

### Backend
- **FastAPI** avec **MongoDB** (Motor async driver)
- **Python** 3.x, **Uvicorn**

---

## Prérequis

- **Node.js** >= 18.x
- **npm** >= 9.x
- **Python** >= 3.9
- **MongoDB** >= 4.x (optionnel, pour le backend)

---

## Installation

```bash
# Cloner le repository
git clone https://github.com/doctorfill-dev/sportmed360.ch.git
cd sportmed360.ch

# Installer les dépendances frontend
cd frontend
npm install

# Installer les dépendances backend (optionnel)
cd ../backend
pip install -r requirements.txt
```

---

## Développement

### Frontend

```bash
cd frontend
npm start
```

Le frontend sera accessible sur **http://localhost:3000**

### Backend

```bash
cd backend
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

Le backend sera accessible sur **http://localhost:8001**
Documentation API : http://localhost:8001/docs

---

## Build & Production

```bash
cd frontend
npm run build
```

Les fichiers de production seront dans `frontend/build/`.

---

## Déploiement

Le site est déployé automatiquement via **GitHub Pages** sur la branche `main`.

- **Production** : `main` -> https://sportmed360.ch
- **Preview (dev)** : `dev` -> accessible via un sous-domaine GitHub Pages (voir section ci-dessous)

Le workflow GitHub Actions (`.github/workflows/deploy.yml`) se déclenche automatiquement à chaque push.

---

## Structure du Projet

```
sportmed360.ch/
├── frontend/
│   ├── public/
│   │   ├── index.html          # HTML principal (GTM & Analytics)
│   │   ├── robots.txt          # Configuration robots
│   │   ├── sitemap.xml         # Sitemap SEO
│   │   └── manifest.json       # PWA manifest
│   ├── src/
│   │   ├── components/ui/      # Composants shadcn/ui
│   │   ├── pages/Home.jsx      # Page principale
│   │   ├── hooks/              # Custom hooks
│   │   ├── lib/utils.js        # Utilitaires
│   │   ├── App.js              # Composant principal + routing
│   │   ├── App.css             # Styles custom (couleurs brand)
│   │   └── index.css           # Tailwind imports + variables CSS
│   ├── package.json
│   ├── craco.config.js
│   ├── tailwind.config.js
│   └── .npmrc
├── backend/
│   ├── server.py               # Application FastAPI
│   └── requirements.txt        # Dépendances Python
├── .github/workflows/
│   └── deploy.yml              # GitHub Pages CI/CD
└── README.md
```

---

## Scripts Disponibles

### Frontend

```bash
npm start       # Démarrer en développement
npm run build   # Build pour production
npm test        # Lancer les tests
```

### Backend

```bash
uvicorn server:app --reload                              # Dev avec hot-reload
uvicorn server:app --host 0.0.0.0 --port 8001 --workers 4  # Production
```

---

## SEO

Score SEO : **9.2/10**

- Meta Tags optimisés (titre, description, keywords)
- Open Graph (Facebook, LinkedIn, WhatsApp)
- Twitter Cards
- Schema.org (MedicalClinic)
- robots.txt & sitemap.xml
- Geo-tags (Neuchâtel : 46.9930, 6.9298)

---

## Contact

- **Email** : med@evo360.ch
- **Téléphone** : +41 76 541 0 360
- **Adresse** : Avenue Edouard-Dubois 20, 2000 Neuchâtel
- **Horaires** : Lundi-Vendredi 7h30-18h30

---

Tous droits réservés - SportMed360 by evo360
