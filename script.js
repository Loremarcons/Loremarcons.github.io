const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");
const nav = document.querySelector("nav");
const floatingBtn = document.getElementById("floating-menu-btn");

// Scroll + attiva link + visibilità
window.addEventListener("scroll", () => {
  let activeId = null;
  let menuOut = nav.getBoundingClientRect().bottom < 0;

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();

    if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
      activeId = section.id;
    }

    if (rect.top < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${activeId}`);
  });

  floatingBtn.style.display = menuOut ? "block" : "none";
});

// Scroll + espansione sezione
navLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth", block: "center" });

    sections.forEach(sec => sec.classList.remove("expanded"));
    target.classList.add("expanded");

    navLinks.forEach(link => link.classList.remove("active"));
    this.classList.add("active");
  });
});

// Menu toggle
floatingBtn.addEventListener("click", () => {
  nav.scrollIntoView({ behavior: "smooth" });
});