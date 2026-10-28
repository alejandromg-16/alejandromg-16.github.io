const raiz = document.documentElement;
const boton = document.getElementById('boton-tema');

function aplicarTema(tema) {
    raiz.setAttribute('data-theme', tema);
    boton.textContent = tema === 'dark' ? '☀️ Modo claro' : '🌙 Modo oscuro';
    try {
        localStorage.setItem('tema', tema);
    } catch (e) {}
}

let guardado = 'light';
try {
    guardado = localStorage.getItem('tema') || 'light';
} catch (e) {}
aplicarTema(guardado);

boton.addEventListener('click', function () {
    aplicarTema(raiz.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});
