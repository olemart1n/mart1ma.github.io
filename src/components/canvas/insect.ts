import insectImage from "./spritesheets/insect.png";
export class Insect {
    x: number;
    y: number;
    image: HTMLImageElement;
    spriteWidth: number;
    spriteHeight: number;
    frame: number;
    timer: number;
    width: number;
    height: number;
    inDanger: boolean;
    constructor(y: number, canvasWidth: number) {
        this.x = canvasWidth;
        this.y = y;
        this.image = new Image();
        this.image.src = insectImage;
        this.spriteHeight = 309;
        this.spriteWidth = 550;
        this.frame = 0;
        this.timer = 0;
        this.width = canvasWidth * 0.1;
        this.height = canvasWidth * 0.07;
        this.inDanger = false;
    }
    draw(ctx: CanvasRenderingContext2D) {
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
