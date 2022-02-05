// Меню бургер
const iconMenu = document.querySelector('.burger-bth');
const menuBody = document.querySelector('.nav');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('lock');
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('active');
	});
}

// Модальне вікно
let isInit = false;
function openModal(){
	document.body.classList.toggle('lock');
 	let elModal  = document.querySelector('.modal');
    if(isInit==false) {
    isInit = true;
    document.querySelector('.modal__close').addEventListener('click',
        function(event) {
			document.body.classList.toggle('lock');
           event.preventDefault();
           elModal.classList.toggle('active');
        }
    );
  }
  elModal.classList.toggle('active');
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
	
	  function onTabClick(event, index) {
		  event.preventDefault();
  
		tabsEl[activeIndex].classList.remove('special__block--animation');
	  mainImageEl[activeIndex].classList.remove('card--active');
  
	  activeIndex = index;
  
	  tabsEl[index].classList.add('special__block--animation');
	  mainImageEl[index].classList.add('card--active');
	  }
	
	  Array.from(tabsEl).forEach((element, index) => element.addEventListener('click', event => onTabClick(event, index)));
  
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

const swiper = new Swiper('.slider-first__swiper', {

	// Навігаційні стрілки
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},

	// Відступ між слайдами
	spaceBetween: 28,

	//Кількість слайдів для показу
	slidesPerView: 3,

	autoplay: {
		delay: 2000,
		stopOnLastSlide: true,
		disableOnInteraction: false
	},

	spead: 700,

	breakpoints: {
		320: {
			slidesPerView: 1,

			// Безкінечність
			loop: true,
		},

		768: {
			slidesPerView: 1.3,
			autoplay:false,

		},

		1200: {
			slidesPerView: 2.3,
			autoplay:false,

		},

		1472: {
			slidesPerView: 3,
			autoplay:false,

		}
	}
  });

  const swiper2 = new Swiper('.slider-second__swiper',{

	// Навігаційні стрілки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  },

	// Кількість слайдів для показу
	slidesPerView: 4,

	// Відступ між слайдами
	spaceBetween: 25,

	autoplay: {
		delay: 1500,
		stopOnLastSlide: true,
		disableOnInteraction: false
	},

	breakpoints: {
		320: {
			slidesPerView: 1,

			// Безкінечність
			loop: true,
		},

		768: {
			slidesPerView: 2,
			autoplay:false,

		},

		1200: {
			slidesPerView: 3,
			autoplay:false,

		},

		1472: {
			slidesPerView: 4,
			autoplay:false,

		}
	}
  });

  const swiper3 = new Swiper('.slider-third',{

	// Навігаційні стрілки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  },

	// Кількість слайдів для показу
	slidesPerView: 1,

	autoplay: {
		delay: 1500,
		stopOnLastSlide: true,
		disableOnInteraction: false
	},

	breakpoints: {
		320: {
			slidesPerView: 1,

			// Безкінечність
			loop: true,
		},

		768: {
			autoplay:false,

		},

		1200: {
			autoplay:false,

		},

		1472: {
			autoplay:false,

		}
	}
	
	// Безкінечність
	// loop: true,

	// autoplay: {
	// 	delay: 3000,
	// 	stopOnLastSlide: true,
	// 	disableOnInteraction: false
	// },

	// spead: 700,
  });










