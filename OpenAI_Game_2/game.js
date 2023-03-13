// Constants
const PLAYER_WIDTH = 40;
const PLAYER_HEIGHT = 40;
const PLAYER_SPEED = 10;

// Variables
let playerX = window.innerWidth / 2 - PLAYER_WIDTH / 2;
let playerY = window.innerHeight * 0.9 - PLAYER_HEIGHT / 2;

// DOM Elements
const player = document.getElementById('player');

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear the canvas
    drawPlayer();
    // rest of your code for drawing enemies, bullets, etc.
  }
  
// Player Movement
function movePlayer(event) {
	switch (event.key) {
		case 'ArrowLeft':
			playerX -= PLAYER_SPEED;
			break;
		case 'ArrowRight':
			playerX += PLAYER_SPEED;
			break;
		case 'ArrowUp':
			playerY -= PLAYER_SPEED;
			break;
		case 'ArrowDown':
			playerY += PLAYER_SPEED;
			break;
	}
	// Keep the player inside the screen
	if (playerX < 0) {
		playerX = 0;
	}
	if (playerX > window.innerWidth - PLAYER_WIDTH) {
		playerX = window.innerWidth - PLAYER_WIDTH;
	}
	if (playerY < 0) {
		playerY = 0;
	}
	if (playerY > window.innerHeight - PLAYER_HEIGHT) {
		playerY = window.innerHeight - PLAYER_HEIGHT;
	}
	// Move the player element
	player.style.transform = `translate(${playerX}px, ${playerY}px)`;
}

// Event Listeners
window.addEventListener('keydown', movePlayer);
