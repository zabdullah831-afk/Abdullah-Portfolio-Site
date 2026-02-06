/**
 * Portfolio Website - JavaScript
 * Handles navigation, mobile menu, and scroll effects
 */

document.addEventListener('DOMContentLoaded', function () {
    // ===== Mobile Menu Toggle =====
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', function () {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a nav link (for mobile)
    navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // ===== Smooth Scroll for Anchor Links =====
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===== Header Background on Scroll =====
    const header = document.querySelector('.header');

    function updateHeader() {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(15, 15, 18, 0.98)';
        } else {
            header.style.background = 'rgba(15, 15, 18, 0.9)';
        }
    }

    window.addEventListener('scroll', updateHeader);
    updateHeader(); // Run on load
});
