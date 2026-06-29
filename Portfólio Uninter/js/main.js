/* JavaScript compartilhado entre todas as páginas - Rafael de Barros */

// Marca o link ativo no menu conforme a página atual
function marcarLinkAtivo() {
    var paginaAtual = window.location.pathname.split('/').pop();
    if (paginaAtual === '') paginaAtual = 'index.html';

    var links = document.querySelectorAll('nav a');
    for (var i = 0; i < links.length; i++) {
        if (links[i].getAttribute('href') === paginaAtual) {
            links[i].classList.add('ativo');
        }
    }
}

// Alternância de tema claro/escuro
function configurarTema() {
    var btn = document.getElementById('btn-tema');
    if (!btn) return;

    // Verifica se o usuário já tinha escolhido um tema antes
    var temaSalvo = localStorage.getItem('tema');
    if (temaSalvo === 'escuro') {
        document.body.classList.add('escuro');
        btn.textContent = '☀️ Tema Claro';
    }

    btn.addEventListener('click', function() {
        document.body.classList.toggle('escuro');

        if (document.body.classList.contains('escuro')) {
            btn.textContent = '☀️ Tema Claro';
            localStorage.setItem('tema', 'escuro');
        } else {
            btn.textContent = '🌙 Tema Escuro';
            localStorage.setItem('tema', 'claro');
        }
    });
}

// Menu hamburguer para celular
function configurarMenuMobile() {
    var btnMenu = document.getElementById('btn-menu');
    var linksNav = document.querySelector('.links-nav');
    if (!btnMenu || !linksNav) return;

    btnMenu.addEventListener('click', function() {
        linksNav.classList.toggle('aberto');
    });
}

// Executa tudo quando a página terminar de carregar
window.onload = function() {
    marcarLinkAtivo();
    configurarTema();
    configurarMenuMobile();
};
