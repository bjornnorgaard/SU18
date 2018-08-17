self.addEventListener('fetch', event => {
    event.respondWith(caches
        .match(event.request)
        .then(cacheResponse => cacheResponse || fetch(event.request).then(response => {
            return caches.open('v1').then(cache => {
                return cache.put(event.request, response.clone()).then(_ => {
                    return response;
                })
            })
        }))
    );
});
