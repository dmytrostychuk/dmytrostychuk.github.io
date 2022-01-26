// Меню бургер
const iconMenu = document.querySelector('.burger-bth');
const menuBody = document.querySelector('.nav');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}


/*
Specials initialization
1) написати анімацію в цсс таймлайн
2) знайти елементи в джс в змінну
3) видалити модифікатор в теперішнього елемента і добавити наступному (анімацію)
4) приховати теперішній головний елемент (картинка) і показати наступний
5) це все має бути в сет таймауті на 5сек
*/

function initializeSpecials() {
	const tabsEl = document.getElementsByClassName('special__list')[0].children;
	const mainImageEl = document.getElementsByClassName('special__container')[0].children;

	tabsEl[0].classList.add('special__block--animation');
	mainImageEl[0].classList.add('card--active');

	let activeIndex = 0;

	setInterval(() => {
		tabsEl[activeIndex].classList.remove('special__block--animation');
		mainImageEl[activeIndex].classList.remove('card--active');

		if (activeIndex + 1 < tabsEl.length) activeIndex += 1;
		else activeIndex = 0;


		tabsEl[activeIndex].classList.add('special__block--animation');
		mainImageEl[activeIndex].classList.add('card--active');
	}, 5000);
};

initializeSpecials();

const swiper = new Swiper('.raiting__swiper', {
	// Optional parameters
  
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},

	//Кількість слайдів для показу
	slidesPerView: 3,

	// autoplay: {
	// 	delay: 1000,
	// 	stopOnLastSlide: true,
	// 	disableOnInteraction: false
	// },

	// spead: 800,

	// loop: true,
  
  });

  const swiper2 = new Swiper('.popular__swiper',{
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  },
  
	  //Кількість слайдів для показу
	  slidesPerView: 4,

	  spaceBetween: 10,

  });