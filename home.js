document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Functionality
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked (for single-page navigation or on mobile)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburgerMenu.classList.remove('active');
            }
        });
    });

    // Generate scrolling stars background
    const starBackground = document.getElementById('star-background');
    const numberOfStars = 100;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.width = star.style.height = `${Math.random() * 3 + 1}px`; // 1-4px
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 2 + 1}s, ${Math.random() * 10 + 5}s`; // twinkle, then move
        star.style.animationDelay = `${Math.random() * 5}s, -${Math.random() * 10}s`; // Offset start times
        star.style.animationName = 'twinkle, starMove';
        starBackground.appendChild(star);
    }
});
