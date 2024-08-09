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

    // Adicionar a funcionalidade de "Mostrar Tudo"
    const mostrarTudoBtn = document.getElementById('mostrar-tudo');
    
    mostrarTudoBtn.addEventListener('click', function () {
        // Mostrar todos os setores
        document.querySelectorAll('.funcionarios').forEach(funcionarios => {
            funcionarios.style.display = 'flex';
        });
        
        // Mostrar todos os estagiários e coordenadores
        document.querySelectorAll('.gestao-estagiarios').forEach(el => {
            el.style.display = 'flex';
        });
        document.querySelectorAll('.coordenadores').forEach(el => {
            el.style.display = 'flex';
        });
        
        // Mostrar todos os sub-funcionários
        document.querySelectorAll('.sub-funcionarios').forEach(el => {
            el.style.display = 'block';
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
            // Obtenha o campo de filtro
            const setorFilter = document.getElementById('setor-filter');

            // Adicione um evento para quando o texto do filtro mudar
            setorFilter.addEventListener('input', function () {
                // Obtenha o valor do filtro
                const filterValue = this.value.toLowerCase();

                // Selecione todos os setores e parceiros
                const setores = document.querySelectorAll('.node-link.setor, .node-link.parceiro-setor');

                // Itere sobre todos os setores e parceiros
                setores.forEach(setor => {
                    // Obtenha o texto do <span> dentro do setor ou parceiro
                    const spanText = setor.querySelector('span.node-label').textContent.toLowerCase();

                    // Verifique se o texto do setor ou parceiro contém o valor do filtro
                    if (spanText.includes(filterValue)) {
                        setor.style.display = 'flex'; // Exibe se corresponder ao filtro
                    } else {
                        setor.style.display = 'none'; // Oculta se não corresponder ao filtro
                    }
                });
            });
        });