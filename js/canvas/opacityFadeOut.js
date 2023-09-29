const opacityFadeOut = (opacity, ctx, canvasWidth, canvasHeight) => {
    if (opacity < 0) return;
    if (opacity > 0) {
        ctx.save();
        ctx.fillStyle = "black";
        ctx.globalAlpha = opacity * 0.0001;

        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        ctx.restore();
    }
};

export default opacityFadeOut;
