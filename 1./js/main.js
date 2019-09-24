let canv = document.createElement('canvas');
let ctx = canv.getContext('2d');

canv.width = window.innerWidth;
canv.height = window.innerHeight;

document.body.appendChild(canv);

let playerX;


init();

function init() {
	playerX = 0;

	loop();
}


function loop() {
	draw();

	requestAnimationFrame(loop);
}


function draw() {
	ctx.clearRect(0, 0, 
		window.innerWidth, window.innerHeight);

	ctx.fillRect(playerX, 100, 100, 100);

	playerX++;
}



