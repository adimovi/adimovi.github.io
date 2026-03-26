(function () {
    const track = document.getElementById('carouselTrack');
    const wrap  = document.getElementById('carouselWrap');
    const dotsEl = document.getElementById('carouselDots');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const cards = Array.from(track.querySelectorAll('.proj-card'));
    const total = cards.length;

    let current = 0;
    let perView = getPerView();
    let maxIndex = Math.max(0, total - perView);

    // ── dots ──────────────────────────────────
    function buildDots() {
      dotsEl.innerHTML = '';
      const count = maxIndex + 1;
      for (let i = 0; i < count; i++) {
        const d = document.createElement('button');
        d.className = 'carousel-dot' + (i === 0 ? ' active' : '');
        d.setAttribute('aria-label', `Go to slide ${i + 1}`);
        d.addEventListener('click', () => goTo(i));
        dotsEl.appendChild(d);
      }
    }

    function updateDots() {
      dotsEl.querySelectorAll('.carousel-dot').forEach((d, i) => {
        d.classList.toggle('active', i === current);
      });
    }

    // ── slide ─────────────────────────────────
    function getPerView() {
      const w = wrap.offsetWidth;
      if (w < 480)  return 1;
      if (w < 768)  return 2;
      if (w < 1024) return 3;
      return 4;
    }

    function getCardWidth() {
      return cards[0].offsetWidth + 14; // card + gap
    }

    function goTo(idx) {
      current = Math.max(0, Math.min(idx, maxIndex));
      track.style.transform = `translateX(-${current * getCardWidth()}px)`;
      updateDots();
      prevBtn.style.opacity = current === 0 ? '.35' : '1';
      nextBtn.style.opacity = current >= maxIndex ? '.35' : '1';
    }

    prevBtn.addEventListener('click', () => goTo(current - 1));
    nextBtn.addEventListener('click', () => goTo(current + 1));

    // ── drag / swipe ──────────────────────────
    let startX = 0, isDragging = false, startTranslate = 0;

    wrap.addEventListener('mousedown', e => {
      isDragging = true;
      startX = e.clientX;
      startTranslate = current * getCardWidth();
      track.style.transition = 'none';
    });
    window.addEventListener('mousemove', e => {
      if (!isDragging) return;
      const delta = e.clientX - startX;
      track.style.transform = `translateX(-${startTranslate - delta}px)`;
    });
    window.addEventListener('mouseup', e => {
      if (!isDragging) return;
      isDragging = false;
      track.style.transition = '';
      const delta = e.clientX - startX;
      if (Math.abs(delta) > 60) goTo(delta < 0 ? current + 1 : current - 1);
      else goTo(current);
    });

    wrap.addEventListener('touchstart', e => {
      startX = e.touches[0].clientX;
      startTranslate = current * getCardWidth();
      track.style.transition = 'none';
    }, { passive: true });
    wrap.addEventListener('touchmove', e => {
      const delta = e.touches[0].clientX - startX;
      track.style.transform = `translateX(-${startTranslate - delta}px)`;
    }, { passive: true });
    wrap.addEventListener('touchend', e => {
      track.style.transition = '';
      const delta = e.changedTouches[0].clientX - startX;
      if (Math.abs(delta) > 60) goTo(delta < 0 ? current + 1 : current - 1);
      else goTo(current);
    });

    // prevent link clicks while dragging
    cards.forEach(c => c.addEventListener('click', e => {
      if (Math.abs(e.clientX - startX) > 5) e.preventDefault();
    }));

    // ── resize ────────────────────────────────
    window.addEventListener('resize', () => {
      perView  = getPerView();
     
      maxIndex = Math.max(0, total - perView);
      current  = Math.min(current, maxIndex);
      buildDots();
      goTo(current);
    });

    // ── init ──────────────────────────────────
    buildDots();
    goTo(0);
  })();

  // ── MODAL ─────────────────────────────────
  (function () {
    const modal    = document.getElementById('contactModal');
    const openBtn  = document.getElementById('openModal');
    const closeBtn = document.getElementById('closeModal');

    openBtn.addEventListener('click', () => {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

    function closeModal() {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  })();

  // ── CONTACT FORM ──────────────────────────
  (function () {
    const form      = document.getElementById('contactForm');
    const btn       = document.getElementById('submitBtn');
    const btnText   = document.getElementById('btnText');
    const success   = document.getElementById('formSuccess');
    const error     = document.getElementById('formError');

    if (!form) return;

    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      btn.disabled = true;
      btnText.textContent = 'Sending...';
      success.style.display = 'none';
      error.style.display   = 'none';

      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: new FormData(form)
        });
        const data = await res.json();
        if (data.success) {
          success.style.display = 'block';
          form.reset();
        } else {
          error.style.display = 'block';
        }
      } catch {
        error.style.display = 'block';
      } finally {
        btn.disabled = false;
        btnText.textContent = 'Send message';
      }
    });
  })();

  // ── COUNT UP ──────────────────────────────
  (function () {
    const stats = document.querySelectorAll('.card-stat .num');
    const duration = 1800;

    function countUp(el) {
      const target = parseInt(el.textContent);
      const suffix = el.textContent.replace(target, '');
      let start = null;
      el.textContent = '0' + suffix;

      function step(timestamp) {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        el.textContent = Math.floor(ease * target) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          countUp(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    stats.forEach(el => observer.observe(el));
  })();

  // ── TYPING EFFECT ─────────────────────────
  (function () {
    const el = document.getElementById('typed');
    const phrases = ["I'm Adrian.", "I'm a Developer.", "I build the web."];
    let pi = 0, ci = 0, deleting = false;

    function tick() {
      const phrase = phrases[pi];
      if (!deleting) {
        el.textContent = phrase.slice(0, ++ci);
        if (ci === phrase.length) { deleting = true; setTimeout(tick, 1800); return; }
        setTimeout(tick, 80);
      } else {
        el.textContent = phrase.slice(0, --ci);
        if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; setTimeout(tick, 400); return; }
        setTimeout(tick, 40);
      }
    }
    setTimeout(tick, 600);
  })();
