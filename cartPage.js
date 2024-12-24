document.addEventListener("DOMContentLoaded", () => {
  renderCart();
});

function renderCart() {
  const cart = getCart();
  const cartItems = document.getElementById("cart-items");

  if (cart.length === 0) {
    cartItems.innerHTML = `<p class="text-center text-gray-500">Your wishlist is empty.</p>`;
    return;
  }

  cartItems.innerHTML = cart
    .map(
      (item) => `
      <div class="m-4">
       <div class="bg-white shadow-md rounded-lg overflow-hidden">
         <img src="${item.image}" alt="${item.name}" class="w-full h-48 object-cover">
         <div class="p-4">
          <h2 class="text-lg font-bold">${item.name}</h2>
          <p class="text-gray-800 font-bold">${item.price}</p>
          <button
            class="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onclick="removeFromCart(${item.id})">
            Remove 
          </button>
        </div>
      </div>
             </div>

    `
    )
    .join("");
}

function removeFromCart(id) {
  let cart = getCart();
  cart = cart.filter((item) => item.id !== id);
  saveCart(cart);
  renderCart();
  showPopup("Item removed from Wishlist!", "bg-red-500");
}
