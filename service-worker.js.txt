self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("chama-v1").then(c =>
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
