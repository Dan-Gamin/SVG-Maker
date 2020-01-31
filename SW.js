var cname = 'cache-data';
var cfiles = [ 
    './', 
    './Javascript/Main.js',
    './HTML/Maker-new.html' 
];

self.addEventListener('install', (e) => {
	e.waitUntil(
		caches.open(cname).then((cache) => {
			console.log('opened cache');
			return cache.addAll(cfiles);
		})
	);
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
      caches.match(e.request)
        .then((response) => {
          // Cache hit - return response
          if (response) {
            return response;
          }
  
          return fetch(e.request).then(
            (response) => {
              // Check if we received a valid response
              if(!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }
  
              // IMPORTANT: Clone the response. A response is a stream
              // and because we want the browser to consume the response
              // as well as the cache consuming the response, we need
              // to clone it so we have two streams.
              var responseToCache = response.clone();
  
              caches.open(CACHE_NAME)
                .then((cache) => {
                  cache.put(e.request, responseToCache);
                });
  
              return response;
            }
          );
        })
      );
  });

  self.addEventListener('activate', (e) => {

    var cacheWhitelist = ['pages-cache-v1', 'blog-posts-cache-v1'];
  
    e.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });