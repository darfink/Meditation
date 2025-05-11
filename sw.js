self.addEventListener('install', (event) => {
  console.log('Service worker installing...');
  // Add a call to skipWaiting here if you want the new service worker to activate immediately
});

self.addEventListener('activate', (event) => {
  console.log('Service worker activating...');
});

self.addEventListener('fetch', (event) => {
  // Basic pass-through for network requests
  event.respondWith(fetch(event.request));
});