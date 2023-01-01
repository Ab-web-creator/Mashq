// const main = document.querySelector(".main-1");

const responsiveMenuToggleButton = document.querySelector("#responsiveMenuToggleButton");
const menu = document.querySelector("#menuBtn");
const cross = document.querySelector("#close_sidemenu");
const goHome = document.querySelector("#home_sidemenu");
const blurs = document.querySelector(".blur");
const side = document.querySelector("aside");
const sideNav = document.querySelector(".side_nav");
const body = document.querySelector("body");


responsiveMenuToggleButton.addEventListener("click", () => {
    responsiveMenuToggleButton.classList.toggle('open');
})


menu.addEventListener("click", () => {
    body.style.overflow = "hidden";
    setTimeout(() => {
        side.classList.add("active");
    }, 50)

    setTimeout(() => {
        blurs.classList.add("active");
    }, 51)
})

cross.addEventListener("click", () => {
    body.style.overflow = "scroll";
    setTimeout(() => {
        blurs.classList.remove("active");
        side.classList.remove("active");
    }, 51)
})

blurs.addEventListener("click", () => {
    body.style.overflow = "scroll";
    setTimeout(() => {
    blurs.classList.remove("active");
    side.classList.remove("active");
    }, 100)

    responsiveMenuToggleButton.classList.toggle('open');
})

