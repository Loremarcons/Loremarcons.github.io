const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");
const nav = document.querySelector("nav");
const floatingBtn = document.getElementById("floating-menu-btn");

function collapseAll() {
  sections.forEach(s => {
    s.classList.remove("expanded");
    s.classList.add("collapsed");
  });
}

function expandSection(section) {
  collapseAll();
  section.classList.remove("collapsed");
  section.classList.add("expanded");
}

// Sezione cliccata
sections.forEach(section => {
  section.addEventListener("click", () => {
    if (!section.classList.contains("expanded")) {
      expandSection(section);
    }
  });
});

// Menu click
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    expandSection(target);
    target.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});

// Scroll detection
window.addEventListener("scroll", () => {
  const navBottom = nav.getBoundingClientRect().bottom;
  if (navBottom <= 0) {
    floatingBtn.style.display = "block";
  } else {
    floatingBtn.style.display = "none";
  }

  // Attiva link corretto
  let activeId = "";
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
      activeId = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${activeId}`);
  });
});

// Bottone +
floatingBtn.addEventListener("click", () => {
  nav.scrollIntoView({ behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", () => {
  collapseAll();
});
