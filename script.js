// ---------- Footer year ----------
document.querySelector('[data-year]').textContent = new Date().getFullYear();

// ---------- Dismissible site notice ----------
(() => {
  const notice = document.querySelector('.site-notice');
  if (!notice) return;
  const key = 'notice-dismissed:' + (notice.dataset.notice || 'default');
  try {
    if (localStorage.getItem(key)) {
      notice.remove();
      return;
    }
  } catch {}
  notice.querySelector('.site-notice-dismiss')?.addEventListener('click', () => {
    notice.remove();
    try { localStorage.setItem(key, '1'); } catch {}
    // Removing the focused button would reset focus to <body>; keep keyboard users in place.
    const main = document.querySelector('main');
    if (main) {
      main.setAttribute('tabindex', '-1');
      main.focus({ preventScroll: true });
    }
  });
})();

// ---------- Scroll progress bar ----------
(() => {
  const bar = document.querySelector('.scroll-progress');
  if (!bar) return;
  let ticking = false;
  function update() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
    bar.style.transform = `scaleX(${pct})`;
    ticking = false;
  }
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }
  update();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', update);
})();

// ---------- Animated stat counters ----------
(() => {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Reset to 0 immediately so the count-up is visible; no-JS users keep the source value.
  counters.forEach((el) => {
    if (!reduceMotion) {
      const suffix = el.dataset.suffix || '';
      el.textContent = '0' + suffix;
    }
  });

  const animate = (el) => {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    if (reduceMotion) {
      el.textContent = target + suffix;
      return;
    }
    const duration = 1400;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      el.textContent = Math.round(target * eased) + suffix;
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach((el) => io.observe(el));
  } else {
    counters.forEach(animate);
  }
})();

// ---------- Hero headline typewriter ----------
(() => {
  const el = document.querySelector('[data-typewriter]');
  if (!el) return;

  const text = el.dataset.typewriter;
  if (!el.hasAttribute('aria-label')) el.setAttribute('aria-label', text);

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Always insert the caret; on reduced motion we just skip the typing animation.
  el.textContent = '';
  const textNode = document.createTextNode(reduceMotion ? text : '');
  const caret = document.createElement('span');
  caret.className = 'caret';
  caret.textContent = '|';
  caret.setAttribute('aria-hidden', 'true');
  el.append(textNode, caret);

  if (reduceMotion) return;

  let i = 0;
  const startDelay = 300;
  const type = () => {
    if (i >= text.length) return;
    const ch = text[i++];
    textNode.data += ch;
    // Slightly variable cadence; longer pause after spaces, brief pause on punctuation.
    let delay = 45 + Math.random() * 55;
    if (ch === ' ') delay += 40;
    if (ch === '.' || ch === ',') delay += 220;
    setTimeout(type, delay);
  };
  setTimeout(type, startDelay);
})();

// ---------- Hero waves (interactive) ----------
(() => {
  const canvas = document.querySelector('.hero-waves');
  const hero = document.querySelector('.hero');
  if (!canvas || !hero) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ctx = canvas.getContext('2d');
  let w = 0, h = 0;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  const mouse = { x: 0, y: 0, target: 0, influence: 0 };

  const waves = [
    { amp: 30, freq: 0.0075, speed: 0.0009, phase: 0.0, alpha: 0.38, offset: 0.55, width: 1.6 },
    { amp: 22, freq: 0.0115, speed: -0.0013, phase: 1.6, alpha: 0.26, offset: 0.66, width: 1.3 },
    { amp: 17, freq: 0.0170, speed: 0.0017, phase: 2.9, alpha: 0.18, offset: 0.77, width: 1.1 },
  ];

  function resize() {
    const rect = hero.getBoundingClientRect();
    w = rect.width;
    h = rect.height;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener('resize', resize);

  hero.addEventListener('pointermove', (e) => {
    const rect = hero.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    mouse.target = 1;
  });
  hero.addEventListener('pointerleave', () => { mouse.target = 0; });

  function drawWave(t, wave) {
    const baseY = h * wave.offset;
    ctx.beginPath();
    for (let x = 0; x <= w; x += 4) {
      let peak = 0;
      if (mouse.influence > 0.005) {
        const dx = x - mouse.x;
        const sigma = 150;
        const g = Math.exp(-(dx * dx) / (2 * sigma * sigma));
        peak = g * (mouse.y - baseY) * 0.45 * mouse.influence;
      }
      const y = baseY
        + Math.sin(x * wave.freq + t * wave.speed + wave.phase) * wave.amp
        + peak;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }

    // Soft fill below the wave line for depth.
    ctx.save();
    ctx.lineTo(w, h);
    ctx.lineTo(0, h);
    ctx.closePath();
    const grad = ctx.createLinearGradient(0, baseY - 40, 0, h);
    grad.addColorStop(0, `rgba(255, 255, 255, ${wave.alpha * 0.18})`);
    grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = grad;
    ctx.fill();
    ctx.restore();

    // Stroke the line itself.
    ctx.beginPath();
    for (let x = 0; x <= w; x += 4) {
      let peak = 0;
      if (mouse.influence > 0.005) {
        const dx = x - mouse.x;
        const sigma = 150;
        const g = Math.exp(-(dx * dx) / (2 * sigma * sigma));
        peak = g * (mouse.y - baseY) * 0.45 * mouse.influence;
      }
      const y = baseY
        + Math.sin(x * wave.freq + t * wave.speed + wave.phase) * wave.amp
        + peak;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = `rgba(255, 255, 255, ${wave.alpha})`;
    ctx.lineWidth = wave.width;
    ctx.stroke();
  }

  function frame(t) {
    ctx.clearRect(0, 0, w, h);
    mouse.influence += (mouse.target - mouse.influence) * 0.07;
    for (const wave of waves) drawWave(t, wave);
    if (!reduceMotion) requestAnimationFrame(frame);
  }

  if (reduceMotion) {
    // Render once, statically, with no animation.
    frame(0);
  } else {
    requestAnimationFrame(frame);
  }
})();

// ---------- Mobile nav toggle ----------
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  links.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      links.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// ---------- Reveal on scroll ----------
const revealTargets = document.querySelectorAll('.section, .hero-copy, .hero-visual');
revealTargets.forEach((el) => el.classList.add('reveal'));

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach((el) => io.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add('is-visible'));
}

// ---------- Contact form (graceful fallback if Formspree not wired) ----------
const form = document.querySelector('.contact-form');
const note = form?.querySelector('[data-form-note]');

form?.addEventListener('submit', async (e) => {
  // If the action still has the placeholder, intercept and show a friendly message.
  if (form.action.includes('your-id-here')) {
    e.preventDefault();
    note.textContent = 'Form not yet connected. Wire up a Formspree (or similar) endpoint in index.html.';
    note.className = 'form-note error';
    return;
  }

  // Otherwise: AJAX submit so the user stays on the page.
  e.preventDefault();
  note.textContent = 'Sending…';
  note.className = 'form-note';

  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    });
    if (res.ok) {
      form.reset();
      note.textContent = 'Thanks — I\'ll reply within a business day.';
      note.className = 'form-note success';
    } else {
      throw new Error('Bad response');
    }
  } catch {
    note.textContent = 'Something went wrong. Email hello@bytedevelopment.com.au instead.';
    note.className = 'form-note error';
  }
});
