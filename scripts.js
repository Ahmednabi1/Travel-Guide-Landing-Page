let currentScrollPosition = 0;
const photoGalleryContainer = document.querySelector('.photo-gallery-container');
const photoGallery = document.querySelector('.photo-gallery');
const picWidth = document.querySelector('.pic').offsetWidth; // Width of one picture including padding
const scrollAmount = picWidth * 4; // Scroll by 3 images

function updateArrows() {
    const maxScrollPosition = photoGallery.scrollWidth - photoGalleryContainer.offsetWidth;
    console.log(`Current Scroll Position: ${currentScrollPosition}`);
    console.log(`Max Scroll Position: ${maxScrollPosition}`);

    if (currentScrollPosition <= 0) {
        document.querySelector('.left-arrow').style.display = 'none';
    } else {
        document.querySelector('.left-arrow').style.display = 'block';
    }

    if (currentScrollPosition >= maxScrollPosition) {
        document.querySelector('.right-arrow').style.display = 'none';
    } else {
        document.querySelector('.right-arrow').style.display = 'block';
    }
}

function scrollLeft() {
    currentScrollPosition -= scrollAmount;
    if (currentScrollPosition < 0) {
        currentScrollPosition = 0;
    }
    alert('Left arrow clicked');
    photoGallery.style.transform = `translateX(-${currentScrollPosition}px)`;
    console.log(`Scroll Left - New Position: ${currentScrollPosition}`);
    updateArrows();
    alert('Left arrow clicked');
}

function scrollRight() {
    const maxScrollPosition = photoGallery.scrollWidth - photoGalleryContainer.offsetWidth;
    currentScrollPosition += scrollAmount;
    if (currentScrollPosition > maxScrollPosition) {
        currentScrollPosition = maxScrollPosition;
    }
    photoGallery.style.transform = `translateX(-${currentScrollPosition}px)`;
    console.log(`Scroll Right - New Position: ${currentScrollPosition}`);
    updateArrows();
}

// Initialize arrows visibility
document.addEventListener('DOMContentLoaded', (event) => {
    updateArrows();
});