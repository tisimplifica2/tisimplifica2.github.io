document.addEventListener('DOMContentLoaded', function() {
    // Alternar a visibilidade dos funcionários no setor
    document.querySelectorAll('.setor').forEach(setor => {
        setor.addEventListener('click', function(event) {
            event.preventDefault();
            const funcionarios = this.nextElementSibling;
            if (funcionarios) {
                const isVisible = funcionarios.style.display === 'flex';
                funcionarios.style.display = isVisible ? 'none' : 'flex';
            }
        });
    });
});

    document.addEventListener('DOMContentLoaded', function() {
        const setores = document.querySelectorAll('.node-link.setor');
        const funcionarios = document.querySelectorAll('.funcionarios');
    
        setores.forEach(setor => {
            setor.addEventListener('click', function(event) {
                event.preventDefault();
    
                // Alterna a visibilidade da lista de funcionários associada
                const associatedFuncionarios = this.nextElementSibling.querySelector('.funcionarios');
                if (associatedFuncionarios) {
                    const isVisible = associatedFuncionarios.style.display === 'flex';
                    associatedFuncionarios.style.display = isVisible ? 'none' : 'flex';
                }
            });
        });
    
document.querySelectorAll('.node-link.funcionario').forEach(button => {
        button.addEventListener('click', function(event) {
                event.preventDefault();
                const subFuncionariosList = this.nextElementSibling;
                if (subFuncionariosList) {
                    subFuncionariosList.style.display = subFuncionariosList.style.display === 'none' ? 'block' : 'none';
                }
        });
    });
});

function adicionarFuncionario(setorSelector, funcionario) {
    const setor = document.querySelector(setorSelector);
    if (setor) {
        const funcionariosList = setor.querySelector('.funcionarios');
        if (funcionariosList) {
            const novoFuncionario = document.createElement('li');
            novoFuncionario.classList.add('tree-node');
            novoFuncionario.innerHTML = `
                <a href="#" class="node-link funcionario funcionario-multisetor">
                    <img src="${funcionario.imagem}" alt="Employee Image" class="node-image">
                    <span class="node-label">${funcionario.nome}</span>
                </a>
            `;
            funcionariosList.appendChild(novoFuncionario);
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var gestaoLink = document.getElementById('gestao-link');
    var gestaoEstagiarios = document.getElementById('gestao-estagiarios');

    gestaoLink.addEventListener('click', function(event) {
        event.preventDefault(); // Evita o comportamento padrão do link

        // Alterna a visibilidade da lista de estagiários
        if (gestaoEstagiarios.style.display === 'none' || gestaoEstagiarios.style.display === '') {
            gestaoEstagiarios.style.display = 'flex';
        } else {
            gestaoEstagiarios.style.display = 'none';
        }
    });
});


