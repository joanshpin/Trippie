document.addEventListener('DOMContentLoaded', function(){

  var planData = document.querySelector(".planData");

  var btns = planData.querySelectorAll(".planData button");

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var children = this.previousElementSibling.children;
      console.log(children);
      if (children[0].value.length > 0) {
        var spanVal = children[0].value;
        children[1].innerText = spanVal;
        children[0].style.display = "none";
        this.innerText = "change";
      }
      else {
        alert("please fill the blanks")
      }
    }); //closing addEventListener click
  } //closing loop for btns

  var btnAddMarker = document.querySelector(".addMarker");

  btnAddMarker.addEventListener("click", function() {
    var spanVal = document.querySelector(".planData .place h4 span").innerText;
    console.log(spanVal);
    var myApi = "AIzaSyAA6ikf7yth3jIMgE4dC22ZGcOmza-5Lww";
    var googleUrl = "https://maps.googleapis.com/maps/api/place/textsearch/json?query="+spanVal+"&key="+myApi;

    console.log(googleUrl);
    $.ajax({
        url: googleUrl,
        type: 'GET',
        dataType: 'jsonp',
        cache: false
      }).done(function(response){
        console.log(response);
        // addPlaceToMap();
      }).fail(function(error) {
        console.log("error23", error);
      });

      function addPlaceToMap() {

      }
  })



}); // closing DOM
//google maps api
function initMap() {
  var krakow = {lat: 50.061676, lng: 19.937770};
  var map = new google.maps.Map(document.getElementById('map'), { zoom: 4, center: krakow });
  var marker = new google.maps.Marker({ position: krakow, map: map });

}
