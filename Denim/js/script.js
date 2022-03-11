

// Меню бургер
const burgerBth = document.querySelector('.burger-bth');
const menuNav = document.querySelector('.menu__container');
if (burgerBth) {
	burgerBth.addEventListener("click", function (e) {
		menuNav.classList.toggle('nav-active');
		burgerBth.classList.toggle('bth-active');
	});
}

$(document).ready(function(){
	$(".product__items").slice(0, 4).show();
	$(".view__all").on("click", function(e){
	  e.preventDefault();
	  $(".product__items:hidden").slice(0, 4).slideDown();
	  if($(".product__items:hidden").length == 0) {
		$(".view__all").text("No Content").addClass("no-сontent");
	  }
	});
	
  })

	$(document).ready(function(){
		$(".product__items--bootom").slice(0, 4).show();
		$(".view__all--bottom").on("click", function(e){
			e.preventDefault();
			$(".product__items--bootom:hidden").slice(0, 4).slideDown();
			if($(".product__items--bootom:hidden").length == 0) {
			$(".view__all--bottom").text("No Content").addClass("no-сontent");
			}
		});
		
		})


$(document).ready(function(){
	$(".woman__card").slice(0, 8).show();
	$(".card-load").on("click", function(e){
	  e.preventDefault();
	  $(".woman__card:hidden").slice(0, 2).slideDown();
	  if($(".woman__card:hidden").length == 0) {
		$(".card-load").text("No Content").addClass("no-сontent");
	  }
	});
	
  })

  


//   Form-------------
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

  //slider
  $(document).ready(function(){
	$('.slider').slick({
		responsive:[
			{
				breakpoint: 768,
				settings:{
					arrows: true
				}
				
			},{
				breakpoint: 1366,
				settings:{
					arrows: false
				},
				
			}
		]
		
	});
})

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

  //   -------------Form

