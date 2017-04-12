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
  var cities = app.database().ref('cities');
  // cities.on("value", function(data) {
  //     console.log(data.val());
  // }, function (error) {
  //     console.log("Error: " + error.code);
  // });

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
    var latVal = document.querySelector("#titleOfTrip h4 span").dataset.lat;
    var lngVal = document.querySelector("#titleOfTrip h4 span").dataset.lng;
    var urlVal = document.querySelector("#picture h4 span").innerText;

    var myPlaces = app.database().ref("places/myPlaces");
    myPlaces.push({
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

  })

}); //closing DOM
