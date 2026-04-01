const menuToggle = document.getElementById("menuToggle");
const navLinksContainer = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navLinksContainer.classList.toggle("active");
});

const container = document.querySelector(".main-container");
const sections = document.querySelectorAll("section");
const navlinks = document.querySelectorAll(".nav-links a");

let currentIndex = 0;
let isScrolling = false;

function goToSection(index) {
    if (index < 0 || index >= sections.length) return;

    currentIndex = index;
    container.style.transform = `translateX(-${index * 100}vw)`;

    resetAnimations(sections[index]);
}

window.addEventListener("wheel", (e) => {
    if (isScrolling) return;

    isScrolling = true;

    if (e.deltaY > 0) {
        goToSection(currentIndex + 1);
    } else {
        goToSection(currentIndex - 1);
    }

    setTimeout(() => {
        isScrolling = false;
    }, 800);
});

window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
        goToSection(currentIndex + 1);
    } else if (e.key === "ArrowUp") {
        goToSection(currentIndex - 1);
    }
});

navlinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const index = parseInt(link.getAttribute("data-index"));
        goToSection(index);
    });
});

function resetAnimations(section) {
    const animatedElements = section.querySelectorAll("*");

    animatedElements.forEach(el => {
        el.style.animation = "nome";
        el.offsetHeight;
        el.style.animation = null;
    });
}