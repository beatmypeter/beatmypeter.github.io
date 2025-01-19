// Slideshow auto-scroll functionality
const slideshow = document.querySelector('.slideshow');
let isScrolling = false;

setInterval(() => {
    if (!isScrolling) {
        slideshow.scrollBy({ left: slideshow.clientWidth, behavior: 'smooth' });
    }
}, 3000);

slideshow.addEventListener('mouseover', () => (isScrolling = true));
slideshow.addEventListener('mouseout', () => (isScrolling = false));
