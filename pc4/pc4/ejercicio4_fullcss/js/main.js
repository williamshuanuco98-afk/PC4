/* ==========================================================================
   INTERACCIONES BASICAS - CIUDAD VIVA
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('fade-out');
        }, 600);
    }

    const menuToggle = document.getElementById('menu-toggle');
    const navMobile = document.getElementById('nav-mobile');
    const navOverlay = document.getElementById('nav-mobile-overlay');

    if (menuToggle && navMobile && navOverlay) {
        const toggleMenu = () => {
            menuToggle.classList.toggle('active');
            navMobile.classList.toggle('active');
            navOverlay.classList.toggle('active');
        };

        menuToggle.addEventListener('click', toggleMenu);
        navOverlay.addEventListener('click', toggleMenu);
        
        const mobileLinks = navMobile.querySelectorAll('.nav-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMobile.classList.contains('active')) {
                    toggleMenu();
                }
            });
        });
    }

    const setupTabs = () => {
        const tabButtons = document.querySelectorAll('.tab-btn');
        tabButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const tabGroup = btn.getAttribute('data-tab-group') || 'default';
                const targetId = btn.getAttribute('data-tab-target');
                
                document.querySelectorAll(`.tab-btn[data-tab-group="${tabGroup}"]`).forEach(b => {
                    b.classList.remove('active');
                });
                
                document.querySelectorAll(`.tab-pane[data-tab-group="${tabGroup}"]`).forEach(pane => {
                    pane.classList.remove('active');
                });

                btn.classList.add('active');
                const targetPane = document.getElementById(targetId);
                if (targetPane) {
                    targetPane.classList.add('active');
                }
            });
        });
    };
    setupTabs();

    window.openModal = (modalId) => {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeModal = (modalId) => {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                const id = modal.getAttribute('id');
                window.closeModal(id);
            }
        });
    });

    window.showToast = (message, type = 'success') => {
        const container = document.getElementById('toast-container');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `
            <span>${message}</span>
            <span style="cursor:pointer;" onclick="this.parentElement.remove()">&times;</span>
        `;
        
        container.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('show');
        }, 10);

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 4000);
    };

    const startCountdown = () => {
        const daysEl = document.getElementById('countdown-days');
        const hoursEl = document.getElementById('countdown-hours');
        const minsEl = document.getElementById('countdown-mins');
        const secsEl = document.getElementById('countdown-secs');

        if (!daysEl) return;

        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 15);
        targetDate.setHours(20, 0, 0, 0);

        const updateClock = () => {
            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;

            if (distance < 0) {
                clearInterval(interval);
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            daysEl.innerText = String(days).padStart(2, '0');
            hoursEl.innerText = String(hours).padStart(2, '0');
            minsEl.innerText = String(minutes).padStart(2, '0');
            secsEl.innerText = String(seconds).padStart(2, '0');
        };

        updateClock();
        const interval = setInterval(updateClock, 1000);
    };
    startCountdown();

    const setupSearchFilter = () => {
        const searchInput = document.getElementById('search-input');
        if (!searchInput) return;

        searchInput.addEventListener('input', (e) => {
            const val = e.target.value.toLowerCase().trim();
            const filterCards = document.querySelectorAll('.filterable-card');

            filterCards.forEach(card => {
                const title = card.querySelector('.filterable-title').innerText.toLowerCase();
                const desc = card.querySelector('.filterable-desc')?.innerText.toLowerCase() || '';
                
                if (title.includes(val) || desc.includes(val)) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    };
    setupSearchFilter();

    const setupFormSubmits = () => {
        const forms = document.querySelectorAll('form[data-ajax-fake]');
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const successMsg = form.getAttribute('data-success-msg') || 'Operación exitosa';
                window.showToast(successMsg, 'success');
                form.reset();
            });
        });
    };
    setupFormSubmits();
});
