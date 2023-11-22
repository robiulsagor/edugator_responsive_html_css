const navbar = document.querySelector("nav")
window.addEventListener("scroll", () => {
    // if (window.scrollY > 40) {
    //     console.log("scrolled");
    //     navbar.classList.add("window-scroll")
    // } else {
    //     navbar.classList.remove("window-scroll")
    // }
    navbar.classList.toggle("window-scroll", scrollY > 50)
})


// hide or show the faqs
const faqs = document.querySelectorAll(".faq")
faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("open")

        const icon = faq.querySelector(".faq__icon i")
        if (icon.className === "uil uil-plus") {
            icon.className = "uil uil-minus"
        } else {
            icon.className = "uil uil-plus"
        }

    })
})


// show or hide nav menu
const navBtn = document.querySelector("#open-men-btn")
const navMenu = document.querySelector(".nav__menu")
const navClose = document.querySelector("#close-menu-btn")

navBtn.addEventListener("click", () => {
    navMenu.classList.add("open")
    navClose.style.display = "inline-block"
    navBtn.style.display = "none"
})

navClose.addEventListener("click", () => {
    navMenu.classList.remove("open")
    navClose.style.display = "none"
    navBtn.style.display = "inline-block"
})