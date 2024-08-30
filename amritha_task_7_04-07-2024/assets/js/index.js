// index.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const closeBtn = document.querySelector('.close');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        closeBtn.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        navLinks.classList.remove('active');
        closeBtn.style.display = 'none';
    });
});
