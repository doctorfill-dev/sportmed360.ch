# 🏥 SportMed360 - Landing Page

Centre médical nouvelle génération spécialisé en médecine du sport et physiothérapie à Neuchâtel.

![SportMed360](https://evo360.ch/Images/hero1.jpg)

## 📋 Table des Matières

- [Description](#description)
- [Technologies](#technologies)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Développement Local](#développement-local)
- [Build & Production](#build--production)
- [Structure du Projet](#structure-du-projet)
- [Variables d'Environnement](#variables-denvironnement)
- [Scripts Disponibles](#scripts-disponibles)
- [Tests](#tests)
- [Déploiement](#déploiement)
- [SEO](#seo)
- [Support](#support)

---

## 📖 Description

SportMed360 est une landing page moderne pour un centre médical spécialisé en :
- Médecine du sport
- Physiothérapie
- Medical Training Therapy (MTT)
- ECG et tests d'effort
- Bilans sanguins
- Vaccins et perfusions

**Caractéristiques principales :**
- ✅ Design moderne avec palette Indigo/Lavande/Citron
- ✅ SEO optimisé (Score 9.2/10)
- ✅ Responsive (Mobile, Tablet, Desktop)
- ✅ Google Tag Manager intégré
- ✅ Google Analytics configuré
- ✅ Schema.org (MedicalClinic)
- ✅ Open Graph & Twitter Cards

---

## 🛠 Technologies

### Frontend
- **React** 19.0.0
- **React Router DOM** 7.5.1
- **Tailwind CSS** 3.4.17
- **shadcn/ui** (composants UI)
- **Lucide React** (icônes)
- **Embla Carousel** (carousel images)
- **CRACO** (Create React App Configuration Override)

### Backend
- **FastAPI** 0.110.1
- **MongoDB** (avec Motor - driver async)
- **Python** 3.x
- **Uvicorn** (serveur ASGI)

### Outils
- **Supervisor** (gestion des processus)
- **Yarn** (gestionnaire de paquets frontend)
- **pip** (gestionnaire de paquets Python)

---

## ⚙️ Prérequis

Avant de commencer, assurez-vous d'avoir :

- **Node.js** >= 18.x
- **Yarn** >= 1.22.x
- **Python** >= 3.9
- **MongoDB** >= 4.x (ou accès à une instance)
- **Git**

---

## 📦 Installation

### 1. Cloner le repository

```bash
git clone <repository-url>
cd <project-directory>
```

### 2. Installer les dépendances Frontend

```bash
cd frontend
yarn install
```

### 3. Installer les dépendances Backend

```bash
cd ../backend
pip install -r requirements.txt
```

---

## 🚀 Développement Local

### Option 1 : Utiliser Supervisor (Recommandé)

Supervisor gère automatiquement le frontend et le backend.

```bash
# Démarrer tous les services
sudo supervisorctl start all

# Vérifier le statut
sudo supervisorctl status

# Arrêter tous les services
sudo supervisorctl stop all

# Redémarrer un service spécifique
sudo supervisorctl restart frontend
sudo supervisorctl restart backend
```

**Services disponibles :**
- `frontend` : React app sur http://localhost:3000
- `backend` : FastAPI sur http://localhost:8001

---

### Option 2 : Lancer manuellement

#### Frontend

```bash
cd frontend
yarn start
```

Le frontend sera accessible sur **http://localhost:3000**

#### Backend

```bash
cd backend
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

Le backend sera accessible sur **http://localhost:8001**

**Documentation API :** http://localhost:8001/docs

---

## 🏗️ Build & Production

### Build Frontend

```bash
cd frontend
yarn build
```

Les fichiers de production seront dans `frontend/build/`

### Servir le build en production

```bash
# Installer serve globalement
npm install -g serve

# Servir le build
serve -s frontend/build -l 3000
```

---

### Build Backend

Le backend FastAPI n'a pas besoin de build. Pour la production :

```bash
cd backend
uvicorn server:app --host 0.0.0.0 --port 8001 --workers 4
```

---

## 📁 Structure du Projet

```
/app
├── frontend/
│   ├── public/
│   │   ├── index.html          # HTML principal avec GTM & Analytics
│   │   ├── robots.txt          # Configuration robots
│   │   ├── sitemap.xml         # Sitemap SEO
│   │   └── manifest.json       # PWA manifest
│   ├── src/
│   │   ├── components/
│   │   │   └── ui/             # Composants shadcn/ui
│   │   ├── pages/
│   │   │   └── Home.jsx        # Page principale
│   │   ├── App.js              # Composant principal
│   │   ├── App.css             # Styles globaux + couleurs custom
│   │   └── index.css           # Tailwind imports
│   ├── package.json            # Dépendances frontend
│   └── craco.config.js         # Configuration CRACO
│
├── backend/
│   ├── server.py               # Application FastAPI
│   ├── requirements.txt        # Dépendances Python
│   └── .env                    # Variables d'environnement backend
│
├── README.md                   # Ce fichier
├── RAPPORT_SEO_SportMed360.md  # Rapport SEO complet
└── supervisor.conf             # Configuration Supervisor
```

---

## 🔐 Variables d'Environnement

### Frontend (`/app/frontend/.env`)

```env
# URL du backend
REACT_APP_BACKEND_URL=https://medsport-hub.preview.emergentagent.com

# En local, utiliser :
# REACT_APP_BACKEND_URL=http://localhost:8001
```

### Backend (`/app/backend/.env`)

```env
# MongoDB
MONGO_URL=mongodb://localhost:27017
DB_NAME=sportmed360

# CORS
CORS_ORIGINS=*

# Port (optionnel, défaut: 8001)
PORT=8001
```

---

## 📜 Scripts Disponibles

### Frontend

```bash
# Démarrer en développement
yarn start

# Build pour production
yarn build

# Lancer les tests
yarn test

# Linter (ESLint)
yarn lint

# Linter avec auto-fix
yarn lint --fix
```

### Backend

```bash
# Démarrer avec hot-reload
uvicorn server:app --reload

# Démarrer en production
uvicorn server:app --host 0.0.0.0 --port 8001 --workers 4

# Linter Python (Ruff)
ruff check .

# Auto-fix linter
ruff check --fix .

# Formater le code
black .

# Tests (si configurés)
pytest
```

---

## 🧪 Tests

### Frontend Tests

```bash
cd frontend
yarn test
```

### Backend Tests

```bash
cd backend
pytest
```

### Tests E2E avec Playwright (si installé)

```bash
npx playwright test
```

---

## 🌐 Déploiement

### Déploiement sur Emergent

Le projet est configuré pour un déploiement automatique sur la plateforme Emergent.

1. **Push vers main** :
   ```bash
   git add .
   git commit -m "Deploy to production"
   git push origin main
   ```

2. **Emergent déploie automatiquement** le frontend et backend

3. **URL de production** : https://medsport-hub.preview.emergentagent.com

---

### Déploiement manuel (Autre plateforme)

#### Frontend (Vercel, Netlify, etc.)

```bash
cd frontend
yarn build
# Déployer le dossier build/
```

#### Backend (Heroku, Railway, etc.)

```bash
# Utiliser le Procfile ou configurer :
web: uvicorn server:app --host 0.0.0.0 --port $PORT
```

---

## 🔍 SEO

### Score SEO : 9.2/10

Le site est optimisé pour le référencement naturel :

✅ **Meta Tags** : Titre, description, keywords optimisés  
✅ **Open Graph** : Facebook, LinkedIn, WhatsApp  
✅ **Twitter Cards** : Partages Twitter/X  
✅ **Schema.org** : MedicalClinic avec LocalBusiness  
✅ **robots.txt** : Configuration pour moteurs de recherche  
✅ **sitemap.xml** : Plan du site pour indexation  
✅ **Geo-tags** : Localisation Neuchâtel (46.9930, 6.9298)  
✅ **Canonical URL** : Évite contenu dupliqué  

### Fichiers SEO

- **robots.txt** : `/app/frontend/public/robots.txt`
- **sitemap.xml** : `/app/frontend/public/sitemap.xml`
- **Rapport SEO** : `/app/RAPPORT_SEO_SportMed360.md`

### Post-Déploiement

1. **Google Search Console** : Soumettre le sitemap
2. **Google My Business** : Créer/optimiser la fiche
3. **Google Analytics** : Vérifier le tracking (ID: AW-17966002666)
4. **Google Tag Manager** : Configurer les événements (ID: GTM-T5C2D5G3)

---

## 📊 Analytics & Tracking

### Google Analytics

**ID** : `AW-17966002666`

Tracking actif pour :
- Visites de pages
- Conversions (clics boutons réservation)
- Événements personnalisés
- Objectifs

### Google Tag Manager

**ID** : `GTM-T5C2D5G3`

Permet de gérer :
- Tous les tags analytics
- Pixels tiers (Facebook, LinkedIn)
- Tests A/B
- Événements personnalisés

---

## 🎨 Design System

### Palette de Couleurs

```css
:root {
  --color-indigo: #4622CC;      /* Couleur principale */
  --color-lavender: #928CDC;    /* Accent */
  --color-gray-smoke: #DEDCD8;  /* Neutre */
  --color-citron: #D7F14E;      /* CTA / Accent vif */
  --color-black: #000000;       /* Noir intense */
}
```

### Composants UI

Le projet utilise **shadcn/ui** pour les composants :
- Buttons
- Cards
- Forms
- Modals
- Toasts (Sonner)
- Carousel (Embla)

**Documentation** : https://ui.shadcn.com

---

## 📞 Contact & Support

### Informations du Centre

- **Email** : med@evo360.ch
- **Téléphone** : +41 76 541 0 360
- **Adresse** : Avenue Edouard-Dubois 20, 2000 Neuchâtel
- **Horaires** : Lundi-Vendredi 7h30-18h30

### Liens

- **Site Web** : https://medsport-hub.preview.emergentagent.com
- **evo360** : https://evo360.ch
- **Réservation** : med@evo360.ch

---

## 🐛 Dépannage

### Le frontend ne démarre pas

```bash
# Supprimer node_modules et réinstaller
cd frontend
rm -rf node_modules yarn.lock
yarn install
```

### Le backend ne répond pas

```bash
# Vérifier MongoDB
sudo systemctl status mongodb

# Vérifier les logs
tail -n 50 /var/log/supervisor/backend.err.log

# Redémarrer le backend
sudo supervisorctl restart backend
```

### Problème de CORS

Vérifier que `CORS_ORIGINS` dans `/app/backend/.env` est configuré :
```env
CORS_ORIGINS=*
```

### Build échoue

```bash
# Vérifier les versions
node --version  # >= 18.x
yarn --version  # >= 1.22.x

# Nettoyer le cache
yarn cache clean
```

---

## 📝 Logs

### Logs Frontend

```bash
# Logs de sortie
tail -f /var/log/supervisor/frontend.out.log

# Logs d'erreur
tail -f /var/log/supervisor/frontend.err.log
```

### Logs Backend

```bash
# Logs de sortie
tail -f /var/log/supervisor/backend.out.log

# Logs d'erreur
tail -f /var/log/supervisor/backend.err.log
```

---

## 🤝 Contribution

Pour contribuer au projet :

1. Fork le repository
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

---

## 📄 Licence

Ce projet est la propriété de **SportMed360 by evo360**.

Tous droits réservés © 2025 SportMed360

---

## 🚀 Roadmap

### Phase 1 (Complétée ✅)
- ✅ Landing page complète
- ✅ SEO optimisé
- ✅ Analytics & GTM intégrés
- ✅ Design responsive

### Phase 2 (En cours)
- ⏳ Google My Business
- ⏳ Blog médical
- ⏳ Pages services détaillées
- ⏳ FAQ

### Phase 3 (Futur)
- 🔮 Espace patient
- 🔮 Prise de RDV en ligne
- 🔮 Multilingue (DE, EN)
- 🔮 Application mobile

---

## 🙏 Remerciements

- **evo360** pour la collaboration et les ressources
- **shadcn/ui** pour les composants UI
- **Emergent.sh** pour l'infrastructure de développement
- **Lucide** pour les icônes

---

## 📞 Questions ?

Pour toute question technique ou support :

- **Email technique** : dev@evo360.ch
- **Email général** : med@evo360.ch
- **Téléphone** : +41 76 541 0 360

---

**Dernière mise à jour** : 15 Janvier 2025  
**Version** : 1.0.0  
**Statut** : Production Ready ✅
