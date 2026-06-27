/* ============================================================
   Bram — Desktop Portfolio  ·  vanilla JS, no dependencies
   ------------------------------------------------------------
   CONTENT IS EDITED VIA THE CMS (/admin) — it is stored in
   `content.json`. The `DEFAULT_DATA` object below is only a
   fallback used when content.json can't be loaded (e.g. opening
   the file directly without a server).
   ============================================================ */

/* ---------- tiny helper: placeholder image as SVG data URI ---------- */
function ph(text, c1, c2, w = 600, h = 600) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}'>
    <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
      <stop offset='0' stop-color='${c1}'/><stop offset='1' stop-color='${c2}'/>
    </linearGradient></defs>
    <rect width='100%' height='100%' fill='url(#g)'/>
    <text x='50%' y='50%' fill='rgba(255,255,255,.85)' font-family='Helvetica,Arial' font-size='${Math.round(w/14)}'
      font-weight='700' text-anchor='middle' dominant-baseline='middle'>${text}</text>
  </svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

/* Resolve an image value: use it if set, otherwise a placeholder. */
function pic(val, text, c1 = '#7a8ba8', c2 = '#2e3a4f', w = 600, h = 600) {
  return (val && String(val).trim()) ? val : ph(text || '', c1, c2, w, h);
}

/* ============================================================
   1.  FALLBACK DATA  (real content lives in content.json via /admin)
   ============================================================ */
const DEFAULT_DATA = {
  profile: {
    name: 'Bram',
    instagram: 'https://instagram.com/your_handle',
    email: 'bram@example.com',
    profilePic: ph('Bram', '#7a8ba8', '#2e3a4f'),   // -> "assets/profile.jpg"
  },

  /* TextEdit document */
  readme: {
    title: 'Read Me',
    paragraphs: [
      { lead: true, text: 'Hi — this is Bram. Thanks for poking around.' },
      { text: 'Normally I’d open with “multi-disciplinary maker, builds web things, shoots photos, designs the odd brand.” True, but a little dull.' },
      { text: 'So instead, the honest version: I work across code, design and image because I get bored doing only one. Some of it ships, some of it lives forever in an “untitled” folder.' },
      { small: true, text: 'I taught myself to code before I learned to finish things.' },
      { small: true, text: 'I have three half-written side projects and one fully-written README (this one).' },
      { small: true, text: 'I think good work is mostly taste + stubbornness, in that order.' },
      { small: true, text: 'Double-click the folders. The CV is the boring summary; the projects are the real me.' },
    ],
  },

  /* Photo collage — drop your own images in `img` */
  photos: [
    { img: ph('01', '#c98a5e', '#5e3a2a'), w: 260, h: 320, x: 40,  y: 60,  r: -6 },
    { img: ph('02', '#5e7fc9', '#2a345e'), w: 300, h: 220, x: 280, y: 40,  r: 4 },
    { img: ph('03', '#5ec98a', '#2a5e3a'), w: 230, h: 300, x: 560, y: 90,  r: -3 },
    { img: ph('04', '#c95e9e', '#5e2a4a'), w: 280, h: 200, x: 120, y: 320, r: 7 },
    { img: ph('05', '#c9b85e', '#5e552a'), w: 240, h: 260, x: 420, y: 300, r: -5 },
    { img: ph('06', '#8a5ec9', '#3a2a5e'), w: 220, h: 280, x: 660, y: 360, r: 5 },
  ],

  /* CV window */
  cv: {
    fileLabel: 'CV_Bram_2026',
    name: 'Bram',
    role: 'Developer · Designer · Image-maker',
    sections: [
      {
        title: 'Work',
        rows: [
          { when: '2024 — now', what: 'Freelance', sub: 'Web apps, brand systems, creative tech for studios & founders.' },
          { when: '2022 — 2024', what: 'Frontend Developer, Studio X', sub: 'Shipped product UI, design systems, interactive sites.' },
        ],
      },
      {
        title: 'Education',
        rows: [
          { when: '2018 — 2022', what: 'B.Sc. Informatics', sub: 'Plus a lot of self-taught design on the side.' },
        ],
      },
      {
        title: 'Toolbox',
        tags: ['JavaScript', 'TypeScript', 'React', 'Node', 'Figma', 'Photoshop', 'Premiere', 'WebGL', 'Python'],
      },
    ],
  },

  /* Project folders. type:'project' opens a full-bleed page.
     Each gets a folder icon on the desktop. */
  projects: [
    {
      id: 'across-the-waters',
      label: 'Across the Waters',
      title: 'Across the Waters',
      titleAlt: '渡水而来',
      meta: '2024 · Web Experience · Lead Developer',
      synopsis: 'An interactive web piece tracing a migration story through scroll-driven WebGL. Built solo, end to end.',
      bg: ph('', '#1f4e6b', '#0a1a26', 1600, 1000),
      overlay: 'rgba(35,80,120,0.55)',
      blocks: [
        { title: 'Stack', lines: ['React, Three.js, GLSL shaders', 'GSAP scroll choreography'] },
        { title: 'Recognition', lines: ['Awwwards — Honorable Mention, 2024', 'CSS Design Awards — Site of the Day'] },
      ],
      links: [{ label: 'Live →', url: '#' }, { label: 'Code →', url: '#' }],
    },
    {
      id: 'two-mountains',
      label: 'Two Mountains Weighing Down My Chest',
      title: 'Two Mountains Weighing Down My Chest',
      titleAlt: '东山飘雨西山晴',
      meta: '2023 · Short Film / Photo Series · Director',
      synopsis: 'A personal documentary-photo hybrid about home, distance and the things you carry. Shot over a year.',
      bg: ph('', '#6b2f57', '#241019', 1600, 1000),
      overlay: 'rgba(120,50,95,0.5)',
      blocks: [
        { title: 'Shown at', lines: ['Local Indie Film Night, 2023', 'Online photo feature — Magazine Y'] },
      ],
      links: [{ label: 'Watch →', url: '#' }],
    },
    {
      id: 'sun-haze',
      label: 'Sun Haze',
      title: 'Sun Haze',
      titleAlt: '日晕',
      meta: '2023 · Brand System · Designer',
      synopsis: 'Identity, type system and packaging for a small-batch coffee roaster. Warm, hand-built, a little hazy.',
      bg: ph('', '#c98a3e', '#5e3a14', 1600, 1000),
      overlay: 'rgba(180,120,50,0.45)',
      blocks: [
        { title: 'Scope', lines: ['Logo, palette, type scale', 'Packaging + web one-pager'] },
      ],
      links: [{ label: 'Case study →', url: '#' }],
    },
    {
      id: 'untitled',
      label: 'untitled',
      title: 'untitled',
      titleAlt: '未命名',
      meta: 'ongoing · Experiments · Me, alone at 2am',
      synopsis: 'The graveyard / playground. Creative-coding sketches, generative art, half-ideas that aren’t ready but are honest.',
      bg: ph('', '#3a3a44', '#101014', 1600, 1000),
      overlay: 'rgba(60,60,72,0.5)',
      blocks: [
        { title: 'Contains', lines: ['Shader doodles', 'A synth that barely works', 'A typeface, 40% done'] },
      ],
      links: [],
    },
  ],
};

/* Active content — starts as fallback, replaced by content.json on load. */
let DATA = DEFAULT_DATA;

/* Deep-ish merge: CMS sections override fallback, arrays replaced wholesale. */
function mergeData(base, over) {
  const out = { ...base };
  for (const k in over) {
    const v = over[k];
    if (v && typeof v === 'object' && !Array.isArray(v) &&
        base[k] && typeof base[k] === 'object' && !Array.isArray(base[k])) {
      out[k] = { ...base[k], ...v };
    } else if (v !== undefined && v !== null) {
      out[k] = v;
    }
  }
  return out;
}

async function loadContent() {
  try {
    const res = await fetch('content.json', { cache: 'no-store' });
    if (res.ok) DATA = mergeData(DEFAULT_DATA, await res.json());
  } catch (e) {
    /* file:// or offline — keep fallback */
  }
  // Saved desktop layout (set by the Layout Editor at /arrange/). Separate
  // file so the CMS never overwrites it. Empty => random scatter.
  try {
    const lr = await fetch('layout.json', { cache: 'no-store' });
    if (lr.ok) {
      const lay = await lr.json();
      if (lay && typeof lay === 'object') DATA.layout = lay;
    }
  } catch (e) { /* ignore */ }
}

/* ============================================================
   2.  ENGINE  (you usually don't need to touch below)
   ============================================================ */

const desktop = document.getElementById('desktop');
const iconsLayer = document.getElementById('icons');
const winLayer = document.getElementById('windows');
const menuName = document.getElementById('menu-name');

let zTop = 100;
const openWindows = new Map(); // id -> element

/* ---------- icon SVGs ---------- */
const GLYPH = {
  folder: `<svg viewBox="0 0 64 64"><path d="M6 16c0-2.2 1.8-4 4-4h14l5 6h25c2.2 0 4 1.8 4 4v6H6z" fill="#5aa9e6"/><path d="M6 24h56v28c0 2.2-1.8 4-4 4H10c-2.2 0-4-1.8-4-4z" fill="#74c0fc"/></svg>`,
  text: `<svg viewBox="0 0 64 64"><path d="M14 4h26l12 12v40c0 2.2-1.8 4-4 4H14c-2.2 0-4-1.8-4-4V8c0-2.2 1.8-4 4-4z" fill="#fff" stroke="#cfcfcf" stroke-width="1.5"/><path d="M40 4v12h12" fill="#e9e9ec"/><g stroke="#9aa0a6" stroke-width="2" stroke-linecap="round"><path d="M18 26h26M18 33h26M18 40h26M18 47h16"/></g></svg>`,
  pdf: `<svg viewBox="0 0 64 64"><path d="M14 4h26l12 12v40c0 2.2-1.8 4-4 4H14c-2.2 0-4-1.8-4-4V8c0-2.2 1.8-4 4-4z" fill="#fff" stroke="#cfcfcf" stroke-width="1.5"/><path d="M40 4v12h12" fill="#e9e9ec"/><rect x="8" y="34" width="48" height="18" rx="3" fill="#e5413c"/><text x="32" y="47" fill="#fff" font-family="Helvetica,Arial" font-size="11" font-weight="700" text-anchor="middle">PDF</text></svg>`,
  mail: `<svg viewBox="0 0 64 64"><rect x="4" y="6" width="56" height="52" rx="6" fill="#f4f4f6" stroke="#d0d0d4" stroke-width="1.5"/><path d="M8 14l24 20 24-20" fill="none" stroke="#74c0fc" stroke-width="3"/><circle cx="50" cy="14" r="6" fill="#74c0fc"/></svg>`,
  image: `<svg viewBox="0 0 64 64"><rect x="6" y="10" width="52" height="44" rx="4" fill="#fff" stroke="#cfcfcf" stroke-width="1.5"/><circle cx="22" cy="24" r="5" fill="#ffd43b"/><path d="M10 50l14-16 10 10 8-8 12 14z" fill="#69db7c"/></svg>`,
};

/* Build full icon list: fixed items + one folder per project */
function buildIconList() {
  const list = [
    { id: 'profile', label: 'Profile pic.png', glyph: 'image', img: pic(DATA.profile.profilePic, DATA.profile.name), action: openProfile },
    { id: 'readme', label: DATA.readme.title + '.txt', glyph: 'text', action: openReadme },
    { id: 'photos', label: 'Photos (Private)', glyph: 'folder', action: openPhotos },
    { id: 'cv', label: DATA.cv.fileLabel, glyph: 'pdf', action: openCV },
    { id: 'mail', label: 'Mail', glyph: 'mail', badge: '1', action: openMail },
  ];
  DATA.projects.forEach((p, i) => {
    p.id = p.id || slug(p.label) || ('project-' + i);   // CMS doesn't set ids
    list.push({ id: p.id, label: p.label, glyph: 'folder', action: () => openProject(p) });
  });
  return list;
}

function slug(s) {
  return String(s || '').toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

/* Random scattered positions (%), with collision avoidance so labels
   don't pile up. New layout every reload — messy-desktop vibe. */
function scatterPositions(n) {
  const B = { minX: 4, maxX: 80, minY: 5, maxY: 76 };
  const minDist = 14;           // min spacing in % (y weighted: labels are tall)
  const pts = [];
  let guard = 0;
  while (pts.length < n && guard++ < 3000) {
    const x = B.minX + Math.random() * (B.maxX - B.minX);
    const y = B.minY + Math.random() * (B.maxY - B.minY);
    if (pts.every(p => Math.hypot(p.x - x, (p.y - y) * 1.3) > minDist)) pts.push({ x, y });
  }
  while (pts.length < n) {       // fallback if board got crowded
    pts.push({ x: B.minX + Math.random() * (B.maxX - B.minX), y: B.minY + Math.random() * (B.maxY - B.minY) });
  }
  return pts;
}

function renderIcons() {
  const list = buildIconList();
  const positions = scatterPositions(list.length);
  const layout = DATA.layout || {};
  list.forEach((item, idx) => {
    const saved = layout[item.id];
    const pos = (saved && saved.x != null) ? saved : positions[idx];   // saved layout wins
    const el = document.createElement('div');
    el.className = 'icon';
    el.tabIndex = 0;
    el.dataset.id = item.id;
    el.style.left = pos.x + '%';
    el.style.top = pos.y + '%';
    const glyphHtml = item.glyph === 'image' && item.img
      ? `<img src="${item.img}" alt="">`
      : GLYPH[item.glyph];
    el.innerHTML = `
      <div class="icon-glyph">${glyphHtml}${item.badge ? `<span class="badge">${item.badge}</span>` : ''}</div>
      <div class="icon-label">${item.label}</div>`;

    let lastTap = 0;
    const open = () => { clearSelection(); item.action(); };
    el.addEventListener('dblclick', () => { if (!window.ARRANGE_MODE) open(); });
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      if (el.dataset.justDragged) return;   // ignore the click that ends a drag
      if (window.ARRANGE_MODE) { selectIcon(el); return; }  // arrange = drag only
      // mobile: single tap opens
      const now = Date.now();
      if (window.matchMedia('(max-width: 760px)').matches) { open(); return; }
      selectIcon(el);
      if (now - lastTap < 350) open();
      lastTap = now;
    });
    el.addEventListener('keydown', (e) => { if (e.key === 'Enter') open(); });
    makeIconDraggable(el);
    iconsLayer.appendChild(el);
  });
}

function selectIcon(el) { clearSelection(); el.classList.add('selected'); }
function clearSelection() { document.querySelectorAll('.icon.selected').forEach(i => i.classList.remove('selected')); }
desktop.addEventListener('mousedown', (e) => { if (e.target === desktop || e.target === iconsLayer) clearSelection(); });

/* Drag desktop icons around (like a real desktop). Resets on reload.
   A small movement threshold keeps single/double-click working. */
let iconZ = 10;
function makeIconDraggable(el) {
  let sx, sy, ox, oy, dragging = false, moved = false;
  const THRESH = 4;
  const down = (cx, cy) => {
    if (window.matchMedia('(max-width: 760px)').matches) return; // grid mode on mobile
    dragging = true; moved = false;
    sx = cx; sy = cy; ox = el.offsetLeft; oy = el.offsetTop;
  };
  const move = (cx, cy) => {
    if (!dragging) return;
    const dx = cx - sx, dy = cy - sy;
    if (!moved && Math.hypot(dx, dy) < THRESH) return;
    moved = true;
    el.classList.add('dragging');
    el.style.zIndex = ++iconZ;
    const parent = el.parentElement;
    const maxX = parent.clientWidth - el.offsetWidth;
    const maxY = parent.clientHeight - el.offsetHeight;
    el.style.left = Math.max(0, Math.min(maxX, ox + dx)) + 'px';
    el.style.top = Math.max(4, Math.min(maxY, oy + dy)) + 'px';
  };
  const up = () => {
    if (!dragging) return;
    dragging = false;
    el.classList.remove('dragging');
    if (moved) { el.dataset.justDragged = '1'; setTimeout(() => { delete el.dataset.justDragged; }, 60); }
  };
  el.addEventListener('mousedown', (e) => down(e.clientX, e.clientY));
  window.addEventListener('mousemove', (e) => move(e.clientX, e.clientY));
  window.addEventListener('mouseup', up);
  el.addEventListener('touchstart', (e) => { const t = e.touches[0]; down(t.clientX, t.clientY); }, { passive: true });
  window.addEventListener('touchmove', (e) => { if (dragging && moved) e.preventDefault(); if (dragging) { const t = e.touches[0]; move(t.clientX, t.clientY); } }, { passive: false });
  window.addEventListener('touchend', up);
}

/* ============================================================
   Window manager
   ============================================================ */
function createWindow({ id, title, subtitle, appName, bodyClass, bodyHtml, w = 560, h = 440, project = false }) {
  if (openWindows.has(id)) { focusWindow(openWindows.get(id)); return openWindows.get(id); }

  const win = document.createElement('div');
  win.className = 'window' + (project ? ' project' : '');
  win.dataset.id = id;

  // initial position: cascade, centered-ish
  const offset = openWindows.size * 26;
  const vw = window.innerWidth, vh = window.innerHeight;
  const left = Math.max(20, (vw - w) / 2 - 60 + offset);
  const top = Math.max(40, (vh - h) / 2 - 30 + offset);
  Object.assign(win.style, { width: w + 'px', height: h + 'px', left: left + 'px', top: top + 'px' });

  win.innerHTML = `
    <div class="win-titlebar">
      <div class="traffic">
        <span class="dot red" data-act="close"></span>
        <span class="dot yellow" data-act="min"></span>
        <span class="dot green" data-act="max"></span>
      </div>
      <div class="win-title">${title}${subtitle ? ` <span class="sub">— ${subtitle}</span>` : ''}</div>
      <div class="win-spacer"></div>
    </div>
    <div class="win-body ${bodyClass || ''}">${bodyHtml}</div>`;

  // traffic lights
  win.querySelector('[data-act="close"]').addEventListener('click', () => closeWindow(win));
  win.querySelector('[data-act="min"]').addEventListener('click', () => { win.style.display = 'none'; });
  win.querySelector('[data-act="max"]').addEventListener('click', () => toggleMax(win, w, h, left, top));

  // focus + drag
  win.addEventListener('mousedown', () => focusWindow(win));
  makeDraggable(win, win.querySelector('.win-titlebar'));

  winLayer.appendChild(win);
  openWindows.set(id, win);
  focusWindow(win);
  if (appName) win.dataset.app = appName;
  return win;
}

function focusWindow(win) {
  win.style.zIndex = ++zTop;
  win.style.display = '';
}

function closeWindow(win) {
  win.classList.add('closing');
  setTimeout(() => {
    openWindows.delete(win.dataset.id);
    win.remove();
  }, 130);
}

function toggleMax(win, w, h, left, top) {
  if (win.dataset.maxed === '1') {
    Object.assign(win.style, { width: w + 'px', height: h + 'px', left: left + 'px', top: top + 'px' });
    win.dataset.maxed = '0';
  } else {
    Object.assign(win.style, {
      left: '8px', top: (getMenubarH() + 8) + 'px',
      width: (window.innerWidth - 16) + 'px',
      height: (window.innerHeight - getMenubarH() - 16) + 'px',
    });
    win.dataset.maxed = '1';
  }
}
function getMenubarH() {
  return parseInt(getComputedStyle(document.documentElement).getPropertyValue('--menubar-h')) || 30;
}

/* ---------- dragging (mouse + touch) ---------- */
function makeDraggable(win, handle) {
  let sx, sy, ox, oy, dragging = false;
  const start = (cx, cy) => {
    if (win.dataset.maxed === '1') return;
    dragging = true; handle.classList.add('dragging');
    sx = cx; sy = cy; ox = win.offsetLeft; oy = win.offsetTop;
    focusWindow(win);
  };
  const move = (cx, cy) => {
    if (!dragging) return;
    let nx = ox + (cx - sx), ny = oy + (cy - sy);
    ny = Math.max(getMenubarH(), ny); // don't hide under menubar
    win.style.left = nx + 'px'; win.style.top = ny + 'px';
  };
  const end = () => { dragging = false; handle.classList.remove('dragging'); };

  handle.addEventListener('mousedown', (e) => { if (e.target.classList.contains('dot')) return; start(e.clientX, e.clientY); });
  window.addEventListener('mousemove', (e) => move(e.clientX, e.clientY));
  window.addEventListener('mouseup', end);

  handle.addEventListener('touchstart', (e) => { if (e.target.classList.contains('dot')) return; const t = e.touches[0]; start(t.clientX, t.clientY); }, { passive: true });
  window.addEventListener('touchmove', (e) => { if (dragging) { const t = e.touches[0]; move(t.clientX, t.clientY); } }, { passive: true });
  window.addEventListener('touchend', end);
}

/* ============================================================
   Window openers (one per file type)
   ============================================================ */
function openProfile() {
  createWindow({
    id: 'profile', title: 'Profile pic.png', appName: 'Preview', w: 460, h: 520,
    bodyClass: 'viewer', bodyHtml: `<img src="${pic(DATA.profile.profilePic, DATA.profile.name)}" alt="${DATA.profile.name}">`,
  });
}

function openReadme() {
  const body = `
    <div class="textedit-toolbar">
      <select class="te-select"><option>Helvetica</option></select>
      <select class="te-select"><option>Regular</option></select>
      <select class="te-select"><option>18</option></select>
      <span class="te-btn"><b>B</b></span><span class="te-btn"><i>I</i></span><span class="te-btn"><u>U</u></span>
    </div>
    <div class="textedit-ruler"></div>
    <div class="textedit-page">
      ${DATA.readme.paragraphs.map(p => {
        const style = p.style && p.style !== 'normal' ? p.style : (p.lead ? 'lead' : (p.small ? 'small' : ''));
        return `<p class="${style}">${p.text}</p>`;
      }).join('')}
    </div>`;
  createWindow({ id: 'readme', title: 'Read Me', subtitle: 'Edited', appName: 'TextEdit', w: 620, h: 560, bodyClass: '', bodyHtml: body });
}

function openPhotos() {
  // macOS Finder "Gallery" view: big preview + bottom filmstrip of thumbnails.
  const srcs = DATA.photos.map((p, i) => pic(p.image || p.img, String(i + 1).padStart(2, '0'),
    ['#c98a5e', '#5e7fc9', '#5ec98a', '#c95e9e', '#c9b85e', '#8a5ec9'][i % 6],
    ['#5e3a2a', '#2a345e', '#2a5e3a', '#5e2a4a', '#5e552a', '#3a2a5e'][i % 6]));

  const thumbs = srcs.map((s, i) =>
    `<button class="gallery-thumb${i === 0 ? ' active' : ''}" data-i="${i}"><img src="${s}" alt=""></button>`).join('');
  const html = `<div class="gallery">
      <div class="gallery-stage"><img class="gallery-main" src="${srcs[0] || ''}" alt=""></div>
      <div class="gallery-strip">${thumbs}</div>
    </div>`;

  const win = createWindow({ id: 'photos', title: 'Photos (Private)', appName: 'Finder', w: 840, h: 600, bodyClass: 'gallery-body', bodyHtml: html });

  const main = win.querySelector('.gallery-main');
  const tEls = [...win.querySelectorAll('.gallery-thumb')];
  const select = (i) => {
    if (!srcs[i]) return;
    main.src = srcs[i];
    tEls.forEach((t) => t.classList.toggle('active', +t.dataset.i === i));
    tEls[i].scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
  };
  tEls.forEach((t) => t.addEventListener('click', () => select(+t.dataset.i)));
  // click the big image to advance to the next one
  main.addEventListener('click', () => {
    const cur = tEls.findIndex((t) => t.classList.contains('active'));
    select((cur + 1) % srcs.length);
  });
}

function makePhotoDraggable(el) {
  let sx, sy, ox, oy, dragging = false, zc = 0;
  const start = (cx, cy) => { dragging = true; el.classList.add('dragging'); el.style.zIndex = ++zc + 1000; sx = cx; sy = cy; ox = el.offsetLeft; oy = el.offsetTop; };
  const move = (cx, cy) => { if (!dragging) return; el.style.left = (ox + cx - sx) + 'px'; el.style.top = (oy + cy - sy) + 'px'; };
  const end = () => { dragging = false; el.classList.remove('dragging'); };
  el.addEventListener('mousedown', (e) => { e.preventDefault(); start(e.clientX, e.clientY); });
  window.addEventListener('mousemove', (e) => move(e.clientX, e.clientY));
  window.addEventListener('mouseup', end);
  el.addEventListener('touchstart', (e) => { const t = e.touches[0]; start(t.clientX, t.clientY); }, { passive: true });
  window.addEventListener('touchmove', (e) => { if (dragging) { const t = e.touches[0]; move(t.clientX, t.clientY); } }, { passive: true });
  window.addEventListener('touchend', end);
}

function openCV() {
  const c = DATA.cv;
  // If a PDF was uploaded, show it directly in the window.
  if (c.pdf) {
    const body = `
      <div class="pdf-bar"><a href="${c.pdf}" target="_blank" rel="noopener">Open / download ↗</a></div>
      <iframe class="pdf-frame" src="${c.pdf}" title="${c.fileLabel || 'CV'}"></iframe>`;
    createWindow({ id: 'cv', title: (c.fileLabel || 'CV') + '.pdf', appName: 'Preview', w: 720, h: 680, bodyClass: 'pdf-viewer', bodyHtml: body });
    return;
  }
  const sections = (c.sections || []).map(s => {
    if (s.tags && s.tags.length) return `<h2>${s.title}</h2><div class="tags">${s.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>`;
    const rows = s.rows || [];
    return `<h2>${s.title}</h2>${rows.map(r => `
      <div class="row"><div class="what"><strong>${r.what}</strong><span>${r.sub || ''}</span></div><div class="when">${r.when || ''}</div></div>`).join('')}`;
  }).join('');
  const body = `<div class="doc"><h1>${c.name}</h1><p class="role">${c.role}</p>${sections}</div>`;
  createWindow({ id: 'cv', title: c.fileLabel + '.pdf', appName: 'Preview', w: 640, h: 600, bodyHtml: body });
}

function openMail() {
  const body = `<div class="doc">
    <h1>Inbox (1)</h1>
    <p class="role">Want to work together, or just say hi?</p>
    <h2>New message</h2>
    <p>Email me at <a href="mailto:${DATA.profile.email}">${DATA.profile.email}</a> — I read everything, I reply to most.</p>
    <div class="tags" style="margin-top:18px">
      <a class="tag" href="mailto:${DATA.profile.email}">✉︎ ${DATA.profile.email}</a>
      <a class="tag" href="${DATA.profile.instagram}" target="_blank" rel="noopener">Instagram</a>
    </div></div>`;
  createWindow({ id: 'mail', title: 'Mail', appName: 'Mail', w: 520, h: 420, bodyHtml: body });
}

function openProject(p) {
  const blocks = (p.blocks || []).map(b => {
    const lines = Array.isArray(b.lines) ? b.lines
      : (b.text ? String(b.text).split('\n').filter(Boolean) : []);
    return `<div class="block"><div class="block-title">${b.title || ''}</div>
      ${lines.map(l => `<div class="block-line">${l}</div>`).join('')}</div>`;
  }).join('');
  const links = (p.links && p.links.length)
    ? `<div class="links">${p.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`).join('')}</div>` : '';
  const bg = pic(p.bg, '', '#3a3a44', '#101014', 1600, 1000);
  const overlay = p.overlay || 'rgba(40,40,55,0.5)';
  const videoSrc = p.bgVideo || p.video || '';
  // Video background (autoplay/loop/muted) overrides the image; image becomes the poster.
  const videoLayer = videoSrc
    ? `<video class="project-video" src="${videoSrc}" autoplay muted loop playsinline poster="${bg}"></video>`
    : '';
  const bodyStyle = videoSrc ? '' : ` style="background-image:url('${bg}')"`;
  const body = `
    <div class="project-body"${bodyStyle}>
      ${videoLayer}
      <div class="project-overlay" style="background:${overlay}"></div>
      <div class="project-content">
        <h1>${p.title}${p.titleAlt ? `  <span style="opacity:.85">${p.titleAlt}</span>` : ''}</h1>
        <div class="meta">${p.meta}</div>
        <div class="synopsis">${p.synopsis}</div>
        ${blocks}${links}
      </div>
    </div>`;
  const win = createWindow({ id: p.id, title: p.label, appName: 'Projects', w: 880, h: 600, project: true, bodyHtml: body });
  // projects open maximized for impact
  toggleMax(win, 880, 600, win.offsetLeft, win.offsetTop);
}

/* ============================================================
   Live clock (independent of content)
   ============================================================ */
function tick() {
  const d = new Date();
  const p = (n) => String(n).padStart(2, '0');
  document.getElementById('clock').textContent = `${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
}
tick(); setInterval(tick, 1000);

/* ============================================================
   Boot: load content from CMS, then render desktop
   ============================================================ */
async function init() {
  await loadContent();
  // Desktop wallpaper from the CMS (falls back to the CSS gradient if empty).
  const wp = DATA.appearance && DATA.appearance.wallpaper;
  if (wp) document.documentElement.style.setProperty('--wallpaper', `url('${wp}')`);
  if (menuName) menuName.textContent = DATA.profile.name || '';
  document.getElementById('link-instagram').href = DATA.profile.instagram || '#';
  document.getElementById('link-email').href = 'mailto:' + (DATA.profile.email || '');
  renderIcons();
}
init();

window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('boot').classList.add('hidden'), 1500);
});
const hint = document.getElementById('hint');
setTimeout(() => hint.classList.add('hidden'), 5000);
