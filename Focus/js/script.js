// Меню бургер
const iconMenu = document.querySelector(".burger-bth");
const menuBody = document.querySelector(".nav");

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("lock");
    iconMenu.classList.toggle("active");
    menuBody.classList.toggle("active");
  });
}

const navContainer = document.querySelector(".nav__container");

navContainer.addEventListener("click", function (event) {
  if (
    navContainer.parentElement.classList.contains("active") &&
    event.target == navContainer
  ) {
    iconMenu.classList.remove("active");
    menuBody.classList.remove("active");
    document.body.classList.remove("lock");
  }
});

// Модальне вікно
let isInit = false;

function openModal() {
  let elModal = document.querySelector(".modal");
  if (menuBody.classList.contains("active")) {
    document.body.classList.toggle("lock");
    iconMenu.classList.toggle("active");
    menuBody.classList.toggle("active");
  }

  document.body.classList.toggle("lock");

  if (isInit == false) {
    isInit = true;

    document
      .querySelector(".modal__close")
      .addEventListener("click", function (event) {
        event.preventDefault();
        document.body.classList.toggle("lock");
        elModal.classList.toggle("active");
      });
  }

  elModal.classList.toggle("active");
}

function initializeSpecials() {
  const tabsEl = document.getElementsByClassName("special__list")[0].children;
  const mainImageEl =
    document.getElementsByClassName("special__container")[0].children;

  tabsEl[0].classList.add("special__block--animation");
  mainImageEl[0].classList.add("card--active");

  let activeIndex = 0;

  function onTabClick(event, index) {
    event.preventDefault();

    tabsEl[activeIndex].classList.remove("special__block--animation");
    mainImageEl[activeIndex].classList.remove("card--active");

    activeIndex = index;

    tabsEl[index].classList.add("special__block--animation");
    mainImageEl[index].classList.add("card--active");
  }

  Array.from(tabsEl).forEach((element, index) =>
    element.addEventListener("click", (event) => onTabClick(event, index))
  );

  setInterval(() => {
    tabsEl[activeIndex].classList.remove("special__block--animation");
    mainImageEl[activeIndex].classList.remove("card--active");

    if (activeIndex + 1 < tabsEl.length) activeIndex += 1;
    else activeIndex = 0;

    tabsEl[activeIndex].classList.add("special__block--animation");
    mainImageEl[activeIndex].classList.add("card--active");
  }, 5000);
}

initializeSpecials();

const swiper = new Swiper(".slider-a__swiper", {
  // Навігаційні стрілки
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Відступ між слайдами
  spaceBetween: 28,

  //Кількість слайдів для показу
  slidesPerView: 3,

  breakpoints: {
    320: {
      slidesPerView: 1,
      scrollbar: {
        el: ".slider-a__scrollbar",
        draggable: true,
      },
    },

    768: {
      slidesPerView: 1.3,
      autoplay: false,
    },

    1200: {
      slidesPerView: 2.3,
      autoplay: false,
    },

    1472: {
      slidesPerView: 3,
      autoplay: false,
    },
  },
});

const swiper2 = new Swiper(".slider-b__swiper", {
  // Навігаційні стрілки
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Кількість слайдів для показу
  slidesPerView: 4,

  // Відступ між слайдами
  spaceBetween: 25,

  breakpoints: {
    320: {
      slidesPerView: 1,

      scrollbar: {
        el: ".slider-b__scrollbar",
        draggable: true,
      },
    },

    768: {
      slidesPerView: 2,
      autoplay: false,
    },

    1200: {
      slidesPerView: 3,
      autoplay: false,
    },

    1472: {
      slidesPerView: 4,
      autoplay: false,
    },
  },
});

const swiper3 = new Swiper(".slider-c", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,

  breakpoints: {
    320: {
      slidesPerView: 1,
      scrollbar: {
        el: ".slider-c__scrollbar",
        draggable: true,
      },
    },

    768: {
      autoplay: false,
    },

    1200: {
      autoplay: false,
    },

    1472: {
      autoplay: false,
    },
  },
});
