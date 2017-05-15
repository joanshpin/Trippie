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



  //FOR EVERY CHANGE IN DATABASE
  myPlaces.on("value", function(data) {
    //obj is object containing objects with data (contains trips)
    let obj = data.val(); //contains all data from myPlaces, every object
    let objMemorised = data.val().memorised;
    let objPlanned = data.val().planned;
  }





}); //closing DOM
