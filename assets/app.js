"use strict";
function openNav() {
  document.querySelector(".closeNav").classList.toggle("start-0");
  document.querySelector("body").classList.toggle("overflow_hide");
  document.querySelector(".menu").classList.toggle("cross");
}

function navWorking() {
  if (window.innerWidth <= 992) {
    document.querySelector("body").classList.remove("overflow_hide");
    document.querySelector(".closeNav").classList.toggle("start-0");
    document.querySelector(".menu").classList.toggle("cross");
  }
}
// preLoader//
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", function () {
    setTimeout(function () {
      let loadingOverlay = document.getElementById("loadingOverlay");
      loadingOverlay.style.display = "none";
      document.querySelector("body").classList.remove("overflow_hidden");
    }, 1000);
  });
});
// back to top button //
let mybutton = document.getElementById("myBtn");
function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("scroll", () => {
  if (window.innerWidth < 992 && window.scrollY > 1050) {
    mybutton.setAttribute("style", "display: flex;");
  } else if (window.innerWidth >= 992 && window.scrollY > 400) {
    mybutton.setAttribute("style", "display: flex;");
  } else {
    mybutton.setAttribute("style", "display: none;");
  }
});

// --------//

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let currentDate = new Date(2024, 5, 29);
function updateDateDisplay() {
  const monthName = months[currentDate.getMonth()];
  const day = currentDate.getDate();
  document.getElementById("dateDisplay").textContent = monthName + " " + day;
}
document.getElementById("upArrow").addEventListener("click", function () {
  currentDate.setDate(currentDate.getDate() + 1);
  updateDateDisplay();
});
document.getElementById("downArrow").addEventListener("click", function () {
  currentDate.setDate(currentDate.getDate() - 1);
  updateDateDisplay();
});

updateDateDisplay();

//
$(".responsive").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  prevArrow: false,
  nextArrow: false,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },

    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
//
