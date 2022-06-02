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
}