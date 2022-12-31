// const main = document.querySelector(".main-1");

const responsiveMenuToggleButton = document.querySelector("#responsiveMenuToggleButton");
const menu = document.querySelector("#menuBtn");
const cross = document.querySelector("#close_sidemenu");
const goHome = document.querySelector("#home_sidemenu");
const blurs = document.querySelector(".blur");
const menu_ism1 = document.querySelector(".menu_ism1");
const menu_ism2 = document.querySelector(".menu_ism2");
const menu_ism3 = document.querySelector(".menu_ism3");
const side = document.querySelector("aside");
const sideNav = document.querySelector(".side_nav");


responsiveMenuToggleButton.addEventListener("click", () => {
    responsiveMenuToggleButton.classList.toggle('open');
})


menu.addEventListener("click", () => {
    setTimeout(() => {
        menu_ism1.classList.add("inactive");
    }, 10)
    setTimeout(() => {
        menu_ism2.classList.add("inactive");
    }, 20)
    setTimeout(() => {
        menu_ism3.classList.add("inactive");
    }, 30)

    setTimeout(() => {
        side.classList.add("active");
    }, 50)

    setTimeout(() => {
        blurs.classList.add("active");
    }, 51)
})

cross.addEventListener("click", () => {
    setTimeout(() => {
        blurs.classList.remove("active");
        side.classList.remove("active");
    }, 51)
    setTimeout(() => {
        menu_ism1.classList.remove("inactive");
        menu_ism2.classList.remove("inactive");
        menu_ism3.classList.remove("inactive");
    }, 511)
})

blurs.addEventListener("click", () => {
    setTimeout(() => {
    blurs.classList.remove("active");
    side.classList.remove("active");
    }, 100)

    responsiveMenuToggleButton.classList.toggle('open');
    setTimeout(() => {
        menu_ism1.classList.remove("inactive");
        menu_ism2.classList.remove("inactive");
        menu_ism3.classList.remove("inactive");
    }, 511)
})

