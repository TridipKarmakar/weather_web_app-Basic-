document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCart = document.getElementById("empty-cart");
  const cartTotal = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkoutBtn = document.getElementById("checkout-btn");

  const products = [
    { id: 1, name: "product 1", price: 29.99 },
    { id: 2, name: "product 2", price: 19.99 },
    { id: 3, name: "product 3", price: 30.99 },
  ];

  const cart = [];

  products.forEach((e) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `<span> $${e.name} - $${e.price.toFixed(2)} </span>
          <button data-id=${e.id}>Add to cart</button>`;
    productList.appendChild(productDiv);
  });

  productList.addEventListener("click", (e) => {
    if (e.target.tagName == "BUTTON") {
      const productId = parseInt(e.target.getAttribute("data-id"));
      const product = products.find((p) => p.id === productId);
      addToCart(product);
      // console.log(cart);
    }
  });
  function addToCart(product) {
    cart.push(product);
    renderCart();
  }

  function renderCart() {
    cartItems.innerText = "";
    let totalPrice = 0;
    if (cart.length > 0) {
      emptyCart.classList.add("hidden");
      cartTotal.classList.remove("hidden");
      cart.forEach((element) => {
        totalPrice += element.price;
        // console.log(element.name);
        const chartItem = document.createElement("div");
        chartItem.innerHTML = `${element.name} - $${element.price.toFixed(2)}`;

        cartItems.appendChild(chartItem);
        totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`;
      });
    } else {
      emptyCart.classList.remove("hidden");
      totalPriceDisplay.textContent = `$0.00`;
    }
  }

  checkoutBtn.addEventListener("click", () => {
    console.log(cart);
    cart.length = 0;
    console.log(cart);
    alert("checkout successfully");
    renderCart();
  });
});
