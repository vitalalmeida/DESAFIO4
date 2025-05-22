// Script para implementar o redirecionamento ao sair do dashboard

document.addEventListener('DOMContentLoaded', function() {
    // Obter o botão de sair
    const btnSair = document.getElementById('btn-sair');
    
    // Adicionar evento de clique
    if (btnSair) {
        btnSair.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Mostrar confirmação
            const confirmacao = confirm('Deseja realmente sair do dashboard?');
            
            // Se confirmado, redirecionar para o DESAFIO 4.html
            if (confirmacao) {
                window.location.href = '../DESAFIO 4.html';
            }
        });
    }
});
