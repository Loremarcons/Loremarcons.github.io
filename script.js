const sections = document.querySelectorAll(".card");
const navLinks = document.querySelectorAll("nav a");
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

navLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth", block: "center" });

    // Chiudi menu mobile
    if (window.innerWidth <= 768) {
      nav.classList.remove("open");
    }
  });
});

function onScroll() {
  let current = "";

  sections.forEach((section) => {
    const top = section.offsetTop - 130;
    const height = section.clientHeight;

    if (pageYOffset >= top && pageYOffset < top + height) {
      current = section.id;
    }

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