const header = document.querySelector(".header");
const btnStart = document.querySelector(".btn-start");
window.addEventListener("scroll", function() {
    let scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    // Change background color when scroll position is greater than 100 pixels
    if (scrollPosition > 100) {
        header.classList.add("scrolling");
        btnStart.classList.add("btn-scrolling");
    } else {
        header.classList.remove("scrolling");
        btnStart.classList.remove("btn-scrolling");
    }
  });