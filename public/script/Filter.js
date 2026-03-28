function aplicarFiltros() {
    const checkboxes = document.querySelectorAll('.checkbox-filter');
    const filtrosSelecionados = [];

    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            filtrosSelecionados.push(checkbox.value);
        }
    });

    console.log("Filtros ativos:", filtrosSelecionados);
}

const todosOsCheckboxes = document.querySelectorAll('.checkbox-filter');

todosOsCheckboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', aplicarFiltros);
});