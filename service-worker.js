self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('onibus-cache').then(cache => {
      return cache.addAll([
        '/index.html',
        '/style.css',
        '/manifest.json',
        '/linhas/linha-100.html',
        '/linhas/linha-114.html',
        '/linhas/linha-120.html',
        '/linhas/linha-130.html',
        '/linhas/linha-160.html',
        '/linhas/linha-170.html',
        '/linhas/linha-180.html',
        '/linhas/linha-190.html',
        '/linhas/linha-250.html',
        '/linhas/linha-300.html'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(res => {
      return res || fetch(event.request);
    })
  );
});
