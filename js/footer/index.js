const footer = document.querySelector(".footer-time");
const time = new Date();
const footerTime = time.toString().substring(0, 15);
footer.textContent = footerTime;
