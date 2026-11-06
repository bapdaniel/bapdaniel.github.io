/* ===========================================
   Daniel Baptista — Portfolio
   main.js — JavaScript mínimo e explicável
   =========================================== */

(function () {
  'use strict';

  // ——— Ano do footer ———
  const yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ——— Mobile nav toggle ———
  const toggle = document.querySelector('.nav-toggle');
  const menu   = document.getElementById('nav-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      const isOpen = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Fechar menu ao clicar em um link
    menu.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', function (e) {
      if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Fechar com Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  // ——— Nav link ativo por scroll (IntersectionObserver) ———
  const sections   = document.querySelectorAll('section[id]');
  const navLinks   = document.querySelectorAll('.nav-link');

  if (sections.length && navLinks.length) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(function (link) {
              const href = link.getAttribute('href');
              if (href === '#' + id) {
                link.setAttribute('aria-current', 'page');
              } else {
                link.removeAttribute('aria-current');
              }
            });
          }
        });
      },
      { rootMargin: '-50% 0px -45% 0px', threshold: 0 }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

})();
