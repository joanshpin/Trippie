document.addEventListener('DOMContentLoaded', function(){

  // plan data section
  let planData = document.querySelector(".planData");
  //buttons in plan trip sections
  let btns = planData.querySelectorAll(".planData button");

//event listener for buttons in plan trip section
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
        }
        // if icon IS changed to pencil (when it has been changed before)
      } else {
        // if there is something in text input
        if (children[0].value.length > 0) {
          // value in text input
          let spanVal = children[0].value;
          // cleaning value in text input
          spanVal = "";
          // showing input again
          children[0].style.display = "block";
          //changing icon from pencil to check again
          this.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
        }
        // if there is nothing in the
        else {
          alert("please fill the blanks")
        }
      }
    }); //closing addEventListener click
  } //closing loop for btns


   submitTripPlan = document.getElementById("submitTripPlan");
  submitTripPlan.addEventListener("click", function() {
    submitTripPlan.innerText = "Dodano"
     vals = document.querySelectorAll(".planData span");
    for ( i = 0; i < vals.length; i++) {
      vals[i].innerText = " ";
    }
    // for ( j = 0; j < btns.length; j++) {
    //    children = this.previousElementSibling.children;
    //   children[0].style.display = "block";
    //
    // }
  });


   menuBars = document.querySelector(".fa-bars");
   mainMenu = document.querySelector(".mainMenu")
  menuBars.addEventListener("click", function() {
    mainMenu.classList.toggle("show");
  })


  // //adding data to big div in last trips
   lastTripSelected = document.querySelector(".lastTripSelected");
   lastTripDivs = document.querySelectorAll(".lastTrip");
  for ( i = 0; i < lastTripDivs.length; i++) {
    lastTripDivs[i].addEventListener("click", function () {
       thisTitle = this.querySelector("h3").innerText;
       thisWhere = this.dataset.where;
       thisWhen1 = this.dataset.date1;
       thisWhen2 = this.dataset.date2;
       thisTransport = this.dataset.transport;
       thisAccomodation = this.dataset.accomodation;
       thisUrl = this.dataset.url;

      lastTripSelected.innerHTML = "<div class='shadow'><h2>"+thisTitle+" </h2> <h3> Where: "+thisWhere+" </h3> <h3> Arrival: "+thisWhen1+" </h3> <h3> Departure: "+thisWhen2+" </h3> <h3> Transport: "+thisTransport+" </h3> <h3> Accomodation: "+thisAccomodation+" </h3></div>"

      lastTripSelected.style.backgroundImage = "url("+thisUrl+")";
      lastTripSelected.classList.remove("hidden");
      lastTripSelected.classList.add("shown");
      for ( i = 0; i < lastTripDivs.length; i++) {
        lastTripDivs[i].classList.add("hidden");
      }

    });
  }

  lastTripSelected.addEventListener("click", function() {
    if (lastTripSelected.classList.contains("shown")) {
      lastTripSelected.classList.remove("shown");
      lastTripSelected.classList.add("hidden");
      lastTripSelected.innerHTML = "";
    }
    for ( i = 0; i < lastTripDivs.length; i++) {
      lastTripDivs[i].classList.remove("hidden");
    }
  })





}); // closing DOM
