/* popup close/open script */
var modal = document.querySelector(".modal");
var modalOpenBtn = document.querySelector(".modal-button");
var modalCloseBtn = document.querySelector(".close-modal-button");

// modal popup open
modalOpenBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.add("modal--show"); 
})

// modal popup close
modalCloseBtn.addEventListener("click", function(evt) {
    evt.preventDefault(); 
    modal.classList.remove("modal--show");
      
    
})

/* slider switches */
var switches = document.querySelectorAll(".slider-circle");
var sliders = document.querySelectorAll(".slider");

switches.forEach(function(elem) {
    elem.addEventListener("click", function() {
        for (var i = 0; i < switches.length; i++) {
            switches[i].classList.remove("active");
            sliders[i].classList.remove("active");
        }
        var switchesArray = Array.prototype.slice.call(switches);
        var sliderIndex = switchesArray.indexOf(elem);
        elem.classList.add("active");
        sliders[sliderIndex].classList.add("active");   
    });
});







