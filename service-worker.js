const CACHE_NAME = "mijn-uitleenregister-v3";

const APP_FILES = [
  "./manifest.json",
  "./icons/icon.svg",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./icons/apple-touch-icon.png",
];

const APP_URL = new URL("./", self.registration.scope);
const INDEX_URL = new URL("index.html", APP_URL);

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);

      // De startpagina moet succesvol worden opgeslagen.
      await cache.add(INDEX_URL.href);

      // Overige bestanden afzonderlijk opslaan.
      await Promise.allSettled(
        APP_FILES.map((file) => cache.add(new URL(file, APP_URL).href)),
      );

      await self.skipWaiting();
    })(),
  );
});

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

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);

  if (url.origin !== self.location.origin) return;
  if (request.method !== "GET") return;

  // Alleen verzoeken binnen de app-scope behandelen.
  if (!url.href.startsWith(APP_URL.href)) return;

  if (request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const response = await fetch(request);

          if (response.ok) {
            const cache = await caches.open(CACHE_NAME);
            await cache.put(INDEX_URL.href, response.clone());
          }

          return response;
        } catch (error) {
          const cachedPage = await caches.match(INDEX_URL.href);

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
