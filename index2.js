document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");

  // Sample products
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
    {
      id: 4,
      name: "Nickon Estate Lagos",
      price: "$40,000",
      image:
        "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600",
      location: '<i class="bx bx-current-location"></i>',
    },
    {
      id: 5,
      name: "Shonibare Estate Lagos",
      price: "$100,000",
      image:
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600",
      location: '<i class="bx bx-current-location"></i>',
    },
    {
      id: 6,
      name: "GRA Estate Enugu",
      price: "$450,000",
      image:
        "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=600",
      location: '<i class="bx bx-current-location"></i>',
    },
    {
      id: 7,
      name: "RivTa Golf Estate PH",
      price: "$150,000",
      image:
        "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=600",
      location: '<i class="bx bx-current-location"></i>',
    },
    {
      id: 8,
      name: "Rainbow Town Estate PH",
      price: "$200,000",
      image:
        "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?cs=srgb&dl=pexels-itsterrymag-2635038.jpg&fm=jpg&_gl=1*1x4vqs6*_ga*MTQ5NDg0MTMwMS4xNzM0NzIzMDI2*_ga_8JE65Q40S6*MTczNDgzNDEyNy4yLjEuMTczNDgzNDE0OC4wLjAuMA..",
      location: '<i class="bx bx-current-location"></i>',
    },
    {
      id: 9,
      name: "Lake View Estate PH",
      price: "$310,000",
      image:
        "https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=600",
      location: '<i class="bx bx-current-location"></i>',
    },
    {
      id: 10,
      name: "Eko Villa Estate PH",
      price: "$220,000",
      image:
        "https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&w=600",
      location: '<i class="bx bx-current-location"></i>',
    },
    {
      id: 11,
      name: "Hill Top Estate Enugu",
      price: "$310,000",
      image:
        "https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=600",
      location: '<i class="bx bx-current-location"></i>',
    },
    {
      id: 12,
      name: "Maison Estate UK",
      price: "$500,000",
      image:
        "https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg?auto=compress&cs=tinysrgb&w=600",
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
                    Check Location
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
