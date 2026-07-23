// Seleção dos elementos no HTML
const modal = document.getElementById('modalAviso');
const btnAbrir = document.getElementById('btnAbrirModal');
const btnCancelar = document.getElementById('btnCancelar');
const btnConfirmar = document.getElementById('btnConfirmar');

// Função para abrir o modal
btnAbrir.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

// Função para fechar o modal
const fecharModal = () => {
    modal.classList.add('hidden');
};

btnCancelar.addEventListener('click', fecharModal);
btnConfirmar.addEventListener('click', () => {
    alert('Aviso aceito!');
    fecharModal();
});

// Fechar se clicar fora da caixa do modal
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        fecharModal();
    }
});