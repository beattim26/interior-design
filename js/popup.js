var link = document.querySelector(".button-menu");
var popup = document.querySelector(".main-menu");
var close = document.querySelector(".btn-close");
var form = document.querySelector(".feedback-form");
var login = form.querySelector("[name=login]");
var email = form.querySelector("[name=email]");
var submit = form.querySelector(".button");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("menu-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27){
    evt.preventDefault();
    
    if (popup.classList.contains("menu-show")) {
      popup.classList.remove("menu-show");
    }
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("menu-show");
});

form.addEventListener("submit", function (evt) {
  if(!login.value || !email.value) {
    evt.preventDefault();
    submit.classList.remove("modal-error");
    submit.offsetWidth = popup.offsetWidth;
    submit.classList.add("modal-error");
  } else {
    localStorage.getItem("login", login.value);
  }
});

window.onload = function(){
    document.getElementById("image-about").onclick = function(){
        this.style.display = "none";
        document.getElementById("video-about").style.display = "block";
    }
}