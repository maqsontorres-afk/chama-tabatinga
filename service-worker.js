self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("chama-v2").then(c =>
      c.addAll([
        "./",
        "./index.html",
        "./styles.css",
        "./app.js",
        "./data.json"
      ])
    )
  );
});

