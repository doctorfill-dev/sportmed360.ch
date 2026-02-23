/* SportMed360 — Test Proposition v2 · script.js */
'use strict';

/* ── Footer year ── */
var yearEl = document.getElementById('footer-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ── Header: transparent over hero → opaque on scroll ── */
(function () {
  var header = document.getElementById('site-header');
  if (!header) return;

  function updateHeader() {
    if (window.scrollY > 20) {
      header.classList.remove('transparent');
      header.classList.add('opaque');
    } else {
      header.classList.remove('opaque');
      header.classList.add('transparent');
    }
  }

  /* Set initial state immediately (avoid flash) */
  header.classList.add('transparent');
  window.addEventListener('scroll', updateHeader, { passive: true });
}());

/* ── Burger / mobile nav ── */
(function () {
  var burger = document.querySelector('.burger');
  var nav    = document.getElementById('mobile-nav');
  if (!burger || !nav) return;

  function close() {
    nav.hidden = true;
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Ouvrir le menu');
  }

  burger.addEventListener('click', function () {
    var isOpen = !nav.hidden;
    if (isOpen) {
      close();
    } else {
      nav.hidden = false;
      burger.setAttribute('aria-expanded', 'true');
      burger.setAttribute('aria-label', 'Fermer le menu');
    }
  });

  /* Close when a link is clicked */
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', close);
  });

  /* Close on Escape */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !nav.hidden) close();
  });
}());

/* ── Smooth anchor scroll (offset for fixed header) ── */
(function () {
  var OFFSET = 80;
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var href   = link.getAttribute('href');
      if (href === '#') return;
      var target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      var top = target.getBoundingClientRect().top + window.scrollY - OFFSET;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });
}());

/* ── Carousel ── */
(function () {
  var carousel = document.getElementById('evo360-carousel');
  if (!carousel) return;

  var track    = carousel.querySelector('.carousel-track');
  var slides   = carousel.querySelectorAll('.carousel-slide');
  var btnPrev  = carousel.querySelector('.carousel-btn-prev');
  var btnNext  = carousel.querySelector('.carousel-btn-next');
  var dotsWrap = carousel.querySelector('.carousel-dots');
  var total    = slides.length;
  var current  = 0;
  var timer    = null;
  var dots     = [];

  if (total === 0) return;

  /* Build indicator dots */
  slides.forEach(function (_, i) {
    var dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-label', 'Diapositive ' + (i + 1));
    dot.setAttribute('aria-selected', String(i === 0));
    dot.addEventListener('click', function () { goTo(i); resetAutoplay(); });
    dotsWrap.appendChild(dot);
    dots.push(dot);
  });

  function goTo(index) {
    current = ((index % total) + total) % total;
    track.style.transform = 'translateX(-' + (current * 100) + '%)';
    dots.forEach(function (d, i) {
      d.classList.toggle('active', i === current);
      d.setAttribute('aria-selected', String(i === current));
    });
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startAutoplay() { timer = setInterval(next, 3500); }
  function stopAutoplay()  { clearInterval(timer); }
  function resetAutoplay() { stopAutoplay(); startAutoplay(); }

  if (btnPrev) btnPrev.addEventListener('click', function () { prev(); resetAutoplay(); });
  if (btnNext) btnNext.addEventListener('click', function () { next(); resetAutoplay(); });

  /* Touch / swipe */
  var touchStartX = 0;
  carousel.addEventListener('touchstart', function (e) {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });
  carousel.addEventListener('touchend', function (e) {
    var dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) {
      dx < 0 ? next() : prev();
      resetAutoplay();
    }
  }, { passive: true });

  /* Pause on hover */
  carousel.addEventListener('mouseenter', stopAutoplay);
  carousel.addEventListener('mouseleave', startAutoplay);

  startAutoplay();
}());

/* ── Scroll-reveal (IntersectionObserver) ── */
(function () {
  if (!('IntersectionObserver' in window)) return;

  /* Inject reveal styles once */
  var style = document.createElement('style');
  style.textContent = [
    '.reveal{opacity:0;transform:translateY(28px);transition:opacity .6s ease,transform .6s ease}',
    '.reveal.visible{opacity:1;transform:none}'
  ].join('');
  document.head.appendChild(style);

  var targets = document.querySelectorAll(
    '.hcard, .service-item, .stat, .cta-contact-item'
  );

  targets.forEach(function (el, i) {
    el.classList.add('reveal');
    el.style.transitionDelay = (i % 5) * 70 + 'ms';
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  targets.forEach(function (el) { observer.observe(el); });
}());

/* ── Contact modal ── */
(function () {
  var overlay = document.getElementById('contact-modal');
  var form    = document.getElementById('contact-form');
  var success = document.getElementById('contact-success');
  if (!overlay || !form) return;

  /* Open */
  function openModal() {
    overlay.hidden = false;
    /* Force reflow so the transition triggers */
    void overlay.offsetHeight;
    overlay.classList.add('is-visible');
    document.body.style.overflow = 'hidden';
  }

  /* Close */
  function closeModal() {
    overlay.classList.remove('is-visible');
    document.body.style.overflow = '';
    setTimeout(function () {
      overlay.hidden = true;
      /* Reset to form view for next open */
      form.hidden = false;
      form.reset();
      if (success) success.hidden = true;
    }, 350);
  }

  /* Open buttons */
  document.querySelectorAll('[data-open-contact]').forEach(function (btn) {
    btn.addEventListener('click', openModal);
  });

  /* Close buttons */
  document.querySelectorAll('[data-close-contact]').forEach(function (btn) {
    btn.addEventListener('click', closeModal);
  });

  /* Close on overlay click */
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeModal();
  });

  /* Close on Escape */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !overlay.hidden) closeModal();
  });

  /* Form submission via Fetch (AJAX) */
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var submitBtn = form.querySelector('.modal-submit');
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Envoi en cours…';

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then(function (response) {
      if (response.ok) {
        form.hidden = true;
        if (success) success.hidden = false;
      } else {
        alert('Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone.');
      }
    }).catch(function () {
      alert('Une erreur est survenue. Veuillez vérifier votre connexion internet.');
    }).finally(function () {
      submitBtn.disabled = false;
      submitBtn.innerHTML = 'Envoyer <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>';
    });
  });
}());

