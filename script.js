document.addEventListener('DOMContentLoaded', function() {
    // Animation des sections au chargement
    const animateSections = () => {
        const sections = document.querySelectorAll('section');
        sections.forEach((section, index) => {
            setTimeout(() => {
                section.style.opacity = '1';
            }, 100 * index);
        });
    };

    // Initialiser les sections avec opacity 0
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transition = 'opacity 0.5s ease';
    });

    // Animer les sections au chargement
    animateSections();

    // Slider de témoignages
    const setupTestimonialSlider = () => {
        const slides = document.querySelectorAll('.testimonial-slide');
        const dots = document.querySelectorAll('.dot');
        const prevBtn = document.querySelector('.left-nav');
        const nextBtn = document.querySelector('.right-nav');
        let currentSlide = 0;

        // Fonction pour afficher un slide spécifique
        const showSlide = (n) => {
            // Cacher tous les slides
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            // Calculer l'index avec boucle
            currentSlide = (n + slides.length) % slides.length;
            
            // Afficher le slide actif
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        };

        // Événements pour les boutons de navigation
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                showSlide(currentSlide - 1);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                showSlide(currentSlide + 1);
            });
        }

        // Événements pour les points de navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
            });
        });

        // Auto-rotation des slides toutes les 5 secondes
        setInterval(() => {
            showSlide(currentSlide + 1);
        }, 5000);
    };

    // Initialiser le slider s'il existe
    if (document.querySelector('.testimonial-slider')) {
        setupTestimonialSlider();
    }

    // Gestion des boutons orange
    const setupButtons = () => {
        const buttons = document.querySelectorAll('.orange-btn');
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                // Empêcher la navigation pour cette maquette
                e.preventDefault();
                
                // Animation de clic
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 200);
            });
        });
    };

    setupButtons();

    // Simuler un lecteur vidéo
    const setupVideoPlayers = () => {
        const playButtons = document.querySelectorAll('.play-button');
        playButtons.forEach(button => {
            button.addEventListener('click', function() {
                const videoCard = this.closest('.video-card');
                const placeholder = this.closest('.video-placeholder');
                
                // Simulation d'un clic sur le bouton play
                this.innerHTML = '<i class="fas fa-pause"></i>';
                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-play"></i>';
                }, 2000);
                
                // Animation de "lecture vidéo"
                placeholder.style.backgroundColor = '#000';
                placeholder.style.color = '#fff';
                
                setTimeout(() => {
                    placeholder.style.backgroundColor = '';
                    placeholder.style.color = '';
                }, 2000);
            });
        });
    };

    setupVideoPlayers();

    // Navigation fluide
    const setupSmoothScroll = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const target = document.querySelector(targetId);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
    };

    setupSmoothScroll();
});
