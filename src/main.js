import "./style.css";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function draw() {
  // Fill canvas with white
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw red circle in the middle
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0, Math.PI * 2);
  ctx.fill();
}

function gameLoop() {
  draw();
  requestAnimationFrame(gameLoop);
}

// Initial setup
resizeCanvas();

// Handle window resize
window.addEventListener("resize", resizeCanvas);

// Start the game loop
gameLoop();
