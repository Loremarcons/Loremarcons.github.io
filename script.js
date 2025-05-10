const sections = document.querySelectorAll(".card");
const navLinks = document.querySelectorAll("nav a");
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");

let manualScrollTarget = null;

menuToggle?.addEventListener("click", () => {
  nav.classList.toggle("open");
});

navLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").replace("#", "");
    const target = document.getElementById(targetId);
    manualScrollTarget = targetId;

    // Scroll centrato
    target.scrollIntoView({ behavior: "smooth", block: "center" });

    // Chiudi menu mobile
    if (window.innerWidth <= 768) {
      nav.classList.remove("open");
    }

    // Imposta attivo temporaneo
    navLinks.forEach(link => link.classList.remove("active"));
    this.classList.add("active");

    // Dopo scroll, reset
    setTimeout(() => {
      manualScrollTarget = null;
    }, 1000); // 1 sec per scroll completato
  });
});

function onScroll() {
  if (manualScrollTarget) return; // Evita conflitto scroll-click

  let current = "";

  sections.forEach((section) => {
    const top = section.offsetTop - 160; // tolleranza per sticky nav
    const height = section.clientHeight;

    if (window.scrollY >= top && window.scrollY < top + height) {
      current = section.id;
    }

    if (window.scrollY + window.innerHeight > top + 100) {
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