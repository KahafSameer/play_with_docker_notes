// Toggle examples section
document.getElementById('toggle-examples').addEventListener('click', function() {
    const examples = document.getElementById('examples');
    if (examples.classList.contains('hidden')) {
        examples.classList.remove('hidden');
        this.textContent = 'Hide Code Examples';
    } else {
        examples.classList.add('hidden');
        this.textContent = 'Show Code Examples';
    }
});

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation to concepts on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.concept').forEach(concept => {
    concept.style.opacity = '0';
    concept.style.transform = 'translateY(20px)';
    concept.style.transition = 'opacity 0.5s, transform 0.5s';
    observer.observe(concept);
});

// Add some fun hover effects
document.querySelectorAll('.concept').forEach(concept => {
    concept.addEventListener('mouseenter', function() {
        this.style.background = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
        this.style.color = 'white';
    });

    concept.addEventListener('mouseleave', function() {
        this.style.background = 'white';
        this.style.color = '#333';
    });
});
