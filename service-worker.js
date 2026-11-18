const CACHE_NAME = "mijn-uitleenregister-v2";

const APP_FILES = [
  "./manifest.json",
  "./icons/icon.svg",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./icons/apple-touch-icon.png",
];

// Installeren: index.html moet altijd eerst worden opgeslagen.
self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);

      // De startpagina is het belangrijkste bestand.
      await cache.add("./index.html");

      // Andere bestanden afzonderlijk proberen op te slaan.
      await Promise.allSettled(APP_FILES.map((file) => cache.add(file)));

      await self.skipWaiting();
    })(),
  );
});

// Oude cache opruimen.
self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();

      await Promise.all(
        keys
          .filter(
            (key) =>
              key.startsWith("mijn-uitleenregister-") && key !== CACHE_NAME,
          )
          .map((key) => caches.delete(key)),
      );

      await self.clients.claim();
    })(),
  );
});

// Offline ondersteuning.
self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);

  if (url.origin !== self.location.origin) return;
  if (request.method !== "GET") return;

  // Pagina's: eerst internet proberen, daarna de cache.
  if (request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const response = await fetch(request);

          if (response.ok) {
            const cache = await caches.open(CACHE_NAME);
            await cache.put("./index.html", response.clone());
          }

          return response;
        } catch (error) {
          const cachedPage = await caches.match("./index.html");

          if (cachedPage) return cachedPage;

          return new Response(
            "De app is nog niet offline opgeslagen. Open de app eerst met internetverbinding.",
            {
              status: 503,
              headers: {
                "Content-Type": "text/plain; charset=utf-8",
              },
            },
          );
        }
      })(),
    );

    return;
  }

  // Afbeeldingen, scripts en andere bestanden.
  event.respondWith(
    (async () => {
      const cached = await caches.match(request);

      if (cached) return cached;

      try {
        const response = await fetch(request);

        if (response.ok) {
          const cache = await caches.open(CACHE_NAME);
          await cache.put(request, response.clone());
        }

        return response;
      } catch (error) {
        return new Response("Bestand niet offline beschikbaar.", {
          status: 503,
        });
      }
    })(),
  );
});
