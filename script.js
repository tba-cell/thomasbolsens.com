// ===========================
// MOBILE MENU
// ===========================

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

function setMenu(open) {
    if (!nav || !menuToggle) return;
    nav.classList.toggle("active", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    const icon = menuToggle.querySelector("i");
    if (icon) {
        icon.classList.toggle("fa-bars", !open);
        icon.classList.toggle("fa-xmark", open);
    }
}

if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
        setMenu(!nav.classList.contains("active"));
    });

    // Close menu after clicking a link
    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => setMenu(false));
    });

    // Close menu with Escape
    document.addEventListener("keydown", e => {
        if (e.key === "Escape") setMenu(false);
    });
}

// ===========================
// SCROLL EFFECTS (active nav, back-to-top, hero parallax)
// ===========================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");
const hero = document.querySelector(".hero");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const topButton = document.createElement("button");
topButton.id = "topButton";
topButton.type = "button";
topButton.setAttribute("aria-label", "Back to top");
topButton.innerHTML = '<i class="fa-solid fa-arrow-up" aria-hidden="true"></i>';
document.body.appendChild(topButton);

topButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
});

let ticking = false;

function onScroll() {
    const y = window.scrollY;

    // Active nav link
    let current = "";
    sections.forEach(section => {
        if (y >= section.offsetTop - 140) current = section.id;
    });
    navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === "#" + current);
    });

    // Back-to-top button
    topButton.classList.toggle("visible", y > 500);

    // Subtle hero parallax (desktop only, respects reduced motion)
    if (hero && !reduceMotion && window.innerWidth > 768) {
        hero.style.backgroundPosition = `center calc(50% + ${y * 0.35}px)`;
    }

    ticking = false;
}

window.addEventListener("scroll", () => {
    if (!ticking) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
    }
}, { passive: true });

onScroll();

// ===========================
// FADE IN ON SCROLL
// ===========================

if ("IntersectionObserver" in window && !reduceMotion) {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll("section:not(.hero)").forEach(section => {
        section.classList.add("reveal");
        observer.observe(section);
    });
}

// ===========================
// CONTACT FORM (Formspree, without leaving the page)
// ===========================

const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");

if (form && statusEl) {

    form.addEventListener("submit", async e => {

        e.preventDefault();

        const button = form.querySelector("button[type='submit']");
        const originalText = button.textContent;

        button.disabled = true;
        button.textContent = "Sending…";
        statusEl.className = "form-status";
        statusEl.textContent = "";

        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: new FormData(form),
                headers: { Accept: "application/json" }
            });

            if (!response.ok) throw new Error("Request failed");

            form.reset();
            statusEl.classList.add("success");
            statusEl.textContent = "Thank you! Your message has been sent. I'll get back to you as soon as possible.";

        } catch (err) {
            statusEl.classList.add("error");
            statusEl.innerHTML = 'Something went wrong. Please try again or email <a href="mailto:tba@thomasbolsens.com">tba@thomasbolsens.com</a>.';
        } finally {
            button.disabled = false;
            button.textContent = originalText;
        }
    });
}

// ===========================
// FOOTER YEAR
// ===========================

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
