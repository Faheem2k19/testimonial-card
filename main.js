const testimonials = document.querySelectorAll('.testimonial-card');
const dotsContainer = document.querySelector('.dot-container');
let currentIndex = 0;

// Function to show a specific testimonial
function showTestimonial(index) {
    testimonials.forEach((testimonial) => {
        testimonial.style.transform = `translateX(-${100 * (index)}%)`;
    });
    currentIndex = index;
    updateDots();
}

// Function to handle automatic swipe
function autoSwipe() {
    setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }, 2000); // Set delay to 0
}

// Function to create dot indicators
function createDots() {
    for (let i = 0; i < testimonials.length; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.setAttribute('data-index', i);
        dotsContainer.appendChild(dot);
        dot.addEventListener('click', () => {
            const index = parseInt(dot.getAttribute('data-index'));
            showTestimonial(index);
        });
    }
}

// Function to update dot indicators
function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        if (i === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Initialize testimonial slider
function initializeSlider() {
    createDots();
    autoSwipe();
}

initializeSlider();
