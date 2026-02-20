// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let header = document.querySelector('.header');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

window.addEventListener('scroll', () => {
    // sticky header
    if (window.scrollY > 50) header.classList.add('sticky'); else header.classList.remove('sticky');

    // active links on scroll
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                if (links.getAttribute('href') === `#${id}`) links.classList.add('active');
            });
        }
    });
});

// simple rotating text for .text-animate h3
const roles = ['Frontend Developer', 'UI/UX Enthusiast', 'Web Designer'];
let roleIndex = 0;
const roleEl = document.querySelector('.text-animate h3');
if (roleEl) {
    setInterval(() => {
        roleIndex = (roleIndex + 1) % roles.length;
        roleEl.style.opacity = 0;
        setTimeout(() => {
            roleEl.textContent = roles[roleIndex];
            roleEl.style.opacity = 1;
        }, 300);
    }, 3000);
}

// contact form simple feedback
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', () => {
        alert('Gracias, mensaje enviado (simulado).');
    });
}