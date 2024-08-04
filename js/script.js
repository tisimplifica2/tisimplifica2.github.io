document.addEventListener('DOMContentLoaded', function() {
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
});