document.addEventListener('DOMContentLoaded', function(){

  var planData = document.querySelector(".planData");

  var btnPlace = planData.querySelector(".place button");
  var btnDates = planData.querySelector(".dates button");
  var btnTransport = planData.querySelector(".transport button");
  var btnAccomodation = planData.querySelector(".accomodation button");

  var inpPlace = planData.querySelector(".place input");
  var inpDates = planData.querySelector(".dates input");
  var inpTransport = planData.querySelector(".transport input");
  var inpAccomodation = planData.querySelector(".accomodation input");

  btnPlace.addEventListener("click", function() {
    // console.log("click");
    if (inpPlace.length > 0) {
      console.log("CLICK");
    }
  }); //closing addEventListener click

}); // closing DOM
