// keystatic.config.ts
// Schéma CMS pour sportmed360.ch.
// Mirrors exactement la structure de src/_data/home.json.
//
// Storage :
//   LOCAL  → npm run dev:admin  (lit/écrit sur le disque)
//   GITHUB → production Cloudflare (lit/écrit via l'API GitHub)

import { config, fields, singleton } from '@keystatic/core'

// @ts-ignore
const isLocal =
  (typeof import.meta !== 'undefined' && (import.meta as any).env?.DEV === true) ||
  (typeof process !== 'undefined' && process.env.NODE_ENV !== 'production' && !process.env.CF_PAGES)

const storage = isLocal
  ? ({ kind: 'local' } as const)
  : ({
      kind: 'github',
      repo: { owner: 'doctorfill-dev', name: 'sportmed360.ch' },
    } as const)

export default config({
  storage,

  ui: {
    brand: { name: 'SportMed360 — Admin' },
    navigation: {
      'SEO & Métadonnées': ['seo'],
      'Page d\'accueil':   ['home'],
      'Médias':            ['media'],
    },
  },

  singletons: {

    // ── SEO & Mots-clés ────────────────────────────────────────────────────
    // Fichier dédié src/_data/seo.json — séparé de home.json pour éviter
    // les conflits de validation de schéma Keystatic.
    seo: singleton({
      label:  'SEO & Mots-clés',
      path:   'src/_data/seo',
      format: { data: 'json' },

      schema: {
        title: fields.text({
          label:       'Balise <title>',
          description: 'Titre affiché dans les résultats Google (50–60 caractères recommandés). Mot-clé principal en premier.',
        }),
        description: fields.text({
          label:       'Meta description',
          description: 'Accroche dans les résultats Google (150–160 caractères). Inclure les mots-clés prioritaires.',
          multiline:   true,
        }),
        keywords: fields.text({
          label:       'Mots-clés (meta keywords)',
          description: 'Liste séparée par des virgules. Priorité : médecin du sport neuchâtel, physiothérapie neuchâtel, cabinet médical sport neuchâtel…',
          multiline:   true,
        }),
        canonical: fields.text({
          label:       'URL canonique',
          description: 'URL de référence pour éviter le contenu dupliqué (ex: https://sportmed360.ch/)',
        }),
        og_title: fields.text({
          label:       'Titre Open Graph',
          description: 'Titre affiché lors du partage sur les réseaux sociaux.',
        }),
        og_description: fields.text({
          label:     'Description Open Graph',
          multiline: true,
        }),
        og_image: fields.text({
          label:       'Image Open Graph (URL complète)',
          description: 'Format recommandé : 1200×630 px. Ex: https://sportmed360.ch/assets/premises/fitness_2.webp',
        }),
      },
    }),

    // ── Contenu page d'accueil ────────────────────────────────────────────
    home: singleton({
      label:  "Contenu de la page",
      path:   'src/_data/home',
      format: { data: 'json' },

      schema: {

        // ── Informations du site ───────────────────────────────────────────
        site: fields.object(
          {
            name:          fields.text({ label: 'Nom du site' }),
            url:           fields.text({ label: 'URL du site (https://sportmed360.ch)' }),
            phone:         fields.text({ label: 'Téléphone (format E.164, ex: +41765410360)' }),
            phone_display: fields.text({ label: 'Téléphone (affichage, ex: +41 76 541 03 60)' }),
            email:         fields.text({ label: 'Email' }),
            address_street:fields.text({ label: 'Rue & numéro' }),
            address_city:  fields.text({ label: 'Code postal & ville' }),
            maps_url:      fields.text({ label: 'Lien Google Maps' }),
            hours_short:   fields.text({ label: 'Horaires (court, ex: Lun–Ven · 7h30–18h30)' }),
            hours_days:    fields.text({ label: 'Horaires — jours (ex: Lundi – Vendredi)' }),
            hours_time:    fields.text({ label: 'Horaires — heures (ex: 7h30 – 18h30)' }),
            payment:       fields.text({ label: 'Moyens de paiement (Schema.org)' }),
          },
          { label: 'Informations générales' }
        ),

        // ── Navigation ────────────────────────────────────────────────────
        nav: fields.object(
          {
            links: fields.array(
              fields.object({
                label: fields.text({ label: 'Libellé' }),
                url:   fields.text({ label: 'Ancre / URL (ex: #equipe)' }),
              }),
              {
                label:     'Liens de navigation',
                itemLabel: (props) => props.fields.label.value || 'Lien',
              }
            ),
            cta_label: fields.text({ label: 'Texte bouton CTA header' }),
          },
          { label: 'Navigation' }
        ),

        // ── Section Hero ──────────────────────────────────────────────────
        hero: fields.object(
          {
            eyebrow:             fields.text({ label: 'Badge en haut (ex: Centre médical de performance · Neuchâtel)' }),
            title_line1:         fields.text({ label: 'Titre — ligne 1' }),
            title_line2:         fields.text({ label: 'Titre — ligne 2 (en italique)' }),
            title_line3:         fields.text({ label: 'Titre — ligne 3' }),
            subtitle:            fields.text({ label: 'Sous-titre', multiline: true }),
            cta_primary:         fields.text({ label: 'Bouton principal (texte)' }),
            cta_secondary_label: fields.text({ label: 'Bouton secondaire (texte)' }),
            cta_secondary_url:   fields.text({ label: 'Bouton secondaire (lien)' }),
            badge_num:           fields.text({ label: 'Badge mosaïque — chiffre (ex: 6)' }),
            badge_label:         fields.text({ label: 'Badge mosaïque — libellé (ex: Spécialistes réunis)' }),
            mosaic: fields.array(
              fields.object({
                src:      fields.image({ label: 'Image', directory: 'src/assets/premises', publicPath: '/assets/premises/' }),
                alt:      fields.text({ label: 'Texte alternatif (SEO + accessibilité)', description: 'Inclure les mots-clés géographiques et médicaux.' }),
                priority: fields.checkbox({ label: 'Image prioritaire (LCP)', defaultValue: false }),
                pos:      fields.select({
                  label:   'Position dans la mosaïque',
                  options: [
                    { label: 'Haut gauche',  value: 'tl' },
                    { label: 'Haut droite',  value: 'tr' },
                    { label: 'Bas gauche',   value: 'bl' },
                    { label: 'Bas droite',   value: 'br' },
                  ],
                  defaultValue: 'tl',
                }),
              }),
              { label: 'Images de la mosaïque', itemLabel: (props) => props.fields.alt.value || 'Image' }
            ),
            ticker: fields.array(
              fields.text({ label: 'Terme' }),
              {
                label:     'Termes du ticker (défilant)',
                description: 'Termes médicaux et mots-clés qui défilent sous le hero. Opportunité SEO : inclure les mots-clés cibles.',
                itemLabel: (props) => props.value || 'Terme',
              }
            ),
          },
          { label: 'Section Hero' }
        ),

        // ── Chiffres clés ─────────────────────────────────────────────────
        stats: fields.array(
          fields.object({
            num:   fields.text({ label: 'Valeur (ex: 15)' }),
            sup:   fields.text({ label: 'Exposant (ex: +, °) — laisser vide si aucun' }),
            label: fields.text({ label: 'Libellé (ex: Ans d\'expérience sportive)' }),
          }),
          {
            label:     'Chiffres clés',
            itemLabel: (props) => props.fields.label.value || 'Stat',
          }
        ),

        // ── Section Équipe ────────────────────────────────────────────────
        team: fields.object(
          {
            eyebrow:  fields.text({ label: 'Badge (ex: Experts à votre service)' }),
            title:    fields.text({ label: 'Titre de section' }),
            subtitle: fields.text({ label: 'Sous-titre', multiline: true }),
            members: fields.array(
              fields.object({
                id:        fields.text({ label: 'Identifiant unique (slug, ex: curty)', description: 'Utilisé pour les liens internes et le Schema.org. Minuscules, sans espaces.' }),
                name:      fields.text({ label: 'Nom complet' }),
                role:      fields.text({ label: 'Rôle / Poste' }),
                color:     fields.select({
                  label:   'Couleur du badge',
                  options: [
                    { label: 'Indigo (médecins, physiologistes)', value: 'indigo' },
                    { label: 'Lavande (physiothérapeutes)',        value: 'lavender' },
                    { label: 'Citron (coachs, préparateurs)',      value: 'citron' },
                  ],
                  defaultValue: 'indigo',
                }),
                avatar:    fields.text({ label: 'Initiales (2 lettres, ex: BC) — affichées si pas de photo' }),
                languages: fields.text({ label: 'Langues parlées (ex: FR · EN · DE) — laisser vide si non pertinent' }),
                photo:     fields.image({ label: 'Photo', directory: 'src/assets/employees', publicPath: '/assets/employees/' }),
                photo_alt: fields.text({ label: 'Texte alternatif de la photo (SEO)', description: 'Inclure nom, rôle, et localisation.' }),
                tags: fields.array(
                  fields.text({ label: 'Tag' }),
                  { label: 'Tags / Spécialités', itemLabel: (props) => props.value || 'Tag' }
                ),
                bio: fields.text({
                  label:       'Biographie',
                  multiline:   true,
                  description: 'HTML autorisé (<strong>…</strong>). Inclure les références notables pour la crédibilité.',
                }),
                credentials: fields.array(
                  fields.text({ label: 'Qualification / Réalisation', description: 'HTML autorisé pour le gras (<strong>…</strong>).' }),
                  { label: 'Qualifications & réalisations', itemLabel: (props) => props.value || 'Qualification' }
                ),
                partnership: fields.object(
                  {
                    label:     fields.text({ label: 'Texte (ex: En partenariat avec)' }),
                    url:       fields.text({ label: 'URL du partenaire' }),
                    logo_url:  fields.text({ label: 'URL du logo (si externe, ex: logo Medbase)' }),
                    logo_src:  fields.image({ label: 'Logo (si interne)', directory: 'src/assets/logo', publicPath: '/assets/logo/' }),
                    logo_alt:  fields.text({ label: 'Texte alternatif du logo' }),
                    aria_label:fields.text({ label: 'Aria-label du lien' }),
                  },
                  { label: 'Partenariat (optionnel)' }
                ),
              }),
              {
                label:     'Membres de l\'équipe',
                itemLabel: (props) => props.fields.name.value || 'Membre',
              }
            ),
          },
          { label: 'Section Équipe' }
        ),

        // ── Section Services ──────────────────────────────────────────────
        services: fields.object(
          {
            eyebrow:  fields.text({ label: 'Badge (ex: Soins & Prestations)' }),
            title:    fields.text({ label: 'Titre (\\n pour saut de ligne)', multiline: true }),
            subtitle: fields.text({ label: 'Sous-titre', multiline: true }),
            cta:      fields.text({ label: 'Texte bouton' }),
            items: fields.array(
              fields.object({
                num:         fields.text({ label: 'Numéro (ex: 01)' }),
                title:       fields.text({ label: 'Titre du service', description: 'Utiliser le mot-clé cible dans le titre (ex: Physiothérapie, Médecine du sport).' }),
                description: fields.text({ label: 'Description courte', multiline: true, description: 'Inclure les mots-clés géo (Neuchâtel) et médicaux cibles.' }),
                icon: fields.select({
                  label:   'Icône',
                  options: [
                    { label: 'Croix médicale (médecine du sport)', value: 'sport' },
                    { label: 'Cœur (physiothérapie)',              value: 'physio' },
                    { label: 'Courbe (MTT)',                        value: 'mtt' },
                    { label: 'ECG (tests cardiaques)',              value: 'ecg' },
                    { label: 'Tableau (analyses sanguines)',        value: 'blood' },
                    { label: 'Seringue (vaccins)',                  value: 'vaccine' },
                    { label: 'Personnes (médecine générale)',       value: 'general' },
                  ],
                  defaultValue: 'sport',
                }),
              }),
              {
                label:     'Services',
                itemLabel: (props) => props.fields.title.value || 'Service',
              }
            ),
          },
          { label: 'Section Services' }
        ),

        // ── Section Partenariat evo360 ────────────────────────────────────
        partnership: fields.object(
          {
            eyebrow:  fields.text({ label: 'Badge (ex: Collaboration)' }),
            title:    fields.text({ label: 'Titre (ex: Avec evo360)' }),
            subtitle: fields.text({ label: 'Description', multiline: true }),
            carousel: fields.array(
              fields.object({
                src: fields.image({ label: 'Image', directory: 'src/assets/premises', publicPath: '/assets/premises/' }),
                alt: fields.text({ label: 'Texte alternatif', description: 'Inclure les mots-clés (Neuchâtel, evo360, centre de bien-être, etc.).' }),
              }),
              { label: 'Images du carrousel', itemLabel: (props) => props.fields.alt.value || 'Image' }
            ),
            perks: fields.array(
              fields.object({
                color:       fields.select({
                  label:   'Couleur',
                  options: [
                    { label: 'Indigo',   value: 'indigo' },
                    { label: 'Lavande',  value: 'lavender' },
                    { label: 'Citron',   value: 'citron' },
                  ],
                  defaultValue: 'indigo',
                }),
                title:       fields.text({ label: 'Titre' }),
                description: fields.text({ label: 'Description courte', multiline: true }),
              }),
              { label: 'Avantages du partenariat', itemLabel: (props) => props.fields.title.value || 'Avantage' }
            ),
            cta_label: fields.text({ label: 'Texte du bouton CTA' }),
            cta_url:   fields.text({ label: 'URL du bouton CTA' }),
          },
          { label: 'Section Partenariat evo360' }
        ),

        // ── Section Contact / CTA ─────────────────────────────────────────
        contact: fields.object(
          {
            eyebrow:    fields.text({ label: 'Badge (ex: Prendre rendez-vous)' }),
            title:      fields.text({ label: 'Titre principal' }),
            title_span: fields.text({ label: 'Titre — 2e ligne (mise en avant)' }),
            subtitle:   fields.text({ label: 'Sous-titre', multiline: true }),
            cta:        fields.text({ label: 'Texte bouton' }),
            formspree_id: fields.text({ label: 'ID Formspree (ex: mykdbplr)' }),
            maps_embed: fields.text({ label: 'URL embed Google Maps' }),
          },
          { label: 'Section Contact' }
        ),

        // ── Footer ────────────────────────────────────────────────────────
        footer: fields.object(
          {
            tagline:     fields.text({ label: 'Tagline (ex: by evo360)' }),
            tagline_url: fields.text({ label: 'URL de la tagline' }),
            disclaimer:  fields.text({ label: 'Mention légale en bas de page', multiline: true }),
          },
          { label: 'Footer' }
        ),

      }, // fin schema home
    }), // fin singleton home

    // ── Médiathèque ───────────────────────────────────────────────────────
    media: singleton({
      label: 'Médiathèque',
      path:  'src/_data/media',
      format: { data: 'json' },
      schema: {
        images: fields.array(
          fields.object({
            name: fields.text({ label: 'Nom / description' }),
            file: fields.image({
              label:       'Image',
              directory:   'src/assets',
              publicPath:  '/assets/',
              description: 'Glisser-déposer une image (JPG, PNG, WebP). Elle sera automatiquement optimisée par GitHub Actions.',
            }),
          }),
          {
            label:     'Images du site',
            itemLabel: (props) => props.fields.name.value || 'Image',
          }
        ),
      },
    }),

  }, // fin singletons
})
