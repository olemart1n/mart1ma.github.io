const footer = document.querySelector("footer")
window.addEventListener("scroll", hideFooter)
function hideFooter(e) {
    if (scrollY > 2) {
        footer.classList.add("fade-out");
        setTimeout(function(e) {
            footer.style.display = "none"
        }, 1000)
        console.log(scrollY);
    } else {
        footer.classList.remove("fade-out")
        setTimeout(function(e) {
            footer.style.display = "flex"
        }, 1000)
    }
};


const telegram = document.querySelector(".fa-telegram");
const twitter = document.querySelector(".fa-twitter");
const linkedIn = document.querySelector(".fa-linkedin");

telegram.addEventListener("click", () => {
   window.open('https://telegram.org/')
})
twitter.addEventListener("click", () => {
    window.open('https://twitter.com/')
})
linkedIn.addEventListener("click", () => {
    window.open('https://linkedin.com/')
})

const images = document.querySelector("main").querySelectorAll("img");
let imgSrc;

images.forEach((img) => {
    img.addEventListener("click", (e) => {
    imgSrc = e.target.src;
    console.log(imgSrc);
    imgModal(imgSrc);
    })
})
let imgModal = (src) => {
    const modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    //add the modal to the mai nsection or the parent element
    document.querySelector("body").append(modal)
    const newImage = document.createElement("figure");
    newImage.style.backgroundImage = `url("${src}")`;
    modal.append(newImage);
    modal.addEventListener("click", () => {
        document.querySelector(".modal").remove()
    })
}