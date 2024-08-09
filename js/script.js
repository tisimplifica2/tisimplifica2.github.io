document.addEventListener('DOMContentLoaded', function () {
    // Ocultar inicialmente todos os setores e funcionários
    document.querySelectorAll('.funcionarios').forEach(funcionarios => {
        funcionarios.style.display = 'none';
    });

    // Ocultar inicialmente estagiários e coordenadores
    document.querySelectorAll('.gestao-estagiarios').forEach(el => {
        el.style.display = 'none';
    });
    document.querySelectorAll('.coordenadores').forEach(el => {
        el.style.display = 'none';
    });

    // Alternar a visibilidade dos funcionários no setor
    document.querySelectorAll('.node-link.setor').forEach(setor => {
        setor.addEventListener('click', function (event) {
            event.preventDefault();
            const nextUl = this.nextElementSibling;
            if (nextUl) {
                const isVisible = nextUl.style.display === 'flex' || nextUl.style.display === 'block';
                nextUl.style.display = isVisible ? 'none' : 'flex';
            }
        });
    });

    // Alternar a visibilidade dos funcionários do setor de gestão
    const gestaoLink = document.getElementById('gestao-link');
    const gestaoEstagiarios = document.getElementById('gestao-estagiarios');
    const gestaoCoordenadores = document.getElementById('coordenadores');

    gestaoLink.addEventListener('click', function (event) {
        event.preventDefault();

        const isEstagiariosVisible = gestaoEstagiarios.style.display === 'flex' || gestaoEstagiarios.style.display === 'block';
        gestaoEstagiarios.style.display = isEstagiariosVisible ? 'none' : 'flex';

        const isCoordenadoresVisible = gestaoCoordenadores.style.display === 'flex' || gestaoCoordenadores.style.display === 'block';
        gestaoCoordenadores.style.display = isCoordenadoresVisible ? 'none' : 'flex';
    });

    document.querySelectorAll('.node-link.funcionario').forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const subFuncionariosList = this.nextElementSibling;
            if (subFuncionariosList) {
                subFuncionariosList.style.display = subFuncionariosList.style.display === 'none' || subFuncionariosList.style.display === '' ? 'block' : 'none';
            }
        });
    });

    // Mostrar estagiários ao clicar em um coordenador
    document.querySelectorAll('.coordenadores .node-link').forEach(coordenador => {
        coordenador.addEventListener('click', function (event) {
            event.preventDefault();
            const estagiarios = this.closest('li.tree-node').querySelector('.funcionarios');
            if (estagiarios) {
                // Alterna a visibilidade dos estagiários
                const isEstagiariosVisible = estagiarios.style.display === 'flex' || estagiarios.style.display === 'block';
                estagiarios.style.display = isEstagiariosVisible ? 'none' : 'flex';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    function ajustarSubSubFuncionarios() {
        document.querySelectorAll('.sub-sub-funcionarios').forEach(container => {
            const items = container.querySelectorAll('.tree-node');
            if (items.length > 3) {
                // Adiciona uma classe se há mais de 3 itens
                container.classList.add('wrap');
            } else {
                // Remove a classe se há 3 ou menos itens
                container.classList.remove('wrap');
            }
        });
    }

    ajustarSubSubFuncionarios();
});

