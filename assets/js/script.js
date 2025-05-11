document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".reveal");
  const root = document.documentElement; // Riferimento al root CSS

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

  // Funzione per aggiornare la variabile CSS con la larghezza dello schermo
  const updateMaxWidth = () => {
    const screenWidth = window.innerWidth;
    root.style.setProperty("--max-width", `${screenWidth}px`);
  };

  // Aggiungi l'evento di scroll
  window.addEventListener("scroll", handleScroll);

  // Aggiungi l'evento di resize per aggiornare la larghezza
  window.addEventListener("resize", updateMaxWidth);

  // Inizializza lo stato delle sezioni e la larghezza
  handleScroll();
  updateMaxWidth();
});