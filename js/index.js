// Your code goes here

//Logo Heading double click
// let headingClick = document.querySelector(".logo-heading");
// headingClick.addEventListener("dblclick", () => {
//     headingClick.style.transform = "scale(1.5)";
// })

const stopLink = document.querySelector(".nav-link");
stopLink.addEventListener("click", (event) => {
    event.preventDefault();
})

let headingEffect = document.querySelector(".logo-heading");
headingEffect.addEventListener("mouseenter", () => {
    TweenMax.to(".logo-heading", 2, {
        rotation: 1800,
    })
})

// headingEffect.addEventListener("dblclick", () => {
//     TweenMax.to(".logo-heading", 2, {
//         rotation: 360,
//     })
// })




// Navigation  mouseover
let navEffect = document.querySelectorAll(".nav-link").forEach(element => {
    element.addEventListener("mouseover", () => {
        element.style.color = "red";
        element.style.transform = "scale(1.5)";
        element.style.transition = "all 0.3s"
    })

});
/// mouse leave
let navEffect2 = document.querySelectorAll(".nav-link").forEach(element => {
    element.addEventListener("mouseleave", () => {
        element.style.color = "#212529";
        element.style.transform = "scale(1)";
        element.style.transition = "all 0.3s"
    })
});

//Header click
const headClick = document.querySelector(".intro");
headClick.addEventListener("click", () => {
    headClick.style.backgroundColor = "#FFD800";
})

/// content section

///  wheel
function zoom(event) {
    event.preventDefault();

    scale += event.deltaY * -0.01;

    //restrict scale
    scale = Math.min(Math.max(.125, scale), 4);

    //scale transform
    imgZoom.style.transform = `scale(${scale})`;
}
let scale = 1;
const imgZoom = document.querySelector(".img-content");
imgZoom.onwheel = zoom;

// scroll

const colorChng = document.querySelector(".content-section")
window.addEventListener('scroll', () => {
    colorChng.style.backgroundColor = "black";
    colorChng.style.color = "white";
})

// content destination - blur
const blurImg = document.querySelector(".content-destination");
blurImg.addEventListener("focus", () => {
    blurImg.style.background = "pink";
})

// content destination - doubleclick
let doubleEffect = document.querySelector(".content-destination");
doubleEffect.addEventListener("dblclick", () => {
    TweenMax.to(".content-destination", 1, {
        rotation: 360,
    })
})

