// JS Interactivity & Initializations - Salud 360

document.addEventListener('DOMContentLoaded', () => {
    // 1. Ocultar Preloader
    const loader = document.getElementById('preloader-wrapper');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('fade-out');
        }, 500);
    }

    // 2. Inicializar Materialize Sidenav (Menú Móvil)
    const sidenavs = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenavs, { edge: 'right' });

    // 3. Inicializar Tabs (Pestañas)
    const tabs = document.querySelectorAll('.tabs');
    M.Tabs.init(tabs);

    // 4. Inicializar Modales
    const modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    // 5. Inicializar Collapsibles (Acordeones FAQ)
    const collapsibles = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsibles);

    // 6. Inicializar Form Selects (Dropdowns)
    const selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);

    // 7. Inicializar Datepicker
    const datepickers = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepickers, {
        format: 'dd/mm/yyyy',
        autoClose: true,
        i18n: {
            cancel: 'Cancelar',
            clear: 'Limpiar',
            done: 'Aceptar',
            months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            monthsShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
            weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
            weekdaysAbbrev: ['D', 'L', 'M', 'M', 'J', 'V', 'S']
        }
    });

    // 8. Inicializar Timepicker
    const timepickers = document.querySelectorAll('.timepicker');
    M.Timepicker.init(timepickers, {
        twelveHour: false,
        autoClose: true
    });

    // 9. Toast de reserva y simulaciones
    window.showMaterialToast = (message) => {
        M.toast({ html: message, classes: 'rounded light-blue' });
    };

    const forms = document.querySelectorAll('form[data-ajax-fake]');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const msg = form.getAttribute('data-success-msg') || 'Operación exitosa';
            window.showMaterialToast(msg);
            form.reset();
        });
    });
});
