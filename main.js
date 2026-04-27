// ===== NAVBAR =====
let bars = document.querySelector(".bars");
let menu = document.querySelector(".menu");
let closeBtn = document.querySelector(".close-btn");

bars.addEventListener("click", function () {
  menu.classList.add("show-menu");
});

closeBtn.addEventListener("click", function () {
  menu.classList.remove("show-menu");
});

// ===== CAROUSEL =====
let carouselInner = document.querySelector(".carousel__inner");
let dots = document.querySelectorAll(".dot");
let current = 0;

// Slaydni chiqarish funksiyasi
function changeSlide() {
  carouselInner.style.transform = `translateX(-${current * 100}%)`;

  dots.forEach(function (dot) {
    dot.classList.remove("active");
  });

  dots[current].classList.add("active");
}

// Nuqta bosilganda
dots.forEach(function (dot, index) {
  dot.addEventListener("click", function () {
    current = index;
    changeSlide();
  });
});

// Avtomatik almashish
setInterval(function () {
  current++;

  if (current === dots.length) {
    current = 0;
  }

  changeSlide();
}, 3000);