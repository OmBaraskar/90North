document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-menu');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const menuItems = document.getElementById('menu-items');
    const leftMenu = document.getElementById('left-menu');
    const body = document.body;

    // Toggle menu
    toggleButton.addEventListener('click', function() {
        menuItems.style.display = menuItems.style.display === 'none' ? 'block' : 'none';
    });

    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', function() {
        leftMenu.classList.toggle('active');
    });

    // Resize function
    function handleResize() {
        const width = window.innerWidth;
        let scale = 1;

        if (width >= 992 && width <= 1600) {
            scale = 0.9;
        } else if (width >= 700 && width <= 767) {
            scale = 0.8;
        } else if (width >= 600 && width < 700) {
            scale = 0.75;
        } else if (width <= 600) {
            scale = 0.5;
        }

        body.style.transform = `scale(${scale})`;
        body.style.transformOrigin = 'top left';
        body.style.width = `${100 / scale}%`;
        body.style.height = `${100 / scale}vh`;

        // Reset mobile menu on resize
        if (width > 768) {
            leftMenu.classList.remove('active');
            leftMenu.style.display = 'block';
        } else {
            leftMenu.style.display = 'none';
        }
    }

    // Smooth scrolling for menu links
    document.querySelectorAll('.menu-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initial call and event listener for resize
    handleResize();
    window.addEventListener('resize', handleResize);
});