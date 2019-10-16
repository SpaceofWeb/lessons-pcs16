class Player {
	constructor(x, y, w, h) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.delay = 0;
		this.keys = {
			'37': false,
			'39': false
		};
	}

	

	update() {
		if (this.keys['37']) this.x -= 6;
		if (this.keys['39']) this.x += 6;

		this.x = Math.max(0, Math.min(width - this.w, this.x));

		let t = new Date().getTime();
		if (this.delay <= t) {
			let b = new Bullet(this.x + this.w/2, this.y - this.h/2, 15);
			BULLETS.push(b);
			this.delay = t + 700;
		}
	}


	draw() {
		ctx.fillRect(this.x, this.y, this.w, this.h);
	}


	keyPress(keyCode) {
		if (this.keys[keyCode] !== undefined)
			this.keys[keyCode] = true;
	}


	keyRelease(keyCode) {
		if (this.keys[keyCode] !== undefined)
			this.keys[keyCode] = false;
	}
}

