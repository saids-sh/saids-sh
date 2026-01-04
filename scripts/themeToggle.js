// 1. Definimos la función de aplicación fuera para que sea accesible
const applyTheme = () => {
    const body = document.body;
    const themeIcon = document.getElementById('themeIcon');
    const savedTheme = localStorage.getItem('theme') || 'dark';

    if (savedTheme === 'light') {
        body.classList.add('lightTheme');
        if (themeIcon) themeIcon.innerText = '';
    } else {
        body.classList.remove('lightTheme');
        if (themeIcon) themeIcon.innerText = '';
    }
};

// 2. EJECUCIÓN INMEDIATA
// No esperamos al DOMContentLoaded para la clase del body, 
// lo tiramos ni bien carga el script.
if (document.body) {
    applyTheme();
} else {
    // Si por alguna razón el script carga antes que el body tag
    const observer = new MutationObserver(() => {
        if (document.body) {
            applyTheme();
            observer.disconnect();
        }
    });
    observer.observe(document.documentElement, { childList: true });
}

// 3. LÓGICA DEL BOTÓN
// Esto sí espera a que el botón exista
window.addEventListener('DOMContentLoaded', () => {
    const toggleBox = document.getElementById('toggleBox');
    if (toggleBox) {
        toggleBox.addEventListener('click', () => {
            const isLight = document.body.classList.toggle('lightTheme');
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
            applyTheme(); 
        });
    }
});

// const toggleBox = document.getElementById('toggleBox');
// const themeIcon = document.getElementById('themeIcon');
// const body = document.body;

// const currentTheme = localStorage.getItem('theme');

// if (currentTheme === 'light') {
//     body.classList.add('lightTheme');
//     themeIcon.innerText = '';
// }

// toggleBox.addEventListener('click', () => {
//     document.body.classList.toggle('lightTheme');

//     let theme = 'dark';

//     if (document.body.classList.contains('lightTheme')) {
//         theme = 'light';
//         themeIcon.innerText = '';
//     } else {
//         themeIcon.innerText = '';
//     }

//     localStorage.setItem('theme', theme);
// });