// Animações de scroll, header dinâmico e navegação suave

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".topbar");
  const navLinks = document.querySelectorAll('a[href^="#"]');
  const reveals = document.querySelectorAll(".reveal");

  // Header dinâmico ao rolar
  const handleScrollHeader = () => {
    if (!header) return;
    const scrolled = window.scrollY > 32;
    header.classList.toggle("topbar--scrolled", scrolled);
  };

  handleScrollHeader();
  window.addEventListener("scroll", handleScrollHeader, { passive: true });

  // Navegação suave (reforçando o scroll-behavior do CSS)
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // Animação de entrada das seções
  if ("IntersectionObserver" in window && reveals.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.classList.add("is-visible");
            observer.unobserve(el);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.15,
      }
    );

    reveals.forEach((el) => {
      const delay = el.dataset.delay;
      if (delay) {
        el.style.transitionDelay = `${parseInt(delay, 10)}ms`;
      }
      observer.observe(el);
    });
  } else {
    // Fallback: se não tiver IntersectionObserver, mostra tudo
    reveals.forEach((el) => el.classList.add("is-visible"));
  }
});

