let score = 0;

function startGame() {
    moveTarget();
}

function moveTarget() {
    const gameArea = document.getElementById('gameArea');
    const target = document.getElementById('target');

    const maxX = gameArea.clientWidth - target.clientWidth;
    const maxY = gameArea.clientHeight - target.clientHeight;

    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);

    target.style.left = newX + 'px';
    target.style.top = newY + 'px';
}

function scorePoint() {
    score++;
    document.getElementById('currentScore').textContent = score;
    moveTarget();
}

window.onload = startGame;