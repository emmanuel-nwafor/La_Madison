const map = L.map("map").setView([0, 0], 2);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

map.on("click", function (event) {
  const { lat, lng } = event.latlng;
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      `<b>Coordinates:</b><br>Latitude: ${lat.toFixed(
        5
      )}<br>Longitude: ${lng.toFixed(5)}`
    )
    .openPopup();
});
