/* ============================================================
   HILLARY UCHE ANTHONY — PORTFOLIO
   main.js — All Functionality
   ============================================================ */

(function () {
  'use strict';

  /* ── THEME: Apply before paint to prevent flash ──────────── */
  const htmlEl = document.documentElement;

  /* ── THEME TOGGLE ──────────────────────────────────────────── */
  const themeToggle = document.getElementById('themeToggle');

  function applyTheme(theme) {
    htmlEl.setAttribute('data-theme', theme);
    localStorage.setItem('hua-theme', theme);
  }

  // Load saved preference
  const savedTheme = localStorage.getItem('hua-theme') || 'dark';
  applyTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = htmlEl.getAttribute('data-theme');
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  /* ── MOBILE NAV ────────────────────────────────────────────── */
  const hamburger  = document.getElementById('hamburger');
  const mobileNav  = document.getElementById('mobileNav');
  const mobileClose = document.getElementById('mobileClose');

  function openMobileNav() {
    if (mobileNav) {
      mobileNav.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileNav() {
    if (mobileNav) {
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (hamburger)   hamburger.addEventListener('click', openMobileNav);
  if (mobileClose) mobileClose.addEventListener('click', closeMobileNav);

  document.querySelectorAll('.nav-mobile a').forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  // Close on backdrop click
  if (mobileNav) {
    mobileNav.addEventListener('click', (e) => {
      if (e.target === mobileNav) closeMobileNav();
    });
  }

  /* ── ACTIVE NAV LINK ───────────────────────────────────────── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkPage = href.split('/').pop();
    if (
      linkPage === currentPage ||
      (currentPage === '' && linkPage === 'index.html')
    ) {
      link.classList.add('active');
    }
  });

  /* ── NAV SCROLL EFFECT ─────────────────────────────────────── */
  const nav = document.querySelector('.nav');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (nav) nav.classList.toggle('scrolled', y > 50);
    lastScroll = y;
  }, { passive: true });

  /* ── BACK TO TOP ───────────────────────────────────────────── */
  const backTop = document.getElementById('backTop');

  window.addEventListener('scroll', () => {
    if (backTop) backTop.classList.toggle('visible', window.scrollY > 320);
  }, { passive: true });

  if (backTop) {
    backTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── SCROLL REVEAL ─────────────────────────────────────────── */
  const revealEls = document.querySelectorAll('.reveal');

  if (revealEls.length && 'IntersectionObserver' in window) {
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -36px 0px' });

    revealEls.forEach(el => revealObs.observe(el));
  } else {
    // Fallback for browsers without IntersectionObserver
    revealEls.forEach(el => el.classList.add('visible'));
  }

  /* ── SKILL BARS ────────────────────────────────────────────── */
  const skillBars = document.querySelectorAll('.skill-bar-fill');

  if (skillBars.length && 'IntersectionObserver' in window) {
    const barObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const target = bar.dataset.width || '80';
          // Small delay so the animation is noticeable
          setTimeout(() => {
            bar.style.width = target + '%';
          }, 200);
          barObs.unobserve(bar);
        }
      });
    }, { threshold: 0.4 });

    skillBars.forEach(bar => barObs.observe(bar));
  }

  /* ── COUNTER ANIMATION ─────────────────────────────────────── */
  const counters = document.querySelectorAll('.stat-number[data-target]');

  if (counters.length && 'IntersectionObserver' in window) {
    const countObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el     = entry.target;
          const target = parseInt(el.dataset.target, 10);
          const suffix = el.dataset.suffix || '';
          const dur    = 1800;
          const start  = performance.now();

          function tick(now) {
            const elapsed  = now - start;
            const progress = Math.min(elapsed / dur, 1);
            const eased    = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(eased * target) + suffix;
            if (progress < 1) requestAnimationFrame(tick);
          }

          requestAnimationFrame(tick);
          countObs.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(el => countObs.observe(el));
  }

  /* ── TYPEWRITER (hero only) ────────────────────────────────── */
  const typeEl = document.getElementById('typewriter');

  if (typeEl) {
    const phrases = [
      'The Internet Has Enough Websites. I Build Experiences.',
      'Premium Code. Zero Compromises.',
      'Where Precision Meets Prestige.',
      'Your Vision, Engineered to Elite.'
    ];

    let pIdx  = 0;
    let cIdx  = 0;
    let deleting = false;
    let speed    = 55;

    function type() {
      const current = phrases[pIdx];

      if (!deleting) {
        typeEl.textContent = current.slice(0, cIdx + 1);
        cIdx++;
        speed = 55;
        if (cIdx === current.length) {
          deleting = true;
          speed = 2800;
        }
      } else {
        typeEl.textContent = current.slice(0, cIdx - 1);
        cIdx--;
        speed = 28;
        if (cIdx === 0) {
          deleting = false;
          pIdx  = (pIdx + 1) % phrases.length;
          speed = 450;
        }
      }

      setTimeout(type, speed);
    }

    // Delay start until hero animations settle
    setTimeout(type, 2000);
  }

  /* ── CONTACT FORM → WHATSAPP ───────────────────────────────── */
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name    = (document.getElementById('fname')?.value    || '').trim();
      const email   = (document.getElementById('femail')?.value   || '').trim();
      const subject = (document.getElementById('fsubject')?.value || '').trim();
      const message = (document.getElementById('fmessage')?.value || '').trim();

      if (!name || !message) {
        alert('Please fill in your name and message.');
        return;
      }

      const body = [
        `Hello Hillary! 👋`,
        ``,
        `*Name:* ${name}`,
        `*Email:* ${email || 'Not provided'}`,
        `*Subject:* ${subject || 'General Enquiry'}`,
        ``,
        `*Message:*`,
        message
      ].join('\n');

      const encoded = encodeURIComponent(body);
      const waUrl   = `https://wa.me/2348076550226?text=${encoded}`;

      window.open(waUrl, '_blank', 'noopener,noreferrer');
    });
  }

  /* ── SMOOTH HOVER TILT on project cards (subtle) ──────────── */
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect  = card.getBoundingClientRect();
      const x     = (e.clientX - rect.left) / rect.width  - 0.5;
      const y     = (e.clientY - rect.top)  / rect.height - 0.5;
      card.style.transform = `translateY(-7px) rotateX(${(-y * 4).toFixed(1)}deg) rotateY(${(x * 4).toFixed(1)}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

})();
