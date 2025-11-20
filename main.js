// Custom JS for BurguerFun

document.addEventListener('DOMContentLoaded', () => {
    // Burger menu
    const burger = document.querySelector('.burger-icon');
    const nav = document.querySelector('.nav-links');
    const closeMenuBtn = document.querySelector('.close-menu-btn'); // Select the new close button

    const closeMenu = () => {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
    };

    if (burger && nav) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });
    }

    if (closeMenuBtn) { // Add event listener for the new close button
        closeMenuBtn.addEventListener('click', closeMenu);
    }

    // FAQ Accordion
    const faqContainers = ['#faq', '#faq-contact'];
    faqContainers.forEach(container => {
        const faqItems = document.querySelectorAll(`${container} .border-b`);
        if (faqItems) {
            faqItems.forEach(item => {
                const button = item.querySelector('button');
                const content = item.querySelector('div');
                const icon = item.querySelector('i');

                if (button && content && icon) {
                    button.addEventListener('click', () => {
                        content.classList.toggle('hidden');
                        icon.classList.toggle('fa-chevron-down');
                        icon.classList.toggle('fa-chevron-up');
                    });
                }
            });
        }
    });

    // Contact Form Validation
    const contactForm = document.querySelector('#main-contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.querySelector('#name').value.trim();
            const email = document.querySelector('#email').value.trim();
            const message = document.querySelector('#message').value.trim();
            const status = document.querySelector('#form-status');

            if (name === '' || email === '' || message === '') {
                status.textContent = 'Por favor, completa todos los campos requeridos.';
                status.className = 'text-red-500 text-center mt-4';
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                status.textContent = 'Por favor, introduce un email válido.';
                status.className = 'text-red-500 text-center mt-4';
                return;
            }

            status.textContent = 'Gracias por tu mensaje. Te contactaremos pronto.';
            status.className = 'text-green-500 text-center mt-4';
            contactForm.reset();
        });
    }

    // Feedback Form
    const feedbackForm = document.querySelector('#feedback-form');
    if(feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const feedbackMessage = document.querySelector('#feedback-message');
            if (feedbackMessage.value.trim() !== '') {
                alert('¡Gracias por tu sugerencia!');
                feedbackMessage.value = '';
            }
        });
    }


    // GSAP and ScrollTrigger initialization
    gsap.registerPlugin(ScrollTrigger);
    
    // Example GSAP animation
    gsap.from('.hero-text', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        stagger: 0.2
    });


    // AOS Initialization
    AOS.init({
        duration: 1000,
        once: true,
    });

    // GLightbox Initialization
    const lightbox = GLightbox({
        selector: '.glightbox'
    });

    // Lenis Initialization for smooth scroll
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Swiper.js Initialization
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 5000,
        },
    });
});