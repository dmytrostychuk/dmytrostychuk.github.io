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

// $('burger-bth').on('click', function(e){
// 	e.preventDefault;
// 	$(this).toggleClass('burger-bth__active')
// });

// Меню бургер
const burgerBth = document.querySelector('.burger-bth');
const menuNav = document.querySelector('.menu__nav');
if (burgerBth) {
	burgerBth.addEventListener("click", function (e) {
		menuNav.classList.toggle('nav-active');
		burgerBth.classList.toggle('bth-active');
	});
}


$(document).ready(function(){
	$(".woman__card").slice(0, 5).show();
	$(".card-load").on("click", function(e){
	  e.preventDefault();
	  $(".woman__card:hidden").slice(0, 4).slideDown();
	  if($(".woman__card:hidden").length == 0) {
		$(".card-load").text("No Content").addClass("no-сontent");
	  }
	});
	
  })

  checked=false;
function checkedAll (form) {
	var aa= document.getElementById('form');
	 if (checked == false){
           checked = false
          }
	for (var i =0; i < aa.elements.length; i++) {
	 aa.elements[i].checked = checked;
	}
}



$("#slider-range").slider({
	range: true,
	min: 0,
	max: 300,
	values: [0, 300],
	step: 1,
	slide: function(event, ui) {
	  $("#rub-left").text(ui.values[0] + '$'); // текст левого span
	  $("#rub-right").text(ui.values[1] + '$'); // текст правого span
  
	  
	}
  });
  
  // задать начальный текст левого span
  $("#rub-left").text($("#slider-range").slider("values", 0) + '$');
  // задать начальный текст правого span
  $("#rub-right").text($("#slider-range").slider("values", 1) + '$');