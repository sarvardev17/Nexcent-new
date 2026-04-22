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