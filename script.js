const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

// Scroll su click: centrato
navLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth", block: "center" });

    // Chiudi hamburger se aperto
    if (window.innerWidth <= 768) {
      document.querySelector("nav").classList.remove("open");
    }
  });
});

// Sezione più centrata = attiva
function updateActiveSection() {
  let minDistance = Infinity;
  let activeId = null;

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const distance = Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2);

    if (distance < minDistance) {
      minDistance = distance;
      activeId = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${activeId}`);
  });
}

// Animazione visibilità al volo
function handleAnimations() {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", () => {
  updateActiveSection();
  handleAnimations();
});

document.addEventListener("DOMContentLoaded", () => {
  updateActiveSection();
  handleAnimations();
});

// Hamburger
document.getElementById("menu-toggle")?.addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("open");
});