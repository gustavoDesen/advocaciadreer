
function initMap() {
var uluru = {lat: -23.467196, lng: -46.525824};
var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 17,
  center: uluru
});
var marker = new google.maps.Marker({
  position: uluru,
  map: map
});
}
