document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // solo la prima volta
      }
    });
  }, {
    threshold: 0.2,
  });

  document.querySelectorAll(".reveal").forEach(section => {
    observer.observe(section);
  });
});
