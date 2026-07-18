// JS Interactivity - Technova Summit 2026

document.addEventListener('DOMContentLoaded', () => {
    const daysEl = document.getElementById('cd-days');
    const hoursEl = document.getElementById('cd-hours');
    const minsEl = document.getElementById('cd-mins');
    const secsEl = document.getElementById('cd-secs');

    if (daysEl) {
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 10);
        targetDate.setHours(9, 0, 0, 0);

        const updateClock = () => {
            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;

            if (distance < 0) return;

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
        setInterval(updateClock, 1000);
    }

    window.showBootstrapToast = (message) => {
        const toastEl = document.getElementById('liveToast');
        if (toastEl) {
            const toastBody = toastEl.querySelector('.toast-body');
            toastBody.innerText = message;
            const toast = new bootstrap.Toast(toastEl);
            toast.show();
        }
    };

    const forms = document.querySelectorAll('form[data-ajax-fake]');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const successMsg = form.getAttribute('data-success-msg') || 'Operación realizada con éxito';
            window.showBootstrapToast(successMsg);
            form.reset();
        });
    });
});
