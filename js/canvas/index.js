import Owl from "./owl.js";
import Insect from "./insect.js";
import getRandomDelay from "./getRandomDelay.js";
import opacityFadeOut from "./opacityFadeOut.js";
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const C = {
    canvasWidth: 0,
    canvasHeight: 0,
    videoWidth: 0,
    videoHeight: 0,
    insectsInDangerZone: 0,
};
const canvasX = canvas.getBoundingClientRect();
C.canvasHeight = canvasX.width / 1.777777777;
C.canvasWidth = canvasX.width;
ctx && (ctx.canvas.width = C.canvasWidth);
ctx && (ctx.canvas.height = C.canvasHeight);
console.log(C);

const owl = new Owl(0, 0, C.canvasWidth, C.canvasWidth);
let owlAttacking = false;
const insects = [];
const dangerZone = {
    x1: C.canvasWidth / 2 - 30,
    x2: C.canvasWidth / 2 + 30,
};

let delay = getRandomDelay(0, 10000 * 0.0625);
const video = document.createElement("video");
let opacity = 10000;
video.src =
    "https://ulcxpfjjujtdnmvvzzuz.supabase.co/storage/v1/object/sign/video/bg-video2.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2aWRlby9iZy12aWRlbzIubXA0IiwiaWF0IjoxNjk1NDEyMjU1LCJleHAiOjE3MjY5NDgyNTV9.tpyBQlEF0ViZDnuNKN5U_6OEx7iEwo0RInpkzkGp3cs&t=2023-09-22T19%3A50%3A55.241Z";
let addedOnce = false;
window.addEventListener("keydown", (e) => {
    e.preventDefault();
    if (e.key === " " || e.key === "Spacebar") {
        owlAttacking = true;
    }
});
function animate() {
    if (!ctx) return;
    ctx.clearRect(0, 0, C.canvasWidth, C.canvasHeight);

    // drawVideoOnCanvas(ctx, video, C.videoWidth, C.videoHeight, C.canvasWidth, C.canvasHeight);
    ctx.drawImage(video, 0, 0, C.videoWidth, C.videoHeight, 0, 0, C.canvasWidth, C.canvasHeight);
    if (opacity > 0) {
        opacity += -1;
    }
    opacityFadeOut(opacity, ctx, C.canvasWidth, C.canvasHeight);
    delay += -1;
    owl.draw(ctx, C.canvasWidth, C.canvasHeight);
    if (insects.length > 0) owl.insectAppears();
    if (insects.length === 0 && !owl.isAttacking) owl.reset();
    if (owlAttacking && addedOnce === false) {
        addedOnce = true;
        owl.isAttacking = true;
        owl.attack(C.insectsInDangerZone);
    }
    if (!owl.isAttacking && addedOnce) addedOnce = false;
    insects.forEach((insect, i) => {
        insect.draw(ctx);
        insect.update();
        const passedDangerZone = insect.x + 35 < dangerZone.x1;
        if (insect.x < -70) {
            insects.splice(i, i);
        } // IF INSECT HAS PASSED CANVAS

        if (insect.inDanger === true && owlAttacking) {
            insects.splice(i, 1);
            C.insectsInDangerZone += -1;
            owlAttacking = false;
        }

        if (
            insect.x + 35 < dangerZone.x2 &&
            insect.x + 35 > dangerZone.x1 &&
            insect.inDanger === false
        ) {
            C.insectsInDangerZone += 1;
            insect.inDanger = true;
        } else if (passedDangerZone && insect.inDanger) {
            C.insectsInDangerZone += -1;
            insect.inDanger = false;
        }
    });
    // ADD INSECT TO THE ARRAY WHEN DELAY GETS TO = 0
    if (delay < 0) {
        insects.push(new Insect(C.canvasHeight / 2 - 30, C.canvasWidth));
        delay = Number(getRandomDelay(0, 10000 * 0.0625));
    }

    requestAnimationFrame(animate);
}
console.log(ctx);
video.addEventListener("loadedmetadata", () => {
    C.videoWidth = video.videoWidth;
    C.videoHeight = video.videoHeight;
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    animate();

    video.play();
});
canvas.addEventListener("click", () => {
    owlAttacking = true;
});
