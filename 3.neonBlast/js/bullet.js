class Bullet {
	constructor(x, y, r) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.toRemove = false;
	}



	update() {
		this.y -= 3;

		if (this.y + this.r < 0) {
			this.toRemove = true;
		}
	}


	draw() {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI);
		ctx.fill();
		ctx.closePath();
	}
}