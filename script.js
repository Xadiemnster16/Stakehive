let multiplier = 1.0;
let interval;
let gameRunning = false;

document.getElementById("startBtn").addEventListener("click", () => {
  if (gameRunning) return;
  gameRunning = true;
  multiplier = 1.0;
  document.getElementById("status").innerText = "🚀 Launching...";
  interval = setInterval(() => {
    multiplier += Math.random() * 0.1;
    document.getElementById("status").innerText = `🚀 ${multiplier.toFixed(2)}x`;
    if (multiplier >= Math.random() * 5 + 1) {
      clearInterval(interval);
      document.getElementById("status").innerText = `💥 Crashed at ${multiplier.toFixed(2)}x!`;
      gameRunning = false;
    }
  }, 500);
});