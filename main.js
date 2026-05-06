document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelector(".bars");
  const menu = document.querySelector(".top-middle");
  const closeBtn = document.querySelector(".close");

  bars.addEventListener("click", () => {
    menu.classList.add("show-menu");
  });

  closeBtn.addEventListener("click", () => {
    menu.classList.remove("show-menu");
  });

  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !bars.contains(e.target)) {
      menu.classList.remove("show-menu");
    }
  });
});
let carouselInner = document.querySelector(".carousel__inner")
let dots = document.querySelectorAll(".dot")
let current = 0

function changeSlide() {
  carouselInner.style.transform = `translateX(-${current * 100}%)`

  dots.forEach(function (dot) {
    dot.classList.remove("active")
  })

  dots[current].classList.add("active");
}

dots.forEach(function (dot, index){
  dot.addEventListener("click", function () {
    current = index
    changeSlide()
  })
})

setInterval(function (){
  current++;
  
  if(current === dots.length){
    current = 0;
  }
  changeSlide()
}, 3000) ;

// ===== MODAL =====
let signupBtn = document.querySelector(".signup");
let modal = document.querySelector("#modal");
let modalClose = document.querySelector("#modalClose");

signupbtn.addEventListener("click", function (e) {
  e.preventDefault();
  modal.classList.add("show-modal");
});

modalClose.addEventListener("click", function () {
  modal.classList.remove("show-modal");
});

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.classList.remove("show-modal");
  }
});