// popup close and open
var modal = document.querySelector(".modal")
var modalOpenBtn = document.querySelector(".modal-button");
var modalCloseBtn = document.querySelector(".close-modal-button");

// modal popup open
modalOpenBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.add("modal--show")  
})

// modal popup close
modalCloseBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.remove("modal--show")  
})

// slider switches
var allSwitches = document.querySelectorAll(".slider-circle");
var firstSwitch = document.querySelector(".slider-circle-1");
var secondSwitch = document.querySelector(".slider-circle-2");
var thirdSwitch = document.querySelector(".slider-circle-3");
var allSliders = document.querySelectorAll(".slider");
var firstSlider = document.querySelector(".slider-1");
var secondSlider = document.querySelector(".slider-2");
var thirdSlider = document.querySelector(".slider-3");


var makeActive = function (switchNumber) {
    for (var i = 0; i < allSwitches.length; i++) {
        allSwitches[i].classList.remove("active");
        allSliders[i].classList.remove("active");
        console.log(allSwitches[i]);
        console.log(allSliders[i]);
    }
    allSwitches[switchNumber].classList.add("active");
    allSliders[switchNumber].classList.add("active");
}

firstSwitch.addEventListener("click", function () {
    makeActive(0);
})

secondSwitch.addEventListener("click", function () {
    makeActive(1);
})

thirdSwitch.addEventListener("click", function () {
    makeActive(2);
})






