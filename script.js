/* ==========================================================================
   AANCHAL'S RETRO DESK & CREATIVE WORKSTATION - INTERACTIVE SCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // ---------- 1. LIVE DIGITAL SYSTEM CLOCK ----------
  const clockEl = document.getElementById('systemClock');
  function updateClock() {
    if (!clockEl) return;
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    clockEl.textContent = `${h}:${m}:${s}`;
  }
  updateClock();
  setInterval(updateClock, 1000);

  // ---------- 2. MECHANICAL KEYBOARD AUDIO SYNTHESIZER (WEB AUDIO API) ----------
  let audioCtx = null;
  let soundEnabled = true;

  function initAudio() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
  }

  // Synthesize realistic retro mechanical key clack
  function playKeyClickSound(frequency = 420) {
    if (!soundEnabled) return;
    initAudio();
    if (!audioCtx) return;

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const now = audioCtx.currentTime;

    // High transient snap (switch tactile bump)
    const snapOsc = audioCtx.createOscillator();
    const snapGain = audioCtx.createGain();
    snapOsc.type = 'triangle';
    snapOsc.frequency.setValueAtTime(frequency * 1.6, now);
    snapOsc.frequency.exponentialRampToValueAtTime(140, now + 0.04);
    snapGain.gain.setValueAtTime(0.18, now);
    snapGain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

    snapOsc.connect(snapGain);
    snapGain.connect(audioCtx.destination);
    snapOsc.start(now);
    snapOsc.stop(now + 0.04);

    // Low resonant body "thump" (chunky keycap bottoming out)
    const bodyOsc = audioCtx.createOscillator();
    const bodyGain = audioCtx.createGain();
    bodyOsc.type = 'sine';
    bodyOsc.frequency.setValueAtTime(frequency * 0.7, now);
    bodyOsc.frequency.exponentialRampToValueAtTime(60, now + 0.07);
    bodyGain.gain.setValueAtTime(0.22, now);
    bodyGain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

    bodyOsc.connect(bodyGain);
    bodyGain.connect(audioCtx.destination);
    bodyOsc.start(now);
    bodyOsc.stop(now + 0.07);
  }

  // Toggle Sound Button
  const soundToggleBtn = document.getElementById('soundToggle');
  const soundStatusText = document.getElementById('soundStatus');

  if (soundToggleBtn && soundStatusText) {
    soundToggleBtn.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      soundStatusText.textContent = soundEnabled ? 'ON' : 'MUTED';
      soundToggleBtn.querySelector('.sound-icon').textContent = soundEnabled ? '🔊' : '🔇';
      if (soundEnabled) {
        playKeyClickSound(520);
      }
    });
  }

  // ---------- 3. DESK LAMP (DAY / NIGHT THEME) TOGGLE ----------
  const lampToggleBtn = document.getElementById('lampToggle');
  const lampStatusText = document.getElementById('lampStatus');

  if (lampToggleBtn && lampStatusText) {
    lampToggleBtn.addEventListener('click', () => {
      playKeyClickSound(340);
      const isNight = document.body.classList.toggle('theme-night');
      lampStatusText.textContent = isNight ? 'COZY' : 'DAY';
      lampToggleBtn.querySelector('.lamp-icon').textContent = isNight ? '🌙' : '💡';
    });
  }

  // ---------- 4. CRT PHOSPHOR MODE KNOB ----------
  const crtKnob = document.getElementById('crtColorMode');
  const crtMonitor = document.querySelector('.crt-monitor');
  const phosphorModes = ['', 'crt-phosphor-amber', 'crt-phosphor-white'];
  let currentPhosphorIdx = 0;

  if (crtKnob && crtMonitor) {
    crtKnob.addEventListener('click', () => {
      playKeyClickSound(600);
      // Remove previous class
      if (phosphorModes[currentPhosphorIdx]) {
        crtMonitor.classList.remove(phosphorModes[currentPhosphorIdx]);
      }
      currentPhosphorIdx = (currentPhosphorIdx + 1) % phosphorModes.length;
      if (phosphorModes[currentPhosphorIdx]) {
        crtMonitor.classList.add(phosphorModes[currentPhosphorIdx]);
      }
      // Rotate knob
      crtKnob.style.transform = `rotate(${currentPhosphorIdx * 60}deg)`;
    });
  }

  // ---------- 5. INTERACTIVE RETRO KEYBOARD & TERMINAL ----------
  const interactiveOutput = document.getElementById('interactiveOutput');
  const keys = document.querySelectorAll('.key');

  const keyResponses = {
    'esc': 'Terminal buffer reset. System ready.',
    '2': 'Archive 2026: 3D character animation & rig files active.',
    '0': 'Zero rendering artifacts. All edge-loops optimized.',
    'cat': 'Cat Key: "Meow! Keep creating and don\'t forget to stretch!" 🐾',
    'ten': 'Jumping down to Selected Works dossier...',
    'smile': 'Smile Key: "Creativity is intelligence having fun!" 😊',
    '6': 'Loaded 64 storyboard panels into preview memory.',
    'ctrl': 'Director Mode: Full character rig IK/FK controls unlocked.',
    'up': 'Scrolling smooth back to the top of Aanchal\'s desk...'
  };

  keys.forEach(key => {
    key.addEventListener('click', () => {
      const keyId = key.getAttribute('data-key');
      
      // Sound feedback
      playKeyClickSound(Math.random() * 120 + 380);

      // Visual press animation
      key.classList.add('key-pressed');
      setTimeout(() => key.classList.remove('key-pressed'), 140);

      // Trigger action / response
      if (keyResponses[keyId] && interactiveOutput) {
        interactiveOutput.textContent = keyResponses[keyId];
        interactiveOutput.style.color = '#38bdf8';
      }

      if (keyId === 'ten') {
        const projSec = document.getElementById('projects');
        if (projSec) projSec.scrollIntoView({ behavior: 'smooth' });
      }

      if (keyId === 'up') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });

  // Also support physical keyboard typing feedback
  window.addEventListener('keydown', (e) => {
    // Only if not focused on inputs
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
    playKeyClickSound(420);
  });

  // ---------- 6. COPY EMAIL BUTTON ----------
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const copiedToast = document.getElementById('copiedToast');

  if (copyEmailBtn && copiedToast) {
    copyEmailBtn.addEventListener('click', () => {
      playKeyClickSound(480);
      const email = 'aanchalgrng@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        copiedToast.classList.add('show');
        setTimeout(() => {
          copiedToast.classList.remove('show');
        }, 3000);
      }).catch(() => {
        prompt('Copy email:', email);
      });
    });
  }

  // ---------- 7. PROJECT FILTERING ----------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-dossier-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      playKeyClickSound(400);
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        if (filterVal === 'all' || categories.includes(filterVal)) {
          card.style.display = 'block';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ---------- 8. STORYBOARD DOSSIER MODAL ----------
  const modal = document.getElementById('projectModal');
  const modalOpenBtns = document.querySelectorAll('[data-target="modal-yuna"]');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalCloseFooterBtn = document.getElementById('modalCloseFooterBtn');
  const modalBackdrop = document.getElementById('modalBackdrop');

  function openModal() {
    playKeyClickSound(450);
    if (modal) {
      modal.classList.add('modal-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    playKeyClickSound(360);
    if (modal) {
      modal.classList.remove('modal-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  modalOpenBtns.forEach(btn => btn.addEventListener('click', openModal));
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalCloseFooterBtn) modalCloseFooterBtn.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('modal-open')) {
      closeModal();
    }
  });

  // ---------- 9. INTERACTIVE DESK GUESTBOOK (LOCAL STORAGE PERSISTENCE) ----------
  const deskNoteForm = document.getElementById('deskNoteForm');
  const corkboardWall = document.getElementById('corkboardWall');

  const pinColors = ['red-pin', 'blue-pin', 'yellow-pin'];
  const noteColors = ['yellow-note', 'blue-note', 'pink-note'];

  if (deskNoteForm && corkboardWall) {
    deskNoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      playKeyClickSound(520);

      const nameInput = document.getElementById('visitorName');
      const msgInput = document.getElementById('visitorMsg');

      const author = nameInput.value.trim() || 'Anonymous Friend';
      const body = msgInput.value.trim();

      if (!body) return;

      const randomPin = pinColors[Math.floor(Math.random() * pinColors.length)];
      const randomColor = noteColors[Math.floor(Math.random() * noteColors.length)];
      const randomRot = (Math.random() * 8 - 4).toFixed(1);

      const newNote = document.createElement('div');
      newNote.className = `cork-note ${randomColor}`;
      newNote.style.transform = `rotate(${randomRot}deg)`;
      newNote.innerHTML = `
        <div class="pin-dot ${randomPin}"></div>
        <p class="note-author">@${author.replace(/\s+/g, '_').toLowerCase()}</p>
        <p class="note-body">"${body}"</p>
        <span class="note-time">Just now ✨</span>
      `;

      corkboardWall.prepend(newNote);
      deskNoteForm.reset();

      // Gentle visual feedback
      newNote.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  // ---------- 10. SCROLL REVEAL / NAV LINK ACTIVE HIGHLIGHT ----------
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desk-nav .nav-link');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 140;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('data-nav') === sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  });
});
