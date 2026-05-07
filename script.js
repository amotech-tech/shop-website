let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  let item = cart.find(p => p.name === name);

  if (item) {
    item.quantity++;
  } else {
    cart.push({ name, price, quantity: 1 });
  }

  saveCart();
  displayCart();
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function displayCart() {
  let cartList = document.getElementById("cart");
  let total = 0;

  cartList.innerHTML = "";

  cart.forEach(item => {
    let li = document.createElement("li");
    li.innerText = `${item.name} x${item.quantity} - KES ${item.price * item.quantity}`;
    cartList.appendChild(li);

    total += item.price * item.quantity;
  });

  document.getElementById("total").innerText = total;
}
displayCart();
li.innerHTML = `
  ${item.name} x${item.quantity} - KES ${item.price * item.quantity}
  <button onclick="removeItem('${item.name}')">Remove</button>
`;
function removeItem(name) {
  cart = cart.filter(item => item.name !== name);
  saveCart();
  displayCart();
}