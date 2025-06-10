// Snow effect
const snowContainer = document.getElementById('snow');
const snowSymbols = ['❄', '˚', '༘', '♡', '⋆｡', '❀'];
for (let i = 0; i < 60; i++) {
  const snowflake = document.createElement('div');
  snowflake.className = 'snowflake';
  snowflake.style.left = Math.random() * 100 + 'vw';
  snowflake.style.animationDuration = (Math.random() * 2 + 3) + 's';
  snowflake.style.opacity = Math.random();
  snowflake.style.fontSize = (Math.random() * 16 + 10) + 'px';
  snowflake.innerText = snowSymbols[Math.floor(Math.random() * snowSymbols.length)];
  snowContainer.appendChild(snowflake);
}

window.addEventListener('click', function playAudioOnce() {
  const audio = document.getElementById('bg-audio');
  if (audio) {
    audio.play();
    window.removeEventListener('click', playAudioOnce);
  }
});