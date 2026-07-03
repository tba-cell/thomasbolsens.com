<<<<<<< HEAD
const reveals = document.querySelectorAll(".reveal");

function reveal() {
    const windowHeight = window.innerHeight;

    reveals.forEach((section) => {
        const top = section.getBoundingClientRect().top;

        if (top < windowHeight - 120) {
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

ScrollReveal().reveal('.hero-content', {
    distance: '60px',
    duration: 1200,
    origin: 'bottom',
    reset: false
});

ScrollReveal().reveal('.about-image', {
    delay: 200,
    distance: '60px',
    origin: 'left'
});

ScrollReveal().reveal('.about-text', {
    delay: 300,
    distance: '60px',
    origin: 'right'
});

ScrollReveal().reveal('.service-card', {
    interval: 150,
    distance: '50px',
    origin: 'bottom'
});

ScrollReveal().reveal('.portfolio-item', {
    interval: 150,
    distance: '50px',
    origin: 'bottom'
});

ScrollReveal().reveal('.contact-container', {
    distance: '60px',
    origin: 'bottom'
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

=======
const reveals = document.querySelectorAll(".reveal");

function reveal() {
    const windowHeight = window.innerHeight;

    reveals.forEach((section) => {
        const top = section.getBoundingClientRect().top;

        if (top < windowHeight - 120) {
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

ScrollReveal().reveal('.hero-content', {
    distance: '60px',
    duration: 1200,
    origin: 'bottom',
    reset: false
});

ScrollReveal().reveal('.about-image', {
    delay: 200,
    distance: '60px',
    origin: 'left'
});

ScrollReveal().reveal('.about-text', {
    delay: 300,
    distance: '60px',
    origin: 'right'
});

ScrollReveal().reveal('.service-card', {
    interval: 150,
    distance: '50px',
    origin: 'bottom'
});

ScrollReveal().reveal('.portfolio-item', {
    interval: 150,
    distance: '50px',
    origin: 'bottom'
});

ScrollReveal().reveal('.contact-container', {
    distance: '60px',
    origin: 'bottom'
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

>>>>>>> 56cbaba01ef0a5ac95659b0bd67e1904ab25605c
});