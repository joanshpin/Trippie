var map;
//Google geocoding
function initMap() {
  var krakow = {lat: 50.061676, lng: 19.937770};
  map = new google.maps.Map(document.getElementById('map'), { zoom: 2, center: krakow });
  var geocoder = new google.maps.Geocoder();
  var submitAddress = document.getElementById('submit');

//
  submitAddress.addEventListener('click', function() {
    geocodeAddress(geocoder, map); });
  }

//funkcja geocode, znajdywanie konkretnego miejsca na podstawie nazwy lub adresu
function geocodeAddress(geocoder, resultsMap) {
  var address = document.getElementById('address').value;
  var spanAddress = document.querySelector("#addressDiv h4 span")
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === 'OK') {
      resultsMap.setCenter(results[0].geometry.location);
      // console.log(results[0].geometry.location);
      var marker = new google.maps.Marker({ map: resultsMap, position: results[0].geometry.location });
      //szerokosc i dlugosc geograficzna dla podanego adresu przypisana do elementu span w którym jest adres
      spanAddress.dataset.lat = results[0].geometry.location.lat();
      spanAddress.dataset.lng = results[0].geometry.location.lng();
      //szerokosc geograficzna dla podanego adresu
      // console.log(results[0].geometry.location.lat());
      //dlugosc geograficzna dla podanego adresu
      // console.log(results[0].geometry.location.lng());
    } else {
      alert('Geocode was not successful for the following reason: ' + status); } });
    }
