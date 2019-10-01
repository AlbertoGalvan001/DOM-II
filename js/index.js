// Your code goes here

//Logo Heading
let headingClick = document.querySelector(".logo-heading");
headingClick.addEventListener("dblclick", () => {
    headingClick.style.transform = "scale(2)";
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



