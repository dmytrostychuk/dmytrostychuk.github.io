function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});

// Меню бургер
const burgerBth = document.querySelector('.burger-bth');
const menuNav = document.querySelector('.menu');
if (burgerBth) {
	burgerBth.addEventListener("click", function (e) {
		menuNav.classList.toggle('menu-active');
		burgerBth.classList.toggle('bth-active');
	});
};



$('.slider').slick({
	arrows: false,
	slidesToScroll: 1,
	dots: true,
	infinite: true,
	autoplay: true,
	speed: 300,
  });