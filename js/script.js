const nodes = document.querySelectorAll('.tree-node > .node-link');

nodes.forEach(node => {
    node.addEventListener('click', function(event) {
        event.preventDefault();
        const children = this.nextElementSibling;

        if (children) {
            children.style.display = children.style.display === 'none' ? 'block' : 'none';
        }
    });
});

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
