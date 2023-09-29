class Insect {
    constructor(y, canvasWidth) {
        this.x = canvasWidth;
        this.y = y;
        this.image = new Image();
        this.image.src = "../spritesheets/insect.png";
        this.spriteHeight = 309;
        this.spriteWidth = 550;
        this.frame = 0;
        this.timer = 0;
        this.width = canvasWidth * 0.1;
        this.height = canvasWidth * 0.07;
        this.inDanger = false;
    }
    draw(ctx) {
        this.timer++;
        if (this.timer % 30 === 0) this.frame++;
        if (this.frame > 1) this.frame = 0;
        ctx.drawImage(
            this.image,
            this.frame * this.spriteWidth,
            0,
            this.spriteWidth,
            this.spriteHeight,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }
    update() {
        this.x += -2;
    }
}

export default Insect;
