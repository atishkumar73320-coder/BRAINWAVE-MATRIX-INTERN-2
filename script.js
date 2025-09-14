let cart = [];
let total = 0;

// Add to cart function
function addToCart(product, price) {
  cart.push({ product, price });
  total += price;
  updateCart();
}

// Update cart display
function updateCart() {
  let cartItems = document.getElementById("cart-items");
  let totalDisplay = document.getElementById("total");
  let cartCount = document.getElementById("cart-count");

  cartItems.innerHTML = "";
  cart.forEach((item, index) => {
    let li = document.createElement("li");
    li.textContent = `${item.product} - $${item.price}`;
    cartItems.appendChild(li);
  });

  totalDisplay.textContent = `Total: $${total}`;
  cartCount.textContent = cart.length;
}
