// Only versioned public assets are cached. Editorial HTML and admin/API
// responses always use the network, so CMS changes are visible immediately.
const CACHE_NAME = `sportmed360-assets-${self.registration.scope}`;
const ASSET_PATHS = [
  '/assets/css/styles.css', '/assets/js/script.js', '/manifest.json',
  '/assets/logo/logo-dark.svg', '/assets/logo/logo-white.svg', '/assets/logo/logo-e-192.svg',
];

function isCacheableAsset(url) {
  return url.origin === self.location.origin && url.pathname.startsWith('/assets/') &&
    /\.(?:css|js|svg|png|jpe?g|webp|gif|woff2?)$/i.test(url.pathname);
}

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await Promise.all(ASSET_PATHS.map(async (path) => {
      try {
        const response = await fetch(path, { cache: 'no-cache' });
        if (response.ok) await cache.put(path, response);
      } catch { /* Optional assets must not block activation. */ }
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter((name) => name.startsWith('sportmed360-assets-') && name !== CACHE_NAME).map((name) => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.pathname.startsWith('/keystatic/') || url.pathname.startsWith('/api/') || !isCacheableAsset(url)) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    try {
      const response = await fetch(event.request);
      if (response.ok) await cache.put(event.request, response.clone());
      return response;
    } catch {
      return (await cache.match(event.request)) || Response.error();
    }
  })());
});
