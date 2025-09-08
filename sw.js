const CACHE = 'bhcalc-cache-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './Recurso 1@300x.png',
  './Recurso 2@300x.png'
];
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
