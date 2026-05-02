/* ================================================
   PORTFOLIO SHARED JAVASCRIPT
   Navigation, Animations, Utilities
   ================================================ */

(function() {
  'use strict';

  // ─── Nav Scroll Effect ───
  const nav = document.querySelector('.nav');
  if (nav) {
    const handleScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // ─── Mobile Menu ───
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileMenu = document.querySelector('.nav__mobile');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ─── Active Nav Link ───
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link, .nav__mobile .nav__link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && (href === currentPage || (currentPage === '' && href === 'index.html'))) {
      link.classList.add('active');
    }
  });

  // ─── Scroll Reveal ───
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(el => observer.observe(el));
  }

  // ─── Counter Animation ───
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count, 10);
          const suffix = el.dataset.suffix || '';
          const duration = 1800;
          const start = performance.now();

          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(eased * target) + suffix;
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(el => counterObserver.observe(el));
  }

  // ─── Smooth Page Transition ───
  document.querySelectorAll('a[href$=".html"]:not([target])').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && !href.startsWith('#') && !href.startsWith('mailto') && !href.startsWith('tel')) {
        // Simple fade — no delay needed
      }
    });
  });

  // ─── Form Handling ───
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('[type="submit"]');
      btn.textContent = 'Sending…';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'Message Sent ✓';
        btn.style.background = 'var(--accent-teal)';
        contactForm.reset();
      }, 1500);
    });
  }

  // ─── Cursor Glow (desktop only) ───
  if (window.matchMedia('(pointer: fine)').matches) {
    const glow = document.createElement('div');
    glow.style.cssText = `
      position:fixed;pointer-events:none;z-index:9999;
      width:300px;height:300px;border-radius:50%;
      background:radial-gradient(circle,rgba(28,199,190,0.06) 0%,transparent 70%);
      transform:translate(-50%,-50%);
      transition:left 0.4s ease,top 0.4s ease;
      left:-999px;top:-999px;
    `;
    document.body.appendChild(glow);
    document.addEventListener('mousemove', (e) => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    });
  }

})();

// ─── Expertise Bars (About Page) ───
const expertiseBars = document.querySelectorAll('.expertise-item__fill');
if (expertiseBars.length > 0) {
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const targetWidth = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
          bar.style.transition = 'width 1.2s cubic-bezier(0.4,0,0.2,1)';
          bar.style.width = targetWidth;
        }, 100);
        barObserver.unobserve(bar);
      }
    });
  }, { threshold: 0.3 });
  expertiseBars.forEach(bar => barObserver.observe(bar));
}

// ─── Testimonial Carousel ───
(function () {
  const carousel = document.querySelector('.testi-carousel');
  if (!carousel) return;

  const cards    = carousel.querySelectorAll('.testi-card');
  const dots     = document.querySelectorAll('.testi-dot');
  const btnPrev  = document.getElementById('testi-prev');
  const btnNext  = document.getElementById('testi-next');
  const total    = cards.length;

  // ── Drag-to-scroll (mouse) ──
  let isDown = false, startX = 0, scrollLeft = 0;

  carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    carousel.classList.add('is-dragging');
    startX     = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });
  carousel.addEventListener('mouseleave', () => { isDown = false; carousel.classList.remove('is-dragging'); });
  carousel.addEventListener('mouseup',    () => { isDown = false; carousel.classList.remove('is-dragging'); });
  carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x    = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1.5;
    carousel.scrollLeft = scrollLeft - walk;
  });

  // ── Active dot sync on scroll ──
  function getActiveIndex() {
    if (!cards.length) return 0;
    const cardW = cards[0].getBoundingClientRect().width + 24; // gap approx 1.5rem
    return Math.round(carousel.scrollLeft / cardW);
  }

  function syncDots(idx) {
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));
  }

  carousel.addEventListener('scroll', () => syncDots(getActiveIndex()), { passive: true });

  // ── Dot click navigation ──
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      if (!cards[i]) return;
      carousel.scrollTo({ left: cards[i].offsetLeft, behavior: 'smooth' });
    });
  });

  // ── Arrow buttons ──
  function scrollByOne(dir) {
    const idx = getActiveIndex();
    const next = Math.max(0, Math.min(total - 1, idx + dir));
    if (!cards[next]) return;
    carousel.scrollTo({ left: cards[next].offsetLeft, behavior: 'smooth' });
  }

  if (btnPrev) btnPrev.addEventListener('click', () => scrollByOne(-1));
  if (btnNext) btnNext.addEventListener('click', () => scrollByOne(1));

  // Init
  syncDots(0);
})();

