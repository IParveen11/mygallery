
let images = document.querySelectorAll('.image-thumbnails img');
let modal = document.getElementById('lightbox');
let modalImage = document.getElementById('modal-image');
let caption = document.getElementById('modal-caption');
let currentIndex = 0;

// Open modal
images.forEach((image, index) => {
    image.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImage.src = image.src;
        caption.innerHTML = image.getAttribute('data-caption');
        currentIndex = parseInt(image.getAttribute('data-index'));
    });
});

// Close modal
document.querySelector('.close').addEventListener('click', () => {
    modal.style.display = 'none';
});

// Previous image
document.getElementById('prev-button').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    modalImage.src = images[currentIndex].src;
    caption.innerHTML = images[currentIndex].getAttribute('data-caption');
});

// Next image
document.getElementById('next-button').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    modalImage.src = images[currentIndex].src;
    caption.innerHTML = images[currentIndex].getAttribute('data-caption');
});

// Responsive design
window.addEventListener('resize', () => {
    if (window.innerWidth < 700) {
        modalImage.style.width = '100%';
    } else {
        modalImage.style.width = '90%';
    }
});
