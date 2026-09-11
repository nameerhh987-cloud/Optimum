/* ============================================================
   script.js — Optimum Fitness | Monster Theme
   Full interactive logic & Premium Monster Glyph SVG Engine
   ============================================================ */

'use strict';

/* ── HELPERS ─────────────────────────────────────────────── */
const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const mk = (tag, cls) => { const e = document.createElement(tag); if (cls) e.className = cls; return e; };

/* ============================================================
   0. PREMIUM MONSTER GLYPH SVG ENGINE
============================================================ */
const MONSTER_ICONS = {
  skull: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C7.03 2 3 6.03 3 11c0 2.6 1.01 4.96 2.65 6.69l-.65 2.81 3.5-.88c1.07.49 2.27.76 3.5.76s2.43-.27 3.5-.76l3.5.88-.65-2.81C20 15.96 21 13.6 21 11c0-4.97-4.03-9-9-9zm-3.5 8.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM10 17H8v-2h2v2zm4 0h-2v-2h2v2zm2 0h-1v-2h1v2z"/>
    </svg>
  `,
  lightning: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M13 2L3 14h7v8l11-13h-8l3-7z"/>
    </svg>
  `,
  demon: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2c-4.42 0-8 3.58-8 8 0 2.27.95 4.32 2.47 5.78L5 20l4.3-1.07C10.15 19.57 11.05 20 12 20s1.85-.43 2.7-1.07L19 20l-1.47-4.22C19.05 14.32 20 12.27 20 10c0-4.42-3.58-8-8-8zm-4 7.5c.83 0 1.5.67 1.5 1.5S8.83 12.5 8 12.5 6.5 11.83 6.5 11s.67-1.5 1.5-1.5zm8 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM12 16.5c-1.38 0-2.5-.67-2.5-1.5h5c0 .83-1.12 1.5-2.5 1.5z"/>
      <path d="M6 3.5L3 1l1 4.5zm12 0L21 1l-1 4.5z"/>
    </svg>
  `,
  flame: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/>
    </svg>
  `,
  blood: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
    </svg>
  `,
  bone: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.5 3a2.5 2.5 0 0 0-2.4 1.83L14.7 4.1a3 3 0 0 0-4.4 0l-2.4.73A2.5 2.5 0 0 0 4.5 3 2.5 2.5 0 0 0 2 5.5c0 1.25.92 2.29 2.12 2.47L4.7 10.4a3 3 0 0 0 0 4.4l-.58 2.43A2.5 2.5 0 0 0 2 19.5 2.5 2.5 0 0 0 4.5 22a2.5 2.5 0 0 0 2.4-1.83l2.4-.73a3 3 0 0 0 4.4 0l2.4.73A2.5 2.5 0 0 0 19.5 22a2.5 2.5 0 0 0 2.5-2.5c0-1.25-.92-2.29-2.12-2.47l-.58-2.43a3 3 0 0 0 0-4.4l.58-2.43A2.5 2.5 0 0 0 22 5.5 2.5 2.5 0 0 0 19.5 3z"/>
    </svg>
  `,
  shield: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
    </svg>
  `,
  arena: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-7 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zM5 18v-2h14v2H5zm0-9.5V6h3.5v2.5H5zm10.5 0V6H19v2.5h-3.5z"/>
    </svg>
  `,
  recovery: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0 0 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74A7.93 7.93 0 0 0 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/>
    </svg>
  `,
  scale: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a1 1 0 0 1 1 1v1.08c3.05.42 5.56 2.65 6.25 5.58l.1.44H21a1 1 0 1 1 0 2h-1.67a7.01 7.01 0 0 1-6.33 5.92V20h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-1.98A7.01 7.01 0 0 1 4.67 12.1H3a1 1 0 1 1 0-2h1.65c.69-2.93 3.2-5.16 6.25-5.58V3a1 1 0 0 1 1-1zm0 4a5 5 0 0 0-4.9 4.1l-.1.4a5 5 0 0 0 4.5 5.48l.5.02a5 5 0 0 0 5-5 5 5 0 0 0-5-5zm-1 2h2v3h-2V8z"/>
    </svg>
  `,
  cash: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 7l10 5 10-5-10-5zm0 8.5L4.5 7 12 3.25 19.5 7 12 10.5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
  `,
  clock: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2V7h2v9zm0-11h-2V3h2v2z"/>
    </svg>
  `,
  camera: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
    </svg>
  `,
  pin: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
    </svg>
  `,
  phone: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>
  `,
  chat: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/>
    </svg>
  `,
  radar: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-2.02.75-3.87 2-5.28V12h2v-4.14c1.17-.55 2.54-.86 4-.86s2.83.31 4 .86V12h2V6.72c1.25 1.41 2 3.26 2 5.28 0 4.41-3.59 8-8 8zm0-10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
    </svg>
  `,
  home: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    </svg>
  `,
  question: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-2h2v2zm1.07-7.75l-.9.92C12.45 11.9 12 12.5 12 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z"/>
    </svg>
  `,
};

function getMonsterSVG(key) {
  return MONSTER_ICONS[key] || MONSTER_ICONS.skull;
}

// Hydrate all static [data-monster-icon] elements in DOM
function hydrateMonsterIcons(root = document) {
  $$('[data-monster-icon]', root).forEach(el => {
    const key = el.dataset.monsterIcon;
    if (key && MONSTER_ICONS[key]) {
      el.innerHTML = MONSTER_ICONS[key];
    }
  });
}

/* ============================================================
   1. HEADER SCROLL
============================================================ */
(function initHeaderScroll() {
  const header = $('#site-header');
  if (!header) return;
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ============================================================
   2. ACTIVE NAV LINK
============================================================ */
(function initActiveNav() {
  const sections = $$('section[id]');
  const navLinks = $$('.nav-link');

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      navLinks.forEach(l => l.classList.remove('active'));
      const match = navLinks.find(l => l.getAttribute('href') === '#' + e.target.id);
      if (match) match.classList.add('active');
    });
  }, { rootMargin: '-35% 0px -55% 0px' });

  sections.forEach(s => io.observe(s));
})();

/* ============================================================
   3. MOBILE DRAWER
============================================================ */
(function initDrawer() {
  const btn      = $('#hamburger-btn');
  const drawer   = $('#mobile-drawer');
  const overlay  = $('#drawer-overlay');
  const closeBtn = $('#drawer-close-btn');
  const links    = $$('.drawer-link, .drawer-cta');

  const open = () => {
    btn.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    btn.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (btn) btn.addEventListener('click', () => drawer.classList.contains('open') ? close() : open());
  if (closeBtn) closeBtn.addEventListener('click', close);
  if (overlay) overlay.addEventListener('click', close);
  links.forEach(l => l.addEventListener('click', close));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
})();

/* ============================================================
   4. SMOOTH SCROLL (all # anchors)
============================================================ */
document.addEventListener('click', e => {
  const anchor = e.target.closest('a[href^="#"]');
  if (!anchor) return;
  const id = anchor.getAttribute('href');
  if (!id || id === '#') return;
  const target = document.querySelector(id);
  if (!target) return;
  e.preventDefault();
  const hh = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 74;
  window.scrollTo({
    top: target.getBoundingClientRect().top + window.scrollY - hh + 4,
    behavior: 'smooth',
  });
});

/* ============================================================
   5. STATS — build + count-up animation
============================================================ */
(function buildStats() {
  const grid = $('#stats-grid');
  if (!grid || !window.STATS) return;

  STATS.forEach((s, i) => {
    const item = mk('div', 'stat-item reveal');
    item.style.transitionDelay = `${i * 80}ms`;
    item.innerHTML = `
      <div class="stat-icon monster-glyph-box" data-monster-icon="${s.icon}">${getMonsterSVG(s.icon)}</div>
      <span class="stat-value">
        <span class="stat-num" data-target="${s.value}">0</span><span class="stat-suffix">${s.suffix}</span>
      </span>
      <span class="stat-label">${s.label}</span>
      <span class="stat-sub">${s.sub || ''}</span>
    `;
    grid.appendChild(item);
  });

  let done = false;
  const io = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !done) {
      done = true;
      $$('.stat-num').forEach(span => {
        const target = +span.dataset.target;
        const dur    = 1800;
        const step   = 16;
        const inc    = target / (dur / step);
        let cur      = 0;
        const timer  = setInterval(() => {
          cur = Math.min(cur + inc, target);
          span.textContent = Math.round(cur).toLocaleString();
          if (cur >= target) clearInterval(timer);
        }, step);
      });
    }
  }, { threshold: 0.25 });

  const bar = $('#stats-bar');
  if (bar) io.observe(bar);
})();

/* ============================================================
   6. FEATURES GRID (8 Items with Deep Specs)
============================================================ */
(function buildFeatures() {
  const grid = $('#features-grid');
  if (!grid || !window.FEATURES) return;

  FEATURES.forEach((f, i) => {
    const card = mk('div', 'feature-card reveal');
    card.style.transitionDelay = `${(i % 4) * 80}ms`;

    const specsHtml = f.specs 
      ? `<ul class="feature-specs-list">
          ${f.specs.map(sp => `<li><span class="monster-icon-inline">${getMonsterSVG('lightning')}</span> ${sp}</li>`).join('')}
         </ul>` 
      : '';

    card.innerHTML = `
      <div class="feature-head">
        <div class="monster-glyph-box">${getMonsterSVG(f.icon)}</div>
        <span class="feature-tag">${f.tag || 'MONSTER'}</span>
      </div>
      <h3 class="feature-title">${f.title}</h3>
      <p class="feature-desc">${f.desc}</p>
      ${specsHtml}
    `;
    grid.appendChild(card);
  });
})();

/* ============================================================
   7. TRAINING DIVISIONS (6 Regimes)
============================================================ */
(function buildDivisions() {
  const grid = $('#divisions-grid');
  if (!grid || !window.DIVISIONS) return;

  DIVISIONS.forEach((d, i) => {
    const card = mk('div', 'division-card reveal');
    card.style.transitionDelay = `${(i % 2) * 100}ms`;
    card.innerHTML = `
      <div class="division-top">
        <div class="monster-glyph-box">${getMonsterSVG(d.icon)}</div>
        <span class="division-badge">${d.badge}</span>
      </div>
      <h3 class="division-title">${d.title}</h3>
      <p class="division-desc">${d.desc}</p>
      
      <div class="division-meta-box">
        <div class="division-target-tag">🎯 ${d.target}</div>
        <div class="division-split-tag">⚡ ${d.split}</div>
      </div>

      <div class="division-highlights">
        ${d.highlights.map(h => `<div class="division-item">${h}</div>`).join('')}
      </div>
    `;
    grid.appendChild(card);
  });
})();

/* ============================================================
   8. PRICING GRID & BILLING SWITCHER
============================================================ */
let currentCycle = 'monthly';

function renderPricing(cycle = 'monthly') {
  const grid = $('#pricing-grid');
  if (!grid || !window.PLANS) return;
  grid.innerHTML = '';

  PLANS.forEach((plan, i) => {
    const isFeatured = plan.badge === 'MOST FEARED';
    const isUltimate = plan.badge === 'APEX PREDATOR';
    const card = mk('div', `pricing-card reveal in${isFeatured ? ' featured' : isUltimate ? ' ultimate' : ''}`);
    card.style.transitionDelay = `${i * 90}ms`;

    const price = cycle === 'quarterly' ? plan.quarterlyPrice : plan.monthlyPrice;
    const period = cycle === 'quarterly' ? '/ 3 months' : '/ month';

    card.innerHTML = `
      ${plan.badge ? `<div class="plan-badge">${plan.badge}</div>` : ''}
      <div class="plan-head">
        <div class="monster-glyph-box">${getMonsterSVG(plan.icon)}</div>
        <div class="plan-name">${plan.name}</div>
      </div>
      <p class="plan-desc">${plan.desc}</p>
      <div class="plan-price">
        <span class="plan-currency">PKR</span>
        <span class="plan-amount">${price.toLocaleString()}</span>
        <span class="plan-period">${period}</span>
      </div>
      ${cycle === 'quarterly' ? `<span class="plan-save-pill"><span class="monster-icon-inline">${getMonsterSVG('lightning')}</span> ${plan.saveText}</span>` : `<span class="plan-save-pill">&nbsp;</span>`}
      <ul class="plan-features">
        ${plan.features.map(f => `
          <li class="plan-feature">
            <span class="monster-icon-inline">${getMonsterSVG('lightning')}</span>
            <span>${f}</span>
          </li>
        `).join('')}
      </ul>
      <a href="https://wa.me/923360222340?text=Salam%20Optimum%20Fitness!%20I%20want%20to%20register%20for%20the%20${encodeURIComponent(plan.name)}%20(${cycle})%20plan." target="_blank" rel="noopener noreferrer" class="btn btn-primary plan-cta">${plan.cta}</a>
    `;
    grid.appendChild(card);
  });
}

(function initPricingSwitcher() {
  const mBtn = $('#billing-monthly');
  const qBtn = $('#billing-quarterly');
  if (!mBtn || !qBtn) return;

  renderPricing('monthly');

  mBtn.addEventListener('click', () => {
    if (currentCycle === 'monthly') return;
    currentCycle = 'monthly';
    mBtn.classList.add('active');
    qBtn.classList.remove('active');
    renderPricing('monthly');
  });

  qBtn.addEventListener('click', () => {
    if (currentCycle === 'quarterly') return;
    currentCycle = 'quarterly';
    qBtn.classList.add('active');
    mBtn.classList.remove('active');
    renderPricing('quarterly');
  });
})();

/* ============================================================
   9. TIMETABLE & SHIFTS (6 Shifts)
============================================================ */
(function buildSchedule() {
  const grid = $('#schedule-grid');
  if (!grid || !window.SCHEDULE) return;

  SCHEDULE.forEach((s, i) => {
    const card = mk('div', 'schedule-card reveal');
    card.style.transitionDelay = `${(i % 3) * 80}ms`;
    card.innerHTML = `
      <div class="schedule-top">
        <div class="monster-glyph-box">${getMonsterSVG(s.icon)}</div>
        <span class="schedule-status">${s.status}</span>
      </div>
      <h3 class="schedule-shift">${s.shift}</h3>
      <div class="schedule-time">${s.time}</div>
      <p class="schedule-vibe"><strong>Atmosphere:</strong> ${s.vibe}</p>
      <p class="schedule-desc-text">${s.desc}</p>
      <div class="schedule-access">🔑 ${s.access}</div>
    `;
    grid.appendChild(card);
  });
})();

/* ============================================================
   10. GALLERY GRID, FILTERING & LIGHTBOX
============================================================ */
(function initGallery() {
  const grid    = $('#gallery-grid');
  const modal   = $('#gallery-modal');
  const mImg    = $('#modal-img');
  const mTag    = $('#modal-tag');
  const mTitle  = $('#modal-title');
  const mDesc   = $('#modal-desc');
  const closeB  = $('#modal-close-btn');
  const backdrp = $('#modal-backdrop');
  if (!grid || !window.GALLERY) return;

  function renderGallery(filter = 'all') {
    grid.innerHTML = '';
    const filtered = filter === 'all' 
      ? GALLERY 
      : GALLERY.filter(g => g.category === filter);

    filtered.forEach((item, i) => {
      const div = mk('div', 'gallery-item reveal in');
      div.style.transitionDelay = `${i * 60}ms`;

      const img = document.createElement('img');
      img.src         = item.src;
      img.alt         = item.alt;
      img.className   = 'gallery-img';
      img.loading     = 'lazy';
      img.decoding    = 'async';

      const overlay = mk('div', 'gallery-overlay-badge');
      overlay.innerHTML = `
        <div class="gob-left">
          <span class="gob-tag">${item.tag}</span>
          <span class="gob-title">${item.alt}</span>
        </div>
        <span class="gob-zoom-hint">🔍 TAP TO ZOOM</span>
      `;

      div.appendChild(img);
      div.appendChild(overlay);

      div.addEventListener('click', () => {
        mImg.src           = item.src;
        mImg.alt           = item.alt;
        mTag.textContent   = item.tag;
        mTitle.textContent = item.alt;
        mDesc.textContent  = item.desc;
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      });

      grid.appendChild(div);
    });
  }

  renderGallery('all');

  $$('.g-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.g-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGallery(btn.dataset.filter);
    });
  });

  const closeModal = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (closeB) closeB.addEventListener('click', closeModal);
  if (backdrp) backdrp.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('open')) closeModal(); });
})();

/* ============================================================
   11. TESTIMONIALS (8 Member Transformations)
============================================================ */
(function buildTestimonials() {
  const grid = $('#testimonials-grid');
  if (!grid || !window.TESTIMONIALS) return;

  TESTIMONIALS.forEach((t, i) => {
    const card = mk('div', 'testi-card reveal');
    card.style.transitionDelay = `${(i % 3) * 90}ms`;
    card.innerHTML = `
      <div class="testi-top">
        <div class="testi-stars">${'★'.repeat(t.stars)}</div>
        <span class="testi-badge">${t.badge}</span>
      </div>
      <p class="testi-text">${t.text}</p>
      <div class="testi-footer">
        <div class="testi-name">${t.name} <span class="testi-role-tag">(${t.age} &bull; ${t.role})</span></div>
        <div class="testi-result">${t.result}</div>
        <div class="testi-stats-tag">📈 ${t.stats} &bull; 📍 ${t.location}</div>
      </div>
    `;
    grid.appendChild(card);
  });
})();

/* ============================================================
   12. BMI & MONSTER CALORIC / MACRO ENGINE
============================================================ */
(function initBMI() {
  const tbody = $('#bmi-tbody');
  if (tbody && window.BMI_CATEGORIES) {
    BMI_CATEGORIES.forEach(cat => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><strong>${cat.range}</strong></td>
        <td><span class="bmi-dot" style="background:${cat.color}"></span><strong>${cat.label}</strong></td>
        <td style="color:var(--white-70);font-size:0.82rem;">
          <p>${cat.advice}</p>
          <div class="cat-macro-pill">${cat.macroSplit}</div>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }

  const form     = $('#bmi-form');
  const res      = $('#bmi-result');
  const score    = $('#bmi-score');
  const label    = $('#bmi-label');
  const bar      = $('#bmi-bar');
  const protein  = $('#protein-target');
  const calorie  = $('#calorie-target');
  const carbsEl  = $('#carbs-target');
  const fatsEl   = $('#fats-target');
  const waterEl  = $('#water-target');
  const splitEl  = $('#split-target');
  const adviceEl = $('#bmi-advice');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const w    = parseFloat($('#bmi-weight').value);
    const h    = parseFloat($('#bmi-height').value);
    const goal = $('#bmi-goal').value;
    const act  = $('#bmi-activity').value;

    if (!w || !h || w < 20 || w > 300 || h < 100 || h > 250) {
      alert('Please enter valid weight (20–300 kg) and height (100–250 cm).');
      return;
    }

    const hm  = h / 100;
    const bmi = parseFloat((w / (hm * hm)).toFixed(1));

    let lbl = '', color = '', pct = 0, adviceText = '';
    if (bmi < 18.5) {
      lbl = 'Underweight (Hyper-Bulk Caloric Surplus Required)';
      color = '#60CFFF';
      pct = Math.min((bmi / 18.5) * 25, 25);
      adviceText = 'Your skeletal frame needs serious iron density. Aim for a caloric surplus (+450 kcal) with heavy compound lifts 4 days a week. Keep protein at 2.0g/kg and emphasize clean carbohydrates like oats and rice.';
    } else if (bmi < 25) {
      lbl = 'Athletic Prime (Peak Conditioning & Hypertrophy)';
      color = '#C8FF00';
      pct = 25 + ((bmi - 18.5) / 6.5) * 25;
      adviceText = 'Prime genetic baseline! Maintain a slight surplus (+250 kcal) or recomp while progressively overloading your squat, bench, and pull. Focus on 2.2g protein per kg.';
    } else if (bmi < 30) {
      lbl = 'Beast Mass / High Muscle Bulk Zone';
      color = '#FFD600';
      pct = 50 + ((bmi - 25) / 5) * 25;
      adviceText = 'If you lift heavy iron, you are holding exceptional muscle mass! Keep protein elevated at 2.2g/kg and focus on a mild 300 kcal deficit to carve razor-sharp muscle definition.';
    } else {
      lbl = 'High Density / High-Octane Shred Protocol';
      color = '#FF1E27';
      pct = Math.min(75 + ((bmi - 30) / 10) * 25, 100);
      adviceText = 'Commit to our metabolic turf conditioning and heavy progressive resistance regime to melt visceral fat while preserving raw power. Maintain a 500 kcal deficit with 2.2g protein per kg.';
    }

    // Protein calculation
    let proteinMultiplier = 2.0;
    if (goal === 'cut') proteinMultiplier = 2.2;
    if (goal === 'bulk') proteinMultiplier = 2.0;
    const dailyProtein = Math.round(w * proteinMultiplier);

    // Approximate BMR via Mifflin-St Jeor
    const baseBMR = 10 * w + 6.25 * h - 5 * 25 + 5;
    let actFactor = act === 'advanced' ? 1.65 : act === 'moderate' ? 1.5 : 1.35;
    let targetCals = Math.round(baseBMR * actFactor);
    if (goal === 'cut') targetCals -= 450;
    if (goal === 'bulk') targetCals += 400;

    // Macro distribution
    const proteinCals = dailyProtein * 4;
    const fatCals     = targetCals * 0.25;
    const carbCals    = Math.max(targetCals - proteinCals - fatCals, 200);
    const dailyCarbs  = Math.round(carbCals / 4);
    const dailyFats   = Math.round(fatCals / 9);

    // Hydration target: 35ml to 45ml per kg
    const dailyWater = (w * 0.045).toFixed(1);

    // Training split suggestion
    let splitName = 'Push / Pull / Legs (PPL)';
    if (act === 'beginner') splitName = 'Full Body Linear (3-Day)';
    if (act === 'moderate') splitName = 'Upper / Lower (4-Day)';
    if (act === 'advanced') splitName = 'PPL Overload (6-Day)';

    score.textContent    = bmi;
    score.style.color    = color;
    label.textContent    = lbl;
    label.style.color    = color;
    bar.style.background = color;
    bar.style.width      = '0';

    if (protein)  protein.textContent  = `${dailyProtein} g / day`;
    if (calorie)  calorie.textContent  = `${targetCals.toLocaleString()} kcal`;
    if (carbsEl)  carbsEl.textContent  = `${dailyCarbs} g`;
    if (fatsEl)   fatsEl.textContent   = `${dailyFats} g`;
    if (waterEl)  waterEl.textContent  = `${dailyWater} L / day`;
    if (splitEl)  splitEl.textContent  = splitName;
    if (adviceEl) adviceEl.textContent = adviceText;

    res.classList.remove('hidden');
    requestAnimationFrame(() => requestAnimationFrame(() => {
      bar.style.width = pct + '%';
    }));
    res.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
})();

/* ============================================================
   13. FAQ ACCORDION (12 Questions)
============================================================ */
(function buildFAQ() {
  const list = $('#faq-list');
  if (!list || !window.FAQS) return;

  FAQS.forEach((faq, i) => {
    const item = mk('div', 'faq-item reveal');
    item.style.transitionDelay = `${(i % 4) * 50}ms`;
    item.innerHTML = `
      <button class="faq-btn" id="faq-btn-${i}" aria-expanded="false" aria-controls="faq-body-${i}">
        <span><span class="faq-num">${(i + 1).toString().padStart(2, '0')}.</span> ${faq.q}</span>
        <span class="faq-chevron" aria-hidden="true">▼</span>
      </button>
      <div class="faq-body" id="faq-body-${i}" role="region" aria-labelledby="faq-btn-${i}">
        <div class="faq-body-inner">${faq.a}</div>
      </div>
    `;
    list.appendChild(item);
  });

  list.addEventListener('click', e => {
    const btn = e.target.closest('.faq-btn');
    if (!btn) return;
    const item   = btn.parentElement;
    const body   = item.querySelector('.faq-body');
    const inner  = item.querySelector('.faq-body-inner');
    const isOpen = item.classList.contains('open');

    // Close all
    $$('.faq-item.open').forEach(it => {
      it.classList.remove('open');
      it.querySelector('.faq-body').style.maxHeight = '0';
      it.querySelector('.faq-btn').setAttribute('aria-expanded', 'false');
    });

    if (!isOpen) {
      item.classList.add('open');
      body.style.maxHeight = inner.scrollHeight + 'px';
      btn.setAttribute('aria-expanded', 'true');
    }
  });
})();

/* ============================================================
   14. CONTACT FORM
============================================================ */
(function initContactForm() {
  const form    = $('#contact-form');
  const msgBox  = $('#form-msg');
  const submitB = $('#contact-submit-btn');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name  = $('#cf-name').value.trim();
    const phone = $('#cf-phone').value.trim();
    const plan  = $('#cf-plan').value;
    const msg   = $('#cf-msg').value.trim();

    if (!name || !phone) {
      showMsg('Please fill in your name and phone number.', 'error');
      return;
    }

    submitB.innerHTML = `⏳ SENDING INTEL...`;
    submitB.disabled  = true;

    setTimeout(() => {
      showMsg('Message logged! Opening WhatsApp for instant front desk confirmation...', 'success');
      form.reset();
      submitB.innerHTML = `<span class="monster-icon-inline">${getMonsterSVG('lightning')}</span> SEND TO FRONT DESK`;
      submitB.disabled  = false;

      // Open WhatsApp pre-filled window
      const text = encodeURIComponent(`Salam Optimum Fitness! My name is ${name} (${phone}). I am interested in: ${plan}. Note: ${msg || 'None'}`);
      window.open(`https://wa.me/923360222340?text=${text}`, '_blank');
    }, 1200);
  });

  function showMsg(text, type) {
    msgBox.textContent = text;
    msgBox.className   = `form-msg ${type}`;
    msgBox.classList.remove('hidden');
    clearTimeout(msgBox._timer);
    msgBox._timer = setTimeout(() => msgBox.classList.add('hidden'), 6000);
  }
})();

/* ============================================================
   15. FOOTER YEAR
============================================================ */
(function setYear() {
  const el = $('#footer-year');
  if (el) el.textContent = new Date().getFullYear();
})();

/* ============================================================
   16. SCROLL REVEAL & HYDRATION
============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  hydrateMonsterIcons();

  const items = $$('.reveal');
  if (!items.length) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -25px 0px' });

  items.forEach(item => io.observe(item));
});

hydrateMonsterIcons();
