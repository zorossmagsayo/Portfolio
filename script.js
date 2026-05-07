const setTheme = (isLight) => {
    document.body.classList.toggle('light-mode', isLight);
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
};

setTheme(localStorage.getItem('theme') === 'light');

document.getElementById('theme-toggle')?.addEventListener('click', () => {
    setTheme(!document.body.classList.contains('light-mode'));
});

document.querySelectorAll('.portfolio-card').forEach((card) => {
    card.addEventListener('mouseleave', () => {
        card.querySelectorAll('.project-modal[open]').forEach((modal) => {
            modal.open = false;
        });
    });
});
