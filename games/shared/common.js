/* ===== GAME_ZONE shared overlay + confetti ===== */
const overlay = document.getElementById('overlay');
const overlayTag = document.getElementById('overlayTag');
const overlayTitle = document.getElementById('overlayTitle');
const overlaySubtitle = document.getElementById('overlaySubtitle');
const overlayBtn = document.getElementById('overlayBtn');
let overlayAction = null;

function showOverlay(tag, title, subtitle, action, celebrate){
  overlayTag.textContent = tag;
  overlayTitle.textContent = title;
  overlaySubtitle.textContent = subtitle;
  overlayAction = action;
  overlay.classList.add('show');
  if (celebrate) launchConfetti();
}
function hideOverlay(){
  overlay.classList.remove('show');
}
overlayBtn.addEventListener('click', () => {
  hideOverlay();
  if (overlayAction) overlayAction();
});
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) hideOverlay();
});

function launchConfetti(){
  const colors = ['#3dffa0', '#ffb020', '#6d8f83', '#d3ece1'];
  for (let i = 0; i < 50; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + 'vw';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = (2 + Math.random() * 1.5) + 's';
    piece.style.opacity = 0.6 + Math.random() * 0.3;
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 3600);
  }
}
