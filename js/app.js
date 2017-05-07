document.addEventListener('DOMContentLoaded', function(){


  //BUTTONS IN PLANDATA SECTION EVENTLISTENER

  let planData = document.querySelector(".planData");
  let btns = planData.querySelectorAll(".planData button");

  for ( i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      //nothing is in input
       let children = this.previousElementSibling.children;
       let sibling = this.parentElement.nextElementSibling;

      //if icon NOT changed to pencil yet
      if (this.innerHTML != '<i class="fa fa-pencil" aria-hidden="true"></i>') {
        // if there is something in text input
        if (children[0].value.length > 0) {
          // value in text input
          let spanVal = children[0].value;
          // assignment this value to span near input, which is empty before
          children[1].innerText = spanVal;
          // hiding input
          children[0].style.display = "none";
          // changing icon to pencil??????????
          this.innerHTML = '<i class="fa fa-pencil" aria-hidden="true"></i>';
          //hiding error message
          sibling.classList.remove("msgShown");
        }
        // if input is empty
        else {
          // show error message
          sibling.classList.add("msgShown");
        };
        // if icon IS changed to pencil (when it has been changed before)
      } else {
        // cleaning value in span input
        children[1].innerText = "";
        // showing input again
        children[0].style.display = "block";
        //changing icon from pencil to check again
        this.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
      };
    }); //closing addEventListener click for btns
  }; //closing loop for btns



  //SUBMITTING  ------------------ TO IMPROVE, NOW YOU CAN ONLY DO IT ONCE

  let submitTripPlan = document.getElementById("submitTripPlan");
  submitTripPlan.addEventListener("click", function() {
    submitTripPlan.innerText = "Your plan is added" //changing text in submit button
    let vals = document.querySelectorAll(".planData span"); //clering spans
    for ( i = 0; i < vals.length; i++) {
      vals[i].innerText = " ";
    };
  }); //closing submitTripPlan event



  //MENU BAR - showing and hiding by click ------------------ TO IMPROVE
  let menuBars = document.querySelector(".fa-bars");
  let mainMenu = document.querySelector(".mainMenu");
  menuBars.addEventListener("click", function() {
    mainMenu.classList.toggle("show");
  });



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
      let thisTransport = this.dataset.transport;
      let thisAccomodation = this.dataset.accomodation;
      let thisUrl = this.dataset.url;
      // add to html and display all the info about clicked trip
      lastTripSelected.innerHTML = "<div class='shadow'><h2>"+thisTitle+" </h2> <h3> Where: "+thisWhere+" </h3> <h3> Arrival: "+thisWhen1+" </h3> <h3> Departure: "+thisWhen2+" </h3> <h3> Transport: "+thisTransport+" </h3> <h3> Accomodation: "+thisAccomodation+" </h3></div>"
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



  //GET TODAYS DATE
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
    console.log(newDate.getFullYear() + " " + monthNames[newDate.getMonth()] + " " + newDate.getDate());

    console.log(milliseconds);

    let myDate = new Date (1393123820009); //podaje date wynikajaca z milisekund
    console.log(myDate);

  }
  getTime();



}); // closing DOM
