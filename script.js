const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");
const nav = document.querySelector("nav");
const floatingBtn = document.getElementById("floating-menu-btn");

let lastExpanded = null;

// Collapse all
function collapseAll() {
  sections.forEach(s => {
    s.classList.add("collapsed");
    s.classList.remove("expanded");
  });
}

// Expand target
function expandSection(section) {
  collapseAll();
  section.classList.remove("collapsed");
  section.classList.add("expanded");
  lastExpanded = section;
}

// On scroll
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;

  // Floating button logic
  if (scrollTop > 150) {
    floatingBtn.style.display = "block";
  } else {
    floatingBtn.style.display = "none";
  }

  // Sezione visibile = attiva
  let activeId = null;
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
});

// Menu click = scroll + espandi sezione
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth", block: "center" });
    expandSection(target);
  });
});

// Sezione click = toggle espansione
sections.forEach(section => {
  section.addEventListener("click", () => {
    if (!section.classList.contains("expanded")) {
      expandSection(section);
    }
  });
});

// Floating button = scrolla su nav
floatingBtn.addEventListener("click", () => {
  nav.scrollIntoView({ behavior: "smooth" });
});