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

  //AUTHENTIFICATION
  const email = document.querySelector()

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  });


  // REACHING OUT TO NESTED FOLDERS IN FIREBASE DATABASE
  // var cities = app.database().ref('cities');
  var myPlaces = app.database().ref("places/myPlaces");
  // changing myPlaces to two different categories
  var myPlacesPlan = app.database().ref("places/myPlaces/planned");
  var myPlacesMemory = app.database().ref("places/myPlaces/memorised");



  // SUBMITTING TO FIREBASE DATABASE DATA TAKEN FROM PLAN SECTION
  var submitTripPlan = document.getElementById("submitTripPlan");
  // console.log(submitTripPlan, 'submitTripPlan');
  submitTripPlan.addEventListener("click", function() {
    // console.log(submitTripPlan, 'submitTripPlan')
    var titleVal = document.querySelector("#titleOfTrip h4 span").innerText;
    var addressVal = document.querySelector("#addressDiv h4 span").innerText;
    var dates1Val = Date.parse(document.querySelector("#dates1 h4 span").innerText);
    var dates2Val = Date.parse(document.querySelector("#dates2 h4 span").innerText);
    var transportVal = document.querySelector("#transport h4 span").innerText;
    var acoomodationVal = document.querySelector("#accomodation h4 span").innerText;
    var latVal = document.querySelector("#addressDiv h4 span").dataset.lat;
    var lngVal = document.querySelector("#addressDiv h4 span").dataset.lng;
    var urlVal = document.querySelector("#picture h4 span").innerText;

    let currentDate = new Date();
    let currentMilliseconds = currentDate.getTime();

    if (currentMilliseconds > dates1Val && currentMilliseconds > dates2Val) {
      var newPlace = myPlacesMemory.push({
        "name_of_trip": titleVal,
        "place": addressVal,
        "arrival date": dates1Val,
        "departure date": dates2Val,
        "transport": transportVal,
        "accomodation": acoomodationVal,
        "url": urlVal,
        "lat": latVal,
        "lng": lngVal
      });
    } else {
      var newPlace = myPlacesPlan.push({
        "name_of_trip": titleVal,
        "place": addressVal,
        "arrival date": dates1Val,
        "departure date": dates2Val,
        "transport": transportVal,
        "accomodation": acoomodationVal,
        "url": urlVal,
        "lat": latVal,
        "lng": lngVal
      });
    };

    // var newKey = (newPlace.key); //key to new object in database

  });


  //FOR EVERY CHANGE IN DATABASE
  myPlaces.on("value", function(data) {
    //obj is object containing objects with data (contains trips)
    let obj = data.val(); //contains all data from myPlaces, every object
    let objMemorised = data.val().memorised;
    let objPlanned = data.val().planned;


    //PLANS PART
    //new array with attributes from firebase
    var arrPlanned = [];
    //przypisanie wartosci z firebase do arraya
    for (var prop in objPlanned) {
      arrPlanned.push(objPlanned[prop]);
      }
      console.log(arrPlanned);

      arrPlanned.sort() //IT NEEDS TO SORT ARRAY BY ARRIVAL DATE aka objPlanned[prop][arrival date]
      console.log(arrPlanned);


      //adding background and title to lastTrips -data from array with memories
    for (let i = arrPlanned.length-1; i >= arrPlanned.length-6; i--) {
      let counter = arrPlanned.length -i;
      console.log(counter);
      let plannedTrip = document.querySelector("#plannedTrip"+counter);
      // console.log(plannedTrip);
      let plannedTripName = document.querySelector("#plannedTrip"+counter+" h3");
      // console.log(plannedTripName);
      console.log(arrPlanned[i]["name_of_trip"]);
      let plannedTripTitle = arrPlanned[i]["name_of_trip"];
      let plannedTripWhere = arrPlanned[i]["place"];
      let plannedTripWhen1 = arrPlanned[i]["arrival date"];
      let plannedTripWhen2 = arrPlanned[i]["departure date"];
      let plannedTripTransport = arrPlanned[i]["transport"];
      let plannedTripAccomodation = arrPlanned[i]["accomodation"];
      let plannedTripUrl = arrPlanned[i]["url"];

      //assigning dataset attributes to data known from firebase
      if (plannedTripUrl != "" ) {
        plannedTrip.style.backgroundImage = "url("+plannedTripUrl+")";
        plannedTripName.innerText = plannedTripTitle;
        plannedTrip.dataset.where = plannedTripWhere;
        plannedTrip.dataset.date1 = plannedTripWhen1;
        plannedTrip.dataset.date2 = plannedTripWhen2;
        plannedTrip.dataset.transport = plannedTripTransport;
        plannedTrip.dataset.accomodation = plannedTripAccomodation;
        plannedTrip.dataset.url = plannedTripUrl;
      }

    } //closing first iteration OF PLANS




    //MEMORIES PART
    //new array with attributes from firebase
    var arrMemorised = [];
    //przypisanie wartosci z firebase do arraya
    for (var prop in objMemorised) {
      arrMemorised.push(objMemorised[prop]);
      }

      //adding background and title to lastTrips -data from array with memories
    for (var i = arrMemorised.length-1; i >= arrMemorised.length-6; i--) {
      var counter = arrMemorised.length -i;
      var lastTrip = document.querySelector("#lastTrip"+counter);
      var lastTripName = document.querySelector("#lastTrip"+counter+" h3");
      var lastTripTitle = arrMemorised[i]["name_of_trip"];
      var lastTripWhere = arrMemorised[i]["place"];
      var lastTripWhen1 = arrMemorised[i]["arrival date"];
      var lastTripWhen2 = arrMemorised[i]["departure date"];
      var lastTripTransport = arrMemorised[i]["transport"];
      var lastTripAccomodation = arrMemorised[i]["accomodation"];
      var lastTripUrl = arrMemorised[i]["url"];

      //assigning dataset attributes to data known from firebase
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

    } //closing first iteration OF MEMORIES



    // ADDING PLACES TO GOOGLE MAP
    var places = [];
    for (var i = 0; i < arrMemorised.length; i++) {
      var lastTripTitle = arrMemorised[i]["name of trip"]
      var latVal = arrMemorised[i].lat;
      var lngVal = arrMemorised[i].lng;
      var trip = [lastTripTitle, latVal, lngVal, i];
      setMarker(trip); //calling to function adding markers
    }
  }, function (error) {
      console.log("Error: " + error.code);

  }); // closing on value firebase method


  //ADDING MARKERS TO MAP
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
