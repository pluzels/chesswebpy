const CACHE_NAME = 'chess-cache-v1';
const urlsToCache = [
    '/',
    '/templates/index.html',
    '/static/css/style.css',
    '/static/js/script.js'
];

// Install Service Worker and cache files
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            return cache.addAll(urlsToCache);
        })
    );
});

// Fetch files from cache or fallback to network
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            return response || fetch(event.request);
        })
    );
});
