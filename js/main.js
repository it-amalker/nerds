var modal = document.querySelector(".modal")
var modalOpenBtn = document.querySelector(".modal-button");
var modalCloseBtn = document.querySelector(".close-modal-button");

modalOpenBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.add("modal--show")  
})

modalCloseBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.remove("modal--show")  
})