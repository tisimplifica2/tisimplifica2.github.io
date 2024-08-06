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

document.addEventListener("DOMContentLoaded", function() {
    function drawLine(fromElement, toElement) {
        const fromRect = fromElement.getBoundingClientRect();
        const toRect = toElement.getBoundingClientRect();
        
        const containerRect = document.querySelector('.container').getBoundingClientRect();
        
        const fromX = fromRect.left - containerRect.left + fromRect.width / 2;
        const fromY = fromRect.bottom - containerRect.top;
        const toX = toRect.left - containerRect.left + toRect.width / 2;
        const toY = toRect.top - containerRect.top;
        
        const line = document.createElement('div');
        line.className = 'line';
        document.querySelector('.container').appendChild(line);
        
        line.style.left = Math.min(fromX, toX) + 'px';
        line.style.top = Math.min(fromY, toY) + 'px';
        line.style.width = Math.abs(fromX - toX) + 'px';
        line.style.height = Math.abs(fromY - toY) + 'px';
        line.style.transform = `rotate(${Math.atan2(toY - fromY, toX - fromX) * 180 / Math.PI}deg)`;
    }

    const funcionario2 = document.getElementById('funcionario2');
    const receita = document.getElementById('receita');
    const identidade = document.getElementById('identidade');
    
    drawLine(funcionario2, receita);
    drawLine(funcionario2, identidade);
});
