import Owl from "./owl.js";
import Insect from "./insect.js";
import getRandomDelay from "./getRandomDelay.js";
import opacityFadeOut from "./opacityFadeOut.js";
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const video = document.createElement("video");
video.src =
    "https://uwovsfuszdmejttzyaxu.supabase.co/storage/v1/object/public/video/bg-video2.mp4?t=2023-11-27T14%3A53%3A38.452Z";

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
const insects = [];
const dangerZone = {
    x1: C.canvasWidth / 2 - 30,
    x2: C.canvasWidth / 2 + 30,
};

let delay = getRandomDelay(0, 10000 * 0.0625);

let opacity = 10000;
let addedOnce = false;
let insectIsTracked = false;
function animate() {
    if (!ctx) return;
    ctx.clearRect(0, 0, C.canvasWidth, C.canvasHeight);

    ctx.drawImage(video, 0, 0, C.videoWidth, C.videoHeight, 0, 0, C.canvasWidth, C.canvasHeight);
    if (opacity > 0) {
        opacity += -1;
    }
    opacityFadeOut(opacity, ctx, C.canvasWidth, C.canvasHeight);
    delay += -1;

    owl.draw(ctx, C.canvasWidth, C.canvasHeight);
    owl.start();
    if (insects.length > 0 && !owl.attacks) {
        owl.insectAppears();
    }
    if (owl.attacks === true) {
        owl.attack(C.insectsInDangerZone);
    }

    insects.forEach((insect, i) => {
        insect.draw(ctx);
        insect.update();
        const passedDangerZone = insect.x + insect.width * 0.5 < dangerZone.x1;
        const isInDanger =
            insect.x + insect.width * 0.5 < dangerZone.x2 &&
            insect.x + insect.width * 0.5 > dangerZone.x1;
        // will run only once
        if (insect.x < -70) {
            insects.splice(i, 1);
        }
        // will run only once
        if (isInDanger && !insect.inDanger) {
            insect.inDanger = true;
            C.insectsInDangerZone += 1;
        }
        // will run only once
        if (passedDangerZone && insect.inDanger) {
            insect.inDanger = false;
            C.insectsInDangerZone += -1;
        }
        // will run only once
        if (isInDanger && insect.inDanger && owl.attacks && !owl.owlEats) {
            insect.inDanger = false;
            owl.owlEats = true;
            insects.splice(i, 1);
        }
    });
    // ADD INSECT TO THE ARRAY WHEN DELAY GETS TO = 0
    if (delay < 0) {
        insects.push(new Insect(C.canvasHeight / 2 - 30, C.canvasWidth));
        delay = Number(getRandomDelay(0, 10000 * 0.0625));
    }

    requestAnimationFrame(animate);
}

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
    // owl.attack(C.insectsInDangerZone);
    owl.attacks = true;
});
window.addEventListener("keydown", (e) => {
    e.preventDefault();
    if (e.key === " " || e.key === "Spacebar") {
        // owl.attack(C.insectsInDangerZone);
        owl.attacks = true;
    }
});
