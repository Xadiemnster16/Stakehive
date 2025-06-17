let multiplier = 1.00;
let interval;
const display = document.getElementById("multiplier");
const startButton = document.getElementById("startGame");
const themeToggle = document.getElementById("themeToggle");
let isDark = true;

startButton.onclick = () => {
  clearInterval(interval);
  multiplier = 1.00;
  display.textContent = multiplier.toFixed(2) + 'x';
  interval = setInterval(() => {
    multiplier += 0.01;
    display.textContent = multiplier.toFixed(2) + 'x';
    if (multiplier >= 10) clearInterval(interval);
  }, 100);
};

themeToggle.onclick = () => {
  document.body.style.background = isDark ? '#fff' : '#111';
  document.body.style.color = isDark ? '#000' : '#fff';
  isDark = !isDark;
};
