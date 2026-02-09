const form = document.getElementById("form");
const output = document.getElementById("output");

let data = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const item = {
    name: document.getElementById("name").value,
    category: document.getElementById("category").value,
    city: document.getElementById("city").value,
    area: document.getElementById("area").value,
    phone: document.getElementById("phone").value.replace(/\D/g, ""),
    joined: document.getElementById("joined").value,
    pix: document.getElementById("pix").checked
  };

  data.push(item);

  output.textContent = JSON.stringify(data, null, 2);

  form.reset();
});
