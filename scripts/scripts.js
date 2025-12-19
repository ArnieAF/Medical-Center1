// Menú móvil
        document.addEventListener('DOMContentLoaded', function () {
            const toggle = document.querySelector('.nav-toggle');
            const nav = document.querySelector('.nav');
            const overlay = document.getElementById('overlay');

            if (!toggle || !nav || !overlay) return;

            toggle.addEventListener('click', function () {
                nav.classList.toggle('nav--open');
                overlay.classList.toggle('overlay--active');
            });

            overlay.addEventListener('click', function () {
                nav.classList.remove('nav--open');
                overlay.classList.remove('overlay--active');
            });
        });

        // Testimonios slider
        (function () {
            const cards = document.querySelectorAll('.testimonial-card');
            const btnPrev = document.querySelector('.arrow-left');
            const btnNext = document.querySelector('.arrow-right');

            if (!cards.length || !btnPrev || !btnNext) return;

            let currentIndex = 0;

            function showCard(index) {
                cards.forEach((card, i) => {
                    card.classList.toggle('active', i === index);
                });
            }

            showCard(currentIndex);

            btnNext.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % cards.length;
                showCard(currentIndex);
            });

            btnPrev.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + cards.length) % cards.length;
                showCard(currentIndex);
            });
        })();