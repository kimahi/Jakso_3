var box = document.querySelector("body");
var pageX = document.getElementById("ylaVasX");
var pageY = document.getElementById("ylaVasY");
var keskiY = document.getElementById("kesY");
var keskiX = document.getElementById("kesX");
var layerOne = document.querySelector(".layer-1");
var layerTwo = document.querySelector(".layer-2");
var layerThree = document.querySelector(".layer-3");
var layerFour = document.querySelector(".layer-4");
var layerFive = document.querySelector(".layer-5");


function ylaVasHiiri(event) {
  pageX.innerText = event.pageX;
  pageY.innerText = event.pageY;
  var liikeX = event.pageX - Math.floor(document.body.clientWidth / 2);
  var liikeY = event.pageY - Math.floor(document.body.clientHeight / 2);
  keskiX.innerText = liikeX;
  keskiY.innerText = liikeY;
  layerOne.style.transform = 'translateX(' + -liikeX/100 + '%) translateY(' + -liikeY/100 + '%)';
  layerTwo.style.transform = 'translateX(' + -liikeX/20 + '%) translateY(' + -liikeY/20 + '%) rotate(30deg) scale(' + event.pageX/1000 +')';
  layerThree.style.transform = 'rotate(' + liikeX/-5 + 'deg) scale(' + liikeX/800 + ')';
  layerFour.style.transform = 'translateX(' + liikeX/100 + '%) translateY(' + liikeY/100 + '%) rotate(10deg)';
  layerFive.style.transform = 'rotate(' + liikeX/25 + 'deg)';
}

box.addEventListener("mousemove", ylaVasHiiri, false);

