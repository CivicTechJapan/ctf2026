// ---- Countdown ----
const targetDate = new Date('2026-05-23T10:00:00+09:00');

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById('days').textContent    = '00';
    document.getElementById('hours').textContent   = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    return;
  }

  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  document.getElementById('days').textContent    = String(d).padStart(2, '0');
  document.getElementById('hours').textContent   = String(h).padStart(2, '0');
  document.getElementById('minutes').textContent = String(m).padStart(2, '0');
  document.getElementById('seconds').textContent = String(s).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ---- Particles ----
const container = document.getElementById('particles');
for (let i = 0; i < 25; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  p.style.left = Math.random() * 100 + 'vw';
  p.style.width = (Math.random() * 3 + 1) + 'px';
  p.style.height = p.style.width;
  p.style.animationDuration = (Math.random() * 12 + 8) + 's';
  p.style.animationDelay = (Math.random() * 10) + 's';
  container.appendChild(p);
}
