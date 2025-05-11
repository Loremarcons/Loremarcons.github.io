document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".reveal");
  const homeSection = document.querySelector("#home");

  // Funzione per gestire le animazioni basate sullo scroll
  const handleScroll = () => {
    const windowHeight = window.innerHeight;

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < windowHeight * 0.8) {
        section.classList.add("visible");
      } else {
        section.classList.remove("visible");
      }
    });
  };

  // Aggiungi l'evento di scroll
  window.addEventListener("scroll", handleScroll);

  // Inizializza lo stato delle sezioni
  handleScroll();
});