let modal = document.querySelector(".modal");
let modalOpenBtn = document.querySelector(".modal-button");
let modalCloseBtn = document.querySelector(".close-modal-button");

let allSwitches = document.querySelectorAll(".slider-circle");
let allSliders = document.querySelectorAll(".slider");


// modal popup open/close

if (modal) {
    modalOpenBtn.addEventListener("click", function (evt) {
        evt.preventDefault();
        modal.classList.add("modal--show");
    })
    modalCloseBtn.addEventListener("click", function (evt) {
        evt.preventDefault();
        modal.classList.remove("modal--show");
    })
}

/* slider switches */

let toggleSliders = function (allSwitches, switchElement, allSliders) {
    switchElement.addEventListener("click", function (evt) {
        evt.preventDefault();
        for (let i = 0; i < allSwitches.length; i++) {
            allSwitches[i].classList.remove("active");
            allSliders[i].classList.remove("active");
        }
        let switchesArray = Array.prototype.slice.call(allSwitches);
        let sliderIndex = switchesArray.indexOf(switchElement);
        switchElement.classList.add("active");
        allSliders[sliderIndex].classList.add("active");
    });
}

let launchToggleSliders = function (switchesList, slidersList) {
    for (let i = 0; i < switchesList.length; i++) {
        toggleSliders(switchesList, switchesList[i], slidersList);
    }
}

launchToggleSliders(allSwitches, allSliders);





