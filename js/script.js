const menuToggle = document.getElementById("menuToggle");
const navLinksContainer = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navLinksContainer.classList.toggle("active");
});

document.querySelector(".projects-btn").addEventListener("click", () => {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
});

document.querySelector(".contact-btn").addEventListener("click", () => {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
});