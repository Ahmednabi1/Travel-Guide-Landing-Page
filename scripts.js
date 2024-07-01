// JavaScript to handle slideshow navigation
let slideIndex = 0;
const slides = document.querySelector('.slides');
const slideWidth = document.querySelector('.slides img').clientWidth; // Get the width of each slide

function showSlides(index) {
    slides.style.transform = `translateX(${-index * slideWidth}px)`;
}

document.querySelector('.prev').addEventListener('click', () => {
    if (slideIndex > 0) {
        slideIndex--;
    } else {
        slideIndex = slides.children.length - 1;
    }
    showSlides(slideIndex);
});

document.querySelector('.next').addEventListener('click', () => {
    if (slideIndex < slides.children.length - 1) {
        slideIndex++;
    } else {
        slideIndex = 0;
    }
    showSlides(slideIndex);
});

// Initial slideshow setup
showSlides(slideIndex);
