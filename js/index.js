document.addEventListener('DOMContentLoaded', function() {
    loadComponent('navbar-placeholder', 'components/navbar.html');
    loadComponent('footer-placeholder', 'components/footer.html');
});

function loadComponent(placeholderId, componentPath) {
    fetch(componentPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(placeholderId).innerHTML = data;
        })
        .catch(error => console.error('Error loading component:', error));
}

// Funcionalidad del Carrusel
let currentSlideIndex = 0;
const totalSlides = 8;

function moveCarousel(direction) {
    const carousel = document.getElementById('productCarousel');
    currentSlideIndex += direction;
    
    // Loop infinito
    if (currentSlideIndex >= totalSlides) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = totalSlides - 1;
    }
    
    // En esta sección calculamos el desplazamiento considerando el gap
    const slideWidth = 20; // cada slide es 20% del ancho
    const translateX = -currentSlideIndex * slideWidth;
    carousel.style.transform = `translateX(${translateX}%)`;
    updateDots();
}

function currentSlide(n) {
    const carousel = document.getElementById('productCarousel');
    currentSlideIndex = n - 1;
    const slideWidth = 20;
    const translateX = -currentSlideIndex * slideWidth;
    carousel.style.transform = `translateX(${translateX}%)`;
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlideIndex);
    });
}

// Auto-play del carrusel
setInterval(() => {
    moveCarousel(1);
}, 5000);