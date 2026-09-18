/* Your JS here. */
const header = document.querySelector("header");

function resizeNavbar() {
  if (window.scrollY > 50) {
    header.classList.add("small");
  }

  if (window.scrollY <= 50) {
    header.classList.remove("small");
  }
}

window.addEventListener("scroll", resizeNavbar);



const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll(".navbar_class a");

window.addEventListener("scroll", function () {
  let currentSelected = "";
  sections.forEach(function (section) {
    let uppart = section.offsetTop;
    let mouseat = window.scrollY;
    if (mouseat >= uppart - 100) {
      currentSelected = section.id;
    }
  });

  let footer = window.innerHeight + window.scrollY;
  let length = document.body.offsetHeight;

  if (footer >= length - 5) {
    currentSelected = "contact";
  }

  navLinks.forEach(function (link) {

    link.classList.remove("active");

    let target = link.getAttribute("href");

    if (target === "#" + currentSelected) {
      link.classList.add("active");
    }

  });

});



const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const left = document.querySelector(".left_button");
const right = document.querySelector(".right_button");
let number = 0;
function changeSlide(num) {
  slides.forEach(function(slide) {
    slide.classList.remove("active");
  });

    dots.forEach(function(dot) {
    dot.classList.remove("active");
  });
  slides[num].classList.add("active");
  dots[num].classList.add("active");
}

right.addEventListener("click", function() {
  number = number + 1;
  if (number >= slides.length) {
    number = 0;
  }
    changeSlide(number);
});

left.addEventListener("click", function() {

  number = number - 1;

  if (number < 0) {
    number = slides.length - 1;
  }
  changeSlide(number);
});

dots.forEach(function(dot, num) {
  dot.addEventListener("click", function() {
    number = num;
    changeSlide(number);
  });

});



const dayButtons = document.querySelectorAll(".day_button");
const closeButtons = document.querySelectorAll(".close_button");
dayButtons.forEach(function(button) {

  button.addEventListener("click", function() {

     let day = button.dataset.day;
    let modal = document.getElementById(day);

    if (modal) {
      modal.classList.add("active");
    }
  });
});

closeButtons.forEach(function(button) {

  button.addEventListener("click", function() {
    let modal = button.closest(".modal");
    if (modal) {
      modal.classList.remove("active");
    }
  });
});







