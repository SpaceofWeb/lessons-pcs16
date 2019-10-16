let canv = document.createElement('canvas');

let width = canv.width = window.innerWidth;
let height = canv.height = window.innerHeight;

let ctx = canv.getContext('2d');
document.body.appendChild(canv);


let player = new Player(100, height-100, 100, 100);

// let bullet = new Bullet(100, height-100, 15);

let BULLETS = [];


loop();


function loop() {
	update();
	draw();

	requestAnimationFrame(loop);
}



function update() {
	player.update();

	for (let i = 0; i < BULLETS.length; i++) {
		BULLETS[i].update();

		if (BULLETS[i].toRemove === true) {
			BULLETS.splice(i, 1);
		}
	}
}



function draw() {
	ctx.clearRect(0, 0, width, height);
	player.draw();

	for (let b of BULLETS) {
		b.draw();
	}
}



document.addEventListener('keydown', e => {
	player.keyPress(e.keyCode);
});



document.addEventListener('keyup', e => {
	player.keyRelease(e.keyCode);
});

