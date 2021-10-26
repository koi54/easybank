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

