const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

// Observer per visibilità e attivazione animazioni
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5 // almeno metà della sezione visibile
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute("id");

    if (entry.isIntersecting) {
      entry.target.classList.add("visible");

      navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
      });
    }
  });
}, observerOptions);

// Attiva l’observer per tutte le sezioni
sections.forEach(section => {
  observer.observe(section);
});

// Scroll centrato su click
navLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").replace("#", "");
    const target = document.getElementById(targetId);
    target.scrollIntoView({ behavior: "smooth", block: "center" });

    // Chiudi hamburger se attivo
    if (window.innerWidth <= 768) {
      document.querySelector("nav").classList.remove("open");
    }
  });
});

// Hamburger toggle
document.getElementById("menu-toggle")?.addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("open");
});