document.addEventListener('DOMContentLoaded', function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAMcorI0jK0zwGIrI5L5QcJNq_-cmhM6fc",
    authDomain: "trippie-35bc7.firebaseapp.com",
    databaseURL: "https://trippie-35bc7.firebaseio.com",
    projectId: "trippie-35bc7",
    storageBucket: "trippie-35bc7.appspot.com",
    messagingSenderId: "73522637552"
  };

  //call to firebase
  var app = firebase.initializeApp(config);
  // var cities = app.database().ref('cities');
  var myPlaces = app.database().ref("places/myPlaces");


  var submitTripPlan = document.getElementById("submitTripPlan");
  // console.log(submitTripPlan, 'submitTripPlan');
  submitTripPlan.addEventListener("click", function() {
    // console.log(submitTripPlan, 'submitTripPlan')
    var titleVal = document.querySelector("#titleOfTrip h4 span").innerText;
    var addressVal = document.querySelector("#addressDiv h4 span").innerText;
    var dates1Val = document.querySelector("#dates1 h4 span").innerText;
    var dates2Val = document.querySelector("#dates2 h4 span").innerText;
    var transportVal = document.querySelector("#transport h4 span").innerText;
    var acoomodationVal = document.querySelector("#accomodation h4 span").innerText;
    var latVal = document.querySelector("#addressDiv h4 span").dataset.lat;
    var lngVal = document.querySelector("#addressDiv h4 span").dataset.lng;
    var urlVal = document.querySelector("#picture h4 span").innerText;

    var newPlace = myPlaces.push({
      "name of trip": titleVal,
      "place": addressVal,
      "arrival date": dates1Val,
      "departure date": dates2Val,
      "transport": transportVal,
      "accomodation": acoomodationVal,
      "url": urlVal,
      "lat": latVal,
      "lng": lngVal
    });
    var newKey = (newPlace.key);

  });

  myPlaces.on("value", function(data) {
    var obj = data.val();
    var counter = 0;
    var counter1 = obj[prop];
    var arr = [];

    //przypisanie wartoscie z firebase do arraya
    for (var prop in obj) {
      arr.push(obj[prop]); }

      //adding background and title to lastTrips
    for (var i = arr.length-1; i >= arr.length-6; i--) {
      var counter = arr.length -i;
      var lastTrip = document.querySelector("#lastTrip"+counter);
      var lastTripName = document.querySelector("#lastTrip"+counter+" h3");
      var lastTripTitle = arr[i]["name of trip"];
      var lastTripWhere = arr[i]["place"];
      var lastTripWhen1 = arr[i]["arrival date"];
      var lastTripWhen2 = arr[i]["departure date"];
      var lastTripTransport = arr[i]["transport"];
      var lastTripAccomodation = arr[i]["accomodation"];
      var lastTripUrl = arr[i]["url"];

      if (lastTripUrl != "" ) {
        lastTrip.style.backgroundImage = "url("+lastTripUrl+")";
        lastTripName.innerText = lastTripTitle;
        lastTrip.dataset.where = lastTripWhere;
        lastTrip.dataset.date1 = lastTripWhen1;
        lastTrip.dataset.date2 = lastTripWhen2;
        lastTrip.dataset.transport = lastTripTransport;
        lastTrip.dataset.accomodation = lastTripAccomodation;
        lastTrip.dataset.url = lastTripUrl;
      }

    } //closing first iteration

    var places = [];
    for (var i = 0; i < arr.length; i++) {
      var lastTripTitle = arr[i]["name of trip"]
      var latVal = arr[i].lat;
      var lngVal = arr[i].lng;
      var trip = [lastTripTitle, latVal, lngVal, i];
      setMarker(trip);
    }

  }, function (error) {
      console.log("Error: " + error.code);
  });


  function setMarker(trip) {
    var beach = trip;
    var marker = new google.maps.Marker({
      position: {lat: parseFloat(beach[1]), lng: parseFloat(beach[2])},
      map: map,
      title: beach[0],
      zIndex: beach[3]
    });
  }


}); //closing DOM
