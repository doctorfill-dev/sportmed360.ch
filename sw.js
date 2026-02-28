const CACHE_NAME = 'sportmed360-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/manifest.json',

  /* premises */
  '/assets/premises/logo-192.png',
  '/assets/premises/logo-512.png',
  '/assets/premises/fitness_1.webp',
  '/assets/premises/fitness_2.webp',
  '/assets/premises/fitness_3.webp',
  '/assets/premises/redlight_1.webp',
  '/assets/premises/logo.webp',

  /* logo */
  '/assets/logo/logo-mbp.webp',
  '/assets/logo/centre-11.webp',
  '/assets/logo/centre-12.webp',
  '/assets/logo/centre-13.webp',
  '/assets/logo/centre-14.webp',
  '/assets/logo/logo-dark.svg',
  '/assets/logo/logo-white.svg',

  /* employees */
  '/assets/employees/orlane_gaudenzi.webp',
  '/assets/employees/bertrand_curty.webp',
  '/assets/employees/franco_pisino.webp',
  '/assets/employees/maiwenn_crausaz.webp',
  '/assets/employees/sara_ramos.webp'
];

// Installation : on met en cache les ressources de base
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activation : on nettoie les anciens caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Stratégie de cache : Stale-while-revalidate
// On sert le cache immédiatement, puis on met à jour en arrière-plan.
self.addEventListener('fetch', (event) => {
  // On ne gère que les requêtes GET
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((cachedResponse) => {
        const fetchedResponse = fetch(event.request).then((networkResponse) => {
          // Si la réponse est valide, on met à jour le cache
          if (networkResponse && networkResponse.status === 200) {
            cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        }).catch(() => {
          // En cas d'échec réseau (offline), on renvoie la réponse du cache si elle existe
          return cachedResponse;
        });

        // On renvoie le cache s'il existe, sinon on attend le réseau
        return cachedResponse || fetchedResponse;
      });
    })
  );
});
