const PROMO_MONTHS = 3;
const PROMO_PRICE = 20;
const NORMAL_PRICE = 40;

fetch("data.json?v=" + Date.now(), { cache: "no-store" })
  .then(res => res.json())
  .then(data => render(data));

function monthsBetween(start) {
  const s = new Date(start);
  const n = new Date();
  return (n.getFullYear() - s.getFullYear()) * 12 + (n.getMonth() - s.getMonth());
}

function priceInfo(joined) {
  const m = monthsBetween(joined);
  return m < PROMO_MONTHS ? `R$ ${PROMO_PRICE}/mês (promo)` : `R$ ${NORMAL_PRICE}/mês`;
}

function render(data) {
  const list = document.getElementById("list");
  const search = document.getElementById("search");

  function draw() {
    list.innerHTML = "";
    const q = search.value.toLowerCase();

    data.filter(d =>
      d.name.toLowerCase().includes(q) ||
      d.category.toLowerCase().includes(q) ||
      d.city.toLowerCase().includes(q)
    ).forEach(d => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>${d.name}</h3>
        <p>${d.category} • ${d.city}</p>
        <p>📍 ${d.area}</p>
        <p>💳 ${priceInfo(d.joined)} ${d.pix ? "• Aceita Pix" : ""}</p>
        <a class="btn"
           target="_blank"
           href="https://wa.me/${d.phone}">
           Chamar no WhatsApp
        </a>
      `;
      list.appendChild(card);
    });
  }

  search.addEventListener("input", draw);
  draw();
}

