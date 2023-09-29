export const drawVideoOnCanvas = (
    ctx: CanvasRenderingContext2D,
    video: HTMLVideoElement,
    videoWidth: number,
    videoHeight: number,
    canvasWidth: number,
    canvasHeight: number
) => {
    ctx.drawImage(video, 0, 0, videoWidth, videoHeight, 0, 0, canvasWidth, canvasHeight);
};

export const ifVideoMetaThenAnimate = (
    video: HTMLVideoElement,
    videoWidth: number,
    videoHeight: number,
    animate: Function
) => {
    video.addEventListener("loadedmetadata", () => {
        videoWidth = video.videoWidth;
        videoHeight = video.videoHeight;
        video.autoplay = true;
        video.muted = true;
        video.loop = true;

        animate();
        video.play();
    });
};

export const test = () => {
    console.log("hello");
};
