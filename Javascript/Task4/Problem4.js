let products = ["Laptop", "Phone", "Headphones", "Keyboard", "Mouse"];

let ul = document.getElementById("productList");
let message = document.getElementById("message");

function displayProducts(items) {
  ul.innerHTML = "";

  items.forEach((product) => {
    let li = document.createElement("li");
    li.textContent = product;
    ul.appendChild(li);
  });
}

displayProducts(products);

function filterProducts() {
  let searchValue = document.getElementById("search").value.toLowerCase();

  let filtered = products.filter((product) =>
    product.toLowerCase().includes(searchValue)
  );

  if (filtered.length === 0) {
    ul.style.display = "none";
    message.style.display = "block";
  } else {
    ul.style.display = "block";
    message.style.display = "none";
    displayProducts(filtered);
  }
}
