const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");
const nav = document.querySelector("nav");
const floatingBtn = document.getElementById("floating-menu-btn");

let lastScrollY = window.scrollY;

// Scroll + attiva link + mostra btn
window.addEventListener("scroll", () => {
  let activeId = null;
  const navOut = nav.getBoundingClientRect().bottom < 0;

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const mid = window.innerHeight / 2;

    if (rect.top < mid && rect.bottom > mid) {
      activeId = section.id;
    }

    if (rect.top < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${activeId}`);
  });

  floatingBtn.style.display = navOut ? "block" : "none";
});

// Click menu link: scroll + espandi
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth", block: "center" });

    sections.forEach(s => s.classList.remove("expanded"));
    target.classList.add("expanded");
  });
});

// Click sezione = toggle expand
sections.forEach(section => {
  section.addEventListener("click", () => {
    section.classList.toggle("expanded");
  });
});

// Floating menu = torna a nav
floatingBtn.addEventListener("click", () => {
  nav.scrollIntoView({ behavior: "smooth" });
});