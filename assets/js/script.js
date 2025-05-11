document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".reveal");
  const isMobile = window.innerWidth <= 768;

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const threshold = isMobile ? 0.9 : 0.8;

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      
      if (sectionTop < windowHeight * threshold) {
        section.classList.add("visible");
      } else {
        section.classList.remove("visible");
      }
    });
  };

  // Ottimizza lo scroll su mobile
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Gestisci il resize della finestra
  window.addEventListener("resize", () => {
    isMobile = window.innerWidth <= 768;
  });

  handleScroll();
});