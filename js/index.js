// Your code goes here

//Logo Heading
let headingClick = document.querySelector(".logo-heading");
headingClick.addEventListener("dblclick", () => {
    headingClick.style.transform = "scale(1.5)";
})



// let headingEffect = document.querySelector(".logo-heading");
// headingEffect.addEventListener("dblclick", () => {
//     TweenMax.to(".logo-heading", 2, {
//         rotation: 360,
//     })
// })

// headingEffect.addEventListener("dblclick", () => {
//     TweenMax.to(".logo-heading", 2, {
//         rotation: 360,
//     })
// })




// Navigation 
let navEffect = document.querySelectorAll(".nav-link").forEach(element => {
    element.addEventListener("mouseover", () => {
        element.style.color = "red";
        element.style.transform = "scale(1.5)";
        element.style.transition = "all 0.3s"
    })

});

let navEffect2 = document.querySelectorAll(".nav-link").forEach(element => {
    element.addEventListener("mouseleave", () => {
        element.style.color = "#212529";
        element.style.transform = "scale(1)";
        element.style.transition = "all 0.3s"
    })
});

//Header
const headClick = document.querySelector(".intro");
headClick.addEventListener("click", () => {
    headClick.style.backgroundColor = "#FFD800";
})

/// content section

/// img 1 wheel
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


const colorChng = document.querySelector(".content-section")
window.addEventListener('scroll', () => {
    colorChng.style.backgroundColor = "black";
    colorChng.style.color = "white";
})

