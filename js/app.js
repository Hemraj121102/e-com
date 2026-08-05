let menu = document.querySelector(".menu");
let slider = document.querySelector(".slider");


function sliderOn(){
  return slider.classList.toggle("slider-on")

}

menu.addEventListener("click",sliderOn);