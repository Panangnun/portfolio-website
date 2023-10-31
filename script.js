// Smooth scrolling for anchor links
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100, // Adjust for header height
                behavior: 'smooth',
            });
        }
    });
});

// Add a hover effect to navigation links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.color = '#8A307F';
    });
    link.addEventListener('mouseleave', function() {
        this.style.color = 'white';
    });
});

// Display a message when the Instagram link is clicked
const instagramLink = document.querySelector('a[href="#contact"]');
instagramLink.addEventListener('click', function(e) {
    e.preventDefault();
    const message = document.createElement('p');
    message.textContent = 'You can connect with me on Instagram!';
    message.style.color = '#8A307F';
    message.style.textAlign = 'center';
    document.getElementById('contact').appendChild(message);
});