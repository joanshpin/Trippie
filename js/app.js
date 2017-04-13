document.addEventListener('DOMContentLoaded', function(){

  var planData = document.querySelector(".planData");
  var btns = planData.querySelectorAll(".planData button");

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      //nie ma jeszcze nic wpisanego
      var children = this.previousElementSibling.children;

      if (this.innerHTML != '<i class="fa fa-pencil" aria-hidden="true"></i>') {

        if (children[0].value.length > 0) {
          var spanVal = children[0].value;
          children[1].innerText = spanVal;
          children[0].style.display = "none";
          this.innerHTML = '<i class="fa fa-pencil" aria-hidden="true"></i>';
        }
        else {
          alert("please fill the blanks")
        }
        //ikonka już jest zmieniona na edytowanie
      } else {
        if (children[0].value.length > 0) {
          var spanVal = children[0].value;
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


  var submitTripPlan = document.getElementById("submitTripPlan");
  submitTripPlan.addEventListener("click", function() {
    submitTripPlan.innerText = "Dodano"

    var vals = document.querySelectorAll(".planData span");

    for (var i = 0; i < vals.length; i++) {
      console.log(vals[i]);
      console.log(vals[i].innerText);
      vals[i].innerText = " ";
    }
  });


  var menuBars = document.querySelector(".fa-bars");
  var mainMenu = document.querySelector(".mainMenu")
  menuBars.addEventListener("click", function() {
    mainMenu.classList.toggle("show");
  })

}); // closing DOM
