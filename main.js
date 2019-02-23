(function() {

    // Variaveis globais
    var textTarefa = document.querySelector('#textTarefa');
    var filtroTodas = document.querySelector('#filtro-todas');
    var filtroPendentes = document.querySelector('#filtro-pendentes');
    var filtroConcluidas = document.querySelector('#filtro-concluidas');

    function onKeyUpTextTarefa(event) {
        if (event.keyCode === 13 && textTarefa.value != '') {
            var tarefa = new Tarefa(textTarefa.value.trim());
            var controller = new TarefaController();
            controller.inserirTarefa(tarefa);
            controller.carregarTarefas();
            textTarefa.value = '';
        }
    }

    function limpaClasseFiltroSelecionado() {
        filtroPendentes.className = '';
        filtroConcluidas.className = '';
        filtroTodas.className = '';
    }

    // TODAS
    function onClickFiltroTodas(event) {
        window.filtro = 'todas';
        limpaClasseFiltroSelecionado();
        filtroTodas.className = 'filtro-selecionado';
        let controller = new TarefaController();
        controller.carregarTarefas();
    }

    // PENDENTES
    function onClickFiltroPendentes(event) {
        window.filtro = 'pendentes';
        limpaClasseFiltroSelecionado();
        filtroPendentes.className = 'filtro-selecionado';
        let controller = new TarefaController();
        controller.carregarTarefas();
    }

    // CONCLUIDAS
    function onClickFiltroConcluidas(event) {
        window.filtro = 'concluidas';
        limpaClasseFiltroSelecionado();
        filtroConcluidas.className = 'filtro-selecionado';
        let controller = new TarefaController();
        controller.carregarTarefas();
    }

    // Eventos
    textTarefa.addEventListener('keyup', onKeyUpTextTarefa, false);
    filtroTodas.addEventListener('click', onClickFiltroTodas, false);
    filtroPendentes.addEventListener('click', onClickFiltroPendentes, false);
    filtroConcluidas.addEventListener('click', onClickFiltroConcluidas, false);

    window.onload = () => {
        window.filtro = 'pendentes';
        filtroPendentes.className = 'filtro-selecionado';
        var controller = new TarefaController();
        controller.carregarTarefas();
    };

})();