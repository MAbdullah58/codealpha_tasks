const galleryInner = document.querySelector('.gallery-inner');
const images = document.querySelectorAll('.gallery-image');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function showImage(index) {
    galleryInner.style.transform = `translateX(${-index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    showImage(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    showImage(currentIndex);
});

dots.forEach(dot => {
    dot.addEventListener('click', (event) => {
        currentIndex = parseInt(event.target.dataset.index);
        showImage(currentIndex);
    });
});

// Automatically show the first image on load
showImage(currentIndex);
