document.addEventListener('DOMContentLoaded', function(){
  console.log("dom");


// displaying inner menu "about"
  var about = document.querySelector(".mainMenu li:first-child");
  var aboutMenu = document.querySelector(".aboutMenu");

  about.addEventListener("mouseover", function() {
    aboutMenu.classList.toggle('displayed');
  })

// hiding description of chairs in presentation part
  var presentationPicDesc = document.querySelectorAll(".presentationPic h3");
  var presentationPic = document.querySelectorAll(".presentationPic");

  for (var i = 0; i < presentationPicDesc.length; i++) {
    presentationPic[i].addEventListener("mouseover", function() {
      var presentationPicDesc = this.querySelector("h3");
      presentationPicDesc.classList.add('hiding');
    })
    presentationPic[i].addEventListener("mouseout", function() {
      var presentationPicDesc = this.querySelector("h3");
      presentationPicDesc.classList.remove('hiding');
    })
  }

// slider using main pics
var mainPic = document.querySelectorAll(".mainPic li");
var leftArrow = document.querySelector(".arrowLeft");
var rightArrow = document.querySelector(".arrowRight");

var visiblePic = 0;
mainPic[visiblePic].classList.add("visible");

leftArrow.addEventListener("click", function() {
  mainPic[visiblePic].classList.remove("visible");
  visiblePic -= 1;

  if (visiblePic < 0) {
    visiblePic = mainPic.length-1;
  }
  mainPic[visiblePic].classList.add("visible");
  })

rightArrow.addEventListener("click", function() {
  mainPic[visiblePic].classList.remove("visible");
  visiblePic += 1;

  if (visiblePic > mainPic.length-1) {
    visiblePic = 0
  }
  mainPic[visiblePic].classList.add("visible");
  });
});
