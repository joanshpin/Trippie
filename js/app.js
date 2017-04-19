document.addEventListener('DOMContentLoaded', function(){

   planData = document.querySelector(".planData");
   btns = planData.querySelectorAll(".planData button");

  for ( i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      //nie ma jeszcze nic wpisanego
       children = this.previousElementSibling.children;
       sibling = this.parentElement.nextElementSibling;
      //  console.log(sibling);

      if (this.innerHTML != '<i class="fa fa-pencil" aria-hidden="true"></i>') {
        if (children[0].value.length > 0) {
           spanVal = children[0].value;
          children[1].innerText = spanVal;
          children[0].style.display = "none";
          this.innerHTML = '<i class="fa fa-pencil" aria-hidden="true"></i>';
          sibling.classList.remove("msgShown");
        }
        else {
          // console.log(sibling);
          sibling.classList.add("msgShown");
          // alert("please fill the blanks")
        }
        //ikonka już jest zmieniona na edytowanie
      } else {
        if (children[0].value.length > 0) {
           spanVal = children[0].value;
          spanVal = " ";
          children[0].style.display = "block";
          this.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
        }
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
