document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.carousel-item');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  let current = 0;

  function showItem(idx) {
    items.forEach((item, i) => {
      item.classList.toggle('active', i === idx);
    });
  }

  prevBtn.addEventListener('click', () => {
    current = (current - 1 + items.length) % items.length;
    showItem(current);
  });

  nextBtn.addEventListener('click', () => {
    current = (current + 1) % items.length;
    showItem(current);
  });

  showItem(current);
});

// Snow Effect
const snowContainer = document.createElement('div');
snowContainer.id = 'snow';
document.body.appendChild(snowContainer);

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

// Big White Box Style
const style = document.createElement('style');
style.innerHTML = `
.big-white-box {
  background: #fff;
  color: #222;
  font-size: 3.5rem;
  font-weight: bold;
  border-radius: 32px;
  box-shadow: 0 4px 32px rgba(0,0,0,0.10);
  padding: 7vw 3vw;
  margin: 4vw auto;
  max-width: 96vw;
  width: 96vw;
  min-height: 70vh;      /* เพิ่มความสูงขั้นต่ำ */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
@media (min-width: 900px) {
  .big-white-box {
    font-size: 4rem;
    max-width: 1200px;
    width: 90vw;
    padding: 80px 40px;
    min-height: 70vh;    /* ให้สูงขึ้นบนจอใหญ่ */
  }
}
`;
document.head.appendChild(style);