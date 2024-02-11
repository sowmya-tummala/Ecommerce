// This is just a static example, not real-time tracking
function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 40.712776, lng: -74.005974 }, // New York City coordinates
    zoom: 12
  });

  const marker = new google.maps.Marker({
    position: { lat: 40.712776, lng: -74.005974 },
    map: map,
    title: "Professional's Location"
  });

  const arrivalTimeSpan = document.getElementById('arrival-time');
  arrivalTimeSpan.textContent = '30 minutes'; // Static estimated time
}
