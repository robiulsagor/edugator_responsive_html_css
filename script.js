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