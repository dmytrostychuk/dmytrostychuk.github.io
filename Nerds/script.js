var write = document.querySelector(".message-button");
var popup = document.querySelector(".modal-window");
var close = document.querySelector(".modal-close");


write.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add('modal-show');
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});

var mob = document.querySelector(".btn-1");
var mobile = document.querySelector(".slogan-container");
var comp = document.querySelector(".btn-2");
var computer = document.querySelector(".slogan-2");
var tab = document.querySelector(".btn-3");

mob.addEventListener("clicl", function (evt) {
    evt.preventDefault();
    mobile.classList.add("slogan-1");
});

comp.addEventListener("clicl", function (evt) {
    evt.preventDefault();
    mobile.classList.add("slogan-2");
});
