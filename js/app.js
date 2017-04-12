document.addEventListener('DOMContentLoaded', function(){

  var planData = document.querySelector(".planData");
  var btns = planData.querySelectorAll(".planData button");

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var children = this.previousElementSibling.children;
      // console.log(children);
      if (children[0].value.length > 0) {
        var spanVal = children[0].value;
        children[1].innerText = spanVal;
        children[0].style.display = "none";
        this.innerHTML = '<i class="fa fa-pencil" aria-hidden="true"></i>';
      }
      else {
        alert("please fill the blanks")
      }
    }); //closing addEventListener click
  } //closing loop for btns

  // var btnAddMarker = document.querySelector(".addMarker");
  // btnAddMarker.addEventListener("click", function() {
  //   var spanVal = document.querySelector(".planData .place h4 span").innerText;
  //   console.log(spanVal);
  //   var myApi = "AIzaSyAA6ikf7yth3jIMgE4dC22ZGcOmza-5Lww";
  //   var googleUrl = "https://maps.googleapis.com/maps/api/place/textsearch/json?query="+spanVal+"&key="+myApi;
  //   });


}); // closing DOM
