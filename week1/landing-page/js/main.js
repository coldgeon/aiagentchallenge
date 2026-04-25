/* =============================================
   Lumio Landing — main.js
   ============================================= */

(function () {
  'use strict';

  const nav = document.getElementById('nav');
  const navMenu = document.getElementById('navMenu');
  const navToggle = document.getElementById('navToggle');

  // Sticky nav style on scroll
  const onScroll = () => {
    if (!nav) return;
    if (window.scrollY > 16) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('is-open');
      navToggle.classList.toggle('is-open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    navMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('is-open');
        navToggle.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Reveal on scroll
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  // Hero subtle parallax (desktop only, respects reduced-motion)
  const heroVisual = document.querySelector('.hero__visual');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (heroVisual && !reduceMotion && window.matchMedia('(min-width: 901px)').matches) {
    const heroSection = document.querySelector('.hero');
    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      heroVisual.style.transform = `translate(${x * 12}px, ${y * 12}px)`;
    });
    heroSection.addEventListener('mouseleave', () => {
      heroVisual.style.transform = '';
    });
  }

  // Pre-order form (demo only — no backend)
  const ctaForm = document.getElementById('ctaForm');
  const ctaSuccess = document.getElementById('ctaSuccess');
  if (ctaForm) {
    ctaForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = ctaForm.querySelector('input[type="email"]');
      if (!email || !email.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        email && email.focus();
        return;
      }
      ctaForm.style.display = 'none';
      if (ctaSuccess) ctaSuccess.hidden = false;
    });
  }

  // Mode chip cycle (cosmetic detail in hero)
  const chipModes = [
    { label: 'Focus Warm 3000K', dot: '#E8A547' },
    { label: 'Daylight 5000K', dot: '#F5E6C5' },
    { label: 'Sunset 2700K', dot: '#D4843A' },
    { label: 'Reading 3500K', dot: '#E8B86A' }
  ];
  const chip = document.querySelector('.hero__chip');
  const chipDot = document.querySelector('.hero__chip-dot');
  if (chip && chipDot) {
    let idx = 0;
    const strong = chip.querySelector('strong');
    setInterval(() => {
      idx = (idx + 1) % chipModes.length;
      const m = chipModes[idx];
      chip.style.opacity = '0';
      setTimeout(() => {
        if (strong) strong.textContent = m.label;
        chipDot.style.background = m.dot;
        chipDot.style.boxShadow = `0 0 8px ${m.dot}`;
        chip.style.opacity = '1';
      }, 250);
    }, 3500);
    chip.style.transition = 'opacity 0.4s ease';
  }

  // Active nav link highlighting
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav__link');
  if ('IntersectionObserver' in window && sections.length) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach((link) => {
              const href = link.getAttribute('href');
              if (href === `#${id}`) link.classList.add('is-active');
              else link.classList.remove('is-active');
            });
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((s) => navObserver.observe(s));
  }
})();
