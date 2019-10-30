let $start = document.querySelector('#start'),
		$game = document.querySelector('#game'),
		$end = document.querySelector('#end'),
		$tableName = document.querySelector('#tableName'),
		$tableHP = document.querySelector('#tableHP'),
		$tableBananas = document.querySelector('#tableBananas'),
		$tableTime = document.querySelector('#tableTime');



let G = 1;
let images = {},
		width,
		height,
		canvas,
		ctx,
		bananas,
		hp,
		startTime,
		name,
		interval,
		imageCounter = 0,
		allImageCount = 2,
		imageLoaded = false;


let imgs = {
	bg: 'media/bg/bg.png',
	ground: 'media/clipart/194900.png',
};



load();

function load() {
	for (let i in imgs) {
		let img = new Image();

		img.onload = () => {
			images[i] = img;
			imageCounter++;

			if (imageCounter === allImageCount) {
				imageLoaded = true;
				init();
			}
		};
		img.src = imgs[i];
	}
}





function init() {
	bananas = 0;
	hp = 100;
	startTime = new Date().getTime();
	name = 'asd';
	$tableName.innerText = name;

	canvas = document.createElement('canvas');
	width = canvas.width = window.innerWidth;
	height = canvas.height = window.innerHeight;
	ctx = canvas.getContext('2d');
	document.body.appendChild(canvas);


	updateTimer();
	interval = setInterval(() => {
		// hp--;
		updateTimer();
		// addSnake();
		
		if (hp < 0) {
			clearInterval(interval);
			die();
		}
	}, 1000);

	loop();
}



function loop() {
	update();
	draw();

	requestAnimationFrame(loop);
}



function update() {
	
}



function draw() {
	ctx.drawImage(images.bg, 0, 0, width, images.bg.height,
								0, 0, width, height);
}



function updateTimer() {
	$tableTime.innerText = Math.floor((new Date().getTime() - startTime) / 1000);
	$tableHP.innerText = hp;
}



function die() {
	// alert('game ended!');
	$game.style.display = 'none';
	$end.style.display = 'block';
}










