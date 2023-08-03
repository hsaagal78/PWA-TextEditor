const { offlineFallback, warmStrategyCache } = require('workbox-recipes');
const { CacheFirst } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');
const { StaleWhileRevalidate } = require('workbox-strategies');


precacheAndRoute(self.__WB_MANIFEST);

const pageCache = new CacheFirst({
  cacheName: 'page-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});

warmStrategyCache({
  urls: ['/index.html', '/'],
  strategy: pageCache,
});

registerRoute(({ request }) => request.mode === 'navigate', pageCache);

// TODO: Implement asset caching
// Register a route in the Service Worker
registerRoute(
    // Filter function: Check if the request's destination type is 'style', 'script', or 'worker'
  ({request}) => ['style','script', 'worker'].includes(request.destination),
    // Use the Stale While Revalidate caching strategy for the matched requests
  new StaleWhileRevalidate({
        // Specify the cache name for storing cached responses
  cacheName: 'asset-cache',
      // Configure plugins for customizing cache behavior
  plugins:[
          // Use the CacheableResponsePlugin to cache responses with specific statuses
    new CacheableResponsePlugin({
      statuses: [0,200],
    }),
  ],
}));

