class Owl {
    constructor(x, y, cH, cW) {
        this.x = x;
        this.y = y;
        this.image = new Image();
        this.image.src = "../../spritesheets/owl.png";
        this.spriteWidth = 400;
        this.spriteHeight = 321;
        this.frame = 0;
        this.yFrame = 0;
        this.timer = 0;
        this.canvasHeight = cH;
        this.canvasWidth = cW;
        this.attacks = false;
        this.hasRun = false;
        this.owlEats = false;
    }
    insectAppears() {
        if (this.timer % 20 === 0) this.frame++;
        if (this.yFrame === 1 && this.frame > 9) this.yFrame = 0 & (this.frame = 0);
        if (this.yFrame === 3 && this.frame > 9) this.yFrame = 0 & (this.frame = 0);
        if (this.yFrame === 2 && this.frame > 9) this.yFrame = 0 & (this.frame = 0);
        if (this.frame > 9) {
            this.frame = 0;
            this.yFrame += 1;
        }
    }
    attack(insectsInDangerZone) {
        if (this.attacks && !this.hasRun) {
            this.hasRun = true;
            this.frame = 0;
        }

        if (this.timer % 20 === 0) this.frame++;
        if (insectsInDangerZone > 0) {
            this.yFrame = 3;
        } else {
            this.yFrame = 2;
        }
        if (this.frame > 9) {
            this.hasRun = false;
            this.attacks = false;
            this.owlEats = false;
            this.yFrame = 0;
            this.frame = 0;
        }
    }

    draw(ctx, canvasWidth, canvasHeight) {
        ctx.save();
        ctx.translate(canvasWidth / 2, canvasHeight / 2);
        ctx.drawImage(
            this.image,
            this.spriteWidth * this.frame,
            this.spriteHeight * this.yFrame + 1,
            this.spriteWidth,
            this.spriteHeight,
            -this.spriteWidth * this.canvasHeight * 0.0015 * 0.5,
            -this.spriteHeight * this.canvasHeight * 0.0015 * 0.5,
            this.spriteWidth * this.canvasHeight * 0.0015,
            this.spriteHeight * this.canvasHeight * 0.0015
        );

        ctx.restore();
    }
    reset() {
        this.frame = 0;
        this.yFrame = 0;
    }
    start() {
        this.timer++;
    }
}

export default Owl;
