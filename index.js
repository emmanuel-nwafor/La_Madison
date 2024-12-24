document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");

  const products = [
    {
      id: 1,
      name: "Bannana Island Lagos",
      price: "$200,000",
      image:
        "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
      location: '<i class="bx bx-current-location"></i>',
    },
    {
      id: 2,
      name: "Park View Estate Lagos",
      price: "$300,000",
      image:
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600",
      location: '<i class="bx bx-current-location"></i>',
    },
    {
      id: 3,
      name: "Eko Atlantic Lagos",
      price: "$400,000",
      image:
        "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600",
      location: '<i class="bx bx-current-location"></i>',
    },
  ];

  // Render products
  productList.innerHTML = products
    .map(
      (product) => `
      <div class="bg-white shadow-md rounded-lg overflow-hidden m-3">
        <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
        <div class="p-5">
        <div class="flex items-center m-1">
          <h2>${product.location}</h2>
          <h2 class="text-lg font-bold">${product.name}</h2>
        </div>
          <p class="text-gray-800 font-bold m-1">${product.price}</p>
          <br>
          <div class="flex justify-between">
              <a href="index3.html">
                <button class="bg-slate-700 p-[10px] pl-3 pr-3 text-white rounded-lg hover:bg-slate-800 transition-all">
                  Check location
                </button>
              </a>

               <button
                class=" transition-all border-2 rounded-full p-[10px] pl-[50px] hover:bg-gray-300 text-white 
                font-bold"
                onclick="addToCart(${product.id}, '${product.name}', '${product.price}', '${product.image}')">
                <i class='bx bx-heart text-gray-500 text-[20px]'></i>
              </button>
          </div>
        </div>
      </div>
    `
    )
    .join("");
});

// Add to cart function
function addToCart(id, name, price, image) {
  const cart = getCart();

  if (cart.some((item) => item.id === id)) {
    showPopup("Item already in wishlist!", "bg-yellow-500");
    return;
  }

  cart.push({ id, name, price, image });
  saveCart(cart);
  showPopup("Item added to wishlist!");
}
