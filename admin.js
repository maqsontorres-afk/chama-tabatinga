const form = document.getElementById("form");
const output = document.getElementById("output");

let data = [];

form.addEventListener("submit", e => {
  e.preventDefault();

  const item = {
    name: name.value,
    category: category.value,
    city: city.value,
    area: area.value,
    phone: phone.value,
    joined: joined.value,
    pix: pix.checked
  };

  data.push(item);
  output.textContent = JSON.stringify(data, null, 2);
});
