const CACHE_NAME = "mijn-uitleenregister-v1";

const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icons/icon.svg",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./icons/apple-touch-icon.png",
];

// Installatie: sla de belangrijkste app-bestanden op.
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      cache.addAll(APP_SHELL).catch((error) => {
        console.warn(
          "Niet alle app-bestanden konden worden opgeslagen:",
          error,
        );
      }),
    ),
  );

  self.skipWaiting();
});

// Activeer de nieuwe versie en verwijder oude caches.
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter(
              (key) =>
                key.startsWith("mijn-uitleenregister-") && key !== CACHE_NAME,
            )
            .map((key) => caches.delete(key)),
        ),
      ),
  );

  self.clients.claim();
});

// Verwerk netwerkverzoeken.
self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Alleen verzoeken van dezelfde website verwerken.
  if (url.origin !== self.location.origin) {
    return;
  }

  // Pagina's: eerst het netwerk proberen.
  // Bij geen internet wordt de opgeslagen versie gebruikt.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response && response.ok) {
            const copy = response.clone();

            caches.open(CACHE_NAME).then((cache) => {
              cache.put("./index.html", copy);
            });
          }

          return response;
        })
        .catch(async () => {
          return (
            (await caches.match(request)) ||
            (await caches.match("./index.html")) ||
            new Response(
              "Je bent offline en de app-pagina is nog niet opgeslagen.",
              {
                status: 503,
                headers: {
                  "Content-Type": "text/plain; charset=utf-8",
                },
              },
            )
          );
        }),
    );

    return;
  }

  // Andere bestanden: eerst de cache proberen.
  if (request.method === "GET") {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) {
          return cached;
        }

        return fetch(request).then((response) => {
          if (response && response.ok) {
            const copy = response.clone();

            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, copy);
            });
          }

          return response;
        });
      }),
    );
  }
});
