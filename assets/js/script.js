document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".reveal");
  const homeSection = document.querySelector("#home");
  let lastScrollY = window.scrollY;

  // Funzione per gestire le animazioni basate sullo scroll
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      // Calcola la percentuale di visibilità della sezione
      const progress = Math.min(
        Math.max((scrollY + windowHeight - sectionTop) / sectionHeight, 0),
        1
      );

      // Aggiungi o rimuovi la classe .visible in base alla visibilità
      if (progress > 0 && progress <= 1) {
        section.classList.add("visible");
        section.classList.remove("closing");
      } else {
        section.classList.remove("visible");
        section.classList.add("closing");
      }
    });

    lastScrollY = scrollY; // Aggiorna la posizione dello scroll
  };

  // Controlla se la sezione "Home" è visibile al caricamento
  const initializeHome = () => {
    const homeTop = homeSection.offsetTop;
    const homeHeight = homeSection.offsetHeight;
    const windowHeight = window.innerHeight;

    // Aggiungi la classe .visible alla Home se è visibile al caricamento
    if (window.scrollY + windowHeight > homeTop && window.scrollY < homeTop + homeHeight) {
      homeSection.classList.add("visible");
    } else {
      homeSection.classList.remove("visible");
    }
  };

  // Aggiungi l'evento di scroll
  window.addEventListener("scroll", handleScroll);

  // Inizializza lo stato della sezione "Home"
  initializeHome();
});