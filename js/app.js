document.addEventListener('DOMContentLoaded', function(){

  //BUTTONS IN PLANDATA SECTION EVENTLISTENER
  let planData = document.querySelector(".planData");
  let btns = planData.querySelectorAll(".planData button");

  for ( i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() { //nothing is in input

      let children = this.previousElementSibling.children;
      let sibling = this.parentElement.nextElementSibling;

      if (this.innerHTML != '<i class="fa fa-pencil" aria-hidden="true"></i>') { //icon NOT changed to pencil
        if (children[0].value.length > 0) { // if there is something in text input
          let spanVal = children[0].value; // value in text input
          children[1].innerText = spanVal; // assignment this value to span near input, which is empty before
          children[0].style.display = "none"; // hiding input
          this.innerHTML = '<i class="fa fa-pencil" aria-hidden="true"></i>'; // changing icon to pencil??????????
          sibling.classList.remove("msgShown"); //hiding error message
        }
        else { //input is empty
          sibling.classList.add("msgShown"); //error message
        };
      } else { // if icon IS changed to pencil (when it has been changed before)
        children[1].innerText = ""; // cleaning value in span input
        children[0].style.display = "block"; // showing input again
        this.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>'; //changing icon from pencil to check again
      };
    }); //closing addEventListener click for btns
  }; //closing loop for btns



  //SUBMITTING  ------------------ TO IMPROVE, NOW YOU CAN ONLY DO IT ONCE
  /* the idea is, to show message, the plan/memory is in, and show the first view, like after the start of app*/

  let submitTripPlan = document.getElementById("submitTripPlan");
  submitTripPlan.addEventListener("click", function() {
    submitTripPlan.innerText = "YOUR TRIP IS IN NOW!" //changing text in submit button
    let vals = document.querySelectorAll(".planData span"); //clering spans
    for ( i = 0; i < vals.length; i++) {
      vals[i].innerText = " ";
    };
  }); //closing submitTripPlan event



  //MENU BAR - showing and hiding by click ------------------ TO IMPROVE
  // IT SHOULD HIDE IF ONE CLICKS ANYWHERE ELSE
  let menuBars = document.querySelector(".fa-bars");
  let mainMenu = document.querySelector(".mainMenu");
  menuBars.addEventListener("click", function() {
    mainMenu.classList.toggle("show");
  });


  //ADDING DATA TO PLANNED TRIPS, to FIREBASE
  let plannedTripSelected = document.querySelector(".plannedTripSelected"); //choosing from former trips
  let plannedTripDivs = document.querySelectorAll(".plannedTrip"); //divs with class last trip, 6th of them

  function plannedTripsData() {
    for ( let i = 0; i < plannedTripDivs.length; i++) {
      let plannedTitle = plannedTripDivs[i].querySelector("h3").innerText;
      let plannedWhere = plannedTripDivs[i].dataset.where;
      let plannedWhen1 = plannedTripDivs[i].dataset.date1;
      let plannedWhen2 = plannedTripDivs[i].dataset.date2;
      let plannedTransport = plannedTripDivs[i].dataset.transport;
      let plannedAccomodation = plannedTripDivs[i].dataset.accomodation;
      let plannedUrl = plannedTripDivs[i].dataset.url;

      plannedTripDivs[i].style.backgroundImage = "url("+plannedUrl+")";

      plannedTripDivs[i].innerHTML = "<div class='shadow'><h2>"+plannedTitle+" </h2> <h3> Where: "+plannedWhere+" </h3> <h3> Arrival: "+ plannedWhen1+" </h3> <h3> Departure: "+ plannedWhen2 +" </h3> <h3> Transport: "+plannedTransport+" </h3> <h3> Accomodation: "+plannedAccomodation+" </h3></div>"

      console.log("<div class='shadow'><h2>"+plannedTitle+" </h2> <h3> Where: "+plannedWhere+" </h3> <h3> Arrival: "+ plannedWhen1+" </h3> <h3> Departure: "+ plannedWhen2 +" </h3> <h3> Transport: "+plannedTransport+" </h3> <h3> Accomodation: "+plannedAccomodation+" </h3></div>");

    };
  };
  //CALLING TO SET FUNCTION AFTER 2SECS - WHEN DATABASE IS LOADED
  setTimeout(function() { plannedTripsData(); }, 1500);



  //CAROUSEL FOR PLANNED TRIPS
function carousel() {
  var prev = document.querySelector("#prevPicture");
  var next = document.querySelector("#nextPicture");
  var picsList = document.querySelectorAll("ul.carousel li");

  var visiblePic = 0;
  picsList[visiblePic].classList.add("visible");

  prev.addEventListener("click", function() {
    picsList[visiblePic].classList.remove("visible");
    visiblePic -= 1;
    if (visiblePic < 0) {
      visiblePic = picsList.length-1; }
    picsList[visiblePic].classList.add("visible");
  })

  next.addEventListener("click", function() {
    picsList[visiblePic].classList.remove("visible");
    visiblePic += 1;
    if (visiblePic > picsList.length-1) {
      visiblePic = 0
    }
    picsList[visiblePic].classList.add("visible");
    });
  };
  carousel();

  //FUNCTION PARSING NUMBER INTO DATES
  setTimeout(function parseNumberToDate(number) {
    if (number > 0) {
      let numberParsedIntoDate = new Date(thisWhen1);
      console.log(numberParsedIntoDate);
      return numberParsedIntoDate;
    }
  }, 3000);


  // LAST TRIPS CLICK-SHOW INFO - EVENT

  //adding data to big div in last trips
  let lastTripSelected = document.querySelector(".lastTripSelected"); //choosing from former trips
  let lastTripDivs = document.querySelectorAll(".lastTrip"); //divs with class last trip, 6th of them
  for ( let i = 0; i < lastTripDivs.length; i++) {
    //get the informations about clicked one from attributes stored in object
    lastTripDivs[i].addEventListener("click", function () {
      let thisTitle = this.querySelector("h3").innerText;
      let thisWhere = this.dataset.where;
      let thisWhen1 = this.dataset.date1;
      let thisWhen2 = this.dataset.date2;
      console.log(parseDateFromNumber());
      let thisTransport = this.dataset.transport;
      let thisAccomodation = this.dataset.accomodation;
      let thisUrl = this.dataset.url;

      // add to html and display all the info about clicked trip
      lastTripSelected.innerHTML = "<div class='shadow'><h2>"+thisTitle+" </h2> <h3> Where: "+thisWhere+" </h3> <h3> Arrival: "+ thisWhen1 +" </h3> <h3> Departure: "+ parseDateFromNumber(thisWhen2) +" </h3> <h3> Transport: "+thisTransport+" </h3> <h3> Accomodation: "+thisAccomodation+" </h3></div>"
      // set the background from attribute
      lastTripSelected.style.backgroundImage = "url("+thisUrl+")";
      lastTripSelected.classList.remove("hidden");
      lastTripSelected.classList.add("shown");
      // hide all the other lastTripDivs
      for ( let i = 0; i < lastTripDivs.length; i++) {
        lastTripDivs[i].classList.add("hidden");
      };
    });
  };
  //click event on opened lastTrip to close it
  lastTripSelected.addEventListener("click", function() {
    if (lastTripSelected.classList.contains("shown")) {
      lastTripSelected.classList.remove("shown");
      lastTripSelected.classList.add("hidden");
      lastTripSelected.innerHTML = "";
    };
    //showing whole list of lastTripDivs
    for ( let i = 0; i < lastTripDivs.length; i++) {
      lastTripDivs[i].classList.remove("hidden");
    };
  }); //closing event lastTrip



  //GET TODAYS DATE - NOT USED ??YET??
  function getTime() {
    let now = new Date();
    let year = now.getYear();
    let month = now.getMonth();
    let day = now.getDay();
    let milliseconds = now.getTime();

    console.log(now); //Sun May 07 2017 20:58:22 GMT+0200 (CEST)
    console.log(year + " : "+ month + " :" + day); //YEAR 117
    console.log(now.getFullYear());
    console.log(now.getMonth());
    console.log(now.getDate()); //DAY
    console.log(now.getTime()); //MILLISECONDS

    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let newDate = new Date(Date.parse('2012-01-26T13:51:50.417-07:00'));
    // console.log(newDate.getFullYear() + " " + monthNames[newDate.getMonth()] + " " + newDate.getDate());

    // console.log(milliseconds);

    let myDate = new Date (1393123820009); //podaje date wynikajaca z milisekund
    console.log(myDate);

  }
  getTime();










}); // closing DOM
