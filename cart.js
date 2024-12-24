function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function showPopup(message, color = "bg-green-500") {
  const popup = document.getElementById("popup");
  popup.textContent = message;
  popup.className = `fixed top-4 right-4 ${color} text-white p-4 rounded shadow-lg z-50`;
  popup.classList.remove("hidden");

  setTimeout(() => {
    popup.classList.add("hidden");
  }, 2000);
}
