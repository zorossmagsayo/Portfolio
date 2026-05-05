document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('theme-toggle');
    const updateTheme = (isLight) => {
        document.body.classList.toggle('light-mode', isLight);
        toggle.src = isLight ? 'night.png' : 'night.png';
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    };
    updateTheme(localStorage.getItem('theme') === 'light');
    toggle?.addEventListener('click', () => updateTheme(document.body.classList.toggle('light-mode')));
});



document.querySelectorAll(".portfolio-card").forEach((card) => {
    card.addEventListener("mouseleave", () => {
        card.querySelectorAll(".project-modal[open]").forEach((modal) => {
            modal.removeAttribute("open");
        });
    });
});
