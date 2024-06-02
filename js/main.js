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

/// aside side menu
let aside = document.querySelector("aside");
smNav.querySelector("#aside-icon").addEventListener("click", (e) => {
  e.preventDefault();
  aside.classList.add("show");
});

aside.querySelector(".close-icon span").addEventListener("click", () => {
  aside.classList.remove("show");
});

aside.addEventListener("click", (e) => {
  if (e.target == aside) {
    aside.classList.remove("show");
  }
});

/// main menu
let sideMainMenu = document.querySelector(".side-main-menu");
smNav.querySelector("#side-main-menu-icon").addEventListener("click", (e) => {
  e.preventDefault();
  sideMainMenu.classList.add("show");
});

sideMainMenu.querySelector(".close-icon span").addEventListener("click", () => {
  sideMainMenu.classList.remove("show");
});

sideMainMenu.addEventListener("click", (e) => {
  if (e.target == sideMainMenu) {
    sideMainMenu.classList.remove("show");
  }
});

/// main menu dropdown at side main menu link
let coll = document.getElementsByClassName("collapsible");
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

// cart
let cartControl = document.querySelector(".cart-control");
smNav.querySelector("#cart").addEventListener("click",(e)=> {
  e.preventDefault();
  cartControl.classList.add("show");
})
cartControl.querySelector(".close-icon span").addEventListener("click", () => {
  cartControl.classList.remove("show");
});
cartControl.addEventListener("click", (e) => {
  if (e.target == cartControl) {
    cartControl.classList.remove("show");
  }
});
let products = cartControl.querySelector(".cart-control .products");
let allBuyIconButtons = document.querySelectorAll(".buy-icon");
let item ;
let imgSrc ;
let productTitle ;
let productPrice ;
allBuyIconButtons.forEach(btn => {
  btn.addEventListener("click", (e)=> {
    e.preventDefault();
    if(btn.parentElement.parentElement.classList.contains("item")) {
      item = btn.parentElement.parentElement;
      productTitle = item.querySelector(".name").textContent;
    } else if(btn.parentElement.parentElement.parentElement.classList.contains("item")){
      item = btn.parentElement.parentElement.parentElement;   
      productTitle = item.querySelector(".product-title").textContent;
    }
    imgSrc = item.querySelector("img").getAttribute("src");
    productPrice = item.querySelector(".price .new").textContent;

    addProduct();

  })
});

function addProduct () {
  products.innerHTML += `
  <div class="product">
  <div class="image">
    <img src="${imgSrc}" alt="" />
  </div>
  <div class="info">
    <h4 class="title">${productTitle}</h4>
    <span class="price">${productPrice}</span>
    <div class="controls">
      <span class="plus"><i class="fa-solid fa-plus"></i></span>
      <span class="count">1</span>
      <span class="minus"><i class="fa-solid fa-minus"></i></span>
    </div>
    <span class="remove-product-icon">
      <i class="fa-solid fa-trash-can"></i>
    </span>
  </div>
  </div>
`;
}

