document.addEventListener('DOMContentLoaded', function () {
    // Ocultar inicialmente todos os setores, funcionários, estagiários, coordenadores e "Murilo"
    document.querySelectorAll('.funcionarios').forEach(funcionarios => {
        funcionarios.style.display = 'none';
    });

    document.querySelectorAll('.gestao-estagiarios').forEach(el => {
        el.style.display = 'none';
    });
    document.querySelectorAll('.coordenadores').forEach(el => {
        el.style.display = 'none';
    });

    // Esconder o nó que contém o "Murilo" inicialmente
    document.querySelectorAll('.tree-children').forEach(node => {
        if (node.textContent.includes('Murilo')) {
            node.style.display = 'none';
        }
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

    // Botão de recarregar a página
    const reloadBtn = document.getElementById('reload-btn');
    reloadBtn.addEventListener('click', function () {
        location.reload();
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

    // Alternar a visibilidade dos sub-funcionários
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
                const isEstagiariosVisible = estagiarios.style.display === 'flex' || estagiarios.style.display === 'block';
                estagiarios.style.display = isEstagiariosVisible ? 'none' : 'flex';
            }
        });
    });

    // Adicionar a funcionalidade de "Mostrar Tudo"
    const mostrarTudoBtn = document.getElementById('mostrar-tudo');
    
    mostrarTudoBtn.addEventListener('click', function () {
        document.querySelectorAll('.gestao-estagiarios').forEach(el => {
            el.style.display = 'flex';
        });
        document.querySelectorAll('.coordenadores').forEach(el => {
            el.style.display = 'flex';
        });

        document.querySelectorAll('.funcionarios').forEach(funcionarios => {
            funcionarios.style.display = 'flex';
        });

        // Mostrar todos os sub-funcionários, exceto o Murilo
        document.querySelectorAll('.sub-funcionarios').forEach(el => {
            if (!el.querySelector('.node-link').textContent.includes('Murilo')) {
                el.style.display = 'flex';
            }
        });
    });


    // Filtro por texto
    const setorFilter = document.getElementById('setor-filter');
    const dropdownContent = document.getElementById('dropdown-content');

    setorFilter.addEventListener('input', function () {
        const filterValue = this.value.toLowerCase();
        const setores = document.querySelectorAll('.node-link.setor, .node-link.parceiro-setor');

        // Reinicializar a visibilidade dos setores e seus filhos
        document.querySelectorAll('.tree-node').forEach(node => {
            node.style.display = 'none';
        });

        setores.forEach(setor => {
            const spanText = setor.querySelector('span.node-label').textContent.toLowerCase();
            if (spanText.includes(filterValue)) {
                // Exibe setor e seus filhos
                const treeNode = setor.closest('.tree-node');
                treeNode.style.display = 'flex';

                // Exibir todos os filhos do setor, funcionários e coordenadores
                const childNodes = treeNode.querySelectorAll('.tree-node, .funcionarios, .coordenadores');
                childNodes.forEach(child => {
                    child.style.display = 'flex';
                });

                // Exibir os elementos pais para manter a estrutura visível
                let parentNode = treeNode.parentElement.closest('.tree-node');
                while (parentNode) {
                    parentNode.style.display = 'flex';
                    parentNode = parentNode.parentElement.closest('.tree-node');
                }

                setor.classList.add('setor-filtrado'); // Adiciona a classe para centralização
                centralizarSetor(setor);
            }
        });

        // Garantir que o "Murilo" permaneça oculto mesmo após o filtro
        document.querySelectorAll('.tree-children').forEach(node => {
            if (node.textContent.includes('Murilo')) {
                node.style.display = 'none';
            }
        });
    });

    // Filtro por dropdown
    dropdownContent.addEventListener('click', function (event) {
        if (event.target.tagName === 'A') {
            const filterValue = event.target.dataset.text.toLowerCase();
            setorFilter.value = event.target.textContent;
            const setores = document.querySelectorAll('.node-link.setor, .node-link.parceiro-setor');

            // Reinicializar a visibilidade dos setores e seus filhos
            document.querySelectorAll('.tree-node').forEach(node => {
                node.style.display = 'none';
            });

            setores.forEach(setor => {
                const spanText = setor.querySelector('span.node-label').textContent.toLowerCase();
                if (spanText.includes(filterValue)) {
                    // Exibe setor e seus filhos
                    const treeNode = setor.closest('.tree-node');
                    treeNode.style.display = 'flex';

                    // Exibir todos os filhos do setor, funcionários e coordenadores
                    const childNodes = treeNode.querySelectorAll('.tree-node, .funcionarios, .coordenadores');
                    childNodes.forEach(child => {
                        child.style.display = 'flex';
                    });

                    // Exibir os elementos pais para manter a estrutura visível
                    let parentNode = treeNode.parentElement.closest('.tree-node');
                    while (parentNode) {
                        parentNode.style.display = 'flex';
                        parentNode = parentNode.parentElement.closest('.tree-node');
                    }

                    setor.classList.add('setor-filtrado'); // Adiciona a classe para centralização
                    centralizarSetor(setor);
                }
            });

            // Garantir que o "Murilo" permaneça oculto mesmo após o filtro
            document.querySelectorAll('.tree-children').forEach(node => {
                if (node.textContent.includes('Murilo')) {
                    node.style.display = 'none';
                }
            });

            // Fechar o dropdown após selecionar uma opção
            dropdownContent.classList.remove('show');
        }
    });

    // Função para centralizar o setor filtrado
    function centralizarSetor(setor) {
        const container = document.querySelector('.container');
        const treeNode = setor.closest('.tree-node');
        const nodeRect = treeNode.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        // Ajuste os valores de margem conforme necessário
        const margemHorizontal = 100; // Ajuste a margem horizontal
        const margemVertical = 50; // Ajuste a margem vertical

        // Centralizar horizontalmente com margem
        const offsetX = (containerRect.width - nodeRect.width) / 2 - (nodeRect.left - containerRect.left) + margemHorizontal;
        // Centralizar verticalmente com margem
        const offsetY = (containerRect.height - nodeRect.height) / 2 - (nodeRect.top - containerRect.top) + margemVertical;

        container.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    }
});

function filtrar(turno) {
    const matutinoNodes = document.querySelectorAll('.tree-node-matutino');
    const vespertinoNodes = document.querySelectorAll('.tree-node-vespertino');

    if (turno === 'matutino') {
        matutinoNodes.forEach(node => node.style.display = 'block');
        vespertinoNodes.forEach(node => node.style.display = 'none');
    } else if (turno === 'vespertino') {
        matutinoNodes.forEach(node => node.style.display = 'none');
        vespertinoNodes.forEach(node => node.style.display = 'block');
    } else {
        matutinoNodes.forEach(node => node.style.display = 'block');
        vespertinoNodes.forEach(node => node.style.display = 'block');
    }
}
