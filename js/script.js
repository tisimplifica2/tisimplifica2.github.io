document.addEventListener('DOMContentLoaded', function() {
    const coordenadores = document.querySelectorAll('.coordenador');
    const funcionarios = document.querySelector('.funcionarios');

    coordenadores.forEach(coordenador => {
        coordenador.addEventListener('click', function(event) {
            event.preventDefault();

            // Alterna a visibilidade da lista de funcionários
            if (funcionarios) {
                const isVisible = funcionarios.style.display === 'flex';
                funcionarios.style.display = isVisible ? 'none' : 'flex';
            }
        });
    });
});
