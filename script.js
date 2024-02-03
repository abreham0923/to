let navbar = document.querySelector(".header .navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.add("active");
};
document.querySelector("#nav-close").onclick = () => {
  navbar.classList.remove("active");
};

let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.add("active");
};
document.querySelector("#close-search").onclick = () => {
  searchForm.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};

var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextE1: ".swiper-button-next",
    prevE1: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
function loader() {
  document.querySelector(".loader-container").classList.add("active");
}

function fadeOut(){
  setTimeout(loader, 4000)
}
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
document.addEventListener("DOMContentLoaded", function () {
  // Wait for the DOM to be fully loaded

  // Get the contact icon element by its id
  var contactBtn = document.getElementById("contact-btn");

  // Add a click event listener to the contact icon
  contactBtn.addEventListener("click", function () {
    // Implement the desired behavior when the contact icon is clicked
    // For example, you can open a contact form or navigate to a contact section
    alert("Contact icon clicked! Implement your contact logic here.");
  });
});
