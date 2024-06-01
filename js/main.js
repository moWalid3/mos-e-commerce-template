//
//
"use strict";

const swiper = new Swiper(".swiper", {
  // speed: 400,
  spaceBetween: 0,
  centeredSlides: true,
  loop: "true",
  autoplay: {
    delay: 100000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
});

const groupsSwiper = new Swiper(".groups-swiper", {
  // slidesPerView: 3,

  // spaceBetween: 10,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});
const offerSwiper = new Swiper(".offer-swiper", {
  // slidesPerView: 3,

  // spaceBetween: 10,
  autoplay: {
    delay: 10000,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
        spaceBetween: 30,
    },
    // 576: {
    //   slidesPerView: 2,
    //   spaceBetween: 30,
    // },
    // 992: {
    //   slidesPerView: 2,
    //   spaceBetween: 30,
    // },
    // 1024: {
    //   slidesPerView: 3,
    //   spaceBetween: 30,
    // },
    // 1200: {
    //   slidesPerView: 4,
    //   spaceBetween: 0,
    // },
  },
  scrollbar: {
    el: ".offer-swiper-scrollbar",
    draggable: true,
  },
});

// comment
let sideCategory = document.querySelectorAll(
  "aside .aside-category .item .head"
);
sideCategory.forEach((ele) => {
  ele.addEventListener("click", () => {
    sideCategory.forEach((e) => {
      if (e != ele) {
        e.parentElement.classList.remove("show");
      }
    });
    ele.parentElement.classList.toggle("show");
  });
});


//////
let smNav = document.querySelector(".sm-nav");
let aside = document.querySelector("aside");
let sideMainMenu = document.querySelector(".side-main-menu");

/// aside side menu
smNav.querySelector("#aside-icon").addEventListener("click",(e)=> {
  e.preventDefault();
  aside.classList.add("show");
})

aside.querySelector(".close-icon span").addEventListener("click", ()=> {
  aside.classList.remove("show");
})

aside.addEventListener("click", (e)=> {
  if(e.target == aside) {
    aside.classList.remove("show")
  }
})

/// main menu
smNav.querySelector("#side-main-menu-icon").addEventListener("click",(e)=> {
  e.preventDefault();
  console.log("object");
  sideMainMenu.classList.add("show");
})

sideMainMenu.querySelector(".close-icon span").addEventListener("click", ()=> {
  sideMainMenu.classList.remove("show");
})

sideMainMenu.addEventListener("click", (e)=> {
  if(e.target == sideMainMenu) {
    sideMainMenu.classList.remove("show")
  }
})

/// main menu dropdown
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
