// PARTICLES BACKGROUND
particlesJS("particles-js", {

particles: {

number: { value: 80 },

color: { value: "#38bdf8" },

shape: { type: "circle" },

opacity: { value: 0.5 },

size: { value: 3 },

line_linked: {
enable: true,
distance: 150,
color: "#38bdf8",
opacity: 0.4,
width: 1
},

move: {
enable: true,
speed: 1
}

}

});



// SCROLL REVEAL ANIMATIONS

ScrollReveal({

distance: '60px',
duration: 1200,
delay: 200,
reset: false

});


// HERO SECTION
ScrollReveal().reveal('.hero-text', { origin: 'top' });
ScrollReveal().reveal('.hero-buttons', { origin: 'bottom' });


// ABOUT SECTION
ScrollReveal().reveal('.about-card', { origin: 'left' });
ScrollReveal().reveal('.feature', { origin: 'right', interval: 200 });


// PROJECTS
ScrollReveal().reveal('.project-card', { origin: 'bottom', interval: 200 });


// CONTACT
ScrollReveal().reveal('.contact-left', { origin: 'left' });
ScrollReveal().reveal('.contact-right', { origin: 'right' });