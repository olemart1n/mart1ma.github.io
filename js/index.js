import "./footer/index.js";
import "./canvas/index.js";
import skillIcons from "./skillIcons.js";
const infoDiv = document.querySelector(".img-section");

skillIcons.forEach((item) => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.src = item.imageSrc;
    img.alt = item.name;
    div.appendChild(img);
    infoDiv.appendChild(div);
});
