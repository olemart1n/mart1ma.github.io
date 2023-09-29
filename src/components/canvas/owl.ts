import owlImage from "./spritesheets/owl.png";
export class Owl {
    x: number;
    y: number;
    image: HTMLImageElement;
    spriteWidth: number;
    spriteHeight: number;
    frame: number;
    yFrame: number;
    timer: number;
    isAttacking: boolean;
    canvasHeight: number;
    canvasWidth: number;
    constructor(x: number, y: number, cH: number, cW: number) {
        this.x = x;
        this.y = y;
        this.image = new Image();
        this.image.src = owlImage;
        this.spriteWidth = 400;
        this.spriteHeight = 321;
        this.frame = 0;
        this.yFrame = 0;
        this.timer = 0;
        this.isAttacking = false;
        this.canvasHeight = cH;
        this.canvasWidth = cW;
    }
    insectAppears() {
        // if (this.timer % 20 === 0) this.frame++
        if (this.yFrame === 1 && this.frame > 9) this.yFrame = 0 & (this.frame = 0);
        if (this.yFrame === 3 && this.frame > 9) this.yFrame = 0 & (this.frame = 0);
        if (this.yFrame === 2 && this.frame > 9) this.yFrame = 0 & (this.frame = 0);
        if (this.frame > 9) {
            this.frame = 0;
            this.yFrame += 1;
        }
    }
    attack(insectsInDangerZone: number) {
        insectsInDangerZone > 0 ? (this.yFrame = 3) : (this.yFrame = 2);
        this.frame = 0;
    }
    draw(ctx: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number) {
        this.timer++;
        ctx.save();

        ctx.translate(canvasWidth / 2, canvasHeight / 2);
        ctx.drawImage(
            this.image,
            this.spriteWidth * this.frame,
            this.spriteHeight * this.yFrame + 1,
            this.spriteWidth,
            this.spriteHeight,
            // (-this.spriteWidth * 0.8) / 2,
            // (-this.spriteHeight * 0.8) / 2,
            // this.spriteWidth * 0.8,
            // this.spriteHeight * 0.8
            -this.spriteWidth * this.canvasHeight * 0.0015 * 0.5,
            -this.spriteHeight * this.canvasHeight * 0.0015 * 0.5,
            this.spriteWidth * this.canvasHeight * 0.0015,
            this.spriteHeight * this.canvasHeight * 0.0015
        );
        if (this.timer % 20 === 0) this.frame++;
        if (this.frame > 9 && this.yFrame > 1) this.isAttacking = false;
        ctx.restore();
    }
    reset() {
        this.frame = 0;
        this.yFrame = 0;
    }
}
