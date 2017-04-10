document.addEventListener('DOMContentLoaded', function(){

  var planData = document.querySelector(".planData");

  var btns = planData.querySelectorAll("button");

  // var btnPlace = planData.querySelector(".place button");
  // var btnDates = planData.querySelector(".dates button");
  // var btnTransport = planData.querySelector(".transport button");
  // var btnAccomodation = planData.querySelector(".accomodation button");
  //
  // var inpPlace = planData.querySelector(".place input");
  // var inpDates = planData.querySelector(".dates input");
  // var inpTransport = planData.querySelector(".transport input");
  // var inpAccomodation = planData.querySelector(".accomodation input");

  for (var i = 0; i < btns.length; i++) {
    // var sibling = node.previousElementSibling;
    btns[i].addEventListener("click", function() {
      if (this.previousElementSibling.children[0].value.length > 0) {
        spanVal = this.previousElementSibling.children[0].value;
        this.previousElementSibling.children[1].innerText = spanVal;
        this.previousElementSibling.children[0].style.display = "none";
        this.innerText = "change";
      }
      else {
        alert("please fill the blanks")
      }
    }); //closing addEventListener click
  }


}); // closing DOM
