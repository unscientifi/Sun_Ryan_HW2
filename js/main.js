(() => {
  console.log('SVG ICONS');

const iconSet = document.querySelectorAll('svg');

function logThisIcon() {
console.log('clicked on this icon:', this.id);

const audio = new Audio('heartbeat.mp3');
audio.play();

this.style.opacity = 0.3;
}

iconSet.forEach(icon => icon.addEventListener('click',logThisIcon));
})();
