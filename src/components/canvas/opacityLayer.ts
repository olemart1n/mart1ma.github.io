export const opacityFadeOut = (
    opacity: number,
    ctx: CanvasRenderingContext2D,
    canvasWidth: number,
    canvasHeight: number
) => {
    if (opacity < 0) return;
    if (opacity > 0) {
        ctx.fillStyle = "black";
        ctx.globalAlpha = opacity * 0.0001;

        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    }
};
