class Platform {
	constructor() {
		this.img = images.platform;
		this.w = 100;
		this.h = 50;
		this.x = randFloat(500, images.bg.width - 500);
		this.y = randFloat(height - 100, height - 150);
	}



	update() {
		this.checkCollide();
	}


	checkCollide() {
		let A = {
			x: player.x + bgShift,
			y: player.y,
			w: player.w,
			h: player.h
		};

		let B = {
			x: this.x,
			y: this.y,
			w: this.w,
			h: this.h
		};


		if ((player.jumping || 
				player.climbed) &&  
				player.velocity.y > 0 && 
				A.y + A.h > B.y && 
				A.x + A.w > B.x && 
				A.x < B.x + B.w && 
				A.y + A.h <= B.y + 15) {

			player.climbed = true;
			player.jumping = false;
			player.y = this.y - player.h + 10;
			player.velocity.y = 0;
		}
	}


	draw() {
		ctx.drawImage(this.img, this.x - bgShift, this.y, this.w, this.h);
	}
}