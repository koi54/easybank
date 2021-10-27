// Animation
const sections = document.querySelectorAll('.observer-point');

observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `slidein 2s`;
        } else {
            entry.target.style.animation = `none`;
        }
    })
})

sections.forEach(section => {
    observer.observe(section);
})

// Interactions
let isOpen = false;
const menu = document.getElementById('hamburger');
const nav = document.getElementById('navigation')
menu.addEventListener('click', () => {
    isOpen = !isOpen;
    isOpen ? nav.classList.add('navigation-visible') : nav.classList.remove('navigation-visible');

})

