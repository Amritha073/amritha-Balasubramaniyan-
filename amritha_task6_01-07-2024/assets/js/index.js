document.addEventListener("DOMContentLoaded", function() {
    const menuOverlay = document.querySelector('.menu-overlay');
    const closeButton = document.querySelector('.close-btn');
    const hamburger = document.querySelector('.hamburger');

    function toggleMenu() {
        console.log("Toggle menu called");
        menuOverlay.classList.toggle('show');
    }

    if (closeButton) {
        closeButton.addEventListener('click', toggleMenu);
        console.log("Close button event listener added");
    }

    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
        console.log("Hamburger event listener added");
    }
});

