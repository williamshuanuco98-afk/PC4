// JS Interactivity - Reuse Market

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu / Sidebar Filter Panel
    const filterBtn = document.getElementById('mobile-filter-btn');
    const closeFilterBtn = document.getElementById('close-filter-btn');
    const sidebarFilter = document.getElementById('sidebar-filter');
    const overlay = document.getElementById('sidebar-overlay');

    if (filterBtn && sidebarFilter && overlay) {
        const toggleFilter = () => {
            sidebarFilter.classList.toggle('translate-x-0');
            sidebarFilter.classList.toggle('-translate-x-full');
            overlay.classList.toggle('hidden');
        };

        filterBtn.addEventListener('click', toggleFilter);
        if (closeFilterBtn) closeFilterBtn.addEventListener('click', toggleFilter);
        overlay.addEventListener('click', toggleFilter);
    }

    // 2. Toast Notifications
    window.showTailwindToast = (message) => {
        const container = document.getElementById('toast-container');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = "bg-emerald-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center justify-between gap-4 animate-bounce";
        toast.innerHTML = `
            <span>${message}</span>
            <button class="text-white hover:text-emerald-200" onclick="this.parentElement.remove()">&times;</button>
        `;
        container.appendChild(toast);
        setTimeout(() => toast.remove(), 4000);
    };

    // 3. Fake Forms
    const forms = document.querySelectorAll('form[data-ajax-fake]');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const msg = form.getAttribute('data-success-msg') || 'Operación exitosa';
            window.showTailwindToast(msg);
            form.reset();
        });
    });
});
