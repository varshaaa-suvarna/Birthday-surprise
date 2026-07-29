/* ============================================================
   SCRIPT.JS
   Everything that makes the site move. Content comes from
   CONFIG (config.js) — you shouldn't need to edit text here.
============================================================ */

/* ---------------------------------------------------------
   0. SCENE MANAGER
   Every page is a <section class="scene" id="scene-x">.
   goTo("name") shows #scene-name and hides everything else.
--------------------------------------------------------- */
const scenes = document.querySelectorAll('.scene');

function goTo(name) {
  scenes.forEach(s => s.classList.remove('active'));
  const target = document.getElementById('scene-' + name);
  if (target) target.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  onSceneEnter(name);
}

/* Hooks that fire once, the moment a scene becomes visible */
function onSceneEnter(name) {
  if (name === 'timeline') observeTimelineItems();
  if (name === 'letter') startLetterTyping();
}

/* ---------------------------------------------------------
   1. AMBIENT LAYER — floating hearts + cursor sparkle
--------------------------------------------------------- */
const ambientLayer = document.getElementById('ambient-layer');
const floatEmojis = ['💜', '💛', '🌸', '✨', '🐾'];

function spawnFloaty() {
  const el = document.createElement('span');
  el.className = 'floaty';
  el.textContent = floatEmojis[Math.floor(Math.random() * floatEmojis.length)];
  el.style.left = Math.random() * 100 + 'vw';
  el.style.animationDuration = (10 + Math.random() * 8) + 's';
  el.style.fontSize = (16 + Math.random() * 14) + 'px';
  ambientLayer.appendChild(el);
  setTimeout(() => el.remove(), 20000);
}
setInterval(spawnFloaty, 1400);

document.addEventListener('mousemove', (e) => {
  if (Math.random() > 0.85) {
    const spark = document.createElement('div');
    spark.className = 'cursor-sparkle';
    spark.style.left = e.clientX + 'px';
    spark.style.top = e.clientY + 'px';
    document.body.appendChild(spark);
    setTimeout(() => spark.remove(), 600);
  }
});

/* ---------------------------------------------------------
   2. LOADING SCREEN
--------------------------------------------------------- */
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('loading-bar').style.width = '100%';
  setTimeout(() => goTo('password'), 2400);
});

/* ---------------------------------------------------------
   3. PASSWORD SCENE
--------------------------------------------------------- */
const passwordInput = document.getElementById('password-input');
const passwordHint = document.getElementById('password-hint');

function checkPassword() {
  const val = passwordInput.value.trim().toLowerCase();
  if (val === CONFIG.password.toLowerCase()) {
    goTo('welcome');
  } else {
    const card = passwordInput.closest('.glass-card');
    card.classList.remove('shake');
    void card.offsetWidth; // restart animation
    card.classList.add('shake');
    passwordHint.textContent = 'Not quite... try again 🐾';
  }
}
document.getElementById('password-submit').addEventListener('click', checkPassword);
passwordInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') checkPassword(); });

/* ---------------------------------------------------------
   4. WELCOME / YES / NO SCENES
--------------------------------------------------------- */
document.getElementById('welcome-heading').textContent = CONFIG.welcome.heading;
document.getElementById('welcome-yes').textContent = CONFIG.welcome.yesLabel;
document.getElementById('welcome-no').textContent = CONFIG.welcome.noLabel;
document.getElementById('no-text').textContent = CONFIG.welcome.noText;
document.getElementById('no-back-btn').textContent = CONFIG.welcome.noButton;
document.getElementById('yes-text').textContent = CONFIG.welcome.yesText;
document.getElementById('yes-continue-btn').textContent = CONFIG.welcome.yesButton;

document.getElementById('welcome-no').addEventListener('click', () => goTo('no'));
document.getElementById('no-back-btn').addEventListener('click', () => goTo('welcome'));

document.getElementById('welcome-yes').addEventListener('click', () => {
  goTo('yes');
  burstHearts();
});
document.getElementById('yes-continue-btn').addEventListener('click', () => {
  goTo('birthday');
  playBirthdayEffects();
});

function burstHearts() {
  const wrap = document.getElementById('heart-burst');
  wrap.innerHTML = '';
  for (let i = 0; i < 16; i++) {
    const h = document.createElement('span');
    h.textContent = ['❤️', '💕', '💜'][i % 3];
    const angle = (Math.PI * 2 * i) / 16;
    const dist = 80 + Math.random() * 40;
    h.style.setProperty('--dx', Math.cos(angle) * dist + 'px');
    h.style.setProperty('--dy', Math.sin(angle) * dist + 'px');
    wrap.appendChild(h);
  }
}

/* ---------------------------------------------------------
   5. BIRTHDAY REVEAL SCENE
--------------------------------------------------------- */
function buildLetterSpans() {
  const wrap = document.getElementById('hb-letters');
  wrap.innerHTML = '';
  const colors = ['var(--deep-purple)', 'var(--hot-pink)', 'var(--purple)', '#E0A800'];
  CONFIG.birthday.title.split('').forEach((ch, i) => {
    const span = document.createElement('span');
    span.textContent = ch === ' ' ? '\u00A0' : ch;
    span.style.color = colors[i % colors.length];
    span.style.animationDelay = (i * 0.06) + 's';
    wrap.appendChild(span);
  });
}
buildLetterSpans();
document.getElementById('hb-subtitle').textContent = CONFIG.birthday.subtitle;
document.getElementById('hb-photo').src = CONFIG.birthday.photo;

let birthdayEffectsPlayed = false;
function playBirthdayEffects() {
  if (birthdayEffectsPlayed) return;
  birthdayEffectsPlayed = true;
  const scene = document.getElementById('scene-birthday');
  const colors = ['#B79CE0', '#FF7FA8', '#FFD873', '#E7D9F7'];

  for (let i = 0; i < 60; i++) {
    const c = document.createElement('div');
    c.className = 'confetti-piece';
    c.style.left = Math.random() * 100 + '%';
    c.style.background = colors[i % colors.length];
    c.style.animationDuration = (2.5 + Math.random() * 2) + 's';
    c.style.animationDelay = (Math.random() * 1.5) + 's';
    scene.appendChild(c);
    setTimeout(() => c.remove(), 6000);
  }
  for (let i = 0; i < 6; i++) {
    const b = document.createElement('div');
    b.className = 'balloon';
    b.textContent = ['🎈', '🎈', '🎈'][i % 3];
    b.style.left = (10 + i * 15) + '%';
    b.style.animationDuration = (6 + Math.random() * 2) + 's';
    scene.appendChild(b);
    setTimeout(() => b.remove(), 9000);
  }
  for (let i = 0; i < 20; i++) {
    const s = document.createElement('div');
    s.className = 'sparkle-bit';
    s.textContent = '✨';
    s.style.left = Math.random() * 100 + '%';
    s.style.top = Math.random() * 100 + '%';
    s.style.animationDelay = Math.random() * 1.6 + 's';
    scene.appendChild(s);
    setTimeout(() => s.remove(), 6000);
  }
}
document.getElementById('birthday-next-btn').addEventListener('click', () => goTo('memories'));

/* ---------------------------------------------------------
   6. MEMORIES / GALLERY SCENE
--------------------------------------------------------- */
const galleryGrid = document.getElementById('gallery-grid');
function renderGallery(filter = '') {
  galleryGrid.innerHTML = '';
  CONFIG.memories.images
    .filter(img => img.caption.toLowerCase().includes(filter.toLowerCase()))
    .forEach(img => {
      const fig = document.createElement('figure');
      fig.innerHTML = `<img src="${img.src}" alt="${img.caption}" loading="lazy" onerror="this.alt='📷 add ${img.src}'">
                        <figcaption>${img.caption}</figcaption>`;
      fig.addEventListener('click', () => openLightbox(img.src, img.caption));
      galleryGrid.appendChild(fig);
    });
}
renderGallery();
document.getElementById('gallery-search').addEventListener('input', (e) => renderGallery(e.target.value));

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
function openLightbox(src, caption) {
  lightboxImg.src = src;
  lightboxImg.alt = caption;
  lightbox.classList.add('active');
}
document.getElementById('lightbox-close').addEventListener('click', () => lightbox.classList.remove('active'));
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.classList.remove('active'); });

document.getElementById('memories-next-btn').addEventListener('click', () => goTo('timeline'));

/* ---------------------------------------------------------
   7. TIMELINE SCENE
--------------------------------------------------------- */
const timelineList = document.getElementById('timeline-list');
CONFIG.timeline.forEach(item => {
  const div = document.createElement('div');
  div.className = 'timeline-item';
  div.setAttribute('data-icon', item.icon);
  div.innerHTML = `<div class="glass-card"><h3>${item.title}</h3><p>${item.text}</p></div>`;
  timelineList.appendChild(div);
});

let timelineObserved = false;
function observeTimelineItems() {
  if (timelineObserved) return;
  timelineObserved = true;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
  }, { threshold: 0.2 });
  document.querySelectorAll('.timeline-item').forEach(el => io.observe(el));
}
document.getElementById('timeline-next-btn').addEventListener('click', () => goTo('reasons'));

/* ---------------------------------------------------------
   8. REASONS FLIP CARDS SCENE
--------------------------------------------------------- */
const flipGrid = document.getElementById('flip-grid');
CONFIG.reasons.forEach(r => {
  const card = document.createElement('div');
  card.className = 'flip-card';
  card.innerHTML = `
    <div class="flip-inner">
      <div class="flip-front">${r.title}</div>
      <div class="flip-back">${r.text}</div>
    </div>`;
  card.addEventListener('click', () => card.classList.toggle('flipped'));
  flipGrid.appendChild(card);
});
document.getElementById('reasons-next-btn').addEventListener('click', () => goTo('music'));

/* ---------------------------------------------------------
   9. MUSIC PLAYER SCENE
--------------------------------------------------------- */
document.getElementById('song-title').textContent = CONFIG.music.title;
document.getElementById('song-artist').textContent = CONFIG.music.artist;

const audio = document.getElementById('audio-player');
audio.src = CONFIG.music.src;
const playBtn = document.getElementById('play-btn');
const cassette = document.getElementById('cassette');
const progressTrack = document.getElementById('progress-track');
const progressFill = document.getElementById('progress-fill');
const lyricsBox = document.getElementById('lyrics-box');

playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play().catch(() => { lyricsBox.textContent = 'Add your song file to /music to hear it play 🎵'; });
    playBtn.textContent = '⏸';
    cassette.classList.add('playing');
  } else {
    audio.pause();
    playBtn.textContent = '▶';
    cassette.classList.remove('playing');
  }
});
audio.addEventListener('timeupdate', () => {
  if (audio.duration) progressFill.style.width = (audio.currentTime / audio.duration * 100) + '%';
});
progressTrack.addEventListener('click', (e) => {
  const rect = progressTrack.getBoundingClientRect();
  const ratio = (e.clientX - rect.left) / rect.width;
  if (audio.duration) audio.currentTime = ratio * audio.duration;
});

let lyricIndex = 0;
let lyricInterval = null;
function startLyricCycle() {
  if (lyricInterval || !CONFIG.music.lyrics.length) return;
  lyricInterval = setInterval(() => {
    lyricsBox.style.opacity = 0;
    setTimeout(() => {
      lyricsBox.textContent = CONFIG.music.lyrics[lyricIndex % CONFIG.music.lyrics.length];
      lyricsBox.style.transition = 'opacity 0.4s ease';
      lyricsBox.style.opacity = 1;
      lyricIndex++;
    }, 300);
  }, 3000);
}
startLyricCycle();
lyricsBox.textContent = CONFIG.music.lyrics[0] || '';

setInterval(() => {
  const noteEl = document.getElementById('scene-music');
  if (!noteEl.classList.contains('active') || audio.paused) return;
  const note = document.createElement('span');
  note.className = 'note-float';
  note.textContent = ['🎵', '🎶'][Math.floor(Math.random() * 2)];
  note.style.left = (20 + Math.random() * 60) + '%';
  note.style.bottom = '120px';
  document.getElementById('scene-music').appendChild(note);
  setTimeout(() => note.remove(), 5000);
}, 900);

document.getElementById('music-next-btn').addEventListener('click', () => {
  audio.pause();
  playBtn.textContent = '▶';
  cassette.classList.remove('playing');
  goTo('envelope');
});

/* ---------------------------------------------------------
   10. ENVELOPE SCENE
--------------------------------------------------------- */
const envelope = document.getElementById('envelope');
let envelopeOpened = false;
envelope.addEventListener('click', () => {
  if (envelopeOpened) return;
  envelopeOpened = true;
  envelope.classList.add('open');
  const wrap = envelope.parentElement;
  const flowers = ['🌸', '🌷', '🌼', '💐'];
  for (let i = 0; i < 10; i++) {
    const f = document.createElement('span');
    f.className = 'bloom-flower';
    f.textContent = flowers[i % flowers.length];
    f.style.position = 'absolute';
    f.style.left = (10 + Math.random() * 80) + '%';
    f.style.top = (Math.random() * 60) + '%';
    f.style.animationDelay = (i * 0.08) + 's';
    wrap.appendChild(f);
    setTimeout(() => f.remove(), 2500);
  }
  setTimeout(() => goTo('letter'), 1600);
});

/* ---------------------------------------------------------
   11. LETTER SCENE — typing animation
--------------------------------------------------------- */
const letterPaper = document.getElementById('letter-paper');
const letterNextBtn = document.getElementById('letter-next-btn');
let letterTyped = false;

function startLetterTyping() {
  if (letterTyped) return;
  letterTyped = true;
  const fullText = CONFIG.letter.salutation + '\n\n' + CONFIG.letter.body + '\n\n' + CONFIG.letter.signoff;
  letterPaper.textContent = '';
  const cursor = document.createElement('span');
  cursor.className = 'letter-cursor';
  let i = 0;
  const speed = 14;
  function typeChar() {
    if (i <= fullText.length) {
      letterPaper.textContent = fullText.slice(0, i);
      letterPaper.appendChild(cursor);
      letterPaper.scrollTop = letterPaper.scrollHeight;
      i++;
      setTimeout(typeChar, speed);
    } else {
      cursor.remove();
      letterNextBtn.style.display = 'inline-block';
    }
  }
  typeChar();
}
letterNextBtn.addEventListener('click', () => goTo('wishes'));

/* ---------------------------------------------------------
   12. WISHES WALL SCENE
--------------------------------------------------------- */
const wishesGrid = document.getElementById('wishes-grid');
CONFIG.wishes.forEach(text => {
  const note = document.createElement('div');
  note.className = 'sticky-note';
  note.style.setProperty('--tilt', (Math.random() * 8 - 4) + 'deg');
  note.style.animationDelay = (Math.random() * 2) + 's';
  note.textContent = text;
  wishesGrid.appendChild(note);
});
document.getElementById('wishes-next-btn').addEventListener('click', () => {
  goTo('final');
  playFinalEffects();
});

/* ---------------------------------------------------------
   13. FINAL SURPRISE SCENE
--------------------------------------------------------- */
document.getElementById('final-heading').textContent = CONFIG.final.heading;
document.getElementById('final-body').textContent = CONFIG.final.body;
document.getElementById('replay-btn').textContent = CONFIG.final.replayButton;
document.getElementById('replay-btn').addEventListener('click', () => location.reload());

let finalEffectsPlayed = false;
function playFinalEffects() {
  if (finalEffectsPlayed) return;
  finalEffectsPlayed = true;
  const scene = document.getElementById('scene-final');
  const fireColors = ['#FF7FA8', '#FFD873', '#B79CE0', '#fff'];

  function burstFireworkAt(xPct, yPct) {
    for (let i = 0; i < 18; i++) {
      const p = document.createElement('div');
      p.className = 'firework';
      const angle = (Math.PI * 2 * i) / 18;
      const dist = 60 + Math.random() * 40;
      p.style.setProperty('--fx', Math.cos(angle) * dist + 'px');
      p.style.setProperty('--fy', Math.sin(angle) * dist + 'px');
      p.style.left = xPct + '%';
      p.style.top = yPct + '%';
      p.style.background = fireColors[i % fireColors.length];
      scene.appendChild(p);
      setTimeout(() => p.remove(), 1100);
    }
  }
  let bursts = 0;
  const burstTimer = setInterval(() => {
    burstFireworkAt(15 + Math.random() * 70, 15 + Math.random() * 40);
    bursts++;
    if (bursts > 8) clearInterval(burstTimer);
  }, 500);

  for (let i = 0; i < 25; i++) {
    const h = document.createElement('div');
    h.className = 'heart-rain';
    h.textContent = ['❤️', '💜', '💕'][i % 3];
    h.style.left = Math.random() * 100 + '%';
    h.style.animationDuration = (4 + Math.random() * 3) + 's';
    h.style.animationDelay = (Math.random() * 2) + 's';
    scene.appendChild(h);
    setTimeout(() => h.remove(), 9000);
  }
  for (let i = 0; i < 6; i++) {
    const l = document.createElement('div');
    l.className = 'lantern';
    l.textContent = '🏮';
    l.style.left = (5 + i * 16) + '%';
    l.style.animationDuration = (8 + Math.random() * 3) + 's';
    l.style.animationDelay = (Math.random() * 2) + 's';
    scene.appendChild(l);
    setTimeout(() => l.remove(), 12000);
  }
  for (let i = 0; i < 40; i++) {
    const c = document.createElement('div');
    c.className = 'confetti-piece';
    c.style.left = Math.random() * 100 + '%';
    c.style.background = fireColors[i % fireColors.length];
    c.style.animationDuration = (3 + Math.random() * 2) + 's';
    c.style.animationDelay = (Math.random() * 1.5) + 's';
    scene.appendChild(c);
    setTimeout(() => c.remove(), 6000);
  }
}
