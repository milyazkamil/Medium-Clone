const header = document.querySelector(".header");
const mLetter = document.querySelector(".m-letter");
const btnStart = document.querySelector(".btn-start");

//M Letters Background Changing
setInterval(() => {
  mLetter.style.opacity = "0";
}, 1000);

setInterval(() => {
  let rnd = (Math.floor(Math.random() * 8) + 1).toString();
  mLetter.src = `./img/m${rnd}.png`;
  mLetter.style.opacity = "1";
}, 2000);


// Change background color of "Get Started" button when scroll position is greater than 100 pixels
window.addEventListener("scroll", function() {
    let scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollPosition > 100) {
        header.classList.add("scrolling");
        btnStart.classList.add("btn-scrolling");
    } else {
        header.classList.remove("scrolling");
        btnStart.classList.remove("btn-scrolling");
    }
});