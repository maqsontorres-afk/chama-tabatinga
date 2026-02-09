self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("chama-v3").then(c =>
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


