// Animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.stat-card, .dashboard-preview, h2, h3');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial styles
document.querySelectorAll('.stat-card, .dashboard-preview, h2, h3').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
});

// Run animation on scroll
window.addEventListener('scroll', animateOnScroll);
// Run once on load
window.addEventListener('load', animateOnScroll);