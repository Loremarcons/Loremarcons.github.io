// script.js aggiornato
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

function onScroll() {
  let current = "";

  sections.forEach((section) => {
    const top = section.offsetTop - 100;
    const height = section.clientHeight;

    // Active link in navbar
    if (pageYOffset >= top && pageYOffset < top + height) {
      current = section.id;
    }

    // Show animation
    if (pageYOffset + window.innerHeight > top + 100) {
      section.classList.add("visible");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", onScroll);
document.addEventListener("DOMContentLoaded", onScroll);
